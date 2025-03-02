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
                var ArrayAssignment = _dom.default.ArrayAssignment, ObjectAssigment = _dom.default.ObjectAssigment, VariableAssignments = _dom.default.VariableAssignments, string = stringFromNothing(context), arrayAssignment = ArrayAssignment.fromStepNode(stepNode, context), objectAssigment = ObjectAssigment.fromStepNode(stepNode, context), variablesDeclaration = VariableAssignments.fromStepNode(stepNode, context), step = new Step(string, arrayAssignment, objectAssigment, variablesDeclaration);
                return step;
            }
        }
    ]);
    return Step;
}(), _define_property(_Step, "name", "Step"), _Step));
function stringFromNothing(context) {
    var string = _constants.EMPTY_STRING;
    return string;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb20vc3RlcC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IGRvbSBmcm9tIFwiLi4vZG9tXCI7XG5cbmltcG9ydCB7IGRvbUFzc2lnbmVkIH0gZnJvbSBcIi4uL2RvbVwiO1xuaW1wb3J0IHsgRU1QVFlfU1RSSU5HIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuXG5leHBvcnQgZGVmYXVsdCBkb21Bc3NpZ25lZChjbGFzcyBTdGVwIHtcbiAgY29uc3RydWN0b3Ioc3RyaW5nLCBhcnJheUFzc2lnbm1lbnQsIG9iamVjdEFzc2lnbWVudCwgdmFyaWFibGVzRGVjbGFyYXRpb24pIHtcbiAgICB0aGlzLnN0cmluZyA9IHN0cmluZztcbiAgICB0aGlzLmFycmF5QXNzaWdubWVudCA9IGFycmF5QXNzaWdubWVudDtcbiAgICB0aGlzLm9iamVjdEFzc2lnbWVudCA9IG9iamVjdEFzc2lnbWVudDtcbiAgICB0aGlzLnZhcmlhYmxlc0RlY2xhcmF0aW9uID0gdmFyaWFibGVzRGVjbGFyYXRpb247XG4gIH1cblxuICBnZXRTdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RyaW5nO1xuICB9XG5cbiAgZ2V0QXJyYXlBc3NpZ25tZW50KCkge1xuICAgIHJldHVybiB0aGlzLmFycmF5QXNzaWdubWVudDtcbiAgfVxuXG4gIGdldE9iamVjdEFzc2lnbWVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5vYmplY3RBc3NpZ21lbnQ7XG4gIH1cblxuICBnZXRWYXJpYWJsZXNEZWNsYXJhdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy52YXJpYWJsZXNEZWNsYXJhdGlvbjtcbiAgfVxuXG4gIGV2YWx1YXRlKGNvbnRleHQpIHtcbiAgICBpZiAoZmFsc2UpIHtcbiAgICAgIC8vL1xuICAgIH0gZWxzZSBpZiAodGhpcy5hcnJheUFzc2lnbm1lbnQgIT09IG51bGwpIHtcbiAgICAgIHRoaXMuYXJyYXlBc3NpZ25tZW50LmV2YWx1YXRlKGNvbnRleHQpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5vYmplY3RBc3NpZ21lbnQgIT09IG51bGwpIHtcbiAgICAgIHRoaXMub2JqZWN0QXNzaWdtZW50LmV2YWx1YXRlKGNvbnRleHQpO1xuICAgIH0gZWxzZSBpZiAodGhpcy52YXJpYWJsZXNEZWNsYXJhdGlvbiAhPT0gbnVsbCkge1xuICAgICAgdGhpcy52YXJpYWJsZXNEZWNsYXJhdGlvbi5ldmFsdWF0ZShjb250ZXh0KTtcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiU3RlcFwiO1xuXG4gIHN0YXRpYyBmcm9tU3RlcE5vZGUoc3RlcE5vZGUsIGNvbnRleHQpIHtcbiAgICBjb25zdCB7IEFycmF5QXNzaWdubWVudCwgT2JqZWN0QXNzaWdtZW50LCBWYXJpYWJsZUFzc2lnbm1lbnRzIH0gPSBkb20sXG4gICAgICAgICAgc3RyaW5nID0gc3RyaW5nRnJvbU5vdGhpbmcoY29udGV4dCksXG4gICAgICAgICAgYXJyYXlBc3NpZ25tZW50ID0gQXJyYXlBc3NpZ25tZW50LmZyb21TdGVwTm9kZShzdGVwTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgb2JqZWN0QXNzaWdtZW50ID0gT2JqZWN0QXNzaWdtZW50LmZyb21TdGVwTm9kZShzdGVwTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgdmFyaWFibGVzRGVjbGFyYXRpb24gPSBWYXJpYWJsZUFzc2lnbm1lbnRzLmZyb21TdGVwTm9kZShzdGVwTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgc3RlcCA9IG5ldyBTdGVwKHN0cmluZywgYXJyYXlBc3NpZ25tZW50LCBvYmplY3RBc3NpZ21lbnQsIHZhcmlhYmxlc0RlY2xhcmF0aW9uKTtcblxuICAgIHJldHVybiBzdGVwO1xuICB9XG59KTtcblxuZnVuY3Rpb24gc3RyaW5nRnJvbU5vdGhpbmcoY29udGV4dCkge1xuICBjb25zdCBzdHJpbmcgPSBFTVBUWV9TVFJJTkc7XG5cbiAgcmV0dXJuIHN0cmluZztcbn0iXSwibmFtZXMiOlsiZG9tQXNzaWduZWQiLCJTdGVwIiwic3RyaW5nIiwiYXJyYXlBc3NpZ25tZW50Iiwib2JqZWN0QXNzaWdtZW50IiwidmFyaWFibGVzRGVjbGFyYXRpb24iLCJnZXRTdHJpbmciLCJnZXRBcnJheUFzc2lnbm1lbnQiLCJnZXRPYmplY3RBc3NpZ21lbnQiLCJnZXRWYXJpYWJsZXNEZWNsYXJhdGlvbiIsImV2YWx1YXRlIiwiY29udGV4dCIsImZyb21TdGVwTm9kZSIsInN0ZXBOb2RlIiwiQXJyYXlBc3NpZ25tZW50IiwiZG9tIiwiT2JqZWN0QXNzaWdtZW50IiwiVmFyaWFibGVBc3NpZ25tZW50cyIsInN0cmluZ0Zyb21Ob3RoaW5nIiwic3RlcCIsIm5hbWUiLCJFTVBUWV9TVFJJTkciXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQU9BOzs7ZUFBQTs7OzJEQUxnQjt5QkFHYTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRTdCLFdBQWVBLElBQUFBLGdCQUFXLHlCQUFDO2FBQU1DLEtBQ25CQyxNQUFNLEVBQUVDLGVBQWUsRUFBRUMsZUFBZSxFQUFFQyxvQkFBb0I7Z0NBRDNDSjtRQUU3QixJQUFJLENBQUNDLE1BQU0sR0FBR0E7UUFDZCxJQUFJLENBQUNDLGVBQWUsR0FBR0E7UUFDdkIsSUFBSSxDQUFDQyxlQUFlLEdBQUdBO1FBQ3ZCLElBQUksQ0FBQ0Msb0JBQW9CLEdBQUdBOzs7O1lBRzlCQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNKLE1BQU07WUFDcEI7OztZQUVBSyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNKLGVBQWU7WUFDN0I7OztZQUVBSyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNKLGVBQWU7WUFDN0I7OztZQUVBSyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNKLG9CQUFvQjtZQUNsQzs7O1lBRUFLLEtBQUFBO21CQUFBQSxTQUFBQSxTQUFTQyxPQUFPO2dCQUNkLElBQUksT0FBTztnQkFDVCxHQUFHO2dCQUNMLE9BQU8sSUFBSSxJQUFJLENBQUNSLGVBQWUsS0FBSyxNQUFNO29CQUN4QyxJQUFJLENBQUNBLGVBQWUsQ0FBQ08sUUFBUSxDQUFDQztnQkFDaEMsT0FBTyxJQUFJLElBQUksQ0FBQ1AsZUFBZSxLQUFLLE1BQU07b0JBQ3hDLElBQUksQ0FBQ0EsZUFBZSxDQUFDTSxRQUFRLENBQUNDO2dCQUNoQyxPQUFPLElBQUksSUFBSSxDQUFDTixvQkFBb0IsS0FBSyxNQUFNO29CQUM3QyxJQUFJLENBQUNBLG9CQUFvQixDQUFDSyxRQUFRLENBQUNDO2dCQUNyQztZQUNGOzs7O1lBSU9DLEtBQUFBO21CQUFQLFNBQU9BLGFBQWFDLFFBQVEsRUFBRUYsT0FBTztnQkFDbkMsSUFBUUcsa0JBQTBEQyxZQUFHLENBQTdERCxpQkFBaUJFLGtCQUF5Q0QsWUFBRyxDQUE1Q0MsaUJBQWlCQyxzQkFBd0JGLFlBQUcsQ0FBM0JFLHFCQUNwQ2YsU0FBU2dCLGtCQUFrQlAsVUFDM0JSLGtCQUFrQlcsZ0JBQWdCRixZQUFZLENBQUNDLFVBQVVGLFVBQ3pEUCxrQkFBa0JZLGdCQUFnQkosWUFBWSxDQUFDQyxVQUFVRixVQUN6RE4sdUJBQXVCWSxvQkFBb0JMLFlBQVksQ0FBQ0MsVUFBVUYsVUFDbEVRLE9BQU8sSUFBSWxCLEtBQUtDLFFBQVFDLGlCQUFpQkMsaUJBQWlCQztnQkFFaEUsT0FBT2M7WUFDVDs7OztLQVhBLHdCQUFPQyxRQUFPO0FBY2hCLFNBQVNGLGtCQUFrQlAsT0FBTztJQUNoQyxJQUFNVCxTQUFTbUIsdUJBQVk7SUFFM0IsT0FBT25CO0FBQ1QifQ==