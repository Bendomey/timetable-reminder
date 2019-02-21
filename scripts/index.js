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
     results.map((d,i)=>{
         name = (d.name.length > 15) ?d.name.slice(15) + '...' : d.name;
         time = d.start_time.slice(0,5);
         obj('.cards').innerHTML += `
         
         <div id="card">
         <div id="courseName">
             ${name} <br>
             <span class="showTime">Time: ${time}</span>
         </div>
         <div><i class="iconclick fa fa-trash" style="color: rgb(0, 128, 75)"></i></div>
     </div>
         
         `
     })
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
    id = Math.floor((Math.random() * 100000) + 1);
    name = obj('#addInput').value
    start_time = obj('#startInput').value
    end_time = obj('#endInput').value
    connection.query('INSERT into remainders VALUES (?,?,?,?)',[id,name,start_time,end_time]);
    location.reload()
});

obj('.iconclick').addEventListener('click',() =>{
    alert("Hello");
});


