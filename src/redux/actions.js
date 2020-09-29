import axios from "axios";
import {
  API_CALL_BEGIN,
  API_CALL_DONE,
  API_CALL_FAILURE,
  CLEAR_INPUT_FIELDS,
  ONBOARD_NEW_EMPLOYEE
} from "./actionTypes";

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

const apiFailure = (e) => {
  return {
    type: API_CALL_FAILURE,
    payload: e
  };
};

export const clearInputFields=()=>{
  return async (dispatch) => {
    dispatch({
      type: CLEAR_INPUT_FIELDS,
      payload: {}
    });
  }
}

const getEmpDataFromSession = (dataFromSession, id) =>{
  const sessionDataObj = JSON.parse(dataFromSession);
  if(id && dataFromSession=== null){
    window.location.href = 'http://localhost:3000';
    return;
  }
  if(dataFromSession){
    return id ? {data: sessionDataObj.data.filter((obj)=>{return obj.id===Number(id)})[0]} : sessionDataObj;
  }
  return null;
}

export const getEmployeeData = (id) => {
  return async (dispatch) => {
    dispatch(apiCallBegin());
    const dataFromSession = sessionStorage.getItem('allEmpRecords');
    const datatoPass = await getEmpDataFromSession(dataFromSession, id);

    if(dataFromSession === null){
      try {
        let response = await axios({
          method: 'GET',
          url: `https://dummy.restapiexample.com/api/v1/${id ? 'employee/'+ id : 'employees'}`,
        });
        dispatch(apiCallDone(
          response.data
        ));
        if(!id){
          sessionStorage.setItem('allEmpRecords', JSON.stringify(response.data));
        }
      }catch(e){
        console.log(e);
        dispatch(apiFailure(e));
      }
    }else{
      dispatch(apiCallDone(
        datatoPass
      ));
    }
  }
}

export const onboardNewEmployee = (e) =>{
  return async (dispatch) => {
    dispatch({
      type: ONBOARD_NEW_EMPLOYEE,
      payload: e
    });
  }
}