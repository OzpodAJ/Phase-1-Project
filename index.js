document.querySelector('#ovrForm').addEventListener('submit', post)
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
function comment(e){
    e.preventDefault();
    console.log(e)
    let repOb = {
        body: e.target.replyText.value,
        postId: e.target.parentElement.parentElement.id
    }
    pushComment(repOb)
    postComment(postObj, repOb)
}
//target.parentElement.parentElement.id
function postMessage(content){
    let newMessage = document.createElement('div')
            newMessage.className = 'post';
            newMessage.id = content.id;
    const username = document.createElement('p')
            username.className = content.color;
            username.innerText = content.username;
        newMessage.appendChild(username)
    const message = document.createElement('p')
            message.className = "message";
            message.innerText = content.message;
            message.addEventListener('dblclick', ()=>{
                if (replyDiv.style.display === 'none'){
                    replyDiv.style.display = 'block'
                } else {
                    replyDiv.style.display = 'none'
                }
            })
        newMessage.appendChild(message)
    const replyDiv = document.createElement('div');
        replyDiv.className = "replyDiv"
        const rForm = document.createElement('form')
                rForm.id = "udrForm"
                const reply = document.createElement('input');
                        reply.setAttribute('type', 'text');
                        reply.setAttribute('name', 'text');
                        reply.setAttribute('placeholder', 'Your Reply');
                        reply.id = "replyText";
                        reply.required = '';
                rForm.appendChild(reply);
                const repBtn = document.createElement('button');
                        repBtn.setAttribute('type', 'submit')
                        repBtn.className = "enter";
                        repBtn.id = "rplyBtn";
                        repBtn.innerText = "Reply";
                rForm.appendChild(repBtn);
            replyDiv.appendChild(rForm);
        newMessage.appendChild(replyDiv);
        rForm.addEventListener('submit', comment)
    document.getElementById('messages').appendChild(newMessage)
}
function postComment(content, comOb){
    let newComment = document.createElement('div');
            newComment.className = 'comment'
            newComment.id = message.id
    const username = document.createElement('p')
        username.className = content.color;
        username.innerText = content.username;
    newComment.appendChild(username)
    const commentText = document.createElement('p')
        commentText.className = 'comment'
        commentText.innerText = comOb.body
    newComment.appendChild(commentText)
    console.log(document.querySelector('.post'))
}

function setColor(){
    let color = document.getElementById('colorpicker').value;
    picker.setAttribute('class', color)
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
    .then(newMessage => console.log(newMessage))
}
function pushComment(repOb){
    fetch('http://localhost:3000/comments', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body:JSON.stringify(repOb),
    })
    .then(res => res.json())
    .then(newComment => console.log(newComment))
}
function fetchComment(){
    fetch('http://localhost:3000/comments')
    .then(res => res.json())
    .then(messageData => messageData.forEach(newComment => postMessage(newComment)))
}
fetchComment()
{/* <div class="replyDiv">
<form id="udrForm>
    <input type="text" name="text" placeholder="your reply" id="replyText" required>
    <button type="submit" id="rplyBtn" class="enter">Reply</button>
    <button id="hide"class="enter">hide comments</button
</form>
</div> */}