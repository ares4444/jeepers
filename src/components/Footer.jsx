import { Email, Facebook, Instagram, Phone, Pinterest, Room, Twitter } from "@material-ui/icons";
import styled from "styled-components";
import { mobile } from '../responsive';

const Container = styled.div`
   display: flex;
   ${mobile({flexDirection: 'column'})}
`;

const Left = styled.div`
   flex: 1;
   display: flex;
   flex-direction: column;
   padding: 20px;
`;

const Logo = styled.h1`

`;

const Desc = styled.p`
    margin: 20px 0px;
`;

const SocialContainer = styled.div`
    display: flex;
`;

const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${props => props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
`;

const Center = styled.div`
   flex: 1;
   padding: 20px;
   ${mobile({display: 'none'})}
`;

const Title = styled.h3`
    margin-bottom: 30px;
`;

const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`;

const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
`;

const Right = styled.div`
   flex: 1;
   padding: 20px;
   ${mobile({backgroundColor: '#fff8f8'})}
`;

const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
`;

const Payment = styled.img`
    width: 50%;
`;

const Footer = () => {
    return (
        <Container>
            <Left>
                <Logo>JEEPERS</Logo>
                <Desc>We are here to give all the Jeepers and Pavement Princesses out there the best Jeep products at affordable prices. Whether you're trying to challenge yourself on a 45 incline or just cruising the streets on your commute, we got the parts and accessories you need to get you to the top of the hill or the parking lot at Dennis!</Desc>
                <SocialContainer>
                    <SocialIcon color="3B5999">
                        <Facebook />
                    </SocialIcon>
                    <SocialIcon color="E4405F">
                        <Instagram />
                    </SocialIcon>
                    <SocialIcon color="55ACEE">
                        <Twitter />
                    </SocialIcon>
                    <SocialIcon color="E60023">
                        <Pinterest />
                    </SocialIcon>
                </SocialContainer>
            </Left>
            <Center>
                <Title>Links</Title>
                <List>
                    <ListItem>Home</ListItem>
                    <ListItem>My Account</ListItem>
                    <ListItem>Accessories</ListItem>
                    <ListItem>Wheels and Rims</ListItem>
                    <ListItem>Lift Kits</ListItem>
                    <ListItem>Cart</ListItem>
                    <ListItem>Order Tracking</ListItem>
                    <ListItem>Wishlists</ListItem>
                    <ListItem>Terms</ListItem>
                    <ListItem>Careers</ListItem>
                </List>
            </Center>
            <Right>
                <Title>Contact</Title>
                <ContactItem><Room style={{marginRight:"10px"}} />123 Main St. Beverly Hills, CA 90210</ContactItem>
                <ContactItem><Phone style={{marginRight:"10px"}} /> +1 101 123 4567</ContactItem>
                <ContactItem><Email style={{marginRight:"10px"}} /> jeepers@email.dev</ContactItem>
                <Payment src="/images/payment-image.png" alt="Payment"/>
            </Right>
        </Container>
    )
}

export default Footer