import Pagination from '@mui/material/Pagination';

export default function ProgressBar({qno,setQno}){
  function handleChange(event,value){
    setQno(value);   
  }
  return <div className = "progressBar">
    
    <Pagination count={5} page={qno} onChange={handleChange} color='primary' size = "large"/>
  </div>
}