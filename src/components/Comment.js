import React from 'react'
import img from '../assets/comment-profile.png';


function Comment({data}){
  return (    
    <div>
      <img src={img} /> 
      <div>
      <strong>{ data.author.name } </strong>
      { data.content }
      </div>
    </div>
  )
}

export default Comment;