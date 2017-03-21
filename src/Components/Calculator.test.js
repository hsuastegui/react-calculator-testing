import React from "react";
import { shallow } from "enzyme";
import renderer from "react-test-renderer";
import Calculator from "./Calculator";
import { add, substract } from "../stateChanges";
//What to test: general => Renders, props/state => output, conditions/actions => states, actions => events, edge cases
describe("Calculator tests", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<Calculator />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("has an input", () => {
    const component = shallow(<Calculator />);
    expect(component.find("input").length).toEqual(1);
  });
  it("adds", () => {
    expect(add({ total: 1, amount: 1 })).toHaveProperty("total", 2);
  });
  it("substracts", () => {
    expect(substract({ total: 1, amount: 1 })).toHaveProperty("total", 0);
  });
  it("allows user to increase score", () => {
    const component = shallow(<Calculator amount={1} />);
    component.find("button#add").simulate("click");
    expect(Number(component.find("#total").text())).toEqual(1);
  });
});
