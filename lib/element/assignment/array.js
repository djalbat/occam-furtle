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
var _elements = /*#__PURE__*/ _interop_require_wildcard(require("../../elements"));
var _exception = /*#__PURE__*/ _interop_require_default(require("../../exception"));
var _types = require("../../types");
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
var _ArrayAssigment;
var _default = (0, _elements.define)((_ArrayAssigment = /*#__PURE__*/ function() {
    function ArrayAssigment(string, variable, parameters) {
        _class_call_check(this, ArrayAssigment);
        this.string = string;
        this.variable = variable;
        this.parameters = parameters;
    }
    _create_class(ArrayAssigment, [
        {
            key: "getString",
            value: function getString() {
                return this.string;
            }
        },
        {
            key: "getVariable",
            value: function getVariable() {
                return this.variable;
            }
        },
        {
            key: "getVariables",
            value: function getVariables() {
                return this.parameters;
            }
        },
        {
            key: "evaluate",
            value: function evaluate(context) {
                var _this = this;
                var arrayAssignmentString = this.string; ///
                context.trace("Evaluating the '".concat(arrayAssignmentString, "' array assignment..."));
                var expression = this.variable.evaluate(context), expressionType = expression.getType();
                if (expressionType !== _types.NODES_TYPE) {
                    var expressionString = expression.asString(context), message = "The ".concat(expressionString, " expression's '").concat(expressionType, "' type should be '").concat(_types.NODES_TYPE, "'."), exception = _exception.default.fromMessage(message);
                    throw exception;
                }
                var nodes = expression.getNodes(), nodesLength = nodes.length, parametersLength = this.parameters.getLength();
                if (parametersLength > nodesLength) {
                    var parametersString = this.parameters.getString(), nodesString = context.nodesAsString(nodex), message1 = "The length of the '".concat(parametersString, "' parameters is greater than the length of the '").concat(nodesString, "' nodes."), exception1 = _exception.default.fromMessage(message1);
                    throw exception1;
                }
                this.parameters.forEachParameter(function(parameter, index) {
                    if (parameter !== null) {
                        var Expression = _elements.default.Expression, node = nodes[index], expression = Expression.fromNode(node, context);
                        _this.evaluateParameter(parameter, expression, context);
                    }
                });
                context.debug("...evaluated the '".concat(arrayAssignmentString, "' array assignment."));
            }
        },
        {
            key: "evaluateParameter",
            value: function evaluateParameter(parameter, expression, context) {
                var expressionString = expression.asString(context), parameterString = parameter.getString();
                context.trace("Evaluating the '".concat(parameterString, "' parameter against the ").concat(expressionString, " expression..."));
                var parameterType = parameter.getType();
                if (parameterType !== _types.NODE_TYPE) {
                    var message = "The type of the '".concat(parameterString, "' parameter should be '").concat(_types.NODE_TYPE, "'."), exception = _exception.default.fromMessage(message);
                    throw exception;
                }
                var Variable = _elements.default.Variable, variable = Variable.fromParameter(parameter, context);
                variable.assign(expression, context);
                context.debug("...evaluated the '".concat(parameterString, "' parameter against the ").concat(expressionString, " expression."));
            }
        }
    ]);
    return ArrayAssigment;
}(), _define_property(_ArrayAssigment, "name", "ArrayAssignment"), _ArrayAssigment));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L2Fzc2lnbm1lbnQvYXJyYXkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBlbGVtZW50cyBmcm9tIFwiLi4vLi4vZWxlbWVudHNcIjtcbmltcG9ydCBFeGNlcHRpb24gZnJvbSBcIi4uLy4uL2V4Y2VwdGlvblwiO1xuXG5pbXBvcnQgeyBkZWZpbmUgfSBmcm9tIFwiLi4vLi4vZWxlbWVudHNcIjtcbmltcG9ydCB7IE5PREVfVFlQRSwgTk9ERVNfVFlQRSB9IGZyb20gXCIuLi8uLi90eXBlc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmUoY2xhc3MgQXJyYXlBc3NpZ21lbnQge1xuICBjb25zdHJ1Y3RvcihzdHJpbmcsIHZhcmlhYmxlLCBwYXJhbWV0ZXJzKSB7XG4gICAgdGhpcy5zdHJpbmcgPSBzdHJpbmc7XG4gICAgdGhpcy52YXJpYWJsZSA9IHZhcmlhYmxlO1xuICAgIHRoaXMucGFyYW1ldGVycyA9IHBhcmFtZXRlcnM7XG4gIH1cblxuICBnZXRTdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RyaW5nO1xuICB9XG5cbiAgZ2V0VmFyaWFibGUoKSB7XG4gICAgcmV0dXJuIHRoaXMudmFyaWFibGU7XG4gIH1cblxuICBnZXRWYXJpYWJsZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMucGFyYW1ldGVycztcbiAgfVxuXG4gIGV2YWx1YXRlKGNvbnRleHQpIHtcbiAgICBjb25zdCBhcnJheUFzc2lnbm1lbnRTdHJpbmcgPSB0aGlzLnN0cmluZzsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBFdmFsdWF0aW5nIHRoZSAnJHthcnJheUFzc2lnbm1lbnRTdHJpbmd9JyBhcnJheSBhc3NpZ25tZW50Li4uYCk7XG5cbiAgICBjb25zdCBleHByZXNzaW9uID0gdGhpcy52YXJpYWJsZS5ldmFsdWF0ZShjb250ZXh0KSxcbiAgICAgICAgICBleHByZXNzaW9uVHlwZSA9IGV4cHJlc3Npb24uZ2V0VHlwZSgpO1xuXG4gICAgaWYgKGV4cHJlc3Npb25UeXBlICE9PSBOT0RFU19UWVBFKSB7XG4gICAgICBjb25zdCBleHByZXNzaW9uU3RyaW5nID0gZXhwcmVzc2lvbi5hc1N0cmluZyhjb250ZXh0KSxcbiAgICAgICAgICAgIG1lc3NhZ2UgPSBgVGhlICR7ZXhwcmVzc2lvblN0cmluZ30gZXhwcmVzc2lvbidzICcke2V4cHJlc3Npb25UeXBlfScgdHlwZSBzaG91bGQgYmUgJyR7Tk9ERVNfVFlQRX0nLmAsXG4gICAgICAgICAgICBleGNlcHRpb24gPSBFeGNlcHRpb24uZnJvbU1lc3NhZ2UobWVzc2FnZSk7XG5cbiAgICAgIHRocm93IGV4Y2VwdGlvbjtcbiAgICB9XG5cbiAgICBjb25zdCBub2RlcyA9IGV4cHJlc3Npb24uZ2V0Tm9kZXMoKSxcbiAgICAgICAgICBub2Rlc0xlbmd0aCA9IG5vZGVzLmxlbmd0aCxcbiAgICAgICAgICBwYXJhbWV0ZXJzTGVuZ3RoID0gdGhpcy5wYXJhbWV0ZXJzLmdldExlbmd0aCgpO1xuXG4gICAgaWYgKHBhcmFtZXRlcnNMZW5ndGggPiBub2Rlc0xlbmd0aCkge1xuICAgICAgY29uc3QgcGFyYW1ldGVyc1N0cmluZyA9IHRoaXMucGFyYW1ldGVycy5nZXRTdHJpbmcoKSxcbiAgICAgICAgICAgIG5vZGVzU3RyaW5nID0gY29udGV4dC5ub2Rlc0FzU3RyaW5nKG5vZGV4KSxcbiAgICAgICAgICAgIG1lc3NhZ2UgPSBgVGhlIGxlbmd0aCBvZiB0aGUgJyR7cGFyYW1ldGVyc1N0cmluZ30nIHBhcmFtZXRlcnMgaXMgZ3JlYXRlciB0aGFuIHRoZSBsZW5ndGggb2YgdGhlICcke25vZGVzU3RyaW5nfScgbm9kZXMuYCxcbiAgICAgICAgICAgIGV4Y2VwdGlvbiA9IEV4Y2VwdGlvbi5mcm9tTWVzc2FnZShtZXNzYWdlKTtcblxuICAgICAgdGhyb3cgZXhjZXB0aW9uO1xuICAgIH1cblxuICAgIHRoaXMucGFyYW1ldGVycy5mb3JFYWNoUGFyYW1ldGVyKChwYXJhbWV0ZXIsIGluZGV4KSA9PiB7XG4gICAgICBpZiAocGFyYW1ldGVyICE9PSBudWxsKSB7XG4gICAgICAgIGNvbnN0IHsgRXhwcmVzc2lvbiB9ID0gZWxlbWVudHMsXG4gICAgICAgICAgICAgIG5vZGUgPSBub2Rlc1tpbmRleF0sXG4gICAgICAgICAgICAgIGV4cHJlc3Npb24gPSBFeHByZXNzaW9uLmZyb21Ob2RlKG5vZGUsIGNvbnRleHQpO1xuXG4gICAgICAgIHRoaXMuZXZhbHVhdGVQYXJhbWV0ZXIocGFyYW1ldGVyLCBleHByZXNzaW9uLCBjb250ZXh0KTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGNvbnRleHQuZGVidWcoYC4uLmV2YWx1YXRlZCB0aGUgJyR7YXJyYXlBc3NpZ25tZW50U3RyaW5nfScgYXJyYXkgYXNzaWdubWVudC5gKTtcbiAgfVxuXG4gIGV2YWx1YXRlUGFyYW1ldGVyKHBhcmFtZXRlciwgZXhwcmVzc2lvbiwgY29udGV4dCkge1xuICAgIGNvbnN0IGV4cHJlc3Npb25TdHJpbmcgPSBleHByZXNzaW9uLmFzU3RyaW5nKGNvbnRleHQpLFxuICAgICAgICAgIHBhcmFtZXRlclN0cmluZyA9IHBhcmFtZXRlci5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYEV2YWx1YXRpbmcgdGhlICcke3BhcmFtZXRlclN0cmluZ30nIHBhcmFtZXRlciBhZ2FpbnN0IHRoZSAke2V4cHJlc3Npb25TdHJpbmd9IGV4cHJlc3Npb24uLi5gKTtcblxuICAgIGNvbnN0IHBhcmFtZXRlclR5cGUgPSBwYXJhbWV0ZXIuZ2V0VHlwZSgpO1xuXG4gICAgaWYgKHBhcmFtZXRlclR5cGUgIT09IE5PREVfVFlQRSkge1xuICAgICAgY29uc3QgbWVzc2FnZSA9IGBUaGUgdHlwZSBvZiB0aGUgJyR7cGFyYW1ldGVyU3RyaW5nfScgcGFyYW1ldGVyIHNob3VsZCBiZSAnJHtOT0RFX1RZUEV9Jy5gLFxuICAgICAgICAgICAgZXhjZXB0aW9uID0gRXhjZXB0aW9uLmZyb21NZXNzYWdlKG1lc3NhZ2UpO1xuXG4gICAgICB0aHJvdyBleGNlcHRpb247XG4gICAgfVxuXG4gICAgY29uc3QgeyBWYXJpYWJsZSB9ID0gZWxlbWVudHMsXG4gICAgICAgICAgdmFyaWFibGUgPSBWYXJpYWJsZS5mcm9tUGFyYW1ldGVyKHBhcmFtZXRlciwgY29udGV4dCk7XG5cbiAgICB2YXJpYWJsZS5hc3NpZ24oZXhwcmVzc2lvbiwgY29udGV4dCk7XG5cbiAgICBjb250ZXh0LmRlYnVnKGAuLi5ldmFsdWF0ZWQgdGhlICcke3BhcmFtZXRlclN0cmluZ30nIHBhcmFtZXRlciBhZ2FpbnN0IHRoZSAke2V4cHJlc3Npb25TdHJpbmd9IGV4cHJlc3Npb24uYCk7XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiQXJyYXlBc3NpZ25tZW50XCI7XG59KTtcbiJdLCJuYW1lcyI6WyJkZWZpbmUiLCJBcnJheUFzc2lnbWVudCIsInN0cmluZyIsInZhcmlhYmxlIiwicGFyYW1ldGVycyIsImdldFN0cmluZyIsImdldFZhcmlhYmxlIiwiZ2V0VmFyaWFibGVzIiwiZXZhbHVhdGUiLCJjb250ZXh0IiwiYXJyYXlBc3NpZ25tZW50U3RyaW5nIiwidHJhY2UiLCJleHByZXNzaW9uIiwiZXhwcmVzc2lvblR5cGUiLCJnZXRUeXBlIiwiTk9ERVNfVFlQRSIsImV4cHJlc3Npb25TdHJpbmciLCJhc1N0cmluZyIsIm1lc3NhZ2UiLCJleGNlcHRpb24iLCJFeGNlcHRpb24iLCJmcm9tTWVzc2FnZSIsIm5vZGVzIiwiZ2V0Tm9kZXMiLCJub2Rlc0xlbmd0aCIsImxlbmd0aCIsInBhcmFtZXRlcnNMZW5ndGgiLCJnZXRMZW5ndGgiLCJwYXJhbWV0ZXJzU3RyaW5nIiwibm9kZXNTdHJpbmciLCJub2Rlc0FzU3RyaW5nIiwibm9kZXgiLCJmb3JFYWNoUGFyYW1ldGVyIiwicGFyYW1ldGVyIiwiaW5kZXgiLCJFeHByZXNzaW9uIiwiZWxlbWVudHMiLCJub2RlIiwiZnJvbU5vZGUiLCJldmFsdWF0ZVBhcmFtZXRlciIsImRlYnVnIiwicGFyYW1ldGVyU3RyaW5nIiwicGFyYW1ldGVyVHlwZSIsIk5PREVfVFlQRSIsIlZhcmlhYmxlIiwiZnJvbVBhcmFtZXRlciIsImFzc2lnbiIsIm5hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVFBOzs7ZUFBQTs7O2dFQU5xQjtnRUFDQztxQkFHZ0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRXRDLFdBQWVBLElBQUFBLGdCQUFNLG1DQUFDO2FBQU1DLGVBQ2RDLE1BQU0sRUFBRUMsUUFBUSxFQUFFQyxVQUFVO2dDQURkSDtRQUV4QixJQUFJLENBQUNDLE1BQU0sR0FBR0E7UUFDZCxJQUFJLENBQUNDLFFBQVEsR0FBR0E7UUFDaEIsSUFBSSxDQUFDQyxVQUFVLEdBQUdBOzs7O1lBR3BCQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNILE1BQU07WUFDcEI7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNILFFBQVE7WUFDdEI7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNILFVBQVU7WUFDeEI7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUEsU0FBU0MsT0FBTzs7Z0JBQ2QsSUFBTUMsd0JBQXdCLElBQUksQ0FBQ1IsTUFBTSxFQUFFLEdBQUc7Z0JBRTlDTyxRQUFRRSxLQUFLLENBQUMsQUFBQyxtQkFBd0MsT0FBdEJELHVCQUFzQjtnQkFFdkQsSUFBTUUsYUFBYSxJQUFJLENBQUNULFFBQVEsQ0FBQ0ssUUFBUSxDQUFDQyxVQUNwQ0ksaUJBQWlCRCxXQUFXRSxPQUFPO2dCQUV6QyxJQUFJRCxtQkFBbUJFLGlCQUFVLEVBQUU7b0JBQ2pDLElBQU1DLG1CQUFtQkosV0FBV0ssUUFBUSxDQUFDUixVQUN2Q1MsVUFBVSxBQUFDLE9BQXdDTCxPQUFsQ0csa0JBQWlCLG1CQUFvREQsT0FBbkNGLGdCQUFlLHNCQUErQixPQUFYRSxpQkFBVSxFQUFDLE9BQ2pHSSxZQUFZQyxrQkFBUyxDQUFDQyxXQUFXLENBQUNIO29CQUV4QyxNQUFNQztnQkFDUjtnQkFFQSxJQUFNRyxRQUFRVixXQUFXVyxRQUFRLElBQzNCQyxjQUFjRixNQUFNRyxNQUFNLEVBQzFCQyxtQkFBbUIsSUFBSSxDQUFDdEIsVUFBVSxDQUFDdUIsU0FBUztnQkFFbEQsSUFBSUQsbUJBQW1CRixhQUFhO29CQUNsQyxJQUFNSSxtQkFBbUIsSUFBSSxDQUFDeEIsVUFBVSxDQUFDQyxTQUFTLElBQzVDd0IsY0FBY3BCLFFBQVFxQixhQUFhLENBQUNDLFFBQ3BDYixXQUFVLEFBQUMsc0JBQXdGVyxPQUFuRUQsa0JBQWlCLG9EQUE4RCxPQUFaQyxhQUFZLGFBQy9HVixhQUFZQyxrQkFBUyxDQUFDQyxXQUFXLENBQUNIO29CQUV4QyxNQUFNQztnQkFDUjtnQkFFQSxJQUFJLENBQUNmLFVBQVUsQ0FBQzRCLGdCQUFnQixDQUFDLFNBQUNDLFdBQVdDO29CQUMzQyxJQUFJRCxjQUFjLE1BQU07d0JBQ3RCLElBQU0sQUFBRUUsYUFBZUMsaUJBQVEsQ0FBdkJELFlBQ0ZFLE9BQU9mLEtBQUssQ0FBQ1ksTUFBTSxFQUNuQnRCLGFBQWF1QixXQUFXRyxRQUFRLENBQUNELE1BQU01Qjt3QkFFN0MsTUFBSzhCLGlCQUFpQixDQUFDTixXQUFXckIsWUFBWUg7b0JBQ2hEO2dCQUNGO2dCQUVBQSxRQUFRK0IsS0FBSyxDQUFDLEFBQUMscUJBQTBDLE9BQXRCOUIsdUJBQXNCO1lBQzNEOzs7WUFFQTZCLEtBQUFBO21CQUFBQSxTQUFBQSxrQkFBa0JOLFNBQVMsRUFBRXJCLFVBQVUsRUFBRUgsT0FBTztnQkFDOUMsSUFBTU8sbUJBQW1CSixXQUFXSyxRQUFRLENBQUNSLFVBQ3ZDZ0Msa0JBQWtCUixVQUFVNUIsU0FBUztnQkFFM0NJLFFBQVFFLEtBQUssQ0FBQyxBQUFDLG1CQUE0REssT0FBMUN5QixpQkFBZ0IsNEJBQTJDLE9BQWpCekIsa0JBQWlCO2dCQUU1RixJQUFNMEIsZ0JBQWdCVCxVQUFVbkIsT0FBTztnQkFFdkMsSUFBSTRCLGtCQUFrQkMsZ0JBQVMsRUFBRTtvQkFDL0IsSUFBTXpCLFVBQVUsQUFBQyxvQkFBNER5QixPQUF6Q0YsaUJBQWdCLDJCQUFtQyxPQUFWRSxnQkFBUyxFQUFDLE9BQ2pGeEIsWUFBWUMsa0JBQVMsQ0FBQ0MsV0FBVyxDQUFDSDtvQkFFeEMsTUFBTUM7Z0JBQ1I7Z0JBRUEsSUFBTSxBQUFFeUIsV0FBYVIsaUJBQVEsQ0FBckJRLFVBQ0Z6QyxXQUFXeUMsU0FBU0MsYUFBYSxDQUFDWixXQUFXeEI7Z0JBRW5ETixTQUFTMkMsTUFBTSxDQUFDbEMsWUFBWUg7Z0JBRTVCQSxRQUFRK0IsS0FBSyxDQUFDLEFBQUMscUJBQThEeEIsT0FBMUN5QixpQkFBZ0IsNEJBQTJDLE9BQWpCekIsa0JBQWlCO1lBQ2hHOzs7O0tBRUEsa0NBQU8rQixRQUFPIn0=