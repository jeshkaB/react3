function User({users,choseUser}) {
    return (
        <div>
            <h2> {users.id} {users.name}</h2>
            <button onClick={()=>choseUser(users)}> company </button>
        </div>
    );
}

export default User;