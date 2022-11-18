const React = require('react')
const Default = require('./layouts/Default')

function New() {
    return (
      <Default>
        <h2>Add a new bread</h2>
        <div className="backButton">
            <a href="/breads">Go back to the index</a>    
        </div>

        <form action="/breads" method="POST">
          <label htmlFor="name">Name</label>
          <input type="text" name="name" id="name" required />

          <label htmlFor="image">Image</label>
          <input type="text" name="image" id="image" />

          <label htmlFor="hasGluten">Has Gluten?</label>
          <input type="checkbox" name="hasGluten" id="hasGluten" defaultChecked />

          <br />
          <button type="submit">Submit</button>
        </form>
      </Default>
    )
}

module.exports = New