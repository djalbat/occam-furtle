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
            key: "evaluate",
            value: function evaluate(context) {
                if (this.forEachLoop !== null) {
                    this.forEachLoop.evaluate(context);
                }
                if (this.arrayAssignment !== null) {
                    this.arrayAssignment.evaluate(context);
                }
                if (this.objectAssigment !== null) {
                    this.objectAssigment.evaluate(context);
                }
                if (this.conditionalBlocks !== null) {
                    this.conditionalBlocks.evaluate(context);
                }
                if (this.variableAssignment !== null) {
                    this.variableAssignment.evaluate(context);
                }
                if (this.variablesDeclaration !== null) {
                    this.variablesDeclaration.evaluate(context);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb20vc3RlcC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IGRvbSBmcm9tIFwiLi4vZG9tXCI7XG5cbmltcG9ydCB7IGRvbUFzc2lnbmVkIH0gZnJvbSBcIi4uL2RvbVwiO1xuXG5leHBvcnQgZGVmYXVsdCBkb21Bc3NpZ25lZChjbGFzcyBTdGVwIHtcbiAgY29uc3RydWN0b3Ioc3RyaW5nLCBmb3JFYWNoTG9vcCwgYXJyYXlBc3NpZ25tZW50LCBvYmplY3RBc3NpZ21lbnQsIGNvbmRpdGlvbmFsQmxvY2tzLCB2YXJpYWJsZUFzc2lnbm1lbnQsIHZhcmlhYmxlc0RlY2xhcmF0aW9uKSB7XG4gICAgdGhpcy5zdHJpbmcgPSBzdHJpbmc7XG4gICAgdGhpcy5mb3JFYWNoTG9vcCA9IGZvckVhY2hMb29wO1xuICAgIHRoaXMuYXJyYXlBc3NpZ25tZW50ID0gYXJyYXlBc3NpZ25tZW50O1xuICAgIHRoaXMub2JqZWN0QXNzaWdtZW50ID0gb2JqZWN0QXNzaWdtZW50O1xuICAgIHRoaXMuY29uZGl0aW9uYWxCbG9ja3MgPSBjb25kaXRpb25hbEJsb2NrcztcbiAgICB0aGlzLnZhcmlhYmxlQXNzaWdubWVudCA9IHZhcmlhYmxlQXNzaWdubWVudDtcbiAgICB0aGlzLnZhcmlhYmxlc0RlY2xhcmF0aW9uID0gdmFyaWFibGVzRGVjbGFyYXRpb247XG4gIH1cblxuICBnZXRTdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RyaW5nO1xuICB9XG5cbiAgZ2V0Rm9yRWFjaExvb3AoKSB7XG4gICAgcmV0dXJuIHRoaXMuZm9yRWFjaExvb3A7XG4gIH1cblxuICBnZXRBcnJheUFzc2lnbm1lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuYXJyYXlBc3NpZ25tZW50O1xuICB9XG5cbiAgZ2V0T2JqZWN0QXNzaWdtZW50KCkge1xuICAgIHJldHVybiB0aGlzLm9iamVjdEFzc2lnbWVudDtcbiAgfVxuXG4gIGdldENvbmRpdGlvbmFsQmxvY2tzKCkge1xuICAgIHJldHVybiB0aGlzLmNvbmRpdGlvbmFsQmxvY2tzO1xuICB9XG5cbiAgZ2V0VmFyaWFibGVBc3NpZ25tZW50KCkge1xuICAgIHJldHVybiB0aGlzLnZhcmlhYmxlQXNzaWdubWVudDtcbiAgfVxuXG4gIGdldFZhcmlhYmxlc0RlY2xhcmF0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLnZhcmlhYmxlc0RlY2xhcmF0aW9uO1xuICB9XG5cbiAgZXZhbHVhdGUoY29udGV4dCkge1xuICAgIGlmICh0aGlzLmZvckVhY2hMb29wICE9PSBudWxsKSB7XG4gICAgICB0aGlzLmZvckVhY2hMb29wLmV2YWx1YXRlKGNvbnRleHQpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmFycmF5QXNzaWdubWVudCAhPT0gbnVsbCkge1xuICAgICAgdGhpcy5hcnJheUFzc2lnbm1lbnQuZXZhbHVhdGUoY29udGV4dCk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMub2JqZWN0QXNzaWdtZW50ICE9PSBudWxsKSB7XG4gICAgICB0aGlzLm9iamVjdEFzc2lnbWVudC5ldmFsdWF0ZShjb250ZXh0KTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5jb25kaXRpb25hbEJsb2NrcyAhPT0gbnVsbCkge1xuICAgICAgdGhpcy5jb25kaXRpb25hbEJsb2Nrcy5ldmFsdWF0ZShjb250ZXh0KTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy52YXJpYWJsZUFzc2lnbm1lbnQgIT09IG51bGwpIHtcbiAgICAgIHRoaXMudmFyaWFibGVBc3NpZ25tZW50LmV2YWx1YXRlKGNvbnRleHQpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnZhcmlhYmxlc0RlY2xhcmF0aW9uICE9PSBudWxsKSB7XG4gICAgICB0aGlzLnZhcmlhYmxlc0RlY2xhcmF0aW9uLmV2YWx1YXRlKGNvbnRleHQpO1xuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJTdGVwXCI7XG5cbiAgc3RhdGljIGZyb21TdGVwTm9kZShzdGVwTm9kZSwgY29udGV4dCkge1xuICAgIGNvbnN0IHsgRm9yRWFjaExvb3AsIEFycmF5QXNzaWdubWVudCwgT2JqZWN0QXNzaWdtZW50LCBDb25kaXRpb25hbEJsb2NrcywgVmFyaWFibGVBc3NpZ25tZW50LCBWYXJpYWJsZXNEZWNsYXJhdGlvbiB9ID0gZG9tLFxuICAgICAgICAgIG5vZGUgPSBzdGVwTm9kZSwgIC8vL1xuICAgICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICAgIGZvckVhY2hMb29wID0gRm9yRWFjaExvb3AuZnJvbVN0ZXBOb2RlKHN0ZXBOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgICBhcnJheUFzc2lnbm1lbnQgPSBBcnJheUFzc2lnbm1lbnQuZnJvbVN0ZXBOb2RlKHN0ZXBOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgICBvYmplY3RBc3NpZ21lbnQgPSBPYmplY3RBc3NpZ21lbnQuZnJvbVN0ZXBOb2RlKHN0ZXBOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgICBjb25kaXRpb25hbEJsb2NrcyA9IENvbmRpdGlvbmFsQmxvY2tzLmZyb21TdGVwTm9kZShzdGVwTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgdmFyaWFibGVBc3NpZ25tZW50ID0gVmFyaWFibGVBc3NpZ25tZW50LmZyb21TdGVwTm9kZShzdGVwTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgdmFyaWFibGVzRGVjbGFyYXRpb24gPSBWYXJpYWJsZXNEZWNsYXJhdGlvbi5mcm9tU3RlcE5vZGUoc3RlcE5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgIHN0ZXAgPSBuZXcgU3RlcChzdHJpbmcsIGZvckVhY2hMb29wLCBhcnJheUFzc2lnbm1lbnQsIG9iamVjdEFzc2lnbWVudCwgY29uZGl0aW9uYWxCbG9ja3MsIHZhcmlhYmxlQXNzaWdubWVudCwgdmFyaWFibGVzRGVjbGFyYXRpb24pO1xuXG4gICAgcmV0dXJuIHN0ZXA7XG4gIH1cbn0pO1xuIl0sIm5hbWVzIjpbImRvbUFzc2lnbmVkIiwiU3RlcCIsInN0cmluZyIsImZvckVhY2hMb29wIiwiYXJyYXlBc3NpZ25tZW50Iiwib2JqZWN0QXNzaWdtZW50IiwiY29uZGl0aW9uYWxCbG9ja3MiLCJ2YXJpYWJsZUFzc2lnbm1lbnQiLCJ2YXJpYWJsZXNEZWNsYXJhdGlvbiIsImdldFN0cmluZyIsImdldEZvckVhY2hMb29wIiwiZ2V0QXJyYXlBc3NpZ25tZW50IiwiZ2V0T2JqZWN0QXNzaWdtZW50IiwiZ2V0Q29uZGl0aW9uYWxCbG9ja3MiLCJnZXRWYXJpYWJsZUFzc2lnbm1lbnQiLCJnZXRWYXJpYWJsZXNEZWNsYXJhdGlvbiIsImV2YWx1YXRlIiwiY29udGV4dCIsImZyb21TdGVwTm9kZSIsInN0ZXBOb2RlIiwiRm9yRWFjaExvb3AiLCJkb20iLCJBcnJheUFzc2lnbm1lbnQiLCJPYmplY3RBc3NpZ21lbnQiLCJDb25kaXRpb25hbEJsb2NrcyIsIlZhcmlhYmxlQXNzaWdubWVudCIsIlZhcmlhYmxlc0RlY2xhcmF0aW9uIiwibm9kZSIsIm5vZGVBc1N0cmluZyIsInN0ZXAiLCJuYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFNQTs7O2VBQUE7OzsyREFKZ0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUloQixXQUFlQSxJQUFBQSxnQkFBVyx5QkFBQzthQUFNQyxLQUNuQkMsTUFBTSxFQUFFQyxXQUFXLEVBQUVDLGVBQWUsRUFBRUMsZUFBZSxFQUFFQyxpQkFBaUIsRUFBRUMsa0JBQWtCLEVBQUVDLG9CQUFvQjtnQ0FEL0ZQO1FBRTdCLElBQUksQ0FBQ0MsTUFBTSxHQUFHQTtRQUNkLElBQUksQ0FBQ0MsV0FBVyxHQUFHQTtRQUNuQixJQUFJLENBQUNDLGVBQWUsR0FBR0E7UUFDdkIsSUFBSSxDQUFDQyxlQUFlLEdBQUdBO1FBQ3ZCLElBQUksQ0FBQ0MsaUJBQWlCLEdBQUdBO1FBQ3pCLElBQUksQ0FBQ0Msa0JBQWtCLEdBQUdBO1FB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