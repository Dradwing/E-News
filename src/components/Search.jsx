import React from "react"
import "@fortawesome/fontawesome-free"
import { Createcard } from "./Cards"
import axios from "axios";
import Cards from "./Cards";

function Search() {
    var [q, setq] = React.useState("");
    var url = "https://newsapi.org/v2/top-headlines?apiKey=b747f749695c4c469540652affd155b8&pageSize=100&q=" + q;
    const [articles, getarticles] = React.useState([]);

    React.useEffect(() => {
        Data();
    }, [q]);


    var Data = () => {
        axios.get(url)
            .then((response) => {
                const apidata = response.data.articles;
                getarticles(apidata);
            })
            .catch(error => console.error(error));
    }

    const Query=(event)=>
    {        
        
            if (event.target.value.trim() !== "" && event.key === 'Enter') {
                setq(event.target.value.trim());
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
