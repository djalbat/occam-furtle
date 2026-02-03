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
var _elements = require("../elements");
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
var _Term;
var _default = (0, _elements.define)((_Term = /*#__PURE__*/ function(Element) {
    _inherits(Term, Element);
    function Term(context, string, node, variable, primitive, negatedTerm, logicalTerm, bracketedTerm, comparisonTerm) {
        _class_call_check(this, Term);
        var _this;
        _this = _call_super(this, Term, [
            context,
            string,
            node
        ]);
        _this.variable = variable;
        _this.primitive = primitive;
        _this.negatedTerm = negatedTerm;
        _this.logicalTerm = logicalTerm;
        _this.bracketedTerm = bracketedTerm;
        _this.comparisonTerm = comparisonTerm;
        return _this;
    }
    _create_class(Term, [
        {
            key: "getVariable",
            value: function getVariable() {
                return this.variable;
            }
        },
        {
            key: "getPrimitive",
            value: function getPrimitive() {
                return this.primitive;
            }
        },
        {
            key: "getNegatedTerm",
            value: function getNegatedTerm() {
                return this.negatedTerm;
            }
        },
        {
            key: "getLogicalTerm",
            value: function getLogicalTerm() {
                return this.logicalTerm;
            }
        },
        {
            key: "getBreedingTerm",
            value: function getBreedingTerm() {
                return this.bracketedTerm;
            }
        },
        {
            key: "getComparisonTerm",
            value: function getComparisonTerm() {
                return this.comparisonTerm;
            }
        },
        {
            key: "getPrimitiveValue",
            value: function getPrimitiveValue() {
                var primitiveValue = this.primitive.getValue();
                return primitiveValue;
            }
        },
        {
            key: "getType",
            value: function getType() {
                var type;
                if (false) {
                ///
                } else if (this.variable !== null) {
                    type = this.variable.getType();
                } else if (this.primitive !== null) {
                    type = this.primitive.getType();
                } else if (this.negatedTerm !== null) {
                    type = this.negatedTerm.getType();
                } else if (this.logicalTerm !== null) {
                    type = this.logicalTerm.getType();
                } else if (this.bracketedTerm !== null) {
                    type = this.bracketedTerm.getType();
                } else if (this.comparisonTerm !== null) {
                    type = this.comparisonTerm.getType();
                }
                return type;
            }
        },
        {
            key: "evaluate",
            value: function evaluate(context) {
                var term;
                if (false) {
                ///
                } else if (this.variable !== null) {
                    term = this.variable.evaluate(context);
                } else if (this.primitive !== null) {
                    term = this.primitive.evaluate(context);
                } else if (this.negatedTerm !== null) {
                    term = this.negatedTerm.evaluate(context);
                } else if (this.logicalTerm !== null) {
                    term = this.logicalTerm.evaluate(context);
                } else if (this.bracketedTerm !== null) {
                    term = this.bracketedTerm.evaluate(context);
                } else if (this.comparisonTerm !== null) {
                    term = this.comparisonTerm.evaluate(context);
                }
                return term;
            }
        },
        {
            key: "isEqualTo",
            value: function isEqualTo(term) {
                var equalTo = false;
                if (false) {
                ///
                } else if (this.variable !== null) {
                    var variable = term.getVariable();
                    if (variable !== null) {
                        equalTo = this.variable.isEqualTo(variable);
                    }
                } else if (this.primitive !== null) {
                    var primitive = term.getPrimitive();
                    if (primitive !== null) {
                        equalTo = this.primitive.isEqualTo(primitive);
                    }
                }
                return equalTo;
            }
        }
    ], [
        {
            key: "fromPrimitive",
            value: function fromPrimitive(primitive, context) {
                var primitiveString = primitive.getString(), string = primitiveString, node = null, variable = null, negatedTerm = null, logicalTerm = null, bracketedTerm = null, comparisonTerm = null;
                context = null;
                var term = new Term(context, string, node, variable, primitive, negatedTerm, logicalTerm, bracketedTerm, comparisonTerm);
                return term;
            }
        }
    ]);
    return Term;
}(_wrap_native_super(_element.default)), _define_property(_Term, "name", "Term"), _Term));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3Rlcm0uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBFbGVtZW50IGZyb20gXCIuLi9lbGVtZW50XCI7XG5cbmltcG9ydCB7IGRlZmluZSB9IGZyb20gXCIuLi9lbGVtZW50c1wiO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmUoY2xhc3MgVGVybSBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIHZhcmlhYmxlLCBwcmltaXRpdmUsIG5lZ2F0ZWRUZXJtLCBsb2dpY2FsVGVybSwgYnJhY2tldGVkVGVybSwgY29tcGFyaXNvblRlcm0pIHtcbiAgICBzdXBlcihjb250ZXh0LCBzdHJpbmcsIG5vZGUpXG5cbiAgICB0aGlzLnZhcmlhYmxlID0gdmFyaWFibGU7XG4gICAgdGhpcy5wcmltaXRpdmUgPSBwcmltaXRpdmU7XG4gICAgdGhpcy5uZWdhdGVkVGVybSA9IG5lZ2F0ZWRUZXJtO1xuICAgIHRoaXMubG9naWNhbFRlcm0gPSBsb2dpY2FsVGVybTtcbiAgICB0aGlzLmJyYWNrZXRlZFRlcm0gPSBicmFja2V0ZWRUZXJtO1xuICAgIHRoaXMuY29tcGFyaXNvblRlcm0gPSBjb21wYXJpc29uVGVybTtcbiAgfVxuXG4gIGdldFZhcmlhYmxlKCkge1xuICAgIHJldHVybiB0aGlzLnZhcmlhYmxlO1xuICB9XG5cbiAgZ2V0UHJpbWl0aXZlKCkge1xuICAgIHJldHVybiB0aGlzLnByaW1pdGl2ZTtcbiAgfVxuXG4gIGdldE5lZ2F0ZWRUZXJtKCkge1xuICAgIHJldHVybiB0aGlzLm5lZ2F0ZWRUZXJtO1xuICB9XG5cbiAgZ2V0TG9naWNhbFRlcm0oKSB7XG4gICAgcmV0dXJuIHRoaXMubG9naWNhbFRlcm07XG4gIH1cblxuICBnZXRCcmVlZGluZ1Rlcm0oKSB7XG4gICAgcmV0dXJuIHRoaXMuYnJhY2tldGVkVGVybTtcbiAgfVxuXG4gIGdldENvbXBhcmlzb25UZXJtKCkge1xuICAgIHJldHVybiB0aGlzLmNvbXBhcmlzb25UZXJtO1xuICB9XG5cbiAgZ2V0UHJpbWl0aXZlVmFsdWUoKSB7XG4gICAgY29uc3QgcHJpbWl0aXZlVmFsdWUgPSB0aGlzLnByaW1pdGl2ZS5nZXRWYWx1ZSgpO1xuXG4gICAgcmV0dXJuIHByaW1pdGl2ZVZhbHVlO1xuICB9XG5cbiAgZ2V0VHlwZSgpIHtcbiAgICBsZXQgdHlwZTtcblxuICAgIGlmIChmYWxzZSkge1xuICAgICAgLy8vXG4gICAgfSBlbHNlIGlmICh0aGlzLnZhcmlhYmxlICE9PSBudWxsKSB7XG4gICAgICB0eXBlID0gdGhpcy52YXJpYWJsZS5nZXRUeXBlKCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLnByaW1pdGl2ZSAhPT0gbnVsbCkge1xuICAgICAgdHlwZSA9IHRoaXMucHJpbWl0aXZlLmdldFR5cGUoKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMubmVnYXRlZFRlcm0gIT09IG51bGwpIHtcbiAgICAgIHR5cGUgPSB0aGlzLm5lZ2F0ZWRUZXJtLmdldFR5cGUoKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMubG9naWNhbFRlcm0gIT09IG51bGwpIHtcbiAgICAgIHR5cGUgPSB0aGlzLmxvZ2ljYWxUZXJtLmdldFR5cGUoKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuYnJhY2tldGVkVGVybSAhPT0gbnVsbCkge1xuICAgICAgdHlwZSA9IHRoaXMuYnJhY2tldGVkVGVybS5nZXRUeXBlKCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLmNvbXBhcmlzb25UZXJtICE9PSBudWxsKSB7XG4gICAgICB0eXBlID0gdGhpcy5jb21wYXJpc29uVGVybS5nZXRUeXBlKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHR5cGU7XG4gIH1cblxuICBldmFsdWF0ZShjb250ZXh0KSB7XG4gICAgbGV0IHRlcm07XG5cbiAgICBpZiAoZmFsc2UpIHtcbiAgICAgIC8vL1xuICAgIH0gZWxzZSBpZiAodGhpcy52YXJpYWJsZSAhPT0gbnVsbCkge1xuICAgICAgdGVybSA9IHRoaXMudmFyaWFibGUuZXZhbHVhdGUoY29udGV4dCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLnByaW1pdGl2ZSAhPT0gbnVsbCkge1xuICAgICAgdGVybSA9IHRoaXMucHJpbWl0aXZlLmV2YWx1YXRlKGNvbnRleHQpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5uZWdhdGVkVGVybSAhPT0gbnVsbCkge1xuICAgICAgdGVybSA9IHRoaXMubmVnYXRlZFRlcm0uZXZhbHVhdGUoY29udGV4dCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLmxvZ2ljYWxUZXJtICE9PSBudWxsKSB7XG4gICAgICB0ZXJtID0gdGhpcy5sb2dpY2FsVGVybS5ldmFsdWF0ZShjb250ZXh0KTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuYnJhY2tldGVkVGVybSAhPT0gbnVsbCkge1xuICAgICAgdGVybSA9IHRoaXMuYnJhY2tldGVkVGVybS5ldmFsdWF0ZShjb250ZXh0KTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuY29tcGFyaXNvblRlcm0gIT09IG51bGwpIHtcbiAgICAgIHRlcm0gPSB0aGlzLmNvbXBhcmlzb25UZXJtLmV2YWx1YXRlKGNvbnRleHQpO1xuICAgIH1cblxuICAgIHJldHVybiB0ZXJtO1xuICB9XG5cbiAgaXNFcXVhbFRvKHRlcm0pIHtcbiAgICBsZXQgZXF1YWxUbyA9IGZhbHNlO1xuXG4gICAgaWYgKGZhbHNlKSB7XG4gICAgICAvLy9cbiAgICB9IGVsc2UgaWYgKHRoaXMudmFyaWFibGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHZhcmlhYmxlID0gdGVybS5nZXRWYXJpYWJsZSgpO1xuXG4gICAgICBpZiAodmFyaWFibGUgIT09IG51bGwpIHtcbiAgICAgICAgZXF1YWxUbyA9IHRoaXMudmFyaWFibGUuaXNFcXVhbFRvKHZhcmlhYmxlKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHRoaXMucHJpbWl0aXZlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBwcmltaXRpdmUgPSB0ZXJtLmdldFByaW1pdGl2ZSgpO1xuXG4gICAgICBpZiAocHJpbWl0aXZlICE9PSBudWxsKSB7XG4gICAgICAgIGVxdWFsVG8gPSB0aGlzLnByaW1pdGl2ZS5pc0VxdWFsVG8ocHJpbWl0aXZlKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZXF1YWxUbztcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJUZXJtXCI7XG5cbiAgc3RhdGljIGZyb21QcmltaXRpdmUocHJpbWl0aXZlLCBjb250ZXh0KSB7XG4gICAgY29uc3QgcHJpbWl0aXZlU3RyaW5nID0gcHJpbWl0aXZlLmdldFN0cmluZygpLFxuICAgICAgICAgIHN0cmluZyA9IHByaW1pdGl2ZVN0cmluZywgLy8vXG4gICAgICAgICAgbm9kZSA9IG51bGwsXG4gICAgICAgICAgdmFyaWFibGUgPSBudWxsLFxuICAgICAgICAgIG5lZ2F0ZWRUZXJtID0gbnVsbCxcbiAgICAgICAgICBsb2dpY2FsVGVybSA9IG51bGwsXG4gICAgICAgICAgYnJhY2tldGVkVGVybSA9IG51bGwsXG4gICAgICAgICAgY29tcGFyaXNvblRlcm0gPSBudWxsO1xuXG4gICAgY29udGV4dCA9IG51bGw7XG5cbiAgICBjb25zdCB0ZXJtID0gbmV3IFRlcm0oY29udGV4dCwgc3RyaW5nLCBub2RlLCB2YXJpYWJsZSwgcHJpbWl0aXZlLCBuZWdhdGVkVGVybSwgbG9naWNhbFRlcm0sIGJyYWNrZXRlZFRlcm0sIGNvbXBhcmlzb25UZXJtKTtcblxuICAgIHJldHVybiB0ZXJtO1xuICB9XG59KTtcbiJdLCJuYW1lcyI6WyJkZWZpbmUiLCJUZXJtIiwiY29udGV4dCIsInN0cmluZyIsIm5vZGUiLCJ2YXJpYWJsZSIsInByaW1pdGl2ZSIsIm5lZ2F0ZWRUZXJtIiwibG9naWNhbFRlcm0iLCJicmFja2V0ZWRUZXJtIiwiY29tcGFyaXNvblRlcm0iLCJnZXRWYXJpYWJsZSIsImdldFByaW1pdGl2ZSIsImdldE5lZ2F0ZWRUZXJtIiwiZ2V0TG9naWNhbFRlcm0iLCJnZXRCcmVlZGluZ1Rlcm0iLCJnZXRDb21wYXJpc29uVGVybSIsImdldFByaW1pdGl2ZVZhbHVlIiwicHJpbWl0aXZlVmFsdWUiLCJnZXRWYWx1ZSIsImdldFR5cGUiLCJ0eXBlIiwiZXZhbHVhdGUiLCJ0ZXJtIiwiaXNFcXVhbFRvIiwiZXF1YWxUbyIsImZyb21QcmltaXRpdmUiLCJwcmltaXRpdmVTdHJpbmciLCJnZXRTdHJpbmciLCJFbGVtZW50IiwibmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBTUE7OztlQUFBOzs7OERBSm9CO3dCQUVHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRXZCLFdBQWVBLElBQUFBLGdCQUFNLHlCQUFDOzthQUFNQyxLQUNkQyxPQUFPLEVBQUVDLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxRQUFRLEVBQUVDLFNBQVMsRUFBRUMsV0FBVyxFQUFFQyxXQUFXLEVBQUVDLGFBQWEsRUFBRUMsY0FBYztnQ0FEckZUOztnQkFFeEIsa0JBRndCQTtZQUVsQkM7WUFBU0M7WUFBUUM7O1FBRXZCLE1BQUtDLFFBQVEsR0FBR0E7UUFDaEIsTUFBS0MsU0FBUyxHQUFHQTtRQUNqQixNQUFLQyxXQUFXLEdBQUdBO1FBQ25CLE1BQUtDLFdBQVcsR0FBR0E7UUFDbkIsTUFBS0MsYUFBYSxHQUFHQTtRQUNyQixNQUFLQyxjQUFjLEdBQUdBOzs7OztZQUd4QkMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDTixRQUFRO1lBQ3RCOzs7WUFFQU8sS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDTixTQUFTO1lBQ3ZCOzs7WUFFQU8sS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDTixXQUFXO1lBQ3pCOzs7WUFFQU8sS0FBQUE7bUJB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