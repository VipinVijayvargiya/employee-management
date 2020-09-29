import { combineReducers } from "redux";
import {validateData}  from '../../common-utility/ValidationUtils.js';
import {
  API_CALL_BEGIN,
  API_CALL_DONE,
  API_CALL_FAILURE,
  CLEAR_INPUT_FIELDS,
  GET_EMPLOYEE_DATA,
  ONBOARD_NEW_EMPLOYEE
} from "../actionTypes";

export const initialState = {
  isLoading: false,
  empToOnboard:{},
  errorData:[],
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
        empToOnboard: action.payload,
        badge: 1
      }
    case API_CALL_FAILURE:
      return {
        ...state,
        isError: true,
      }
    case CLEAR_INPUT_FIELDS:
      return {
        ...state,
        empToOnboard: action.payload,
      }
    case ONBOARD_NEW_EMPLOYEE:
      const {name, value} = action.payload;
      let updatedErrorData = validateData(name, value, state.errorData);
      return {
        ...state,
        empToOnboard: {...state.empToOnboard, [name]: value},
        errorData: updatedErrorData
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
