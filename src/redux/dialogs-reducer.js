const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';
const ADD_MESSAGE = 'ADD-MESSAGE';

const initialState = {
    dialogs: [
        {id: 1, name: 'Andrey', avatarUrl: 'https://gambolthemes.net/workwise-new/images/resources/m-img1.png'},
        {id: 2, name: 'Sergey', avatarUrl: 'https://gambolthemes.net/workwise-new/images/resources/m-img2.png'},
        {
            id: 3,
            name: 'Valeriy',
            avatarUrl: 'https://gambolthemes.net/workwise-new/images/resources/m-img3.png'
        },
        {id: 4, name: 'Matvey', avatarUrl: 'https://gambolthemes.net/workwise-new/images/resources/m-img4.png'},
        {id: 5, name: 'Sasha', avatarUrl: 'https://gambolthemes.net/workwise-new/images/resources/m-img5.png'},
    ],
    messages: [
        {id: 1, message: 'Hi', isMyMessage: false},
        {id: 2, message: 'How are you?', isMyMessage: false},
        {id: 3, message: 'Hello!', isMyMessage: true},
        {id: 4, message: 'I am fine, and you?', isMyMessage: true},
        {id: 5, message: 'I am very good, how about our project?', isMyMessage: false},
        {id: 6, message: 'What is the project?', isMyMessage: true},
        {id: 7, message: 'Our common project in university', isMyMessage: false},
        {id: 8, message: 'I was resting, I\'m just starting my part now', isMyMessage: true}
    ],
    newMessageText: ''
};

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case UPDATE_NEW_MESSAGE_TEXT: {
            const stateCopy = {...state};
            stateCopy.newMessageText = action.newText;
            return stateCopy;
        }
        case ADD_MESSAGE:
            const newMessage = {
                id: 9,
                message: state.newMessageText,
                isMyMessage: true
            };
            const stateCopy = {...state};
            stateCopy.messages = [...state.messages];
            stateCopy.messages.push(newMessage);
            stateCopy.newMessageText = '';
            return stateCopy;
        default:
            return state;
    }
};

export const updateNewMessageTextActionCreator = (text) => ({type: UPDATE_NEW_MESSAGE_TEXT, newText: text});
export const addMessageActionCreator = () => ({type: ADD_MESSAGE});

export default dialogsReducer;