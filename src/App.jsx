import { Suspense } from "react";
import "./App.css";
import Banner from "./components/Banner/Banner";
import CardSection from "./components/CardSection/CardSection";
import Footer from "./components/Footer/Footer";
import FooterContent from "./components/Footer/FooterContent";
import Navbar from "./components/Navbar/Navbar";
import PricingCard from "./components/PricingCard/PricingCard";
import Rating from "./components/Rating/Rating";
import SectionTitle from "./components/SectionTitle/SectionTitle";
import StepsCards from "./components/StepsCards/StepsCards";
import Tab from "./components/Tab/Tab";

const PriceCardPromise = async () => {
  const res = await fetch("/pricingCards.json");
  return res.json();
};

function App() {
  const cardPromise = PriceCardPromise()
  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <Rating></Rating>
      <SectionTitle
        title="Premium Digital Tools"
        description={
          <p>
            Choose from our curated collection of premium digital products
            designed
            <br />
            to boost your productivity and creativity.
          </p>
        }
      ></SectionTitle>
      <Tab></Tab>
      <CardSection></CardSection>
      <SectionTitle
        title="Get Started in 3 Steps"
        description={
          <p>Start using premium digital tools in minutes, not hours.</p>
        }
      ></SectionTitle>
      <StepsCards></StepsCards>
      <SectionTitle
        title="Simple, Transparent Pricing"
        description={
          <p>
            Choose the plan that fits your needs. Upgrade or downgrade anytime.
          </p>
        }
      ></SectionTitle>
      <Suspense>
        <PricingCard cardPromise={cardPromise}></PricingCard>
      </Suspense>
      <FooterContent></FooterContent>
      <Footer></Footer>
    </>
  );
}

export default App;
