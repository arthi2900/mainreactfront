import './App.css';
import {useState} from 'react';
import { Tic } from './Tic';
import { AddColor } from './AddColor';
import{Switch,Route,useHistory} from 'react-router-dom';
import { MovieList} from './MovieList.1';
import { initial_MovieList } from './initial_MovieList';
import { MovieDetails } from './MovieDetails';
import { AddMovie } from './AddMovie';
import { EditMovie } from './EditMovie';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { BasicFrom } from './BasicFrom';


function App() {
  const [mode,setMode]=useState("dark");
    const history=useHistory();
    const theme = createTheme({
      palette: {
        mode: mode,
      },
    });
    const [movielist,setMovieList]=useState(initial_MovieList);
                 return (
                  <ThemeProvider theme={theme}> 
                      <Paper style={{borderRadius:"8px",minHeight:"100vh"}} elevation={4} >
     <div className="App">
                 {/*<ul>
                 <li><Link to="/movies">Movie List</Link></li>
                 <li><Link to="/add">Add Movie</Link></li>
                 <li><Link to="/edit">Edit Movie</Link></li>
                   <li><Link to="/addcolor">ADD COLOR list</Link></li>
                 <li><Link to="/">HOME</Link></li>
                 <li><Link to="/tic">Tic</Link></li>
                 <li><Link to="/tic">Tic</Link></li>        
             </ul>*/}
              <AppBar position="static">
        <Toolbar>
        <Button color="inherit" onClick={()=>history.push("/BasicFrom")}>Home</Button>
        <Button color="inherit" onClick={()=>history.push("/movies")}>Movie List</Button>
        <Button color="inherit" onClick={()=>history.push("/add")}>Add Movie</Button>
        <Button color="inherit" onClick={()=>history.push("/addcolor")}>ADD COLOR list</Button>
          <Button color="inherit" onClick={()=>history.push("/tic")}>Tic</Button>
          <Button color="inherit" style={{marginLeft:"auto"}} startIcon={theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />} onClick={()=>setMode(mode==="light"?"dark":"light")}>{(mode==="light"?"dark":"light")} Mode</Button>
        
       </Toolbar>
      </AppBar>
      <div className='route-container'>

                                  <Switch>
                                  <Route path="/movies/edit/:id"><EditMovie /></Route>
                                    <Route path="/movies/:id"><MovieDetails /></Route>
         <Route path="/add"> <AddMovie/> </Route>
          <Route exact path="/movies">
          
            <MovieList />
          </Route>
          <Route path="/addcolor">
            <AddColor />
          </Route>
          <Route path="/tic">
            <Tic />
          </Route>
          <Route path="/BasicFrom">Welecome to all movie app
          <BasicFrom/></Route>
          <Route path="**">404 error</Route>
        </Switch>
        </div>
              </div>
              </Paper>
              </ThemeProvider>
    );
     }
    export default App;