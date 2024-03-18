import { useState } from "react";
function LikeButton() {
    let [isLiked,setIsLiked] = useState(false);
    let [clicks,setClicks] = useState(0);
    let toggleLiked = ()=> {
        setIsLiked(!isLiked);
        setClicks(clicks+1);
    }

    let likedStyle ={color:"red"};
    return (
        <>
        <h1>Click = {clicks}</h1>
        <p onClick={toggleLiked}>
            {
                isLiked ? <i className="fa-solid fa-heart" style={likedStyle}></i> : <i className="fa-regular fa-heart"></i>
            }
        </p>
        </>
    );
}

export default LikeButton;