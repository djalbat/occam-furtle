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
var _exception = /*#__PURE__*/ _interop_require_default(require("../../exception"));
var _elements = require("../../elements");
var _element = /*#__PURE__*/ _interop_require_default(require("../../element"));
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
var _NamedParameters;
var _default = (0, _elements.define)((_NamedParameters = /*#__PURE__*/ function(Element) {
    _inherits(NamedParameters, Element);
    function NamedParameters(context, string, node, array) {
        _class_call_check(this, NamedParameters);
        var _this;
        _this = _call_super(this, NamedParameters, [
            context,
            string,
            node
        ]);
        _this.array = array;
        return _this;
    }
    _create_class(NamedParameters, [
        {
            key: "getArray",
            value: function getArray() {
                return this.array;
            }
        },
        {
            key: "getLength",
            value: function getLength() {
                var length = this.array.length;
                return length;
            }
        },
        {
            key: "getNamedParameter",
            value: function getNamedParameter(index) {
                var namedParameter = this.array[index] || null;
                return namedParameter;
            }
        },
        {
            key: "someNamedParameter",
            value: function someNamedParameter(callback) {
                return this.array.some(callback);
            }
        },
        {
            key: "forEachNamedParameter",
            value: function forEachNamedParameter(callback) {
                this.array.forEach(callback);
            }
        },
        {
            key: "matchTerms",
            value: function matchTerms(terms, context) {
                var termsString = terms.getString(), namedParametersString = this.getString(); ///
                context.trace("Matching the '".concat(termsString, "' terms against the '").concat(namedParametersString, "' named parameters..."));
                var termsLength = terms.getLength(), namedParametersLength = this.getLength();
                if (termsLength !== namedParametersLength) {
                    var message = "The '".concat(termsString, "' terms and '").concat(namedParametersString, "' named parameters are not of the same length."), exception = _exception.default.fromMessage(message);
                    throw exception;
                }
                this.forEachNamedParameter(function(namedParameter, index) {
                    if (namedParameter !== null) {
                        var term = terms.getTerm(index);
                        namedParameter.matchTerm(term, context);
                    }
                });
                context.debug("...matched the '".concat(termsString, "' terms against the '").concat(namedParametersString, "' named parameters."));
            }
        },
        {
            key: "matchNamedParameter",
            value: function matchNamedParameter(namedParameter, context) {
                var namedParameterString = namedParameter.getString(), namedParametersString = this.getString(); ///
                context.trace("Matching the '".concat(namedParameterString, "' namedParameter against the '").concat(namedParametersString, "' named parameters..."));
                var namedParameterA = namedParameter, namedParameterMatches = this.someNamedParameter(function(namedParameter) {
                    if (namedParameter !== null) {
                        var namedParameterB = namedParameter, namedParameterBMatchesNamedParameterA = namedParameterA.matchNamedParameter(namedParameterB, context);
                        if (namedParameterBMatchesNamedParameterA) {
                            return true;
                        }
                    }
                });
                if (!namedParameterMatches) {
                    var message = "The '".concat(namedParameterString, "' namedParameter does not match any of the '").concat(namedParametersString, "' named parameters."), exception = _exception.default.fromMessage(message);
                    throw exception;
                }
                context.debug("...matched the '".concat(namedParameterString, "' namedParameter against the '").concat(namedParametersString, "' named parameters."));
            }
        },
        {
            key: "matchNamedParameters",
            value: function matchNamedParameters(namedParameters, context) {
                var _this = this;
                namedParameters.forEachNamedParameter(function(namedParameter) {
                    if (namedParameter !== null) {
                        _this.matchNamedParameter(namedParameter, context);
                    }
                });
            }
        }
    ]);
    return NamedParameters;
}(_wrap_native_super(_element.default)), _define_property(_NamedParameters, "name", "NamedParameters"), _NamedParameters));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L3BhcmFtZXRlcnMvbmFtZWQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBFeGNlcHRpb24gZnJvbSBcIi4uLy4uL2V4Y2VwdGlvblwiO1xuXG5pbXBvcnQgeyBkZWZpbmUgfSBmcm9tIFwiLi4vLi4vZWxlbWVudHNcIjtcblxuaW1wb3J0IEVsZW1lbnQgZnJvbSBcIi4uLy4uL2VsZW1lbnRcIjtcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lKGNsYXNzIE5hbWVkUGFyYW1ldGVycyBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGFycmF5KSB7XG4gICAgc3VwZXIoY29udGV4dCwgc3RyaW5nLCBub2RlKVxuXG4gICAgdGhpcy5hcnJheSA9IGFycmF5O1xuICB9XG5cbiAgZ2V0QXJyYXkoKSB7XG4gICAgcmV0dXJuIHRoaXMuYXJyYXk7XG4gIH1cblxuICBnZXRMZW5ndGgoKSB7XG4gICAgY29uc3QgbGVuZ3RoID0gdGhpcy5hcnJheS5sZW5ndGg7XG5cbiAgICByZXR1cm4gbGVuZ3RoO1xuICB9XG5cbiAgZ2V0TmFtZWRQYXJhbWV0ZXIoaW5kZXgpIHtcbiAgICBjb25zdCBuYW1lZFBhcmFtZXRlciA9IHRoaXMuYXJyYXlbaW5kZXhdIHx8IG51bGw7XG5cbiAgICByZXR1cm4gbmFtZWRQYXJhbWV0ZXI7XG4gIH1cblxuICBzb21lTmFtZWRQYXJhbWV0ZXIoY2FsbGJhY2spIHsgcmV0dXJuIHRoaXMuYXJyYXkuc29tZShjYWxsYmFjayk7IH1cblxuICBmb3JFYWNoTmFtZWRQYXJhbWV0ZXIoY2FsbGJhY2spIHsgdGhpcy5hcnJheS5mb3JFYWNoKGNhbGxiYWNrKTsgfVxuXG4gIG1hdGNoVGVybXModGVybXMsIGNvbnRleHQpIHtcbiAgICBjb25zdCB0ZXJtc1N0cmluZyA9IHRlcm1zLmdldFN0cmluZygpLFxuICAgICAgICAgIG5hbWVkUGFyYW1ldGVyc1N0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgTWF0Y2hpbmcgdGhlICcke3Rlcm1zU3RyaW5nfScgdGVybXMgYWdhaW5zdCB0aGUgJyR7bmFtZWRQYXJhbWV0ZXJzU3RyaW5nfScgbmFtZWQgcGFyYW1ldGVycy4uLmApO1xuXG4gICAgY29uc3QgdGVybXNMZW5ndGggPSB0ZXJtcy5nZXRMZW5ndGgoKSxcbiAgICAgICAgICBuYW1lZFBhcmFtZXRlcnNMZW5ndGggPSB0aGlzLmdldExlbmd0aCgpO1xuXG4gICAgaWYgKHRlcm1zTGVuZ3RoICE9PSBuYW1lZFBhcmFtZXRlcnNMZW5ndGgpIHtcbiAgICAgIGNvbnN0IG1lc3NhZ2UgPSBgVGhlICcke3Rlcm1zU3RyaW5nfScgdGVybXMgYW5kICcke25hbWVkUGFyYW1ldGVyc1N0cmluZ30nIG5hbWVkIHBhcmFtZXRlcnMgYXJlIG5vdCBvZiB0aGUgc2FtZSBsZW5ndGguYCxcbiAgICAgICAgICAgIGV4Y2VwdGlvbiA9IEV4Y2VwdGlvbi5mcm9tTWVzc2FnZShtZXNzYWdlKTtcblxuICAgICAgdGhyb3cgZXhjZXB0aW9uO1xuICAgIH1cblxuICAgIHRoaXMuZm9yRWFjaE5hbWVkUGFyYW1ldGVyKChuYW1lZFBhcmFtZXRlciwgaW5kZXgpID0+IHtcbiAgICAgIGlmIChuYW1lZFBhcmFtZXRlciAhPT0gbnVsbCkge1xuICAgICAgICBjb25zdCB0ZXJtID0gdGVybXMuZ2V0VGVybShpbmRleCk7XG5cbiAgICAgICAgbmFtZWRQYXJhbWV0ZXIubWF0Y2hUZXJtKHRlcm0sIGNvbnRleHQpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgY29udGV4dC5kZWJ1ZyhgLi4ubWF0Y2hlZCB0aGUgJyR7dGVybXNTdHJpbmd9JyB0ZXJtcyBhZ2FpbnN0IHRoZSAnJHtuYW1lZFBhcmFtZXRlcnNTdHJpbmd9JyBuYW1lZCBwYXJhbWV0ZXJzLmApO1xuICB9XG5cbiAgbWF0Y2hOYW1lZFBhcmFtZXRlcihuYW1lZFBhcmFtZXRlciwgY29udGV4dCkge1xuICAgIGNvbnN0IG5hbWVkUGFyYW1ldGVyU3RyaW5nID0gbmFtZWRQYXJhbWV0ZXIuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgbmFtZWRQYXJhbWV0ZXJzU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBNYXRjaGluZyB0aGUgJyR7bmFtZWRQYXJhbWV0ZXJTdHJpbmd9JyBuYW1lZFBhcmFtZXRlciBhZ2FpbnN0IHRoZSAnJHtuYW1lZFBhcmFtZXRlcnNTdHJpbmd9JyBuYW1lZCBwYXJhbWV0ZXJzLi4uYCk7XG5cbiAgICBjb25zdCBuYW1lZFBhcmFtZXRlckEgPSBuYW1lZFBhcmFtZXRlciwgLy8vXG4gICAgICAgICAgbmFtZWRQYXJhbWV0ZXJNYXRjaGVzID0gdGhpcy5zb21lTmFtZWRQYXJhbWV0ZXIoKG5hbWVkUGFyYW1ldGVyKSA9PiB7XG4gICAgICAgICAgICBpZiAobmFtZWRQYXJhbWV0ZXIgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgY29uc3QgbmFtZWRQYXJhbWV0ZXJCID0gbmFtZWRQYXJhbWV0ZXIsIC8vL1xuICAgICAgICAgICAgICAgICAgICBuYW1lZFBhcmFtZXRlckJNYXRjaGVzTmFtZWRQYXJhbWV0ZXJBID0gbmFtZWRQYXJhbWV0ZXJBLm1hdGNoTmFtZWRQYXJhbWV0ZXIobmFtZWRQYXJhbWV0ZXJCLCBjb250ZXh0KTtcblxuICAgICAgICAgICAgICBpZiAobmFtZWRQYXJhbWV0ZXJCTWF0Y2hlc05hbWVkUGFyYW1ldGVyQSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG5cbiAgICBpZiAoIW5hbWVkUGFyYW1ldGVyTWF0Y2hlcykge1xuICAgICAgY29uc3QgbWVzc2FnZSA9IGBUaGUgJyR7bmFtZWRQYXJhbWV0ZXJTdHJpbmd9JyBuYW1lZFBhcmFtZXRlciBkb2VzIG5vdCBtYXRjaCBhbnkgb2YgdGhlICcke25hbWVkUGFyYW1ldGVyc1N0cmluZ30nIG5hbWVkIHBhcmFtZXRlcnMuYCxcbiAgICAgICAgICAgIGV4Y2VwdGlvbiA9IEV4Y2VwdGlvbi5mcm9tTWVzc2FnZShtZXNzYWdlKTtcblxuICAgICAgdGhyb3cgZXhjZXB0aW9uO1xuICAgIH1cblxuICAgIGNvbnRleHQuZGVidWcoYC4uLm1hdGNoZWQgdGhlICcke25hbWVkUGFyYW1ldGVyU3RyaW5nfScgbmFtZWRQYXJhbWV0ZXIgYWdhaW5zdCB0aGUgJyR7bmFtZWRQYXJhbWV0ZXJzU3RyaW5nfScgbmFtZWQgcGFyYW1ldGVycy5gKTtcbiAgfVxuXG4gIG1hdGNoTmFtZWRQYXJhbWV0ZXJzKG5hbWVkUGFyYW1ldGVycywgY29udGV4dCkge1xuICAgIG5hbWVkUGFyYW1ldGVycy5mb3JFYWNoTmFtZWRQYXJhbWV0ZXIoKG5hbWVkUGFyYW1ldGVyKSA9PiB7XG4gICAgICBpZiAobmFtZWRQYXJhbWV0ZXIgIT09IG51bGwpIHtcbiAgICAgICAgdGhpcy5tYXRjaE5hbWVkUGFyYW1ldGVyKG5hbWVkUGFyYW1ldGVyLCBjb250ZXh0KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJOYW1lZFBhcmFtZXRlcnNcIjtcbn0pO1xuIl0sIm5hbWVzIjpbImRlZmluZSIsIk5hbWVkUGFyYW1ldGVycyIsImNvbnRleHQiLCJzdHJpbmciLCJub2RlIiwiYXJyYXkiLCJnZXRBcnJheSIsImdldExlbmd0aCIsImxlbmd0aCIsImdldE5hbWVkUGFyYW1ldGVyIiwiaW5kZXgiLCJuYW1lZFBhcmFtZXRlciIsInNvbWVOYW1lZFBhcmFtZXRlciIsImNhbGxiYWNrIiwic29tZSIsImZvckVhY2hOYW1lZFBhcmFtZXRlciIsImZvckVhY2giLCJtYXRjaFRlcm1zIiwidGVybXMiLCJ0ZXJtc1N0cmluZyIsImdldFN0cmluZyIsIm5hbWVkUGFyYW1ldGVyc1N0cmluZyIsInRyYWNlIiwidGVybXNMZW5ndGgiLCJuYW1lZFBhcmFtZXRlcnNMZW5ndGgiLCJtZXNzYWdlIiwiZXhjZXB0aW9uIiwiRXhjZXB0aW9uIiwiZnJvbU1lc3NhZ2UiLCJ0ZXJtIiwiZ2V0VGVybSIsIm1hdGNoVGVybSIsImRlYnVnIiwibWF0Y2hOYW1lZFBhcmFtZXRlciIsIm5hbWVkUGFyYW1ldGVyU3RyaW5nIiwibmFtZWRQYXJhbWV0ZXJBIiwibmFtZWRQYXJhbWV0ZXJNYXRjaGVzIiwibmFtZWRQYXJhbWV0ZXJCIiwibmFtZWRQYXJhbWV0ZXJCTWF0Y2hlc05hbWVkUGFyYW1ldGVyQSIsIm1hdGNoTmFtZWRQYXJhbWV0ZXJzIiwibmFtZWRQYXJhbWV0ZXJzIiwiRWxlbWVudCIsIm5hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVFBOzs7ZUFBQTs7O2dFQU5zQjt3QkFFQzs4REFFSDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVwQixXQUFlQSxJQUFBQSxnQkFBTSxvQ0FBQzs7YUFBTUMsZ0JBQ2RDLE9BQU8sRUFBRUMsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLEtBQUs7Z0NBRGRKOztnQkFFeEIsa0JBRndCQTtZQUVsQkM7WUFBU0M7WUFBUUM7O1FBRXZCLE1BQUtDLEtBQUssR0FBR0E7Ozs7O1lBR2ZDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0QsS0FBSztZQUNuQjs7O1lBRUFFLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNQyxTQUFTLElBQUksQ0FBQ0gsS0FBSyxDQUFDRyxNQUFNO2dCQUVoQyxPQUFPQTtZQUNUOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBLGtCQUFrQkMsS0FBSztnQkFDckIsSUFBTUMsaUJBQWlCLElBQUksQ0FBQ04sS0FBSyxDQUFDSyxNQUFNLElBQUk7Z0JBRTVD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