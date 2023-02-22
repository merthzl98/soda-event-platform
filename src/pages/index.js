import HomePage from "@/components/homePage/HomePage";
import Head from "next/head";
import { Fragment } from "react";

export default function Home() {
  return (
    <Fragment>
      <Head>
        <title>Soda Entertainment</title>
        <meta name="description" content="Explore Events!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <HomePage />
    </Fragment>
  );
}
