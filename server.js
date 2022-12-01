// load express
const express = require('express');
// express app
const app = express();
// build 10 routes and view engine
const fs = require('fs') 
app.engine('madeline', (filePath, options, callback) => { // define the view engine called madeline
  fs.readFile(filePath, (err, content) => {
    if (err) return callback(err)
    
    const rendered = content.toString()
      .replace('#title#', '<title>' + options.title + '</title>')
      .replace('#message#', '<h1>' + options.message + '</h1>')
      .replace('#content#','<div>'+ options.content + '</div>' )
      .replace('#list1#', '<li>' + options.list1 +'</li>')
      .replace('#list2#', '<li>' + options.list2 +'</li>')

      return callback(null, rendered);
  })
})
app.set('views', './views') // specify the views directory
app.set('view engine', 'madeline') // register the madeline view engine

app.get('/', (req, res) => {
    res.render('template1', { title: 'Express.js', message: 'Hello there!', content: 'I am Express' })
  });
  
  app.get('/History', (req, res) => {
    res.render('template2', { title: 'Express.js', message: 'Founded by TJ Holowaychuk', content: 'The first release was on 22 May 2010. Version 0.12' })
  });
  
  app.get('/Popularity', (req, res) => {
    res.render('template1', { title: 'Express.js', message: 'Who Uses!', content: 'PayPal, Uber, IBM, Fox Sports' })
  });
  app.get('/Use', (req, res) => {
    res.render('template1', { title: 'Express.js', message: 'Hello there!', content: 'I am Express' })
  });
  
  app.get('/Features', (req, res) => {
    res.render('template2', { title: 'Express.js', message: 'Founded by TJ Holowaychuk', content: 'The first release was on 22 May 2010. Version 0.12', list1: 'Robust routing', list2:'HTTP helpers (redirection, caching, etc)'  })
  });
  
  app.get('/another-one', (req, res) => {
    res.render('template1', { title: 'Express.js', message: 'Back-End Web App FrameWork', content: 'Designed for building web applications and APIs' })
  });
  app.get('/cap1', (req, res) => {
    res.render('template1', { title: 'WebAppFramework', message: 'Routes', content: 'Able to define routes' })
  });
  
  app.get('/cap2', (req, res) => {
    res.render('template2', { title: 'WebAppFramework', message: 'HTTP', content: 'Able to process HTTP requests using Middleware' })
  });
  
  app.get('/cap3', (req, res) => {
    res.render('template1', { title: 'WebAppFramework', message: 'View engine', content: 'Able to use view engine to render dynamic templates.' })
  });
  app.get('/nodemon', (req, res) => {
    res.render('template1', { title: 'DevTool', message: 'Automated', content: 'Used for restarting the Express App' })
  });

let port = 3000;
app.listen(port, function(){
    console.log(`Listening on ${port}`);
});
