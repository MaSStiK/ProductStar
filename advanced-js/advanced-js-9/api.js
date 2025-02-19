const url = "https://jsonplaceholder.typicode.com"

const GetPostById = (id) => {
    return fetch(`${url}/posts/${id}`)
        .then((response) => response.json())
}

const GetUserPosts = (userId) => {
    return fetch(`${url}/posts?userId=${userId}`)
        .then((response) => response.json())
}

const GetAllPosts = () => {
    return fetch(url + "/posts")
        .then((response) => response.json())
}

const GetPostComments = (postId) => {
    return fetch(`${url}/posts/${postId}/comments`)
        .then((response) => response.json())
}

const CreatePost = () => {
    return fetch(url + "/posts", {
        method: "POST",
        body: JSON.stringify({
            title: 'Заголовок поста',
            body: 'Текст поста',
            userId: 199,
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    }).then((response) => response.json())
}

const UpdatePostById = (postId) => {
    return fetch(`${url}/posts/${postId}`, {
        method: "PUT",
        body: JSON.stringify({
            id: 1,
            title: 'Обновленный заголовок поста',
            body: 'Обновленный текст поста',
            userId: 1,
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    }).then((response) => response.json())
}

GetPostById(1).then(json => console.log("GetPostById", json))
GetUserPosts(10).then(json => console.log("GetUserPosts", json))
GetAllPosts().then(json => console.log("GetAllPosts", json))
GetPostComments(15).then(json => console.log("GetPostComments", json))
CreatePost().then(json => console.log("CreatePost", json))
UpdatePostById(99).then(json => console.log("UpdatePostById", json))