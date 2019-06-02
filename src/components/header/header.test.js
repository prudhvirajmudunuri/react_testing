import React from "react";
import { shallow } from "enzyme";
import Header from "./index";

const setup = (props = {}) => {
  const component = shallow(<Header {...props} />);
  return component;
};

describe("test the logo and app rendering", () => {
  it("should render without errors", () => {
    const component = setup();
    const wrapper = component.find(".headerComponent");
    expect(wrapper.length).toBe(1);
  });

  it("should render the logo", () => {
    const component = setup();
    const wrapper = component.find(".logo");
    expect(wrapper.length).toBe(1);
  });
});
