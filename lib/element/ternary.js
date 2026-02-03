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
var _types = require("../types");
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
var _Ternary;
var _default = (0, _elements.define)((_Ternary = /*#__PURE__*/ function(Element) {
    _inherits(Ternary, Element);
    function Ternary(context, string, node, term, ifExpression, elseExpression) {
        _class_call_check(this, Ternary);
        var _this;
        _this = _call_super(this, Ternary, [
            context,
            string,
            node
        ]);
        _this.term = term;
        _this.ifExpression = ifExpression;
        _this.elseExpression = elseExpression;
        return _this;
    }
    _create_class(Ternary, [
        {
            key: "getTerm",
            value: function getTerm() {
                return this.term;
            }
        },
        {
            key: "getIfBlock",
            value: function getIfBlock() {
                return this.ifExpression;
            }
        },
        {
            key: "getElseBlock",
            value: function getElseBlock() {
                return this.elseExpression;
            }
        },
        {
            key: "evaluate",
            value: function evaluate(context) {
                var term;
                var ternaryString = this.getString(); ///
                context.trace("Evaluating the '".concat(ternaryString, "' ternary..."));
                term = this.term.evaluate(context);
                var termType = term.getType();
                if (termType !== _types.BOOLEAN_TYPE) {
                    var termString = term.getString(), message = "The '".concat(termString, "' term's type is '").concat(termType, "' when it should be of type '").concat(_types.BOOLEAN_TYPE, "'."), exception = _exception.default.fromMessage(message);
                    throw exception;
                }
                var primitiveValue = term.getPrimitiveValue(), boolean = primitiveValue; ///
                term = boolean ? this.ifExpression.evaluate(context) : this.elseExpression.evaluate(context);
                var termString1 = term.getString();
                context.debug("...evaluated the '".concat(ternaryString, "' ternary as '").concat(termString1, "'."));
                return term;
            }
        }
    ]);
    return Ternary;
}(_wrap_native_super(_element.default)), _define_property(_Ternary, "name", "Ternary"), _Ternary));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3Rlcm5hcnkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBFbGVtZW50IGZyb20gXCIuLi9lbGVtZW50XCI7XG5pbXBvcnQgRXhjZXB0aW9uIGZyb20gXCIuLi9leGNlcHRpb25cIjtcblxuaW1wb3J0IHsgZGVmaW5lIH0gZnJvbSBcIi4uL2VsZW1lbnRzXCI7XG5pbXBvcnQgeyBCT09MRUFOX1RZUEUgfSBmcm9tIFwiLi4vdHlwZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lKGNsYXNzIFRlcm5hcnkgZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgc3RyaW5nLCBub2RlLCB0ZXJtLCBpZkV4cHJlc3Npb24sIGVsc2VFeHByZXNzaW9uKSB7XG4gICAgc3VwZXIoY29udGV4dCwgc3RyaW5nLCBub2RlKVxuXG4gICAgdGhpcy50ZXJtID0gdGVybTtcbiAgICB0aGlzLmlmRXhwcmVzc2lvbiA9IGlmRXhwcmVzc2lvbjtcbiAgICB0aGlzLmVsc2VFeHByZXNzaW9uID0gZWxzZUV4cHJlc3Npb247XG4gIH1cblxuICBnZXRUZXJtKCkge1xuICAgIHJldHVybiB0aGlzLnRlcm07XG4gIH1cblxuICBnZXRJZkJsb2NrKCkge1xuICAgIHJldHVybiB0aGlzLmlmRXhwcmVzc2lvbjtcbiAgfVxuXG4gIGdldEVsc2VCbG9jaygpIHtcbiAgICByZXR1cm4gdGhpcy5lbHNlRXhwcmVzc2lvbjtcbiAgfVxuXG4gIGV2YWx1YXRlKGNvbnRleHQpIHtcbiAgICBsZXQgdGVybTtcblxuICAgIGNvbnN0IHRlcm5hcnlTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYEV2YWx1YXRpbmcgdGhlICcke3Rlcm5hcnlTdHJpbmd9JyB0ZXJuYXJ5Li4uYCk7XG5cbiAgICB0ZXJtID0gdGhpcy50ZXJtLmV2YWx1YXRlKGNvbnRleHQpO1xuXG4gICAgY29uc3QgdGVybVR5cGUgPSB0ZXJtLmdldFR5cGUoKTtcblxuICAgIGlmICh0ZXJtVHlwZSAhPT0gQk9PTEVBTl9UWVBFKSB7XG4gICAgICBjb25zdCB0ZXJtU3RyaW5nID0gdGVybS5nZXRTdHJpbmcoKSxcbiAgICAgICAgICAgIG1lc3NhZ2UgPSBgVGhlICcke3Rlcm1TdHJpbmd9JyB0ZXJtJ3MgdHlwZSBpcyAnJHt0ZXJtVHlwZX0nIHdoZW4gaXQgc2hvdWxkIGJlIG9mIHR5cGUgJyR7Qk9PTEVBTl9UWVBFfScuYCxcbiAgICAgICAgICAgIGV4Y2VwdGlvbiA9IEV4Y2VwdGlvbi5mcm9tTWVzc2FnZShtZXNzYWdlKTtcblxuICAgICAgdGhyb3cgZXhjZXB0aW9uO1xuICAgIH1cblxuICAgIGNvbnN0IHByaW1pdGl2ZVZhbHVlID0gdGVybS5nZXRQcmltaXRpdmVWYWx1ZSgpLFxuICAgICAgICAgIGJvb2xlYW4gPSBwcmltaXRpdmVWYWx1ZTsgLy8vXG5cbiAgICB0ZXJtID0gYm9vbGVhbiA/XG4gICAgICAgICAgICAgIHRoaXMuaWZFeHByZXNzaW9uLmV2YWx1YXRlKGNvbnRleHQpIDpcbiAgICAgICAgICAgICAgICB0aGlzLmVsc2VFeHByZXNzaW9uLmV2YWx1YXRlKGNvbnRleHQpO1xuXG4gICAgY29uc3QgdGVybVN0cmluZyA9IHRlcm0uZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LmRlYnVnKGAuLi5ldmFsdWF0ZWQgdGhlICcke3Rlcm5hcnlTdHJpbmd9JyB0ZXJuYXJ5IGFzICcke3Rlcm1TdHJpbmd9Jy5gKTtcblxuICAgIHJldHVybiB0ZXJtO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIlRlcm5hcnlcIjtcbn0pO1xuIl0sIm5hbWVzIjpbImRlZmluZSIsIlRlcm5hcnkiLCJjb250ZXh0Iiwic3RyaW5nIiwibm9kZSIsInRlcm0iLCJpZkV4cHJlc3Npb24iLCJlbHNlRXhwcmVzc2lvbiIsImdldFRlcm0iLCJnZXRJZkJsb2NrIiwiZ2V0RWxzZUJsb2NrIiwiZXZhbHVhdGUiLCJ0ZXJuYXJ5U3RyaW5nIiwiZ2V0U3RyaW5nIiwidHJhY2UiLCJ0ZXJtVHlwZSIsImdldFR5cGUiLCJCT09MRUFOX1RZUEUiLCJ0ZXJtU3RyaW5nIiwibWVzc2FnZSIsImV4Y2VwdGlvbiIsIkV4Y2VwdGlvbiIsImZyb21NZXNzYWdlIiwicHJpbWl0aXZlVmFsdWUiLCJnZXRQcmltaXRpdmVWYWx1ZSIsImJvb2xlYW4iLCJkZWJ1ZyIsIkVsZW1lbnQiLCJuYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFRQTs7O2VBQUE7Ozs4REFOb0I7Z0VBQ0U7d0JBRUM7cUJBQ007Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFN0IsV0FBZUEsSUFBQUEsZ0JBQU0sNEJBQUM7O2FBQU1DLFFBQ2RDLE9BQU8sRUFBRUMsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLElBQUksRUFBRUMsWUFBWSxFQUFFQyxjQUFjO2dDQUQzQ047O2dCQUV4QixrQkFGd0JBO1lBRWxCQztZQUFTQztZQUFRQzs7UUFFdkIsTUFBS0MsSUFBSSxHQUFHQTtRQUNaLE1BQUtDLFlBQVksR0FBR0E7UUFDcEIsTUFBS0MsY0FBYyxHQUFHQTs7Ozs7WUFHeEJDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0gsSUFBSTtZQUNsQjs7O1lBRUFJLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0gsWUFBWTtZQUMxQjs7O1lBRUFJLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0gsY0FBYztZQUM1Qjs7O1lBRUFJLEtBQUFBO21CQUFBQSxTQUFBQSxTQUFTVCxPQUFPO2dCQUNkLElBQUlHO2dCQUVKLElBQU1PLGdCQUFnQixJQUFJLENBQUNDLFNBQVMsSUFBSSxHQUFHO2dCQUUzQ1gsUUFBUVksS0FBSyxDQUFDLEFBQUMsbUJBQWdDLE9BQWRGLGVBQWM7Z0JBRS9DUCxPQUFPLElBQUksQ0FBQ0EsSUFBSSxDQUFDTSxRQUFRLENBQUNUO2dCQUUxQixJQUFNYSxXQUFXVixLQUFLVyxPQUFPO2dCQUU3QixJQUFJRCxhQUFhRSxtQkFBWSxFQUFFO29CQUM3QixJQUFNQyxhQUFhYixLQUFLUSxTQUFTLElBQzNCTSxVQUFVLEFBQUMsUUFBc0NKLE9BQS9CRyxZQUFXLHNCQUE0REQsT0FBeENGLFVBQVMsaUNBQTRDLE9BQWJFLG1CQUFZLEVBQUMsT0FDdEdHLFlBQVlDLGtCQUFTLENBQUNDLFdBQVcsQ0FBQ0g7b0JBRXhDLE1BQU1DO2dCQUNSO2dCQUVBLElBQU1HLGlCQUFpQmxCLEtBQUttQixpQkFBaUIsSUFDdkNDLFVBQVVGLGdCQUFnQixHQUFHO2dCQUVuQ2xCLE9BQU9vQixVQUNHLElBQUksQ0FBQ25CLFlBQVksQ0FBQ0ssUUFBUSxDQUFDVCxXQUN6QixJQUFJLENBQUNLLGNBQWMsQ0FBQ0ksUUFBUSxDQUFDVDtnQkFFekMsSUFBTWdCLGNBQWFiLEtBQUtRLFNBQVM7Z0JBRWpDWCxRQUFRd0IsS0FBSyxDQUFDLEFBQUMscUJBQWtEUixPQUE5Qk4sZUFBYyxrQkFBMkIsT0FBWE0sYUFBVztnQkFFNUUsT0FBT2I7WUFDVDs7OztxQkFwRDBDc0IsZ0JBQU8sSUFzRGpELDJCQUFPQyxRQUFPIn0=