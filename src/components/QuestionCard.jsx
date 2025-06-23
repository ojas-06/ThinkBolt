import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';


import Radio, { radioClasses } from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import ProgressBar from './ProgressBar';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// export default function QuestionCard({qs , name, qno, setQno, userAns, setSelectedTab, setQuizStarted})
export default function QuestionCard({qs , name, qno, setQno, userAns,setUserAns, setQuizStarted}){
  const navigate = useNavigate();
  // let selectedOption = userAns[qno-1];
  const [selectedOption,setSelectedOption] = useState(userAns[qno-1] || '');
  React.useEffect(() => {
    setSelectedOption(userAns[qno - 1] || '');
  }, [qno, userAns]);
  const handleChange = (e) => {
    setSelectedOption(e.target.value);
  };
  function handleClick() {
    if(!selectedOption) {alert('Select an option to continue.'); return;}
    if(qno === 5) {
      setQuizStarted(false); 
      navigate("/user-score");
    }
    setQno(qno+1);
    // let newAns = [...userAns,selectedOption];
    // setUserAns(newAns);
    // console.log(selectedOption);
    // userAns[qno-1] = selectedOption;
    // console.log(qno,userAns);
    let newAns = [...userAns];
    newAns[qno-1] = selectedOption;
    setUserAns(newAns);
    // console.log(newAns);
  }
  return <>
  <Card sx={{height : "100vh" , marginTop: "90px"}}>
    <CardContent>
      <h3 style = {{marginLeft : "40px", display:"inline"}}>Hey {name}!</h3>
      <p style = {{float:"right", marginTop: "15px", display:"inline"}}> Test your Knowledge!</p>
      <div className = "someSpace"></div>
      <h4 style = {{marginLeft : "40px", marginTop:"50px",display : "inline"}}>Question {qno}:</h4>
      <p style = {{marginLeft : "30px", marginTop:"20px",display : "inline"}}>{qs[qno-1].question}</p>
      <div className = "someSpace"></div>
      <FormControl>
      <FormLabel id="demo-row-radio-buttons-group-label" className="apfMargin100">Options</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
        value={selectedOption}
        onChange={handleChange}
      >
    {qs[qno-1].options.map(option => (
      <FormControlLabel sx={{ marginLeft: '200px',marginTop: '30px' }} id='answer' value={option} control={<Radio />} label={option} key = {option}/>
    ))}
      </RadioGroup>
    </FormControl>
    <div className = "someSpace"></div>
    <Button type = "submit" variant="contained" onClick={handleClick} sx={{ color: 'primary', marginLeft: '75px',marginTop:'15px', marginBottom:'20px',borderRadius:'10px'}}>Next</Button>
    <ProgressBar qno = {qno} setQno = {setQno}></ProgressBar>
    </CardContent>
    
  </Card>
  </>
}

