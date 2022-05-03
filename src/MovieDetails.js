import { useParams } from 'react-router-dom';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import { useHistory } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';
import { API } from './API';
export function MovieDetails() {
  const { id } = useParams();
  const history=useHistory();
   const [movie,setMovie]=useState({});
  useEffect(()=> {fetch(`${API}/movies/${id}`,{method:"GET",})
  .then((data)=>data.json())
  .then((mvs)=>setMovie(mvs))
.catch((err)=>console.log(err));
},[]);

  
  
    return (
    <div>
      <h1>arthi</h1>
      <div class="movie-detail-container">
        <div class="movie-space">
          <iframe width="100%" height="650" src={movie.poster} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          <h3>{movie.name}</h3>
          <h3>{movie.rating}</h3>
        </div>
        <p>{movie.starCast}</p>
        <p>{movie.summary}</p>
        <Button variant="outlined" startIcon={<DeleteIcon />}  onClick={()=>history.push('/movies')}>
      Back
      </Button>

      </div>
    </div>

  );

}
