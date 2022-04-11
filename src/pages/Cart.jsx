import React from 'react'
import styled from 'styled-components';
import Announcement from '../components/Announcement';
import Navbar from '../components/Navbar';
const Cart = () => {
  return (
    <CartPage>
      <Navbar/>
      <Announcement/>
      <CartSectionWrapper>
      <Title>YOUR BAG</Title>
      <TopPart>
        <Button type="shopping">CONTINUE SHOPPING</Button>
        <InfoWrapper>
          <Info>Shopping Bag (2)</Info>
          <Info>Your Wishlist (0)</Info>
        </InfoWrapper>
        <Button>CHECKOUT NOW</Button>
      </TopPart>
      <CartSection>
        <CartProducts>
          <Product>
            <Image src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1614188818-TD1MTHU_SHOE_ANGLE_GLOBAL_MENS_TREE_DASHERS_THUNDER_b01b1013-cd8d-48e7-bed9-52db26515dc4.png?crop=1xw:1.00xh;center,top&resize=480%3A%2A"/>
            <Details>
              <ProductTitle><Bold>Product:</Bold> JESSIE THUNDER SHOE</ProductTitle>
              <ProductId><Bold>ID:</Bold> 739473874</ProductId>
              <ProductColor color="black"/>
              <ProductSize><Bold>Size:</Bold> 37.5</ProductSize>
            </Details>
            <Calc>
              <Count>
                <CountChange>+</CountChange>
                <CountValue>1</CountValue>
                <CountChange>-</CountChange>
              </Count>
              <Price>$30</Price>
            </Calc>
          </Product>
          <Product>
            <Image src="https://i.pinimg.com/originals/2d/af/f8/2daff8e0823e51dd752704a47d5b795c.png"/>
            <Details>
              <ProductTitle><Bold>Product:</Bold> HAKURA T-SHIRT</ProductTitle>
              <ProductId><Bold>ID:</Bold> 56632434</ProductId>
              <ProductColor color="gray"/>
              <ProductSize><Bold>Size:</Bold> 37.5</ProductSize>
            </Details>
            <Calc>
              <Count>
                <CountChange>+</CountChange>
                <CountValue>1</CountValue>
                <CountChange>-</CountChange>
              </Count>
              <Price>$30</Price>
            </Calc>
          </Product>
        </CartProducts>
        <OrderSummary>
          <Title style={{textAlign: 'left'}}>ORDER SUMMARY</Title>
          <SubTotal>
            <SummaryTitle>Subtotal</SummaryTitle>
            <SummaryValue>$ 80</SummaryValue>
          </SubTotal>
          <EstimatedShipping>
            <SummaryTitle>Estimated Shipping</SummaryTitle>
            <SummaryValue>$ 5.8</SummaryValue>
          </EstimatedShipping>
          <ShippingDiscount>
            <SummaryTitle>Shipping Discount</SummaryTitle>
            <SummaryValue>$ -5.8</SummaryValue>
          </ShippingDiscount>
          <Total>
            <SummaryTitle type="total">Total</SummaryTitle>
            <SummaryValue type="total">$ 80</SummaryValue>
          </Total>
          <Button type="total">CHECKOUT NOW</Button>
        </OrderSummary>
      </CartSection>
    </CartSectionWrapper>
    </CartPage>
    
  )
}

export default Cart;

const CartPage = styled.div`
  
  
`
const CartSectionWrapper = styled.div`
  width: 100vw;
  padding: 2rem;
`
const Title = styled.h1`
  font-size: 4rem;
  text-align: center;
  font-weight: 100;

`
const SubTitle = styled.p`
  
`
const Bold = styled.strong`
  font-size: 2rem;
`
const Button = styled.button`
  width: ${props => props.type==="total" ? "100%" : "180px"};
  height: 40px;
  background-color: ${props => props.type === "shopping" ? "transparent" : "black"};
  color: ${props => props.type === "shopping" ? "black" : "white"};
  border: ${props => props.type === "shopping" ? "2px solid black" : "none"};
  font-size: 1.4rem;
  cursor: pointer;
`
const TopPart = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin: 2rem 0;
`
const InfoWrapper = styled.div`
  display: flex;
  gap: 2rem;
`
const Info = styled.p`
  text-decoration: underline;
  font-size: 1.8rem;
  cursor: pointer;
`


const CartSection = styled.div`
  display: flex;
`






const CartProducts =styled.div`
  flex: 7;
`
const Product = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  border-bottom: 1px solid #AFAEAF;
`
const Image = styled.img`
  width: 250px;
  height: 250px;
  flex:2;
`
const Details = styled.div`
  flex:6;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`


const ProductTitle = styled.p`
  font-size: 2rem;
`
const ProductId = styled.p`
  font-size: 2rem;
`
const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${props => props.color};
`
const ProductSize = styled.div`
  font-size: 2rem;
`


const Calc = styled.div`
  flex: 2;
`
const Count = styled.div`
  display: flex;
  /* align-items: center; */
  /* gap: 1rem; */
`
const CountValue = styled.div`
  font-size: 2.5rem;
  width: 4rem;
  text-align: center;
`
const CountChange = styled.span`
  font-size: 3rem;
  font-weight: 900;
  cursor: pointer;
`
const Price = styled.div`
  font-size: 3rem;
  margin-top: 2rem;
  font-weight: 100;
`






const OrderSummary = styled.div`
  flex: 3;
  height: 50vh; 
  border: 1px solid #AFAEAF;
  border-radius: 10px;
  padding: 2rem;
  display: flex;
  flex-direction:column;
  justify-content: space-between;
`
const SummaryTitle = styled.p`
  font-size: ${props => props.type==="total" ? "3rem" : "2rem"};
`
const SummaryValue = styled.p`
  font-size: ${props => props.type==="total" ? "3rem" : "2rem"};
`

const SubTotal = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`
const EstimatedShipping = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`
const ShippingDiscount = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`
const Total = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`


