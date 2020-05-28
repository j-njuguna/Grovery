$(document).ready(function() {
    $('.menu-toggle').click(function() {
        $('nav').toggleClass('active');
        $('nav ul').toggleClass('active');

    });

    $(".post-wrapper").slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        dots: true,
        autoplaySpeed: 2000,
        nextArrow: $('.next'),
        prevArrow: $('.prev'),
    });
    
    
});

const express = require('express');
const hbs = require('hbs');

const app = express();

app.use('/main.js', express.static('public'));
app.set('view engine', 'hbs');
app.set('views', __dirname + '/views');
hbs.registerPartials(__dirname + '/views/partials/');

// 1st Page Route (URL Endpoint)

app.get('/', (request, response) => {
    const data = {
        projectName: process.env.PROJECT_DOMAIN,
        luckyNumber: Math.floor(Math.random() * 1000),
        serverTime: new Date(),
        ip: (request.headers['x-forwarded-for'] || '').split(',')[0],
    };
    data.json = JSON.stringify(data, null, 2);

    response.render('index', data);
});

// 2nd Page Route (URL Endpoint)

app.get('/recipe', (request, response) => {
    const data = {
        projectName: process.env.PROJECT_DOMAIN,
        luckyNumber: Math.floor(Math.random() * 1000),
        serverTime: new Date(),
        ip: (request.headers['x-forwarded-for'] || '').split(',')[0],
    };
    data.json = JSON.stringify(data, null, 2);
    response.render('recipe', data);
});

/**home**/

app.get('/home', (request, response) => {
    const data = {
        projectName: process.env.PROJECT_DOMAIN,
        luckyNumber: Math.floor(Math.random() * 1000),
        serverTime: new Date(),
        ip: (request.headers['x-forwarded-for'] || '').split(',')[0],
    };
    data.json = JSON.stringify(data, null, 2);

    response.render('home', data);
});


//3rd home

app.get('/register', (request, response) => {
    const data = {
        projectName: process.env.PROJECT_DOMAIN,
        luckyNumber: Math.floor(Math.random() * 1000),
        serverTime: new Date(),
        ip: (request.headers['x-forwarded-for'] || '').split(',')[0],
    };
    data.json = JSON.stringify(data, null, 2);

    response.render('register', data);
});


/*login*/

app.get('/login', (request, response) => {
    const data = {
        projectName: process.env.PROJECT_DOMAIN,
        luckyNumber: Math.floor(Math.random() * 1000),
        serverTime: new Date(),
        ip: (request.headers['x-forwarded-for'] || '').split(',')[0],
    };
    data.json = JSON.stringify(data, null, 2);

    response.render('login', data);
});

// contact Page Route (URL Endpoint)

app.get('/contact', (request, response) => {
    const data = {
        projectName: process.env.PROJECT_DOMAIN,
        luckyNumber: Math.floor(Math.random() * 1000),
        serverTime: new Date(),
        ip: (request.headers['x-forwarded-for'] || '').split(',')[0],
    };
    data.json = JSON.stringify(data, null, 2);
    response.render('contact', data);
});

const listener = app.listen(process.env.PORT, () => {
    console.log('Your app is listening on port ' + listener.address().port);
});
