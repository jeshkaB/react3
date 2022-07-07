export const apiTodos = ()=>{
    return fetch('https://jsonplaceholder.typicode.com/todos').then(value => value.json())
};
export const apiAlbums = ()=>{
    return fetch('https://jsonplaceholder.typicode.com/albums').then(value => value.json())
};
export const apiComments = ()=>{
    return fetch('https://jsonplaceholder.typicode.com/comments').then(value=>value.json())
};
export const apiPost = (id)=>{
    return fetch('https://jsonplaceholder.typicode.com/posts/'+id).then(value => value.json())

};