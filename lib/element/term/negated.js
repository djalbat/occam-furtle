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
var _exception = /*#__PURE__*/ _interop_require_default(require("../../exception"));
var _elements = require("../../elements");
var _types = require("../../types");
var _term = require("../../utilities/term");
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
var _NegatedTerm;
var _default = (0, _elements.define)((_NegatedTerm = /*#__PURE__*/ function(Element) {
    _inherits(NegatedTerm, Element);
    function NegatedTerm(context, string, node, type, term) {
        _class_call_check(this, NegatedTerm);
        var _this;
        _this = _call_super(this, NegatedTerm, [
            context,
            string,
            node
        ]);
        _this.type = type;
        _this.term = term;
        return _this;
    }
    _create_class(NegatedTerm, [
        {
            key: "getType",
            value: function getType() {
                return this.type;
            }
        },
        {
            key: "getTerm",
            value: function getTerm() {
                return this.term;
            }
        },
        {
            key: "evaluate",
            value: function evaluate(context) {
                var term;
                var negatedTermString = this.getString(); ///
                context.trace("Evaluating the '".concat(negatedTermString, "' negated term..."));
                term = this.term.evaluate(context);
                var termType = term.getType();
                if (termType !== _types.BOOLEAN_TYPE) {
                    var termString = term.getString(), message = "The '".concat(termString, "' left term's type is '").concat(termType, "' when it should be of type '").concat(_types.BOOLEAN_TYPE, "'."), exception = _exception.default.fromMessage(message);
                    throw exception;
                }
                var boolean;
                var primitiveValue = term.getPrimitiveValue();
                boolean = primitiveValue; ///
                boolean = !boolean;
                term = (0, _term.termFromBoolean)(boolean, context);
                var termString1 = term.getString();
                context.debug("...evaluated the '".concat(negatedTermString, "' negated term as '").concat(termString1, "'."));
                return term;
            }
        }
    ]);
    return NegatedTerm;
}(_wrap_native_super(_element.default)), _define_property(_NegatedTerm, "name", "NegatedTerm"), _NegatedTerm));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L3Rlcm0vbmVnYXRlZC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEVsZW1lbnQgZnJvbSBcIi4uLy4uL2VsZW1lbnRcIjtcbmltcG9ydCBFeGNlcHRpb24gZnJvbSBcIi4uLy4uL2V4Y2VwdGlvblwiO1xuXG5pbXBvcnQgeyBkZWZpbmUgfSBmcm9tIFwiLi4vLi4vZWxlbWVudHNcIjtcbmltcG9ydCB7IEJPT0xFQU5fVFlQRSB9IGZyb20gXCIuLi8uLi90eXBlc1wiO1xuaW1wb3J0IHsgdGVybUZyb21Cb29sZWFuIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy90ZXJtXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZShjbGFzcyBOZWdhdGVkVGVybSBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIHR5cGUsIHRlcm0pIHtcbiAgICBzdXBlcihjb250ZXh0LCBzdHJpbmcsIG5vZGUpXG5cbiAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICAgIHRoaXMudGVybSA9IHRlcm07XG4gIH1cblxuICBnZXRUeXBlKCkge1xuICAgIHJldHVybiB0aGlzLnR5cGU7XG4gIH1cblxuICBnZXRUZXJtKCkge1xuICAgIHJldHVybiB0aGlzLnRlcm07XG4gIH1cblxuICBldmFsdWF0ZShjb250ZXh0KSB7XG4gICAgbGV0IHRlcm07XG5cbiAgICBjb25zdCBuZWdhdGVkVGVybVN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgRXZhbHVhdGluZyB0aGUgJyR7bmVnYXRlZFRlcm1TdHJpbmd9JyBuZWdhdGVkIHRlcm0uLi5gKTtcblxuICAgIHRlcm0gPSB0aGlzLnRlcm0uZXZhbHVhdGUoY29udGV4dCk7XG5cbiAgICBjb25zdCB0ZXJtVHlwZSA9IHRlcm0uZ2V0VHlwZSgpO1xuXG4gICAgaWYgKHRlcm1UeXBlICE9PSBCT09MRUFOX1RZUEUpIHtcbiAgICAgIGNvbnN0IHRlcm1TdHJpbmcgPSB0ZXJtLmdldFN0cmluZygpLFxuICAgICAgICAgICAgbWVzc2FnZSA9IGBUaGUgJyR7dGVybVN0cmluZ30nIGxlZnQgdGVybSdzIHR5cGUgaXMgJyR7dGVybVR5cGV9JyB3aGVuIGl0IHNob3VsZCBiZSBvZiB0eXBlICcke0JPT0xFQU5fVFlQRX0nLmAsXG4gICAgICAgICAgICBleGNlcHRpb24gPSBFeGNlcHRpb24uZnJvbU1lc3NhZ2UobWVzc2FnZSk7XG5cbiAgICAgIHRocm93IGV4Y2VwdGlvbjtcbiAgICB9XG5cbiAgICBsZXQgYm9vbGVhbjtcblxuICAgIGNvbnN0IHByaW1pdGl2ZVZhbHVlID0gdGVybS5nZXRQcmltaXRpdmVWYWx1ZSgpO1xuXG4gICAgYm9vbGVhbiA9IHByaW1pdGl2ZVZhbHVlOyAvLy9cblxuICAgIGJvb2xlYW4gPSAhYm9vbGVhbjtcblxuICAgIHRlcm0gPSB0ZXJtRnJvbUJvb2xlYW4oYm9vbGVhbiwgY29udGV4dCk7XG5cbiAgICBjb25zdCB0ZXJtU3RyaW5nID0gdGVybS5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQuZGVidWcoYC4uLmV2YWx1YXRlZCB0aGUgJyR7bmVnYXRlZFRlcm1TdHJpbmd9JyBuZWdhdGVkIHRlcm0gYXMgJyR7dGVybVN0cmluZ30nLmApO1xuXG4gICAgcmV0dXJuIHRlcm07XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiTmVnYXRlZFRlcm1cIjtcbn0pO1xuIl0sIm5hbWVzIjpbImRlZmluZSIsIk5lZ2F0ZWRUZXJtIiwiY29udGV4dCIsInN0cmluZyIsIm5vZGUiLCJ0eXBlIiwidGVybSIsImdldFR5cGUiLCJnZXRUZXJtIiwiZXZhbHVhdGUiLCJuZWdhdGVkVGVybVN0cmluZyIsImdldFN0cmluZyIsInRyYWNlIiwidGVybVR5cGUiLCJCT09MRUFOX1RZUEUiLCJ0ZXJtU3RyaW5nIiwibWVzc2FnZSIsImV4Y2VwdGlvbiIsIkV4Y2VwdGlvbiIsImZyb21NZXNzYWdlIiwiYm9vbGVhbiIsInByaW1pdGl2ZVZhbHVlIiwiZ2V0UHJpbWl0aXZlVmFsdWUiLCJ0ZXJtRnJvbUJvb2xlYW4iLCJkZWJ1ZyIsIkVsZW1lbnQiLCJuYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFTQTs7O2VBQUE7Ozs4REFQb0I7Z0VBQ0U7d0JBRUM7cUJBQ007b0JBQ0c7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFaEMsV0FBZUEsSUFBQUEsZ0JBQU0sZ0NBQUM7O2FBQU1DLFlBQ2RDLE9BQU8sRUFBRUMsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLElBQUksRUFBRUMsSUFBSTtnQ0FEbkJMOztnQkFFeEIsa0JBRndCQTtZQUVsQkM7WUFBU0M7WUFBUUM7O1FBRXZCLE1BQUtDLElBQUksR0FBR0E7UUFDWixNQUFLQyxJQUFJLEdBQUdBOzs7OztZQUdkQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNGLElBQUk7WUFDbEI7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNGLElBQUk7WUFDbEI7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUEsU0FBU1AsT0FBTztnQkFDZCxJQUFJSTtnQkFFSixJQUFNSSxvQkFBb0IsSUFBSSxDQUFDQyxTQUFTLElBQUksR0FBRztnQkFFL0NULFFBQVFVLEtBQUssQ0FBQyxBQUFDLG1CQUFvQyxPQUFsQkYsbUJBQWtCO2dCQUVuREosT0FBTyxJQUFJLENBQUNBLElBQUksQ0FBQ0csUUFBUSxDQUFDUDtnQkFFMUIsSUFBTVcsV0FBV1AsS0FBS0MsT0FBTztnQkFFN0IsSUFBSU0sYUFBYUMsbUJBQVksRUFBRTtvQkFDN0IsSUFBTUMsYUFBYVQsS0FBS0ssU0FBUyxJQUMzQkssVUFBVSxBQUFDLFFBQTJDSCxPQUFwQ0UsWUFBVywyQkFBaUVELE9BQXhDRCxVQUFTLGlDQUE0QyxPQUFiQyxtQkFBWSxFQUFDLE9BQzNHRyxZQUFZQyxrQkFBUyxDQUFDQyxXQUFXLENBQUNIO29CQUV4QyxNQUFNQztnQkFDUjtnQkFFQSxJQUFJRztnQkFFSixJQUFNQyxpQkFBaUJmLEtBQUtnQixpQkFBaUI7Z0JBRTdDRixVQUFVQyxnQkFBZ0IsR0FBRztnQkFFN0JELFVBQVUsQ0FBQ0E7Z0JBRVhkLE9BQU9pQixJQUFBQSxxQkFBZSxFQUFDSCxTQUFTbEI7Z0JBRWhDLElBQU1hLGNBQWFULEtBQUtLLFNBQVM7Z0JBRWpDVCxRQUFRc0IsS0FBSyxDQUFDLEFBQUMscUJBQTJEVCxPQUF2Q0wsbUJBQWtCLHVCQUFnQyxPQUFYSyxhQUFXO2dCQUVyRixPQUFPVDtZQUNUOzs7O3FCQWxEOENtQixnQkFBTyxJQW9EckQsK0JBQU9DLFFBQU8ifQ==