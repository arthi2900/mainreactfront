import { Movie } from './Movie';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import { useHistory } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';
import { API } from './API';
export function MovieList() {
  const history=useHistory();
  const getMovies=()=>{
    {fetch(`${API}/movies`,{
      method:"GET",
    })
    .then((data)=>data.json())
    .then((mvs)=>setMovieList(mvs))}
  }
  const [movielist,setMovieList]=useState([]);
  useEffect(()=>getMovies(),[]);
  const deleteMovie=(id)=>{fetch(`${API}/movies/${id}`,{
    method:"DELETE",
  }).then(()=>getMovies());
  
};
 //delete movie-> refresh data()
  return (
    <div className="movie-list">
      {movielist.map(({ name, poster, starCast, rating, summary,id }, index) => (
        <Movie key={index} name={name} poster={poster} starCast={starCast}
          rating={rating} summary={summary}
                   deleteButton={<IconButton aria-label="delete" color="error"
                    style={{marginLeft:"auto"}}
                    onClick={()=>deleteMovie(id)}>
    <DeleteIcon />
    </IconButton>} 
  editButton={  <IconButton onClick={()=>{history.push(`/movies/edit/${id}`)
}}>  <EditIcon />
 </IconButton> }
     id={id}
    />
          ))}
      
    </div>
  );
}

