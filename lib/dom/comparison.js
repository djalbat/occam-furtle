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
    function Comparison(string, equalTo, leftValue, rightValue) {
        _class_call_check(this, Comparison);
        this.string = string;
        this.equalTo = equalTo;
        this.leftValue = leftValue;
        this.rightValue = rightValue;
    }
    _create_class(Comparison, [
        {
            key: "getString",
            value: function getString() {
                debugger;
            }
        },
        {
            key: "getEqualTo",
            value: function getEqualTo() {
                return this.equalTo;
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
        }
    ], [
        {
            key: "fromConditionNode",
            value: function fromConditionNode(conditionNode) {
                var comparison = null;
                var comparisonNode = comparisonNodeQuery(conditionNode);
                if (comparisonNode !== null) {
                    var Value = _dom.default.Value, leftValueNode = leftValueNodeQuery(comparisonNode), rightValueNode = rightValueNodeQuery(comparisonNode), equalTo = equalToFromComparisonNode(comparisonNode), leftValue = Value.fromValueNode(leftValueNode), rightValue = Value.fromValueNode(rightValueNode), string = null;
                    comparison = new Comparison(string, equalTo, leftValue, rightValue);
                }
                return comparison;
            }
        }
    ]);
    return Comparison;
}(), _define_property(_Comparison, "name", "Comparison"), _Comparison));
function equalToFromComparisonNode(comparisonNode) {
    var terminalNode = terminalNodeQuery(comparisonNode), terminalNodeContent = terminalNode.getContent(), equalTo = terminalNodeContent === _constants.EQUAL_TO;
    return equalTo;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb20vY29tcGFyaXNvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IGRvbSBmcm9tIFwiLi4vZG9tXCI7XG5cbmltcG9ydCB7IEVRVUFMX1RPIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgbm9kZVF1ZXJ5IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9xdWVyeVwiO1xuaW1wb3J0IHsgZG9tQXNzaWduZWQgfSBmcm9tIFwiLi4vZG9tXCI7XG5cbmNvbnN0IHRlcm1pbmFsTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL2NvbXBhcmlzb24vQCpcIiksXG4gICAgICBsZWZ0VmFsdWVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvY29tcGFyaXNvbi92YWx1ZVswXVwiKSxcbiAgICAgIHJpZ2h0VmFsdWVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvY29tcGFyaXNvbi92YWx1ZVsxXVwiKSxcbiAgICAgIGNvbXBhcmlzb25Ob2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvY29uZGl0aW9uL2NvbXBhcmlzb25cIik7XG5cbmV4cG9ydCBkZWZhdWx0IGRvbUFzc2lnbmVkKGNsYXNzIENvbXBhcmlzb24ge1xuICBjb25zdHJ1Y3RvcihzdHJpbmcsIGVxdWFsVG8sIGxlZnRWYWx1ZSwgcmlnaHRWYWx1ZSkge1xuICAgIHRoaXMuc3RyaW5nID0gc3RyaW5nO1xuICAgIHRoaXMuZXF1YWxUbyA9IGVxdWFsVG87XG4gICAgdGhpcy5sZWZ0VmFsdWUgPSBsZWZ0VmFsdWU7XG4gICAgdGhpcy5yaWdodFZhbHVlID0gcmlnaHRWYWx1ZTtcbiAgfVxuXG4gIGdldFN0cmluZygpIHtcbiAgICBkZWJ1Z2dlclxuICB9XG5cbiAgZ2V0RXF1YWxUbygpIHtcbiAgICByZXR1cm4gdGhpcy5lcXVhbFRvO1xuICB9XG5cbiAgZ2V0TGVmdFZhbHVlKCkge1xuICAgIHJldHVybiB0aGlzLmxlZnRWYWx1ZTtcbiAgfVxuXG4gIGdldFJpZ2h0VmFsdWUoKSB7XG4gICAgcmV0dXJuIHRoaXMucmlnaHRWYWx1ZTtcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJDb21wYXJpc29uXCI7XG5cbiAgc3RhdGljIGZyb21Db25kaXRpb25Ob2RlKGNvbmRpdGlvbk5vZGUpIHtcbiAgICBsZXQgY29tcGFyaXNvbiA9IG51bGw7XG5cbiAgICBjb25zdCBjb21wYXJpc29uTm9kZSA9IGNvbXBhcmlzb25Ob2RlUXVlcnkoY29uZGl0aW9uTm9kZSk7XG5cbiAgICBpZiAoY29tcGFyaXNvbk5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHsgVmFsdWUgfSA9IGRvbSxcbiAgICAgICAgICAgIGxlZnRWYWx1ZU5vZGUgPSBsZWZ0VmFsdWVOb2RlUXVlcnkoY29tcGFyaXNvbk5vZGUpLFxuICAgICAgICAgICAgcmlnaHRWYWx1ZU5vZGUgPSByaWdodFZhbHVlTm9kZVF1ZXJ5KGNvbXBhcmlzb25Ob2RlKSxcbiAgICAgICAgICAgIGVxdWFsVG8gPSBlcXVhbFRvRnJvbUNvbXBhcmlzb25Ob2RlKGNvbXBhcmlzb25Ob2RlKSxcbiAgICAgICAgICAgIGxlZnRWYWx1ZSA9IFZhbHVlLmZyb21WYWx1ZU5vZGUobGVmdFZhbHVlTm9kZSksXG4gICAgICAgICAgICByaWdodFZhbHVlID0gVmFsdWUuZnJvbVZhbHVlTm9kZShyaWdodFZhbHVlTm9kZSksXG4gICAgICAgICAgICBzdHJpbmcgPSBudWxsO1xuXG4gICAgICBjb21wYXJpc29uID0gbmV3IENvbXBhcmlzb24oc3RyaW5nLCBlcXVhbFRvLCBsZWZ0VmFsdWUsIHJpZ2h0VmFsdWUpO1xuICAgIH1cblxuICAgIHJldHVybiBjb21wYXJpc29uO1xuICB9XG59KTtcblxuZnVuY3Rpb24gZXF1YWxUb0Zyb21Db21wYXJpc29uTm9kZShjb21wYXJpc29uTm9kZSkge1xuICBjb25zdCB0ZXJtaW5hbE5vZGUgPSB0ZXJtaW5hbE5vZGVRdWVyeShjb21wYXJpc29uTm9kZSksXG4gICAgICAgIHRlcm1pbmFsTm9kZUNvbnRlbnQgPSB0ZXJtaW5hbE5vZGUuZ2V0Q29udGVudCgpLFxuICAgICAgICBlcXVhbFRvID0gKHRlcm1pbmFsTm9kZUNvbnRlbnQgPT09IEVRVUFMX1RPKTtcblxuICByZXR1cm4gZXF1YWxUbztcbn0iXSwibmFtZXMiOlsidGVybWluYWxOb2RlUXVlcnkiLCJub2RlUXVlcnkiLCJsZWZ0VmFsdWVOb2RlUXVlcnkiLCJyaWdodFZhbHVlTm9kZVF1ZXJ5IiwiY29tcGFyaXNvbk5vZGVRdWVyeSIsImRvbUFzc2lnbmVkIiwiQ29tcGFyaXNvbiIsInN0cmluZyIsImVxdWFsVG8iLCJsZWZ0VmFsdWUiLCJyaWdodFZhbHVlIiwiZ2V0U3RyaW5nIiwiZ2V0RXF1YWxUbyIsImdldExlZnRWYWx1ZSIsImdldFJpZ2h0VmFsdWUiLCJmcm9tQ29uZGl0aW9uTm9kZSIsImNvbmRpdGlvbk5vZGUiLCJjb21wYXJpc29uIiwiY29tcGFyaXNvbk5vZGUiLCJWYWx1ZSIsImRvbSIsImxlZnRWYWx1ZU5vZGUiLCJyaWdodFZhbHVlTm9kZSIsImVxdWFsVG9Gcm9tQ29tcGFyaXNvbk5vZGUiLCJmcm9tVmFsdWVOb2RlIiwibmFtZSIsInRlcm1pbmFsTm9kZSIsInRlcm1pbmFsTm9kZUNvbnRlbnQiLCJnZXRDb250ZW50IiwiRVFVQUxfVE8iXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQWFBOzs7ZUFBQTs7OzJEQVhnQjt5QkFFUztxQkFDQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRzFCLElBQU1BLG9CQUFvQkMsSUFBQUEsZ0JBQVMsRUFBQyxtQkFDOUJDLHFCQUFxQkQsSUFBQUEsZ0JBQVMsRUFBQyx5QkFDL0JFLHNCQUFzQkYsSUFBQUEsZ0JBQVMsRUFBQyx5QkFDaENHLHNCQUFzQkgsSUFBQUEsZ0JBQVMsRUFBQztJQUV0QyxXQUFlSSxJQUFBQSxnQkFBVywrQkFBQzthQUFNQyxXQUNuQkMsTUFBTSxFQUFFQyxPQUFPLEVBQUVDLFNBQVMsRUFBRUMsVUFBVTtnQ0FEbkJKO1FBRTdCLElBQUksQ0FBQ0MsTUFBTSxHQUFHQTtRQUNkLElBQUksQ0FBQ0MsT0FBTyxHQUFHQTtRQUNmLElBQUksQ0FBQ0MsU0FBUyxHQUFHQTtRQUNqQixJQUFJLENBQUNDLFVBQVUsR0FBR0E7Ozs7WUFHcEJDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxRQUFRO1lBQ1Y7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNKLE9BQU87WUFDckI7OztZQUVBSyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNKLFNBQVM7WUFDdkI7OztZQUVBSyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNKLFVBQVU7WUFDeEI7Ozs7WUFJT0ssS0FBQUE7bUJBQVAsU0FBT0Esa0JBQWtCQyxhQUFhO2dCQUNwQyxJQUFJQyxhQUFhO2dCQUVqQixJQUFNQyxpQkFBaUJkLG9CQUFvQlk7Z0JBRTNDLElBQUlFLG1CQUFtQixNQUFNO29CQUMzQixJQUFNLEFBQUVDLFFBQVVDLFlBQUcsQ0FBYkQsT0FDRkUsZ0JBQWdCbkIsbUJBQW1CZ0IsaUJBQ25DSSxpQkFBaUJuQixvQkFBb0JlLGlCQUNyQ1YsVUFBVWUsMEJBQTBCTCxpQkFDcENULFlBQVlVLE1BQU1LLGFBQWEsQ0FBQ0gsZ0JBQ2hDWCxhQUFhUyxNQUFNSyxhQUFhLENBQUNGLGlCQUNqQ2YsU0FBUztvQkFFZlUsYUFBYSxJQUFJWCxXQUFXQyxRQUFRQyxTQUFTQyxXQUFXQztnQkFDMUQ7Z0JBRUEsT0FBT087WUFDVDs7OztLQXBCQSw4QkFBT1EsUUFBTztBQXVCaEIsU0FBU0YsMEJBQTBCTCxjQUFjO0lBQy9DLElBQU1RLGVBQWUxQixrQkFBa0JrQixpQkFDakNTLHNCQUFzQkQsYUFBYUUsVUFBVSxJQUM3Q3BCLFVBQVdtQix3QkFBd0JFLG1CQUFRO0lBRWpELE9BQU9yQjtBQUNUIn0=