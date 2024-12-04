"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _query = require("../utilities/query");
var _dom = require("../dom");
function _class_call_check(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _create_class(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
var _Condition;
var conditionNodeQuery = (0, _query.nodeQuery)("/conditionalBlock/condition");
var _default = (0, _dom.domAssigned)((_Condition = /*#__PURE__*/ function() {
    function Condition() {
        _class_call_check(this, Condition);
    }
    _create_class(Condition, [
        {
            key: "getString",
            value: function getString() {
                debugger;
            }
        }
    ], [
        {
            key: "fromConditionalBlockNode",
            value: function fromConditionalBlockNode(conditionalBlockNode, context) {
                var conditionNode = conditionNodeQuery(conditionalBlockNode);
                debugger;
            }
        }
    ]);
    return Condition;
}(), _define_property(_Condition, "name", "Condition"), _Condition));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb20vY29uZGl0aW9uLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBub2RlUXVlcnkgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5pbXBvcnQgeyBkb21Bc3NpZ25lZCB9IGZyb20gXCIuLi9kb21cIjtcblxuY29uc3QgY29uZGl0aW9uTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL2NvbmRpdGlvbmFsQmxvY2svY29uZGl0aW9uXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBkb21Bc3NpZ25lZChjbGFzcyBDb25kaXRpb24ge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgfVxuXG4gIGdldFN0cmluZygpIHtcbiAgICBkZWJ1Z2dlclxuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIkNvbmRpdGlvblwiO1xuXG4gIHN0YXRpYyBmcm9tQ29uZGl0aW9uYWxCbG9ja05vZGUoY29uZGl0aW9uYWxCbG9ja05vZGUsIGNvbnRleHQpIHtcbiAgICBjb25zdCBjb25kaXRpb25Ob2RlID0gY29uZGl0aW9uTm9kZVF1ZXJ5KGNvbmRpdGlvbmFsQmxvY2tOb2RlKTtcblxuICAgIGRlYnVnZ2VyXG5cbiAgfVxufSk7XG4iXSwibmFtZXMiOlsiY29uZGl0aW9uTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5IiwiZG9tQXNzaWduZWQiLCJDb25kaXRpb24iLCJnZXRTdHJpbmciLCJmcm9tQ29uZGl0aW9uYWxCbG9ja05vZGUiLCJjb25kaXRpb25hbEJsb2NrTm9kZSIsImNvbnRleHQiLCJjb25kaXRpb25Ob2RlIiwibmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBT0E7OztlQUFBOzs7cUJBTDBCO21CQUNFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTVCLElBQU1BLHFCQUFxQkMsSUFBQUEsZ0JBQVMsRUFBQztJQUVyQyxXQUFlQyxJQUFBQSxnQkFBVyw4QkFBQzthQUFNQztnQ0FBQUE7Ozs7WUFJL0JDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxRQUFRO1lBQ1Y7Ozs7WUFJT0MsS0FBQUE7bUJBQVAsU0FBT0EseUJBQXlCQyxvQkFBb0IsRUFBRUMsT0FBTztnQkFDM0QsSUFBTUMsZ0JBQWdCUixtQkFBbUJNO2dCQUV6QyxRQUFRO1lBRVY7Ozs7S0FQQSw2QkFBT0csUUFBTyJ9