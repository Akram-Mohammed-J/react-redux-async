import Axios from "axios";

const fetchPost = () => {
  return async (dispatch, getState) => {
    const response = await Axios.get(
      "http://jsonplaceholder.typicode.com/posts"
    );
    dispatch({
      type: "FETCH_POSTS",
      payload: response.data,
    });
  };
};
export default fetchPost;
