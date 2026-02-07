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
var _Terms;
var _default = (0, _elements.define)((_Terms = /*#__PURE__*/ function(Element) {
    _inherits(Terms, Element);
    function Terms(context, string, node, array) {
        _class_call_check(this, Terms);
        var _this;
        _this = _call_super(this, Terms, [
            context,
            string,
            node
        ]);
        _this.array = array;
        return _this;
    }
    _create_class(Terms, [
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
            key: "getTerm",
            value: function getTerm(index) {
                var term = this.array[index] || null; ///
                return term;
            }
        },
        {
            key: "addTerm",
            value: function addTerm(term) {
                this.array.push(term);
            }
        },
        {
            key: "mapTerm",
            value: function mapTerm(callback) {
                return this.array.map(callback);
            }
        },
        {
            key: "forEachTerm",
            value: function forEachTerm(callback) {
                this.array.forEach(callback);
            }
        },
        {
            key: "evaluate",
            value: function evaluate(context) {
                var termsArray = this.mapTerm(function(term) {
                    term = term.evaluate(context);
                    return term;
                }), termsString = (0, _string.termsStringFromTermsArray)(termsArray, context), string = termsString, array = termsArray, node = null;
                context = null;
                var terms = new Terms(context, string, node, array);
                return terms;
            }
        }
    ], [
        {
            key: "fromTerm",
            value: function fromTerm(term, context) {
                var termsArray = [
                    term
                ], termsString = (0, _string.termsStringFromTermsArray)(termsArray, context), string = termsString, array = termsArray, node = null;
                context = null;
                var terms = new Terms(context, string, node, array);
                return terms;
            }
        }
    ]);
    return Terms;
}(_wrap_native_super(_occamlanguages.Element)), _define_property(_Terms, "name", "Terms"), _Terms));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3Rlcm1zLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBFbGVtZW50IH0gZnJvbSBcIm9jY2FtLWxhbmd1YWdlc1wiO1xuXG5pbXBvcnQgeyBkZWZpbmUgfSBmcm9tIFwiLi4vZWxlbWVudHNcIjtcbmltcG9ydCB7IHRlcm1zU3RyaW5nRnJvbVRlcm1zQXJyYXkgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3N0cmluZ1wiO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmUoY2xhc3MgVGVybXMgZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgc3RyaW5nLCBub2RlLCBhcnJheSkge1xuICAgIHN1cGVyKGNvbnRleHQsIHN0cmluZywgbm9kZSlcblxuICAgIHRoaXMuYXJyYXkgPSBhcnJheTtcbiAgfVxuXG4gIGdldEFycmF5KCkge1xuICAgIHJldHVybiB0aGlzLmFycmF5O1xuICB9XG5cbiAgZ2V0TGVuZ3RoKCkge1xuICAgIGNvbnN0IGxlbmd0aCA9IHRoaXMuYXJyYXkubGVuZ3RoO1xuXG4gICAgcmV0dXJuIGxlbmd0aDtcbiAgfVxuXG4gIGdldFRlcm0oaW5kZXgpIHtcbiAgICBjb25zdCB0ZXJtID0gdGhpcy5hcnJheVtpbmRleF0gfHwgbnVsbDsgIC8vL1xuXG4gICAgcmV0dXJuIHRlcm07XG4gIH1cblxuICBhZGRUZXJtKHRlcm0pIHtcbiAgICB0aGlzLmFycmF5LnB1c2godGVybSk7XG4gIH1cblxuICBtYXBUZXJtKGNhbGxiYWNrKSB7IHJldHVybiB0aGlzLmFycmF5Lm1hcChjYWxsYmFjayk7IH1cblxuICBmb3JFYWNoVGVybShjYWxsYmFjaykgeyB0aGlzLmFycmF5LmZvckVhY2goY2FsbGJhY2spOyB9XG5cbiAgZXZhbHVhdGUoY29udGV4dCkge1xuICAgIGNvbnN0IHRlcm1zQXJyYXkgPSB0aGlzLm1hcFRlcm0oKHRlcm0pID0+IHtcbiAgICAgICAgICAgIHRlcm0gPSB0ZXJtLmV2YWx1YXRlKGNvbnRleHQpO1xuXG4gICAgICAgICAgICByZXR1cm4gdGVybTtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICB0ZXJtc1N0cmluZyA9IHRlcm1zU3RyaW5nRnJvbVRlcm1zQXJyYXkodGVybXNBcnJheSwgY29udGV4dCksXG4gICAgICAgICAgc3RyaW5nID0gdGVybXNTdHJpbmcsIC8vL1xuICAgICAgICAgIGFycmF5ID0gdGVybXNBcnJheSwgLy8vXG4gICAgICAgICAgbm9kZSA9IG51bGw7XG5cbiAgICBjb250ZXh0ID0gbnVsbDtcblxuICAgIGNvbnN0IHRlcm1zID0gbmV3IFRlcm1zKGNvbnRleHQsIHN0cmluZywgbm9kZSwgYXJyYXkpO1xuXG4gICAgcmV0dXJuIHRlcm1zO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIlRlcm1zXCI7XG5cbiAgc3RhdGljIGZyb21UZXJtKHRlcm0sIGNvbnRleHQpIHtcbiAgICBjb25zdCB0ZXJtc0FycmF5ID0gW1xuICAgICAgICAgICAgdGVybVxuICAgICAgICAgIF0sXG4gICAgICAgICAgdGVybXNTdHJpbmcgPSB0ZXJtc1N0cmluZ0Zyb21UZXJtc0FycmF5KHRlcm1zQXJyYXksIGNvbnRleHQpLFxuICAgICAgICAgIHN0cmluZyA9IHRlcm1zU3RyaW5nLCAvLy9cbiAgICAgICAgICBhcnJheSA9IHRlcm1zQXJyYXksIC8vL1xuICAgICAgICAgIG5vZGUgPSBudWxsO1xuXG4gICAgY29udGV4dCA9IG51bGw7XG5cbiAgICBjb25zdCB0ZXJtcyA9IG5ldyBUZXJtcyhjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGFycmF5KTtcblxuICAgIHJldHVybiB0ZXJtcztcbiAgfVxufSk7XG4iXSwibmFtZXMiOlsiZGVmaW5lIiwiVGVybXMiLCJjb250ZXh0Iiwic3RyaW5nIiwibm9kZSIsImFycmF5IiwiZ2V0QXJyYXkiLCJnZXRMZW5ndGgiLCJsZW5ndGgiLCJnZXRUZXJtIiwiaW5kZXgiLCJ0ZXJtIiwiYWRkVGVybSIsInB1c2giLCJtYXBUZXJtIiwiY2FsbGJhY2siLCJtYXAiLCJmb3JFYWNoVGVybSIsImZvckVhY2giLCJldmFsdWF0ZSIsInRlcm1zQXJyYXkiLCJ0ZXJtc1N0cmluZyIsInRlcm1zU3RyaW5nRnJvbVRlcm1zQXJyYXkiLCJ0ZXJtcyIsImZyb21UZXJtIiwiRWxlbWVudCIsIm5hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQU9BOzs7ZUFBQTs7OzhCQUx3Qjt3QkFFRDtzQkFDbUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRTFDLFdBQWVBLElBQUFBLGdCQUFNLDBCQUFDOzthQUFNQyxNQUNkQyxPQUFPLEVBQUVDLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxLQUFLO2dDQURkSjs7Z0JBRXhCLGtCQUZ3QkE7WUFFbEJDO1lBQVNDO1lBQVFDOztRQUV2QixNQUFLQyxLQUFLLEdBQUdBOzs7OztZQUdmQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNELEtBQUs7WUFDbkI7OztZQUVBRSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsU0FBUyxJQUFJLENBQUNILEtBQUssQ0FBQ0csTUFBTTtnQkFFaEMsT0FBT0E7WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQSxRQUFRQyxLQUFLO2dCQUNYLElBQU1DLE9BQU8sSUFBSSxDQUFDTixLQUFLLENBQUNLLE1BQU0sSUFBSSxNQUFPLEdBQUc7Z0JBRTVDLE9BQU9DO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUEsUUFBUUQsSUFBSTtnQkFDVixJQUFJLENBQUNOLEtBQUssQ0FBQ1EsSUFBSSxDQUFDRjtZQUNsQjs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQSxRQUFRQyxRQUFRO2dCQUFJLE9BQU8sSUFBSSxDQUFDVixLQUFLLENBQUNXLEdBQUcsQ0FBQ0Q7WUFBVzs7O1lBRXJERSxLQUFBQTttQkFBQUEsU0FBQUEsWUFBWUYsUUFBUTtnQkFBSSxJQUFJLENBQUNWLEtBQUssQ0FBQ2EsT0FBTyxDQUFDSDtZQUFXOzs7WUFFdERJLEtBQUFBO21CQUFBQSxTQUFBQSxTQUFTakIsT0FBTztnQkFDZCxJQUFNa0IsYUFBYSxJQUFJLENBQUNOLE9BQU8sQ0FBQyxTQUFDSDtvQkFDekJBLE9BQU9BLEtBQUtRLFFBQVEsQ0FBQ2pCO29CQUVyQixPQUFPUztnQkFDVCxJQUNBVSxjQUFjQyxJQUFBQSxpQ0FBeUIsRUFBQ0YsWUFBWWxCLFVBQ3BEQyxTQUFTa0IsYUFDVGhCLFFBQVFlLFlBQ1JoQixPQUFPO2dCQUViRixVQUFVO2dCQUVWLElBQU1xQixRQUFRLElBQUl0QixNQUFNQyxTQUFTQyxRQUFRQyxNQUFNQztnQkFFL0MsT0FBT2tCO1lBQ1Q7Ozs7WUFJT0MsS0FBQUE7bUJBQVAsU0FBT0EsU0FBU2IsSUFBSSxFQUFFVCxPQUFPO2dCQUMzQixJQUFNa0IsYUFBYTtvQkFDWFQ7aUJBQ0QsRUFDRFUsY0FBY0MsSUFBQUEsaUNBQXlCLEVBQUNGLFlBQVlsQixVQUNwREMsU0FBU2tCLGFBQ1RoQixRQUFRZSxZQUNSaEIsT0FBTztnQkFFYkYsVUFBVTtnQkFFVixJQUFNcUIsUUFBUSxJQUFJdEIsTUFBTUMsU0FBU0MsUUFBUUMsTUFBTUM7Z0JBRS9DLE9BQU9rQjtZQUNUOzs7O3FCQWpFd0NFLHVCQUFPLElBaUQvQyx5QkFBT0MsUUFBTyJ9