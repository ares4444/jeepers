import styled from "styled-components";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Products from "../components/Products";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import { mobile } from '../responsive';

const Container = styled.div`

`;

const Title = styled.h1`
    margin: 20px;
`;

const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;

const Filter = styled.div`
    margin: 2px;
    ${mobile({width: '0px 20px', display: 'flex', flexDirection: 'column'})}
`;

const FilterText = styled.span`
    font-size: 20px;
    font-weight: 600;
    margin-right: 20px;
    ${mobile({marginRight: '0px'})}
`;

const Select = styled.select`
    padding: 10px;
    margin-right: 20px;
    ${mobile({margin: '10px 0px'})}
`;

const Option = styled.option``;

const ProductList = () => {
  return (
    <Container>
        <Navbar />
        <Announcement />
        <Title>Wheels & Accessories</Title>
        <FilterContainer>
            <Filter>
                <FilterText>Filter Products:</FilterText>
                <Select>
                    <Option disable selected>Type</Option>
                    <Option>Accessories</Option>
                    <Option>Wheels</Option>
                    <Option>Rims</Option>
                    <Option>Lift Kits</Option>
                </Select>
                <Select>
                    <Option disable selected>Tire Size</Option>
                    <Option>N/A</Option>
                    <Option>15"</Option>
                    <Option>16"</Option>
                    <Option>17"</Option>
                    <Option>18"</Option>
                    <Option>20"</Option>
                </Select>
            </Filter>
            <Filter>
                <FilterText>Sort Products:</FilterText>
                <Select>
                    <Option disable selected>Newest</Option>
                    <Option>Price (asc)</Option>
                    <Option>Price (desc)</Option>
                </Select>
            </Filter>
        </FilterContainer>
        <Products/>
        <Newsletter/>
        <Footer />
    </Container>
  )
}

export default ProductList