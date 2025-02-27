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
    function Step(string, arrayAssignment, objectAssigment, conditionalBlocks, variablesDeclaration) {
        _class_call_check(this, Step);
        this.string = string;
        this.arrayAssignment = arrayAssignment;
        this.objectAssigment = objectAssigment;
        this.conditionalBlocks = conditionalBlocks;
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
                } else if (this.variablesDeclaration !== null) {
                    this.variablesDeclaration.evaluate(context);
                }
            }
        }
    ], [
        {
            key: "fromStepNode",
            value: function fromStepNode(stepNode, context) {
                var ArrayAssignment = _dom.default.ArrayAssignment, ObjectAssigment = _dom.default.ObjectAssigment, ConditionalBlocks = _dom.default.ConditionalBlocks, VariablesDeclaration = _dom.default.VariablesDeclaration, node = stepNode, string = context.nodeAsString(node), arrayAssignment = ArrayAssignment.fromStepNode(stepNode, context), objectAssigment = ObjectAssigment.fromStepNode(stepNode, context), conditionalBlocks = ConditionalBlocks.fromStepNode(stepNode, context), variablesDeclaration = VariablesDeclaration.fromStepNode(stepNode, context), step = new Step(string, arrayAssignment, objectAssigment, conditionalBlocks, variablesDeclaration);
                return step;
            }
        }
    ]);
    return Step;
}(), _define_property(_Step, "name", "Step"), _Step));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb20vc3RlcC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IGRvbSBmcm9tIFwiLi4vZG9tXCI7XG5cbmltcG9ydCB7IGRvbUFzc2lnbmVkIH0gZnJvbSBcIi4uL2RvbVwiO1xuXG5leHBvcnQgZGVmYXVsdCBkb21Bc3NpZ25lZChjbGFzcyBTdGVwIHtcbiAgY29uc3RydWN0b3Ioc3RyaW5nLCBhcnJheUFzc2lnbm1lbnQsIG9iamVjdEFzc2lnbWVudCwgY29uZGl0aW9uYWxCbG9ja3MsIHZhcmlhYmxlc0RlY2xhcmF0aW9uKSB7XG4gICAgdGhpcy5zdHJpbmcgPSBzdHJpbmc7XG4gICAgdGhpcy5hcnJheUFzc2lnbm1lbnQgPSBhcnJheUFzc2lnbm1lbnQ7XG4gICAgdGhpcy5vYmplY3RBc3NpZ21lbnQgPSBvYmplY3RBc3NpZ21lbnQ7XG4gICAgdGhpcy5jb25kaXRpb25hbEJsb2NrcyA9IGNvbmRpdGlvbmFsQmxvY2tzO1xuICAgIHRoaXMudmFyaWFibGVzRGVjbGFyYXRpb24gPSB2YXJpYWJsZXNEZWNsYXJhdGlvbjtcbiAgfVxuXG4gIGdldFN0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5zdHJpbmc7XG4gIH1cblxuICBnZXRBcnJheUFzc2lnbm1lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuYXJyYXlBc3NpZ25tZW50O1xuICB9XG5cbiAgZ2V0T2JqZWN0QXNzaWdtZW50KCkge1xuICAgIHJldHVybiB0aGlzLm9iamVjdEFzc2lnbWVudDtcbiAgfVxuXG4gIGdldENvbmRpdGlvbmFsQmxvY2tzKCkge1xuICAgIHJldHVybiB0aGlzLmNvbmRpdGlvbmFsQmxvY2tzO1xuICB9XG5cbiAgZ2V0VmFyaWFibGVzRGVjbGFyYXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMudmFyaWFibGVzRGVjbGFyYXRpb247XG4gIH1cblxuICBldmFsdWF0ZShjb250ZXh0KSB7XG5cbiAgICBpZiAoZmFsc2UpIHtcbiAgICAgIC8vL1xuICAgIH0gZWxzZSBpZiAodGhpcy5hcnJheUFzc2lnbm1lbnQgIT09IG51bGwpIHtcbiAgICAgIHRoaXMuYXJyYXlBc3NpZ25tZW50LmV2YWx1YXRlKGNvbnRleHQpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5vYmplY3RBc3NpZ21lbnQgIT09IG51bGwpIHtcbiAgICAgIHRoaXMub2JqZWN0QXNzaWdtZW50LmV2YWx1YXRlKGNvbnRleHQpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5jb25kaXRpb25hbEJsb2NrcyAhPT0gbnVsbCkge1xuICAgICAgdGhpcy5jb25kaXRpb25hbEJsb2Nrcy5ldmFsdWF0ZShjb250ZXh0KTtcbiAgICB9IGVsc2UgaWYgKHRoaXMudmFyaWFibGVzRGVjbGFyYXRpb24gIT09IG51bGwpIHtcbiAgICAgIHRoaXMudmFyaWFibGVzRGVjbGFyYXRpb24uZXZhbHVhdGUoY29udGV4dCk7XG4gICAgfVxuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIlN0ZXBcIjtcblxuICBzdGF0aWMgZnJvbVN0ZXBOb2RlKHN0ZXBOb2RlLCBjb250ZXh0KSB7XG4gICAgY29uc3QgeyBBcnJheUFzc2lnbm1lbnQsIE9iamVjdEFzc2lnbWVudCwgQ29uZGl0aW9uYWxCbG9ja3MsIFZhcmlhYmxlc0RlY2xhcmF0aW9uIH0gPSBkb20sXG4gICAgICAgICAgbm9kZSA9IHN0ZXBOb2RlLCAgLy8vXG4gICAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgICAgYXJyYXlBc3NpZ25tZW50ID0gQXJyYXlBc3NpZ25tZW50LmZyb21TdGVwTm9kZShzdGVwTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgb2JqZWN0QXNzaWdtZW50ID0gT2JqZWN0QXNzaWdtZW50LmZyb21TdGVwTm9kZShzdGVwTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgY29uZGl0aW9uYWxCbG9ja3MgPSBDb25kaXRpb25hbEJsb2Nrcy5mcm9tU3RlcE5vZGUoc3RlcE5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgIHZhcmlhYmxlc0RlY2xhcmF0aW9uID0gVmFyaWFibGVzRGVjbGFyYXRpb24uZnJvbVN0ZXBOb2RlKHN0ZXBOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgICBzdGVwID0gbmV3IFN0ZXAoc3RyaW5nLCBhcnJheUFzc2lnbm1lbnQsIG9iamVjdEFzc2lnbWVudCwgY29uZGl0aW9uYWxCbG9ja3MsIHZhcmlhYmxlc0RlY2xhcmF0aW9uKTtcblxuICAgIHJldHVybiBzdGVwO1xuICB9XG59KTtcbiJdLCJuYW1lcyI6WyJkb21Bc3NpZ25lZCIsIlN0ZXAiLCJzdHJpbmciLCJhcnJheUFzc2lnbm1lbnQiLCJvYmplY3RBc3NpZ21lbnQiLCJjb25kaXRpb25hbEJsb2NrcyIsInZhcmlhYmxlc0RlY2xhcmF0aW9uIiwiZ2V0U3RyaW5nIiwiZ2V0QXJyYXlBc3NpZ25tZW50IiwiZ2V0T2JqZWN0QXNzaWdtZW50IiwiZ2V0Q29uZGl0aW9uYWxCbG9ja3MiLCJnZXRWYXJpYWJsZXNEZWNsYXJhdGlvbiIsImV2YWx1YXRlIiwiY29udGV4dCIsImZyb21TdGVwTm9kZSIsInN0ZXBOb2RlIiwiQXJyYXlBc3NpZ25tZW50IiwiZG9tIiwiT2JqZWN0QXNzaWdtZW50IiwiQ29uZGl0aW9uYWxCbG9ja3MiLCJWYXJpYWJsZXNEZWNsYXJhdGlvbiIsIm5vZGUiLCJub2RlQXNTdHJpbmciLCJzdGVwIiwibmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBTUE7OztlQUFBOzs7MkRBSmdCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFJaEIsV0FBZUEsSUFBQUEsZ0JBQVcseUJBQUM7YUFBTUMsS0FDbkJDLE1BQU0sRUFBRUMsZUFBZSxFQUFFQyxlQUFlLEVBQUVDLGlCQUFpQixFQUFFQyxvQkFBb0I7Z0NBRDlETDtRQUU3QixJQUFJLENBQUNDLE1BQU0sR0FBR0E7UUFDZCxJQUFJLENBQUNDLGVBQWUsR0FBR0E7UUFDdkIsSUFBSSxDQUFDQyxlQUFlLEdBQUdBO1FBQ3ZCLElBQUksQ0FBQ0MsaUJBQWlCLEdBQUdBO1FBQ3pCLElBQUksQ0FBQ0Msb0JBQW9CLEdBQUdBOzs7O1lBRzlCQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNMLE1BQU07WUFDcEI7OztZQUVBTSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNMLGVBQWU7WUFDN0I7OztZQUVBTSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNMLGVBQWU7WUFDN0I7OztZQUVBTSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNMLGlCQUFpQjtZQUMvQjs7O1lBRUFNLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0wsb0JBQW9CO1lBQ2xDOzs7WUFFQU0sS0FBQUE7bUJBQUFBLFNBQUFBLFNBQVNDLE9BQU87Z0JBRWQsSUFBSSxPQUFPO2dCQUNULEdBQUc7Z0JBQ0wsT0FBTyxJQUFJLElBQUksQ0FBQ1YsZUFBZSxLQUFLLE1BQU07b0JBQ3hDLElBQUksQ0FBQ0EsZUFBZSxDQUFDUyxRQUFRLENBQUNDO2dCQUNoQyxPQUFPLElBQUksSUFBSSxDQUFDVCxlQUFlLEtBQUssTUFBTTtvQkFDeEMsSUFBSSxDQUFDQSxlQUFlLENBQUNRLFFBQVEsQ0FBQ0M7Z0JBQ2hDLE9BQU8sSUFBSSxJQUFJLENBQUNSLGlCQUFpQixLQUFLLE1BQU07b0JBQzFDLElBQUksQ0FBQ0EsaUJBQWlCLENBQUNPLFFBQVEsQ0FBQ0M7Z0JBQ2xDLE9BQU8sSUFBSSxJQUFJLENBQUNQLG9CQUFvQixLQUFLLE1BQU07b0JBQzdDLElBQUksQ0FBQ0Esb0JBQW9CLENBQUNNLFFBQVEsQ0FBQ0M7Z0JBQ3JDO1lBQ0Y7Ozs7WUFJT0MsS0FBQUE7bUJBQVAsU0FBT0EsYUFBYUMsUUFBUSxFQUFFRixPQUFPO2dCQUNuQyxJQUFRRyxrQkFBOEVDLFlBQUcsQ0FBakZELGlCQUFpQkUsa0JBQTZERCxZQUFHLENBQWhFQyxpQkFBaUJDLG9CQUE0Q0YsWUFBRyxDQUEvQ0UsbUJBQW1CQyx1QkFBeUJILFlBQUcsQ0FBNUJHLHNCQUN2REMsT0FBT04sVUFDUGIsU0FBU1csUUFBUVMsWUFBWSxDQUFDRCxPQUM5QmxCLGtCQUFrQmEsZ0JBQWdCRixZQUFZLENBQUNDLFVBQVVGLFVBQ3pEVCxrQkFBa0JjLGdCQUFnQkosWUFBWSxDQUFDQyxVQUFVRixVQUN6RFIsb0JBQW9CYyxrQkFBa0JMLFlBQVksQ0FBQ0MsVUFBVUYsVUFDN0RQLHVCQUF1QmMscUJBQXFCTixZQUFZLENBQUNDLFVBQVVGLFVBQ25FVSxPQUFPLElBQUl0QixLQUFLQyxRQUFRQyxpQkFBaUJDLGlCQUFpQkMsbUJBQW1CQztnQkFFbkYsT0FBT2lCO1lBQ1Q7Ozs7S0FiQSx3QkFBT0MsUUFBTyJ9