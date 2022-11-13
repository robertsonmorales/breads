const React = require('react');

function Default(html){
    return (
        <html lang="en">
        <head>
            <meta charSet="UTF-8" />
            <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>{html.title}</title>
        </head>
        <body>
            <h1>HTML rendered!</h1>
            <div className="container">
                {html.children}
            </div>
        </body>
        </html>
    )
}

module.exports = Default;