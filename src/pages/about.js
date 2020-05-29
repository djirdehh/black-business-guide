import React from "react";
import "reset-css";
import { Helmet } from "react-helmet";
import Nav from "../components/nav";
import styles from "./about.module.scss";
import Layout from "../components/layout";

const About = () => (
  <Layout>
    <Helmet title="Asian Heritage Month Marketplace: About" />
    <div className={styles.container}>
      <div className={styles.sidebar}>
        <Nav theme="light" />
      </div>
      <div className={styles.main}>
        <div className={styles.aboutContainer}>
          <h2 className={styles.stylizedSubheading}>Shopify’s mission is to make commerce better for everyone.</h2>
          <p className={styles.about}>
          To do that, we need to have ‘everyone’ building our product to ensure that we are innovating, inclusively redefining what an entrepreneur looks like, and creating the future of what commerce looks like.
          </p>
          <p className={styles.about}>
          <strong className={styles.emphasize}>We are building a global culture of belonging. </strong> 
          Diversity is an organizational imperative. Belonging is at the core of what we do. We continuously strive for all employees to experience this fundamental human need throughout their entire Shopify journey. Our vision is for all employees to feel Included. Valued. Heard.
          </p>
          <p className={styles.about}>
          At Shopify, we’re celebrating our merchants for Asian Pacific American Heritage Month. This is a global directory that features Shopify businesses to highlight our community, especially at a time where racial tension is high and businesses are affected due to COVID-19.
          </p>
          <h2 className={styles.subheading}>How do I add a store to the directory?</h2>
          <p className={styles.about}>
            To join the directory, please complete this <a target="_blank" rel="noopener noreferrer" href="https://airtable.com/shrG3WYY0EFTUjbp5">simple form</a>.
          </p>
          <p className={styles.about}>
            If you have been featured in our directory and would like to be removed, please contact us.
          </p>

          <h2 className={styles.subheading}>About the project</h2>
          <p className={styles.about}>
          This directory is a project started by the Asian Employee Resource Group at Shopify as part of our More Voices belonging initiative. Special thank you to our community friends <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/supervee">Veronica Wong</a>, <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/francinedev">Francine Navarro</a>, <a target="_blank" rel="noopener noreferrer" href="https://github.com/TerencedzLi">Terence Li</a>, and <a target="_blank" rel="noopener noreferrer" href="https://ben-che.com">Ben Che</a> for helping us build this.
          </p>
          <p className={styles.about}>
          Our website is built on Women Who Design and inspired by our friends that built Mask Makers Club. Our source code is on <a target="_blank" rel="noopener noreferrer" href="https://github.com/ben-che/AHM">Github</a>.
          </p>
        </div>
      </div>
    </div>
  </Layout>
);

export default About;
