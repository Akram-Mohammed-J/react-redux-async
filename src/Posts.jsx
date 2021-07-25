import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import fetchPost from "./Actions";

const Posts = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  useEffect(() => {
    dispatch(fetchPost());
  }, []);

  console.log(state);
  return (
    <div>
      {state.map((el) => (
        <h1>{el.title}</h1>
      ))}
    </div>
  );
};

export default Posts;
