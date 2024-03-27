import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Link } from "react-router-dom";

const Links = () => {
  return (
    <div className="Links">
      <div>
        <Link className="MHN" to="/">
          <h1>MHN</h1>
        </Link>
      </div>
      <div>
        <Link className="TodoApp" to="/TodoApp">
          <button>Todo Application</button>
        </Link>
      </div>
      <div>
        <Link className="SnakeGame" to="SnakeGame">
          <button>Snake</button>
        </Link>
      </div>
      <div>
        <Link className="hesmikonammaghzam" to="hesmikonammaghzam">
          <button>hesmikonammaghzam</button>
        </Link>
      </div>

      {/* <Link className="PacificStone" to="PacificStone">
        PacificStone
      </Link> */}
    </div>
  );
};

export default Links;
