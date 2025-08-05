import { Carousel } from "../components/Carousel";
import { Navbar } from "../components/Navbar";
import { CardList } from "../components/CardList";

export const Home = () => {
  return (
    <>
      <Navbar />
      <Carousel />
      <CardList />
    </>
  );
};
