import React from 'react';
import img from '../assets/post-profile.png';

import Comment from './Comment'

function Post({ data }){
  return(
    <div className="post">

      <div className="post-profile">
        <img src={img} />
        <div>
          <h3>  { data.author.name }</h3>
          <span> { data.date }</span>
        </div>
      </div>

      <p>Pessoal, alguém sabe se a Rocketseat está contratando?</p>

      <div className="comments">
        {data.comments.map(comment => <Comment key={comment.id} data={comment} />) }
      </div>
    </div>
  )
}

export default Post;