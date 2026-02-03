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
var _element = /*#__PURE__*/ _interop_require_default(require("../element"));
var _exception = /*#__PURE__*/ _interop_require_default(require("../exception"));
var _elements = require("../elements");
var _string = require("../utilities/string");
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
var _Variable;
var _default = (0, _elements.define)((_Variable = /*#__PURE__*/ function(Element) {
    _inherits(Variable, Element);
    function Variable(context, string, node, type, name, term) {
        _class_call_check(this, Variable);
        var _this;
        _this = _call_super(this, Variable, [
            context,
            string,
            node
        ]);
        _this.type = type;
        _this.name = name;
        _this.term = term;
        return _this;
    }
    _create_class(Variable, [
        {
            key: "getType",
            value: function getType() {
                return this.type;
            }
        },
        {
            key: "getName",
            value: function getName() {
                return this.name;
            }
        },
        {
            key: "getTerm",
            value: function getTerm() {
                return this.term;
            }
        },
        {
            key: "matchVariableName",
            value: function matchVariableName(variableName) {
                var nameMatches = this.name === variableName;
                return nameMatches;
            }
        },
        {
            key: "evaluate",
            value: function evaluate(context) {
                var variableString = this.getString(); ///
                context.trace("Evaluating the '".concat(variableString, "' variable..."));
                var nested = true, variableName = this.name, variablePresent = context.isVariablePresentByVariableName(variableName, nested);
                if (!variablePresent) {
                    var message = "The '".concat(variableString, "' variable is not present.'"), exception = _exception.default.fromMessage(message);
                    throw exception;
                }
                var variable = context.findVariableByVariableName(variableName), term = variable.getTerm(), termString = term.getString();
                context.debug("...evaluated the '".concat(variableString, "' variable as the '").concat(termString, "' term."));
                return term;
            }
        },
        {
            key: "assign",
            value: function assign(term, context) {
                var nested = false, termString = term.getString(), variableName = this.name, variableString = this.getString(), variablePresent = context.isVariablePresentByVariableName(variableName, nested);
                context.trace("Assigning the '".concat(termString, "' term to the '").concat(variableString, "' variable..."));
                if (variablePresent) {
                    var message = "The '".concat(variableString, "' variable is already present."), exception = _exception.default.fromMessage(message);
                    throw exception;
                }
                var termType = term.getType(), variableType = this.type;
                if (termType !== variableType) {
                    var message1 = "The '".concat(variableString, " variable's '").concat(variableType, "' type does not match the term's '").concat(termType, "' type.'"), exception1 = _exception.default.fromMessage(message1);
                    throw exception1;
                }
                this.term = term;
                var variable = this; ///
                context.addVariable(variable);
                context.debug("...assigned the '".concat(termString, "' term to the '").concat(variableString, "' variable."));
            }
        }
    ], [
        {
            key: "fromParameter",
            value: function fromParameter(parameter, context) {
                var type = parameter.getType(), name = parameter.getName(), term = null, variableString = (0, _string.variableStringFromName)(name), string = variableString, node = null;
                context = null;
                var variable = new Variable(context, string, node, type, name, term);
                return variable;
            }
        },
        {
            key: "fromNamedParameter",
            value: function fromNamedParameter(namedParameter, context) {
                var aliasedName = namedParameter.getAliasedName(), type = namedParameter.getType(), name = aliasedName, term = null, variableString = (0, _string.variableStringFromName)(name), string = variableString, node = null;
                context = null;
                var variable = new Variable(context, string, node, type, name, term);
                return variable;
            }
        },
        {
            key: "fromTermAndParameter",
            value: function fromTermAndParameter(term, parameter, context) {
                var type = parameter.getType(), name = parameter.getName(), variableString = (0, _string.variableStringFromName)(name), string = variableString, node = null;
                context = null;
                var variable = new Variable(context, string, node, type, name, term);
                return variable;
            }
        }
    ]);
    return Variable;
}(_wrap_native_super(_element.default)), _define_property(_Variable, "name", "Variable"), _Variable));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3ZhcmlhYmxlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgRWxlbWVudCBmcm9tIFwiLi4vZWxlbWVudFwiO1xuaW1wb3J0IEV4Y2VwdGlvbiBmcm9tIFwiLi4vZXhjZXB0aW9uXCI7XG5cbmltcG9ydCB7IGRlZmluZSB9IGZyb20gXCIuLi9lbGVtZW50c1wiO1xuaW1wb3J0IHsgdmFyaWFibGVTdHJpbmdGcm9tTmFtZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvc3RyaW5nXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZShjbGFzcyBWYXJpYWJsZSBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIHR5cGUsIG5hbWUsIHRlcm0pIHtcbiAgICBzdXBlcihjb250ZXh0LCBzdHJpbmcsIG5vZGUpXG5cbiAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy50ZXJtID0gdGVybTtcbiAgfVxuXG4gIGdldFR5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMudHlwZTtcbiAgfVxuXG4gIGdldE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMubmFtZTtcbiAgfVxuXG4gIGdldFRlcm0oKSB7XG4gICAgcmV0dXJuIHRoaXMudGVybTtcbiAgfVxuXG4gIG1hdGNoVmFyaWFibGVOYW1lKHZhcmlhYmxlTmFtZSkge1xuICAgIGNvbnN0IG5hbWVNYXRjaGVzID0gKHRoaXMubmFtZSA9PT0gdmFyaWFibGVOYW1lKTtcblxuICAgIHJldHVybiBuYW1lTWF0Y2hlcztcbiAgfVxuXG4gIGV2YWx1YXRlKGNvbnRleHQpIHtcbiAgICBjb25zdCB2YXJpYWJsZVN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgRXZhbHVhdGluZyB0aGUgJyR7dmFyaWFibGVTdHJpbmd9JyB2YXJpYWJsZS4uLmApO1xuXG4gICAgY29uc3QgbmVzdGVkID0gdHJ1ZSxcbiAgICAgICAgICB2YXJpYWJsZU5hbWUgPSB0aGlzLm5hbWUsIC8vL1xuICAgICAgICAgIHZhcmlhYmxlUHJlc2VudCA9IGNvbnRleHQuaXNWYXJpYWJsZVByZXNlbnRCeVZhcmlhYmxlTmFtZSh2YXJpYWJsZU5hbWUsIG5lc3RlZCk7XG5cbiAgICBpZiAoIXZhcmlhYmxlUHJlc2VudCkge1xuICAgICAgY29uc3QgbWVzc2FnZSA9IGBUaGUgJyR7dmFyaWFibGVTdHJpbmd9JyB2YXJpYWJsZSBpcyBub3QgcHJlc2VudC4nYCxcbiAgICAgICAgICAgIGV4Y2VwdGlvbiA9IEV4Y2VwdGlvbi5mcm9tTWVzc2FnZShtZXNzYWdlKTtcblxuICAgICAgdGhyb3cgZXhjZXB0aW9uO1xuICAgIH1cblxuICAgIGNvbnN0IHZhcmlhYmxlID0gY29udGV4dC5maW5kVmFyaWFibGVCeVZhcmlhYmxlTmFtZSh2YXJpYWJsZU5hbWUpLFxuICAgICAgICAgIHRlcm0gPSB2YXJpYWJsZS5nZXRUZXJtKCksXG4gICAgICAgICAgdGVybVN0cmluZyA9IHRlcm0uZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LmRlYnVnKGAuLi5ldmFsdWF0ZWQgdGhlICcke3ZhcmlhYmxlU3RyaW5nfScgdmFyaWFibGUgYXMgdGhlICcke3Rlcm1TdHJpbmd9JyB0ZXJtLmApO1xuXG4gICAgcmV0dXJuIHRlcm07XG4gIH1cblxuICBhc3NpZ24odGVybSwgY29udGV4dCkge1xuICAgIGNvbnN0IG5lc3RlZCA9IGZhbHNlLFxuICAgICAgICAgIHRlcm1TdHJpbmcgPSB0ZXJtLmdldFN0cmluZygpLFxuICAgICAgICAgIHZhcmlhYmxlTmFtZSA9IHRoaXMubmFtZSwgLy8vXG4gICAgICAgICAgdmFyaWFibGVTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpLCAvLy9cbiAgICAgICAgICB2YXJpYWJsZVByZXNlbnQgPSBjb250ZXh0LmlzVmFyaWFibGVQcmVzZW50QnlWYXJpYWJsZU5hbWUodmFyaWFibGVOYW1lLCBuZXN0ZWQpO1xuXG4gICAgY29udGV4dC50cmFjZShgQXNzaWduaW5nIHRoZSAnJHt0ZXJtU3RyaW5nfScgdGVybSB0byB0aGUgJyR7dmFyaWFibGVTdHJpbmd9JyB2YXJpYWJsZS4uLmApO1xuXG4gICAgaWYgKHZhcmlhYmxlUHJlc2VudCkge1xuICAgICAgY29uc3QgbWVzc2FnZSA9IGBUaGUgJyR7dmFyaWFibGVTdHJpbmd9JyB2YXJpYWJsZSBpcyBhbHJlYWR5IHByZXNlbnQuYCxcbiAgICAgICAgICAgIGV4Y2VwdGlvbiA9IEV4Y2VwdGlvbi5mcm9tTWVzc2FnZShtZXNzYWdlKTtcblxuICAgICAgdGhyb3cgZXhjZXB0aW9uO1xuICAgIH1cblxuICAgIGNvbnN0IHRlcm1UeXBlID0gdGVybS5nZXRUeXBlKCksXG4gICAgICAgICAgdmFyaWFibGVUeXBlID0gdGhpcy50eXBlO1xuXG4gICAgaWYgKHRlcm1UeXBlICE9PSB2YXJpYWJsZVR5cGUpIHtcbiAgICAgIGNvbnN0IG1lc3NhZ2UgPSBgVGhlICcke3ZhcmlhYmxlU3RyaW5nfSB2YXJpYWJsZSdzICcke3ZhcmlhYmxlVHlwZX0nIHR5cGUgZG9lcyBub3QgbWF0Y2ggdGhlIHRlcm0ncyAnJHt0ZXJtVHlwZX0nIHR5cGUuJ2AsXG4gICAgICAgICAgICBleGNlcHRpb24gPSBFeGNlcHRpb24uZnJvbU1lc3NhZ2UobWVzc2FnZSk7XG5cbiAgICAgIHRocm93IGV4Y2VwdGlvbjtcbiAgICB9XG5cbiAgICB0aGlzLnRlcm0gPSB0ZXJtO1xuXG4gICAgY29uc3QgdmFyaWFibGUgPSB0aGlzOyAgLy8vXG5cbiAgICBjb250ZXh0LmFkZFZhcmlhYmxlKHZhcmlhYmxlKTtcblxuICAgIGNvbnRleHQuZGVidWcoYC4uLmFzc2lnbmVkIHRoZSAnJHt0ZXJtU3RyaW5nfScgdGVybSB0byB0aGUgJyR7dmFyaWFibGVTdHJpbmd9JyB2YXJpYWJsZS5gKTtcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJWYXJpYWJsZVwiO1xuXG4gIHN0YXRpYyBmcm9tUGFyYW1ldGVyKHBhcmFtZXRlciwgY29udGV4dCkge1xuICAgIGNvbnN0IHR5cGUgPSBwYXJhbWV0ZXIuZ2V0VHlwZSgpLFxuICAgICAgICAgIG5hbWUgPSBwYXJhbWV0ZXIuZ2V0TmFtZSgpLFxuICAgICAgICAgIHRlcm0gPSBudWxsLFxuICAgICAgICAgIHZhcmlhYmxlU3RyaW5nID0gdmFyaWFibGVTdHJpbmdGcm9tTmFtZShuYW1lKSxcbiAgICAgICAgICBzdHJpbmcgPSB2YXJpYWJsZVN0cmluZywgIC8vL1xuICAgICAgICAgIG5vZGUgPSBudWxsO1xuXG4gICAgY29udGV4dCA9IG51bGw7XG5cbiAgICBjb25zdCB2YXJpYWJsZSA9IG5ldyBWYXJpYWJsZShjb250ZXh0LCBzdHJpbmcsIG5vZGUsIHR5cGUsIG5hbWUsIHRlcm0pO1xuXG4gICAgcmV0dXJuIHZhcmlhYmxlO1xuICB9XG5cbiAgc3RhdGljIGZyb21OYW1lZFBhcmFtZXRlcihuYW1lZFBhcmFtZXRlciwgY29udGV4dCkge1xuICAgIGNvbnN0IGFsaWFzZWROYW1lID0gbmFtZWRQYXJhbWV0ZXIuZ2V0QWxpYXNlZE5hbWUoKSxcbiAgICAgICAgICB0eXBlID0gbmFtZWRQYXJhbWV0ZXIuZ2V0VHlwZSgpLFxuICAgICAgICAgIG5hbWUgPSBhbGlhc2VkTmFtZSwgLy8vXG4gICAgICAgICAgdGVybSA9IG51bGwsXG4gICAgICAgICAgdmFyaWFibGVTdHJpbmcgPSB2YXJpYWJsZVN0cmluZ0Zyb21OYW1lKG5hbWUpLFxuICAgICAgICAgIHN0cmluZyA9IHZhcmlhYmxlU3RyaW5nLCAgLy8vXG4gICAgICAgICAgbm9kZSA9IG51bGw7XG5cbiAgICBjb250ZXh0ID0gbnVsbDtcblxuICAgIGNvbnN0IHZhcmlhYmxlID0gbmV3IFZhcmlhYmxlKGNvbnRleHQsIHN0cmluZywgbm9kZSwgdHlwZSwgbmFtZSwgdGVybSk7XG5cbiAgICByZXR1cm4gdmFyaWFibGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbVRlcm1BbmRQYXJhbWV0ZXIodGVybSwgcGFyYW1ldGVyLCBjb250ZXh0KSB7XG4gICAgY29uc3QgdHlwZSA9IHBhcmFtZXRlci5nZXRUeXBlKCksXG4gICAgICAgICAgbmFtZSA9IHBhcmFtZXRlci5nZXROYW1lKCksXG4gICAgICAgICAgdmFyaWFibGVTdHJpbmcgPSB2YXJpYWJsZVN0cmluZ0Zyb21OYW1lKG5hbWUpLFxuICAgICAgICAgIHN0cmluZyA9IHZhcmlhYmxlU3RyaW5nLCAgLy8vXG4gICAgICAgICAgbm9kZSA9IG51bGw7XG5cbiAgICBjb250ZXh0ID0gbnVsbDtcblxuICAgIGNvbnN0IHZhcmlhYmxlID0gbmV3IFZhcmlhYmxlKGNvbnRleHQsIHN0cmluZywgbm9kZSwgdHlwZSwgbmFtZSwgdGVybSk7XG5cbiAgICByZXR1cm4gdmFyaWFibGU7XG4gIH1cbn0pO1xuIl0sIm5hbWVzIjpbImRlZmluZSIsIlZhcmlhYmxlIiwiY29udGV4dCIsInN0cmluZyIsIm5vZGUiLCJ0eXBlIiwibmFtZSIsInRlcm0iLCJnZXRUeXBlIiwiZ2V0TmFtZSIsImdldFRlcm0iLCJtYXRjaFZhcmlhYmxlTmFtZSIsInZhcmlhYmxlTmFtZSIsIm5hbWVNYXRjaGVzIiwiZXZhbHVhdGUiLCJ2YXJpYWJsZVN0cmluZyIsImdldFN0cmluZyIsInRyYWNlIiwibmVzdGVkIiwidmFyaWFibGVQcmVzZW50IiwiaXNWYXJpYWJsZVByZXNlbnRCeVZhcmlhYmxlTmFtZSIsIm1lc3NhZ2UiLCJleGNlcHRpb24iLCJFeGNlcHRpb24iLCJmcm9tTWVzc2FnZSIsInZhcmlhYmxlIiwiZmluZFZhcmlhYmxlQnlWYXJpYWJsZU5hbWUiLCJ0ZXJtU3RyaW5nIiwiZGVidWciLCJhc3NpZ24iLCJ0ZXJtVHlwZSIsInZhcmlhYmxlVHlwZSIsImFkZFZhcmlhYmxlIiwiZnJvbVBhcmFtZXRlciIsInBhcmFtZXRlciIsInZhcmlhYmxlU3RyaW5nRnJvbU5hbWUiLCJmcm9tTmFtZWRQYXJhbWV0ZXIiLCJuYW1lZFBhcmFtZXRlciIsImFsaWFzZWROYW1lIiwiZ2V0QWxpYXNlZE5hbWUiLCJmcm9tVGVybUFuZFBhcmFtZXRlciIsIkVsZW1lbnQiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVFBOzs7ZUFBQTs7OzhEQU5vQjtnRUFDRTt3QkFFQztzQkFDZ0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFdkMsV0FBZUEsSUFBQUEsZ0JBQU0sNkJBQUM7O2FBQU1DLFNBQ2RDLE9BQU8sRUFBRUMsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLElBQUksRUFBRUMsSUFBSSxFQUFFQyxJQUFJO2dDQUR6Qk47O2dCQUV4QixrQkFGd0JBO1lBRWxCQztZQUFTQztZQUFRQzs7UUFFdkIsTUFBS0MsSUFBSSxHQUFHQTtRQUNaLE1BQUtDLElBQUksR0FBR0E7UUFDWixNQUFLQyxJQUFJLEdBQUdBOzs7OztZQUdkQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNILElBQUk7WUFDbEI7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNILElBQUk7WUFDbEI7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNILElBQUk7WUFDbEI7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUEsa0JBQWtCQyxZQUFZO2dCQUM1QixJQUFNQyxjQUFlLElBQUksQ0FBQ1AsSUFBSSxLQUFLTTtnQkFFbkMsT0FBT0M7WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQSxTQUFTWixPQUFPO2dCQUNkLElBQU1hLGlCQUFpQixJQUFJLENBQUNDLFNBQVMsSUFBSSxHQUFHO2dCQUU1Q2QsUUFBUWUsS0FBSyxDQUFDLEFBQUMsbUJBQWlDLE9BQWZGLGdCQUFlO2dCQUVoRCxJQUFNRyxTQUFT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