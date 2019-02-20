const { app, ipcRenderer } = require('electron');

document.querySelector('#button1').addEventListener('click', () => {
    ipcRenderer.send('close:app', true);
});

// document.querySelector('#all-task').style.visibility = 'hidden';

document.querySelector('.all').addEventListener('click', () => {
    document.querySelector('#home').style.visibility = 'hidden';
    document.querySelector('.all-task').classList.add('allTaskActive');
});


document.querySelector('.active').addEventListener('click', () => {
    document.querySelector('.all-task').classList.remove('allTaskActive');
    document.querySelector('#home').style.visibility = 'visible';
});