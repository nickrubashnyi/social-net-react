import {act} from "@testing-library/react";

let rerenderEntireTree = (state) => {
    console.log('smth changed')
}

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi', likesCount: 2},
                {id: 2, message: 'Beer', likesCount: 2},
                {id: 3, message: 'I love you', likesCount: 96},
                {id: 4, message: 'Bla-bla-bla', likesCount: 22}
            ],
            newPostText: 'Bred bla-bla'
        },
        dialogsPage: {
            messages: [
                {id: 1, message: 'Hello'},
                {id: 2, message: 'I\'m'},
                {id: 3, message: 'Nooc'},
                {id: 4, message: 'Bot'},
                {id: 5, message: 'Lol'},
            ],
            dialogs: [
                {id: 1, name: 'Nick'},
                {id: 2, name: 'ROma'},
                {id: 3, name: 'Nika'},
                {id: 4, name: 'Sacha'},
                {id: 5, name: 'Masha'},
            ]
        }
    },
    getState() {
        return this._state;
    },
    _callSubscriber() {
        console.log('state is changed')
    },

    subscribe(observer) {
        this._callSubscriber = observer
    },

    dispatch(action) {
        if (action.type === 'ADD-POST') {
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCount: 55
            }
            this._state.profilePage.posts.push(newPost)
            this._state.profilePage.newPostText = ''
            this._callSubscriber(this._state)
        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.newText
            this._callSubscriber(this._state)
        }


    }
}


export default store;
window.store = store;