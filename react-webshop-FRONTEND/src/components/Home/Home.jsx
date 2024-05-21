import { CarouselSlider } from "./CarouselHeroSlider/CarouselSlider";
import { CarouselHome } from "./CarouselHome/CarouselHome";
import { Hero } from "./Hero/Hero";
import ControlledCarousel from "./Hero2/Hero2";
import Newsletter from "./Newsletter/Newsletter";
import { SeperateCategories } from "./SeperateCategories/SeperateCategories";

export function Home() {
  return (
    <>
      {/*<Hero />*/}
      {/*<ControlledCarousel />*/}
      <CarouselSlider />
      <CarouselHome />
      <SeperateCategories />
      <Newsletter />
    </>
  );
}
