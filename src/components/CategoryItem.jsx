import styled from "styled-components"

const Container = styled.div`
    flex: 1;
    margin: 5px;
    height: 60vh;
    /* position: relative; */
`
const Image = styled.img`
    width: 100%;
    height: 100%;
    /* object-fit: cover; */
`
const Info = styled.p`
    /* position: absolute; */
    /* top: 0; */
    /* left: 0; */
    /* width: 100%; */
    /* height: 100%; */
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
const Title = styled.h1`
    /* color: white; */
    /* margin-bottom: 20px; */
`
const Button = styled.button`
    color: black;
    font-weight: 600;
    padding: 10px;
    font-size: 20px;
    background-color: transparent;
    cursor: pointer;

    &:hover{
        background-color: #ff8b07;
    }
`

const CategoryItem = ({item}) => {
  return (
    <Container>
        <Image src={item.image}/>
        <Info>
            <Title>{item.title}</Title>
        <Button>SHOP NOW</Button>
        </Info>
    </Container>
  )
}

export default CategoryItem