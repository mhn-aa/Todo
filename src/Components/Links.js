import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Link } from "react-router-dom";

const Links = () => {
  return (
    <div>
      <div>
        <Link className="MHN" to="/">
          MHN
        </Link>
      </div>
      <div>
        <Link className="TodoApp" to="/TodoApp">
          Todo Application
        </Link>
      </div>
      <div>
        <Link className="SnakeGame" to="SnakeGame">
          Snake
        </Link>
      </div>
    </div>
  );
};

export default Links;
