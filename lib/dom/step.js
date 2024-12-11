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
                var ForEachLoop = _dom.default.ForEachLoop, ArrayAssignment = _dom.default.ArrayAssignment, ConditionalBlock = _dom.default.ConditionalBlock, ObjectAssigment = _dom.default.ObjectAssigment, VariablesAssignment = _dom.default.VariablesAssignment, VariablesDeclaration = _dom.default.VariablesDeclaration, node = stepNode, string = context.nodeAsString(node), forEachLoop = ForEachLoop.fromStepNode(stepNode, context), arrayAssignment = ArrayAssignment.fromStepNode(stepNode, context), conditionalBlock = ConditionalBlock.fromStepNode(stepNode, context), objectAssigment = ObjectAssigment.fromStepNode(stepNode, context), variableAssignment = VariablesAssignment.fromStepNode(stepNode, context), variablesDeclaration = VariablesDeclaration.fromStepNode(stepNode, context), step = new Step(string, forEachLoop, arrayAssignment, conditionalBlock, objectAssigment, variableAssignment, variablesDeclaration);
                return step;
            }
        }
    ]);
    return Step;
}(), _define_property(_Step, "name", "Step"), _Step));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb20vc3RlcC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IGRvbSBmcm9tIFwiLi4vZG9tXCI7XG5cbmltcG9ydCB7IGRvbUFzc2lnbmVkIH0gZnJvbSBcIi4uL2RvbVwiO1xuXG5leHBvcnQgZGVmYXVsdCBkb21Bc3NpZ25lZChjbGFzcyBTdGVwIHtcbiAgY29uc3RydWN0b3Ioc3RyaW5nLCBmb3JFYWNoTG9vcCwgYXJyYXlBc3NpZ25tZW50LCBjb25kaXRpb25hbEJsb2NrLCBvYmplY3RBc3NpZ21lbnQsIHZhcmlhYmxlQXNzaWdubWVudCwgdmFyaWFibGVzRGVjbGFyYXRpb24pIHtcbiAgICB0aGlzLnN0cmluZyA9IHN0cmluZztcbiAgICB0aGlzLmZvckVhY2hMb29wID0gZm9yRWFjaExvb3A7XG4gICAgdGhpcy5hcnJheUFzc2lnbm1lbnQgPSBhcnJheUFzc2lnbm1lbnQ7XG4gICAgdGhpcy5jb25kaXRpb25hbEJsb2NrID0gY29uZGl0aW9uYWxCbG9jaztcbiAgICB0aGlzLm9iamVjdEFzc2lnbWVudCA9IG9iamVjdEFzc2lnbWVudDtcbiAgICB0aGlzLnZhcmlhYmxlQXNzaWdubWVudCA9IHZhcmlhYmxlQXNzaWdubWVudDtcbiAgICB0aGlzLnZhcmlhYmxlc0RlY2xhcmF0aW9uID0gdmFyaWFibGVzRGVjbGFyYXRpb247XG4gIH1cblxuICBnZXRTdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RyaW5nO1xuICB9XG5cbiAgZ2V0Rm9yRWFjaExvb3AoKSB7XG4gICAgcmV0dXJuIHRoaXMuZm9yRWFjaExvb3A7XG4gIH1cblxuICBnZXRBcnJheUFzc2lnbm1lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuYXJyYXlBc3NpZ25tZW50O1xuICB9XG5cbiAgZ2V0Q29uZGl0aW9uYWxCbG9jaygpIHtcbiAgICByZXR1cm4gdGhpcy5jb25kaXRpb25hbEJsb2NrO1xuICB9XG5cbiAgZ2V0T2JqZWN0QXNzaWdtZW50KCkge1xuICAgIHJldHVybiB0aGlzLm9iamVjdEFzc2lnbWVudDtcbiAgfVxuXG4gIGdldFZhcmlhYmxlQXNzaWdubWVudCgpIHtcbiAgICByZXR1cm4gdGhpcy52YXJpYWJsZUFzc2lnbm1lbnQ7XG4gIH1cblxuICBnZXRWYXJpYWJsZXNEZWNsYXJhdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy52YXJpYWJsZXNEZWNsYXJhdGlvbjtcbiAgfVxuXG4gIGNhbGwoY29udGV4dCkge1xuICAgIGlmIChmYWxzZSkge1xuICAgICAgLy8vXG4gICAgfSBlbHNlIGlmICh0aGlzLmZvckVhY2hMb29wICE9PSBudWxsKSB7XG4gICAgICB0aGlzLmZvckVhY2hMb29wLmNhbGwoY29udGV4dCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLmFycmF5QXNzaWdubWVudCAhPT0gbnVsbCkge1xuICAgICAgdGhpcy5hcnJheUFzc2lnbm1lbnQuY2FsbChjb250ZXh0KTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuY29uZGl0aW9uYWxCbG9jayAhPT0gbnVsbCkge1xuICAgICAgdGhpcy5jb25kaXRpb25hbEJsb2NrLmNhbGwoY29udGV4dCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLm9iamVjdEFzc2lnbWVudCAhPT0gbnVsbCkge1xuICAgICAgdGhpcy5vYmplY3RBc3NpZ21lbnQuY2FsbChjb250ZXh0KTtcbiAgICB9IGVsc2UgaWYgKHRoaXMudmFyaWFibGVBc3NpZ25tZW50ICE9PSBudWxsKSB7XG4gICAgICB0aGlzLnZhcmlhYmxlQXNzaWdubWVudC5jYWxsKGNvbnRleHQpO1xuICAgIH0gZWxzZSBpZiAodGhpcy52YXJpYWJsZXNEZWNsYXJhdGlvbiAhPT0gbnVsbCkge1xuICAgICAgdGhpcy52YXJpYWJsZXNEZWNsYXJhdGlvbi5jYWxsKGNvbnRleHQpO1xuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJTdGVwXCI7XG5cbiAgc3RhdGljIGZyb21TdGVwTm9kZShzdGVwTm9kZSwgY29udGV4dCkge1xuICAgIGNvbnN0IHsgRm9yRWFjaExvb3AsIEFycmF5QXNzaWdubWVudCwgQ29uZGl0aW9uYWxCbG9jaywgT2JqZWN0QXNzaWdtZW50LCBWYXJpYWJsZXNBc3NpZ25tZW50LCBWYXJpYWJsZXNEZWNsYXJhdGlvbiB9ID0gZG9tLFxuICAgICAgICAgIG5vZGUgPSBzdGVwTm9kZSwgIC8vL1xuICAgICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICAgIGZvckVhY2hMb29wID0gRm9yRWFjaExvb3AuZnJvbVN0ZXBOb2RlKHN0ZXBOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgICBhcnJheUFzc2lnbm1lbnQgPSBBcnJheUFzc2lnbm1lbnQuZnJvbVN0ZXBOb2RlKHN0ZXBOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgICBjb25kaXRpb25hbEJsb2NrID0gQ29uZGl0aW9uYWxCbG9jay5mcm9tU3RlcE5vZGUoc3RlcE5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgIG9iamVjdEFzc2lnbWVudCA9IE9iamVjdEFzc2lnbWVudC5mcm9tU3RlcE5vZGUoc3RlcE5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgIHZhcmlhYmxlQXNzaWdubWVudCA9IFZhcmlhYmxlc0Fzc2lnbm1lbnQuZnJvbVN0ZXBOb2RlKHN0ZXBOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgICB2YXJpYWJsZXNEZWNsYXJhdGlvbiA9IFZhcmlhYmxlc0RlY2xhcmF0aW9uLmZyb21TdGVwTm9kZShzdGVwTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgc3RlcCA9IG5ldyBTdGVwKHN0cmluZywgZm9yRWFjaExvb3AsIGFycmF5QXNzaWdubWVudCwgY29uZGl0aW9uYWxCbG9jaywgb2JqZWN0QXNzaWdtZW50LCB2YXJpYWJsZUFzc2lnbm1lbnQsIHZhcmlhYmxlc0RlY2xhcmF0aW9uKTtcblxuICAgIHJldHVybiBzdGVwO1xuICB9XG59KTtcbiJdLCJuYW1lcyI6WyJkb21Bc3NpZ25lZCIsIlN0ZXAiLCJzdHJpbmciLCJmb3JFYWNoTG9vcCIsImFycmF5QXNzaWdubWVudCIsImNvbmRpdGlvbmFsQmxvY2siLCJvYmplY3RBc3NpZ21lbnQiLCJ2YXJpYWJsZUFzc2lnbm1lbnQiLCJ2YXJpYWJsZXNEZWNsYXJhdGlvbiIsImdldFN0cmluZyIsImdldEZvckVhY2hMb29wIiwiZ2V0QXJyYXlBc3NpZ25tZW50IiwiZ2V0Q29uZGl0aW9uYWxCbG9jayIsImdldE9iamVjdEFzc2lnbWVudCIsImdldFZhcmlhYmxlQXNzaWdubWVudCIsImdldFZhcmlhYmxlc0RlY2xhcmF0aW9uIiwiY2FsbCIsImNvbnRleHQiLCJmcm9tU3RlcE5vZGUiLCJzdGVwTm9kZSIsIkZvckVhY2hMb29wIiwiZG9tIiwiQXJyYXlBc3NpZ25tZW50IiwiQ29uZGl0aW9uYWxCbG9jayIsIk9iamVjdEFzc2lnbWVudCIsIlZhcmlhYmxlc0Fzc2lnbm1lbnQiLCJWYXJpYWJsZXNEZWNsYXJhdGlvbiIsIm5vZGUiLCJub2RlQXNTdHJpbmciLCJzdGVwIiwibmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBTUE7OztlQUFBOzs7MkRBSmdCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFJaEIsV0FBZUEsSUFBQUEsZ0JBQVcseUJBQUM7YUFBTUMsS0FDbkJDLE1BQU0sRUFBRUMsV0FBVyxFQUFFQyxlQUFlLEVBQUVDLGdCQUFnQixFQUFFQyxlQUFlLEVBQUVDLGtCQUFrQixFQUFFQyxvQkFBb0I7Z0NBRDlGUDtRQUU3QixJQUFJLENBQUNDLE1BQU0sR0FBR0E7UUFDZCxJQUFJLENBQUNDLFdBQVcsR0FBR0E7UUFDbkIsSUFBSSxDQUFDQyxlQUFlLEdBQUdBO1FBQ3ZCLElBQUksQ0FBQ0MsZ0JBQWdCLEdBQUdBO1FBQ3hCLElBQUksQ0FBQ0MsZUFBZSxHQUFHQTtRQUN2QixJQUFJLENBQUNDLGtCQUFrQixHQUFHQTtRQUMxQixJQUFJLENBQUNDLG9C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