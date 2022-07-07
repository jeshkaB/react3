import {useEffect, useState} from "react";

import PostDetails from "./PostDetails";
import {apiPost} from "../services";
function PostComponent({id}) {
//     const post= async(id)=>{
//         await apiPost().then(value =>console.log(value))    }
//     console.log(post)


    const [post,setPost] = useState([])
    useEffect(()=>{apiPost(id).then(value =>setPost([value]))},[id])
    console.log(post)

    return (
        <div>
            {post.map(post=> <PostDetails post={post} key={post.id}/>
            )}
        </div>
    );
}

export default PostComponent;