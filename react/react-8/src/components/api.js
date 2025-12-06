export async function registration(username, password) {
    const response = await fetch("http://localhost:3001/register", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
    })

    const body = await response.json()
    console.log("Registration response:", body, response.status);
    return { body, response }
}

export async function login(username, password) {
    const response = await fetch("http://localhost:3001/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
    })

    const body = await response.json()
    console.log("Login response:", body, response.status);
    return { body, response }
}

export async function getChats(token) {
    const response = await fetch("http://localhost:3001/chats", {
        method: "GET",
        headers: {
            "Authorization": "Bearer " + token
        }
    })

    const body = await response.json()
    // console.log("Chats get response:", body, response.status);
    return { body, response }
}

export async function postMessage(token, message) {
    const response = await fetch("http://localhost:3001/chats", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + token
        },
        body: JSON.stringify({ body: message }),
    })

    const body = await response.json()
    console.log("Chats response:", body, response.status);
    return { body, response }
}