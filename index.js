let post = document.getElementById('enter');
    post.addEventListener('click', function(){
        let userField = document.getElementById('username').value;
        let color = document.getElementById('color-picker').value;
        let comment = document.getElementById('textarea').value;
        let u = document.createElement('p')
        let p = document.createElement('p');
        u.classList.add(color);
        p.classList.add('message');
        let user = document.createTextNode(userField);
        let text = document.createTextNode(comment);
        u.appendChild(user)
        p.appendChild(text);
        document.getElementById('messages').appendChild(u);
        document.getElementById('messages').appendChild(p);
    })
//To Do
    //Assign color value to Username based on selector value
//add reply box
    //make hidden div
    //add click event listener to clicking a comment
        //check if a hidden div is already nested inside of that specific P
        //if yes, simply reveal Div, if no, create new
        //add button to re-hide div
        //apply same username to div comments
//make it all permanent affecting actual code/server instead of immediate DOM
