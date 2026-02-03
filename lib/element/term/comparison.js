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
var _ComparisonTerm;
var _default = (0, _elements.define)((_ComparisonTerm = /*#__PURE__*/ function(Element) {
    _inherits(ComparisonTerm, Element);
    function ComparisonTerm(context, string, node, negated, leftTerm, rightTerm) {
        _class_call_check(this, ComparisonTerm);
        var _this;
        _this = _call_super(this, ComparisonTerm, [
            context,
            string,
            node
        ]);
        _this.negated = negated;
        _this.leftTerm = leftTerm;
        _this.rightTerm = rightTerm;
        return _this;
    }
    _create_class(ComparisonTerm, [
        {
            key: "isNegated",
            value: function isNegated() {
                return this.negated;
            }
        },
        {
            key: "getLeftTerm",
            value: function getLeftTerm() {
                return this.leftTerm;
            }
        },
        {
            key: "getRightTerm",
            value: function getRightTerm() {
                return this.rightTerm;
            }
        },
        {
            key: "evaluate",
            value: function evaluate(context) {
                var term;
                var comparisonTermString = this.getString(); ///
                context.trace("Evaluating the '".concat(comparisonTermString, "' comparison term..."));
                var leftTerm = this.leftTerm.evaluate(context), rightTerm = this.rightTerm.evaluate(context), leftTermType = leftTerm.getType(), rightTermType = rightTerm.getType();
                if (leftTermType !== rightTermType) {
                    var leftTermString = leftTerm.getString(), rightTermString = rightTerm.getString(), message = "The '".concat(leftTermString, "' left term's type is '").concat(leftTermType, "' whereas the '").concat(rightTermString, "' right term's type is '").concat(rightTermType, "'."), exception = _exception.default.fromMessage(message);
                    throw exception;
                }
                var leftTermEqualToRightTerm = leftTerm.isEqualTo(rightTerm);
                var boolean = leftTermEqualToRightTerm; ///
                if (this.negated) {
                    boolean = !boolean; ///
                }
                term = (0, _term.termFromBoolean)(boolean, context);
                var termString = term.getString();
                context.debug("...evaluated the '".concat(comparisonTermString, "' comparison term as '").concat(termString, "'."));
                return term;
            }
        }
    ]);
    return ComparisonTerm;
}(_wrap_native_super(_element.default)), _define_property(_ComparisonTerm, "name", "ComparisonTerm"), _ComparisonTerm));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L3Rlcm0vY29tcGFyaXNvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEVsZW1lbnQgZnJvbSBcIi4uLy4uL2VsZW1lbnRcIjtcbmltcG9ydCBFeGNlcHRpb24gZnJvbSBcIi4uLy4uL2V4Y2VwdGlvblwiO1xuXG5pbXBvcnQgeyBkZWZpbmUgfSBmcm9tIFwiLi4vLi4vZWxlbWVudHNcIjtcbmltcG9ydCB7IHRlcm1Gcm9tQm9vbGVhbiB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvdGVybVwiO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmUoY2xhc3MgQ29tcGFyaXNvblRlcm0gZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgc3RyaW5nLCBub2RlLCBuZWdhdGVkLCBsZWZ0VGVybSwgcmlnaHRUZXJtKSB7XG4gICAgc3VwZXIoY29udGV4dCwgc3RyaW5nLCBub2RlKVxuXG4gICAgdGhpcy5uZWdhdGVkID0gbmVnYXRlZDtcbiAgICB0aGlzLmxlZnRUZXJtID0gbGVmdFRlcm07XG4gICAgdGhpcy5yaWdodFRlcm0gPSByaWdodFRlcm07XG4gIH1cblxuICBpc05lZ2F0ZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMubmVnYXRlZDtcbiAgfVxuXG4gIGdldExlZnRUZXJtKCkge1xuICAgIHJldHVybiB0aGlzLmxlZnRUZXJtO1xuICB9XG5cbiAgZ2V0UmlnaHRUZXJtKCkge1xuICAgIHJldHVybiB0aGlzLnJpZ2h0VGVybTtcbiAgfVxuXG4gIGV2YWx1YXRlKGNvbnRleHQpIHtcbiAgICBsZXQgdGVybTtcblxuICAgIGNvbnN0IGNvbXBhcmlzb25UZXJtU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBFdmFsdWF0aW5nIHRoZSAnJHtjb21wYXJpc29uVGVybVN0cmluZ30nIGNvbXBhcmlzb24gdGVybS4uLmApO1xuXG4gICAgY29uc3QgbGVmdFRlcm0gPSB0aGlzLmxlZnRUZXJtLmV2YWx1YXRlKGNvbnRleHQpLFxuICAgICAgICAgIHJpZ2h0VGVybSA9IHRoaXMucmlnaHRUZXJtLmV2YWx1YXRlKGNvbnRleHQpLFxuICAgICAgICAgIGxlZnRUZXJtVHlwZSA9IGxlZnRUZXJtLmdldFR5cGUoKSxcbiAgICAgICAgICByaWdodFRlcm1UeXBlID0gcmlnaHRUZXJtLmdldFR5cGUoKTtcblxuICAgIGlmIChsZWZ0VGVybVR5cGUgIT09IHJpZ2h0VGVybVR5cGUpIHtcbiAgICAgIGNvbnN0IGxlZnRUZXJtU3RyaW5nID0gbGVmdFRlcm0uZ2V0U3RyaW5nKCksXG4gICAgICAgICAgICByaWdodFRlcm1TdHJpbmcgPSByaWdodFRlcm0uZ2V0U3RyaW5nKCksXG4gICAgICAgICAgICBtZXNzYWdlID0gYFRoZSAnJHtsZWZ0VGVybVN0cmluZ30nIGxlZnQgdGVybSdzIHR5cGUgaXMgJyR7bGVmdFRlcm1UeXBlfScgd2hlcmVhcyB0aGUgJyR7cmlnaHRUZXJtU3RyaW5nfScgcmlnaHQgdGVybSdzIHR5cGUgaXMgJyR7cmlnaHRUZXJtVHlwZX0nLmAsXG4gICAgICAgICAgICBleGNlcHRpb24gPSBFeGNlcHRpb24uZnJvbU1lc3NhZ2UobWVzc2FnZSk7XG5cbiAgICAgIHRocm93IGV4Y2VwdGlvbjtcbiAgICB9XG5cbiAgICBjb25zdCBsZWZ0VGVybUVxdWFsVG9SaWdodFRlcm0gPSBsZWZ0VGVybS5pc0VxdWFsVG8ocmlnaHRUZXJtKTtcblxuICAgIGxldCBib29sZWFuID0gbGVmdFRlcm1FcXVhbFRvUmlnaHRUZXJtOyAvLy9cblxuICAgIGlmICh0aGlzLm5lZ2F0ZWQpIHtcbiAgICAgIGJvb2xlYW4gPSAhYm9vbGVhbjsgLy8vXG4gICAgfVxuXG4gICAgdGVybSA9IHRlcm1Gcm9tQm9vbGVhbihib29sZWFuLCBjb250ZXh0KTtcblxuICAgIGNvbnN0IHRlcm1TdHJpbmcgPSB0ZXJtLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC5kZWJ1ZyhgLi4uZXZhbHVhdGVkIHRoZSAnJHtjb21wYXJpc29uVGVybVN0cmluZ30nIGNvbXBhcmlzb24gdGVybSBhcyAnJHt0ZXJtU3RyaW5nfScuYCk7XG5cbiAgICByZXR1cm4gdGVybTtcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJDb21wYXJpc29uVGVybVwiO1xufSk7XG4iXSwibmFtZXMiOlsiZGVmaW5lIiwiQ29tcGFyaXNvblRlcm0iLCJjb250ZXh0Iiwic3RyaW5nIiwibm9kZSIsIm5lZ2F0ZWQiLCJsZWZ0VGVybSIsInJpZ2h0VGVybSIsImlzTmVnYXRlZCIsImdldExlZnRUZXJtIiwiZ2V0UmlnaHRUZXJtIiwiZXZhbHVhdGUiLCJ0ZXJtIiwiY29tcGFyaXNvblRlcm1TdHJpbmciLCJnZXRTdHJpbmciLCJ0cmFjZSIsImxlZnRUZXJtVHlwZSIsImdldFR5cGUiLCJyaWdodFRlcm1UeXBlIiwibGVmdFRlcm1TdHJpbmciLCJyaWdodFRlcm1TdHJpbmciLCJtZXNzYWdlIiwiZXhjZXB0aW9uIiwiRXhjZXB0aW9uIiwiZnJvbU1lc3NhZ2UiLCJsZWZ0VGVybUVxdWFsVG9SaWdodFRlcm0iLCJpc0VxdWFsVG8iLCJib29sZWFuIiwidGVybUZyb21Cb29sZWFuIiwidGVybVN0cmluZyIsImRlYnVnIiwiRWxlbWVudCIsIm5hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVFBOzs7ZUFBQTs7OzhEQU5vQjtnRUFDRTt3QkFFQztvQkFDUzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVoQyxXQUFlQSxJQUFBQSxnQkFBTSxtQ0FBQzs7YUFBTUMsZUFDZEMsT0FBTyxFQUFFQyxNQUFNLEVBQUVDLElBQUksRUFBRUMsT0FBTyxFQUFFQyxRQUFRLEVBQUVDLFNBQVM7Z0NBRHJDTjs7Z0JBRXhCLGtCQUZ3QkE7WUFFbEJDO1lBQVNDO1lBQVFDOztRQUV2QixNQUFLQyxPQUFPLEdBQUdBO1FBQ2YsTUFBS0MsUUFBUSxHQUFHQTtRQUNoQixNQUFLQyxTQUFTLEdBQUdBOzs7OztZQUduQkMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSCxPQUFPO1lBQ3JCOzs7WUFFQUksS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSCxRQUFRO1lBQ3RCOzs7WUFFQUksS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSCxTQUFTO1lBQ3ZCOzs7WUFFQUksS0FBQUE7bUJBQUFBLFNBQUFBLFNBQVNULE9BQU87Z0JBQ2QsSUFBSVU7Z0JBRUosSUFBTUMsdUJBQXVCLElBQUksQ0FBQ0MsU0FBUyxJQUFJLEdBQUc7Z0JBRWxEWixRQUFRYSxLQUFLLENBQUMsQUFBQyxtQkFBdUMsT0FBckJGLHNCQUFxQjtnQkFFdEQsSUFBTVAsV0FBVyxJQUFJLENBQUNBLFFBQVEsQ0FBQ0ssUUFBUSxDQUFDVCxVQUNsQ0ssWUFBWSxJQUFJLENBQUNBLFNBQVMsQ0FBQ0ksUUFBUSxDQUFDVCxVQUNwQ2MsZUFBZVYsU0FBU1csT0FBTyxJQUMvQkMsZ0JBQWdCWCxVQUFVVSxPQUFPO2dCQUV2QyxJQUFJRCxpQkFBaUJFLGVBQWU7b0JBQ2xDLElBQU1DLGlCQUFpQmIsU0FBU1EsU0FBUyxJQUNuQ00sa0JBQWtCYixVQUFVTyxTQUFTLElBQ3JDTyxVQUFVLEFBQUMsUUFBK0NMLE9BQXhDRyxnQkFBZSwyQkFBdURDLE9BQTlCSixjQUFhLG1CQUEyREUsT0FBMUNFLGlCQUFnQiw0QkFBd0MsT0FBZEYsZUFBYyxPQUNoSkksWUFBWUMsa0JBQVMsQ0FBQ0MsV0FBVyxDQUFDSDtvQkFFeEMsTUFBTUM7Z0JBQ1I7Z0JBRUEsSUFBTUcsMkJBQTJCbkIsU0FBU29CLFNBQVMsQ0FBQ25CO2dCQUVwRCxJQUFJb0IsVUFBVUYsMEJBQTBCLEdBQUc7Z0JBRTNDLElBQUksSUFBSSxDQUFDcEIsT0FBTyxFQUFFO29CQUNoQnNCLFVBQVUsQ0FBQ0EsU0FBUyxHQUFHO2dCQUN6QjtnQkFFQWYsT0FBT2dCLElBQUFBLHFCQUFlLEVBQUNELFNBQVN6QjtnQkFFaEMsSUFBTTJCLGFBQWFqQixLQUFLRSxTQUFTO2dCQUVqQ1osUUFBUTRCLEtBQUssQ0FBQyxBQUFDLHFCQUFpRUQsT0FBN0NoQixzQkFBcUIsMEJBQW1DLE9BQVhnQixZQUFXO2dCQUUzRixPQUFPakI7WUFDVDs7OztxQkF6RGlEbUIsZ0JBQU8sSUEyRHhELGtDQUFPQyxRQUFPIn0=