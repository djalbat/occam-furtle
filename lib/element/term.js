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
}(_wrap_native_super(_occamlanguages.Element)), _define_property(_Term, "name", "Term"), _Term));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3Rlcm0uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwib2NjYW0tbGFuZ3VhZ2VzXCI7XG5cbmltcG9ydCB7IGRlZmluZSB9IGZyb20gXCIuLi9lbGVtZW50c1wiO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmUoY2xhc3MgVGVybSBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIHZhcmlhYmxlLCBwcmltaXRpdmUsIG5lZ2F0ZWRUZXJtLCBsb2dpY2FsVGVybSwgYnJhY2tldGVkVGVybSwgY29tcGFyaXNvblRlcm0pIHtcbiAgICBzdXBlcihjb250ZXh0LCBzdHJpbmcsIG5vZGUpXG5cbiAgICB0aGlzLnZhcmlhYmxlID0gdmFyaWFibGU7XG4gICAgdGhpcy5wcmltaXRpdmUgPSBwcmltaXRpdmU7XG4gICAgdGhpcy5uZWdhdGVkVGVybSA9IG5lZ2F0ZWRUZXJtO1xuICAgIHRoaXMubG9naWNhbFRlcm0gPSBsb2dpY2FsVGVybTtcbiAgICB0aGlzLmJyYWNrZXRlZFRlcm0gPSBicmFja2V0ZWRUZXJtO1xuICAgIHRoaXMuY29tcGFyaXNvblRlcm0gPSBjb21wYXJpc29uVGVybTtcbiAgfVxuXG4gIGdldFZhcmlhYmxlKCkge1xuICAgIHJldHVybiB0aGlzLnZhcmlhYmxlO1xuICB9XG5cbiAgZ2V0UHJpbWl0aXZlKCkge1xuICAgIHJldHVybiB0aGlzLnByaW1pdGl2ZTtcbiAgfVxuXG4gIGdldE5lZ2F0ZWRUZXJtKCkge1xuICAgIHJldHVybiB0aGlzLm5lZ2F0ZWRUZXJtO1xuICB9XG5cbiAgZ2V0TG9naWNhbFRlcm0oKSB7XG4gICAgcmV0dXJuIHRoaXMubG9naWNhbFRlcm07XG4gIH1cblxuICBnZXRCcmVlZGluZ1Rlcm0oKSB7XG4gICAgcmV0dXJuIHRoaXMuYnJhY2tldGVkVGVybTtcbiAgfVxuXG4gIGdldENvbXBhcmlzb25UZXJtKCkge1xuICAgIHJldHVybiB0aGlzLmNvbXBhcmlzb25UZXJtO1xuICB9XG5cbiAgZ2V0UHJpbWl0aXZlVmFsdWUoKSB7XG4gICAgY29uc3QgcHJpbWl0aXZlVmFsdWUgPSB0aGlzLnByaW1pdGl2ZS5nZXRWYWx1ZSgpO1xuXG4gICAgcmV0dXJuIHByaW1pdGl2ZVZhbHVlO1xuICB9XG5cbiAgZ2V0VHlwZSgpIHtcbiAgICBsZXQgdHlwZTtcblxuICAgIGlmIChmYWxzZSkge1xuICAgICAgLy8vXG4gICAgfSBlbHNlIGlmICh0aGlzLnZhcmlhYmxlICE9PSBudWxsKSB7XG4gICAgICB0eXBlID0gdGhpcy52YXJpYWJsZS5nZXRUeXBlKCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLnByaW1pdGl2ZSAhPT0gbnVsbCkge1xuICAgICAgdHlwZSA9IHRoaXMucHJpbWl0aXZlLmdldFR5cGUoKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMubmVnYXRlZFRlcm0gIT09IG51bGwpIHtcbiAgICAgIHR5cGUgPSB0aGlzLm5lZ2F0ZWRUZXJtLmdldFR5cGUoKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMubG9naWNhbFRlcm0gIT09IG51bGwpIHtcbiAgICAgIHR5cGUgPSB0aGlzLmxvZ2ljYWxUZXJtLmdldFR5cGUoKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuYnJhY2tldGVkVGVybSAhPT0gbnVsbCkge1xuICAgICAgdHlwZSA9IHRoaXMuYnJhY2tldGVkVGVybS5nZXRUeXBlKCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLmNvbXBhcmlzb25UZXJtICE9PSBudWxsKSB7XG4gICAgICB0eXBlID0gdGhpcy5jb21wYXJpc29uVGVybS5nZXRUeXBlKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHR5cGU7XG4gIH1cblxuICBldmFsdWF0ZShjb250ZXh0KSB7XG4gICAgbGV0IHRlcm07XG5cbiAgICBpZiAoZmFsc2UpIHtcbiAgICAgIC8vL1xuICAgIH0gZWxzZSBpZiAodGhpcy52YXJpYWJsZSAhPT0gbnVsbCkge1xuICAgICAgdGVybSA9IHRoaXMudmFyaWFibGUuZXZhbHVhdGUoY29udGV4dCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLnByaW1pdGl2ZSAhPT0gbnVsbCkge1xuICAgICAgdGVybSA9IHRoaXMucHJpbWl0aXZlLmV2YWx1YXRlKGNvbnRleHQpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5uZWdhdGVkVGVybSAhPT0gbnVsbCkge1xuICAgICAgdGVybSA9IHRoaXMubmVnYXRlZFRlcm0uZXZhbHVhdGUoY29udGV4dCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLmxvZ2ljYWxUZXJtICE9PSBudWxsKSB7XG4gICAgICB0ZXJtID0gdGhpcy5sb2dpY2FsVGVybS5ldmFsdWF0ZShjb250ZXh0KTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuYnJhY2tldGVkVGVybSAhPT0gbnVsbCkge1xuICAgICAgdGVybSA9IHRoaXMuYnJhY2tldGVkVGVybS5ldmFsdWF0ZShjb250ZXh0KTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuY29tcGFyaXNvblRlcm0gIT09IG51bGwpIHtcbiAgICAgIHRlcm0gPSB0aGlzLmNvbXBhcmlzb25UZXJtLmV2YWx1YXRlKGNvbnRleHQpO1xuICAgIH1cblxuICAgIHJldHVybiB0ZXJtO1xuICB9XG5cbiAgaXNFcXVhbFRvKHRlcm0pIHtcbiAgICBsZXQgZXF1YWxUbyA9IGZhbHNlO1xuXG4gICAgaWYgKGZhbHNlKSB7XG4gICAgICAvLy9cbiAgICB9IGVsc2UgaWYgKHRoaXMudmFyaWFibGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHZhcmlhYmxlID0gdGVybS5nZXRWYXJpYWJsZSgpO1xuXG4gICAgICBpZiAodmFyaWFibGUgIT09IG51bGwpIHtcbiAgICAgICAgZXF1YWxUbyA9IHRoaXMudmFyaWFibGUuaXNFcXVhbFRvKHZhcmlhYmxlKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHRoaXMucHJpbWl0aXZlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBwcmltaXRpdmUgPSB0ZXJtLmdldFByaW1pdGl2ZSgpO1xuXG4gICAgICBpZiAocHJpbWl0aXZlICE9PSBudWxsKSB7XG4gICAgICAgIGVxdWFsVG8gPSB0aGlzLnByaW1pdGl2ZS5pc0VxdWFsVG8ocHJpbWl0aXZlKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZXF1YWxUbztcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJUZXJtXCI7XG5cbiAgc3RhdGljIGZyb21QcmltaXRpdmUocHJpbWl0aXZlLCBjb250ZXh0KSB7XG4gICAgY29uc3QgcHJpbWl0aXZlU3RyaW5nID0gcHJpbWl0aXZlLmdldFN0cmluZygpLFxuICAgICAgICAgIHN0cmluZyA9IHByaW1pdGl2ZVN0cmluZywgLy8vXG4gICAgICAgICAgbm9kZSA9IG51bGwsXG4gICAgICAgICAgdmFyaWFibGUgPSBudWxsLFxuICAgICAgICAgIG5lZ2F0ZWRUZXJtID0gbnVsbCxcbiAgICAgICAgICBsb2dpY2FsVGVybSA9IG51bGwsXG4gICAgICAgICAgYnJhY2tldGVkVGVybSA9IG51bGwsXG4gICAgICAgICAgY29tcGFyaXNvblRlcm0gPSBudWxsO1xuXG4gICAgY29udGV4dCA9IG51bGw7XG5cbiAgICBjb25zdCB0ZXJtID0gbmV3IFRlcm0oY29udGV4dCwgc3RyaW5nLCBub2RlLCB2YXJpYWJsZSwgcHJpbWl0aXZlLCBuZWdhdGVkVGVybSwgbG9naWNhbFRlcm0sIGJyYWNrZXRlZFRlcm0sIGNvbXBhcmlzb25UZXJtKTtcblxuICAgIHJldHVybiB0ZXJtO1xuICB9XG59KTtcbiJdLCJuYW1lcyI6WyJkZWZpbmUiLCJUZXJtIiwiY29udGV4dCIsInN0cmluZyIsIm5vZGUiLCJ2YXJpYWJsZSIsInByaW1pdGl2ZSIsIm5lZ2F0ZWRUZXJtIiwibG9naWNhbFRlcm0iLCJicmFja2V0ZWRUZXJtIiwiY29tcGFyaXNvblRlcm0iLCJnZXRWYXJpYWJsZSIsImdldFByaW1pdGl2ZSIsImdldE5lZ2F0ZWRUZXJtIiwiZ2V0TG9naWNhbFRlcm0iLCJnZXRCcmVlZGluZ1Rlcm0iLCJnZXRDb21wYXJpc29uVGVybSIsImdldFByaW1pdGl2ZVZhbHVlIiwicHJpbWl0aXZlVmFsdWUiLCJnZXRWYWx1ZSIsImdldFR5cGUiLCJ0eXBlIiwiZXZhbHVhdGUiLCJ0ZXJtIiwiaXNFcXVhbFRvIiwiZXF1YWxUbyIsImZyb21QcmltaXRpdmUiLCJwcmltaXRpdmVTdHJpbmciLCJnZXRTdHJpbmciLCJFbGVtZW50IiwibmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBTUE7OztlQUFBOzs7OEJBSndCO3dCQUVEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUV2QixXQUFlQSxJQUFBQSxnQkFBTSx5QkFBQzs7YUFBTUMsS0FDZEMsT0FBTyxFQUFFQyxNQUFNLEVBQUVDLElBQUksRUFBRUMsUUFBUSxFQUFFQyxTQUFTLEVBQUVDLFdBQVcsRUFBRUMsV0FBVyxFQUFFQyxhQUFhLEVBQUVDLGNBQWM7Z0NBRHJGVDs7Z0JBRXhCLGtCQUZ3QkE7WUFFbEJDO1lBQVNDO1lBQVFDOztRQUV2QixNQUFLQyxRQUFRLEdBQUdBO1FBQ2hCLE1BQUtDLFNBQVMsR0FBR0E7UUFDakIsTUFBS0MsV0FBVyxHQUFHQTtRQUNuQixNQUFLQyxXQUFXLEdBQUdBO1FBQ25CLE1BQUtDLGFBQWEsR0FBR0E7UUFDckIsTUFBS0MsY0FBYyxHQUFHQTs7Ozs7WUFHeEJDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ04sUUFBUTtZQUN0Qjs7O1lBRUFPLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ04sU0FBUztZQUN2Qjs7O1lBRUFPLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ04sV0FBVztZQUN6Qjs7O1lBRUFPLEtBQUFB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