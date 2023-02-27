import Head from "next/head";
import { Fragment } from "react";

import HomePage from "@/components/homePage/HomePage";
import { caruselItems } from "@/components/mockData/mockData";
import { sliderItems } from "@/components/mockData/mockData";

export default function Home(props) {
  return (
    <Fragment>
      <Head>
        <title>Soda Entertainment</title>
        <meta name="description" content="Explore Events!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <HomePage homeData={props.homeData} />
    </Fragment>
  );
}

export async function getStaticProps() {
  //fetch data

  return {
    props: {
      homeData: {
        caruoselData: caruselItems.map((item) => ({
          genre: item.genre,
          image: item.image,
          id: item.id,
          condition: item.condition,
          description: item.description,
        })),
        sliderData: sliderItems.map((item) => ({
          url: item.url,
          date: item.date,
          type: item.type,
        })),
      },
    },
    revalidate: 1,
  };
}
