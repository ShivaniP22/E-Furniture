import React, { useEffect, useState } from "react";
import "../../style/product.css";
import ProductCard from "./ProductCard";
import Footer from "../Footer/Footer";
import { Button, CircularProgress } from "@mui/material";
import MetaData from "../layout/MetaData";
import Pagination from "react-js-pagination";
import { getProduct } from "../../Redux/Product/product_action";
import { useSelector, useDispatch } from "react-redux";
import {
  PaginationWrapper,
  ProductCardList,
  ProductListContainer,
  ProductListHeading,
} from "./ProductListCSS";

const MainProductList = () => {
  const dispatch = useDispatch();
  const { loading, error, products, productsCount, resultPerPage } =
    useSelector((state) => state.products);

  const [brand, setBrand] = React.useState("");
  const [prices, setPrice] = React.useState(50000);
  const [currentPage, setCurrentPage] = useState(1);

  console.log(productsCount)

  useEffect(() => {
    dispatch(getProduct(currentPage, prices, brand));
  }, [dispatch, currentPage, prices, brand]);

  const setCurrentPageNo = (e) => {
    console.log(e);
    setCurrentPage(e);
  };


  return (
    <>
      <MetaData title="Product lists" />

      <ProductListHeading>
        <h1>Velvet Affairs</h1>
      </ProductListHeading>

      <br />

      <ProductListContainer>
        <span className="filter">
          <div className="sort">
            <img id="myBanner" src="https://img.freepik.com/premium-vector/modern-furniture-sale-2-color-gradient-clean-background-digital-branding-construction-social-media-instagram-post-design-template_812236-307.jpg" />
          </div>
        </span>
        {products ? <div></div> : <div>No Items</div>}
        <ProductCardList>
          {loading
            ? "..."
            : products &&
              products.map((items) => (
                <ProductCard key={items.id} product={items} loading={loading} />
              ))}
        </ProductCardList>
      </ProductListContainer>

      <PaginationWrapper>
        <Pagination
          activePage={currentPage}
          itemsCountPerPage={resultPerPage}
          totalItemsCount={productsCount}
          onChange={setCurrentPageNo}
          nextPageText="Next"
          prevPageText="Prev"
          firstPageText="1st"
          lastPageText="Last"
          itemClass="page-item"
          linkClass="page-link"
          activeClass="pageItemActive"
          activeLinkClass="pageLinkActive"
        />
      </PaginationWrapper>

    </>
  );
};

export default MainProductList;
