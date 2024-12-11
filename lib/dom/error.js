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
var _Error;
var _default = (0, _dom.domAssigned)((_Error = /*#__PURE__*/ function() {
    function Error(string) {
        _class_call_check(this, Error);
        this.string = string;
    }
    _create_class(Error, [
        {
            key: "getString",
            value: function getString() {
                return this.string;
            }
        }
    ], [
        {
            key: "fromErrorNode",
            value: function fromErrorNode(errorNode, context) {
                var node = errorNode, string = context.nodeAsString(node), error = new Error(string);
                return error;
            }
        }
    ]);
    return Error;
}(), _define_property(_Error, "name", "Error"), _Error));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb20vZXJyb3IuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGRvbUFzc2lnbmVkIH0gZnJvbSBcIi4uL2RvbVwiO1xuXG5leHBvcnQgZGVmYXVsdCBkb21Bc3NpZ25lZChjbGFzcyBFcnJvciB7XG4gIGNvbnN0cnVjdG9yKHN0cmluZykge1xuICAgIHRoaXMuc3RyaW5nID0gc3RyaW5nO1xuICB9XG5cbiAgZ2V0U3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLnN0cmluZztcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJFcnJvclwiO1xuXG4gIHN0YXRpYyBmcm9tRXJyb3JOb2RlKGVycm9yTm9kZSwgY29udGV4dCkge1xuICAgIGNvbnN0IG5vZGUgPSBlcnJvck5vZGUsIC8vL1xuICAgICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICAgIGVycm9yID0gbmV3IEVycm9yKHN0cmluZyk7XG5cbiAgICByZXR1cm4gZXJyb3I7XG4gIH1cbn0pO1xuIl0sIm5hbWVzIjpbImRvbUFzc2lnbmVkIiwiRXJyb3IiLCJzdHJpbmciLCJnZXRTdHJpbmciLCJmcm9tRXJyb3JOb2RlIiwiZXJyb3JOb2RlIiwiY29udGV4dCIsIm5vZGUiLCJub2RlQXNTdHJpbmciLCJlcnJvciIsIm5hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQUlBOzs7ZUFBQTs7O21CQUY0Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUU1QixXQUFlQSxJQUFBQSxnQkFBVywwQkFBQzthQUFNQyxNQUNuQkMsTUFBTTtnQ0FEYUQ7UUFFN0IsSUFBSSxDQUFDQyxNQUFNLEdBQUdBOzs7O1lBR2hCQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNELE1BQU07WUFDcEI7Ozs7WUFJT0UsS0FBQUE7bUJBQVAsU0FBT0EsY0FBY0MsU0FBUyxFQUFFQyxPQUFPO2dCQUNyQyxJQUFNQyxPQUFPRixXQUNQSCxTQUFTSSxRQUFRRSxZQUFZLENBQUNELE9BQzlCRSxRQUFRLElBQUlSLE1BQU1DO2dCQUV4QixPQUFPTztZQUNUOzs7O0tBUkEseUJBQU9DLFFBQU8ifQ==