"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return TernaryNode;
    }
});
var _necessary = require("necessary");
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
var first = _necessary.arrayUtilities.first, second = _necessary.arrayUtilities.second;
var TernaryNode = /*#__PURE__*/ function(NonTerminalNode) {
    _inherits(TernaryNode, NonTerminalNode);
    function TernaryNode() {
        _class_call_check(this, TernaryNode);
        return _call_super(this, TernaryNode, arguments);
    }
    _create_class(TernaryNode, [
        {
            key: "getTermNode",
            value: function getTermNode() {
                var ruleName = _ruleNames.TERM_RULE_NAME, termNode = this.getNodeByRuleName(ruleName);
                return termNode;
            }
        },
        {
            key: "getExpressionNodes",
            value: function getExpressionNodes() {
                var ruleName = _ruleNames.EXPRESSION_RULE_NAME, expressionNodes = this.getNodesByRuleName(ruleName);
                return expressionNodes;
            }
        },
        {
            key: "getIfExpressionNode",
            value: function getIfExpressionNode() {
                var firstExpressionNode = this.getFirstExpressionNode(), ifExpressionNode = firstExpressionNode; ///
                return ifExpressionNode;
            }
        },
        {
            key: "getElseExpressionNode",
            value: function getElseExpressionNode() {
                var secondExpressionNode = this.getSecondExpressionNode(), elseExpressionNode = secondExpressionNode; ///
                return elseExpressionNode;
            }
        },
        {
            key: "getFirstExpressionNode",
            value: function getFirstExpressionNode() {
                var expressionNodes = this.getExpressionNodes(), firstExpressionNode = first(expressionNodes);
                return firstExpressionNode;
            }
        },
        {
            key: "getSecondExpressionNode",
            value: function getSecondExpressionNode() {
                var expressionNodes = this.getExpressionNodes(), secondExpressionNode = second(expressionNodes);
                return secondExpressionNode;
            }
        }
    ], [
        {
            key: "fromRuleNameChildNodesOpacityAndPrecedence",
            value: function fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) {
                return _nonTerminalNode.default.fromRuleNameChildNodesOpacityAndPrecedence(TernaryNode, ruleName, childNodes, opacity, precedence);
            }
        }
    ]);
    return TernaryNode;
}(_nonTerminalNode.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ub2RlL3Rlcm5hcnkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgTm9uVGVybWluYWxOb2RlIGZyb20gXCIuLi9ub25UZXJtaW5hbE5vZGVcIjtcblxuaW1wb3J0IHsgVEVSTV9SVUxFX05BTUUsIEVYUFJFU1NJT05fUlVMRV9OQU1FIH0gZnJvbSBcIi4uL3J1bGVOYW1lc1wiO1xuXG5jb25zdCB7IGZpcnN0LCBzZWNvbmQgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUZXJuYXJ5Tm9kZSBleHRlbmRzIE5vblRlcm1pbmFsTm9kZSB7XG4gIGdldFRlcm1Ob2RlKCkge1xuICAgIGNvbnN0IHJ1bGVOYW1lID0gVEVSTV9SVUxFX05BTUUsXG4gICAgICAgICAgdGVybU5vZGUgPSB0aGlzLmdldE5vZGVCeVJ1bGVOYW1lKHJ1bGVOYW1lKTtcblxuICAgIHJldHVybiB0ZXJtTm9kZTtcbiAgfVxuXG4gIGdldEV4cHJlc3Npb25Ob2RlcygpIHtcbiAgICBjb25zdCBydWxlTmFtZSA9IEVYUFJFU1NJT05fUlVMRV9OQU1FLFxuICAgICAgICAgIGV4cHJlc3Npb25Ob2RlcyA9IHRoaXMuZ2V0Tm9kZXNCeVJ1bGVOYW1lKHJ1bGVOYW1lKTtcblxuICAgIHJldHVybiBleHByZXNzaW9uTm9kZXM7XG4gIH1cblxuICBnZXRJZkV4cHJlc3Npb25Ob2RlKCkge1xuICAgIGNvbnN0IGZpcnN0RXhwcmVzc2lvbk5vZGUgPSB0aGlzLmdldEZpcnN0RXhwcmVzc2lvbk5vZGUoKSxcbiAgICAgICAgICBpZkV4cHJlc3Npb25Ob2RlID0gZmlyc3RFeHByZXNzaW9uTm9kZTsgIC8vL1xuXG4gICAgcmV0dXJuIGlmRXhwcmVzc2lvbk5vZGU7XG4gIH1cblxuICBnZXRFbHNlRXhwcmVzc2lvbk5vZGUoKSB7XG4gICAgY29uc3Qgc2Vjb25kRXhwcmVzc2lvbk5vZGUgPSB0aGlzLmdldFNlY29uZEV4cHJlc3Npb25Ob2RlKCksXG4gICAgICAgICAgZWxzZUV4cHJlc3Npb25Ob2RlID0gc2Vjb25kRXhwcmVzc2lvbk5vZGU7IC8vL1xuXG4gICAgcmV0dXJuIGVsc2VFeHByZXNzaW9uTm9kZTtcbiAgfVxuXG4gIGdldEZpcnN0RXhwcmVzc2lvbk5vZGUoKSB7XG4gICAgY29uc3QgZXhwcmVzc2lvbk5vZGVzID0gdGhpcy5nZXRFeHByZXNzaW9uTm9kZXMoKSxcbiAgICAgICAgICBmaXJzdEV4cHJlc3Npb25Ob2RlID0gZmlyc3QoZXhwcmVzc2lvbk5vZGVzKTtcblxuICAgIHJldHVybiBmaXJzdEV4cHJlc3Npb25Ob2RlO1xuICB9XG5cbiAgZ2V0U2Vjb25kRXhwcmVzc2lvbk5vZGUoKSB7XG4gICAgY29uc3QgZXhwcmVzc2lvbk5vZGVzID0gdGhpcy5nZXRFeHByZXNzaW9uTm9kZXMoKSxcbiAgICAgICAgICBzZWNvbmRFeHByZXNzaW9uTm9kZSA9IHNlY29uZChleHByZXNzaW9uTm9kZXMpO1xuXG4gICAgcmV0dXJuIHNlY29uZEV4cHJlc3Npb25Ob2RlO1xuICB9XG5cbiAgc3RhdGljIGZyb21SdWxlTmFtZUNoaWxkTm9kZXNPcGFjaXR5QW5kUHJlY2VkZW5jZShydWxlTmFtZSwgY2hpbGROb2Rlcywgb3BhY2l0eSwgcHJlY2VkZW5jZSkgeyByZXR1cm4gTm9uVGVybWluYWxOb2RlLmZyb21SdWxlTmFtZUNoaWxkTm9kZXNPcGFjaXR5QW5kUHJlY2VkZW5jZShUZXJuYXJ5Tm9kZSwgcnVsZU5hbWUsIGNoaWxkTm9kZXMsIG9wYWNpdHksIHByZWNlZGVuY2UpOyB9XG59XG4iXSwibmFtZXMiOlsiVGVybmFyeU5vZGUiLCJmaXJzdCIsImFycmF5VXRpbGl0aWVzIiwic2Vjb25kIiwiZ2V0VGVybU5vZGUiLCJydWxlTmFtZSIsIlRFUk1fUlVMRV9OQU1FIiwidGVybU5vZGUiLCJnZXROb2RlQnlSdWxlTmFtZSIsImdldEV4cHJlc3Npb25Ob2RlcyIsIkVYUFJFU1NJT05fUlVMRV9OQU1FIiwiZXhwcmVzc2lvbk5vZGVzIiwiZ2V0Tm9kZXNCeVJ1bGVOYW1lIiwiZ2V0SWZFeHByZXNzaW9uTm9kZSIsImZpcnN0RXhwcmVzc2lvbk5vZGUiLCJnZXRGaXJzdEV4cHJlc3Npb25Ob2RlIiwiaWZFeHByZXNzaW9uTm9kZSIsImdldEVsc2VFeHByZXNzaW9uTm9kZSIsInNlY29uZEV4cHJlc3Npb25Ob2RlIiwiZ2V0U2Vjb25kRXhwcmVzc2lvbk5vZGUiLCJlbHNlRXhwcmVzc2lvbk5vZGUiLCJmcm9tUnVsZU5hbWVDaGlsZE5vZGVzT3BhY2l0eUFuZFByZWNlZGVuY2UiLCJjaGlsZE5vZGVzIiwib3BhY2l0eSIsInByZWNlZGVuY2UiLCJOb25UZXJtaW5hbE5vZGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBVXFCQTs7O3lCQVJVO3NFQUVIO3lCQUV5Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVyRCxJQUFRQyxRQUFrQkMseUJBQWMsQ0FBaENELE9BQU9FLFNBQVdELHlCQUFjLENBQXpCQztBQUVBLElBQUEsQUFBTUgsNEJBQU47Y0FBTUE7YUFBQUE7Z0NBQUFBO1FBQU4sT0FBQSxrQkFBTUE7O2tCQUFBQTs7WUFDbkJJLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNQyxXQUFXQyx5QkFBYyxFQUN6QkMsV0FBVyxJQUFJLENBQUNDLGlCQUFpQixDQUFDSDtnQkFFeEMsT0FBT0U7WUFDVDs7O1lBRUFFLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNSixXQUFXSywrQkFBb0IsRUFDL0JDLGtCQUFrQixJQUFJLENBQUNDLGtCQUFrQixDQUFDUDtnQkFFaEQsT0FBT007WUFDVDs7O1lBRUFFLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNQyxzQkFBc0IsSUFBSSxDQUFDQyxzQkFBc0IsSUFDakRDLG1CQUFtQkYscUJBQXNCLEdBQUc7Z0JBRWxELE9BQU9FO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsdUJBQXVCLElBQUksQ0FBQ0MsdUJBQXVCLElBQ25EQyxxQkFBcUJGLHNCQUFzQixHQUFHO2dCQUVwRCxPQUFPRTtZQUNUOzs7WUFFQUwsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1KLGtCQUFrQixJQUFJLENBQUNGLGtCQUFrQixJQUN6Q0ssc0JBQXNCYixNQUFNVTtnQkFFbEMsT0FBT0c7WUFDVDs7O1lBRUFLLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNUixrQkFBa0IsSUFBSSxDQUFDRixrQkFBa0IsSUFDekNTLHVCQUF1QmYsT0FBT1E7Z0JBRXBDLE9BQU9PO1lBQ1Q7Ozs7WUFFT0csS0FBQUE7bUJBQVAsU0FBT0EsMkNBQTJDaEIsUUFBUSxFQUFFaUIsVUFBVSxFQUFFQyxPQUFPLEVBQUVDLFVBQVU7Z0JBQUksT0FBT0Msd0JBQWUsQ0FBQ0osMENBQTBDLENBM0M3SXJCLGFBMkMySkssVUFBVWlCLFlBQVlDLFNBQVNDO1lBQWE7OztXQTNDdk14QjtFQUFvQnlCLHdCQUFlIn0=