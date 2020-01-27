'use strict';

var url = 'https://slvbudpeterm.blob.core.windows.net/recruitment/questions.json';

function ajaxCall(command, callback){
    let xhr = new XMLHttpRequest();
    xhr.open(command, 'https://cors-anywhere.herokuapp.com/' + url);
    xhr.onload = function() {
        let data = JSON.parse(xhr.responseText);
        callback(data)
    };
    xhr.send();
};

let list = document.getElementsByClassName('question-list')[0];

function createList(data) {
    for (let i = 0; i<data.length; i++){
        let postElements =`<div class="question-container">
                                <span class="question">${data[i].question}</span>
                                <span class="date">(${moment.unix(data[i].created_at).format("YYYY/MM/DD HH:mm")})</span>
                            </div>
                            <textarea class="answer" rows="4" cols="50">${data[i].answer}
                            </textarea>`;
        let questions = document.createElement('li');
        questions.className = 'question-list-element';
        questions.innerHTML = postElements;
        list.appendChild(questions);
    }
}

let addButton = document.querySelector('#add-new');
let newQuestion = document.getElementsByName('newQuestion');

addButton.addEventListener('click',function(event){
    if (!newQuestion[0].value || newQuestion[0].value.length < 1) {
        alert('Please add a new question!');
    } else {
        let postElements =`<div class="question-container">
                                <span class="question">${newQuestion[0].value}</span>
                                <span class="date">(${moment().format("YYYY/MM/DD HH:mm")})</span>
                            </div>
                            <textarea class="answer" rows="4" cols="50"></textarea>`;
        let questions = document.createElement('li');
        questions.className = 'question-list-element';
        questions.innerHTML = postElements;
        list.appendChild(questions);
        newQuestion[0].value = '';
    }
});

ajaxCall('GET', createList);