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
var _dom = require("../../dom");
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
var _VariablesDeclaration;
var _default = (0, _dom.domAssigned)((_VariablesDeclaration = /*#__PURE__*/ function() {
    function VariablesDeclaration(fileContext, variables) {
        _class_call_check(this, VariablesDeclaration);
        this.fileContext = fileContext;
        this.variables = variables;
    }
    _create_class(VariablesDeclaration, [
        {
            key: "getFileContext",
            value: function getFileContext() {
                return this.fileContext;
            }
        },
        {
            key: "getVariables",
            value: function getVariables() {
                return this.variables;
            }
        },
        {
            key: "getString",
            value: function getString() {
                return this.variables.getString();
            }
        },
        {
            key: "verify",
            value: function verify() {
                var verified;
                var variablesDeclarationString = this.getString(); ///
                this.fileContext.trace("Verifying the '".concat(variablesDeclarationString, "' variables declaration..."));
                var variablesVerifiedWhenDeclared = this.variables.verifyWhenDeclared(this.fileContext);
                if (variablesVerifiedWhenDeclared) {
                    this.fileContext.addVariables(this.variables);
                    verified = true;
                }
                if (verified) {
                    this.fileContext.debug("...verified the '".concat(variablesDeclarationString, "' variables declaration."));
                }
                return verified;
            }
        }
    ], [
        {
            key: "fromVariablesDeclarationNode",
            value: function fromVariablesDeclarationNode(variablesDeclarationNode, fileContext) {
                var variables = Variables.fromVariablesDeclarationNode(variablesDeclarationNode, fileContext), variablesDeclaration = new VariablesDeclaration(fileContext, variables);
                return variablesDeclaration;
            }
        }
    ]);
    return VariablesDeclaration;
}(), _define_property(_VariablesDeclaration, "name", "VariablesDeclaration"), _VariablesDeclaration));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kb20vZGVjbGFyYXRpb24vdmFyaWFibGVzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBkb21Bc3NpZ25lZCB9IGZyb20gXCIuLi8uLi9kb21cIjtcblxuZXhwb3J0IGRlZmF1bHQgZG9tQXNzaWduZWQoY2xhc3MgVmFyaWFibGVzRGVjbGFyYXRpb24ge1xuICBjb25zdHJ1Y3RvcihmaWxlQ29udGV4dCwgdmFyaWFibGVzKSB7XG4gICAgdGhpcy5maWxlQ29udGV4dCA9IGZpbGVDb250ZXh0O1xuICAgIHRoaXMudmFyaWFibGVzID0gdmFyaWFibGVzO1xuICB9XG5cbiAgZ2V0RmlsZUNvbnRleHQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZmlsZUNvbnRleHQ7XG4gIH1cblxuICBnZXRWYXJpYWJsZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMudmFyaWFibGVzO1xuICB9XG5cbiAgZ2V0U3RyaW5nKCkgeyByZXR1cm4gdGhpcy52YXJpYWJsZXMuZ2V0U3RyaW5nKCk7IH1cblxuICB2ZXJpZnkoKSB7XG4gICAgbGV0IHZlcmlmaWVkO1xuXG4gICAgY29uc3QgdmFyaWFibGVzRGVjbGFyYXRpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAvLy9cblxuICAgIHRoaXMuZmlsZUNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7dmFyaWFibGVzRGVjbGFyYXRpb25TdHJpbmd9JyB2YXJpYWJsZXMgZGVjbGFyYXRpb24uLi5gKTtcblxuICAgIGNvbnN0IHZhcmlhYmxlc1ZlcmlmaWVkV2hlbkRlY2xhcmVkID0gdGhpcy52YXJpYWJsZXMudmVyaWZ5V2hlbkRlY2xhcmVkKHRoaXMuZmlsZUNvbnRleHQpO1xuXG4gICAgaWYgKHZhcmlhYmxlc1ZlcmlmaWVkV2hlbkRlY2xhcmVkKSB7XG4gICAgICB0aGlzLmZpbGVDb250ZXh0LmFkZFZhcmlhYmxlcyh0aGlzLnZhcmlhYmxlcyk7XG5cbiAgICAgIHZlcmlmaWVkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAodmVyaWZpZWQpIHtcbiAgICAgIHRoaXMuZmlsZUNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHt2YXJpYWJsZXNEZWNsYXJhdGlvblN0cmluZ30nIHZhcmlhYmxlcyBkZWNsYXJhdGlvbi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZWQ7XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiVmFyaWFibGVzRGVjbGFyYXRpb25cIjtcblxuICBzdGF0aWMgZnJvbVZhcmlhYmxlc0RlY2xhcmF0aW9uTm9kZSh2YXJpYWJsZXNEZWNsYXJhdGlvbk5vZGUsIGZpbGVDb250ZXh0KSB7XG4gICAgY29uc3QgdmFyaWFibGVzID0gVmFyaWFibGVzLmZyb21WYXJpYWJsZXNEZWNsYXJhdGlvbk5vZGUodmFyaWFibGVzRGVjbGFyYXRpb25Ob2RlLCBmaWxlQ29udGV4dCksXG4gICAgICAgICAgdmFyaWFibGVzRGVjbGFyYXRpb24gPSBuZXcgVmFyaWFibGVzRGVjbGFyYXRpb24oZmlsZUNvbnRleHQsIHZhcmlhYmxlcyk7XG5cbiAgICByZXR1cm4gdmFyaWFibGVzRGVjbGFyYXRpb247XG4gIH1cbn0pO1xuIl0sIm5hbWVzIjpbImRvbUFzc2lnbmVkIiwiVmFyaWFibGVzRGVjbGFyYXRpb24iLCJmaWxlQ29udGV4dCIsInZhcmlhYmxlcyIsImdldEZpbGVDb250ZXh0IiwiZ2V0VmFyaWFibGVzIiwiZ2V0U3RyaW5nIiwidmVyaWZ5IiwidmVyaWZpZWQiLCJ2YXJpYWJsZXNEZWNsYXJhdGlvblN0cmluZyIsInRyYWNlIiwidmFyaWFibGVzVmVyaWZpZWRXaGVuRGVjbGFyZWQiLCJ2ZXJpZnlXaGVuRGVjbGFyZWQiLCJhZGRWYXJpYWJsZXMiLCJkZWJ1ZyIsImZyb21WYXJpYWJsZXNEZWNsYXJhdGlvbk5vZGUiLCJ2YXJpYWJsZXNEZWNsYXJhdGlvbk5vZGUiLCJWYXJpYWJsZXMiLCJ2YXJpYWJsZXNEZWNsYXJhdGlvbiIsIm5hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQUlBOzs7ZUFBQTs7O21CQUY0Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUU1QixXQUFlQSxJQUFBQSxnQkFBVyx5Q0FBQzthQUFNQyxxQkFDbkJDLFdBQVcsRUFBRUMsU0FBUztnQ0FESEY7UUFFN0IsSUFBSSxDQUFDQyxXQUFXLEdBQUdBO1FBQ25CLElBQUksQ0FBQ0MsU0FBUyxHQUFHQTs7OztZQUduQkMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRixXQUFXO1lBQ3pCOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRixTQUFTO1lBQ3ZCOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUFjLE9BQU8sSUFBSSxDQUFDSCxTQUFTLENBQUNHLFNBQVM7WUFBSTs7O1lBRWpEQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBSUM7Z0JBRUosSUFBTUMsNkJBQTZCLElBQUksQ0FBQ0gsU0FBUyxJQUFJLEdBQUc7Z0JBRXhELElBQUksQ0FBQ0osV0FBVyxDQUFDUSxLQUFLLENBQUMsQUFBQyxrQkFBNEMsT0FBM0JELDRCQUEyQjtnQkFFcEUsSUFBTUUsZ0NBQWdDLElBQUksQ0FBQ1IsU0FBUyxDQUFDUyxrQkFBa0IsQ0FBQyxJQUFJLENBQUNWLFdBQVc7Z0JBRXhGLElBQUlTLCtCQUErQjtvQkFDakMsSUFBSSxDQUFDVCxXQUFXLENBQUNXLFlBQVksQ0FBQyxJQUFJLENBQUNWLFNBQVM7b0JBRTVDSyxXQUFXO2dCQUNiO2dCQUVBLElBQUlBLFVBQVU7b0JBQ1osSUFBSSxDQUFDTixXQUFXLENBQUNZLEtBQUssQ0FBQyxBQUFDLG9CQUE4QyxPQUEzQkwsNEJBQTJCO2dCQUN4RTtnQkFFQSxPQUFPRDtZQUNUOzs7O1lBSU9PLEtBQUFBO21CQUFQLFNBQU9BLDZCQUE2QkMsd0JBQXdCLEVBQUVkLFdBQVc7Z0JBQ3ZFLElBQU1DLFlBQVljLFVBQVVGLDRCQUE0QixDQUFDQywwQkFBMEJkLGNBQzdFZ0IsdUJBQXVCLElBQUlqQixxQkFBcUJDLGFBQWFDO2dCQUVuRSxPQUFPZTtZQUNUOzs7O0tBUEEsd0NBQU9DLFFBQU8ifQ==