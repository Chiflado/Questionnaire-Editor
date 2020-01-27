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

function createList(data){
    let list = document.getElementsByClassName('question-list');
    console.log(list);
    // document.querySelector('body').appendChild(list[0]);
    for (let i = 0; i<data.length; i++){
        let postElements =`<div class="question-container">
                                <span class="question">${data[i].question}</span>
                                <span class="date">(${moment.unix(data[i].created_at).format("YYYY/MM/DD HH:mm")})</span>
                            </div>
                            <div class="answer">
                                ${data[i].answer}
                            </div>`;
        let bookDatas = document.createElement('li');
        bookDatas.className = 'question-list-element';
        bookDatas.innerHTML = postElements;
        list[0].appendChild(bookDatas);
    }
}

function handleData(data){
    console.log(data);
}

ajaxCall('GET', handleData);
ajaxCall('GET', createList);