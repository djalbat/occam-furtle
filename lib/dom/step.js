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
var _dom = /*#__PURE__*/ _interop_require_wildcard(require("../dom"));
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
function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function(nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function _interop_require_wildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) {
        return obj;
    }
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
        return {
            default: obj
        };
    }
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) {
        return cache.get(obj);
    }
    var newObj = {
        __proto__: null
    };
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj){
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
            if (desc && (desc.get || desc.set)) {
                Object.defineProperty(newObj, key, desc);
            } else {
                newObj[key] = obj[key];
            }
        }
    }
    newObj.default = obj;
    if (cache) {
        cache.set(obj, newObj);
    }
    return newObj;
}
var _Step;
var _default = (0, _dom.domAssigned)((_Step = /*#__PURE__*/ function() {
    function Step(string, arrayAssignment, objectAssigment, conditionalBlocks, variableAssignment, variablesDeclaration) {
        _class_call_check(this, Step);
        this.string = string;
        this.arrayAssignment = arrayAssignment;
        this.objectAssigment = objectAssigment;
        this.conditionalBlocks = conditionalBlocks;
        this.variableAssignment = variableAssignment;
        this.variablesDeclaration = variablesDeclaration;
    }
    _create_class(Step, [
        {
            key: "getString",
            value: function getString() {
                return this.string;
            }
        },
        {
            key: "getArrayAssignment",
            value: function getArrayAssignment() {
                return this.arrayAssignment;
            }
        },
        {
            key: "getObjectAssigment",
            value: function getObjectAssigment() {
                return this.objectAssigment;
            }
        },
        {
            key: "getConditionalBlocks",
            value: function getConditionalBlocks() {
                return this.conditionalBlocks;
            }
        },
        {
            key: "getVariableAssignment",
            value: function getVariableAssignment() {
                return this.variableAssignment;
            }
        },
        {
            key: "getVariablesDeclaration",
            value: function getVariablesDeclaration() {
                return this.variablesDeclaration;
            }
        },
        {
            key: "evaluate",
            value: function evaluate(context) {
                if (false) {
                ///
                } else if (this.arrayAssignment !== null) {
                    this.arrayAssignment.evaluate(context);
                } else if (this.objectAssigment !== null) {
                    this.objectAssigment.evaluate(context);
                } else if (this.conditionalBlocks !== null) {
                    this.conditionalBlocks.evaluate(context);
                } else if (this.variableAssignment !== null) {
                    this.variableAssignment.evaluate(context);
                } else if (this.variablesDeclaration !== null) {
                    this.variablesDeclaration.evaluate(context);
                }
            }
        }
    ], [
        {
            key: "fromStepNode",
            value: function fromStepNode(stepNode, context) {
                var ArrayAssignment = _dom.default.ArrayAssignment, ObjectAssigment = _dom.default.ObjectAssigment, ConditionalBlocks = _dom.default.ConditionalBlocks, VariableAssignment = _dom.default.VariableAssignment, VariablesDeclaration = _dom.default.VariablesDeclaration, node = stepNode, string = context.nodeAsString(node), arrayAssignment = ArrayAssignment.fromStepNode(stepNode, context), objectAssigment = ObjectAssigment.fromStepNode(stepNode, context), conditionalBlocks = ConditionalBlocks.fromStepNode(stepNode, context), variableAssignment = VariableAssignment.fromStepNode(stepNode, context), variablesDeclaration = VariablesDeclaration.fromStepNode(stepNode, context), step = new Step(string, arrayAssignment, objectAssigment, conditionalBlocks, variableAssignment, variablesDeclaration);
                return step;
            }
        }
    ]);
    return Step;
}(), _define_property(_Step, "name", "Step"), _Step));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb20vc3RlcC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IGRvbSBmcm9tIFwiLi4vZG9tXCI7XG5cbmltcG9ydCB7IGRvbUFzc2lnbmVkIH0gZnJvbSBcIi4uL2RvbVwiO1xuXG5leHBvcnQgZGVmYXVsdCBkb21Bc3NpZ25lZChjbGFzcyBTdGVwIHtcbiAgY29uc3RydWN0b3Ioc3RyaW5nLCBhcnJheUFzc2lnbm1lbnQsIG9iamVjdEFzc2lnbWVudCwgY29uZGl0aW9uYWxCbG9ja3MsIHZhcmlhYmxlQXNzaWdubWVudCwgdmFyaWFibGVzRGVjbGFyYXRpb24pIHtcbiAgICB0aGlzLnN0cmluZyA9IHN0cmluZztcbiAgICB0aGlzLmFycmF5QXNzaWdubWVudCA9IGFycmF5QXNzaWdubWVudDtcbiAgICB0aGlzLm9iamVjdEFzc2lnbWVudCA9IG9iamVjdEFzc2lnbWVudDtcbiAgICB0aGlzLmNvbmRpdGlvbmFsQmxvY2tzID0gY29uZGl0aW9uYWxCbG9ja3M7XG4gICAgdGhpcy52YXJpYWJsZUFzc2lnbm1lbnQgPSB2YXJpYWJsZUFzc2lnbm1lbnQ7XG4gICAgdGhpcy52YXJpYWJsZXNEZWNsYXJhdGlvbiA9IHZhcmlhYmxlc0RlY2xhcmF0aW9uO1xuICB9XG5cbiAgZ2V0U3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLnN0cmluZztcbiAgfVxuXG4gIGdldEFycmF5QXNzaWdubWVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5hcnJheUFzc2lnbm1lbnQ7XG4gIH1cblxuICBnZXRPYmplY3RBc3NpZ21lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMub2JqZWN0QXNzaWdtZW50O1xuICB9XG5cbiAgZ2V0Q29uZGl0aW9uYWxCbG9ja3MoKSB7XG4gICAgcmV0dXJuIHRoaXMuY29uZGl0aW9uYWxCbG9ja3M7XG4gIH1cblxuICBnZXRWYXJpYWJsZUFzc2lnbm1lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMudmFyaWFibGVBc3NpZ25tZW50O1xuICB9XG5cbiAgZ2V0VmFyaWFibGVzRGVjbGFyYXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMudmFyaWFibGVzRGVjbGFyYXRpb247XG4gIH1cblxuICBldmFsdWF0ZShjb250ZXh0KSB7XG5cbiAgICBpZiAoZmFsc2UpIHtcbiAgICAgIC8vL1xuICAgIH0gZWxzZSBpZiAodGhpcy5hcnJheUFzc2lnbm1lbnQgIT09IG51bGwpIHtcbiAgICAgIHRoaXMuYXJyYXlBc3NpZ25tZW50LmV2YWx1YXRlKGNvbnRleHQpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5vYmplY3RBc3NpZ21lbnQgIT09IG51bGwpIHtcbiAgICAgIHRoaXMub2JqZWN0QXNzaWdtZW50LmV2YWx1YXRlKGNvbnRleHQpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5jb25kaXRpb25hbEJsb2NrcyAhPT0gbnVsbCkge1xuICAgICAgdGhpcy5jb25kaXRpb25hbEJsb2Nrcy5ldmFsdWF0ZShjb250ZXh0KTtcbiAgICB9IGVsc2UgaWYgKHRoaXMudmFyaWFibGVBc3NpZ25tZW50ICE9PSBudWxsKSB7XG4gICAgICB0aGlzLnZhcmlhYmxlQXNzaWdubWVudC5ldmFsdWF0ZShjb250ZXh0KTtcbiAgICB9IGVsc2UgaWYgKHRoaXMudmFyaWFibGVzRGVjbGFyYXRpb24gIT09IG51bGwpIHtcbiAgICAgIHRoaXMudmFyaWFibGVzRGVjbGFyYXRpb24uZXZhbHVhdGUoY29udGV4dCk7XG4gICAgfVxuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIlN0ZXBcIjtcblxuICBzdGF0aWMgZnJvbVN0ZXBOb2RlKHN0ZXBOb2RlLCBjb250ZXh0KSB7XG4gICAgY29uc3QgeyBBcnJheUFzc2lnbm1lbnQsIE9iamVjdEFzc2lnbWVudCwgQ29uZGl0aW9uYWxCbG9ja3MsIFZhcmlhYmxlQXNzaWdubWVudCwgVmFyaWFibGVzRGVjbGFyYXRpb24gfSA9IGRvbSxcbiAgICAgICAgICBub2RlID0gc3RlcE5vZGUsICAvLy9cbiAgICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgICBhcnJheUFzc2lnbm1lbnQgPSBBcnJheUFzc2lnbm1lbnQuZnJvbVN0ZXBOb2RlKHN0ZXBOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgICBvYmplY3RBc3NpZ21lbnQgPSBPYmplY3RBc3NpZ21lbnQuZnJvbVN0ZXBOb2RlKHN0ZXBOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgICBjb25kaXRpb25hbEJsb2NrcyA9IENvbmRpdGlvbmFsQmxvY2tzLmZyb21TdGVwTm9kZShzdGVwTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgdmFyaWFibGVBc3NpZ25tZW50ID0gVmFyaWFibGVBc3NpZ25tZW50LmZyb21TdGVwTm9kZShzdGVwTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgdmFyaWFibGVzRGVjbGFyYXRpb24gPSBWYXJpYWJsZXNEZWNsYXJhdGlvbi5mcm9tU3RlcE5vZGUoc3RlcE5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgIHN0ZXAgPSBuZXcgU3RlcChzdHJpbmcsIGFycmF5QXNzaWdubWVudCwgb2JqZWN0QXNzaWdtZW50LCBjb25kaXRpb25hbEJsb2NrcywgdmFyaWFibGVBc3NpZ25tZW50LCB2YXJpYWJsZXNEZWNsYXJhdGlvbik7XG5cbiAgICByZXR1cm4gc3RlcDtcbiAgfVxufSk7XG4iXSwibmFtZXMiOlsiZG9tQXNzaWduZWQiLCJTdGVwIiwic3RyaW5nIiwiYXJyYXlBc3NpZ25tZW50Iiwib2JqZWN0QXNzaWdtZW50IiwiY29uZGl0aW9uYWxCbG9ja3MiLCJ2YXJpYWJsZUFzc2lnbm1lbnQiLCJ2YXJpYWJsZXNEZWNsYXJhdGlvbiIsImdldFN0cmluZyIsImdldEFycmF5QXNzaWdubWVudCIsImdldE9iamVjdEFzc2lnbWVudCIsImdldENvbmRpdGlvbmFsQmxvY2tzIiwiZ2V0VmFyaWFibGVBc3NpZ25tZW50IiwiZ2V0VmFyaWFibGVzRGVjbGFyYXRpb24iLCJldmFsdWF0ZSIsImNvbnRleHQiLCJmcm9tU3RlcE5vZGUiLCJzdGVwTm9kZSIsIkFycmF5QXNzaWdubWVudCIsImRvbSIsIk9iamVjdEFzc2lnbWVudCIsIkNvbmRpdGlvbmFsQmxvY2tzIiwiVmFyaWFibGVBc3NpZ25tZW50IiwiVmFyaWFibGVzRGVjbGFyYXRpb24iLCJub2RlIiwibm9kZUFzU3RyaW5nIiwic3RlcCIsIm5hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQU1BOzs7ZUFBQTs7OzJEQUpnQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBSWhCLFdBQWVBLElBQUFBLGdCQUFXLHlCQUFDO2FBQU1DLEtBQ25CQyxNQUFNLEVBQUVDLGVBQWUsRUFBRUMsZUFBZSxFQUFFQyxpQkFBaUIsRUFBRUMsa0JBQWtCLEVBQUVDLG9CQUFvQjtnQ0FEbEZOO1FBRTdCLElBQUksQ0FBQ0MsTUFBTSxHQUFHQTtRQUNkLElBQUksQ0FBQ0MsZUFBZSxHQUFHQTtRQUN2QixJQUFJLENBQUNDLGVBQWUsR0FBR0E7UUFDdkIsSUFBSSxDQUFDQyxpQkFBaUIsR0FBR0E7UUFDekIsSUFBSSxDQUFDQyxrQkFBa0IsR0FBR0E7UUFDMUIsSUFBSSxDQUFDQyxvQkFBb0IsR0FBR0E7Ozs7WUFHOUJDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ04sTUFBTTtZQUNwQjs7O1lBRUFPLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ04sZUFBZTtZQUM3Qjs7O1lBRUFPLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ04sZUFBZTtZQUM3Qjs7O1lBRUFPLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ04saUJBQWlCO1lBQy9COzs7WUFFQU8sS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDTixrQkFBa0I7WUFDaEM7OztZQUVBTyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNOLG9CQUFvQjtZQUNsQzs7O1lBRUFPLEtBQUFBO21CQUFBQSxTQUFBQSxTQUFTQyxPQUFPO2dCQUVkLElBQUksT0FBTztnQkFDVCxHQUFHO2dCQUNMLE9BQU8sSUFBSSxJQUFJLENBQUNaLGVBQWUsS0FBSyxNQUFNO29CQUN4QyxJQUFJLENBQUNBLGVBQWUsQ0FBQ1csUUFBUSxDQUFDQztnQkFDaEMsT0FBTyxJQUFJLElBQUksQ0FBQ1gsZUFBZSxLQUFLLE1BQU07b0JBQ3hDLElBQUksQ0FBQ0EsZUFBZSxDQUFDVSxRQUFRLENBQUNDO2dCQUNoQyxPQUFPLElBQUksSUFBSSxDQUFDVixpQkFBaUIsS0FBSyxNQUFNO29CQUMxQyxJQUFJLENBQUNBLGlCQUFpQixDQUFDUyxRQUFRLENBQUNDO2dCQUNsQyxPQUFPLElBQUksSUFBSSxDQUFDVCxrQkFBa0IsS0FBSyxNQUFNO29CQUMzQyxJQUFJLENBQUNBLGtCQUFrQixDQUFDUSxRQUFRLENBQUNDO2dCQUNuQyxPQUFPLElBQUksSUFBSSxDQUFDUixvQkFBb0IsS0FBSyxNQUFNO29CQUM3QyxJQUFJLENBQUNBLG9CQUFvQixDQUFDTyxRQUFRLENBQUNDO2dCQUNyQztZQUNGOzs7O1lBSU9DLEtBQUFBO21CQUFQLFNBQU9BLGFBQWFDLFFBQVEsRUFBRUYsT0FBTztnQkFDbkMsSUFBUUcsa0JBQWtHQyxZQUFHLENBQXJHRCxpQkFBaUJFLGtCQUFpRkQsWUFBRyxDQUFwRkMsaUJBQWlCQyxvQkFBZ0VGLFlBQUcsQ0FBbkVFLG1CQUFtQkMscUJBQTZDSCxZQUFHLENBQWhERyxvQkFBb0JDLHVCQUF5QkosWUFBRyxDQUE1Qkksc0JBQzNFQyxPQUFPUCxVQUNQZixTQUFTYSxRQUFRVSxZQUFZLENBQUNELE9BQzlCckIsa0JBQWtCZSxnQkFBZ0JGLFlBQVksQ0FBQ0MsVUFBVUYsVUFDekRYLGtCQUFrQmdCLGdCQUFnQkosWUFBWSxDQUFDQyxVQUFVRixVQUN6RFYsb0JBQW9CZ0Isa0JBQWtCTCxZQUFZLENBQUNDLFVBQVVGLFVBQzdEVCxxQkFBcUJnQixtQkFBbUJOLFlBQVksQ0FBQ0MsVUFBVUYsVUFDL0RSLHVCQUF1QmdCLHFCQUFxQlAsWUFBWSxDQUFDQyxVQUFVRixVQUNuRVcsT0FBTyxJQUFJekIsS0FBS0MsUUFBUUMsaUJBQWlCQyxpQkFBaUJDLG1CQUFtQkMsb0JBQW9CQztnQkFFdkcsT0FBT21CO1lBQ1Q7Ozs7S0FkQSx3QkFBT0MsUUFBTyJ9