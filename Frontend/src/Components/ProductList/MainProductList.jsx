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
    setCurrentPage(e);
  };


  return (
    <>
      <MetaData title="Product lists" />

      <ProductListHeading>
        <h1>Velvet Affairs</h1>
        <button className="btn-f">Furniture</button>
      </ProductListHeading>

      <br />


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

      <Footer />

    </>
  );
};

export default MainProductList;
