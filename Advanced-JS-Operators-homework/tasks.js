import { users, subjectsSchedule, subjectTranslations } from "./data.js";

// Домашнее задание

/* Задание 1
/* Напишите код который из массива users соберет и вернет объект со следующими свойствами:
/* - userID
/* - userName
/* - email
/* - location
/* - avatarURL
/* - для этого используйте деструктуризацию, и вложенную деструктуризацию
*/

{
    let newUsers = users.map(({
        userID,
        userName,
        email,
        profile: { location, avatarURL }
    }) => {
        return {userID, userName, email, location, avatarURL}
    })

    console.log("Задание 1", newUsers)
}


/* Задание 2
/* Проитеируйтесь по массиву users и выведите в консоль следующие свойства:
/* - userName
/* - email
/* - для вывода консоль воспользуйтесь шаблоном: Имя пользователя: {userName}, email: {email}, статус уведомлений: {notificationStatus}
/* - не у всех включены уведомления на почту. Если уведомления включены выведите в консоль "уведомления включены" иначе "уведомления выключены", для этого используйте тернарный оператор. 
/* - при деструктуризации, может получится так что переменная с email уже есть, придумайте как избежать этой ошибки, например используя псевдонимы
*/

{
    console.log("Задание 2")
    users.map(({
        userName,
        email,
        settings: { notificationPreferences: { email: notificationStatus} }
    }) => {
        console.log(`Имя пользователя: ${userName}, email: ${email}, статус уведомлений: ${notificationStatus ? "уведомления включены" : "уведомления выключены"}`)
    })
}

/* Задание 3
/* Получившийся объект в первом задании, объедините с объектом socialLinks и достаньте language из settings. На выходе должен получиться объект со следующими свойствами:
/* - userID
/* - userName
/* - email
/* - location
/* - avatarURL
/* - bio
/* - facebook
/* - twitter
/* - instagram
/* - language - обратите внимание что это свойство находится в settings и может быть не у всех пользователей
/* - для этого используйте вложенную деструктуризацию и spread оператор
*/

{
    let newUsers = users.map(({
        userID,
        userName,
        email,
        profile: { location, avatarURL, bio },
        socialLinks: { facebook, twitter, instagram },
        settings: { language = "French" }
    }) => {
        return {userID, userName, email, location, avatarURL, bio, facebook, twitter, instagram, language}
    })

    console.log("Задание 3", newUsers)
}

/* Задание 4
/* Проитерируйтесь по массиву users и соберите массив с любимыми песнями каждого пользователя. На выходе должен получиться массив вида:
/* [{ artist: "The Beatles", song: "Let It Be" }, ...]
/* - для этого используйте spread оператор 
/* - используйте вложенную деструктуризацию в параметрах функции и rest оператор
/* - используйте метод reduce
/* - на каждую итерацию возвращайте новый массив объединённый с accumulator например: [...acc, ...favoriteSongs]
*/

{
    let newUsers = users.reduce((
        acc,
        {
            preferences: { music: { favoriteSongs } },
        }) => {
            return [...acc, ...favoriteSongs];
        }, []
    )

    console.log("Задание 4", newUsers)
}

/* Задание 5
/* Проитерируйтесь по массиву users и соберите массив с последней прослушанной песней каждого пользователя. На выходе должен получиться массив вида:
/* [{ artist: "The Beatles", song: "Yesterday", playDate: "2024-01-10" }, ...]
/* - для этого используйте spread оператор
/* - используйте вложенную деструктуризацию в параметрах функции и rest оператор
/* - используйте метод map
*/

{
    let newUsers = []
    users.map(({
        preferences: { music: { recentlyPlayed } },
    }) => {
        newUsers.push(...recentlyPlayed)
    })

    console.log("Задание 5", newUsers)
}

/* Задание 6
/*  Деструктурируйте массив subjectsSchedule и деструктурируйте только чётные дни (вторник, четверг, суббота). 
/* - Суббота отсутствует в массиве, но должна быть в результате. Воспользуйтесь значениями по умолчанию
*/

{
    const [ , Tuesday, , Thursday, , Sunday = ["Physical Education", "English", "Physics"] ] = subjectsSchedule
    console.log("Задание 6", Tuesday, Thursday, Sunday)
}

/* Задание 7
/* Достаньте расписание для понедельника из subjectsSchedule и переведите названия предметов. Для перевода используйте объект subjectTranslations.
/* - Для перевода воспользуйтесь вычисляемыми свойствами
/* - Перевода может и не быть в объекте subjectTranslations, в этом случае используйте оригинальное название. Воспользуйтесь оператором нулевого слияния (nullish coalescing operator) ??
*/

{
    const [ Monday ] = subjectsSchedule
    const Translated = Monday.map(subject => {
        return subjectTranslations[subject] ?? subject
    })

    console.log("Задание 7", Translated)
}

/* Задание 8
/* Возьмите массив subjectsSchedule, скопируйте понедельник и вторник в новый массив, при этом сохранив структуру оригинального массива. 
/* Сделайте это с помощью дестурктуризации и spread оператора. У вас должен получиться новый массив вида: [[предметы понедельника], [предметы вторника]]
/* Копирование должно быть глубоким, т.е. массивы внутри subjectsSchedule не должны быть ссылкой
*/

{   
    const [ Monday, Tuesday ] = subjectsSchedule
    const SubjectsSchedule = [[...Monday], [...Tuesday]]
    console.log("Задание 8", SubjectsSchedule)
}
