import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import InfoIcon from '@mui/icons-material/Info';
import { Counter } from "./Counter";
export function Movie({ name, poster, rating, starCast, summary,deleteButton,id,editButton }) {
  const styles = {
    color: rating > 8 ? "green" : "red",
  };
  const [show, setShow] = useState(true);
  const history=useHistory();
  const summaryStyles = {
    display: show ? "block" : "none",
  };
  return (

    <div className="movie-container">
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          height="140"
          img={poster} alt="image" className="movie-poster" />
        <CardContent>
          <div className='head'>
            <h2 className="movie-name">{name} 
            <IconButton onClick={() => setShow(!show)}>{show ? 
            <ExpandLessIcon/> : <ExpandMoreIcon/>}</IconButton>
              {show ? <p className="movie-summary" 
              style={summaryStyles}>{summary} <p className="movie-starcast" 
              style={summaryStyles}>{starCast} </p></p> : " "}
<IconButton   color="primary" onClick={()=>history.push(`/movies/${id}`)}> <InfoIcon/></IconButton>
                        </h2>
            <p style={styles} className="movie-rating">⭐ {rating} </p>
          </div>
        </CardContent>
        <CardActions>
          <Counter />{deleteButton}{editButton}
         
        </CardActions>
      </Card>

    </div>
  );
}
