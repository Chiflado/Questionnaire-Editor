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

function handleData(data){
    console.log(data);
}

ajaxCall('GET', handleData);