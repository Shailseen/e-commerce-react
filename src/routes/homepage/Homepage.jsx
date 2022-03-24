import { Carousel } from "../../components";
import { Arrival } from "../../components/arrival/Arrival";
import { Poster } from "../../components/poster/Poster";

export const Homepage = () => {
  return (
    <>
      <Carousel />
      <Poster />
      <Arrival />
    </>
  );
};
