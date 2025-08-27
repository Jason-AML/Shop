import { CardList } from "../components/CardList";
import { Logout } from "../components/Logout";
import { Navbar } from "../components/Navbar";

export const PrivatePage = () => {
  return (
    <section>
      <Navbar />
      <Logout />
      <CardList />
    </section>
  );
};
