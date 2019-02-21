const electron =  require('electron');
const mysql = require('mysql')
const {ipcRenderer} = electron


let connection = mysql.createConnection({
    host     : '127.0.0.1',
    user     : 'root',
    password : '',
    database : 'remainder'
});


connection.connect();

connection.query('SELECT * from remainders', function (error, results, fields) {
    if (error) throw error;
    alert(JSON.stringify(results));
});



let data;
obj('#button1').addEventListener('click', () => {
    ipcRenderer.send('close:app', true);
});

// obj('#all-task').style.visibility = 'hidden';

obj('.all').addEventListener('click', () => {
    obj('#home').style.visibility = 'hidden';
    obj('.all-task').classList.add('allTaskActive');
});


obj('.active').addEventListener('click', () => {
    obj('.all-task').classList.remove('allTaskActive');
    obj('#home').style.visibility = 'visible';
});

obj('#inputBtn').addEventListener('click',()=>{
    data = obj('#addInput').value
    obj('.cards').innerHTML += `
    <div id="card">
        <div id="courseName">${data}</div>
        <div><i class="fa fa-trash" style="color: rgb(0, 128, 75)"></i></div>
    </div>  
    `
});

obj('.iconclick').addEventListener('click',() =>{
    alert("Hello");
});


