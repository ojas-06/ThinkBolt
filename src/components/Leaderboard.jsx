import DataTable from "./DataTable";

export default function Leaderboard(){
  const users = JSON.parse(localStorage.getItem('users'));
  // if(!users) return <><div className="navClear"></div><p className="apfMargin50">No user Data!</p></>
  return<>
  <div className="someSpace"></div>
    
    <DataTable></DataTable>
  </>
}

