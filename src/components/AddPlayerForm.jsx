import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';


const categories = [
  {
    value: 'gk',
    label: 'General Knowledge',
  },
  {
    value: 'scienceTech',
    label: 'Science and Technology',
  },
  {
    value: 'sports',
    label: 'Sports',
  },
];

const difficulties = [
  {
    value: 'easy',
    label: 'Easy',
  },
  {
    value: 'medium',
    label: 'Medium',
  },
  {
    value: 'hard',
    label: 'Hard',
  },
];

export default function AddPlayerForm({
  name,setName,category,setCategory,difficulty,setDifficulty,setSelectedTab,startQuiz
}){
  const navigate = useNavigate();
  function handleClick(){
    let newName = document.getElementById('name').value;
    setName(newName);
    if(!newName || !category || !difficulty) {
      alert('Please enter all input fields!');
      return;
    }
    const today = new Date();
    let userCategory;
    let userDifficulty;
    if(category === 'gk') userCategory = 'General Knowledge';
    else if(category === 'scienceTech') userCategory = 'Science and Technology';
    else if(category === 'sports') userCategory = 'Sports';

    if(difficulty === 'easy') userDifficulty = 'Easy';
    else if(difficulty === 'medium') userDifficulty = 'Medium';
    else if(difficulty === 'hard') userDifficulty = 'Hard';
    let newUser = {
      userName: newName,
      userCategory: userCategory,
      userDifficulty: userDifficulty,
      score: '',
      date: today.toDateString()
    };
    let users = JSON.parse(localStorage.getItem('users')) || [];
    users.push(newUser);
    localStorage.setItem('users',JSON.stringify(users));
    startQuiz();
    navigate("/quiz/start");
  }
    return (
      <div className = "apfForm">
        <h1 className="display-4 fw-bold apfMargin50">Ready to Begin?</h1>
        <p className="lead apfMargin50">Add your name and jump into the quiz!</p>
        <Box
          component="form"
          sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' } }}
          noValidate
          autoComplete="off"
        >
          <div className = "apfMargin100">
            <p>Your Name: </p>
            <TextField
              required
              id="name"
              label="Required"
            />
          </div>
          <div className = "apfMargin100">
            <p>Quiz Category: </p>
            <TextField
              value = {category}
              id="qcat"
              select
              label="Select"
              helperText="Please select your Quiz Category"
              onChange={(e)=>setCategory(e.target.value)}
            >
            {categories.map((option) => (
              <MenuItem key={option.value} value={option.value}>
              {option.label}
              </MenuItem>
            ))}
            </TextField>
          </div>
          <div className = "apfMargin100">
            <p>Difficulty: </p>
            <TextField
              value={difficulty}
              id="difficulty"
              select
              label="Select"
              helperText="Please select your Difficulty"
              onChange={(e)=>setDifficulty(e.target.value)}
            >
            {difficulties.map((option) => (
              <MenuItem key={option.value} value={option.value}>
              {option.label}
              </MenuItem>
            ))}
            </TextField>
          </div>
        </Box>

        <Button type = "submit" variant="contained" onClick={handleClick} sx={{ color: 'primary', marginLeft: '75px',marginTop:'15px', marginBottom:'20px',borderRadius:'10px'}}>Start</Button>
        </div>
      );
}