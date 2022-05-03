import { useState,useEffect } from "react";
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';

export function Counter() {
  const [like, setLike] = useState(0);
  const [dislike, setdisLike] = useState(0);
  useEffect(()=>{
    console.log("like is update",like)
  });
  const incrementLike=()=>setLike(like + 1)
  const decrementLike=()=>setdisLike(like + 1)
  return (
    <div className="counter-container">
      <IconButton className="Like-dislike" aria-label="like" color="primary"
        onClick={incrementLike}>
       <Badge badgeContent={like} color="primary">
          👍
        </Badge>
      </IconButton>
      <IconButton className="Like-dislike" color="error" aria-label="dislike"
        onClick={decrementLike}
      >
        👎 {dislike}
      </IconButton>

    </div>
  );
}
