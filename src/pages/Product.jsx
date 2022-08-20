import { Add, Remove } from "@material-ui/icons"
import styled from "styled-components"
import Announcement from "../components/Announcement"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import Newsletter from "../components/Newsletter"
import { mobile } from '../responsive';

const Container = styled.div`

`;

const Wrapper = styled.div`
    padding: 50px;
    display: flex;
    ${mobile({flexDirection: 'column', padding: '10px'})}
`;

const ImgContainer = styled.div`
    flex: 1;
`;

const Image = styled.img`
    width: 100%;
    height: 90vh;
    object-fit: cover;
    ${mobile({height: '40vh'})}
`;

const InfoContainer = styled.div`
    flex: 1;
    padding: 0px 50px;
    ${mobile({padding: '10px'})}
`;

const Title = styled.h1`
    font-weight: 200;
`;

const Desc = styled.p`
    margin: 20px 0px;
`;

const Price = styled.span`
    font-weight: 100;
    font-size: 40px;
`;

const FilterContainer = styled.div`
    display: flex;
    width: 50%;
    margin: 30px;
    justify-content: space-between;
    ${mobile({width: '100%', margin: '30px 0px'})}
`;

const Filter = styled.div`
    display: flex;
    align-items: center;
`;

const FilterTitle = styled.span`
    font-style: 20px;
    font-weight: 200;
`;

const FilterColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${props => props.color};
    margin: 0px 5px;
    border: 1px solid black;
    cursor: pointer;
`;

const FilterSize = styled.select`
    margin-left: 10px;
    padding: 5px;

`;

const FilterSizOption = styled.option``;

const AddContainer = styled.div`
    display: flex;
    align-items: center;
    width: 50%;
    justify-content: space-between;
    ${mobile({width: '100%'})}
`;

const AmountContainer = styled.div`
    display: flex;
    align-items: center;
    font-weight: 700;
`;

const Amount = styled.span`
    width: 30px;
    height: 30px;
    border-radius: 10px;
    border: 1px solid #ff8b07;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0px 5px;
`;

const Button = styled.button`
    padding: 15px;
    border: 2px solid #ff8b07;
    background-color: white;
    cursor: pointer;
    font-weight: 500;

    &:hover{
        background-color: #fad2a4;
    }
`;

const Product = () => {
  return (
    <Container>
        <Navbar />
        <Announcement/>
        <Wrapper>
            <ImgContainer>
            <Image src="/images/jw-1.jpg" />
            </ImgContainer>
            <InfoContainer>
                <Title>Pro Comp Wheels 31 Series Stryker Matte Black Wheel and All-Terrain Milestar Patagonia AT/R Tire Set; 16x8</Title>
                <Desc><b>Sporty and Stylish.</b> The Pro Comp Series 7031 Matte Black Wheel has a rugged, sporty look for your 2007-2018 Jeep Wrangler, but it's also incredibly resilient. The aluminum construction makes for safe wheel when you are off-road, or even on the pavement.</Desc>
                <Price>$ 1,200</Price>
                <FilterContainer>
                    <Filter>
                        <FilterTitle>Color</FilterTitle>
                        <FilterColor color="black" /> 
                        <FilterColor color="white" />
                        <FilterColor color="red" />
                        <FilterColor color="green" />
                        <FilterColor color="blue" />
                    </Filter>
                    <Filter>
                        <FilterTitle>Size</FilterTitle>
                        <FilterSize>
                            <FilterSizOption>15"</FilterSizOption>
                            <FilterSizOption>16"</FilterSizOption>
                            <FilterSizOption>17"</FilterSizOption>
                            <FilterSizOption>18"</FilterSizOption>
                            <FilterSizOption>20"</FilterSizOption>
                        </FilterSize>
                    </Filter>
                </FilterContainer>
                <AddContainer>
                    <AmountContainer>
                        <Remove />
                        <Amount>1</Amount>
                        <Add />
                    </AmountContainer>
                    <Button>Add To Cart</Button>
                </AddContainer>
            </InfoContainer>
        </Wrapper>
        <Newsletter />
        <Footer />
    </Container>
  )
}

export default Product