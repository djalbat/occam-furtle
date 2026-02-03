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
            key: "getVariableNode",
            value: function getVariableNode() {
                var ruleName = _ruleNames.VARIABLE_RULE_NAME, variableNode = this.getNodeByRuleName(ruleName);
                return variableNode;
            }
        },
        {
            key: "getPrimitiveNode",
            value: function getPrimitiveNode() {
                var ruleName = _ruleNames.PRIMITIVE_RULE_NAME, primitiveNode = this.getNodeByRuleName(ruleName);
                return primitiveNode;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ub2RlL2V4cHJlc3Npb24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBOb25UZXJtaW5hbE5vZGUgZnJvbSBcIi4uL25vblRlcm1pbmFsTm9kZVwiO1xuXG5pbXBvcnQgeyBTT01FX1JVTEVfTkFNRSxcbiAgICAgICAgIEVWRVJZX1JVTEVfTkFNRSxcbiAgICAgICAgIFJFRFVDRV9SVUxFX05BTUUsXG4gICAgICAgICBURVJOQVJZX1JVTEVfTkFNRSxcbiAgICAgICAgIFZBUklBQkxFX1JVTEVfTkFNRSxcbiAgICAgICAgIFBSSU1JVElWRV9SVUxFX05BTUUsXG4gICAgICAgICBOT0RFX1FVRVJZX1JVTEVfTkFNRSxcbiAgICAgICAgIE5PREVTX1FVRVJZX1JVTEVfTkFNRSxcbiAgICAgICAgIFJFVFVSTl9CTE9DS19SVUxFX05BTUUsXG4gICAgICAgICBQUk9DRURVUkVfQ0FMTF9SVUxFX05BTUUgfSBmcm9tIFwiLi4vcnVsZU5hbWVzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEV4cHJlc3Npb25Ob2RlIGV4dGVuZHMgTm9uVGVybWluYWxOb2RlIHtcbiAgZ2V0U29tZU5vZGUoKSB7XG4gICAgY29uc3QgcnVsZU5hbWUgPSBTT01FX1JVTEVfTkFNRSxcbiAgICAgICAgICBzb21lTm9kZSA9IHRoaXMuZ2V0Tm9kZUJ5UnVsZU5hbWUocnVsZU5hbWUpO1xuXG4gICAgcmV0dXJuIHNvbWVOb2RlO1xuICB9XG5cbiAgZ2V0RXZlcnlOb2RlKCkge1xuICAgIGNvbnN0IHJ1bGVOYW1lID0gRVZFUllfUlVMRV9OQU1FLFxuICAgICAgICAgIGV2ZXJ5Tm9kZSA9IHRoaXMuZ2V0Tm9kZUJ5UnVsZU5hbWUocnVsZU5hbWUpO1xuXG4gICAgcmV0dXJuIGV2ZXJ5Tm9kZTtcbiAgfVxuXG4gIGdldFJlZHVjZU5vZGUoKSB7XG4gICAgY29uc3QgcnVsZU5hbWUgPSBSRURVQ0VfUlVMRV9OQU1FLFxuICAgICAgICAgIHJlZHVjZU5vZGUgPSB0aGlzLmdldE5vZGVCeVJ1bGVOYW1lKHJ1bGVOYW1lKTtcblxuICAgIHJldHVybiByZWR1Y2VOb2RlO1xuICB9XG5cbiAgZ2V0VGVybmFyeU5vZGUoKSB7XG4gICAgY29uc3QgcnVsZU5hbWUgPSBURVJOQVJZX1JVTEVfTkFNRSxcbiAgICAgICAgICB0ZXJuYXJ5Tm9kZSA9IHRoaXMuZ2V0Tm9kZUJ5UnVsZU5hbWUocnVsZU5hbWUpO1xuXG4gICAgcmV0dXJuIHRlcm5hcnlOb2RlO1xuICB9XG5cbiAgZ2V0VmFyaWFibGVOb2RlKCkge1xuICAgIGNvbnN0IHJ1bGVOYW1lID0gVkFSSUFCTEVfUlVMRV9OQU1FLFxuICAgICAgICAgIHZhcmlhYmxlTm9kZSA9IHRoaXMuZ2V0Tm9kZUJ5UnVsZU5hbWUocnVsZU5hbWUpO1xuXG4gICAgcmV0dXJuIHZhcmlhYmxlTm9kZTtcbiAgfVxuXG4gIGdldFByaW1pdGl2ZU5vZGUoKSB7XG4gICAgY29uc3QgcnVsZU5hbWUgPSBQUklNSVRJVkVfUlVMRV9OQU1FLFxuICAgICAgICAgIHByaW1pdGl2ZU5vZGUgPSB0aGlzLmdldE5vZGVCeVJ1bGVOYW1lKHJ1bGVOYW1lKTtcblxuICAgIHJldHVybiBwcmltaXRpdmVOb2RlO1xuICB9XG5cbiAgZ2V0Tm9kZVF1ZXJ5Tm9kZSgpIHtcbiAgICBjb25zdCBydWxlTmFtZSA9IE5PREVfUVVFUllfUlVMRV9OQU1FLFxuICAgICAgICAgIG5vZGVRdWVyeU5vZGUgPSB0aGlzLmdldE5vZGVCeVJ1bGVOYW1lKHJ1bGVOYW1lKTtcblxuICAgIHJldHVybiBub2RlUXVlcnlOb2RlO1xuICB9XG5cbiAgZ2V0Tm9kZXNRdWVyeU5vZGUoKSB7XG4gICAgY29uc3QgcnVsZU5hbWUgPSBOT0RFU19RVUVSWV9SVUxFX05BTUUsXG4gICAgICAgICAgbm9kZVNRdWVyeU5vZGUgPSB0aGlzLmdldE5vZGVCeVJ1bGVOYW1lKHJ1bGVOYW1lKTtcblxuICAgIHJldHVybiBub2RlU1F1ZXJ5Tm9kZTtcbiAgfVxuXG4gIGdldFJldHVybkJsb2NrTm9kZSgpIHtcbiAgICBjb25zdCBydWxlTmFtZSA9IFJFVFVSTl9CTE9DS19SVUxFX05BTUUsXG4gICAgICAgICAgcmV0dXJuQmxvY2tOb2RlID0gdGhpcy5nZXROb2RlQnlSdWxlTmFtZShydWxlTmFtZSk7XG5cbiAgICByZXR1cm4gcmV0dXJuQmxvY2tOb2RlO1xuICB9XG5cbiAgZ2V0UHJvY2VkdXJlQ2FsbE5vZGUoKSB7XG4gICAgY29uc3QgcnVsZU5hbWUgPSBQUk9DRURVUkVfQ0FMTF9SVUxFX05BTUUsXG4gICAgICAgICAgcHJvY2VkdXJlQ2FsbE5vZGUgPSB0aGlzLmdldE5vZGVCeVJ1bGVOYW1lKHJ1bGVOYW1lKTtcblxuICAgIHJldHVybiBwcm9jZWR1cmVDYWxsTm9kZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUnVsZU5hbWVDaGlsZE5vZGVzT3BhY2l0eUFuZFByZWNlZGVuY2UocnVsZU5hbWUsIGNoaWxkTm9kZXMsIG9wYWNpdHksIHByZWNlZGVuY2UpIHsgcmV0dXJuIE5vblRlcm1pbmFsTm9kZS5mcm9tUnVsZU5hbWVDaGlsZE5vZGVzT3BhY2l0eUFuZFByZWNlZGVuY2UoRXhwcmVzc2lvbk5vZGUsIHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBvcGFjaXR5LCBwcmVjZWRlbmNlKTsgfVxufVxuIl0sIm5hbWVzIjpbIkV4cHJlc3Npb25Ob2RlIiwiZ2V0U29tZU5vZGUiLCJydWxlTmFtZSIsIlNPTUVfUlVMRV9OQU1FIiwic29tZU5vZGUiLCJnZXROb2RlQnlSdWxlTmFtZSIsImdldEV2ZXJ5Tm9kZSIsIkVWRVJZX1JVTEVfTkFNRSIsImV2ZXJ5Tm9kZSIsImdldFJlZHVjZU5vZGUiLCJSRURVQ0VfUlVMRV9OQU1FIiwicmVkdWNlTm9kZSIsImdldFRlcm5hcnlOb2RlIiwiVEVSTkFSWV9SVUxFX05BTUUiLCJ0ZXJuYXJ5Tm9kZSIsImdldFZhcmlhYmxlTm9kZSIsIlZBUklBQkxFX1JVTEVfTkFNRSIsInZhcmlhYmxlTm9kZSIsImdldFByaW1pdGl2ZU5vZGUiLCJQUklNSVRJVkVfUlVMRV9OQU1FIiwicHJpbWl0aXZlTm9kZSIsImdldE5vZGVRdWVyeU5vZGUiLCJOT0RFX1FVRVJZX1JVTEVfTkFNRSIsIm5vZGVRdWVyeU5vZGUiLCJnZXROb2Rlc1F1ZXJ5Tm9kZSIsIk5PREVTX1FVRVJZX1JVTEVfTkFNRSIsIm5vZGVTUXVlcnlOb2RlIiwiZ2V0UmV0dXJuQmxvY2tOb2RlIiwiUkVUVVJOX0JMT0NLX1JVTEVfTkFNRSIsInJldHVybkJsb2NrTm9kZSIsImdldFByb2NlZHVyZUNhbGxOb2RlIiwiUFJPQ0VEVVJFX0NBTExfUlVMRV9OQU1FIiwicHJvY2VkdXJlQ2FsbE5vZGUiLCJmcm9tUnVsZU5hbWVDaGlsZE5vZGVzT3BhY2l0eUFuZFByZWNlZGVuY2UiLCJjaGlsZE5vZGVzIiwib3BhY2l0eSIsInByZWNlZGVuY2UiLCJOb25UZXJtaW5hbE5vZGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBZXFCQTs7O3NFQWJPO3lCQVdhOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTFCLElBQUEsQUFBTUEsK0JBQU47Y0FBTUE7YUFBQUE7Z0NBQUFBO1FBQU4sT0FBQSxrQkFBTUE7O2tCQUFBQTs7WUFDbkJDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNQyxXQUFXQyx5QkFBYyxFQUN6QkMsV0FBVyxJQUFJLENBQUNDLGlCQUFpQixDQUFDSDtnQkFFeEMsT0FBT0U7WUFDVDs7O1lBRUFFLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNSixXQUFXSywwQkFBZSxFQUMxQkMsWUFBWSxJQUFJLENBQUNILGlCQUFpQixDQUFDSDtnQkFFekMsT0FBT007WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNUCxXQUFXUSwyQkFBZ0IsRUFDM0JDLGFBQWEsSUFBSSxDQUFDTixpQkFBaUIsQ0FBQ0g7Z0JBRTFDLE9BQU9TO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTVYsV0FBV1csNEJBQWlCLEVBQzVCQyxjQUFjLElBQUksQ0FBQ1QsaUJBQWlCLENBQUNIO2dCQUUzQyxPQUFPWTtZQUNUOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1iLFdBQVdjLDZCQUFrQixFQUM3QkMsZUFBZSxJQUFJLENBQUNaLGlCQUFpQixDQUFDSDtnQkFFNUMsT0FBT2U7WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNaEIsV0FBV2lCLDhCQUFtQixFQUM5QkMsZ0JBQWdCLElBQUksQ0FBQ2YsaUJBQWlCLENBQUNIO2dCQUU3QyxPQUFPa0I7WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNbkIsV0FBV29CLCtCQUFvQixFQUMvQkMsZ0JBQWdCLElBQUksQ0FBQ2xCLGlCQUFpQixDQUFDSDtnQkFFN0MsT0FBT3FCO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTXRCLFdBQVd1QixnQ0FBcUIsRUFDaENDLGlCQUFpQixJQUFJLENBQUNyQixpQkFBaUIsQ0FBQ0g7Z0JBRTlDLE9BQU93QjtZQUNUOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU16QixXQUFXMEIsaUNBQXNCLEVBQ2pDQyxrQkFBa0IsSUFBSSxDQUFDeEIsaUJBQWlCLENBQUNIO2dCQUUvQyxPQUFPMkI7WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNNUIsV0FBVzZCLG1DQUF3QixFQUNuQ0Msb0JBQW9CLElBQUksQ0FBQzNCLGlCQUFpQixDQUFDSDtnQkFFakQsT0FBTzhCO1lBQ1Q7Ozs7WUFFT0MsS0FBQUE7bUJBQVAsU0FBT0EsMkNBQTJDL0IsUUFBUSxFQUFFZ0MsVUFBVSxFQUFFQyxPQUFPLEVBQUVDLFVBQVU7Z0JBQUksT0FBT0Msd0JBQWUsQ0FBQ0osMENBQTBDLENBdkU3SWpDLGdCQXVFOEpFLFVBQVVnQyxZQUFZQyxTQUFTQztZQUFhOzs7V0F2RTFNcEM7RUFBdUJxQyx3QkFBZSJ9