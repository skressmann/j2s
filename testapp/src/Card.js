import React from "react";
import './Card.css';

const Card = (props) => {
    const {name, email, id} = props;
    return(
        <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5 card"> 
            <img alt={name} src={`https://robohash.org/${id + '32dfd5ga'}?size=300x300`} />
            <h2>{name}</h2>
            <p>{email}</p>
        </div>
    );
}

export default Card;