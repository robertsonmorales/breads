const React = require('react');
const Default = require('./layouts/Default');

function Show({bread, index}){
    console.log(bread)
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
                <p>Baked by {bread.getBakedBy()}</p>
                <br />
                <a href={`/breads/${bread._id}/edit`}>EDIT</a>            
                <form action={`/breads/${bread._id}?_method=DELETE`} method="POST">
                    <button type='submit'>DELETE</button>
                </form>

                <a href="/breads">Go home</a>
            </main>
        </Default>
    )
}

module.exports = Show;