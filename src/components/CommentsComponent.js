import React, {useEffect, useState} from 'react';

import {apiComments} from "../services";
import CommentComponent from "./CommentComponent";

function CommentsComponent(props) {
    const[comments,setComments]=useState([]);
    useEffect(()=>{apiComments().then(value => setComments([...value]))},[])
    return (
        <div>
            {comments.map(comment=> <CommentComponent comment ={comment} key={comment.id}/>)}
        </div>
    );
}

export default CommentsComponent;