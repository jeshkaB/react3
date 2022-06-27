function Company({user}) {
    return (
        <div>
           <h2>{user.company.name}</h2>
           <p>catchPhrase: {user.company.catchPhrase}</p>
           <p>bs: {user.company.bs}</p>
        </div>
    );
}

export default Company;