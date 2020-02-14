import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";



let store = {
  _state: {
    profilePage: {
      posts: [
          {id: 1, message: 'Hi, how are you', likesCount: '20'},
          {id: 2, message: 'It is my first post', likesCount: '12'} 
        ],
      newPostText: 'It dev'
    },
    
    dialogsPage: {
       dialogs: 
        [
          {id: 1, name: 'Edd'},
          {id: 2, name: 'Ihor'},
          {id: 3, name: 'Nicolas'},
          {id: 4, name: 'Marty'},
          {id: 5, name: 'Emmet'}
        ],
      
      messages: 
        [
          {id: 1, message: 'Hi!'},
          {id: 2, message: 'Hello!!'},
          {id: 3, message: "What's up guys!!"},
          {id: 4, message: "Hey Guy's what was that"},
          {id: 5, message: 'Get outta here!!!'},
        ],
        newMessageBody: '',
    },

    sidebar: {}
  },
  getState() {
    return this._state;
  },
  _callSubscriber() {
    
  },
  
  _updateNewPostText(newText) {
    this._state.profilePage.newPostText = newText;
    this._callSubscriber(this._state);
  },

  subscribe(observer) {
    this._callSubscriber = observer;
  },


  dispatch(action) {

    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.sidebar = sidebarReducer(this._state.sidebar, action);
    
    this._callSubscriber(this._state);
  }
};

export default store;
