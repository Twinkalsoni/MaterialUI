import { Container, Typography, Paper, Switch} from '@mui/material';
import Navbar from './components/Navbar';
import { ThemeProvider,createTheme} from '@mui/material/styles';
import Mainsection from './components/Mainsection';
import Cards from './components/Cards';
import { useState } from 'react';


function App() {
  const [darkmode , setDarkmode] = useState(false);
const darktheme = createTheme({
  palette:{
    mode: darkmode ? "dark" : "light",
  },
});

  return (
    <div className="App">
      <ThemeProvider theme={darktheme}>
        <Paper style={{height: "100vh"}}>
      <Navbar/>
      <Container>
      <Mainsection/>
     <Cards/>
      </Container>
      <Switch checked={darkmode} onChange={()=> setDarkmode(!darkmode)}/>
      </Paper>
      </ThemeProvider>
    </div>
  );
}

export default App;
