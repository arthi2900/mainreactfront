import { useState,useEffect } from 'react';
import Button from '@mui/material/Button';
import { TextField } from '@mui/material';
import { useHistory,useParams } from 'react-router-dom';
import { API } from './API';
import {useFormik} from "formik";
import {movieValidationSchema} from "./AddMovie";
import *as yup from "yup";
export function EditMovie() {
  const { id } = useParams();
//  const movie = movielist[id];
 // console.log(movie);
  const [movie,setMovie]=useState(null);
 useEffect(()=> {fetch(`${API}/movies/${id}`,{method:"PUT",})
 .then((data)=>data.json())
 .then((mvs)=>setMovie(mvs))
.catch((err)=>console.log(err));
},[]);
console.log(movie);      
    return (
      <div>
       { movie ? <EditMovieForm movie={movie}/>:<h2>Loading</h2>
      }      </div>
          );
    }
  function EditMovieForm({movie}){
     const history=useHistory();
    const formik = useFormik({
      initialValues: { name: movie.name,
         poster: movie.poster,rating:movie.rating,summary:movie.summary,
         starCast:movie.starCast },
    validationSchema:movieValidationSchema, 
    onSubmit:(updatedMovie)=>{
    editMovie(updatedMovie);
        },
  });
    const editMovie=(updatedMovie)=>{ 
   console.log("updated",updatedMovie);
      fetch(`${API}/movies/${movie.id}`,{method:"PUT",
      body:JSON.stringify(updatedMovie),
    headers:{
      "Content-Type":"application/json"
    }
    }).then(()=>history.push("/movies"));
    
    }
    
return(
  <form onSubmit={formik.handleSubmit} className="add-movie-form">
  <TextField label="Movie Name"  id="name" type="text" name="name"
  onChange={formik.handleChange} value={formik.values.name} 
  error={formik.touched.name && formik.errors.name} 
  helperText={formik.touched.name && formik.errors.name?formik.errors.name :"" }/>
  <TextField label="Movie poster" id="poster" name="poster"
  onChange={formik.handleChange} value={formik.values.poster} 
  error={formik.touched.poster && formik.errors.poster} 
  helperText={formik.touched.poster && formik.errors.poster?formik.errors.poster :"" }/>
  <TextField  label="Movie rating" id="rating"name="rating"
  onChange={formik.handleChange} value={formik.values.rating} 
  error={formik.touched.rating && formik.errors.rating} 
  helperText={formik.touched.rating && formik.errors.rating?formik.errors.rating :"" }/>
 
  <TextField  label="Movie starCast" id="starCast" placeholder="starCast" name="starCast"
  onChange={formik.handleChange} value={formik.values.starCast} 
  error={formik.touched.starCast && formik.errors.starCast} 
  helperText={formik.touched.starCast && formik.errors.starCast?formik.errors.starCast :"" }/>
  <TextField  label="Movie summary" id="summary"  onChange={formik.handleChange} name="summary"
  value={formik.values.summary} error={formik.touched.summary && formik.errors.summary} 
  helperText={formik.touched.summary && formik.errors.summary?formik.errors.summary :"" }/>
  
  <Button variant="contained" color="success" type="submit">save</Button>
</form>
)
  }
 
  