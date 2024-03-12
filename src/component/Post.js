import React, { useState } from 'react'
import PropTypes from "prop-types";
import { addPost } from '../Action/postActions';
const Post = ({addPost}) => {

    const [text, setText] = useState("");

    // const handleSubmit= (e)=>{
    //     e.preventDefault();
    //     addPost({text});
    //     setText("");
    // }
  return (
   <form onSubmit={(e)=>{
    e.preventDefault();
        addPost({text});
        setText("");
   }} >
      <textarea name='text' placeholder='create post' onChange={(e)=> setText(e.target.value)} />  
      <button type='submit'>Submit</button>
   </form>
  )
}

Post.propTypes = {
    addPost: PropTypes.func.isRequired, // add post action
    };

export default Post;
