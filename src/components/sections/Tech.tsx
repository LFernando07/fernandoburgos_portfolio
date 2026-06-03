import { SectionWrapper } from "../../hooks";
import { technologies } from "../../constants";
import BallsCanvas from "../canvas/Ball";

const Tech = () => {
  return (
    <BallsCanvas technologies={technologies} />
  );
};

export default SectionWrapper(Tech, "tech");