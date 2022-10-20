import { GET_API } from "../Action/getApiAction";

const res = {
  data: [],
};
const getApiReducer = (state = res, action) => {
  switch (action.type) {
    case GET_API:
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
};

export default getApiReducer;
