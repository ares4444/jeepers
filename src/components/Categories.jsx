import styled from "styled-components"
import { categories } from "../data"
import CategoryItem from "./CategoryItem"

const Container = styled.div`
    display: flex;
    padding: 20px;
    margin: 50px;
    margin-top: 0;
    justify-content: space-between;
`

const Categories = () => {
  return (
    <Container>
        {categories.map(item => (
            <CategoryItem item={item} key={item.id}/>
        ))}
    </Container>
  )
}

export default Categories