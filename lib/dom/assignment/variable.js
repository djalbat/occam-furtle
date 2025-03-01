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
    var Variable = _dom.default.Variable, Value = _dom.default.Value, VariableAssignment = _dom.default.VariableAssignment, node = variableAssignmentNode, string = context.nodeAsString(node), value = Value.fromVariableAssignmentNode(variableAssignmentNode, context), variable = Variable.fromTypeAndVariableAssignmentNode(type, variableAssignmentNode, context), assignment = new VariableAssignment(string, variable, value);
    return assignment;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kb20vYXNzaWdubWVudC92YXJpYWJsZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IGRvbSBmcm9tIFwiLi4vLi4vZG9tXCI7XG5cbmltcG9ydCB7IGRvbUFzc2lnbmVkIH0gZnJvbSBcIi4uLy4uL2RvbVwiO1xuXG5leHBvcnQgZGVmYXVsdCBkb21Bc3NpZ25lZChjbGFzcyBWYXJpYWJsZUFzc2lnbm1lbnQge1xuICBjb25zdHJ1Y3RvcihzdHJpbmcsIHZhcmlhYmxlLCB2YWx1ZSkge1xuICAgIHRoaXMuc3RyaW5nID0gc3RyaW5nO1xuICAgIHRoaXMudmFyaWFibGUgPSB2YXJpYWJsZTtcbiAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gIH1cblxuICBnZXRTdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RyaW5nO1xuICB9XG5cbiAgZ2V0VmFyaWFibGUoKSB7XG4gICAgcmV0dXJuIHRoaXMudmFyaWFibGU7XG4gIH1cblxuICBnZXRWYWx1ZSgpIHtcbiAgICByZXR1cm4gdGhpcy52YWx1ZTtcbiAgfVxuXG4gIGV2YWx1YXRlKGNvbnRleHQpIHtcbiAgICBsZXQgdmFsdWU7XG5cbiAgICBjb25zdCB2YXJpYWJsZUFzc2lnbm1lbnRTdHJpbmcgPSB0aGlzLnN0cmluZzsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBFdmFsdWF0aW5nIHRoZSAnJHt2YXJpYWJsZUFzc2lnbm1lbnRTdHJpbmd9JyB2YXJpYWJsZSBhc3NpZ25tZW50Li4uYCk7XG5cbiAgICB2YWx1ZSA9IHRoaXMudmFsdWUuZXZhbHVhdGUoY29udGV4dCk7XG5cbiAgICB0aGlzLnZhcmlhYmxlLmFzc2lnbih2YWx1ZSwgY29udGV4dCk7XG5cbiAgICBjb250ZXh0LmRlYnVnKGAuLi5ldmFsdWF0ZWQgdGhlICcke3ZhcmlhYmxlQXNzaWdubWVudFN0cmluZ30nIHZhcmlhYmxlIGFzc2lnbm1lbnQuYCk7XG5cbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiVmFyaWFibGVBc3NpZ25tZW50XCI7XG5cbiAgc3RhdGljIGZyb21UeXBlQW5kVmFyaWFibGVBc3NpZ25tZW50Tm9kZSh0eXBlLCB2YXJpYWJsZUFzc2lnbm1lbnROb2RlLCBjb250ZXh0KSB7XG4gICAgY29uc3QgdmFyaWFibGVBc3NpZ25tZW50ID0gdmFyaWFibGVBc3NpZ25tZW50RnJvbVR5cGVBbmRWYXJpYWJsZUFzc2lnbm1lbnROb2RlKHR5cGUsIHZhcmlhYmxlQXNzaWdubWVudE5vZGUsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIHZhcmlhYmxlQXNzaWdubWVudDtcbiAgfVxufSk7XG5cbmZ1bmN0aW9uIHZhcmlhYmxlQXNzaWdubWVudEZyb21UeXBlQW5kVmFyaWFibGVBc3NpZ25tZW50Tm9kZSh0eXBlLCB2YXJpYWJsZUFzc2lnbm1lbnROb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgVmFyaWFibGUsIFZhbHVlLCBWYXJpYWJsZUFzc2lnbm1lbnQgfSA9IGRvbSxcbiAgICAgICAgbm9kZSA9IHZhcmlhYmxlQXNzaWdubWVudE5vZGUsIC8vL1xuICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgdmFsdWUgPSBWYWx1ZS5mcm9tVmFyaWFibGVBc3NpZ25tZW50Tm9kZSh2YXJpYWJsZUFzc2lnbm1lbnROb2RlLCBjb250ZXh0KSxcbiAgICAgICAgdmFyaWFibGUgPSBWYXJpYWJsZS5mcm9tVHlwZUFuZFZhcmlhYmxlQXNzaWdubWVudE5vZGUodHlwZSwgdmFyaWFibGVBc3NpZ25tZW50Tm9kZSwgY29udGV4dCksXG4gICAgICAgIGFzc2lnbm1lbnQgPSBuZXcgVmFyaWFibGVBc3NpZ25tZW50KHN0cmluZywgdmFyaWFibGUsIHZhbHVlKTtcblxuICByZXR1cm4gYXNzaWdubWVudDtcbn1cbiJdLCJuYW1lcyI6WyJkb21Bc3NpZ25lZCIsIlZhcmlhYmxlQXNzaWdubWVudCIsInN0cmluZyIsInZhcmlhYmxlIiwidmFsdWUiLCJnZXRTdHJpbmciLCJnZXRWYXJpYWJsZSIsImdldFZhbHVlIiwiZXZhbHVhdGUiLCJjb250ZXh0IiwidmFyaWFibGVBc3NpZ25tZW50U3RyaW5nIiwidHJhY2UiLCJhc3NpZ24iLCJkZWJ1ZyIsImZyb21UeXBlQW5kVmFyaWFibGVBc3NpZ25tZW50Tm9kZSIsInR5cGUiLCJ2YXJpYWJsZUFzc2lnbm1lbnROb2RlIiwidmFyaWFibGVBc3NpZ25tZW50IiwidmFyaWFibGVBc3NpZ25tZW50RnJvbVR5cGVBbmRWYXJpYWJsZUFzc2lnbm1lbnROb2RlIiwibmFtZSIsIlZhcmlhYmxlIiwiZG9tIiwiVmFsdWUiLCJub2RlIiwibm9kZUFzU3RyaW5nIiwiZnJvbVZhcmlhYmxlQXNzaWdubWVudE5vZGUiLCJhc3NpZ25tZW50Il0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFNQTs7O2VBQUE7OzsyREFKZ0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUloQixXQUFlQSxJQUFBQSxnQkFBVyx1Q0FBQzthQUFNQyxtQkFDbkJDLE1BQU0sRUFBRUMsUUFBUSxFQUFFQyxLQUFLO2dDQURKSDtRQUU3QixJQUFJLENBQUNDLE1BQU0sR0FBR0E7UUFDZCxJQUFJLENBQUNDLFFBQVEsR0FBR0E7UUFDaEIsSUFBSSxDQUFDQyxLQUFLLEdBQUdBOzs7O1lBR2ZDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0gsTUFBTTtZQUNwQjs7O1lBRUFJLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0gsUUFBUTtZQUN0Qjs7O1lBRUFJLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0gsS0FBSztZQUNuQjs7O1lBRUFJLEtBQUFBO21CQUFBQSxTQUFBQSxTQUFTQyxPQUFPO2dCQUNkLElBQUlMO2dCQUVKLElBQU1NLDJCQUEyQixJQUFJLENBQUNSLE1BQU0sRUFBRSxHQUFHO2dCQUVqRE8sUUFBUUUsS0FBSyxDQUFDLEFBQUMsbUJBQTJDLE9BQXpCRCwwQkFBeUI7Z0JBRTFETixRQUFRLElBQUksQ0FBQ0EsS0FBSyxDQUFDSSxRQUFRLENBQUNDO2dCQUU1QixJQUFJLENBQUNOLFFBQVEsQ0FBQ1MsTUFBTSxDQUFDUixPQUFPSztnQkFFNUJBLFFBQVFJLEtBQUssQ0FBQyxBQUFDLHFCQUE2QyxPQUF6QkgsMEJBQXlCO2dCQUU1RCxPQUFPTjtZQUNUOzs7O1lBSU9VLEtBQUFBO21CQUFQLFNBQU9BLGtDQUFrQ0MsSUFBSSxFQUFFQyxzQkFBc0IsRUFBRVAsT0FBTztnQkFDNUUsSUFBTVEscUJBQXFCQyxvREFBb0RILE1BQU1DLHdCQUF3QlA7Z0JBRTdHLE9BQU9RO1lBQ1Q7Ozs7S0FOQSxzQ0FBT0UsUUFBTztBQVNoQixTQUFTRCxvREFBb0RILElBQUksRUFBRUMsc0JBQXNCLEVBQUVQLE9BQU87SUFDaEcsSUFBUVcsV0FBd0NDLFlBQUcsQ0FBM0NELFVBQVVFLFFBQThCRCxZQUFHLENBQWpDQyxPQUFPckIscUJBQXVCb0IsWUFBRyxDQUExQnBCLG9CQUNuQnNCLE9BQU9QLHdCQUNQZCxTQUFTTyxRQUFRZSxZQUFZLENBQUNELE9BQzlCbkIsUUFBUWtCLE1BQU1HLDBCQUEwQixDQUFDVCx3QkFBd0JQLFVBQ2pFTixXQUFXaUIsU0FBU04saUNBQWlDLENBQUNDLE1BQU1DLHdCQUF3QlAsVUFDcEZpQixhQUFhLElBQUl6QixtQkFBbUJDLFFBQVFDLFVBQVVDO0lBRTVELE9BQU9zQjtBQUNUIn0=