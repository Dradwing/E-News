import React from "react"
import "../App.css"
function Card(props)
{  
    return(
        <div className="card">
            <img src={props.urlToImage}alt="No image available"className="imageforcard"/>
            <h5>{props.title}</h5>
            <p>{props.description}</p>
            <div className="redirect">
            <i class="fas fa-newspaper newsicon"></i>
            <a href={props.url}className="read">Read More..</a>
            </div>
        </div>

    )
};
export default Card;