import React from "react";
import profileReducer, { addPostCreator, deletePost } from "./profile-reducer";
import ReactDOM from "react-dom";

let state = {
  posts: [
    { id: 1, message: "Hi, how are you", likesCount: "20" },
    { id: 2, message: "It is my first post", likesCount: "12" }
  ]
};

it("length of posts should be increment", () => {
  // 1.test data
  let action = addPostCreator("What's up Doc!");

  // 2.action
  let newState = profileReducer(state, action);

  // 3.expectation
  expect(newState.posts.length).toBe(3);
});

it("message of new post should be correct ", () => {
  // 1.test data
  let action = addPostCreator("What's up Doc!");

  // 2.action
  let newState = profileReducer(state, action);

  // 3.expectation
  expect(newState.posts[2].message).toBe("What's up Doc!");
});

it("after deleting length of posts should be 2", () => {
  // 1.test data
  let action = deletePost(1);

  // 2.action
  let newState = profileReducer(state, action);

  // 3.expectation
  expect(newState.posts.length).toBe(1);
});

it("after deleting length should't be decrement if id is incorect", () => {
  // 1.test data
  let action = deletePost(1000);

  // 2.action
  let newState = profileReducer(state, action);

  // 3.expectation
  expect(newState.posts.length).toBe(2);
});
