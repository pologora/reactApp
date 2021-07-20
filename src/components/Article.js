import React from 'react';

const Article = (props) => {

    const styles = {
        marginTop: 40
    }
    return ( <>
    <article style={styles}>
        <h3 style={{
            marginBottom: 3,
            textTransform: 'uppercase',
            color: 'blueviolet',
        }}>{props.title}</h3>
        <span>{props.author}</span>
        <p>{props.text}</p>
    </article>
    </> );
}
 
export default Article;