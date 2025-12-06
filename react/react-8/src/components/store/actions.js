export const SET_SHOW_CHATS = "SET_SHOW_CHATS"
export const SET_USER_TOKEN = "SET_USER_TOKEN"
export const SET_USER_NAME = "SET_USER_NAME"
export const SET_CHATS = "SET_CHATS"

export const setShowChats = isShowChats => ({
    type: SET_SHOW_CHATS,
    payload: isShowChats
})

export const setUserToken = userToken => ({
    type: SET_USER_TOKEN,
    payload: userToken
})

export const setUserName = userName => ({
    type: SET_USER_NAME,
    payload: userName
})

export const setChats = chats => ({
    type: SET_CHATS,
    payload: chats
})