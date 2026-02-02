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
var _elements = require("../elements");
function _class_call_check(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
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
var _Term;
var _default = (0, _elements.define)((_Term = /*#__PURE__*/ function() {
    function Term(string, variable, primitive, negatedTerm, logicalTerm, bracketedTerm, comparisonTerm) {
        _class_call_check(this, Term);
        this.string = string;
        this.variable = variable;
        this.primitive = primitive;
        this.negatedTerm = negatedTerm;
        this.logicalTerm = logicalTerm;
        this.bracketedTerm = bracketedTerm;
        this.comparisonTerm = comparisonTerm;
    }
    _create_class(Term, [
        {
            key: "getString",
            value: function getString() {
                return this.string;
            }
        },
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
            key: "getNode",
            value: function getNode() {
                return this.primitive.getNode();
            }
        },
        {
            key: "getNodes",
            value: function getNodes() {
                return this.primitive.getNodes();
            }
        },
        {
            key: "getNumber",
            value: function getNumber() {
                return this.primitive.getNumber();
            }
        },
        {
            key: "getBoolean",
            value: function getBoolean() {
                return this.primitive.getBoolean();
            }
        },
        {
            key: "getStringLiteral",
            value: function getStringLiteral() {
                return this.primitive.getStringLiteral();
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
    ]);
    return Term;
}(), _define_property(_Term, "name", "Term"), _Term));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3Rlcm0uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGRlZmluZSB9IGZyb20gXCIuLi9lbGVtZW50c1wiO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmUoY2xhc3MgVGVybSB7XG4gIGNvbnN0cnVjdG9yKHN0cmluZywgdmFyaWFibGUsIHByaW1pdGl2ZSwgbmVnYXRlZFRlcm0sIGxvZ2ljYWxUZXJtLCBicmFja2V0ZWRUZXJtLCBjb21wYXJpc29uVGVybSkge1xuICAgIHRoaXMuc3RyaW5nID0gc3RyaW5nO1xuICAgIHRoaXMudmFyaWFibGUgPSB2YXJpYWJsZTtcbiAgICB0aGlzLnByaW1pdGl2ZSA9IHByaW1pdGl2ZTtcbiAgICB0aGlzLm5lZ2F0ZWRUZXJtID0gbmVnYXRlZFRlcm07XG4gICAgdGhpcy5sb2dpY2FsVGVybSA9IGxvZ2ljYWxUZXJtO1xuICAgIHRoaXMuYnJhY2tldGVkVGVybSA9IGJyYWNrZXRlZFRlcm07XG4gICAgdGhpcy5jb21wYXJpc29uVGVybSA9IGNvbXBhcmlzb25UZXJtO1xuICB9XG5cbiAgZ2V0U3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLnN0cmluZztcbiAgfVxuXG4gIGdldFZhcmlhYmxlKCkge1xuICAgIHJldHVybiB0aGlzLnZhcmlhYmxlO1xuICB9XG5cbiAgZ2V0UHJpbWl0aXZlKCkge1xuICAgIHJldHVybiB0aGlzLnByaW1pdGl2ZTtcbiAgfVxuXG4gIGdldE5lZ2F0ZWRUZXJtKCkge1xuICAgIHJldHVybiB0aGlzLm5lZ2F0ZWRUZXJtO1xuICB9XG5cbiAgZ2V0TG9naWNhbFRlcm0oKSB7XG4gICAgcmV0dXJuIHRoaXMubG9naWNhbFRlcm07XG4gIH1cblxuICBnZXRCcmVlZGluZ1Rlcm0oKSB7XG4gICAgcmV0dXJuIHRoaXMuYnJhY2tldGVkVGVybTtcbiAgfVxuXG4gIGdldENvbXBhcmlzb25UZXJtKCkge1xuICAgIHJldHVybiB0aGlzLmNvbXBhcmlzb25UZXJtO1xuICB9XG5cbiAgZ2V0Tm9kZSgpIHsgcmV0dXJuIHRoaXMucHJpbWl0aXZlLmdldE5vZGUoKTsgfVxuXG4gIGdldE5vZGVzKCkgeyByZXR1cm4gdGhpcy5wcmltaXRpdmUuZ2V0Tm9kZXMoKTsgfVxuXG4gIGdldE51bWJlcigpIHsgcmV0dXJuIHRoaXMucHJpbWl0aXZlLmdldE51bWJlcigpOyB9XG5cbiAgZ2V0Qm9vbGVhbigpIHsgcmV0dXJuIHRoaXMucHJpbWl0aXZlLmdldEJvb2xlYW4oKTsgfVxuXG4gIGdldFN0cmluZ0xpdGVyYWwoKSB7IHJldHVybiB0aGlzLnByaW1pdGl2ZS5nZXRTdHJpbmdMaXRlcmFsKCk7IH1cblxuICBnZXRUeXBlKCkge1xuICAgIGxldCB0eXBlO1xuXG4gICAgaWYgKGZhbHNlKSB7XG4gICAgICAvLy9cbiAgICB9IGVsc2UgaWYgKHRoaXMudmFyaWFibGUgIT09IG51bGwpIHtcbiAgICAgIHR5cGUgPSB0aGlzLnZhcmlhYmxlLmdldFR5cGUoKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMucHJpbWl0aXZlICE9PSBudWxsKSB7XG4gICAgICB0eXBlID0gdGhpcy5wcmltaXRpdmUuZ2V0VHlwZSgpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5uZWdhdGVkVGVybSAhPT0gbnVsbCkge1xuICAgICAgdHlwZSA9IHRoaXMubmVnYXRlZFRlcm0uZ2V0VHlwZSgpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5sb2dpY2FsVGVybSAhPT0gbnVsbCkge1xuICAgICAgdHlwZSA9IHRoaXMubG9naWNhbFRlcm0uZ2V0VHlwZSgpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5icmFja2V0ZWRUZXJtICE9PSBudWxsKSB7XG4gICAgICB0eXBlID0gdGhpcy5icmFja2V0ZWRUZXJtLmdldFR5cGUoKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuY29tcGFyaXNvblRlcm0gIT09IG51bGwpIHtcbiAgICAgIHR5cGUgPSB0aGlzLmNvbXBhcmlzb25UZXJtLmdldFR5cGUoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdHlwZTtcbiAgfVxuXG4gIGV2YWx1YXRlKGNvbnRleHQpIHtcbiAgICBsZXQgdGVybTtcblxuICAgIGlmIChmYWxzZSkge1xuICAgICAgLy8vXG4gICAgfSBlbHNlIGlmICh0aGlzLnZhcmlhYmxlICE9PSBudWxsKSB7XG4gICAgICB0ZXJtID0gdGhpcy52YXJpYWJsZS5ldmFsdWF0ZShjb250ZXh0KTtcbiAgICB9IGVsc2UgaWYgKHRoaXMucHJpbWl0aXZlICE9PSBudWxsKSB7XG4gICAgICB0ZXJtID0gdGhpcy5wcmltaXRpdmUuZXZhbHVhdGUoY29udGV4dCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLm5lZ2F0ZWRUZXJtICE9PSBudWxsKSB7XG4gICAgICB0ZXJtID0gdGhpcy5uZWdhdGVkVGVybS5ldmFsdWF0ZShjb250ZXh0KTtcbiAgICB9IGVsc2UgaWYgKHRoaXMubG9naWNhbFRlcm0gIT09IG51bGwpIHtcbiAgICAgIHRlcm0gPSB0aGlzLmxvZ2ljYWxUZXJtLmV2YWx1YXRlKGNvbnRleHQpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5icmFja2V0ZWRUZXJtICE9PSBudWxsKSB7XG4gICAgICB0ZXJtID0gdGhpcy5icmFja2V0ZWRUZXJtLmV2YWx1YXRlKGNvbnRleHQpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5jb21wYXJpc29uVGVybSAhPT0gbnVsbCkge1xuICAgICAgdGVybSA9IHRoaXMuY29tcGFyaXNvblRlcm0uZXZhbHVhdGUoY29udGV4dCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRlcm07XG4gIH1cblxuICBpc0VxdWFsVG8odGVybSkge1xuICAgIGxldCBlcXVhbFRvID0gZmFsc2U7XG5cbiAgICBpZiAoZmFsc2UpIHtcbiAgICAgIC8vL1xuICAgIH0gZWxzZSBpZiAodGhpcy52YXJpYWJsZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgdmFyaWFibGUgPSB0ZXJtLmdldFZhcmlhYmxlKCk7XG5cbiAgICAgIGlmICh2YXJpYWJsZSAhPT0gbnVsbCkge1xuICAgICAgICBlcXVhbFRvID0gdGhpcy52YXJpYWJsZS5pc0VxdWFsVG8odmFyaWFibGUpO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAodGhpcy5wcmltaXRpdmUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHByaW1pdGl2ZSA9IHRlcm0uZ2V0UHJpbWl0aXZlKCk7XG5cbiAgICAgIGlmIChwcmltaXRpdmUgIT09IG51bGwpIHtcbiAgICAgICAgZXF1YWxUbyA9IHRoaXMucHJpbWl0aXZlLmlzRXF1YWxUbyhwcmltaXRpdmUpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBlcXVhbFRvO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIlRlcm1cIjtcbn0pO1xuIl0sIm5hbWVzIjpbImRlZmluZSIsIlRlcm0iLCJzdHJpbmciLCJ2YXJpYWJsZSIsInByaW1pdGl2ZSIsIm5lZ2F0ZWRUZXJtIiwibG9naWNhbFRlcm0iLCJicmFja2V0ZWRUZXJtIiwiY29tcGFyaXNvblRlcm0iLCJnZXRTdHJpbmciLCJnZXRWYXJpYWJsZSIsImdldFByaW1pdGl2ZSIsImdldE5lZ2F0ZWRUZXJtIiwiZ2V0TG9naWNhbFRlcm0iLCJnZXRCcmVlZGluZ1Rlcm0iLCJnZXRDb21wYXJpc29uVGVybSIsImdldE5vZGUiLCJnZXROb2RlcyIsImdldE51bWJlciIsImdldEJvb2xlYW4iLCJnZXRTdHJpbmdMaXRlcmFsIiwiZ2V0VHlwZSIsInR5cGUiLCJldmFsdWF0ZSIsImNvbnRleHQiLCJ0ZXJtIiwiaXNFcXVhbFRvIiwiZXF1YWxUbyIsIm5hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQUlBOzs7ZUFBQTs7O3dCQUZ1Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUV2QixXQUFlQSxJQUFBQSxnQkFBTSx5QkFBQzthQUFNQyxLQUNkQyxNQUFNLEVBQUVDLFFBQVEsRUFBRUMsU0FBUyxFQUFFQyxXQUFXLEVBQUVDLFdBQVcsRUFBRUMsYUFBYSxFQUFFQyxjQUFjO2dDQUR0RVA7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