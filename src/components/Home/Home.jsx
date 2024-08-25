import { Outlet, useNavigation } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import "./Home.css";

const Home = () => {
  const navigation = useNavigation();
  return (
    <div className="flex flex-col h-screen justify-between">
      <Header></Header>
      {navigation.state === "loading" ? (
        <p className="text-center text-3xl text-rose-950">Loading</p>
      ) : (
        <Outlet></Outlet>
      )}
      <Footer></Footer>
    </div>
  );
};

export default Home;
