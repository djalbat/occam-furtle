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
            key: "resolve",
            value: function resolve(context) {
                var _this = this;
                var arrayAssignmentString = this.string; ///
                context.trace("Resolving the '".concat(arrayAssignmentString, "' array assignment..."));
                var value = this.variable.resolve(context), valueType = value.getType();
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
                        _this.resolveParameter(parameter, value, context);
                    }
                });
                context.debug("...resolved the '".concat(arrayAssignmentString, "' array assignment."));
            }
        },
        {
            key: "resolveParameter",
            value: function resolveParameter(parameter, value, context) {
                var valueString = value.asString(context), parameterString = parameter.getString();
                context.trace("Resolving the '".concat(parameterString, "' parameter against the ").concat(valueString, " value..."));
                var parameterType = parameter.getType();
                if (parameterType !== _types.NODE_TYPE) {
                    var message = "The type of the '".concat(parameterString, "' parameter should be '").concat(_types.NODE_TYPE, "'."), exception = _exception.default.fromMessage(message);
                    throw exception;
                }
                var Variable = _dom.default.Variable, Assignment = _dom.default.Assignment, assignment = Assignment.fromValue(value, context), variable = Variable.fromParameterAndAssignment(parameter, assignment);
                context.addVariable(variable);
                variable.assign(context);
                context.debug("...resolved the '".concat(parameterString, "' parameter against the ").concat(valueString, " value."));
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kb20vYXNzaWdubWVudC9hcnJheS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IGRvbSBmcm9tIFwiLi4vLi4vZG9tXCI7XG5pbXBvcnQgRXhjZXB0aW9uIGZyb20gXCIuLi8uLi9leGNlcHRpb25cIjtcblxuaW1wb3J0IHsgbm9kZVF1ZXJ5IH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9xdWVyeVwiO1xuaW1wb3J0IHsgZG9tQXNzaWduZWQgfSBmcm9tIFwiLi4vLi4vZG9tXCI7XG5pbXBvcnQgeyBOT0RFX1RZUEUsIE5PREVTX1RZUEUgfSBmcm9tIFwiLi4vLi4vdHlwZXNcIjtcblxuY29uc3QgYXJyYXlBc3NpZ25tZW50Tm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3N0ZXAvYXJyYXlBc3NpZ25tZW50XCIpO1xuXG5leHBvcnQgZGVmYXVsdCBkb21Bc3NpZ25lZChjbGFzcyBBcnJheUFzc2lnbWVudCB7XG4gIGNvbnN0cnVjdG9yKHN0cmluZywgdmFyaWFibGUsIHBhcmFtZXRlcnMpIHtcbiAgICB0aGlzLnN0cmluZyA9IHN0cmluZztcbiAgICB0aGlzLnZhcmlhYmxlID0gdmFyaWFibGU7XG4gICAgdGhpcy5wYXJhbWV0ZXJzID0gcGFyYW1ldGVycztcbiAgfVxuXG4gIGdldFN0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5zdHJpbmc7XG4gIH1cblxuICBnZXRWYXJpYWJsZSgpIHtcbiAgICByZXR1cm4gdGhpcy52YXJpYWJsZTtcbiAgfVxuXG4gIGdldFZhcmlhYmxlcygpIHtcbiAgICByZXR1cm4gdGhpcy5wYXJhbWV0ZXJzO1xuICB9XG5cbiAgcmVzb2x2ZShjb250ZXh0KSB7XG4gICAgY29uc3QgYXJyYXlBc3NpZ25tZW50U3RyaW5nID0gdGhpcy5zdHJpbmc7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgUmVzb2x2aW5nIHRoZSAnJHthcnJheUFzc2lnbm1lbnRTdHJpbmd9JyBhcnJheSBhc3NpZ25tZW50Li4uYCk7XG5cbiAgICBjb25zdCB2YWx1ZSA9IHRoaXMudmFyaWFibGUucmVzb2x2ZShjb250ZXh0KSxcbiAgICAgICAgICB2YWx1ZVR5cGUgPSB2YWx1ZS5nZXRUeXBlKCk7XG5cbiAgICBpZiAodmFsdWVUeXBlICE9PSBOT0RFU19UWVBFKSB7XG4gICAgICBjb25zdCB2YWx1ZVN0cmluZyA9IHZhbHVlLmFzU3RyaW5nKGNvbnRleHQpLFxuICAgICAgICAgICAgbWVzc2FnZSA9IGBUaGUgJHt2YWx1ZVN0cmluZ30gdmFsdWUncyAnJHt2YWx1ZVR5cGV9JyB0eXBlIHNob3VsZCBiZSAnJHtOT0RFU19UWVBFfScuYCxcbiAgICAgICAgICAgIGV4Y2VwdGlvbiA9IEV4Y2VwdGlvbi5mcm9tTWVzc2FnZShtZXNzYWdlKTtcblxuICAgICAgdGhyb3cgZXhjZXB0aW9uO1xuICAgIH1cblxuICAgIGNvbnN0IG5vZGVzID0gdmFsdWUuZ2V0Tm9kZXMoKSxcbiAgICAgICAgICBub2Rlc0xlbmd0aCA9IG5vZGVzLmxlbmd0aCxcbiAgICAgICAgICBwYXJhbWV0ZXJzTGVuZ3RoID0gdGhpcy5wYXJhbWV0ZXJzLmdldExlbmd0aCgpO1xuXG4gICAgaWYgKHBhcmFtZXRlcnNMZW5ndGggPiBub2Rlc0xlbmd0aCkge1xuICAgICAgY29uc3QgcGFyYW1ldGVyc1N0cmluZyA9IHRoaXMucGFyYW1ldGVycy5nZXRTdHJpbmcoKSxcbiAgICAgICAgICAgIG5vZGVzU3RyaW5nID0gY29udGV4dC5ub2Rlc0FzU3RyaW5nKG5vZGV4KSxcbiAgICAgICAgICAgIG1lc3NhZ2UgPSBgVGhlIGxlbmd0aCBvZiB0aGUgJyR7cGFyYW1ldGVyc1N0cmluZ30nIHBhcmFtZXRlcnMgaXMgZ3JlYXRlciB0aGFuIHRoZSBsZW5ndGggb2YgdGhlICcke25vZGVzU3RyaW5nfScgbm9kZXMuYCxcbiAgICAgICAgICAgIGV4Y2VwdGlvbiA9IEV4Y2VwdGlvbi5mcm9tTWVzc2FnZShtZXNzYWdlKTtcblxuICAgICAgdGhyb3cgZXhjZXB0aW9uO1xuICAgIH1cblxuICAgIHRoaXMucGFyYW1ldGVycy5mb3JFYWNoUGFyYW1ldGVyKChwYXJhbWV0ZXIsIGluZGV4KSA9PiB7XG4gICAgICBpZiAocGFyYW1ldGVyICE9PSBudWxsKSB7XG4gICAgICAgIGNvbnN0IHsgVmFsdWUgfSA9IGRvbSxcbiAgICAgICAgICAgICAgbm9kZSA9IG5vZGVzW2luZGV4XSxcbiAgICAgICAgICAgICAgdmFsdWUgPSBWYWx1ZS5mcm9tTm9kZShub2RlLCBjb250ZXh0KTtcblxuICAgICAgICB0aGlzLnJlc29sdmVQYXJhbWV0ZXIocGFyYW1ldGVyLCB2YWx1ZSwgY29udGV4dCk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBjb250ZXh0LmRlYnVnKGAuLi5yZXNvbHZlZCB0aGUgJyR7YXJyYXlBc3NpZ25tZW50U3RyaW5nfScgYXJyYXkgYXNzaWdubWVudC5gKTtcbiAgfVxuXG4gIHJlc29sdmVQYXJhbWV0ZXIocGFyYW1ldGVyLCB2YWx1ZSwgY29udGV4dCkge1xuICAgIGNvbnN0IHZhbHVlU3RyaW5nID0gdmFsdWUuYXNTdHJpbmcoY29udGV4dCksXG4gICAgICAgICAgcGFyYW1ldGVyU3RyaW5nID0gcGFyYW1ldGVyLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgUmVzb2x2aW5nIHRoZSAnJHtwYXJhbWV0ZXJTdHJpbmd9JyBwYXJhbWV0ZXIgYWdhaW5zdCB0aGUgJHt2YWx1ZVN0cmluZ30gdmFsdWUuLi5gKTtcblxuICAgIGNvbnN0IHBhcmFtZXRlclR5cGUgPSBwYXJhbWV0ZXIuZ2V0VHlwZSgpO1xuXG4gICAgaWYgKHBhcmFtZXRlclR5cGUgIT09IE5PREVfVFlQRSkge1xuICAgICAgY29uc3QgbWVzc2FnZSA9IGBUaGUgdHlwZSBvZiB0aGUgJyR7cGFyYW1ldGVyU3RyaW5nfScgcGFyYW1ldGVyIHNob3VsZCBiZSAnJHtOT0RFX1RZUEV9Jy5gLFxuICAgICAgICAgICAgZXhjZXB0aW9uID0gRXhjZXB0aW9uLmZyb21NZXNzYWdlKG1lc3NhZ2UpO1xuXG4gICAgICB0aHJvdyBleGNlcHRpb247XG4gICAgfVxuXG4gICAgY29uc3QgeyBWYXJpYWJsZSwgQXNzaWdubWVudCB9ID0gZG9tLFxuICAgICAgICAgIGFzc2lnbm1lbnQgPSBBc3NpZ25tZW50LmZyb21WYWx1ZSh2YWx1ZSwgY29udGV4dCksXG4gICAgICAgICAgdmFyaWFibGUgPSBWYXJpYWJsZS5mcm9tUGFyYW1ldGVyQW5kQXNzaWdubWVudChwYXJhbWV0ZXIsIGFzc2lnbm1lbnQpO1xuXG4gICAgY29udGV4dC5hZGRWYXJpYWJsZSh2YXJpYWJsZSk7XG5cbiAgICB2YXJpYWJsZS5hc3NpZ24oY29udGV4dCk7XG5cbiAgICBjb250ZXh0LmRlYnVnKGAuLi5yZXNvbHZlZCB0aGUgJyR7cGFyYW1ldGVyU3RyaW5nfScgcGFyYW1ldGVyIGFnYWluc3QgdGhlICR7dmFsdWVTdHJpbmd9IHZhbHVlLmApO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIkFycmF5QXNzaWdubWVudFwiO1xuXG4gIHN0YXRpYyBmcm9tU3RlcE5vZGUoc3RlcE5vZGUsIGNvbnRleHQpIHtcbiAgICBsZXQgYXJyYXlBc3NpZ25tZW50ID0gbnVsbDtcblxuICAgIGNvbnN0IGFycmF5QXNzaWdubWVudE5vZGUgPSBhcnJheUFzc2lnbm1lbnROb2RlUXVlcnkoc3RlcE5vZGUpO1xuXG4gICAgaWYgKGFycmF5QXNzaWdubWVudE5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHsgVmFyaWFibGUsIFBhcmFtZXRlcnMgfSA9IGRvbSxcbiAgICAgICAgICAgIG5vZGUgPSBhcnJheUFzc2lnbm1lbnROb2RlLCAgLy8vXG4gICAgICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgICAgIHZhcmlhYmxlID0gVmFyaWFibGUuZnJvbUFycmF5QXNzaWdubWVudE5vZGUoYXJyYXlBc3NpZ25tZW50Tm9kZSwgY29udGV4dCksXG4gICAgICAgICAgICBwYXJhbWV0ZXJzID0gUGFyYW1ldGVycy5mcm9tQXJyYXlBc3NpZ25tZW50Tm9kZShhcnJheUFzc2lnbm1lbnROb2RlLCBjb250ZXh0KTtcblxuICAgICAgYXJyYXlBc3NpZ25tZW50ID0gbmV3IEFycmF5QXNzaWdtZW50KHN0cmluZywgdmFyaWFibGUsIHBhcmFtZXRlcnMpO1xuICAgIH1cblxuICAgIHJldHVybiBhcnJheUFzc2lnbm1lbnQ7XG4gIH1cbn0pO1xuIl0sIm5hbWVzIjpbImFycmF5QXNzaWdubWVudE5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsImRvbUFzc2lnbmVkIiwiQXJyYXlBc3NpZ21lbnQiLCJzdHJpbmciLCJ2YXJpYWJsZSIsInBhcmFtZXRlcnMiLCJnZXRTdHJpbmciLCJnZXRWYXJpYWJsZSIsImdldFZhcmlhYmxlcyIsInJlc29sdmUiLCJjb250ZXh0IiwiYXJyYXlBc3NpZ25tZW50U3RyaW5nIiwidHJhY2UiLCJ2YWx1ZSIsInZhbHVlVHlwZSIsImdldFR5cGUiLCJOT0RFU19UWVBFIiwidmFsdWVTdHJpbmciLCJhc1N0cmluZyIsIm1lc3NhZ2UiLCJleGNlcHRpb24iLCJFeGNlcHRpb24iLCJmcm9tTWVzc2FnZSIsIm5vZGVzIiwiZ2V0Tm9kZXMiLCJub2Rlc0xlbmd0aCIsImxlbmd0aCIsInBhcmFtZXRlcnNMZW5ndGgiLCJnZXRMZW5ndGgiLCJwYXJhbWV0ZXJzU3RyaW5nIiwibm9kZXNTdHJpbmciLCJub2Rlc0FzU3RyaW5nIiwibm9kZXgiLCJmb3JFYWNoUGFyYW1ldGVyIiwicGFyYW1ldGVyIiwiaW5kZXgiLCJWYWx1ZSIsImRvbSIsIm5vZGUiLCJmcm9tTm9kZSIsInJlc29sdmVQYXJhbWV0ZXIiLCJkZWJ1ZyIsInBhcmFtZXRlclN0cmluZyIsInBhcmFtZXRlclR5cGUiLCJOT0RFX1RZUEUiLCJWYXJpYWJsZSIsIkFzc2lnbm1lbnQiLCJhc3NpZ25tZW50IiwiZnJvbVZhbHVlIiwiZnJvbVBhcmFtZXRlckFuZEFzc2lnbm1lbnQiLCJhZGRWYXJpYWJsZSIsImFzc2lnbiIsImZyb21TdGVwTm9kZSIsInN0ZXBOb2RlIiwiYXJyYXlBc3NpZ25tZW50IiwiYXJyYXlBc3NpZ25tZW50Tm9kZSIsIlBhcmFtZXRlcnMiLCJub2RlQXNTdHJpbmciLCJmcm9tQXJyYXlBc3NpZ25tZW50Tm9kZSIsIm5hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVdBOzs7ZUFBQTs7OzJEQVRnQjtnRUFDTTtxQkFFSTtxQkFFWTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFdEMsSUFBTUEsMkJBQTJCQyxJQUFBQSxnQkFBUyxFQUFDO0lBRTNDLFdBQWVDLElBQUFBLGdCQUFXLG1DQUFDO2FBQU1DLGVBQ25CQyxNQUFNLEVBQUVDLFFBQVEsRUFBRUMsVUFBVTtnQ0FEVEg7UUFFN0IsSUFBSSxDQUFDQyxNQUFNLEdBQUdBO1FBQ2QsSUFBSSxDQUFDQyxRQUFRLEdBQUdBO1FBQ2hCLElBQUksQ0FBQ0MsVUFBVSxHQUFHQTs7OztZQUdwQkMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSCxNQUFNO1lBQ3BCOzs7WUFFQUksS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSCxRQUFRO1lBQ3RCOzs7WUFFQUksS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSCxVQUFVO1lBQ3hCOzs7WUFFQUksS0FBQUE7bUJBQUFBLFNBQUFBLFFBQVFDLE9BQU87O2dCQUNiLElBQU1DLHdCQUF3QixJQUFJLENBQUNSLE1BQU0sRUFBRSxHQUFHO2dCQUU5Q08sUUFBUUUsS0FBSyxDQUFDLEFBQUMsa0JBQXVDLE9BQXRCRCx1QkFBc0I7Z0JBRXRELElBQU1FLFFBQVEsSUFBSSxDQUFDVCxRQUFRLENBQUNLLE9BQU8sQ0FBQ0MsVUFDOUJJLFlBQVlELE1BQU1FLE9BQU87Z0JBRS9CLElBQUlELGNBQWNFLGlCQUFVLEVBQUU7b0JBQzVCLElBQU1D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