const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT_ACTION_CREATOR = 'UPDATE-NEW-POST-TEXT-ACTION-CREATOR';


let initialState = {
    posts: [
        {id: 1, message: "Hi!", likesCount: 12},
        {id: 2, message: "Hello! How are you?", likesCount: 5},
        {id: 3, message: "Lets go", likesCount: 6},
    ],
    newPostText: "",
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            };
            let stateCopy = {...state};
            stateCopy.posts = [...state.posts];
            stateCopy.posts.push(newPost);
            stateCopy.newPostText = '';
            return stateCopy;
        }
        case UPDATE_NEW_POST_TEXT_ACTION_CREATOR: {
            let stateCopy = {...state};
            stateCopy.newPostText = action.newText;
            return stateCopy;
        }
        default:
            return state;
    }
};
export const addPostActionCreator = () => ({type: ADD_POST});
export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT_ACTION_CREATOR, newText: text});

export default profileReducer;