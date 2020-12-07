import React from 'react';
import { render, cleanup, screen } from "@testing-library/react";
import FrameworkList from "./FrameworkList";

afterEach(() => {
  cleanup();
})

describe("Rendering the list with props", () =>{
  it("Should render No data ! when no data proped", ()=>{
    render(<FrameworkList />);
    expect(screen.getByText("No data !")).toBeInTheDocument();
  });
  it("Should render list item correctly", ()=>{
    const dummyData =[
      {id:1, item:"ReactDummy"},
      {id:2, item:"AngularDummy"},
      {id:3, item:"VueDummy"}
    ]
    render(<FrameworkList frameworks={dummyData}/>);
    const frameworkItems = screen.getAllByRole("listitem").map((element)=>{
      return element.textContent
    });
    const dummyItems = dummyData.map((dummy)=>{
      return dummy.item
    });
    expect(frameworkItems).toEqual(dummyItems);
    expect(screen.queryByText("No data !")).toBeNull();
  });
})