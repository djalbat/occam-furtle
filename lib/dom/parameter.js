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
var _exception = /*#__PURE__*/ _interop_require_default(require("../exception"));
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
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
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
var _Parameter;
var terminalNodesQuery = (0, _query.nodesQuery)("/parameter/@*"), nameTerminalNodeQuery = (0, _query.nodeQuery)("/parameter/@name"), typeTerminalNodeQuery = (0, _query.nodeQuery)("/parameter/@type");
var _default = (0, _dom.domAssigned)((_Parameter = /*#__PURE__*/ function() {
    function Parameter(string, type, name) {
        _class_call_check(this, Parameter);
        this.string = string;
        this.type = type;
        this.name = name;
    }
    _create_class(Parameter, [
        {
            key: "getString",
            value: function getString() {
                return this.string;
            }
        },
        {
            key: "getType",
            value: function getType() {
                return this.type;
            }
        },
        {
            key: "getName",
            value: function getName() {
                return this.name;
            }
        },
        {
            key: "matchExpression",
            value: function matchExpression(expression, context) {
                var expressionString = expression.asString(context), parameterString = this.string; ///
                context.trace("Matching the ".concat(expressionString, " expression against the '").concat(parameterString, "' parameter..."));
                var expressionType = expression.getType();
                if (this.type !== expressionType) {
                    var message = "The ".concat(expressionString, " expression's '").concat(expressionType, "' type  and '").concat(parameterString, "' parameter's '").concat(this.type, "' type do not match."), exception = _exception.default.fromMessage(message);
                    throw exception;
                }
                context.debug("...matched the ".concat(expressionString, " expression against the '").concat(parameterString, "' parameter."));
            }
        }
    ], [
        {
            key: "fromParameterNode",
            value: function fromParameterNode(parameterNode, context) {
                var parameter = null;
                var terminalNodes = terminalNodesQuery(parameterNode), terminalNodesLength = terminalNodes.length;
                if (terminalNodesLength === 2) {
                    parameter = parameterFromParameterNode(parameterNode, context);
                }
                return parameter;
            }
        }
    ]);
    return Parameter;
}(), _define_property(_Parameter, "name", "Parameter"), _Parameter));
function parameterFromParameterNode(parameterNode, context) {
    var Parameter = _dom.default.Parameter, name = nameFromParameterNode(parameterNode, context), type = typeFromParameterNode(parameterNode, context), string = stringFromNameAndType(name, type, context), parameter = new Parameter(string, type, name);
    return parameter;
}
function stringFromNameAndType(name, type, context) {
    var nameString = name, typeString = type, string = "".concat(typeString, " ").concat(nameString);
    return string;
}
function nameFromParameterNode(parameterNode, context) {
    var nameTerminalNode = nameTerminalNodeQuery(parameterNode), nameTerminalNodeContent = nameTerminalNode.getContent(), name = nameTerminalNodeContent; ///
    return name;
}
function typeFromParameterNode(parameterNode, context) {
    var typeTerminalNode = typeTerminalNodeQuery(parameterNode), typeTerminalNodeContent = typeTerminalNode.getContent(), type = typeTerminalNodeContent; ///
    return type;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb20vcGFyYW1ldGVyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgZG9tIGZyb20gXCIuLi9kb21cIjtcbmltcG9ydCBFeGNlcHRpb24gZnJvbSBcIi4uL2V4Y2VwdGlvblwiO1xuXG5pbXBvcnQgeyBkb21Bc3NpZ25lZCB9IGZyb20gXCIuLi9kb21cIjtcbmltcG9ydCB7IG5vZGVRdWVyeSwgbm9kZXNRdWVyeSB9IGZyb20gXCIuLi91dGlsaXRpZXMvcXVlcnlcIjtcblxuY29uc3QgdGVybWluYWxOb2Rlc1F1ZXJ5ID0gbm9kZXNRdWVyeShcIi9wYXJhbWV0ZXIvQCpcIiksXG4gICAgICBuYW1lVGVybWluYWxOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvcGFyYW1ldGVyL0BuYW1lXCIpLFxuICAgICAgdHlwZVRlcm1pbmFsTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3BhcmFtZXRlci9AdHlwZVwiKTtcblxuZXhwb3J0IGRlZmF1bHQgZG9tQXNzaWduZWQoY2xhc3MgUGFyYW1ldGVyIHtcbiAgY29uc3RydWN0b3Ioc3RyaW5nLCB0eXBlLCBuYW1lKSB7XG4gICAgdGhpcy5zdHJpbmcgPSBzdHJpbmc7XG4gICAgdGhpcy50eXBlID0gdHlwZTtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICB9XG5cbiAgZ2V0U3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLnN0cmluZztcbiAgfVxuXG4gIGdldFR5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMudHlwZTtcbiAgfVxuXG4gIGdldE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMubmFtZTtcbiAgfVxuXG4gIG1hdGNoRXhwcmVzc2lvbihleHByZXNzaW9uLCBjb250ZXh0KSB7XG4gICAgY29uc3QgZXhwcmVzc2lvblN0cmluZyA9IGV4cHJlc3Npb24uYXNTdHJpbmcoY29udGV4dCksXG4gICAgICAgICAgcGFyYW1ldGVyU3RyaW5nID0gdGhpcy5zdHJpbmc7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYE1hdGNoaW5nIHRoZSAke2V4cHJlc3Npb25TdHJpbmd9IGV4cHJlc3Npb24gYWdhaW5zdCB0aGUgJyR7cGFyYW1ldGVyU3RyaW5nfScgcGFyYW1ldGVyLi4uYCk7XG5cbiAgICBjb25zdCBleHByZXNzaW9uVHlwZSA9IGV4cHJlc3Npb24uZ2V0VHlwZSgpO1xuXG4gICAgaWYgKHRoaXMudHlwZSAhPT0gZXhwcmVzc2lvblR5cGUpIHtcbiAgICAgIGNvbnN0IG1lc3NhZ2UgPSBgVGhlICR7ZXhwcmVzc2lvblN0cmluZ30gZXhwcmVzc2lvbidzICcke2V4cHJlc3Npb25UeXBlfScgdHlwZSAgYW5kICcke3BhcmFtZXRlclN0cmluZ30nIHBhcmFtZXRlcidzICcke3RoaXMudHlwZX0nIHR5cGUgZG8gbm90IG1hdGNoLmAsXG4gICAgICAgICAgICBleGNlcHRpb24gPSBFeGNlcHRpb24uZnJvbU1lc3NhZ2UobWVzc2FnZSk7XG5cbiAgICAgIHRocm93IGV4Y2VwdGlvbjtcbiAgICB9XG5cbiAgICBjb250ZXh0LmRlYnVnKGAuLi5tYXRjaGVkIHRoZSAke2V4cHJlc3Npb25TdHJpbmd9IGV4cHJlc3Npb24gYWdhaW5zdCB0aGUgJyR7cGFyYW1ldGVyU3RyaW5nfScgcGFyYW1ldGVyLmApO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIlBhcmFtZXRlclwiO1xuXG4gIHN0YXRpYyBmcm9tUGFyYW1ldGVyTm9kZShwYXJhbWV0ZXJOb2RlLCBjb250ZXh0KSB7XG4gICAgbGV0IHBhcmFtZXRlciA9IG51bGw7XG5cbiAgICBjb25zdCB0ZXJtaW5hbE5vZGVzID0gdGVybWluYWxOb2Rlc1F1ZXJ5KHBhcmFtZXRlck5vZGUpLFxuICAgICAgICAgIHRlcm1pbmFsTm9kZXNMZW5ndGggPSB0ZXJtaW5hbE5vZGVzLmxlbmd0aDtcblxuICAgIGlmICh0ZXJtaW5hbE5vZGVzTGVuZ3RoID09PSAyKSB7XG4gICAgICBwYXJhbWV0ZXIgPSBwYXJhbWV0ZXJGcm9tUGFyYW1ldGVyTm9kZShwYXJhbWV0ZXJOb2RlLCBjb250ZXh0KTtcbiAgICB9XG5cbiAgICByZXR1cm4gcGFyYW1ldGVyO1xuICB9XG59KTtcblxuZnVuY3Rpb24gcGFyYW1ldGVyRnJvbVBhcmFtZXRlck5vZGUocGFyYW1ldGVyTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFBhcmFtZXRlciB9ID0gZG9tLFxuICAgICAgICBuYW1lID0gbmFtZUZyb21QYXJhbWV0ZXJOb2RlKHBhcmFtZXRlck5vZGUsIGNvbnRleHQpLFxuICAgICAgICB0eXBlID0gdHlwZUZyb21QYXJhbWV0ZXJOb2RlKHBhcmFtZXRlck5vZGUsIGNvbnRleHQpLFxuICAgICAgICBzdHJpbmcgPSBzdHJpbmdGcm9tTmFtZUFuZFR5cGUobmFtZSwgdHlwZSwgY29udGV4dCksXG4gICAgICAgIHBhcmFtZXRlciA9IG5ldyBQYXJhbWV0ZXIoc3RyaW5nLCB0eXBlLCBuYW1lKTtcblxuICByZXR1cm4gcGFyYW1ldGVyO1xufVxuXG5mdW5jdGlvbiBzdHJpbmdGcm9tTmFtZUFuZFR5cGUobmFtZSwgdHlwZSwgY29udGV4dCkge1xuICBjb25zdCBuYW1lU3RyaW5nID0gbmFtZSwgIC8vL1xuICAgICAgICB0eXBlU3RyaW5nID0gdHlwZSwgIC8vL1xuICAgICAgICBzdHJpbmcgPSBgJHt0eXBlU3RyaW5nfSAke25hbWVTdHJpbmd9YDtcblxuICByZXR1cm4gc3RyaW5nO1xufVxuXG5mdW5jdGlvbiBuYW1lRnJvbVBhcmFtZXRlck5vZGUocGFyYW1ldGVyTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBuYW1lVGVybWluYWxOb2RlID0gbmFtZVRlcm1pbmFsTm9kZVF1ZXJ5KHBhcmFtZXRlck5vZGUpLFxuICAgICAgICBuYW1lVGVybWluYWxOb2RlQ29udGVudCA9IG5hbWVUZXJtaW5hbE5vZGUuZ2V0Q29udGVudCgpLFxuICAgICAgICBuYW1lID0gbmFtZVRlcm1pbmFsTm9kZUNvbnRlbnQ7IC8vL1xuXG4gIHJldHVybiBuYW1lO1xufVxuXG5mdW5jdGlvbiB0eXBlRnJvbVBhcmFtZXRlck5vZGUocGFyYW1ldGVyTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB0eXBlVGVybWluYWxOb2RlID0gdHlwZVRlcm1pbmFsTm9kZVF1ZXJ5KHBhcmFtZXRlck5vZGUpLFxuICAgICAgICB0eXBlVGVybWluYWxOb2RlQ29udGVudCA9IHR5cGVUZXJtaW5hbE5vZGUuZ2V0Q29udGVudCgpLFxuICAgICAgICB0eXBlID0gdHlwZVRlcm1pbmFsTm9kZUNvbnRlbnQ7IC8vL1xuXG4gIHJldHVybiB0eXBlO1xufVxuIl0sIm5hbWVzIjpbInRlcm1pbmFsTm9kZXNRdWVyeSIsIm5vZGVzUXVlcnkiLCJuYW1lVGVybWluYWxOb2RlUXVlcnkiLCJub2RlUXVlcnkiLCJ0eXBlVGVybWluYWxOb2RlUXVlcnkiLCJkb21Bc3NpZ25lZCIsIlBhcmFtZXRlciIsInN0cmluZyIsInR5cGUiLCJuYW1lIiwiZ2V0U3RyaW5nIiwiZ2V0VHlwZSIsImdldE5hbWUiLCJtYXRjaEV4cHJlc3Npb24iLCJleHByZXNzaW9uIiwiY29udGV4dCIsImV4cHJlc3Npb25TdHJpbmciLCJhc1N0cmluZyIsInBhcmFtZXRlclN0cmluZyIsInRyYWNlIiwiZXhwcmVzc2lvblR5cGUiLCJtZXNzYWdlIiwiZXhjZXB0aW9uIiwiRXhjZXB0aW9uIiwiZnJvbU1lc3NhZ2UiLCJkZWJ1ZyIsImZyb21QYXJhbWV0ZXJOb2RlIiwicGFyYW1ldGVyTm9kZSIsInBhcmFtZXRlciIsInRlcm1pbmFsTm9kZXMiLCJ0ZXJtaW5hbE5vZGVzTGVuZ3RoIiwibGVuZ3RoIiwicGFyYW1ldGVyRnJvbVBhcmFtZXRlck5vZGUiLCJkb20iLCJuYW1lRnJvbVBhcmFtZXRlck5vZGUiLCJ0eXBlRnJvbVBhcmFtZXRlck5vZGUiLCJzdHJpbmdGcm9tTmFtZUFuZFR5cGUiLCJuYW1lU3RyaW5nIiwidHlwZVN0cmluZyIsIm5hbWVUZXJtaW5hbE5vZGUiLCJuYW1lVGVybWluYWxOb2RlQ29udGVudCIsImdldENvbnRlbnQiLCJ0eXBlVGVybWluYWxOb2RlIiwidHlwZVRlcm1pbmFsTm9kZUNvbnRlbnQiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVlBOzs7ZUFBQTs7OzJEQVZnQjtnRUFDTTtxQkFHZ0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXRDLElBQU1BLHFCQUFxQkMsSUFBQUEsaUJBQVUsRUFBQyxrQkFDaENDLHdCQUF3QkMsSUFBQUEsZ0JBQVMsRUFBQyxxQkFDbENDLHdCQUF3QkQsSUFBQUEsZ0JBQVMsRUFBQztJQUV4QyxXQUFlRSxJQUFBQSxnQkFBVyw4QkFBQzthQUFNQyxVQUNuQkMsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLElBQUk7Z0NBRENIO1FBRTdCLElBQUksQ0FBQ0MsTUFBTSxHQUFHQTtRQUNkLElBQUksQ0FBQ0MsSUFBSSxHQUFHQTtRQUNaLElBQUksQ0FBQ0MsSUFBSSxHQUFHQTs7OztZQUdkQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNILE1BQU07WUFDcEI7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNILElBQUk7WUFDbEI7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNILElBQUk7WUFDbEI7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUEsZ0JBQWdCQyxVQUFVLEVBQUVDLE9BQU87Z0JBQ2pDLElBQU1DLG1CQUFtQkYsV0FBV0csUUFBUSxDQUFDRixVQUN2Q0csa0JBQWtCLElBQUksQ0FBQ1gsTUFBTSxFQUFHLEdBQUc7Z0JBRXpDUSxRQUFRSSxLQUFLLENBQUMsQUFBQyxnQkFBMkRELE9BQTVDRixrQkFBaUIsNkJBQTJDLE9BQWhCRSxpQkFBZ0I7Z0JBRTFGLElBQU1FLGlCQUFpQk4sV0FBV0gsT0FBTztnQkFFekMsSUFBSSxJQUFJLENBQUNILElBQUksS0FBS1ksZ0JBQWdCO29CQUNoQyxJQUFNQyxVQUFVLEFBQUMsT0FBd0NELE9BQWxDSixrQkFBaUIsbUJBQStDRSxPQUE5QkUsZ0JBQWUsaUJBQWdELE9BQWpDRixpQkFBZ0IsbUJBQTJCLE9BQVYsSUFBSSxDQUFDVixJQUFJLEVBQUMseUJBQzVIYyxZQUFZQyxrQkFBUyxDQUFDQyxXQUFXLENBQUNIO29CQUV4QyxNQUFNQztnQkFDUjtnQkFFQVAsUUFBUVUsS0FBSyxDQUFDLEFBQUMsa0JBQTZEUCxPQUE1Q0Ysa0JBQWlCLDZCQUEyQyxPQUFoQkUsaUJBQWdCO1lBQzlGOzs7O1lBSU9RLEtBQUFBO21CQUFQLFNBQU9BLGtCQUFrQkMsYUFBYSxFQUFFWixPQUFPO2dCQUM3QyxJQUFJYSxZQUFZO2dCQUVoQixJQUFNQyxnQkFBZ0I3QixtQkFBbUIyQixnQkFDbkNHLHNCQUFzQkQsY0FBY0UsTUFBTTtnQkFFaEQsSUFBSUQsd0JBQXdCLEdBQUc7b0JBQzdCRixZQUFZSSwyQkFBMkJMLGVBQWVaO2dCQUN4RDtnQkFFQSxPQUFPYTtZQUNUOzs7O0tBYkEsNkJBQU9uQixRQUFPO0FBZ0JoQixTQUFTdUIsMkJBQTJCTCxhQUFhLEVBQUVaLE9BQU87SUFDeEQsSUFBTSxBQUFFVCxZQUFjMkIsWUFBRyxDQUFqQjNCLFdBQ0ZHLE9BQU95QixzQkFBc0JQLGVBQWVaLFVBQzVDUCxPQUFPMkIsc0JBQXNCUixlQUFlWixVQUM1Q1IsU0FBUzZCLHNCQUFzQjNCLE1BQU1ELE1BQU1PLFVBQzNDYSxZQUFZLElBQUl0QixVQUFVQyxRQUFRQyxNQUFNQztJQUU5QyxPQUFPbUI7QUFDVDtBQUVBLFNBQVNRLHNCQUFzQjNCLElBQUksRUFBRUQsSUFBSSxFQUFFTyxPQUFPO0lBQ2hELElBQU1zQixhQUFhNUIsTUFDYjZCLGFBQWE5QixNQUNiRCxTQUFTLEFBQUMsR0FBZ0I4QixPQUFkQyxZQUFXLEtBQWMsT0FBWEQ7SUFFaEMsT0FBTzlCO0FBQ1Q7QUFFQSxTQUFTMkIsc0JBQXNCUCxhQUFhLEVBQUVaLE9BQU87SUFDbkQsSUFBTXdCLG1CQUFtQnJDLHNCQUFzQnlCLGdCQUN6Q2EsMEJBQTBCRCxpQkFBaUJFLFVBQVUsSUFDckRoQyxPQUFPK0IseUJBQXlCLEdBQUc7SUFFekMsT0FBTy9CO0FBQ1Q7QUFFQSxTQUFTMEIsc0JBQXNCUixhQUFhLEVBQUVaLE9BQU87SUFDbkQsSUFBTTJCLG1CQUFtQnRDLHNCQUFzQnVCLGdCQUN6Q2dCLDBCQUEwQkQsaUJBQWlCRCxVQUFVLElBQ3JEakMsT0FBT21DLHlCQUF5QixHQUFHO0lBRXpDLE9BQU9uQztBQUNUIn0=