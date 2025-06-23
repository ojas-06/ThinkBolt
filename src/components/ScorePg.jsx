import SuccessMsg from "./SuccessMsg";
import MediumScoreMessage from "./MediumScore"
import LowScoreMessage from "./LowScore"
import ActionButtons from "./Buttons";
import { useNavigate } from "react-router-dom";

export default function ScorePg({
  name , 
  qs, 
  userAns , 
  setName,
  setCategory,
  setDifficulty,
  setUserAns
}){
  const navigate = useNavigate();
  function resetParam(){
    setName('');
    setCategory('');
    setDifficulty('');
    setUserAns([]);
  }
  // console.log(userAns);
  let score = calculateScore(qs,userAns,name);
  return <>
    {score>3 && <SuccessMsg name = {name} score = {score}/>}
    {score === 3 && <MediumScoreMessage name = {name} score = {score}/>}
    {score <3 && <LowScoreMessage name = {name} score = {score}/>}
    <ActionButtons
  onPlayAgain={()=>{navigate("/quiz");resetParam();}}
  onLeaderboard={() => {navigate("/scores");resetParam();}}
/>

  </>

}

function calculateScore(qs,userAns,name){
  let score = 0;
  for(let i=0;i<5;i++){
    if(userAns[i] === qs[i].answer) score+=1;
  }
  let users = JSON.parse(localStorage.getItem('users'));
  users = modifyUserScore(users,name,score);
  localStorage.setItem('users',JSON.stringify(users));
  //object correct
  return score;
}

function modifyUserScore(users,name,score){
  users.some(user => {
    if(user.userName === name) {
      user.score = score;
      return true;
    }
  });
  return users;

}

