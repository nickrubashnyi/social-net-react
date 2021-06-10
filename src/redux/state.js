import {rerenderEntireTree} from "../render";

let state = {
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
}

export let addPost = (postMessage) => {
    let newPost = {
        id: 5,
        message: postMessage,
        likesCount: 54
    };

    state.profilePage.posts.push(newPost);
    rerenderEntireTree(state)
}

export let updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText
    rerenderEntireTree(state)

}

export default state;