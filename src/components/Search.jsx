import React from "react"
import "@fortawesome/fontawesome-svg-core"


function Search() {

    const Query=(event)=>
    {        
        
            if (event.target.value.trim() !== "" && event.key === 'Enter') {
                alert("search is not available with Free API");
            
    }}

    return (
        <>
            <input type="text" className="searchbar" placeholder="serach for topics,location and sources" onKeyPress={(eo)=>Query(eo)}/>
            <i className="fas fa-search search"></i>
        </>
    )
};
export default Search;
