import React, { useEffect, useState } from "react";
import "../../style/product.css";
import ProductCard from "../ProductList/ProductCard";
import { Button, CircularProgress } from "@mui/material";
import MetaData from "../layout/MetaData";
import Pagination from "react-js-pagination";
import {  getProductByCategory } from "../../Redux/Product/product_action";
import { useSelector, useDispatch } from "react-redux";
import Footer from "../Footer/Footer";
import {
  PaginationWrapper,
  ProductCardList,
  ProductListContainer,
  ProductListHeading,
} from "../ProductList/ProductListCSS";

const Beds = () => {
  const dispatch = useDispatch();
  const { loading, error, products, productsCount, resultPerPage } =
    useSelector((state) => state.products);

  const [brand, setBrand] = React.useState("");
  const [prices, setPrice] = React.useState(50000);
  const [currentPage, setCurrentPage] = useState(1);
  const [category, setCategory] = React.useState("Beds");

  console.log(productsCount)

  useEffect(() => {
    dispatch(getProductByCategory(currentPage, category));
  }, [dispatch, currentPage, category]);

  const setCurrentPageNo = (e) => {
    setCurrentPage(e);
  };


  return (
    <>
      <MetaData title="Product lists" />

      <ProductListHeading>
        <h1>Beds</h1>
      </ProductListHeading>

      <br />

      <ProductListContainer>
        <span className="filter">
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


      {/* {products
              .filter((items) => {
                if ( items.brand.toLowerCase().includes(brand.toLocaleLowerCase()) && items.price < prices) {
                  return items;
                }
              })
              .map((items) => (
                <ProductCard key={items.id} product={items} />
              ))}  */}

      {/* <CircularProgress /> */}
      <Footer/>
    </>
  );
};

export default Beds;