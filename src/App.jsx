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

//SOLVE THIS ERROR
// react-dom_client.js?v=4cdab289:6409 Uncaught Error: There was an error during concurrent rendering but React was able to recover by instead synchronously rendering the entire root.
//     at throwException (react-dom_client.js?v=4cdab289:6409:11)
//     at throwAndUnwindWorkLoop (react-dom_client.js?v=4cdab289:10927:15)
//     at renderRootSync (react-dom_client.js?v=4cdab289:10706:139)
//     at performWorkOnRoot (react-dom_client.js?v=4cdab289:10328:215)
//     at performSyncWorkOnRoot (react-dom_client.js?v=4cdab289:11633:9)
//     at flushSyncWorkAcrossRoots_impl (react-dom_client.js?v=4cdab289:11534:122)
//     at processRootScheduleInMicrotask (react-dom_client.js?v=4cdab289:11556:9)
//     at react-dom_client.js?v=4cdab289:11647:15Caused by: TypeError: Cannot read properties of undefined (reading 'question')
//     at QuestionCard 


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