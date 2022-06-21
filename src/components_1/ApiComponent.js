import './ApiComponent.css'

function ApiComponent (props) {
    let {id,name,status,species,gender,image} = props;
    return (
        <div className={'ApiComponent'}>
            <h2> {id} {name} </h2>
            <p> Status: {status} </p>
            <p> Species: {species} </p>
            <p> Gender: {gender} </p>
            <img src={image}/>
        </div>
    )}

export default ApiComponent
