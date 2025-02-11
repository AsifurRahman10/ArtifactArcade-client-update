import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "./Banner.css";

// custom arrow
const CustomPrevArrow = (props) => {
  return (
    <div {...props} className="custom-prev-arrow">
      <FaChevronLeft className="translate-y-3 translate-x-3" />
    </div>
  );
};

const CustomNextArrow = (props) => {
  return (
    <div {...props} className="custom-next-arrow">
      <FaChevronRight className="translate-y-3 translate-x-3" />
    </div>
  );
};

export { CustomNextArrow, CustomPrevArrow };
