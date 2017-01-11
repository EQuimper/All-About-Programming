# Code a Universal React App

make a pages folder and this is what we import in the routes

```js
<div>
  {children || 'This is content here...'}
</div>
```
He did that cause we don't know if we got something before the props is passing.

client-app.js

```js
window.addEventListener('load', e => {
  render(<AppRoutes, document.getElementById('guitar-app'));
});
```

server-app.js

```js
import Express from 'express';
import path from 'path';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { match, RouterContext } from 'react-router';
import routes from './filetoroutes';

const app = new Express();
app.set('view engine', 'ejs');
app.set('view', path.join(__dirname, 'views'));
app.use(Express.static(path.join(__dirname, 'public')));

app.get('*', (req, res) => {
  match({ routes, location: req.url }, (err, redirectLocation, renderProps) => {
    if (err) { return res.status(500).send(err.message); }

    if (redirectLocation) { return res.redirect(302, redirectLocation.pathname + redirectLocation.search); }

    if (renderProps) {
      let html = renderToString(<RouterContext {...renderProps} />);

      return res.render('guitar-page', { html });
    }

    return res.status(404).send('Not Found');
  });
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, err => {
  if (err) { console.error(err); }

  console.log('Express running');
});
```

Past the html in guitar-page.ejs
