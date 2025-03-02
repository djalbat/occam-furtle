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
                this.variable.assign(value, context);
                context.debug("...evaluated the '".concat(variableAssignmentString, "' variable assignment."));
                return value;
            }
        }
    ], [
        {
            key: "fromTypeAndVariableAssignmentNode",
            value: function fromTypeAndVariableAssignmentNode(type, variableAssignmentNode, context) {
                var variableAssignment = variableAssignmentFromTypeAndVariableAssignmentNode(type, variableAssignmentNode, context);
                return variableAssignment;
            }
        }
    ]);
    return VariableAssignment;
}(), _define_property(_VariableAssignment, "name", "VariableAssignment"), _VariableAssignment));
function variableAssignmentFromTypeAndVariableAssignmentNode(type, variableAssignmentNode, context) {
    var Variable = _dom.default.Variable, Value = _dom.default.Value, VariableAssignment = _dom.default.VariableAssignment, value = Value.fromVariableAssignmentNode(variableAssignmentNode, context), variable = Variable.fromTypeAndVariableAssignmentNode(type, variableAssignmentNode, context), string = stringFromValueAndVariable(value, variable, context), assignment = new VariableAssignment(string, variable, value);
    return assignment;
}
function stringFromValueAndVariable(value, variable, context) {
    var variableString = variable.getString(), valueString = value.asString(context), string = "".concat(variableString, " = ").concat(valueString, ";");
    return string;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kb20vYXNzaWdubWVudC92YXJpYWJsZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IGRvbSBmcm9tIFwiLi4vLi4vZG9tXCI7XG5cbmltcG9ydCB7IGRvbUFzc2lnbmVkIH0gZnJvbSBcIi4uLy4uL2RvbVwiO1xuXG5leHBvcnQgZGVmYXVsdCBkb21Bc3NpZ25lZChjbGFzcyBWYXJpYWJsZUFzc2lnbm1lbnQge1xuICBjb25zdHJ1Y3RvcihzdHJpbmcsIHZhcmlhYmxlLCB2YWx1ZSkge1xuICAgIHRoaXMuc3RyaW5nID0gc3RyaW5nO1xuICAgIHRoaXMudmFyaWFibGUgPSB2YXJpYWJsZTtcbiAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gIH1cblxuICBnZXRTdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RyaW5nO1xuICB9XG5cbiAgZ2V0VmFyaWFibGUoKSB7XG4gICAgcmV0dXJuIHRoaXMudmFyaWFibGU7XG4gIH1cblxuICBnZXRWYWx1ZSgpIHtcbiAgICByZXR1cm4gdGhpcy52YWx1ZTtcbiAgfVxuXG4gIGV2YWx1YXRlKGNvbnRleHQpIHtcbiAgICBsZXQgdmFsdWU7XG5cbiAgICBjb25zdCB2YXJpYWJsZUFzc2lnbm1lbnRTdHJpbmcgPSB0aGlzLnN0cmluZzsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBFdmFsdWF0aW5nIHRoZSAnJHt2YXJpYWJsZUFzc2lnbm1lbnRTdHJpbmd9JyB2YXJpYWJsZSBhc3NpZ25tZW50Li4uYCk7XG5cbiAgICB2YWx1ZSA9IHRoaXMudmFsdWUuZXZhbHVhdGUoY29udGV4dCk7XG5cbiAgICB0aGlzLnZhcmlhYmxlLmFzc2lnbih2YWx1ZSwgY29udGV4dCk7XG5cbiAgICBjb250ZXh0LmRlYnVnKGAuLi5ldmFsdWF0ZWQgdGhlICcke3ZhcmlhYmxlQXNzaWdubWVudFN0cmluZ30nIHZhcmlhYmxlIGFzc2lnbm1lbnQuYCk7XG5cbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiVmFyaWFibGVBc3NpZ25tZW50XCI7XG5cbiAgc3RhdGljIGZyb21UeXBlQW5kVmFyaWFibGVBc3NpZ25tZW50Tm9kZSh0eXBlLCB2YXJpYWJsZUFzc2lnbm1lbnROb2RlLCBjb250ZXh0KSB7XG4gICAgY29uc3QgdmFyaWFibGVBc3NpZ25tZW50ID0gdmFyaWFibGVBc3NpZ25tZW50RnJvbVR5cGVBbmRWYXJpYWJsZUFzc2lnbm1lbnROb2RlKHR5cGUsIHZhcmlhYmxlQXNzaWdubWVudE5vZGUsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIHZhcmlhYmxlQXNzaWdubWVudDtcbiAgfVxufSk7XG5cbmZ1bmN0aW9uIHZhcmlhYmxlQXNzaWdubWVudEZyb21UeXBlQW5kVmFyaWFibGVBc3NpZ25tZW50Tm9kZSh0eXBlLCB2YXJpYWJsZUFzc2lnbm1lbnROb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgVmFyaWFibGUsIFZhbHVlLCBWYXJpYWJsZUFzc2lnbm1lbnQgfSA9IGRvbSxcbiAgICAgICAgdmFsdWUgPSBWYWx1ZS5mcm9tVmFyaWFibGVBc3NpZ25tZW50Tm9kZSh2YXJpYWJsZUFzc2lnbm1lbnROb2RlLCBjb250ZXh0KSxcbiAgICAgICAgdmFyaWFibGUgPSBWYXJpYWJsZS5mcm9tVHlwZUFuZFZhcmlhYmxlQXNzaWdubWVudE5vZGUodHlwZSwgdmFyaWFibGVBc3NpZ25tZW50Tm9kZSwgY29udGV4dCksXG4gICAgICAgIHN0cmluZyA9IHN0cmluZ0Zyb21WYWx1ZUFuZFZhcmlhYmxlKHZhbHVlLCB2YXJpYWJsZSwgY29udGV4dCksXG4gICAgICAgIGFzc2lnbm1lbnQgPSBuZXcgVmFyaWFibGVBc3NpZ25tZW50KHN0cmluZywgdmFyaWFibGUsIHZhbHVlKTtcblxuICByZXR1cm4gYXNzaWdubWVudDtcbn1cblxuZnVuY3Rpb24gc3RyaW5nRnJvbVZhbHVlQW5kVmFyaWFibGUodmFsdWUsIHZhcmlhYmxlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHZhcmlhYmxlU3RyaW5nID0gdmFyaWFibGUuZ2V0U3RyaW5nKCksXG4gICAgICAgIHZhbHVlU3RyaW5nID0gdmFsdWUuYXNTdHJpbmcoY29udGV4dCksXG4gICAgICAgIHN0cmluZyA9IGAke3ZhcmlhYmxlU3RyaW5nfSA9ICR7dmFsdWVTdHJpbmd9O2A7XG5cbiAgcmV0dXJuIHN0cmluZztcbn1cbiJdLCJuYW1lcyI6WyJkb21Bc3NpZ25lZCIsIlZhcmlhYmxlQXNzaWdubWVudCIsInN0cmluZyIsInZhcmlhYmxlIiwidmFsdWUiLCJnZXRTdHJpbmciLCJnZXRWYXJpYWJsZSIsImdldFZhbHVlIiwiZXZhbHVhdGUiLCJjb250ZXh0IiwidmFyaWFibGVBc3NpZ25tZW50U3RyaW5nIiwidHJhY2UiLCJhc3NpZ24iLCJkZWJ1ZyIsImZyb21UeXBlQW5kVmFyaWFibGVBc3NpZ25tZW50Tm9kZSIsInR5cGUiLCJ2YXJpYWJsZUFzc2lnbm1lbnROb2RlIiwidmFyaWFibGVBc3NpZ25tZW50IiwidmFyaWFibGVBc3NpZ25tZW50RnJvbVR5cGVBbmRWYXJpYWJsZUFzc2lnbm1lbnROb2RlIiwibmFtZSIsIlZhcmlhYmxlIiwiZG9tIiwiVmFsdWUiLCJmcm9tVmFyaWFibGVBc3NpZ25tZW50Tm9kZSIsInN0cmluZ0Zyb21WYWx1ZUFuZFZhcmlhYmxlIiwiYXNzaWdubWVudCIsInZhcmlhYmxlU3RyaW5nIiwidmFsdWVTdHJpbmciLCJhc1N0cmluZyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBTUE7OztlQUFBOzs7MkRBSmdCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFJaEIsV0FBZUEsSUFBQUEsZ0JBQVcsdUNBQUM7YUFBTUMsbUJBQ25CQyxNQUFNLEVBQUVDLFFBQVEsRUFBRUMsS0FBSztnQ0FESkg7UUFFN0IsSUFBSSxDQUFDQyxNQUFNLEdBQUdBO1FBQ2QsSUFBSSxDQUFDQyxRQUFRLEdBQUdBO1FBQ2hCLElBQUksQ0FBQ0MsS0FBSyxHQUFHQTs7OztZQUdmQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNILE1BQU07WUFDcEI7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNILFFBQVE7WUFDdEI7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNILEtBQUs7WUFDbkI7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUEsU0FBU0MsT0FBTztnQkFDZCxJQUFJTDtnQkFFSixJQUFNTSwyQkFBMkIsSUFBSSxDQUFDUixNQUFNLEVBQUUsR0FBRztnQkFFakRPLFFBQVFFLEtBQUssQ0FBQyxBQUFDLG1CQUEyQyxPQUF6QkQsMEJBQXlCO2dCQUUxRE4sUUFBUSxJQUFJLENBQUNBLEtBQUssQ0FBQ0ksUUFBUSxDQUFDQztnQkFFNUIsSUFBSSxDQUFDTixRQUFRLENBQUNTLE1BQU0sQ0FBQ1IsT0FBT0s7Z0JBRTVCQSxRQUFRSSxLQUFLLENBQUMsQUFBQyxxQkFBNkMsT0FBekJILDBCQUF5QjtnQkFFNUQsT0FBT047WUFDVDs7OztZQUlPVSxLQUFBQTttQkFBUCxTQUFPQSxrQ0FBa0NDLElBQUksRUFBRUMsc0JBQXNCLEVBQUVQLE9BQU87Z0JBQzVFLElBQU1RLHFCQUFxQkMsb0RBQW9ESCxNQUFNQyx3QkFBd0JQO2dCQUU3RyxPQUFPUTtZQUNUOzs7O0tBTkEsc0NBQU9FLFFBQU87QUFTaEIsU0FBU0Qsb0RBQW9ESCxJQUFJLEVBQUVDLHNCQUFzQixFQUFFUCxPQUFPO0lBQ2hHLElBQVFXLFdBQXdDQyxZQUFHLENBQTNDRCxVQUFVRSxRQUE4QkQsWUFBRyxDQUFqQ0MsT0FBT3JCLHFCQUF1Qm9CLFlBQUcsQ0FBMUJwQixvQkFDbkJHLFFBQVFrQixNQUFNQywwQkFBMEIsQ0FBQ1Asd0JBQXdCUCxVQUNqRU4sV0FBV2lCLFNBQVNOLGlDQUFpQyxDQUFDQyxNQUFNQyx3QkFBd0JQLFVBQ3BGUCxTQUFTc0IsMkJBQTJCcEIsT0FBT0QsVUFBVU0sVUFDckRnQixhQUFhLElBQUl4QixtQkFBbUJDLFFBQVFDLFVBQVVDO0lBRTVELE9BQU9xQjtBQUNUO0FBRUEsU0FBU0QsMkJBQTJCcEIsS0FBSyxFQUFFRCxRQUFRLEVBQUVNLE9BQU87SUFDMUQsSUFBTWlCLGlCQUFpQnZCLFNBQVNFLFNBQVMsSUFDbkNzQixjQUFjdkIsTUFBTXdCLFFBQVEsQ0FBQ25CLFVBQzdCUCxTQUFTLEFBQUMsR0FBc0J5QixPQUFwQkQsZ0JBQWUsT0FBaUIsT0FBWkMsYUFBWTtJQUVsRCxPQUFPekI7QUFDVCJ9