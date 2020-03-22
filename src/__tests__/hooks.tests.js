import React from "react";
import { render,screen ,act, fireEvent, getByTestId} from "@testing-library/react";


import {usePeerJS} from '../../dist/react/cjs'


const App = props => {
  const [
    peerJSInstance,
    id,
    connected,
    connecting
  ] = usePeerJS({})

  return <h1>app</h1>
}



it("App loads with initial state of 0", () => {
  act(()=>{
    const { container, rerender } = render(<App />);
    //const countValue = getByTestId(container, "countvalue");
    //expect(countValue.textContent).toBe("0");
  })
});
