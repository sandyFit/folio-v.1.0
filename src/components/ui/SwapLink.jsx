import { Link } from "react-scroll";

const SwapLink = ({ title, to }) => {
    return (
        <Link to={to} className="container"
            >
            <div className="relative text-container" >
                <span className="text firstText" >{title}</span>
                <span className="text secondText" >{title}</span>
            </div>            
        </Link>
    );
};


export default SwapLink;
