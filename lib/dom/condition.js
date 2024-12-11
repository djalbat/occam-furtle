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
                return this.string;
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
            value: function fromConditionNode(conditionNode, context) {
                var Value = _dom.default.Value, Comparison = _dom.default.Comparison, BitwiseCondition = _dom.default.BitwiseCondition, BracketedCondition = _dom.default.BracketedCondition, node = conditionNode, string = context.nodeAsString(node), value = Value.fromConditionNode(conditionNode, context), comparison = Comparison.fromConditionNode(conditionNode, context), bitwiseCondition = BitwiseCondition.fromConditionNode(conditionNode, context), bracketedCondition = BracketedCondition.fromConditionNode(conditionNode, context), condition = new Condition(string, value, comparison, bitwiseCondition, bracketedCondition);
                return condition;
            }
        },
        {
            key: "fromConditionalBlockNode",
            value: function fromConditionalBlockNode(conditionalBlockNode, context) {
                var Value = _dom.default.Value, Comparison = _dom.default.Comparison, BitwiseCondition = _dom.default.BitwiseCondition, BracketedCondition = _dom.default.BracketedCondition, conditionNode = conditionNodeQuery(conditionalBlockNode), node = conditionNode, string = context.nodeAsString(node), value = Value.fromConditionNode(conditionNode, context), comparison = Comparison.fromConditionNode(conditionNode, context), bitwiseCondition = BitwiseCondition.fromConditionNode(conditionNode, context), bracketedCondition = BracketedCondition.fromConditionNode(conditionNode, context), condition = new Condition(string, value, comparison, bitwiseCondition, bracketedCondition);
                return condition;
            }
        }
    ]);
    return Condition;
}(), _define_property(_Condition, "name", "Condition"), _Condition));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb20vY29uZGl0aW9uLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgZG9tIGZyb20gXCIuLi9kb21cIjtcblxuaW1wb3J0IHsgbm9kZVF1ZXJ5IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9xdWVyeVwiO1xuaW1wb3J0IHsgZG9tQXNzaWduZWQgfSBmcm9tIFwiLi4vZG9tXCI7XG5cbmNvbnN0IGNvbmRpdGlvbk5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9jb25kaXRpb25hbEJsb2NrL2NvbmRpdGlvblwiKTtcblxuZXhwb3J0IGRlZmF1bHQgZG9tQXNzaWduZWQoY2xhc3MgQ29uZGl0aW9uIHtcbiAgY29uc3RydWN0b3Ioc3RyaW5nLCB2YWx1ZSwgY29tcGFyaXNvbiwgYml0d2lzZUNvbmRpdGlvbiwgYnJhY2tldGVkQ29uZGl0aW9uKSB7XG4gICAgdGhpcy5zdHJpbmcgPSBzdHJpbmc7XG4gICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgIHRoaXMuY29tcGFyaXNvbiA9IGNvbXBhcmlzb247XG4gICAgdGhpcy5iaXR3aXNlQ29uZGl0aW9uID0gYml0d2lzZUNvbmRpdGlvbjtcbiAgICB0aGlzLmJyYWNrZXRlZENvbmRpdGlvbiA9IGJyYWNrZXRlZENvbmRpdGlvbjtcbiAgfVxuXG4gIGdldFN0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5zdHJpbmc7XG4gIH1cblxuICBnZXRWYWx1ZSgpIHtcbiAgICByZXR1cm4gdGhpcy52YWx1ZTtcbiAgfVxuXG4gIGdldENvbXBhcmlzb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuY29tcGFyaXNvbjtcbiAgfVxuXG4gIGdldEJpdHdpc2VDb25kaXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuYml0d2lzZUNvbmRpdGlvbjtcbiAgfVxuXG4gIGdldEJyYWNrZXRlZENvbmRpdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5icmFja2V0ZWRDb25kaXRpb247XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiQ29uZGl0aW9uXCI7XG5cbiAgc3RhdGljIGZyb21Db25kaXRpb25Ob2RlKGNvbmRpdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgICBjb25zdCB7IFZhbHVlLCBDb21wYXJpc29uLCBCaXR3aXNlQ29uZGl0aW9uLCBCcmFja2V0ZWRDb25kaXRpb24gfSA9IGRvbSxcbiAgICAgICAgICBub2RlID0gY29uZGl0aW9uTm9kZSwgLy8vXG4gICAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgICAgdmFsdWUgPSBWYWx1ZS5mcm9tQ29uZGl0aW9uTm9kZShjb25kaXRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgICBjb21wYXJpc29uID0gQ29tcGFyaXNvbi5mcm9tQ29uZGl0aW9uTm9kZShjb25kaXRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgICBiaXR3aXNlQ29uZGl0aW9uID0gQml0d2lzZUNvbmRpdGlvbi5mcm9tQ29uZGl0aW9uTm9kZShjb25kaXRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgICBicmFja2V0ZWRDb25kaXRpb24gPSBCcmFja2V0ZWRDb25kaXRpb24uZnJvbUNvbmRpdGlvbk5vZGUoY29uZGl0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgY29uZGl0aW9uID0gbmV3IENvbmRpdGlvbihzdHJpbmcsIHZhbHVlLCBjb21wYXJpc29uLCBiaXR3aXNlQ29uZGl0aW9uLCBicmFja2V0ZWRDb25kaXRpb24pO1xuXG4gICAgcmV0dXJuIGNvbmRpdGlvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQ29uZGl0aW9uYWxCbG9ja05vZGUoY29uZGl0aW9uYWxCbG9ja05vZGUsIGNvbnRleHQpIHtcbiAgICBjb25zdCB7IFZhbHVlLCBDb21wYXJpc29uLCBCaXR3aXNlQ29uZGl0aW9uLCBCcmFja2V0ZWRDb25kaXRpb24gfSA9IGRvbSxcbiAgICAgICAgICBjb25kaXRpb25Ob2RlID0gY29uZGl0aW9uTm9kZVF1ZXJ5KGNvbmRpdGlvbmFsQmxvY2tOb2RlKSxcbiAgICAgICAgICBub2RlID0gY29uZGl0aW9uTm9kZSwgLy8vXG4gICAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgICAgdmFsdWUgPSBWYWx1ZS5mcm9tQ29uZGl0aW9uTm9kZShjb25kaXRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgICBjb21wYXJpc29uID0gQ29tcGFyaXNvbi5mcm9tQ29uZGl0aW9uTm9kZShjb25kaXRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgICBiaXR3aXNlQ29uZGl0aW9uID0gQml0d2lzZUNvbmRpdGlvbi5mcm9tQ29uZGl0aW9uTm9kZShjb25kaXRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgICBicmFja2V0ZWRDb25kaXRpb24gPSBCcmFja2V0ZWRDb25kaXRpb24uZnJvbUNvbmRpdGlvbk5vZGUoY29uZGl0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgY29uZGl0aW9uID0gbmV3IENvbmRpdGlvbihzdHJpbmcsIHZhbHVlLCBjb21wYXJpc29uLCBiaXR3aXNlQ29uZGl0aW9uLCBicmFja2V0ZWRDb25kaXRpb24pO1xuXG4gICAgcmV0dXJuIGNvbmRpdGlvbjtcbiAgfVxufSk7XG4iXSwibmFtZXMiOlsiY29uZGl0aW9uTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5IiwiZG9tQXNzaWduZWQiLCJDb25kaXRpb24iLCJzdHJpbmciLCJ2YWx1ZSIsImNvbXBhcmlzb24iLCJiaXR3aXNlQ29uZGl0aW9uIiwiYnJhY2tldGVkQ29uZGl0aW9uIiwiZ2V0U3RyaW5nIiwiZ2V0VmFsdWUiLCJnZXRDb21wYXJpc29uIiwiZ2V0Qml0d2lzZUNvbmRpdGlvbiIsImdldEJyYWNrZXRlZENvbmRpdGlvbiIsImZyb21Db25kaXRpb25Ob2RlIiwiY29uZGl0aW9uTm9kZSIsImNvbnRleHQiLCJWYWx1ZSIsImRvbSIsIkNvbXBhcmlzb24iLCJCaXR3aXNlQ29uZGl0aW9uIiwiQnJhY2tldGVkQ29uZGl0aW9uIiwibm9kZSIsIm5vZGVBc1N0cmluZyIsImNvbmRpdGlvbiIsImZyb21Db25kaXRpb25hbEJsb2NrTm9kZSIsImNvbmRpdGlvbmFsQmxvY2tOb2RlIiwibmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBU0E7OztlQUFBOzs7MkRBUGdCO3FCQUVVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHMUIsSUFBTUEscUJBQXFCQyxJQUFBQSxnQkFBUyxFQUFDO0lBRXJDLFdBQWVDLElBQUFBLGdCQUFXLDhCQUFDO2FBQU1DLFVBQ25CQyxNQUFNLEVBQUVDLEtBQUssRUFBRUMsVUFBVSxFQUFFQyxnQkFBZ0IsRUFBRUMsa0JBQWtCO2dDQUQ1Q0w7UUFFN0IsSUFBSSxDQUFDQyxNQUFNLEdBQUdBO1FBQ2QsSUFBSSxDQUFDQyxLQUFLLEdBQUdBO1FBQ2IsSUFBSSxDQUFDQyxVQUFVLEdBQUdBO1FBQ2xCLElBQUksQ0FBQ0MsZ0JBQWdCLEdBQUdBO1FBQ3hCLElBQUksQ0FBQ0Msa0JBQWtCLEdBQUdBOzs7O1lBRzVCQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNMLE1BQU07WUFDcEI7OztZQUVBTSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNMLEtBQUs7WUFDbkI7OztZQUVBTSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNMLFVBQVU7WUFDeEI7OztZQUVBTSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNMLGdCQUFnQjtZQUM5Qjs7O1lBRUFNLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0wsa0JBQWtCO1lBQ2hDOzs7O1lBSU9NLEtBQUFBO21CQUFQLFNBQU9BLGtCQUFrQkMsYUFBYSxFQUFFQyxPQUFPO2dCQUM3QyxJQUFRQyxRQUE0REMsWUFBRyxDQUEvREQsT0FBT0UsYUFBcURELFlBQUcsQ0FBeERDLFlBQVlDLG1CQUF5Q0YsWUFBRyxDQUE1Q0Usa0JBQWtCQyxxQkFBdUJILFlBQUcsQ0FBMUJHLG9CQUN2Q0MsT0FBT1AsZUFDUFgsU0FBU1ksUUFBUU8sWUFBWSxDQUFDRCxPQUM5QmpCLFFBQVFZLE1BQU1ILGlCQUFpQixDQUFDQyxlQUFlQyxVQUMvQ1YsYUFBYWEsV0FBV0wsaUJBQWlCLENBQUNDLGVBQWVDLFVBQ3pEVCxtQkFBbUJhLGlCQUFpQk4saUJBQWlCLENBQUNDLGVBQWVDLFVBQ3JFUixxQkFBcUJhLG1CQUFtQlAsaUJBQWlCLENBQUNDLGVBQWVDLFVBQ3pFUSxZQUFZLElBQUlyQixVQUFVQyxRQUFRQyxPQUFPQyxZQUFZQyxrQkFBa0JDO2dCQUU3RSxPQUFPZ0I7WUFDVDs7O1lBRU9DLEtBQUFBO21CQUFQLFNBQU9BLHlCQUF5QkMsb0JBQW9CLEVBQUVWLE9BQU87Z0JBQzNELElBQVFDLFFBQTREQyxZQUFHLENBQS9ERCxPQUFPRSxhQUFxREQsWUFBRyxDQUF4REMsWUFBWUMsbUJBQXlDRixZQUFHLENBQTVDRSxrQkFBa0JDLHFCQUF1QkgsWUFBRyxDQUExQkcsb0JBQ3ZDTixnQkFBZ0JmLG1CQUFtQjBCLHVCQUNuQ0osT0FBT1AsZUFDUFgsU0FBU1ksUUFBUU8sWUFBWSxDQUFDRCxPQUM5QmpCLFFBQVFZLE1BQU1ILGlCQUFpQixDQUFDQyxlQUFlQyxVQUMvQ1YsYUFBYWEsV0FBV0wsaUJBQWlCLENBQUNDLGVBQWVDLFVBQ3pEVCxtQkFBbUJhLGlCQUFpQk4saUJBQWlCLENBQUNDLGVBQWVDLFVBQ3JFUixxQkFBcUJhLG1CQUFtQlAsaUJBQWlCLENBQUNDLGVBQWVDLFVBQ3pFUSxZQUFZLElBQUlyQixVQUFVQyxRQUFRQyxPQUFPQyxZQUFZQyxrQkFBa0JDO2dCQUU3RSxPQUFPZ0I7WUFDVDs7OztLQTNCQSw2QkFBT0csUUFBTyJ9