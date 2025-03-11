import React from "react";
import Navbar from "./Navbar/Navbar.jsx";
import Heading from "./Heading/Heading.jsx";
import CardList from "./CardList/CardList.jsx";
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
  return (
    <>
      <Navbar />
      <Heading />
      <CardList />
    </>
  );
};

export default Home;
