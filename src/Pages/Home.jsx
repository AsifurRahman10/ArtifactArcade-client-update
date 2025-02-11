import React from "react";
import { Banner } from "../Component/Banner/Banner";
import { FeatureArtifacts } from "../Component/FeatureArtifacts";
import { AboutUs } from "./AboutUs";
import { PhotoGallery } from "../Component/PhotoGallery";
import { Helmet, HelmetProvider } from "react-helmet-async";
import NewsLetter from "../Component/NewsLetter";

export const Home = () => {
  return (
    <div>
      <HelmetProvider>
        <Helmet>
          <title>Home - ArtifactArcade</title>
        </Helmet>
      </HelmetProvider>
      <section>
        <Banner></Banner>
      </section>
      <section>
        <FeatureArtifacts></FeatureArtifacts>
      </section>
      <section>
        <AboutUs></AboutUs>
      </section>
      <section>
        <PhotoGallery></PhotoGallery>
      </section>
      <section>
        <NewsLetter />
      </section>
    </div>
  );
};
