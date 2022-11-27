const React = require('react');
const Default = require('./layouts/Default');

function Show({bread}){
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
                <p>{bread.getBakedBy()}</p>
                <br />
                <a href={`/breads/${bread.id}/edit`}>EDIT</a>            
                <form action={`/breads/${bread.id}?_method=DELETE`} method="POST">
                    <button type='submit'>DELETE</button>
                </form>

                <a href="/breads">Go home</a>
            </main>
        </Default>
    )
}

module.exports = Show;