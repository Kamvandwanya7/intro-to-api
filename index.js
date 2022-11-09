
const userTemplateText = document.querySelector('.usersTemplate');
const userTemplate = Handlebars.compile(userTemplateText.innerText);

const usersElem = document.querySelector('.users');
const postsElem = document.querySelector('.posts');

usersElem.addEventListener('click', function(evt){

    const userId = evt.target.dataset.id;

    if (userId) {
        // call the posts API to get all the posts for a user
        // show the posts on the screen
        axios
            .get(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
            .then(result => {
                const posts = result.data;
                // console.log(posts);
                postsElem.innerHTML = "";
                setTimeout(() => {
                    posts.forEach(post => {
                        postsElem.innerHTML += `<div> ${post.title} </div>`
                    });
                }, 500)
            })
    }
});


axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then(result => {
        const users = result.data;
        
        usersElem.innerHTML = userTemplate({
            users
        });

    });