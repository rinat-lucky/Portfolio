import React from "react";

import 'bootstrap/dist/css/bootstrap.min.css';

import Technologies from "../components/Technologies";
import Portfolio from "../components/Portfolio";
import Contacts from "../components/Contacts";
import About from "../components/About";

export const Head = () => (
  <>
    <title>Ринат Камалитдинов</title>
    <meta property="og:title" content="Ринат Камалитдинов"></meta>
    <meta name="description" content="Личный сайт фронтенд-разработчика Рината Камалитдинова"></meta>
    <script src="https://use.fontawesome.com/1c39e4ec55.js"></script>
  </>
);

const IndexPage = () => {
  return (
    <main>  
      <div className="container my-5">
        <div className="row">
          <div className="col-12 col-md-11 col-lg-10 mx-auto">
            <h1>Ринат Камалитдинов</h1>
            <About />
            <Technologies />
            <Portfolio />
            <Contacts />
          </div>
        </div>
      </div>
    </main>
  )
};

export default IndexPage;
