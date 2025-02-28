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
var _dom = /*#__PURE__*/ _interop_require_wildcard(require("../../dom"));
var _exception = /*#__PURE__*/ _interop_require_default(require("../../exception"));
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
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
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
var _VariableAssignment;
var _default = (0, _dom.domAssigned)((_VariableAssignment = /*#__PURE__*/ function() {
    function VariableAssignment(string, variable, value) {
        _class_call_check(this, VariableAssignment);
        this.string = string;
        this.variable = variable;
        this.value = value;
    }
    _create_class(VariableAssignment, [
        {
            key: "getString",
            value: function getString() {
                return this.string;
            }
        },
        {
            key: "getVariable",
            value: function getVariable() {
                return this.variable;
            }
        },
        {
            key: "getValue",
            value: function getValue() {
                return this.value;
            }
        },
        {
            key: "evaluate",
            value: function evaluate(context) {
                var value;
                var variableAssignmentString = this.string; ///
                context.trace("Evaluating the '".concat(variableAssignmentString, "' variable assignment..."));
                value = this.value.evaluate(context);
                debugger;
                if (value === null) {
                    var variableAssignmentString1 = this.string, message = "The '".concat(variableAssignmentString1, "' variable assignment cannot be evaluated."), exception = _exception.default.fromMessage(message);
                    throw exception;
                }
                context.debug("...evaluated the '".concat(variableAssignmentString, "' variable assignment."));
                return value;
            }
        }
    ], [
        {
            key: "fromTypeAndVariableAssignmentNode",
            value: function fromTypeAndVariableAssignmentNode(type, variableAssignmentNode, context) {
                var variableAssignment = variableAssignmentFromTypeAndAssignmentNode(type, variableAssignmentNode, context);
                return variableAssignment;
            }
        }
    ]);
    return VariableAssignment;
}(), _define_property(_VariableAssignment, "name", "VariableAssignment"), _VariableAssignment));
function variableAssignmentFromTypeAndAssignmentNode(type, variableAssignmentNode, context) {
    var Variable = _dom.default.Variable, Value = _dom.default.Value, VariableAssignment = _dom.default.VariableAssignment, node = variableAssignmentNode, string = context.nodeAsString(node), value = Value.fromVariableAssignmentNode(variableAssignmentNode, context), variable = Variable.fromTypeAndVariableAssignmentNode(type, variableAssignmentNode, context), assignment = new VariableAssignment(string, variable, value);
    return assignment;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kb20vYXNzaWdubWVudC92YXJpYWJsZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IGRvbSBmcm9tIFwiLi4vLi4vZG9tXCI7XG5pbXBvcnQgRXhjZXB0aW9uIGZyb20gXCIuLi8uLi9leGNlcHRpb25cIjtcblxuaW1wb3J0IHsgZG9tQXNzaWduZWQgfSBmcm9tIFwiLi4vLi4vZG9tXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGRvbUFzc2lnbmVkKGNsYXNzIFZhcmlhYmxlQXNzaWdubWVudCB7XG4gIGNvbnN0cnVjdG9yKHN0cmluZywgdmFyaWFibGUsIHZhbHVlKSB7XG4gICAgdGhpcy5zdHJpbmcgPSBzdHJpbmc7XG4gICAgdGhpcy52YXJpYWJsZSA9IHZhcmlhYmxlO1xuICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgfVxuXG4gIGdldFN0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5zdHJpbmc7XG4gIH1cblxuICBnZXRWYXJpYWJsZSgpIHtcbiAgICByZXR1cm4gdGhpcy52YXJpYWJsZTtcbiAgfVxuXG4gIGdldFZhbHVlKCkge1xuICAgIHJldHVybiB0aGlzLnZhbHVlO1xuICB9XG5cbiAgZXZhbHVhdGUoY29udGV4dCkge1xuICAgIGxldCB2YWx1ZTtcblxuICAgIGNvbnN0IHZhcmlhYmxlQXNzaWdubWVudFN0cmluZyA9IHRoaXMuc3RyaW5nOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYEV2YWx1YXRpbmcgdGhlICcke3ZhcmlhYmxlQXNzaWdubWVudFN0cmluZ30nIHZhcmlhYmxlIGFzc2lnbm1lbnQuLi5gKTtcblxuICAgIHZhbHVlID0gdGhpcy52YWx1ZS5ldmFsdWF0ZShjb250ZXh0KTtcblxuICAgIGRlYnVnZ2VyXG5cbiAgICBpZiAodmFsdWUgPT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHZhcmlhYmxlQXNzaWdubWVudFN0cmluZyA9IHRoaXMuc3RyaW5nLCAvLy9cbiAgICAgICAgICAgIG1lc3NhZ2UgPSBgVGhlICcke3ZhcmlhYmxlQXNzaWdubWVudFN0cmluZ30nIHZhcmlhYmxlIGFzc2lnbm1lbnQgY2Fubm90IGJlIGV2YWx1YXRlZC5gLFxuICAgICAgICAgICAgZXhjZXB0aW9uID0gRXhjZXB0aW9uLmZyb21NZXNzYWdlKG1lc3NhZ2UpO1xuXG4gICAgICB0aHJvdyBleGNlcHRpb247XG4gICAgfVxuXG4gICAgY29udGV4dC5kZWJ1ZyhgLi4uZXZhbHVhdGVkIHRoZSAnJHt2YXJpYWJsZUFzc2lnbm1lbnRTdHJpbmd9JyB2YXJpYWJsZSBhc3NpZ25tZW50LmApO1xuXG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIlZhcmlhYmxlQXNzaWdubWVudFwiO1xuXG4gIHN0YXRpYyBmcm9tVHlwZUFuZFZhcmlhYmxlQXNzaWdubWVudE5vZGUodHlwZSwgdmFyaWFibGVBc3NpZ25tZW50Tm9kZSwgY29udGV4dCkge1xuICAgIGNvbnN0IHZhcmlhYmxlQXNzaWdubWVudCA9IHZhcmlhYmxlQXNzaWdubWVudEZyb21UeXBlQW5kQXNzaWdubWVudE5vZGUodHlwZSwgdmFyaWFibGVBc3NpZ25tZW50Tm9kZSwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gdmFyaWFibGVBc3NpZ25tZW50O1xuICB9XG59KTtcblxuZnVuY3Rpb24gdmFyaWFibGVBc3NpZ25tZW50RnJvbVR5cGVBbmRBc3NpZ25tZW50Tm9kZSh0eXBlLCB2YXJpYWJsZUFzc2lnbm1lbnROb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgVmFyaWFibGUsIFZhbHVlLCBWYXJpYWJsZUFzc2lnbm1lbnQgfSA9IGRvbSxcbiAgICAgICAgbm9kZSA9IHZhcmlhYmxlQXNzaWdubWVudE5vZGUsIC8vL1xuICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgdmFsdWUgPSBWYWx1ZS5mcm9tVmFyaWFibGVBc3NpZ25tZW50Tm9kZSh2YXJpYWJsZUFzc2lnbm1lbnROb2RlLCBjb250ZXh0KSxcbiAgICAgICAgdmFyaWFibGUgPSBWYXJpYWJsZS5mcm9tVHlwZUFuZFZhcmlhYmxlQXNzaWdubWVudE5vZGUodHlwZSwgdmFyaWFibGVBc3NpZ25tZW50Tm9kZSwgY29udGV4dCksXG4gICAgICAgIGFzc2lnbm1lbnQgPSBuZXcgVmFyaWFibGVBc3NpZ25tZW50KHN0cmluZywgdmFyaWFibGUsIHZhbHVlKTtcblxuICByZXR1cm4gYXNzaWdubWVudDtcbn1cbiJdLCJuYW1lcyI6WyJkb21Bc3NpZ25lZCIsIlZhcmlhYmxlQXNzaWdubWVudCIsInN0cmluZyIsInZhcmlhYmxlIiwidmFsdWUiLCJnZXRTdHJpbmciLCJnZXRWYXJpYWJsZSIsImdldFZhbHVlIiwiZXZhbHVhdGUiLCJjb250ZXh0IiwidmFyaWFibGVBc3NpZ25tZW50U3RyaW5nIiwidHJhY2UiLCJtZXNzYWdlIiwiZXhjZXB0aW9uIiwiRXhjZXB0aW9uIiwiZnJvbU1lc3NhZ2UiLCJkZWJ1ZyIsImZyb21UeXBlQW5kVmFyaWFibGVBc3NpZ25tZW50Tm9kZSIsInR5cGUiLCJ2YXJpYWJsZUFzc2lnbm1lbnROb2RlIiwidmFyaWFibGVBc3NpZ25tZW50IiwidmFyaWFibGVBc3NpZ25tZW50RnJvbVR5cGVBbmRBc3NpZ25tZW50Tm9kZSIsIm5hbWUiLCJWYXJpYWJsZSIsImRvbSIsIlZhbHVlIiwibm9kZSIsIm5vZGVBc1N0cmluZyIsImZyb21WYXJpYWJsZUFzc2lnbm1lbnROb2RlIiwiYXNzaWdubWVudCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBT0E7OztlQUFBOzs7MkRBTGdCO2dFQUNNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUl0QixXQUFlQSxJQUFBQSxnQkFBVyx1Q0FBQzthQUFNQyxtQkFDbkJDLE1BQU0sRUFBRUMsUUFBUSxFQUFFQyxLQUFLO2dDQURKSDtRQUU3QixJQUFJLENBQUNDLE1BQU0sR0FBR0E7UUFDZCxJQUFJLENBQUNDLFFBQVEsR0FBR0E7UUFDaEIsSUFBSSxDQUFDQyxLQUFLLEdBQUdBOzs7O1lBR2ZDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0gsTUFBTTtZQUNwQjs7O1lBRUFJLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0gsUUFBUTtZQUN0Qjs7O1lBRUFJLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0gsS0FBSztZQUNuQjs7O1lBRUFJLEtBQUFBO21CQUFBQSxTQUFBQSxTQUFTQyxPQUFPO2dCQUNkLElBQUlMO2dCQUVKLElBQU1NLDJCQUEyQixJQUFJLENBQUNSLE1BQU0sRUFBRSxHQUFHO2dCQUVqRE8sUUFBUUUsS0FBSyxDQUFDLEFBQUMsbUJBQTJDLE9BQXpCRCwwQkFBeUI7Z0JBRTFETixRQUFRLElBQUksQ0FBQ0EsS0FBSyxDQUFDSSxRQUFRLENBQUNDO2dCQUU1QixRQUFRO2dCQUVSLElBQUlMLFVBQVUsTUFBTTtvQkFDbEIsSUFBTU0sNEJBQTJCLElBQUksQ0FBQ1IsTUFBTSxFQUN0Q1UsVUFBVSxBQUFDLFFBQWdDLE9BQXpCRiwyQkFBeUIsK0NBQzNDRyxZQUFZQyxrQkFBUyxDQUFDQyxXQUFXLENBQUNIO29CQUV4QyxNQUFNQztnQkFDUjtnQkFFQUosUUFBUU8sS0FBSyxDQUFDLEFBQUMscUJBQTZDLE9BQXpCTiwwQkFBeUI7Z0JBRTVELE9BQU9OO1lBQ1Q7Ozs7WUFJT2EsS0FBQUE7bUJBQVAsU0FBT0Esa0NBQWtDQyxJQUFJLEVBQUVDLHNCQUFzQixFQUFFVixPQUFPO2dCQUM1RSxJQUFNVyxxQkFBcUJDLDRDQUE0Q0gsTUFBTUMsd0JBQXdCVjtnQkFFckcsT0FBT1c7WUFDVDs7OztLQU5BLHNDQUFPRSxRQUFPO0FBU2hCLFNBQVNELDRDQUE0Q0gsSUFBSSxFQUFFQyxzQkFBc0IsRUFBRVYsT0FBTztJQUN4RixJQUFRYyxXQUF3Q0MsWUFBRyxDQUEzQ0QsVUFBVUUsUUFBOEJELFlBQUcsQ0FBakNDLE9BQU94QixxQkFBdUJ1QixZQUFHLENBQTFCdkIsb0JBQ25CeUIsT0FBT1Asd0JBQ1BqQixTQUFTTyxRQUFRa0IsWUFBWSxDQUFDRCxPQUM5QnRCLFFBQVFxQixNQUFNRywwQkFBMEIsQ0FBQ1Qsd0JBQXdCVixVQUNqRU4sV0FBV29CLFNBQVNOLGlDQUFpQyxDQUFDQyxNQUFNQyx3QkFBd0JWLFVBQ3BGb0IsYUFBYSxJQUFJNUIsbUJBQW1CQyxRQUFRQyxVQUFVQztJQUU1RCxPQUFPeUI7QUFDVCJ9