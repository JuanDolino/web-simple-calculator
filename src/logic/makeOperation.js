function makeOperation(firstNumber, secondNumber, operation, newOperation) {
  if (operation === "+") {
    return {
      total: firstNumber + secondNumber,
      number: null,
      operation: newOperation
    }
  }

  else if (operation === "/") {
    return {
      total: firstNumber / secondNumber,
      number: null,
      operation: newOperation
    }
  }

  else if (operation === "-") {
    return {
      total: firstNumber - secondNumber,
      number: null,
      operation: newOperation
    }
  }

  else if (operation === "*") {
    return {
      total: firstNumber * secondNumber,
      number: null,
      operation: newOperation
    }
  }

  else {
    return {
      total: makeOperation(firstNumber, secondNumber, operation),
      number: null,
      operation: null
    }
  }
}

export default makeOperation;
