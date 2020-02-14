const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
    dialogs: [
          {id: 1, name: 'Edd'},
          {id: 2, name: 'Ihor'},
          {id: 3, name: 'Nicolas'},
          {id: 4, name: 'Marty'},
          {id: 5, name: 'Emmet'}
        ],
      
    messages: [
        {id: 1, message: 'Hi!'},
        {id: 2, message: 'Hello!!'},
        {id: 3, message: "What's up guys!!"},
        {id: 4, message: "Hey Guy's what was that"},
        {id: 5, message: 'Get outta here!!!'},
        ],
    newMessageBody: '',
}

export const dialogsReducer = (state = initialState, action) => {
    
    switch (action.type) {
       
        case UPDATE_NEW_MESSAGE_BODY:
            return {
                ...state,
                newMessageBody:  action.body
            };
    
        case SEND_MESSAGE: 
            let body = state.newMessageBody;
            return {
                ...state,
                newMessageBody: '',
                messages: [...state.messages, {id: 7, message: body}],
            };           
        default:
            return state;
    }
};


export const sendMessageCreator = () =>({ type: SEND_MESSAGE });
export const updateNewMessageBodyCreator = (body) => ({
  type: UPDATE_NEW_MESSAGE_BODY, body: body
});

export default dialogsReducer;