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
            key: "call",
            value: function call(context) {
                if (false) {
                ///
                } else if (this.forEachLoop !== null) {
                    this.forEachLoop.call(context);
                } else if (this.arrayAssignment !== null) {
                    this.arrayAssignment.call(context);
                } else if (this.conditionalBlock !== null) {
                    this.conditionalBlock.call(context);
                } else if (this.objectAssigment !== null) {
                    this.objectAssigment.call(context);
                } else if (this.variableAssignment !== null) {
                    this.variableAssignment.call(context);
                } else if (this.variablesDeclaration !== null) {
                    this.variablesDeclaration.call(context);
                }
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb20vc3RlcC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IGRvbSBmcm9tIFwiLi4vZG9tXCI7XG5cbmltcG9ydCB7IGRvbUFzc2lnbmVkIH0gZnJvbSBcIi4uL2RvbVwiO1xuXG5leHBvcnQgZGVmYXVsdCBkb21Bc3NpZ25lZChjbGFzcyBTdGVwIHtcbiAgY29uc3RydWN0b3IoZm9yRWFjaExvb3AsIGFycmF5QXNzaWdubWVudCwgY29uZGl0aW9uYWxCbG9jaywgb2JqZWN0QXNzaWdtZW50LCB2YXJpYWJsZUFzc2lnbm1lbnQsIHZhcmlhYmxlc0RlY2xhcmF0aW9uKSB7XG4gICAgdGhpcy5mb3JFYWNoTG9vcCA9IGZvckVhY2hMb29wO1xuICAgIHRoaXMuYXJyYXlBc3NpZ25tZW50ID0gYXJyYXlBc3NpZ25tZW50O1xuICAgIHRoaXMuY29uZGl0aW9uYWxCbG9jayA9IGNvbmRpdGlvbmFsQmxvY2s7XG4gICAgdGhpcy5vYmplY3RBc3NpZ21lbnQgPSBvYmplY3RBc3NpZ21lbnQ7XG4gICAgdGhpcy52YXJpYWJsZUFzc2lnbm1lbnQgPSB2YXJpYWJsZUFzc2lnbm1lbnQ7XG4gICAgdGhpcy52YXJpYWJsZXNEZWNsYXJhdGlvbiA9IHZhcmlhYmxlc0RlY2xhcmF0aW9uO1xuICB9XG5cbiAgZ2V0Rm9yRWFjaExvb3AoKSB7XG4gICAgcmV0dXJuIHRoaXMuZm9yRWFjaExvb3A7XG4gIH1cblxuICBnZXRBcnJheUFzc2lnbm1lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuYXJyYXlBc3NpZ25tZW50O1xuICB9XG5cbiAgZ2V0Q29uZGl0aW9uYWxCbG9jaygpIHtcbiAgICByZXR1cm4gdGhpcy5jb25kaXRpb25hbEJsb2NrO1xuICB9XG5cbiAgZ2V0T2JqZWN0QXNzaWdtZW50KCkge1xuICAgIHJldHVybiB0aGlzLm9iamVjdEFzc2lnbWVudDtcbiAgfVxuXG4gIGdldFZhcmlhYmxlQXNzaWdubWVudCgpIHtcbiAgICByZXR1cm4gdGhpcy52YXJpYWJsZUFzc2lnbm1lbnQ7XG4gIH1cblxuICBnZXRWYXJpYWJsZXNEZWNsYXJhdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy52YXJpYWJsZXNEZWNsYXJhdGlvbjtcbiAgfVxuXG4gIGNhbGwoY29udGV4dCkge1xuICAgIGlmIChmYWxzZSkge1xuICAgICAgLy8vXG4gICAgfSBlbHNlIGlmICh0aGlzLmZvckVhY2hMb29wICE9PSBudWxsKSB7XG4gICAgICB0aGlzLmZvckVhY2hMb29wLmNhbGwoY29udGV4dCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLmFycmF5QXNzaWdubWVudCAhPT0gbnVsbCkge1xuICAgICAgdGhpcy5hcnJheUFzc2lnbm1lbnQuY2FsbChjb250ZXh0KTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuY29uZGl0aW9uYWxCbG9jayAhPT0gbnVsbCkge1xuICAgICAgdGhpcy5jb25kaXRpb25hbEJsb2NrLmNhbGwoY29udGV4dCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLm9iamVjdEFzc2lnbWVudCAhPT0gbnVsbCkge1xuICAgICAgdGhpcy5vYmplY3RBc3NpZ21lbnQuY2FsbChjb250ZXh0KTtcbiAgICB9IGVsc2UgaWYgKHRoaXMudmFyaWFibGVBc3NpZ25tZW50ICE9PSBudWxsKSB7XG4gICAgICB0aGlzLnZhcmlhYmxlQXNzaWdubWVudC5jYWxsKGNvbnRleHQpO1xuICAgIH0gZWxzZSBpZiAodGhpcy52YXJpYWJsZXNEZWNsYXJhdGlvbiAhPT0gbnVsbCkge1xuICAgICAgdGhpcy52YXJpYWJsZXNEZWNsYXJhdGlvbi5jYWxsKGNvbnRleHQpO1xuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJTdGVwXCI7XG5cbiAgc3RhdGljIGZyb21TdGVwTm9kZShzdGVwTm9kZSwgY29udGV4dCkge1xuICAgIGNvbnN0IHsgRm9yRWFjaExvb3AsIEFycmF5QXNzaWdubWVudCwgQ29uZGl0aW9uYWxCbG9jaywgT2JqZWN0QXNzaWdtZW50LCBWYXJpYWJsZXNBc3NpZ25tZW50LCBWYXJpYWJsZXNEZWNsYXJhdGlvbiB9ID0gZG9tLFxuICAgICAgICAgIGZvckVhY2hMb29wID0gRm9yRWFjaExvb3AuZnJvbVN0ZXBOb2RlKHN0ZXBOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgICBhcnJheUFzc2lnbm1lbnQgPSBBcnJheUFzc2lnbm1lbnQuZnJvbVN0ZXBOb2RlKHN0ZXBOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgICBjb25kaXRpb25hbEJsb2NrID0gQ29uZGl0aW9uYWxCbG9jay5mcm9tU3RlcE5vZGUoc3RlcE5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgIG9iamVjdEFzc2lnbWVudCA9IE9iamVjdEFzc2lnbWVudC5mcm9tU3RlcE5vZGUoc3RlcE5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgIHZhcmlhYmxlQXNzaWdubWVudCA9IFZhcmlhYmxlc0Fzc2lnbm1lbnQuZnJvbVN0ZXBOb2RlKHN0ZXBOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgICB2YXJpYWJsZXNEZWNsYXJhdGlvbiA9IFZhcmlhYmxlc0RlY2xhcmF0aW9uLmZyb21TdGVwTm9kZShzdGVwTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgc3RlcCA9IG5ldyBTdGVwKGZvckVhY2hMb29wLCBhcnJheUFzc2lnbm1lbnQsIGNvbmRpdGlvbmFsQmxvY2ssIG9iamVjdEFzc2lnbWVudCwgdmFyaWFibGVBc3NpZ25tZW50LCB2YXJpYWJsZXNEZWNsYXJhdGlvbik7XG5cbiAgICByZXR1cm4gc3RlcDtcbiAgfVxufSk7XG4iXSwibmFtZXMiOlsiZG9tQXNzaWduZWQiLCJTdGVwIiwiZm9yRWFjaExvb3AiLCJhcnJheUFzc2lnbm1lbnQiLCJjb25kaXRpb25hbEJsb2NrIiwib2JqZWN0QXNzaWdtZW50IiwidmFyaWFibGVBc3NpZ25tZW50IiwidmFyaWFibGVzRGVjbGFyYXRpb24iLCJnZXRGb3JFYWNoTG9vcCIsImdldEFycmF5QXNzaWdubWVudCIsImdldENvbmRpdGlvbmFsQmxvY2siLCJnZXRPYmplY3RBc3NpZ21lbnQiLCJnZXRWYXJpYWJsZUFzc2lnbm1lbnQiLCJnZXRWYXJpYWJsZXNEZWNsYXJhdGlvbiIsImNhbGwiLCJjb250ZXh0IiwiZnJvbVN0ZXBOb2RlIiwic3RlcE5vZGUiLCJGb3JFYWNoTG9vcCIsImRvbSIsIkFycmF5QXNzaWdubWVudCIsIkNvbmRpdGlvbmFsQmxvY2siLCJPYmplY3RBc3NpZ21lbnQiLCJWYXJpYWJsZXNBc3NpZ25tZW50IiwiVmFyaWFibGVzRGVjbGFyYXRpb24iLCJzdGVwIiwibmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBTUE7OztlQUFBOzs7MkRBSmdCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFJaEIsV0FBZUEsSUFBQUEsZ0JBQVcseUJBQUM7YUFBTUMsS0FDbkJDLFdBQVcsRUFBRUMsZUFBZSxFQUFFQyxnQkFBZ0IsRUFBRUMsZUFBZSxFQUFFQyxrQkFBa0IsRUFBRUMsb0JBQW9CO2dDQUR0Rk47UUFFN0IsSUFBSSxDQUFDQyxXQUFXLEdBQUdBO1FBQ25CLElBQUksQ0FBQ0MsZUFBZSxHQUFHQTtRQUN2QixJQUFJLENBQUNDLGdCQUFnQixHQUFHQTtRQUN4QixJQUFJLENBQUNDLGVBQWUsR0FBR0E7UUFDdkIsSUFBSSxDQUFDQyxrQkFBa0IsR0FBR0E7UUFDMUIsSUFBSSxDQUFDQyxvQkFBb0IsR0FBR0E7Ozs7WUFHOUJDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ04sV0FBVztZQUN6Qjs7O1lBRUFPLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ04sZUFBZTtZQUM3Qjs7O1lBRUFPLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ04sZ0JBQWdCO1lBQzlCOzs7WUFFQU8sS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDTixlQUFlO1lBQzdCOzs7WUFFQU8sS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDTixrQkFBa0I7WUFDaEM7OztZQUVBTyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNOLG9CQUFvQjtZQUNsQzs7O1lBRUFPLEtBQUFBO21CQUFBQSxTQUFBQSxLQUFLQyxPQUFPO2dCQUNWLElBQUksT0FBTztnQkFDVCxHQUFHO2dCQUNMLE9BQU8sSUFBSSxJQUFJLENBQUNiLFdBQVcsS0FBSyxNQUFNO29CQUNwQyxJQUFJLENBQUNBLFdBQVcsQ0FBQ1ksSUFBSSxDQUFDQztnQkFDeEIsT0FBTyxJQUFJLElBQUksQ0FBQ1osZUFBZSxLQUFLLE1BQU07b0JBQ3hDLElBQUksQ0FBQ0EsZUFBZSxDQUFDVyxJQUFJLENBQUNDO2dCQUM1QixPQUFPLElBQUksSUFBSSxDQUFDWCxnQkFBZ0IsS0FBSyxNQUFNO29CQUN6QyxJQUFJLENBQUNBLGdCQUFnQixDQUFDVSxJQUFJLENBQUNDO2dCQUM3QixPQUFPLElBQUksSUFBSSxDQUFDVixlQUFlLEtBQUssTUFBTTtvQkFDeEMsSUFBSSxDQUFDQSxlQUFlLENBQUNTLElBQUksQ0FBQ0M7Z0JBQzVCLE9BQU8sSUFBSSxJQUFJLENBQUNULGtCQUFrQixLQUFLLE1BQU07b0JBQzNDLElBQUksQ0FBQ0Esa0JBQWtCLENBQUNRLElBQUksQ0FBQ0M7Z0JBQy9CLE9BQU8sSUFBSSxJQUFJLENBQUNSLG9CQUFvQixLQUFLLE1BQU07b0JBQzdDLElBQUksQ0FBQ0Esb0JBQW9CLENBQUNPLElBQUksQ0FBQ0M7Z0JBQ2pDO1lBQ0Y7Ozs7WUFJT0MsS0FBQUE7bUJBQVAsU0FBT0EsYUFBYUMsUUFBUSxFQUFFRixPQUFPO2dCQUNuQyxJQUFRRyxjQUErR0MsWUFBRyxDQUFsSEQsYUFBYUUsa0JBQWtHRCxZQUFHLENBQXJHQyxpQkFBaUJDLG1CQUFpRkYsWUFBRyxDQUFwRkUsa0JBQWtCQyxrQkFBK0RILFlBQUcsQ0FBbEVHLGlCQUFpQkMsc0JBQThDSixZQUFHLENBQWpESSxxQkFBcUJDLHVCQUF5QkwsWUFBRyxDQUE1Qkssc0JBQ3hGdEIsY0FBY2dCLFlBQVlGLFlBQVksQ0FBQ0MsVUFBVUYsVUFDakRaLGtCQUFrQmlCLGdCQUFnQkosWUFBWSxDQUFDQyxVQUFVRixVQUN6RFgsbUJBQW1CaUIsaUJBQWlCTCxZQUFZLENBQUNDLFVBQVVGLFVBQzNEVixrQkFBa0JpQixnQkFBZ0JOLFlBQVksQ0FBQ0MsVUFBVUYsVUFDekRULHFCQUFxQmlCLG9CQUFvQlAsWUFBWSxDQUFDQyxVQUFVRixVQUNoRVIsdUJBQXVCaUIscUJBQXFCUixZQUFZLENBQUNDLFVBQVVGLFVBQ25FVSxPQUFPLElBQUl4QixLQUFLQyxhQUFhQyxpQkFBaUJDLGtCQUFrQkMsaUJBQWlCQyxvQkFBb0JDO2dCQUUzRyxPQUFPa0I7WUFDVDs7OztLQWJBLHdCQUFPQyxRQUFPIn0=