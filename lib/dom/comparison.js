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
    function Comparison(equalTo, leftValue, rightValue) {
        _class_call_check(this, Comparison);
        this.equalTo = equalTo;
        this.leftValue = leftValue;
        this.rightValue = rightValue;
    }
    _create_class(Comparison, [
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
        },
        {
            key: "getString",
            value: function getString() {
                debugger;
            }
        }
    ], [
        {
            key: "fromConditionalNode",
            value: function fromConditionalNode(conditionalNode, context) {
                var comparison = null;
                var comparisonNode = comparisonNodeQuery(conditionalNode);
                if (comparisonNode !== null) {
                    var Value = _dom.default.Value, leftValueNode = leftValueNodeQuery(comparisonNode), rightValueNode = rightValueNodeQuery(comparisonNode), equalTo = equalToFromComparisonNode(comparisonNode, context), leftValue = Value.fromValueNode(leftValueNode, context), rightValue = Value.fromValueNode(rightValueNode, context);
                    comparison = new Comparison(equalTo, leftValue, rightValue);
                }
                return comparison;
            }
        }
    ]);
    return Comparison;
}(), _define_property(_Comparison, "name", "Comparison"), _Comparison));
function equalToFromComparisonNode(comparisonNode, context) {
    var terminalNode = terminalNodeQuery(comparisonNode), terminalNodeContent = terminalNode.getContent(), equalTo = terminalNodeContent === _constants.EQUAL_TO;
    return equalTo;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb20vY29tcGFyaXNvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IGRvbSBmcm9tIFwiLi4vZG9tXCI7XG5cbmltcG9ydCB7IEVRVUFMX1RPIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgbm9kZVF1ZXJ5IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9xdWVyeVwiO1xuaW1wb3J0IHsgZG9tQXNzaWduZWQgfSBmcm9tIFwiLi4vZG9tXCI7XG5cbmNvbnN0IHRlcm1pbmFsTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL2NvbXBhcmlzb24vQCpcIiksXG4gICAgICBsZWZ0VmFsdWVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvY29tcGFyaXNvbi92YWx1ZVswXVwiKSxcbiAgICAgIHJpZ2h0VmFsdWVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvY29tcGFyaXNvbi92YWx1ZVsxXVwiKSxcbiAgICAgIGNvbXBhcmlzb25Ob2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvY29uZGl0aW9uL2NvbXBhcmlzb25cIik7XG5cbmV4cG9ydCBkZWZhdWx0IGRvbUFzc2lnbmVkKGNsYXNzIENvbXBhcmlzb24ge1xuICBjb25zdHJ1Y3RvcihlcXVhbFRvLCBsZWZ0VmFsdWUsIHJpZ2h0VmFsdWUpIHtcbiAgICB0aGlzLmVxdWFsVG8gPSBlcXVhbFRvO1xuICAgIHRoaXMubGVmdFZhbHVlID0gbGVmdFZhbHVlO1xuICAgIHRoaXMucmlnaHRWYWx1ZSA9IHJpZ2h0VmFsdWU7XG4gIH1cblxuICBnZXRFcXVhbFRvKCkge1xuICAgIHJldHVybiB0aGlzLmVxdWFsVG87XG4gIH1cblxuICBnZXRMZWZ0VmFsdWUoKSB7XG4gICAgcmV0dXJuIHRoaXMubGVmdFZhbHVlO1xuICB9XG5cbiAgZ2V0UmlnaHRWYWx1ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5yaWdodFZhbHVlO1xuICB9XG5cbiAgZ2V0U3RyaW5nKCkge1xuICAgIGRlYnVnZ2VyXG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiQ29tcGFyaXNvblwiO1xuXG4gIHN0YXRpYyBmcm9tQ29uZGl0aW9uYWxOb2RlKGNvbmRpdGlvbmFsTm9kZSwgY29udGV4dCkge1xuICAgIGxldCBjb21wYXJpc29uID0gbnVsbDtcblxuICAgIGNvbnN0IGNvbXBhcmlzb25Ob2RlID0gY29tcGFyaXNvbk5vZGVRdWVyeShjb25kaXRpb25hbE5vZGUpO1xuXG4gICAgaWYgKGNvbXBhcmlzb25Ob2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCB7IFZhbHVlIH0gPSBkb20sXG4gICAgICAgICAgICBsZWZ0VmFsdWVOb2RlID0gbGVmdFZhbHVlTm9kZVF1ZXJ5KGNvbXBhcmlzb25Ob2RlKSxcbiAgICAgICAgICAgIHJpZ2h0VmFsdWVOb2RlID0gcmlnaHRWYWx1ZU5vZGVRdWVyeShjb21wYXJpc29uTm9kZSksXG4gICAgICAgICAgICBlcXVhbFRvID0gZXF1YWxUb0Zyb21Db21wYXJpc29uTm9kZShjb21wYXJpc29uTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgICBsZWZ0VmFsdWUgPSBWYWx1ZS5mcm9tVmFsdWVOb2RlKGxlZnRWYWx1ZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgICAgcmlnaHRWYWx1ZSA9IFZhbHVlLmZyb21WYWx1ZU5vZGUocmlnaHRWYWx1ZU5vZGUsIGNvbnRleHQpO1xuXG4gICAgICBjb21wYXJpc29uID0gbmV3IENvbXBhcmlzb24oZXF1YWxUbywgbGVmdFZhbHVlLCByaWdodFZhbHVlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gY29tcGFyaXNvbjtcbiAgfVxufSk7XG5cbmZ1bmN0aW9uIGVxdWFsVG9Gcm9tQ29tcGFyaXNvbk5vZGUoY29tcGFyaXNvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgdGVybWluYWxOb2RlID0gdGVybWluYWxOb2RlUXVlcnkoY29tcGFyaXNvbk5vZGUpLFxuICAgICAgICB0ZXJtaW5hbE5vZGVDb250ZW50ID0gdGVybWluYWxOb2RlLmdldENvbnRlbnQoKSxcbiAgICAgICAgZXF1YWxUbyA9ICh0ZXJtaW5hbE5vZGVDb250ZW50ID09PSBFUVVBTF9UTyk7XG5cbiAgcmV0dXJuIGVxdWFsVG87XG59Il0sIm5hbWVzIjpbInRlcm1pbmFsTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5IiwibGVmdFZhbHVlTm9kZVF1ZXJ5IiwicmlnaHRWYWx1ZU5vZGVRdWVyeSIsImNvbXBhcmlzb25Ob2RlUXVlcnkiLCJkb21Bc3NpZ25lZCIsIkNvbXBhcmlzb24iLCJlcXVhbFRvIiwibGVmdFZhbHVlIiwicmlnaHRWYWx1ZSIsImdldEVxdWFsVG8iLCJnZXRMZWZ0VmFsdWUiLCJnZXRSaWdodFZhbHVlIiwiZ2V0U3RyaW5nIiwiZnJvbUNvbmRpdGlvbmFsTm9kZSIsImNvbmRpdGlvbmFsTm9kZSIsImNvbnRleHQiLCJjb21wYXJpc29uIiwiY29tcGFyaXNvbk5vZGUiLCJWYWx1ZSIsImRvbSIsImxlZnRWYWx1ZU5vZGUiLCJyaWdodFZhbHVlTm9kZSIsImVxdWFsVG9Gcm9tQ29tcGFyaXNvbk5vZGUiLCJmcm9tVmFsdWVOb2RlIiwibmFtZSIsInRlcm1pbmFsTm9kZSIsInRlcm1pbmFsTm9kZUNvbnRlbnQiLCJnZXRDb250ZW50IiwiRVFVQUxfVE8iXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQWFBOzs7ZUFBQTs7OzJEQVhnQjt5QkFFUztxQkFDQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRzFCLElBQU1BLG9CQUFvQkMsSUFBQUEsZ0JBQVMsRUFBQyxtQkFDOUJDLHFCQUFxQkQsSUFBQUEsZ0JBQVMsRUFBQyx5QkFDL0JFLHNCQUFzQkYsSUFBQUEsZ0JBQVMsRUFBQyx5QkFDaENHLHNCQUFzQkgsSUFBQUEsZ0JBQVMsRUFBQztJQUV0QyxXQUFlSSxJQUFBQSxnQkFBVywrQkFBQzthQUFNQyxXQUNuQkMsT0FBTyxFQUFFQyxTQUFTLEVBQUVDLFVBQVU7Z0NBRFhIO1FBRTdCLElBQUksQ0FBQ0MsT0FBTyxHQUFHQTtRQUNmLElBQUksQ0FBQ0MsU0FBUyxHQUFHQTtRQUNqQixJQUFJLENBQUNDLFVBQVUsR0FBR0E7Ozs7WUFHcEJDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0gsT0FBTztZQUNyQjs7O1lBRUFJLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0gsU0FBUztZQUN2Qjs7O1lBRUFJLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0gsVUFBVTtZQUN4Qjs7O1lBRUFJLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxRQUFRO1lBQ1Y7Ozs7WUFJT0MsS0FBQUE7bUJBQVAsU0FBT0Esb0JBQW9CQyxlQUFlLEVBQUVDLE9BQU87Z0JBQ2pELElBQUlDLGFBQWE7Z0JBRWpCLElBQU1DLGlCQUFpQmQsb0JBQW9CVztnQkFFM0MsSUFBSUcsbUJBQW1CLE1BQU07b0JBQzNCLElBQU0sQUFBRUMsUUFBVUMsWUFBRyxDQUFiRCxPQUNGRSxnQkFBZ0JuQixtQkFBbUJnQixpQkFDbkNJLGlCQUFpQm5CLG9CQUFvQmUsaUJBQ3JDWCxVQUFVZ0IsMEJBQTBCTCxnQkFBZ0JGLFVBQ3BEUixZQUFZVyxNQUFNSyxhQUFhLENBQUNILGVBQWVMLFVBQy9DUCxhQUFhVSxNQUFNSyxhQUFhLENBQUNGLGdCQUFnQk47b0JBRXZEQyxhQUFhLElBQUlYLFdBQVdDLFNBQVNDLFdBQVdDO2dCQUNsRDtnQkFFQSxPQUFPUTtZQUNUOzs7O0tBbkJBLDhCQUFPUSxRQUFPO0FBc0JoQixTQUFTRiwwQkFBMEJMLGNBQWMsRUFBRUYsT0FBTztJQUN4RCxJQUFNVSxlQUFlMUIsa0JBQWtCa0IsaUJBQ2pDUyxzQkFBc0JELGFBQWFFLFVBQVUsSUFDN0NyQixVQUFXb0Isd0JBQXdCRSxtQkFBUTtJQUVqRCxPQUFPdEI7QUFDVCJ9