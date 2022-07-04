// Зробити компонент, в якому буде форма, за допомоги якої можливо створити новий комментар постовим запитом на http://jsonplaceholder.typicode.com/comments

import {useForm} from "react-hook-form";

import {saveComments} from "../services/api.service";

function FormNewComments(props) {
    let {register, handleSubmit, formState: {errors}} = useForm({
        defaultValues: {
            postId: 'postId',
            name: 'name',
            email: 'email',
            body: 'body'
        }
    })
    let submit = (obj) => {
        saveComments(obj).then(({data}) => console.log(data))
    }

    return (
        <div>
            <form onSubmit={handleSubmit(submit)}>
                <input type='text'{...register('postId', {required: true})}/>
                {errors.postId && <span>Field is required</span>}
                <input type='text'{...register('name', {required: true})}/>
                {errors.name && <span>Field is required</span>}
                <input type='text'{...register('email', {required: true})}/>
                {errors.email && <span>Field is required</span>}
                <input type='text'{...register('body', {required: true})}/>
                {errors.body && <span>Field is required</span>}
                <button>save</button>

            </form>
        </div>
    );
}

export {FormNewComments}
