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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb20vY29tcGFyaXNvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IGRvbSBmcm9tIFwiLi4vZG9tXCI7XG5pbXBvcnQgRXhjZXB0aW9uIGZyb20gXCIuLi9leGNlcHRpb25cIjtcblxuaW1wb3J0IHsgRVFVQUxfVE8gfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBub2RlUXVlcnkgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5pbXBvcnQgeyBkb21Bc3NpZ25lZCB9IGZyb20gXCIuLi9kb21cIjtcblxuY29uc3QgdGVybWluYWxOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvY29tcGFyaXNvbi9AKlwiKSxcbiAgICAgIGxlZnRWYWx1ZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9jb21wYXJpc29uL3ZhbHVlWzBdXCIpLFxuICAgICAgcmlnaHRWYWx1ZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9jb21wYXJpc29uL3ZhbHVlWzFdXCIpLFxuICAgICAgY29tcGFyaXNvbk5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9jb25kaXRpb24vY29tcGFyaXNvblwiKTtcblxuZXhwb3J0IGRlZmF1bHQgZG9tQXNzaWduZWQoY2xhc3MgQ29tcGFyaXNvbiB7XG4gIGNvbnN0cnVjdG9yKHN0cmluZywgbmVnYXRlZCwgbGVmdFZhbHVlLCByaWdodFZhbHVlKSB7XG4gICAgdGhpcy5zdHJpbmcgPSBzdHJpbmc7XG4gICAgdGhpcy5uZWdhdGVkID0gbmVnYXRlZDtcbiAgICB0aGlzLmxlZnRWYWx1ZSA9IGxlZnRWYWx1ZTtcbiAgICB0aGlzLnJpZ2h0VmFsdWUgPSByaWdodFZhbHVlO1xuICB9XG5cbiAgZ2V0U3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLnN0cmluZztcbiAgfVxuXG4gIGlzTmVnYXRlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5uZWdhdGVkO1xuICB9XG5cbiAgZ2V0TGVmdFZhbHVlKCkge1xuICAgIHJldHVybiB0aGlzLmxlZnRWYWx1ZTtcbiAgfVxuXG4gIGdldFJpZ2h0VmFsdWUoKSB7XG4gICAgcmV0dXJuIHRoaXMucmlnaHRWYWx1ZTtcbiAgfVxuXG4gIHJlc29sdmUoY29udGV4dCkge1xuICAgIGxldCB2YWx1ZTtcblxuICAgIGNvbnN0IGNvbXBhcmlzb25TdHJpbmcgPSB0aGlzLnN0cmluZzsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBSZXNvbHZpbmcgdGhlICcke2NvbXBhcmlzb25TdHJpbmd9JyBjb21wYXJpc29uLi4uYCk7XG5cbiAgICBjb25zdCBsZWZ0VmFsdWUgPSB0aGlzLmxlZnRWYWx1ZS5yZXNvbHZlKGNvbnRleHQpLFxuICAgICAgICAgIHJpZ2h0VmFsdWUgPSB0aGlzLnJpZ2h0VmFsdWUucmVzb2x2ZShjb250ZXh0KSxcbiAgICAgICAgICBsZWZ0VmFsdWVUeXBlID0gbGVmdFZhbHVlLmdldFR5cGUoKSxcbiAgICAgICAgICByaWdodFZhbHVlVHlwZSA9IHJpZ2h0VmFsdWUuZ2V0VHlwZSgpO1xuXG4gICAgaWYgKGxlZnRWYWx1ZVR5cGUgIT09IHJpZ2h0VmFsdWVUeXBlKSB7XG4gICAgICBjb25zdCBsZWZ0VmFsdWVTdHJpbmcgPSBsZWZ0VmFsdWUuYXNTdHJpbmcoY29udGV4dCksXG4gICAgICAgICAgICByaWdodFZhbHVlU3RyaW5nID0gcmlnaHRWYWx1ZS5hc1N0cmluZyhjb250ZXh0KSxcbiAgICAgICAgICAgIG1lc3NhZ2UgPSBgVGhlICR7bGVmdFZhbHVlU3RyaW5nfSBsZWZ0IHZhbHVlJ3MgdHlwZSBpcyAnJHtsZWZ0VmFsdWVUeXBlfScgd2hlcmVhcyB0aGUgJHtyaWdodFZhbHVlU3RyaW5nfSByaWdodCB2YWx1ZSdzIHR5cGUgaXMgJyR7cmlnaHRWYWx1ZVR5cGV9Jy5gLFxuICAgICAgICAgICAgZXhjZXB0aW9uID0gRXhjZXB0aW9uLmZyb21NZXNzYWdlKG1lc3NhZ2UpO1xuXG4gICAgICB0aHJvdyBleGNlcHRpb247XG4gICAgfVxuXG4gICAgY29uc3QgbGVmdFZhbHVlRXF1YWxUb1JpZ2h0VmFsdWUgPSBsZWZ0VmFsdWUuaXNFcXVhbFRvKHJpZ2h0VmFsdWUpO1xuXG4gICAgbGV0IGJvb2xlYW4gPSBsZWZ0VmFsdWVFcXVhbFRvUmlnaHRWYWx1ZTsgLy8vXG5cbiAgICBpZiAodGhpcy5uZWdhdGVkKSB7XG4gICAgICBib29sZWFuID0gIWJvb2xlYW47IC8vL1xuICAgIH1cblxuICAgIGNvbnN0IHsgVmFsdWUgfSA9IGRvbTtcblxuICAgIHZhbHVlID0gVmFsdWUuZnJvbUJvb2xlYW4oYm9vbGVhbiwgY29udGV4dCk7XG5cbiAgICBjb250ZXh0LmRlYnVnKGAuLi5yZXNvbHZlZCB0aGUgJyR7Y29tcGFyaXNvblN0cmluZ30nIGNvbXBhcmlzb24uYCk7XG5cbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiQ29tcGFyaXNvblwiO1xuXG4gIHN0YXRpYyBmcm9tQ29uZGl0aW9uTm9kZShjb25kaXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gICAgbGV0IGNvbXBhcmlzb24gPSBudWxsO1xuXG4gICAgY29uc3QgY29tcGFyaXNvbk5vZGUgPSBjb21wYXJpc29uTm9kZVF1ZXJ5KGNvbmRpdGlvbk5vZGUpO1xuXG4gICAgaWYgKGNvbXBhcmlzb25Ob2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCB7IFZhbHVlIH0gPSBkb20sXG4gICAgICAgICAgICBub2RlID0gY29tcGFyaXNvbk5vZGUsICAvLy9cbiAgICAgICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICAgICAgbGVmdFZhbHVlTm9kZSA9IGxlZnRWYWx1ZU5vZGVRdWVyeShjb21wYXJpc29uTm9kZSksXG4gICAgICAgICAgICByaWdodFZhbHVlTm9kZSA9IHJpZ2h0VmFsdWVOb2RlUXVlcnkoY29tcGFyaXNvbk5vZGUpLFxuICAgICAgICAgICAgbmVnYXRlZCA9IG5lZ2F0ZWRGcm9tQ29tcGFyaXNvbk5vZGUoY29tcGFyaXNvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgICAgbGVmdFZhbHVlID0gVmFsdWUuZnJvbVZhbHVlTm9kZShsZWZ0VmFsdWVOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgICAgIHJpZ2h0VmFsdWUgPSBWYWx1ZS5mcm9tVmFsdWVOb2RlKHJpZ2h0VmFsdWVOb2RlLCBjb250ZXh0KTtcblxuICAgICAgY29tcGFyaXNvbiA9IG5ldyBDb21wYXJpc29uKHN0cmluZywgbmVnYXRlZCwgbGVmdFZhbHVlLCByaWdodFZhbHVlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gY29tcGFyaXNvbjtcbiAgfVxufSk7XG5cbmZ1bmN0aW9uIG5lZ2F0ZWRGcm9tQ29tcGFyaXNvbk5vZGUoY29tcGFyaXNvbk5vZGUpIHtcbiAgY29uc3QgdGVybWluYWxOb2RlID0gdGVybWluYWxOb2RlUXVlcnkoY29tcGFyaXNvbk5vZGUpLFxuICAgICAgICB0ZXJtaW5hbE5vZGVDb250ZW50ID0gdGVybWluYWxOb2RlLmdldENvbnRlbnQoKSxcbiAgICAgICAgbmVnYXRlZCA9ICh0ZXJtaW5hbE5vZGVDb250ZW50ICE9PSBFUVVBTF9UTyk7XG5cbiAgcmV0dXJuIG5lZ2F0ZWQ7XG59Il0sIm5hbWVzIjpbInRlcm1pbmFsTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5IiwibGVmdFZhbHVlTm9kZVF1ZXJ5IiwicmlnaHRWYWx1ZU5vZGVRdWVyeSIsImNvbXBhcmlzb25Ob2RlUXVlcnkiLCJkb21Bc3NpZ25lZCIsIkNvbXBhcmlzb24iLCJzdHJpbmciLCJuZWdhdGVkIiwibGVmdFZhbHVlIiwicmlnaHRWYWx1ZSIsImdldFN0cmluZyIsImlzTmVnYXRlZCIsImdldExlZnRWYWx1ZSIsImdldFJpZ2h0VmFsdWUiLCJyZXNvbHZlIiwiY29udGV4dCIsInZhbHVlIiwiY29tcGFyaXNvblN0cmluZyIsInRyYWNlIiwibGVmdFZhbHVlVHlwZSIsImdldFR5cGUiLCJyaWdodFZhbHVlVHlwZSIsImxlZnRWYWx1ZVN0cmluZyIsImFzU3RyaW5nIiwicmlnaHRWYWx1ZVN0cmluZyIsIm1lc3NhZ2UiLCJleGNlcHRpb24iLCJFeGNlcHRpb24iLCJmcm9tTWVzc2FnZSIsImxlZnRWYWx1ZUVxdWFsVG9SaWdodFZhbHVlIiwiaXNFcXVhbFRvIiwiYm9vbGVhbiIsIlZhbHVlIiwiZG9tIiwiZnJvbUJvb2xlYW4iLCJkZWJ1ZyIsImZyb21Db25kaXRpb25Ob2RlIiwiY29uZGl0aW9uTm9kZSIsImNvbXBhcmlzb24iLCJjb21wYXJpc29uTm9kZSIsIm5vZGUiLCJub2RlQXNTdHJpbmciLCJsZWZ0VmFsdWVOb2RlIiwicmlnaHRWYWx1ZU5vZGUiLCJuZWdhdGVkRnJvbUNvbXBhcmlzb25Ob2RlIiwiZnJvbVZhbHVlTm9kZSIsIm5hbWUiLCJ0ZXJtaW5hbE5vZGUiLCJ0ZXJtaW5hbE5vZGVDb250ZW50IiwiZ2V0Q29udGVudCIsIkVRVUFMX1RPIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFjQTs7O2VBQUE7OzsyREFaZ0I7Z0VBQ007eUJBRUc7cUJBQ0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRzFCLElBQU1BLG9CQUFvQkMsSUFBQUEsZ0JBQVMsRUFBQyxtQkFDOUJDLHFCQUFxQkQsSUFBQUEsZ0JBQVMsRUFBQyx5QkFDL0JFLHNCQUFzQkYsSUFBQUEsZ0JBQVMsRUFBQyx5QkFDaENHLHNCQUFzQkgsSUFBQUEsZ0JBQVMsRUFBQztJQUV0QyxXQUFlSSxJQUFBQSxnQkFBVywrQkFBQzthQUFNQyxXQUNuQkMsTUFBTSxFQUFFQyxPQUFPLEVBQUVDLFNBQVMsRUFBRUMsVUFBVTtnQ0FEbkJKO1FBRTdCLElBQUksQ0FBQ0MsTUFBTSxHQUFHQTtRQUNkLElBQUksQ0FBQ0MsT0FBTyxHQUFHQTtRQUNmLElBQUksQ0FBQ0MsU0FBUyxHQUFHQTtRQUNqQixJQUFJLENBQUNDLFVBQVUsR0FBR0E7Ozs7WUFHcEJDLEtBQUFBO21CQUFBQSxTQUFBQTtn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