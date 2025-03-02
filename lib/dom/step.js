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
var _constants = require("../constants");
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
    function Step(string, arrayAssignment, objectAssigment, variablesDeclaration) {
        _class_call_check(this, Step);
        this.string = string;
        this.arrayAssignment = arrayAssignment;
        this.objectAssigment = objectAssigment;
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
                } else if (this.variablesDeclaration !== null) {
                    this.variablesDeclaration.evaluate(context);
                }
            }
        }
    ], [
        {
            key: "fromStepNode",
            value: function fromStepNode(stepNode, context) {
                var step = stepFromStepNode(stepNode, context);
                return step;
            }
        }
    ]);
    return Step;
}(), _define_property(_Step, "name", "Step"), _Step));
function stepFromStepNode(stepNode, context) {
    var Step = _dom.default.Step, ArrayAssignment = _dom.default.ArrayAssignment, ObjectAssigment = _dom.default.ObjectAssigment, VariableAssignments = _dom.default.VariableAssignments, string = stringFromNothing(context), arrayAssignment = ArrayAssignment.fromStepNode(stepNode, context), objectAssigment = ObjectAssigment.fromStepNode(stepNode, context), variablesDeclaration = VariableAssignments.fromStepNode(stepNode, context), step = new Step(string, arrayAssignment, objectAssigment, variablesDeclaration);
    return step;
}
function stringFromNothing(context) {
    var string = _constants.EMPTY_STRING;
    return string;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb20vc3RlcC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IGRvbSBmcm9tIFwiLi4vZG9tXCI7XG5cbmltcG9ydCB7IGRvbUFzc2lnbmVkIH0gZnJvbSBcIi4uL2RvbVwiO1xuaW1wb3J0IHsgRU1QVFlfU1RSSU5HIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuXG5leHBvcnQgZGVmYXVsdCBkb21Bc3NpZ25lZChjbGFzcyBTdGVwIHtcbiAgY29uc3RydWN0b3Ioc3RyaW5nLCBhcnJheUFzc2lnbm1lbnQsIG9iamVjdEFzc2lnbWVudCwgdmFyaWFibGVzRGVjbGFyYXRpb24pIHtcbiAgICB0aGlzLnN0cmluZyA9IHN0cmluZztcbiAgICB0aGlzLmFycmF5QXNzaWdubWVudCA9IGFycmF5QXNzaWdubWVudDtcbiAgICB0aGlzLm9iamVjdEFzc2lnbWVudCA9IG9iamVjdEFzc2lnbWVudDtcbiAgICB0aGlzLnZhcmlhYmxlc0RlY2xhcmF0aW9uID0gdmFyaWFibGVzRGVjbGFyYXRpb247XG4gIH1cblxuICBnZXRTdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RyaW5nO1xuICB9XG5cbiAgZ2V0QXJyYXlBc3NpZ25tZW50KCkge1xuICAgIHJldHVybiB0aGlzLmFycmF5QXNzaWdubWVudDtcbiAgfVxuXG4gIGdldE9iamVjdEFzc2lnbWVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5vYmplY3RBc3NpZ21lbnQ7XG4gIH1cblxuICBnZXRWYXJpYWJsZXNEZWNsYXJhdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy52YXJpYWJsZXNEZWNsYXJhdGlvbjtcbiAgfVxuXG4gIGV2YWx1YXRlKGNvbnRleHQpIHtcbiAgICBpZiAoZmFsc2UpIHtcbiAgICAgIC8vL1xuICAgIH0gZWxzZSBpZiAodGhpcy5hcnJheUFzc2lnbm1lbnQgIT09IG51bGwpIHtcbiAgICAgIHRoaXMuYXJyYXlBc3NpZ25tZW50LmV2YWx1YXRlKGNvbnRleHQpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5vYmplY3RBc3NpZ21lbnQgIT09IG51bGwpIHtcbiAgICAgIHRoaXMub2JqZWN0QXNzaWdtZW50LmV2YWx1YXRlKGNvbnRleHQpO1xuICAgIH0gZWxzZSBpZiAodGhpcy52YXJpYWJsZXNEZWNsYXJhdGlvbiAhPT0gbnVsbCkge1xuICAgICAgdGhpcy52YXJpYWJsZXNEZWNsYXJhdGlvbi5ldmFsdWF0ZShjb250ZXh0KTtcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiU3RlcFwiO1xuXG4gIHN0YXRpYyBmcm9tU3RlcE5vZGUoc3RlcE5vZGUsIGNvbnRleHQpIHtcbiAgICBjb25zdCBzdGVwID0gc3RlcEZyb21TdGVwTm9kZShzdGVwTm9kZSwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gc3RlcDtcbiAgfVxufSk7XG5cbmZ1bmN0aW9uIHN0ZXBGcm9tU3RlcE5vZGUoc3RlcE5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBTdGVwLCBBcnJheUFzc2lnbm1lbnQsIE9iamVjdEFzc2lnbWVudCwgVmFyaWFibGVBc3NpZ25tZW50cyB9ID0gZG9tLFxuICAgICAgICBzdHJpbmcgPSBzdHJpbmdGcm9tTm90aGluZyhjb250ZXh0KSxcbiAgICAgICAgYXJyYXlBc3NpZ25tZW50ID0gQXJyYXlBc3NpZ25tZW50LmZyb21TdGVwTm9kZShzdGVwTm9kZSwgY29udGV4dCksXG4gICAgICAgIG9iamVjdEFzc2lnbWVudCA9IE9iamVjdEFzc2lnbWVudC5mcm9tU3RlcE5vZGUoc3RlcE5vZGUsIGNvbnRleHQpLFxuICAgICAgICB2YXJpYWJsZXNEZWNsYXJhdGlvbiA9IFZhcmlhYmxlQXNzaWdubWVudHMuZnJvbVN0ZXBOb2RlKHN0ZXBOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgc3RlcCA9IG5ldyBTdGVwKHN0cmluZywgYXJyYXlBc3NpZ25tZW50LCBvYmplY3RBc3NpZ21lbnQsIHZhcmlhYmxlc0RlY2xhcmF0aW9uKTtcblxuICByZXR1cm4gc3RlcDtcbn1cblxuZnVuY3Rpb24gc3RyaW5nRnJvbU5vdGhpbmcoY29udGV4dCkge1xuICBjb25zdCBzdHJpbmcgPSBFTVBUWV9TVFJJTkc7XG5cbiAgcmV0dXJuIHN0cmluZztcbn0iXSwibmFtZXMiOlsiZG9tQXNzaWduZWQiLCJTdGVwIiwic3RyaW5nIiwiYXJyYXlBc3NpZ25tZW50Iiwib2JqZWN0QXNzaWdtZW50IiwidmFyaWFibGVzRGVjbGFyYXRpb24iLCJnZXRTdHJpbmciLCJnZXRBcnJheUFzc2lnbm1lbnQiLCJnZXRPYmplY3RBc3NpZ21lbnQiLCJnZXRWYXJpYWJsZXNEZWNsYXJhdGlvbiIsImV2YWx1YXRlIiwiY29udGV4dCIsImZyb21TdGVwTm9kZSIsInN0ZXBOb2RlIiwic3RlcCIsInN0ZXBGcm9tU3RlcE5vZGUiLCJuYW1lIiwiZG9tIiwiQXJyYXlBc3NpZ25tZW50IiwiT2JqZWN0QXNzaWdtZW50IiwiVmFyaWFibGVBc3NpZ25tZW50cyIsInN0cmluZ0Zyb21Ob3RoaW5nIiwiRU1QVFlfU1RSSU5HIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFPQTs7O2VBQUE7OzsyREFMZ0I7eUJBR2E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUU3QixXQUFlQSxJQUFBQSxnQkFBVyx5QkFBQzthQUFNQyxLQUNuQkMsTUFBTSxFQUFFQyxlQUFlLEVBQUVDLGVBQWUsRUFBRUMsb0JBQW9CO2dDQUQzQ0o7UUFFN0IsSUFBSSxDQUFDQyxNQUFNLEdBQUdBO1FBQ2QsSUFBSSxDQUFDQyxlQUFlLEdBQUdBO1FBQ3ZCLElBQUksQ0FBQ0MsZUFBZSxHQUFHQTtRQUN2QixJQUFJLENBQUNDLG9CQUFvQixHQUFHQTs7OztZQUc5QkMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSixNQUFNO1lBQ3BCOzs7WUFFQUssS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSixlQUFlO1lBQzdCOzs7WUFFQUssS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSixlQUFlO1lBQzdCOzs7WUFFQUssS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSixvQkFBb0I7WUFDbEM7OztZQUVBSyxLQUFBQTttQkFBQUEsU0FBQUEsU0FBU0MsT0FBTztnQkFDZCxJQUFJLE9BQU87Z0JBQ1QsR0FBRztnQkFDTCxPQUFPLElBQUksSUFBSSxDQUFDUixlQUFlLEtBQUssTUFBTTtvQkFDeEMsSUFBSSxDQUFDQSxlQUFlLENBQUNPLFFBQVEsQ0FBQ0M7Z0JBQ2hDLE9BQU8sSUFBSSxJQUFJLENBQUNQLGVBQWUsS0FBSyxNQUFNO29CQUN4QyxJQUFJLENBQUNBLGVBQWUsQ0FBQ00sUUFBUSxDQUFDQztnQkFDaEMsT0FBTyxJQUFJLElBQUksQ0FBQ04sb0JBQW9CLEtBQUssTUFBTTtvQkFDN0MsSUFBSSxDQUFDQSxvQkFBb0IsQ0FBQ0ssUUFBUSxDQUFDQztnQkFDckM7WUFDRjs7OztZQUlPQyxLQUFBQTttQkFBUCxTQUFPQSxhQUFhQyxRQUFRLEVBQUVGLE9BQU87Z0JBQ25DLElBQU1HLE9BQU9DLGlCQUFpQkYsVUFBVUY7Z0JBRXhDLE9BQU9HO1lBQ1Q7Ozs7S0FOQSx3QkFBT0UsUUFBTztBQVNoQixTQUFTRCxpQkFBaUJGLFFBQVEsRUFBRUYsT0FBTztJQUN6QyxJQUFRVixPQUFnRWdCLFlBQUcsQ0FBbkVoQixNQUFNaUIsa0JBQTBERCxZQUFHLENBQTdEQyxpQkFBaUJDLGtCQUF5Q0YsWUFBRyxDQUE1Q0UsaUJBQWlCQyxzQkFBd0JILFlBQUcsQ0FBM0JHLHFCQUMxQ2xCLFNBQVNtQixrQkFBa0JWLFVBQzNCUixrQkFBa0JlLGdCQUFnQk4sWUFBWSxDQUFDQyxVQUFVRixVQUN6RFAsa0JBQWtCZSxnQkFBZ0JQLFlBQVksQ0FBQ0MsVUFBVUYsVUFDekROLHVCQUF1QmUsb0JBQW9CUixZQUFZLENBQUNDLFVBQVVGLFVBQ2xFRyxPQUFPLElBQUliLEtBQUtDLFFBQVFDLGlCQUFpQkMsaUJBQWlCQztJQUVoRSxPQUFPUztBQUNUO0FBRUEsU0FBU08sa0JBQWtCVixPQUFPO0lBQ2hDLElBQU1ULFNBQVNvQix1QkFBWTtJQUUzQixPQUFPcEI7QUFDVCJ9