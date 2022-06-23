// VARIANT 1 - детальна інфо в батьківському блоці
/*export default function Users({user,choseUser}) {
    return (<div>
        <h2> {user.id} {user.name} </h2>
            <button onClick={()=> {choseUser (user);} }>
                company</button>
    </div>
    );
}*/


// VARIANT 2 - детальна інфо в поточному блоці Users
export default function Users({user}) {
    return (<div className={'userClass'}>
            <h2> {user.id} {user.name} </h2>
            <button onClick={() => {
                let userCompanyBlock = document.createElement('div');
                document.getElementsByClassName('userClass')[user.id - 1].appendChild(userCompanyBlock);
                document.getElementsByTagName('button')[user.id - 1].style.pointerEvents = 'none'
                for (const userKey in user.company) {
                    let p = document.createElement('p');
                    userCompanyBlock.appendChild(p);
                    p.innerText = `${userKey}: ${user.company[userKey]}`;
                }
            }}>
                company
            </button>
        </div>
    );
}
