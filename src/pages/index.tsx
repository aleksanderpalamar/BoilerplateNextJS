import type { NextPage } from "next";

import HomePage from "../layouts/HomePage";
import { Hero } from "../components/Hero";

const Home: NextPage = () => {
  return (
    <>
      <HomePage img="/images/vscode.png" title="Banner" alt="Banner image">
        <Hero
          h1="Welcome Boilerplate"
          h2="Next.js with Chakra UI"
          alt="Welcome Boilerplate Next.js with Chakra UI"
        />        
      </HomePage>      
    </>
  );
};

export default Home;
