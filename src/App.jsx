import "./App.css";
import Banner from "./components/Banner/Banner";
import Navbar from "./components/Navbar/Navbar";
import Rating from "./components/Rating/Rating";
import SectionTitle from "./components/SectionTitle/SectionTitle";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <Rating></Rating>
      <SectionTitle></SectionTitle>
    </>
  );
}

export default App;
