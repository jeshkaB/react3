// Зробити компонент, в якому буде форма, за допомоги якої можливо створити новий комментар постовим запитом на http://jsonplaceholder.typicode.com/comments
import React from 'react';
import {useForm} from "react-hook-form";
import {saveComments} from "./api.service";

export default function FormNewComments(props) {
  let {register, handleSubmit}=useForm({defaultValues:{postId: 'postId', name: 'name', email: 'email', body: 'body'}})
    let obj = (obj)=>{
     saveComments(obj).then(({data})=>console.log(data))
    }

    return (
        <div>
<form onSubmit={handleSubmit(obj)}>
    <input type='text'{...register('postId')}/>
    <input type='text'{...register('name')}/>
    <input type='text'{...register('email')}/>
    <input type='text'{...register('body')}/>
    <button>save</button>

</form>
        </div>
    );
}

