import logo from '../assets/logo.png';
import { useNavigate } from 'react-router-dom';


function Hero({setSelectedTab}) {
  const navigate = useNavigate();
  return (
    <section className={`container-fluid bg-pink py-5 mt-5 hero`}>
      <div className="row align-items-center" style={{ minHeight: 'calc(100vh - 150px)' }}>
        <div className="col-md-6 px-5">
          <h1 className="display-4 fw-bold">Welcome to ThinkBolt</h1>
          <button className="btn btn-primary btn-lg mt-3" onClick={() => {navigate("/quiz")}}>Start Quiz</button>
        </div>
        <div className="col-md-6 text-center px-5">
        <img src = {logo} alt="Quiz Illustration" className="img-fluid rounded animated" />
        </div>
      </div>
    </section>
  );
  }

export default Hero;