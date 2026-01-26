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
var _elements = /*#__PURE__*/ _interop_require_wildcard(require("../elements"));
var _constants = require("../constants");
var _element = require("../utilities/element");
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
var _default = (0, _elements.define)((_Step = /*#__PURE__*/ function() {
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
    var Step = _elements.default.Step, string = stringFromNothing(context), arrayAssignment = (0, _element.arrayAssignmentFromStepNode)(stepNode, context), objectAssigment = (0, _element.objectAssignmentFromStepNode)(stepNode, context), variablesDeclaration = (0, _element.variableAssignmentsFromStepNode)(stepNode, context), step = new Step(string, arrayAssignment, objectAssigment, variablesDeclaration);
    return step;
}
function stringFromNothing(context) {
    var string = _constants.EMPTY_STRING;
    return string;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3N0ZXAuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBlbGVtZW50cyBmcm9tIFwiLi4vZWxlbWVudHNcIjtcblxuaW1wb3J0IHsgZGVmaW5lIH0gZnJvbSBcIi4uL2VsZW1lbnRzXCI7XG5pbXBvcnQgeyBFTVBUWV9TVFJJTkcgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBhcnJheUFzc2lnbm1lbnRGcm9tU3RlcE5vZGUsIG9iamVjdEFzc2lnbm1lbnRGcm9tU3RlcE5vZGUsIHZhcmlhYmxlQXNzaWdubWVudHNGcm9tU3RlcE5vZGUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2VsZW1lbnRcIjtcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lKGNsYXNzIFN0ZXAge1xuICBjb25zdHJ1Y3RvcihzdHJpbmcsIGFycmF5QXNzaWdubWVudCwgb2JqZWN0QXNzaWdtZW50LCB2YXJpYWJsZXNEZWNsYXJhdGlvbikge1xuICAgIHRoaXMuc3RyaW5nID0gc3RyaW5nO1xuICAgIHRoaXMuYXJyYXlBc3NpZ25tZW50ID0gYXJyYXlBc3NpZ25tZW50O1xuICAgIHRoaXMub2JqZWN0QXNzaWdtZW50ID0gb2JqZWN0QXNzaWdtZW50O1xuICAgIHRoaXMudmFyaWFibGVzRGVjbGFyYXRpb24gPSB2YXJpYWJsZXNEZWNsYXJhdGlvbjtcbiAgfVxuXG4gIGdldFN0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5zdHJpbmc7XG4gIH1cblxuICBnZXRBcnJheUFzc2lnbm1lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuYXJyYXlBc3NpZ25tZW50O1xuICB9XG5cbiAgZ2V0T2JqZWN0QXNzaWdtZW50KCkge1xuICAgIHJldHVybiB0aGlzLm9iamVjdEFzc2lnbWVudDtcbiAgfVxuXG4gIGdldFZhcmlhYmxlc0RlY2xhcmF0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLnZhcmlhYmxlc0RlY2xhcmF0aW9uO1xuICB9XG5cbiAgZXZhbHVhdGUoY29udGV4dCkge1xuICAgIGlmIChmYWxzZSkge1xuICAgICAgLy8vXG4gICAgfSBlbHNlIGlmICh0aGlzLmFycmF5QXNzaWdubWVudCAhPT0gbnVsbCkge1xuICAgICAgdGhpcy5hcnJheUFzc2lnbm1lbnQuZXZhbHVhdGUoY29udGV4dCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLm9iamVjdEFzc2lnbWVudCAhPT0gbnVsbCkge1xuICAgICAgdGhpcy5vYmplY3RBc3NpZ21lbnQuZXZhbHVhdGUoY29udGV4dCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLnZhcmlhYmxlc0RlY2xhcmF0aW9uICE9PSBudWxsKSB7XG4gICAgICB0aGlzLnZhcmlhYmxlc0RlY2xhcmF0aW9uLmV2YWx1YXRlKGNvbnRleHQpO1xuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJTdGVwXCI7XG5cbiAgc3RhdGljIGZyb21TdGVwTm9kZShzdGVwTm9kZSwgY29udGV4dCkge1xuICAgIGNvbnN0IHN0ZXAgPSBzdGVwRnJvbVN0ZXBOb2RlKHN0ZXBOb2RlLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBzdGVwO1xuICB9XG59KTtcblxuZnVuY3Rpb24gc3RlcEZyb21TdGVwTm9kZShzdGVwTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFN0ZXAgfSA9IGVsZW1lbnRzLFxuICAgICAgICBzdHJpbmcgPSBzdHJpbmdGcm9tTm90aGluZyhjb250ZXh0KSxcbiAgICAgICAgYXJyYXlBc3NpZ25tZW50ID0gYXJyYXlBc3NpZ25tZW50RnJvbVN0ZXBOb2RlKHN0ZXBOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgb2JqZWN0QXNzaWdtZW50ID0gb2JqZWN0QXNzaWdubWVudEZyb21TdGVwTm9kZShzdGVwTm9kZSwgY29udGV4dCksXG4gICAgICAgIHZhcmlhYmxlc0RlY2xhcmF0aW9uID0gdmFyaWFibGVBc3NpZ25tZW50c0Zyb21TdGVwTm9kZShzdGVwTm9kZSwgY29udGV4dCksXG4gICAgICAgIHN0ZXAgPSBuZXcgU3RlcChzdHJpbmcsIGFycmF5QXNzaWdubWVudCwgb2JqZWN0QXNzaWdtZW50LCB2YXJpYWJsZXNEZWNsYXJhdGlvbik7XG5cbiAgcmV0dXJuIHN0ZXA7XG59XG5cbmZ1bmN0aW9uIHN0cmluZ0Zyb21Ob3RoaW5nKGNvbnRleHQpIHtcbiAgY29uc3Qgc3RyaW5nID0gRU1QVFlfU1RSSU5HO1xuXG4gIHJldHVybiBzdHJpbmc7XG59Il0sIm5hbWVzIjpbImRlZmluZSIsIlN0ZXAiLCJzdHJpbmciLCJhcnJheUFzc2lnbm1lbnQiLCJvYmplY3RBc3NpZ21lbnQiLCJ2YXJpYWJsZXNEZWNsYXJhdGlvbiIsImdldFN0cmluZyIsImdldEFycmF5QXNzaWdubWVudCIsImdldE9iamVjdEFzc2lnbWVudCIsImdldFZhcmlhYmxlc0RlY2xhcmF0aW9uIiwiZXZhbHVhdGUiLCJjb250ZXh0IiwiZnJvbVN0ZXBOb2RlIiwic3RlcE5vZGUiLCJzdGVwIiwic3RlcEZyb21TdGVwTm9kZSIsIm5hbWUiLCJlbGVtZW50cyIsInN0cmluZ0Zyb21Ob3RoaW5nIiwiYXJyYXlBc3NpZ25tZW50RnJvbVN0ZXBOb2RlIiwib2JqZWN0QXNzaWdubWVudEZyb21TdGVwTm9kZSIsInZhcmlhYmxlQXNzaWdubWVudHNGcm9tU3RlcE5vZGUiLCJFTVBUWV9TVFJJTkciXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVFBOzs7ZUFBQTs7O2dFQU5xQjt5QkFHUTt1QkFDOEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUUzRyxXQUFlQSxJQUFBQSxnQkFBTSx5QkFBQzthQUFNQyxLQUNkQyxNQUFNLEVBQUVDLGVBQWUsRUFBRUMsZUFBZSxFQUFFQyxvQkFBb0I7Z0NBRGhESjtRQUV4QixJQUFJLENBQUNDLE1BQU0sR0FBR0E7UUFDZCxJQUFJLENBQUNDLGVBQWUsR0FBR0E7UUFDdkIsSUFBSSxDQUFDQyxlQUFlLEdBQUdBO1FBQ3ZCLElBQUksQ0FBQ0Msb0JBQW9CLEdBQUdBOzs7O1lBRzlCQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNKLE1BQU07WUFDcEI7OztZQUVBSyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNKLGVBQWU7WUFDN0I7OztZQUVBSyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNKLGVBQWU7WUFDN0I7OztZQUVBSyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNKLG9CQUFvQjtZQUNsQzs7O1lBRUFLLEtBQUFBO21CQUFBQSxTQUFBQSxTQUFTQyxPQUFPO2dCQUNkLElBQUksT0FBTztnQkFDVCxHQUFHO2dCQUNMLE9BQU8sSUFBSSxJQUFJLENBQUNSLGVBQWUsS0FBSyxNQUFNO29CQUN4QyxJQUFJLENBQUNBLGVBQWUsQ0FBQ08sUUFBUSxDQUFDQztnQkFDaEMsT0FBTyxJQUFJLElBQUksQ0FBQ1AsZUFBZSxLQUFLLE1BQU07b0JBQ3hDLElBQUksQ0FBQ0EsZUFBZSxDQUFDTSxRQUFRLENBQUNDO2dCQUNoQyxPQUFPLElBQUksSUFBSSxDQUFDTixvQkFBb0IsS0FBSyxNQUFNO29CQUM3QyxJQUFJLENBQUNBLG9CQUFvQixDQUFDSyxRQUFRLENBQUNDO2dCQUNyQztZQUNGOzs7O1lBSU9DLEtBQUFBO21CQUFQLFNBQU9BLGFBQWFDLFFBQVEsRUFBRUYsT0FBTztnQkFDbkMsSUFBTUcsT0FBT0MsaUJBQWlCRixVQUFVRjtnQkFFeEMsT0FBT0c7WUFDVDs7OztLQU5BLHdCQUFPRSxRQUFPO0FBU2hCLFNBQVNELGlCQUFpQkYsUUFBUSxFQUFFRixPQUFPO0lBQ3pDLElBQU0sQUFBRVYsT0FBU2dCLGlCQUFRLENBQWpCaEIsTUFDRkMsU0FBU2dCLGtCQUFrQlAsVUFDM0JSLGtCQUFrQmdCLElBQUFBLG9DQUEyQixFQUFDTixVQUFVRixVQUN4RFAsa0JBQWtCZ0IsSUFBQUEscUNBQTRCLEVBQUNQLFVBQVVGLFVBQ3pETix1QkFBdUJnQixJQUFBQSx3Q0FBK0IsRUFBQ1IsVUFBVUYsVUFDakVHLE9BQU8sSUFBSWIsS0FBS0MsUUFBUUMsaUJBQWlCQyxpQkFBaUJDO0lBRWhFLE9BQU9TO0FBQ1Q7QUFFQSxTQUFTSSxrQkFBa0JQLE9BQU87SUFDaEMsSUFBTVQsU0FBU29CLHVCQUFZO0lBRTNCLE9BQU9wQjtBQUNUIn0=