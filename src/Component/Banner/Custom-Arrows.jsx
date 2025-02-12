import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "./Banner.css";

// Custom Prev Arrow
const CustomPrevArrow = ({ currentSlide, slideCount, ...restProps }) => {
  return (
    <div {...restProps} className="custom-prev-arrow">
      <FaChevronLeft className="translate-y-3 translate-x-3" />
    </div>
  );
};

// Custom Next Arrow
const CustomNextArrow = ({ currentSlide, slideCount, ...restProps }) => {
  return (
    <div {...restProps} className="custom-next-arrow">
      <FaChevronRight className="translate-y-3 translate-x-3" />
    </div>
  );
};

export { CustomNextArrow, CustomPrevArrow };
