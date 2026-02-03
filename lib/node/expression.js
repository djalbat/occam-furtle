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
var _nonTerminalNode = /*#__PURE__*/ _interop_require_default(require("../nonTerminalNode"));
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
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
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
                return _nonTerminalNode.default.fromRuleNameChildNodesOpacityAndPrecedence(ExpressionNode, ruleName, childNodes, opacity, precedence);
            }
        }
    ]);
    return ExpressionNode;
}(_nonTerminalNode.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ub2RlL2V4cHJlc3Npb24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBOb25UZXJtaW5hbE5vZGUgZnJvbSBcIi4uL25vblRlcm1pbmFsTm9kZVwiO1xuXG5pbXBvcnQgeyBURVJNX1JVTEVfTkFNRSxcbiAgICAgICAgIFNPTUVfUlVMRV9OQU1FLFxuICAgICAgICAgRVZFUllfUlVMRV9OQU1FLFxuICAgICAgICAgUkVEVUNFX1JVTEVfTkFNRSxcbiAgICAgICAgIFRFUk5BUllfUlVMRV9OQU1FLFxuICAgICAgICAgTk9ERV9RVUVSWV9SVUxFX05BTUUsXG4gICAgICAgICBOT0RFU19RVUVSWV9SVUxFX05BTUUsXG4gICAgICAgICBSRVRVUk5fQkxPQ0tfUlVMRV9OQU1FLFxuICAgICAgICAgUFJPQ0VEVVJFX0NBTExfUlVMRV9OQU1FIH0gZnJvbSBcIi4uL3J1bGVOYW1lc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFeHByZXNzaW9uTm9kZSBleHRlbmRzIE5vblRlcm1pbmFsTm9kZSB7XG4gIGdldFRlcm1Ob2RlKCkge1xuICAgIGNvbnN0IHJ1bGVOYW1lID0gVEVSTV9SVUxFX05BTUUsXG4gICAgICAgICAgdGVybU5vZGUgPSB0aGlzLmdldE5vZGVCeVJ1bGVOYW1lKHJ1bGVOYW1lKTtcblxuICAgIHJldHVybiB0ZXJtTm9kZTtcbiAgfVxuXG4gIGdldFNvbWVOb2RlKCkge1xuICAgIGNvbnN0IHJ1bGVOYW1lID0gU09NRV9SVUxFX05BTUUsXG4gICAgICAgICAgc29tZU5vZGUgPSB0aGlzLmdldE5vZGVCeVJ1bGVOYW1lKHJ1bGVOYW1lKTtcblxuICAgIHJldHVybiBzb21lTm9kZTtcbiAgfVxuXG4gIGdldEV2ZXJ5Tm9kZSgpIHtcbiAgICBjb25zdCBydWxlTmFtZSA9IEVWRVJZX1JVTEVfTkFNRSxcbiAgICAgICAgICBldmVyeU5vZGUgPSB0aGlzLmdldE5vZGVCeVJ1bGVOYW1lKHJ1bGVOYW1lKTtcblxuICAgIHJldHVybiBldmVyeU5vZGU7XG4gIH1cblxuICBnZXRSZWR1Y2VOb2RlKCkge1xuICAgIGNvbnN0IHJ1bGVOYW1lID0gUkVEVUNFX1JVTEVfTkFNRSxcbiAgICAgICAgICByZWR1Y2VOb2RlID0gdGhpcy5nZXROb2RlQnlSdWxlTmFtZShydWxlTmFtZSk7XG5cbiAgICByZXR1cm4gcmVkdWNlTm9kZTtcbiAgfVxuXG4gIGdldFRlcm5hcnlOb2RlKCkge1xuICAgIGNvbnN0IHJ1bGVOYW1lID0gVEVSTkFSWV9SVUxFX05BTUUsXG4gICAgICAgICAgdGVybmFyeU5vZGUgPSB0aGlzLmdldE5vZGVCeVJ1bGVOYW1lKHJ1bGVOYW1lKTtcblxuICAgIHJldHVybiB0ZXJuYXJ5Tm9kZTtcbiAgfVxuXG4gIGdldE5vZGVRdWVyeU5vZGUoKSB7XG4gICAgY29uc3QgcnVsZU5hbWUgPSBOT0RFX1FVRVJZX1JVTEVfTkFNRSxcbiAgICAgICAgICBub2RlUXVlcnlOb2RlID0gdGhpcy5nZXROb2RlQnlSdWxlTmFtZShydWxlTmFtZSk7XG5cbiAgICByZXR1cm4gbm9kZVF1ZXJ5Tm9kZTtcbiAgfVxuXG4gIGdldE5vZGVzUXVlcnlOb2RlKCkge1xuICAgIGNvbnN0IHJ1bGVOYW1lID0gTk9ERVNfUVVFUllfUlVMRV9OQU1FLFxuICAgICAgICAgIG5vZGVTUXVlcnlOb2RlID0gdGhpcy5nZXROb2RlQnlSdWxlTmFtZShydWxlTmFtZSk7XG5cbiAgICByZXR1cm4gbm9kZVNRdWVyeU5vZGU7XG4gIH1cblxuICBnZXRSZXR1cm5CbG9ja05vZGUoKSB7XG4gICAgY29uc3QgcnVsZU5hbWUgPSBSRVRVUk5fQkxPQ0tfUlVMRV9OQU1FLFxuICAgICAgICAgIHJldHVybkJsb2NrTm9kZSA9IHRoaXMuZ2V0Tm9kZUJ5UnVsZU5hbWUocnVsZU5hbWUpO1xuXG4gICAgcmV0dXJuIHJldHVybkJsb2NrTm9kZTtcbiAgfVxuXG4gIGdldFByb2NlZHVyZUNhbGxOb2RlKCkge1xuICAgIGNvbnN0IHJ1bGVOYW1lID0gUFJPQ0VEVVJFX0NBTExfUlVMRV9OQU1FLFxuICAgICAgICAgIHByb2NlZHVyZUNhbGxOb2RlID0gdGhpcy5nZXROb2RlQnlSdWxlTmFtZShydWxlTmFtZSk7XG5cbiAgICByZXR1cm4gcHJvY2VkdXJlQ2FsbE5vZGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc09wYWNpdHlBbmRQcmVjZWRlbmNlKHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBvcGFjaXR5LCBwcmVjZWRlbmNlKSB7IHJldHVybiBOb25UZXJtaW5hbE5vZGUuZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc09wYWNpdHlBbmRQcmVjZWRlbmNlKEV4cHJlc3Npb25Ob2RlLCBydWxlTmFtZSwgY2hpbGROb2Rlcywgb3BhY2l0eSwgcHJlY2VkZW5jZSk7IH1cbn1cbiJdLCJuYW1lcyI6WyJFeHByZXNzaW9uTm9kZSIsImdldFRlcm1Ob2RlIiwicnVsZU5hbWUiLCJURVJNX1JVTEVfTkFNRSIsInRlcm1Ob2RlIiwiZ2V0Tm9kZUJ5UnVsZU5hbWUiLCJnZXRTb21lTm9kZSIsIlNPTUVfUlVMRV9OQU1FIiwic29tZU5vZGUiLCJnZXRFdmVyeU5vZGUiLCJFVkVSWV9SVUxFX05BTUUiLCJldmVyeU5vZGUiLCJnZXRSZWR1Y2VOb2RlIiwiUkVEVUNFX1JVTEVfTkFNRSIsInJlZHVjZU5vZGUiLCJnZXRUZXJuYXJ5Tm9kZSIsIlRFUk5BUllfUlVMRV9OQU1FIiwidGVybmFyeU5vZGUiLCJnZXROb2RlUXVlcnlOb2RlIiwiTk9ERV9RVUVSWV9SVUxFX05BTUUiLCJub2RlUXVlcnlOb2RlIiwiZ2V0Tm9kZXNRdWVyeU5vZGUiLCJOT0RFU19RVUVSWV9SVUxFX05BTUUiLCJub2RlU1F1ZXJ5Tm9kZSIsImdldFJldHVybkJsb2NrTm9kZSIsIlJFVFVSTl9CTE9DS19SVUxFX05BTUUiLCJyZXR1cm5CbG9ja05vZGUiLCJnZXRQcm9jZWR1cmVDYWxsTm9kZSIsIlBST0NFRFVSRV9DQUxMX1JVTEVfTkFNRSIsInByb2NlZHVyZUNhbGxOb2RlIiwiZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc09wYWNpdHlBbmRQcmVjZWRlbmNlIiwiY2hpbGROb2RlcyIsIm9wYWNpdHkiLCJwcmVjZWRlbmNlIiwiTm9uVGVybWluYWxOb2RlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQWNxQkE7OztzRUFaTzt5QkFVYTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUUxQixJQUFBLEFBQU1BLCtCQUFOO2NBQU1BO2FBQUFBO2dDQUFBQTtRQUFOLE9BQUEsa0JBQU1BOztrQkFBQUE7O1lBQ25CQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsV0FBV0MseUJBQWMsRUFDekJDLFdBQVcsSUFBSSxDQUFDQyxpQkFBaUIsQ0FBQ0g7Z0JBRXhDLE9BQU9FO1lBQ1Q7OztZQUVBRSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUosV0FBV0sseUJBQWMsRUFDekJDLFdBQVcsSUFBSSxDQUFDSCxpQkFBaUIsQ0FBQ0g7Z0JBRXhDLE9BQU9NO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTVAsV0FBV1EsMEJBQWUsRUFDMUJDLFlBQVksSUFBSSxDQUFDTixpQkFBaUIsQ0FBQ0g7Z0JBRXpDLE9BQU9TO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTVYsV0FBV1csMkJBQWdCLEVBQzNCQyxhQUFhLElBQUksQ0FBQ1QsaUJBQWlCLENBQUNIO2dCQUUxQyxPQUFPWTtZQUNUOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1iLFdBQVdjLDRCQUFpQixFQUM1QkMsY0FBYyxJQUFJLENBQUNaLGlCQUFpQixDQUFDSDtnQkFFM0MsT0FBT2U7WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNaEIsV0FBV2lCLCtCQUFvQixFQUMvQkMsZ0JBQWdCLElBQUksQ0FBQ2YsaUJBQWlCLENBQUNIO2dCQUU3QyxPQUFPa0I7WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNbkIsV0FBV29CLGdDQUFxQixFQUNoQ0MsaUJBQWlCLElBQUksQ0FBQ2xCLGlCQUFpQixDQUFDSDtnQkFFOUMsT0FBT3FCO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTXRCLFdBQVd1QixpQ0FBc0IsRUFDakNDLGtCQUFrQixJQUFJLENBQUNyQixpQkFBaUIsQ0FBQ0g7Z0JBRS9DLE9BQU93QjtZQUNUOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU16QixXQUFXMEIsbUNBQXdCLEVBQ25DQyxvQkFBb0IsSUFBSSxDQUFDeEIsaUJBQWlCLENBQUNIO2dCQUVqRCxPQUFPMkI7WUFDVDs7OztZQUVPQyxLQUFBQTttQkFBUCxTQUFPQSwyQ0FBMkM1QixRQUFRLEVBQUU2QixVQUFVLEVBQUVDLE9BQU8sRUFBRUMsVUFBVTtnQkFBSSxPQUFPQyx3QkFBZSxDQUFDSiwwQ0FBMEMsQ0FoRTdJOUIsZ0JBZ0U4SkUsVUFBVTZCLFlBQVlDLFNBQVNDO1lBQWE7OztXQWhFMU1qQztFQUF1QmtDLHdCQUFlIn0=