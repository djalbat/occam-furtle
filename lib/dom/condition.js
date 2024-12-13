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
        },
        {
            key: "resolve",
            value: function resolve(context) {
                var value;
                var conditionString = this.string;
                context.trace("Resolving the '".concat(conditionString, "' condition..."));
                if (this.value !== null) {
                    value = this.value.resolve(context);
                }
                if (this.comparison !== null) {
                    value = this.comparison.resolve(context);
                }
                if (this.bitwiseCondition !== null) {
                    value = this.bitwiseCondition.resolve(context);
                }
                if (this.bracketedCondition !== null) {
                    value = this.bitwiseCondition.resolve(context);
                }
                context.debug("...resolved the '".concat(conditionString, "' condition."));
                return value;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb20vY29uZGl0aW9uLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgZG9tIGZyb20gXCIuLi9kb21cIjtcblxuaW1wb3J0IHsgbm9kZVF1ZXJ5IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9xdWVyeVwiO1xuaW1wb3J0IHsgZG9tQXNzaWduZWQgfSBmcm9tIFwiLi4vZG9tXCI7XG5cbmNvbnN0IGNvbmRpdGlvbk5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9jb25kaXRpb25hbEJsb2NrL2NvbmRpdGlvblwiKTtcblxuZXhwb3J0IGRlZmF1bHQgZG9tQXNzaWduZWQoY2xhc3MgQ29uZGl0aW9uIHtcbiAgY29uc3RydWN0b3Ioc3RyaW5nLCB2YWx1ZSwgY29tcGFyaXNvbiwgYml0d2lzZUNvbmRpdGlvbiwgYnJhY2tldGVkQ29uZGl0aW9uKSB7XG4gICAgdGhpcy5zdHJpbmcgPSBzdHJpbmc7XG4gICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgIHRoaXMuY29tcGFyaXNvbiA9IGNvbXBhcmlzb247XG4gICAgdGhpcy5iaXR3aXNlQ29uZGl0aW9uID0gYml0d2lzZUNvbmRpdGlvbjtcbiAgICB0aGlzLmJyYWNrZXRlZENvbmRpdGlvbiA9IGJyYWNrZXRlZENvbmRpdGlvbjtcbiAgfVxuXG4gIGdldFN0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5zdHJpbmc7XG4gIH1cblxuICBnZXRWYWx1ZSgpIHtcbiAgICByZXR1cm4gdGhpcy52YWx1ZTtcbiAgfVxuXG4gIGdldENvbXBhcmlzb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuY29tcGFyaXNvbjtcbiAgfVxuXG4gIGdldEJpdHdpc2VDb25kaXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuYml0d2lzZUNvbmRpdGlvbjtcbiAgfVxuXG4gIGdldEJyYWNrZXRlZENvbmRpdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5icmFja2V0ZWRDb25kaXRpb247XG4gIH1cblxuICByZXNvbHZlKGNvbnRleHQpIHtcbiAgICBsZXQgdmFsdWU7XG5cbiAgICBjb25zdCBjb25kaXRpb25TdHJpbmcgPSB0aGlzLnN0cmluZztcblxuICAgIGNvbnRleHQudHJhY2UoYFJlc29sdmluZyB0aGUgJyR7Y29uZGl0aW9uU3RyaW5nfScgY29uZGl0aW9uLi4uYCk7XG5cbiAgICBpZiAodGhpcy52YWx1ZSAhPT0gbnVsbCkge1xuICAgICAgdmFsdWUgPSB0aGlzLnZhbHVlLnJlc29sdmUoY29udGV4dCk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuY29tcGFyaXNvbiAhPT0gbnVsbCkge1xuICAgICAgdmFsdWUgPSB0aGlzLmNvbXBhcmlzb24ucmVzb2x2ZShjb250ZXh0KTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5iaXR3aXNlQ29uZGl0aW9uICE9PSBudWxsKSB7XG4gICAgICB2YWx1ZSA9IHRoaXMuYml0d2lzZUNvbmRpdGlvbi5yZXNvbHZlKGNvbnRleHQpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmJyYWNrZXRlZENvbmRpdGlvbiAhPT0gbnVsbCkge1xuICAgICAgdmFsdWUgPSB0aGlzLmJpdHdpc2VDb25kaXRpb24ucmVzb2x2ZShjb250ZXh0KTtcbiAgICB9XG5cbiAgICBjb250ZXh0LmRlYnVnKGAuLi5yZXNvbHZlZCB0aGUgJyR7Y29uZGl0aW9uU3RyaW5nfScgY29uZGl0aW9uLmApO1xuXG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIkNvbmRpdGlvblwiO1xuXG4gIHN0YXRpYyBmcm9tQ29uZGl0aW9uTm9kZShjb25kaXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gICAgY29uc3QgeyBWYWx1ZSwgQ29tcGFyaXNvbiwgQml0d2lzZUNvbmRpdGlvbiwgQnJhY2tldGVkQ29uZGl0aW9uIH0gPSBkb20sXG4gICAgICAgICAgbm9kZSA9IGNvbmRpdGlvbk5vZGUsIC8vL1xuICAgICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICAgIHZhbHVlID0gVmFsdWUuZnJvbUNvbmRpdGlvbk5vZGUoY29uZGl0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgY29tcGFyaXNvbiA9IENvbXBhcmlzb24uZnJvbUNvbmRpdGlvbk5vZGUoY29uZGl0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgYml0d2lzZUNvbmRpdGlvbiA9IEJpdHdpc2VDb25kaXRpb24uZnJvbUNvbmRpdGlvbk5vZGUoY29uZGl0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgYnJhY2tldGVkQ29uZGl0aW9uID0gQnJhY2tldGVkQ29uZGl0aW9uLmZyb21Db25kaXRpb25Ob2RlKGNvbmRpdGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgIGNvbmRpdGlvbiA9IG5ldyBDb25kaXRpb24oc3RyaW5nLCB2YWx1ZSwgY29tcGFyaXNvbiwgYml0d2lzZUNvbmRpdGlvbiwgYnJhY2tldGVkQ29uZGl0aW9uKTtcblxuICAgIHJldHVybiBjb25kaXRpb247XG4gIH1cblxuICBzdGF0aWMgZnJvbUNvbmRpdGlvbmFsQmxvY2tOb2RlKGNvbmRpdGlvbmFsQmxvY2tOb2RlLCBjb250ZXh0KSB7XG4gICAgY29uc3QgeyBWYWx1ZSwgQ29tcGFyaXNvbiwgQml0d2lzZUNvbmRpdGlvbiwgQnJhY2tldGVkQ29uZGl0aW9uIH0gPSBkb20sXG4gICAgICAgICAgY29uZGl0aW9uTm9kZSA9IGNvbmRpdGlvbk5vZGVRdWVyeShjb25kaXRpb25hbEJsb2NrTm9kZSksXG4gICAgICAgICAgbm9kZSA9IGNvbmRpdGlvbk5vZGUsIC8vL1xuICAgICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICAgIHZhbHVlID0gVmFsdWUuZnJvbUNvbmRpdGlvbk5vZGUoY29uZGl0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgY29tcGFyaXNvbiA9IENvbXBhcmlzb24uZnJvbUNvbmRpdGlvbk5vZGUoY29uZGl0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgYml0d2lzZUNvbmRpdGlvbiA9IEJpdHdpc2VDb25kaXRpb24uZnJvbUNvbmRpdGlvbk5vZGUoY29uZGl0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgYnJhY2tldGVkQ29uZGl0aW9uID0gQnJhY2tldGVkQ29uZGl0aW9uLmZyb21Db25kaXRpb25Ob2RlKGNvbmRpdGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgIGNvbmRpdGlvbiA9IG5ldyBDb25kaXRpb24oc3RyaW5nLCB2YWx1ZSwgY29tcGFyaXNvbiwgYml0d2lzZUNvbmRpdGlvbiwgYnJhY2tldGVkQ29uZGl0aW9uKTtcblxuICAgIHJldHVybiBjb25kaXRpb247XG4gIH1cbn0pO1xuIl0sIm5hbWVzIjpbImNvbmRpdGlvbk5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsImRvbUFzc2lnbmVkIiwiQ29uZGl0aW9uIiwic3RyaW5nIiwidmFsdWUiLCJjb21wYXJpc29uIiwiYml0d2lzZUNvbmRpdGlvbiIsImJyYWNrZXRlZENvbmRpdGlvbiIsImdldFN0cmluZyIsImdldFZhbHVlIiwiZ2V0Q29tcGFyaXNvbiIsImdldEJpdHdpc2VDb25kaXRpb24iLCJnZXRCcmFja2V0ZWRDb25kaXRpb24iLCJyZXNvbHZlIiwiY29udGV4dCIsImNvbmRpdGlvblN0cmluZyIsInRyYWNlIiwiZGVidWciLCJmcm9tQ29uZGl0aW9uTm9kZSIsImNvbmRpdGlvbk5vZGUiLCJWYWx1ZSIsImRvbSIsIkNvbXBhcmlzb24iLCJCaXR3aXNlQ29uZGl0aW9uIiwiQnJhY2tldGVkQ29uZGl0aW9uIiwibm9kZSIsIm5vZGVBc1N0cmluZyIsImNvbmRpdGlvbiIsImZyb21Db25kaXRpb25hbEJsb2NrTm9kZSIsImNvbmRpdGlvbmFsQmxvY2tOb2RlIiwibmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBU0E7OztlQUFBOzs7MkRBUGdCO3FCQUVVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHMUIsSUFBTUEscUJBQXFCQyxJQUFBQSxnQkFBUyxFQUFDO0lBRXJDLFdBQWVDLElBQUFBLGdCQUFXLDhCQUFDO2FBQU1DLFVBQ25CQyxNQUFNLEVBQUVDLEtBQUssRUFBRUMsVUFBVSxFQUFFQyxnQkFBZ0IsRUFBRUMsa0JBQWtCO2dDQUQ1Q0w7UUFFN0IsSUFBSSxDQUFDQyxNQUFNLEdBQUdBO1FBQ2QsSUFBSSxDQUFDQyxLQUFLLEdBQUdBO1FBQ2IsSUFBSSxDQUFDQyxVQUFVLEdBQUdBO1FBQ2xCLElBQUksQ0FBQ0MsZ0JBQWdCLEdBQUdBO1FBQ3hCLElBQUksQ0FBQ0Msa0JBQWtCLEdBQUdBOzs7O1lBRzVCQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNMLE1BQU07WUFDcEI7OztZQUVBTSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNMLEtBQUs7WUFDbkI7OztZQUVBTSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNMLFVBQVU7WUFDeEI7OztZQUVBTSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNMLGdCQUFnQjtZQUM5Qjs7O1lBRUFNLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0wsa0JBQWtCO1lBQ2hDOzs7WUFFQU0sS0FBQUE7bUJBQUFBLFNBQUFBLFFBQVFDLE9BQU87Z0JBQ2IsSUFBSVY7Z0JBRUosSUFBTVcsa0JBQWtCLElBQUksQ0FBQ1osTUFBTTtnQkFFbkNXLFFBQVFFLEtBQUssQ0FBQyxBQUFDLGtCQUFpQyxPQUFoQkQsaUJBQWdCO2dCQUVoRCxJQUFJLElBQUksQ0FBQ1gsS0FBSyxLQUFLLE1BQU07b0JBQ3ZCQSxRQUFRLElBQUksQ0FBQ0EsS0FBSyxDQUFDUyxPQUFPLENBQUNDO2dCQUM3QjtnQkFFQSxJQUFJLElBQUksQ0FBQ1QsVUFBVSxLQUFLLE1BQU07b0JBQzVCRCxRQUFRLElBQUksQ0FBQ0MsVUFBVSxDQUFDUSxPQUFPLENBQUNDO2dCQUNsQztnQkFFQSxJQUFJLElBQUksQ0FBQ1IsZ0JBQWdCLEtBQUssTUFBTTtvQkFDbENGLFFBQVEsSUFBSSxDQUFDRSxnQkFBZ0IsQ0FBQ08sT0FBTyxDQUFDQztnQkFDeEM7Z0JBRUEsSUFBSSxJQUFJLENBQUNQLGtCQUFrQixLQUFLLE1BQU07b0JBQ3BDSCxRQUFRLElBQUksQ0FBQ0UsZ0JBQWdCLENBQUNPLE9BQU8sQ0FBQ0M7Z0JBQ3hDO2dCQUVBQSxRQUFRRyxLQUFLLENBQUMsQUFBQyxvQkFBbUMsT0FBaEJGLGlCQUFnQjtnQkFFbEQsT0FBT1g7WUFDVDs7OztZQUlPYyxLQUFBQTttQkFBUCxTQUFPQSxrQkFBa0JDLGFBQWEsRUFBRUwsT0FBTztnQkFDN0MsSUFBUU0sUUFBNERDLFlBQUcsQ0FBL0RELE9BQU9FLGFBQXFERCxZQUFHLENBQXhEQyxZQUFZQyxtQkFBeUNGLFlBQUcsQ0FBNUNFLGtCQUFrQkMscUJBQXVCSCxZQUFHLENBQTFCRyxvQkFDdkNDLE9BQU9OLGVBQ1BoQixTQUFTVyxRQUFRWSxZQUFZLENBQUNELE9BQzlCckIsUUFBUWdCLE1BQU1GLGlCQUFpQixDQUFDQyxlQUFlTCxVQUMvQ1QsYUFBYWlCLFdBQVdKLGlCQUFpQixDQUFDQyxlQUFlTCxVQUN6RFIsbUJBQW1CaUIsaUJBQWlCTCxpQkFBaUIsQ0FBQ0MsZUFBZUwsVUFDckVQLHFCQUFxQmlCLG1CQUFtQk4saUJBQWlCLENBQUNDLGVBQWVMLFVBQ3pFYSxZQUFZLElBQUl6QixVQUFVQyxRQUFRQyxPQUFPQyxZQUFZQyxrQkFBa0JDO2dCQUU3RSxPQUFPb0I7WUFDVDs7O1lBRU9DLEtBQUFBO21CQUFQLFNBQU9BLHlCQUF5QkMsb0JBQW9CLEVBQUVmLE9BQU87Z0JBQzNELElBQVFNLFFBQTREQyxZQUFHLENBQS9ERCxPQUFPRSxhQUFxREQsWUFBRyxDQUF4REMsWUFBWUMsbUJBQXlDRixZQUFHLENBQTVDRSxrQkFBa0JDLHFCQUF1QkgsWUFBRyxDQUExQkcsb0JBQ3ZDTCxnQkFBZ0JwQixtQkFBbUI4Qix1QkFDbkNKLE9BQU9OLGVBQ1BoQixTQUFTVyxRQUFRWSxZQUFZLENBQUNELE9BQzlCckIsUUFBUWdCLE1BQU1GLGlCQUFpQixDQUFDQyxlQUFlTCxVQUMvQ1QsYUFBYWlCLFdBQVdKLGlCQUFpQixDQUFDQyxlQUFlTCxVQUN6RFIsbUJBQW1CaUIsaUJBQWlCTCxpQkFBaUIsQ0FBQ0MsZUFBZUwsVUFDckVQLHFCQUFxQmlCLG1CQUFtQk4saUJBQWlCLENBQUNDLGVBQWVMLFVBQ3pFYSxZQUFZLElBQUl6QixVQUFVQyxRQUFRQyxPQUFPQyxZQUFZQyxrQkFBa0JDO2dCQUU3RSxPQUFPb0I7WUFDVDs7OztLQTNCQSw2QkFBT0csUUFBTyJ9