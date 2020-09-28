import axios from "axios";
import {
  API_CALL_BEGIN,
  API_CALL_DONE
} from "./actionTypes";


export const getEmployeeData = (id) => {
  return async (dispatch) => {
    dispatch(apiCallBegin());

    let response = await axios({
      method: 'GET',
      url: `https://dummy.restapiexample.com/api/v1/${id ? 'employee/'+ id : 'employees'}`,
    });

    dispatch(apiCallDone(
      response.data
    ));
  };
}

const apiCallBegin = (index) => {
  return {
    type: API_CALL_BEGIN,
    payload: { index }
  };
};

const apiCallDone = (data) => {
  return {
    type: API_CALL_DONE,
    payload: data.data
  };
};