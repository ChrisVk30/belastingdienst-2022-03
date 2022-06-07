


let connection = new signalR.HubConnectionBuilder()
    .withUrl('/chatHub')
    .build();


connection.on('say', (name, content) => {

    let template = document.querySelector('#chat-message-template').content;
    let clone = template.cloneNode(true);
    clone.querySelector('.name').innerText = name;
    clone.querySelector('.content').innerText = content;

    document.querySelector('#chat-messages').appendChild(clone);
});

connection.start();


function say() {
    let name = document.querySelector('#input-name').value;
    let content = document.querySelector('#input-content').value;

    connection.send('SendMessage', name, content);

    document.querySelector('#input-content').value = '';
}
