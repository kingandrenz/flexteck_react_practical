import React from "react";

const Cards = ({ id, name, email }) => {
    return (
        <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
            <div>
                <img alt="Robot" src={`https://robohash.org/${id}?size=200x200`} />
            </div>

            <h2>{name}</h2>
            <p>{email}</p>
        </div>
    )
}


export default Cards;