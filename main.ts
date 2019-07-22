class callBackDemo {
  constructor() {}

  public callback(
    numValue1: number,
    numValue2: number,
    funcOperation: (leNumValue1, leNumValue2) => number
  ): number {
    let result = funcOperation(numValue1, numValue2);
    return result * 12;
  }
}

let callBackDemoObj = new callBackDemo();
let result = callBackDemoObj.callback(3, 3, (leNumValue1, leNumValue2) => {
  return leNumValue1 + leNumValue2;
});

console.log(result);

result = callBackDemoObj.callback(5, 3, (leNumValue1, leNumValue2) => {
  return leNumValue1 * leNumValue2;
});

console.log(result);
