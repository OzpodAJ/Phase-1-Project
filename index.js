// var post= document.getElementById("post");
// post.addEventListener("click", function(){
//     var commentBoxValue= document.getElementById("comment-box").value;
//     var li = document.createElement("li");
//     var text = document.createTextNode(commentBoxValue);
//     li.appendChild(text);
//     document.getElementById("unordered").appendChild(li);
 
// });
    let post = document.getElementById('enter');
    post.addEventListener('click', function(){
        let comment = document.getElementById('textarea').value;
        let p = document.createElement('p');
        p.classList.add('message')
        let text = document.createTextNode(comment)
        p.appendChild(text);
        document.getElementById('messages').appendChild(p);
    })
    // let username = document.getElementById('Username').value;
    // let colorValue = document.getElementById("color=picker").value;
    // let name = doucment.createElement('p');
    // name.classList.add(colorValue)
    // let input = document.createTextNode(username);
    // name.appendChild(input);
    // doucment.getElementById('messages').appendChild(name);