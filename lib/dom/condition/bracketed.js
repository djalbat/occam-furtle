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
            key: "evaluate",
            value: function evaluate(context) {
                var value;
                var bracketedConditionString = this.string; ///
                context.trace("Evaluating the '".concat(bracketedConditionString, "' bracketed condition..."));
                value = this.condition.evaluate(context);
                context.debug("...evaluated the '".concat(bracketedConditionString, "' bracketed condition."));
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kb20vY29uZGl0aW9uL2JyYWNrZXRlZC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IGRvbSBmcm9tIFwiLi4vLi4vZG9tXCI7XG5cbmltcG9ydCB7IG5vZGVRdWVyeSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvcXVlcnlcIjtcbmltcG9ydCB7IGRvbUFzc2lnbmVkIH0gZnJvbSBcIi4uLy4uL2RvbVwiO1xuXG5jb25zdCBjb25kaXRpb25Ob2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvYnJhY2tldGVkQ29uZGl0aW9uL2NvbmRpdGlvblwiKSxcbiAgICAgIGJyYWNrZXRlZENvbmRpdGlvbk5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9jb25kaXRpb24vYnJhY2tldGVkQ29uZGl0aW9uXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBkb21Bc3NpZ25lZChjbGFzcyBCcmFja2V0ZWRDb25kaXRpb24ge1xuICBjb25zdHJ1Y3RvcihzdHJpbmcsIGNvbmRpdGlvbikge1xuICAgIHRoaXMuc3RyaW5nID0gc3RyaW5nO1xuICAgIHRoaXMuY29uZGl0aW9uID0gY29uZGl0aW9uO1xuICB9XG5cbiAgZ2V0U3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLnN0cmluZztcbiAgfVxuXG4gIGdldENvbmRpdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5jb25kaXRpb247XG4gIH1cblxuICBldmFsdWF0ZShjb250ZXh0KSB7XG4gICAgbGV0IHZhbHVlO1xuXG4gICAgY29uc3QgYnJhY2tldGVkQ29uZGl0aW9uU3RyaW5nID0gdGhpcy5zdHJpbmc7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgRXZhbHVhdGluZyB0aGUgJyR7YnJhY2tldGVkQ29uZGl0aW9uU3RyaW5nfScgYnJhY2tldGVkIGNvbmRpdGlvbi4uLmApO1xuXG4gICAgdmFsdWUgPSB0aGlzLmNvbmRpdGlvbi5ldmFsdWF0ZShjb250ZXh0KTtcblxuICAgIGNvbnRleHQuZGVidWcoYC4uLmV2YWx1YXRlZCB0aGUgJyR7YnJhY2tldGVkQ29uZGl0aW9uU3RyaW5nfScgYnJhY2tldGVkIGNvbmRpdGlvbi5gKTtcblxuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJCcmFja2V0ZWRDb25kaXRpb25cIjtcblxuICBzdGF0aWMgZnJvbUNvbmRpdGlvbk5vZGUoY29uZGl0aW9uTm9kZSwgY29udGV4dCkge1xuICAgIGxldCBicmFja2V0ZWRDb25kaXRpb24gPSBudWxsO1xuXG4gICAgY29uc3QgYnJhY2tldGVkQ29uZGl0aW9uTm9kZSA9IGJyYWNrZXRlZENvbmRpdGlvbk5vZGVRdWVyeShjb25kaXRpb25Ob2RlKTtcblxuICAgIGlmIChicmFja2V0ZWRDb25kaXRpb25Ob2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCB7IENvbmRpdGlvbiB9ID0gZG9tLFxuICAgICAgICAgICAgbm9kZSA9IGJyYWNrZXRlZENvbmRpdGlvbk5vZGUsICAvLy9cbiAgICAgICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICAgICAgY29uZGl0aW9uTm9kZSA9IGNvbmRpdGlvbk5vZGVRdWVyeShicmFja2V0ZWRDb25kaXRpb25Ob2RlKSxcbiAgICAgICAgICAgIGNvbmRpdGlvbiA9IENvbmRpdGlvbi5mcm9tQ29uZGl0aW9uTm9kZShjb25kaXRpb25Ob2RlLCBjb250ZXh0KTtcblxuICAgICAgYnJhY2tldGVkQ29uZGl0aW9uID0gbmV3IEJyYWNrZXRlZENvbmRpdGlvbihzdHJpbmcsIGNvbmRpdGlvbik7XG4gICAgfVxuXG4gICAgcmV0dXJuIGJyYWNrZXRlZENvbmRpdGlvbjtcbiAgfVxufSk7XG4iXSwibmFtZXMiOlsiY29uZGl0aW9uTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5IiwiYnJhY2tldGVkQ29uZGl0aW9uTm9kZVF1ZXJ5IiwiZG9tQXNzaWduZWQiLCJCcmFja2V0ZWRDb25kaXRpb24iLCJzdHJpbmciLCJjb25kaXRpb24iLCJnZXRTdHJpbmciLCJnZXRDb25kaXRpb24iLCJldmFsdWF0ZSIsImNvbnRleHQiLCJ2YWx1ZSIsImJyYWNrZXRlZENvbmRpdGlvblN0cmluZyIsInRyYWNlIiwiZGVidWciLCJmcm9tQ29uZGl0aW9uTm9kZSIsImNvbmRpdGlvbk5vZGUiLCJicmFja2V0ZWRDb25kaXRpb24iLCJicmFja2V0ZWRDb25kaXRpb25Ob2RlIiwiQ29uZGl0aW9uIiwiZG9tIiwibm9kZSIsIm5vZGVBc1N0cmluZyIsIm5hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVVBOzs7ZUFBQTs7OzJEQVJnQjtxQkFFVTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRzFCLElBQU1BLHFCQUFxQkMsSUFBQUEsZ0JBQVMsRUFBQyxrQ0FDL0JDLDhCQUE4QkQsSUFBQUEsZ0JBQVMsRUFBQztJQUU5QyxXQUFlRSxJQUFBQSxnQkFBVyx1Q0FBQzthQUFNQyxtQkFDbkJDLE1BQU0sRUFBRUMsU0FBUztnQ0FERUY7UUFFN0IsSUFBSSxDQUFDQyxNQUFNLEdBQUdBO1FBQ2QsSUFBSSxDQUFDQyxTQUFTLEdBQUdBOzs7O1lBR25CQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNGLE1BQU07WUFDcEI7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNGLFNBQVM7WUFDdkI7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUEsU0FBU0MsT0FBTztnQkFDZCxJQUFJQztnQkFFSixJQUFNQywyQkFBMkIsSUFBSSxDQUFDUCxNQUFNLEVBQUUsR0FBRztnQkFFakRLLFFBQVFHLEtBQUssQ0FBQyxBQUFDLG1CQUEyQyxPQUF6QkQsMEJBQXlCO2dCQUUxREQsUUFBUSxJQUFJLENBQUNMLFNBQVMsQ0FBQ0csUUFBUSxDQUFDQztnQkFFaENBLFFBQVFJLEtBQUssQ0FBQyxBQUFDLHFCQUE2QyxPQUF6QkYsMEJBQXlCO2dCQUU1RCxPQUFPRDtZQUNUOzs7O1lBSU9JLEtBQUFBO21CQUFQLFNBQU9BLGtCQUFrQkMsYUFBYSxFQUFFTixPQUFPO2dCQUM3QyxJQUFJTyxxQkFBcUI7Z0JBRXpCLElBQU1DLHlCQUF5QmhCLDRCQUE0QmM7Z0JBRTNELElBQUlFLDJCQUEyQixNQUFNO29CQUNuQyxJQUFNLEFBQUVDLFlBQWNDLFlBQUcsQ0FBakJELFdBQ0ZFLE9BQU9ILHdCQUNQYixTQUFTSyxRQUFRWSxZQUFZLENBQUNELE9BQzlCTCxrQkFBZ0JoQixtQkFBbUJrQix5QkFDbkNaLFlBQVlhLFVBQVVKLGlCQUFpQixDQUFDQyxpQkFBZU47b0JBRTdETyxxQkFBcUIsSUFBSWIsbUJBQW1CQyxRQUFRQztnQkFDdEQ7Z0JBRUEsT0FBT1c7WUFDVDs7OztLQWxCQSxzQ0FBT00sUUFBTyJ9