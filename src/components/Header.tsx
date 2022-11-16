import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <nav>
      <div className="container header">
        <Link to="/">
          <h1>Address Book</h1>
        </Link>
        <Link to="/settings">
          <FontAwesomeIcon icon={faGear} />
        </Link>
      </div>
    </nav>
  );
};
