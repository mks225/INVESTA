import React from "react";
import Hero from "./Hero";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import Universe from "./Universe";


function ProductsPage() {
  return (
    <>
      <Hero />
      <LeftSection
        imageURL=" /assets/kite.png "
        ProductName="Kite"
        productDiscription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
        trydemo=""
        learnmore=""
        googleplay=""
        appstore=""
      />

      <RightSection
        imageURL=" /assets/kiteconnect.png "
        ProductName="Kite Connect API"
        productDiscription="The centraBuild powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbasel dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations"
        learnmore=''
      />


      <LeftSection
        imageURL=" /assets/kite.png "
        ProductName="Coin"
        productDiscription="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices.."
        trydemo=""
        learnmore=""
        googleplay=""
        appstore=""
      />


      <RightSection
        imageURL=" /assets/console.png "
        ProductName="Console"
        productDiscription="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."
        learnmore=''
      />

      <LeftSection
        imageURL=" /assets/varsity.png "
        ProductName="Varsity mobile"
        productDiscription="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
        trydemo=""
        learnmore=""
        googleplay=""
        appstore=""
      />
      <div className="mt-5 border-top"></div>
      <p className="fs-5 text-center mt-5"> Want to know more about our technology stack? Check out the <a href="" style={{textDecoration : "none"}}>Zerodha.tech</a> blog. </p>

      <Universe />
    </>
  );
}

export default ProductsPage;
