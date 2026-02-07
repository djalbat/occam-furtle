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
                return _occamlanguages.NonTerminalNode.fromRuleNameChildNodesOpacityAndPrecedence(TernaryNode, ruleName, childNodes, opacity, precedence);
            }
        }
    ]);
    return TernaryNode;
}(_occamlanguages.NonTerminalNode);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ub2RlL3Rlcm5hcnkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuaW1wb3J0IHsgTm9uVGVybWluYWxOb2RlIH0gZnJvbSBcIm9jY2FtLWxhbmd1YWdlc1wiO1xuXG5pbXBvcnQgeyBURVJNX1JVTEVfTkFNRSwgRVhQUkVTU0lPTl9SVUxFX05BTUUgfSBmcm9tIFwiLi4vcnVsZU5hbWVzXCI7XG5cbmNvbnN0IHsgZmlyc3QsIHNlY29uZCB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRlcm5hcnlOb2RlIGV4dGVuZHMgTm9uVGVybWluYWxOb2RlIHtcbiAgZ2V0VGVybU5vZGUoKSB7XG4gICAgY29uc3QgcnVsZU5hbWUgPSBURVJNX1JVTEVfTkFNRSxcbiAgICAgICAgICB0ZXJtTm9kZSA9IHRoaXMuZ2V0Tm9kZUJ5UnVsZU5hbWUocnVsZU5hbWUpO1xuXG4gICAgcmV0dXJuIHRlcm1Ob2RlO1xuICB9XG5cbiAgZ2V0RXhwcmVzc2lvbk5vZGVzKCkge1xuICAgIGNvbnN0IHJ1bGVOYW1lID0gRVhQUkVTU0lPTl9SVUxFX05BTUUsXG4gICAgICAgICAgZXhwcmVzc2lvbk5vZGVzID0gdGhpcy5nZXROb2Rlc0J5UnVsZU5hbWUocnVsZU5hbWUpO1xuXG4gICAgcmV0dXJuIGV4cHJlc3Npb25Ob2RlcztcbiAgfVxuXG4gIGdldElmRXhwcmVzc2lvbk5vZGUoKSB7XG4gICAgY29uc3QgZmlyc3RFeHByZXNzaW9uTm9kZSA9IHRoaXMuZ2V0Rmlyc3RFeHByZXNzaW9uTm9kZSgpLFxuICAgICAgICAgIGlmRXhwcmVzc2lvbk5vZGUgPSBmaXJzdEV4cHJlc3Npb25Ob2RlOyAgLy8vXG5cbiAgICByZXR1cm4gaWZFeHByZXNzaW9uTm9kZTtcbiAgfVxuXG4gIGdldEVsc2VFeHByZXNzaW9uTm9kZSgpIHtcbiAgICBjb25zdCBzZWNvbmRFeHByZXNzaW9uTm9kZSA9IHRoaXMuZ2V0U2Vjb25kRXhwcmVzc2lvbk5vZGUoKSxcbiAgICAgICAgICBlbHNlRXhwcmVzc2lvbk5vZGUgPSBzZWNvbmRFeHByZXNzaW9uTm9kZTsgLy8vXG5cbiAgICByZXR1cm4gZWxzZUV4cHJlc3Npb25Ob2RlO1xuICB9XG5cbiAgZ2V0Rmlyc3RFeHByZXNzaW9uTm9kZSgpIHtcbiAgICBjb25zdCBleHByZXNzaW9uTm9kZXMgPSB0aGlzLmdldEV4cHJlc3Npb25Ob2RlcygpLFxuICAgICAgICAgIGZpcnN0RXhwcmVzc2lvbk5vZGUgPSBmaXJzdChleHByZXNzaW9uTm9kZXMpO1xuXG4gICAgcmV0dXJuIGZpcnN0RXhwcmVzc2lvbk5vZGU7XG4gIH1cblxuICBnZXRTZWNvbmRFeHByZXNzaW9uTm9kZSgpIHtcbiAgICBjb25zdCBleHByZXNzaW9uTm9kZXMgPSB0aGlzLmdldEV4cHJlc3Npb25Ob2RlcygpLFxuICAgICAgICAgIHNlY29uZEV4cHJlc3Npb25Ob2RlID0gc2Vjb25kKGV4cHJlc3Npb25Ob2Rlcyk7XG5cbiAgICByZXR1cm4gc2Vjb25kRXhwcmVzc2lvbk5vZGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc09wYWNpdHlBbmRQcmVjZWRlbmNlKHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBvcGFjaXR5LCBwcmVjZWRlbmNlKSB7IHJldHVybiBOb25UZXJtaW5hbE5vZGUuZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc09wYWNpdHlBbmRQcmVjZWRlbmNlKFRlcm5hcnlOb2RlLCBydWxlTmFtZSwgY2hpbGROb2Rlcywgb3BhY2l0eSwgcHJlY2VkZW5jZSk7IH1cbn1cbiJdLCJuYW1lcyI6WyJUZXJuYXJ5Tm9kZSIsImZpcnN0IiwiYXJyYXlVdGlsaXRpZXMiLCJzZWNvbmQiLCJnZXRUZXJtTm9kZSIsInJ1bGVOYW1lIiwiVEVSTV9SVUxFX05BTUUiLCJ0ZXJtTm9kZSIsImdldE5vZGVCeVJ1bGVOYW1lIiwiZ2V0RXhwcmVzc2lvbk5vZGVzIiwiRVhQUkVTU0lPTl9SVUxFX05BTUUiLCJleHByZXNzaW9uTm9kZXMiLCJnZXROb2Rlc0J5UnVsZU5hbWUiLCJnZXRJZkV4cHJlc3Npb25Ob2RlIiwiZmlyc3RFeHByZXNzaW9uTm9kZSIsImdldEZpcnN0RXhwcmVzc2lvbk5vZGUiLCJpZkV4cHJlc3Npb25Ob2RlIiwiZ2V0RWxzZUV4cHJlc3Npb25Ob2RlIiwic2Vjb25kRXhwcmVzc2lvbk5vZGUiLCJnZXRTZWNvbmRFeHByZXNzaW9uTm9kZSIsImVsc2VFeHByZXNzaW9uTm9kZSIsImZyb21SdWxlTmFtZUNoaWxkTm9kZXNPcGFjaXR5QW5kUHJlY2VkZW5jZSIsImNoaWxkTm9kZXMiLCJvcGFjaXR5IiwicHJlY2VkZW5jZSIsIk5vblRlcm1pbmFsTm9kZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFTcUJBOzs7eUJBUFU7OEJBQ0M7eUJBRXFCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVyRCxJQUFRQyxRQUFrQkMseUJBQWMsQ0FBaENELE9BQU9FLFNBQVdELHlCQUFjLENBQXpCQztBQUVBLElBQUEsQUFBTUgsNEJBQU47Y0FBTUE7YUFBQUE7Z0NBQUFBO1FBQU4sT0FBQSxrQkFBTUE7O2tCQUFBQTs7WUFDbkJJLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNQyxXQUFXQyx5QkFBYyxFQUN6QkMsV0FBVyxJQUFJLENBQUNDLGlCQUFpQixDQUFDSDtnQkFFeEMsT0FBT0U7WUFDVDs7O1lBRUFFLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNSixXQUFXSywrQkFBb0IsRUFDL0JDLGtCQUFrQixJQUFJLENBQUNDLGtCQUFrQixDQUFDUDtnQkFFaEQsT0FBT007WUFDVDs7O1lBRUFFLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNQyxzQkFBc0IsSUFBSSxDQUFDQyxzQkFBc0IsSUFDakRDLG1CQUFtQkYscUJBQXNCLEdBQUc7Z0JBRWxELE9BQU9FO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsdUJBQXVCLElBQUksQ0FBQ0MsdUJBQXVCLElBQ25EQyxxQkFBcUJGLHNCQUFzQixHQUFHO2dCQUVwRCxPQUFPRTtZQUNUOzs7WUFFQUwsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1KLGtCQUFrQixJQUFJLENBQUNGLGtCQUFrQixJQUN6Q0ssc0JBQXNCYixNQUFNVTtnQkFFbEMsT0FBT0c7WUFDVDs7O1lBRUFLLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNUixrQkFBa0IsSUFBSSxDQUFDRixrQkFBa0IsSUFDekNTLHVCQUF1QmYsT0FBT1E7Z0JBRXBDLE9BQU9PO1lBQ1Q7Ozs7WUFFT0csS0FBQUE7bUJBQVAsU0FBT0EsMkNBQTJDaEIsUUFBUSxFQUFFaUIsVUFBVSxFQUFFQyxPQUFPLEVBQUVDLFVBQVU7Z0JBQUksT0FBT0MsK0JBQWUsQ0FBQ0osMENBQTBDLENBM0M3SXJCLGFBMkMySkssVUFBVWlCLFlBQVlDLFNBQVNDO1lBQWE7OztXQTNDdk14QjtFQUFvQnlCLCtCQUFlIn0=