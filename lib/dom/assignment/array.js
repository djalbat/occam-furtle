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
var arrayAssignmentNodeQuery = (0, _query.nodeQuery)("/step/arrayAssignment");
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
                var Variable = _dom.default.Variable, Assignment = _dom.default.Assignment, assignment = Assignment.fromValue(value, context), variable = Variable.fromParameterAndAssignment(parameter, assignment);
                context.addVariable(variable);
                variable.assign(context);
                context.debug("...evaluated the '".concat(parameterString, "' parameter against the ").concat(valueString, " value."));
            }
        }
    ], [
        {
            key: "fromStepNode",
            value: function fromStepNode(stepNode, context) {
                var arrayAssignment = null;
                var arrayAssignmentNode = arrayAssignmentNodeQuery(stepNode);
                if (arrayAssignmentNode !== null) {
                    var Variable = _dom.default.Variable, Parameters = _dom.default.Parameters, node = arrayAssignmentNode, string = context.nodeAsString(node), variable = Variable.fromArrayAssignmentNode(arrayAssignmentNode, context), parameters = Parameters.fromArrayAssignmentNode(arrayAssignmentNode, context);
                    arrayAssignment = new ArrayAssigment(string, variable, parameters);
                }
                return arrayAssignment;
            }
        }
    ]);
    return ArrayAssigment;
}(), _define_property(_ArrayAssigment, "name", "ArrayAssignment"), _ArrayAssigment));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kb20vYXNzaWdubWVudC9hcnJheS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IGRvbSBmcm9tIFwiLi4vLi4vZG9tXCI7XG5pbXBvcnQgRXhjZXB0aW9uIGZyb20gXCIuLi8uLi9leGNlcHRpb25cIjtcblxuaW1wb3J0IHsgbm9kZVF1ZXJ5IH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9xdWVyeVwiO1xuaW1wb3J0IHsgZG9tQXNzaWduZWQgfSBmcm9tIFwiLi4vLi4vZG9tXCI7XG5pbXBvcnQgeyBOT0RFX1RZUEUsIE5PREVTX1RZUEUgfSBmcm9tIFwiLi4vLi4vdHlwZXNcIjtcblxuY29uc3QgYXJyYXlBc3NpZ25tZW50Tm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3N0ZXAvYXJyYXlBc3NpZ25tZW50XCIpO1xuXG5leHBvcnQgZGVmYXVsdCBkb21Bc3NpZ25lZChjbGFzcyBBcnJheUFzc2lnbWVudCB7XG4gIGNvbnN0cnVjdG9yKHN0cmluZywgdmFyaWFibGUsIHBhcmFtZXRlcnMpIHtcbiAgICB0aGlzLnN0cmluZyA9IHN0cmluZztcbiAgICB0aGlzLnZhcmlhYmxlID0gdmFyaWFibGU7XG4gICAgdGhpcy5wYXJhbWV0ZXJzID0gcGFyYW1ldGVycztcbiAgfVxuXG4gIGdldFN0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5zdHJpbmc7XG4gIH1cblxuICBnZXRWYXJpYWJsZSgpIHtcbiAgICByZXR1cm4gdGhpcy52YXJpYWJsZTtcbiAgfVxuXG4gIGdldFZhcmlhYmxlcygpIHtcbiAgICByZXR1cm4gdGhpcy5wYXJhbWV0ZXJzO1xuICB9XG5cbiAgZXZhbHVhdGUoY29udGV4dCkge1xuICAgIGNvbnN0IGFycmF5QXNzaWdubWVudFN0cmluZyA9IHRoaXMuc3RyaW5nOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYEV2YWx1YXRpbmcgdGhlICcke2FycmF5QXNzaWdubWVudFN0cmluZ30nIGFycmF5IGFzc2lnbm1lbnQuLi5gKTtcblxuICAgIGNvbnN0IHZhbHVlID0gdGhpcy52YXJpYWJsZS5ldmFsdWF0ZShjb250ZXh0KSxcbiAgICAgICAgICB2YWx1ZVR5cGUgPSB2YWx1ZS5nZXRUeXBlKCk7XG5cbiAgICBpZiAodmFsdWVUeXBlICE9PSBOT0RFU19UWVBFKSB7XG4gICAgICBjb25zdCB2YWx1ZVN0cmluZyA9IHZhbHVlLmFzU3RyaW5nKGNvbnRleHQpLFxuICAgICAgICAgICAgbWVzc2FnZSA9IGBUaGUgJHt2YWx1ZVN0cmluZ30gdmFsdWUncyAnJHt2YWx1ZVR5cGV9JyB0eXBlIHNob3VsZCBiZSAnJHtOT0RFU19UWVBFfScuYCxcbiAgICAgICAgICAgIGV4Y2VwdGlvbiA9IEV4Y2VwdGlvbi5mcm9tTWVzc2FnZShtZXNzYWdlKTtcblxuICAgICAgdGhyb3cgZXhjZXB0aW9uO1xuICAgIH1cblxuICAgIGNvbnN0IG5vZGVzID0gdmFsdWUuZ2V0Tm9kZXMoKSxcbiAgICAgICAgICBub2Rlc0xlbmd0aCA9IG5vZGVzLmxlbmd0aCxcbiAgICAgICAgICBwYXJhbWV0ZXJzTGVuZ3RoID0gdGhpcy5wYXJhbWV0ZXJzLmdldExlbmd0aCgpO1xuXG4gICAgaWYgKHBhcmFtZXRlcnNMZW5ndGggPiBub2Rlc0xlbmd0aCkge1xuICAgICAgY29uc3QgcGFyYW1ldGVyc1N0cmluZyA9IHRoaXMucGFyYW1ldGVycy5nZXRTdHJpbmcoKSxcbiAgICAgICAgICAgIG5vZGVzU3RyaW5nID0gY29udGV4dC5ub2Rlc0FzU3RyaW5nKG5vZGV4KSxcbiAgICAgICAgICAgIG1lc3NhZ2UgPSBgVGhlIGxlbmd0aCBvZiB0aGUgJyR7cGFyYW1ldGVyc1N0cmluZ30nIHBhcmFtZXRlcnMgaXMgZ3JlYXRlciB0aGFuIHRoZSBsZW5ndGggb2YgdGhlICcke25vZGVzU3RyaW5nfScgbm9kZXMuYCxcbiAgICAgICAgICAgIGV4Y2VwdGlvbiA9IEV4Y2VwdGlvbi5mcm9tTWVzc2FnZShtZXNzYWdlKTtcblxuICAgICAgdGhyb3cgZXhjZXB0aW9uO1xuICAgIH1cblxuICAgIHRoaXMucGFyYW1ldGVycy5mb3JFYWNoUGFyYW1ldGVyKChwYXJhbWV0ZXIsIGluZGV4KSA9PiB7XG4gICAgICBpZiAocGFyYW1ldGVyICE9PSBudWxsKSB7XG4gICAgICAgIGNvbnN0IHsgVmFsdWUgfSA9IGRvbSxcbiAgICAgICAgICAgICAgbm9kZSA9IG5vZGVzW2luZGV4XSxcbiAgICAgICAgICAgICAgdmFsdWUgPSBWYWx1ZS5mcm9tTm9kZShub2RlLCBjb250ZXh0KTtcblxuICAgICAgICB0aGlzLmV2YWx1YXRlUGFyYW1ldGVyKHBhcmFtZXRlciwgdmFsdWUsIGNvbnRleHQpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgY29udGV4dC5kZWJ1ZyhgLi4uZXZhbHVhdGVkIHRoZSAnJHthcnJheUFzc2lnbm1lbnRTdHJpbmd9JyBhcnJheSBhc3NpZ25tZW50LmApO1xuICB9XG5cbiAgZXZhbHVhdGVQYXJhbWV0ZXIocGFyYW1ldGVyLCB2YWx1ZSwgY29udGV4dCkge1xuICAgIGNvbnN0IHZhbHVlU3RyaW5nID0gdmFsdWUuYXNTdHJpbmcoY29udGV4dCksXG4gICAgICAgICAgcGFyYW1ldGVyU3RyaW5nID0gcGFyYW1ldGVyLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgRXZhbHVhdGluZyB0aGUgJyR7cGFyYW1ldGVyU3RyaW5nfScgcGFyYW1ldGVyIGFnYWluc3QgdGhlICR7dmFsdWVTdHJpbmd9IHZhbHVlLi4uYCk7XG5cbiAgICBjb25zdCBwYXJhbWV0ZXJUeXBlID0gcGFyYW1ldGVyLmdldFR5cGUoKTtcblxuICAgIGlmIChwYXJhbWV0ZXJUeXBlICE9PSBOT0RFX1RZUEUpIHtcbiAgICAgIGNvbnN0IG1lc3NhZ2UgPSBgVGhlIHR5cGUgb2YgdGhlICcke3BhcmFtZXRlclN0cmluZ30nIHBhcmFtZXRlciBzaG91bGQgYmUgJyR7Tk9ERV9UWVBFfScuYCxcbiAgICAgICAgICAgIGV4Y2VwdGlvbiA9IEV4Y2VwdGlvbi5mcm9tTWVzc2FnZShtZXNzYWdlKTtcblxuICAgICAgdGhyb3cgZXhjZXB0aW9uO1xuICAgIH1cblxuICAgIGNvbnN0IHsgVmFyaWFibGUsIEFzc2lnbm1lbnQgfSA9IGRvbSxcbiAgICAgICAgICBhc3NpZ25tZW50ID0gQXNzaWdubWVudC5mcm9tVmFsdWUodmFsdWUsIGNvbnRleHQpLFxuICAgICAgICAgIHZhcmlhYmxlID0gVmFyaWFibGUuZnJvbVBhcmFtZXRlckFuZEFzc2lnbm1lbnQocGFyYW1ldGVyLCBhc3NpZ25tZW50KTtcblxuICAgIGNvbnRleHQuYWRkVmFyaWFibGUodmFyaWFibGUpO1xuXG4gICAgdmFyaWFibGUuYXNzaWduKGNvbnRleHQpO1xuXG4gICAgY29udGV4dC5kZWJ1ZyhgLi4uZXZhbHVhdGVkIHRoZSAnJHtwYXJhbWV0ZXJTdHJpbmd9JyBwYXJhbWV0ZXIgYWdhaW5zdCB0aGUgJHt2YWx1ZVN0cmluZ30gdmFsdWUuYCk7XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiQXJyYXlBc3NpZ25tZW50XCI7XG5cbiAgc3RhdGljIGZyb21TdGVwTm9kZShzdGVwTm9kZSwgY29udGV4dCkge1xuICAgIGxldCBhcnJheUFzc2lnbm1lbnQgPSBudWxsO1xuXG4gICAgY29uc3QgYXJyYXlBc3NpZ25tZW50Tm9kZSA9IGFycmF5QXNzaWdubWVudE5vZGVRdWVyeShzdGVwTm9kZSk7XG5cbiAgICBpZiAoYXJyYXlBc3NpZ25tZW50Tm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgeyBWYXJpYWJsZSwgUGFyYW1ldGVycyB9ID0gZG9tLFxuICAgICAgICAgICAgbm9kZSA9IGFycmF5QXNzaWdubWVudE5vZGUsICAvLy9cbiAgICAgICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICAgICAgdmFyaWFibGUgPSBWYXJpYWJsZS5mcm9tQXJyYXlBc3NpZ25tZW50Tm9kZShhcnJheUFzc2lnbm1lbnROb2RlLCBjb250ZXh0KSxcbiAgICAgICAgICAgIHBhcmFtZXRlcnMgPSBQYXJhbWV0ZXJzLmZyb21BcnJheUFzc2lnbm1lbnROb2RlKGFycmF5QXNzaWdubWVudE5vZGUsIGNvbnRleHQpO1xuXG4gICAgICBhcnJheUFzc2lnbm1lbnQgPSBuZXcgQXJyYXlBc3NpZ21lbnQoc3RyaW5nLCB2YXJpYWJsZSwgcGFyYW1ldGVycyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFycmF5QXNzaWdubWVudDtcbiAgfVxufSk7XG4iXSwibmFtZXMiOlsiYXJyYXlBc3NpZ25tZW50Tm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5IiwiZG9tQXNzaWduZWQiLCJBcnJheUFzc2lnbWVudCIsInN0cmluZyIsInZhcmlhYmxlIiwicGFyYW1ldGVycyIsImdldFN0cmluZyIsImdldFZhcmlhYmxlIiwiZ2V0VmFyaWFibGVzIiwiZXZhbHVhdGUiLCJjb250ZXh0IiwiYXJyYXlBc3NpZ25tZW50U3RyaW5nIiwidHJhY2UiLCJ2YWx1ZSIsInZhbHVlVHlwZSIsImdldFR5cGUiLCJOT0RFU19UWVBFIiwidmFsdWVTdHJpbmciLCJhc1N0cmluZyIsIm1lc3NhZ2UiLCJleGNlcHRpb24iLCJFeGNlcHRpb24iLCJmcm9tTWVzc2FnZSIsIm5vZGVzIiwiZ2V0Tm9kZXMiLCJub2Rlc0xlbmd0aCIsImxlbmd0aCIsInBhcmFtZXRlcnNMZW5ndGgiLCJnZXRMZW5ndGgiLCJwYXJhbWV0ZXJzU3RyaW5nIiwibm9kZXNTdHJpbmciLCJub2Rlc0FzU3RyaW5nIiwibm9kZXgiLCJmb3JFYWNoUGFyYW1ldGVyIiwicGFyYW1ldGVyIiwiaW5kZXgiLCJWYWx1ZSIsImRvbSIsIm5vZGUiLCJmcm9tTm9kZSIsImV2YWx1YXRlUGFyYW1ldGVyIiwiZGVidWciLCJwYXJhbWV0ZXJTdHJpbmciLCJwYXJhbWV0ZXJUeXBlIiwiTk9ERV9UWVBFIiwiVmFyaWFibGUiLCJBc3NpZ25tZW50IiwiYXNzaWdubWVudCIsImZyb21WYWx1ZSIsImZyb21QYXJhbWV0ZXJBbmRBc3NpZ25tZW50IiwiYWRkVmFyaWFibGUiLCJhc3NpZ24iLCJmcm9tU3RlcE5vZGUiLCJzdGVwTm9kZSIsImFycmF5QXNzaWdubWVudCIsImFycmF5QXNzaWdubWVudE5vZGUiLCJQYXJhbWV0ZXJzIiwibm9kZUFzU3RyaW5nIiwiZnJvbUFycmF5QXNzaWdubWVudE5vZGUiLCJuYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFXQTs7O2VBQUE7OzsyREFUZ0I7Z0VBQ007cUJBRUk7cUJBRVk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXRDLElBQU1BLDJCQUEyQkMsSUFBQUEsZ0JBQVMsRUFBQztJQUUzQyxXQUFlQyxJQUFBQSxnQkFBVyxtQ0FBQzthQUFNQyxlQUNuQkMsTUFBTSxFQUFFQyxRQUFRLEVBQUVDLFVBQVU7Z0NBRFRIO1FBRTdCLElBQUksQ0FBQ0MsTUFBTSxHQUFHQTtRQUNkLElBQUksQ0FBQ0MsUUFBUSxHQUFHQTtRQUNoQixJQUFJLENBQUNDLFVBQVUsR0FBR0E7Ozs7WUFHcEJDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0gsTUFBTTtZQUNwQjs7O1lBRUFJLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0gsUUFBUTtZQUN0Qjs7O1lBRUFJLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0gsVUFBVTtZQUN4Qjs7O1lBRUFJLEtBQUFBO21CQUFBQSxTQUFBQSxTQUFTQyxPQUFPOztnQkFDZCxJQUFNQyx3QkFBd0IsSUFBSSxDQUFDUixNQUFNLEVBQUUsR0FBRztnQkFFOUNPLFFBQVFFLEtBQUssQ0FBQyxBQUFDLG1CQUF3QyxPQUF0QkQsdUJBQXNCO2dCQUV2RCxJQUFNRSxRQUFRLElBQUksQ0FBQ1QsUUFBUSxDQUFDSyxRQUFRLENBQUNDLFVBQy9CSSxZQUFZRCxNQUFNRSxPQUFPO2dCQUUvQixJQUFJRCxjQUFjRSxpQkFBVSxFQUFFO29C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