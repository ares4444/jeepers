import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
// import { popularProducts } from "../data";
import Product from "./Product";

const Container = styled.div`
    padding:20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

const Products = ({category, filters, sort}) => {
  console.log(category, filters, sort);
  const [ products, setProducts ] = useState([]);
  const [ filteredProducts, setFilteredProducts ] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(
          category 
          ? `http://localhost:8000/api/products?category=${category}` 
          : "http://localhost:8000/api/products"
          );
        setProducts(res.data);
      } catch (error) {}
    }
    getProducts();
  },[category]);

  useEffect(()=>{
    category && setFilteredProducts(
      products.filter((item)=>{
        return(
          Object.entries(filters).every(([key, value]) => item[key] == value)
        )
      })
    )
    // console.log(filteredProducts)
  }, [products, category, filters])

  useEffect(()=>{
    if (sort === "newest") {
      setFilteredProducts((prev) => 
        [...prev].sort((a, b) => a.createdAt.localeCompare(b.createdAt))
        );
    } else if (sort === "asc") {
      setFilteredProducts((prev) => 
        [...prev].sort((a, b) => a.price - b.price)
        );
    } else {
      setFilteredProducts((prev) => 
        [...prev].sort((a, b) => b.price - a.price)
        );
    }
  }, [sort]);

  return (
    <Container>
        {category 
        ? filteredProducts.map((item) => (
            <Product key={item.id} item={item} />
        )) 
        : products.slice(0, 8).map((item) => (
            <Product key={item.id} item={item} />
      ))}
    </Container>
  );
};

export default Products