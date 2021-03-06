import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";


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
            ],
            newMessageBody: ''
        },
            sidebar: {}
    },
    _callSubscriber() {
        console.log('state is changed')
    },

    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._state.sidebar = sidebarReducer(this._state.sidebar, action)

        this._callSubscriber(this._state)
    }
}

export default store
window.store = store