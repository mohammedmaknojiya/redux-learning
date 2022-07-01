import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserApiCall } from "../store/CustomThunkMiddleware/ActionCreator";

const FetchDataCustomThunk = () => {
  const dispatch = useDispatch();
  const userDetails = useSelector((state) => state.userDetails);

  const handleFetchUserData = () => {
    dispatch(fetchUserApiCall());
  };
  return (
    <div>
      <h1>Fetch Data Using Custom Thunk Middleware</h1>
      <button onClick={handleFetchUserData}>Fetch Data</button>
      <h2>Loading Data :</h2> {userDetails.loading ? "Yes" : "No"}
      <h2>User Data: </h2>
      {userDetails.userData.map((user) => (
        <span>{user}</span>
      ))}
    </div>
  );
};

export default FetchDataCustomThunk;
