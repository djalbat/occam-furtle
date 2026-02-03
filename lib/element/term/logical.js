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
}(_wrap_native_super(_element.default)), _define_property(_LogicalTerm, "name", "LogicalTerm"), _LogicalTerm));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L3Rlcm0vbG9naWNhbC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEVsZW1lbnQgZnJvbSBcIi4uLy4uL2VsZW1lbnRcIjtcbmltcG9ydCBFeGNlcHRpb24gZnJvbSBcIi4uLy4uL2V4Y2VwdGlvblwiO1xuXG5pbXBvcnQgeyBkZWZpbmUgfSBmcm9tIFwiLi4vLi4vZWxlbWVudHNcIjtcbmltcG9ydCB7IEJPT0xFQU5fVFlQRSB9IGZyb20gXCIuLi8uLi90eXBlc1wiO1xuaW1wb3J0IHsgdGVybUZyb21Cb29sZWFuIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy90ZXJtXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZShjbGFzcyBMb2dpY2FsVGVybSBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIHR5cGUsIGRpc2p1bmN0aW9uLCBsZWZ0VGVybSwgcmlnaHRUZXJtKSB7XG4gICAgc3VwZXIoY29udGV4dCwgc3RyaW5nLCBub2RlKVxuXG4gICAgdGhpcy50eXBlID0gdHlwZTtcbiAgICB0aGlzLmRpc2p1bmN0aW9uID0gZGlzanVuY3Rpb247XG4gICAgdGhpcy5sZWZ0VGVybSA9IGxlZnRUZXJtO1xuICAgIHRoaXMucmlnaHRUZXJtID0gcmlnaHRUZXJtO1xuICB9XG5cbiAgZ2V0VHlwZSgpIHtcbiAgICByZXR1cm4gdGhpcy50eXBlO1xuICB9XG5cbiAgaXNEaXNqdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5kaXNqdW5jdGlvbjtcbiAgfVxuXG4gIGdldExlZnRUZXJtKCkge1xuICAgIHJldHVybiB0aGlzLmxlZnRUZXJtO1xuICB9XG5cbiAgZ2V0UmlnaHRUZXJtKCkge1xuICAgIHJldHVybiB0aGlzLnJpZ2h0VGVybTtcbiAgfVxuXG4gIGV2YWx1YXRlKGNvbnRleHQpIHtcbiAgICBsZXQgdGVybTtcblxuICAgIGNvbnN0IGxvZ2ljYWxUZXJtU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBFdmFsdWF0aW5nIHRoZSAnJHtsb2dpY2FsVGVybVN0cmluZ30nIGxvZ2ljYWwgdGVybS4uLmApO1xuXG4gICAgY29uc3QgbGVmdFRlcm0gPSB0aGlzLmxlZnRUZXJtLmV2YWx1YXRlKGNvbnRleHQpLFxuICAgICAgICAgIHJpZ2h0VGVybSA9IHRoaXMucmlnaHRUZXJtLmV2YWx1YXRlKGNvbnRleHQpLFxuICAgICAgICAgIGxlZnRUZXJtVHlwZSA9IGxlZnRUZXJtLmdldFR5cGUoKSxcbiAgICAgICAgICByaWdodFRlcm1UeXBlID0gcmlnaHRUZXJtLmdldFR5cGUoKTtcblxuICAgIGlmIChsZWZ0VGVybVR5cGUgIT09IEJPT0xFQU5fVFlQRSkge1xuICAgICAgY29uc3QgbGVmdFRlcm1TdHJpbmcgPSBsZWZ0VGVybS5nZXRTdHJpbmcoKSxcbiAgICAgICAgICAgIG1lc3NhZ2UgPSBgVGhlICcke2xlZnRUZXJtU3RyaW5nfScgbGVmdCB0ZXJtJ3MgdHlwZSBpcyAnJHtsZWZ0VGVybVR5cGV9JyB3aGVuIGl0IHNob3VsZCBiZSBvZiB0eXBlICcke0JPT0xFQU5fVFlQRX0nLmAsXG4gICAgICAgICAgICBleGNlcHRpb24gPSBFeGNlcHRpb24uZnJvbU1lc3NhZ2UobWVzc2FnZSk7XG5cbiAgICAgIHRocm93IGV4Y2VwdGlvbjtcbiAgICB9XG5cbiAgICBpZiAocmlnaHRUZXJtVHlwZSAhPT0gQk9PTEVBTl9UWVBFKSB7XG4gICAgICBjb25zdCByaWdodFRlcm1TdHJpbmcgPSByaWdodFRlcm0uZ2V0U3RyaW5nKCksXG4gICAgICAgICAgICBtZXNzYWdlID0gYFRoZSAnJHtyaWdodFRlcm1TdHJpbmd9JyByaWdodCB0ZXJtJ3MgdHlwZSBpcyAnJHtyaWdodFRlcm1UeXBlfScgd2hlbiBpdCBzaG91bGQgYmUgb2YgdHlwZSAnJHtCT09MRUFOX1RZUEV9Jy5gLFxuICAgICAgICAgICAgZXhjZXB0aW9uID0gRXhjZXB0aW9uLmZyb21NZXNzYWdlKG1lc3NhZ2UpO1xuXG4gICAgICB0aHJvdyBleGNlcHRpb247XG4gICAgfVxuXG4gICAgY29uc3QgbGVmdFRlcm1QcmltaXRpdmVWYWx1ZSA9IGxlZnRUZXJtLmdldFByaW1pdGl2ZVZhbHVlKCksXG4gICAgICAgICAgcmlnaHRUZXJtUHJpbWl0aXZlVmFsdWUgPSByaWdodFRlcm0uZ2V0UHJpbWl0aXZlVmFsdWUoKSxcbiAgICAgICAgICBsZWZ0Qm9vbGVhbiA9bGVmdFRlcm1QcmltaXRpdmVWYWx1ZSwgLy8vXG4gICAgICAgICAgcmlnaHRCb29sZWFuID0gcmlnaHRUZXJtUHJpbWl0aXZlVmFsdWUsIC8vL1xuICAgICAgICAgIGJvb2xlYW4gPSB0aGlzLmRpc2p1bmN0aW9uID9cbiAgICAgICAgICAgICAgICAgICAgICAobGVmdEJvb2xlYW4gfHwgcmlnaHRCb29sZWFuKSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAobGVmdEJvb2xlYW4gJiYgcmlnaHRCb29sZWFuKTtcblxuICAgIHRlcm0gPSB0ZXJtRnJvbUJvb2xlYW4oYm9vbGVhbiwgY29udGV4dCk7XG5cbiAgICBjb25zdCB0ZXJtU3RyaW5nID0gdGVybS5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQuZGVidWcoYC4uLmV2YWx1YXRlZCB0aGUgJyR7bG9naWNhbFRlcm1TdHJpbmd9JyBsb2dpY2FsIHRlcm0gYXMgJyR7dGVybVN0cmluZ30nLmApO1xuXG4gICAgcmV0dXJuIHRlcm07XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiTG9naWNhbFRlcm1cIjtcbn0pO1xuIl0sIm5hbWVzIjpbImRlZmluZSIsIkxvZ2ljYWxUZXJtIiwiY29udGV4dCIsInN0cmluZyIsIm5vZGUiLCJ0eXBlIiwiZGlzanVuY3Rpb24iLCJsZWZ0VGVybSIsInJpZ2h0VGVybSIsImdldFR5cGUiLCJpc0Rpc2p1bmN0aW9uIiwiZ2V0TGVmdFRlcm0iLCJnZXRSaWdodFRlcm0iLCJldmFsdWF0ZSIsInRlcm0iLCJsb2dpY2FsVGVybVN0cmluZyIsImdldFN0cmluZyIsInRyYWNlIiwibGVmdFRlcm1UeXBlIiwicmlnaHRUZXJtVHlwZSIsIkJPT0xFQU5fVFlQRSIsImxlZnRUZXJtU3RyaW5nIiwibWVzc2FnZSIsImV4Y2VwdGlvbiIsIkV4Y2VwdGlvbiIsImZyb21NZXNzYWdlIiwicmlnaHRUZXJtU3RyaW5nIiwibGVmdFRlcm1QcmltaXRpdmVWYWx1ZSIsImdldFByaW1pdGl2ZVZhbHVlIiwicmlnaHRUZXJtUHJpbWl0aXZlVmFsdWUiLCJsZWZ0Qm9vbGVhbiIsInJpZ2h0Qm9vbGVhbiIsImJvb2xlYW4iLCJ0ZXJtRnJvbUJvb2xlYW4iLCJ0ZXJtU3RyaW5nIiwiZGVidWciLCJFbGVtZW50IiwibmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBU0E7OztlQUFBOzs7OERBUG9CO2dFQUNFO3dCQUVDO3FCQUNNO29CQUNHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRWhDLFdBQWVBLElBQUFBLGdCQUFNLGdDQUFDOzthQUFNQyxZQUNkQyxPQUFPLEVBQUVDLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxJQUFJLEVBQUVDLFdBQVcsRUFBRUMsUUFBUSxFQUFFQyxTQUFTO2dDQUQvQ1A7O2dCQUV4QixrQkFGd0JBO1lBRWxCQztZQUFTQztZQUFRQzs7UUFFdkIsTUFBS0MsSUFBSSxHQUFHQTtRQUNaLE1BQUtDLFdBQVcsR0FBR0E7UUFDbkIsTUFBS0MsUUFBUSxHQUFHQTtRQUNoQixNQUFLQyxTQUFTLEdBQUdBOzs7OztZQUduQkMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSixJQUFJO1lBQ2xCOzs7WUFFQUssS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSixXQUFXO1lBQ3pCOzs7WUFFQUssS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSixRQUFRO1lBQ3RCOzs7WUFFQUssS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSixTQUFTO1lBQ3ZCOzs7WUFFQUssS0FBQUE7bUJBQUFBLFNBQUFBLFNBQVNYLE9BQU87Z0JBQ2QsSUFBSVk7Z0JBRUosSUFBTUMsb0JBQW9CLElBQUksQ0FBQ0MsU0FBUyxJQUFJLEdBQUc7Z0JBRS9DZCxRQUFRZSxLQUFLLENBQUMsQUFBQyxtQkFBb0MsT0FBbEJGLG1CQUFrQjtnQkFFbkQsSUFBTVIsV0FBVyxJQUFJLENBQUNBLFFBQVEsQ0FBQ00sUUFBUSxDQUFDWCxVQUNsQ00sWUFBWSxJQUFJLENBQUNBLFNBQVMsQ0FBQ0ssUUFBUSxDQUFDWCxVQUNwQ2dCLGVBQWVYLFNBQVNFLE9BQU8sSUFDL0JVLGdCQUFnQlgsVUFBVUMsT0FBTztnQkFFdkMsSUFBSVMsaUJBQWlCRSxtQkFBWSxFQUFFO29CQUNqQyxJQUFNQyxpQkFBaUJkLFNBQVNTLFNBQVMsSUFDbkNNLFVBQVUsQUFBQyxRQUErQ0osT0FBeENHLGdCQUFlLDJCQUFxRUQsT0FBNUNGLGNBQWEsaUNBQTRDLE9BQWJFLG1CQUFZLEVBQUMsT0FDbkhHLFlBQVlDLGtCQUFTLENBQUNDLFdBQVcsQ0FBQ0g7b0JBRXhDLE1BQU1DO2dCQUNSO2dCQUVBLElBQUlKLGtCQUFrQkMsbUJBQVksRUFBRTtvQkFDbEMsSUFBTU0sa0JBQWtCbEIsVUFBVVEsU0FBUyxJQUNyQ00sV0FBVSxBQUFDLFFBQWlESCxPQUExQ08saUJBQWdCLDRCQUF1RU4sT0FBN0NELGVBQWMsaUNBQTRDLE9BQWJDLG1CQUFZLEVBQUMsT0FDdEhHLGFBQVlDLGtCQUFTLENBQUNDLFdBQVcsQ0FBQ0g7b0JBRXhDLE1BQU1DO2dCQUNSO2dCQUVBLElBQU1JLHlCQUF5QnBCLFNBQVNxQixpQkFBaUIsSUFDbkRDLDBCQUEwQnJCLFVBQVVvQixpQkFBaUIsSUFDckRFLGNBQWFILHdCQUNiSSxlQUFlRix5QkFDZkcsVUFBVSxJQUFJLENBQUMxQixXQUFXLEdBQ2J3QixlQUFlQyxlQUNiRCxlQUFlQztnQkFFcENqQixPQUFPbUIsSUFBQUEscUJBQWUsRUFBQ0QsU0FBUzlCO2dCQUVoQyxJQUFNZ0MsYUFBYXBCLEtBQUtFLFNBQVM7Z0JBRWpDZCxRQUFRaUMsS0FBSyxDQUFDLEFBQUMscUJBQTJERCxPQUF2Q25CLG1CQUFrQix1QkFBZ0MsT0FBWG1CLFlBQVc7Z0JBRXJGLE9BQU9wQjtZQUNUOzs7O3FCQXJFOENzQixnQkFBTyxJQXVFckQsK0JBQU9DLFFBQU8ifQ==