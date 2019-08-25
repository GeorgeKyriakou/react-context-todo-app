import React from "react";
import { shallow } from "enzyme";
import Todos from "../../components/Todos";

import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

describe("<Todos/>", () => {
  it("renders without crashing", async () => {
    const editor = shallow(<Todos></Todos>);
    expect(editor.find("Navbar").length).toEqual(1);
  });
});
