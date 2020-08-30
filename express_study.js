const express = require('express');

const app = express();

app.get('/', (request, response) => {
    response.send('Vincent');
});

app.get('/server', (request, response) => {
    // 允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');

    response.send('Hello AJAX');
});

app.all('/server', (request, response) => {

    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Allow-Headers', '*'); // 前台就可以随意添加 header //xhr.setRequestHeader('key1', 'value1');

    response.send('Hello AJAX 2');
});

app.all('/cache', (request, response) => {

    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Allow-Headers', '*'); // 前台就可以随意添加 header //xhr.setRequestHeader('key1', 'value1');

    response.send('Hello AJAX -- No cahce');
});

app.all('/json-server', (request, response) => {

    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Allow-Headers', '*'); // 前台就可以随意添加 header //xhr.setRequestHeader('key1', 'value1');

    let data = {
        name: 'abc'
    };

    response.send(JSON.stringify(data));
});

app.all('/delay', (request, response) => {

    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Allow-Headers', '*'); // 前台就可以随意添加 header //xhr.setRequestHeader('key1', 'value1');

    setTimeout(() => {
        response.send('Delay action');
    }, 3000);
});

app.all('/jquery', (request, response) => {

    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Allow-Headers', '*'); // 前台就可以随意添加 header //xhr.setRequestHeader('key1', 'value1');

    response.send('From Jquery AJAX action');
});

class Hero {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
}

let heros = [];
heros.push(new Hero(1, 'name1'));
heros.push(new Hero(2, 'name2'));
heros.push(new Hero(3, 'name3'));
heros.push(new Hero(4, 'name4'));
heros.push(new Hero(5, 'name5'));
heros.push(new Hero(6, 'name6'));
heros.push(new Hero(7, 'name7'));
heros.push(new Hero(8, 'name8'));
heros.push(new Hero(9, 'name9'));

app.all('/api/heroes', (request, response) => {
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Allow-Headers', '*'); // 前台就可以随意添加 header //xhr.setRequestHeader('key1', 'value1');

    response.send(JSON.stringify(heros));
});

app.all('/api/heroes', (request, response) => {
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Allow-Headers', '*'); // 前台就可以随意添加 header //xhr.setRequestHeader('key1', 'value1');

    response.send(JSON.stringify(heros));
});



app.listen(22546, () => {
    console.log('server start siccess');
});