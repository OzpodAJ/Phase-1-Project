document.querySelector('form').addEventListener('submit', post)
function post(e){
    e.preventDefault()
    let postObj = {
        username: e.target.username.value,
        message: e.target.textarea.value,
        color: e.target.colorpicker.value,
    }
    pushMessage(postObj)
    postMessage(postObj)
}
function postMessage(content){
    let newMessage = document.createElement('div')
    newMessage.className = 'post'
    newMessage.innerHTML = `
    <p class="${content.color}">${content.username}</p>
    <p class="message">${content.message}</p>
    <div class="replyDiv">
        <form>
            <input type="text" name="text" placeholder="your reply" id="replyText" required>
            <button type="submit" id="rplyBtn" class="enter">Reply</button>
        </form>
    </div>
    `
    document.getElementById('messages').appendChild(newMessage)
}
function setColor(){
    let color = document.getElementById('colorpicker').value;
    picker.setAttribute('class', color)
    console.log(picker.value)
    if (picker.value === "red"){
        picker.style.backgroundColor = "#f08080"
    }else if (picker.value === "purple"){
        picker.style.backgroundColor = "#CBC3E3"
    }else if (picker.value === "green"){
        picker.style.backgroundColor = "#93E9BE"
    }else if (picker.value === "blue"){
        picker.style.backgroundColor = "#89CFF0"
    }
}
let picker = document.getElementById('colorpicker');
picker.addEventListener("input",setColor);

function fetchMessage(){
    fetch('http://localhost:3000/posts')
    .then(res => res.json())
    .then(messageData => messageData.forEach(newMessage => postMessage(newMessage)))
}
fetchMessage()
function pushMessage(postObj){
    fetch('http://localhost:3000/posts', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body:JSON.stringify(postObj),
    })
    .then(res => res.json())
    .then(newMessage => console.log(newMessage.id))
}
