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
var _nodeProperties = /*#__PURE__*/ _interop_require_default(require("../../nodeProperties"));
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
var stepObjectAssignmentNodeQuery = (0, _query.nodeQuery)("/step/objectAssignment");
var _default = (0, _dom.domAssigned)((_ObjectAssigment = /*#__PURE__*/ function() {
    function ObjectAssigment(string, variable, namedParameters) {
        _class_call_check(this, ObjectAssigment);
        this.string = string;
        this.variable = variable;
        this.namedParameters = namedParameters;
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
            key: "getNamedParameters",
            value: function getNamedParameters() {
                return this.namedParameters;
            }
        },
        {
            key: "evaluate",
            value: function evaluate(context) {
                var _this = this;
                var objectAssignmentString = this.string; ///
                context.trace("Evaluating the '".concat(objectAssignmentString, "' object assignment..."));
                var value = this.variable.evaluate(context), valueType = value.getType();
                if (valueType !== _types.NODE_TYPE) {
                    var valueString = value.asString(context), message = "The ".concat(valueString, " value's '").concat(valueType, "' type should be '").concat(_types.NODE_TYPE, "'."), exception = _exception.default.fromMessage(message);
                    throw exception;
                }
                _nodeProperties.default.matchNamedParameters(this.namedParameters, context);
                this.namedParameters.forEachNamedParameter(function(namedParameter) {
                    _this.evaluateNamedParameter(namedParameter, value, context);
                });
                context.debug("...evaluated the '".concat(objectAssignmentString, "' object assignment."));
            }
        },
        {
            key: "evaluateNamedParameter",
            value: function evaluateNamedParameter(namedParameter, value, context) {
                var valueString = value.asString(context), namedParameterString = namedParameter.getString();
                context.trace("Evaluating the '".concat(namedParameterString, "' named parameter against the ").concat(valueString, " value..."));
                var name = namedParameter.getName();
                switch(name){
                    case _parameterNames.CONTENT_PARAMETER_NAME:
                        {
                            value = this.evaluateContentNamedParameter(namedParameter, value, context);
                            break;
                        }
                    case _parameterNames.TERMINAL_PARAMETER_NAME:
                        {
                            value = this.evaluateTerminalNamedParameter(namedParameter, value, context);
                            break;
                        }
                    case _parameterNames.CHILD_NODES_PARAMETER_NAME:
                        {
                            value = this.evaluateChildNodesNamedParameter(namedParameter, value, context);
                            break;
                        }
                }
                var Variable = _dom.default.Variable, variable = Variable.fromNamedParameter(namedParameter, context);
                variable.assign(value, context);
                context.debug("...evaluated the '".concat(namedParameterString, "' parameter named against the ").concat(valueString, " value."));
            }
        },
        {
            key: "evaluateContentNamedParameter",
            value: function evaluateContentNamedParameter(namedParameter, value, context) {
                var type = namedParameter.getType();
                if (type !== _types.STRING_TYPE) {
                    var namedParameterString = namedParameter.getString(), message = "The '".concat(namedParameterString, "' named parameter's type should be '").concat(_types.STRING_TYPE, "'."), exception = _exception.default.fromMessage(message);
                    throw exception;
                }
                var node = value.getNode(), nodeTerminalNode = node.isTerminalNode();
                if (!nodeTerminalNode) {
                    var valueString = value.asString(context), message1 = "The ".concat(valueString, " value's node must be terminal."), exception1 = _exception.default.fromMessage(message1);
                    throw exception1;
                }
                var Value = _dom.default.Value, terminalNode = node, content = terminalNode.getContent(), string = content; ///
                value = Value.fromString(string, context); ///
                return value;
            }
        },
        {
            key: "evaluateTerminalNamedParameter",
            value: function evaluateTerminalNamedParameter(namedParameter, value, context) {
                var type = namedParameter.getType();
                if (type !== _types.BOOLEAN_TYPE) {
                    var namedParameterString = namedParameter.getString(), message = "The '".concat(namedParameterString, "' named parameter's type should be '").concat(_types.BOOLEAN_TYPE, "'."), exception = _exception.default.fromMessage(message);
                    throw exception;
                }
                var node = value.getNode(), nodeTerminalNode = node.isTerminalNode(), terminal = nodeTerminalNode; ///
                var Value = _dom.default.Value, boolean = terminal; ///
                value = Value.fromBoolean(boolean, context); ///
                return value;
            }
        },
        {
            key: "evaluateChildNodesNamedParameter",
            value: function evaluateChildNodesNamedParameter(namedParameter, value, context) {
                var type = namedParameter.getType();
                if (type !== _types.NODES_TYPE) {
                    var namedParameterString = namedParameter.getString(), message = "The '".concat(namedParameterString, "' named parameter's type should be '").concat(_types.NODES_TYPE, "'."), exception = _exception.default.fromMessage(message);
                    throw exception;
                }
                var node = value.getNode(), nodeNonTerminalNode = node.isNonTerminalNode();
                if (!nodeNonTerminalNode) {
                    var valueString = value.asString(context), message1 = "The ".concat(valueString, " value's node must be non-terminal."), exception1 = _exception.default.fromMessage(message1);
                    throw exception1;
                }
                var Value = _dom.default.Value, nonTerminalNode = node, childNodes = nonTerminalNode.getChildNodes(), nodes = childNodes; ///
                value = Value.fromNodes(nodes, context); ///
                return value;
            }
        }
    ], [
        {
            key: "fromStepNode",
            value: function fromStepNode(stepNode, context) {
                var objectAssignment = null;
                var stepObjectAssignmentNode = stepObjectAssignmentNodeQuery(stepNode);
                if (stepObjectAssignmentNode !== null) {
                    var objectAssignmentNode = stepObjectAssignmentNode; ///
                    objectAssignment = objectAssignmentFromObjectAssignmentNode(objectAssignmentNode, context);
                }
                return objectAssignment;
            }
        }
    ]);
    return ObjectAssigment;
}(), _define_property(_ObjectAssigment, "name", "ObjectAssigment"), _ObjectAssigment));
function objectAssignmentFromObjectAssignmentNode(objectAssignmentNode, context) {
    var Variable = _dom.default.Variable, NamedParameters = _dom.default.NamedParameters, ObjectAssigment = _dom.default.ObjectAssigment, namedParameters = NamedParameters.fromObjectAssignmentNode(objectAssignmentNode, context), variable = Variable.fromObjectAssignmentNode(objectAssignmentNode, context), string = stringFromVariableAndNamesParameters(variable, namedParameters, context), objectAssignment = new ObjectAssigment(string, variable, namedParameters);
    return objectAssignment;
}
function stringFromVariableAndNamesParameters(variable, namedParameters, context) {
    var namedParametersString = namedParameters.getString(), variableString = variable.getString(), string = "{ ".concat(namedParametersString, " } = ").concat(variableString, ";");
    return string;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kb20vYXNzaWdubWVudC9vYmplY3QuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBkb20gZnJvbSBcIi4uLy4uL2RvbVwiO1xuaW1wb3J0IEV4Y2VwdGlvbiBmcm9tIFwiLi4vLi4vZXhjZXB0aW9uXCI7XG5pbXBvcnQgbm9kZVByb3BlcnRpZXMgZnJvbSBcIi4uLy4uL25vZGVQcm9wZXJ0aWVzXCI7XG5cbmltcG9ydCB7IG5vZGVRdWVyeSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvcXVlcnlcIjtcbmltcG9ydCB7IGRvbUFzc2lnbmVkIH0gZnJvbSBcIi4uLy4uL2RvbVwiO1xuaW1wb3J0IHsgTk9ERV9UWVBFLCBOT0RFU19UWVBFLCBTVFJJTkdfVFlQRSwgQk9PTEVBTl9UWVBFIH0gZnJvbSBcIi4uLy4uL3R5cGVzXCI7XG5pbXBvcnQgeyBDT05URU5UX1BBUkFNRVRFUl9OQU1FLCBURVJNSU5BTF9QQVJBTUVURVJfTkFNRSwgQ0hJTERfTk9ERVNfUEFSQU1FVEVSX05BTUUgfSBmcm9tIFwiLi4vLi4vcGFyYW1ldGVyTmFtZXNcIjtcblxuY29uc3Qgc3RlcE9iamVjdEFzc2lnbm1lbnROb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvc3RlcC9vYmplY3RBc3NpZ25tZW50XCIpO1xuXG5leHBvcnQgZGVmYXVsdCBkb21Bc3NpZ25lZChjbGFzcyBPYmplY3RBc3NpZ21lbnQge1xuICBjb25zdHJ1Y3RvcihzdHJpbmcsIHZhcmlhYmxlLCBuYW1lZFBhcmFtZXRlcnMpIHtcbiAgICB0aGlzLnN0cmluZyA9IHN0cmluZztcbiAgICB0aGlzLnZhcmlhYmxlID0gdmFyaWFibGU7XG4gICAgdGhpcy5uYW1lZFBhcmFtZXRlcnMgPSBuYW1lZFBhcmFtZXRlcnM7XG4gIH1cblxuICBnZXRTdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RyaW5nO1xuICB9XG5cbiAgZ2V0VmFyaWFibGUoKSB7XG4gICAgcmV0dXJuIHRoaXMudmFyaWFibGU7XG4gIH1cblxuICBnZXROYW1lZFBhcmFtZXRlcnMoKSB7XG4gICAgcmV0dXJuIHRoaXMubmFtZWRQYXJhbWV0ZXJzO1xuICB9XG5cbiAgZXZhbHVhdGUoY29udGV4dCkge1xuICAgIGNvbnN0IG9iamVjdEFzc2lnbm1lbnRTdHJpbmcgPSB0aGlzLnN0cmluZzsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBFdmFsdWF0aW5nIHRoZSAnJHtvYmplY3RBc3NpZ25tZW50U3RyaW5nfScgb2JqZWN0IGFzc2lnbm1lbnQuLi5gKTtcblxuICAgIGNvbnN0IHZhbHVlID0gdGhpcy52YXJpYWJsZS5ldmFsdWF0ZShjb250ZXh0KSxcbiAgICAgICAgICB2YWx1ZVR5cGUgPSB2YWx1ZS5nZXRUeXBlKCk7XG5cbiAgICBpZiAodmFsdWVUeXBlICE9PSBOT0RFX1RZUEUpIHtcbiAgICAgIGNvbnN0IHZhbHVlU3RyaW5nID0gdmFsdWUuYXNTdHJpbmcoY29udGV4dCksXG4gICAgICAgICAgICBtZXNzYWdlID0gYFRoZSAke3ZhbHVlU3RyaW5nfSB2YWx1ZSdzICcke3ZhbHVlVHlwZX0nIHR5cGUgc2hvdWxkIGJlICcke05PREVfVFlQRX0nLmAsXG4gICAgICAgICAgICBleGNlcHRpb24gPSBFeGNlcHRpb24uZnJvbU1lc3NhZ2UobWVzc2FnZSk7XG5cbiAgICAgIHRocm93IGV4Y2VwdGlvbjtcbiAgICB9XG5cbiAgICBub2RlUHJvcGVydGllcy5tYXRjaE5hbWVkUGFyYW1ldGVycyh0aGlzLm5hbWVkUGFyYW1ldGVycywgY29udGV4dCk7XG5cbiAgICB0aGlzLm5hbWVkUGFyYW1ldGVycy5mb3JFYWNoTmFtZWRQYXJhbWV0ZXIoKG5hbWVkUGFyYW1ldGVyKSA9PiB7XG4gICAgICB0aGlzLmV2YWx1YXRlTmFtZWRQYXJhbWV0ZXIobmFtZWRQYXJhbWV0ZXIsIHZhbHVlLCBjb250ZXh0KTtcbiAgICB9KTtcblxuICAgIGNvbnRleHQuZGVidWcoYC4uLmV2YWx1YXRlZCB0aGUgJyR7b2JqZWN0QXNzaWdubWVudFN0cmluZ30nIG9iamVjdCBhc3NpZ25tZW50LmApO1xuICB9XG5cbiAgZXZhbHVhdGVOYW1lZFBhcmFtZXRlcihuYW1lZFBhcmFtZXRlciwgdmFsdWUsIGNvbnRleHQpIHtcbiAgICBjb25zdCB2YWx1ZVN0cmluZyA9IHZhbHVlLmFzU3RyaW5nKGNvbnRleHQpLFxuICAgICAgICAgIG5hbWVkUGFyYW1ldGVyU3RyaW5nID0gbmFtZWRQYXJhbWV0ZXIuZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBFdmFsdWF0aW5nIHRoZSAnJHtuYW1lZFBhcmFtZXRlclN0cmluZ30nIG5hbWVkIHBhcmFtZXRlciBhZ2FpbnN0IHRoZSAke3ZhbHVlU3RyaW5nfSB2YWx1ZS4uLmApO1xuXG4gICAgY29uc3QgbmFtZSA9IG5hbWVkUGFyYW1ldGVyLmdldE5hbWUoKTtcblxuICAgIHN3aXRjaCAobmFtZSkge1xuICAgICAgY2FzZSBDT05URU5UX1BBUkFNRVRFUl9OQU1FOiB7XG4gICAgICAgIHZhbHVlID0gdGhpcy5ldmFsdWF0ZUNvbnRlbnROYW1lZFBhcmFtZXRlcihuYW1lZFBhcmFtZXRlciwgdmFsdWUsIGNvbnRleHQpO1xuXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBjYXNlIFRFUk1JTkFMX1BBUkFNRVRFUl9OQU1FOiB7XG4gICAgICAgIHZhbHVlID0gdGhpcy5ldmFsdWF0ZVRlcm1pbmFsTmFtZWRQYXJhbWV0ZXIobmFtZWRQYXJhbWV0ZXIsIHZhbHVlLCBjb250ZXh0KTtcblxuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgY2FzZSBDSElMRF9OT0RFU19QQVJBTUVURVJfTkFNRToge1xuICAgICAgICB2YWx1ZSA9IHRoaXMuZXZhbHVhdGVDaGlsZE5vZGVzTmFtZWRQYXJhbWV0ZXIobmFtZWRQYXJhbWV0ZXIsIHZhbHVlLCBjb250ZXh0KTtcblxuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCB7IFZhcmlhYmxlIH0gPSBkb20sXG4gICAgICAgICAgdmFyaWFibGUgPSBWYXJpYWJsZS5mcm9tTmFtZWRQYXJhbWV0ZXIobmFtZWRQYXJhbWV0ZXIsIGNvbnRleHQpO1xuXG4gICAgdmFyaWFibGUuYXNzaWduKHZhbHVlLCBjb250ZXh0KTtcblxuICAgIGNvbnRleHQuZGVidWcoYC4uLmV2YWx1YXRlZCB0aGUgJyR7bmFtZWRQYXJhbWV0ZXJTdHJpbmd9JyBwYXJhbWV0ZXIgbmFtZWQgYWdhaW5zdCB0aGUgJHt2YWx1ZVN0cmluZ30gdmFsdWUuYCk7XG4gIH1cblxuICBldmFsdWF0ZUNvbnRlbnROYW1lZFBhcmFtZXRlcihuYW1lZFBhcmFtZXRlciwgdmFsdWUsIGNvbnRleHQpIHtcbiAgICBjb25zdCB0eXBlID0gbmFtZWRQYXJhbWV0ZXIuZ2V0VHlwZSgpO1xuXG4gICAgaWYgKHR5cGUgIT09IFNUUklOR19UWVBFKSB7XG4gICAgICBjb25zdCBuYW1lZFBhcmFtZXRlclN0cmluZyA9IG5hbWVkUGFyYW1ldGVyLmdldFN0cmluZygpLFxuICAgICAgICAgICAgbWVzc2FnZSA9IGBUaGUgJyR7bmFtZWRQYXJhbWV0ZXJTdHJpbmd9JyBuYW1lZCBwYXJhbWV0ZXIncyB0eXBlIHNob3VsZCBiZSAnJHtTVFJJTkdfVFlQRX0nLmAsXG4gICAgICAgICAgICBleGNlcHRpb24gPSBFeGNlcHRpb24uZnJvbU1lc3NhZ2UobWVzc2FnZSk7XG5cbiAgICAgIHRocm93IGV4Y2VwdGlvbjtcbiAgICB9XG5cbiAgICBjb25zdCBub2RlID0gdmFsdWUuZ2V0Tm9kZSgpLFxuICAgICAgICAgIG5vZGVUZXJtaW5hbE5vZGUgPSBub2RlLmlzVGVybWluYWxOb2RlKCk7XG5cbiAgICBpZiAoIW5vZGVUZXJtaW5hbE5vZGUpIHtcbiAgICAgIGNvbnN0IHZhbHVlU3RyaW5nID0gdmFsdWUuYXNTdHJpbmcoY29udGV4dCksXG4gICAgICAgICAgICBtZXNzYWdlID0gYFRoZSAke3ZhbHVlU3RyaW5nfSB2YWx1ZSdzIG5vZGUgbXVzdCBiZSB0ZXJtaW5hbC5gLFxuICAgICAgICAgICAgZXhjZXB0aW9uID0gRXhjZXB0aW9uLmZyb21NZXNzYWdlKG1lc3NhZ2UpO1xuXG4gICAgICB0aHJvdyBleGNlcHRpb247XG4gICAgfVxuXG4gICAgY29uc3QgeyBWYWx1ZSB9ID0gZG9tLFxuICAgICAgICAgIHRlcm1pbmFsTm9kZSA9IG5vZGUsICAvLy9cbiAgICAgICAgICBjb250ZW50ID0gdGVybWluYWxOb2RlLmdldENvbnRlbnQoKSxcbiAgICAgICAgICBzdHJpbmcgPSBjb250ZW50OyAgLy8vXG5cbiAgICB2YWx1ZSA9IFZhbHVlLmZyb21TdHJpbmcoc3RyaW5nLCBjb250ZXh0KTsgIC8vL1xuXG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG5cbiAgZXZhbHVhdGVUZXJtaW5hbE5hbWVkUGFyYW1ldGVyKG5hbWVkUGFyYW1ldGVyLCB2YWx1ZSwgY29udGV4dCkge1xuICAgIGNvbnN0IHR5cGUgPSBuYW1lZFBhcmFtZXRlci5nZXRUeXBlKCk7XG5cbiAgICBpZiAodHlwZSAhPT0gQk9PTEVBTl9UWVBFKSB7XG4gICAgICBjb25zdCBuYW1lZFBhcmFtZXRlclN0cmluZyA9IG5hbWVkUGFyYW1ldGVyLmdldFN0cmluZygpLFxuICAgICAgICAgICAgbWVzc2FnZSA9IGBUaGUgJyR7bmFtZWRQYXJhbWV0ZXJTdHJpbmd9JyBuYW1lZCBwYXJhbWV0ZXIncyB0eXBlIHNob3VsZCBiZSAnJHtCT09MRUFOX1RZUEV9Jy5gLFxuICAgICAgICAgICAgZXhjZXB0aW9uID0gRXhjZXB0aW9uLmZyb21NZXNzYWdlKG1lc3NhZ2UpO1xuXG4gICAgICB0aHJvdyBleGNlcHRpb247XG4gICAgfVxuXG4gICAgY29uc3Qgbm9kZSA9IHZhbHVlLmdldE5vZGUoKSxcbiAgICAgICAgICBub2RlVGVybWluYWxOb2RlID0gbm9kZS5pc1Rlcm1pbmFsTm9kZSgpLFxuICAgICAgICAgIHRlcm1pbmFsID0gbm9kZVRlcm1pbmFsTm9kZTsgIC8vL1xuXG4gICAgY29uc3QgeyBWYWx1ZSB9ID0gZG9tLFxuICAgICAgICAgIGJvb2xlYW4gPSB0ZXJtaW5hbDsgLy8vXG5cbiAgICB2YWx1ZSA9IFZhbHVlLmZyb21Cb29sZWFuKGJvb2xlYW4sIGNvbnRleHQpOyAgLy8vXG5cbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cblxuICBldmFsdWF0ZUNoaWxkTm9kZXNOYW1lZFBhcmFtZXRlcihuYW1lZFBhcmFtZXRlciwgdmFsdWUsIGNvbnRleHQpIHtcbiAgICBjb25zdCB0eXBlID0gbmFtZWRQYXJhbWV0ZXIuZ2V0VHlwZSgpO1xuXG4gICAgaWYgKHR5cGUgIT09IE5PREVTX1RZUEUpIHtcbiAgICAgIGNvbnN0IG5hbWVkUGFyYW1ldGVyU3RyaW5nID0gbmFtZWRQYXJhbWV0ZXIuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgICBtZXNzYWdlID0gYFRoZSAnJHtuYW1lZFBhcmFtZXRlclN0cmluZ30nIG5hbWVkIHBhcmFtZXRlcidzIHR5cGUgc2hvdWxkIGJlICcke05PREVTX1RZUEV9Jy5gLFxuICAgICAgICAgICAgZXhjZXB0aW9uID0gRXhjZXB0aW9uLmZyb21NZXNzYWdlKG1lc3NhZ2UpO1xuXG4gICAgICB0aHJvdyBleGNlcHRpb247XG4gICAgfVxuXG4gICAgY29uc3Qgbm9kZSA9IHZhbHVlLmdldE5vZGUoKSxcbiAgICAgICAgICBub2RlTm9uVGVybWluYWxOb2RlID0gbm9kZS5pc05vblRlcm1pbmFsTm9kZSgpO1xuXG4gICAgaWYgKCFub2RlTm9uVGVybWluYWxOb2RlKSB7XG4gICAgICBjb25zdCB2YWx1ZVN0cmluZyA9IHZhbHVlLmFzU3RyaW5nKGNvbnRleHQpLFxuICAgICAgICAgICAgbWVzc2FnZSA9IGBUaGUgJHt2YWx1ZVN0cmluZ30gdmFsdWUncyBub2RlIG11c3QgYmUgbm9uLXRlcm1pbmFsLmAsXG4gICAgICAgICAgICBleGNlcHRpb24gPSBFeGNlcHRpb24uZnJvbU1lc3NhZ2UobWVzc2FnZSk7XG5cbiAgICAgIHRocm93IGV4Y2VwdGlvbjtcbiAgICB9XG5cbiAgICBjb25zdCB7IFZhbHVlIH0gPSBkb20sXG4gICAgICAgICAgbm9uVGVybWluYWxOb2RlID0gbm9kZSwgIC8vL1xuICAgICAgICAgIGNoaWxkTm9kZXMgPSBub25UZXJtaW5hbE5vZGUuZ2V0Q2hpbGROb2RlcygpLFxuICAgICAgICAgIG5vZGVzID0gY2hpbGROb2RlczsgIC8vL1xuXG4gICAgdmFsdWUgPSBWYWx1ZS5mcm9tTm9kZXMobm9kZXMsIGNvbnRleHQpOyAgLy8vXG5cbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiT2JqZWN0QXNzaWdtZW50XCI7XG5cbiAgc3RhdGljIGZyb21TdGVwTm9kZShzdGVwTm9kZSwgY29udGV4dCkge1xuICAgIGxldCBvYmplY3RBc3NpZ25tZW50ID0gbnVsbDtcblxuICAgIGNvbnN0IHN0ZXBPYmplY3RBc3NpZ25tZW50Tm9kZSA9IHN0ZXBPYmplY3RBc3NpZ25tZW50Tm9kZVF1ZXJ5KHN0ZXBOb2RlKTtcblxuICAgIGlmIChzdGVwT2JqZWN0QXNzaWdubWVudE5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IG9iamVjdEFzc2lnbm1lbnROb2RlID0gc3RlcE9iamVjdEFzc2lnbm1lbnROb2RlOyAgLy8vXG5cbiAgICAgIG9iamVjdEFzc2lnbm1lbnQgPSBvYmplY3RBc3NpZ25tZW50RnJvbU9iamVjdEFzc2lnbm1lbnROb2RlKG9iamVjdEFzc2lnbm1lbnROb2RlLCBjb250ZXh0KTtcbiAgICB9XG5cbiAgICByZXR1cm4gb2JqZWN0QXNzaWdubWVudDtcbiAgfVxufSk7XG5cbmZ1bmN0aW9uIG9iamVjdEFzc2lnbm1lbnRGcm9tT2JqZWN0QXNzaWdubWVudE5vZGUob2JqZWN0QXNzaWdubWVudE5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBWYXJpYWJsZSwgTmFtZWRQYXJhbWV0ZXJzLCBPYmplY3RBc3NpZ21lbnQgfSA9IGRvbSxcbiAgICAgICAgbmFtZWRQYXJhbWV0ZXJzID0gTmFtZWRQYXJhbWV0ZXJzLmZyb21PYmplY3RBc3NpZ25tZW50Tm9kZShvYmplY3RBc3NpZ25tZW50Tm9kZSwgY29udGV4dCksXG4gICAgICAgIHZhcmlhYmxlID0gVmFyaWFibGUuZnJvbU9iamVjdEFzc2lnbm1lbnROb2RlKG9iamVjdEFzc2lnbm1lbnROb2RlLCBjb250ZXh0KSxcbiAgICAgICAgc3RyaW5nID0gc3RyaW5nRnJvbVZhcmlhYmxlQW5kTmFtZXNQYXJhbWV0ZXJzKHZhcmlhYmxlLCBuYW1lZFBhcmFtZXRlcnMsIGNvbnRleHQpLFxuICAgICAgICBvYmplY3RBc3NpZ25tZW50ID0gbmV3IE9iamVjdEFzc2lnbWVudChzdHJpbmcsIHZhcmlhYmxlLCBuYW1lZFBhcmFtZXRlcnMpO1xuXG4gIHJldHVybiBvYmplY3RBc3NpZ25tZW50O1xufVxuXG5mdW5jdGlvbiBzdHJpbmdGcm9tVmFyaWFibGVBbmROYW1lc1BhcmFtZXRlcnModmFyaWFibGUsIG5hbWVkUGFyYW1ldGVycywgY29udGV4dCkge1xuICBjb25zdCBuYW1lZFBhcmFtZXRlcnNTdHJpbmcgPSBuYW1lZFBhcmFtZXRlcnMuZ2V0U3RyaW5nKCksXG4gICAgICAgIHZhcmlhYmxlU3RyaW5nID0gdmFyaWFibGUuZ2V0U3RyaW5nKCksXG4gICAgICAgIHN0cmluZyA9IGB7ICR7bmFtZWRQYXJhbWV0ZXJzU3RyaW5nfSB9ID0gJHt2YXJpYWJsZVN0cmluZ307YDtcblxuICByZXR1cm4gc3RyaW5nO1xufVxuIl0sIm5hbWVzIjpbInN0ZXBPYmplY3RBc3NpZ25tZW50Tm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5IiwiZG9tQXNzaWduZWQiLCJPYmplY3RBc3NpZ21lbnQiLCJzdHJpbmciLCJ2YXJpYWJsZSIsIm5hbWVkUGFyYW1ldGVycyIsImdldFN0cmluZyIsImdldFZhcmlhYmxlIiwiZ2V0TmFtZWRQYXJhbWV0ZXJzIiwiZXZhbHVhdGUiLCJjb250ZXh0Iiwib2JqZWN0QXNzaWdubWVudFN0cmluZyIsInRyYWNlIiwidmFsdWUiLCJ2YWx1ZVR5cGUiLCJnZXRUeXBlIiwiTk9ERV9UWVBFIiwidmFsdWVTdHJpbmciLCJhc1N0cmluZyIsIm1lc3NhZ2UiLCJleGNlcHRpb24iLCJFeGNlcHRpb24iLCJmcm9tTWVzc2FnZSIsIm5vZGVQcm9wZXJ0aWVzIiwibWF0Y2hOYW1lZFBhcmFtZXRlcnMiLCJmb3JFYWNoTmFtZWRQYXJhbWV0ZXIiLCJuYW1lZFBhcmFtZXRlciIsImV2YWx1YXRlTmFtZWRQYXJhbWV0ZXIiLCJkZWJ1ZyIsIm5hbWVkUGFyYW1ldGVyU3RyaW5nIiwibmFtZSIsImdldE5hbWUiLCJDT05URU5UX1BBUkFNRVRFUl9OQU1FIiwiZXZhbHVhdGVDb250ZW50TmFtZWRQYXJhbWV0ZXIiLCJURVJNSU5BTF9QQVJBTUVURVJfTkFNRSIsImV2YWx1YXRlVGVybWluYWxOYW1lZFBhcmFtZXRlciIsIkNISUxEX05PREVTX1BBUkFNRVRFUl9OQU1FIiwiZXZhbHVhdGVDaGlsZE5vZGVzTmFtZWRQYXJhbWV0ZXIiLCJWYXJpYWJsZSIsImRvbSIsImZyb21OYW1lZFBhcmFtZXRlciIsImFzc2lnbiIsInR5cGUiLCJTVFJJTkdfVFlQRSIsIm5vZGUiLCJnZXROb2RlIiwibm9kZVRlcm1pbmFsTm9kZSIsImlzVGVybWluYWxOb2RlIiwiVmFsdWUiLCJ0ZXJtaW5hbE5vZGUiLCJjb250ZW50IiwiZ2V0Q29udGVudCIsImZyb21TdHJpbmciLCJCT09MRUFOX1RZUEUiLCJ0ZXJtaW5hbCIsImJvb2xlYW4iLCJmcm9tQm9vbGVhbiIsIk5PREVTX1RZUEUiLCJub2RlTm9uVGVybWluYWxOb2RlIiwiaXNOb25UZXJtaW5hbE5vZGUiLCJub25UZXJtaW5hbE5vZGUiLCJjaGlsZE5vZGVzIiwiZ2V0Q2hpbGROb2RlcyIsIm5vZGVzIiwiZnJvbU5vZGVzIiwiZnJvbVN0ZXBOb2RlIiwic3RlcE5vZGUiLCJvYmplY3RBc3NpZ25tZW50Iiwic3RlcE9iamVjdEFzc2lnbm1lbnROb2RlIiwib2JqZWN0QXNzaWdubWVudE5vZGUiLCJvYmplY3RBc3NpZ25tZW50RnJvbU9iamVjdEFzc2lnbm1lbnROb2RlIiwiTmFtZWRQYXJhbWV0ZXJzIiwiZnJvbU9iamVjdEFzc2lnbm1lbnROb2RlIiwic3RyaW5nRnJvbVZhcmlhYmxlQW5kTmFtZXNQYXJhbWV0ZXJzIiwibmFtZWRQYXJhbWV0ZXJzU3RyaW5nIiwidmFyaWFibGVTdHJpbmciXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQWFBOzs7ZUFBQTs7OzJEQVhnQjtnRUFDTTtxRUFDSztxQkFFRDtxQkFFdUM7OEJBQzJCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU1RixJQUFNQSxnQ0FBZ0NDLElBQUFBLGdCQUFTLEVBQUM7SUFFaEQsV0FBZUMsSUFBQUEsZ0JBQVcsb0NBQUM7YUFBTUMsZ0JBQ25CQyxNQUFNLEVBQUVDLFFBQVEsRUFBRUMsZUFBZTtnQ0FEZEg7UUFFN0IsSUFBSSxDQUFDQyxNQUFNLEdBQUdBO1FBQ2QsSUFBSSxDQUFDQyxRQUFRLEdBQUdBO1FBQ2hCLElBQUksQ0FBQ0MsZUFBZSxHQUFHQTs7OztZQUd6QkMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSCxNQUFNO1lBQ3BCOzs7WUFFQUksS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSCxRQUFRO1lBQ3RCOzs7WUFFQUksS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSCxlQUFlO1lBQzdCOzs7WUFFQUksS0FBQUE7bUJBQUFBLFNBQUFBLFNBQVNDLE9BQU87O2dCQUNkLElBQU1DLHlCQUF5QixJQUFJLENBQUNSLE1BQU0sRUFBRSxHQUFHO2dCQUUvQ08sUUFBUUUsS0FBSyxDQUFDLEFBQUMsbUJBQXlDLE9BQXZCRCx3QkFBdUI7Z0JBRXhELElBQU1FLFFBQVEsSUFBSSxDQUFDVCxRQUFRLENBQUNLLFFBQVEsQ0FBQ0MsVUFDL0JJLFlBQVlELE1BQU1FLE9BQU87Z0JBRS9CLElBQUlELGNBQWNFLGdCQUFTLEVB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