let state = {
    profilePage: {
        posts: [
            {id: 1, message: 'Hi, how are you?', likesCount: 14},
            {id: 2, message: "it's my first post", likesCount: 15}
        ]
    },
    dialogsPage: {
        dialogs: [
            {id: 1, name: 'Andrey'},
            {id: 2, name: 'Sergey'},
            {id: 3, name: 'Valeriy'},
            {id: 4, name: 'Matvey'},
            {id: 5, name: 'Sasha'},
        ],
        messages: [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'How are you?'},
            {id: 3, message: 'Yo'},
            {id: 4, message: 'Yo'},
            {id: 5, message: 'Yo'},
        ]
    },
    Navbar: {
        Friends: [
            {'id': 1, name: 'Sasha', avatarUrl: 'https://cdn1.iconfinder.com/data/icons/website-internet/48/website_-_male_user-512.png'},
            {'id': 2, name: 'Masha', avatarUrl: 'https://cdn1.iconfinder.com/data/icons/website-internet/48/website_-_female_business-512.png'},
            {'id': 3, name: 'Alex', avatarUrl: 'https://cdn1.iconfinder.com/data/icons/website-internet/48/website_-_male_business-512.png'},
        ]
    }
}

export default state;