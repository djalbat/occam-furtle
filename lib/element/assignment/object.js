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
var _element = /*#__PURE__*/ _interop_require_default(require("../../element"));
var _elements = /*#__PURE__*/ _interop_require_wildcard(require("../../elements"));
var _exception = /*#__PURE__*/ _interop_require_default(require("../../exception"));
var _nodeProperties = /*#__PURE__*/ _interop_require_default(require("../../nodeProperties"));
var _stringLiteral = require("../../utilities/stringLiteral");
var _types = require("../../types");
var _term = require("../../utilities/term");
var _parameterNames = require("../../parameterNames");
function _assert_this_initialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
}
function _call_super(_this, derived, args) {
    derived = _get_prototype_of(derived);
    return _possible_constructor_return(_this, _is_native_reflect_construct() ? Reflect.construct(derived, args || [], _get_prototype_of(_this).constructor) : derived.apply(_this, args));
}
function _class_call_check(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _construct(Parent, args, Class) {
    if (_is_native_reflect_construct()) {
        _construct = Reflect.construct;
    } else {
        _construct = function construct(Parent, args, Class) {
            var a = [
                null
            ];
            a.push.apply(a, args);
            var Constructor = Function.bind.apply(Parent, a);
            var instance = new Constructor();
            if (Class) _set_prototype_of(instance, Class.prototype);
            return instance;
        };
    }
    return _construct.apply(null, arguments);
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
function _get_prototype_of(o) {
    _get_prototype_of = Object.setPrototypeOf ? Object.getPrototypeOf : function getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _get_prototype_of(o);
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _set_prototype_of(subClass, superClass);
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
function _is_native_function(fn) {
    return Function.toString.call(fn).indexOf("[native code]") !== -1;
}
function _possible_constructor_return(self, call) {
    if (call && (_type_of(call) === "object" || typeof call === "function")) {
        return call;
    }
    return _assert_this_initialized(self);
}
function _set_prototype_of(o, p) {
    _set_prototype_of = Object.setPrototypeOf || function setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _set_prototype_of(o, p);
}
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
function _wrap_native_super(Class) {
    var _cache = typeof Map === "function" ? new Map() : undefined;
    _wrap_native_super = function wrapNativeSuper(Class) {
        if (Class === null || !_is_native_function(Class)) return Class;
        if (typeof Class !== "function") {
            throw new TypeError("Super expression must either be null or a function");
        }
        if (typeof _cache !== "undefined") {
            if (_cache.has(Class)) return _cache.get(Class);
            _cache.set(Class, Wrapper);
        }
        function Wrapper() {
            return _construct(Class, arguments, _get_prototype_of(this).constructor);
        }
        Wrapper.prototype = Object.create(Class.prototype, {
            constructor: {
                value: Wrapper,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        return _set_prototype_of(Wrapper, Class);
    };
    return _wrap_native_super(Class);
}
function _is_native_reflect_construct() {
    try {
        var result = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
    } catch (_) {}
    return (_is_native_reflect_construct = function() {
        return !!result;
    })();
}
var _ObjectAssigment;
var _default = (0, _elements.define)((_ObjectAssigment = /*#__PURE__*/ function(Element) {
    _inherits(ObjectAssigment, Element);
    function ObjectAssigment(context, string, node, variable, namedParameters) {
        _class_call_check(this, ObjectAssigment);
        var _this;
        _this = _call_super(this, ObjectAssigment, [
            context,
            string,
            node
        ]);
        _this.variable = variable;
        _this.namedParameters = namedParameters;
        return _this;
    }
    _create_class(ObjectAssigment, [
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
                var objectAssignmentString = this.getString(); ///
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
                var type = namedParameter.getType(), namedParameterString = namedParameter.getString();
                context.trace("Evaluating the content '".concat(namedParameterString, "' named parameter..."));
                if (type !== _types.STRING_TYPE) {
                    var namedParameterString1 = namedParameter.getString(), message = "The '".concat(namedParameterString1, "' named parameter's type should be '").concat(_types.STRING_TYPE, "'."), exception = _exception.default.fromMessage(message);
                    throw exception;
                }
                var primitiveValue = term.getPrimitiveValue(), node = primitiveValue, nodeTerminalNode = node.isTerminalNode();
                if (!nodeTerminalNode) {
                    var termString = term.getString(), message1 = "The '".concat(termString, "' term's node must be terminal."), exception1 = _exception.default.fromMessage(message1);
                    throw exception1;
                }
                var terminalNode = node, content = terminalNode.getContent(), string = content, stringLiteral = (0, _stringLiteral.stringLiteralFromString)(string);
                term = (0, _term.termFromStringLiteral)(stringLiteral, context);
                var termSttring = term.getString();
                context.debug("...evaluated the content '".concat(namedParameterString, "' named parameter as '").concat(termSttring, "'."));
                return term;
            }
        },
        {
            key: "evaluateTerminalNamedParameter",
            value: function evaluateTerminalNamedParameter(namedParameter, term, context) {
                var type = namedParameter.getType(), namedParameterString = namedParameter.getString();
                context.trace("Evaluating the terminal '".concat(namedParameterString, "' named parameter..."));
                if (type !== _types.BOOLEAN_TYPE) {
                    var namedParameterString1 = namedParameter.getString(), message = "The '".concat(namedParameterString1, "' named parameter's type should be '").concat(_types.BOOLEAN_TYPE, "'."), exception = _exception.default.fromMessage(message);
                    throw exception;
                }
                var primitiveValue = term.getPrimitiveValue(), node = primitiveValue, nodeTerminalNode = node.isTerminalNode(), terminal = nodeTerminalNode; ///
                var boolean = terminal; ///
                term = (0, _term.termFromBoolean)(boolean, context); ///
                var termSttring = term.getString();
                context.debug("...evaluated the terminal '".concat(namedParameterString, "' named parameter as '").concat(termSttring, "'."));
                return term;
            }
        },
        {
            key: "evaluateChildNodesNamedParameter",
            value: function evaluateChildNodesNamedParameter(namedParameter, term, context) {
                var type = namedParameter.getType(), namedParameterString = namedParameter.getString();
                context.trace("Evaluating the child nodes '".concat(namedParameterString, "' named parameter..."));
                if (type !== _types.NODES_TYPE) {
                    var namedParameterString1 = namedParameter.getString(), message = "The '".concat(namedParameterString1, "' named parameter's type should be '").concat(_types.NODES_TYPE, "'."), exception = _exception.default.fromMessage(message);
                    throw exception;
                }
                var primitiveValue = term.getPrimitiveValue(), node = primitiveValue, nodeNonTerminalNode = node.isNonTerminalNode();
                if (!nodeNonTerminalNode) {
                    var termString = term.getString(), message1 = "The '".concat(termString, "' term's node must be non-terminal."), exception1 = _exception.default.fromMessage(message1);
                    throw exception1;
                }
                var nonTerminalNode = node, childNodes = nonTerminalNode.getChildNodes(), nodes = childNodes; ///
                term = (0, _term.termFromNodes)(nodes, context);
                var termSttring = term.getString();
                context.debug("...evaluated the childNodes '".concat(namedParameterString, "' named parameter as '").concat(termSttring, "'."));
                return term;
            }
        }
    ]);
    return ObjectAssigment;
}(_wrap_native_super(_element.default)), _define_property(_ObjectAssigment, "name", "ObjectAssigment"), _ObjectAssigment));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L2Fzc2lnbm1lbnQvb2JqZWN0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgRWxlbWVudCBmcm9tIFwiLi4vLi4vZWxlbWVudFwiO1xuaW1wb3J0IGVsZW1lbnRzIGZyb20gXCIuLi8uLi9lbGVtZW50c1wiO1xuaW1wb3J0IEV4Y2VwdGlvbiBmcm9tIFwiLi4vLi4vZXhjZXB0aW9uXCI7XG5pbXBvcnQgbm9kZVByb3BlcnRpZXMgZnJvbSBcIi4uLy4uL25vZGVQcm9wZXJ0aWVzXCI7XG5cbmltcG9ydCB7IGRlZmluZSB9IGZyb20gXCIuLi8uLi9lbGVtZW50c1wiO1xuaW1wb3J0IHsgc3RyaW5nTGl0ZXJhbEZyb21TdHJpbmcgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL3N0cmluZ0xpdGVyYWxcIjtcbmltcG9ydCB7IE5PREVfVFlQRSwgTk9ERVNfVFlQRSwgU1RSSU5HX1RZUEUsIEJPT0xFQU5fVFlQRSB9IGZyb20gXCIuLi8uLi90eXBlc1wiO1xuaW1wb3J0IHsgdGVybUZyb21Ob2RlcywgdGVybUZyb21Cb29sZWFuLCB0ZXJtRnJvbVN0cmluZ0xpdGVyYWwgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL3Rlcm1cIjtcbmltcG9ydCB7IENPTlRFTlRfUEFSQU1FVEVSX05BTUUsIFRFUk1JTkFMX1BBUkFNRVRFUl9OQU1FLCBDSElMRF9OT0RFU19QQVJBTUVURVJfTkFNRSB9IGZyb20gXCIuLi8uLi9wYXJhbWV0ZXJOYW1lc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmUoY2xhc3MgT2JqZWN0QXNzaWdtZW50IGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKGNvbnRleHQsIHN0cmluZywgbm9kZSwgdmFyaWFibGUsIG5hbWVkUGFyYW1ldGVycykge1xuICAgIHN1cGVyKGNvbnRleHQsIHN0cmluZywgbm9kZSlcblxuICAgIHRoaXMudmFyaWFibGUgPSB2YXJpYWJsZTtcbiAgICB0aGlzLm5hbWVkUGFyYW1ldGVycyA9IG5hbWVkUGFyYW1ldGVycztcbiAgfVxuXG4gIGdldFZhcmlhYmxlKCkge1xuICAgIHJldHVybiB0aGlzLnZhcmlhYmxlO1xuICB9XG5cbiAgZ2V0TmFtZWRQYXJhbWV0ZXJzKCkge1xuICAgIHJldHVybiB0aGlzLm5hbWVkUGFyYW1ldGVycztcbiAgfVxuXG4gIGV2YWx1YXRlKGNvbnRleHQpIHtcbiAgICBjb25zdCBvYmplY3RBc3NpZ25tZW50U3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBFdmFsdWF0aW5nIHRoZSAnJHtvYmplY3RBc3NpZ25tZW50U3RyaW5nfScgb2JqZWN0IGFzc2lnbm1lbnQuLi5gKTtcblxuICAgIGNvbnN0IHRlcm0gPSB0aGlzLnZhcmlhYmxlLmV2YWx1YXRlKGNvbnRleHQpLFxuICAgICAgICAgIHRlcm1UeXBlID0gdGVybS5nZXRUeXBlKCk7XG5cbiAgICBpZiAodGVybVR5cGUgIT09IE5PREVfVFlQRSkge1xuICAgICAgY29uc3QgdGVybVN0cmluZyA9IHRlcm0uZ2V0U3RyaW5nKCksXG4gICAgICAgICAgICBtZXNzYWdlID0gYFRoZSAnJHt0ZXJtU3RyaW5nfScgdGVybSdzICcke3Rlcm1UeXBlfScgdHlwZSBzaG91bGQgYmUgJyR7Tk9ERV9UWVBFfScuYCxcbiAgICAgICAgICAgIGV4Y2VwdGlvbiA9IEV4Y2VwdGlvbi5mcm9tTWVzc2FnZShtZXNzYWdlKTtcblxuICAgICAgdGhyb3cgZXhjZXB0aW9uO1xuICAgIH1cblxuICAgIG5vZGVQcm9wZXJ0aWVzLm1hdGNoTmFtZWRQYXJhbWV0ZXJzKHRoaXMubmFtZWRQYXJhbWV0ZXJzLCBjb250ZXh0KTtcblxuICAgIHRoaXMubmFtZWRQYXJhbWV0ZXJzLmZvckVhY2hOYW1lZFBhcmFtZXRlcigobmFtZWRQYXJhbWV0ZXIpID0+IHtcbiAgICAgIHRoaXMuZXZhbHVhdGVOYW1lZFBhcmFtZXRlcihuYW1lZFBhcmFtZXRlciwgdGVybSwgY29udGV4dCk7XG4gICAgfSk7XG5cbiAgICBjb250ZXh0LmRlYnVnKGAuLi5ldmFsdWF0ZWQgdGhlICcke29iamVjdEFzc2lnbm1lbnRTdHJpbmd9JyBvYmplY3QgYXNzaWdubWVudC5gKTtcbiAgfVxuXG4gIGV2YWx1YXRlTmFtZWRQYXJhbWV0ZXIobmFtZWRQYXJhbWV0ZXIsIHRlcm0sIGNvbnRleHQpIHtcbiAgICBjb25zdCB0ZXJtU3RyaW5nID0gdGVybS5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBuYW1lZFBhcmFtZXRlclN0cmluZyA9IG5hbWVkUGFyYW1ldGVyLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgRXZhbHVhdGluZyB0aGUgJyR7bmFtZWRQYXJhbWV0ZXJTdHJpbmd9JyBuYW1lZCBwYXJhbWV0ZXIgYWdhaW5zdCB0aGUgJyR7dGVybVN0cmluZ30nIHRlcm0uLi5gKTtcblxuICAgIGNvbnN0IG5hbWUgPSBuYW1lZFBhcmFtZXRlci5nZXROYW1lKCk7XG5cbiAgICBzd2l0Y2ggKG5hbWUpIHtcbiAgICAgIGNhc2UgQ09OVEVOVF9QQVJBTUVURVJfTkFNRToge1xuICAgICAgICB0ZXJtID0gdGhpcy5ldmFsdWF0ZUNvbnRlbnROYW1lZFBhcmFtZXRlcihuYW1lZFBhcmFtZXRlciwgdGVybSwgY29udGV4dCk7XG5cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIGNhc2UgVEVSTUlOQUxfUEFSQU1FVEVSX05BTUU6IHtcbiAgICAgICAgdGVybSA9IHRoaXMuZXZhbHVhdGVUZXJtaW5hbE5hbWVkUGFyYW1ldGVyKG5hbWVkUGFyYW1ldGVyLCB0ZXJtLCBjb250ZXh0KTtcblxuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgY2FzZSBDSElMRF9OT0RFU19QQVJBTUVURVJfTkFNRToge1xuICAgICAgICB0ZXJtID0gdGhpcy5ldmFsdWF0ZUNoaWxkTm9kZXNOYW1lZFBhcmFtZXRlcihuYW1lZFBhcmFtZXRlciwgdGVybSwgY29udGV4dCk7XG5cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgeyBWYXJpYWJsZSB9ID0gZWxlbWVudHMsXG4gICAgICAgICAgdmFyaWFibGUgPSBWYXJpYWJsZS5mcm9tTmFtZWRQYXJhbWV0ZXIobmFtZWRQYXJhbWV0ZXIsIGNvbnRleHQpO1xuXG4gICAgdmFyaWFibGUuYXNzaWduKHRlcm0sIGNvbnRleHQpO1xuXG4gICAgY29udGV4dC5kZWJ1ZyhgLi4uZXZhbHVhdGVkIHRoZSAnJHtuYW1lZFBhcmFtZXRlclN0cmluZ30nIHBhcmFtZXRlciBuYW1lZCBhZ2FpbnN0IHRoZSAnJHt0ZXJtU3RyaW5nfScgdGVybS5gKTtcbiAgfVxuXG4gIGV2YWx1YXRlQ29udGVudE5hbWVkUGFyYW1ldGVyKG5hbWVkUGFyYW1ldGVyLCB0ZXJtLCBjb250ZXh0KSB7XG4gICAgY29uc3QgdHlwZSA9IG5hbWVkUGFyYW1ldGVyLmdldFR5cGUoKSxcbiAgICAgICAgICBuYW1lZFBhcmFtZXRlclN0cmluZyA9IG5hbWVkUGFyYW1ldGVyLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgRXZhbHVhdGluZyB0aGUgY29udGVudCAnJHtuYW1lZFBhcmFtZXRlclN0cmluZ30nIG5hbWVkIHBhcmFtZXRlci4uLmApO1xuXG4gICAgaWYgKHR5cGUgIT09IFNUUklOR19UWVBFKSB7XG4gICAgICBjb25zdCBuYW1lZFBhcmFtZXRlclN0cmluZyA9IG5hbWVkUGFyYW1ldGVyLmdldFN0cmluZygpLFxuICAgICAgICAgICAgbWVzc2FnZSA9IGBUaGUgJyR7bmFtZWRQYXJhbWV0ZXJTdHJpbmd9JyBuYW1lZCBwYXJhbWV0ZXIncyB0eXBlIHNob3VsZCBiZSAnJHtTVFJJTkdfVFlQRX0nLmAsXG4gICAgICAgICAgICBleGNlcHRpb24gPSBFeGNlcHRpb24uZnJvbU1lc3NhZ2UobWVzc2FnZSk7XG5cbiAgICAgIHRocm93IGV4Y2VwdGlvbjtcbiAgICB9XG5cbiAgICBjb25zdCBwcmltaXRpdmVWYWx1ZSA9IHRlcm0uZ2V0UHJpbWl0aXZlVmFsdWUoKSxcbiAgICAgICAgICBub2RlID0gcHJpbWl0aXZlVmFsdWUsICAvLy9cbiAgICAgICAgICBub2RlVGVybWluYWxOb2RlID0gbm9kZS5pc1Rlcm1pbmFsTm9kZSgpO1xuXG4gICAgaWYgKCFub2RlVGVybWluYWxOb2RlKSB7XG4gICAgICBjb25zdCB0ZXJtU3RyaW5nID0gdGVybS5nZXRTdHJpbmcoKSxcbiAgICAgICAgICAgIG1lc3NhZ2UgPSBgVGhlICcke3Rlcm1TdHJpbmd9JyB0ZXJtJ3Mgbm9kZSBtdXN0IGJlIHRlcm1pbmFsLmAsXG4gICAgICAgICAgICBleGNlcHRpb24gPSBFeGNlcHRpb24uZnJvbU1lc3NhZ2UobWVzc2FnZSk7XG5cbiAgICAgIHRocm93IGV4Y2VwdGlvbjtcbiAgICB9XG5cbiAgICBjb25zdCB0ZXJtaW5hbE5vZGUgPSBub2RlLCAgLy8vXG4gICAgICAgICAgY29udGVudCA9IHRlcm1pbmFsTm9kZS5nZXRDb250ZW50KCksXG4gICAgICAgICAgc3RyaW5nID0gY29udGVudCwgIC8vL1xuICAgICAgICAgIHN0cmluZ0xpdGVyYWwgPSBzdHJpbmdMaXRlcmFsRnJvbVN0cmluZyhzdHJpbmcpO1xuXG4gICAgdGVybSA9IHRlcm1Gcm9tU3RyaW5nTGl0ZXJhbChzdHJpbmdMaXRlcmFsLCBjb250ZXh0KTtcblxuICAgIGNvbnN0IHRlcm1TdHRyaW5nID0gdGVybS5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQuZGVidWcoYC4uLmV2YWx1YXRlZCB0aGUgY29udGVudCAnJHtuYW1lZFBhcmFtZXRlclN0cmluZ30nIG5hbWVkIHBhcmFtZXRlciBhcyAnJHt0ZXJtU3R0cmluZ30nLmApO1xuXG4gICAgcmV0dXJuIHRlcm07XG4gIH1cblxuICBldmFsdWF0ZVRlcm1pbmFsTmFtZWRQYXJhbWV0ZXIobmFtZWRQYXJhbWV0ZXIsIHRlcm0sIGNvbnRleHQpIHtcbiAgICBjb25zdCB0eXBlID0gbmFtZWRQYXJhbWV0ZXIuZ2V0VHlwZSgpLFxuICAgICAgICAgIG5hbWVkUGFyYW1ldGVyU3RyaW5nID0gbmFtZWRQYXJhbWV0ZXIuZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBFdmFsdWF0aW5nIHRoZSB0ZXJtaW5hbCAnJHtuYW1lZFBhcmFtZXRlclN0cmluZ30nIG5hbWVkIHBhcmFtZXRlci4uLmApO1xuXG4gICAgaWYgKHR5cGUgIT09IEJPT0xFQU5fVFlQRSkge1xuICAgICAgY29uc3QgbmFtZWRQYXJhbWV0ZXJTdHJpbmcgPSBuYW1lZFBhcmFtZXRlci5nZXRTdHJpbmcoKSxcbiAgICAgICAgICAgIG1lc3NhZ2UgPSBgVGhlICcke25hbWVkUGFyYW1ldGVyU3RyaW5nfScgbmFtZWQgcGFyYW1ldGVyJ3MgdHlwZSBzaG91bGQgYmUgJyR7Qk9PTEVBTl9UWVBFfScuYCxcbiAgICAgICAgICAgIGV4Y2VwdGlvbiA9IEV4Y2VwdGlvbi5mcm9tTWVzc2FnZShtZXNzYWdlKTtcblxuICAgICAgdGhyb3cgZXhjZXB0aW9uO1xuICAgIH1cblxuICAgIGNvbnN0IHByaW1pdGl2ZVZhbHVlID0gdGVybS5nZXRQcmltaXRpdmVWYWx1ZSgpLFxuICAgICAgICAgIG5vZGUgPSBwcmltaXRpdmVWYWx1ZSwgIC8vL1xuICAgICAgICAgIG5vZGVUZXJtaW5hbE5vZGUgPSBub2RlLmlzVGVybWluYWxOb2RlKCksXG4gICAgICAgICAgdGVybWluYWwgPSBub2RlVGVybWluYWxOb2RlOyAgLy8vXG5cbiAgICBjb25zdCBib29sZWFuID0gdGVybWluYWw7IC8vL1xuXG4gICAgdGVybSA9IHRlcm1Gcm9tQm9vbGVhbihib29sZWFuLCBjb250ZXh0KTsgIC8vL1xuXG4gICAgY29uc3QgdGVybVN0dHJpbmcgPSB0ZXJtLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC5kZWJ1ZyhgLi4uZXZhbHVhdGVkIHRoZSB0ZXJtaW5hbCAnJHtuYW1lZFBhcmFtZXRlclN0cmluZ30nIG5hbWVkIHBhcmFtZXRlciBhcyAnJHt0ZXJtU3R0cmluZ30nLmApO1xuXG4gICAgcmV0dXJuIHRlcm07XG4gIH1cblxuICBldmFsdWF0ZUNoaWxkTm9kZXNOYW1lZFBhcmFtZXRlcihuYW1lZFBhcmFtZXRlciwgdGVybSwgY29udGV4dCkge1xuICAgIGNvbnN0IHR5cGUgPSBuYW1lZFBhcmFtZXRlci5nZXRUeXBlKCksXG4gICAgICAgICAgbmFtZWRQYXJhbWV0ZXJTdHJpbmcgPSBuYW1lZFBhcmFtZXRlci5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYEV2YWx1YXRpbmcgdGhlIGNoaWxkIG5vZGVzICcke25hbWVkUGFyYW1ldGVyU3RyaW5nfScgbmFtZWQgcGFyYW1ldGVyLi4uYCk7XG5cbiAgICBpZiAodHlwZSAhPT0gTk9ERVNfVFlQRSkge1xuICAgICAgY29uc3QgbmFtZWRQYXJhbWV0ZXJTdHJpbmcgPSBuYW1lZFBhcmFtZXRlci5nZXRTdHJpbmcoKSxcbiAgICAgICAgICAgIG1lc3NhZ2UgPSBgVGhlICcke25hbWVkUGFyYW1ldGVyU3RyaW5nfScgbmFtZWQgcGFyYW1ldGVyJ3MgdHlwZSBzaG91bGQgYmUgJyR7Tk9ERVNfVFlQRX0nLmAsXG4gICAgICAgICAgICBleGNlcHRpb24gPSBFeGNlcHRpb24uZnJvbU1lc3NhZ2UobWVzc2FnZSk7XG5cbiAgICAgIHRocm93IGV4Y2VwdGlvbjtcbiAgICB9XG5cbiAgICBjb25zdCBwcmltaXRpdmVWYWx1ZSA9IHRlcm0uZ2V0UHJpbWl0aXZlVmFsdWUoKSxcbiAgICAgICAgICBub2RlID0gcHJpbWl0aXZlVmFsdWUsICAvLy9cbiAgICAgICAgICBub2RlTm9uVGVybWluYWxOb2RlID0gbm9kZS5pc05vblRlcm1pbmFsTm9kZSgpO1xuXG4gICAgaWYgKCFub2RlTm9uVGVybWluYWxOb2RlKSB7XG4gICAgICBjb25zdCB0ZXJtU3RyaW5nID0gdGVybS5nZXRTdHJpbmcoKSxcbiAgICAgICAgICAgIG1lc3NhZ2UgPSBgVGhlICcke3Rlcm1TdHJpbmd9JyB0ZXJtJ3Mgbm9kZSBtdXN0IGJlIG5vbi10ZXJtaW5hbC5gLFxuICAgICAgICAgICAgZXhjZXB0aW9uID0gRXhjZXB0aW9uLmZyb21NZXNzYWdlKG1lc3NhZ2UpO1xuXG4gICAgICB0aHJvdyBleGNlcHRpb247XG4gICAgfVxuXG4gICAgY29uc3Qgbm9uVGVybWluYWxOb2RlID0gbm9kZSwgIC8vL1xuICAgICAgICAgIGNoaWxkTm9kZXMgPSBub25UZXJtaW5hbE5vZGUuZ2V0Q2hpbGROb2RlcygpLFxuICAgICAgICAgIG5vZGVzID0gY2hpbGROb2RlczsgIC8vL1xuXG4gICAgdGVybSA9IHRlcm1Gcm9tTm9kZXMobm9kZXMsIGNvbnRleHQpO1xuXG4gICAgY29uc3QgdGVybVN0dHJpbmcgPSB0ZXJtLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC5kZWJ1ZyhgLi4uZXZhbHVhdGVkIHRoZSBjaGlsZE5vZGVzICcke25hbWVkUGFyYW1ldGVyU3RyaW5nfScgbmFtZWQgcGFyYW1ldGVyIGFzICcke3Rlcm1TdHRyaW5nfScuYCk7XG5cbiAgICByZXR1cm4gdGVybTtcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJPYmplY3RBc3NpZ21lbnRcIjtcbn0pO1xuIl0sIm5hbWVzIjpbImRlZmluZSIsIk9iamVjdEFzc2lnbWVudCIsImNvbnRleHQiLCJzdHJpbmciLCJub2RlIiwidmFyaWFibGUiLCJuYW1lZFBhcmFtZXRlcnMiLCJnZXRWYXJpYWJsZSIsImdldE5hbWVkUGFyYW1ldGVycyIsImV2YWx1YXRlIiwib2JqZWN0QXNzaWdubWVudFN0cmluZyIsImdldFN0cmluZyIsInRyYWNlIiwidGVybSIsInRlcm1UeXBlIiwiZ2V0VHlwZSIsIk5PREVfVFlQRSIsInRlcm1TdHJpbmciLCJtZXNzYWdlIiwiZXhjZXB0aW9uIiwiRXhjZXB0aW9uIiwiZnJvbU1lc3NhZ2UiLCJub2RlUHJvcGVydGllcyIsIm1hdGNoTmFtZWRQYXJhbWV0ZXJzIiwiZm9yRWFjaE5hbWVkUGFyYW1ldGVyIiwibmFtZWRQYXJhbWV0ZXIiLCJldmFsdWF0ZU5hbWVkUGFyYW1ldGVyIiwiZGVidWciLCJuYW1lZFBhcmFtZXRlclN0cmluZyIsIm5hbWUiLCJnZXROYW1lIiwiQ09OVEVOVF9QQVJBTUVURVJfTkFNRSIsImV2YWx1YXRlQ29udGVudE5hbWVkUGFyYW1ldGVyIiwiVEVSTUlOQUxfUEFSQU1FVEVSX05BTUUiLCJldmFsdWF0ZVRlcm1pbmFsTmFtZWRQYXJhbWV0ZXIiLCJDSElMRF9OT0RFU19QQVJBTUVURVJfTkFNRSIsImV2YWx1YXRlQ2hpbGROb2Rlc05hbWVkUGFyYW1ldGVyIiwiVmFyaWFibGUiLCJlbGVtZW50cyIsImZyb21OYW1lZFBhcmFtZXRlciIsImFzc2lnbiIsInR5cGUiLCJTVFJJTkdfVFlQRSIsInByaW1pdGl2ZVZhbHVlIiwiZ2V0UHJpbWl0aXZlVmFsdWUiLCJub2RlVGVybWluYWxOb2RlIiwiaXNUZXJtaW5hbE5vZGUiLCJ0ZXJtaW5hbE5vZGUiLCJjb250ZW50IiwiZ2V0Q29udGVudCIsInN0cmluZ0xpdGVyYWwiLCJzdHJpbmdMaXRlcmFsRnJvbVN0cmluZyIsInRlcm1Gcm9tU3RyaW5nTGl0ZXJhbCIsInRlcm1TdHRyaW5nIiwiQk9PTEVBTl9UWVBFIiwidGVybWluYWwiLCJib29sZWFuIiwidGVybUZyb21Cb29sZWFuIiwiTk9ERVNfVFlQRSIsIm5vZGVOb25UZXJtaW5hbE5vZGUiLCJpc05vblRlcm1pbmFsTm9kZSIsIm5vblRlcm1pbmFsTm9kZSIsImNoaWxkTm9kZXMiLCJnZXRDaGlsZE5vZGVzIiwibm9kZXMiLCJ0ZXJtRnJvbU5vZGVzIiwiRWxlbWVudCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBYUE7OztlQUFBOzs7OERBWG9CO2dFQUNDO2dFQUNDO3FFQUNLOzZCQUdhO3FCQUN5QjtvQkFDSzs4QkFDc0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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