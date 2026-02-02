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
            value: function isEqualTo(expression) {
                var equalTo;
                if (false) {
                ///
                } else if (this.variable !== null) {
                    equalTo = this.variable.isEqualTo();
                } else if (this.primitive !== null) {
                    equalTo = this.primitive.isEqualTo();
                }
                return equalTo;
            }
        }
    ]);
    return Term;
}(), _define_property(_Term, "name", "Term"), _Term));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3Rlcm0uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGRlZmluZSB9IGZyb20gXCIuLi9lbGVtZW50c1wiO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmUoY2xhc3MgVGVybSB7XG4gIGNvbnN0cnVjdG9yKHN0cmluZywgdmFyaWFibGUsIHByaW1pdGl2ZSwgbmVnYXRlZFRlcm0sIGxvZ2ljYWxUZXJtLCBicmFja2V0ZWRUZXJtLCBjb21wYXJpc29uVGVybSkge1xuICAgIHRoaXMuc3RyaW5nID0gc3RyaW5nO1xuICAgIHRoaXMudmFyaWFibGUgPSB2YXJpYWJsZTtcbiAgICB0aGlzLnByaW1pdGl2ZSA9IHByaW1pdGl2ZTtcbiAgICB0aGlzLm5lZ2F0ZWRUZXJtID0gbmVnYXRlZFRlcm07XG4gICAgdGhpcy5sb2dpY2FsVGVybSA9IGxvZ2ljYWxUZXJtO1xuICAgIHRoaXMuYnJhY2tldGVkVGVybSA9IGJyYWNrZXRlZFRlcm07XG4gICAgdGhpcy5jb21wYXJpc29uVGVybSA9IGNvbXBhcmlzb25UZXJtO1xuICB9XG5cbiAgZ2V0U3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLnN0cmluZztcbiAgfVxuXG4gIGdldFZhcmlhYmxlKCkge1xuICAgIHJldHVybiB0aGlzLnZhcmlhYmxlO1xuICB9XG5cbiAgZ2V0UHJpbWl0aXZlKCkge1xuICAgIHJldHVybiB0aGlzLnByaW1pdGl2ZTtcbiAgfVxuXG4gIGdldE5lZ2F0ZWRUZXJtKCkge1xuICAgIHJldHVybiB0aGlzLm5lZ2F0ZWRUZXJtO1xuICB9XG5cbiAgZ2V0TG9naWNhbFRlcm0oKSB7XG4gICAgcmV0dXJuIHRoaXMubG9naWNhbFRlcm07XG4gIH1cblxuICBnZXRCcmVlZGluZ1Rlcm0oKSB7XG4gICAgcmV0dXJuIHRoaXMuYnJhY2tldGVkVGVybTtcbiAgfVxuXG4gIGdldENvbXBhcmlzb25UZXJtKCkge1xuICAgIHJldHVybiB0aGlzLmNvbXBhcmlzb25UZXJtO1xuICB9XG5cbiAgZ2V0Tm9kZSgpIHsgcmV0dXJuIHRoaXMucHJpbWl0aXZlLmdldE5vZGUoKTsgfVxuXG4gIGdldE5vZGVzKCkgeyByZXR1cm4gdGhpcy5wcmltaXRpdmUuZ2V0Tm9kZXMoKTsgfVxuXG4gIGdldE51bWJlcigpIHsgcmV0dXJuIHRoaXMucHJpbWl0aXZlLmdldE51bWJlcigpOyB9XG5cbiAgZ2V0Qm9vbGVhbigpIHsgcmV0dXJuIHRoaXMucHJpbWl0aXZlLmdldEJvb2xlYW4oKTsgfVxuXG4gIGdldFN0cmluZ0xpdGVyYWwoKSB7IHJldHVybiB0aGlzLnByaW1pdGl2ZS5nZXRTdHJpbmdMaXRlcmFsKCk7IH1cblxuICBnZXRUeXBlKCkge1xuICAgIGxldCB0eXBlO1xuXG4gICAgaWYgKGZhbHNlKSB7XG4gICAgICAvLy9cbiAgICB9IGVsc2UgaWYgKHRoaXMudmFyaWFibGUgIT09IG51bGwpIHtcbiAgICAgIHR5cGUgPSB0aGlzLnZhcmlhYmxlLmdldFR5cGUoKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMucHJpbWl0aXZlICE9PSBudWxsKSB7XG4gICAgICB0eXBlID0gdGhpcy5wcmltaXRpdmUuZ2V0VHlwZSgpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5uZWdhdGVkVGVybSAhPT0gbnVsbCkge1xuICAgICAgdHlwZSA9IHRoaXMubmVnYXRlZFRlcm0uZ2V0VHlwZSgpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5sb2dpY2FsVGVybSAhPT0gbnVsbCkge1xuICAgICAgdHlwZSA9IHRoaXMubG9naWNhbFRlcm0uZ2V0VHlwZSgpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5icmFja2V0ZWRUZXJtICE9PSBudWxsKSB7XG4gICAgICB0eXBlID0gdGhpcy5icmFja2V0ZWRUZXJtLmdldFR5cGUoKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuY29tcGFyaXNvblRlcm0gIT09IG51bGwpIHtcbiAgICAgIHR5cGUgPSB0aGlzLmNvbXBhcmlzb25UZXJtLmdldFR5cGUoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdHlwZTtcbiAgfVxuXG4gIGV2YWx1YXRlKGNvbnRleHQpIHtcbiAgICBsZXQgdGVybTtcblxuICAgIGlmIChmYWxzZSkge1xuICAgICAgLy8vXG4gICAgfSBlbHNlIGlmICh0aGlzLnZhcmlhYmxlICE9PSBudWxsKSB7XG4gICAgICB0ZXJtID0gdGhpcy52YXJpYWJsZS5ldmFsdWF0ZShjb250ZXh0KTtcbiAgICB9IGVsc2UgaWYgKHRoaXMucHJpbWl0aXZlICE9PSBudWxsKSB7XG4gICAgICB0ZXJtID0gdGhpcy5wcmltaXRpdmUuZXZhbHVhdGUoY29udGV4dCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLm5lZ2F0ZWRUZXJtICE9PSBudWxsKSB7XG4gICAgICB0ZXJtID0gdGhpcy5uZWdhdGVkVGVybS5ldmFsdWF0ZShjb250ZXh0KTtcbiAgICB9IGVsc2UgaWYgKHRoaXMubG9naWNhbFRlcm0gIT09IG51bGwpIHtcbiAgICAgIHRlcm0gPSB0aGlzLmxvZ2ljYWxUZXJtLmV2YWx1YXRlKGNvbnRleHQpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5icmFja2V0ZWRUZXJtICE9PSBudWxsKSB7XG4gICAgICB0ZXJtID0gdGhpcy5icmFja2V0ZWRUZXJtLmV2YWx1YXRlKGNvbnRleHQpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5jb21wYXJpc29uVGVybSAhPT0gbnVsbCkge1xuICAgICAgdGVybSA9IHRoaXMuY29tcGFyaXNvblRlcm0uZXZhbHVhdGUoY29udGV4dCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRlcm07XG4gIH1cblxuICBpc0VxdWFsVG8oZXhwcmVzc2lvbikge1xuICAgIGxldCBlcXVhbFRvO1xuXG4gICAgaWYgKGZhbHNlKSB7XG4gICAgICAvLy9cbiAgICB9IGVsc2UgaWYgKHRoaXMudmFyaWFibGUgIT09IG51bGwpIHtcbiAgICAgIGVxdWFsVG8gPSB0aGlzLnZhcmlhYmxlLmlzRXF1YWxUbygpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5wcmltaXRpdmUgIT09IG51bGwpIHtcbiAgICAgIGVxdWFsVG8gPSB0aGlzLnByaW1pdGl2ZS5pc0VxdWFsVG8oKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZXF1YWxUbztcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJUZXJtXCI7XG59KTtcbiJdLCJuYW1lcyI6WyJkZWZpbmUiLCJUZXJtIiwic3RyaW5nIiwidmFyaWFibGUiLCJwcmltaXRpdmUiLCJuZWdhdGVkVGVybSIsImxvZ2ljYWxUZXJtIiwiYnJhY2tldGVkVGVybSIsImNvbXBhcmlzb25UZXJtIiwiZ2V0U3RyaW5nIiwiZ2V0VmFyaWFibGUiLCJnZXRQcmltaXRpdmUiLCJnZXROZWdhdGVkVGVybSIsImdldExvZ2ljYWxUZXJtIiwiZ2V0QnJlZWRpbmdUZXJtIiwiZ2V0Q29tcGFyaXNvblRlcm0iLCJnZXROb2RlIiwiZ2V0Tm9kZXMiLCJnZXROdW1iZXIiLCJnZXRCb29sZWFuIiwiZ2V0U3RyaW5nTGl0ZXJhbCIsImdldFR5cGUiLCJ0eXBlIiwiZXZhbHVhdGUiLCJjb250ZXh0IiwidGVybSIsImlzRXF1YWxUbyIsImV4cHJlc3Npb24iLCJlcXVhbFRvIiwibmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBSUE7OztlQUFBOzs7d0JBRnVCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRXZCLFdBQWVBLElBQUFBLGdCQUFNLHlCQUFDO2FBQU1DLEtBQ2RDLE1BQU0sRUFBRUMsUUFBUSxFQUFFQyxTQUFTLEVBQUVDLFdBQVcsRUFBRUMsV0FBVyxFQUFFQyxhQUFhLEVBQUVDLGNBQWM7Z0NBRHRFUDtRQUV4QixJQUFJLENBQUNDLE1BQU0sR0FBR0E7UUFDZCxJQUFJLENBQUNDLFFBQVEsR0FBR0E7UUFDaEIsSUFBSSxDQUFDQyxTQUFTLEdBQUdBO1FBQ2pCLElBQUksQ0FBQ0MsV0FBVyxHQUFHQTtRQUNuQixJQUFJLENBQUNDLFdBQVcsR0FBR0E7UUFDbkIsSUFBSSxDQUFDQyxhQUFhLEdBQUdBO1FBQ3JCLElBQUksQ0FBQ0MsY0FBYyxHQUFHQTs7OztZQUd4QkMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDUCxNQUFNO1lBQ3BCOzs7WUFFQVEsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDUCxRQUFRO1lBQ3RCOzs7WUFFQVEsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDUCxTQUFTO1lBQ3ZCOzs7WUFFQVEsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDUCxXQUFXO1lBQ3pCOzs7WUFFQVEsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDUCxXQUFXO1lBQ3pCOzs7WUFFQVEsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDUCxhQUFhO1lBQzNCOzs7WUFFQVEsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDUCxjQUFjO1lBQzVCOzs7WUFFQVEsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUFZLE9BQU8sSUFBSSxDQUFDWixTQUFTLENBQUNZLE9BQU87WUFBSTs7O1lBRTdDQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQWEsT0FBTyxJQUFJLENBQUNiLFNBQVMsQ0FBQ2EsUUFBUTtZQUFJOzs7WUFFL0NDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFBYyxPQUFPLElBQUksQ0FBQ2QsU0FBUyxDQUFDYyxTQUFTO1lBQUk7OztZQUVqREMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUFlLE9BQU8sSUFBSSxDQUFDZixTQUFTLENBQUNlLFVBQVU7WUFBSTs7O1lBRW5EQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQXFCLE9BQU8sSUFBSSxDQUFDaEIsU0FBUyxDQUFDZ0IsZ0JBQWdCO1lBQUk7OztZQUUvREMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQUlDO2dCQUVKLElBQUksT0FBTztnQkFDVCxHQUFHO2dCQUNMLE9BQU8sSUFBSSxJQUFJLENBQUNuQixRQUFRLEtBQUssTUFBTTtvQkFDakNtQixPQUFPLElBQUksQ0FBQ25CLFFBQVEsQ0FBQ2tCLE9BQU87Z0JBQzlCLE9BQU8sSUFBSSxJQUFJLENBQUNqQixTQUFTLEtBQUssTUFBTTtvQkFDbENrQixPQUFPLElBQUksQ0FBQ2xCLFNBQVMsQ0FBQ2lCLE9BQU87Z0JBQy9CLE9BQU8sSUFBSSxJQUFJLENBQUNoQixXQUFXLEtBQUssTUFBTTtvQkFDcENpQixPQUFPLElBQUksQ0FBQ2pCLFdBQVcsQ0FBQ2dCLE9BQU87Z0JBQ2pDLE9BQU8sSUFBSSxJQUFJLENBQUNmLFdBQVcsS0FBSyxNQUFNO29CQUNwQ2dCLE9BQU8sSUFBSSxDQUFDaEIsV0FBVyxDQUFDZSxPQUFPO2dCQUNqQyxPQUFPLElBQUksSUFBSSxDQUFDZCxhQUFhLEtBQUssTUFBTTtvQkFDdENlLE9BQU8sSUFBSSxDQUFDZixhQUFhLENBQUNjLE9BQU87Z0JBQ25DLE9BQU8sSUFBSSxJQUFJLENBQUNiLGNBQWMsS0FBSyxNQUFNO29CQUN2Q2MsT0FBTyxJQUFJLENBQUNkLGNBQWMsQ0FBQ2EsT0FBTztnQkFDcEM7Z0JBRUEsT0FBT0M7WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQSxTQUFTQyxPQUFPO2dCQUNkLElBQUlDO2dCQUVKLElBQUksT0FBTztnQkFDVCxHQUFHO2dCQUNMLE9BQU8sSUFBSSxJQUFJLENBQUN0QixRQUFRLEtBQUssTUFBTTtvQkFDakNzQixPQUFPLElBQUksQ0FBQ3RCLFFBQVEsQ0FBQ29CLFFBQVEsQ0FBQ0M7Z0JBQ2hDLE9BQU8sSUFBSSxJQUFJLENBQUNwQixTQUFTLEtBQUssTUFBTTtvQkFDbENxQixPQUFPLElBQUksQ0FBQ3JCLFNBQVMsQ0FBQ21CLFFBQVEsQ0FBQ0M7Z0JBQ2pDLE9BQU8sSUFBSSxJQUFJLENBQUNuQixXQUFXLEtBQUssTUFBTTtvQkFDcENvQixPQUFPLElBQUksQ0FBQ3BCLFdBQVcsQ0FBQ2tCLFFBQVEsQ0FBQ0M7Z0JBQ25DLE9BQU8sSUFBSSxJQUFJLENBQUNsQixXQUFXLEtBQUssTUFBTTtvQkFDcENtQixPQUFPLElBQUksQ0FBQ25CLFdBQVcsQ0FBQ2lCLFFBQVEsQ0FBQ0M7Z0JBQ25DLE9BQU8sSUFBSSxJQUFJLENBQUNqQixhQUFhLEtBQUssTUFBTTtvQkFDdENrQixPQUFPLElBQUksQ0FBQ2xCLGFBQWEsQ0FBQ2dCLFFBQVEsQ0FBQ0M7Z0JBQ3JDLE9BQU8sSUFBSSxJQUFJLENBQUNoQixjQUFjLEtBQUssTUFBTTtvQkFDdkNpQixPQUFPLElBQUksQ0FBQ2pCLGNBQWMsQ0FBQ2UsUUFBUSxDQUFDQztnQkFDdEM7Z0JBRUEsT0FBT0M7WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQSxVQUFVQyxVQUFVO2dCQUNsQixJQUFJQztnQkFFSixJQUFJLE9BQU87Z0JBQ1QsR0FBRztnQkFDTCxPQUFPLElBQUksSUFBSSxDQUFDekIsUUFBUSxLQUFLLE1BQU07b0JBQ2pDeUIsVUFBVSxJQUFJLENBQUN6QixRQUFRLENBQUN1QixTQUFTO2dCQUNuQyxPQUFPLElBQUksSUFBSSxDQUFDdEIsU0FBUyxLQUFLLE1BQU07b0JBQ2xDd0IsVUFBVSxJQUFJLENBQUN4QixTQUFTLENBQUNzQixTQUFTO2dCQUNwQztnQkFFQSxPQUFPRTtZQUNUOzs7O0tBRUEsd0JBQU9DLFFBQU8ifQ==