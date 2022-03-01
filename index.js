let post = document.getElementById('enter');
    post.addEventListener('click', function(){
        let userField = document.getElementById('username').value;
        let color = document.getElementById('color-picker').value;
        let comment = document.getElementById('textarea').value;
        let u = document.createElement('p')
        let p = document.createElement('div');
        u.classList.add('userStyle');
        u.style.color = color
        p.classList.add('p');
        p.setAttribute('id', 'message')
        let user = document.createTextNode(`${userField} says`);
        let text = document.createTextNode(comment);
        u.appendChild(user)
        p.appendChild(text);
        document.getElementById('messages').appendChild(u);
        document.getElementById('messages').appendChild(p);
    })
let mBox = document.querySelector('#message')
    mBox.addEventListener('click', () => {
        let replyText = document.createElement('input')
        replyText.setAttribute('id', 'replyText')
        replyText.setAttribute('type', 'text')
        replyText.setAttribute('placeholder', 'Type your reply here')
        let reply = document.createElement('button')
        reply.setAttribute('type', 'submit')
        reply.setAttribute('id', 'replyButton')
        reply.textContent = 'reply'
        reply.onclick = () => {
            let userField = document.getElementById('username').value;
            let color = document.getElementById('color-picker').value;
            let comment = document.getElementById('replyText').value;
            let u = document.createElement('p')
            let p = document.createElement('p');
            u.classList.add(color, 'repUser');
            p.classList.add('repCom')
            let user = document.createTextNode(`${userField} says`);
            let text = document.createTextNode(comment);
            u.appendChild(user)
            p.appendChild(text);
            document.getElementById('replyDiv').appendChild(u);
            document.getElementById('replyDiv').appendChild(p);
        };
        let hide = document.createElement('button');
        hide.setAttribute('id', 'hide');
        hide.setAttribute('type', 'submit');
        hide.textContent = 'Hide Comments';
        hide.onclick = () => {replyBox.style.display = "none";};
        let replyBox = document.createElement('div');
        replyBox.setAttribute('id', 'replyDiv');
        replyBox.appendChild(replyText);
        replyBox.appendChild(reply);
        replyBox.appendChild(hide);
        if (document.getElementById('replyDiv') == null) {
            mBox.appendChild(replyBox);
            replyBox.style.display = "block"
        } else if (document.getElementById('replyDiv') != null){
            replyBox.style.display = "block"
        }
    })
    // reply.addEventListener('click', () => {
    //     let userField = document.getElementById('username').value;
    //     let color = document.getElementById('color-picker').value;
    //     let comment = document.getElementById('replyText').value;
    //     let u = document.createElement('p')
    //     let p = document.createElement('p');
    //     u.classList.add(color, 'repUser');
    //     p.classList.add('repCom')
    //     let user = document.createTextNode(`${userField} says`);
    //     let text = document.createTextNode(comment);
    //     u.appendChild(user)
    //     p.appendChild(text);
    //     document.getElementById('replyDiv').appendChild(u);
    //     document.getElementById('replyDiv').appendChild(p);
    // });
    function setColor(){
        let color = document.getElementById('color-picker').value;
        picker.setAttribute('class', color)
    }
    let picker = document.getElementById('color-picker');
    picker.addEventListener("mouseout",setColor);