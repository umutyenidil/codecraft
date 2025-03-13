import {fetcher} from "./fetcher.js";

const addInsApiUser = (data) => {
    document.querySelector(".ins-api-users").innerHTML = document.querySelector(".ins-api-users").innerHTML + ` 
  <div class="ins-api-user"
         data-id="${data.id}">
        <div class="header">
            <img src="https://picsum.photos/512?random=${data.id}"
                 alt="https://picsum.photos/512">
        </div>

        <div class="body">
            <div class="body-header">
                <span class="name">${data.name}</span>
                <span class="email">${data.email}</span>
            </div>

            <button class="remove-btn">Remove</button>
        </div>
    </div>`;
};

document.addEventListener("DOMContentLoaded", () => {
    fetcher({
        url: "https://jsonplaceholder.typicode.com/users",
        onPending: (pending) => {
            console.log(pending);
        },
        onData: (users) => {
            for (const user of users) {
                addInsApiUser(user);
            }
        },
        onCacheData: (users) => {
            for (const user of users) {
                addInsApiUser(user);
            }
        },
        onError: (error) => {
            console.log(error);
        }
    });

    document.addEventListener("click", ({target}) => {
        if (target.classList.contains("remove-btn")) {
            console.log(target.closest(".ins-api-user").dataset.id); // kaldirilacak element idsi

            target.closest(".ins-api-user").remove();
        }
    });
});

