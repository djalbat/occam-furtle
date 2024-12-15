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
var _dom = /*#__PURE__*/ _interop_require_wildcard(require("../../dom"));
var _query = require("../../utilities/query");
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
                return this.string;
            }
        },
        {
            key: "getCondition",
            value: function getCondition() {
                return this.condition;
            }
        },
        {
            key: "resolve",
            value: function resolve(context) {
                var value;
                var bracketedConditionString = this.string; ///
                context.trace("Resolving the '".concat(bracketedConditionString, "' bracketed condition..."));
                value = this.condition.resolve(context);
                context.debug("...resolved the '".concat(bracketedConditionString, "' bracketed condition."));
                return value;
            }
        }
    ], [
        {
            key: "fromConditionNode",
            value: function fromConditionNode(conditionNode, context) {
                var bracketedCondition = null;
                var bracketedConditionNode = bracketedConditionNodeQuery(conditionNode);
                if (bracketedConditionNode !== null) {
                    var Condition = _dom.default.Condition, node = bracketedConditionNode, string = context.nodeAsString(node), _$conditionNode = conditionNodeQuery(bracketedConditionNode), condition = Condition.fromConditionNode(_$conditionNode, context);
                    bracketedCondition = new BracketedCondition(string, condition);
                }
                return bracketedCondition;
            }
        }
    ]);
    return BracketedCondition;
}(), _define_property(_BracketedCondition, "name", "BracketedCondition"), _BracketedCondition));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kb20vY29uZGl0aW9uL2JyYWNrZXRlZC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IGRvbSBmcm9tIFwiLi4vLi4vZG9tXCI7XG5cbmltcG9ydCB7IG5vZGVRdWVyeSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvcXVlcnlcIjtcbmltcG9ydCB7IGRvbUFzc2lnbmVkIH0gZnJvbSBcIi4uLy4uL2RvbVwiO1xuXG5jb25zdCBjb25kaXRpb25Ob2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvYnJhY2tldGVkQ29uZGl0aW9uL2NvbmRpdGlvblwiKSxcbiAgICAgIGJyYWNrZXRlZENvbmRpdGlvbk5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9jb25kaXRpb24vYnJhY2tldGVkQ29uZGl0aW9uXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBkb21Bc3NpZ25lZChjbGFzcyBCcmFja2V0ZWRDb25kaXRpb24ge1xuICBjb25zdHJ1Y3RvcihzdHJpbmcsIGNvbmRpdGlvbikge1xuICAgIHRoaXMuc3RyaW5nID0gc3RyaW5nO1xuICAgIHRoaXMuY29uZGl0aW9uID0gY29uZGl0aW9uO1xuICB9XG5cbiAgZ2V0U3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLnN0cmluZztcbiAgfVxuXG4gIGdldENvbmRpdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5jb25kaXRpb247XG4gIH1cblxuICByZXNvbHZlKGNvbnRleHQpIHtcbiAgICBsZXQgdmFsdWU7XG5cbiAgICBjb25zdCBicmFja2V0ZWRDb25kaXRpb25TdHJpbmcgPSB0aGlzLnN0cmluZzsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBSZXNvbHZpbmcgdGhlICcke2JyYWNrZXRlZENvbmRpdGlvblN0cmluZ30nIGJyYWNrZXRlZCBjb25kaXRpb24uLi5gKTtcblxuICAgIHZhbHVlID0gdGhpcy5jb25kaXRpb24ucmVzb2x2ZShjb250ZXh0KTtcblxuICAgIGNvbnRleHQuZGVidWcoYC4uLnJlc29sdmVkIHRoZSAnJHticmFja2V0ZWRDb25kaXRpb25TdHJpbmd9JyBicmFja2V0ZWQgY29uZGl0aW9uLmApO1xuXG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIkJyYWNrZXRlZENvbmRpdGlvblwiO1xuXG4gIHN0YXRpYyBmcm9tQ29uZGl0aW9uTm9kZShjb25kaXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gICAgbGV0IGJyYWNrZXRlZENvbmRpdGlvbiA9IG51bGw7XG5cbiAgICBjb25zdCBicmFja2V0ZWRDb25kaXRpb25Ob2RlID0gYnJhY2tldGVkQ29uZGl0aW9uTm9kZVF1ZXJ5KGNvbmRpdGlvbk5vZGUpO1xuXG4gICAgaWYgKGJyYWNrZXRlZENvbmRpdGlvbk5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHsgQ29uZGl0aW9uIH0gPSBkb20sXG4gICAgICAgICAgICBub2RlID0gYnJhY2tldGVkQ29uZGl0aW9uTm9kZSwgIC8vL1xuICAgICAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgICAgICBjb25kaXRpb25Ob2RlID0gY29uZGl0aW9uTm9kZVF1ZXJ5KGJyYWNrZXRlZENvbmRpdGlvbk5vZGUpLFxuICAgICAgICAgICAgY29uZGl0aW9uID0gQ29uZGl0aW9uLmZyb21Db25kaXRpb25Ob2RlKGNvbmRpdGlvbk5vZGUsIGNvbnRleHQpO1xuXG4gICAgICBicmFja2V0ZWRDb25kaXRpb24gPSBuZXcgQnJhY2tldGVkQ29uZGl0aW9uKHN0cmluZywgY29uZGl0aW9uKTtcbiAgICB9XG5cbiAgICByZXR1cm4gYnJhY2tldGVkQ29uZGl0aW9uO1xuICB9XG59KTtcbiJdLCJuYW1lcyI6WyJjb25kaXRpb25Ob2RlUXVlcnkiLCJub2RlUXVlcnkiLCJicmFja2V0ZWRDb25kaXRpb25Ob2RlUXVlcnkiLCJkb21Bc3NpZ25lZCIsIkJyYWNrZXRlZENvbmRpdGlvbiIsInN0cmluZyIsImNvbmRpdGlvbiIsImdldFN0cmluZyIsImdldENvbmRpdGlvbiIsInJlc29sdmUiLCJjb250ZXh0IiwidmFsdWUiLCJicmFja2V0ZWRDb25kaXRpb25TdHJpbmciLCJ0cmFjZSIsImRlYnVnIiwiZnJvbUNvbmRpdGlvbk5vZGUiLCJjb25kaXRpb25Ob2RlIiwiYnJhY2tldGVkQ29uZGl0aW9uIiwiYnJhY2tldGVkQ29uZGl0aW9uTm9kZSIsIkNvbmRpdGlvbiIsImRvbSIsIm5vZGUiLCJub2RlQXNTdHJpbmciLCJuYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFVQTs7O2VBQUE7OzsyREFSZ0I7cUJBRVU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUcxQixJQUFNQSxxQkFBcUJDLElBQUFBLGdCQUFTLEVBQUMsa0NBQy9CQyw4QkFBOEJELElBQUFBLGdCQUFTLEVBQUM7SUFFOUMsV0FBZUUsSUFBQUEsZ0JBQVcsdUNBQUM7YUFBTUMsbUJBQ25CQyxNQUFNLEVBQUVDLFNBQVM7Z0NBREVGO1FBRTdCLElBQUksQ0FBQ0MsTUFBTSxHQUFHQTtRQUNkLElBQUksQ0FBQ0MsU0FBUyxHQUFHQTs7OztZQUduQkMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRixNQUFNO1lBQ3BCOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRixTQUFTO1lBQ3ZCOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBLFFBQVFDLE9BQU87Z0JBQ2IsSUFBSUM7Z0JBRUosSUFBTUMsMkJBQTJCLElBQUksQ0FBQ1AsTUFBTSxFQUFFLEdBQUc7Z0JBRWpESyxRQUFRRyxLQUFLLENBQUMsQUFBQyxrQkFBMEMsT0FBekJELDBCQUF5QjtnQkFFekRELFFBQVEsSUFBSSxDQUFDTCxTQUFTLENBQUNHLE9BQU8sQ0FBQ0M7Z0JBRS9CQSxRQUFRSSxLQUFLLENBQUMsQUFBQyxvQkFBNEMsT0FBekJGLDBCQUF5QjtnQkFFM0QsT0FBT0Q7WUFDVDs7OztZQUlPSSxLQUFBQTttQkFBUCxTQUFPQSxrQkFBa0JDLGFBQWEsRUFBRU4sT0FBTztnQkFDN0MsSUFBSU8scUJBQXFCO2dCQUV6QixJQUFNQyx5QkFBeUJoQiw0QkFBNEJjO2dCQUUzRCxJQUFJRSwyQkFBMkIsTUFBTTtvQkFDbkMsSUFBTSxBQUFFQyxZQUFjQyxZQUFHLENBQWpCRCxXQUNGRSxPQUFPSCx3QkFDUGIsU0FBU0ssUUFBUVksWUFBWSxDQUFDRCxPQUM5Qkwsa0JBQWdCaEIsbUJBQW1Ca0IseUJBQ25DWixZQUFZYSxVQUFVSixpQkFBaUIsQ0FBQ0MsaUJBQWVOO29CQUU3RE8scUJBQXFCLElBQUliLG1CQUFtQkMsUUFBUUM7Z0JBQ3REO2dCQUVBLE9BQU9XO1lBQ1Q7Ozs7S0FsQkEsc0NBQU9NLFFBQU8ifQ==