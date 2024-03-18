import OneCard from "./OneCard";
import "./OneCard.css";
function FinalCard() {
    return (
        <div className="FinalCard">
        <OneCard name={"Logitech MX Master"} description1={"8000 DPI"} description2={"5 Programmable buttons"} price={"12495"}/>
        <OneCard name={"Apple Pencil(2nd Gen)"} description1={"Intuitive touch surface"} description2={"Designed for Ipad Pro"} price={"119000"}/>
        <OneCard name={"Zebronics"} description1={"Designed for Ipad Pro"} description2={"Intuitive touch surface"} price={"1599"}/>
        <OneCard name={"Petronics toad"} description1={"Wireless mouse 2.4Ghz"} description2={"Optical orientation"} price={"599"}/>
        </div>
    );
}

export default FinalCard;