import React from "react";
import { create } from "react-test-renderer";
import ProfileStatus from "./ProfileStatus";

describe("ProfileStatus component", () => {
  test("status from props sould be in the state", () => {
    const component = create(<ProfileStatus status="McFly" />);
    const instance = component.getInstance();
    expect(instance.state.status).toBe("McFly");
  });

  test("After creation <input> should not be displayed", () => {
    const component = create(<ProfileStatus status="McFly" />);
    const root = component.root;

    expect(() => {
      let input = root.findByType("input");
    }).toThrow();
  });

  test("After creation <span> should conatins correct status", () => {
    const component = create(<ProfileStatus status="McFly" />);
    const root = component.root;
    let span = root.findByType("span");
    expect(span.children[0]).toBe("McFly");
  });

  test("input should be displayed in editMode instead of span", () => {
    const component = create(<ProfileStatus status="McFly" />);
    const root = component.root;
    let span = root.findByType("span");
    span.props.onDoubleClick();
    let input = root.findByType("input");
    expect(input.props.value).toBe("McFly");
  });

  test("callback should be called", () => {
    const mockCallback = jest.fn();
    const component = create(
      <ProfileStatus status="McFly" updateStatus={mockCallback} />
    );
    const instance = component.getInstance();
    instance.deactivateEditMode();
    expect(mockCallback.mock.calls.length).toBe(1);
  });
});
