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
var _NegatedCondition;
var conditionNodeQuery = (0, _query.nodeQuery)("/negatedCondition/condition"), negatedConditionNodeQuery = (0, _query.nodeQuery)("/condition/negatedCondition");
var _default = (0, _dom.domAssigned)((_NegatedCondition = /*#__PURE__*/ function() {
    function NegatedCondition(string, condition) {
        _class_call_check(this, NegatedCondition);
        this.string = string;
        this.condition = condition;
    }
    _create_class(NegatedCondition, [
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
        },
        {
            key: "evaluate",
            value: function evaluate(context) {
                var value;
                var negatedConditionString = this.string; ///
                context.trace("Evaluating the '".concat(negatedConditionString, "' negated condition..."));
                value = this.condition.evaluate(context);
                var boolean = value.getBoolean();
                boolean = !boolean;
                var Value = _dom.default.Value;
                value = Value.fromBoolean(boolean, context); ///
                context.debug("...evaluated the '".concat(negatedConditionString, "' negated condition."));
                return value;
            }
        }
    ], [
        {
            key: "fromConditionNode",
            value: function fromConditionNode(conditionNode, context) {
                var negatedCondition = null;
                var negatedConditionNode = negatedConditionNodeQuery(conditionNode);
                if (negatedConditionNode !== null) {
                    var Condition = _dom.default.Condition, node = negatedConditionNode, string = context.nodeAsString(node), _$conditionNode = conditionNodeQuery(negatedConditionNode), condition = Condition.fromConditionNode(_$conditionNode, context);
                    negatedCondition = new NegatedCondition(string, condition);
                }
                return negatedCondition;
            }
        }
    ]);
    return NegatedCondition;
}(), _define_property(_NegatedCondition, "name", "NegatedCondition"), _NegatedCondition));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kb20vY29uZGl0aW9uL25lZ2F0ZWQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBkb20gZnJvbSBcIi4uLy4uL2RvbVwiO1xuXG5pbXBvcnQgeyBub2RlUXVlcnkgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5pbXBvcnQgeyBkb21Bc3NpZ25lZCB9IGZyb20gXCIuLi8uLi9kb21cIjtcblxuY29uc3QgY29uZGl0aW9uTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL25lZ2F0ZWRDb25kaXRpb24vY29uZGl0aW9uXCIpLFxuICAgICAgbmVnYXRlZENvbmRpdGlvbk5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9jb25kaXRpb24vbmVnYXRlZENvbmRpdGlvblwiKTtcblxuZXhwb3J0IGRlZmF1bHQgZG9tQXNzaWduZWQoY2xhc3MgTmVnYXRlZENvbmRpdGlvbiB7XG4gIGNvbnN0cnVjdG9yKHN0cmluZywgY29uZGl0aW9uKSB7XG4gICAgdGhpcy5zdHJpbmcgPSBzdHJpbmc7XG4gICAgdGhpcy5jb25kaXRpb24gPSBjb25kaXRpb247XG4gIH1cblxuICBnZXRTdHJpbmcoKSB7XG4gICAgZGVidWdnZXJcbiAgfVxuXG4gIGdldENvbmRpdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5jb25kaXRpb247XG4gIH1cblxuICBldmFsdWF0ZShjb250ZXh0KSB7XG4gICAgbGV0IHZhbHVlO1xuXG4gICAgY29uc3QgbmVnYXRlZENvbmRpdGlvblN0cmluZyA9IHRoaXMuc3RyaW5nOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYEV2YWx1YXRpbmcgdGhlICcke25lZ2F0ZWRDb25kaXRpb25TdHJpbmd9JyBuZWdhdGVkIGNvbmRpdGlvbi4uLmApO1xuXG4gICAgdmFsdWUgPSB0aGlzLmNvbmRpdGlvbi5ldmFsdWF0ZShjb250ZXh0KTtcblxuICAgIGxldCBib29sZWFuID0gdmFsdWUuZ2V0Qm9vbGVhbigpO1xuXG4gICAgYm9vbGVhbiA9ICFib29sZWFuO1xuXG4gICAgY29uc3QgeyBWYWx1ZSB9ID0gZG9tO1xuXG4gICAgdmFsdWUgPSBWYWx1ZS5mcm9tQm9vbGVhbihib29sZWFuLCBjb250ZXh0KTsgIC8vL1xuXG4gICAgY29udGV4dC5kZWJ1ZyhgLi4uZXZhbHVhdGVkIHRoZSAnJHtuZWdhdGVkQ29uZGl0aW9uU3RyaW5nfScgbmVnYXRlZCBjb25kaXRpb24uYCk7XG5cbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiTmVnYXRlZENvbmRpdGlvblwiO1xuXG4gIHN0YXRpYyBmcm9tQ29uZGl0aW9uTm9kZShjb25kaXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gICAgbGV0IG5lZ2F0ZWRDb25kaXRpb24gPSBudWxsO1xuXG4gICAgY29uc3QgbmVnYXRlZENvbmRpdGlvbk5vZGUgPSBuZWdhdGVkQ29uZGl0aW9uTm9kZVF1ZXJ5KGNvbmRpdGlvbk5vZGUpO1xuXG4gICAgaWYgKG5lZ2F0ZWRDb25kaXRpb25Ob2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCB7IENvbmRpdGlvbiB9ID0gZG9tLFxuICAgICAgICAgICAgbm9kZSA9IG5lZ2F0ZWRDb25kaXRpb25Ob2RlLCAgLy9cbiAgICAgICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICAgICAgY29uZGl0aW9uTm9kZSA9IGNvbmRpdGlvbk5vZGVRdWVyeShuZWdhdGVkQ29uZGl0aW9uTm9kZSksXG4gICAgICAgICAgICBjb25kaXRpb24gPSBDb25kaXRpb24uZnJvbUNvbmRpdGlvbk5vZGUoY29uZGl0aW9uTm9kZSwgY29udGV4dCk7XG5cbiAgICAgIG5lZ2F0ZWRDb25kaXRpb24gPSBuZXcgTmVnYXRlZENvbmRpdGlvbihzdHJpbmcsIGNvbmRpdGlvbik7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5lZ2F0ZWRDb25kaXRpb247XG4gIH1cbn0pO1xuIl0sIm5hbWVzIjpbImNvbmRpdGlvbk5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsIm5lZ2F0ZWRDb25kaXRpb25Ob2RlUXVlcnkiLCJkb21Bc3NpZ25lZCIsIk5lZ2F0ZWRDb25kaXRpb24iLCJzdHJpbmciLCJjb25kaXRpb24iLCJnZXRTdHJpbmciLCJnZXRDb25kaXRpb24iLCJldmFsdWF0ZSIsImNvbnRleHQiLCJ2YWx1ZSIsIm5lZ2F0ZWRDb25kaXRpb25TdHJpbmciLCJ0cmFjZSIsImJvb2xlYW4iLCJnZXRCb29sZWFuIiwiVmFsdWUiLCJkb20iLCJmcm9tQm9vbGVhbiIsImRlYnVnIiwiZnJvbUNvbmRpdGlvbk5vZGUiLCJjb25kaXRpb25Ob2RlIiwibmVnYXRlZENvbmRpdGlvbiIsIm5lZ2F0ZWRDb25kaXRpb25Ob2RlIiwiQ29uZGl0aW9uIiwibm9kZSIsIm5vZGVBc1N0cmluZyIsIm5hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVVBOzs7ZUFBQTs7OzJEQVJnQjtxQkFFVTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRzFCLElBQU1BLHFCQUFxQkMsSUFBQUEsZ0JBQVMsRUFBQyxnQ0FDL0JDLDRCQUE0QkQsSUFBQUEsZ0JBQVMsRUFBQztJQUU1QyxXQUFlRSxJQUFBQSxnQkFBVyxxQ0FBQzthQUFNQyxpQkFDbkJDLE1BQU0sRUFBRUMsU0FBUztnQ0FERUY7UUFFN0IsSUFBSSxDQUFDQyxNQUFNLEdBQUdBO1FBQ2QsSUFBSSxDQUFDQyxTQUFTLEdBQUdBOzs7O1lBR25CQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsUUFBUTtZQUNWOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRixTQUFTO1lBQ3ZCOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBLFNBQVNDLE9BQU87Z0JBQ2QsSUFBSUM7Z0JBRUosSUFBTUMseUJBQXlCLElBQUksQ0FBQ1AsTUFBTSxFQUFFLEdBQUc7Z0JBRS9DSyxRQUFRRyxLQUFLLENBQUMsQUFBQyxtQkFBeUMsT0FBdkJELHdCQUF1QjtnQkFFeERELFFBQVEsSUFBSSxDQUFDTCxTQUFTLENBQUNHLFFBQVEsQ0FBQ0M7Z0JBRWhDLElBQUlJLFVBQVVILE1BQU1JLFVBQVU7Z0JBRTlCRCxVQUFVLENBQUNBO2dCQUVYLElBQU0sQUFBRUUsUUFBVUMsWUFBRyxDQUFiRDtnQkFFUkwsUUFBUUssTUFBTUUsV0FBVyxDQUFDSixTQUFTSixVQUFXLEdBQUc7Z0JBRWpEQSxRQUFRUyxLQUFLLENBQUMsQUFBQyxxQkFBMkMsT0FBdkJQLHdCQUF1QjtnQkFFMUQsT0FBT0Q7WUFDVDs7OztZQUlPUyxLQUFBQTttQkFBUCxTQUFPQSxrQkFBa0JDLGFBQWEsRUFBRVgsT0FBTztnQkFDN0MsSUFBSVksbUJBQW1CO2dCQUV2QixJQUFNQyx1QkFBdUJyQiwwQkFBMEJtQjtnQkFFdkQsSUFBSUUseUJBQXlCLE1BQU07b0JBQ2pDLElBQU0sQUFBRUMsWUFBY1AsWUFBRyxDQUFqQk8sV0FDRkMsT0FBT0Ysc0JBQ1BsQixTQUFTSyxRQUFRZ0IsWUFBWSxDQUFDRCxPQUM5Qkosa0JBQWdCckIsbUJBQW1CdUIsdUJBQ25DakIsWUFBWWtCLFVBQVVKLGlCQUFpQixDQUFDQyxpQkFBZVg7b0JBRTdEWSxtQkFBbUIsSUFBSWxCLGlCQUFpQkMsUUFBUUM7Z0JBQ2xEO2dCQUVBLE9BQU9nQjtZQUNUOzs7O0tBbEJBLG9DQUFPSyxRQUFPIn0=