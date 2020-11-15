import React, { Fragment } from "react";
import About from "./components/about/About";
import Banner from "./components/banner/Banner";
import Contact from "./components/contact/Contact";
import Custom from "./components/custom/Custom";
import Explore from "./components/explore/Explore";
import FAQS from "./components/faqs/FAQS";
import Footer from "./components/footer/Footer";
import Form from "./components/form/Form";
import Steps from "./components/steps/Steps";

function App() {
  return (
    <Fragment>
      <Banner />
      <About />
      <Steps />
      <Custom />
      <Explore />
      <FAQS />
      <Contact />
      <Form />
      <Footer />
    </Fragment>
  );
}

export default App;
