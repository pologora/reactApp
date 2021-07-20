
import React from 'react';
import Article from '../components/Article';

const articles = [
    {
        id:1,
        title: "Czym jest teoria strun",
        author: "Robert",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis mollitia ex qui voluptates aliquid repellat, nulla at consectetur debitis esse, veritatis id blanditiis enim natus deserunt temporibus ipsa tempore velit?:",
        
    },
    {
        id:2,
        title: "Czym jest teoria strun",
        author: "Vasia",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis mollitia ex qui voluptates aliquid repellat, nulla at consectetur debitis esse, veritatis id blanditiis enim natus deserunt temporibus ipsa tempore velit?:",
        
    },
    {
        id:3,
        title: "Czym jest teoria strun",
        author: "Agnieszka",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis mollitia ex qui voluptates aliquid repellat, nulla at consectetur debitis esse, veritatis id blanditiis enim natus deserunt temporibus ipsa tempore velit?:",
        
    }
]
const HomePage = () => {
    const artList = articles.map(item => (
        <Article key={articles.id} {...item}/>
    ))
    return (
        <div className="home">
            {artList}
        </div>
    );
}

export default HomePage;