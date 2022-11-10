import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
const Back = () => {
  return (
    <Link to="/home">
      <button className="text-button text-[40px]">
        <IoIosArrowBack />
      </button>
    </Link>
  );
};
export default Back;
