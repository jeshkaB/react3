import './SimpsonComponent.css'
function SimpsonComponent(props) {
    let {itemName,itemBiography,itemPicture} = props;
    return (
        <div className={'itemSimpson'}>
            <h2> {itemName}</h2>
            <p> {itemBiography}</p>
            <img src={itemPicture} alt={itemName}/>
        </div>
    );
}
export default SimpsonComponent
