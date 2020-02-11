
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
          {id: 1, message: "Hi!"},
          {id: 2, message: "Hello!!"},
          {id: 3, message: "What's up guys!!"},
          {id: 4, message: "Hey Guy's what was that"},
          {id: 5, message: "Get outta here!!!"},
        ]
    }
  },
  getState() {
    return this._state;
  },
  _callSubscriber() {
  },
  _addPost() {
    let newPost = {
      id: 5,
      message: this._state.profilePage.newPostText,
      likesCount: 5
    };
  
    this._state.profilePage.posts.push(newPost);
    this._state.profilePage.newPostText = '';
    this._callSubscriber(this._state);
  },
  
  _updateNewPostText(newText) {
    this._state.profilePage.newPostText = newText;
    this._callSubscriber(this._state);
  },

  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    if (action.type === 'ADD-POST') {
      this._addPost();
    } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
      this._updateNewPostText(action.newText);
    }
  }
};


export default store;
window.store = store;