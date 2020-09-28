import { combineReducers } from "redux";
import {
  GET_EMPLOYEE_DATA,
  API_CALL_BEGIN,
  API_CALL_DONE  
} from "../actionTypes";

export const initialState = {
  isLoading: false,
  badge: 0
};

const app = function (state = initialState, action) {
  switch (action.type) {
    case API_CALL_BEGIN:
      return {
        ...state,
        isLoading: true,
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
