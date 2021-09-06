import React from "react"
import Card from "./Card.jsx"
import "../App.css"


import axios from "axios"

function Cards(props) {
    var [category,setcategory]=React.useState(props.category);
    var url = "https://newsapi.org/v2/top-headlines?apiKey=b747f749695c4c469540652affd155b8&category=" + category + "&country=in&language=en&pageSize=100";
    const [articles, getarticles] = React.useState([]);
    React.useEffect(() => {
        Data();
    }, [category]);

    var Data = () => {
        axios.get(url)
            .then((response) => {
                const apidata = response.data.articles;
                getarticles(apidata);
            })
            .catch(error => console.error(`Error: $(error)`));
    }

    return (
        <>
        <ul>
        <li onClick={() => setcategory("general")}>General</li>
        <li onClick={() => setcategory("technology")}>Technology</li>
        <li onClick={() => setcategory("entertainment")}>Entertainment</li>
        <li onClick={() => setcategory("science")}>Science</li>
        <li onClick={() => setcategory("sports")}>Sports</li>
        <li onClick={() => setcategory("health")}>Health</li>
        </ul>
            <div id="cards">
                {articles.map(Createcard)}
            </div>
        </>
    )

}


function Createcard(articles) {
    return (
        <Card
            urlToImage={articles.urlToImage}
            title={articles.title}
            description={articles.description}
            url={articles.url}
        />
    )
}
export default Cards;
export {Createcard};
