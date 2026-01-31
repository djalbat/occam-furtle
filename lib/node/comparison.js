"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return ComparisonNode;
    }
});
var _necessary = require("necessary");
var _nonTerminalNode = /*#__PURE__*/ _interop_require_default(require("../nonTerminalNode"));
var _constants = require("../constants");
var _tokenTypes = require("../tokenTypes");
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
var ComparisonNode = /*#__PURE__*/ function(NonTerminalNode) {
    _inherits(ComparisonNode, NonTerminalNode);
    function ComparisonNode() {
        _class_call_check(this, ComparisonNode);
        return _call_super(this, ComparisonNode, arguments);
    }
    _create_class(ComparisonNode, [
        {
            key: "isNegated",
            value: function isNegated() {
                var negated = false;
                var tokenType = _tokenTypes.SPECIAL_TOKEN_TYPE;
                this.someTerminalNode(function(terminalNode) {
                    var content = terminalNode.getContent();
                    if (content === _constants.NOT_EQUAL_TO) {
                        negated = true;
                    }
                    return true;
                }, tokenType);
                return negated;
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
            key: "getLeftExpressionNode",
            value: function getLeftExpressionNode() {
                var firstExpressionNode = this.getFirstExpressionNode(), leftExpressionNode = firstExpressionNode; ///
                return leftExpressionNode;
            }
        },
        {
            key: "getRightExpressionNode",
            value: function getRightExpressionNode() {
                var secondExpressionNode = this.getSecondExpressionNode(), rightExpressionNode = secondExpressionNode; ///
                return rightExpressionNode;
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
                return _nonTerminalNode.default.fromRuleNameChildNodesOpacityAndPrecedence(ComparisonNode, ruleName, childNodes, opacity, precedence);
            }
        }
    ]);
    return ComparisonNode;
}(_nonTerminalNode.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ub2RlL2NvbXBhcmlzb24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgTm9uVGVybWluYWxOb2RlIGZyb20gXCIuLi9ub25UZXJtaW5hbE5vZGVcIjtcblxuaW1wb3J0IHsgTk9UX0VRVUFMX1RPIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgU1BFQ0lBTF9UT0tFTl9UWVBFIH0gZnJvbSBcIi4uL3Rva2VuVHlwZXNcIjtcbmltcG9ydCB7IEVYUFJFU1NJT05fUlVMRV9OQU1FIH0gZnJvbSBcIi4uL3J1bGVOYW1lc1wiO1xuXG5jb25zdCB7IGZpcnN0LCBzZWNvbmQgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb21wYXJpc29uTm9kZSBleHRlbmRzIE5vblRlcm1pbmFsTm9kZSB7XG4gIGlzTmVnYXRlZCgpIHtcbiAgICBsZXQgbmVnYXRlZCA9IGZhbHNlO1xuXG4gICAgY29uc3QgdG9rZW5UeXBlID0gU1BFQ0lBTF9UT0tFTl9UWVBFO1xuXG4gICAgdGhpcy5zb21lVGVybWluYWxOb2RlKCh0ZXJtaW5hbE5vZGUpID0+IHtcbiAgICAgIGNvbnN0IGNvbnRlbnQgPSB0ZXJtaW5hbE5vZGUuZ2V0Q29udGVudCgpO1xuXG4gICAgICBpZiAoY29udGVudCA9PT0gTk9UX0VRVUFMX1RPKSB7XG4gICAgICAgIG5lZ2F0ZWQgPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9LCB0b2tlblR5cGUpO1xuXG4gICAgcmV0dXJuIG5lZ2F0ZWQ7XG4gIH1cblxuICBnZXRFeHByZXNzaW9uTm9kZXMoKSB7XG4gICAgY29uc3QgcnVsZU5hbWUgPSBFWFBSRVNTSU9OX1JVTEVfTkFNRSxcbiAgICAgIGV4cHJlc3Npb25Ob2RlcyA9IHRoaXMuZ2V0Tm9kZXNCeVJ1bGVOYW1lKHJ1bGVOYW1lKTtcblxuICAgIHJldHVybiBleHByZXNzaW9uTm9kZXM7XG4gIH1cblxuICBnZXRMZWZ0RXhwcmVzc2lvbk5vZGUoKSB7XG4gICAgY29uc3QgZmlyc3RFeHByZXNzaW9uTm9kZSA9IHRoaXMuZ2V0Rmlyc3RFeHByZXNzaW9uTm9kZSgpLFxuICAgICAgICAgIGxlZnRFeHByZXNzaW9uTm9kZSA9IGZpcnN0RXhwcmVzc2lvbk5vZGU7IC8vL1xuXG4gICAgcmV0dXJuIGxlZnRFeHByZXNzaW9uTm9kZTtcbiAgfVxuXG4gIGdldFJpZ2h0RXhwcmVzc2lvbk5vZGUoKSB7XG4gICAgY29uc3Qgc2Vjb25kRXhwcmVzc2lvbk5vZGUgPSB0aGlzLmdldFNlY29uZEV4cHJlc3Npb25Ob2RlKCksXG4gICAgICAgICAgcmlnaHRFeHByZXNzaW9uTm9kZSA9IHNlY29uZEV4cHJlc3Npb25Ob2RlOyAgLy8vXG5cbiAgICByZXR1cm4gcmlnaHRFeHByZXNzaW9uTm9kZTtcbiAgfVxuXG4gIGdldEZpcnN0RXhwcmVzc2lvbk5vZGUoKSB7XG4gICAgY29uc3QgZXhwcmVzc2lvbk5vZGVzID0gdGhpcy5nZXRFeHByZXNzaW9uTm9kZXMoKSxcbiAgICAgICAgICBmaXJzdEV4cHJlc3Npb25Ob2RlID0gZmlyc3QoZXhwcmVzc2lvbk5vZGVzKTtcblxuICAgIHJldHVybiBmaXJzdEV4cHJlc3Npb25Ob2RlO1xuICB9XG5cbiAgZ2V0U2Vjb25kRXhwcmVzc2lvbk5vZGUoKSB7XG4gICAgY29uc3QgZXhwcmVzc2lvbk5vZGVzID0gdGhpcy5nZXRFeHByZXNzaW9uTm9kZXMoKSxcbiAgICAgICAgICBzZWNvbmRFeHByZXNzaW9uTm9kZSA9IHNlY29uZChleHByZXNzaW9uTm9kZXMpO1xuXG4gICAgcmV0dXJuIHNlY29uZEV4cHJlc3Npb25Ob2RlO1xuICB9XG5cbiAgc3RhdGljIGZyb21SdWxlTmFtZUNoaWxkTm9kZXNPcGFjaXR5QW5kUHJlY2VkZW5jZShydWxlTmFtZSwgY2hpbGROb2Rlcywgb3BhY2l0eSwgcHJlY2VkZW5jZSkgeyByZXR1cm4gTm9uVGVybWluYWxOb2RlLmZyb21SdWxlTmFtZUNoaWxkTm9kZXNPcGFjaXR5QW5kUHJlY2VkZW5jZShDb21wYXJpc29uTm9kZSwgcnVsZU5hbWUsIGNoaWxkTm9kZXMsIG9wYWNpdHksIHByZWNlZGVuY2UpOyB9XG59XG4iXSwibmFtZXMiOlsiQ29tcGFyaXNvbk5vZGUiLCJmaXJzdCIsImFycmF5VXRpbGl0aWVzIiwic2Vjb25kIiwiaXNOZWdhdGVkIiwibmVnYXRlZCIsInRva2VuVHlwZSIsIlNQRUNJQUxfVE9LRU5fVFlQRSIsInNvbWVUZXJtaW5hbE5vZGUiLCJ0ZXJtaW5hbE5vZGUiLCJjb250ZW50IiwiZ2V0Q29udGVudCIsIk5PVF9FUVVBTF9UTyIsImdldEV4cHJlc3Npb25Ob2RlcyIsInJ1bGVOYW1lIiwiRVhQUkVTU0lPTl9SVUxFX05BTUUiLCJleHByZXNzaW9uTm9kZXMiLCJnZXROb2Rlc0J5UnVsZU5hbWUiLCJnZXRMZWZ0RXhwcmVzc2lvbk5vZGUiLCJmaXJzdEV4cHJlc3Npb25Ob2RlIiwiZ2V0Rmlyc3RFeHByZXNzaW9uTm9kZSIsImxlZnRFeHByZXNzaW9uTm9kZSIsImdldFJpZ2h0RXhwcmVzc2lvbk5vZGUiLCJzZWNvbmRFeHByZXNzaW9uTm9kZSIsImdldFNlY29uZEV4cHJlc3Npb25Ob2RlIiwicmlnaHRFeHByZXNzaW9uTm9kZSIsImZyb21SdWxlTmFtZUNoaWxkTm9kZXNPcGFjaXR5QW5kUHJlY2VkZW5jZSIsImNoaWxkTm9kZXMiLCJvcGFjaXR5IiwicHJlY2VkZW5jZSIsIk5vblRlcm1pbmFsTm9kZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFZcUJBOzs7eUJBVlU7c0VBRUg7eUJBRUM7MEJBQ007eUJBQ0U7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFckMsSUFBUUMsUUFBa0JDLHlCQUFjLENBQWhDRCxPQUFPRSxTQUFXRCx5QkFBYyxDQUF6QkM7QUFFQSxJQUFBLEFBQU1ILCtCQUFOO2NBQU1BO2FBQUFBO2dDQUFBQTtRQUFOLE9BQUEsa0JBQU1BOztrQkFBQUE7O1lBQ25CSSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBSUMsVUFBVTtnQkFFZCxJQUFNQyxZQUFZQyw4QkFBa0I7Z0JBRXBDLElBQUksQ0FBQ0MsZ0JBQWdCLENBQUMsU0FBQ0M7b0JBQ3JCLElBQU1DLFVBQVVELGFBQWFFLFVBQVU7b0JBRXZDLElBQUlELFlBQVlFLHVCQUFZLEVBQUU7d0JBQzVCUCxVQUFVO29CQUNaO29CQUVBLE9BQU87Z0JBQ1QsR0FBR0M7Z0JBRUgsT0FBT0Q7WUFDVDs7O1lBRUFRLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNQyxXQUFXQywrQkFBb0IsRUFDbkNDLGtCQUFrQixJQUFJLENBQUNDLGtCQUFrQixDQUFDSDtnQkFFNUMsT0FBT0U7WUFDVDs7O1lBRUFFLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNQyxzQkFBc0IsSUFBSSxDQUFDQyxzQkFBc0IsSUFDakRDLHFCQUFxQkYscUJBQXFCLEdBQUc7Z0JBRW5ELE9BQU9FO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsdUJBQXVCLElBQUksQ0FBQ0MsdUJBQXVCLElBQ25EQyxzQkFBc0JGLHNCQUF1QixHQUFHO2dCQUV0RCxPQUFPRTtZQUNUOzs7WUFFQUwsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1KLGtCQUFrQixJQUFJLENBQUNILGtCQUFrQixJQUN6Q00sc0JBQXNCbEIsTUFBTWU7Z0JBRWxDLE9BQU9HO1lBQ1Q7OztZQUVBSyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTVIsa0JBQWtCLElBQUksQ0FBQ0gsa0JBQWtCLElBQ3pDVSx1QkFBdUJwQixPQUFPYTtnQkFFcEMsT0FBT087WUFDVDs7OztZQUVPRyxLQUFBQTttQkFBUCxTQUFPQSwyQ0FBMkNaLFFBQVEsRUFBRWEsVUFBVSxFQUFFQyxPQUFPLEVBQUVDLFVBQVU7Z0JBQUksT0FBT0Msd0JBQWUsQ0FBQ0osMENBQTBDLENBdEQ3STFCLGdCQXNEOEpjLFVBQVVhLFlBQVlDLFNBQVNDO1lBQWE7OztXQXREMU03QjtFQUF1QjhCLHdCQUFlIn0=