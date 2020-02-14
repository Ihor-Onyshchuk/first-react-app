import React from "react";
import style from "./Users.module.css";

let Users = props => {
  if (props.users.length === 0) {
    props.setUsers([
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
    ]);
  }

  return (
    <div>
      {props.users.map(u => (
        <div key={u.id}>
          <span>
            <div>
              <img className={style.userPhoto} src={u.photoUrl} />
            </div>
            <div>
              {u.followed ? (
                <button
                  onClick={() => {
                    props.unfollow(u.id);
                  }}
                >
                  Unfollow
                </button>
              ) : (
                <button
                  onClick={() => {
                    props.follow(u.id);
                  }}
                >
                  Follow
                </button>
              )}
            </div>
          </span>
          <span>
            <span>
              <div>{u.fullName}</div>
              <div>{u.status}</div>
            </span>
            <span>
              <div>{u.location.country}</div>
              <div>{u.location.city}</div>
            </span>
          </span>
        </div>
      ))}
    </div>
  );
};

export default Users;
