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
var _dom = /*#__PURE__*/ _interop_require_wildcard(require("../../dom"));
var _exception = /*#__PURE__*/ _interop_require_default(require("../../exception"));
var _query = require("../../utilities/query");
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
var stepArrayAssignmentNodeQuery = (0, _query.nodeQuery)("/step/arrayAssignment");
var _default = (0, _dom.domAssigned)((_ArrayAssigment = /*#__PURE__*/ function() {
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
                var value = this.variable.evaluate(context), valueType = value.getType();
                if (valueType !== _types.NODES_TYPE) {
                    var valueString = value.asString(context), message = "The ".concat(valueString, " value's '").concat(valueType, "' type should be '").concat(_types.NODES_TYPE, "'."), exception = _exception.default.fromMessage(message);
                    throw exception;
                }
                var nodes = value.getNodes(), nodesLength = nodes.length, parametersLength = this.parameters.getLength();
                if (parametersLength > nodesLength) {
                    var parametersString = this.parameters.getString(), nodesString = context.nodesAsString(nodex), message1 = "The length of the '".concat(parametersString, "' parameters is greater than the length of the '").concat(nodesString, "' nodes."), exception1 = _exception.default.fromMessage(message1);
                    throw exception1;
                }
                this.parameters.forEachParameter(function(parameter, index) {
                    if (parameter !== null) {
                        var Value = _dom.default.Value, node = nodes[index], value = Value.fromNode(node, context);
                        _this.evaluateParameter(parameter, value, context);
                    }
                });
                context.debug("...evaluated the '".concat(arrayAssignmentString, "' array assignment."));
            }
        },
        {
            key: "evaluateParameter",
            value: function evaluateParameter(parameter, value, context) {
                var valueString = value.asString(context), parameterString = parameter.getString();
                context.trace("Evaluating the '".concat(parameterString, "' parameter against the ").concat(valueString, " value..."));
                var parameterType = parameter.getType();
                if (parameterType !== _types.NODE_TYPE) {
                    var message = "The type of the '".concat(parameterString, "' parameter should be '").concat(_types.NODE_TYPE, "'."), exception = _exception.default.fromMessage(message);
                    throw exception;
                }
                var Variable = _dom.default.Variable, variable = Variable.fromParameter(parameter, context);
                variable.assign(value, context);
                context.debug("...evaluated the '".concat(parameterString, "' parameter against the ").concat(valueString, " value."));
            }
        }
    ], [
        {
            key: "fromStepNode",
            value: function fromStepNode(stepNode, context) {
                var arrayAssignment = null;
                var stepArrayAssignmentNode = stepArrayAssignmentNodeQuery(stepNode);
                if (stepArrayAssignmentNode !== null) {
                    var arrayAssignmentNode = stepArrayAssignmentNode; ///
                    arrayAssignment = arrayAssignmentFromArrayAssignmentNode(arrayAssignmentNode, context);
                }
                return arrayAssignment;
            }
        }
    ]);
    return ArrayAssigment;
}(), _define_property(_ArrayAssigment, "name", "ArrayAssignment"), _ArrayAssigment));
function arrayAssignmentFromArrayAssignmentNode(arrayAssignmentNode, context) {
    var Variable = _dom.default.Variable, Parameters = _dom.default.Parameters, ArrayAssignment = _dom.default.ArrayAssignment, parameters = Parameters.fromArrayAssignmentNode(arrayAssignmentNode, context), variable = Variable.fromArrayAssignmentNode(arrayAssignmentNode, context), string = stringFromVariableAndParameters(variable, parameters, context), arrayAssignment = new ArrayAssignment(string, variable, parameters);
    return arrayAssignment;
}
function stringFromVariableAndParameters(variable, parameters, context) {
    var variableString = variable.getString(), parametersString = parameters.getString(), string = "[ ".concat(parametersString, " ] = ").concat(variableString, ";");
    return string;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kb20vYXNzaWdubWVudC9hcnJheS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IGRvbSBmcm9tIFwiLi4vLi4vZG9tXCI7XG5pbXBvcnQgRXhjZXB0aW9uIGZyb20gXCIuLi8uLi9leGNlcHRpb25cIjtcblxuaW1wb3J0IHsgbm9kZVF1ZXJ5IH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9xdWVyeVwiO1xuaW1wb3J0IHsgZG9tQXNzaWduZWQgfSBmcm9tIFwiLi4vLi4vZG9tXCI7XG5pbXBvcnQgeyBOT0RFX1RZUEUsIE5PREVTX1RZUEUgfSBmcm9tIFwiLi4vLi4vdHlwZXNcIjtcblxuY29uc3Qgc3RlcEFycmF5QXNzaWdubWVudE5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9zdGVwL2FycmF5QXNzaWdubWVudFwiKTtcblxuZXhwb3J0IGRlZmF1bHQgZG9tQXNzaWduZWQoY2xhc3MgQXJyYXlBc3NpZ21lbnQge1xuICBjb25zdHJ1Y3RvcihzdHJpbmcsIHZhcmlhYmxlLCBwYXJhbWV0ZXJzKSB7XG4gICAgdGhpcy5zdHJpbmcgPSBzdHJpbmc7XG4gICAgdGhpcy52YXJpYWJsZSA9IHZhcmlhYmxlO1xuICAgIHRoaXMucGFyYW1ldGVycyA9IHBhcmFtZXRlcnM7XG4gIH1cblxuICBnZXRTdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RyaW5nO1xuICB9XG5cbiAgZ2V0VmFyaWFibGUoKSB7XG4gICAgcmV0dXJuIHRoaXMudmFyaWFibGU7XG4gIH1cblxuICBnZXRWYXJpYWJsZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMucGFyYW1ldGVycztcbiAgfVxuXG4gIGV2YWx1YXRlKGNvbnRleHQpIHtcbiAgICBjb25zdCBhcnJheUFzc2lnbm1lbnRTdHJpbmcgPSB0aGlzLnN0cmluZzsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBFdmFsdWF0aW5nIHRoZSAnJHthcnJheUFzc2lnbm1lbnRTdHJpbmd9JyBhcnJheSBhc3NpZ25tZW50Li4uYCk7XG5cbiAgICBjb25zdCB2YWx1ZSA9IHRoaXMudmFyaWFibGUuZXZhbHVhdGUoY29udGV4dCksXG4gICAgICAgICAgdmFsdWVUeXBlID0gdmFsdWUuZ2V0VHlwZSgpO1xuXG4gICAgaWYgKHZhbHVlVHlwZSAhPT0gTk9ERVNfVFlQRSkge1xuICAgICAgY29uc3QgdmFsdWVTdHJpbmcgPSB2YWx1ZS5hc1N0cmluZyhjb250ZXh0KSxcbiAgICAgICAgICAgIG1lc3NhZ2UgPSBgVGhlICR7dmFsdWVTdHJpbmd9IHZhbHVlJ3MgJyR7dmFsdWVUeXBlfScgdHlwZSBzaG91bGQgYmUgJyR7Tk9ERVNfVFlQRX0nLmAsXG4gICAgICAgICAgICBleGNlcHRpb24gPSBFeGNlcHRpb24uZnJvbU1lc3NhZ2UobWVzc2FnZSk7XG5cbiAgICAgIHRocm93IGV4Y2VwdGlvbjtcbiAgICB9XG5cbiAgICBjb25zdCBub2RlcyA9IHZhbHVlLmdldE5vZGVzKCksXG4gICAgICAgICAgbm9kZXNMZW5ndGggPSBub2Rlcy5sZW5ndGgsXG4gICAgICAgICAgcGFyYW1ldGVyc0xlbmd0aCA9IHRoaXMucGFyYW1ldGVycy5nZXRMZW5ndGgoKTtcblxuICAgIGlmIChwYXJhbWV0ZXJzTGVuZ3RoID4gbm9kZXNMZW5ndGgpIHtcbiAgICAgIGNvbnN0IHBhcmFtZXRlcnNTdHJpbmcgPSB0aGlzLnBhcmFtZXRlcnMuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgICBub2Rlc1N0cmluZyA9IGNvbnRleHQubm9kZXNBc1N0cmluZyhub2RleCksXG4gICAgICAgICAgICBtZXNzYWdlID0gYFRoZSBsZW5ndGggb2YgdGhlICcke3BhcmFtZXRlcnNTdHJpbmd9JyBwYXJhbWV0ZXJzIGlzIGdyZWF0ZXIgdGhhbiB0aGUgbGVuZ3RoIG9mIHRoZSAnJHtub2Rlc1N0cmluZ30nIG5vZGVzLmAsXG4gICAgICAgICAgICBleGNlcHRpb24gPSBFeGNlcHRpb24uZnJvbU1lc3NhZ2UobWVzc2FnZSk7XG5cbiAgICAgIHRocm93IGV4Y2VwdGlvbjtcbiAgICB9XG5cbiAgICB0aGlzLnBhcmFtZXRlcnMuZm9yRWFjaFBhcmFtZXRlcigocGFyYW1ldGVyLCBpbmRleCkgPT4ge1xuICAgICAgaWYgKHBhcmFtZXRlciAhPT0gbnVsbCkge1xuICAgICAgICBjb25zdCB7IFZhbHVlIH0gPSBkb20sXG4gICAgICAgICAgICAgIG5vZGUgPSBub2Rlc1tpbmRleF0sXG4gICAgICAgICAgICAgIHZhbHVlID0gVmFsdWUuZnJvbU5vZGUobm9kZSwgY29udGV4dCk7XG5cbiAgICAgICAgdGhpcy5ldmFsdWF0ZVBhcmFtZXRlcihwYXJhbWV0ZXIsIHZhbHVlLCBjb250ZXh0KTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGNvbnRleHQuZGVidWcoYC4uLmV2YWx1YXRlZCB0aGUgJyR7YXJyYXlBc3NpZ25tZW50U3RyaW5nfScgYXJyYXkgYXNzaWdubWVudC5gKTtcbiAgfVxuXG4gIGV2YWx1YXRlUGFyYW1ldGVyKHBhcmFtZXRlciwgdmFsdWUsIGNvbnRleHQpIHtcbiAgICBjb25zdCB2YWx1ZVN0cmluZyA9IHZhbHVlLmFzU3RyaW5nKGNvbnRleHQpLFxuICAgICAgICAgIHBhcmFtZXRlclN0cmluZyA9IHBhcmFtZXRlci5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYEV2YWx1YXRpbmcgdGhlICcke3BhcmFtZXRlclN0cmluZ30nIHBhcmFtZXRlciBhZ2FpbnN0IHRoZSAke3ZhbHVlU3RyaW5nfSB2YWx1ZS4uLmApO1xuXG4gICAgY29uc3QgcGFyYW1ldGVyVHlwZSA9IHBhcmFtZXRlci5nZXRUeXBlKCk7XG5cbiAgICBpZiAocGFyYW1ldGVyVHlwZSAhPT0gTk9ERV9UWVBFKSB7XG4gICAgICBjb25zdCBtZXNzYWdlID0gYFRoZSB0eXBlIG9mIHRoZSAnJHtwYXJhbWV0ZXJTdHJpbmd9JyBwYXJhbWV0ZXIgc2hvdWxkIGJlICcke05PREVfVFlQRX0nLmAsXG4gICAgICAgICAgICBleGNlcHRpb24gPSBFeGNlcHRpb24uZnJvbU1lc3NhZ2UobWVzc2FnZSk7XG5cbiAgICAgIHRocm93IGV4Y2VwdGlvbjtcbiAgICB9XG5cbiAgICBjb25zdCB7IFZhcmlhYmxlIH0gPSBkb20sXG4gICAgICAgICAgdmFyaWFibGUgPSBWYXJpYWJsZS5mcm9tUGFyYW1ldGVyKHBhcmFtZXRlciwgY29udGV4dCk7XG5cbiAgICB2YXJpYWJsZS5hc3NpZ24odmFsdWUsIGNvbnRleHQpO1xuXG4gICAgY29udGV4dC5kZWJ1ZyhgLi4uZXZhbHVhdGVkIHRoZSAnJHtwYXJhbWV0ZXJTdHJpbmd9JyBwYXJhbWV0ZXIgYWdhaW5zdCB0aGUgJHt2YWx1ZVN0cmluZ30gdmFsdWUuYCk7XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiQXJyYXlBc3NpZ25tZW50XCI7XG5cbiAgc3RhdGljIGZyb21TdGVwTm9kZShzdGVwTm9kZSwgY29udGV4dCkge1xuICAgIGxldCBhcnJheUFzc2lnbm1lbnQgPSBudWxsO1xuXG4gICAgY29uc3Qgc3RlcEFycmF5QXNzaWdubWVudE5vZGUgPSBzdGVwQXJyYXlBc3NpZ25tZW50Tm9kZVF1ZXJ5KHN0ZXBOb2RlKTtcblxuICAgIGlmIChzdGVwQXJyYXlBc3NpZ25tZW50Tm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgYXJyYXlBc3NpZ25tZW50Tm9kZSA9IHN0ZXBBcnJheUFzc2lnbm1lbnROb2RlOyAgLy8vXG5cbiAgICAgIGFycmF5QXNzaWdubWVudCA9IGFycmF5QXNzaWdubWVudEZyb21BcnJheUFzc2lnbm1lbnROb2RlKGFycmF5QXNzaWdubWVudE5vZGUsIGNvbnRleHQpO1xuICAgIH1cblxuICAgIHJldHVybiBhcnJheUFzc2lnbm1lbnQ7XG4gIH1cbn0pO1xuXG5mdW5jdGlvbiBhcnJheUFzc2lnbm1lbnRGcm9tQXJyYXlBc3NpZ25tZW50Tm9kZShhcnJheUFzc2lnbm1lbnROb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgVmFyaWFibGUsIFBhcmFtZXRlcnMsIEFycmF5QXNzaWdubWVudCB9ID0gZG9tLFxuICAgICAgICBwYXJhbWV0ZXJzID0gUGFyYW1ldGVycy5mcm9tQXJyYXlBc3NpZ25tZW50Tm9kZShhcnJheUFzc2lnbm1lbnROb2RlLCBjb250ZXh0KSxcbiAgICAgICAgdmFyaWFibGUgPSBWYXJpYWJsZS5mcm9tQXJyYXlBc3NpZ25tZW50Tm9kZShhcnJheUFzc2lnbm1lbnROb2RlLCBjb250ZXh0KSxcbiAgICAgICAgc3RyaW5nID0gc3RyaW5nRnJvbVZhcmlhYmxlQW5kUGFyYW1ldGVycyh2YXJpYWJsZSwgcGFyYW1ldGVycywgY29udGV4dCksXG4gICAgICAgIGFycmF5QXNzaWdubWVudCA9IG5ldyBBcnJheUFzc2lnbm1lbnQoc3RyaW5nLCB2YXJpYWJsZSwgcGFyYW1ldGVycyk7XG5cbiAgcmV0dXJuIGFycmF5QXNzaWdubWVudDtcbn1cblxuZnVuY3Rpb24gc3RyaW5nRnJvbVZhcmlhYmxlQW5kUGFyYW1ldGVycyh2YXJpYWJsZSwgcGFyYW1ldGVycywgY29udGV4dCkge1xuICBjb25zdCB2YXJpYWJsZVN0cmluZyA9IHZhcmlhYmxlLmdldFN0cmluZygpLFxuICAgICAgICBwYXJhbWV0ZXJzU3RyaW5nID0gcGFyYW1ldGVycy5nZXRTdHJpbmcoKSxcbiAgICAgICAgc3RyaW5nID0gYFsgJHtwYXJhbWV0ZXJzU3RyaW5nfSBdID0gJHt2YXJpYWJsZVN0cmluZ307YDtcblxuICByZXR1cm4gc3RyaW5nO1xufVxuIl0sIm5hbWVzIjpbInN0ZXBBcnJheUFzc2lnbm1lbnROb2RlUXVlcnkiLCJub2RlUXVlcnkiLCJkb21Bc3NpZ25lZCIsIkFycmF5QXNzaWdtZW50Iiwic3RyaW5nIiwidmFyaWFibGUiLCJwYXJhbWV0ZXJzIiwiZ2V0U3RyaW5nIiwiZ2V0VmFyaWFibGUiLCJnZXRWYXJpYWJsZXMiLCJldmFsdWF0ZSIsImNvbnRleHQiLCJhcnJheUFzc2lnbm1lbnRTdHJpbmciLCJ0cmFjZSIsInZhbHVlIiwidmFsdWVUeXBlIiwiZ2V0VHlwZSIsIk5PREVTX1RZUEUiLCJ2YWx1ZVN0cmluZyIsImFzU3RyaW5nIiwibWVzc2FnZSIsImV4Y2VwdGlvbiIsIkV4Y2VwdGlvbiIsImZyb21NZXNzYWdlIiwibm9kZXMiLCJnZXROb2RlcyIsIm5vZGVzTGVuZ3RoIiwibGVuZ3RoIiwicGFyYW1ldGVyc0xlbmd0aCIsImdldExlbmd0aCIsInBhcmFtZXRlcnNTdHJpbmciLCJub2Rlc1N0cmluZyIsIm5vZGVzQXNTdHJpbmciLCJub2RleCIsImZvckVhY2hQYXJhbWV0ZXIiLCJwYXJhbWV0ZXIiLCJpbmRleCIsIlZhbHVlIiwiZG9tIiwibm9kZSIsImZyb21Ob2RlIiwiZXZhbHVhdGVQYXJhbWV0ZXIiLCJkZWJ1ZyIsInBhcmFtZXRlclN0cmluZyIsInBhcmFtZXRlclR5cGUiLCJOT0RFX1RZUEUiLCJWYXJpYWJsZSIsImZyb21QYXJhbWV0ZXIiLCJhc3NpZ24iLCJmcm9tU3RlcE5vZGUiLCJzdGVwTm9kZSIsImFycmF5QXNzaWdubWVudCIsInN0ZXBBcnJheUFzc2lnbm1lbnROb2RlIiwiYXJyYXlBc3NpZ25tZW50Tm9kZSIsImFycmF5QXNzaWdubWVudEZyb21BcnJheUFzc2lnbm1lbnROb2RlIiwibmFtZSIsIlBhcmFtZXRlcnMiLCJBcnJheUFzc2lnbm1lbnQiLCJmcm9tQXJyYXlBc3NpZ25tZW50Tm9kZSIsInN0cmluZ0Zyb21WYXJpYWJsZUFuZFBhcmFtZXRlcnMiLCJ2YXJpYWJsZVN0cmluZyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBV0E7OztlQUFBOzs7MkRBVGdCO2dFQUNNO3FCQUVJO3FCQUVZOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV0QyxJQUFNQSwrQkFBK0JDLElBQUFBLGdCQUFTLEVBQUM7SUFFL0MsV0FBZUMsSUFBQUEsZ0JBQVcsbUNBQUM7YUFBTUMsZUFDbkJDLE1BQU0sRUFBRUMsUUFBUSxFQUFFQyxVQUFVO2dDQURUSDtRQUU3QixJQUFJLENBQUND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