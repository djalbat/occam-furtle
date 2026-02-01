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
var _element = require("../../utilities/element");
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
                    var expressionString = expression.getString(), message = "The ".concat(expressionString, " expression's '").concat(expressionType, "' type should be '").concat(_types.NODES_TYPE, "'."), exception = _exception.default.fromMessage(message);
                    throw exception;
                }
                var nodes = expression.getNodes(), nodesLength = nodes.length, parametersLength = this.parameters.getLength();
                if (parametersLength > nodesLength) {
                    var parametersString = this.parameters.getString(), nodesString = context.nodesAsString(nodex), message1 = "The length of the '".concat(parametersString, "' parameters is greater than the length of the '").concat(nodesString, "' nodes."), exception1 = _exception.default.fromMessage(message1);
                    throw exception1;
                }
                this.parameters.forEachParameter(function(parameter, index) {
                    if (parameter !== null) {
                        var node = nodes[index], expression = (0, _element.expressionFromNode)(node, context);
                        _this.evaluateParameter(parameter, expression, context);
                    }
                });
                context.debug("...evaluated the '".concat(arrayAssignmentString, "' array assignment."));
            }
        },
        {
            key: "evaluateParameter",
            value: function evaluateParameter(parameter, expression, context) {
                var expressionString = expression.getString(), parameterString = parameter.getString();
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L2Fzc2lnbm1lbnQvYXJyYXkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBlbGVtZW50cyBmcm9tIFwiLi4vLi4vZWxlbWVudHNcIjtcbmltcG9ydCBFeGNlcHRpb24gZnJvbSBcIi4uLy4uL2V4Y2VwdGlvblwiO1xuXG5pbXBvcnQgeyBkZWZpbmUgfSBmcm9tIFwiLi4vLi4vZWxlbWVudHNcIjtcbmltcG9ydCB7IGV4cHJlc3Npb25Gcm9tTm9kZSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvZWxlbWVudFwiO1xuaW1wb3J0IHsgTk9ERV9UWVBFLCBOT0RFU19UWVBFIH0gZnJvbSBcIi4uLy4uL3R5cGVzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZShjbGFzcyBBcnJheUFzc2lnbWVudCB7XG4gIGNvbnN0cnVjdG9yKHN0cmluZywgdmFyaWFibGUsIHBhcmFtZXRlcnMpIHtcbiAgICB0aGlzLnN0cmluZyA9IHN0cmluZztcbiAgICB0aGlzLnZhcmlhYmxlID0gdmFyaWFibGU7XG4gICAgdGhpcy5wYXJhbWV0ZXJzID0gcGFyYW1ldGVycztcbiAgfVxuXG4gIGdldFN0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5zdHJpbmc7XG4gIH1cblxuICBnZXRWYXJpYWJsZSgpIHtcbiAgICByZXR1cm4gdGhpcy52YXJpYWJsZTtcbiAgfVxuXG4gIGdldFZhcmlhYmxlcygpIHtcbiAgICByZXR1cm4gdGhpcy5wYXJhbWV0ZXJzO1xuICB9XG5cbiAgZXZhbHVhdGUoY29udGV4dCkge1xuICAgIGNvbnN0IGFycmF5QXNzaWdubWVudFN0cmluZyA9IHRoaXMuc3RyaW5nOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYEV2YWx1YXRpbmcgdGhlICcke2FycmF5QXNzaWdubWVudFN0cmluZ30nIGFycmF5IGFzc2lnbm1lbnQuLi5gKTtcblxuICAgIGNvbnN0IGV4cHJlc3Npb24gPSB0aGlzLnZhcmlhYmxlLmV2YWx1YXRlKGNvbnRleHQpLFxuICAgICAgICAgIGV4cHJlc3Npb25UeXBlID0gZXhwcmVzc2lvbi5nZXRUeXBlKCk7XG5cbiAgICBpZiAoZXhwcmVzc2lvblR5cGUgIT09IE5PREVTX1RZUEUpIHtcbiAgICAgIGNvbnN0IGV4cHJlc3Npb25TdHJpbmcgPSBleHByZXNzaW9uLmdldFN0cmluZygpLFxuICAgICAgICAgICAgbWVzc2FnZSA9IGBUaGUgJHtleHByZXNzaW9uU3RyaW5nfSBleHByZXNzaW9uJ3MgJyR7ZXhwcmVzc2lvblR5cGV9JyB0eXBlIHNob3VsZCBiZSAnJHtOT0RFU19UWVBFfScuYCxcbiAgICAgICAgICAgIGV4Y2VwdGlvbiA9IEV4Y2VwdGlvbi5mcm9tTWVzc2FnZShtZXNzYWdlKTtcblxuICAgICAgdGhyb3cgZXhjZXB0aW9uO1xuICAgIH1cblxuICAgIGNvbnN0IG5vZGVzID0gZXhwcmVzc2lvbi5nZXROb2RlcygpLFxuICAgICAgICAgIG5vZGVzTGVuZ3RoID0gbm9kZXMubGVuZ3RoLFxuICAgICAgICAgIHBhcmFtZXRlcnNMZW5ndGggPSB0aGlzLnBhcmFtZXRlcnMuZ2V0TGVuZ3RoKCk7XG5cbiAgICBpZiAocGFyYW1ldGVyc0xlbmd0aCA+IG5vZGVzTGVuZ3RoKSB7XG4gICAgICBjb25zdCBwYXJhbWV0ZXJzU3RyaW5nID0gdGhpcy5wYXJhbWV0ZXJzLmdldFN0cmluZygpLFxuICAgICAgICAgICAgbm9kZXNTdHJpbmcgPSBjb250ZXh0Lm5vZGVzQXNTdHJpbmcobm9kZXgpLFxuICAgICAgICAgICAgbWVzc2FnZSA9IGBUaGUgbGVuZ3RoIG9mIHRoZSAnJHtwYXJhbWV0ZXJzU3RyaW5nfScgcGFyYW1ldGVycyBpcyBncmVhdGVyIHRoYW4gdGhlIGxlbmd0aCBvZiB0aGUgJyR7bm9kZXNTdHJpbmd9JyBub2Rlcy5gLFxuICAgICAgICAgICAgZXhjZXB0aW9uID0gRXhjZXB0aW9uLmZyb21NZXNzYWdlKG1lc3NhZ2UpO1xuXG4gICAgICB0aHJvdyBleGNlcHRpb247XG4gICAgfVxuXG4gICAgdGhpcy5wYXJhbWV0ZXJzLmZvckVhY2hQYXJhbWV0ZXIoKHBhcmFtZXRlciwgaW5kZXgpID0+IHtcbiAgICAgIGlmIChwYXJhbWV0ZXIgIT09IG51bGwpIHtcbiAgICAgICAgY29uc3Qgbm9kZSA9IG5vZGVzW2luZGV4XSxcbiAgICAgICAgICAgICAgZXhwcmVzc2lvbiA9IGV4cHJlc3Npb25Gcm9tTm9kZShub2RlLCBjb250ZXh0KTtcblxuICAgICAgICB0aGlzLmV2YWx1YXRlUGFyYW1ldGVyKHBhcmFtZXRlciwgZXhwcmVzc2lvbiwgY29udGV4dCk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBjb250ZXh0LmRlYnVnKGAuLi5ldmFsdWF0ZWQgdGhlICcke2FycmF5QXNzaWdubWVudFN0cmluZ30nIGFycmF5IGFzc2lnbm1lbnQuYCk7XG4gIH1cblxuICBldmFsdWF0ZVBhcmFtZXRlcihwYXJhbWV0ZXIsIGV4cHJlc3Npb24sIGNvbnRleHQpIHtcbiAgICBjb25zdCBleHByZXNzaW9uU3RyaW5nID0gZXhwcmVzc2lvbi5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBwYXJhbWV0ZXJTdHJpbmcgPSBwYXJhbWV0ZXIuZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBFdmFsdWF0aW5nIHRoZSAnJHtwYXJhbWV0ZXJTdHJpbmd9JyBwYXJhbWV0ZXIgYWdhaW5zdCB0aGUgJHtleHByZXNzaW9uU3RyaW5nfSBleHByZXNzaW9uLi4uYCk7XG5cbiAgICBjb25zdCBwYXJhbWV0ZXJUeXBlID0gcGFyYW1ldGVyLmdldFR5cGUoKTtcblxuICAgIGlmIChwYXJhbWV0ZXJUeXBlICE9PSBOT0RFX1RZUEUpIHtcbiAgICAgIGNvbnN0IG1lc3NhZ2UgPSBgVGhlIHR5cGUgb2YgdGhlICcke3BhcmFtZXRlclN0cmluZ30nIHBhcmFtZXRlciBzaG91bGQgYmUgJyR7Tk9ERV9UWVBFfScuYCxcbiAgICAgICAgICAgIGV4Y2VwdGlvbiA9IEV4Y2VwdGlvbi5mcm9tTWVzc2FnZShtZXNzYWdlKTtcblxuICAgICAgdGhyb3cgZXhjZXB0aW9uO1xuICAgIH1cblxuICAgIGNvbnN0IHsgVmFyaWFibGUgfSA9IGVsZW1lbnRzLFxuICAgICAgICAgIHZhcmlhYmxlID0gVmFyaWFibGUuZnJvbVBhcmFtZXRlcihwYXJhbWV0ZXIsIGNvbnRleHQpO1xuXG4gICAgdmFyaWFibGUuYXNzaWduKGV4cHJlc3Npb24sIGNvbnRleHQpO1xuXG4gICAgY29udGV4dC5kZWJ1ZyhgLi4uZXZhbHVhdGVkIHRoZSAnJHtwYXJhbWV0ZXJTdHJpbmd9JyBwYXJhbWV0ZXIgYWdhaW5zdCB0aGUgJHtleHByZXNzaW9uU3RyaW5nfSBleHByZXNzaW9uLmApO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIkFycmF5QXNzaWdubWVudFwiO1xufSk7XG4iXSwibmFtZXMiOlsiZGVmaW5lIiwiQXJyYXlBc3NpZ21lbnQiLCJzdHJpbmciLCJ2YXJpYWJsZSIsInBhcmFtZXRlcnMiLCJnZXRTdHJpbmciLCJnZXRWYXJpYWJsZSIsImdldFZhcmlhYmxlcyIsImV2YWx1YXRlIiwiY29udGV4dCIsImFycmF5QXNzaWdubWVudFN0cmluZyIsInRyYWNlIiwiZXhwcmVzc2lvbiIsImV4cHJlc3Npb25UeXBlIiwiZ2V0VHlwZSIsIk5PREVTX1RZUEUiLCJleHByZXNzaW9uU3RyaW5nIiwibWVzc2FnZSIsImV4Y2VwdGlvbiIsIkV4Y2VwdGlvbiIsImZyb21NZXNzYWdlIiwibm9kZXMiLCJnZXROb2RlcyIsIm5vZGVzTGVuZ3RoIiwibGVuZ3RoIiwicGFyYW1ldGVyc0xlbmd0aCIsImdldExlbmd0aCIsInBhcmFtZXRlcnNTdHJpbmciLCJub2Rlc1N0cmluZyIsIm5vZGVzQXNTdHJpbmciLCJub2RleCIsImZvckVhY2hQYXJhbWV0ZXIiLCJwYXJhbWV0ZXIiLCJpbmRleCIsIm5vZGUiLCJleHByZXNzaW9uRnJvbU5vZGUiLCJldmFsdWF0ZVBhcmFtZXRlciIsImRlYnVnIiwicGFyYW1ldGVyU3RyaW5nIiwicGFyYW1ldGVyVHlwZSIsIk5PREVfVFlQRSIsIlZhcmlhYmxlIiwiZWxlbWVudHMiLCJmcm9tUGFyYW1ldGVyIiwiYXNzaWduIiwibmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBU0E7OztlQUFBOzs7Z0VBUHFCO2dFQUNDO3VCQUdhO3FCQUNHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUV0QyxXQUFlQSxJQUFBQSxnQkFBTSxtQ0FBQzthQUFNQyxlQUNkQyxNQUFNLEVBQUVDLFFBQVEsRUFBRUMsVUFBVTtnQ0FEZEg7UUFFeEIsSUFBSSxDQUFDQyxNQUFNLEdBQUdBO1FBQ2QsSUFBSSxDQUFDQyxRQUFRLEdBQUdBO1FBQ2hCLElBQUksQ0FBQ0MsVUFBVSxHQUFHQTs7OztZQUdwQkMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSCxNQUFNO1lBQ3BCOzs7WUFFQUksS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSCxRQUFRO1lBQ3RCOzs7WUFFQUksS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSCxVQUFVO1lBQ3hCOzs7WUFFQUksS0FBQUE7bUJBQUFBLFNBQUFBLFNBQVNDLE9BQU87O2dCQUNkLElBQU1DLHdCQUF3QixJQUFJLENBQUNSLE1BQU0sRUFBRSxHQUFHO2dCQUU5Q08sUUFBUUUsS0FBSyxDQUFDLEFBQUMsbUJBQXdDLE9BQXRCRCx1QkFBc0I7Z0JBRXZELElBQU1FLGFBQWEsSUFBSSxDQUFDVCxRQUFRLENBQUNLLFFBQVEsQ0FBQ0MsVUFDcENJLGlCQUFpQkQsV0FBV0UsT0FBTztnQkFFekMsSUFBSUQsbUJBQW1CRSxpQkFBVSxFQUFFO29CQUNqQyxJQUFNQyxtQkFBbUJKLFdBQVdQLFNBQVMsSUFDdkNZLFVBQVUsQUFBQyxPQUF3Q0osT0FBbENHLGtCQUFpQixtQkFBb0RELE9BQW5DRixnQkFBZSxzQkFBK0IsT0FBWEUsaUJBQVUsRUFBQyxPQUNqR0csWUFBWUMsa0JBQVMsQ0FBQ0MsV0FBVyxDQUFDSDtvQkFFeEMsTUFBTUM7Z0JBQ1I7Z0JBRUEsSUFBTUcsUUFBUVQsV0FBV1UsUUFBUSxJQUMzQkMsY0FBY0YsTUFBTUcsTUFBTSxFQUMxQkMsbUJBQW1CLElBQUksQ0FBQ3JCLFVBQVUsQ0FBQ3NCLFNBQVM7Z0JBRWxELElBQUlELG1CQUFtQkYsYUFBYTtvQkFDbEMsSUFBTUksbUJBQW1CLElBQUksQ0FBQ3ZCLFVBQVUsQ0FBQ0MsU0FBUyxJQUM1Q3VCLGNBQWNuQixRQUFRb0IsYUFBYSxDQUFDQyxRQUNwQ2IsV0FBVSxBQUFDLHNCQUF3RlcsT0FBbkVELGtCQUFpQixvREFBOEQsT0FBWkMsYUFBWSxhQUMvR1YsYUFBWUMsa0JBQVMsQ0FBQ0MsV0FBVyxDQUFDSDtvQkFFeEMsTUFBTUM7Z0JBQ1I7Z0JBRUEsSUFBSSxDQUFDZCxVQUFVLENBQUMyQixnQkFBZ0IsQ0FBQyxTQUFDQyxXQUFXQztvQkFDM0MsSUFBSUQsY0FBYyxNQUFNO3dCQUN0QixJQUFNRSxPQUFPYixLQUFLLENBQUNZLE1BQU0sRUFDbkJyQixhQUFhdUIsSUFBQUEsMkJBQWtCLEVBQUNELE1BQU16Qjt3QkFFNUMsTUFBSzJCLGlCQUFpQixDQUFDSixXQUFXcEIsWUFBWUg7b0JBQ2hEO2dCQUNGO2dCQUVBQSxRQUFRNEIsS0FBSyxDQUFDLEFBQUMscUJBQTBDLE9BQXRCM0IsdUJBQXNCO1lBQzNEOzs7WUFFQTBCLEtBQUFBO21CQUFBQSxTQUFBQSxrQkFBa0JKLFNBQVMsRUFBRXBCLFVBQVUsRUFBRUgsT0FBTztnQkFDOUMsSUFBTU8sbUJBQW1CSixXQUFXUCxTQUFTLElBQ3ZDaUMsa0JBQWtCTixVQUFVM0IsU0FBUztnQkFFM0NJLFFBQVFFLEtBQUssQ0FBQyxBQUFDLG1CQUE0REssT0FBMUNzQixpQkFBZ0IsNEJBQTJDLE9BQWpCdEIsa0JBQWlCO2dCQUU1RixJQUFNdUIsZ0JBQWdCUCxVQUFVbEIsT0FBTztnQkFFdkMsSUFBSXlCLGtCQUFrQkMsZ0JBQVMsRUFBRTtvQkFDL0IsSUFBTXZCLFVBQVUsQUFBQyxvQkFBNER1QixPQUF6Q0YsaUJBQWdCLDJCQUFtQyxPQUFWRSxnQkFBUyxFQUFDLE9BQ2pGdEIsWUFBWUMsa0JBQVMsQ0FBQ0MsV0FBVyxDQUFDSDtvQkFFeEMsTUFBTUM7Z0JBQ1I7Z0JBRUEsSUFBTSxBQUFFdUIsV0FBYUMsaUJBQVEsQ0FBckJELFVBQ0Z0QyxXQUFXc0MsU0FBU0UsYUFBYSxDQUFDWCxXQUFXdkI7Z0JBRW5ETixTQUFTeUMsTUFBTSxDQUFDaEMsWUFBWUg7Z0JBRTVCQSxRQUFRNEIsS0FBSyxDQUFDLEFBQUMscUJBQThEckIsT0FBMUNzQixpQkFBZ0IsNEJBQTJDLE9BQWpCdEIsa0JBQWlCO1lBQ2hHOzs7O0tBRUEsa0NBQU82QixRQUFPIn0=