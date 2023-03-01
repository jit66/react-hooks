import React from "react";
import "./App.css";
import ClassCounter from "./components/ClassCounter";
import ClassCounterOne from "./components/ClassCounterOne";
import ClassCounterTwo from "./components/ClassCounterTwo";
import ClassMouse from "./components/ClassMouse";
import HookCounter from "./components/HookCounter";
import HookCounter2 from "./components/HookCounter2";
import HookCounterFour from "./components/HookCounterFour";
import HookCounterOne from "./components/HookCounterOne";
import HookCounterThree from "./components/HookCounterThree";
import HookMouse from "./components/HookMouse";
import MouseContainer from "./components/MouseContainer";
import UseEffectClass8 from "./components/UseEffectClass8";
import UseEffectCondition from "./components/UseEffectCondition";
import IntervalClassCounter from "./components/IntervalClassCounter";
import IntervalHookCounter from "./components/IntervalHookCounter";
import DataFetching from "./components/DataFetching";
import ComponentC from "./components/ComponentC";

export const UserContext = React.createContext();
export const NameContext = React.createContext();

function App() {
  return (
    <div className="App">
      <UserContext.Provider value={"hello"}>
        <NameContext.Provider value={"jeet"}>
          <ComponentC />
        </NameContext.Provider>
      </UserContext.Provider>
      {/* <DataFetching/> */}
      {/* <IntervalHookCounter/>
     <IntervalClassCounter/>  */}
      {/* <MouseContainer/> */}
      {/* <HookMouse/> */}
      {/* <ClassMouse/> */}
      {/* <UseEffectCondition/> */}
      {/* <UseEffectClass8/> */}
      {/* <HookCounterOne/> */}
      {/* <ClassCounterOne/> */}
      {/* <HookCounterFour/> */}
      {/* <HookCounterThree/> */}
      {/* <ClassCounterTwo/> */}
      {/* <HookCounter2/> */}
      {/* <HookCounter/> */}
      {/* <ClassCounter/> */}
    </div>
  );
}

export default App;
