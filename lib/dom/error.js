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
var _dom = /*#__PURE__*/ _interop_require_wildcard(require("../dom"));
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
function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function(nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function _interop_require_wildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) {
        return obj;
    }
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
        return {
            default: obj
        };
    }
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) {
        return cache.get(obj);
    }
    var newObj = {
        __proto__: null
    };
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj){
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
            if (desc && (desc.get || desc.set)) {
                Object.defineProperty(newObj, key, desc);
            } else {
                newObj[key] = obj[key];
            }
        }
    }
    newObj.default = obj;
    if (cache) {
        cache.set(obj, newObj);
    }
    return newObj;
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
                var error = errorFromErrorNode(errorNode, context);
                return error;
            }
        }
    ]);
    return Error;
}(), _define_property(_Error, "name", "Error"), _Error));
function errorFromErrorNode(errorNode, context) {
    var Error = _dom.default.Error, node = errorNode, string = context.nodeAsString(node), error = new Error(string);
    return error;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb20vZXJyb3IuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBkb20gZnJvbSBcIi4uL2RvbVwiO1xuXG5pbXBvcnQgeyBkb21Bc3NpZ25lZCB9IGZyb20gXCIuLi9kb21cIjtcblxuZXhwb3J0IGRlZmF1bHQgZG9tQXNzaWduZWQoY2xhc3MgRXJyb3Ige1xuICBjb25zdHJ1Y3RvcihzdHJpbmcpIHtcbiAgICB0aGlzLnN0cmluZyA9IHN0cmluZztcbiAgfVxuXG4gIGdldFN0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5zdHJpbmc7XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiRXJyb3JcIjtcblxuICBzdGF0aWMgZnJvbUVycm9yTm9kZShlcnJvck5vZGUsIGNvbnRleHQpIHtcbiAgICBjb25zdCBlcnJvciA9IGVycm9yRnJvbUVycm9yTm9kZShlcnJvck5vZGUsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIGVycm9yO1xuICB9XG59KTtcblxuZnVuY3Rpb24gZXJyb3JGcm9tRXJyb3JOb2RlKGVycm9yTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7RXJyb3J9ID0gZG9tLFxuICAgICAgICBub2RlID0gZXJyb3JOb2RlLCAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIGVycm9yID0gbmV3IEVycm9yKHN0cmluZyk7XG5cbiAgcmV0dXJuIGVycm9yO1xufVxuIl0sIm5hbWVzIjpbImRvbUFzc2lnbmVkIiwiRXJyb3IiLCJzdHJpbmciLCJnZXRTdHJpbmciLCJmcm9tRXJyb3JOb2RlIiwiZXJyb3JOb2RlIiwiY29udGV4dCIsImVycm9yIiwiZXJyb3JGcm9tRXJyb3JOb2RlIiwibmFtZSIsImRvbSIsIm5vZGUiLCJub2RlQXNTdHJpbmciXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQU1BOzs7ZUFBQTs7OzJEQUpnQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBSWhCLFdBQWVBLElBQUFBLGdCQUFXLDBCQUFDO2FBQU1DLE1BQ25CQyxNQUFNO2dDQURhRDtRQUU3QixJQUFJLENBQUNDLE1BQU0sR0FBR0E7Ozs7WUFHaEJDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0QsTUFBTTtZQUNwQjs7OztZQUlPRSxLQUFBQTttQkFBUCxTQUFPQSxjQUFjQyxTQUFTLEVBQUVDLE9BQU87Z0JBQ3JDLElBQU1DLFFBQVFDLG1CQUFtQkgsV0FBV0M7Z0JBRTVDLE9BQU9DO1lBQ1Q7Ozs7S0FOQSx5QkFBT0UsUUFBTztBQVNoQixTQUFTRCxtQkFBbUJILFNBQVMsRUFBRUMsT0FBTztJQUM1QyxJQUFNLEFBQUNMLFFBQVNTLFlBQUcsQ0FBWlQsT0FDRFUsT0FBT04sV0FDUEgsU0FBU0ksUUFBUU0sWUFBWSxDQUFDRCxPQUM5QkosUUFBUSxJQUFJTixNQUFNQztJQUV4QixPQUFPSztBQUNUIn0=