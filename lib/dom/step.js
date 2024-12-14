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
    function Step(string, forEachLoop, arrayAssignment, conditionalBlock, objectAssigment, variableAssignment, variablesDeclaration) {
        _class_call_check(this, Step);
        this.string = string;
        this.forEachLoop = forEachLoop;
        this.arrayAssignment = arrayAssignment;
        this.conditionalBlock = conditionalBlock;
        this.objectAssigment = objectAssigment;
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
            key: "getConditionalBlock",
            value: function getConditionalBlock() {
                return this.conditionalBlock;
            }
        },
        {
            key: "getObjectAssigment",
            value: function getObjectAssigment() {
                return this.objectAssigment;
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
                if (this.conditionalBlock !== null) {
                    this.conditionalBlock.resolve(context);
                }
                if (this.objectAssigment !== null) {
                    this.objectAssigment.resolve(context);
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
                var ForEachLoop = _dom.default.ForEachLoop, ArrayAssignment = _dom.default.ArrayAssignment, ConditionalBlock = _dom.default.ConditionalBlock, ObjectAssigment = _dom.default.ObjectAssigment, VariableAssignment = _dom.default.VariableAssignment, VariablesDeclaration = _dom.default.VariablesDeclaration, node = stepNode, string = context.nodeAsString(node), forEachLoop = ForEachLoop.fromStepNode(stepNode, context), arrayAssignment = ArrayAssignment.fromStepNode(stepNode, context), conditionalBlock = ConditionalBlock.fromStepNode(stepNode, context), objectAssigment = ObjectAssigment.fromStepNode(stepNode, context), variableAssignment = VariableAssignment.fromStepNode(stepNode, context), variablesDeclaration = VariablesDeclaration.fromStepNode(stepNode, context), step = new Step(string, forEachLoop, arrayAssignment, conditionalBlock, objectAssigment, variableAssignment, variablesDeclaration);
                return step;
            }
        }
    ]);
    return Step;
}(), _define_property(_Step, "name", "Step"), _Step));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb20vc3RlcC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IGRvbSBmcm9tIFwiLi4vZG9tXCI7XG5cbmltcG9ydCB7IGRvbUFzc2lnbmVkIH0gZnJvbSBcIi4uL2RvbVwiO1xuXG5leHBvcnQgZGVmYXVsdCBkb21Bc3NpZ25lZChjbGFzcyBTdGVwIHtcbiAgY29uc3RydWN0b3Ioc3RyaW5nLCBmb3JFYWNoTG9vcCwgYXJyYXlBc3NpZ25tZW50LCBjb25kaXRpb25hbEJsb2NrLCBvYmplY3RBc3NpZ21lbnQsIHZhcmlhYmxlQXNzaWdubWVudCwgdmFyaWFibGVzRGVjbGFyYXRpb24pIHtcbiAgICB0aGlzLnN0cmluZyA9IHN0cmluZztcbiAgICB0aGlzLmZvckVhY2hMb29wID0gZm9yRWFjaExvb3A7XG4gICAgdGhpcy5hcnJheUFzc2lnbm1lbnQgPSBhcnJheUFzc2lnbm1lbnQ7XG4gICAgdGhpcy5jb25kaXRpb25hbEJsb2NrID0gY29uZGl0aW9uYWxCbG9jaztcbiAgICB0aGlzLm9iamVjdEFzc2lnbWVudCA9IG9iamVjdEFzc2lnbWVudDtcbiAgICB0aGlzLnZhcmlhYmxlQXNzaWdubWVudCA9IHZhcmlhYmxlQXNzaWdubWVudDtcbiAgICB0aGlzLnZhcmlhYmxlc0RlY2xhcmF0aW9uID0gdmFyaWFibGVzRGVjbGFyYXRpb247XG4gIH1cblxuICBnZXRTdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RyaW5nO1xuICB9XG5cbiAgZ2V0Rm9yRWFjaExvb3AoKSB7XG4gICAgcmV0dXJuIHRoaXMuZm9yRWFjaExvb3A7XG4gIH1cblxuICBnZXRBcnJheUFzc2lnbm1lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuYXJyYXlBc3NpZ25tZW50O1xuICB9XG5cbiAgZ2V0Q29uZGl0aW9uYWxCbG9jaygpIHtcbiAgICByZXR1cm4gdGhpcy5jb25kaXRpb25hbEJsb2NrO1xuICB9XG5cbiAgZ2V0T2JqZWN0QXNzaWdtZW50KCkge1xuICAgIHJldHVybiB0aGlzLm9iamVjdEFzc2lnbWVudDtcbiAgfVxuXG4gIGdldFZhcmlhYmxlQXNzaWdubWVudCgpIHtcbiAgICByZXR1cm4gdGhpcy52YXJpYWJsZUFzc2lnbm1lbnQ7XG4gIH1cblxuICBnZXRWYXJpYWJsZXNEZWNsYXJhdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy52YXJpYWJsZXNEZWNsYXJhdGlvbjtcbiAgfVxuXG4gIHJlc29sdmUoY29udGV4dCkge1xuICAgIGlmICh0aGlzLmZvckVhY2hMb29wICE9PSBudWxsKSB7XG4gICAgICB0aGlzLmZvckVhY2hMb29wLnJlc29sdmUoY29udGV4dCk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuYXJyYXlBc3NpZ25tZW50ICE9PSBudWxsKSB7XG4gICAgICB0aGlzLmFycmF5QXNzaWdubWVudC5yZXNvbHZlKGNvbnRleHQpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmNvbmRpdGlvbmFsQmxvY2sgIT09IG51bGwpIHtcbiAgICAgIHRoaXMuY29uZGl0aW9uYWxCbG9jay5yZXNvbHZlKGNvbnRleHQpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLm9iamVjdEFzc2lnbWVudCAhPT0gbnVsbCkge1xuICAgICAgdGhpcy5vYmplY3RBc3NpZ21lbnQucmVzb2x2ZShjb250ZXh0KTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy52YXJpYWJsZUFzc2lnbm1lbnQgIT09IG51bGwpIHtcbiAgICAgIHRoaXMudmFyaWFibGVBc3NpZ25tZW50LnJlc29sdmUoY29udGV4dCk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMudmFyaWFibGVzRGVjbGFyYXRpb24gIT09IG51bGwpIHtcbiAgICAgIHRoaXMudmFyaWFibGVzRGVjbGFyYXRpb24ucmVzb2x2ZShjb250ZXh0KTtcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiU3RlcFwiO1xuXG4gIHN0YXRpYyBmcm9tU3RlcE5vZGUoc3RlcE5vZGUsIGNvbnRleHQpIHtcbiAgICBjb25zdCB7IEZvckVhY2hMb29wLCBBcnJheUFzc2lnbm1lbnQsIENvbmRpdGlvbmFsQmxvY2ssIE9iamVjdEFzc2lnbWVudCwgVmFyaWFibGVBc3NpZ25tZW50LCBWYXJpYWJsZXNEZWNsYXJhdGlvbiB9ID0gZG9tLFxuICAgICAgICAgIG5vZGUgPSBzdGVwTm9kZSwgIC8vL1xuICAgICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICAgIGZvckVhY2hMb29wID0gRm9yRWFjaExvb3AuZnJvbVN0ZXBOb2RlKHN0ZXBOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgICBhcnJheUFzc2lnbm1lbnQgPSBBcnJheUFzc2lnbm1lbnQuZnJvbVN0ZXBOb2RlKHN0ZXBOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgICBjb25kaXRpb25hbEJsb2NrID0gQ29uZGl0aW9uYWxCbG9jay5mcm9tU3RlcE5vZGUoc3RlcE5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgIG9iamVjdEFzc2lnbWVudCA9IE9iamVjdEFzc2lnbWVudC5mcm9tU3RlcE5vZGUoc3RlcE5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgIHZhcmlhYmxlQXNzaWdubWVudCA9IFZhcmlhYmxlQXNzaWdubWVudC5mcm9tU3RlcE5vZGUoc3RlcE5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgIHZhcmlhYmxlc0RlY2xhcmF0aW9uID0gVmFyaWFibGVzRGVjbGFyYXRpb24uZnJvbVN0ZXBOb2RlKHN0ZXBOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgICBzdGVwID0gbmV3IFN0ZXAoc3RyaW5nLCBmb3JFYWNoTG9vcCwgYXJyYXlBc3NpZ25tZW50LCBjb25kaXRpb25hbEJsb2NrLCBvYmplY3RBc3NpZ21lbnQsIHZhcmlhYmxlQXNzaWdubWVudCwgdmFyaWFibGVzRGVjbGFyYXRpb24pO1xuXG4gICAgcmV0dXJuIHN0ZXA7XG4gIH1cbn0pO1xuIl0sIm5hbWVzIjpbImRvbUFzc2lnbmVkIiwiU3RlcCIsInN0cmluZyIsImZvckVhY2hMb29wIiwiYXJyYXlBc3NpZ25tZW50IiwiY29uZGl0aW9uYWxCbG9jayIsIm9iamVjdEFzc2lnbWVudCIsInZhcmlhYmxlQXNzaWdubWVudCIsInZhcmlhYmxlc0RlY2xhcmF0aW9uIiwiZ2V0U3RyaW5nIiwiZ2V0Rm9yRWFjaExvb3AiLCJnZXRBcnJheUFzc2lnbm1lbnQiLCJnZXRDb25kaXRpb25hbEJsb2NrIiwiZ2V0T2JqZWN0QXNzaWdtZW50IiwiZ2V0VmFyaWFibGVBc3NpZ25tZW50IiwiZ2V0VmFyaWFibGVzRGVjbGFyYXRpb24iLCJyZXNvbHZlIiwiY29udGV4dCIsImZyb21TdGVwTm9kZSIsInN0ZXBOb2RlIiwiRm9yRWFjaExvb3AiLCJkb20iLCJBcnJheUFzc2lnbm1lbnQiLCJDb25kaXRpb25hbEJsb2NrIiwiT2JqZWN0QXNzaWdtZW50IiwiVmFyaWFibGVBc3NpZ25tZW50IiwiVmFyaWFibGVzRGVjbGFyYXRpb24iLCJub2RlIiwibm9kZUFzU3RyaW5nIiwic3RlcCIsIm5hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQU1BOzs7ZUFBQTs7OzJEQUpnQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBSWhCLFdBQWVBLElBQUFBLGdCQUFXLHlCQUFDO2FBQU1DLEtBQ25CQyxNQUFNLEVBQUVDLFdBQVcsRUFBRUMsZUFBZSxFQUFFQyxnQkFBZ0IsRUFBRUMsZUFBZSxFQUFFQyxrQkFBa0IsRUFBRUMsb0JBQW9CO2dDQUQ5RlA7UUFFN0IsSUFBSSxDQUFDQyxNQUFNLEdBQUdBO1FBQ2QsSUFBSSxDQUFDQyxXQUFXLEdBQUdBO1FBQ25CLElBQUksQ0FBQ0MsZUFBZSxHQUFHQTtRQUN2QixJQUFJLENBQUNDLGdCQUFnQixHQUFHQTtRQUN4QixJQUFJLENBQUNDLGVBQWUsR0FBR0E7UUFDdkIsSUFBSSxDQUFDQyxrQkFBa0IsR0FBR0E7UUFDMUIsSUFBSSxDQUFDQyxvQkFBb0Is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