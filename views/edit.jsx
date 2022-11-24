const React = require('react')
const Default = require('./layouts/Default')

function Edit(data) {
    console.log(data.bread)
    return (
      <Default>
        <main>
          <h2>Edit bread</h2>
          <div className="backButton">
              <a href="/breads">Go back to the index</a>    
          </div>

          <form action={`/breads/${data.bread._id}?_method=PUT`} method="POST">
            <label htmlFor="name">Name</label>
            <input type="text" name="name" id="name" required value={data.bread.name} />

            <label htmlFor="image">Image</label>
            <input type="url" name="image" id="image" value={data.bread.image} />

            <label htmlFor="hasGluten">Has Gluten?</label>
            <input type="checkbox" name="hasGluten" id="hasGluten" defaultChecked={data.bread.hasGlutten} />

            <label htmlFor="baker">Baker</label>
            <select name="baker" id="baker" defaultValue={data.bread.baker}>
              <option value="Rachel">Rachel</option>
              <option value="Monica">Monica</option>
              <option value="Joey">Joey</option>
              <option value="Chandler">Chandler</option>
              <option value="Ross">Ross</option>
              <option value="Phoebe">Phoebe</option>
            </select>
            <br />
            <button type="submit">Submit</button> 
          </form>
        </main>
      </Default>
    )
}

module.exports = Edit;