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
var _term = require("../../utilities/term");
var _types = require("../../types");
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
var _ArrayAssigment;
var _default = (0, _elements.define)((_ArrayAssigment = /*#__PURE__*/ function(Element) {
    _inherits(ArrayAssigment, Element);
    function ArrayAssigment(context, string, node, variable, parameters) {
        _class_call_check(this, ArrayAssigment);
        var _this;
        _this = _call_super(this, ArrayAssigment, [
            context,
            string,
            node
        ]);
        _this.variable = variable;
        _this.parameters = parameters;
        return _this;
    }
    _create_class(ArrayAssigment, [
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
                var arrayAssignmentString = this.getString(); ///
                context.trace("Evaluating the '".concat(arrayAssignmentString, "' array assignment..."));
                var term = this.variable.evaluate(context), termType = term.getType();
                if (termType !== _types.NODES_TYPE) {
                    var termString = term.getString(), message = "The '".concat(termString, "' term's '").concat(termType, "' type should be '").concat(_types.NODES_TYPE, "'."), exception = _exception.default.fromMessage(message);
                    throw exception;
                }
                var primitiveValue = term.getPrimitiveValue(), nodes = primitiveValue, nodesLength = nodes.length, parametersLength = this.parameters.getLength();
                if (parametersLength > nodesLength) {
                    var parametersString = this.parameters.getString(), nodesString = context.nodesAsString(nodex), message1 = "The length of the '".concat(parametersString, "' parameters is greater than the length of the '").concat(nodesString, "' nodes."), exception1 = _exception.default.fromMessage(message1);
                    throw exception1;
                }
                this.parameters.forEachParameter(function(parameter, index) {
                    if (parameter !== null) {
                        var node = nodes[index], term = (0, _term.termFromNode)(node, context);
                        _this.evaluateParameter(parameter, term, context);
                    }
                });
                context.debug("...evaluated the '".concat(arrayAssignmentString, "' array assignment."));
            }
        },
        {
            key: "evaluateParameter",
            value: function evaluateParameter(parameter, expression, context) {
                var expressionString = expression.getString(), parameterString = parameter.getString();
                context.trace("Evaluating the '".concat(parameterString, "' parameter against the '").concat(expressionString, "' expression..."));
                var parameterType = parameter.getType();
                if (parameterType !== _types.NODE_TYPE) {
                    var message = "The type of the '".concat(parameterString, "' parameter should be '").concat(_types.NODE_TYPE, "'."), exception = _exception.default.fromMessage(message);
                    throw exception;
                }
                var Variable = _elements.default.Variable, variable = Variable.fromParameter(parameter, context);
                variable.assign(expression, context);
                context.debug("...evaluated the '".concat(parameterString, "' parameter against the '").concat(expressionString, "' expression."));
            }
        }
    ]);
    return ArrayAssigment;
}(_wrap_native_super(_element.default)), _define_property(_ArrayAssigment, "name", "ArrayAssignment"), _ArrayAssigment));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L2Fzc2lnbm1lbnQvYXJyYXkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBFbGVtZW50IGZyb20gXCIuLi8uLi9lbGVtZW50XCI7XG5pbXBvcnQgZWxlbWVudHMgZnJvbSBcIi4uLy4uL2VsZW1lbnRzXCI7XG5pbXBvcnQgRXhjZXB0aW9uIGZyb20gXCIuLi8uLi9leGNlcHRpb25cIjtcblxuaW1wb3J0IHsgZGVmaW5lIH0gZnJvbSBcIi4uLy4uL2VsZW1lbnRzXCI7XG5pbXBvcnQgeyB0ZXJtRnJvbU5vZGUgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL3Rlcm1cIjtcbmltcG9ydCB7IE5PREVfVFlQRSwgTk9ERVNfVFlQRSB9IGZyb20gXCIuLi8uLi90eXBlc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmUoY2xhc3MgQXJyYXlBc3NpZ21lbnQgZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgc3RyaW5nLCBub2RlLCB2YXJpYWJsZSwgcGFyYW1ldGVycykge1xuICAgIHN1cGVyKGNvbnRleHQsIHN0cmluZywgbm9kZSlcblxuICAgIHRoaXMudmFyaWFibGUgPSB2YXJpYWJsZTtcbiAgICB0aGlzLnBhcmFtZXRlcnMgPSBwYXJhbWV0ZXJzO1xuICB9XG5cbiAgZ2V0VmFyaWFibGUoKSB7XG4gICAgcmV0dXJuIHRoaXMudmFyaWFibGU7XG4gIH1cblxuICBnZXRWYXJpYWJsZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMucGFyYW1ldGVycztcbiAgfVxuXG4gIGV2YWx1YXRlKGNvbnRleHQpIHtcbiAgICBjb25zdCBhcnJheUFzc2lnbm1lbnRTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYEV2YWx1YXRpbmcgdGhlICcke2FycmF5QXNzaWdubWVudFN0cmluZ30nIGFycmF5IGFzc2lnbm1lbnQuLi5gKTtcblxuICAgIGNvbnN0IHRlcm0gPSB0aGlzLnZhcmlhYmxlLmV2YWx1YXRlKGNvbnRleHQpLFxuICAgICAgICAgIHRlcm1UeXBlID0gdGVybS5nZXRUeXBlKCk7XG5cbiAgICBpZiAodGVybVR5cGUgIT09IE5PREVTX1RZUEUpIHtcbiAgICAgIGNvbnN0IHRlcm1TdHJpbmcgPSB0ZXJtLmdldFN0cmluZygpLFxuICAgICAgICAgICAgbWVzc2FnZSA9IGBUaGUgJyR7dGVybVN0cmluZ30nIHRlcm0ncyAnJHt0ZXJtVHlwZX0nIHR5cGUgc2hvdWxkIGJlICcke05PREVTX1RZUEV9Jy5gLFxuICAgICAgICAgICAgZXhjZXB0aW9uID0gRXhjZXB0aW9uLmZyb21NZXNzYWdlKG1lc3NhZ2UpO1xuXG4gICAgICB0aHJvdyBleGNlcHRpb247XG4gICAgfVxuXG4gICAgY29uc3QgcHJpbWl0aXZlVmFsdWUgPSB0ZXJtLmdldFByaW1pdGl2ZVZhbHVlKCksXG4gICAgICAgICAgbm9kZXMgPSBwcmltaXRpdmVWYWx1ZSwgLy8vXG4gICAgICAgICAgbm9kZXNMZW5ndGggPSBub2Rlcy5sZW5ndGgsXG4gICAgICAgICAgcGFyYW1ldGVyc0xlbmd0aCA9IHRoaXMucGFyYW1ldGVycy5nZXRMZW5ndGgoKTtcblxuICAgIGlmIChwYXJhbWV0ZXJzTGVuZ3RoID4gbm9kZXNMZW5ndGgpIHtcbiAgICAgIGNvbnN0IHBhcmFtZXRlcnNTdHJpbmcgPSB0aGlzLnBhcmFtZXRlcnMuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgICBub2Rlc1N0cmluZyA9IGNvbnRleHQubm9kZXNBc1N0cmluZyhub2RleCksXG4gICAgICAgICAgICBtZXNzYWdlID0gYFRoZSBsZW5ndGggb2YgdGhlICcke3BhcmFtZXRlcnNTdHJpbmd9JyBwYXJhbWV0ZXJzIGlzIGdyZWF0ZXIgdGhhbiB0aGUgbGVuZ3RoIG9mIHRoZSAnJHtub2Rlc1N0cmluZ30nIG5vZGVzLmAsXG4gICAgICAgICAgICBleGNlcHRpb24gPSBFeGNlcHRpb24uZnJvbU1lc3NhZ2UobWVzc2FnZSk7XG5cbiAgICAgIHRocm93IGV4Y2VwdGlvbjtcbiAgICB9XG5cbiAgICB0aGlzLnBhcmFtZXRlcnMuZm9yRWFjaFBhcmFtZXRlcigocGFyYW1ldGVyLCBpbmRleCkgPT4ge1xuICAgICAgaWYgKHBhcmFtZXRlciAhPT0gbnVsbCkge1xuICAgICAgICBjb25zdCBub2RlID0gbm9kZXNbaW5kZXhdLFxuICAgICAgICAgICAgICB0ZXJtID0gdGVybUZyb21Ob2RlKG5vZGUsIGNvbnRleHQpO1xuXG4gICAgICAgIHRoaXMuZXZhbHVhdGVQYXJhbWV0ZXIocGFyYW1ldGVyLCB0ZXJtLCBjb250ZXh0KTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGNvbnRleHQuZGVidWcoYC4uLmV2YWx1YXRlZCB0aGUgJyR7YXJyYXlBc3NpZ25tZW50U3RyaW5nfScgYXJyYXkgYXNzaWdubWVudC5gKTtcbiAgfVxuXG4gIGV2YWx1YXRlUGFyYW1ldGVyKHBhcmFtZXRlciwgZXhwcmVzc2lvbiwgY29udGV4dCkge1xuICAgIGNvbnN0IGV4cHJlc3Npb25TdHJpbmcgPSBleHByZXNzaW9uLmdldFN0cmluZygpLFxuICAgICAgICAgIHBhcmFtZXRlclN0cmluZyA9IHBhcmFtZXRlci5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYEV2YWx1YXRpbmcgdGhlICcke3BhcmFtZXRlclN0cmluZ30nIHBhcmFtZXRlciBhZ2FpbnN0IHRoZSAnJHtleHByZXNzaW9uU3RyaW5nfScgZXhwcmVzc2lvbi4uLmApO1xuXG4gICAgY29uc3QgcGFyYW1ldGVyVHlwZSA9IHBhcmFtZXRlci5nZXRUeXBlKCk7XG5cbiAgICBpZiAocGFyYW1ldGVyVHlwZSAhPT0gTk9ERV9UWVBFKSB7XG4gICAgICBjb25zdCBtZXNzYWdlID0gYFRoZSB0eXBlIG9mIHRoZSAnJHtwYXJhbWV0ZXJTdHJpbmd9JyBwYXJhbWV0ZXIgc2hvdWxkIGJlICcke05PREVfVFlQRX0nLmAsXG4gICAgICAgICAgICBleGNlcHRpb24gPSBFeGNlcHRpb24uZnJvbU1lc3NhZ2UobWVzc2FnZSk7XG5cbiAgICAgIHRocm93IGV4Y2VwdGlvbjtcbiAgICB9XG5cbiAgICBjb25zdCB7IFZhcmlhYmxlIH0gPSBlbGVtZW50cyxcbiAgICAgICAgICB2YXJpYWJsZSA9IFZhcmlhYmxlLmZyb21QYXJhbWV0ZXIocGFyYW1ldGVyLCBjb250ZXh0KTtcblxuICAgIHZhcmlhYmxlLmFzc2lnbihleHByZXNzaW9uLCBjb250ZXh0KTtcblxuICAgIGNvbnRleHQuZGVidWcoYC4uLmV2YWx1YXRlZCB0aGUgJyR7cGFyYW1ldGVyU3RyaW5nfScgcGFyYW1ldGVyIGFnYWluc3QgdGhlICcke2V4cHJlc3Npb25TdHJpbmd9JyBleHByZXNzaW9uLmApO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIkFycmF5QXNzaWdubWVudFwiO1xufSk7XG4iXSwibmFtZXMiOlsiZGVmaW5lIiwiQXJyYXlBc3NpZ21lbnQiLCJjb250ZXh0Iiwic3RyaW5nIiwibm9kZSIsInZhcmlhYmxlIiwicGFyYW1ldGVycyIsImdldFZhcmlhYmxlIiwiZ2V0VmFyaWFibGVzIiwiZXZhbHVhdGUiLCJhcnJheUFzc2lnbm1lbnRTdHJpbmciLCJnZXRTdHJpbmciLCJ0cmFjZSIsInRlcm0iLCJ0ZXJtVHlwZSIsImdldFR5cGUiLCJOT0RFU19UWVBFIiwidGVybVN0cmluZyIsIm1lc3NhZ2UiLCJleGNlcHRpb24iLCJFeGNlcHRpb24iLCJmcm9tTWVzc2FnZSIsInByaW1pdGl2ZVZhbHVlIiwiZ2V0UHJpbWl0aXZlVmFsdWUiLCJub2RlcyIsIm5vZGVzTGVuZ3RoIiwibGVuZ3RoIiwicGFyYW1ldGVyc0xlbmd0aCIsImdldExlbmd0aCIsInBhcmFtZXRlcnNTdHJpbmciLCJub2Rlc1N0cmluZyIsIm5vZGVzQXNTdHJpbmciLCJub2RleCIsImZvckVhY2hQYXJhbWV0ZXIiLCJwYXJhbWV0ZXIiLCJpbmRleCIsInRlcm1Gcm9tTm9kZSIsImV2YWx1YXRlUGFyYW1ldGVyIiwiZGVidWciLCJleHByZXNzaW9uIiwiZXhwcmVzc2lvblN0cmluZyIsInBhcmFtZXRlclN0cmluZyIsInBhcmFtZXRlclR5cGUiLCJOT0RFX1RZUEUiLCJWYXJpYWJsZSIsImVsZW1lbnRzIiwiZnJvbVBhcmFtZXRlciIsImFzc2lnbiIsIkVsZW1lbnQiLCJuYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFVQTs7O2VBQUE7Ozs4REFSb0I7Z0VBQ0M7Z0VBQ0M7b0JBR087cUJBQ1M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUV0QyxXQUFlQSxJQUFBQSxnQkFBTSxtQ0FBQzs7YUFBTUMsZUFDZEMsT0FBTyxFQUFFQyxNQUFNLEVBQUVDLElBQUksRUFBRUMsUUFBUSxFQUFFQyxVQUFVO2dDQUQ3Qkw7O2dCQUV4QixrQkFGd0JBO1lBRWxCQztZQUFTQztZQUFRQzs7UUFFdkIsTUFBS0MsUUFBUSxHQUFHQTtRQUNoQixNQUFLQyxVQUFVLEdBQUdBOzs7OztZQUdwQkMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRixRQUFRO1lBQ3RCOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRixVQUFVO1lBQ3hCOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBLFNBQVNQLE9BQU87O2dCQUNkLElBQU1RLHdCQUF3QixJQUFJLENBQUNDLFNBQVMsSUFBSSxHQUFHO2dCQUVuRFQsUUFBUVUsS0FBSyxDQUFDLEFBQUMsbUJBQXdDLE9BQXRCRix1QkFBc0I7Z0JBRXZELElBQU1HLE9BQU8sSUFBSSxDQUFDUixRQUFRLENBQUNJLFFBQVEsQ0FBQ1AsVUFDOUJZLFdBQVdELEtBQUtFLE9BQU87Z0JBRTdCLElBQUlELGFBQWFFLGlCQUFVLEVBQUU7b0JBQzNCLElBQU1DLGFBQWFKLEtBQUtGLFNBQVMsSUFDM0JPLFVBQVUsQUFBQyxRQUE4QkosT0FBdkJHLFlBQVcsY0FBeUNELE9BQTdCRixVQUFTLHNCQUErQixPQUFYRSxpQkFBVSxFQUFDLE9BQ2pGRyxZQUFZQyxrQkFBUyxDQUFDQyxXQUFXLENBQUNIO29CQUV4QyxNQUFNQztnQkFDUjtnQkFFQSxJQUFNRyxpQkFBaUJULEtBQUtVLGlCQUFpQixJQUN2Q0MsUUFBUUYsZ0JBQ1JHLGNBQWNELE1BQU1FLE1BQU0sRUFDMUJDLG1CQUFtQixJQUFJLENBQUNyQixVQUFVLENBQUNzQixTQUFTO2dCQUVsRCxJQUFJRCxtQkFBbUJGLGFBQWE7b0JBQ2xDLElBQU1JLG1CQUFtQixJQUFJLENBQUN2QixVQUFVLENBQUNLLFNBQVMsSUFDNUNtQixjQUFjNUIsUUFBUTZCLGFBQWEsQ0FBQ0MsUUFDcENkLFdBQVUsQUFBQyxzQkFBd0ZZLE9BQW5FRCxrQkFBaUIsb0RBQThELE9BQVpDLGFBQVksYUFDL0dYLGFBQVlDLGtCQUFTLENBQUNDLFdBQVcsQ0FBQ0g7b0JBRXhDLE1BQU1DO2dCQUNSO2dCQUVBLElBQUksQ0FBQ2IsVUFBVSxDQUFDMkIsZ0JBQWdCLENBQUMsU0FBQ0MsV0FBV0M7b0JBQzNDLElBQUlELGNBQWMsTUFBTTt3QkFDdEIsSUFBTTlCLE9BQU9vQixLQUFLLENBQUNXLE1BQU0sRUFDbkJ0QixPQUFPdUIsSUFBQUEsa0JBQVksRUFBQ2hDLE1BQU1GO3dCQUVoQyxNQUFLbUMsaUJBQWlCLENBQUNILFdBQVdyQixNQUFNWDtvQkFDMUM7Z0JBQ0Y7Z0JBRUFBLFFBQVFvQyxLQUFLLENBQUMsQUFBQyxxQkFBMEMsT0FBdEI1Qix1QkFBc0I7WUFDM0Q7OztZQUVBMkIsS0FBQUE7bUJBQUFBLFNBQUFBLGtCQUFrQkgsU0FBUyxFQUFFSyxVQUFVLEVBQUVyQyxPQUFPO2dCQUM5QyxJQUFNc0MsbUJBQW1CRCxXQUFXNUIsU0FBUyxJQUN2QzhCLGtCQUFrQlAsVUFBVXZCLFNBQVM7Z0JBRTNDVCxRQUFRVSxLQUFLLENBQUMsQUFBQyxtQkFBNkQ0QixPQUEzQ0MsaUJBQWdCLDZCQUE0QyxPQUFqQkQsa0JBQWlCO2dCQUU3RixJQUFNRSxnQkFBZ0JSLFVBQVVuQixPQUFPO2dCQUV2QyxJQUFJMkIsa0JBQWtCQyxnQkFBUyxFQUFFO29CQUMvQixJQUFNekIsVUFBVSxBQUFDLG9CQUE0RHlCLE9BQXpDRixpQkFBZ0IsMkJBQW1DLE9BQVZFLGdCQUFTLEVBQUMsT0FDakZ4QixZQUFZQyxrQkFBUyxDQUFDQyxXQUFXLENBQUNIO29CQUV4QyxNQUFNQztnQkFDUjtnQkFFQSxJQUFNLEFBQUV5QixXQUFhQyxpQkFBUSxDQUFyQkQsVUFDRnZDLFdBQVd1QyxTQUFTRSxhQUFhLENBQUNaLFdBQVdoQztnQkFFbkRHLFNBQVMwQyxNQUFNLENBQUNSLFlBQVlyQztnQkFFNUJBLFFBQVFvQyxLQUFLLENBQUMsQUFBQyxxQkFBK0RFLE9BQTNDQyxpQkFBZ0IsNkJBQTRDLE9BQWpCRCxrQkFBaUI7WUFDakc7Ozs7cUJBL0VpRFEsZ0JBQU8sSUFpRnhELGtDQUFPQyxRQUFPIn0=