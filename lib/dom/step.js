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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb20vc3RlcC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IGRvbSBmcm9tIFwiLi4vZG9tXCI7XG5cbmltcG9ydCB7IGRvbUFzc2lnbmVkIH0gZnJvbSBcIi4uL2RvbVwiO1xuXG5leHBvcnQgZGVmYXVsdCBkb21Bc3NpZ25lZChjbGFzcyBTdGVwIHtcbiAgY29uc3RydWN0b3Ioc3RyaW5nLCBhcnJheUFzc2lnbm1lbnQsIG9iamVjdEFzc2lnbWVudCwgY29uZGl0aW9uYWxCbG9ja3MsIHZhcmlhYmxlc0RlY2xhcmF0aW9uKSB7XG4gICAgdGhpcy5zdHJpbmcgPSBzdHJpbmc7XG4gICAgdGhpcy5hcnJheUFzc2lnbm1lbnQgPSBhcnJheUFzc2lnbm1lbnQ7XG4gICAgdGhpcy5vYmplY3RBc3NpZ21lbnQgPSBvYmplY3RBc3NpZ21lbnQ7XG4gICAgdGhpcy5jb25kaXRpb25hbEJsb2NrcyA9IGNvbmRpdGlvbmFsQmxvY2tzO1xuICAgIHRoaXMudmFyaWFibGVzRGVjbGFyYXRpb24gPSB2YXJpYWJsZXNEZWNsYXJhdGlvbjtcbiAgfVxuXG4gIGdldFN0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5zdHJpbmc7XG4gIH1cblxuICBnZXRBcnJheUFzc2lnbm1lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuYXJyYXlBc3NpZ25tZW50O1xuICB9XG5cbiAgZ2V0T2JqZWN0QXNzaWdtZW50KCkge1xuICAgIHJldHVybiB0aGlzLm9iamVjdEFzc2lnbWVudDtcbiAgfVxuXG4gIGdldENvbmRpdGlvbmFsQmxvY2tzKCkge1xuICAgIHJldHVybiB0aGlzLmNvbmRpdGlvbmFsQmxvY2tzO1xuICB9XG5cbiAgZ2V0VmFyaWFibGVzRGVjbGFyYXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMudmFyaWFibGVzRGVjbGFyYXRpb247XG4gIH1cblxuICBldmFsdWF0ZShjb250ZXh0KSB7XG4gICAgaWYgKGZhbHNlKSB7XG4gICAgICAvLy9cbiAgICB9IGVsc2UgaWYgKHRoaXMuYXJyYXlBc3NpZ25tZW50ICE9PSBudWxsKSB7XG4gICAgICB0aGlzLmFycmF5QXNzaWdubWVudC5ldmFsdWF0ZShjb250ZXh0KTtcbiAgICB9IGVsc2UgaWYgKHRoaXMub2JqZWN0QXNzaWdtZW50ICE9PSBudWxsKSB7XG4gICAgICB0aGlzLm9iamVjdEFzc2lnbWVudC5ldmFsdWF0ZShjb250ZXh0KTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuY29uZGl0aW9uYWxCbG9ja3MgIT09IG51bGwpIHtcbiAgICAgIHRoaXMuY29uZGl0aW9uYWxCbG9ja3MuZXZhbHVhdGUoY29udGV4dCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLnZhcmlhYmxlc0RlY2xhcmF0aW9uICE9PSBudWxsKSB7XG4gICAgICB0aGlzLnZhcmlhYmxlc0RlY2xhcmF0aW9uLmV2YWx1YXRlKGNvbnRleHQpO1xuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJTdGVwXCI7XG5cbiAgc3RhdGljIGZyb21TdGVwTm9kZShzdGVwTm9kZSwgY29udGV4dCkge1xuICAgIGNvbnN0IHsgQXJyYXlBc3NpZ25tZW50LCBPYmplY3RBc3NpZ21lbnQsIENvbmRpdGlvbmFsQmxvY2tzLCBWYXJpYWJsZXNEZWNsYXJhdGlvbiB9ID0gZG9tLFxuICAgICAgICAgIG5vZGUgPSBzdGVwTm9kZSwgIC8vL1xuICAgICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICAgIGFycmF5QXNzaWdubWVudCA9IEFycmF5QXNzaWdubWVudC5mcm9tU3RlcE5vZGUoc3RlcE5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgIG9iamVjdEFzc2lnbWVudCA9IE9iamVjdEFzc2lnbWVudC5mcm9tU3RlcE5vZGUoc3RlcE5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgIGNvbmRpdGlvbmFsQmxvY2tzID0gQ29uZGl0aW9uYWxCbG9ja3MuZnJvbVN0ZXBOb2RlKHN0ZXBOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgICB2YXJpYWJsZXNEZWNsYXJhdGlvbiA9IFZhcmlhYmxlc0RlY2xhcmF0aW9uLmZyb21TdGVwTm9kZShzdGVwTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgc3RlcCA9IG5ldyBTdGVwKHN0cmluZywgYXJyYXlBc3NpZ25tZW50LCBvYmplY3RBc3NpZ21lbnQsIGNvbmRpdGlvbmFsQmxvY2tzLCB2YXJpYWJsZXNEZWNsYXJhdGlvbik7XG5cbiAgICByZXR1cm4gc3RlcDtcbiAgfVxufSk7XG4iXSwibmFtZXMiOlsiZG9tQXNzaWduZWQiLCJTdGVwIiwic3RyaW5nIiwiYXJyYXlBc3NpZ25tZW50Iiwib2JqZWN0QXNzaWdtZW50IiwiY29uZGl0aW9uYWxCbG9ja3MiLCJ2YXJpYWJsZXNEZWNsYXJhdGlvbiIsImdldFN0cmluZyIsImdldEFycmF5QXNzaWdubWVudCIsImdldE9iamVjdEFzc2lnbWVudCIsImdldENvbmRpdGlvbmFsQmxvY2tzIiwiZ2V0VmFyaWFibGVzRGVjbGFyYXRpb24iLCJldmFsdWF0ZSIsImNvbnRleHQiLCJmcm9tU3RlcE5vZGUiLCJzdGVwTm9kZSIsIkFycmF5QXNzaWdubWVudCIsImRvbSIsIk9iamVjdEFzc2lnbWVudCIsIkNvbmRpdGlvbmFsQmxvY2tzIiwiVmFyaWFibGVzRGVjbGFyYXRpb24iLCJub2RlIiwibm9kZUFzU3RyaW5nIiwic3RlcCIsIm5hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQU1BOzs7ZUFBQTs7OzJEQUpnQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBSWhCLFdBQWVBLElBQUFBLGdCQUFXLHlCQUFDO2FBQU1DLEtBQ25CQyxNQUFNLEVBQUVDLGVBQWUsRUFBRUMsZUFBZSxFQUFFQyxpQkFBaUIsRUFBRUMsb0JBQW9CO2dDQUQ5REw7UUFFN0IsSUFBSSxDQUFDQyxNQUFNLEdBQUdBO1FBQ2QsSUFBSSxDQUFDQyxlQUFlLEdBQUdBO1FBQ3ZCLElBQUksQ0FBQ0MsZUFBZSxHQUFHQTtRQUN2QixJQUFJLENBQUNDLGlCQUFpQixHQUFHQTtRQUN6QixJQUFJLENBQUNDLG9CQUFvQixHQUFHQTs7OztZQUc5QkMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDTCxNQUFNO1lBQ3BCOzs7WUFFQU0sS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDTCxlQUFlO1lBQzdCOzs7WUFFQU0sS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDTCxlQUFlO1lBQzdCOzs7WUFFQU0sS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDTCxpQkFBaUI7WUFDL0I7OztZQUVBTSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNMLG9CQUFvQjtZQUNsQzs7O1lBRUFNLEtBQUFBO21CQUFBQSxTQUFBQSxTQUFTQyxPQUFPO2dCQUNkLElBQUksT0FBTztnQkFDVCxHQUFHO2dCQUNMLE9BQU8sSUFBSSxJQUFJLENBQUNWLGVBQWUsS0FBSyxNQUFNO29CQUN4QyxJQUFJLENBQUNBLGVBQWUsQ0FBQ1MsUUFBUSxDQUFDQztnQkFDaEMsT0FBTyxJQUFJLElBQUksQ0FBQ1QsZUFBZSxLQUFLLE1BQU07b0JBQ3hDLElBQUksQ0FBQ0EsZUFBZSxDQUFDUSxRQUFRLENBQUNDO2dCQUNoQyxPQUFPLElBQUksSUFBSSxDQUFDUixpQkFBaUIsS0FBSyxNQUFNO29CQUMxQyxJQUFJLENBQUNBLGlCQUFpQixDQUFDTyxRQUFRLENBQUNDO2dCQUNsQyxPQUFPLElBQUksSUFBSSxDQUFDUCxvQkFBb0IsS0FBSyxNQUFNO29CQUM3QyxJQUFJLENBQUNBLG9CQUFvQixDQUFDTSxRQUFRLENBQUNDO2dCQUNyQztZQUNGOzs7O1lBSU9DLEtBQUFBO21CQUFQLFNBQU9BLGFBQWFDLFFBQVEsRUFBRUYsT0FBTztnQkFDbkMsSUFBUUcsa0JBQThFQyxZQUFHLENBQWpGRCxpQkFBaUJFLGtCQUE2REQsWUFBRyxDQUFoRUMsaUJBQWlCQyxvQkFBNENGLFlBQUcsQ0FBL0NFLG1CQUFtQkMsdUJBQXlCSCxZQUFHLENBQTVCRyxzQkFDdkRDLE9BQU9OLFVBQ1BiLFNBQVNXLFFBQVFTLFlBQVksQ0FBQ0QsT0FDOUJsQixrQkFBa0JhLGdCQUFnQkYsWUFBWSxDQUFDQyxVQUFVRixVQUN6RFQsa0JBQWtCYyxnQkFBZ0JKLFlBQVksQ0FBQ0MsVUFBVUYsVUFDekRSLG9CQUFvQmMsa0JBQWtCTCxZQUFZLENBQUNDLFVBQVVGLFVBQzdEUCx1QkFBdUJjLHFCQUFxQk4sWUFBWSxDQUFDQyxVQUFVRixVQUNuRVUsT0FBTyxJQUFJdEIsS0FBS0MsUUFBUUMsaUJBQWlCQyxpQkFBaUJDLG1CQUFtQkM7Z0JBRW5GLE9BQU9pQjtZQUNUOzs7O0tBYkEsd0JBQU9DLFFBQU8ifQ==