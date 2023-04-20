import Snowman from "./Snowman";
import React from "react";
import { render, debug, fireEvent } from "@testing-library/react";
import TEST_IMAGES from "./_testCommon";

describe("tests for reaching max incorrect guesses", function () {
  function createContainer() {
    const { container } = render (
      <Snowman
        images={TEST_IMAGES}
        words={['apple']}
        maxWrong={2}
      />
    );
    return container;
  };

  it("stops showing button area after nWrong reaches maxGuesses", function () {
    const container = createContainer();
    expect(container.querySelector('.Snowman-buttons')).toBeInTheDocument();
    //fire off 2 btns
    const xBtn = container.querySelector('button[value="x"]');
    const yBtn = container.querySelector('button[value="y"]');
    console.log("xBtn=", xBtn, "yBtn=", yBtn);
    fireEvent.click(xBtn);
    fireEvent.click(yBtn);
    expect(container.querySelector('.Snowman-buttons')).not.toBeInTheDocument();
  });

  it("matches snapshot", function () {
    const container = createContainer();
    const xBtn = container.querySelector('button[value="x"]');
    const yBtn = container.querySelector('button[value="y"]');
    fireEvent.click(xBtn);
    fireEvent.click(yBtn);
    expect(container).toMatchSnapshot();
  });
});
