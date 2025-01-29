const url = "https://jsonplaceholder.typicode.com"

// 1) /todos - Сколько всего задач у каждого пользователя?
fetch(`${url}/todos`).then(res => res.json())
    .then(data => {
        let users = {}
        data.forEach(el => {
            if (el.userId in users) {
                users[el.userId]++
            } else {
                users[el.userId] = 1
            }
        })
        console.log("task1", users)
    })
// У каждого пользователя по 20 задач


// 2) /todos - Сколько задач выполнил пользователь с id = 9?
fetch(`${url}/users/9/todos`).then(res => res.json())
    .then(data => {
        let completed = data.filter(el => el.completed)
        console.log("task2", completed.length)
    })
// Пользователь выполнил 8 задач


// 3) /todos - Сколько постов написал каждый пользователь?
fetch(`${url}/posts/`).then(res => res.json())
    .then(data => {
        let users = {}
        data.forEach(el => {
            if (el.userId in users) {
                users[el.userId]++
            } else {
                users[el.userId] = 1
            }
        })
        console.log("task3", users);
    })
// У каждого пользователя по 10 постов


// 4) /todos - Сколько комментариев под постом с id = 11?
fetch(`${url}/posts/11/comments`).then(res => res.json())
    .then(data => {
        console.log("task4", data.length);
    })
// Под постом 5 комментариев


// 5) /todos - Сколько комментариев под постом с id = 11?
fetch(`${url}/posts/100/comments`).then(res => res.json())
    .then(data => {
        console.log("task5", data.length);
    })
// Под постом с id 100 5 комментариев


// 6) /todos - Какая почта у автора комментария с id = 104?
fetch(`${url}/comments/104`).then(res => res.json())
    .then(data => {
        console.log("task6", data.email);
    })
// Gabriel@oceane.biz


// 7) /todos - Как называется альбом с id = 84?
fetch(`${url}/albums/84`).then(res => res.json())
    .then(data => {
        console.log("task7", data.title);
    })
// est et at eos expedita


// 8) /todos - сколько фотографий в альбоме с id = 5?
fetch(`${url}/albums/5/photos`).then(res => res.json())
    .then(data => {
        console.log("task8", data.length);
    })
// В альбоме 50 фото


// 8) /todos - какого цвета изображение с id = 224?
fetch(`${url}/photos/224`).then(res => res.json())
    .then(data => {
        console.log("task8", data);
    })
// Нету возможность посмотреть изображение, есть только ссылка https://via.placeholder.com/600/b273e9


// 9) /todos - какой id имеет последняя фотография в альбоме с id = 32?
fetch(`${url}/albums/32/photos`).then(res => res.json())
    .then(data => {
        console.log("task9", data);
    })
// Опять же нету возможности посмотреть фото, есть только ссылка https://via.placeholder.com/600/708743


// 10) /todos - Какой id у альбома с названием "repellendus praesentium debitis officiis"?
fetch(`${url}/albums`).then(res => res.json())
    .then(data => {
        const album = data.find(el => el.title === "repellendus praesentium debitis officiis")
        console.log("task10", album.id);
    })
// id 91