import {
    SET_SHOW_CHATS,
    SET_USER_TOKEN,
    SET_USER_NAME,
    SET_CHATS
} from "./actions";

const initialState = {
    isShowChats: false,
    userToken: "",
    chats: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_SHOW_CHATS:
            return {
                ...state,
                isShowChats: action.payload,
            };
        case SET_USER_TOKEN:
            return {
                ...state,
                userToken: action.payload,
            };
        case SET_USER_NAME:
            return {
                ...state,
                userName: action.payload,
            };
        case SET_CHATS:
            return {
                ...state,
                chats: action.payload,
            };
        default:
            return state;
    }
};

export default reducer;