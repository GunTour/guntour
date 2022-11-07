import React from "react";
import { WithRouter } from "utils/Navigation";

import Layout from "components/Layout";

import Background from "assets/bgabout.svg";

const About = () => {
  return (
    <div>
        <Layout>
        <header>
          <img className="w-full" src={Background} alt="Background" />
        </header>

        <section>
            ini page about
        </section>
        </Layout>
    </div>
  )
}

export default WithRouter(About);