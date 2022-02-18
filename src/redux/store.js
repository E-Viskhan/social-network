import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import navbarReducer from "./navbar-reducer";

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
        navbar: {
            friends: [
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
                {'id': 3, name: 'Alex', avatarUrl: 'https://gambolthemes.net/workwise-new/images/resources/m-img7.png'}
            ]
        }
    },
    _callSubscriber() {
    },
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._state.navbar = navbarReducer(this._state.navbar, action)
        this._callSubscriber(this._state);
    }
};

export default store;