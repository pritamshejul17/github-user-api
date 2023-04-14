const searchButton = document.querySelector('button');
const userInfo = document.getElementById("user-info");
console.log(userInfo);
searchButton.addEventListener('click', function() {
    const searchInput = document.querySelector('input');
    const userName = searchInput.value;
    if (userName.length == 0)
        alert("Please enter user name ")

    fetch(`https://api.github.com/users/${userName}`)
    .then((response) => response.json())
    .then((user) => {
        if (user.message === undefined) {
            const html = `<div class="flex flex-col items-center sm:justify-center sm:flex-row">
                    <div class="">
                        <img class="h-150 w-100 p-4" src = "${user.avatar_url}">
                    </div>
                    <div class = "flex flex-col justify-center text-lg font-medium text-stone-600 bg-stone-100 shadow-md p-10">
                        <h1 class="p-1 text-2xl">${user.name}</h1>
                        <h1 class="mt-4 p-1">Repositories : ${user.public_repos}</h1>
                        <h1 class="mt-2 p-1">Followers : ${user.followers}</h1>
                        <h1 class="mt-2 p-1">Following : ${user.following}</h1>
                        <h1 class="mt-4 p-1">Github Profile : <a class = "text-sky-700" target = "blank" href = "${user.html_url}">${user.html_url}</a></h1>
                    </div>
                    </div>`;

    userInfo.innerHTML = html;
        }
        else {
            alert("Please Enter Valid Username");
        }
    })

})




