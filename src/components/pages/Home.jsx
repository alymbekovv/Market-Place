import Main from "./main/Main";
import InfoSection from "./infoSection/InfoSection";
import Models from "./models/Models";
import NewProducts from "./newProducts/NewProducts";
import Offer from "./offerSection/Offer";
import Customers from "./customers/Customers";

const Home = () => {
  return (
    <>
      <Main />
      <InfoSection />
      <Models />
      <NewProducts />
      <Offer />
      <Customers />
    </>
  );
};

export default Home;
