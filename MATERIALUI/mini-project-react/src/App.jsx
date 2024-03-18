import './App.css';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';

function App() {
  return (
    <>
      <h1>Material UI Demo</h1>
       <Button variant="contained">Contained</Button>
       <Button variant="contained" color="success">Contained</Button>
       <Button variant="contained" color="error">Contained</Button>
       <Button variant="outlined" startIcon={<DeleteIcon />}>
        Delete
      </Button>
    </>
  )
}

export default App
