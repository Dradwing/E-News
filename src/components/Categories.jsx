import React from 'react';
import Cards from "./Cards"
import "../App.css"

const Categories = () => {
    const [category,setcategory]=React.useState("general");
    //Cards(category);
    return (
        <ul>
        <li onClick={() => setcategory("general")}>General</li>
        <li onClick={() => setcategory("technology")}>Technology</li>
        <li onClick={() => setcategory("entertainment")}>Entertainment</li>
        <li onClick={() => setcategory("science")}>Science</li>
        <li onClick={() => setcategory("sports")}>Sports</li>
        <li onClick={() => setcategory("health")}>Health</li>
        </ul>
    );
}

export default Categories;
