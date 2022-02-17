import React from "react";
import Blog from "../components/Blog";
import Enterprise from "../components/Enterprise";
import GreatMinds from "../components/GreatMinds";
import Hello from "../components/Hello";
import Hero from "../components/Hero";
import Lionsgate from "../components/Lionsgate";
import Technology from "../components/Technology";
import Try from "../components/Try";
import Workplace from "../components/Workplace";
import Layout from "../Layouts/Layout";
import "../Styles/main.scss";
function index() {
  return (
    <div className="index">
      <Layout>
        <Hero />
        <Hello />
        <Workplace />
        <Lionsgate />
        <Enterprise />
        <Blog />
        <GreatMinds />
        <Technology />
        <Try />
      </Layout>
    </div>
  );
}

export default index;
