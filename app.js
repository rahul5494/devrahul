const express = require('express');
const { createClient } = require('@supabase/supabase-js');
const path = require('path');

const app = express();
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));
app.get('/', async (req, res) => {
    res.render('index');
});

app.get('/about-me', (req,res) => {
    res.render('about')
})

app.get('/contact-me', (req,res) => {
    res.render('contact')
})

app.get('/projects', (req,res) => {
    res.render('projects')
})
const PORT = process.env.PORT || 5000;
app.listen(PORT, '0.0.0.0', () => {
  console.log('Server is running on http://192.168.174.222:5000');
});