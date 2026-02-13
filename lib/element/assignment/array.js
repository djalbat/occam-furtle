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
var _occamlanguages = require("occam-languages");
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
            key: "getParameters",
            value: function getParameters() {
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
}(_wrap_native_super(_occamlanguages.Element)), _define_property(_ArrayAssigment, "name", "ArrayAssignment"), _ArrayAssigment));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L2Fzc2lnbm1lbnQvYXJyYXkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwib2NjYW0tbGFuZ3VhZ2VzXCI7XG5cbmltcG9ydCBlbGVtZW50cyBmcm9tIFwiLi4vLi4vZWxlbWVudHNcIjtcbmltcG9ydCBFeGNlcHRpb24gZnJvbSBcIi4uLy4uL2V4Y2VwdGlvblwiO1xuXG5pbXBvcnQgeyBkZWZpbmUgfSBmcm9tIFwiLi4vLi4vZWxlbWVudHNcIjtcbmltcG9ydCB7IHRlcm1Gcm9tTm9kZSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvdGVybVwiO1xuaW1wb3J0IHsgTk9ERV9UWVBFLCBOT0RFU19UWVBFIH0gZnJvbSBcIi4uLy4uL3R5cGVzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZShjbGFzcyBBcnJheUFzc2lnbWVudCBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIHZhcmlhYmxlLCBwYXJhbWV0ZXJzKSB7XG4gICAgc3VwZXIoY29udGV4dCwgc3RyaW5nLCBub2RlKVxuXG4gICAgdGhpcy52YXJpYWJsZSA9IHZhcmlhYmxlO1xuICAgIHRoaXMucGFyYW1ldGVycyA9IHBhcmFtZXRlcnM7XG4gIH1cblxuICBnZXRWYXJpYWJsZSgpIHtcbiAgICByZXR1cm4gdGhpcy52YXJpYWJsZTtcbiAgfVxuXG4gIGdldFBhcmFtZXRlcnMoKSB7XG4gICAgcmV0dXJuIHRoaXMucGFyYW1ldGVycztcbiAgfVxuXG4gIGV2YWx1YXRlKGNvbnRleHQpIHtcbiAgICBjb25zdCBhcnJheUFzc2lnbm1lbnRTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYEV2YWx1YXRpbmcgdGhlICcke2FycmF5QXNzaWdubWVudFN0cmluZ30nIGFycmF5IGFzc2lnbm1lbnQuLi5gKTtcblxuICAgIGNvbnN0IHRlcm0gPSB0aGlzLnZhcmlhYmxlLmV2YWx1YXRlKGNvbnRleHQpLFxuICAgICAgICAgIHRlcm1UeXBlID0gdGVybS5nZXRUeXBlKCk7XG5cbiAgICBpZiAodGVybVR5cGUgIT09IE5PREVTX1RZUEUpIHtcbiAgICAgIGNvbnN0IHRlcm1TdHJpbmcgPSB0ZXJtLmdldFN0cmluZygpLFxuICAgICAgICAgICAgbWVzc2FnZSA9IGBUaGUgJyR7dGVybVN0cmluZ30nIHRlcm0ncyAnJHt0ZXJtVHlwZX0nIHR5cGUgc2hvdWxkIGJlICcke05PREVTX1RZUEV9Jy5gLFxuICAgICAgICAgICAgZXhjZXB0aW9uID0gRXhjZXB0aW9uLmZyb21NZXNzYWdlKG1lc3NhZ2UpO1xuXG4gICAgICB0aHJvdyBleGNlcHRpb247XG4gICAgfVxuXG4gICAgY29uc3QgcHJpbWl0aXZlVmFsdWUgPSB0ZXJtLmdldFByaW1pdGl2ZVZhbHVlKCksXG4gICAgICAgICAgbm9kZXMgPSBwcmltaXRpdmVWYWx1ZSwgLy8vXG4gICAgICAgICAgbm9kZXNMZW5ndGggPSBub2Rlcy5sZW5ndGgsXG4gICAgICAgICAgcGFyYW1ldGVyc0xlbmd0aCA9IHRoaXMucGFyYW1ldGVycy5nZXRMZW5ndGgoKTtcblxuICAgIGlmIChwYXJhbWV0ZXJzTGVuZ3RoID4gbm9kZXNMZW5ndGgpIHtcbiAgICAgIGNvbnN0IHBhcmFtZXRlcnNTdHJpbmcgPSB0aGlzLnBhcmFtZXRlcnMuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgICBub2Rlc1N0cmluZyA9IGNvbnRleHQubm9kZXNBc1N0cmluZyhub2RleCksXG4gICAgICAgICAgICBtZXNzYWdlID0gYFRoZSBsZW5ndGggb2YgdGhlICcke3BhcmFtZXRlcnNTdHJpbmd9JyBwYXJhbWV0ZXJzIGlzIGdyZWF0ZXIgdGhhbiB0aGUgbGVuZ3RoIG9mIHRoZSAnJHtub2Rlc1N0cmluZ30nIG5vZGVzLmAsXG4gICAgICAgICAgICBleGNlcHRpb24gPSBFeGNlcHRpb24uZnJvbU1lc3NhZ2UobWVzc2FnZSk7XG5cbiAgICAgIHRocm93IGV4Y2VwdGlvbjtcbiAgICB9XG5cbiAgICB0aGlzLnBhcmFtZXRlcnMuZm9yRWFjaFBhcmFtZXRlcigocGFyYW1ldGVyLCBpbmRleCkgPT4ge1xuICAgICAgaWYgKHBhcmFtZXRlciAhPT0gbnVsbCkge1xuICAgICAgICBjb25zdCBub2RlID0gbm9kZXNbaW5kZXhdLFxuICAgICAgICAgICAgICB0ZXJtID0gdGVybUZyb21Ob2RlKG5vZGUsIGNvbnRleHQpO1xuXG4gICAgICAgIHRoaXMuZXZhbHVhdGVQYXJhbWV0ZXIocGFyYW1ldGVyLCB0ZXJtLCBjb250ZXh0KTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGNvbnRleHQuZGVidWcoYC4uLmV2YWx1YXRlZCB0aGUgJyR7YXJyYXlBc3NpZ25tZW50U3RyaW5nfScgYXJyYXkgYXNzaWdubWVudC5gKTtcbiAgfVxuXG4gIGV2YWx1YXRlUGFyYW1ldGVyKHBhcmFtZXRlciwgZXhwcmVzc2lvbiwgY29udGV4dCkge1xuICAgIGNvbnN0IGV4cHJlc3Npb25TdHJpbmcgPSBleHByZXNzaW9uLmdldFN0cmluZygpLFxuICAgICAgICAgIHBhcmFtZXRlclN0cmluZyA9IHBhcmFtZXRlci5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYEV2YWx1YXRpbmcgdGhlICcke3BhcmFtZXRlclN0cmluZ30nIHBhcmFtZXRlciBhZ2FpbnN0IHRoZSAnJHtleHByZXNzaW9uU3RyaW5nfScgZXhwcmVzc2lvbi4uLmApO1xuXG4gICAgY29uc3QgcGFyYW1ldGVyVHlwZSA9IHBhcmFtZXRlci5nZXRUeXBlKCk7XG5cbiAgICBpZiAocGFyYW1ldGVyVHlwZSAhPT0gTk9ERV9UWVBFKSB7XG4gICAgICBjb25zdCBtZXNzYWdlID0gYFRoZSB0eXBlIG9mIHRoZSAnJHtwYXJhbWV0ZXJTdHJpbmd9JyBwYXJhbWV0ZXIgc2hvdWxkIGJlICcke05PREVfVFlQRX0nLmAsXG4gICAgICAgICAgICBleGNlcHRpb24gPSBFeGNlcHRpb24uZnJvbU1lc3NhZ2UobWVzc2FnZSk7XG5cbiAgICAgIHRocm93IGV4Y2VwdGlvbjtcbiAgICB9XG5cbiAgICBjb25zdCB7IFZhcmlhYmxlIH0gPSBlbGVtZW50cyxcbiAgICAgICAgICB2YXJpYWJsZSA9IFZhcmlhYmxlLmZyb21QYXJhbWV0ZXIocGFyYW1ldGVyLCBjb250ZXh0KTtcblxuICAgIHZhcmlhYmxlLmFzc2lnbihleHByZXNzaW9uLCBjb250ZXh0KTtcblxuICAgIGNvbnRleHQuZGVidWcoYC4uLmV2YWx1YXRlZCB0aGUgJyR7cGFyYW1ldGVyU3RyaW5nfScgcGFyYW1ldGVyIGFnYWluc3QgdGhlICcke2V4cHJlc3Npb25TdHJpbmd9JyBleHByZXNzaW9uLmApO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIkFycmF5QXNzaWdubWVudFwiO1xufSk7XG4iXSwibmFtZXMiOlsiZGVmaW5lIiwiQXJyYXlBc3NpZ21lbnQiLCJjb250ZXh0Iiwic3RyaW5nIiwibm9kZSIsInZhcmlhYmxlIiwicGFyYW1ldGVycyIsImdldFZhcmlhYmxlIiwiZ2V0UGFyYW1ldGVycyIsImV2YWx1YXRlIiwiYXJyYXlBc3NpZ25tZW50U3RyaW5nIiwiZ2V0U3RyaW5nIiwidHJhY2UiLCJ0ZXJtIiwidGVybVR5cGUiLCJnZXRUeXBlIiwiTk9ERVNfVFlQRSIsInRlcm1TdHJpbmciLCJtZXNzYWdlIiwiZXhjZXB0aW9uIiwiRXhjZXB0aW9uIiwiZnJvbU1lc3NhZ2UiLCJwcmltaXRpdmVWYWx1ZSIsImdldFByaW1pdGl2ZVZhbHVlIiwibm9kZXMiLCJub2Rlc0xlbmd0aCIsImxlbmd0aCIsInBhcmFtZXRlcnNMZW5ndGgiLCJnZXRMZW5ndGgiLCJwYXJhbWV0ZXJzU3RyaW5nIiwibm9kZXNTdHJpbmciLCJub2Rlc0FzU3RyaW5nIiwibm9kZXgiLCJmb3JFYWNoUGFyYW1ldGVyIiwicGFyYW1ldGVyIiwiaW5kZXgiLCJ0ZXJtRnJvbU5vZGUiLCJldmFsdWF0ZVBhcmFtZXRlciIsImRlYnVnIiwiZXhwcmVzc2lvbiIsImV4cHJlc3Npb25TdHJpbmciLCJwYXJhbWV0ZXJTdHJpbmciLCJwYXJhbWV0ZXJUeXBlIiwiTk9ERV9UWVBFIiwiVmFyaWFibGUiLCJlbGVtZW50cyIsImZyb21QYXJhbWV0ZXIiLCJhc3NpZ24iLCJFbGVtZW50IiwibmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBV0E7OztlQUFBOzs7OEJBVHdCO2dFQUVIO2dFQUNDO29CQUdPO3FCQUNTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFdEMsV0FBZUEsSUFBQUEsZ0JBQU0sbUNBQUM7O2FBQU1DLGVBQ2RDLE9BQU8sRUFBRUMsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLFFBQVEsRUFBRUMsVUFBVTtnQ0FEN0JMOztnQkFFeEIsa0JBRndCQTtZQUVsQkM7WUFBU0M7WUFBUUM7O1FBRXZCLE1BQUtDLFFBQVEsR0FBR0E7UUFDaEIsTUFBS0MsVUFBVSxHQUFHQTs7Ozs7WUFHcEJDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0YsUUFBUTtZQUN0Qjs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0YsVUFBVTtZQUN4Qjs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQSxTQUFTUCxPQUFPOztnQkFDZCxJQUFNUSx3QkFBd0IsSUFBSSxDQUFDQyxTQUFTLElBQUksR0FBRztnQkFFbkRULFFBQVFVLEtBQUssQ0FBQyxBQUFDLG1CQUF3QyxPQUF0QkYsdUJBQXNCO2dCQUV2RCxJQUFNRyxPQUFPLElBQUksQ0FBQ1IsUUFBUSxDQUFDSSxRQUFRLENBQUNQLFVBQzlCWSxXQUFXRCxLQUFLRSxPQUFPO2dCQUU3QixJQUFJRCxhQUFhRSxpQkFBVSxFQUFFO29CQUMzQixJQUFNQyxhQUFhSixLQUFLRixTQUFTLElBQzNCTyxVQUFVLEFBQUMsUUFBOEJKLE9BQXZCRyxZQUFXLGNBQXlDRCxPQUE3QkYsVUFBUyxzQkFBK0IsT0FBWEUsaUJBQVUsRUFBQyxPQUNqRkcsWUFBWUMsa0JBQVMsQ0FBQ0MsV0FBVyxDQUFDSDtvQkFFeEMsTUFBTUM7Z0JBQ1I7Z0JBRUEsSUFBTUcsaUJBQWlCVCxLQUFLVSxpQkFBaUIsSUFDdkNDLFFBQVFGLGdCQUNSRyxjQUFjRCxNQUFNRSxNQUFNLEVBQzFCQyxtQkFBbUIsSUFBSSxDQUFDckIsVUFBVSxDQUFDc0IsU0FBUztnQkFFbEQsSUFBSUQsbUJBQW1CRixhQUFhO29CQUNsQyxJQUFNSSxtQkFBbUIsSUFBSSxDQUFDdkIsVUFBVSxDQUFDSyxTQUFTLElBQzVDbUIsY0FBYzVCLFFBQVE2QixhQUFhLENBQUNDLFFBQ3BDZCxXQUFVLEFBQUMsc0JBQXdGWSxPQUFuRUQsa0JBQWlCLG9EQUE4RCxPQUFaQyxhQUFZLGFBQy9HWCxhQUFZQyxrQkFBUyxDQUFDQyxXQUFXLENBQUNIO29CQUV4QyxNQUFNQztnQkFDUjtnQkFFQSxJQUFJLENBQUNiLFVBQVUsQ0FBQzJCLGdCQUFnQixDQUFDLFNBQUNDLFdBQVdDO29CQUMzQyxJQUFJRCxjQUFjLE1BQU07d0JBQ3RCLElBQU05QixPQUFPb0IsS0FBSyxDQUFDVyxNQUFNLEVBQ25CdEIsT0FBT3VCLElBQUFBLGtCQUFZLEVBQUNoQyxNQUFNRjt3QkFFaEMsTUFBS21DLGlCQUFpQixDQUFDSCxXQUFXckIsTUFBTVg7b0JBQzFDO2dCQUNGO2dCQUVBQSxRQUFRb0MsS0FBSyxDQUFDLEFBQUMscUJBQTBDLE9BQXRCNUIsdUJBQXNCO1lBQzNEOzs7WUFFQTJCLEtBQUFBO21CQUFBQSxTQUFBQSxrQkFBa0JILFNBQVMsRUFBRUssVUFBVSxFQUFFckMsT0FBTztnQkFDOUMsSUFBTXNDLG1CQUFtQkQsV0FBVzVCLFNBQVMsSUFDdkM4QixrQkFBa0JQLFVBQVV2QixTQUFTO2dCQUUzQ1QsUUFBUVUsS0FBSyxDQUFDLEFBQUMsbUJBQTZENEIsT0FBM0NDLGlCQUFnQiw2QkFBNEMsT0FBakJELGtCQUFpQjtnQkFFN0YsSUFBTUUsZ0JBQWdCUixVQUFVbkIsT0FBTztnQkFFdkMsSUFBSTJCLGtCQUFrQkMsZ0JBQVMsRUFBRTtvQkFDL0IsSUFBTXpCLFVBQVUsQUFBQyxvQkFBNER5QixPQUF6Q0YsaUJBQWdCLDJCQUFtQyxPQUFWRSxnQkFBUyxFQUFDLE9BQ2pGeEIsWUFBWUMsa0JBQVMsQ0FBQ0MsV0FBVyxDQUFDSDtvQkFFeEMsTUFBTUM7Z0JBQ1I7Z0JBRUEsSUFBTSxBQUFFeUIsV0FBYUMsaUJBQVEsQ0FBckJELFVBQ0Z2QyxXQUFXdUMsU0FBU0UsYUFBYSxDQUFDWixXQUFXaEM7Z0JBRW5ERyxTQUFTMEMsTUFBTSxDQUFDUixZQUFZckM7Z0JBRTVCQSxRQUFRb0MsS0FBSyxDQUFDLEFBQUMscUJBQStERSxPQUEzQ0MsaUJBQWdCLDZCQUE0QyxPQUFqQkQsa0JBQWlCO1lBQ2pHOzs7O3FCQS9FaURRLHVCQUFPLElBaUZ4RCxrQ0FBT0MsUUFBTyJ9