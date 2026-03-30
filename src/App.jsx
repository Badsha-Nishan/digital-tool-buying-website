import "./App.css";
import Banner from "./components/Banner/Banner";
import CardSection from "./components/CardSection/CardSection";
import Navbar from "./components/Navbar/Navbar";
import Rating from "./components/Rating/Rating";
import SectionTitle from "./components/SectionTitle/SectionTitle";
import StepsCards from "./components/StepsCards/StepsCards";
import Tab from "./components/Tab/Tab";

function App() {
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
    </>
  );
}

export default App;
