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
    function VariableAssignment(string, variable, expression) {
        _class_call_check(this, VariableAssignment);
        this.string = string;
        this.variable = variable;
        this.expression = expression;
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
            key: "getExpression",
            value: function getExpression() {
                return this.expression;
            }
        },
        {
            key: "evaluate",
            value: function evaluate(context) {
                var expression;
                var variableAssignmentString = this.string; ///
                context.trace("Evaluating the '".concat(variableAssignmentString, "' variable assignment..."));
                expression = this.expression.evaluate(context);
                this.variable.assign(expression, context);
                context.debug("...evaluated the '".concat(variableAssignmentString, "' variable assignment."));
                return expression;
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
    var Variable = _dom.default.Variable, Expression = _dom.default.Expression, VariableAssignment = _dom.default.VariableAssignment, expression = Expression.fromVariableAssignmentNode(variableAssignmentNode, context), variable = Variable.fromTypeAndVariableAssignmentNode(type, variableAssignmentNode, context), string = stringFromExpressionAndVariable(expression, variable, context), assignment = new VariableAssignment(string, variable, expression);
    return assignment;
}
function stringFromExpressionAndVariable(expression, variable, context) {
    var variableString = variable.getString(), expressionString = expression.asString(context), string = "".concat(variableString, " = ").concat(expressionString, ";");
    return string;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kb20vYXNzaWdubWVudC92YXJpYWJsZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IGRvbSBmcm9tIFwiLi4vLi4vZG9tXCI7XG5cbmltcG9ydCB7IGRvbUFzc2lnbmVkIH0gZnJvbSBcIi4uLy4uL2RvbVwiO1xuXG5leHBvcnQgZGVmYXVsdCBkb21Bc3NpZ25lZChjbGFzcyBWYXJpYWJsZUFzc2lnbm1lbnQge1xuICBjb25zdHJ1Y3RvcihzdHJpbmcsIHZhcmlhYmxlLCBleHByZXNzaW9uKSB7XG4gICAgdGhpcy5zdHJpbmcgPSBzdHJpbmc7XG4gICAgdGhpcy52YXJpYWJsZSA9IHZhcmlhYmxlO1xuICAgIHRoaXMuZXhwcmVzc2lvbiA9IGV4cHJlc3Npb247XG4gIH1cblxuICBnZXRTdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RyaW5nO1xuICB9XG5cbiAgZ2V0VmFyaWFibGUoKSB7XG4gICAgcmV0dXJuIHRoaXMudmFyaWFibGU7XG4gIH1cblxuICBnZXRFeHByZXNzaW9uKCkge1xuICAgIHJldHVybiB0aGlzLmV4cHJlc3Npb247XG4gIH1cblxuICBldmFsdWF0ZShjb250ZXh0KSB7XG4gICAgbGV0IGV4cHJlc3Npb247XG5cbiAgICBjb25zdCB2YXJpYWJsZUFzc2lnbm1lbnRTdHJpbmcgPSB0aGlzLnN0cmluZzsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBFdmFsdWF0aW5nIHRoZSAnJHt2YXJpYWJsZUFzc2lnbm1lbnRTdHJpbmd9JyB2YXJpYWJsZSBhc3NpZ25tZW50Li4uYCk7XG5cbiAgICBleHByZXNzaW9uID0gdGhpcy5leHByZXNzaW9uLmV2YWx1YXRlKGNvbnRleHQpO1xuXG4gICAgdGhpcy52YXJpYWJsZS5hc3NpZ24oZXhwcmVzc2lvbiwgY29udGV4dCk7XG5cbiAgICBjb250ZXh0LmRlYnVnKGAuLi5ldmFsdWF0ZWQgdGhlICcke3ZhcmlhYmxlQXNzaWdubWVudFN0cmluZ30nIHZhcmlhYmxlIGFzc2lnbm1lbnQuYCk7XG5cbiAgICByZXR1cm4gZXhwcmVzc2lvbjtcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJWYXJpYWJsZUFzc2lnbm1lbnRcIjtcblxuICBzdGF0aWMgZnJvbVR5cGVBbmRWYXJpYWJsZUFzc2lnbm1lbnROb2RlKHR5cGUsIHZhcmlhYmxlQXNzaWdubWVudE5vZGUsIGNvbnRleHQpIHtcbiAgICBjb25zdCB2YXJpYWJsZUFzc2lnbm1lbnQgPSB2YXJpYWJsZUFzc2lnbm1lbnRGcm9tVHlwZUFuZFZhcmlhYmxlQXNzaWdubWVudE5vZGUodHlwZSwgdmFyaWFibGVBc3NpZ25tZW50Tm9kZSwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gdmFyaWFibGVBc3NpZ25tZW50O1xuICB9XG59KTtcblxuZnVuY3Rpb24gdmFyaWFibGVBc3NpZ25tZW50RnJvbVR5cGVBbmRWYXJpYWJsZUFzc2lnbm1lbnROb2RlKHR5cGUsIHZhcmlhYmxlQXNzaWdubWVudE5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBWYXJpYWJsZSwgRXhwcmVzc2lvbiwgVmFyaWFibGVBc3NpZ25tZW50IH0gPSBkb20sXG4gICAgICAgIGV4cHJlc3Npb24gPSBFeHByZXNzaW9uLmZyb21WYXJpYWJsZUFzc2lnbm1lbnROb2RlKHZhcmlhYmxlQXNzaWdubWVudE5vZGUsIGNvbnRleHQpLFxuICAgICAgICB2YXJpYWJsZSA9IFZhcmlhYmxlLmZyb21UeXBlQW5kVmFyaWFibGVBc3NpZ25tZW50Tm9kZSh0eXBlLCB2YXJpYWJsZUFzc2lnbm1lbnROb2RlLCBjb250ZXh0KSxcbiAgICAgICAgc3RyaW5nID0gc3RyaW5nRnJvbUV4cHJlc3Npb25BbmRWYXJpYWJsZShleHByZXNzaW9uLCB2YXJpYWJsZSwgY29udGV4dCksXG4gICAgICAgIGFzc2lnbm1lbnQgPSBuZXcgVmFyaWFibGVBc3NpZ25tZW50KHN0cmluZywgdmFyaWFibGUsIGV4cHJlc3Npb24pO1xuXG4gIHJldHVybiBhc3NpZ25tZW50O1xufVxuXG5mdW5jdGlvbiBzdHJpbmdGcm9tRXhwcmVzc2lvbkFuZFZhcmlhYmxlKGV4cHJlc3Npb24sIHZhcmlhYmxlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHZhcmlhYmxlU3RyaW5nID0gdmFyaWFibGUuZ2V0U3RyaW5nKCksXG4gICAgICAgIGV4cHJlc3Npb25TdHJpbmcgPSBleHByZXNzaW9uLmFzU3RyaW5nKGNvbnRleHQpLFxuICAgICAgICBzdHJpbmcgPSBgJHt2YXJpYWJsZVN0cmluZ30gPSAke2V4cHJlc3Npb25TdHJpbmd9O2A7XG5cbiAgcmV0dXJuIHN0cmluZztcbn1cbiJdLCJuYW1lcyI6WyJkb21Bc3NpZ25lZCIsIlZhcmlhYmxlQXNzaWdubWVudCIsInN0cmluZyIsInZhcmlhYmxlIiwiZXhwcmVzc2lvbiIsImdldFN0cmluZyIsImdldFZhcmlhYmxlIiwiZ2V0RXhwcmVzc2lvbiIsImV2YWx1YXRlIiwiY29udGV4dCIsInZhcmlhYmxlQXNzaWdubWVudFN0cmluZyIsInRyYWNlIiwiYXNzaWduIiwiZGVidWciLCJmcm9tVHlwZUFuZFZhcmlhYmxlQXNzaWdubWVudE5vZGUiLCJ0eXBlIiwidmFyaWFibGVBc3NpZ25tZW50Tm9kZSIsInZhcmlhYmxlQXNzaWdubWVudCIsInZhcmlhYmxlQXNzaWdubWVudEZyb21UeXBlQW5kVmFyaWFibGVBc3NpZ25tZW50Tm9kZSIsIm5hbWUiLCJWYXJpYWJsZSIsImRvbSIsIkV4cHJlc3Npb24iLCJmcm9tVmFyaWFibGVBc3NpZ25tZW50Tm9kZSIsInN0cmluZ0Zyb21FeHByZXNzaW9uQW5kVmFyaWFibGUiLCJhc3NpZ25tZW50IiwidmFyaWFibGVTdHJpbmciLCJleHByZXNzaW9uU3RyaW5nIiwiYXNTdHJpbmciXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQU1BOzs7ZUFBQTs7OzJEQUpnQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBSWhCLFdBQWVBLElBQUFBLGdCQUFXLHVDQUFDO2FBQU1DLG1CQUNuQkMsTUFBTSxFQUFFQyxRQUFRLEVBQUVDLFVBQVU7Z0NBRFRIO1FBRTdCLElBQUksQ0FBQ0MsTUFBTSxHQUFHQTtRQUNkLElBQUksQ0FBQ0MsUUFBUSxHQUFHQTtRQUNoQixJQUFJLENBQUNDLFVBQVUsR0FBR0E7Ozs7WUFHcEJDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0gsTUFBTTtZQUNwQjs7O1lBRUFJLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0gsUUFBUTtZQUN0Qjs7O1lBRUFJLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0gsVUFBVTtZQUN4Qjs7O1lBRUFJLEtBQUFBO21CQUFBQSxTQUFBQSxTQUFTQyxPQUFPO2dCQUNkLElBQUlMO2dCQUVKLElBQU1NLDJCQUEyQixJQUFJLENBQUNSLE1BQU0sRUFBRSxHQUFHO2dCQUVqRE8sUUFBUUUsS0FBSyxDQUFDLEFBQUMsbUJBQTJDLE9BQXpCRCwwQkFBeUI7Z0JBRTFETixhQUFhLElBQUksQ0FBQ0EsVUFBVSxDQUFDSSxRQUFRLENBQUNDO2dCQUV0QyxJQUFJLENBQUNOLFFBQVEsQ0FBQ1MsTUFBTSxDQUFDUixZQUFZSztnQkFFakNBLFFBQVFJLEtBQUssQ0FBQyxBQUFDLHFCQUE2QyxPQUF6QkgsMEJBQXlCO2dCQUU1RCxPQUFPTjtZQUNUOzs7O1lBSU9VLEtBQUFBO21CQUFQLFNBQU9BLGtDQUFrQ0MsSUFBSSxFQUFFQyxzQkFBc0IsRUFBRVAsT0FBTztnQkFDNUUsSUFBTVEscUJBQXFCQyxvREFBb0RILE1BQU1DLHdCQUF3QlA7Z0JBRTdHLE9BQU9RO1lBQ1Q7Ozs7S0FOQSxzQ0FBT0UsUUFBTztBQVNoQixTQUFTRCxvREFBb0RILElBQUksRUFBRUMsc0JBQXNCLEVBQUVQLE9BQU87SUFDaEcsSUFBUVcsV0FBNkNDLFlBQUcsQ0FBaERELFVBQVVFLGFBQW1DRCxZQUFHLENBQXRDQyxZQUFZckIscUJBQXVCb0IsWUFBRyxDQUExQnBCLG9CQUN4QkcsYUFBYWtCLFdBQVdDLDBCQUEwQixDQUFDUCx3QkFBd0JQLFVBQzNFTixXQUFXaUIsU0FBU04saUNBQWlDLENBQUNDLE1BQU1DLHdCQUF3QlAsVUFDcEZQLFNBQVNzQixnQ0FBZ0NwQixZQUFZRCxVQUFVTSxVQUMvRGdCLGFBQWEsSUFBSXhCLG1CQUFtQkMsUUFBUUMsVUFBVUM7SUFFNUQsT0FBT3FCO0FBQ1Q7QUFFQSxTQUFTRCxnQ0FBZ0NwQixVQUFVLEVBQUVELFFBQVEsRUFBRU0sT0FBTztJQUNwRSxJQUFNaUIsaUJBQWlCdkIsU0FBU0UsU0FBUyxJQUNuQ3NCLG1CQUFtQnZCLFdBQVd3QixRQUFRLENBQUNuQixVQUN2Q1AsU0FBUyxBQUFDLEdBQXNCeUIsT0FBcEJELGdCQUFlLE9BQXNCLE9BQWpCQyxrQkFBaUI7SUFFdkQsT0FBT3pCO0FBQ1QifQ==