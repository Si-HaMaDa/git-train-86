console.log("Main js!");

let posts = fetch(`https://jsonplaceholder.typicode.com/posts`)
    .then((response) => {
        return response.json();
    })
    .then((jsonRes) => {
        // console.log(jsonRes);

        for (let post of jsonRes) {
            // let div = document.createElement("div");
            // let title = document.createElement("h3");
            // let body = document.createElement("p");
            // title.innerHTML = post.title;
            // body.innerHTML = post.body;
            // div.appendChild(title);
            // div.appendChild(body);
            // document.getElementById("posts").appendChild(div);

            $("#posts").append(
                `<div>
                    <h3>${post.title}</h3>
                    <p>${post.body}</p>
                    <br/>
                </div>`
            );
        }
    });
