import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Link } from "react-router-dom";

const Links = () => {
  return (
    <div>
      <Link className="TodoApp" to="/TodoApp">
        Todo Application
      </Link>
    </div>
  );
};

export default Links;
