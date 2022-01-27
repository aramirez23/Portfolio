import logo from "./logo.svg";
import { useNavigate } from "react-router-dom";
import "./App.css";
import profilePic from "./images/profilePic.jpg";
import sfsuTradeMart from "./images/sfsuTradeMartCover.png";
import reactMarket from "./images/reactMarketCover.png";
import actionRPG from "./images/actionRPGCover.png";
import healthPlanner from "./images/healthPlannerCover.png";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="container-fluid bg-dark text-white d-flex flex-column align-items-center">
      <h1 className="text-center display-3 w-100">Alicia Jane Ramirez</h1>
      <img
        src={profilePic}
        alt="Alicia Jane Ramirez"
        className="mx-auto d-block circle w-25 h-25"
      />
      <div className="body-text text-center">
        A recent graduate in computer science with experience using Javascript,
        Node.js, and React/Redux. I want to put my skills to use towards
        innovative applications.
      </div>
      <hr class="solid hr" />
      <h1 class="display-4 text-center">Projects</h1>
      <div class="card-group">
        <div className="card card-width text-black h-100">
          <img
            className="card-img-top"
            src={sfsuTradeMart}
            alt="SFSU Trade Mart (Not Official Site)"
          />
          <div className="card-body text-center">
            <h5 className="card-title">SFSU Trade Mart (Not Official Site)</h5>
            <p className="card-text">
              A buy, sell, and exchange site made using Flask. (Aug 2020 - Dec
              2020) (Not Real Site - For Educational Purposes Only)
            </p>
            <a href="#" class="btn btn-primary">
              Details
            </a>
          </div>
        </div>
        <div className="card card-width text-black h-100">
          <img
            className="card-img-top"
            src={reactMarket}
            alt="E-Commerce Prototype"
          />
          <div className="card-body text-center">
            <h5 className="card-title">E-Commerce Prototype</h5>
            <p className="card-text">
              A small e-commerce prototype using React/Redux, Docker, Redis, and
              MongoDB (May 14 - 18 2021)
            </p>
            <button onClick={() => navigate("/sfsuTradeMart")} class="btn btn-primary">
              Details
            </button>
          </div>
        </div>
        <div className="card card-width text-black h-100">
          <img
            className="card-img-top"
            src={healthPlanner}
            alt="HealthPlanner"
          />
          <div className="card-body text-center">
            <h5 className="card-title">HealthPlanner</h5>
            <p className="card-text">
              Healthcare appointment management app (Not Official App - For
              Educational Purposes Only) (Aug 2021 - Dec 2021)
            </p>
            <a href="#" class="btn btn-primary">
              Details
            </a>
          </div>
        </div>
        <div className="card card-width text-black h-100">
          <img className="card-img-top" src={actionRPG} alt="Action RPG" />
          <div className="card-body text-center">
            <h5 className="card-title">Action RPG</h5>
            <p className="card-text">
              An Action RPG with stats, a quest with two endings, and a basic
              animation system. CSC 413 Term Project (Aug 2019 - Dec 2019)
            </p>
            <a href="#" class="btn btn-primary">
              Details
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
