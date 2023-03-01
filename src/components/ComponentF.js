import React from "react";
import {NameContext, UserContext} from "../App";

function ComponentF() {
  return (
    <div>
      <UserContext.Consumer>
        {(user) => {
            return (
                <NameContext.Consumer>
                    {
                        name => {
                            
                            return <div>User Context {user} , Name Context {name}</div>;
                        }
                    }
                </NameContext.Consumer>
            )
        }}
      </UserContext.Consumer>
    </div>
  );
}

export default ComponentF;
