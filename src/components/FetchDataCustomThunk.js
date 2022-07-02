import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { apiCallThroughMiddleWare } from "../store/CustomThunkMiddleware/ActionCreator";

const FetchDataCustomThunk = () => {
  const dispatch = useDispatch();
  const userDetails = useSelector((state) => state.userDetails);

  const handleFetchUserDataApiMiddleware = () => {
    dispatch(apiCallThroughMiddleWare());
  };

  return (
    <div>
      <h2>User Data Through Api call middleware: </h2>
      <button onClick={handleFetchUserDataApiMiddleware}>
        Fetch Data through api call middleware
      </button>
      <div>
        {userDetails.userData.map((user) => (
          <span key={user.name}>{user.name}</span>
        ))}
      </div>
    </div>
  );
};

export default FetchDataCustomThunk;
