var callBackDemo = /** @class */ (function () {
    function callBackDemo() {
    }
    callBackDemo.prototype.callback = function (numValue1, numValue2, funcOperation) {
        var result = funcOperation(numValue1, numValue2);
        return result * 12;
    };
    return callBackDemo;
}());
var callBackDemoObj = new callBackDemo();
var result = callBackDemoObj.callback(3, 3, function (leNumValue1, leNumValue2) {
    return leNumValue1 + leNumValue2;
});
console.log(result);
result = callBackDemoObj.callback(5, 3, function (leNumValue1, leNumValue2) {
    return leNumValue1 * leNumValue2;
});
console.log(result);
