const React = require('react');
const Default = require('./layouts/Default');

function Show({bread, index}){
    
    return (
        <Default>
            <main className='text-center'>
                <h1>{bread.name}</h1>
                <p>and it 
                    {
                    bread.hasGlutten 
                        ? <span> does </span>
                        : <span> does not </span>
                    } have glutten</p>
                <img src={bread.image} alt={bread.name} />
                <a href="/breads">Go home</a>
            
                <form action={`/breads/${index}?_method=DELETE`} method="POST">
                    <button type='submit'>DELETE</button>
                </form>

            </main>
        </Default>
    )
}

module.exports = Show;