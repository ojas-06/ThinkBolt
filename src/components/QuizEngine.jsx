import { useState } from 'react'
import QuestionCard from "./QuestionCard";

// export default function QuizEngine({name,setSelectedTab,qs,userAns,setQuizStarted})

export default function QuizEngine({name,qs,userAns,setUserAns,setQuizStarted}){
  const [qno,setQno] = useState(1);
  name = 'Ojas';

  return <QuestionCard 
  qs = {qs} 
  name = {name} 
  qno = {qno} 
  setQno = {setQno} 
  userAns = {userAns} 
  setUserAns = {setUserAns} 
  setQuizStarted = {setQuizStarted}
  />
  
}