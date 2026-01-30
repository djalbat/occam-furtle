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
var first = _necessary.arrayUtilities.first, second = _necessary.arrayUtilities.second, third = _necessary.arrayUtilities.third;
var TernaryNode = /*#__PURE__*/ function(NonTerminalNode) {
    _inherits(TernaryNode, NonTerminalNode);
    function TernaryNode() {
        _class_call_check(this, TernaryNode);
        return _call_super(this, TernaryNode, arguments);
    }
    _create_class(TernaryNode, [
        {
            key: "getExpressionNodes",
            value: function getExpressionNodes() {
                var ruleName = _ruleNames.EXPRESSION_RULE_NAME, expressionNodes = this.getNodesByRuleName(ruleName);
                return expressionNodes;
            }
        },
        {
            key: "getExpressionNode",
            value: function getExpressionNode() {
                var firstExpressionNode = this.getFirstExpressionNode(), expressionNode = firstExpressionNode; ///
                return expressionNode;
            }
        },
        {
            key: "getIfExpressionNode",
            value: function getIfExpressionNode() {
                var secondExpressionNode = this.getSecondExpressionNode(), ifExpressionNode = secondExpressionNode; ///
                return ifExpressionNode;
            }
        },
        {
            key: "getElseExpressionNode",
            value: function getElseExpressionNode() {
                var thirdExpressionNode = this.getThirdExpressionNode(), elseExpressionNode = thirdExpressionNode; ///
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
        },
        {
            key: "getThirdExpressionNode",
            value: function getThirdExpressionNode() {
                var expressionNodes = this.getExpressionNodes(), thirdExpressionNode = third(expressionNodes);
                return thirdExpressionNode;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ub2RlL3Rlcm5hcnkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgTm9uVGVybWluYWxOb2RlIGZyb20gXCIuLi9ub25UZXJtaW5hbE5vZGVcIjtcblxuaW1wb3J0IHsgRVhQUkVTU0lPTl9SVUxFX05BTUUgfSBmcm9tIFwiLi4vcnVsZU5hbWVzXCI7XG5cbmNvbnN0IHsgZmlyc3QsIHNlY29uZCwgdGhpcmQgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUZXJuYXJ5Tm9kZSBleHRlbmRzIE5vblRlcm1pbmFsTm9kZSB7XG4gIGdldEV4cHJlc3Npb25Ob2RlcygpIHtcbiAgICBjb25zdCBydWxlTmFtZSA9IEVYUFJFU1NJT05fUlVMRV9OQU1FLFxuICAgICAgICAgIGV4cHJlc3Npb25Ob2RlcyA9IHRoaXMuZ2V0Tm9kZXNCeVJ1bGVOYW1lKHJ1bGVOYW1lKTtcblxuICAgIHJldHVybiBleHByZXNzaW9uTm9kZXM7XG4gIH1cblxuICBnZXRFeHByZXNzaW9uTm9kZSgpIHtcbiAgICBjb25zdCBmaXJzdEV4cHJlc3Npb25Ob2RlID0gdGhpcy5nZXRGaXJzdEV4cHJlc3Npb25Ob2RlKCksXG4gICAgICAgICAgZXhwcmVzc2lvbk5vZGUgPSBmaXJzdEV4cHJlc3Npb25Ob2RlOyAvLy9cblxuICAgIHJldHVybiBleHByZXNzaW9uTm9kZTtcbiAgfVxuXG4gIGdldElmRXhwcmVzc2lvbk5vZGUoKSB7XG4gICAgY29uc3Qgc2Vjb25kRXhwcmVzc2lvbk5vZGUgPSB0aGlzLmdldFNlY29uZEV4cHJlc3Npb25Ob2RlKCksXG4gICAgICAgICAgaWZFeHByZXNzaW9uTm9kZSA9IHNlY29uZEV4cHJlc3Npb25Ob2RlOyAgLy8vXG5cbiAgICByZXR1cm4gaWZFeHByZXNzaW9uTm9kZTtcbiAgfVxuXG4gIGdldEVsc2VFeHByZXNzaW9uTm9kZSgpIHtcbiAgICBjb25zdCB0aGlyZEV4cHJlc3Npb25Ob2RlID0gdGhpcy5nZXRUaGlyZEV4cHJlc3Npb25Ob2RlKCksXG4gICAgICAgICAgZWxzZUV4cHJlc3Npb25Ob2RlID0gdGhpcmRFeHByZXNzaW9uTm9kZTsgLy8vXG5cbiAgICByZXR1cm4gZWxzZUV4cHJlc3Npb25Ob2RlO1xuICB9XG5cbiAgZ2V0Rmlyc3RFeHByZXNzaW9uTm9kZSgpIHtcbiAgICBjb25zdCBleHByZXNzaW9uTm9kZXMgPSB0aGlzLmdldEV4cHJlc3Npb25Ob2RlcygpLFxuICAgICAgICAgIGZpcnN0RXhwcmVzc2lvbk5vZGUgPSBmaXJzdChleHByZXNzaW9uTm9kZXMpO1xuXG4gICAgcmV0dXJuIGZpcnN0RXhwcmVzc2lvbk5vZGU7XG4gIH1cblxuICBnZXRTZWNvbmRFeHByZXNzaW9uTm9kZSgpIHtcbiAgICBjb25zdCBleHByZXNzaW9uTm9kZXMgPSB0aGlzLmdldEV4cHJlc3Npb25Ob2RlcygpLFxuICAgICAgICAgIHNlY29uZEV4cHJlc3Npb25Ob2RlID0gc2Vjb25kKGV4cHJlc3Npb25Ob2Rlcyk7XG5cbiAgICByZXR1cm4gc2Vjb25kRXhwcmVzc2lvbk5vZGU7XG4gIH1cblxuICBnZXRUaGlyZEV4cHJlc3Npb25Ob2RlKCkge1xuICAgIGNvbnN0IGV4cHJlc3Npb25Ob2RlcyA9IHRoaXMuZ2V0RXhwcmVzc2lvbk5vZGVzKCksXG4gICAgICAgICAgdGhpcmRFeHByZXNzaW9uTm9kZSA9IHRoaXJkKGV4cHJlc3Npb25Ob2Rlcyk7XG5cbiAgICByZXR1cm4gdGhpcmRFeHByZXNzaW9uTm9kZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUnVsZU5hbWVDaGlsZE5vZGVzT3BhY2l0eUFuZFByZWNlZGVuY2UocnVsZU5hbWUsIGNoaWxkTm9kZXMsIG9wYWNpdHksIHByZWNlZGVuY2UpIHsgcmV0dXJuIE5vblRlcm1pbmFsTm9kZS5mcm9tUnVsZU5hbWVDaGlsZE5vZGVzT3BhY2l0eUFuZFByZWNlZGVuY2UoVGVybmFyeU5vZGUsIHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBvcGFjaXR5LCBwcmVjZWRlbmNlKTsgfVxufVxuIl0sIm5hbWVzIjpbIlRlcm5hcnlOb2RlIiwiZmlyc3QiLCJhcnJheVV0aWxpdGllcyIsInNlY29uZCIsInRoaXJkIiwiZ2V0RXhwcmVzc2lvbk5vZGVzIiwicnVsZU5hbWUiLCJFWFBSRVNTSU9OX1JVTEVfTkFNRSIsImV4cHJlc3Npb25Ob2RlcyIsImdldE5vZGVzQnlSdWxlTmFtZSIsImdldEV4cHJlc3Npb25Ob2RlIiwiZmlyc3RFeHByZXNzaW9uTm9kZSIsImdldEZpcnN0RXhwcmVzc2lvbk5vZGUiLCJleHByZXNzaW9uTm9kZSIsImdldElmRXhwcmVzc2lvbk5vZGUiLCJzZWNvbmRFeHByZXNzaW9uTm9kZSIsImdldFNlY29uZEV4cHJlc3Npb25Ob2RlIiwiaWZFeHByZXNzaW9uTm9kZSIsImdldEVsc2VFeHByZXNzaW9uTm9kZSIsInRoaXJkRXhwcmVzc2lvbk5vZGUiLCJnZXRUaGlyZEV4cHJlc3Npb25Ob2RlIiwiZWxzZUV4cHJlc3Npb25Ob2RlIiwiZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc09wYWNpdHlBbmRQcmVjZWRlbmNlIiwiY2hpbGROb2RlcyIsIm9wYWNpdHkiLCJwcmVjZWRlbmNlIiwiTm9uVGVybWluYWxOb2RlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQVVxQkE7Ozt5QkFSVTtzRUFFSDt5QkFFUzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVyQyxJQUFRQyxRQUF5QkMseUJBQWMsQ0FBdkNELE9BQU9FLFNBQWtCRCx5QkFBYyxDQUFoQ0MsUUFBUUMsUUFBVUYseUJBQWMsQ0FBeEJFO0FBRVIsSUFBQSxBQUFNSiw0QkFBTjtjQUFNQTthQUFBQTtnQ0FBQUE7UUFBTixPQUFBLGtCQUFNQTs7a0JBQUFBOztZQUNuQkssS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLFdBQVdDLCtCQUFvQixFQUMvQkMsa0JBQWtCLElBQUksQ0FBQ0Msa0JBQWtCLENBQUNIO2dCQUVoRCxPQUFPRTtZQUNUOzs7WUFFQUUsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLHNCQUFzQixJQUFJLENBQUNDLHNCQUFzQixJQUNqREMsaUJBQWlCRixxQkFBcUIsR0FBRztnQkFFL0MsT0FBT0U7WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNQyx1QkFBdUIsSUFBSSxDQUFDQyx1QkFBdUIsSUFDbkRDLG1CQUFtQkYsc0JBQXVCLEdBQUc7Z0JBRW5ELE9BQU9FO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsc0JBQXNCLElBQUksQ0FBQ0Msc0JBQXNCLElBQ2pEQyxxQkFBcUJGLHFCQUFxQixHQUFHO2dCQUVuRCxPQUFPRTtZQUNUOzs7WUFFQVQsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1KLGtCQUFrQixJQUFJLENBQUNILGtCQUFrQixJQUN6Q00sc0JBQXNCVixNQUFNTztnQkFFbEMsT0FBT0c7WUFDVDs7O1lBRUFLLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNUixrQkFBa0IsSUFBSSxDQUFDSCxrQkFBa0IsSUFDekNVLHVCQUF1QlosT0FBT0s7Z0JBRXBDLE9BQU9PO1lBQ1Q7OztZQUVBSyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTVosa0JBQWtCLElBQUksQ0FBQ0gsa0JBQWtCLElBQ3pDYyxzQkFBc0JmLE1BQU1JO2dCQUVsQyxPQUFPVztZQUNUOzs7O1lBRU9HLEtBQUFBO21CQUFQLFNBQU9BLDJDQUEyQ2hCLFFBQVEsRUFBRWlCLFVBQVUsRUFBRUMsT0FBTyxFQUFFQyxVQUFVO2dCQUFJLE9BQU9DLHdCQUFlLENBQUNKLDBDQUEwQyxDQWxEN0l0QixhQWtEMkpNLFVBQVVpQixZQUFZQyxTQUFTQztZQUFhOzs7V0FsRHZNekI7RUFBb0IwQix3QkFBZSJ9