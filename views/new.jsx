const React = require('react')
const Default = require('./layouts/Default')

function New(data) {
    return (
      <Default>
        <main>
          <h2>Add a new bread</h2>
          <div className="backButton">
              <a href="/breads">Go back to the index</a>    
          </div>

          <form action="/breads" method="POST">
            <label htmlFor="name">Name</label>
            <input type="text" name="name" id="name" required />

            <label htmlFor="image">Image</label>
            <input type="url" name="image" id="image" />

            <label htmlFor="hasGluten">Has Gluten?</label>
            <input type="checkbox" name="hasGluten" id="hasGluten" defaultChecked />
      
            <label htmlFor="baker">Baker</label>
            <select name="baker" id="baker">
              {data.bakers.map(baker => {
                return (
                  <option value={baker.id}>{baker.name}</option>
                )
              })}
            </select>

            <br />
            <button type="submit">Submit</button>
          </form>
        </main>
      </Default>
    )
}

module.exports = New