const React = require('react');
const Default = require('./layouts/Default');

function Show({bread}){
    
    return (
        <Default>
            <main>
                <h1>{bread.name}</h1>
                <p>and it 
                    {
                    bread.hasGlutten 
                        ? <span> does </span>
                        : <span> does not </span>
                    } have glutten</p>
                <img src={bread.image} alt={bread.name} />
                <a href="/breads">Go home</a>
            </main>
        </Default>
    )
}

module.exports = Show;