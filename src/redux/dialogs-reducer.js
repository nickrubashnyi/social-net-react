const ADD_MESSAGE = 'ADD_MESSAGE'
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT"

const dialogsReducer = (state, action) => {
    switch (action.type){
        case ADD_MESSAGE:
            let newMes = {
                id: 5,
                message: state.newMessageText,
            }
            state.messages.push(newMes)
            state.newMessageText = ''
            return state
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.newMessage
            return state
        default:
            return state

    }
}

export const addMessageActionCreator = () => {
    return {type: ADD_MESSAGE}
}
export const updateNewMessageTextActionCreator = (text) => {
    return {type: UPDATE_NEW_MESSAGE_TEXT, newMessage: text}
}

export default dialogsReducer