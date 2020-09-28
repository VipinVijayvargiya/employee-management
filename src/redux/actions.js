import axios from "axios";
import {
  API_CALL_BEGIN,
  API_CALL_DONE,
  API_FAILURE
} from "./actionTypes";


export const getEmployeeData = (id) => {
  return async (dispatch) => {
    dispatch(apiCallBegin());
    const dataFromSession = sessionStorage.getItem('allEmpRecords');
    const datatoPass = JSON.parse(dataFromSession);
    
    if(dataFromSession === null || id){
      console.log(111111111111)
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
      console.log(2222222222222)
      console.log(datatoPass)
      dispatch(apiCallDone(
        datatoPass
      ));
    }
  }
}

const apiFailure = (e) => {
  return {
    type: API_FAILURE,
    payload: e
  };
};

export const onboardNewEmployee = () =>{
  return async (dispatch) => {
    dispatch(apiCallBegin());
    try {

      let data = {"name":"vip","salary":"123","age":"23"};

      let response = await axios({
        method: 'POST',
        data: data,
        "Access-Control-Allow-Origin": "*",
        headers:{},
        url: `https://dummy.restapiexample.com/api/v1/delete`,
      });
      console.log(response);
      // dispatch(uploadPhotoSuccess(
      //   index,
      //   response.data.predictions
      // ));

    } catch (e) {
      console.warn(e);
      // dispatch(uploadPhotoFail(index));
    }
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