import { Carousel } from "../../components";
import { Arrival } from "../../components/arrival/Arrival";
import { Poster } from "../../components/poster/Poster";
import { useEffect } from "react";

export const Homepage = () => {
  useEffect(()=>{
    document.title = "Smasher | Home"
  },[])
  return (
    <>
      <Carousel />
      <Poster />
      <Arrival />
    </>
  );
};
