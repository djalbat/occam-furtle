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
var terminalNodeQuery = (0, _query.nodeQuery)("/comparison/@*"), leftValueNodeQuery = (0, _query.nodeQuery)("/comparison/value[0]"), rightValueNodeQuery = (0, _query.nodeQuery)("/comparison/value[1]"), valueComparisonNodeQuery = (0, _query.nodeQuery)("/value/comparison"), conditionComparisonNodeQuery = (0, _query.nodeQuery)("/condition/comparison");
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
        },
        {
            key: "fromConditionNode",
            value: function fromConditionNode(conditionNode, context) {
                var comparison = null;
                var conditionComparisonNode = conditionComparisonNodeQuery(conditionNode);
                if (conditionComparisonNode !== null) {
                    var comparisonNode = conditionComparisonNode; ///
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
    var Value = _dom.default.Value, Comparison = _dom.default.Comparison, node = comparisonNode, string = context.nodeAsString(node), leftValueNode = leftValueNodeQuery(comparisonNode), rightValueNode = rightValueNodeQuery(comparisonNode), negated = negatedFromComparisonNode(comparisonNode, context), leftValue = Value.fromValueNode(leftValueNode, context), rightValue = Value.fromValueNode(rightValueNode, context), comparison = new Comparison(string, negated, leftValue, rightValue);
    return comparison;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb20vY29tcGFyaXNvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IGRvbSBmcm9tIFwiLi4vZG9tXCI7XG5pbXBvcnQgRXhjZXB0aW9uIGZyb20gXCIuLi9leGNlcHRpb25cIjtcblxuaW1wb3J0IHsgRVFVQUxfVE8gfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBub2RlUXVlcnkgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5pbXBvcnQgeyBkb21Bc3NpZ25lZCB9IGZyb20gXCIuLi9kb21cIjtcblxuY29uc3QgdGVybWluYWxOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvY29tcGFyaXNvbi9AKlwiKSxcbiAgICAgIGxlZnRWYWx1ZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9jb21wYXJpc29uL3ZhbHVlWzBdXCIpLFxuICAgICAgcmlnaHRWYWx1ZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9jb21wYXJpc29uL3ZhbHVlWzFdXCIpLFxuICAgICAgdmFsdWVDb21wYXJpc29uTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3ZhbHVlL2NvbXBhcmlzb25cIiksXG4gICAgICBjb25kaXRpb25Db21wYXJpc29uTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL2NvbmRpdGlvbi9jb21wYXJpc29uXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBkb21Bc3NpZ25lZChjbGFzcyBDb21wYXJpc29uIHtcbiAgY29uc3RydWN0b3Ioc3RyaW5nLCBuZWdhdGVkLCBsZWZ0VmFsdWUsIHJpZ2h0VmFsdWUpIHtcbiAgICB0aGlzLnN0cmluZyA9IHN0cmluZztcbiAgICB0aGlzLm5lZ2F0ZWQgPSBuZWdhdGVkO1xuICAgIHRoaXMubGVmdFZhbHVlID0gbGVmdFZhbHVlO1xuICAgIHRoaXMucmlnaHRWYWx1ZSA9IHJpZ2h0VmFsdWU7XG4gIH1cblxuICBnZXRTdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RyaW5nO1xuICB9XG5cbiAgaXNOZWdhdGVkKCkge1xuICAgIHJldHVybiB0aGlzLm5lZ2F0ZWQ7XG4gIH1cblxuICBnZXRMZWZ0VmFsdWUoKSB7XG4gICAgcmV0dXJuIHRoaXMubGVmdFZhbHVlO1xuICB9XG5cbiAgZ2V0UmlnaHRWYWx1ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5yaWdodFZhbHVlO1xuICB9XG5cbiAgZXZhbHVhdGUoY29udGV4dCkge1xuICAgIGxldCB2YWx1ZTtcblxuICAgIGNvbnN0IGNvbXBhcmlzb25TdHJpbmcgPSB0aGlzLnN0cmluZzsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBFdmFsdWF0aW5nIHRoZSAnJHtjb21wYXJpc29uU3RyaW5nfScgY29tcGFyaXNvbi4uLmApO1xuXG4gICAgY29uc3QgbGVmdFZhbHVlID0gdGhpcy5sZWZ0VmFsdWUuZXZhbHVhdGUoY29udGV4dCksXG4gICAgICAgICAgcmlnaHRWYWx1ZSA9IHRoaXMucmlnaHRWYWx1ZS5ldmFsdWF0ZShjb250ZXh0KSxcbiAgICAgICAgICBsZWZ0VmFsdWVUeXBlID0gbGVmdFZhbHVlLmdldFR5cGUoKSxcbiAgICAgICAgICByaWdodFZhbHVlVHlwZSA9IHJpZ2h0VmFsdWUuZ2V0VHlwZSgpO1xuXG4gICAgaWYgKGxlZnRWYWx1ZVR5cGUgIT09IHJpZ2h0VmFsdWVUeXBlKSB7XG4gICAgICBjb25zdCBsZWZ0VmFsdWVTdHJpbmcgPSBsZWZ0VmFsdWUuYXNTdHJpbmcoY29udGV4dCksXG4gICAgICAgICAgICByaWdodFZhbHVlU3RyaW5nID0gcmlnaHRWYWx1ZS5hc1N0cmluZyhjb250ZXh0KSxcbiAgICAgICAgICAgIG1lc3NhZ2UgPSBgVGhlICR7bGVmdFZhbHVlU3RyaW5nfSBsZWZ0IHZhbHVlJ3MgdHlwZSBpcyAnJHtsZWZ0VmFsdWVUeXBlfScgd2hlcmVhcyB0aGUgJHtyaWdodFZhbHVlU3RyaW5nfSByaWdodCB2YWx1ZSdzIHR5cGUgaXMgJyR7cmlnaHRWYWx1ZVR5cGV9Jy5gLFxuICAgICAgICAgICAgZXhjZXB0aW9uID0gRXhjZXB0aW9uLmZyb21NZXNzYWdlKG1lc3NhZ2UpO1xuXG4gICAgICB0aHJvdyBleGNlcHRpb247XG4gICAgfVxuXG4gICAgY29uc3QgbGVmdFZhbHVlRXF1YWxUb1JpZ2h0VmFsdWUgPSBsZWZ0VmFsdWUuaXNFcXVhbFRvKHJpZ2h0VmFsdWUpO1xuXG4gICAgbGV0IGJvb2xlYW4gPSBsZWZ0VmFsdWVFcXVhbFRvUmlnaHRWYWx1ZTsgLy8vXG5cbiAgICBpZiAodGhpcy5uZWdhdGVkKSB7XG4gICAgICBib29sZWFuID0gIWJvb2xlYW47IC8vL1xuICAgIH1cblxuICAgIGNvbnN0IHsgVmFsdWUgfSA9IGRvbTtcblxuICAgIHZhbHVlID0gVmFsdWUuZnJvbUJvb2xlYW4oYm9vbGVhbiwgY29udGV4dCk7XG5cbiAgICBjb250ZXh0LmRlYnVnKGAuLi5ldmFsdWF0ZWQgdGhlICcke2NvbXBhcmlzb25TdHJpbmd9JyBjb21wYXJpc29uLmApO1xuXG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIkNvbXBhcmlzb25cIjtcblxuICBzdGF0aWMgZnJvbVZhbHVlTm9kZSh2YWx1ZE5vZGUsIGNvbnRleHQpIHtcbiAgICBsZXQgY29tcGFyaXNvbiA9IG51bGw7XG5cbiAgICBjb25zdCB2YWx1ZUNvbXBhcmlzb25Ob2RlID0gdmFsdWVDb21wYXJpc29uTm9kZVF1ZXJ5KHZhbHVkTm9kZSk7XG5cbiAgICBpZiAodmFsdWVDb21wYXJpc29uTm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgY29tcGFyaXNvbk5vZGUgPSB2YWx1ZUNvbXBhcmlzb25Ob2RlOyAvLy9cblxuICAgICAgY29tcGFyaXNvbiA9IGNvbXBhcmlzb25Gcm9tQ29tcGFyaXNvbk5vZGUoY29tcGFyaXNvbk5vZGUsIGNvbnRleHQpO1xuICAgIH1cblxuICAgIHJldHVybiBjb21wYXJpc29uO1xuICB9XG5cbiAgc3RhdGljIGZyb21Db25kaXRpb25Ob2RlKGNvbmRpdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgICBsZXQgY29tcGFyaXNvbiA9IG51bGw7XG5cbiAgICBjb25zdCBjb25kaXRpb25Db21wYXJpc29uTm9kZSA9IGNvbmRpdGlvbkNvbXBhcmlzb25Ob2RlUXVlcnkoY29uZGl0aW9uTm9kZSk7XG5cbiAgICBpZiAoY29uZGl0aW9uQ29tcGFyaXNvbk5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IGNvbXBhcmlzb25Ob2RlID0gY29uZGl0aW9uQ29tcGFyaXNvbk5vZGU7IC8vL1xuXG4gICAgICBjb21wYXJpc29uID0gY29tcGFyaXNvbkZyb21Db21wYXJpc29uTm9kZShjb21wYXJpc29uTm9kZSwgY29udGV4dCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbXBhcmlzb247XG4gIH1cbn0pO1xuXG5mdW5jdGlvbiBuZWdhdGVkRnJvbUNvbXBhcmlzb25Ob2RlKGNvbXBhcmlzb25Ob2RlKSB7XG4gIGNvbnN0IHRlcm1pbmFsTm9kZSA9IHRlcm1pbmFsTm9kZVF1ZXJ5KGNvbXBhcmlzb25Ob2RlKSxcbiAgICAgICAgdGVybWluYWxOb2RlQ29udGVudCA9IHRlcm1pbmFsTm9kZS5nZXRDb250ZW50KCksXG4gICAgICAgIG5lZ2F0ZWQgPSAodGVybWluYWxOb2RlQ29udGVudCAhPT0gRVFVQUxfVE8pO1xuXG4gIHJldHVybiBuZWdhdGVkO1xufVxuXG5mdW5jdGlvbiBjb21wYXJpc29uRnJvbUNvbXBhcmlzb25Ob2RlKGNvbXBhcmlzb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgVmFsdWUsIENvbXBhcmlzb24gfSA9IGRvbSxcbiAgICAgICAgbm9kZSA9IGNvbXBhcmlzb25Ob2RlLCAgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICBsZWZ0VmFsdWVOb2RlID0gbGVmdFZhbHVlTm9kZVF1ZXJ5KGNvbXBhcmlzb25Ob2RlKSxcbiAgICAgICAgcmlnaHRWYWx1ZU5vZGUgPSByaWdodFZhbHVlTm9kZVF1ZXJ5KGNvbXBhcmlzb25Ob2RlKSxcbiAgICAgICAgbmVnYXRlZCA9IG5lZ2F0ZWRGcm9tQ29tcGFyaXNvbk5vZGUoY29tcGFyaXNvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBsZWZ0VmFsdWUgPSBWYWx1ZS5mcm9tVmFsdWVOb2RlKGxlZnRWYWx1ZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICByaWdodFZhbHVlID0gVmFsdWUuZnJvbVZhbHVlTm9kZShyaWdodFZhbHVlTm9kZSwgY29udGV4dCksXG4gICAgICAgIGNvbXBhcmlzb24gPSBuZXcgQ29tcGFyaXNvbihzdHJpbmcsIG5lZ2F0ZWQsIGxlZnRWYWx1ZSwgcmlnaHRWYWx1ZSk7XG5cbiAgcmV0dXJuIGNvbXBhcmlzb247XG59XG4iXSwibmFtZXMiOlsidGVybWluYWxOb2RlUXVlcnkiLCJub2RlUXVlcnkiLCJsZWZ0VmFsdWVOb2RlUXVlcnkiLCJyaWdodFZhbHVlTm9kZVF1ZXJ5IiwidmFsdWVDb21wYXJpc29uTm9kZVF1ZXJ5IiwiY29uZGl0aW9uQ29tcGFyaXNvbk5vZGVRdWVyeSIsImRvbUFzc2lnbmVkIiwiQ29tcGFyaXNvbiIsInN0cmluZyIsIm5lZ2F0ZWQiLCJsZWZ0VmFsdWUiLCJyaWdodFZhbHVlIiwiZ2V0U3RyaW5nIiwiaXNOZWdhdGVkIiwiZ2V0TGVmdFZhbHVlIiwiZ2V0UmlnaHRWYWx1ZSIsImV2YWx1YXRlIiwiY29udGV4dCIsInZhbHVlIiwiY29tcGFyaXNvblN0cmluZyIsInRyYWNlIiwibGVmdFZhbHVlVHlwZSIsImdldFR5cGUiLCJyaWdodFZhbHVlVHlwZSIsImxlZnRWYWx1ZVN0cmluZyIsImFzU3RyaW5nIiwicmlnaHRWYWx1ZVN0cmluZyIsIm1lc3NhZ2UiLCJleGNlcHRpb24iLCJFeGNlcHRpb24iLCJmcm9tTWVzc2FnZSIsImxlZnRWYWx1ZUVxdWFsVG9SaWdodFZhbHVlIiwiaXNFcXVhbFRvIiwiYm9vbGVhbiIsIlZhbHVlIiwiZG9tIiwiZnJvbUJvb2xlYW4iLCJkZWJ1ZyIsImZyb21WYWx1ZU5vZGUiLCJ2YWx1ZE5vZGUiLCJjb21wYXJpc29uIiwidmFsdWVDb21wYXJpc29uTm9kZSIsImNvbXBhcmlzb25Ob2RlIiwiY29tcGFyaXNvbkZyb21Db21wYXJpc29uTm9kZSIsImZyb21Db25kaXRpb25Ob2RlIiwiY29uZGl0aW9uTm9kZSIsImNvbmRpdGlvbkNvbXBhcmlzb25Ob2RlIiwibmFtZSIsIm5lZ2F0ZWRGcm9tQ29tcGFyaXNvbk5vZGUiLCJ0ZXJtaW5hbE5vZGUiLCJ0ZXJtaW5hbE5vZGVDb250ZW50IiwiZ2V0Q29udGVudCIsIkVRVUFMX1RPIiwibm9kZSIsIm5vZGVBc1N0cmluZyIsImxlZnRWYWx1ZU5vZGUiLCJyaWdodFZhbHVlTm9kZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBZUE7OztlQUFBOzs7MkRBYmdCO2dFQUNNO3lCQUVHO3FCQUNDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUcxQixJQUFNQSxvQkFBb0JDLElBQUFBLGdCQUFTLEVBQUMsbUJBQzlCQyxxQkFBcUJELElBQUFBLGdCQUFTLEVBQUMseUJBQy9CRSxzQkFBc0JGLElBQUFBLGdCQUFTLEVBQUMseUJBQ2hDRywyQkFBMkJILElBQUFBLGdCQUFTLEVBQUMsc0JBQ3JDSSwrQkFBK0JKLElBQUFBLGdCQUFTLEVBQUM7SUFFL0MsV0FBZUssSUFBQUEsZ0JBQVcsK0JBQUM7YUFBTUMsV0FDbkJDLE1BQU0sRUFBRUMsT0FBTyxFQUFFQyxTQUFTLEVBQUVDLFVBQVU7Z0NBRG5CSjtRQUU3QixJQUFJLENBQUNDLE1BQU0sR0FBR0E7UUFDZCxJQUFJLENBQUNDLE9BQU8sR0FBR0E7UUFDZixJQUFJLENBQUNDLFNBQVMsR0FBR0E7UUFDakIsSUFBSSxDQUFDQyxVQUFVLEdBQUdBOzs7O1lBR3BCQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNKLE1BQU07WUFDcEI7OztZQUVBSyxLQUFBQTttQkFBQUEsU0FB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