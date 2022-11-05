import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
const Back = () => {
    return(
        <Link to ="./Home">
            <button className="text-button text-[30px]">
            <IoIosArrowBack />
            </button>
        </Link>
    );
};
export default Back;