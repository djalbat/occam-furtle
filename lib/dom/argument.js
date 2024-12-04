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
var _query = require("../utilities/query");
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
var _Argument;
var typeTerminalNodeQuery = (0, _query.nodeQuery)("/argument/@type");
var _default = (0, _dom.domAssigned)((_Argument = /*#__PURE__*/ function() {
    function Argument(type, variable) {
        _class_call_check(this, Argument);
        this.type = type;
        this.variable = variable;
    }
    _create_class(Argument, [
        {
            key: "getType",
            value: function getType() {
                return this.type;
            }
        },
        {
            key: "getVariable",
            value: function getVariable() {
                return this.variable;
            }
        },
        {
            key: "getString",
            value: function getString() {
                var typeString = this.type, variableString = this.variable.getString(), string = "".concat(typeString, " ").concat(variableString);
                return string;
            }
        }
    ], [
        {
            key: "fromArgumentNode",
            value: function fromArgumentNode(argumentNode, context) {
                var Variable = _dom.default.Variable, type = typeFromArgumentNode(argumentNode), variable = Variable.fromArgumentNode(argumentNode, context), argument = new Argument(type, variable);
                return argument;
            }
        }
    ]);
    return Argument;
}(), _define_property(_Argument, "name", "Argument"), _Argument));
function typeFromArgumentNode(argumentNode) {
    var typeTerminalNode = typeTerminalNodeQuery(argumentNode), typeTerminalNodeContent = typeTerminalNode.getContent(), type = typeTerminalNodeContent; ///
    return type;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb20vYXJndW1lbnQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBkb20gZnJvbSBcIi4uL2RvbVwiO1xuXG5pbXBvcnQgeyBub2RlUXVlcnkgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5pbXBvcnQgeyBkb21Bc3NpZ25lZCB9IGZyb20gXCIuLi9kb21cIjtcblxuY29uc3QgdHlwZVRlcm1pbmFsTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL2FyZ3VtZW50L0B0eXBlXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBkb21Bc3NpZ25lZChjbGFzcyBBcmd1bWVudCB7XG4gIGNvbnN0cnVjdG9yKHR5cGUsIHZhcmlhYmxlKSB7XG4gICAgdGhpcy50eXBlID0gdHlwZTtcbiAgICB0aGlzLnZhcmlhYmxlID0gdmFyaWFibGU7XG4gIH1cblxuICBnZXRUeXBlKCkge1xuICAgIHJldHVybiB0aGlzLnR5cGU7XG4gIH1cblxuICBnZXRWYXJpYWJsZSgpIHtcbiAgICByZXR1cm4gdGhpcy52YXJpYWJsZTtcbiAgfVxuXG4gIGdldFN0cmluZygpIHtcbiAgICBjb25zdCB0eXBlU3RyaW5nID0gdGhpcy50eXBlLCAvLy9cbiAgICAgICAgICB2YXJpYWJsZVN0cmluZyA9IHRoaXMudmFyaWFibGUuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgc3RyaW5nID0gYCR7dHlwZVN0cmluZ30gJHt2YXJpYWJsZVN0cmluZ31gO1xuXG4gICAgcmV0dXJuIHN0cmluZztcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJBcmd1bWVudFwiO1xuXG4gIHN0YXRpYyBmcm9tQXJndW1lbnROb2RlKGFyZ3VtZW50Tm9kZSwgY29udGV4dCkge1xuICAgIGNvbnN0IHsgVmFyaWFibGUgfSA9IGRvbSxcbiAgICAgICAgICB0eXBlID0gdHlwZUZyb21Bcmd1bWVudE5vZGUoYXJndW1lbnROb2RlKSxcbiAgICAgICAgICB2YXJpYWJsZSA9IFZhcmlhYmxlLmZyb21Bcmd1bWVudE5vZGUoYXJndW1lbnROb2RlLCBjb250ZXh0KSxcbiAgICAgICAgICBhcmd1bWVudCA9IG5ldyBBcmd1bWVudCh0eXBlLCB2YXJpYWJsZSk7XG5cbiAgICByZXR1cm4gYXJndW1lbnQ7XG4gIH1cbn0pO1xuXG5mdW5jdGlvbiB0eXBlRnJvbUFyZ3VtZW50Tm9kZShhcmd1bWVudE5vZGUpIHtcbiAgY29uc3QgdHlwZVRlcm1pbmFsTm9kZSA9IHR5cGVUZXJtaW5hbE5vZGVRdWVyeShhcmd1bWVudE5vZGUpLFxuICAgICAgICB0eXBlVGVybWluYWxOb2RlQ29udGVudCA9IHR5cGVUZXJtaW5hbE5vZGUuZ2V0Q29udGVudCgpLFxuICAgICAgICB0eXBlID0gdHlwZVRlcm1pbmFsTm9kZUNvbnRlbnQ7IC8vL1xuXG4gIHJldHVybiB0eXBlO1xufVxuIl0sIm5hbWVzIjpbInR5cGVUZXJtaW5hbE5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsImRvbUFzc2lnbmVkIiwiQXJndW1lbnQiLCJ0eXBlIiwidmFyaWFibGUiLCJnZXRUeXBlIiwiZ2V0VmFyaWFibGUiLCJnZXRTdHJpbmciLCJ0eXBlU3RyaW5nIiwidmFyaWFibGVTdHJpbmciLCJzdHJpbmciLCJmcm9tQXJndW1lbnROb2RlIiwiYXJndW1lbnROb2RlIiwiY29udGV4dCIsIlZhcmlhYmxlIiwiZG9tIiwidHlwZUZyb21Bcmd1bWVudE5vZGUiLCJhcmd1bWVudCIsIm5hbWUiLCJ0eXBlVGVybWluYWxOb2RlIiwidHlwZVRlcm1pbmFsTm9kZUNvbnRlbnQiLCJnZXRDb250ZW50Il0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFTQTs7O2VBQUE7OzsyREFQZ0I7cUJBRVU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUcxQixJQUFNQSx3QkFBd0JDLElBQUFBLGdCQUFTLEVBQUM7SUFFeEMsV0FBZUMsSUFBQUEsZ0JBQVcsNkJBQUM7YUFBTUMsU0FDbkJDLElBQUksRUFBRUMsUUFBUTtnQ0FES0Y7UUFFN0IsSUFBSSxDQUFDQyxJQUFJLEdBQUdBO1FBQ1osSUFBSSxDQUFDQyxRQUFRLEdBQUdBOzs7O1lBR2xCQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNGLElBQUk7WUFDbEI7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNGLFFBQVE7WUFDdEI7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsYUFBYSxJQUFJLENBQUNMLElBQUksRUFDdEJNLGlCQUFpQixJQUFJLENBQUNMLFFBQVEsQ0FBQ0csU0FBUyxJQUN4Q0csU0FBUyxBQUFDLEdBQWdCRCxPQUFkRCxZQUFXLEtBQWtCLE9BQWZDO2dCQUVoQyxPQUFPQztZQUNUOzs7O1lBSU9DLEtBQUFBO21CQUFQLFNBQU9BLGlCQUFpQkMsWUFBWSxFQUFFQyxPQUFPO2dCQUMzQyxJQUFNLEFBQUVDLFdBQWFDLFlBQUcsQ0FBaEJELFVBQ0ZYLE9BQU9hLHFCQUFxQkosZUFDNUJSLFdBQVdVLFNBQVNILGdCQUFnQixDQUFDQyxjQUFjQyxVQUNuREksV0FBVyxJQUFJZixTQUFTQyxNQUFNQztnQkFFcEMsT0FBT2E7WUFDVDs7OztLQVRBLDRCQUFPQyxRQUFPO0FBWWhCLFNBQVNGLHFCQUFxQkosWUFBWTtJQUN4QyxJQUFNTyxtQkFBbUJwQixzQkFBc0JhLGVBQ3pDUSwwQkFBMEJELGlCQUFpQkUsVUFBVSxJQUNyRGxCLE9BQU9pQix5QkFBeUIsR0FBRztJQUV6QyxPQUFPakI7QUFDVCJ9