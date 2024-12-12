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
var _exception = /*#__PURE__*/ _interop_require_default(require("../exception"));
var _constants = require("../constants");
var _query = require("../utilities/query");
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
var _Comparison;
var terminalNodeQuery = (0, _query.nodeQuery)("/comparison/@*"), leftValueNodeQuery = (0, _query.nodeQuery)("/comparison/value[0]"), rightValueNodeQuery = (0, _query.nodeQuery)("/comparison/value[1]"), comparisonNodeQuery = (0, _query.nodeQuery)("/condition/comparison");
var _default = (0, _dom.domAssigned)((_Comparison = /*#__PURE__*/ function() {
    function Comparison(string, negated, leftValue, rightValue) {
        _class_call_check(this, Comparison);
        this.string = string;
        this.negated = negated;
        this.leftValue = leftValue;
        this.rightValue = rightValue;
    }
    _create_class(Comparison, [
        {
            key: "getString",
            value: function getString() {
                return this.string;
            }
        },
        {
            key: "isNegated",
            value: function isNegated() {
                return this.negated;
            }
        },
        {
            key: "getLeftValue",
            value: function getLeftValue() {
                return this.leftValue;
            }
        },
        {
            key: "getRightValue",
            value: function getRightValue() {
                return this.rightValue;
            }
        },
        {
            key: "call",
            value: function call(context) {
                var value;
                var comparisonString = this.string; ///
                context.trace("Calling the '".concat(comparisonString, "' comparison..."));
                var leftValue = this.leftValue.call(context), rightValue = this.rightValue.call(context), leftValueType = leftValue.getType(), rightValueType = rightValue.getType();
                if (leftValueType !== rightValueType) {
                    var leftValueString = leftValue.getString(), rightValueString = rightValue.getString(), message = "The '".concat(leftValueString, "' left value's type is '").concat(leftValueType, "' whereas the '").concat(rightValueString, "' right value's type is '").concat(rightValueType, "'."), exception = _exception.default.fromMessage(message);
                    throw exception;
                }
                var leftValueEqualToRightValue = leftValue.isEqualTo(rightValue);
                var boolean = leftValueEqualToRightValue; ///
                if (this.negated) {
                    boolean = !boolean; ///
                }
                var Value = _dom.default.Value;
                value = Value.fromBoolean(boolean, context);
                context.debug("...called the '".concat(comparisonString, "' comparison."));
                return value;
            }
        }
    ], [
        {
            key: "fromConditionNode",
            value: function fromConditionNode(conditionNode, context) {
                var comparison = null;
                var comparisonNode = comparisonNodeQuery(conditionNode);
                if (comparisonNode !== null) {
                    var Value = _dom.default.Value, node = comparisonNode, string = context.nodeAsString(node), leftValueNode = leftValueNodeQuery(comparisonNode), rightValueNode = rightValueNodeQuery(comparisonNode), negated = negatedFromComparisonNode(comparisonNode, context), leftValue = Value.fromValueNode(leftValueNode, context), rightValue = Value.fromValueNode(rightValueNode, context);
                    comparison = new Comparison(string, negated, leftValue, rightValue);
                }
                return comparison;
            }
        }
    ]);
    return Comparison;
}(), _define_property(_Comparison, "name", "Comparison"), _Comparison));
function negatedFromComparisonNode(comparisonNode) {
    var terminalNode = terminalNodeQuery(comparisonNode), terminalNodeContent = terminalNode.getContent(), negated = terminalNodeContent !== _constants.EQUAL_TO;
    return negated;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb20vY29tcGFyaXNvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IGRvbSBmcm9tIFwiLi4vZG9tXCI7XG5pbXBvcnQgRXhjZXB0aW9uIGZyb20gXCIuLi9leGNlcHRpb25cIjtcblxuaW1wb3J0IHsgRVFVQUxfVE8gfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBub2RlUXVlcnkgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5pbXBvcnQgeyBkb21Bc3NpZ25lZCB9IGZyb20gXCIuLi9kb21cIjtcblxuY29uc3QgdGVybWluYWxOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvY29tcGFyaXNvbi9AKlwiKSxcbiAgICAgIGxlZnRWYWx1ZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9jb21wYXJpc29uL3ZhbHVlWzBdXCIpLFxuICAgICAgcmlnaHRWYWx1ZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9jb21wYXJpc29uL3ZhbHVlWzFdXCIpLFxuICAgICAgY29tcGFyaXNvbk5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9jb25kaXRpb24vY29tcGFyaXNvblwiKTtcblxuZXhwb3J0IGRlZmF1bHQgZG9tQXNzaWduZWQoY2xhc3MgQ29tcGFyaXNvbiB7XG4gIGNvbnN0cnVjdG9yKHN0cmluZywgbmVnYXRlZCwgbGVmdFZhbHVlLCByaWdodFZhbHVlKSB7XG4gICAgdGhpcy5zdHJpbmcgPSBzdHJpbmc7XG4gICAgdGhpcy5uZWdhdGVkID0gbmVnYXRlZDtcbiAgICB0aGlzLmxlZnRWYWx1ZSA9IGxlZnRWYWx1ZTtcbiAgICB0aGlzLnJpZ2h0VmFsdWUgPSByaWdodFZhbHVlO1xuICB9XG5cbiAgZ2V0U3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLnN0cmluZztcbiAgfVxuXG4gIGlzTmVnYXRlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5uZWdhdGVkO1xuICB9XG5cbiAgZ2V0TGVmdFZhbHVlKCkge1xuICAgIHJldHVybiB0aGlzLmxlZnRWYWx1ZTtcbiAgfVxuXG4gIGdldFJpZ2h0VmFsdWUoKSB7XG4gICAgcmV0dXJuIHRoaXMucmlnaHRWYWx1ZTtcbiAgfVxuXG4gIGNhbGwoY29udGV4dCkge1xuICAgIGxldCB2YWx1ZTtcblxuICAgIGNvbnN0IGNvbXBhcmlzb25TdHJpbmcgPSB0aGlzLnN0cmluZzsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBDYWxsaW5nIHRoZSAnJHtjb21wYXJpc29uU3RyaW5nfScgY29tcGFyaXNvbi4uLmApO1xuXG4gICAgY29uc3QgbGVmdFZhbHVlID0gdGhpcy5sZWZ0VmFsdWUuY2FsbChjb250ZXh0KSxcbiAgICAgICAgICByaWdodFZhbHVlID0gdGhpcy5yaWdodFZhbHVlLmNhbGwoY29udGV4dCksXG4gICAgICAgICAgbGVmdFZhbHVlVHlwZSA9IGxlZnRWYWx1ZS5nZXRUeXBlKCksXG4gICAgICAgICAgcmlnaHRWYWx1ZVR5cGUgPSByaWdodFZhbHVlLmdldFR5cGUoKTtcblxuICAgIGlmIChsZWZ0VmFsdWVUeXBlICE9PSByaWdodFZhbHVlVHlwZSkge1xuICAgICAgY29uc3QgbGVmdFZhbHVlU3RyaW5nID0gbGVmdFZhbHVlLmdldFN0cmluZygpLFxuICAgICAgICAgICAgcmlnaHRWYWx1ZVN0cmluZyA9IHJpZ2h0VmFsdWUuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgICBtZXNzYWdlID0gYFRoZSAnJHtsZWZ0VmFsdWVTdHJpbmd9JyBsZWZ0IHZhbHVlJ3MgdHlwZSBpcyAnJHtsZWZ0VmFsdWVUeXBlfScgd2hlcmVhcyB0aGUgJyR7cmlnaHRWYWx1ZVN0cmluZ30nIHJpZ2h0IHZhbHVlJ3MgdHlwZSBpcyAnJHtyaWdodFZhbHVlVHlwZX0nLmAsXG4gICAgICAgICAgICBleGNlcHRpb24gPSBFeGNlcHRpb24uZnJvbU1lc3NhZ2UobWVzc2FnZSk7XG5cbiAgICAgIHRocm93IGV4Y2VwdGlvbjtcbiAgICB9XG5cbiAgICBjb25zdCBsZWZ0VmFsdWVFcXVhbFRvUmlnaHRWYWx1ZSA9IGxlZnRWYWx1ZS5pc0VxdWFsVG8ocmlnaHRWYWx1ZSk7XG5cbiAgICBsZXQgYm9vbGVhbiA9IGxlZnRWYWx1ZUVxdWFsVG9SaWdodFZhbHVlOyAvLy9cblxuICAgIGlmICh0aGlzLm5lZ2F0ZWQpIHtcbiAgICAgIGJvb2xlYW4gPSAhYm9vbGVhbjsgLy8vXG4gICAgfVxuXG4gICAgY29uc3QgeyBWYWx1ZSB9ID0gZG9tO1xuXG4gICAgdmFsdWUgPSBWYWx1ZS5mcm9tQm9vbGVhbihib29sZWFuLCBjb250ZXh0KTtcblxuICAgIGNvbnRleHQuZGVidWcoYC4uLmNhbGxlZCB0aGUgJyR7Y29tcGFyaXNvblN0cmluZ30nIGNvbXBhcmlzb24uYCk7XG5cbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiQ29tcGFyaXNvblwiO1xuXG4gIHN0YXRpYyBmcm9tQ29uZGl0aW9uTm9kZShjb25kaXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gICAgbGV0IGNvbXBhcmlzb24gPSBudWxsO1xuXG4gICAgY29uc3QgY29tcGFyaXNvbk5vZGUgPSBjb21wYXJpc29uTm9kZVF1ZXJ5KGNvbmRpdGlvbk5vZGUpO1xuXG4gICAgaWYgKGNvbXBhcmlzb25Ob2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCB7IFZhbHVlIH0gPSBkb20sXG4gICAgICAgICAgICBub2RlID0gY29tcGFyaXNvbk5vZGUsICAvLy9cbiAgICAgICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICAgICAgbGVmdFZhbHVlTm9kZSA9IGxlZnRWYWx1ZU5vZGVRdWVyeShjb21wYXJpc29uTm9kZSksXG4gICAgICAgICAgICByaWdodFZhbHVlTm9kZSA9IHJpZ2h0VmFsdWVOb2RlUXVlcnkoY29tcGFyaXNvbk5vZGUpLFxuICAgICAgICAgICAgbmVnYXRlZCA9IG5lZ2F0ZWRGcm9tQ29tcGFyaXNvbk5vZGUoY29tcGFyaXNvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgICAgbGVmdFZhbHVlID0gVmFsdWUuZnJvbVZhbHVlTm9kZShsZWZ0VmFsdWVOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgICAgIHJpZ2h0VmFsdWUgPSBWYWx1ZS5mcm9tVmFsdWVOb2RlKHJpZ2h0VmFsdWVOb2RlLCBjb250ZXh0KTtcblxuICAgICAgY29tcGFyaXNvbiA9IG5ldyBDb21wYXJpc29uKHN0cmluZywgbmVnYXRlZCwgbGVmdFZhbHVlLCByaWdodFZhbHVlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gY29tcGFyaXNvbjtcbiAgfVxufSk7XG5cbmZ1bmN0aW9uIG5lZ2F0ZWRGcm9tQ29tcGFyaXNvbk5vZGUoY29tcGFyaXNvbk5vZGUpIHtcbiAgY29uc3QgdGVybWluYWxOb2RlID0gdGVybWluYWxOb2RlUXVlcnkoY29tcGFyaXNvbk5vZGUpLFxuICAgICAgICB0ZXJtaW5hbE5vZGVDb250ZW50ID0gdGVybWluYWxOb2RlLmdldENvbnRlbnQoKSxcbiAgICAgICAgbmVnYXRlZCA9ICh0ZXJtaW5hbE5vZGVDb250ZW50ICE9PSBFUVVBTF9UTyk7XG5cbiAgcmV0dXJuIG5lZ2F0ZWQ7XG59Il0sIm5hbWVzIjpbInRlcm1pbmFsTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5IiwibGVmdFZhbHVlTm9kZVF1ZXJ5IiwicmlnaHRWYWx1ZU5vZGVRdWVyeSIsImNvbXBhcmlzb25Ob2RlUXVlcnkiLCJkb21Bc3NpZ25lZCIsIkNvbXBhcmlzb24iLCJzdHJpbmciLCJuZWdhdGVkIiwibGVmdFZhbHVlIiwicmlnaHRWYWx1ZSIsImdldFN0cmluZyIsImlzTmVnYXRlZCIsImdldExlZnRWYWx1ZSIsImdldFJpZ2h0VmFsdWUiLCJjYWxsIiwiY29udGV4dCIsInZhbHVlIiwiY29tcGFyaXNvblN0cmluZyIsInRyYWNlIiwibGVmdFZhbHVlVHlwZSIsImdldFR5cGUiLCJyaWdodFZhbHVlVHlwZSIsImxlZnRWYWx1ZVN0cmluZyIsInJpZ2h0VmFsdWVTdHJpbmciLCJtZXNzYWdlIiwiZXhjZXB0aW9uIiwiRXhjZXB0aW9uIiwiZnJvbU1lc3NhZ2UiLCJsZWZ0VmFsdWVFcXVhbFRvUmlnaHRWYWx1ZSIsImlzRXF1YWxUbyIsImJvb2xlYW4iLCJWYWx1ZSIsImRvbSIsImZyb21Cb29sZWFuIiwiZGVidWciLCJmcm9tQ29uZGl0aW9uTm9kZSIsImNvbmRpdGlvbk5vZGUiLCJjb21wYXJpc29uIiwiY29tcGFyaXNvbk5vZGUiLCJub2RlIiwibm9kZUFzU3RyaW5nIiwibGVmdFZhbHVlTm9kZSIsInJpZ2h0VmFsdWVOb2RlIiwibmVnYXRlZEZyb21Db21wYXJpc29uTm9kZSIsImZyb21WYWx1ZU5vZGUiLCJuYW1lIiwidGVybWluYWxOb2RlIiwidGVybWluYWxOb2RlQ29udGVudCIsImdldENvbnRlbnQiLCJFUVVBTF9UTyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBY0E7OztlQUFBOzs7MkRBWmdCO2dFQUNNO3lCQUVHO3FCQUNDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUcxQixJQUFNQSxvQkFBb0JDLElBQUFBLGdCQUFTLEVBQUMsbUJBQzlCQyxxQkFBcUJELElBQUFBLGdCQUFTLEVBQUMseUJBQy9CRSxzQkFBc0JGLElBQUFBLGdCQUFTLEVBQUMseUJBQ2hDRyxzQkFBc0JILElBQUFBLGdCQUFTLEVBQUM7SUFFdEMsV0FBZUksSUFBQUEsZ0JBQVcsK0JBQUM7YUFBTUMsV0FDbkJDLE1BQU0sRUFBRUMsT0FBTyxFQUFFQyxTQUFTLEVBQUVDLFVBQVU7Z0NBRG5CSjtRQUU3QixJQUFJLENBQUNDLE1BQU0sR0FBR0E7UUFDZCxJQUFJLENBQUNDLE9BQU8sR0FBR0E7UUFDZixJQUFJLENBQUNDLFNBQVMsR0FBR0E7UUFDakIsSUFBSSxDQUFDQyxVQUFVLEdBQUdBOzs7O1lBR3BCQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNKLE1BQU07WUFDcEI7OztZ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