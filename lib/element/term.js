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
                var primitiveString = primitive.getString(), string = primitiveString, variable = null, negatedTerm = null, logicalTerm = null, bracketedTerm = null, comparisonTerm = null, term = new Term(string, variable, primitive, negatedTerm, logicalTerm, bracketedTerm, comparisonTerm);
                return term;
            }
        }
    ]);
    return Term;
}(), _define_property(_Term, "name", "Term"), _Term));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3Rlcm0uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGRlZmluZSB9IGZyb20gXCIuLi9lbGVtZW50c1wiO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmUoY2xhc3MgVGVybSB7XG4gIGNvbnN0cnVjdG9yKHN0cmluZywgdmFyaWFibGUsIHByaW1pdGl2ZSwgbmVnYXRlZFRlcm0sIGxvZ2ljYWxUZXJtLCBicmFja2V0ZWRUZXJtLCBjb21wYXJpc29uVGVybSkge1xuICAgIHRoaXMuc3RyaW5nID0gc3RyaW5nO1xuICAgIHRoaXMudmFyaWFibGUgPSB2YXJpYWJsZTtcbiAgICB0aGlzLnByaW1pdGl2ZSA9IHByaW1pdGl2ZTtcbiAgICB0aGlzLm5lZ2F0ZWRUZXJtID0gbmVnYXRlZFRlcm07XG4gICAgdGhpcy5sb2dpY2FsVGVybSA9IGxvZ2ljYWxUZXJtO1xuICAgIHRoaXMuYnJhY2tldGVkVGVybSA9IGJyYWNrZXRlZFRlcm07XG4gICAgdGhpcy5jb21wYXJpc29uVGVybSA9IGNvbXBhcmlzb25UZXJtO1xuICB9XG5cbiAgZ2V0U3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLnN0cmluZztcbiAgfVxuXG4gIGdldFZhcmlhYmxlKCkge1xuICAgIHJldHVybiB0aGlzLnZhcmlhYmxlO1xuICB9XG5cbiAgZ2V0UHJpbWl0aXZlKCkge1xuICAgIHJldHVybiB0aGlzLnByaW1pdGl2ZTtcbiAgfVxuXG4gIGdldE5lZ2F0ZWRUZXJtKCkge1xuICAgIHJldHVybiB0aGlzLm5lZ2F0ZWRUZXJtO1xuICB9XG5cbiAgZ2V0TG9naWNhbFRlcm0oKSB7XG4gICAgcmV0dXJuIHRoaXMubG9naWNhbFRlcm07XG4gIH1cblxuICBnZXRCcmVlZGluZ1Rlcm0oKSB7XG4gICAgcmV0dXJuIHRoaXMuYnJhY2tldGVkVGVybTtcbiAgfVxuXG4gIGdldENvbXBhcmlzb25UZXJtKCkge1xuICAgIHJldHVybiB0aGlzLmNvbXBhcmlzb25UZXJtO1xuICB9XG5cbiAgZ2V0UHJpbWl0aXZlVmFsdWUoKSB7XG4gICAgY29uc3QgcHJpbWl0aXZlVmFsdWUgPSB0aGlzLnByaW1pdGl2ZS5nZXRWYWx1ZSgpO1xuXG4gICAgcmV0dXJuIHByaW1pdGl2ZVZhbHVlO1xuICB9XG5cbiAgZ2V0VHlwZSgpIHtcbiAgICBsZXQgdHlwZTtcblxuICAgIGlmIChmYWxzZSkge1xuICAgICAgLy8vXG4gICAgfSBlbHNlIGlmICh0aGlzLnZhcmlhYmxlICE9PSBudWxsKSB7XG4gICAgICB0eXBlID0gdGhpcy52YXJpYWJsZS5nZXRUeXBlKCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLnByaW1pdGl2ZSAhPT0gbnVsbCkge1xuICAgICAgdHlwZSA9IHRoaXMucHJpbWl0aXZlLmdldFR5cGUoKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMubmVnYXRlZFRlcm0gIT09IG51bGwpIHtcbiAgICAgIHR5cGUgPSB0aGlzLm5lZ2F0ZWRUZXJtLmdldFR5cGUoKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMubG9naWNhbFRlcm0gIT09IG51bGwpIHtcbiAgICAgIHR5cGUgPSB0aGlzLmxvZ2ljYWxUZXJtLmdldFR5cGUoKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuYnJhY2tldGVkVGVybSAhPT0gbnVsbCkge1xuICAgICAgdHlwZSA9IHRoaXMuYnJhY2tldGVkVGVybS5nZXRUeXBlKCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLmNvbXBhcmlzb25UZXJtICE9PSBudWxsKSB7XG4gICAgICB0eXBlID0gdGhpcy5jb21wYXJpc29uVGVybS5nZXRUeXBlKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHR5cGU7XG4gIH1cblxuICBldmFsdWF0ZShjb250ZXh0KSB7XG4gICAgbGV0IHRlcm07XG5cbiAgICBpZiAoZmFsc2UpIHtcbiAgICAgIC8vL1xuICAgIH0gZWxzZSBpZiAodGhpcy52YXJpYWJsZSAhPT0gbnVsbCkge1xuICAgICAgdGVybSA9IHRoaXMudmFyaWFibGUuZXZhbHVhdGUoY29udGV4dCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLnByaW1pdGl2ZSAhPT0gbnVsbCkge1xuICAgICAgdGVybSA9IHRoaXMucHJpbWl0aXZlLmV2YWx1YXRlKGNvbnRleHQpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5uZWdhdGVkVGVybSAhPT0gbnVsbCkge1xuICAgICAgdGVybSA9IHRoaXMubmVnYXRlZFRlcm0uZXZhbHVhdGUoY29udGV4dCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLmxvZ2ljYWxUZXJtICE9PSBudWxsKSB7XG4gICAgICB0ZXJtID0gdGhpcy5sb2dpY2FsVGVybS5ldmFsdWF0ZShjb250ZXh0KTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuYnJhY2tldGVkVGVybSAhPT0gbnVsbCkge1xuICAgICAgdGVybSA9IHRoaXMuYnJhY2tldGVkVGVybS5ldmFsdWF0ZShjb250ZXh0KTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuY29tcGFyaXNvblRlcm0gIT09IG51bGwpIHtcbiAgICAgIHRlcm0gPSB0aGlzLmNvbXBhcmlzb25UZXJtLmV2YWx1YXRlKGNvbnRleHQpO1xuICAgIH1cblxuICAgIHJldHVybiB0ZXJtO1xuICB9XG5cbiAgaXNFcXVhbFRvKHRlcm0pIHtcbiAgICBsZXQgZXF1YWxUbyA9IGZhbHNlO1xuXG4gICAgaWYgKGZhbHNlKSB7XG4gICAgICAvLy9cbiAgICB9IGVsc2UgaWYgKHRoaXMudmFyaWFibGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHZhcmlhYmxlID0gdGVybS5nZXRWYXJpYWJsZSgpO1xuXG4gICAgICBpZiAodmFyaWFibGUgIT09IG51bGwpIHtcbiAgICAgICAgZXF1YWxUbyA9IHRoaXMudmFyaWFibGUuaXNFcXVhbFRvKHZhcmlhYmxlKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHRoaXMucHJpbWl0aXZlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBwcmltaXRpdmUgPSB0ZXJtLmdldFByaW1pdGl2ZSgpO1xuXG4gICAgICBpZiAocHJpbWl0aXZlICE9PSBudWxsKSB7XG4gICAgICAgIGVxdWFsVG8gPSB0aGlzLnByaW1pdGl2ZS5pc0VxdWFsVG8ocHJpbWl0aXZlKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZXF1YWxUbztcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJUZXJtXCI7XG5cbiAgc3RhdGljIGZyb21QcmltaXRpdmUocHJpbWl0aXZlLCBjb250ZXh0KSB7XG4gICAgY29uc3QgcHJpbWl0aXZlU3RyaW5nID0gcHJpbWl0aXZlLmdldFN0cmluZygpLFxuICAgICAgICAgIHN0cmluZyA9IHByaW1pdGl2ZVN0cmluZywgLy8vXG4gICAgICAgICAgdmFyaWFibGUgPSBudWxsLFxuICAgICAgICAgIG5lZ2F0ZWRUZXJtID0gbnVsbCxcbiAgICAgICAgICBsb2dpY2FsVGVybSA9IG51bGwsXG4gICAgICAgICAgYnJhY2tldGVkVGVybSA9IG51bGwsXG4gICAgICAgICAgY29tcGFyaXNvblRlcm0gPSBudWxsLFxuICAgICAgICAgIHRlcm0gPSBuZXcgVGVybShzdHJpbmcsIHZhcmlhYmxlLCBwcmltaXRpdmUsIG5lZ2F0ZWRUZXJtLCBsb2dpY2FsVGVybSwgYnJhY2tldGVkVGVybSwgY29tcGFyaXNvblRlcm0pO1xuXG4gICAgcmV0dXJuIHRlcm07XG4gIH1cbn0pO1xuIl0sIm5hbWVzIjpbImRlZmluZSIsIlRlcm0iLCJzdHJpbmciLCJ2YXJpYWJsZSIsInByaW1pdGl2ZSIsIm5lZ2F0ZWRUZXJtIiwibG9naWNhbFRlcm0iLCJicmFja2V0ZWRUZXJtIiwiY29tcGFyaXNvblRlcm0iLCJnZXRTdHJpbmciLCJnZXRWYXJpYWJsZSIsImdldFByaW1pdGl2ZSIsImdldE5lZ2F0ZWRUZXJtIiwiZ2V0TG9naWNhbFRlcm0iLCJnZXRCcmVlZGluZ1Rlcm0iLCJnZXRDb21wYXJpc29uVGVybSIsImdldFByaW1pdGl2ZVZhbHVlIiwicHJpbWl0aXZlVmFsdWUiLCJnZXRWYWx1ZSIsImdldFR5cGUiLCJ0eXBlIiwiZXZhbHVhdGUiLCJjb250ZXh0IiwidGVybSIsImlzRXF1YWxUbyIsImVxdWFsVG8iLCJmcm9tUHJpbWl0aXZlIiwicHJpbWl0aXZlU3RyaW5nIiwibmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBSUE7OztlQUFBOzs7d0JBRnVCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRXZCLFdBQWVBLElBQUFBLGdCQUFNLHlCQUFDO2FBQU1DLEtBQ2RDLE1BQU0sRUFBRUMsUUFBUSxFQUFFQyxTQUFTLEVBQUVDLFdBQVcsRUFBRUMsV0FBVyxFQUFFQyxhQUFhLEVBQUVDLGNBQWM7Z0NBRHRFUDtRQUV4QixJQUFJLENBQUNDLE1BQU0sR0FBR0E7UUFDZCxJQUFJLENBQUNDLFFBQVEsR0FBR0E7UUFDaEIsSUFBSSxDQUFDQyxTQUFTLEdBQUdBO1FBQ2pCLElBQUksQ0FBQ0MsV0FBVyxHQUFHQTtRQUNuQixJQUFJLENBQUNDLFdBQVcsR0FBR0E7UUFDbkIsSUFBSSxDQUFDQyxhQUFhLEdBQUdBO1FBQ3JCLElBQUksQ0FBQ0MsY0FBYyxHQUFHQTs7OztZQUd4QkMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDUCxNQUFNO1lBQ3BCOzs7WUFFQVEsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDUCxRQUFRO1lBQ3RCOzs7WUFFQVEsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDUCxTQUFTO1lBQ3ZCOzs7WUFFQVEsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDUCxXQUFXO1lBQ3pCOzs7WUFFQVEsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDUCxXQUFXO1lBQ3pCOzs7WUFFQVEsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDUCxhQUFhO1lBQzNCOzs7WUFFQVEsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDUCxjQUFjO1lBQzVCOzs7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