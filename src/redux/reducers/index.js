import { combineReducers } from "redux";
import {
  GET_EMPLOYEE_DATA,
  API_CALL_BEGIN,
  API_CALL_DONE,
  API_FAILURE
} from "../actionTypes";

export const initialState = {
  isLoading: false,
  isError: false,
  badge: 0
};

const app = function (state = initialState, action) {
  switch (action.type) {
    case API_CALL_BEGIN:
      return {
        ...state,
        isLoading: true,
      }
    case API_FAILURE:
      return {
        ...state,
        isError: true,
      }
    case API_CALL_DONE:
      if(Array.isArray(action.payload)){
        return {
          ...state,
          isLoading: false,
          employeeData: action.payload
        }
      }
      return {
        ...state,
        isLoading: false,
        employeeDatail: action.payload,
        badge: 1
      }
    case GET_EMPLOYEE_DATA:
      return {
        ...state,
        employeeData:{

        }
      }
    default:
      return state;
  }
}

export default combineReducers({ app });
