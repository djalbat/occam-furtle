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
var _LogicalTerm;
var _default = (0, _elements.define)((_LogicalTerm = /*#__PURE__*/ function(Element) {
    _inherits(LogicalTerm, Element);
    function LogicalTerm(context, string, node, type, disjunction, leftTerm, rightTerm) {
        _class_call_check(this, LogicalTerm);
        var _this;
        _this = _call_super(this, LogicalTerm, [
            context,
            string,
            node
        ]);
        _this.type = type;
        _this.disjunction = disjunction;
        _this.leftTerm = leftTerm;
        _this.rightTerm = rightTerm;
        return _this;
    }
    _create_class(LogicalTerm, [
        {
            key: "getType",
            value: function getType() {
                return this.type;
            }
        },
        {
            key: "isDisjunction",
            value: function isDisjunction() {
                return this.disjunction;
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
                var logicalTermString = this.getString(); ///
                context.trace("Evaluating the '".concat(logicalTermString, "' logical term..."));
                var leftTerm = this.leftTerm.evaluate(context), rightTerm = this.rightTerm.evaluate(context), leftTermType = leftTerm.getType(), rightTermType = rightTerm.getType();
                if (leftTermType !== _types.BOOLEAN_TYPE) {
                    var leftTermString = leftTerm.getString(), message = "The '".concat(leftTermString, "' left term's type is '").concat(leftTermType, "' when it should be of type '").concat(_types.BOOLEAN_TYPE, "'."), exception = _exception.default.fromMessage(message);
                    throw exception;
                }
                if (rightTermType !== _types.BOOLEAN_TYPE) {
                    var rightTermString = rightTerm.getString(), message1 = "The '".concat(rightTermString, "' right term's type is '").concat(rightTermType, "' when it should be of type '").concat(_types.BOOLEAN_TYPE, "'."), exception1 = _exception.default.fromMessage(message1);
                    throw exception1;
                }
                var leftTermPrimitiveValue = leftTerm.getPrimitiveValue(), rightTermPrimitiveValue = rightTerm.getPrimitiveValue(), leftBoolean = leftTermPrimitiveValue, rightBoolean = rightTermPrimitiveValue, boolean = this.disjunction ? leftBoolean || rightBoolean : leftBoolean && rightBoolean;
                term = (0, _term.termFromBoolean)(boolean, context);
                var termString = term.getString();
                context.debug("...evaluated the '".concat(logicalTermString, "' logical term as '").concat(termString, "'."));
                return term;
            }
        }
    ]);
    return LogicalTerm;
}(_wrap_native_super(_occamlanguages.Element)), _define_property(_LogicalTerm, "name", "LogicalTerm"), _LogicalTerm));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L3Rlcm0vbG9naWNhbC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgRWxlbWVudCB9IGZyb20gXCJvY2NhbS1sYW5ndWFnZXNcIjtcblxuaW1wb3J0IEV4Y2VwdGlvbiBmcm9tIFwiLi4vLi4vZXhjZXB0aW9uXCI7XG5cbmltcG9ydCB7IGRlZmluZSB9IGZyb20gXCIuLi8uLi9lbGVtZW50c1wiO1xuaW1wb3J0IHsgQk9PTEVBTl9UWVBFIH0gZnJvbSBcIi4uLy4uL3R5cGVzXCI7XG5pbXBvcnQgeyB0ZXJtRnJvbUJvb2xlYW4gfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL3Rlcm1cIjtcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lKGNsYXNzIExvZ2ljYWxUZXJtIGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKGNvbnRleHQsIHN0cmluZywgbm9kZSwgdHlwZSwgZGlzanVuY3Rpb24sIGxlZnRUZXJtLCByaWdodFRlcm0pIHtcbiAgICBzdXBlcihjb250ZXh0LCBzdHJpbmcsIG5vZGUpXG5cbiAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICAgIHRoaXMuZGlzanVuY3Rpb24gPSBkaXNqdW5jdGlvbjtcbiAgICB0aGlzLmxlZnRUZXJtID0gbGVmdFRlcm07XG4gICAgdGhpcy5yaWdodFRlcm0gPSByaWdodFRlcm07XG4gIH1cblxuICBnZXRUeXBlKCkge1xuICAgIHJldHVybiB0aGlzLnR5cGU7XG4gIH1cblxuICBpc0Rpc2p1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmRpc2p1bmN0aW9uO1xuICB9XG5cbiAgZ2V0TGVmdFRlcm0oKSB7XG4gICAgcmV0dXJuIHRoaXMubGVmdFRlcm07XG4gIH1cblxuICBnZXRSaWdodFRlcm0oKSB7XG4gICAgcmV0dXJuIHRoaXMucmlnaHRUZXJtO1xuICB9XG5cbiAgZXZhbHVhdGUoY29udGV4dCkge1xuICAgIGxldCB0ZXJtO1xuXG4gICAgY29uc3QgbG9naWNhbFRlcm1TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYEV2YWx1YXRpbmcgdGhlICcke2xvZ2ljYWxUZXJtU3RyaW5nfScgbG9naWNhbCB0ZXJtLi4uYCk7XG5cbiAgICBjb25zdCBsZWZ0VGVybSA9IHRoaXMubGVmdFRlcm0uZXZhbHVhdGUoY29udGV4dCksXG4gICAgICAgICAgcmlnaHRUZXJtID0gdGhpcy5yaWdodFRlcm0uZXZhbHVhdGUoY29udGV4dCksXG4gICAgICAgICAgbGVmdFRlcm1UeXBlID0gbGVmdFRlcm0uZ2V0VHlwZSgpLFxuICAgICAgICAgIHJpZ2h0VGVybVR5cGUgPSByaWdodFRlcm0uZ2V0VHlwZSgpO1xuXG4gICAgaWYgKGxlZnRUZXJtVHlwZSAhPT0gQk9PTEVBTl9UWVBFKSB7XG4gICAgICBjb25zdCBsZWZ0VGVybVN0cmluZyA9IGxlZnRUZXJtLmdldFN0cmluZygpLFxuICAgICAgICAgICAgbWVzc2FnZSA9IGBUaGUgJyR7bGVmdFRlcm1TdHJpbmd9JyBsZWZ0IHRlcm0ncyB0eXBlIGlzICcke2xlZnRUZXJtVHlwZX0nIHdoZW4gaXQgc2hvdWxkIGJlIG9mIHR5cGUgJyR7Qk9PTEVBTl9UWVBFfScuYCxcbiAgICAgICAgICAgIGV4Y2VwdGlvbiA9IEV4Y2VwdGlvbi5mcm9tTWVzc2FnZShtZXNzYWdlKTtcblxuICAgICAgdGhyb3cgZXhjZXB0aW9uO1xuICAgIH1cblxuICAgIGlmIChyaWdodFRlcm1UeXBlICE9PSBCT09MRUFOX1RZUEUpIHtcbiAgICAgIGNvbnN0IHJpZ2h0VGVybVN0cmluZyA9IHJpZ2h0VGVybS5nZXRTdHJpbmcoKSxcbiAgICAgICAgICAgIG1lc3NhZ2UgPSBgVGhlICcke3JpZ2h0VGVybVN0cmluZ30nIHJpZ2h0IHRlcm0ncyB0eXBlIGlzICcke3JpZ2h0VGVybVR5cGV9JyB3aGVuIGl0IHNob3VsZCBiZSBvZiB0eXBlICcke0JPT0xFQU5fVFlQRX0nLmAsXG4gICAgICAgICAgICBleGNlcHRpb24gPSBFeGNlcHRpb24uZnJvbU1lc3NhZ2UobWVzc2FnZSk7XG5cbiAgICAgIHRocm93IGV4Y2VwdGlvbjtcbiAgICB9XG5cbiAgICBjb25zdCBsZWZ0VGVybVByaW1pdGl2ZVZhbHVlID0gbGVmdFRlcm0uZ2V0UHJpbWl0aXZlVmFsdWUoKSxcbiAgICAgICAgICByaWdodFRlcm1QcmltaXRpdmVWYWx1ZSA9IHJpZ2h0VGVybS5nZXRQcmltaXRpdmVWYWx1ZSgpLFxuICAgICAgICAgIGxlZnRCb29sZWFuID1sZWZ0VGVybVByaW1pdGl2ZVZhbHVlLCAvLy9cbiAgICAgICAgICByaWdodEJvb2xlYW4gPSByaWdodFRlcm1QcmltaXRpdmVWYWx1ZSwgLy8vXG4gICAgICAgICAgYm9vbGVhbiA9IHRoaXMuZGlzanVuY3Rpb24gP1xuICAgICAgICAgICAgICAgICAgICAgIChsZWZ0Qm9vbGVhbiB8fCByaWdodEJvb2xlYW4pIDpcbiAgICAgICAgICAgICAgICAgICAgICAgIChsZWZ0Qm9vbGVhbiAmJiByaWdodEJvb2xlYW4pO1xuXG4gICAgdGVybSA9IHRlcm1Gcm9tQm9vbGVhbihib29sZWFuLCBjb250ZXh0KTtcblxuICAgIGNvbnN0IHRlcm1TdHJpbmcgPSB0ZXJtLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC5kZWJ1ZyhgLi4uZXZhbHVhdGVkIHRoZSAnJHtsb2dpY2FsVGVybVN0cmluZ30nIGxvZ2ljYWwgdGVybSBhcyAnJHt0ZXJtU3RyaW5nfScuYCk7XG5cbiAgICByZXR1cm4gdGVybTtcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJMb2dpY2FsVGVybVwiO1xufSk7XG4iXSwibmFtZXMiOlsiZGVmaW5lIiwiTG9naWNhbFRlcm0iLCJjb250ZXh0Iiwic3RyaW5nIiwibm9kZSIsInR5cGUiLCJkaXNqdW5jdGlvbiIsImxlZnRUZXJtIiwicmlnaHRUZXJtIiwiZ2V0VHlwZSIsImlzRGlzanVuY3Rpb24iLCJnZXRMZWZ0VGVybSIsImdldFJpZ2h0VGVybSIsImV2YWx1YXRlIiwidGVybSIsImxvZ2ljYWxUZXJtU3RyaW5nIiwiZ2V0U3RyaW5nIiwidHJhY2UiLCJsZWZ0VGVybVR5cGUiLCJyaWdodFRlcm1UeXBlIiwiQk9PTEVBTl9UWVBFIiwibGVmdFRlcm1TdHJpbmciLCJtZXNzYWdlIiwiZXhjZXB0aW9uIiwiRXhjZXB0aW9uIiwiZnJvbU1lc3NhZ2UiLCJyaWdodFRlcm1TdHJpbmciLCJsZWZ0VGVybVByaW1pdGl2ZVZhbHVlIiwiZ2V0UHJpbWl0aXZlVmFsdWUiLCJyaWdodFRlcm1QcmltaXRpdmVWYWx1ZSIsImxlZnRCb29sZWFuIiwicmlnaHRCb29sZWFuIiwiYm9vbGVhbiIsInRlcm1Gcm9tQm9vbGVhbiIsInRlcm1TdHJpbmciLCJkZWJ1ZyIsIkVsZW1lbnQiLCJuYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFVQTs7O2VBQUE7Ozs4QkFSd0I7Z0VBRUY7d0JBRUM7cUJBQ007b0JBQ0c7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFaEMsV0FBZUEsSUFBQUEsZ0JBQU0sZ0NBQUM7O2FBQU1DLFlBQ2RDLE9BQU8sRUFBRUMsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLElBQUksRUFBRUMsV0FBVyxFQUFFQyxRQUFRLEVBQUVDLFNBQVM7Z0NBRC9DUDs7Z0JBRXhCLGtCQUZ3QkE7WUFFbEJDO1lBQVNDO1lBQVFDOztRQUV2QixNQUFLQyxJQUFJLEdBQUdBO1FBQ1osTUFBS0MsV0FBVyxHQUFHQTtRQUNuQixNQUFLQyxRQUFRLEdBQUdBO1FBQ2hCLE1BQUtDLFNBQVMsR0FBR0E7Ozs7O1lBR25CQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNKLElBQUk7WUFDbEI7OztZQUVBSyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNKLFdBQVc7WUFDekI7OztZQUVBSyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNKLFFBQVE7WUFDdEI7OztZQUVBSyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNKLFNBQVM7WUFDdkI7OztZQUVBSyxLQUFBQTttQkFBQUEsU0FBQUEsU0FBU1gsT0FBTztnQkFDZCxJQUFJWTtnQkFFSixJQUFNQyxvQkFBb0IsSUFBSSxDQUFDQyxTQUFTLElBQUksR0FBRztnQkFFL0NkLFFBQVFlLEtBQUssQ0FBQyxBQUFDLG1CQUFvQyxPQUFsQkYsbUJBQWtCO2dCQUVuRCxJQUFNUixXQUFXLElBQUksQ0FBQ0EsUUFBUSxDQUFDTSxRQUFRLENBQUNYLFVBQ2xDTSxZQUFZLElBQUksQ0FBQ0EsU0FBUyxDQUFDSyxRQUFRLENBQUNYLFVBQ3BDZ0IsZUFBZVgsU0FBU0UsT0FBTyxJQUMvQlUsZ0JBQWdCWCxVQUFVQyxPQUFPO2dCQUV2QyxJQUFJUyxpQkFBaUJFLG1CQUFZLEVBQUU7b0JBQ2pDLElBQU1DLGlCQUFpQmQsU0FBU1MsU0FBUyxJQUNuQ00sVUFBVSxBQUFDLFFBQStDSixPQUF4Q0csZ0JBQWUsMkJBQXFFRCxPQUE1Q0YsY0FBYSxpQ0FBNEMsT0FBYkUsbUJBQVksRUFBQyxPQUNuSEcsWUFBWUMsa0JBQVMsQ0FBQ0MsV0FBVyxDQUFDSDtvQkFFeEMsTUFBTUM7Z0JBQ1I7Z0JBRUEsSUFBSUosa0JBQWtCQyxtQkFBWSxFQUFFO29CQUNsQyxJQUFNTSxrQkFBa0JsQixVQUFVUSxTQUFTLElBQ3JDTSxXQUFVLEFBQUMsUUFBaURILE9BQTFDTyxpQkFBZ0IsNEJBQXVFTixPQUE3Q0QsZUFBYyxpQ0FBNEMsT0FBYkMsbUJBQVksRUFBQyxPQUN0SEcsYUFBWUMsa0JBQVMsQ0FBQ0MsV0FBVyxDQUFDSDtvQkFFeEMsTUFBTUM7Z0JBQ1I7Z0JBRUEsSUFBTUkseUJBQXlCcEIsU0FBU3FCLGlCQUFpQixJQUNuREMsMEJBQTBCckIsVUFBVW9CLGlCQUFpQixJQUNyREUsY0FBYUgsd0JBQ2JJLGVBQWVGLHlCQUNmRyxVQUFVLElBQUksQ0FBQzFCLFdBQVcsR0FDYndCLGVBQWVDLGVBQ2JELGVBQWVDO2dCQUVwQ2pCLE9BQU9tQixJQUFBQSxxQkFBZSxFQUFDRCxTQUFTOUI7Z0JBRWhDLElBQU1nQyxhQUFhcEIsS0FBS0UsU0FBUztnQkFFakNkLFFBQVFpQyxLQUFLLENBQUMsQUFBQyxxQkFBMkRELE9BQXZDbkIsbUJBQWtCLHVCQUFnQyxPQUFYbUIsWUFBVztnQkFFckYsT0FBT3BCO1lBQ1Q7Ozs7cUJBckU4Q3NCLHVCQUFPLElBdUVyRCwrQkFBT0MsUUFBTyJ9