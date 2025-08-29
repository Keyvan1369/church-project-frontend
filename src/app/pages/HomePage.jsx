import React from "react";
import { HomeForm } from "../../component/HomeForm";
import { Layout } from "../../shared/component/Layout";
import { Hero } from "../../component/Hero";
import { About } from "../../component/About";
import { LoveCompassion } from "../../component/LoveCompassion";
import { Benefits } from "../../component/Benefits";
import { CallToAction } from "../../component/CallToAction";
import { QuoteSection } from "../../component/QuoteSection";
import { Inspire } from "../../component/Inspire";

export const HomePage = () => {
  return (
    <>
      <Layout>
        <Hero />
        <About />
        <QuoteSection />
        <Benefits />
        <CallToAction />
        <Inspire />
        <LoveCompassion />
      </Layout>
    </>
  );
};
