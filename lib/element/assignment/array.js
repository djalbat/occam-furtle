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
var _exception = /*#__PURE__*/ _interop_require_default(require("../../exception"));
var _elements = require("../../elements");
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
                var expressionString = expression.asString(context), parameterString = parameter.getString();
                context.trace("Evaluating the '".concat(parameterString, "' parameter against the ").concat(expressionString, " expression..."));
                var parameterType = parameter.getType();
                if (parameterType !== _types.NODE_TYPE) {
                    var message = "The type of the '".concat(parameterString, "' parameter should be '").concat(_types.NODE_TYPE, "'."), exception = _exception.default.fromMessage(message);
                    throw exception;
                }
                var variable = (0, _element.variableFromParameter)(parameter, context);
                variable.assign(expression, context);
                context.debug("...evaluated the '".concat(parameterString, "' parameter against the ").concat(expressionString, " expression."));
            }
        }
    ]);
    return ArrayAssigment;
}(), _define_property(_ArrayAssigment, "name", "ArrayAssignment"), _ArrayAssigment));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L2Fzc2lnbm1lbnQvYXJyYXkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBFeGNlcHRpb24gZnJvbSBcIi4uLy4uL2V4Y2VwdGlvblwiO1xuXG5pbXBvcnQgeyBkZWZpbmUgfSBmcm9tIFwiLi4vLi4vZWxlbWVudHNcIjtcbmltcG9ydCB7IGV4cHJlc3Npb25Gcm9tTm9kZSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvZWxlbWVudFwiO1xuaW1wb3J0IHsgdmFyaWFibGVGcm9tUGFyYW1ldGVyIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9lbGVtZW50XCI7XG5pbXBvcnQgeyBOT0RFX1RZUEUsIE5PREVTX1RZUEUgfSBmcm9tIFwiLi4vLi4vdHlwZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lKGNsYXNzIEFycmF5QXNzaWdtZW50IHtcbiAgY29uc3RydWN0b3Ioc3RyaW5nLCB2YXJpYWJsZSwgcGFyYW1ldGVycykge1xuICAgIHRoaXMuc3RyaW5nID0gc3RyaW5nO1xuICAgIHRoaXMudmFyaWFibGUgPSB2YXJpYWJsZTtcbiAgICB0aGlzLnBhcmFtZXRlcnMgPSBwYXJhbWV0ZXJzO1xuICB9XG5cbiAgZ2V0U3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLnN0cmluZztcbiAgfVxuXG4gIGdldFZhcmlhYmxlKCkge1xuICAgIHJldHVybiB0aGlzLnZhcmlhYmxlO1xuICB9XG5cbiAgZ2V0VmFyaWFibGVzKCkge1xuICAgIHJldHVybiB0aGlzLnBhcmFtZXRlcnM7XG4gIH1cblxuICBldmFsdWF0ZShjb250ZXh0KSB7XG4gICAgY29uc3QgYXJyYXlBc3NpZ25tZW50U3RyaW5nID0gdGhpcy5zdHJpbmc7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgRXZhbHVhdGluZyB0aGUgJyR7YXJyYXlBc3NpZ25tZW50U3RyaW5nfScgYXJyYXkgYXNzaWdubWVudC4uLmApO1xuXG4gICAgY29uc3QgZXhwcmVzc2lvbiA9IHRoaXMudmFyaWFibGUuZXZhbHVhdGUoY29udGV4dCksXG4gICAgICAgICAgZXhwcmVzc2lvblR5cGUgPSBleHByZXNzaW9uLmdldFR5cGUoKTtcblxuICAgIGlmIChleHByZXNzaW9uVHlwZSAhPT0gTk9ERVNfVFlQRSkge1xuICAgICAgY29uc3QgZXhwcmVzc2lvblN0cmluZyA9IGV4cHJlc3Npb24uYXNTdHJpbmcoY29udGV4dCksXG4gICAgICAgICAgICBtZXNzYWdlID0gYFRoZSAke2V4cHJlc3Npb25TdHJpbmd9IGV4cHJlc3Npb24ncyAnJHtleHByZXNzaW9uVHlwZX0nIHR5cGUgc2hvdWxkIGJlICcke05PREVTX1RZUEV9Jy5gLFxuICAgICAgICAgICAgZXhjZXB0aW9uID0gRXhjZXB0aW9uLmZyb21NZXNzYWdlKG1lc3NhZ2UpO1xuXG4gICAgICB0aHJvdyBleGNlcHRpb247XG4gICAgfVxuXG4gICAgY29uc3Qgbm9kZXMgPSBleHByZXNzaW9uLmdldE5vZGVzKCksXG4gICAgICAgICAgbm9kZXNMZW5ndGggPSBub2Rlcy5sZW5ndGgsXG4gICAgICAgICAgcGFyYW1ldGVyc0xlbmd0aCA9IHRoaXMucGFyYW1ldGVycy5nZXRMZW5ndGgoKTtcblxuICAgIGlmIChwYXJhbWV0ZXJzTGVuZ3RoID4gbm9kZXNMZW5ndGgpIHtcbiAgICAgIGNvbnN0IHBhcmFtZXRlcnNTdHJpbmcgPSB0aGlzLnBhcmFtZXRlcnMuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgICBub2Rlc1N0cmluZyA9IGNvbnRleHQubm9kZXNBc1N0cmluZyhub2RleCksXG4gICAgICAgICAgICBtZXNzYWdlID0gYFRoZSBsZW5ndGggb2YgdGhlICcke3BhcmFtZXRlcnNTdHJpbmd9JyBwYXJhbWV0ZXJzIGlzIGdyZWF0ZXIgdGhhbiB0aGUgbGVuZ3RoIG9mIHRoZSAnJHtub2Rlc1N0cmluZ30nIG5vZGVzLmAsXG4gICAgICAgICAgICBleGNlcHRpb24gPSBFeGNlcHRpb24uZnJvbU1lc3NhZ2UobWVzc2FnZSk7XG5cbiAgICAgIHRocm93IGV4Y2VwdGlvbjtcbiAgICB9XG5cbiAgICB0aGlzLnBhcmFtZXRlcnMuZm9yRWFjaFBhcmFtZXRlcigocGFyYW1ldGVyLCBpbmRleCkgPT4ge1xuICAgICAgaWYgKHBhcmFtZXRlciAhPT0gbnVsbCkge1xuICAgICAgICBjb25zdCBub2RlID0gbm9kZXNbaW5kZXhdLFxuICAgICAgICAgICAgICBleHByZXNzaW9uID0gZXhwcmVzc2lvbkZyb21Ob2RlKG5vZGUsIGNvbnRleHQpO1xuXG4gICAgICAgIHRoaXMuZXZhbHVhdGVQYXJhbWV0ZXIocGFyYW1ldGVyLCBleHByZXNzaW9uLCBjb250ZXh0KTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGNvbnRleHQuZGVidWcoYC4uLmV2YWx1YXRlZCB0aGUgJyR7YXJyYXlBc3NpZ25tZW50U3RyaW5nfScgYXJyYXkgYXNzaWdubWVudC5gKTtcbiAgfVxuXG4gIGV2YWx1YXRlUGFyYW1ldGVyKHBhcmFtZXRlciwgZXhwcmVzc2lvbiwgY29udGV4dCkge1xuICAgIGNvbnN0IGV4cHJlc3Npb25TdHJpbmcgPSBleHByZXNzaW9uLmFzU3RyaW5nKGNvbnRleHQpLFxuICAgICAgICAgIHBhcmFtZXRlclN0cmluZyA9IHBhcmFtZXRlci5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYEV2YWx1YXRpbmcgdGhlICcke3BhcmFtZXRlclN0cmluZ30nIHBhcmFtZXRlciBhZ2FpbnN0IHRoZSAke2V4cHJlc3Npb25TdHJpbmd9IGV4cHJlc3Npb24uLi5gKTtcblxuICAgIGNvbnN0IHBhcmFtZXRlclR5cGUgPSBwYXJhbWV0ZXIuZ2V0VHlwZSgpO1xuXG4gICAgaWYgKHBhcmFtZXRlclR5cGUgIT09IE5PREVfVFlQRSkge1xuICAgICAgY29uc3QgbWVzc2FnZSA9IGBUaGUgdHlwZSBvZiB0aGUgJyR7cGFyYW1ldGVyU3RyaW5nfScgcGFyYW1ldGVyIHNob3VsZCBiZSAnJHtOT0RFX1RZUEV9Jy5gLFxuICAgICAgICAgICAgZXhjZXB0aW9uID0gRXhjZXB0aW9uLmZyb21NZXNzYWdlKG1lc3NhZ2UpO1xuXG4gICAgICB0aHJvdyBleGNlcHRpb247XG4gICAgfVxuXG4gICAgY29uc3QgdmFyaWFibGUgPSB2YXJpYWJsZUZyb21QYXJhbWV0ZXIocGFyYW1ldGVyLCBjb250ZXh0KTtcblxuICAgIHZhcmlhYmxlLmFzc2lnbihleHByZXNzaW9uLCBjb250ZXh0KTtcblxuICAgIGNvbnRleHQuZGVidWcoYC4uLmV2YWx1YXRlZCB0aGUgJyR7cGFyYW1ldGVyU3RyaW5nfScgcGFyYW1ldGVyIGFnYWluc3QgdGhlICR7ZXhwcmVzc2lvblN0cmluZ30gZXhwcmVzc2lvbi5gKTtcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJBcnJheUFzc2lnbm1lbnRcIjtcbn0pO1xuIl0sIm5hbWVzIjpbImRlZmluZSIsIkFycmF5QXNzaWdtZW50Iiwic3RyaW5nIiwidmFyaWFibGUiLCJwYXJhbWV0ZXJzIiwiZ2V0U3RyaW5nIiwiZ2V0VmFyaWFibGUiLCJnZXRWYXJpYWJsZXMiLCJldmFsdWF0ZSIsImNvbnRleHQiLCJhcnJheUFzc2lnbm1lbnRTdHJpbmciLCJ0cmFjZSIsImV4cHJlc3Npb24iLCJleHByZXNzaW9uVHlwZSIsImdldFR5cGUiLCJOT0RFU19UWVBFIiwiZXhwcmVzc2lvblN0cmluZyIsImFzU3RyaW5nIiwibWVzc2FnZSIsImV4Y2VwdGlvbiIsIkV4Y2VwdGlvbiIsImZyb21NZXNzYWdlIiwibm9kZXMiLCJnZXROb2RlcyIsIm5vZGVzTGVuZ3RoIiwibGVuZ3RoIiwicGFyYW1ldGVyc0xlbmd0aCIsImdldExlbmd0aCIsInBhcmFtZXRlcnNTdHJpbmciLCJub2Rlc1N0cmluZyIsIm5vZGVzQXNTdHJpbmciLCJub2RleCIsImZvckVhY2hQYXJhbWV0ZXIiLCJwYXJhbWV0ZXIiLCJpbmRleCIsIm5vZGUiLCJleHByZXNzaW9uRnJvbU5vZGUiLCJldmFsdWF0ZVBhcmFtZXRlciIsImRlYnVnIiwicGFyYW1ldGVyU3RyaW5nIiwicGFyYW1ldGVyVHlwZSIsIk5PREVfVFlQRSIsInZhcmlhYmxlRnJvbVBhcmFtZXRlciIsImFzc2lnbiIsIm5hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVNBOzs7ZUFBQTs7O2dFQVBzQjt3QkFFQzt1QkFDWTtxQkFFRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRXRDLFdBQWVBLElBQUFBLGdCQUFNLG1DQUFDO2FBQU1DLGVBQ2RDLE1BQU0sRUFBRUMsUUFBUSxFQUFFQyxVQUFVO2dDQURkSDtRQUV4QixJQUFJLENBQUNDLE1BQU0sR0FBR0E7UUFDZCxJQUFJLENBQUNDLFFBQVEsR0FBR0E7UUFDaEIsSUFBSSxDQUFDQyxVQUFVLEdBQUdBOzs7O1lBR3BCQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNILE1BQU07WUFDcEI7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNILFFBQVE7WUFDdEI7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNILFVBQVU7WUFDeEI7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUEsU0FBU0MsT0FBTzs7Z0JBQ2QsSUFBTUMsd0JBQXdCLElBQUksQ0FBQ1IsTUFBTSxFQUFFLEdBQUc7Z0JBRTlDTyxRQUFRRSxLQUFLLENBQUMsQUFBQyxtQkFBd0MsT0FBdEJELHVCQUFzQjtnQkFFdkQsSUFBTUUsYUFBYSxJQUFJLENBQUNULFFBQVEsQ0FBQ0ssUUFBUSxDQUFDQyxVQUNwQ0ksaUJBQWlCRCxXQUFXRSxPQUFPO2dCQUV6QyxJQUFJRCxtQkFBbUJFLGlCQUFVLEVBQUU7b0JBQ2pDLElBQU1DLG1CQUFtQkosV0FBV0ssUUFBUSxDQUFDUixVQUN2Q1MsVUFBVSxBQUFDLE9BQXdDTCxPQUFsQ0csa0JBQWlCLG1CQUFvREQsT0FBbkNGLGdCQUFlLHNCQUErQixPQUFYRSxpQkFBVSxFQUFDLE9BQ2pHSSxZQUFZQyxrQkFBUyxDQUFDQyxXQUFXLENBQUNIO29CQUV4QyxNQUFNQztnQkFDUjtnQkFFQSxJQUFNRyxRQUFRVixXQUFXVyxRQUFRLElBQzNCQyxjQUFjRixNQUFNRyxNQUFNLEVBQzFCQyxtQkFBbUIsSUFBSSxDQUFDdEIsVUFBVSxDQUFDdUIsU0FBUztnQkFFbEQsSUFBSUQsbUJBQW1CRixhQUFhO29CQUNsQyxJQUFNSSxtQkFBbUIsSUFBSSxDQUFDeEIsVUFBVSxDQUFDQyxTQUFTLElBQzVDd0IsY0FBY3BCLFFBQVFxQixhQUFhLENBQUNDLFFBQ3BDYixXQUFVLEFBQUMsc0JBQXdGVyxPQUFuRUQsa0JBQWlCLG9EQUE4RCxPQUFaQyxhQUFZLGFBQy9HVixhQUFZQyxrQkFBUyxDQUFDQyxXQUFXLENBQUNIO29CQUV4QyxNQUFNQztnQkFDUjtnQkFFQSxJQUFJLENBQUNmLFVBQVUsQ0FBQzRCLGdCQUFnQixDQUFDLFNBQUNDLFdBQVdDO29CQUMzQyxJQUFJRCxjQUFjLE1BQU07d0JBQ3RCLElBQU1FLE9BQU9iLEtBQUssQ0FBQ1ksTUFBTSxFQUNuQnRCLGFBQWF3QixJQUFBQSwyQkFBa0IsRUFBQ0QsTUFBTTFCO3dCQUU1QyxNQUFLNEIsaUJBQWlCLENBQUNKLFdBQVdyQixZQUFZSDtvQkFDaEQ7Z0JBQ0Y7Z0JBRUFBLFFBQVE2QixLQUFLLENBQUMsQUFBQyxxQkFBMEMsT0FBdEI1Qix1QkFBc0I7WUFDM0Q7OztZQUVBMkIsS0FBQUE7bUJBQUFBLFNBQUFBLGtCQUFrQkosU0FBUyxFQUFFckIsVUFBVSxFQUFFSCxPQUFPO2dCQUM5QyxJQUFNTyxtQkFBbUJKLFdBQVdLLFFBQVEsQ0FBQ1IsVUFDdkM4QixrQkFBa0JOLFVBQVU1QixTQUFTO2dCQUUzQ0ksUUFBUUUsS0FBSyxDQUFDLEFBQUMsbUJBQTRESyxPQUExQ3VCLGlCQUFnQiw0QkFBMkMsT0FBakJ2QixrQkFBaUI7Z0JBRTVGLElBQU13QixnQkFBZ0JQLFVBQVVuQixPQUFPO2dCQUV2QyxJQUFJMEIsa0JBQWtCQyxnQkFBUyxFQUFFO29CQUMvQixJQUFNdkIsVUFBVSxBQUFDLG9CQUE0RHVCLE9BQXpDRixpQkFBZ0IsMkJBQW1DLE9BQVZFLGdCQUFTLEVBQUMsT0FDakZ0QixZQUFZQyxrQkFBUyxDQUFDQyxXQUFXLENBQUNIO29CQUV4QyxNQUFNQztnQkFDUjtnQkFFQSxJQUFNaEIsV0FBV3VDLElBQUFBLDhCQUFxQixFQUFDVCxXQUFXeEI7Z0JBRWxETixTQUFTd0MsTUFBTSxDQUFDL0IsWUFBWUg7Z0JBRTVCQSxRQUFRNkIsS0FBSyxDQUFDLEFBQUMscUJBQThEdEIsT0FBMUN1QixpQkFBZ0IsNEJBQTJDLE9BQWpCdkIsa0JBQWlCO1lBQ2hHOzs7O0tBRUEsa0NBQU80QixRQUFPIn0=