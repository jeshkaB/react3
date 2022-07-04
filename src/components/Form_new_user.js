// Зробити компонент, в якому буде форма, за допомоги якої можливо створити нового юзера постовим запитом на http://jsonplaceholder.typicode.com/users
import {useForm} from "react-hook-form";
import {saveUser} from "../services/api.service";



function FormNewUser(props) {
   const {register,handleSubmit, formState:{errors}} = useForm({defaultValues:
           {name:'name',
               username:'username',
               email:'email',
               phone: "phone",
               website:'website',
               address:{street:'address:street',suite:'address:suite', city:'address:city',zipcode:'address:zipcode', geo:{let:'address: geo let', lng:'address: geo lng'}},
               company:{name:'company name', catchPhrase:'company catchPhrase', bs:'company bs'}}});
   const submit = (obj)=>{saveUser(obj).then(result=>console.log(result))}
    return (
        <div >
            <form onSubmit={handleSubmit(submit)}>
                <input type='text' {...register('name', {required: true})}/>
                {errors.name && <span>Field is required</span>}
                <input type='text' {...register('username', {required: true})}/>
                {errors.username && <span>Field is required</span>}
                <input type='text' {...register('email', {required: true})}/>
                {errors.email && <span>Field is required</span>}
                <input type='text' {...register('address.street')}/>
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
export {FormNewUser}
