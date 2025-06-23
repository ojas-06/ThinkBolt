// import * as React from 'react';
// import { DataGrid } from '@mui/x-data-grid';
// import Paper from '@mui/material/Paper';
// import Typography from '@mui/material/Typography';
// import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';
// import Stack from '@mui/material/Stack';

// export default function DataTable() {
//   const [users, setUsers] = React.useState(() => JSON.parse(localStorage.getItem('users')) || []);

//   const columns = [
//     { field: 'id', headerName: 'ID', width: 70 },
//     { field: 'score', headerName: 'Score', width: 90, type: 'number' },
//     { field: 'name', headerName: 'Name', width: 160, sortable: false },
//     { field: 'date', headerName: 'Date', width: 160 },
//     { field: 'cat', headerName: 'Category', width: 160, sortable: false },
//     { field: 'diff', headerName: 'Difficulty', width: 160, sortable: false },
//   ];

//   const rows = users.map((user, index) => ({
//     id: index + 1,
//     score: user.score,
//     name: user.userName,
//     date: user.date,
//     cat: user.userCategory,
//     diff: user.userDifficulty,
//   }));

//   const handleClearLeaderboard = () => {
//     localStorage.removeItem('users');
//     setUsers([]);
//   };

// //   return (
// //     <Box sx={{ maxWidth: '1000px', mx: 'auto', mt: 6, px: 2 }}>
// //       <Typography variant="h4" sx={{ mb: 3, fontWeight: 'bold', textAlign: 'center' }}>
// //         🏆 Leaderboard
// //       </Typography>
      
// //       <Stack direction="row" justifyContent="center" spacing={2} sx={{ mb: 2 }}>
// //         <Button variant="outlined" color="error" onClick={handleClearLeaderboard}>
// //           Clear Leaderboard
// //         </Button>
// //       </Stack>

// //       {users.length === 0 ? (
// //         <Typography variant="body1" sx={{ textAlign: 'center', color: 'gray' }}>
// //           No leaderboard data found.
// //         </Typography>
// //       ) : (
// //         <Paper
// //           elevation={3}
// //           sx={{
// //             borderRadius: 3,
// //             overflow: 'hidden',
// //             boxShadow: 4,
// //           }}
// //         >
// //           {/* <DataGrid
// //             rows={rows}
// //             columns={columns}
// //             initialState={{
// //               sorting: {
// //                 sortModel: [{ field: 'score', sort: 'desc' }],
// //               },
// //               pagination: {
// //                 paginationModel: { page: 0, pageSize: 5 },
// //               },
// //             }}
// //             pageSizeOptions={[5, 10]}
// //             sx={{
// //               border: 'none',
// //               fontSize: 16,
// //               '& .MuiDataGrid-columnHeaders': {
// //                 backgroundColor: '#1976d2',
// //                 color: 'white',
// //                 fontSize: 16,
// //               },
// //               '& .MuiDataGrid-cell': {
// //                 py: 1,
// //               },
// //             }}
// //           /> */}
// //           <DataGrid
// //   rows={rows}
// //   columns={columns}
// //   initialState={{
// //     sorting: { sortModel: [{ field: 'score', sort: 'desc' }] },
// //     pagination: { paginationModel: { page: 0, pageSize: 5 } },
// //   }}
// //   pageSizeOptions={[5, 10]}
// //   sx={{
// //     border: 'none',
// //     fontSize: 16,
// //     '& .MuiDataGrid-columnHeaders': {
// //       backgroundColor: '#1976d2',
// //       color: 'white',
// //       fontSize: 16,
// //       fontWeight: 'bold',
// //     },
// //     '& .MuiDataGrid-cell': {
// //       py: 1,
// //     },
// //   }}
// // />

// //         </Paper>
// //       )}
// //     </Box>
//   return(
//     <Box sx={{ maxWidth: '1000px', mx: 'auto', mt: 6, px: 2, bgcolor: '#f5f5f5', minHeight: '100vh' }}>
//   <Typography variant="h4" sx={{ mb: 3, fontWeight: 'bold', textAlign: 'center' }}>
//     🏆 Leaderboard
//   </Typography>

//   <Paper elevation={3} sx={{ borderRadius: 3, overflow: 'hidden', boxShadow: 4 }}>
//   <DataGrid
//   rows={rows}
//   columns={columns}
//   disableColumnFilter
//   disableColumnSelector
//   disableDensitySelector
//   initialState={{
//     sorting: { sortModel: [{ field: 'score', sort: 'desc' }] },
//     pagination: { paginationModel: { page: 0, pageSize: 5 } },
//   }}
//   pageSizeOptions={[5, 10]}
//   sx={{
//     border: 'none',
//     backgroundColor: '#fff',
//     fontSize: 16,
//     '& .MuiDataGrid-columnHeaders': {
//       backgroundColor: '#1976d2',
//       color: '#fff',
//       fontSize: 16,
//       fontWeight: 'bold',
//     },
//     '& .MuiDataGrid-cell': {
//       py: 1,
//     },
//   }}
// />

//   </Paper>
// </Box>

//   );
// }
import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

export default function DataTable() {
  const [users, setUsers] = React.useState(() => JSON.parse(localStorage.getItem('users')) || []);

  const columns = [
    { field: 'id', headerName: 'ID', width: 70, sortable: false },
    { field: 'score', headerName: 'Score', width: 90, sortable: false },
    { field: 'name', headerName: 'Name', width: 160, sortable: false },
    { field: 'date', headerName: 'Date', width: 160, sortable: false },
    { field: 'cat', headerName: 'Category', width: 160, sortable: false },
    { field: 'diff', headerName: 'Difficulty', width: 160, sortable: false },
  ];

  const rows = users.map((user, index) => ({
    id: index + 1,
    score: user.score,
    name: user.userName,
    date: user.date,
    cat: user.userCategory,
    diff: user.userDifficulty,
  }));

  const handleClearLeaderboard = () => {
    localStorage.removeItem('users');
    setUsers([]);
  };

  return (
    <Box sx={{ maxWidth: '1000px', mx: 'auto', mt: 6, px: 2, bgcolor: '#f5f5f5', minHeight: '100vh' }}>
      <Typography variant="h4" sx={{ mb: 3, fontWeight: 'bold', textAlign: 'center' }}>
        🏆 Leaderboard
      </Typography>

      <Stack direction="row" justifyContent="center" spacing={2} sx={{ mb: 2 }}>
        <Button variant="outlined" color="error" onClick={handleClearLeaderboard}>
          Clear Leaderboard
        </Button>
      </Stack>

      {users.length === 0 ? (
        <Typography variant="body1" sx={{ textAlign: 'center', color: 'gray' }}>
          No leaderboard data found.
        </Typography>
      ) : (
        <Paper elevation={3} sx={{ borderRadius: 3, overflow: 'hidden', boxShadow: 4 }}>
          <DataGrid
            rows={rows}
            columns={columns}
            disableColumnMenu
            disableSelectionOnClick
            hideFooterSelectedRowCount
            disableColumnFilter
            disableColumnSelector
            sortingOrder={[]} // ✅ **Disables sorting click altogether, no blue outlines.**
            sx={{
              border: 'none',
              backgroundColor: '#fff',
              fontSize: 16,
              '& .MuiDataGrid-columnHeaders': {
                backgroundColor: '#1976d2',
                color: '#fff',
                fontSize: 16,
                fontWeight: 'bold',
              },
              '& .MuiDataGrid-columnHeader:focus, & .MuiDataGrid-columnHeader:focus-within': {
                outline: 'none',
              },
              '& .MuiDataGrid-cell': {
                py: 1,
              },
            }}
          />
        </Paper>
      )}
    </Box>
  );
}
