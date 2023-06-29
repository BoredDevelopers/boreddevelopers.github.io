import Head from "next/head";
import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";
import { NextSeo } from "next-seo";

export default function Home() {
  return (
    <div className="text-white bg-black">
      <NextSeo
        title="Home: Bored Developers"
        description="Welcome to Bored Developers homepage."
        canonical="https://boreddevelopers.xyz/"
        openGraph={{
          url: "https://boreddevelopers.xyz/",
        }}
      />
      <Head>
        <title>Bored Developers</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}
