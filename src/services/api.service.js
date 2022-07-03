const saveUser=(obj)=>{
    return fetch ('http://jsonplaceholder.typicode.com/users',
        {method: 'POST',
            body: JSON.stringify(obj),
            headers: {'Content-type': 'application/json; charset=UTF-8'}})
        .then(response=>response.json())}


export {saveUser}