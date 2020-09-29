
const getTrimmedVal = (str)=> {
    return str ? str.replace(/^\s+|\s+$/g, '') : str;
}

export const validateData = (name, value, errorData)=> {
  const actualVal = getTrimmedVal(value);
  let currentFieldError = false;
  const updatedError = errorData;
  switch(name) {
    case 'employee_name':
      const isValidName = /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u;
      currentFieldError = actualVal ? actualVal.length < 3 || !isValidName.test(actualVal) : true;
      break;
    case 'employee_salary':
      const isValidSalary = /^\d{1,6}(?:\.\d{0,2})?$/;
      currentFieldError = actualVal ? Number(actualVal) < 999 || !isValidSalary.test(actualVal) : true;
      break;
    case 'employee_age':
      const isAge = /^\d+$/;
      currentFieldError = actualVal ? Number(actualVal) < 18 || Number(actualVal) > 66 || !isAge.test(actualVal) : true;
      break;
    default:
      break;
  }
  if(currentFieldError && updatedError.indexOf(name) === -1) {
    updatedError.push(name);
    return updatedError;
  }else if(!currentFieldError && updatedError.indexOf(name) > -1){
    const i = updatedError.indexOf(name);
    if(i >= 0) {
      updatedError.splice(i,1);
      return updatedError
    }
  }
  return updatedError;
}
export default {
    validateData: validateData
};