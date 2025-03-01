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
var objectAssignmentNodeQuery = (0, _query.nodeQuery)("/step/objectAssignment");
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
                var objectAssignmentNode = objectAssignmentNodeQuery(stepNode);
                if (objectAssignmentNode !== null) {
                    var Variable = _dom.default.Variable, NamedParameters = _dom.default.NamedParameters, node = objectAssignmentNode, string = context.nodeAsString(node), variable = Variable.fromObjectAssignmentNode(objectAssignmentNode, context), namedParameters = NamedParameters.fromObjectAssignmentNode(objectAssignmentNode, context);
                    objectAssignment = new ObjectAssigment(string, variable, namedParameters);
                }
                return objectAssignment;
            }
        }
    ]);
    return ObjectAssigment;
}(), _define_property(_ObjectAssigment, "name", "ObjectAssigment"), _ObjectAssigment));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kb20vYXNzaWdubWVudC9vYmplY3QuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBkb20gZnJvbSBcIi4uLy4uL2RvbVwiO1xuaW1wb3J0IEV4Y2VwdGlvbiBmcm9tIFwiLi4vLi4vZXhjZXB0aW9uXCI7XG5pbXBvcnQgbm9kZVByb3BlcnRpZXMgZnJvbSBcIi4uLy4uL25vZGVQcm9wZXJ0aWVzXCI7XG5cbmltcG9ydCB7IG5vZGVRdWVyeSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvcXVlcnlcIjtcbmltcG9ydCB7IGRvbUFzc2lnbmVkIH0gZnJvbSBcIi4uLy4uL2RvbVwiO1xuaW1wb3J0IHsgTk9ERV9UWVBFLCBOT0RFU19UWVBFLCBTVFJJTkdfVFlQRSwgQk9PTEVBTl9UWVBFIH0gZnJvbSBcIi4uLy4uL3R5cGVzXCI7XG5pbXBvcnQgeyBDT05URU5UX1BBUkFNRVRFUl9OQU1FLCBURVJNSU5BTF9QQVJBTUVURVJfTkFNRSwgQ0hJTERfTk9ERVNfUEFSQU1FVEVSX05BTUUgfSBmcm9tIFwiLi4vLi4vcGFyYW1ldGVyTmFtZXNcIjtcblxuY29uc3Qgb2JqZWN0QXNzaWdubWVudE5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9zdGVwL29iamVjdEFzc2lnbm1lbnRcIik7XG5cbmV4cG9ydCBkZWZhdWx0IGRvbUFzc2lnbmVkKGNsYXNzIE9iamVjdEFzc2lnbWVudCB7XG4gIGNvbnN0cnVjdG9yKHN0cmluZywgdmFyaWFibGUsIG5hbWVkUGFyYW1ldGVycykge1xuICAgIHRoaXMuc3RyaW5nID0gc3RyaW5nO1xuICAgIHRoaXMudmFyaWFibGUgPSB2YXJpYWJsZTtcbiAgICB0aGlzLm5hbWVkUGFyYW1ldGVycyA9IG5hbWVkUGFyYW1ldGVycztcbiAgfVxuXG4gIGdldFN0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5zdHJpbmc7XG4gIH1cblxuICBnZXRWYXJpYWJsZSgpIHtcbiAgICByZXR1cm4gdGhpcy52YXJpYWJsZTtcbiAgfVxuXG4gIGdldE5hbWVkUGFyYW1ldGVycygpIHtcbiAgICByZXR1cm4gdGhpcy5uYW1lZFBhcmFtZXRlcnM7XG4gIH1cblxuICBldmFsdWF0ZShjb250ZXh0KSB7XG4gICAgY29uc3Qgb2JqZWN0QXNzaWdubWVudFN0cmluZyA9IHRoaXMuc3RyaW5nOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYEV2YWx1YXRpbmcgdGhlICcke29iamVjdEFzc2lnbm1lbnRTdHJpbmd9JyBvYmplY3QgYXNzaWdubWVudC4uLmApO1xuXG4gICAgY29uc3QgdmFsdWUgPSB0aGlzLnZhcmlhYmxlLmV2YWx1YXRlKGNvbnRleHQpLFxuICAgICAgICAgIHZhbHVlVHlwZSA9IHZhbHVlLmdldFR5cGUoKTtcblxuICAgIGlmICh2YWx1ZVR5cGUgIT09IE5PREVfVFlQRSkge1xuICAgICAgY29uc3QgdmFsdWVTdHJpbmcgPSB2YWx1ZS5hc1N0cmluZyhjb250ZXh0KSxcbiAgICAgICAgICAgIG1lc3NhZ2UgPSBgVGhlICR7dmFsdWVTdHJpbmd9IHZhbHVlJ3MgJyR7dmFsdWVUeXBlfScgdHlwZSBzaG91bGQgYmUgJyR7Tk9ERV9UWVBFfScuYCxcbiAgICAgICAgICAgIGV4Y2VwdGlvbiA9IEV4Y2VwdGlvbi5mcm9tTWVzc2FnZShtZXNzYWdlKTtcblxuICAgICAgdGhyb3cgZXhjZXB0aW9uO1xuICAgIH1cblxuICAgIG5vZGVQcm9wZXJ0aWVzLm1hdGNoTmFtZWRQYXJhbWV0ZXJzKHRoaXMubmFtZWRQYXJhbWV0ZXJzLCBjb250ZXh0KTtcblxuICAgIHRoaXMubmFtZWRQYXJhbWV0ZXJzLmZvckVhY2hOYW1lZFBhcmFtZXRlcigobmFtZWRQYXJhbWV0ZXIpID0+IHtcbiAgICAgIHRoaXMuZXZhbHVhdGVOYW1lZFBhcmFtZXRlcihuYW1lZFBhcmFtZXRlciwgdmFsdWUsIGNvbnRleHQpO1xuICAgIH0pO1xuXG4gICAgY29udGV4dC5kZWJ1ZyhgLi4uZXZhbHVhdGVkIHRoZSAnJHtvYmplY3RBc3NpZ25tZW50U3RyaW5nfScgb2JqZWN0IGFzc2lnbm1lbnQuYCk7XG4gIH1cblxuICBldmFsdWF0ZU5hbWVkUGFyYW1ldGVyKG5hbWVkUGFyYW1ldGVyLCB2YWx1ZSwgY29udGV4dCkge1xuICAgIGNvbnN0IHZhbHVlU3RyaW5nID0gdmFsdWUuYXNTdHJpbmcoY29udGV4dCksXG4gICAgICAgICAgbmFtZWRQYXJhbWV0ZXJTdHJpbmcgPSBuYW1lZFBhcmFtZXRlci5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYEV2YWx1YXRpbmcgdGhlICcke25hbWVkUGFyYW1ldGVyU3RyaW5nfScgbmFtZWQgcGFyYW1ldGVyIGFnYWluc3QgdGhlICR7dmFsdWVTdHJpbmd9IHZhbHVlLi4uYCk7XG5cbiAgICBjb25zdCBuYW1lID0gbmFtZWRQYXJhbWV0ZXIuZ2V0TmFtZSgpO1xuXG4gICAgc3dpdGNoIChuYW1lKSB7XG4gICAgICBjYXNlIENPTlRFTlRfUEFSQU1FVEVSX05BTUU6IHtcbiAgICAgICAgdmFsdWUgPSB0aGlzLmV2YWx1YXRlQ29udGVudE5hbWVkUGFyYW1ldGVyKG5hbWVkUGFyYW1ldGVyLCB2YWx1ZSwgY29udGV4dCk7XG5cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIGNhc2UgVEVSTUlOQUxfUEFSQU1FVEVSX05BTUU6IHtcbiAgICAgICAgdmFsdWUgPSB0aGlzLmV2YWx1YXRlVGVybWluYWxOYW1lZFBhcmFtZXRlcihuYW1lZFBhcmFtZXRlciwgdmFsdWUsIGNvbnRleHQpO1xuXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBjYXNlIENISUxEX05PREVTX1BBUkFNRVRFUl9OQU1FOiB7XG4gICAgICAgIHZhbHVlID0gdGhpcy5ldmFsdWF0ZUNoaWxkTm9kZXNOYW1lZFBhcmFtZXRlcihuYW1lZFBhcmFtZXRlciwgdmFsdWUsIGNvbnRleHQpO1xuXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IHsgVmFyaWFibGUgfSA9IGRvbSxcbiAgICAgICAgICB2YXJpYWJsZSA9IFZhcmlhYmxlLmZyb21OYW1lZFBhcmFtZXRlcihuYW1lZFBhcmFtZXRlciwgY29udGV4dCk7XG5cbiAgICB2YXJpYWJsZS5hc3NpZ24odmFsdWUsIGNvbnRleHQpO1xuXG4gICAgY29udGV4dC5kZWJ1ZyhgLi4uZXZhbHVhdGVkIHRoZSAnJHtuYW1lZFBhcmFtZXRlclN0cmluZ30nIHBhcmFtZXRlciBuYW1lZCBhZ2FpbnN0IHRoZSAke3ZhbHVlU3RyaW5nfSB2YWx1ZS5gKTtcbiAgfVxuXG4gIGV2YWx1YXRlQ29udGVudE5hbWVkUGFyYW1ldGVyKG5hbWVkUGFyYW1ldGVyLCB2YWx1ZSwgY29udGV4dCkge1xuICAgIGNvbnN0IHR5cGUgPSBuYW1lZFBhcmFtZXRlci5nZXRUeXBlKCk7XG5cbiAgICBpZiAodHlwZSAhPT0gU1RSSU5HX1RZUEUpIHtcbiAgICAgIGNvbnN0IG5hbWVkUGFyYW1ldGVyU3RyaW5nID0gbmFtZWRQYXJhbWV0ZXIuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgICBtZXNzYWdlID0gYFRoZSAnJHtuYW1lZFBhcmFtZXRlclN0cmluZ30nIG5hbWVkIHBhcmFtZXRlcidzIHR5cGUgc2hvdWxkIGJlICcke1NUUklOR19UWVBFfScuYCxcbiAgICAgICAgICAgIGV4Y2VwdGlvbiA9IEV4Y2VwdGlvbi5mcm9tTWVzc2FnZShtZXNzYWdlKTtcblxuICAgICAgdGhyb3cgZXhjZXB0aW9uO1xuICAgIH1cblxuICAgIGNvbnN0IG5vZGUgPSB2YWx1ZS5nZXROb2RlKCksXG4gICAgICAgICAgbm9kZVRlcm1pbmFsTm9kZSA9IG5vZGUuaXNUZXJtaW5hbE5vZGUoKTtcblxuICAgIGlmICghbm9kZVRlcm1pbmFsTm9kZSkge1xuICAgICAgY29uc3QgdmFsdWVTdHJpbmcgPSB2YWx1ZS5hc1N0cmluZyhjb250ZXh0KSxcbiAgICAgICAgICAgIG1lc3NhZ2UgPSBgVGhlICR7dmFsdWVTdHJpbmd9IHZhbHVlJ3Mgbm9kZSBtdXN0IGJlIHRlcm1pbmFsLmAsXG4gICAgICAgICAgICBleGNlcHRpb24gPSBFeGNlcHRpb24uZnJvbU1lc3NhZ2UobWVzc2FnZSk7XG5cbiAgICAgIHRocm93IGV4Y2VwdGlvbjtcbiAgICB9XG5cbiAgICBjb25zdCB7IFZhbHVlIH0gPSBkb20sXG4gICAgICAgICAgdGVybWluYWxOb2RlID0gbm9kZSwgIC8vL1xuICAgICAgICAgIGNvbnRlbnQgPSB0ZXJtaW5hbE5vZGUuZ2V0Q29udGVudCgpLFxuICAgICAgICAgIHN0cmluZyA9IGNvbnRlbnQ7ICAvLy9cblxuICAgIHZhbHVlID0gVmFsdWUuZnJvbVN0cmluZyhzdHJpbmcsIGNvbnRleHQpOyAgLy8vXG5cbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cblxuICBldmFsdWF0ZVRlcm1pbmFsTmFtZWRQYXJhbWV0ZXIobmFtZWRQYXJhbWV0ZXIsIHZhbHVlLCBjb250ZXh0KSB7XG4gICAgY29uc3QgdHlwZSA9IG5hbWVkUGFyYW1ldGVyLmdldFR5cGUoKTtcblxuICAgIGlmICh0eXBlICE9PSBCT09MRUFOX1RZUEUpIHtcbiAgICAgIGNvbnN0IG5hbWVkUGFyYW1ldGVyU3RyaW5nID0gbmFtZWRQYXJhbWV0ZXIuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgICBtZXNzYWdlID0gYFRoZSAnJHtuYW1lZFBhcmFtZXRlclN0cmluZ30nIG5hbWVkIHBhcmFtZXRlcidzIHR5cGUgc2hvdWxkIGJlICcke0JPT0xFQU5fVFlQRX0nLmAsXG4gICAgICAgICAgICBleGNlcHRpb24gPSBFeGNlcHRpb24uZnJvbU1lc3NhZ2UobWVzc2FnZSk7XG5cbiAgICAgIHRocm93IGV4Y2VwdGlvbjtcbiAgICB9XG5cbiAgICBjb25zdCBub2RlID0gdmFsdWUuZ2V0Tm9kZSgpLFxuICAgICAgICAgIG5vZGVUZXJtaW5hbE5vZGUgPSBub2RlLmlzVGVybWluYWxOb2RlKCksXG4gICAgICAgICAgdGVybWluYWwgPSBub2RlVGVybWluYWxOb2RlOyAgLy8vXG5cbiAgICBjb25zdCB7IFZhbHVlIH0gPSBkb20sXG4gICAgICAgICAgYm9vbGVhbiA9IHRlcm1pbmFsOyAvLy9cblxuICAgIHZhbHVlID0gVmFsdWUuZnJvbUJvb2xlYW4oYm9vbGVhbiwgY29udGV4dCk7ICAvLy9cblxuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuXG4gIGV2YWx1YXRlQ2hpbGROb2Rlc05hbWVkUGFyYW1ldGVyKG5hbWVkUGFyYW1ldGVyLCB2YWx1ZSwgY29udGV4dCkge1xuICAgIGNvbnN0IHR5cGUgPSBuYW1lZFBhcmFtZXRlci5nZXRUeXBlKCk7XG5cbiAgICBpZiAodHlwZSAhPT0gTk9ERVNfVFlQRSkge1xuICAgICAgY29uc3QgbmFtZWRQYXJhbWV0ZXJTdHJpbmcgPSBuYW1lZFBhcmFtZXRlci5nZXRTdHJpbmcoKSxcbiAgICAgICAgICAgIG1lc3NhZ2UgPSBgVGhlICcke25hbWVkUGFyYW1ldGVyU3RyaW5nfScgbmFtZWQgcGFyYW1ldGVyJ3MgdHlwZSBzaG91bGQgYmUgJyR7Tk9ERVNfVFlQRX0nLmAsXG4gICAgICAgICAgICBleGNlcHRpb24gPSBFeGNlcHRpb24uZnJvbU1lc3NhZ2UobWVzc2FnZSk7XG5cbiAgICAgIHRocm93IGV4Y2VwdGlvbjtcbiAgICB9XG5cbiAgICBjb25zdCBub2RlID0gdmFsdWUuZ2V0Tm9kZSgpLFxuICAgICAgICAgIG5vZGVOb25UZXJtaW5hbE5vZGUgPSBub2RlLmlzTm9uVGVybWluYWxOb2RlKCk7XG5cbiAgICBpZiAoIW5vZGVOb25UZXJtaW5hbE5vZGUpIHtcbiAgICAgIGNvbnN0IHZhbHVlU3RyaW5nID0gdmFsdWUuYXNTdHJpbmcoY29udGV4dCksXG4gICAgICAgICAgICBtZXNzYWdlID0gYFRoZSAke3ZhbHVlU3RyaW5nfSB2YWx1ZSdzIG5vZGUgbXVzdCBiZSBub24tdGVybWluYWwuYCxcbiAgICAgICAgICAgIGV4Y2VwdGlvbiA9IEV4Y2VwdGlvbi5mcm9tTWVzc2FnZShtZXNzYWdlKTtcblxuICAgICAgdGhyb3cgZXhjZXB0aW9uO1xuICAgIH1cblxuICAgIGNvbnN0IHsgVmFsdWUgfSA9IGRvbSxcbiAgICAgICAgICBub25UZXJtaW5hbE5vZGUgPSBub2RlLCAgLy8vXG4gICAgICAgICAgY2hpbGROb2RlcyA9IG5vblRlcm1pbmFsTm9kZS5nZXRDaGlsZE5vZGVzKCksXG4gICAgICAgICAgbm9kZXMgPSBjaGlsZE5vZGVzOyAgLy8vXG5cbiAgICB2YWx1ZSA9IFZhbHVlLmZyb21Ob2Rlcyhub2RlcywgY29udGV4dCk7ICAvLy9cblxuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJPYmplY3RBc3NpZ21lbnRcIjtcblxuICBzdGF0aWMgZnJvbVN0ZXBOb2RlKHN0ZXBOb2RlLCBjb250ZXh0KSB7XG4gICAgbGV0IG9iamVjdEFzc2lnbm1lbnQgPSBudWxsO1xuXG4gICAgY29uc3Qgb2JqZWN0QXNzaWdubWVudE5vZGUgPSBvYmplY3RBc3NpZ25tZW50Tm9kZVF1ZXJ5KHN0ZXBOb2RlKTtcblxuICAgIGlmIChvYmplY3RBc3NpZ25tZW50Tm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgeyBWYXJpYWJsZSwgTmFtZWRQYXJhbWV0ZXJzIH0gPSBkb20sXG4gICAgICAgICAgICBub2RlID0gb2JqZWN0QXNzaWdubWVudE5vZGUsICAvLy9cbiAgICAgICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICAgICAgdmFyaWFibGUgPSBWYXJpYWJsZS5mcm9tT2JqZWN0QXNzaWdubWVudE5vZGUob2JqZWN0QXNzaWdubWVudE5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgICAgbmFtZWRQYXJhbWV0ZXJzID0gTmFtZWRQYXJhbWV0ZXJzLmZyb21PYmplY3RBc3NpZ25tZW50Tm9kZShvYmplY3RBc3NpZ25tZW50Tm9kZSwgY29udGV4dCk7XG5cbiAgICAgIG9iamVjdEFzc2lnbm1lbnQgPSBuZXcgT2JqZWN0QXNzaWdtZW50KHN0cmluZywgdmFyaWFibGUsIG5hbWVkUGFyYW1ldGVycyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG9iamVjdEFzc2lnbm1lbnQ7XG4gIH1cbn0pO1xuIl0sIm5hbWVzIjpbIm9iamVjdEFzc2lnbm1lbnROb2RlUXVlcnkiLCJub2RlUXVlcnkiLCJkb21Bc3NpZ25lZCIsIk9iamVjdEFzc2lnbWVudCIsInN0cmluZyIsInZhcmlhYmxlIiwibmFtZWRQYXJhbWV0ZXJzIiwiZ2V0U3RyaW5nIiwiZ2V0VmFyaWFibGUiLCJnZXROYW1lZFBhcmFtZXRlcnMiLCJldmFsdWF0ZSIsImNvbnRleHQiLCJvYmplY3RBc3NpZ25tZW50U3RyaW5nIiwidHJhY2UiLCJ2YWx1ZSIsInZhbHVlVHlwZSIsImdldFR5cGUiLCJOT0RFX1RZUEUiLCJ2YWx1ZVN0cmluZyIsImFzU3RyaW5nIiwibWVzc2FnZSIsImV4Y2VwdGlvbiIsIkV4Y2VwdGlvbiIsImZyb21NZXNzYWdlIiwibm9kZVByb3BlcnRpZXMiLCJtYXRjaE5hbWVkUGFyYW1ldGVycyIsImZvckVhY2hOYW1lZFBhcmFtZXRlciIsIm5hbWVkUGFyYW1ldGVyIiwiZXZhbHVhdGVOYW1lZFBhcmFtZXRlciIsImRlYnVnIiwibmFtZWRQYXJhbWV0ZXJTdHJpbmciLCJuYW1lIiwiZ2V0TmFtZSIsIkNPTlRFTlRfUEFSQU1FVEVSX05BTUUiLCJldmFsdWF0ZUNvbnRlbnROYW1lZFBhcmFtZXRlciIsIlRFUk1JTkFMX1BBUkFNRVRFUl9OQU1FIiwiZXZhbHVhdGVUZXJtaW5hbE5hbWVkUGFyYW1ldGVyIiwiQ0hJTERfTk9ERVNfUEFSQU1FVEVSX05BTUUiLCJldmFsdWF0ZUNoaWxkTm9kZXNOYW1lZFBhcmFtZXRlciIsIlZhcmlhYmxlIiwiZG9tIiwiZnJvbU5hbWVkUGFyYW1ldGVyIiwiYXNzaWduIiwidHlwZSIsIlNUUklOR19UWVBFIiwibm9kZSIsImdldE5vZGUiLCJub2RlVGVybWluYWxOb2RlIiwiaXNUZXJtaW5hbE5vZGUiLCJWYWx1ZSIsInRlcm1pbmFsTm9kZSIsImNvbnRlbnQiLCJnZXRDb250ZW50IiwiZnJvbVN0cmluZyIsIkJPT0xFQU5fVFlQRSIsInRlcm1pbmFsIiwiYm9vbGVhbiIsImZyb21Cb29sZWFuIiwiTk9ERVNfVFlQRSIsIm5vZGVOb25UZXJtaW5hbE5vZGUiLCJpc05vblRlcm1pbmFsTm9kZSIsIm5vblRlcm1pbmFsTm9kZSIsImNoaWxkTm9kZXMiLCJnZXRDaGlsZE5vZGVzIiwibm9kZXMiLCJmcm9tTm9kZXMiLCJmcm9tU3RlcE5vZGUiLCJzdGVwTm9kZSIsIm9iamVjdEFzc2lnbm1lbnQiLCJvYmplY3RBc3NpZ25tZW50Tm9kZSIsIk5hbWVkUGFyYW1ldGVycyIsIm5vZGVBc1N0cmluZyIsImZyb21PYmplY3RBc3NpZ25tZW50Tm9kZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBYUE7OztlQUFBOzs7MkRBWGdCO2dFQUNNO3FFQUNLO3FCQUVEO3FCQUV1Qzs4QkFDMkI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTVGLElBQU1BLDRCQUE0QkMsSUFBQUEsZ0JBQVMsRUFBQztJQUU1QyxXQUFlQyxJQUFBQSxnQkFBVyxvQ0FBQzthQUFNQyxnQkFDbkJDLE1BQU0sRUFBRUMsUUFBUSxFQUFFQyxlQUFlO2dDQURkSDtRQUU3QixJQUFJLENBQUNDLE1BQU0sR0FBR0E7UUFDZCxJQUFJLENBQUNDLFFBQVEsR0FBR0E7UUFDaEIsSUFBSSxDQUFDQyxlQUFlLEdBQUdBOzs7O1lBR3pCQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNILE1BQU07WUFDcEI7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNILFFBQVE7WUFDdEI7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNILGVBQWU7WUFDN0I7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUEsU0FBU0MsT0FBTzs7Z0JBQ2QsSUFBTUMseUJBQXlCLElBQUksQ0FBQ1Is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