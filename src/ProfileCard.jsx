import React from "react"

function ProfileCard (props) {
    const {name, image} = props;
    return (
        <div>
            <h1>{name}</h1>
            <img src={image} alt="imaaaage" />
        </div>
    );
}


export default ProfileCard;