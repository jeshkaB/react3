// Зробити компонент, в якому буде форма, за допомоги якої можливо створити нового юзера постовим запитом на http://jsonplaceholder.typicode.com/users
import React from 'react';
import {useForm} from "react-hook-form";

export default function FormNewUser(props) {
    const {register,handleSubmit} = useForm({defaultValues:{name:'name',username:'username' }});
    let obj =(obj)=>{
        fetch ('http://jsonplaceholder.typicode.com/users',
            {method: 'POST',
            body: JSON.stringify(obj),
            headers: {'Content-type': 'application/json; charset=UTF-8'}})
            .then(response=>response.json())
            .then(value=> console.log(value))
    }

    return (
        <div onSubmit={handleSubmit(obj)}>
            <form>
                <input type='text' {...register('name')}/>
                <input type='text' {...register('username')}/>
                <input type='text' {...register('email')}/>
                <input type='text' {...register('address street')}/>
                <input type='text' {...register('address suite')}/>
                <input type='text' {...register('address city')}/>
                <input type='text' {...register('address zipcode')}/>
                <input type='text' {...register('address geo let')}/>
                <input type='text' {...register('address geo lng')}/>
                <input type='text' {...register('phone')}/>
                <input type='text' {...register('website')}/>
                <input type='text' {...register('company name')}/>
                <input type='text' {...register('company catchPhrase')}/>
                <input type='text' {...register('company bs')}/>
                <button>save</button>


            </form>
        </div>
    );
}

