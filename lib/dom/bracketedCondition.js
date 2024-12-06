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
var _BracketedCondition;
var conditionNodeQuery = (0, _query.nodeQuery)("/bracketedCondition/condition"), bracketedConditionNodeQuery = (0, _query.nodeQuery)("/condition/bracketedCondition");
var _default = (0, _dom.domAssigned)((_BracketedCondition = /*#__PURE__*/ function() {
    function BracketedCondition(condition) {
        _class_call_check(this, BracketedCondition);
        this.condition = condition;
    }
    _create_class(BracketedCondition, [
        {
            key: "getCondition",
            value: function getCondition() {
                return this.condition;
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
            key: "fromConditionNode",
            value: function fromConditionNode(conditionNode, context) {
                var bracketedCondition = null;
                var bracketedConditionNode = bracketedConditionNodeQuery(conditionNode);
                if (bracketedConditionNode !== null) {
                    var Condition = _dom.default.Condition, _$conditionNode = conditionNodeQuery(bracketedConditionNode), condition = Condition.fromConditionNode(_$conditionNode);
                    bracketedCondition = new BracketedCondition(condition);
                }
                return bracketedCondition;
            }
        }
    ]);
    return BracketedCondition;
}(), _define_property(_BracketedCondition, "name", "BracketedCondition"), _BracketedCondition));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb20vYnJhY2tldGVkQ29uZGl0aW9uLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgZG9tIGZyb20gXCIuLi9kb21cIjtcblxuaW1wb3J0IHsgbm9kZVF1ZXJ5IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9xdWVyeVwiO1xuaW1wb3J0IHsgZG9tQXNzaWduZWQgfSBmcm9tIFwiLi4vZG9tXCI7XG5cbmNvbnN0IGNvbmRpdGlvbk5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9icmFja2V0ZWRDb25kaXRpb24vY29uZGl0aW9uXCIpLFxuICAgICAgYnJhY2tldGVkQ29uZGl0aW9uTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL2NvbmRpdGlvbi9icmFja2V0ZWRDb25kaXRpb25cIik7XG5cbmV4cG9ydCBkZWZhdWx0IGRvbUFzc2lnbmVkKGNsYXNzIEJyYWNrZXRlZENvbmRpdGlvbiB7XG4gIGNvbnN0cnVjdG9yKGNvbmRpdGlvbikge1xuICAgIHRoaXMuY29uZGl0aW9uID0gY29uZGl0aW9uO1xuICB9XG5cbiAgZ2V0Q29uZGl0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmNvbmRpdGlvbjtcbiAgfVxuXG4gIGdldFN0cmluZygpIHtcbiAgICBkZWJ1Z2dlclxuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIkJyYWNrZXRlZENvbmRpdGlvblwiO1xuXG4gIHN0YXRpYyBmcm9tQ29uZGl0aW9uTm9kZShjb25kaXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gICAgbGV0IGJyYWNrZXRlZENvbmRpdGlvbiA9IG51bGw7XG5cbiAgICBjb25zdCBicmFja2V0ZWRDb25kaXRpb25Ob2RlID0gYnJhY2tldGVkQ29uZGl0aW9uTm9kZVF1ZXJ5KGNvbmRpdGlvbk5vZGUpO1xuXG4gICAgaWYgKGJyYWNrZXRlZENvbmRpdGlvbk5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHsgQ29uZGl0aW9uIH0gPSBkb20sXG4gICAgICAgICAgICBjb25kaXRpb25Ob2RlID0gY29uZGl0aW9uTm9kZVF1ZXJ5KGJyYWNrZXRlZENvbmRpdGlvbk5vZGUpLFxuICAgICAgICAgICAgY29uZGl0aW9uID0gQ29uZGl0aW9uLmZyb21Db25kaXRpb25Ob2RlKGNvbmRpdGlvbk5vZGUpO1xuXG4gICAgICBicmFja2V0ZWRDb25kaXRpb24gPSBuZXcgQnJhY2tldGVkQ29uZGl0aW9uKGNvbmRpdGlvbik7XG4gICAgfVxuXG4gICAgcmV0dXJuIGJyYWNrZXRlZENvbmRpdGlvbjtcbiAgfVxufSk7XG4iXSwibmFtZXMiOlsiY29uZGl0aW9uTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5IiwiYnJhY2tldGVkQ29uZGl0aW9uTm9kZVF1ZXJ5IiwiZG9tQXNzaWduZWQiLCJCcmFja2V0ZWRDb25kaXRpb24iLCJjb25kaXRpb24iLCJnZXRDb25kaXRpb24iLCJnZXRTdHJpbmciLCJmcm9tQ29uZGl0aW9uTm9kZSIsImNvbmRpdGlvbk5vZGUiLCJjb250ZXh0IiwiYnJhY2tldGVkQ29uZGl0aW9uIiwiYnJhY2tldGVkQ29uZGl0aW9uTm9kZSIsIkNvbmRpdGlvbiIsImRvbSIsIm5hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVVBOzs7ZUFBQTs7OzJEQVJnQjtxQkFFVTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRzFCLElBQU1BLHFCQUFxQkMsSUFBQUEsZ0JBQVMsRUFBQyxrQ0FDL0JDLDhCQUE4QkQsSUFBQUEsZ0JBQVMsRUFBQztJQUU5QyxXQUFlRSxJQUFBQSxnQkFBVyx1Q0FBQzthQUFNQyxtQkFDbkJDLFNBQVM7Z0NBRFVEO1FBRTdCLElBQUksQ0FBQ0MsU0FBUyxHQUFHQTs7OztZQUduQkMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRCxTQUFTO1lBQ3ZCOzs7WUFFQUUsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLFFBQVE7WUFDVjs7OztZQUlPQyxLQUFBQTttQkFBUCxTQUFPQSxrQkFBa0JDLGFBQWEsRUFBRUMsT0FBTztnQkFDN0MsSUFBSUMscUJBQXFCO2dCQUV6QixJQUFNQyx5QkFBeUJWLDRCQUE0Qk87Z0JBRTNELElBQUlHLDJCQUEyQixNQUFNO29CQUNuQyxJQUFNLEFBQUVDLFlBQWNDLFlBQUcsQ0FBakJELFdBQ0ZKLGtCQUFnQlQsbUJBQW1CWSx5QkFDbkNQLFlBQVlRLFVBQVVMLGlCQUFpQixDQUFDQztvQkFFOUNFLHFCQUFxQixJQUFJUCxtQkFBbUJDO2dCQUM5QztnQkFFQSxPQUFPTTtZQUNUOzs7O0tBaEJBLHNDQUFPSSxRQUFPIn0=