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
var _node = /*#__PURE__*/ _interop_require_default(require("../../parameters/node"));
var _query = require("../../utilities/query");
var _types = require("../../types");
var _parameterNames = require("../../parameterNames");
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
var _ObjectAssigment;
var objectAssignmentNodeQuery = (0, _query.nodeQuery)("/step/objectAssignment");
var _default = (0, _dom.domAssigned)((_ObjectAssigment = /*#__PURE__*/ function() {
    function ObjectAssigment(string, variable, parameters) {
        _class_call_check(this, ObjectAssigment);
        this.string = string;
        this.variable = variable;
        this.parameters = parameters;
    }
    _create_class(ObjectAssigment, [
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
            key: "getParameters",
            value: function getParameters() {
                return this.parameters;
            }
        },
        {
            key: "resolve",
            value: function resolve(context) {
                var _this = this;
                var objectAssignmentString = this.string; ///
                context.trace("Resolving the '".concat(objectAssignmentString, "' object assignment..."));
                var value = this.variable.resolve(context), valueType = value.getType();
                if (valueType !== _types.NODE_TYPE) {
                    var valueString = value.asString(context), message = "The ".concat(valueString, " value's '").concat(valueType, "' type should be '").concat(_types.NODE_TYPE, "'."), exception = _exception.default.fromMessage(message);
                    throw exception;
                }
                _node.default.matchParameters(this.parameters, context);
                this.parameters.forEachParameter(function(parameter) {
                    if (parameter !== null) {
                        _this.resolveParameter(parameter, value, context);
                    }
                });
                context.debug("...resolved the '".concat(objectAssignmentString, "' object assignment."));
            }
        },
        {
            key: "resolveParameter",
            value: function resolveParameter(parameter, value, context) {
                var valueString = value.asString(context), parameterString = parameter.getString();
                context.trace("Resolving the '".concat(parameterString, "' parameter against the ").concat(valueString, " value..."));
                var node = value.getNode(), name = parameter.getName();
                switch(name){
                    case _parameterNames.CONTENT_PARAMETER_NAME:
                        {
                            var type = parameter.getType();
                            if (type !== _types.STRING_TYPE) {
                                var parameterString1 = parameter.getString(), message = "The '".concat(parameterString1, "' parameter's type should be '").concat(_types.STRING_TYPE, "'."), exception = _exception.default.fromMessage(message);
                                throw exception;
                            }
                            var nodeTerminalNode = node.isTerminalNode();
                            if (!nodeTerminalNode) {
                                var valueString1 = _$value.asString(context), message1 = "The ".concat(valueString1, " value's node must be terminal."), exception1 = _exception.default.fromMessage(message1);
                                throw exception1;
                            }
                            var Value = _dom.default.Value, Variable = _dom.default.Variable, Assignment = _dom.default.Assignment, terminalNode = node, content = terminalNode.getContent(), string = content, _$value = Value.fromString(string, context), assignment = Assignment.fromValue(_$value, context), variable = Variable.fromParameterAndAssignment(parameter, assignment);
                            context.addVariable(variable);
                            variable.assign(context);
                            break;
                        }
                    default:
                        {
                            debugger;
                        }
                }
            }
        }
    ], [
        {
            key: "fromStepNode",
            value: function fromStepNode(stepNode, context) {
                var objectAssignment = null;
                var objectAssignmentNode = objectAssignmentNodeQuery(stepNode);
                if (objectAssignmentNode !== null) {
                    var Variable = _dom.default.Variable, Parameters = _dom.default.Parameters, node = objectAssignmentNode, string = context.nodeAsString(node), variable = Variable.fromObjectAssignmentNode(objectAssignmentNode, context), parameters = Parameters.fromObjectAssignmentNode(objectAssignmentNode, context);
                    objectAssignment = new ObjectAssigment(string, variable, parameters);
                }
                return objectAssignment;
            }
        }
    ]);
    return ObjectAssigment;
}(), _define_property(_ObjectAssigment, "name", "ObjectAssigment"), _ObjectAssigment));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kb20vYXNzaWdubWVudC9vYmplY3QuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBkb20gZnJvbSBcIi4uLy4uL2RvbVwiO1xuaW1wb3J0IEV4Y2VwdGlvbiBmcm9tIFwiLi4vLi4vZXhjZXB0aW9uXCI7XG5pbXBvcnQgbm9kZVBhcmFtZXRlcnMgZnJvbSBcIi4uLy4uL3BhcmFtZXRlcnMvbm9kZVwiO1xuXG5pbXBvcnQgeyBub2RlUXVlcnkgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5pbXBvcnQgeyBkb21Bc3NpZ25lZCB9IGZyb20gXCIuLi8uLi9kb21cIjtcbmltcG9ydCB7IE5PREVfVFlQRSwgU1RSSU5HX1RZUEUgfSBmcm9tIFwiLi4vLi4vdHlwZXNcIjtcbmltcG9ydCB7IENPTlRFTlRfUEFSQU1FVEVSX05BTUUgfSBmcm9tIFwiLi4vLi4vcGFyYW1ldGVyTmFtZXNcIjtcblxuY29uc3Qgb2JqZWN0QXNzaWdubWVudE5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9zdGVwL29iamVjdEFzc2lnbm1lbnRcIik7XG5cbmV4cG9ydCBkZWZhdWx0IGRvbUFzc2lnbmVkKGNsYXNzIE9iamVjdEFzc2lnbWVudCB7XG4gIGNvbnN0cnVjdG9yKHN0cmluZywgdmFyaWFibGUsIHBhcmFtZXRlcnMpIHtcbiAgICB0aGlzLnN0cmluZyA9IHN0cmluZztcbiAgICB0aGlzLnZhcmlhYmxlID0gdmFyaWFibGU7XG4gICAgdGhpcy5wYXJhbWV0ZXJzID0gcGFyYW1ldGVycztcbiAgfVxuXG4gIGdldFN0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5zdHJpbmc7XG4gIH1cblxuICBnZXRWYXJpYWJsZSgpIHtcbiAgICByZXR1cm4gdGhpcy52YXJpYWJsZTtcbiAgfVxuXG4gIGdldFBhcmFtZXRlcnMoKSB7XG4gICAgcmV0dXJuIHRoaXMucGFyYW1ldGVycztcbiAgfVxuXG4gIHJlc29sdmUoY29udGV4dCkge1xuICAgIGNvbnN0IG9iamVjdEFzc2lnbm1lbnRTdHJpbmcgPSB0aGlzLnN0cmluZzsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBSZXNvbHZpbmcgdGhlICcke29iamVjdEFzc2lnbm1lbnRTdHJpbmd9JyBvYmplY3QgYXNzaWdubWVudC4uLmApO1xuXG4gICAgY29uc3QgdmFsdWUgPSB0aGlzLnZhcmlhYmxlLnJlc29sdmUoY29udGV4dCksXG4gICAgICAgICAgdmFsdWVUeXBlID0gdmFsdWUuZ2V0VHlwZSgpO1xuXG4gICAgaWYgKHZhbHVlVHlwZSAhPT0gTk9ERV9UWVBFKSB7XG4gICAgICBjb25zdCB2YWx1ZVN0cmluZyA9IHZhbHVlLmFzU3RyaW5nKGNvbnRleHQpLFxuICAgICAgICAgICAgbWVzc2FnZSA9IGBUaGUgJHt2YWx1ZVN0cmluZ30gdmFsdWUncyAnJHt2YWx1ZVR5cGV9JyB0eXBlIHNob3VsZCBiZSAnJHtOT0RFX1RZUEV9Jy5gLFxuICAgICAgICAgICAgZXhjZXB0aW9uID0gRXhjZXB0aW9uLmZyb21NZXNzYWdlKG1lc3NhZ2UpO1xuXG4gICAgICB0aHJvdyBleGNlcHRpb247XG4gICAgfVxuXG4gICAgbm9kZVBhcmFtZXRlcnMubWF0Y2hQYXJhbWV0ZXJzKHRoaXMucGFyYW1ldGVycywgY29udGV4dCk7XG5cbiAgICB0aGlzLnBhcmFtZXRlcnMuZm9yRWFjaFBhcmFtZXRlcigocGFyYW1ldGVyKSA9PiB7XG4gICAgICBpZiAocGFyYW1ldGVyICE9PSBudWxsKSB7XG4gICAgICAgIHRoaXMucmVzb2x2ZVBhcmFtZXRlcihwYXJhbWV0ZXIsIHZhbHVlLCBjb250ZXh0KTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGNvbnRleHQuZGVidWcoYC4uLnJlc29sdmVkIHRoZSAnJHtvYmplY3RBc3NpZ25tZW50U3RyaW5nfScgb2JqZWN0IGFzc2lnbm1lbnQuYCk7XG4gIH1cblxuICByZXNvbHZlUGFyYW1ldGVyKHBhcmFtZXRlciwgdmFsdWUsIGNvbnRleHQpIHtcbiAgICBjb25zdCB2YWx1ZVN0cmluZyA9IHZhbHVlLmFzU3RyaW5nKGNvbnRleHQpLFxuICAgICAgICAgIHBhcmFtZXRlclN0cmluZyA9IHBhcmFtZXRlci5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYFJlc29sdmluZyB0aGUgJyR7cGFyYW1ldGVyU3RyaW5nfScgcGFyYW1ldGVyIGFnYWluc3QgdGhlICR7dmFsdWVTdHJpbmd9IHZhbHVlLi4uYCk7XG5cbiAgICBjb25zdCBub2RlID0gdmFsdWUuZ2V0Tm9kZSgpLFxuICAgICAgICAgIG5hbWUgPSBwYXJhbWV0ZXIuZ2V0TmFtZSgpO1xuXG4gICAgc3dpdGNoIChuYW1lKSB7XG4gICAgICBjYXNlIENPTlRFTlRfUEFSQU1FVEVSX05BTUU6IHtcbiAgICAgICAgY29uc3QgdHlwZSA9IHBhcmFtZXRlci5nZXRUeXBlKCk7XG5cbiAgICAgICAgaWYgKHR5cGUgIT09IFNUUklOR19UWVBFKSB7XG4gICAgICAgICAgY29uc3QgcGFyYW1ldGVyU3RyaW5nID0gcGFyYW1ldGVyLmdldFN0cmluZygpLFxuICAgICAgICAgICAgICAgIG1lc3NhZ2UgPSBgVGhlICcke3BhcmFtZXRlclN0cmluZ30nIHBhcmFtZXRlcidzIHR5cGUgc2hvdWxkIGJlICcke1NUUklOR19UWVBFfScuYCxcbiAgICAgICAgICAgICAgICBleGNlcHRpb24gPSBFeGNlcHRpb24uZnJvbU1lc3NhZ2UobWVzc2FnZSk7XG5cbiAgICAgICAgICB0aHJvdyBleGNlcHRpb247XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBub2RlVGVybWluYWxOb2RlID0gbm9kZS5pc1Rlcm1pbmFsTm9kZSgpO1xuXG4gICAgICAgIGlmICghbm9kZVRlcm1pbmFsTm9kZSkge1xuICAgICAgICAgIGNvbnN0IHZhbHVlU3RyaW5nID0gdmFsdWUuYXNTdHJpbmcoY29udGV4dCksXG4gICAgICAgICAgICAgICAgbWVzc2FnZSA9IGBUaGUgJHt2YWx1ZVN0cmluZ30gdmFsdWUncyBub2RlIG11c3QgYmUgdGVybWluYWwuYCxcbiAgICAgICAgICAgICAgICBleGNlcHRpb24gPSBFeGNlcHRpb24uZnJvbU1lc3NhZ2UobWVzc2FnZSk7XG5cbiAgICAgICAgICB0aHJvdyBleGNlcHRpb247XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCB7IFZhbHVlLCBWYXJpYWJsZSwgQXNzaWdubWVudCB9ID0gZG9tLFxuICAgICAgICAgICAgICB0ZXJtaW5hbE5vZGUgPSBub2RlLCAgLy8vXG4gICAgICAgICAgICAgIGNvbnRlbnQgPSB0ZXJtaW5hbE5vZGUuZ2V0Q29udGVudCgpLFxuICAgICAgICAgICAgICBzdHJpbmcgPSBjb250ZW50LCAgLy8vXG4gICAgICAgICAgICAgIHZhbHVlID0gVmFsdWUuZnJvbVN0cmluZyhzdHJpbmcsIGNvbnRleHQpLFxuICAgICAgICAgICAgICBhc3NpZ25tZW50ID0gQXNzaWdubWVudC5mcm9tVmFsdWUodmFsdWUsIGNvbnRleHQpLFxuICAgICAgICAgICAgICB2YXJpYWJsZSA9IFZhcmlhYmxlLmZyb21QYXJhbWV0ZXJBbmRBc3NpZ25tZW50KHBhcmFtZXRlciwgYXNzaWdubWVudCk7XG5cbiAgICAgICAgY29udGV4dC5hZGRWYXJpYWJsZSh2YXJpYWJsZSk7XG5cbiAgICAgICAgdmFyaWFibGUuYXNzaWduKGNvbnRleHQpO1xuXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBkZWZhdWx0OiB7XG4gICAgICAgIGRlYnVnZ2VyXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIk9iamVjdEFzc2lnbWVudFwiO1xuXG4gIHN0YXRpYyBmcm9tU3RlcE5vZGUoc3RlcE5vZGUsIGNvbnRleHQpIHtcbiAgICBsZXQgb2JqZWN0QXNzaWdubWVudCA9IG51bGw7XG5cbiAgICBjb25zdCBvYmplY3RBc3NpZ25tZW50Tm9kZSA9IG9iamVjdEFzc2lnbm1lbnROb2RlUXVlcnkoc3RlcE5vZGUpO1xuXG4gICAgaWYgKG9iamVjdEFzc2lnbm1lbnROb2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCB7IFZhcmlhYmxlLCBQYXJhbWV0ZXJzIH0gPSBkb20sXG4gICAgICAgICAgICBub2RlID0gb2JqZWN0QXNzaWdubWVudE5vZGUsICAvLy9cbiAgICAgICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICAgICAgdmFyaWFibGUgPSBWYXJpYWJsZS5mcm9tT2JqZWN0QXNzaWdubWVudE5vZGUob2JqZWN0QXNzaWdubWVudE5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgICAgcGFyYW1ldGVycyA9IFBhcmFtZXRlcnMuZnJvbU9iamVjdEFzc2lnbm1lbnROb2RlKG9iamVjdEFzc2lnbm1lbnROb2RlLCBjb250ZXh0KTtcblxuICAgICAgb2JqZWN0QXNzaWdubWVudCA9IG5ldyBPYmplY3RBc3NpZ21lbnQoc3RyaW5nLCB2YXJpYWJsZSwgcGFyYW1ldGVycyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG9iamVjdEFzc2lnbm1lbnQ7XG4gIH1cbn0pO1xuIl0sIm5hbWVzIjpbIm9iamVjdEFzc2lnbm1lbnROb2RlUXVlcnkiLCJub2RlUXVlcnkiLCJkb21Bc3NpZ25lZCIsIk9iamVjdEFzc2lnbWVudCIsInN0cmluZyIsInZhcmlhYmxlIiwicGFyYW1ldGVycyIsImdldFN0cmluZyIsImdldFZhcmlhYmxlIiwiZ2V0UGFyYW1ldGVycyIsInJlc29sdmUiLCJjb250ZXh0Iiwib2JqZWN0QXNzaWdubWVudFN0cmluZyIsInRyYWNlIiwidmFsdWUiLCJ2YWx1ZVR5cGUiLCJnZXRUeXBlIiwiTk9ERV9UWVBFIiwidmFsdWVTdHJpbmciLCJhc1N0cmluZyIsIm1lc3NhZ2UiLCJleGNlcHRpb24iLCJFeGNlcHRpb24iLCJmcm9tTWVzc2FnZSIsIm5vZGVQYXJhbWV0ZXJzIiwibWF0Y2hQYXJhbWV0ZXJzIiwiZm9yRWFjaFBhcmFtZXRlciIsInBhcmFtZXRlciIsInJlc29sdmVQYXJhbWV0ZXIiLCJkZWJ1ZyIsInBhcmFtZXRlclN0cmluZyIsIm5vZGUiLCJnZXROb2RlIiwibmFtZSIsImdldE5hbWUiLCJDT05URU5UX1BBUkFNRVRFUl9OQU1FIiwidHlwZSIsIlNUUklOR19UWVBFIiwibm9kZVRlcm1pbmFsTm9kZSIsImlzVGVybWluYWxOb2RlIiwiVmFsdWUiLCJkb20iLCJWYXJpYWJsZSIsIkFzc2lnbm1lbnQiLCJ0ZXJtaW5hbE5vZGUiLCJjb250ZW50IiwiZ2V0Q29udGVudCIsImZyb21TdHJpbmciLCJhc3NpZ25tZW50IiwiZnJvbVZhbHVlIiwiZnJvbVBhcmFtZXRlckFuZEFzc2lnbm1lbnQiLCJhZGRWYXJpYWJsZSIsImFzc2lnbiIsImZyb21TdGVwTm9kZSIsInN0ZXBOb2RlIiwib2JqZWN0QXNzaWdubWVudCIsIm9iamVjdEFzc2lnbm1lbnROb2RlIiwiUGFyYW1ldGVycyIsIm5vZGVBc1N0cmluZyIsImZyb21PYmplY3RBc3NpZ25tZW50Tm9kZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBYUE7OztlQUFBOzs7MkRBWGdCO2dFQUNNOzJEQUNLO3FCQUVEO3FCQUVhOzhCQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV2QyxJQUFNQSw0QkFBNEJDLElBQUFBLGdCQUFTLEVBQUM7SUFFNUMsV0FBZUMsSUFBQUEsZ0JBQVcsb0NBQUM7YUFBTUMsZ0JBQ25CQyxNQUFNLEVBQUVDLFFBQVEsRUFBRUMsVUFBVTtnQ0FEVEg7UUFFN0IsSUFBSSxDQUFDQyxNQUFNLEdBQUdBO1FBQ2QsSUFBSSxDQUFDQyxRQUFRLEdBQUdBO1FBQ2hCLElBQUksQ0FBQ0MsVUFBVSxHQUFHQTs7OztZQUdwQkMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSCxNQUFNO1lBQ3BCOzs7WUFFQUksS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSCxRQUFRO1lBQ3RCOzs7WUFFQUks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