import Head from "next/head";
import { Fragment } from "react";
import axios from "axios";

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

export async function getStaticProps({ locale }) {
  const eventListUrl = "http://localhost/client-app/api/v1/events";
  const response = await axios.get(eventListUrl, {
    params: {
      country: locale,
    },
  });

  const events = response.data;

  console.log({ events, locale });

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
