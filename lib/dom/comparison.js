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
                return this.string;
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
            value: function fromConditionNode(conditionNode, context) {
                var comparison = null;
                var comparisonNode = comparisonNodeQuery(conditionNode);
                if (comparisonNode !== null) {
                    var Value = _dom.default.Value, node = comparisonNode, string = context.nodeAsString(node), leftValueNode = leftValueNodeQuery(comparisonNode), rightValueNode = rightValueNodeQuery(comparisonNode), equalTo = equalToFromComparisonNode(comparisonNode, context), leftValue = Value.fromValueNode(leftValueNode, context), rightValue = Value.fromValueNode(rightValueNode, context);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb20vY29tcGFyaXNvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IGRvbSBmcm9tIFwiLi4vZG9tXCI7XG5cbmltcG9ydCB7IEVRVUFMX1RPIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgbm9kZVF1ZXJ5IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9xdWVyeVwiO1xuaW1wb3J0IHsgZG9tQXNzaWduZWQgfSBmcm9tIFwiLi4vZG9tXCI7XG5cbmNvbnN0IHRlcm1pbmFsTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL2NvbXBhcmlzb24vQCpcIiksXG4gICAgICBsZWZ0VmFsdWVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvY29tcGFyaXNvbi92YWx1ZVswXVwiKSxcbiAgICAgIHJpZ2h0VmFsdWVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvY29tcGFyaXNvbi92YWx1ZVsxXVwiKSxcbiAgICAgIGNvbXBhcmlzb25Ob2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvY29uZGl0aW9uL2NvbXBhcmlzb25cIik7XG5cbmV4cG9ydCBkZWZhdWx0IGRvbUFzc2lnbmVkKGNsYXNzIENvbXBhcmlzb24ge1xuICBjb25zdHJ1Y3RvcihzdHJpbmcsIGVxdWFsVG8sIGxlZnRWYWx1ZSwgcmlnaHRWYWx1ZSkge1xuICAgIHRoaXMuc3RyaW5nID0gc3RyaW5nO1xuICAgIHRoaXMuZXF1YWxUbyA9IGVxdWFsVG87XG4gICAgdGhpcy5sZWZ0VmFsdWUgPSBsZWZ0VmFsdWU7XG4gICAgdGhpcy5yaWdodFZhbHVlID0gcmlnaHRWYWx1ZTtcbiAgfVxuXG4gIGdldFN0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5zdHJpbmc7XG4gIH1cblxuICBnZXRFcXVhbFRvKCkge1xuICAgIHJldHVybiB0aGlzLmVxdWFsVG87XG4gIH1cblxuICBnZXRMZWZ0VmFsdWUoKSB7XG4gICAgcmV0dXJuIHRoaXMubGVmdFZhbHVlO1xuICB9XG5cbiAgZ2V0UmlnaHRWYWx1ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5yaWdodFZhbHVlO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIkNvbXBhcmlzb25cIjtcblxuICBzdGF0aWMgZnJvbUNvbmRpdGlvbk5vZGUoY29uZGl0aW9uTm9kZSwgY29udGV4dCkge1xuICAgIGxldCBjb21wYXJpc29uID0gbnVsbDtcblxuICAgIGNvbnN0IGNvbXBhcmlzb25Ob2RlID0gY29tcGFyaXNvbk5vZGVRdWVyeShjb25kaXRpb25Ob2RlKTtcblxuICAgIGlmIChjb21wYXJpc29uTm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgeyBWYWx1ZSB9ID0gZG9tLFxuICAgICAgICAgICAgbm9kZSA9IGNvbXBhcmlzb25Ob2RlLCAgLy8vXG4gICAgICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgICAgIGxlZnRWYWx1ZU5vZGUgPSBsZWZ0VmFsdWVOb2RlUXVlcnkoY29tcGFyaXNvbk5vZGUpLFxuICAgICAgICAgICAgcmlnaHRWYWx1ZU5vZGUgPSByaWdodFZhbHVlTm9kZVF1ZXJ5KGNvbXBhcmlzb25Ob2RlKSxcbiAgICAgICAgICAgIGVxdWFsVG8gPSBlcXVhbFRvRnJvbUNvbXBhcmlzb25Ob2RlKGNvbXBhcmlzb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgICAgIGxlZnRWYWx1ZSA9IFZhbHVlLmZyb21WYWx1ZU5vZGUobGVmdFZhbHVlTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgICByaWdodFZhbHVlID0gVmFsdWUuZnJvbVZhbHVlTm9kZShyaWdodFZhbHVlTm9kZSwgY29udGV4dCk7XG5cbiAgICAgIGNvbXBhcmlzb24gPSBuZXcgQ29tcGFyaXNvbihzdHJpbmcsIGVxdWFsVG8sIGxlZnRWYWx1ZSwgcmlnaHRWYWx1ZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbXBhcmlzb247XG4gIH1cbn0pO1xuXG5mdW5jdGlvbiBlcXVhbFRvRnJvbUNvbXBhcmlzb25Ob2RlKGNvbXBhcmlzb25Ob2RlKSB7XG4gIGNvbnN0IHRlcm1pbmFsTm9kZSA9IHRlcm1pbmFsTm9kZVF1ZXJ5KGNvbXBhcmlzb25Ob2RlKSxcbiAgICAgICAgdGVybWluYWxOb2RlQ29udGVudCA9IHRlcm1pbmFsTm9kZS5nZXRDb250ZW50KCksXG4gICAgICAgIGVxdWFsVG8gPSAodGVybWluYWxOb2RlQ29udGVudCA9PT0gRVFVQUxfVE8pO1xuXG4gIHJldHVybiBlcXVhbFRvO1xufSJdLCJuYW1lcyI6WyJ0ZXJtaW5hbE5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsImxlZnRWYWx1ZU5vZGVRdWVyeSIsInJpZ2h0VmFsdWVOb2RlUXVlcnkiLCJjb21wYXJpc29uTm9kZVF1ZXJ5IiwiZG9tQXNzaWduZWQiLCJDb21wYXJpc29uIiwic3RyaW5nIiwiZXF1YWxUbyIsImxlZnRWYWx1ZSIsInJpZ2h0VmFsdWUiLCJnZXRTdHJpbmciLCJnZXRFcXVhbFRvIiwiZ2V0TGVmdFZhbHVlIiwiZ2V0UmlnaHRWYWx1ZSIsImZyb21Db25kaXRpb25Ob2RlIiwiY29uZGl0aW9uTm9kZSIsImNvbnRleHQiLCJjb21wYXJpc29uIiwiY29tcGFyaXNvbk5vZGUiLCJWYWx1ZSIsImRvbSIsIm5vZGUiLCJub2RlQXNTdHJpbmciLCJsZWZ0VmFsdWVOb2RlIiwicmlnaHRWYWx1ZU5vZGUiLCJlcXVhbFRvRnJvbUNvbXBhcmlzb25Ob2RlIiwiZnJvbVZhbHVlTm9kZSIsIm5hbWUiLCJ0ZXJtaW5hbE5vZGUiLCJ0ZXJtaW5hbE5vZGVDb250ZW50IiwiZ2V0Q29udGVudCIsIkVRVUFMX1RPIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFhQTs7O2VBQUE7OzsyREFYZ0I7eUJBRVM7cUJBQ0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUcxQixJQUFNQSxvQkFBb0JDLElBQUFBLGdCQUFTLEVBQUMsbUJBQzlCQyxxQkFBcUJELElBQUFBLGdCQUFTLEVBQUMseUJBQy9CRSxzQkFBc0JGLElBQUFBLGdCQUFTLEVBQUMseUJBQ2hDRyxzQkFBc0JILElBQUFBLGdCQUFTLEVBQUM7SUFFdEMsV0FBZUksSUFBQUEsZ0JBQVcsK0JBQUM7YUFBTUMsV0FDbkJDLE1BQU0sRUFBRUMsT0FBTyxFQUFFQyxTQUFTLEVBQUVDLFVBQVU7Z0NBRG5CSjtRQUU3QixJQUFJLENBQUNDLE1BQU0sR0FBR0E7UUFDZCxJQUFJLENBQUNDLE9BQU8sR0FBR0E7UUFDZixJQUFJLENBQUNDLFNBQVMsR0FBR0E7UUFDakIsSUFBSSxDQUFDQyxVQUFVLEdBQUdBOzs7O1lBR3BCQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNKLE1BQU07WUFDcEI7OztZQUVBSyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNKLE9BQU87WUFDckI7OztZQUVBSyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNKLFNBQVM7WUFDdkI7OztZQUVBSyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNKLFVBQVU7WUFDeEI7Ozs7WUFJT0ssS0FBQUE7bUJBQVAsU0FBT0Esa0JBQWtCQyxhQUFhLEVBQUVDLE9BQU87Z0JBQzdDLElBQUlDLGFBQWE7Z0JBRWpCLElBQU1DLGlCQUFpQmYsb0JBQW9CWTtnQkFFM0MsSUFBSUcsbUJBQW1CLE1BQU07b0JBQzNCLElBQU0sQUFBRUMsUUFBVUMsWUFBRyxDQUFiRCxPQUNGRSxPQUFPSCxnQkFDUFosU0FBU1UsUUFBUU0sWUFBWSxDQUFDRCxPQUM5QkUsZ0JBQWdCdEIsbUJBQW1CaUIsaUJBQ25DTSxpQkFBaUJ0QixvQkFBb0JnQixpQkFDckNYLFVBQVVrQiwwQkFBMEJQLGdCQUFnQkYsVUFDcERSLFlBQVlXLE1BQU1PLGFBQWEsQ0FBQ0gsZUFBZVAsVUFDL0NQLGFBQWFVLE1BQU1PLGFBQWEsQ0FBQ0YsZ0JBQWdCUjtvQkFFdkRDLGFBQWEsSUFBSVosV0FBV0MsUUFBUUMsU0FBU0MsV0FBV0M7Z0JBQzFEO2dCQUVBLE9BQU9RO1lBQ1Q7Ozs7S0FyQkEsOEJBQU9VLFFBQU87QUF3QmhCLFNBQVNGLDBCQUEwQlAsY0FBYztJQUMvQyxJQUFNVSxlQUFlN0Isa0JBQWtCbUIsaUJBQ2pDVyxzQkFBc0JELGFBQWFFLFVBQVUsSUFDN0N2QixVQUFXc0Isd0JBQXdCRSxtQkFBUTtJQUVqRCxPQUFPeEI7QUFDVCJ9