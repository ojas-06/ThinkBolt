import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react'
import './App.css'
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import AddPlayerForm from './components/AddPlayerForm'
import QuizEngine from './components/QuizEngine'
import ScorePg from './components/ScorePg'
import quizDB from "./assets/questions"
import Leaderboard from './components/Leaderboard'
import About from './components/About'
import NotFound from './components/NotFound';

function randomQpicker(category,difficulty){
  let qs = [];
  let done = [];
  let i=0;
  while(i<5){
    let j = Math.floor(Math.random()*50);
    if(done.includes(j)) continue;
    done.push(j);
    i++;
  }
  done.forEach((k)=>{
    qs.push(quizDB[category][difficulty][k]); 
  });
  console.log(quizDB['gk']['easy'].length);
  console.log(qs);
  console.log(done);
  return qs;
}

export default function App() {
  const [name,setName] = useState('');
  const [category,setCategory] = useState('');
  const [difficulty,setDifficulty] = useState('');
  const [userAns,setUserAns] = useState([]);
  const [qs, setQs] = useState([]);
  const [quizStarted, setQuizStarted] = useState(false);

  function startQuiz() {
    const generated = randomQpicker(category, difficulty);
    setQs(generated);
    setQuizStarted(true);
  }
  

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="*" element = {<NotFound />} />
        <Route path="/" element={<Hero />} />
        <Route path="/quiz" element={
          <AddPlayerForm
            name = {name}
            setName = {setName}
            category = {category}
            setCategory = {setCategory} 
            difficulty = {difficulty}
            setDifficulty = {setDifficulty}
            startQuiz = {startQuiz}
          />
        } />
        <Route path="/quiz/start" element={<QuizEngine
          qs = {qs}
          name = {name}
          userAns = {userAns}
          setUserAns = {setUserAns}
          setQuizStarted = {setQuizStarted}
          />
          } 
        />
        <Route path="/user-score" element={<ScorePg 
          name = {name}
          qs = {qs}
          userAns = {userAns}
          setName = {setName}
          setCategory = {setCategory}
          setDifficulty = {setDifficulty}
          setUserAns = {setUserAns}
          />
        }/>
        <Route path="/scores" element={<Leaderboard />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}