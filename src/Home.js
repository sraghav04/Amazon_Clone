import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="banner">
      <img
        className="banner_image"
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        alt=""
      />
      <div className="home_row">
        <Product
          id="1245671"
          title="Redmi Note 9 Pro (Aurora Blue, 4GB RAM, 64GB Storage) - Latest 8nm Snapdragon 720G & Alexa Hands-Free"
          price={12999.0}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/71ahT-X2FgL._SL1500_.jpg"
        />
        <Product
          id="12345676"
          title="Zebronics Zeb-Duke Bluetooth Headphone with Voice Assistant Support, Multifunction Button, AUX Input and RGB Lights"
          price={1575.0}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/714jbjaQpXL._SY450_.jpg"
        />
      </div>
      <div className="home_row">
        <Product
          id="12345673"
          title="HP Pavilion Gaming DK0268TX 15.6-inch Laptop (Core i5-9300H/8GB/512GB SSD/Windows 10 Home/4GB NVIDIA GeForce GTX 1650 Graphics), Shadow Black"
          price={64490.0}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/81pezrPSgOL._SX679_.jpg"
        />
        <Product
          id="12345674"
          title="Canon EOS 200D II 24.1MP Digital SLR Camera + EF-S 18-55mm is STM Lens + EF-S 55-250mm is STM Lens (Black)"
          price={62999.0}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/415ZSUQ2erL.jpg"
        />
        <Product
          id="12345675"
          title="Mi Smart Band 4- India's No.1 Fitness Band, Up-to 20 Days Battery Life, Color AMOLED Full-Touch Screen, Waterproof with Music Control and Unlimited Watch Faces"
          price={1999.0}
          rating={5}
          image="https://m.media-amazon.com/images/I/315sKf9Qr5L._AC_UY218_.jpg"
        />
      </div>
      <div className="home_row">
        <Product
          id="12345672"
          title="Samsung 80 cm (32 inches) Wondertainment Series HD Ready LED Smart TV UA32TE40AAKXXL (Titan Gray) (2020 model)"
          price={15499.0}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/71hk35dbxoL._SL1500_.jpg"
        />
      </div>
    </div>
  );
}

export default Home;

// https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg
//https://m.media-amazon.com/images/S/sonata-images-prod/Superhero_UK_Acquisition_FT_Apr_20/e17eb7bc-b5cc-44dc-9620-b5a783ed60a9._UR3000,800_SX1500_FMjpg_.jpg
//https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Home_v2_en_US_1x._CB429090084_.jpg
