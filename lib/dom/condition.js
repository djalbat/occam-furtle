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
    function Condition() {
        _class_call_check(this, Condition);
    }
    _create_class(Condition, [
        {
            key: "getString",
            value: function getString() {
                debugger;
            }
        }
    ], [
        {
            key: "fromConditionNode",
            value: function fromConditionNode(conditionNode, context) {
                var Value = _dom.default.Value, Comparison = _dom.default.Comparison, BitwiseCondition = _dom.default.BitwiseCondition, BracketedCondition = _dom.default.BracketedCondition, value = Value.fromConditionNode(conditionNode, context), comparison = Comparison.fromConditionNode(conditionNode, context), bitwiseCondition = BitwiseCondition.fromConditionNode(conditionNode, context), bracketedCondition = BracketedCondition.fromConditionNode(conditionNode, context), condition = new Condition(value, comparison, bitwiseCondition, bracketedCondition);
                return condition;
            }
        },
        {
            key: "fromConditionalBlockNode",
            value: function fromConditionalBlockNode(conditionalBlockNode, context) {
                var Value = _dom.default.Value, Comparison = _dom.default.Comparison, BitwiseCondition = _dom.default.BitwiseCondition, BracketedCondition = _dom.default.BracketedCondition, conditionNode = conditionNodeQuery(conditionalBlockNode), value = Value.fromConditionNode(conditionNode, context), comparison = Comparison.fromConditionNode(conditionNode, context), bitwiseCondition = BitwiseCondition.fromConditionNode(conditionNode, context), bracketedCondition = BracketedCondition.fromConditionNode(conditionNode, context), condition = new Condition(value, comparison, bitwiseCondition, bracketedCondition);
                return condition;
            }
        }
    ]);
    return Condition;
}(), _define_property(_Condition, "name", "Condition"), _Condition));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb20vY29uZGl0aW9uLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgZG9tIGZyb20gXCIuLi9kb21cIjtcblxuaW1wb3J0IHsgbm9kZVF1ZXJ5IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9xdWVyeVwiO1xuaW1wb3J0IHsgZG9tQXNzaWduZWQgfSBmcm9tIFwiLi4vZG9tXCI7XG5cbmNvbnN0IGNvbmRpdGlvbk5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9jb25kaXRpb25hbEJsb2NrL2NvbmRpdGlvblwiKTtcblxuZXhwb3J0IGRlZmF1bHQgZG9tQXNzaWduZWQoY2xhc3MgQ29uZGl0aW9uIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gIH1cblxuICBnZXRTdHJpbmcoKSB7XG4gICAgZGVidWdnZXJcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJDb25kaXRpb25cIjtcblxuICBzdGF0aWMgZnJvbUNvbmRpdGlvbk5vZGUoY29uZGl0aW9uTm9kZSwgY29udGV4dCkge1xuICAgIGNvbnN0IHsgVmFsdWUsIENvbXBhcmlzb24sIEJpdHdpc2VDb25kaXRpb24sIEJyYWNrZXRlZENvbmRpdGlvbiB9ID0gZG9tLFxuICAgICAgICAgIHZhbHVlID0gVmFsdWUuZnJvbUNvbmRpdGlvbk5vZGUoY29uZGl0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgY29tcGFyaXNvbiA9IENvbXBhcmlzb24uZnJvbUNvbmRpdGlvbk5vZGUoY29uZGl0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgYml0d2lzZUNvbmRpdGlvbiA9IEJpdHdpc2VDb25kaXRpb24uZnJvbUNvbmRpdGlvbk5vZGUoY29uZGl0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgYnJhY2tldGVkQ29uZGl0aW9uID0gQnJhY2tldGVkQ29uZGl0aW9uLmZyb21Db25kaXRpb25Ob2RlKGNvbmRpdGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgIGNvbmRpdGlvbiA9IG5ldyBDb25kaXRpb24odmFsdWUsIGNvbXBhcmlzb24sIGJpdHdpc2VDb25kaXRpb24sIGJyYWNrZXRlZENvbmRpdGlvbik7XG5cbiAgICByZXR1cm4gY29uZGl0aW9uO1xuICB9XG5cbiAgc3RhdGljIGZyb21Db25kaXRpb25hbEJsb2NrTm9kZShjb25kaXRpb25hbEJsb2NrTm9kZSwgY29udGV4dCkge1xuICAgIGNvbnN0IHsgVmFsdWUsIENvbXBhcmlzb24sIEJpdHdpc2VDb25kaXRpb24sIEJyYWNrZXRlZENvbmRpdGlvbiB9ID0gZG9tLFxuICAgICAgICAgIGNvbmRpdGlvbk5vZGUgPSBjb25kaXRpb25Ob2RlUXVlcnkoY29uZGl0aW9uYWxCbG9ja05vZGUpLFxuICAgICAgICAgIHZhbHVlID0gVmFsdWUuZnJvbUNvbmRpdGlvbk5vZGUoY29uZGl0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgY29tcGFyaXNvbiA9IENvbXBhcmlzb24uZnJvbUNvbmRpdGlvbk5vZGUoY29uZGl0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgYml0d2lzZUNvbmRpdGlvbiA9IEJpdHdpc2VDb25kaXRpb24uZnJvbUNvbmRpdGlvbk5vZGUoY29uZGl0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgYnJhY2tldGVkQ29uZGl0aW9uID0gQnJhY2tldGVkQ29uZGl0aW9uLmZyb21Db25kaXRpb25Ob2RlKGNvbmRpdGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgIGNvbmRpdGlvbiA9IG5ldyBDb25kaXRpb24odmFsdWUsIGNvbXBhcmlzb24sIGJpdHdpc2VDb25kaXRpb24sIGJyYWNrZXRlZENvbmRpdGlvbik7XG5cbiAgICByZXR1cm4gY29uZGl0aW9uO1xuICB9XG59KTtcbiJdLCJuYW1lcyI6WyJjb25kaXRpb25Ob2RlUXVlcnkiLCJub2RlUXVlcnkiLCJkb21Bc3NpZ25lZCIsIkNvbmRpdGlvbiIsImdldFN0cmluZyIsImZyb21Db25kaXRpb25Ob2RlIiwiY29uZGl0aW9uTm9kZSIsImNvbnRleHQiLCJWYWx1ZSIsImRvbSIsIkNvbXBhcmlzb24iLCJCaXR3aXNlQ29uZGl0aW9uIiwiQnJhY2tldGVkQ29uZGl0aW9uIiwidmFsdWUiLCJjb21wYXJpc29uIiwiYml0d2lzZUNvbmRpdGlvbiIsImJyYWNrZXRlZENvbmRpdGlvbiIsImNvbmRpdGlvbiIsImZyb21Db25kaXRpb25hbEJsb2NrTm9kZSIsImNvbmRpdGlvbmFsQmxvY2tOb2RlIiwibmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBU0E7OztlQUFBOzs7MkRBUGdCO3FCQUVVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHMUIsSUFBTUEscUJBQXFCQyxJQUFBQSxnQkFBUyxFQUFDO0lBRXJDLFdBQWVDLElBQUFBLGdCQUFXLDhCQUFDO2FBQU1DO2dDQUFBQTs7OztZQUkvQkMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLFFBQVE7WUFDVjs7OztZQUlPQyxLQUFBQTttQkFBUCxTQUFPQSxrQkFBa0JDLGFBQWEsRUFBRUMsT0FBTztnQkFDN0MsSUFBUUMsUUFBNERDLFlBQUcsQ0FBL0RELE9BQU9FLGFBQXFERCxZQUFHLENBQXhEQyxZQUFZQyxtQkFBeUNGLFlBQUcsQ0FBNUNFLGtCQUFrQkMscUJBQXVCSCxZQUFHLENBQTFCRyxvQkFDdkNDLFFBQVFMLE1BQU1ILGlCQUFpQixDQUFDQyxlQUFlQyxVQUMvQ08sYUFBYUosV0FBV0wsaUJBQWlCLENBQUNDLGVBQWVDLFVBQ3pEUSxtQkFBbUJKLGlCQUFpQk4saUJBQWlCLENBQUNDLGVBQWVDLFVBQ3JFUyxxQkFBcUJKLG1CQUFtQlAsaUJBQWlCLENBQUNDLGVBQWVDLFVBQ3pFVSxZQUFZLElBQUlkLFVBQVVVLE9BQU9DLFlBQVlDLGtCQUFrQkM7Z0JBRXJFLE9BQU9DO1lBQ1Q7OztZQUVPQyxLQUFBQTttQkFBUCxTQUFPQSx5QkFBeUJDLG9CQUFvQixFQUFFWixPQUFPO2dCQUMzRCxJQUFRQyxRQUE0REMsWUFBRyxDQUEvREQsT0FBT0UsYUFBcURELFlBQUcsQ0FBeERDLFlBQVlDLG1CQUF5Q0YsWUFBRyxDQUE1Q0Usa0JBQWtCQyxxQkFBdUJILFlBQUcsQ0FBMUJHLG9CQUN2Q04sZ0JBQWdCTixtQkFBbUJtQix1QkFDbkNOLFFBQVFMLE1BQU1ILGlCQUFpQixDQUFDQyxlQUFlQyxVQUMvQ08sYUFBYUosV0FBV0wsaUJBQWlCLENBQUNDLGVBQWVDLFVBQ3pEUSxtQkFBbUJKLGlCQUFpQk4saUJBQWlCLENBQUNDLGVBQWVDLFVBQ3JFUyxxQkFBcUJKLG1CQUFtQlAsaUJBQWlCLENBQUNDLGVBQWVDLFVBQ3pFVSxZQUFZLElBQUlkLFVBQVVVLE9BQU9DLFlBQVlDLGtCQUFrQkM7Z0JBRXJFLE9BQU9DO1lBQ1Q7Ozs7S0F2QkEsNkJBQU9HLFFBQU8ifQ==