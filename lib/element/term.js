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
    function Term(string, variable, primitive) {
        _class_call_check(this, Term);
        this.string = string;
        this.variable = variable;
        this.primitive = primitive;
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
                }
                return term;
            }
        },
        {
            key: "isEqualTo",
            value: function isEqualTo(expression) {
                var primitive = expression.getPrimitive(), equalTo = this.primitive.isEqualTo(primitive);
                return equalTo;
            }
        }
    ]);
    return Term;
}(), _define_property(_Term, "name", "Term"), _Term));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3Rlcm0uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGRlZmluZSB9IGZyb20gXCIuLi9lbGVtZW50c1wiO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmUoY2xhc3MgVGVybSB7XG4gIGNvbnN0cnVjdG9yKHN0cmluZywgdmFyaWFibGUsIHByaW1pdGl2ZSkge1xuICAgIHRoaXMuc3RyaW5nID0gc3RyaW5nO1xuICAgIHRoaXMudmFyaWFibGUgPSB2YXJpYWJsZTtcbiAgICB0aGlzLnByaW1pdGl2ZSA9IHByaW1pdGl2ZTtcbiAgfVxuXG4gIGdldFN0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5zdHJpbmc7XG4gIH1cblxuICBnZXRWYXJpYWJsZSgpIHtcbiAgICByZXR1cm4gdGhpcy52YXJpYWJsZTtcbiAgfVxuXG4gIGdldFByaW1pdGl2ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5wcmltaXRpdmU7XG4gIH1cblxuICBnZXROb2RlKCkgeyByZXR1cm4gdGhpcy5wcmltaXRpdmUuZ2V0Tm9kZSgpOyB9XG5cbiAgZ2V0Tm9kZXMoKSB7IHJldHVybiB0aGlzLnByaW1pdGl2ZS5nZXROb2RlcygpOyB9XG5cbiAgZ2V0TnVtYmVyKCkgeyByZXR1cm4gdGhpcy5wcmltaXRpdmUuZ2V0TnVtYmVyKCk7IH1cblxuICBnZXRCb29sZWFuKCkgeyByZXR1cm4gdGhpcy5wcmltaXRpdmUuZ2V0Qm9vbGVhbigpOyB9XG5cbiAgZ2V0U3RyaW5nTGl0ZXJhbCgpIHsgcmV0dXJuIHRoaXMucHJpbWl0aXZlLmdldFN0cmluZ0xpdGVyYWwoKTsgfVxuXG4gIGdldFR5cGUoKSB7XG4gICAgbGV0IHR5cGU7XG5cbiAgICBpZiAoZmFsc2UpIHtcbiAgICAgIC8vL1xuICAgIH0gZWxzZSBpZiAodGhpcy52YXJpYWJsZSAhPT0gbnVsbCkge1xuICAgICAgdHlwZSA9IHRoaXMudmFyaWFibGUuZ2V0VHlwZSgpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5wcmltaXRpdmUgIT09IG51bGwpIHtcbiAgICAgIHR5cGUgPSB0aGlzLnByaW1pdGl2ZS5nZXRUeXBlKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHR5cGU7XG4gIH1cblxuICBldmFsdWF0ZShjb250ZXh0KSB7XG4gICAgbGV0IHRlcm07XG5cbiAgICBpZiAoZmFsc2UpIHtcbiAgICAgIC8vL1xuICAgIH0gZWxzZSBpZiAodGhpcy52YXJpYWJsZSAhPT0gbnVsbCkge1xuICAgICAgdGVybSA9IHRoaXMudmFyaWFibGUuZXZhbHVhdGUoY29udGV4dCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLnByaW1pdGl2ZSAhPT0gbnVsbCkge1xuICAgICAgdGVybSA9IHRoaXMucHJpbWl0aXZlLmV2YWx1YXRlKGNvbnRleHQpO1xuICAgIH1cblxuICAgIHJldHVybiB0ZXJtO1xuICB9XG5cbiAgaXNFcXVhbFRvKGV4cHJlc3Npb24pIHtcbiAgICBjb25zdCBwcmltaXRpdmUgPSBleHByZXNzaW9uLmdldFByaW1pdGl2ZSgpLFxuICAgICAgICAgIGVxdWFsVG8gPSB0aGlzLnByaW1pdGl2ZS5pc0VxdWFsVG8ocHJpbWl0aXZlKTtcblxuICAgIHJldHVybiBlcXVhbFRvO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIlRlcm1cIjtcbn0pO1xuIl0sIm5hbWVzIjpbImRlZmluZSIsIlRlcm0iLCJzdHJpbmciLCJ2YXJpYWJsZSIsInByaW1pdGl2ZSIsImdldFN0cmluZyIsImdldFZhcmlhYmxlIiwiZ2V0UHJpbWl0aXZlIiwiZ2V0Tm9kZSIsImdldE5vZGVzIiwiZ2V0TnVtYmVyIiwiZ2V0Qm9vbGVhbiIsImdldFN0cmluZ0xpdGVyYWwiLCJnZXRUeXBlIiwidHlwZSIsImV2YWx1YXRlIiwiY29udGV4dCIsInRlcm0iLCJpc0VxdWFsVG8iLCJleHByZXNzaW9uIiwiZXF1YWxUbyIsIm5hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQUlBOzs7ZUFBQTs7O3dCQUZ1Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUV2QixXQUFlQSxJQUFBQSxnQkFBTSx5QkFBQzthQUFNQyxLQUNkQyxNQUFNLEVBQUVDLFFBQVEsRUFBRUMsU0FBUztnQ0FEYkg7UUFFeEIsSUFBSSxDQUFDQyxNQUFNLEdBQUdBO1FBQ2QsSUFBSSxDQUFDQyxRQUFRLEdBQUdBO1FBQ2hCLElBQUksQ0FBQ0MsU0FBUyxHQUFHQTs7OztZQUduQkMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSCxNQUFNO1lBQ3BCOzs7WUFFQUksS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSCxRQUFRO1lBQ3RCOzs7WUFFQUksS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSCxTQUFTO1lBQ3ZCOzs7WUFFQUksS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUFZLE9BQU8sSUFBSSxDQUFDSixTQUFTLENBQUNJLE9BQU87WUFBSTs7O1lBRTdDQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQWEsT0FBTyxJQUFJLENBQUNMLFNBQVMsQ0FBQ0ssUUFBUTtZQUFJOzs7WUFFL0NDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFBYyxPQUFPLElBQUksQ0FBQ04sU0FBUyxDQUFDTSxTQUFTO1lBQUk7OztZQUVqREMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUFlLE9BQU8sSUFBSSxDQUFDUCxTQUFTLENBQUNPLFVBQVU7WUFBSTs7O1lBRW5EQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQXFCLE9BQU8sSUFBSSxDQUFDUixTQUFTLENBQUNRLGdCQUFnQjtZQUFJOzs7WUFFL0RDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFJQztnQkFFSixJQUFJLE9BQU87Z0JBQ1QsR0FBRztnQkFDTCxPQUFPLElBQUksSUFBSSxDQUFDWCxRQUFRLEtBQUssTUFBTTtvQkFDakNXLE9BQU8sSUFBSSxDQUFDWCxRQUFRLENBQUNVLE9BQU87Z0JBQzlCLE9BQU8sSUFBSSxJQUFJLENBQUNULFNBQVMsS0FBSyxNQUFNO29CQUNsQ1UsT0FBTyxJQUFJLENBQUNWLFNBQVMsQ0FBQ1MsT0FBTztnQkFDL0I7Z0JBRUEsT0FBT0M7WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQSxTQUFTQyxPQUFPO2dCQUNkLElBQUlDO2dCQUVKLElBQUksT0FBTztnQkFDVCxHQUFHO2dCQUNMLE9BQU8sSUFBSSxJQUFJLENBQUNkLFFBQVEsS0FBSyxNQUFNO29CQUNqQ2MsT0FBTyxJQUFJLENBQUNkLFFBQVEsQ0FBQ1ksUUFBUSxDQUFDQztnQkFDaEMsT0FBTyxJQUFJLElBQUksQ0FBQ1osU0FBUyxLQUFLLE1BQU07b0JBQ2xDYSxPQUFPLElBQUksQ0FBQ2IsU0FBUyxDQUFDVyxRQUFRLENBQUNDO2dCQUNqQztnQkFFQSxPQUFPQztZQUNUOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBLFVBQVVDLFVBQVU7Z0JBQ2xCLElBQU1mLFlBQVllLFdBQVdaLFlBQVksSUFDbkNhLFVBQVUsSUFBSSxDQUFDaEIsU0FBUyxDQUFDYyxTQUFTLENBQUNkO2dCQUV6QyxPQUFPZ0I7WUFDVDs7OztLQUVBLHdCQUFPQyxRQUFPIn0=