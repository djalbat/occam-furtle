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
    function Step(forEachLoop, arrayAssignment, conditionalBlock, objectAssigment, variableAssignment, variablesDeclaration) {
        _class_call_check(this, Step);
        this.forEachLoop = forEachLoop;
        this.arrayAssignment = arrayAssignment;
        this.conditionalBlock = conditionalBlock;
        this.objectAssigment = objectAssigment;
        this.variableAssignment = variableAssignment;
        this.variablesDeclaration = variablesDeclaration;
    }
    _create_class(Step, [
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
            key: "getString",
            value: function getString() {
                debugger;
            }
        }
    ], [
        {
            key: "fromStepNode",
            value: function fromStepNode(stepNode, context) {
                var ForEachLoop = _dom.default.ForEachLoop, ArrayAssignment = _dom.default.ArrayAssignment, ConditionalBlock = _dom.default.ConditionalBlock, ObjectAssigment = _dom.default.ObjectAssigment, VariablesAssignment = _dom.default.VariablesAssignment, VariablesDeclaration = _dom.default.VariablesDeclaration, forEachLoop = ForEachLoop.fromStepNode(stepNode, context), arrayAssignment = ArrayAssignment.fromStepNode(stepNode, context), conditionalBlock = ConditionalBlock.fromStepNode(stepNode, context), objectAssigment = ObjectAssigment.fromStepNode(stepNode, context), variableAssignment = VariablesAssignment.fromStepNode(stepNode, context), variablesDeclaration = VariablesDeclaration.fromStepNode(stepNode, context), step = new Step(forEachLoop, arrayAssignment, conditionalBlock, objectAssigment, variableAssignment, variablesDeclaration);
                return step;
            }
        }
    ]);
    return Step;
}(), _define_property(_Step, "name", "Step"), _Step));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb20vc3RlcC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IGRvbSBmcm9tIFwiLi4vZG9tXCI7XG5cbmltcG9ydCB7IGRvbUFzc2lnbmVkIH0gZnJvbSBcIi4uL2RvbVwiO1xuXG5leHBvcnQgZGVmYXVsdCBkb21Bc3NpZ25lZChjbGFzcyBTdGVwIHtcbiAgY29uc3RydWN0b3IoZm9yRWFjaExvb3AsIGFycmF5QXNzaWdubWVudCwgY29uZGl0aW9uYWxCbG9jaywgb2JqZWN0QXNzaWdtZW50LCB2YXJpYWJsZUFzc2lnbm1lbnQsIHZhcmlhYmxlc0RlY2xhcmF0aW9uKSB7XG4gICAgdGhpcy5mb3JFYWNoTG9vcCA9IGZvckVhY2hMb29wO1xuICAgIHRoaXMuYXJyYXlBc3NpZ25tZW50ID0gYXJyYXlBc3NpZ25tZW50O1xuICAgIHRoaXMuY29uZGl0aW9uYWxCbG9jayA9IGNvbmRpdGlvbmFsQmxvY2s7XG4gICAgdGhpcy5vYmplY3RBc3NpZ21lbnQgPSBvYmplY3RBc3NpZ21lbnQ7XG4gICAgdGhpcy52YXJpYWJsZUFzc2lnbm1lbnQgPSB2YXJpYWJsZUFzc2lnbm1lbnQ7XG4gICAgdGhpcy52YXJpYWJsZXNEZWNsYXJhdGlvbiA9IHZhcmlhYmxlc0RlY2xhcmF0aW9uO1xuICB9XG5cbiAgZ2V0Rm9yRWFjaExvb3AoKSB7XG4gICAgcmV0dXJuIHRoaXMuZm9yRWFjaExvb3A7XG4gIH1cblxuICBnZXRBcnJheUFzc2lnbm1lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuYXJyYXlBc3NpZ25tZW50O1xuICB9XG5cbiAgZ2V0Q29uZGl0aW9uYWxCbG9jaygpIHtcbiAgICByZXR1cm4gdGhpcy5jb25kaXRpb25hbEJsb2NrO1xuICB9XG5cbiAgZ2V0T2JqZWN0QXNzaWdtZW50KCkge1xuICAgIHJldHVybiB0aGlzLm9iamVjdEFzc2lnbWVudDtcbiAgfVxuXG4gIGdldFZhcmlhYmxlQXNzaWdubWVudCgpIHtcbiAgICByZXR1cm4gdGhpcy52YXJpYWJsZUFzc2lnbm1lbnQ7XG4gIH1cblxuICBnZXRWYXJpYWJsZXNEZWNsYXJhdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy52YXJpYWJsZXNEZWNsYXJhdGlvbjtcbiAgfVxuXG4gIGdldFN0cmluZygpIHtcbiAgICBkZWJ1Z2dlclxuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIlN0ZXBcIjtcblxuICBzdGF0aWMgZnJvbVN0ZXBOb2RlKHN0ZXBOb2RlLCBjb250ZXh0KSB7XG4gICAgY29uc3QgeyBGb3JFYWNoTG9vcCwgQXJyYXlBc3NpZ25tZW50LCBDb25kaXRpb25hbEJsb2NrLCBPYmplY3RBc3NpZ21lbnQsIFZhcmlhYmxlc0Fzc2lnbm1lbnQsIFZhcmlhYmxlc0RlY2xhcmF0aW9uIH0gPSBkb20sXG4gICAgICAgICAgZm9yRWFjaExvb3AgPSBGb3JFYWNoTG9vcC5mcm9tU3RlcE5vZGUoc3RlcE5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgIGFycmF5QXNzaWdubWVudCA9IEFycmF5QXNzaWdubWVudC5mcm9tU3RlcE5vZGUoc3RlcE5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgIGNvbmRpdGlvbmFsQmxvY2sgPSBDb25kaXRpb25hbEJsb2NrLmZyb21TdGVwTm9kZShzdGVwTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgb2JqZWN0QXNzaWdtZW50ID0gT2JqZWN0QXNzaWdtZW50LmZyb21TdGVwTm9kZShzdGVwTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgdmFyaWFibGVBc3NpZ25tZW50ID0gVmFyaWFibGVzQXNzaWdubWVudC5mcm9tU3RlcE5vZGUoc3RlcE5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgIHZhcmlhYmxlc0RlY2xhcmF0aW9uID0gVmFyaWFibGVzRGVjbGFyYXRpb24uZnJvbVN0ZXBOb2RlKHN0ZXBOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgICBzdGVwID0gbmV3IFN0ZXAoZm9yRWFjaExvb3AsIGFycmF5QXNzaWdubWVudCwgY29uZGl0aW9uYWxCbG9jaywgb2JqZWN0QXNzaWdtZW50LCB2YXJpYWJsZUFzc2lnbm1lbnQsIHZhcmlhYmxlc0RlY2xhcmF0aW9uKTtcblxuICAgIHJldHVybiBzdGVwO1xuICB9XG59KTtcbiJdLCJuYW1lcyI6WyJkb21Bc3NpZ25lZCIsIlN0ZXAiLCJmb3JFYWNoTG9vcCIsImFycmF5QXNzaWdubWVudCIsImNvbmRpdGlvbmFsQmxvY2siLCJvYmplY3RBc3NpZ21lbnQiLCJ2YXJpYWJsZUFzc2lnbm1lbnQiLCJ2YXJpYWJsZXNEZWNsYXJhdGlvbiIsImdldEZvckVhY2hMb29wIiwiZ2V0QXJyYXlBc3NpZ25tZW50IiwiZ2V0Q29uZGl0aW9uYWxCbG9jayIsImdldE9iamVjdEFzc2lnbWVudCIsImdldFZhcmlhYmxlQXNzaWdubWVudCIsImdldFZhcmlhYmxlc0RlY2xhcmF0aW9uIiwiZ2V0U3RyaW5nIiwiZnJvbVN0ZXBOb2RlIiwic3RlcE5vZGUiLCJjb250ZXh0IiwiRm9yRWFjaExvb3AiLCJkb20iLCJBcnJheUFzc2lnbm1lbnQiLCJDb25kaXRpb25hbEJsb2NrIiwiT2JqZWN0QXNzaWdtZW50IiwiVmFyaWFibGVzQXNzaWdubWVudCIsIlZhcmlhYmxlc0RlY2xhcmF0aW9uIiwic3RlcCIsIm5hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQU1BOzs7ZUFBQTs7OzJEQUpnQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBSWhCLFdBQWVBLElBQUFBLGdCQUFXLHlCQUFDO2FBQU1DLEtBQ25CQyxXQUFXLEVBQUVDLGVBQWUsRUFBRUMsZ0JBQWdCLEVBQUVDLGVBQWUsRUFBRUMsa0JBQWtCLEVBQUVDLG9CQUFvQjtnQ0FEdEZOO1FBRTdCLElBQUksQ0FBQ0MsV0FBVyxHQUFHQTtRQUNuQixJQUFJLENBQUNDLGVBQWUsR0FBR0E7UUFDdkIsSUFBSSxDQUFDQyxnQkFBZ0IsR0FBR0E7UUFDeEIsSUFBSSxDQUFDQyxlQUFlLEdBQUdBO1FBQ3ZCLElBQUksQ0FBQ0Msa0JBQWtCLEdBQUdBO1FBQzFCLElBQUksQ0FBQ0Msb0JBQW9CLEdBQUdBOzs7O1lBRzlCQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNOLFdBQVc7WUFDekI7OztZQUVBTyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNOLGVBQWU7WUFDN0I7OztZQUVBTyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNOLGdCQUFnQjtZQUM5Qjs7O1lBRUFPLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ04sZUFBZTtZQUM3Qjs7O1lBRUFPLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ04sa0JBQWtCO1lBQ2hDOzs7WUFFQU8sS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDTixvQkFBb0I7WUFDbEM7OztZQUVBTyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsUUFBUTtZQUNWOzs7O1lBSU9DLEtBQUFBO21CQUFQLFNBQU9BLGFBQWFDLFFBQVEsRUFBRUMsT0FBTztnQkFDbkMsSUFBUUMsY0FBK0dDLFlBQUcsQ0FBbEhELGFBQWFFLGtCQUFrR0QsWUFBRyxDQUFyR0MsaUJBQWlCQyxtQkFBaUZGLFlBQUcsQ0FBcEZFLGtCQUFrQkMsa0JBQStESCxZQUFHLENBQWxFRyxpQkFBaUJDLHNCQUE4Q0osWUFBRyxDQUFqREkscUJBQXFCQyx1QkFBeUJMLFlBQUcsQ0FBNUJLLHNCQUN4RnRCLGNBQWNnQixZQUFZSCxZQUFZLENBQUNDLFVBQVVDLFVBQ2pEZCxrQkFBa0JpQixnQkFBZ0JMLFlBQVksQ0FBQ0MsVUFBVUMsVUFDekRiLG1CQUFtQmlCLGlCQUFpQk4sWUFBWSxDQUFDQyxVQUFVQyxVQUMzRFosa0JBQWtCaUIsZ0JBQWdCUCxZQUFZLENBQUNDLFVBQVVDLFVBQ3pEWCxxQkFBcUJpQixvQkFBb0JSLFlBQVksQ0FBQ0MsVUFBVUMsVUFDaEVWLHVCQUF1QmlCLHFCQUFxQlQsWUFBWSxDQUFDQyxVQUFVQyxVQUNuRVEsT0FBTyxJQUFJeEIsS0FBS0MsYUFBYUMsaUJBQWlCQyxrQkFBa0JDLGlCQUFpQkMsb0JBQW9CQztnQkFFM0csT0FBT2tCO1lBQ1Q7Ozs7S0FiQSx3QkFBT0MsUUFBTyJ9