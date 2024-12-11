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
    function BracketedCondition(string, condition) {
        _class_call_check(this, BracketedCondition);
        this.string = string;
        this.condition = condition;
    }
    _create_class(BracketedCondition, [
        {
            key: "getString",
            value: function getString() {
                debugger;
            }
        },
        {
            key: "getCondition",
            value: function getCondition() {
                return this.condition;
            }
        }
    ], [
        {
            key: "fromConditionNode",
            value: function fromConditionNode(conditionNode) {
                var bracketedCondition = null;
                var bracketedConditionNode = bracketedConditionNodeQuery(conditionNode);
                if (bracketedConditionNode !== null) {
                    var Condition = _dom.default.Condition, _$conditionNode = conditionNodeQuery(bracketedConditionNode), condition = Condition.fromConditionNode(_$conditionNode), string = null;
                    bracketedCondition = new BracketedCondition(string, condition);
                }
                return bracketedCondition;
            }
        }
    ]);
    return BracketedCondition;
}(), _define_property(_BracketedCondition, "name", "BracketedCondition"), _BracketedCondition));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb20vYnJhY2tldGVkQ29uZGl0aW9uLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgZG9tIGZyb20gXCIuLi9kb21cIjtcblxuaW1wb3J0IHsgbm9kZVF1ZXJ5IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9xdWVyeVwiO1xuaW1wb3J0IHsgZG9tQXNzaWduZWQgfSBmcm9tIFwiLi4vZG9tXCI7XG5cbmNvbnN0IGNvbmRpdGlvbk5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9icmFja2V0ZWRDb25kaXRpb24vY29uZGl0aW9uXCIpLFxuICAgICAgYnJhY2tldGVkQ29uZGl0aW9uTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL2NvbmRpdGlvbi9icmFja2V0ZWRDb25kaXRpb25cIik7XG5cbmV4cG9ydCBkZWZhdWx0IGRvbUFzc2lnbmVkKGNsYXNzIEJyYWNrZXRlZENvbmRpdGlvbiB7XG4gIGNvbnN0cnVjdG9yKHN0cmluZywgY29uZGl0aW9uKSB7XG4gICAgdGhpcy5zdHJpbmcgPSBzdHJpbmc7XG4gICAgdGhpcy5jb25kaXRpb24gPSBjb25kaXRpb247XG4gIH1cblxuICBnZXRTdHJpbmcoKSB7XG4gICAgZGVidWdnZXJcbiAgfVxuXG4gIGdldENvbmRpdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5jb25kaXRpb247XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiQnJhY2tldGVkQ29uZGl0aW9uXCI7XG5cbiAgc3RhdGljIGZyb21Db25kaXRpb25Ob2RlKGNvbmRpdGlvbk5vZGUpIHtcbiAgICBsZXQgYnJhY2tldGVkQ29uZGl0aW9uID0gbnVsbDtcblxuICAgIGNvbnN0IGJyYWNrZXRlZENvbmRpdGlvbk5vZGUgPSBicmFja2V0ZWRDb25kaXRpb25Ob2RlUXVlcnkoY29uZGl0aW9uTm9kZSk7XG5cbiAgICBpZiAoYnJhY2tldGVkQ29uZGl0aW9uTm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgeyBDb25kaXRpb24gfSA9IGRvbSxcbiAgICAgICAgICAgIGNvbmRpdGlvbk5vZGUgPSBjb25kaXRpb25Ob2RlUXVlcnkoYnJhY2tldGVkQ29uZGl0aW9uTm9kZSksXG4gICAgICAgICAgICBjb25kaXRpb24gPSBDb25kaXRpb24uZnJvbUNvbmRpdGlvbk5vZGUoY29uZGl0aW9uTm9kZSksXG4gICAgICAgICAgICBzdHJpbmcgPSBudWxsO1xuXG4gICAgICBicmFja2V0ZWRDb25kaXRpb24gPSBuZXcgQnJhY2tldGVkQ29uZGl0aW9uKHN0cmluZywgY29uZGl0aW9uKTtcbiAgICB9XG5cbiAgICByZXR1cm4gYnJhY2tldGVkQ29uZGl0aW9uO1xuICB9XG59KTtcbiJdLCJuYW1lcyI6WyJjb25kaXRpb25Ob2RlUXVlcnkiLCJub2RlUXVlcnkiLCJicmFja2V0ZWRDb25kaXRpb25Ob2RlUXVlcnkiLCJkb21Bc3NpZ25lZCIsIkJyYWNrZXRlZENvbmRpdGlvbiIsInN0cmluZyIsImNvbmRpdGlvbiIsImdldFN0cmluZyIsImdldENvbmRpdGlvbiIsImZyb21Db25kaXRpb25Ob2RlIiwiY29uZGl0aW9uTm9kZSIsImJyYWNrZXRlZENvbmRpdGlvbiIsImJyYWNrZXRlZENvbmRpdGlvbk5vZGUiLCJDb25kaXRpb24iLCJkb20iLCJuYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFVQTs7O2VBQUE7OzsyREFSZ0I7cUJBRVU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUcxQixJQUFNQSxxQkFBcUJDLElBQUFBLGdCQUFTLEVBQUMsa0NBQy9CQyw4QkFBOEJELElBQUFBLGdCQUFTLEVBQUM7SUFFOUMsV0FBZUUsSUFBQUEsZ0JBQVcsdUNBQUM7YUFBTUMsbUJBQ25CQyxNQUFNLEVBQUVDLFNBQVM7Z0NBREVGO1FBRTdCLElBQUksQ0FBQ0MsTUFBTSxHQUFHQTtRQUNkLElBQUksQ0FBQ0MsU0FBUyxHQUFHQTs7OztZQUduQkMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLFFBQVE7WUFDVjs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0YsU0FBUztZQUN2Qjs7OztZQUlPRyxLQUFBQTttQkFBUCxTQUFPQSxrQkFBa0JDLGFBQWE7Z0JBQ3BDLElBQUlDLHFCQUFxQjtnQkFFekIsSUFBTUMseUJBQXlCViw0QkFBNEJRO2dCQUUzRCxJQUFJRSwyQkFBMkIsTUFBTTtvQkFDbkMsSUFBTSxBQUFFQyxZQUFjQyxZQUFHLENBQWpCRCxXQUNGSCxrQkFBZ0JWLG1CQUFtQlkseUJBQ25DTixZQUFZTyxVQUFVSixpQkFBaUIsQ0FBQ0Msa0JBQ3hDTCxTQUFTO29CQUVmTSxxQkFBcUIsSUFBSVAsbUJBQW1CQyxRQUFRQztnQkFDdEQ7Z0JBRUEsT0FBT0s7WUFDVDs7OztLQWpCQSxzQ0FBT0ksUUFBTyJ9