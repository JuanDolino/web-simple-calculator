import makeOperation from './makeOperation';

function operate(obj, buttonName) {
  if(buttonName === "AC") {
    return {
      number: null,
      total: null,
      operation: null
    }
  }

  else if (obj.number && obj.operation && isNaN(buttonName) && buttonName !== ".") {
    return makeOperation(Number(obj.total), Number(obj.number), obj.operation, buttonName);
  }

  else if (isNaN(buttonName) && buttonName !== ".") {
    return {
      operation: buttonName,
      total: obj.total === null ? Number(obj.number) : obj.total,
      number: null
    }
  }

  else {
    return {
      number: obj.number ? obj.number + buttonName : buttonName 
    }
  }
}



export default operate;
