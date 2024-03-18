import "./OneCard.css";
function OneCard({name,description1,description2,price}) {
    return <h3 className="OneCard">{name} {description1} {description2} {price}</h3>
}

export default OneCard;