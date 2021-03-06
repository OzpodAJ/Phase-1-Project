window.addEventListener('DOMContentLoaded', (event) => {
    fetchMessages()
    document.querySelector('#ovrForm').addEventListener('submit', post)
    colorPicker.addEventListener("input",setColor);
})
function post(e){
    e.preventDefault()
    console.log (e)
    let postObj = {
        username: e.target.username.value,
        message: e.target.textarea.value,
        color: e.target.colorpicker.value,
    }
    pushMessages(postObj)
    postMessage(postObj)
}
function postMessage(content){
    const newPost = document.createElement('div')
            newPost.className = 'post';
            newPost.id = content.id;
    const username = document.createElement('p')
            username.className = content.color;
            username.innerText = content.username;
        newPost.appendChild(username)
    const message = document.createElement('p')
            message.className = "message";
            message.innerText = content.message;
        newPost.appendChild(message)
    document.getElementById('messages').appendChild(newPost)
}
const colorPicker = document.getElementById('colorpicker');
function setColor(){
    let color = document.getElementById('colorpicker').value;
    colorPicker.setAttribute('class', color)
    if (colorPicker.value === "red"){
        colorPicker.style.backgroundColor = "#f08080"
    }else if (colorPicker.value === "purple"){
        colorPicker.style.backgroundColor = "#CBC3E3"
    }else if (colorPicker.value === "green"){
        colorPicker.style.backgroundColor = "#93E9BE"
    }else if (colorPicker.value === "blue"){
        colorPicker.style.backgroundColor = "#89CFF0"
    }
}
function fetchMessages(){
    fetch('http://localhost:3000/posts')
    .then(res => res.json())
    .then(messageData => messageData.forEach(newPost => postMessage(newPost)))
}
function pushMessages(postObj){
    fetch('http://localhost:3000/posts', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body:JSON.stringify(postObj),
    })
    .then(res => res.json())
    .then(newPost => console.log(newPost))
}