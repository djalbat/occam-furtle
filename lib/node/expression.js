"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return ExpressionNode;
    }
});
var _occamlanguages = require("occam-languages");
var _ruleNames = require("../ruleNames");
function _assert_this_initialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
}
function _call_super(_this, derived, args) {
    derived = _get_prototype_of(derived);
    return _possible_constructor_return(_this, _is_native_reflect_construct() ? Reflect.construct(derived, args || [], _get_prototype_of(_this).constructor) : derived.apply(_this, args));
}
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
function _get_prototype_of(o) {
    _get_prototype_of = Object.setPrototypeOf ? Object.getPrototypeOf : function getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _get_prototype_of(o);
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _set_prototype_of(subClass, superClass);
}
function _possible_constructor_return(self, call) {
    if (call && (_type_of(call) === "object" || typeof call === "function")) {
        return call;
    }
    return _assert_this_initialized(self);
}
function _set_prototype_of(o, p) {
    _set_prototype_of = Object.setPrototypeOf || function setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _set_prototype_of(o, p);
}
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
function _is_native_reflect_construct() {
    try {
        var result = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
    } catch (_) {}
    return (_is_native_reflect_construct = function() {
        return !!result;
    })();
}
var ExpressionNode = /*#__PURE__*/ function(NonTerminalNode) {
    _inherits(ExpressionNode, NonTerminalNode);
    function ExpressionNode() {
        _class_call_check(this, ExpressionNode);
        return _call_super(this, ExpressionNode, arguments);
    }
    _create_class(ExpressionNode, [
        {
            key: "getTermNode",
            value: function getTermNode() {
                var ruleName = _ruleNames.TERM_RULE_NAME, termNode = this.getNodeByRuleName(ruleName);
                return termNode;
            }
        },
        {
            key: "getSomeNode",
            value: function getSomeNode() {
                var ruleName = _ruleNames.SOME_RULE_NAME, someNode = this.getNodeByRuleName(ruleName);
                return someNode;
            }
        },
        {
            key: "getEveryNode",
            value: function getEveryNode() {
                var ruleName = _ruleNames.EVERY_RULE_NAME, everyNode = this.getNodeByRuleName(ruleName);
                return everyNode;
            }
        },
        {
            key: "getReduceNode",
            value: function getReduceNode() {
                var ruleName = _ruleNames.REDUCE_RULE_NAME, reduceNode = this.getNodeByRuleName(ruleName);
                return reduceNode;
            }
        },
        {
            key: "getTernaryNode",
            value: function getTernaryNode() {
                var ruleName = _ruleNames.TERNARY_RULE_NAME, ternaryNode = this.getNodeByRuleName(ruleName);
                return ternaryNode;
            }
        },
        {
            key: "getNodeQueryNode",
            value: function getNodeQueryNode() {
                var ruleName = _ruleNames.NODE_QUERY_RULE_NAME, nodeQueryNode = this.getNodeByRuleName(ruleName);
                return nodeQueryNode;
            }
        },
        {
            key: "getNodesQueryNode",
            value: function getNodesQueryNode() {
                var ruleName = _ruleNames.NODES_QUERY_RULE_NAME, nodeSQueryNode = this.getNodeByRuleName(ruleName);
                return nodeSQueryNode;
            }
        },
        {
            key: "getReturnBlockNode",
            value: function getReturnBlockNode() {
                var ruleName = _ruleNames.RETURN_BLOCK_RULE_NAME, returnBlockNode = this.getNodeByRuleName(ruleName);
                return returnBlockNode;
            }
        },
        {
            key: "getProcedureCallNode",
            value: function getProcedureCallNode() {
                var ruleName = _ruleNames.PROCEDURE_CALL_RULE_NAME, procedureCallNode = this.getNodeByRuleName(ruleName);
                return procedureCallNode;
            }
        }
    ], [
        {
            key: "fromRuleNameChildNodesOpacityAndPrecedence",
            value: function fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) {
                return _occamlanguages.NonTerminalNode.fromRuleNameChildNodesOpacityAndPrecedence(ExpressionNode, ruleName, childNodes, opacity, precedence);
            }
        }
    ]);
    return ExpressionNode;
}(_occamlanguages.NonTerminalNode);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ub2RlL2V4cHJlc3Npb24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IE5vblRlcm1pbmFsTm9kZSB9IGZyb20gXCJvY2NhbS1sYW5ndWFnZXNcIjtcblxuaW1wb3J0IHsgVEVSTV9SVUxFX05BTUUsXG4gICAgICAgICBTT01FX1JVTEVfTkFNRSxcbiAgICAgICAgIEVWRVJZX1JVTEVfTkFNRSxcbiAgICAgICAgIFJFRFVDRV9SVUxFX05BTUUsXG4gICAgICAgICBURVJOQVJZX1JVTEVfTkFNRSxcbiAgICAgICAgIE5PREVfUVVFUllfUlVMRV9OQU1FLFxuICAgICAgICAgTk9ERVNfUVVFUllfUlVMRV9OQU1FLFxuICAgICAgICAgUkVUVVJOX0JMT0NLX1JVTEVfTkFNRSxcbiAgICAgICAgIFBST0NFRFVSRV9DQUxMX1JVTEVfTkFNRSB9IGZyb20gXCIuLi9ydWxlTmFtZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXhwcmVzc2lvbk5vZGUgZXh0ZW5kcyBOb25UZXJtaW5hbE5vZGUge1xuICBnZXRUZXJtTm9kZSgpIHtcbiAgICBjb25zdCBydWxlTmFtZSA9IFRFUk1fUlVMRV9OQU1FLFxuICAgICAgICAgIHRlcm1Ob2RlID0gdGhpcy5nZXROb2RlQnlSdWxlTmFtZShydWxlTmFtZSk7XG5cbiAgICByZXR1cm4gdGVybU5vZGU7XG4gIH1cblxuICBnZXRTb21lTm9kZSgpIHtcbiAgICBjb25zdCBydWxlTmFtZSA9IFNPTUVfUlVMRV9OQU1FLFxuICAgICAgICAgIHNvbWVOb2RlID0gdGhpcy5nZXROb2RlQnlSdWxlTmFtZShydWxlTmFtZSk7XG5cbiAgICByZXR1cm4gc29tZU5vZGU7XG4gIH1cblxuICBnZXRFdmVyeU5vZGUoKSB7XG4gICAgY29uc3QgcnVsZU5hbWUgPSBFVkVSWV9SVUxFX05BTUUsXG4gICAgICAgICAgZXZlcnlOb2RlID0gdGhpcy5nZXROb2RlQnlSdWxlTmFtZShydWxlTmFtZSk7XG5cbiAgICByZXR1cm4gZXZlcnlOb2RlO1xuICB9XG5cbiAgZ2V0UmVkdWNlTm9kZSgpIHtcbiAgICBjb25zdCBydWxlTmFtZSA9IFJFRFVDRV9SVUxFX05BTUUsXG4gICAgICAgICAgcmVkdWNlTm9kZSA9IHRoaXMuZ2V0Tm9kZUJ5UnVsZU5hbWUocnVsZU5hbWUpO1xuXG4gICAgcmV0dXJuIHJlZHVjZU5vZGU7XG4gIH1cblxuICBnZXRUZXJuYXJ5Tm9kZSgpIHtcbiAgICBjb25zdCBydWxlTmFtZSA9IFRFUk5BUllfUlVMRV9OQU1FLFxuICAgICAgICAgIHRlcm5hcnlOb2RlID0gdGhpcy5nZXROb2RlQnlSdWxlTmFtZShydWxlTmFtZSk7XG5cbiAgICByZXR1cm4gdGVybmFyeU5vZGU7XG4gIH1cblxuICBnZXROb2RlUXVlcnlOb2RlKCkge1xuICAgIGNvbnN0IHJ1bGVOYW1lID0gTk9ERV9RVUVSWV9SVUxFX05BTUUsXG4gICAgICAgICAgbm9kZVF1ZXJ5Tm9kZSA9IHRoaXMuZ2V0Tm9kZUJ5UnVsZU5hbWUocnVsZU5hbWUpO1xuXG4gICAgcmV0dXJuIG5vZGVRdWVyeU5vZGU7XG4gIH1cblxuICBnZXROb2Rlc1F1ZXJ5Tm9kZSgpIHtcbiAgICBjb25zdCBydWxlTmFtZSA9IE5PREVTX1FVRVJZX1JVTEVfTkFNRSxcbiAgICAgICAgICBub2RlU1F1ZXJ5Tm9kZSA9IHRoaXMuZ2V0Tm9kZUJ5UnVsZU5hbWUocnVsZU5hbWUpO1xuXG4gICAgcmV0dXJuIG5vZGVTUXVlcnlOb2RlO1xuICB9XG5cbiAgZ2V0UmV0dXJuQmxvY2tOb2RlKCkge1xuICAgIGNvbnN0IHJ1bGVOYW1lID0gUkVUVVJOX0JMT0NLX1JVTEVfTkFNRSxcbiAgICAgICAgICByZXR1cm5CbG9ja05vZGUgPSB0aGlzLmdldE5vZGVCeVJ1bGVOYW1lKHJ1bGVOYW1lKTtcblxuICAgIHJldHVybiByZXR1cm5CbG9ja05vZGU7XG4gIH1cblxuICBnZXRQcm9jZWR1cmVDYWxsTm9kZSgpIHtcbiAgICBjb25zdCBydWxlTmFtZSA9IFBST0NFRFVSRV9DQUxMX1JVTEVfTkFNRSxcbiAgICAgICAgICBwcm9jZWR1cmVDYWxsTm9kZSA9IHRoaXMuZ2V0Tm9kZUJ5UnVsZU5hbWUocnVsZU5hbWUpO1xuXG4gICAgcmV0dXJuIHByb2NlZHVyZUNhbGxOb2RlO1xuICB9XG5cbiAgc3RhdGljIGZyb21SdWxlTmFtZUNoaWxkTm9kZXNPcGFjaXR5QW5kUHJlY2VkZW5jZShydWxlTmFtZSwgY2hpbGROb2Rlcywgb3BhY2l0eSwgcHJlY2VkZW5jZSkgeyByZXR1cm4gTm9uVGVybWluYWxOb2RlLmZyb21SdWxlTmFtZUNoaWxkTm9kZXNPcGFjaXR5QW5kUHJlY2VkZW5jZShFeHByZXNzaW9uTm9kZSwgcnVsZU5hbWUsIGNoaWxkTm9kZXMsIG9wYWNpdHksIHByZWNlZGVuY2UpOyB9XG59XG4iXSwibmFtZXMiOlsiRXhwcmVzc2lvbk5vZGUiLCJnZXRUZXJtTm9kZSIsInJ1bGVOYW1lIiwiVEVSTV9SVUxFX05BTUUiLCJ0ZXJtTm9kZSIsImdldE5vZGVCeVJ1bGVOYW1lIiwiZ2V0U29tZU5vZGUiLCJTT01FX1JVTEVfTkFNRSIsInNvbWVOb2RlIiwiZ2V0RXZlcnlOb2RlIiwiRVZFUllfUlVMRV9OQU1FIiwiZXZlcnlOb2RlIiwiZ2V0UmVkdWNlTm9kZSIsIlJFRFVDRV9SVUxFX05BTUUiLCJyZWR1Y2VOb2RlIiwiZ2V0VGVybmFyeU5vZGUiLCJURVJOQVJZX1JVTEVfTkFNRSIsInRlcm5hcnlOb2RlIiwiZ2V0Tm9kZVF1ZXJ5Tm9kZSIsIk5PREVfUVVFUllfUlVMRV9OQU1FIiwibm9kZVF1ZXJ5Tm9kZSIsImdldE5vZGVzUXVlcnlOb2RlIiwiTk9ERVNfUVVFUllfUlVMRV9OQU1FIiwibm9kZVNRdWVyeU5vZGUiLCJnZXRSZXR1cm5CbG9ja05vZGUiLCJSRVRVUk5fQkxPQ0tfUlVMRV9OQU1FIiwicmV0dXJuQmxvY2tOb2RlIiwiZ2V0UHJvY2VkdXJlQ2FsbE5vZGUiLCJQUk9DRURVUkVfQ0FMTF9SVUxFX05BTUUiLCJwcm9jZWR1cmVDYWxsTm9kZSIsImZyb21SdWxlTmFtZUNoaWxkTm9kZXNPcGFjaXR5QW5kUHJlY2VkZW5jZSIsImNoaWxkTm9kZXMiLCJvcGFjaXR5IiwicHJlY2VkZW5jZSIsIk5vblRlcm1pbmFsTm9kZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFjcUJBOzs7OEJBWlc7eUJBVVM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTFCLElBQUEsQUFBTUEsK0JBQU47Y0FBTUE7YUFBQUE7Z0NBQUFBO1FBQU4sT0FBQSxrQkFBTUE7O2tCQUFBQTs7WUFDbkJDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNQyxXQUFXQyx5QkFBYyxFQUN6QkMsV0FBVyxJQUFJLENBQUNDLGlCQUFpQixDQUFDSDtnQkFFeEMsT0FBT0U7WUFDVDs7O1lBRUFFLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNSixXQUFXSyx5QkFBYyxFQUN6QkMsV0FBVyxJQUFJLENBQUNILGlCQUFpQixDQUFDSDtnQkFFeEMsT0FBT007WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNUCxXQUFXUSwwQkFBZSxFQUMxQkMsWUFBWSxJQUFJLENBQUNOLGlCQUFpQixDQUFDSDtnQkFFekMsT0FBT1M7WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNVixXQUFXVywyQkFBZ0IsRUFDM0JDLGFBQWEsSUFBSSxDQUFDVCxpQkFBaUIsQ0FBQ0g7Z0JBRTFDLE9BQU9ZO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTWIsV0FBV2MsNEJBQWlCLEVBQzVCQyxjQUFjLElBQUksQ0FBQ1osaUJBQWlCLENBQUNIO2dCQUUzQyxPQUFPZTtZQUNUOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1oQixXQUFXaUIsK0JBQW9CLEVBQy9CQyxnQkFBZ0IsSUFBSSxDQUFDZixpQkFBaUIsQ0FBQ0g7Z0JBRTdDLE9BQU9rQjtZQUNUOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1uQixXQUFXb0IsZ0NBQXFCLEVBQ2hDQyxpQkFBaUIsSUFBSSxDQUFDbEIsaUJBQWlCLENBQUNIO2dCQUU5QyxPQUFPcUI7WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNdEIsV0FBV3VCLGlDQUFzQixFQUNqQ0Msa0JBQWtCLElBQUksQ0FBQ3JCLGlCQUFpQixDQUFDSDtnQkFFL0MsT0FBT3dCO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTXpCLFdBQVcwQixtQ0FBd0IsRUFDbkNDLG9CQUFvQixJQUFJLENBQUN4QixpQkFBaUIsQ0FBQ0g7Z0JBRWpELE9BQU8yQjtZQUNUOzs7O1lBRU9DLEtBQUFBO21CQUFQLFNBQU9BLDJDQUEyQzVCLFFBQVEsRUFBRTZCLFVBQVUsRUFBRUMsT0FBTyxFQUFFQyxVQUFVO2dCQUFJLE9BQU9DLCtCQUFlLENBQUNKLDBDQUEwQyxDQWhFN0k5QixnQkFnRThKRSxVQUFVNkIsWUFBWUMsU0FBU0M7WUFBYTs7O1dBaEUxTWpDO0VBQXVCa0MsK0JBQWUifQ==