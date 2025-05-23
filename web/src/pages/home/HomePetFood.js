import React, { Fragment } from "react";
import SEO from "../../components/seo";
import LayoutOne from "../../layouts/LayoutOne";
import FeatureIconFour from "../../wrappers/feature-icon/FeatureIconFour";
import BlogFeaturedThree from "../../wrappers/blog-featured/BlogFeaturedThree";
import BannerTwentyOne from "../../wrappers/banner/BannerTwentyOne";
import CountDownThree from "../../wrappers/countdown/CountDownThree";
import HeroSliderTwentyThree from "../../wrappers/hero-slider/HeroSliderTwentyThree";
import TabProductSix from "../../wrappers/product/TabProductSix";
import BannerTwentyTwo from "../../wrappers/banner/BannerTwentyTwo";

const HomePetFood = () => {
  return (
    <Fragment>
      <SEO
        titleTemplate="Pet Food Home"
        description="Pet food home of Anahee react minimalist eCommerce template."
      />
      <LayoutOne headerTop="visible">
        {/* hero slider */}
        <HeroSliderTwentyThree />
        {/* banner */}
        <BannerTwentyOne spaceTopClass="pt-60" spaceBottomClass="pb-60" />
        {/* tab product */}
        <TabProductSix category="pet food" />
        {/* banner */}
        <BannerTwentyTwo spaceTopClass="pt-95" />
        {/* countdown */}
        <CountDownThree
          spaceTopClass="pt-95"
          dateTime="November 13, 2023 12:12:00"
          countDownImage="/assets/img/banner/deal-8.jpg"
        />
        {/* feature icon */}
        <FeatureIconFour
          spaceTopClass="pt-95"
          containerClass="container"
          responsiveClass="res-mrg-md-mt"
        />
        {/* blog featured */}
        <BlogFeaturedThree spaceTopClass="pt-90" spaceBottomClass="pb-70" />
      </LayoutOne>
    </Fragment>
  );
};

export default HomePetFood;
