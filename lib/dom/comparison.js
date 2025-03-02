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
var _query = require("../utilities/query");
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
var terminalNodeQuery = (0, _query.nodeQuery)("/comparison/@*"), leftValueNodeQuery = (0, _query.nodeQuery)("/comparison/value[0]"), rightValueNodeQuery = (0, _query.nodeQuery)("/comparison/value[1]"), valueComparisonNodeQuery = (0, _query.nodeQuery)("/value/comparison");
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
            key: "evaluate",
            value: function evaluate(context) {
                var value;
                var comparisonString = this.string; ///
                context.trace("Evaluating the '".concat(comparisonString, "' comparison..."));
                var leftValue = this.leftValue.evaluate(context), rightValue = this.rightValue.evaluate(context), leftValueType = leftValue.getType(), rightValueType = rightValue.getType();
                if (leftValueType !== rightValueType) {
                    var leftValueString = leftValue.asString(context), rightValueString = rightValue.asString(context), message = "The ".concat(leftValueString, " left value's type is '").concat(leftValueType, "' whereas the ").concat(rightValueString, " right value's type is '").concat(rightValueType, "'."), exception = _exception.default.fromMessage(message);
                    throw exception;
                }
                var leftValueEqualToRightValue = leftValue.isEqualTo(rightValue);
                var boolean = leftValueEqualToRightValue; ///
                if (this.negated) {
                    boolean = !boolean; ///
                }
                var Value = _dom.default.Value;
                value = Value.fromBoolean(boolean, context);
                context.debug("...evaluated the '".concat(comparisonString, "' comparison."));
                return value;
            }
        }
    ], [
        {
            key: "fromValueNode",
            value: function fromValueNode(valudNode, context) {
                var comparison = null;
                var valueComparisonNode = valueComparisonNodeQuery(valudNode);
                if (valueComparisonNode !== null) {
                    var comparisonNode = valueComparisonNode; ///
                    comparison = comparisonFromComparisonNode(comparisonNode, context);
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
function comparisonFromComparisonNode(comparisonNode, context) {
    var Value = _dom.default.Value, Comparison = _dom.default.Comparison, leftValueNode = leftValueNodeQuery(comparisonNode), rightValueNode = rightValueNodeQuery(comparisonNode), rightValue = Value.fromValueNode(rightValueNode, context), leftValue = Value.fromValueNode(leftValueNode, context), negated = negatedFromComparisonNode(comparisonNode, context), string = stringFromNegatedLeftValueAndRightValue(negated, leftValue, rightValue, context), comparison = new Comparison(string, negated, leftValue, rightValue);
    return comparison;
}
function stringFromNegatedLeftValueAndRightValue(negated, leftValue, rightValue, context) {
    var operatorString = negated ? _constants.EQUAL_TO : _constants.NOT_EQUAL_TO, leftValueString = leftValue.asString(context), rightValueString = rightValue.asString(context), string = "".concat(leftValueString, " ").concat(operatorString, " ").concat(rightValueString);
    return string;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb20vY29tcGFyaXNvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IGRvbSBmcm9tIFwiLi4vZG9tXCI7XG5pbXBvcnQgRXhjZXB0aW9uIGZyb20gXCIuLi9leGNlcHRpb25cIjtcblxuaW1wb3J0IHsgbm9kZVF1ZXJ5IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9xdWVyeVwiO1xuaW1wb3J0IHsgZG9tQXNzaWduZWQgfSBmcm9tIFwiLi4vZG9tXCI7XG5pbXBvcnQgeyBFUVVBTF9UTywgTk9UX0VRVUFMX1RPIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuXG5jb25zdCB0ZXJtaW5hbE5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9jb21wYXJpc29uL0AqXCIpLFxuICAgICAgbGVmdFZhbHVlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL2NvbXBhcmlzb24vdmFsdWVbMF1cIiksXG4gICAgICByaWdodFZhbHVlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL2NvbXBhcmlzb24vdmFsdWVbMV1cIiksXG4gICAgICB2YWx1ZUNvbXBhcmlzb25Ob2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvdmFsdWUvY29tcGFyaXNvblwiKTtcblxuZXhwb3J0IGRlZmF1bHQgZG9tQXNzaWduZWQoY2xhc3MgQ29tcGFyaXNvbiB7XG4gIGNvbnN0cnVjdG9yKHN0cmluZywgbmVnYXRlZCwgbGVmdFZhbHVlLCByaWdodFZhbHVlKSB7XG4gICAgdGhpcy5zdHJpbmcgPSBzdHJpbmc7XG4gICAgdGhpcy5uZWdhdGVkID0gbmVnYXRlZDtcbiAgICB0aGlzLmxlZnRWYWx1ZSA9IGxlZnRWYWx1ZTtcbiAgICB0aGlzLnJpZ2h0VmFsdWUgPSByaWdodFZhbHVlO1xuICB9XG5cbiAgZ2V0U3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLnN0cmluZztcbiAgfVxuXG4gIGlzTmVnYXRlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5uZWdhdGVkO1xuICB9XG5cbiAgZ2V0TGVmdFZhbHVlKCkge1xuICAgIHJldHVybiB0aGlzLmxlZnRWYWx1ZTtcbiAgfVxuXG4gIGdldFJpZ2h0VmFsdWUoKSB7XG4gICAgcmV0dXJuIHRoaXMucmlnaHRWYWx1ZTtcbiAgfVxuXG4gIGV2YWx1YXRlKGNvbnRleHQpIHtcbiAgICBsZXQgdmFsdWU7XG5cbiAgICBjb25zdCBjb21wYXJpc29uU3RyaW5nID0gdGhpcy5zdHJpbmc7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgRXZhbHVhdGluZyB0aGUgJyR7Y29tcGFyaXNvblN0cmluZ30nIGNvbXBhcmlzb24uLi5gKTtcblxuICAgIGNvbnN0IGxlZnRWYWx1ZSA9IHRoaXMubGVmdFZhbHVlLmV2YWx1YXRlKGNvbnRleHQpLFxuICAgICAgICAgIHJpZ2h0VmFsdWUgPSB0aGlzLnJpZ2h0VmFsdWUuZXZhbHVhdGUoY29udGV4dCksXG4gICAgICAgICAgbGVmdFZhbHVlVHlwZSA9IGxlZnRWYWx1ZS5nZXRUeXBlKCksXG4gICAgICAgICAgcmlnaHRWYWx1ZVR5cGUgPSByaWdodFZhbHVlLmdldFR5cGUoKTtcblxuICAgIGlmIChsZWZ0VmFsdWVUeXBlICE9PSByaWdodFZhbHVlVHlwZSkge1xuICAgICAgY29uc3QgbGVmdFZhbHVlU3RyaW5nID0gbGVmdFZhbHVlLmFzU3RyaW5nKGNvbnRleHQpLFxuICAgICAgICAgICAgcmlnaHRWYWx1ZVN0cmluZyA9IHJpZ2h0VmFsdWUuYXNTdHJpbmcoY29udGV4dCksXG4gICAgICAgICAgICBtZXNzYWdlID0gYFRoZSAke2xlZnRWYWx1ZVN0cmluZ30gbGVmdCB2YWx1ZSdzIHR5cGUgaXMgJyR7bGVmdFZhbHVlVHlwZX0nIHdoZXJlYXMgdGhlICR7cmlnaHRWYWx1ZVN0cmluZ30gcmlnaHQgdmFsdWUncyB0eXBlIGlzICcke3JpZ2h0VmFsdWVUeXBlfScuYCxcbiAgICAgICAgICAgIGV4Y2VwdGlvbiA9IEV4Y2VwdGlvbi5mcm9tTWVzc2FnZShtZXNzYWdlKTtcblxuICAgICAgdGhyb3cgZXhjZXB0aW9uO1xuICAgIH1cblxuICAgIGNvbnN0IGxlZnRWYWx1ZUVxdWFsVG9SaWdodFZhbHVlID0gbGVmdFZhbHVlLmlzRXF1YWxUbyhyaWdodFZhbHVlKTtcblxuICAgIGxldCBib29sZWFuID0gbGVmdFZhbHVlRXF1YWxUb1JpZ2h0VmFsdWU7IC8vL1xuXG4gICAgaWYgKHRoaXMubmVnYXRlZCkge1xuICAgICAgYm9vbGVhbiA9ICFib29sZWFuOyAvLy9cbiAgICB9XG5cbiAgICBjb25zdCB7IFZhbHVlIH0gPSBkb207XG5cbiAgICB2YWx1ZSA9IFZhbHVlLmZyb21Cb29sZWFuKGJvb2xlYW4sIGNvbnRleHQpO1xuXG4gICAgY29udGV4dC5kZWJ1ZyhgLi4uZXZhbHVhdGVkIHRoZSAnJHtjb21wYXJpc29uU3RyaW5nfScgY29tcGFyaXNvbi5gKTtcblxuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJDb21wYXJpc29uXCI7XG5cbiAgc3RhdGljIGZyb21WYWx1ZU5vZGUodmFsdWROb2RlLCBjb250ZXh0KSB7XG4gICAgbGV0IGNvbXBhcmlzb24gPSBudWxsO1xuXG4gICAgY29uc3QgdmFsdWVDb21wYXJpc29uTm9kZSA9IHZhbHVlQ29tcGFyaXNvbk5vZGVRdWVyeSh2YWx1ZE5vZGUpO1xuXG4gICAgaWYgKHZhbHVlQ29tcGFyaXNvbk5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IGNvbXBhcmlzb25Ob2RlID0gdmFsdWVDb21wYXJpc29uTm9kZTsgLy8vXG5cbiAgICAgIGNvbXBhcmlzb24gPSBjb21wYXJpc29uRnJvbUNvbXBhcmlzb25Ob2RlKGNvbXBhcmlzb25Ob2RlLCBjb250ZXh0KTtcbiAgICB9XG5cbiAgICByZXR1cm4gY29tcGFyaXNvbjtcbiAgfVxufSk7XG5cbmZ1bmN0aW9uIG5lZ2F0ZWRGcm9tQ29tcGFyaXNvbk5vZGUoY29tcGFyaXNvbk5vZGUpIHtcbiAgY29uc3QgdGVybWluYWxOb2RlID0gdGVybWluYWxOb2RlUXVlcnkoY29tcGFyaXNvbk5vZGUpLFxuICAgICAgICB0ZXJtaW5hbE5vZGVDb250ZW50ID0gdGVybWluYWxOb2RlLmdldENvbnRlbnQoKSxcbiAgICAgICAgbmVnYXRlZCA9ICh0ZXJtaW5hbE5vZGVDb250ZW50ICE9PSBFUVVBTF9UTyk7XG5cbiAgcmV0dXJuIG5lZ2F0ZWQ7XG59XG5cbmZ1bmN0aW9uIGNvbXBhcmlzb25Gcm9tQ29tcGFyaXNvbk5vZGUoY29tcGFyaXNvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBWYWx1ZSwgQ29tcGFyaXNvbiB9ID0gZG9tLFxuICAgICAgICBsZWZ0VmFsdWVOb2RlID0gbGVmdFZhbHVlTm9kZVF1ZXJ5KGNvbXBhcmlzb25Ob2RlKSxcbiAgICAgICAgcmlnaHRWYWx1ZU5vZGUgPSByaWdodFZhbHVlTm9kZVF1ZXJ5KGNvbXBhcmlzb25Ob2RlKSxcbiAgICAgICAgcmlnaHRWYWx1ZSA9IFZhbHVlLmZyb21WYWx1ZU5vZGUocmlnaHRWYWx1ZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICBsZWZ0VmFsdWUgPSBWYWx1ZS5mcm9tVmFsdWVOb2RlKGxlZnRWYWx1ZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICBuZWdhdGVkID0gbmVnYXRlZEZyb21Db21wYXJpc29uTm9kZShjb21wYXJpc29uTm9kZSwgY29udGV4dCksXG4gICAgICAgIHN0cmluZyA9IHN0cmluZ0Zyb21OZWdhdGVkTGVmdFZhbHVlQW5kUmlnaHRWYWx1ZShuZWdhdGVkLCBsZWZ0VmFsdWUsIHJpZ2h0VmFsdWUsIGNvbnRleHQpLFxuICAgICAgICBjb21wYXJpc29uID0gbmV3IENvbXBhcmlzb24oc3RyaW5nLCBuZWdhdGVkLCBsZWZ0VmFsdWUsIHJpZ2h0VmFsdWUpO1xuXG4gIHJldHVybiBjb21wYXJpc29uO1xufVxuXG5mdW5jdGlvbiBzdHJpbmdGcm9tTmVnYXRlZExlZnRWYWx1ZUFuZFJpZ2h0VmFsdWUobmVnYXRlZCwgbGVmdFZhbHVlLCByaWdodFZhbHVlLCBjb250ZXh0KSB7XG4gIGNvbnN0IG9wZXJhdG9yU3RyaW5nID0gbmVnYXRlZCA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICBFUVVBTF9UTyA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgTk9UX0VRVUFMX1RPLFxuICAgICAgICBsZWZ0VmFsdWVTdHJpbmcgPSBsZWZ0VmFsdWUuYXNTdHJpbmcoY29udGV4dCksXG4gICAgICAgIHJpZ2h0VmFsdWVTdHJpbmcgPSByaWdodFZhbHVlLmFzU3RyaW5nKGNvbnRleHQpLFxuICAgICAgICBzdHJpbmcgPSBgJHtsZWZ0VmFsdWVTdHJpbmd9ICR7b3BlcmF0b3JTdHJpbmd9ICR7cmlnaHRWYWx1ZVN0cmluZ31gO1xuXG4gIHJldHVybiBzdHJpbmc7XG59XG4iXSwibmFtZXMiOlsidGVybWluYWxOb2RlUXVlcnkiLCJub2RlUXVlcnkiLCJsZWZ0VmFsdWVOb2RlUXVlcnkiLCJyaWdodFZhbHVlTm9kZVF1ZXJ5IiwidmFsdWVDb21wYXJpc29uTm9kZVF1ZXJ5IiwiZG9tQXNzaWduZWQiLCJDb21wYXJpc29uIiwic3RyaW5nIiwibmVnYXRlZCIsImxlZnRWYWx1ZSIsInJpZ2h0VmFsdWUiLCJnZXRTdHJpbmciLCJpc05lZ2F0ZWQiLCJnZXRMZWZ0VmFsdWUiLCJnZXRSaWdodFZhbHVlIiwiZXZhbHVhdGUiLCJjb250ZXh0IiwidmFsdWUiLCJjb21wYXJpc29uU3RyaW5nIiwidHJhY2UiLCJsZWZ0VmFsdWVUeXBlIiwiZ2V0VHlwZSIsInJpZ2h0VmFsdWVUeXBlIiwibGVmdFZhbHVlU3RyaW5nIiwiYXNTdHJpbmciLCJyaWdodFZhbHVlU3RyaW5nIiwibWVzc2FnZSIsImV4Y2VwdGlvbiIsIkV4Y2VwdGlvbiIsImZyb21NZXNzYWdlIiwibGVmdFZhbHVlRXF1YWxUb1JpZ2h0VmFsdWUiLCJpc0VxdWFsVG8iLCJib29sZWFuIiwiVmFsdWUiLCJkb20iLCJmcm9tQm9vbGVhbiIsImRlYnVnIiwiZnJvbVZhbHVlTm9kZSIsInZhbHVkTm9kZSIsImNvbXBhcmlzb24iLCJ2YWx1ZUNvbXBhcmlzb25Ob2RlIiwiY29tcGFyaXNvbk5vZGUiLCJjb21wYXJpc29uRnJvbUNvbXBhcmlzb25Ob2RlIiwibmFtZSIsIm5lZ2F0ZWRGcm9tQ29tcGFyaXNvbk5vZGUiLCJ0ZXJtaW5hbE5vZGUiLCJ0ZXJtaW5hbE5vZGVDb250ZW50IiwiZ2V0Q29udGVudCIsIkVRVUFMX1RPIiwibGVmdFZhbHVlTm9kZSIsInJpZ2h0VmFsdWVOb2RlIiwic3RyaW5nRnJvbU5lZ2F0ZWRMZWZ0VmFsdWVBbmRSaWdodFZhbHVlIiwib3BlcmF0b3JTdHJpbmciLCJOT1RfRVFVQUxfVE8iXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQWNBOzs7ZUFBQTs7OzJEQVpnQjtnRUFDTTtxQkFFSTt5QkFFYTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFdkMsSUFBTUEsb0JBQW9CQyxJQUFBQSxnQkFBUyxFQUFDLG1CQUM5QkMscUJBQXFCRCxJQUFBQSxnQkFBUyxFQUFDLHlCQUMvQkUsc0JBQXNCRixJQUFBQSxnQkFBUyxFQUFDLHlCQUNoQ0csMkJBQTJCSCxJQUFBQSxnQkFBUyxFQUFDO0lBRTNDLFdBQWVJLElBQUFBLGdCQUFXLCtCQUFDO2FBQU1DLFdBQ25CQyxNQUFNLEVBQUVDLE9BQU8sRUFBRUMsU0FBUyxFQUFFQyxVQUFVO2dDQURuQko7UUFFN0IsSUFBSSxDQUFDQyxNQUFNLEdBQUdBO1FBQ2QsSUFBSSxDQUFDQyxPQUFPLEdBQUdBO1FBQ2YsSUFBSSxDQUFDQyxTQUFTLEdBQUdBO1FBQ2pCLElBQUksQ0FBQ0MsVUFBVSxHQUFHQTs7OztZQUdwQkMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSixNQUFNO1lBQ3BCOzs7WUFFQUssS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSixPQUFPO1lBQ3JCOzs7WUFFQUssS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxD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