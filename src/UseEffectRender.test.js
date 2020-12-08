import React from "react";
import { render, screen } from "@testing-library/react";
import UseEffectRender from "./UseEffrectRender";

describe("userEffect rendering", () =>{
  it("Should render only after async function resolved", async ()=>{
    render(<UseEffectRender/>);
    expect(screen.queryByText(/I am/)).toBeNull();
    expect(await screen.findByText(/I am/)).toBeInTheDocument();
  })
})