import axios from "axios";
import React, { useEffect, useState } from "react";
import { Trending, TrendingCoins } from "../../Config/Api";
import { CryptoState } from "../../ContextCoin";
import AliceCarousel from "react-alice-carousel";
import { Link } from "react-router-dom";
import classes from "./Carousel.module.css";

function Carousel() {
  // const [trendingCoin, setTrendingCoin] = useState([]);
  // const { currency } = CryptoState;
  // const FetchCoinData = async () => {
  //   const { data } = await axios.get(Trending(currency));
  //   setTrendingCoin(data || []);
  //   // console.log(data);
  // };
  // useEffect(() => {
  //   FetchCoinData();
  // });
  // console.log(trendingCoin);
  // console.log(currency);
  // const responsive = {
  //   0: {
  //     items: 2,
  //   },
  //   512: {
  //     items: 4,
  //   },
  // };
  // const items = trendingCoin.map((coin) => {
  //   return (
  //     <Link to={`coins/${coin?.id}`}>
  //       <img
  //         src={coin?.image}
  //         alt={coin.name}
  //         height="80"
  //         style={{ marginBottom: 10 }}
  //       />
  //     </Link>
  //   );
  // });
  // return (
  //   <>
  //     <AliceCarousel
  //       mouseTracking
  //       infinite
  //       autoPlayInterval={1000}
  //       animationDuration={1500}
  //       disableDotsControls
  //       responsive={responsive}
  //       autoPlay
  //       items={items}
  //     />
  //   </>
  // );

  return (
    <>
      <div
        style={{
          display: "flex",
          textAlign: "center",

          justifyContent: "center",
        }}
      >
        <p>Coin will display here </p>
      </div>
    </>
  );
}

export default Carousel;
