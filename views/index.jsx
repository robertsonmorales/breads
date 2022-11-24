const React = require('react');
const Default = require('./layouts/Default');

function Index({breads, title}){
    return (
        <Default title={title}>
            <h2>Breads</h2>
            <div className="newButton">
                <a href="/breads/new"><button>Add a new bread</button></a>
            </div>

            <ul>
                {
                    breads.map((bread, index) => {
                        console.log(bread);
                        return (
                            <li key={index}>
                                <a href={`/breads/${bread._id}`}>{bread.name}</a>
                            </li>
                        )
                    })
                }
            </ul>
        </Default>
    )
}

module.exports = Index;