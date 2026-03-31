import { Suspense, useState } from "react";
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
import Cart from "./components/Cart/Cart";
import EmptyCart from "./components/Cart/EmptyCart";
import { ToastContainer, toast } from 'react-toastify';

const PriceCardPromise = async () => {
  const res = await fetch("/pricingCards.json");
  return res.json();
};

const ProductsCardPromise = async () => {
  const res = await fetch("/products.json");
  return res.json();
};

function App() {
  const [selectTab, setSelectTab] = useState("products");
  const [cart, setCart] = useState([]);
  const productCard = ProductsCardPromise();
  const cardPromise = PriceCardPromise();
  const notify = () => toast.success("Card Added Successfully!",{
    position:"top-center"
  });
  const notify1 = () => toast.success("Checkout Successfully!",{
    position:"top-center"
  });
  const remove = ()=> toast.error("Card Removed")
  return (
    <>
      <Navbar cart={cart}></Navbar>
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
      <div className="mb-10">
        <div className="tabs tabs-box justify-center bg-white">
          <input
            type="radio"
            name="my_tabs_1"
            className={`tab rounded-full w-40 border-gray-700 border-1 ${
              selectTab === "products"
                ? "bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white"
                : "text-black"
            } `}
            aria-label="Products"
            id="products"
            defaultChecked
            onClick={() => setSelectTab("products")}
          />
          <input
            type="radio"
            name="my_tabs_1"
            className={`tab rounded-full w-40 border-gray-700 border-1  ${
              selectTab === "cart"
                ? "bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white"
                : "text-black"
            } `}
            aria-label={`Cart (${cart.length})`}
            onClick={() => setSelectTab("cart")}
          />
        </div>
      </div>
      {selectTab === "products" ? (
        <Suspense
          fallback={
            <div className="flex justify-center items-center min-h-2/6 gap-7 flex-col">
              <span className="loading loading-spinner loading-xl"></span>
              <p>Content Loading....</p>
            </div>
          }
        >
          <CardSection
            productCard={productCard}
            cart={cart}
            setCart={setCart}
            notify={notify}
          ></CardSection>
        </Suspense>
      ) : cart.length !== 0 ? (
        <Cart cart={cart} setCart={setCart} remove={remove} notify1={notify1}></Cart>
      ) : (
        <EmptyCart setSelectTab={setSelectTab}></EmptyCart>
      )}

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
      <Suspense
        fallback={
          <div className="flex justify-center items-center min-h-2/6 gap-7 flex-col">
            <span className="loading loading-spinner loading-xl"></span>
            <p>Content Loading....</p>
          </div>
        }
      >
        <PricingCard cardPromise={cardPromise}></PricingCard>
      </Suspense>
      <FooterContent></FooterContent>
      <Footer></Footer>
      <ToastContainer />
    </>
  );
}

export default App;
