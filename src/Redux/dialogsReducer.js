const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let initialState = {
    messages: [
        {id: 1, message: "Hi!"},
        {id: 2, message: "Hello World!"},
        {id: 3, message: "Show me the money"},
        {id: 4, message: "Fine, nice to meet you!"},
        {id: 5, message: "Whats happen?"},
    ],
    newMessageText: "",
    dialogs: [
        {id: 1, name: "Dima"},
        {id: 2, name: "Andrew"},
        {id: 3, name: "Slava"},
        {id: 4, name: "Sveta"},
        {id: 5, name: "Olga"},
        {id: 6, name: "Sacha"},
        {id: 7, name: "Max"},
    ],
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage = state.newMessageText;
            return {
                ...state,
                newMessageText: '',
                messages: [...state.messages, {id: 6, message: newMessage}]
            };
        case UPDATE_NEW_MESSAGE_TEXT:
            return {
                ...state,
                newMessageText: action.newText
            };
        default:
            return state;
    }
}

export const addMessageActionCreator = () => ({type: ADD_MESSAGE});
export const updateNewMessageActionCreator = (text) => ({type: UPDATE_NEW_MESSAGE_TEXT, newText: text});

export default dialogsReducer;