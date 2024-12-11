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
var _Condition;
var conditionNodeQuery = (0, _query.nodeQuery)("/conditionalBlock/condition");
var _default = (0, _dom.domAssigned)((_Condition = /*#__PURE__*/ function() {
    function Condition(string, value, comparison, bitwiseCondition, bracketedCondition) {
        _class_call_check(this, Condition);
        this.string = string;
        this.value = value;
        this.comparison = comparison;
        this.bitwiseCondition = bitwiseCondition;
        this.bracketedCondition = bracketedCondition;
    }
    _create_class(Condition, [
        {
            key: "getString",
            value: function getString() {
                debugger;
            }
        },
        {
            key: "getValue",
            value: function getValue() {
                return this.value;
            }
        },
        {
            key: "getComparison",
            value: function getComparison() {
                return this.comparison;
            }
        },
        {
            key: "getBitwiseCondition",
            value: function getBitwiseCondition() {
                return this.bitwiseCondition;
            }
        },
        {
            key: "getBracketedCondition",
            value: function getBracketedCondition() {
                return this.bracketedCondition;
            }
        }
    ], [
        {
            key: "fromConditionNode",
            value: function fromConditionNode(conditionNode) {
                var Value = _dom.default.Value, Comparison = _dom.default.Comparison, BitwiseCondition = _dom.default.BitwiseCondition, BracketedCondition = _dom.default.BracketedCondition, value = Value.fromConditionNode(conditionNode), comparison = Comparison.fromConditionNode(conditionNode), bitwiseCondition = BitwiseCondition.fromConditionNode(conditionNode), bracketedCondition = BracketedCondition.fromConditionNode(conditionNode), string = null, condition = new Condition(string, value, comparison, bitwiseCondition, bracketedCondition);
                return condition;
            }
        },
        {
            key: "fromConditionalBlockNode",
            value: function fromConditionalBlockNode(conditionalBlockNode) {
                var Value = _dom.default.Value, Comparison = _dom.default.Comparison, BitwiseCondition = _dom.default.BitwiseCondition, BracketedCondition = _dom.default.BracketedCondition, conditionNode = conditionNodeQuery(conditionalBlockNode), value = Value.fromConditionNode(conditionNode), comparison = Comparison.fromConditionNode(conditionNode), bitwiseCondition = BitwiseCondition.fromConditionNode(conditionNode), bracketedCondition = BracketedCondition.fromConditionNode(conditionNode), string = null, condition = new Condition(string, value, comparison, bitwiseCondition, bracketedCondition);
                return condition;
            }
        }
    ]);
    return Condition;
}(), _define_property(_Condition, "name", "Condition"), _Condition));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb20vY29uZGl0aW9uLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgZG9tIGZyb20gXCIuLi9kb21cIjtcblxuaW1wb3J0IHsgbm9kZVF1ZXJ5IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9xdWVyeVwiO1xuaW1wb3J0IHsgZG9tQXNzaWduZWQgfSBmcm9tIFwiLi4vZG9tXCI7XG5cbmNvbnN0IGNvbmRpdGlvbk5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9jb25kaXRpb25hbEJsb2NrL2NvbmRpdGlvblwiKTtcblxuZXhwb3J0IGRlZmF1bHQgZG9tQXNzaWduZWQoY2xhc3MgQ29uZGl0aW9uIHtcbiAgY29uc3RydWN0b3Ioc3RyaW5nLCB2YWx1ZSwgY29tcGFyaXNvbiwgYml0d2lzZUNvbmRpdGlvbiwgYnJhY2tldGVkQ29uZGl0aW9uKSB7XG4gICAgdGhpcy5zdHJpbmcgPSBzdHJpbmc7XG4gICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgIHRoaXMuY29tcGFyaXNvbiA9IGNvbXBhcmlzb247XG4gICAgdGhpcy5iaXR3aXNlQ29uZGl0aW9uID0gYml0d2lzZUNvbmRpdGlvbjtcbiAgICB0aGlzLmJyYWNrZXRlZENvbmRpdGlvbiA9IGJyYWNrZXRlZENvbmRpdGlvbjtcbiAgfVxuXG4gIGdldFN0cmluZygpIHtcbiAgICBkZWJ1Z2dlclxuICB9XG5cbiAgZ2V0VmFsdWUoKSB7XG4gICAgcmV0dXJuIHRoaXMudmFsdWU7XG4gIH1cblxuICBnZXRDb21wYXJpc29uKCkge1xuICAgIHJldHVybiB0aGlzLmNvbXBhcmlzb247XG4gIH1cblxuICBnZXRCaXR3aXNlQ29uZGl0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmJpdHdpc2VDb25kaXRpb247XG4gIH1cblxuICBnZXRCcmFja2V0ZWRDb25kaXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuYnJhY2tldGVkQ29uZGl0aW9uO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIkNvbmRpdGlvblwiO1xuXG4gIHN0YXRpYyBmcm9tQ29uZGl0aW9uTm9kZShjb25kaXRpb25Ob2RlKSB7XG4gICAgY29uc3QgeyBWYWx1ZSwgQ29tcGFyaXNvbiwgQml0d2lzZUNvbmRpdGlvbiwgQnJhY2tldGVkQ29uZGl0aW9uIH0gPSBkb20sXG4gICAgICAgICAgdmFsdWUgPSBWYWx1ZS5mcm9tQ29uZGl0aW9uTm9kZShjb25kaXRpb25Ob2RlKSxcbiAgICAgICAgICBjb21wYXJpc29uID0gQ29tcGFyaXNvbi5mcm9tQ29uZGl0aW9uTm9kZShjb25kaXRpb25Ob2RlKSxcbiAgICAgICAgICBiaXR3aXNlQ29uZGl0aW9uID0gQml0d2lzZUNvbmRpdGlvbi5mcm9tQ29uZGl0aW9uTm9kZShjb25kaXRpb25Ob2RlKSxcbiAgICAgICAgICBicmFja2V0ZWRDb25kaXRpb24gPSBCcmFja2V0ZWRDb25kaXRpb24uZnJvbUNvbmRpdGlvbk5vZGUoY29uZGl0aW9uTm9kZSksXG4gICAgICAgICAgc3RyaW5nID0gbnVsbCxcbiAgICAgICAgICBjb25kaXRpb24gPSBuZXcgQ29uZGl0aW9uKHN0cmluZywgdmFsdWUsIGNvbXBhcmlzb24sIGJpdHdpc2VDb25kaXRpb24sIGJyYWNrZXRlZENvbmRpdGlvbik7XG5cbiAgICByZXR1cm4gY29uZGl0aW9uO1xuICB9XG5cbiAgc3RhdGljIGZyb21Db25kaXRpb25hbEJsb2NrTm9kZShjb25kaXRpb25hbEJsb2NrTm9kZSkge1xuICAgIGNvbnN0IHsgVmFsdWUsIENvbXBhcmlzb24sIEJpdHdpc2VDb25kaXRpb24sIEJyYWNrZXRlZENvbmRpdGlvbiB9ID0gZG9tLFxuICAgICAgICAgIGNvbmRpdGlvbk5vZGUgPSBjb25kaXRpb25Ob2RlUXVlcnkoY29uZGl0aW9uYWxCbG9ja05vZGUpLFxuICAgICAgICAgIHZhbHVlID0gVmFsdWUuZnJvbUNvbmRpdGlvbk5vZGUoY29uZGl0aW9uTm9kZSksXG4gICAgICAgICAgY29tcGFyaXNvbiA9IENvbXBhcmlzb24uZnJvbUNvbmRpdGlvbk5vZGUoY29uZGl0aW9uTm9kZSksXG4gICAgICAgICAgYml0d2lzZUNvbmRpdGlvbiA9IEJpdHdpc2VDb25kaXRpb24uZnJvbUNvbmRpdGlvbk5vZGUoY29uZGl0aW9uTm9kZSksXG4gICAgICAgICAgYnJhY2tldGVkQ29uZGl0aW9uID0gQnJhY2tldGVkQ29uZGl0aW9uLmZyb21Db25kaXRpb25Ob2RlKGNvbmRpdGlvbk5vZGUpLFxuICAgICAgICAgIHN0cmluZyA9IG51bGwsXG4gICAgICAgICAgY29uZGl0aW9uID0gbmV3IENvbmRpdGlvbihzdHJpbmcsIHZhbHVlLCBjb21wYXJpc29uLCBiaXR3aXNlQ29uZGl0aW9uLCBicmFja2V0ZWRDb25kaXRpb24pO1xuXG4gICAgcmV0dXJuIGNvbmRpdGlvbjtcbiAgfVxufSk7XG4iXSwibmFtZXMiOlsiY29uZGl0aW9uTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5IiwiZG9tQXNzaWduZWQiLCJDb25kaXRpb24iLCJzdHJpbmciLCJ2YWx1ZSIsImNvbXBhcmlzb24iLCJiaXR3aXNlQ29uZGl0aW9uIiwiYnJhY2tldGVkQ29uZGl0aW9uIiwiZ2V0U3RyaW5nIiwiZ2V0VmFsdWUiLCJnZXRDb21wYXJpc29uIiwiZ2V0Qml0d2lzZUNvbmRpdGlvbiIsImdldEJyYWNrZXRlZENvbmRpdGlvbiIsImZyb21Db25kaXRpb25Ob2RlIiwiY29uZGl0aW9uTm9kZSIsIlZhbHVlIiwiZG9tIiwiQ29tcGFyaXNvbiIsIkJpdHdpc2VDb25kaXRpb24iLCJCcmFja2V0ZWRDb25kaXRpb24iLCJjb25kaXRpb24iLCJmcm9tQ29uZGl0aW9uYWxCbG9ja05vZGUiLCJjb25kaXRpb25hbEJsb2NrTm9kZSIsIm5hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVNBOzs7ZUFBQTs7OzJEQVBnQjtxQkFFVTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRzFCLElBQU1BLHFCQUFxQkMsSUFBQUEsZ0JBQVMsRUFBQztJQUVyQyxXQUFlQyxJQUFBQSxnQkFBVyw4QkFBQzthQUFNQyxVQUNuQkMsTUFBTSxFQUFFQyxLQUFLLEVBQUVDLFVBQVUsRUFBRUMsZ0JBQWdCLEVBQUVDLGtCQUFrQjtnQ0FENUNMO1FBRTdCLElBQUksQ0FBQ0MsTUFBTSxHQUFHQTtRQUNkLElBQUksQ0FBQ0MsS0FBSyxHQUFHQTtRQUNiLElBQUksQ0FBQ0MsVUFBVSxHQUFHQTtRQUNsQixJQUFJLENBQUNDLGdCQUFnQixHQUFHQTtRQUN4QixJQUFJLENBQUNDLGtCQUFrQixHQUFHQTs7OztZQUc1QkMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLFFBQVE7WUFDVjs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0wsS0FBSztZQUNuQjs7O1lBRUFNLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0wsVUFBVTtZQUN4Qjs7O1lBRUFNLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0wsZ0JBQWdCO1lBQzlCOzs7WUFFQU0sS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDTCxrQkFBa0I7WUFDaEM7Ozs7WUFJT00sS0FBQUE7bUJBQVAsU0FBT0Esa0JBQWtCQyxhQUFhO2dCQUNwQyxJQUFRQyxRQUE0REMsWUFBRyxDQUEvREQsT0FBT0UsYUFBcURELFlBQUcsQ0FBeERDLFlBQVlDLG1CQUF5Q0YsWUFBRyxDQUE1Q0Usa0JBQWtCQyxxQkFBdUJILFlBQUcsQ0FBMUJHLG9CQUN2Q2YsUUFBUVcsTUFBTUYsaUJBQWlCLENBQUNDLGdCQUNoQ1QsYUFBYVksV0FBV0osaUJBQWlCLENBQUNDLGdCQUMxQ1IsbUJBQW1CWSxpQkFBaUJMLGlCQUFpQixDQUFDQyxnQkFDdERQLHFCQUFxQlksbUJBQW1CTixpQkFBaUIsQ0FBQ0MsZ0JBQzFEWCxTQUFTLE1BQ1RpQixZQUFZLElBQUlsQixVQUFVQyxRQUFRQyxPQUFPQyxZQUFZQyxrQkFBa0JDO2dCQUU3RSxPQUFPYTtZQUNUOzs7WUFFT0MsS0FBQUE7bUJBQVAsU0FBT0EseUJBQXlCQyxvQkFBb0I7Z0JBQ2xELElBQVFQLFFBQTREQyxZQUFHLENBQS9ERCxPQUFPRSxhQUFxREQsWUFBRyxDQUF4REMsWUFBWUMsbUJBQXlDRixZQUFHLENBQTVDRSxrQkFBa0JDLHFCQUF1QkgsWUFBRyxDQUExQkcsb0JBQ3ZDTCxnQkFBZ0JmLG1CQUFtQnVCLHVCQUNuQ2xCLFFBQVFXLE1BQU1GLGlCQUFpQixDQUFDQyxnQkFDaENULGFBQWFZLFdBQVdKLGlCQUFpQixDQUFDQyxnQkFDMUNSLG1CQUFtQlksaUJBQWlCTCxpQkFBaUIsQ0FBQ0MsZ0JBQ3REUCxxQkFBcUJZLG1CQUFtQk4saUJBQWlCLENBQUNDLGdCQUMxRFgsU0FBUyxNQUNUaUIsWUFBWSxJQUFJbEIsVUFBVUMsUUFBUUMsT0FBT0MsWUFBWUMsa0JBQWtCQztnQkFFN0UsT0FBT2E7WUFDVDs7OztLQXpCQSw2QkFBT0csUUFBTyJ9