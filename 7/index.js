var arrUser = [];
const ul = document.getElementById("ul");
fetch('https://api.github.com/users')
    .then(Response => Response.json())
    .then(res => {
        arrUser.push(res);
        console.log(arrUser);
        for (let i in res) {
            var li = document.createElement("li");
            var img = document.createElement("img");
            var h3 = document.createElement("h3");
            h3.innerText = res[i].login + "\n-----------------";
            img.setAttribute("src" , res[i].avatar_url);
            li.append(img);
            li.append(h3);
            ul.append(li);
        }
    });