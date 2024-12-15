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
    function Step(string, forEachLoop, arrayAssignment, objectAssigment, conditionalBlocks, variableAssignment, variablesDeclaration) {
        _class_call_check(this, Step);
        this.string = string;
        this.forEachLoop = forEachLoop;
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
            key: "getForEachLoop",
            value: function getForEachLoop() {
                return this.forEachLoop;
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
            key: "resolve",
            value: function resolve(context) {
                if (this.forEachLoop !== null) {
                    this.forEachLoop.resolve(context);
                }
                if (this.arrayAssignment !== null) {
                    this.arrayAssignment.resolve(context);
                }
                if (this.objectAssigment !== null) {
                    this.objectAssigment.resolve(context);
                }
                if (this.conditionalBlocks !== null) {
                    this.conditionalBlocks.resolve(context);
                }
                if (this.variableAssignment !== null) {
                    this.variableAssignment.resolve(context);
                }
                if (this.variablesDeclaration !== null) {
                    this.variablesDeclaration.resolve(context);
                }
            }
        }
    ], [
        {
            key: "fromStepNode",
            value: function fromStepNode(stepNode, context) {
                var ForEachLoop = _dom.default.ForEachLoop, ArrayAssignment = _dom.default.ArrayAssignment, ObjectAssigment = _dom.default.ObjectAssigment, ConditionalBlocks = _dom.default.ConditionalBlocks, VariableAssignment = _dom.default.VariableAssignment, VariablesDeclaration = _dom.default.VariablesDeclaration, node = stepNode, string = context.nodeAsString(node), forEachLoop = ForEachLoop.fromStepNode(stepNode, context), arrayAssignment = ArrayAssignment.fromStepNode(stepNode, context), objectAssigment = ObjectAssigment.fromStepNode(stepNode, context), conditionalBlocks = ConditionalBlocks.fromStepNode(stepNode, context), variableAssignment = VariableAssignment.fromStepNode(stepNode, context), variablesDeclaration = VariablesDeclaration.fromStepNode(stepNode, context), step = new Step(string, forEachLoop, arrayAssignment, objectAssigment, conditionalBlocks, variableAssignment, variablesDeclaration);
                return step;
            }
        }
    ]);
    return Step;
}(), _define_property(_Step, "name", "Step"), _Step));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb20vc3RlcC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IGRvbSBmcm9tIFwiLi4vZG9tXCI7XG5cbmltcG9ydCB7IGRvbUFzc2lnbmVkIH0gZnJvbSBcIi4uL2RvbVwiO1xuXG5leHBvcnQgZGVmYXVsdCBkb21Bc3NpZ25lZChjbGFzcyBTdGVwIHtcbiAgY29uc3RydWN0b3Ioc3RyaW5nLCBmb3JFYWNoTG9vcCwgYXJyYXlBc3NpZ25tZW50LCBvYmplY3RBc3NpZ21lbnQsIGNvbmRpdGlvbmFsQmxvY2tzLCB2YXJpYWJsZUFzc2lnbm1lbnQsIHZhcmlhYmxlc0RlY2xhcmF0aW9uKSB7XG4gICAgdGhpcy5zdHJpbmcgPSBzdHJpbmc7XG4gICAgdGhpcy5mb3JFYWNoTG9vcCA9IGZvckVhY2hMb29wO1xuICAgIHRoaXMuYXJyYXlBc3NpZ25tZW50ID0gYXJyYXlBc3NpZ25tZW50O1xuICAgIHRoaXMub2JqZWN0QXNzaWdtZW50ID0gb2JqZWN0QXNzaWdtZW50O1xuICAgIHRoaXMuY29uZGl0aW9uYWxCbG9ja3MgPSBjb25kaXRpb25hbEJsb2NrcztcbiAgICB0aGlzLnZhcmlhYmxlQXNzaWdubWVudCA9IHZhcmlhYmxlQXNzaWdubWVudDtcbiAgICB0aGlzLnZhcmlhYmxlc0RlY2xhcmF0aW9uID0gdmFyaWFibGVzRGVjbGFyYXRpb247XG4gIH1cblxuICBnZXRTdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RyaW5nO1xuICB9XG5cbiAgZ2V0Rm9yRWFjaExvb3AoKSB7XG4gICAgcmV0dXJuIHRoaXMuZm9yRWFjaExvb3A7XG4gIH1cblxuICBnZXRBcnJheUFzc2lnbm1lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuYXJyYXlBc3NpZ25tZW50O1xuICB9XG5cbiAgZ2V0T2JqZWN0QXNzaWdtZW50KCkge1xuICAgIHJldHVybiB0aGlzLm9iamVjdEFzc2lnbWVudDtcbiAgfVxuXG4gIGdldENvbmRpdGlvbmFsQmxvY2tzKCkge1xuICAgIHJldHVybiB0aGlzLmNvbmRpdGlvbmFsQmxvY2tzO1xuICB9XG5cbiAgZ2V0VmFyaWFibGVBc3NpZ25tZW50KCkge1xuICAgIHJldHVybiB0aGlzLnZhcmlhYmxlQXNzaWdubWVudDtcbiAgfVxuXG4gIGdldFZhcmlhYmxlc0RlY2xhcmF0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLnZhcmlhYmxlc0RlY2xhcmF0aW9uO1xuICB9XG5cbiAgcmVzb2x2ZShjb250ZXh0KSB7XG4gICAgaWYgKHRoaXMuZm9yRWFjaExvb3AgIT09IG51bGwpIHtcbiAgICAgIHRoaXMuZm9yRWFjaExvb3AucmVzb2x2ZShjb250ZXh0KTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5hcnJheUFzc2lnbm1lbnQgIT09IG51bGwpIHtcbiAgICAgIHRoaXMuYXJyYXlBc3NpZ25tZW50LnJlc29sdmUoY29udGV4dCk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMub2JqZWN0QXNzaWdtZW50ICE9PSBudWxsKSB7XG4gICAgICB0aGlzLm9iamVjdEFzc2lnbWVudC5yZXNvbHZlKGNvbnRleHQpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmNvbmRpdGlvbmFsQmxvY2tzICE9PSBudWxsKSB7XG4gICAgICB0aGlzLmNvbmRpdGlvbmFsQmxvY2tzLnJlc29sdmUoY29udGV4dCk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMudmFyaWFibGVBc3NpZ25tZW50ICE9PSBudWxsKSB7XG4gICAgICB0aGlzLnZhcmlhYmxlQXNzaWdubWVudC5yZXNvbHZlKGNvbnRleHQpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnZhcmlhYmxlc0RlY2xhcmF0aW9uICE9PSBudWxsKSB7XG4gICAgICB0aGlzLnZhcmlhYmxlc0RlY2xhcmF0aW9uLnJlc29sdmUoY29udGV4dCk7XG4gICAgfVxuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIlN0ZXBcIjtcblxuICBzdGF0aWMgZnJvbVN0ZXBOb2RlKHN0ZXBOb2RlLCBjb250ZXh0KSB7XG4gICAgY29uc3QgeyBGb3JFYWNoTG9vcCwgQXJyYXlBc3NpZ25tZW50LCBPYmplY3RBc3NpZ21lbnQsIENvbmRpdGlvbmFsQmxvY2tzLCBWYXJpYWJsZUFzc2lnbm1lbnQsIFZhcmlhYmxlc0RlY2xhcmF0aW9uIH0gPSBkb20sXG4gICAgICAgICAgbm9kZSA9IHN0ZXBOb2RlLCAgLy8vXG4gICAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgICAgZm9yRWFjaExvb3AgPSBGb3JFYWNoTG9vcC5mcm9tU3RlcE5vZGUoc3RlcE5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgIGFycmF5QXNzaWdubWVudCA9IEFycmF5QXNzaWdubWVudC5mcm9tU3RlcE5vZGUoc3RlcE5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgIG9iamVjdEFzc2lnbWVudCA9IE9iamVjdEFzc2lnbWVudC5mcm9tU3RlcE5vZGUoc3RlcE5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgIGNvbmRpdGlvbmFsQmxvY2tzID0gQ29uZGl0aW9uYWxCbG9ja3MuZnJvbVN0ZXBOb2RlKHN0ZXBOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgICB2YXJpYWJsZUFzc2lnbm1lbnQgPSBWYXJpYWJsZUFzc2lnbm1lbnQuZnJvbVN0ZXBOb2RlKHN0ZXBOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgICB2YXJpYWJsZXNEZWNsYXJhdGlvbiA9IFZhcmlhYmxlc0RlY2xhcmF0aW9uLmZyb21TdGVwTm9kZShzdGVwTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgc3RlcCA9IG5ldyBTdGVwKHN0cmluZywgZm9yRWFjaExvb3AsIGFycmF5QXNzaWdubWVudCwgb2JqZWN0QXNzaWdtZW50LCBjb25kaXRpb25hbEJsb2NrcywgdmFyaWFibGVBc3NpZ25tZW50LCB2YXJpYWJsZXNEZWNsYXJhdGlvbik7XG5cbiAgICByZXR1cm4gc3RlcDtcbiAgfVxufSk7XG4iXSwibmFtZXMiOlsiZG9tQXNzaWduZWQiLCJTdGVwIiwic3RyaW5nIiwiZm9yRWFjaExvb3AiLCJhcnJheUFzc2lnbm1lbnQiLCJvYmplY3RBc3NpZ21lbnQiLCJjb25kaXRpb25hbEJsb2NrcyIsInZhcmlhYmxlQXNzaWdubWVudCIsInZhcmlhYmxlc0RlY2xhcmF0aW9uIiwiZ2V0U3RyaW5nIiwiZ2V0Rm9yRWFjaExvb3AiLCJnZXRBcnJheUFzc2lnbm1lbnQiLCJnZXRPYmplY3RBc3NpZ21lbnQiLCJnZXRDb25kaXRpb25hbEJsb2NrcyIsImdldFZhcmlhYmxlQXNzaWdubWVudCIsImdldFZhcmlhYmxlc0RlY2xhcmF0aW9uIiwicmVzb2x2ZSIsImNvbnRleHQiLCJmcm9tU3RlcE5vZGUiLCJzdGVwTm9kZSIsIkZvckVhY2hMb29wIiwiZG9tIiwiQXJyYXlBc3NpZ25tZW50IiwiT2JqZWN0QXNzaWdtZW50IiwiQ29uZGl0aW9uYWxCbG9ja3MiLCJWYXJpYWJsZUFzc2lnbm1lbnQiLCJWYXJpYWJsZXNEZWNsYXJhdGlvbiIsIm5vZGUiLCJub2RlQXNTdHJpbmciLCJzdGVwIiwibmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBTUE7OztlQUFBOzs7MkRBSmdCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFJaEIsV0FBZUEsSUFBQUEsZ0JBQVcseUJBQUM7YUFBTUMsS0FDbkJDLE1BQU0sRUFBRUMsV0FBVyxFQUFFQyxlQUFlLEVBQUVDLGVBQWUsRUFBRUMsaUJBQWlCLEVBQUVDLGtCQUFrQixFQUFFQyxvQkFBb0I7Z0NBRC9GUDtRQUU3QixJQUFJLENBQUNDLE1BQU0sR0FBR0E7UUFDZCxJQUFJLENBQUNDLFdBQVcsR0FBR0E7UUFDbkIsSUFBSSxDQUFDQyxlQUFlLEdBQUdBO1FBQ3ZCLElBQUksQ0FBQ0MsZUFBZSxHQUFHQTtRQUN2QixJQUFJLENBQUNDLGlCQUFpQixHQUFHQTtRQUN6QixJQUFJLENBQUNDLGtCQUFrQixHQUFHQTtRQUMxQixJQUFJ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