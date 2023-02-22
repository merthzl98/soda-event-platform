import { Fragment } from "react";
import Head from "next/head";
import ContactPage from "@/components/contactPage/ContactPage";

const ContactUsPage = () => {
  return (
    <Fragment>
        <Head>
        <title>Meet us!</title>
        <meta name="description" content={"meet us, ask a question"} />
      </Head>
      <ContactPage />
    </Fragment>
  );
};

export default ContactUsPage;
