const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';
const ADD_MESSAGE = 'ADD-MESSAGE';

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi, how are you?', likesCount: 14},
                {id: 2, message: "it's my first post", likesCount: 15}
            ],
            newPostText: ''
        },
        dialogsPage: {
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
        },
        Navbar: {
            Friends: [
                {
                    'id': 1,
                    name: 'Sasha',
                    avatarUrl: 'https://gambolthemes.net/workwise-new/images/resources/m-img5.png'
                },
                {
                    'id': 2,
                    name: 'Masha',
                    avatarUrl: 'https://gambolthemes.net/workwise-new/images/resources/m-img6.png'
                },
                {'id': 3, name: 'Alex', avatarUrl: 'https://gambolthemes.net/workwise-new/images/resources/m-img7.png'},
            ]
        }
    },
    _callSubscriber() {
    },
    get state() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    dispatch(action) {
        switch (action.type) {
            case UPDATE_NEW_POST_TEXT:
                this._state.profilePage.newPostText = action.newText;
                this._callSubscriber(this._state);
                break;
            case ADD_POST:
                let newPost = {
                    id: 5,
                    message: this._state.profilePage.newPostText,
                    likesCount: 0
                };

                this._state.profilePage.posts.push(newPost);
                this._state.profilePage.newPostText = '';
                this._callSubscriber(this._state);
                break;
            case UPDATE_NEW_MESSAGE_TEXT:
                this._state.dialogsPage.newMessageText = action.newText;
                this._callSubscriber(this._state);
                break;
            case ADD_MESSAGE:
                const newMessage = {
                    id: 9,
                    message: this._state.dialogsPage.newMessageText,
                    isMyMessage: true
                };

                this._state.dialogsPage.messages.push(newMessage);
                this._state.dialogsPage.newMessageText = '';
                this._callSubscriber(this._state);
                break;
        }
    }
};

export const updateNewPostTextActionCreator = (text) => ({ type: UPDATE_NEW_POST_TEXT, newText: text });
export const addPostActionCreator = () => ({ type: ADD_POST });
export const updateNewMessageTextActionCreator = (text) => ({type: UPDATE_NEW_MESSAGE_TEXT, newText: text});
export const addMessageActionCreator = () => ({type: ADD_MESSAGE});

export default store;