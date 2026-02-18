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
var _exception = /*#__PURE__*/ _interop_require_default(require("../../exception"));
var _elements = require("../../elements");
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
            key: "compareTerms",
            value: function compareTerms(terms, context) {
                var termsString = terms.getString(), namedParametersString = this.getString(); ///
                context.trace("Comparing the '".concat(termsString, "' terms with the '").concat(namedParametersString, "' named parameters..."));
                var termsLength = terms.getLength(), namedParametersLength = this.getLength();
                if (termsLength !== namedParametersLength) {
                    var message = "The '".concat(termsString, "' terms and '").concat(namedParametersString, "' named parameters are not of the same length."), exception = _exception.default.fromMessage(message);
                    throw exception;
                }
                this.forEachNamedParameter(function(namedParameter, index) {
                    if (namedParameter !== null) {
                        var term = terms.getTerm(index);
                        namedParameter.compareTerm(term, context);
                    }
                });
                context.debug("...compared the '".concat(termsString, "' terms with the '").concat(namedParametersString, "' named parameters."));
            }
        },
        {
            key: "compareNamedParameter",
            value: function compareNamedParameter(namedParameter, context) {
                var namedParameterString = namedParameter.getString(), namedParametersString = this.getString(); ///
                context.trace("Comparing the '".concat(namedParameterString, "' namedParameter with the '").concat(namedParametersString, "' named parameters..."));
                var namedParameterA = namedParameter, namedParameterCompares = this.someNamedParameter(function(namedParameter) {
                    if (namedParameter !== null) {
                        var namedParameterB = namedParameter, namedParameterBComparesToNamedParameterA = namedParameterA.compareNamedParameter(namedParameterB, context);
                        if (namedParameterBComparesToNamedParameterA) {
                            return true;
                        }
                    }
                });
                if (!namedParameterCompares) {
                    var message = "The '".concat(namedParameterString, "' namedParameter does not compare to any of the '").concat(namedParametersString, "' named parameters."), exception = _exception.default.fromMessage(message);
                    throw exception;
                }
                context.debug("...compared the '".concat(namedParameterString, "' namedParameter with the '").concat(namedParametersString, "' named parameters."));
            }
        },
        {
            key: "compareNamedParameters",
            value: function compareNamedParameters(namedParameters, context) {
                var _this = this;
                namedParameters.forEachNamedParameter(function(namedParameter) {
                    if (namedParameter !== null) {
                        _this.compareNamedParameter(namedParameter, context);
                    }
                });
            }
        }
    ]);
    return NamedParameters;
}(_wrap_native_super(_occamlanguages.Element)), _define_property(_NamedParameters, "name", "NamedParameters"), _NamedParameters));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L3BhcmFtZXRlcnMvbmFtZWQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwib2NjYW0tbGFuZ3VhZ2VzXCI7XG5cbmltcG9ydCBFeGNlcHRpb24gZnJvbSBcIi4uLy4uL2V4Y2VwdGlvblwiO1xuXG5pbXBvcnQgeyBkZWZpbmUgfSBmcm9tIFwiLi4vLi4vZWxlbWVudHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lKGNsYXNzIE5hbWVkUGFyYW1ldGVycyBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGFycmF5KSB7XG4gICAgc3VwZXIoY29udGV4dCwgc3RyaW5nLCBub2RlKVxuXG4gICAgdGhpcy5hcnJheSA9IGFycmF5O1xuICB9XG5cbiAgZ2V0QXJyYXkoKSB7XG4gICAgcmV0dXJuIHRoaXMuYXJyYXk7XG4gIH1cblxuICBnZXRMZW5ndGgoKSB7XG4gICAgY29uc3QgbGVuZ3RoID0gdGhpcy5hcnJheS5sZW5ndGg7XG5cbiAgICByZXR1cm4gbGVuZ3RoO1xuICB9XG5cbiAgZ2V0TmFtZWRQYXJhbWV0ZXIoaW5kZXgpIHtcbiAgICBjb25zdCBuYW1lZFBhcmFtZXRlciA9IHRoaXMuYXJyYXlbaW5kZXhdIHx8IG51bGw7XG5cbiAgICByZXR1cm4gbmFtZWRQYXJhbWV0ZXI7XG4gIH1cblxuICBzb21lTmFtZWRQYXJhbWV0ZXIoY2FsbGJhY2spIHsgcmV0dXJuIHRoaXMuYXJyYXkuc29tZShjYWxsYmFjayk7IH1cblxuICBmb3JFYWNoTmFtZWRQYXJhbWV0ZXIoY2FsbGJhY2spIHsgdGhpcy5hcnJheS5mb3JFYWNoKGNhbGxiYWNrKTsgfVxuXG4gIGNvbXBhcmVUZXJtcyh0ZXJtcywgY29udGV4dCkge1xuICAgIGNvbnN0IHRlcm1zU3RyaW5nID0gdGVybXMuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgbmFtZWRQYXJhbWV0ZXJzU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBDb21wYXJpbmcgdGhlICcke3Rlcm1zU3RyaW5nfScgdGVybXMgd2l0aCB0aGUgJyR7bmFtZWRQYXJhbWV0ZXJzU3RyaW5nfScgbmFtZWQgcGFyYW1ldGVycy4uLmApO1xuXG4gICAgY29uc3QgdGVybXNMZW5ndGggPSB0ZXJtcy5nZXRMZW5ndGgoKSxcbiAgICAgICAgICBuYW1lZFBhcmFtZXRlcnNMZW5ndGggPSB0aGlzLmdldExlbmd0aCgpO1xuXG4gICAgaWYgKHRlcm1zTGVuZ3RoICE9PSBuYW1lZFBhcmFtZXRlcnNMZW5ndGgpIHtcbiAgICAgIGNvbnN0IG1lc3NhZ2UgPSBgVGhlICcke3Rlcm1zU3RyaW5nfScgdGVybXMgYW5kICcke25hbWVkUGFyYW1ldGVyc1N0cmluZ30nIG5hbWVkIHBhcmFtZXRlcnMgYXJlIG5vdCBvZiB0aGUgc2FtZSBsZW5ndGguYCxcbiAgICAgICAgICAgIGV4Y2VwdGlvbiA9IEV4Y2VwdGlvbi5mcm9tTWVzc2FnZShtZXNzYWdlKTtcblxuICAgICAgdGhyb3cgZXhjZXB0aW9uO1xuICAgIH1cblxuICAgIHRoaXMuZm9yRWFjaE5hbWVkUGFyYW1ldGVyKChuYW1lZFBhcmFtZXRlciwgaW5kZXgpID0+IHtcbiAgICAgIGlmIChuYW1lZFBhcmFtZXRlciAhPT0gbnVsbCkge1xuICAgICAgICBjb25zdCB0ZXJtID0gdGVybXMuZ2V0VGVybShpbmRleCk7XG5cbiAgICAgICAgbmFtZWRQYXJhbWV0ZXIuY29tcGFyZVRlcm0odGVybSwgY29udGV4dCk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBjb250ZXh0LmRlYnVnKGAuLi5jb21wYXJlZCB0aGUgJyR7dGVybXNTdHJpbmd9JyB0ZXJtcyB3aXRoIHRoZSAnJHtuYW1lZFBhcmFtZXRlcnNTdHJpbmd9JyBuYW1lZCBwYXJhbWV0ZXJzLmApO1xuICB9XG5cbiAgY29tcGFyZU5hbWVkUGFyYW1ldGVyKG5hbWVkUGFyYW1ldGVyLCBjb250ZXh0KSB7XG4gICAgY29uc3QgbmFtZWRQYXJhbWV0ZXJTdHJpbmcgPSBuYW1lZFBhcmFtZXRlci5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBuYW1lZFBhcmFtZXRlcnNTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYENvbXBhcmluZyB0aGUgJyR7bmFtZWRQYXJhbWV0ZXJTdHJpbmd9JyBuYW1lZFBhcmFtZXRlciB3aXRoIHRoZSAnJHtuYW1lZFBhcmFtZXRlcnNTdHJpbmd9JyBuYW1lZCBwYXJhbWV0ZXJzLi4uYCk7XG5cbiAgICBjb25zdCBuYW1lZFBhcmFtZXRlckEgPSBuYW1lZFBhcmFtZXRlciwgLy8vXG4gICAgICAgICAgbmFtZWRQYXJhbWV0ZXJDb21wYXJlcyA9IHRoaXMuc29tZU5hbWVkUGFyYW1ldGVyKChuYW1lZFBhcmFtZXRlcikgPT4ge1xuICAgICAgICAgICAgaWYgKG5hbWVkUGFyYW1ldGVyICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgIGNvbnN0IG5hbWVkUGFyYW1ldGVyQiA9IG5hbWVkUGFyYW1ldGVyLCAvLy9cbiAgICAgICAgICAgICAgICAgICAgbmFtZWRQYXJhbWV0ZXJCQ29tcGFyZXNUb05hbWVkUGFyYW1ldGVyQSA9IG5hbWVkUGFyYW1ldGVyQS5jb21wYXJlTmFtZWRQYXJhbWV0ZXIobmFtZWRQYXJhbWV0ZXJCLCBjb250ZXh0KTtcblxuICAgICAgICAgICAgICBpZiAobmFtZWRQYXJhbWV0ZXJCQ29tcGFyZXNUb05hbWVkUGFyYW1ldGVyQSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG5cbiAgICBpZiAoIW5hbWVkUGFyYW1ldGVyQ29tcGFyZXMpIHtcbiAgICAgIGNvbnN0IG1lc3NhZ2UgPSBgVGhlICcke25hbWVkUGFyYW1ldGVyU3RyaW5nfScgbmFtZWRQYXJhbWV0ZXIgZG9lcyBub3QgY29tcGFyZSB0byBhbnkgb2YgdGhlICcke25hbWVkUGFyYW1ldGVyc1N0cmluZ30nIG5hbWVkIHBhcmFtZXRlcnMuYCxcbiAgICAgICAgICAgIGV4Y2VwdGlvbiA9IEV4Y2VwdGlvbi5mcm9tTWVzc2FnZShtZXNzYWdlKTtcblxuICAgICAgdGhyb3cgZXhjZXB0aW9uO1xuICAgIH1cblxuICAgIGNvbnRleHQuZGVidWcoYC4uLmNvbXBhcmVkIHRoZSAnJHtuYW1lZFBhcmFtZXRlclN0cmluZ30nIG5hbWVkUGFyYW1ldGVyIHdpdGggdGhlICcke25hbWVkUGFyYW1ldGVyc1N0cmluZ30nIG5hbWVkIHBhcmFtZXRlcnMuYCk7XG4gIH1cblxuICBjb21wYXJlTmFtZWRQYXJhbWV0ZXJzKG5hbWVkUGFyYW1ldGVycywgY29udGV4dCkge1xuICAgIG5hbWVkUGFyYW1ldGVycy5mb3JFYWNoTmFtZWRQYXJhbWV0ZXIoKG5hbWVkUGFyYW1ldGVyKSA9PiB7XG4gICAgICBpZiAobmFtZWRQYXJhbWV0ZXIgIT09IG51bGwpIHtcbiAgICAgICAgdGhpcy5jb21wYXJlTmFtZWRQYXJhbWV0ZXIobmFtZWRQYXJhbWV0ZXIsIGNvbnRleHQpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIk5hbWVkUGFyYW1ldGVyc1wiO1xufSk7XG4iXSwibmFtZXMiOlsiZGVmaW5lIiwiTmFtZWRQYXJhbWV0ZXJzIiwiY29udGV4dCIsInN0cmluZyIsIm5vZGUiLCJhcnJheSIsImdldEFycmF5IiwiZ2V0TGVuZ3RoIiwibGVuZ3RoIiwiZ2V0TmFtZWRQYXJhbWV0ZXIiLCJpbmRleCIsIm5hbWVkUGFyYW1ldGVyIiwic29tZU5hbWVkUGFyYW1ldGVyIiwiY2FsbGJhY2siLCJzb21lIiwiZm9yRWFjaE5hbWVkUGFyYW1ldGVyIiwiZm9yRWFjaCIsImNvbXBhcmVUZXJtcyIsInRlcm1zIiwidGVybXNTdHJpbmciLCJnZXRTdHJpbmciLCJuYW1lZFBhcmFtZXRlcnNTdHJpbmciLCJ0cmFjZSIsInRlcm1zTGVuZ3RoIiwibmFtZWRQYXJhbWV0ZXJzTGVuZ3RoIiwibWVzc2FnZSIsImV4Y2VwdGlvbiIsIkV4Y2VwdGlvbiIsImZyb21NZXNzYWdlIiwidGVybSIsImdldFRlcm0iLCJjb21wYXJlVGVybSIsImRlYnVnIiwiY29tcGFyZU5hbWVkUGFyYW1ldGVyIiwibmFtZWRQYXJhbWV0ZXJTdHJpbmciLCJuYW1lZFBhcmFtZXRlckEiLCJuYW1lZFBhcmFtZXRlckNvbXBhcmVzIiwibmFtZWRQYXJhbWV0ZXJCIiwibmFtZWRQYXJhbWV0ZXJCQ29tcGFyZXNUb05hbWVkUGFyYW1ldGVyQSIsImNvbXBhcmVOYW1lZFBhcmFtZXRlcnMiLCJuYW1lZFBhcmFtZXRlcnMiLCJFbGVtZW50IiwibmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBUUE7OztlQUFBOzs7OEJBTndCO2dFQUVGO3dCQUVDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRXZCLFdBQWVBLElBQUFBLGdCQUFNLG9DQUFDOzthQUFNQyxnQkFDZEMsT0FBTyxFQUFFQyxNQUFNLEVBQUVDLElBQUksRUFBRUMsS0FBSztnQ0FEZEo7O2dCQUV4QixrQkFGd0JBO1lBRWxCQztZQUFTQztZQUFRQzs7UUFFdkIsTUFBS0MsS0FBSyxHQUFHQTs7Ozs7WUFHZkMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRCxLQUFLO1lBQ25COzs7WUFFQUUsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLFNBQVMsSUFBSSxDQUFDSCxLQUFLLENBQUNHLE1BQU07Z0JBRWhDLE9BQU9BO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUEsa0JBQWtCQyxLQUFLO2dCQUNyQixJQUFNQyxpQkFBaUIsSUFB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