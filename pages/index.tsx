import type { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import Enter from "./enter";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <meta property="og:title" content="찰리 마켓" />
        <meta
          property="og:description"
          content="찰리 마켓에서 안전하게 거래하세요"
        />
        <meta
          property="og:image"
          content="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOL7fp30_vkzMyWm2-VoDegLAQtJPp41arcA&usqp=CAUL"
        />
      </Head>
      <Enter />
    </>
  );
};

export default Home;
