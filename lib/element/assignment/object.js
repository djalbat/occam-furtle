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
var _nodeProperties = /*#__PURE__*/ _interop_require_default(require("../../nodeProperties"));
var _stringLiteral = require("../../utilities/stringLiteral");
var _types = require("../../types");
var _term = require("../../utilities/term");
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
var _default = (0, _elements.define)((_ObjectAssigment = /*#__PURE__*/ function() {
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
                var term = this.variable.evaluate(context), termType = term.getType();
                if (termType !== _types.NODE_TYPE) {
                    var termString = term.getString(), message = "The '".concat(termString, "' term's '").concat(termType, "' type should be '").concat(_types.NODE_TYPE, "'."), exception = _exception.default.fromMessage(message);
                    throw exception;
                }
                _nodeProperties.default.matchNamedParameters(this.namedParameters, context);
                this.namedParameters.forEachNamedParameter(function(namedParameter) {
                    _this.evaluateNamedParameter(namedParameter, term, context);
                });
                context.debug("...evaluated the '".concat(objectAssignmentString, "' object assignment."));
            }
        },
        {
            key: "evaluateNamedParameter",
            value: function evaluateNamedParameter(namedParameter, term, context) {
                var termString = term.getString(), namedParameterString = namedParameter.getString();
                context.trace("Evaluating the '".concat(namedParameterString, "' named parameter against the '").concat(termString, "' term..."));
                var name = namedParameter.getName();
                switch(name){
                    case _parameterNames.CONTENT_PARAMETER_NAME:
                        {
                            term = this.evaluateContentNamedParameter(namedParameter, term, context);
                            break;
                        }
                    case _parameterNames.TERMINAL_PARAMETER_NAME:
                        {
                            term = this.evaluateTerminalNamedParameter(namedParameter, term, context);
                            break;
                        }
                    case _parameterNames.CHILD_NODES_PARAMETER_NAME:
                        {
                            term = this.evaluateChildNodesNamedParameter(namedParameter, term, context);
                            break;
                        }
                }
                var Variable = _elements.default.Variable, variable = Variable.fromNamedParameter(namedParameter, context);
                variable.assign(term, context);
                context.debug("...evaluated the '".concat(namedParameterString, "' parameter named against the '").concat(termString, "' term."));
            }
        },
        {
            key: "evaluateContentNamedParameter",
            value: function evaluateContentNamedParameter(namedParameter, term, context) {
                var type = namedParameter.getType();
                if (type !== _types.STRING_TYPE) {
                    var namedParameterString = namedParameter.getString(), message = "The '".concat(namedParameterString, "' named parameter's type should be '").concat(_types.STRING_TYPE, "'."), exception = _exception.default.fromMessage(message);
                    throw exception;
                }
                var node = term.getNode(), nodeTerminalNode = node.isTerminalNode();
                if (!nodeTerminalNode) {
                    var termString = term.getString(), message1 = "The '".concat(termString, "' term's node must be terminal."), exception1 = _exception.default.fromMessage(message1);
                    throw exception1;
                }
                var terminalNode = node, content = terminalNode.getContent(), string = content, stringLiteral = (0, _stringLiteral.stringLiteralFromString)(string);
                term = (0, _term.termFromStringLiteral)(stringLiteral, context);
                return term;
            }
        },
        {
            key: "evaluateTerminalNamedParameter",
            value: function evaluateTerminalNamedParameter(namedParameter, term, context) {
                var type = namedParameter.getType();
                if (type !== _types.BOOLEAN_TYPE) {
                    var namedParameterString = namedParameter.getString(), message = "The '".concat(namedParameterString, "' named parameter's type should be '").concat(_types.BOOLEAN_TYPE, "'."), exception = _exception.default.fromMessage(message);
                    throw exception;
                }
                var node = term.getNode(), nodeTerminalNode = node.isTerminalNode(), terminal = nodeTerminalNode; ///
                var boolean = terminal; ///
                term = (0, _term.termFromBoolean)(boolean, context); ///
                return term;
            }
        },
        {
            key: "evaluateChildNodesNamedParameter",
            value: function evaluateChildNodesNamedParameter(namedParameter, term, context) {
                var type = namedParameter.getType();
                if (type !== _types.NODES_TYPE) {
                    var namedParameterString = namedParameter.getString(), message = "The '".concat(namedParameterString, "' named parameter's type should be '").concat(_types.NODES_TYPE, "'."), exception = _exception.default.fromMessage(message);
                    throw exception;
                }
                var node = term.getNode(), nodeNonTerminalNode = node.isNonTerminalNode();
                if (!nodeNonTerminalNode) {
                    var termString = term.getString(), message1 = "The '".concat(termString, "' term's node must be non-terminal."), exception1 = _exception.default.fromMessage(message1);
                    throw exception1;
                }
                var nonTerminalNode = node, childNodes = nonTerminalNode.getChildNodes(), nodes = childNodes; ///
                term = (0, _term.termFromNodes)(nodes, context);
                return term;
            }
        }
    ]);
    return ObjectAssigment;
}(), _define_property(_ObjectAssigment, "name", "ObjectAssigment"), _ObjectAssigment));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L2Fzc2lnbm1lbnQvb2JqZWN0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgZWxlbWVudHMgZnJvbSBcIi4uLy4uL2VsZW1lbnRzXCI7XG5pbXBvcnQgRXhjZXB0aW9uIGZyb20gXCIuLi8uLi9leGNlcHRpb25cIjtcbmltcG9ydCBub2RlUHJvcGVydGllcyBmcm9tIFwiLi4vLi4vbm9kZVByb3BlcnRpZXNcIjtcblxuaW1wb3J0IHsgZGVmaW5lIH0gZnJvbSBcIi4uLy4uL2VsZW1lbnRzXCI7XG5pbXBvcnQgeyBzdHJpbmdMaXRlcmFsRnJvbVN0cmluZyB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvc3RyaW5nTGl0ZXJhbFwiO1xuaW1wb3J0IHsgTk9ERV9UWVBFLCBOT0RFU19UWVBFLCBTVFJJTkdfVFlQRSwgQk9PTEVBTl9UWVBFIH0gZnJvbSBcIi4uLy4uL3R5cGVzXCI7XG5pbXBvcnQgeyB0ZXJtRnJvbU5vZGVzLCB0ZXJtRnJvbUJvb2xlYW4sIHRlcm1Gcm9tU3RyaW5nTGl0ZXJhbCB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvdGVybVwiO1xuaW1wb3J0IHsgQ09OVEVOVF9QQVJBTUVURVJfTkFNRSwgVEVSTUlOQUxfUEFSQU1FVEVSX05BTUUsIENISUxEX05PREVTX1BBUkFNRVRFUl9OQU1FIH0gZnJvbSBcIi4uLy4uL3BhcmFtZXRlck5hbWVzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZShjbGFzcyBPYmplY3RBc3NpZ21lbnQge1xuICBjb25zdHJ1Y3RvcihzdHJpbmcsIHZhcmlhYmxlLCBuYW1lZFBhcmFtZXRlcnMpIHtcbiAgICB0aGlzLnN0cmluZyA9IHN0cmluZztcbiAgICB0aGlzLnZhcmlhYmxlID0gdmFyaWFibGU7XG4gICAgdGhpcy5uYW1lZFBhcmFtZXRlcnMgPSBuYW1lZFBhcmFtZXRlcnM7XG4gIH1cblxuICBnZXRTdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RyaW5nO1xuICB9XG5cbiAgZ2V0VmFyaWFibGUoKSB7XG4gICAgcmV0dXJuIHRoaXMudmFyaWFibGU7XG4gIH1cblxuICBnZXROYW1lZFBhcmFtZXRlcnMoKSB7XG4gICAgcmV0dXJuIHRoaXMubmFtZWRQYXJhbWV0ZXJzO1xuICB9XG5cbiAgZXZhbHVhdGUoY29udGV4dCkge1xuICAgIGNvbnN0IG9iamVjdEFzc2lnbm1lbnRTdHJpbmcgPSB0aGlzLnN0cmluZzsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBFdmFsdWF0aW5nIHRoZSAnJHtvYmplY3RBc3NpZ25tZW50U3RyaW5nfScgb2JqZWN0IGFzc2lnbm1lbnQuLi5gKTtcblxuICAgIGNvbnN0IHRlcm0gPSB0aGlzLnZhcmlhYmxlLmV2YWx1YXRlKGNvbnRleHQpLFxuICAgICAgICAgIHRlcm1UeXBlID0gdGVybS5nZXRUeXBlKCk7XG5cbiAgICBpZiAodGVybVR5cGUgIT09IE5PREVfVFlQRSkge1xuICAgICAgY29uc3QgdGVybVN0cmluZyA9IHRlcm0uZ2V0U3RyaW5nKCksXG4gICAgICAgICAgICBtZXNzYWdlID0gYFRoZSAnJHt0ZXJtU3RyaW5nfScgdGVybSdzICcke3Rlcm1UeXBlfScgdHlwZSBzaG91bGQgYmUgJyR7Tk9ERV9UWVBFfScuYCxcbiAgICAgICAgICAgIGV4Y2VwdGlvbiA9IEV4Y2VwdGlvbi5mcm9tTWVzc2FnZShtZXNzYWdlKTtcblxuICAgICAgdGhyb3cgZXhjZXB0aW9uO1xuICAgIH1cblxuICAgIG5vZGVQcm9wZXJ0aWVzLm1hdGNoTmFtZWRQYXJhbWV0ZXJzKHRoaXMubmFtZWRQYXJhbWV0ZXJzLCBjb250ZXh0KTtcblxuICAgIHRoaXMubmFtZWRQYXJhbWV0ZXJzLmZvckVhY2hOYW1lZFBhcmFtZXRlcigobmFtZWRQYXJhbWV0ZXIpID0+IHtcbiAgICAgIHRoaXMuZXZhbHVhdGVOYW1lZFBhcmFtZXRlcihuYW1lZFBhcmFtZXRlciwgdGVybSwgY29udGV4dCk7XG4gICAgfSk7XG5cbiAgICBjb250ZXh0LmRlYnVnKGAuLi5ldmFsdWF0ZWQgdGhlICcke29iamVjdEFzc2lnbm1lbnRTdHJpbmd9JyBvYmplY3QgYXNzaWdubWVudC5gKTtcbiAgfVxuXG4gIGV2YWx1YXRlTmFtZWRQYXJhbWV0ZXIobmFtZWRQYXJhbWV0ZXIsIHRlcm0sIGNvbnRleHQpIHtcbiAgICBjb25zdCB0ZXJtU3RyaW5nID0gdGVybS5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBuYW1lZFBhcmFtZXRlclN0cmluZyA9IG5hbWVkUGFyYW1ldGVyLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgRXZhbHVhdGluZyB0aGUgJyR7bmFtZWRQYXJhbWV0ZXJTdHJpbmd9JyBuYW1lZCBwYXJhbWV0ZXIgYWdhaW5zdCB0aGUgJyR7dGVybVN0cmluZ30nIHRlcm0uLi5gKTtcblxuICAgIGNvbnN0IG5hbWUgPSBuYW1lZFBhcmFtZXRlci5nZXROYW1lKCk7XG5cbiAgICBzd2l0Y2ggKG5hbWUpIHtcbiAgICAgIGNhc2UgQ09OVEVOVF9QQVJBTUVURVJfTkFNRToge1xuICAgICAgICB0ZXJtID0gdGhpcy5ldmFsdWF0ZUNvbnRlbnROYW1lZFBhcmFtZXRlcihuYW1lZFBhcmFtZXRlciwgdGVybSwgY29udGV4dCk7XG5cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIGNhc2UgVEVSTUlOQUxfUEFSQU1FVEVSX05BTUU6IHtcbiAgICAgICAgdGVybSA9IHRoaXMuZXZhbHVhdGVUZXJtaW5hbE5hbWVkUGFyYW1ldGVyKG5hbWVkUGFyYW1ldGVyLCB0ZXJtLCBjb250ZXh0KTtcblxuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgY2FzZSBDSElMRF9OT0RFU19QQVJBTUVURVJfTkFNRToge1xuICAgICAgICB0ZXJtID0gdGhpcy5ldmFsdWF0ZUNoaWxkTm9kZXNOYW1lZFBhcmFtZXRlcihuYW1lZFBhcmFtZXRlciwgdGVybSwgY29udGV4dCk7XG5cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgeyBWYXJpYWJsZSB9ID0gZWxlbWVudHMsXG4gICAgICAgICAgdmFyaWFibGUgPSBWYXJpYWJsZS5mcm9tTmFtZWRQYXJhbWV0ZXIobmFtZWRQYXJhbWV0ZXIsIGNvbnRleHQpO1xuXG4gICAgdmFyaWFibGUuYXNzaWduKHRlcm0sIGNvbnRleHQpO1xuXG4gICAgY29udGV4dC5kZWJ1ZyhgLi4uZXZhbHVhdGVkIHRoZSAnJHtuYW1lZFBhcmFtZXRlclN0cmluZ30nIHBhcmFtZXRlciBuYW1lZCBhZ2FpbnN0IHRoZSAnJHt0ZXJtU3RyaW5nfScgdGVybS5gKTtcbiAgfVxuXG4gIGV2YWx1YXRlQ29udGVudE5hbWVkUGFyYW1ldGVyKG5hbWVkUGFyYW1ldGVyLCB0ZXJtLCBjb250ZXh0KSB7XG4gICAgY29uc3QgdHlwZSA9IG5hbWVkUGFyYW1ldGVyLmdldFR5cGUoKTtcblxuICAgIGlmICh0eXBlICE9PSBTVFJJTkdfVFlQRSkge1xuICAgICAgY29uc3QgbmFtZWRQYXJhbWV0ZXJTdHJpbmcgPSBuYW1lZFBhcmFtZXRlci5nZXRTdHJpbmcoKSxcbiAgICAgICAgICAgIG1lc3NhZ2UgPSBgVGhlICcke25hbWVkUGFyYW1ldGVyU3RyaW5nfScgbmFtZWQgcGFyYW1ldGVyJ3MgdHlwZSBzaG91bGQgYmUgJyR7U1RSSU5HX1RZUEV9Jy5gLFxuICAgICAgICAgICAgZXhjZXB0aW9uID0gRXhjZXB0aW9uLmZyb21NZXNzYWdlKG1lc3NhZ2UpO1xuXG4gICAgICB0aHJvdyBleGNlcHRpb247XG4gICAgfVxuXG4gICAgY29uc3Qgbm9kZSA9IHRlcm0uZ2V0Tm9kZSgpLFxuICAgICAgICAgIG5vZGVUZXJtaW5hbE5vZGUgPSBub2RlLmlzVGVybWluYWxOb2RlKCk7XG5cbiAgICBpZiAoIW5vZGVUZXJtaW5hbE5vZGUpIHtcbiAgICAgIGNvbnN0IHRlcm1TdHJpbmcgPSB0ZXJtLmdldFN0cmluZygpLFxuICAgICAgICAgICAgbWVzc2FnZSA9IGBUaGUgJyR7dGVybVN0cmluZ30nIHRlcm0ncyBub2RlIG11c3QgYmUgdGVybWluYWwuYCxcbiAgICAgICAgICAgIGV4Y2VwdGlvbiA9IEV4Y2VwdGlvbi5mcm9tTWVzc2FnZShtZXNzYWdlKTtcblxuICAgICAgdGhyb3cgZXhjZXB0aW9uO1xuICAgIH1cblxuICAgIGNvbnN0IHRlcm1pbmFsTm9kZSA9IG5vZGUsICAvLy9cbiAgICAgICAgICBjb250ZW50ID0gdGVybWluYWxOb2RlLmdldENvbnRlbnQoKSxcbiAgICAgICAgICBzdHJpbmcgPSBjb250ZW50LCAgLy8vXG4gICAgICAgICAgc3RyaW5nTGl0ZXJhbCA9IHN0cmluZ0xpdGVyYWxGcm9tU3RyaW5nKHN0cmluZyk7XG5cbiAgICB0ZXJtID0gdGVybUZyb21TdHJpbmdMaXRlcmFsKHN0cmluZ0xpdGVyYWwsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIHRlcm07XG4gIH1cblxuICBldmFsdWF0ZVRlcm1pbmFsTmFtZWRQYXJhbWV0ZXIobmFtZWRQYXJhbWV0ZXIsIHRlcm0sIGNvbnRleHQpIHtcbiAgICBjb25zdCB0eXBlID0gbmFtZWRQYXJhbWV0ZXIuZ2V0VHlwZSgpO1xuXG4gICAgaWYgKHR5cGUgIT09IEJPT0xFQU5fVFlQRSkge1xuICAgICAgY29uc3QgbmFtZWRQYXJhbWV0ZXJTdHJpbmcgPSBuYW1lZFBhcmFtZXRlci5nZXRTdHJpbmcoKSxcbiAgICAgICAgICAgIG1lc3NhZ2UgPSBgVGhlICcke25hbWVkUGFyYW1ldGVyU3RyaW5nfScgbmFtZWQgcGFyYW1ldGVyJ3MgdHlwZSBzaG91bGQgYmUgJyR7Qk9PTEVBTl9UWVBFfScuYCxcbiAgICAgICAgICAgIGV4Y2VwdGlvbiA9IEV4Y2VwdGlvbi5mcm9tTWVzc2FnZShtZXNzYWdlKTtcblxuICAgICAgdGhyb3cgZXhjZXB0aW9uO1xuICAgIH1cblxuICAgIGNvbnN0IG5vZGUgPSB0ZXJtLmdldE5vZGUoKSxcbiAgICAgICAgICBub2RlVGVybWluYWxOb2RlID0gbm9kZS5pc1Rlcm1pbmFsTm9kZSgpLFxuICAgICAgICAgIHRlcm1pbmFsID0gbm9kZVRlcm1pbmFsTm9kZTsgIC8vL1xuXG4gICAgY29uc3QgYm9vbGVhbiA9IHRlcm1pbmFsOyAvLy9cblxuICAgIHRlcm0gPSB0ZXJtRnJvbUJvb2xlYW4oYm9vbGVhbiwgY29udGV4dCk7ICAvLy9cblxuICAgIHJldHVybiB0ZXJtO1xuICB9XG5cbiAgZXZhbHVhdGVDaGlsZE5vZGVzTmFtZWRQYXJhbWV0ZXIobmFtZWRQYXJhbWV0ZXIsIHRlcm0sIGNvbnRleHQpIHtcbiAgICBjb25zdCB0eXBlID0gbmFtZWRQYXJhbWV0ZXIuZ2V0VHlwZSgpO1xuXG4gICAgaWYgKHR5cGUgIT09IE5PREVTX1RZUEUpIHtcbiAgICAgIGNvbnN0IG5hbWVkUGFyYW1ldGVyU3RyaW5nID0gbmFtZWRQYXJhbWV0ZXIuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgICBtZXNzYWdlID0gYFRoZSAnJHtuYW1lZFBhcmFtZXRlclN0cmluZ30nIG5hbWVkIHBhcmFtZXRlcidzIHR5cGUgc2hvdWxkIGJlICcke05PREVTX1RZUEV9Jy5gLFxuICAgICAgICAgICAgZXhjZXB0aW9uID0gRXhjZXB0aW9uLmZyb21NZXNzYWdlKG1lc3NhZ2UpO1xuXG4gICAgICB0aHJvdyBleGNlcHRpb247XG4gICAgfVxuXG4gICAgY29uc3Qgbm9kZSA9IHRlcm0uZ2V0Tm9kZSgpLFxuICAgICAgICAgIG5vZGVOb25UZXJtaW5hbE5vZGUgPSBub2RlLmlzTm9uVGVybWluYWxOb2RlKCk7XG5cbiAgICBpZiAoIW5vZGVOb25UZXJtaW5hbE5vZGUpIHtcbiAgICAgIGNvbnN0IHRlcm1TdHJpbmcgPSB0ZXJtLmdldFN0cmluZygpLFxuICAgICAgICAgICAgbWVzc2FnZSA9IGBUaGUgJyR7dGVybVN0cmluZ30nIHRlcm0ncyBub2RlIG11c3QgYmUgbm9uLXRlcm1pbmFsLmAsXG4gICAgICAgICAgICBleGNlcHRpb24gPSBFeGNlcHRpb24uZnJvbU1lc3NhZ2UobWVzc2FnZSk7XG5cbiAgICAgIHRocm93IGV4Y2VwdGlvbjtcbiAgICB9XG5cbiAgICBjb25zdCBub25UZXJtaW5hbE5vZGUgPSBub2RlLCAgLy8vXG4gICAgICAgICAgY2hpbGROb2RlcyA9IG5vblRlcm1pbmFsTm9kZS5nZXRDaGlsZE5vZGVzKCksXG4gICAgICAgICAgbm9kZXMgPSBjaGlsZE5vZGVzOyAgLy8vXG5cbiAgICB0ZXJtID0gdGVybUZyb21Ob2Rlcyhub2RlcywgY29udGV4dCk7XG5cbiAgICByZXR1cm4gdGVybTtcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJPYmplY3RBc3NpZ21lbnRcIjtcbn0pO1xuIl0sIm5hbWVzIjpbImRlZmluZSIsIk9iamVjdEFzc2lnbWVudCIsInN0cmluZyIsInZhcmlhYmxlIiwibmFtZWRQYXJhbWV0ZXJzIiwiZ2V0U3RyaW5nIiwiZ2V0VmFyaWFibGUiLCJnZXROYW1lZFBhcmFtZXRlcnMiLCJldmFsdWF0ZSIsImNvbnRleHQiLCJvYmplY3RBc3NpZ25tZW50U3RyaW5nIiwidHJhY2UiLCJ0ZXJtIiwidGVybVR5cGUiLCJnZXRUeXBlIiwiTk9ERV9UWVBFIiwidGVybVN0cmluZyIsIm1lc3NhZ2UiLCJleGNlcHRpb24iLCJFeGNlcHRpb24iLCJmcm9tTWVzc2FnZSIsIm5vZGVQcm9wZXJ0aWVzIiwibWF0Y2hOYW1lZFBhcmFtZXRlcnMiLCJmb3JFYWNoTmFtZWRQYXJhbWV0ZXIiLCJuYW1lZFBhcmFtZXRlciIsImV2YWx1YXRlTmFtZWRQYXJhbWV0ZXIiLCJkZWJ1ZyIsIm5hbWVkUGFyYW1ldGVyU3RyaW5nIiwibmFtZSIsImdldE5hbWUiLCJDT05URU5UX1BBUkFNRVRFUl9OQU1FIiwiZXZhbHVhdGVDb250ZW50TmFtZWRQYXJhbWV0ZXIiLCJURVJNSU5BTF9QQVJBTUVURVJfTkFNRSIsImV2YWx1YXRlVGVybWluYWxOYW1lZFBhcmFtZXRlciIsIkNISUxEX05PREVTX1BBUkFNRVRFUl9OQU1FIiwiZXZhbHVhdGVDaGlsZE5vZGVzTmFtZWRQYXJhbWV0ZXIiLCJWYXJpYWJsZSIsImVsZW1lbnRzIiwiZnJvbU5hbWVkUGFyYW1ldGVyIiwiYXNzaWduIiwidHlwZSIsIlNUUklOR19UWVBFIiwibm9kZSIsImdldE5vZGUiLCJub2RlVGVybWluYWxOb2RlIiwiaXNUZXJtaW5hbE5vZGUiLCJ0ZXJtaW5hbE5vZGUiLCJjb250ZW50IiwiZ2V0Q29udGVudCIsInN0cmluZ0xpdGVyYWwiLCJzdHJpbmdMaXRlcmFsRnJvbVN0cmluZyIsInRlcm1Gcm9tU3RyaW5nTGl0ZXJhbCIsIkJPT0xFQU5fVFlQRSIsInRlcm1pbmFsIiwiYm9vbGVhbiIsInRlcm1Gcm9tQm9vbGVhbiIsIk5PREVTX1RZUEUiLCJub2RlTm9uVGVybWluYWxOb2RlIiwiaXNOb25UZXJtaW5hbE5vZGUiLCJub25UZXJtaW5hbE5vZGUiLCJjaGlsZE5vZGVzIiwiZ2V0Q2hpbGROb2RlcyIsIm5vZGVzIiwidGVybUZyb21Ob2RlcyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBWUE7OztlQUFBOzs7Z0VBVnFCO2dFQUNDO3FFQUNLOzZCQUdhO3FCQUN5QjtvQkFDSzs4QkFDc0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRTVGLFdBQWVBLElBQUFBLGdCQUFNLG9DQUFDO2FBQU1DLGdCQUNkQyxNQUFNLEVBQUVDLFFBQVEsRUFBRUMsZUFBZTtnQ0FEbkJIO1FBRXhCLElBQUksQ0FBQ0MsTUFBTSxHQUFHQTtRQUNkLElBQUksQ0FBQ0MsUUFBUSxHQUFHQTtRQUNoQixJQUFJLENBQUNDLGVBQWUsR0FBR0E7Ozs7WUFHekJDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0gsTUFBTTtZQUNwQjs7O1lBRUFJLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0gsUUFBUTtZQUN0Qjs7O1lBRUFJLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0gsZUFBZTtZQUM3Qjs7O1lBRUFJLEtBQUFBO21CQUFBQSxT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