import React from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  addBug,
  removeBug,
  resolveBug,
} from "../store/BugTracker/ActionCreator";

const BugTrackerApp = () => {
  const dispatch = useDispatch();
  const bugTrackerData = useSelector((state) => state.bugs);

  return (
    <div>
      {bugTrackerData.map((obj) => (
        <div>{`${obj.id} ${obj.description} ${obj.resolved}`}</div>
      ))}
      <button onClick={() => dispatch(addBug())}>Add Bug</button>
      <button onClick={() => dispatch(removeBug(1))}>Remove Bug</button>
      <button onClick={() => dispatch(resolveBug(1))}>Resolved Bug</button>
    </div>
  );
};

export default BugTrackerApp;
