// Зробити компонент, в якому буде форма, за допомоги якої можливо створити нового юзера постовим запитом на http://jsonplaceholder.typicode.com/users
import {useForm} from "react-hook-form";

import {saveUser} from "../services/api.service";

export default function FormNewUser(props) {
   const {register,handleSubmit, formState:{errors}} = useForm({defaultValues:{name:'name',username:'username',email:'email', phone: "phone", website:'website',}});
   const submit = (obj)=>{saveUser(obj).then(result=>console.log(result))}
    return (
        <div >
            <form onSubmit={handleSubmit(submit)}>
                <input type='text' {...register('name')}/>
                {errors.name && <span>Field is required</span>}
                <input type='text' {...register('username')}/>
                {errors.username && <span>Field is required</span>}
                <input type='text' {...register('email')}/>
                {errors.email && <span>Field is required</span>}
                <input type='text' {...register('address.street')}/>
                {/*{errors.address.street && <span>Field is required</span>}*/}
                <input type='text' {...register('address.suite')}/>
                <input type='text' {...register('address.city')}/>
                <input type='text' {...register('address.zipcode')}/>
                <input type='text' {...register('address.geo.let')}/>
                <input type='text' {...register('address.geo.lng')}/>
                <input type='text' {...register('phone')}/>
                <input type='text' {...register('website')}/>
                <input type='text' {...register('company.name')}/>
                <input type='text' {...register('company.catchPhrase')}/>
                <input type='text' {...register('company.bs')}/>
                <button>save</button>


            </form>
        </div>
    );
}

