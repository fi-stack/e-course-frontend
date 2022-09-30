import { Link } from "react-router-dom";
import Navbar from "../../components/molecules/Navbar";

const Home = () => {
  return (
    <>
      <div className="container">
        <div>
          <Link to="/roadmaps">Mulai Belajar</Link>
        </div>
        <div>
          <Link to="/subscribe">Langganan</Link>
        </div>
      </div>
    </>
  );
};

export default Home;
