import React from "react";
import styled from "styled-components";
import Header1 from "../Components/Header1";
import Footer from "../Components/Footer";
import iconChat from "../Assets/icon-chat.png"
import iconMoney from "../Assets/icon-money.png"
import iconSecurity from "../Assets/icon-security.png"

function HomePage() {

    return (
        <Body>
            <Header1 />
            <Main>
      <Hero>
        <HeroContent>
          <SrOnly>Promoted Content</SrOnly>
          <Subtitle>No fees.</Subtitle>
          <Subtitle>No minimum deposit.</Subtitle>
          <Subtitle>High interest rates.</Subtitle>
          <Text>Open a savings account with Argent Bank today!</Text>
        </HeroContent>
      </Hero>
      <Features>
      <SrOnly>Features</SrOnly>
        <FeatureItem>
          <img src={iconChat} alt="Chat Icon" />
          <FeatureItemTitle>You are our #1 priority</FeatureItemTitle>
          <p>
            Need to talk to a representative? You can get in touch through our
            24/7 chat or through a phone call in less than 5 minutes.
          </p>
          </FeatureItem>
          <FeatureItem>
          <img src={iconMoney}alt="Money Icon"/>
          <FeatureItemTitle>More savings means higher rates</FeatureItemTitle>
          <p>
            The more you save with us, the higher your interest rate will be!
          </p>
          </FeatureItem>
          <FeatureItem>
          <img src={iconSecurity} alt="Security Icon"/>
          <FeatureItemTitle>Security you can trust</FeatureItemTitle>
          <p>
            We use top of the line encryption to make sure your data and money
            is always safe.
          </p>
          </FeatureItem>
        </Features>
    </Main>





            <Footer />
        </Body>






    )
}

const Body = styled.main`
  margin: 0;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`
const Main = styled.div `
flex: 1;

`
const Hero = styled.div `
background-image: url('../Assets/bank-tree.jpeg');
background-position: 0 -50px;
background-size: cover;
background-repeat: no-repeat;
height: 300px;
position: relative;
@media (min-width: 920px)
{
    height: 400px;
      background-position: 0% 33%;
}

`
  
const HeroContent = styled.div `
position: relative;
top: 2rem;
width: 200px;
background: white;
padding: 2rem;
text-align: left;
margin: 0 auto;
@media (min-width: 920px){
    position: absolute;
      top: 50px;
      right: 50px;
      width: 300px;
      margin: 2rem;

}

`
const SrOnly = styled.h2 `
border: 0 !important;
clip: rect(1px, 1px, 1px, 1px) !important; /* 1 */
-webkit-clip-path: inset(50%) !important;
clip-path: inset(50%) !important; /* 2 */
height: 1px !important;
margin: -1px !important;
overflow: hidden !important;
padding: 0 !important;
position: absolute !important;
width: 1px !important;
white-space: nowrap !important; /* 3 */
`

const Subtitle = styled.p `
font-weight: bold;
font-size: 1rem;
margin: 0;
@media (min-width: 920px){
font-size: 1.5rem;
}
`

const Text = styled.p `
margin-bottom: 0;
font-size: 0.9rem;
@media (min-width: 920px){
font-size: 1.2rem;
}
`

const Features = styled.section `
display: flex;
flex-direction: column;

@media (min-width: 920px) {
  flex-direction: row;
}
`

const FeatureItem = styled.div `
flex: 1;
padding: 2.5rem;
img{
    width: 100px;
    border: 10px solid #00bc77;
    border-radius: 50%;
    padding: 1rem;
}
`
const FeatureItemTitle = styled.h3`

color: #222;
font-size: 1.25rem;
font-weight: bold;
margin-bottom: 0.5rem;
`
export default HomePage;