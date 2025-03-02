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
    var Value = _dom.default.Value, Comparison = _dom.default.Comparison, leftValueNode = leftValueNodeQuery(comparisonNode), rightValueNode = rightValueNodeQuery(comparisonNode), rightValue = Value.fromValueNode(rightValueNode, context), leftValue = Value.fromValueNode(leftValueNode, context), negated = negatedFromComparisonNode(comparisonNode, context), string = stringFromNegatedLeftValueAndRightValue(negated, leftValue, rightValue, context), comparison = new Comparison(string, negated, leftValue, rightValue);
    return comparison;
}
function stringFromNegatedLeftValueAndRightValue(negated, leftValue, rightValue, context) {
    var operatorString = negated ? _constants.EQUAL_TO : _constants.NOT_EQUAL_TO, leftValueString = leftValue.asString(context), rightValueString = rightValue.asString(context), string = "".concat(leftValueString, " ").concat(operatorString, " ").concat(rightValueString);
    return string;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb20vY29tcGFyaXNvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IGRvbSBmcm9tIFwiLi4vZG9tXCI7XG5pbXBvcnQgRXhjZXB0aW9uIGZyb20gXCIuLi9leGNlcHRpb25cIjtcblxuaW1wb3J0IHsgbm9kZVF1ZXJ5IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9xdWVyeVwiO1xuaW1wb3J0IHsgZG9tQXNzaWduZWQgfSBmcm9tIFwiLi4vZG9tXCI7XG5pbXBvcnQgeyBFUVVBTF9UTywgTk9UX0VRVUFMX1RPIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuXG5jb25zdCB0ZXJtaW5hbE5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9jb21wYXJpc29uL0AqXCIpLFxuICAgICAgbGVmdFZhbHVlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL2NvbXBhcmlzb24vdmFsdWVbMF1cIiksXG4gICAgICByaWdodFZhbHVlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL2NvbXBhcmlzb24vdmFsdWVbMV1cIiksXG4gICAgICB2YWx1ZUNvbXBhcmlzb25Ob2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvdmFsdWUvY29tcGFyaXNvblwiKSxcbiAgICAgIGNvbmRpdGlvbkNvbXBhcmlzb25Ob2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvY29uZGl0aW9uL2NvbXBhcmlzb25cIik7XG5cbmV4cG9ydCBkZWZhdWx0IGRvbUFzc2lnbmVkKGNsYXNzIENvbXBhcmlzb24ge1xuICBjb25zdHJ1Y3RvcihzdHJpbmcsIG5lZ2F0ZWQsIGxlZnRWYWx1ZSwgcmlnaHRWYWx1ZSkge1xuICAgIHRoaXMuc3RyaW5nID0gc3RyaW5nO1xuICAgIHRoaXMubmVnYXRlZCA9IG5lZ2F0ZWQ7XG4gICAgdGhpcy5sZWZ0VmFsdWUgPSBsZWZ0VmFsdWU7XG4gICAgdGhpcy5yaWdodFZhbHVlID0gcmlnaHRWYWx1ZTtcbiAgfVxuXG4gIGdldFN0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5zdHJpbmc7XG4gIH1cblxuICBpc05lZ2F0ZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMubmVnYXRlZDtcbiAgfVxuXG4gIGdldExlZnRWYWx1ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5sZWZ0VmFsdWU7XG4gIH1cblxuICBnZXRSaWdodFZhbHVlKCkge1xuICAgIHJldHVybiB0aGlzLnJpZ2h0VmFsdWU7XG4gIH1cblxuICBldmFsdWF0ZShjb250ZXh0KSB7XG4gICAgbGV0IHZhbHVlO1xuXG4gICAgY29uc3QgY29tcGFyaXNvblN0cmluZyA9IHRoaXMuc3RyaW5nOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYEV2YWx1YXRpbmcgdGhlICcke2NvbXBhcmlzb25TdHJpbmd9JyBjb21wYXJpc29uLi4uYCk7XG5cbiAgICBjb25zdCBsZWZ0VmFsdWUgPSB0aGlzLmxlZnRWYWx1ZS5ldmFsdWF0ZShjb250ZXh0KSxcbiAgICAgICAgICByaWdodFZhbHVlID0gdGhpcy5yaWdodFZhbHVlLmV2YWx1YXRlKGNvbnRleHQpLFxuICAgICAgICAgIGxlZnRWYWx1ZVR5cGUgPSBsZWZ0VmFsdWUuZ2V0VHlwZSgpLFxuICAgICAgICAgIHJpZ2h0VmFsdWVUeXBlID0gcmlnaHRWYWx1ZS5nZXRUeXBlKCk7XG5cbiAgICBpZiAobGVmdFZhbHVlVHlwZSAhPT0gcmlnaHRWYWx1ZVR5cGUpIHtcbiAgICAgIGNvbnN0IGxlZnRWYWx1ZVN0cmluZyA9IGxlZnRWYWx1ZS5hc1N0cmluZyhjb250ZXh0KSxcbiAgICAgICAgICAgIHJpZ2h0VmFsdWVTdHJpbmcgPSByaWdodFZhbHVlLmFzU3RyaW5nKGNvbnRleHQpLFxuICAgICAgICAgICAgbWVzc2FnZSA9IGBUaGUgJHtsZWZ0VmFsdWVTdHJpbmd9IGxlZnQgdmFsdWUncyB0eXBlIGlzICcke2xlZnRWYWx1ZVR5cGV9JyB3aGVyZWFzIHRoZSAke3JpZ2h0VmFsdWVTdHJpbmd9IHJpZ2h0IHZhbHVlJ3MgdHlwZSBpcyAnJHtyaWdodFZhbHVlVHlwZX0nLmAsXG4gICAgICAgICAgICBleGNlcHRpb24gPSBFeGNlcHRpb24uZnJvbU1lc3NhZ2UobWVzc2FnZSk7XG5cbiAgICAgIHRocm93IGV4Y2VwdGlvbjtcbiAgICB9XG5cbiAgICBjb25zdCBsZWZ0VmFsdWVFcXVhbFRvUmlnaHRWYWx1ZSA9IGxlZnRWYWx1ZS5pc0VxdWFsVG8ocmlnaHRWYWx1ZSk7XG5cbiAgICBsZXQgYm9vbGVhbiA9IGxlZnRWYWx1ZUVxdWFsVG9SaWdodFZhbHVlOyAvLy9cblxuICAgIGlmICh0aGlzLm5lZ2F0ZWQpIHtcbiAgICAgIGJvb2xlYW4gPSAhYm9vbGVhbjsgLy8vXG4gICAgfVxuXG4gICAgY29uc3QgeyBWYWx1ZSB9ID0gZG9tO1xuXG4gICAgdmFsdWUgPSBWYWx1ZS5mcm9tQm9vbGVhbihib29sZWFuLCBjb250ZXh0KTtcblxuICAgIGNvbnRleHQuZGVidWcoYC4uLmV2YWx1YXRlZCB0aGUgJyR7Y29tcGFyaXNvblN0cmluZ30nIGNvbXBhcmlzb24uYCk7XG5cbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiQ29tcGFyaXNvblwiO1xuXG4gIHN0YXRpYyBmcm9tVmFsdWVOb2RlKHZhbHVkTm9kZSwgY29udGV4dCkge1xuICAgIGxldCBjb21wYXJpc29uID0gbnVsbDtcblxuICAgIGNvbnN0IHZhbHVlQ29tcGFyaXNvbk5vZGUgPSB2YWx1ZUNvbXBhcmlzb25Ob2RlUXVlcnkodmFsdWROb2RlKTtcblxuICAgIGlmICh2YWx1ZUNvbXBhcmlzb25Ob2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBjb21wYXJpc29uTm9kZSA9IHZhbHVlQ29tcGFyaXNvbk5vZGU7IC8vL1xuXG4gICAgICBjb21wYXJpc29uID0gY29tcGFyaXNvbkZyb21Db21wYXJpc29uTm9kZShjb21wYXJpc29uTm9kZSwgY29udGV4dCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbXBhcmlzb247XG4gIH1cblxuICBzdGF0aWMgZnJvbUNvbmRpdGlvbk5vZGUoY29uZGl0aW9uTm9kZSwgY29udGV4dCkge1xuICAgIGxldCBjb21wYXJpc29uID0gbnVsbDtcblxuICAgIGNvbnN0IGNvbmRpdGlvbkNvbXBhcmlzb25Ob2RlID0gY29uZGl0aW9uQ29tcGFyaXNvbk5vZGVRdWVyeShjb25kaXRpb25Ob2RlKTtcblxuICAgIGlmIChjb25kaXRpb25Db21wYXJpc29uTm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgY29tcGFyaXNvbk5vZGUgPSBjb25kaXRpb25Db21wYXJpc29uTm9kZTsgLy8vXG5cbiAgICAgIGNvbXBhcmlzb24gPSBjb21wYXJpc29uRnJvbUNvbXBhcmlzb25Ob2RlKGNvbXBhcmlzb25Ob2RlLCBjb250ZXh0KTtcbiAgICB9XG5cbiAgICByZXR1cm4gY29tcGFyaXNvbjtcbiAgfVxufSk7XG5cbmZ1bmN0aW9uIG5lZ2F0ZWRGcm9tQ29tcGFyaXNvbk5vZGUoY29tcGFyaXNvbk5vZGUpIHtcbiAgY29uc3QgdGVybWluYWxOb2RlID0gdGVybWluYWxOb2RlUXVlcnkoY29tcGFyaXNvbk5vZGUpLFxuICAgICAgICB0ZXJtaW5hbE5vZGVDb250ZW50ID0gdGVybWluYWxOb2RlLmdldENvbnRlbnQoKSxcbiAgICAgICAgbmVnYXRlZCA9ICh0ZXJtaW5hbE5vZGVDb250ZW50ICE9PSBFUVVBTF9UTyk7XG5cbiAgcmV0dXJuIG5lZ2F0ZWQ7XG59XG5cbmZ1bmN0aW9uIGNvbXBhcmlzb25Gcm9tQ29tcGFyaXNvbk5vZGUoY29tcGFyaXNvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBWYWx1ZSwgQ29tcGFyaXNvbiB9ID0gZG9tLFxuICAgICAgICBsZWZ0VmFsdWVOb2RlID0gbGVmdFZhbHVlTm9kZVF1ZXJ5KGNvbXBhcmlzb25Ob2RlKSxcbiAgICAgICAgcmlnaHRWYWx1ZU5vZGUgPSByaWdodFZhbHVlTm9kZVF1ZXJ5KGNvbXBhcmlzb25Ob2RlKSxcbiAgICAgICAgcmlnaHRWYWx1ZSA9IFZhbHVlLmZyb21WYWx1ZU5vZGUocmlnaHRWYWx1ZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICBsZWZ0VmFsdWUgPSBWYWx1ZS5mcm9tVmFsdWVOb2RlKGxlZnRWYWx1ZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICBuZWdhdGVkID0gbmVnYXRlZEZyb21Db21wYXJpc29uTm9kZShjb21wYXJpc29uTm9kZSwgY29udGV4dCksXG4gICAgICAgIHN0cmluZyA9IHN0cmluZ0Zyb21OZWdhdGVkTGVmdFZhbHVlQW5kUmlnaHRWYWx1ZShuZWdhdGVkLCBsZWZ0VmFsdWUsIHJpZ2h0VmFsdWUsIGNvbnRleHQpLFxuICAgICAgICBjb21wYXJpc29uID0gbmV3IENvbXBhcmlzb24oc3RyaW5nLCBuZWdhdGVkLCBsZWZ0VmFsdWUsIHJpZ2h0VmFsdWUpO1xuXG4gIHJldHVybiBjb21wYXJpc29uO1xufVxuXG5mdW5jdGlvbiBzdHJpbmdGcm9tTmVnYXRlZExlZnRWYWx1ZUFuZFJpZ2h0VmFsdWUobmVnYXRlZCwgbGVmdFZhbHVlLCByaWdodFZhbHVlLCBjb250ZXh0KSB7XG4gIGNvbnN0IG9wZXJhdG9yU3RyaW5nID0gbmVnYXRlZCA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICBFUVVBTF9UTyA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgTk9UX0VRVUFMX1RPLFxuICAgICAgICBsZWZ0VmFsdWVTdHJpbmcgPSBsZWZ0VmFsdWUuYXNTdHJpbmcoY29udGV4dCksXG4gICAgICAgIHJpZ2h0VmFsdWVTdHJpbmcgPSByaWdodFZhbHVlLmFzU3RyaW5nKGNvbnRleHQpLFxuICAgICAgICBzdHJpbmcgPSBgJHtsZWZ0VmFsdWVTdHJpbmd9ICR7b3BlcmF0b3JTdHJpbmd9ICR7cmlnaHRWYWx1ZVN0cmluZ31gO1xuXG4gIHJldHVybiBzdHJpbmc7XG59XG4iXSwibmFtZXMiOlsidGVybWluYWxOb2RlUXVlcnkiLCJub2RlUXVlcnkiLCJsZWZ0VmFsdWVOb2RlUXVlcnkiLCJyaWdodFZhbHVlTm9kZVF1ZXJ5IiwidmFsdWVDb21wYXJpc29uTm9kZVF1ZXJ5IiwiY29uZGl0aW9uQ29tcGFyaXNvbk5vZGVRdWVyeSIsImRvbUFzc2lnbmVkIiwiQ29tcGFyaXNvbiIsInN0cmluZyIsIm5lZ2F0ZWQiLCJsZWZ0VmFsdWUiLCJyaWdodFZhbHVlIiwiZ2V0U3RyaW5nIiwiaXNOZWdhdGVkIiwiZ2V0TGVmdFZhbHVlIiwiZ2V0UmlnaHRWYWx1ZSIsImV2YWx1YXRlIiwiY29udGV4dCIsInZhbHVlIiwiY29tcGFyaXNvblN0cmluZyIsInRyYWNlIiwibGVmdFZhbHVlVHlwZSIsImdldFR5cGUiLCJyaWdodFZhbHVlVHlwZSIsImxlZnRWYWx1ZVN0cmluZyIsImFzU3RyaW5nIiwicmlnaHRWYWx1ZVN0cmluZyIsIm1lc3NhZ2UiLCJleGNlcHRpb24iLCJFeGNlcHRpb24iLCJmcm9tTWVzc2FnZSIsImxlZnRWYWx1ZUVxdWFsVG9SaWdodFZhbHVlIiwiaXNFcXVhbFRvIiwiYm9vbGVhbiIsIlZhbHVlIiwiZG9tIiwiZnJvbUJvb2xlYW4iLCJkZWJ1ZyIsImZyb21WYWx1ZU5vZGUiLCJ2YWx1ZE5vZGUiLCJjb21wYXJpc29uIiwidmFsdWVDb21wYXJpc29uTm9kZSIsImNvbXBhcmlzb25Ob2RlIiwiY29tcGFyaXNvbkZyb21Db21wYXJpc29uTm9kZSIsImZyb21Db25kaXRpb25Ob2RlIiwiY29uZGl0aW9uTm9kZSIsImNvbmRpdGlvbkNvbXBhcmlzb25Ob2RlIiwibmFtZSIsIm5lZ2F0ZWRGcm9tQ29tcGFyaXNvbk5vZGUiLCJ0ZXJtaW5hbE5vZGUiLCJ0ZXJtaW5hbE5vZGVDb250ZW50IiwiZ2V0Q29udGVudCIsIkVRVUFMX1RPIiwibGVmdFZhbHVlTm9kZSIsInJpZ2h0VmFsdWVOb2RlIiwic3RyaW5nRnJvbU5lZ2F0ZWRMZWZ0VmFsdWVBbmRSaWdodFZhbHVlIiwib3BlcmF0b3JTdHJpbmciLCJOT1RfRVFVQUxfVE8iXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQWVBOzs7ZUFBQTs7OzJEQWJnQjtnRUFDTTtxQkFFSTt5QkFFYTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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