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
            key: "resolve",
            value: function resolve(context) {
                var value;
                var comparisonString = this.string; ///
                context.trace("Resolving the '".concat(comparisonString, "' comparison..."));
                var leftValue = this.leftValue.resolve(context), rightValue = this.rightValue.resolve(context), leftValueType = leftValue.getType(), rightValueType = rightValue.getType();
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
                context.debug("...resolved the '".concat(comparisonString, "' comparison."));
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb20vY29tcGFyaXNvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IGRvbSBmcm9tIFwiLi4vZG9tXCI7XG5pbXBvcnQgRXhjZXB0aW9uIGZyb20gXCIuLi9leGNlcHRpb25cIjtcblxuaW1wb3J0IHsgRVFVQUxfVE8gfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBub2RlUXVlcnkgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5pbXBvcnQgeyBkb21Bc3NpZ25lZCB9IGZyb20gXCIuLi9kb21cIjtcblxuY29uc3QgdGVybWluYWxOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvY29tcGFyaXNvbi9AKlwiKSxcbiAgICAgIGxlZnRWYWx1ZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9jb21wYXJpc29uL3ZhbHVlWzBdXCIpLFxuICAgICAgcmlnaHRWYWx1ZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9jb21wYXJpc29uL3ZhbHVlWzFdXCIpLFxuICAgICAgY29tcGFyaXNvbk5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9jb25kaXRpb24vY29tcGFyaXNvblwiKTtcblxuZXhwb3J0IGRlZmF1bHQgZG9tQXNzaWduZWQoY2xhc3MgQ29tcGFyaXNvbiB7XG4gIGNvbnN0cnVjdG9yKHN0cmluZywgbmVnYXRlZCwgbGVmdFZhbHVlLCByaWdodFZhbHVlKSB7XG4gICAgdGhpcy5zdHJpbmcgPSBzdHJpbmc7XG4gICAgdGhpcy5uZWdhdGVkID0gbmVnYXRlZDtcbiAgICB0aGlzLmxlZnRWYWx1ZSA9IGxlZnRWYWx1ZTtcbiAgICB0aGlzLnJpZ2h0VmFsdWUgPSByaWdodFZhbHVlO1xuICB9XG5cbiAgZ2V0U3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLnN0cmluZztcbiAgfVxuXG4gIGlzTmVnYXRlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5uZWdhdGVkO1xuICB9XG5cbiAgZ2V0TGVmdFZhbHVlKCkge1xuICAgIHJldHVybiB0aGlzLmxlZnRWYWx1ZTtcbiAgfVxuXG4gIGdldFJpZ2h0VmFsdWUoKSB7XG4gICAgcmV0dXJuIHRoaXMucmlnaHRWYWx1ZTtcbiAgfVxuXG4gIHJlc29sdmUoY29udGV4dCkge1xuICAgIGxldCB2YWx1ZTtcblxuICAgIGNvbnN0IGNvbXBhcmlzb25TdHJpbmcgPSB0aGlzLnN0cmluZzsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBSZXNvbHZpbmcgdGhlICcke2NvbXBhcmlzb25TdHJpbmd9JyBjb21wYXJpc29uLi4uYCk7XG5cbiAgICBjb25zdCBsZWZ0VmFsdWUgPSB0aGlzLmxlZnRWYWx1ZS5yZXNvbHZlKGNvbnRleHQpLFxuICAgICAgICAgIHJpZ2h0VmFsdWUgPSB0aGlzLnJpZ2h0VmFsdWUucmVzb2x2ZShjb250ZXh0KSxcbiAgICAgICAgICBsZWZ0VmFsdWVUeXBlID0gbGVmdFZhbHVlLmdldFR5cGUoKSxcbiAgICAgICAgICByaWdodFZhbHVlVHlwZSA9IHJpZ2h0VmFsdWUuZ2V0VHlwZSgpO1xuXG4gICAgaWYgKGxlZnRWYWx1ZVR5cGUgIT09IHJpZ2h0VmFsdWVUeXBlKSB7XG4gICAgICBjb25zdCBsZWZ0VmFsdWVTdHJpbmcgPSBsZWZ0VmFsdWUuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgICByaWdodFZhbHVlU3RyaW5nID0gcmlnaHRWYWx1ZS5nZXRTdHJpbmcoKSxcbiAgICAgICAgICAgIG1lc3NhZ2UgPSBgVGhlICcke2xlZnRWYWx1ZVN0cmluZ30nIGxlZnQgdmFsdWUncyB0eXBlIGlzICcke2xlZnRWYWx1ZVR5cGV9JyB3aGVyZWFzIHRoZSAnJHtyaWdodFZhbHVlU3RyaW5nfScgcmlnaHQgdmFsdWUncyB0eXBlIGlzICcke3JpZ2h0VmFsdWVUeXBlfScuYCxcbiAgICAgICAgICAgIGV4Y2VwdGlvbiA9IEV4Y2VwdGlvbi5mcm9tTWVzc2FnZShtZXNzYWdlKTtcblxuICAgICAgdGhyb3cgZXhjZXB0aW9uO1xuICAgIH1cblxuICAgIGNvbnN0IGxlZnRWYWx1ZUVxdWFsVG9SaWdodFZhbHVlID0gbGVmdFZhbHVlLmlzRXF1YWxUbyhyaWdodFZhbHVlKTtcblxuICAgIGxldCBib29sZWFuID0gbGVmdFZhbHVlRXF1YWxUb1JpZ2h0VmFsdWU7IC8vL1xuXG4gICAgaWYgKHRoaXMubmVnYXRlZCkge1xuICAgICAgYm9vbGVhbiA9ICFib29sZWFuOyAvLy9cbiAgICB9XG5cbiAgICBjb25zdCB7IFZhbHVlIH0gPSBkb207XG5cbiAgICB2YWx1ZSA9IFZhbHVlLmZyb21Cb29sZWFuKGJvb2xlYW4sIGNvbnRleHQpO1xuXG4gICAgY29udGV4dC5kZWJ1ZyhgLi4ucmVzb2x2ZWQgdGhlICcke2NvbXBhcmlzb25TdHJpbmd9JyBjb21wYXJpc29uLmApO1xuXG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIkNvbXBhcmlzb25cIjtcblxuICBzdGF0aWMgZnJvbUNvbmRpdGlvbk5vZGUoY29uZGl0aW9uTm9kZSwgY29udGV4dCkge1xuICAgIGxldCBjb21wYXJpc29uID0gbnVsbDtcblxuICAgIGNvbnN0IGNvbXBhcmlzb25Ob2RlID0gY29tcGFyaXNvbk5vZGVRdWVyeShjb25kaXRpb25Ob2RlKTtcblxuICAgIGlmIChjb21wYXJpc29uTm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgeyBWYWx1ZSB9ID0gZG9tLFxuICAgICAgICAgICAgbm9kZSA9IGNvbXBhcmlzb25Ob2RlLCAgLy8vXG4gICAgICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgICAgIGxlZnRWYWx1ZU5vZGUgPSBsZWZ0VmFsdWVOb2RlUXVlcnkoY29tcGFyaXNvbk5vZGUpLFxuICAgICAgICAgICAgcmlnaHRWYWx1ZU5vZGUgPSByaWdodFZhbHVlTm9kZVF1ZXJ5KGNvbXBhcmlzb25Ob2RlKSxcbiAgICAgICAgICAgIG5lZ2F0ZWQgPSBuZWdhdGVkRnJvbUNvbXBhcmlzb25Ob2RlKGNvbXBhcmlzb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgICAgIGxlZnRWYWx1ZSA9IFZhbHVlLmZyb21WYWx1ZU5vZGUobGVmdFZhbHVlTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgICByaWdodFZhbHVlID0gVmFsdWUuZnJvbVZhbHVlTm9kZShyaWdodFZhbHVlTm9kZSwgY29udGV4dCk7XG5cbiAgICAgIGNvbXBhcmlzb24gPSBuZXcgQ29tcGFyaXNvbihzdHJpbmcsIG5lZ2F0ZWQsIGxlZnRWYWx1ZSwgcmlnaHRWYWx1ZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbXBhcmlzb247XG4gIH1cbn0pO1xuXG5mdW5jdGlvbiBuZWdhdGVkRnJvbUNvbXBhcmlzb25Ob2RlKGNvbXBhcmlzb25Ob2RlKSB7XG4gIGNvbnN0IHRlcm1pbmFsTm9kZSA9IHRlcm1pbmFsTm9kZVF1ZXJ5KGNvbXBhcmlzb25Ob2RlKSxcbiAgICAgICAgdGVybWluYWxOb2RlQ29udGVudCA9IHRlcm1pbmFsTm9kZS5nZXRDb250ZW50KCksXG4gICAgICAgIG5lZ2F0ZWQgPSAodGVybWluYWxOb2RlQ29udGVudCAhPT0gRVFVQUxfVE8pO1xuXG4gIHJldHVybiBuZWdhdGVkO1xufSJdLCJuYW1lcyI6WyJ0ZXJtaW5hbE5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsImxlZnRWYWx1ZU5vZGVRdWVyeSIsInJpZ2h0VmFsdWVOb2RlUXVlcnkiLCJjb21wYXJpc29uTm9kZVF1ZXJ5IiwiZG9tQXNzaWduZWQiLCJDb21wYXJpc29uIiwic3RyaW5nIiwibmVnYXRlZCIsImxlZnRWYWx1ZSIsInJpZ2h0VmFsdWUiLCJnZXRTdHJpbmciLCJpc05lZ2F0ZWQiLCJnZXRMZWZ0VmFsdWUiLCJnZXRSaWdodFZhbHVlIiwicmVzb2x2ZSIsImNvbnRleHQiLCJ2YWx1ZSIsImNvbXBhcmlzb25TdHJpbmciLCJ0cmFjZSIsImxlZnRWYWx1ZVR5cGUiLCJnZXRUeXBlIiwicmlnaHRWYWx1ZVR5cGUiLCJsZWZ0VmFsdWVTdHJpbmciLCJyaWdodFZhbHVlU3RyaW5nIiwibWVzc2FnZSIsImV4Y2VwdGlvbiIsIkV4Y2VwdGlvbiIsImZyb21NZXNzYWdlIiwibGVmdFZhbHVlRXF1YWxUb1JpZ2h0VmFsdWUiLCJpc0VxdWFsVG8iLCJib29sZWFuIiwiVmFsdWUiLCJkb20iLCJmcm9tQm9vbGVhbiIsImRlYnVnIiwiZnJvbUNvbmRpdGlvbk5vZGUiLCJjb25kaXRpb25Ob2RlIiwiY29tcGFyaXNvbiIsImNvbXBhcmlzb25Ob2RlIiwibm9kZSIsIm5vZGVBc1N0cmluZyIsImxlZnRWYWx1ZU5vZGUiLCJyaWdodFZhbHVlTm9kZSIsIm5lZ2F0ZWRGcm9tQ29tcGFyaXNvbk5vZGUiLCJmcm9tVmFsdWVOb2RlIiwibmFtZSIsInRlcm1pbmFsTm9kZSIsInRlcm1pbmFsTm9kZUNvbnRlbnQiLCJnZXRDb250ZW50IiwiRVFVQUxfVE8iXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQWNBOzs7ZUFBQTs7OzJEQVpnQjtnRUFDTTt5QkFFRztxQkFDQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHMUIsSUFBTUEsb0JBQW9CQyxJQUFBQSxnQkFBUyxFQUFDLG1CQUM5QkMscUJBQXFCRCxJQUFBQSxnQkFBUyxFQUFDLHlCQUMvQkUsc0JBQXNCRixJQUFBQSxnQkFBUyxFQUFDLHlCQUNoQ0csc0JBQXNCSCxJQUFBQSxnQkFBUyxFQUFDO0lBRXRDLFdBQWVJLElBQUFBLGdCQUFXLCtCQUFDO2FBQU1DLFdBQ25CQyxNQUFNLEVBQUVDLE9BQU8sRUFBRUMsU0FBUyxFQUFFQyxVQUFVO2dDQURuQko7UUFFN0IsSUFBSSxDQUFDQyxNQUFNLEdBQUdBO1FBQ2QsSUFBSSxDQUFDQyxPQUFPLEdBQUdBO1FBQ2YsSUFBSSxDQUFDQyxTQUFTLEdBQUdBO1FBQ2pCLElBQUksQ0FBQ0MsVUFBVSxHQUFHQTs7OztZQUdwQkMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFD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