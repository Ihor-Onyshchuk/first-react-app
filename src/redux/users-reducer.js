const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";

let initialState = {
  users: [
    {
      id: 1,
      photoUrl:
        "https://znaj.ua/crops/14d3ce/620x0/1/0/2018/09/18/uf4w6gv7HhvDpjwbVwOIUyEiUdsm0fIyDq3ngy5p.jpeg",
      followed: true,
      fullName: "Vitaliy",
      status: "tough guy",
      location: { city: "Kiyv", country: "Ukraine" }
    },
    {
      id: 2,
      photoUrl:
        "https://i.pinimg.com/originals/b9/60/f8/b960f84ec0b6177ae5667b1fd3866631.jpg",
      followed: true,
      fullName: "Emmet",
      status: "Doc",
      location: { city: "Ukon", country: "USA" }
    },
    {
      id: 3,
      photoUrl:
        "https://cdn.vox-cdn.com/thumbor/OAajq9dq9jiRv_KhqfmqqE8Yasc=/0x0:812x427/1200x800/filters:focal(262x97:390x225)/cdn.vox-cdn.com/uploads/chorus_image/image/60601373/Screen_Shot_2018_07_28_at_11.26.35_AM.0.png",
      followed: false,
      fullName: "Biff",
      status: "Fool",
      location: { city: "NY", country: "USA" }
    }
  ]
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map(u => {
          if (u.id === action.userId) {
            return { ...u, followed: true };
          }
          return u;
        })
      };

    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map(u => {
          if (u.id === action.userId) {
            return { ...u, followed: false };
          }
          return u;
        })
      };
    case SET_USERS:
      return {
        ...state,
        users: [...state.users, ...action.users]
      };
    default:
      return state;
  }
};

export const followAC = userId => ({ type: FOLLOW, userId });
export const unfollowAC = userId => ({ type: UNFOLLOW, userId });
export const setUsersAC = users => ({ type: SET_USERS, users });

export default usersReducer;
