"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return ComparisonExpressionNode;
    }
});
var _necessary = require("necessary");
var _expression = /*#__PURE__*/ _interop_require_default(require("../../node/expression"));
var _constants = require("../../constants");
var _tokenTypes = require("../../tokenTypes");
var _ruleNames = require("../../ruleNames");
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
var ComparisonExpressionNode = /*#__PURE__*/ function(ExpressionNode) {
    _inherits(ComparisonExpressionNode, ExpressionNode);
    function ComparisonExpressionNode() {
        _class_call_check(this, ComparisonExpressionNode);
        return _call_super(this, ComparisonExpressionNode, arguments);
    }
    _create_class(ComparisonExpressionNode, [
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
                return _expression.default.fromRuleNameChildNodesOpacityAndPrecedence(ComparisonExpressionNode, ruleName, childNodes, opacity, precedence);
            }
        }
    ]);
    return ComparisonExpressionNode;
}(_expression.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL2V4cHJlc3Npb24vY29tcGFyaXNvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCBFeHByZXNzaW9uTm9kZSBmcm9tIFwiLi4vLi4vbm9kZS9leHByZXNzaW9uXCI7XG5cbmltcG9ydCB7IE5PVF9FUVVBTF9UTyB9IGZyb20gXCIuLi8uLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IFNQRUNJQUxfVE9LRU5fVFlQRSB9IGZyb20gXCIuLi8uLi90b2tlblR5cGVzXCI7XG5pbXBvcnQgeyBFWFBSRVNTSU9OX1JVTEVfTkFNRSB9IGZyb20gXCIuLi8uLi9ydWxlTmFtZXNcIjtcblxuY29uc3QgeyBmaXJzdCwgc2Vjb25kIH0gPSBhcnJheVV0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29tcGFyaXNvbkV4cHJlc3Npb25Ob2RlIGV4dGVuZHMgRXhwcmVzc2lvbk5vZGUge1xuICBpc05lZ2F0ZWQoKSB7XG4gICAgbGV0IG5lZ2F0ZWQgPSBmYWxzZTtcblxuICAgIGNvbnN0IHRva2VuVHlwZSA9IFNQRUNJQUxfVE9LRU5fVFlQRTtcblxuICAgIHRoaXMuc29tZVRlcm1pbmFsTm9kZSgodGVybWluYWxOb2RlKSA9PiB7XG4gICAgICBjb25zdCBjb250ZW50ID0gdGVybWluYWxOb2RlLmdldENvbnRlbnQoKTtcblxuICAgICAgaWYgKGNvbnRlbnQgPT09IE5PVF9FUVVBTF9UTykge1xuICAgICAgICBuZWdhdGVkID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSwgdG9rZW5UeXBlKTtcblxuICAgIHJldHVybiBuZWdhdGVkO1xuICB9XG5cbiAgZ2V0RXhwcmVzc2lvbk5vZGVzKCkge1xuICAgIGNvbnN0IHJ1bGVOYW1lID0gRVhQUkVTU0lPTl9SVUxFX05BTUUsXG4gICAgICAgICAgZXhwcmVzc2lvbk5vZGVzID0gdGhpcy5nZXROb2Rlc0J5UnVsZU5hbWUocnVsZU5hbWUpO1xuXG4gICAgcmV0dXJuIGV4cHJlc3Npb25Ob2RlcztcbiAgfVxuXG4gIGdldExlZnRFeHByZXNzaW9uTm9kZSgpIHtcbiAgICBjb25zdCBmaXJzdEV4cHJlc3Npb25Ob2RlID0gdGhpcy5nZXRGaXJzdEV4cHJlc3Npb25Ob2RlKCksXG4gICAgICAgICAgbGVmdEV4cHJlc3Npb25Ob2RlID0gZmlyc3RFeHByZXNzaW9uTm9kZTsgLy8vXG5cbiAgICByZXR1cm4gbGVmdEV4cHJlc3Npb25Ob2RlO1xuICB9XG5cbiAgZ2V0UmlnaHRFeHByZXNzaW9uTm9kZSgpIHtcbiAgICBjb25zdCBzZWNvbmRFeHByZXNzaW9uTm9kZSA9IHRoaXMuZ2V0U2Vjb25kRXhwcmVzc2lvbk5vZGUoKSxcbiAgICAgICAgICByaWdodEV4cHJlc3Npb25Ob2RlID0gc2Vjb25kRXhwcmVzc2lvbk5vZGU7ICAvLy9cblxuICAgIHJldHVybiByaWdodEV4cHJlc3Npb25Ob2RlO1xuICB9XG5cbiAgZ2V0Rmlyc3RFeHByZXNzaW9uTm9kZSgpIHtcbiAgICBjb25zdCBleHByZXNzaW9uTm9kZXMgPSB0aGlzLmdldEV4cHJlc3Npb25Ob2RlcygpLFxuICAgICAgICAgIGZpcnN0RXhwcmVzc2lvbk5vZGUgPSBmaXJzdChleHByZXNzaW9uTm9kZXMpO1xuXG4gICAgcmV0dXJuIGZpcnN0RXhwcmVzc2lvbk5vZGU7XG4gIH1cblxuICBnZXRTZWNvbmRFeHByZXNzaW9uTm9kZSgpIHtcbiAgICBjb25zdCBleHByZXNzaW9uTm9kZXMgPSB0aGlzLmdldEV4cHJlc3Npb25Ob2RlcygpLFxuICAgICAgICAgIHNlY29uZEV4cHJlc3Npb25Ob2RlID0gc2Vjb25kKGV4cHJlc3Npb25Ob2Rlcyk7XG5cbiAgICByZXR1cm4gc2Vjb25kRXhwcmVzc2lvbk5vZGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc09wYWNpdHlBbmRQcmVjZWRlbmNlKHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBvcGFjaXR5LCBwcmVjZWRlbmNlKSB7IHJldHVybiBFeHByZXNzaW9uTm9kZS5mcm9tUnVsZU5hbWVDaGlsZE5vZGVzT3BhY2l0eUFuZFByZWNlZGVuY2UoQ29tcGFyaXNvbkV4cHJlc3Npb25Ob2RlLCBydWxlTmFtZSwgY2hpbGROb2Rlcywgb3BhY2l0eSwgcHJlY2VkZW5jZSk7IH1cbn1cbiJdLCJuYW1lcyI6WyJDb21wYXJpc29uRXhwcmVzc2lvbk5vZGUiLCJmaXJzdCIsImFycmF5VXRpbGl0aWVzIiwic2Vjb25kIiwiaXNOZWdhdGVkIiwibmVnYXRlZCIsInRva2VuVHlwZSIsIlNQRUNJQUxfVE9LRU5fVFlQRSIsInNvbWVUZXJtaW5hbE5vZGUiLCJ0ZXJtaW5hbE5vZGUiLCJjb250ZW50IiwiZ2V0Q29udGVudCIsIk5PVF9FUVVBTF9UTyIsImdldEV4cHJlc3Npb25Ob2RlcyIsInJ1bGVOYW1lIiwiRVhQUkVTU0lPTl9SVUxFX05BTUUiLCJleHByZXNzaW9uTm9kZXMiLCJnZXROb2Rlc0J5UnVsZU5hbWUiLCJnZXRMZWZ0RXhwcmVzc2lvbk5vZGUiLCJmaXJzdEV4cHJlc3Npb25Ob2RlIiwiZ2V0Rmlyc3RFeHByZXNzaW9uTm9kZSIsImxlZnRFeHByZXNzaW9uTm9kZSIsImdldFJpZ2h0RXhwcmVzc2lvbk5vZGUiLCJzZWNvbmRFeHByZXNzaW9uTm9kZSIsImdldFNlY29uZEV4cHJlc3Npb25Ob2RlIiwicmlnaHRFeHByZXNzaW9uTm9kZSIsImZyb21SdWxlTmFtZUNoaWxkTm9kZXNPcGFjaXR5QW5kUHJlY2VkZW5jZSIsImNoaWxkTm9kZXMiLCJvcGFjaXR5IiwicHJlY2VkZW5jZSIsIkV4cHJlc3Npb25Ob2RlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQVlxQkE7Ozt5QkFWVTtpRUFFSjt5QkFFRTswQkFDTTt5QkFDRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVyQyxJQUFRQyxRQUFrQkMseUJBQWMsQ0FBaENELE9BQU9FLFNBQVdELHlCQUFjLENBQXpCQztBQUVBLElBQUEsQUFBTUgseUNBQU47Y0FBTUE7YUFBQUE7Z0NBQUFBO1FBQU4sT0FBQSxrQkFBTUE7O2tCQUFBQTs7WUFDbkJJLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFJQyxVQUFVO2dCQUVkLElBQU1DLFlBQVlDLDhCQUFrQjtnQkFFcEMsSUFBSSxDQUFDQyxnQkFBZ0IsQ0FBQyxTQUFDQztvQkFDckIsSUFBTUMsVUFBVUQsYUFBYUUsVUFBVTtvQkFFdkMsSUFBSUQsWUFBWUUsdUJBQVksRUFBRTt3QkFDNUJQLFVBQVU7b0JBQ1o7b0JBRUEsT0FBTztnQkFDVCxHQUFHQztnQkFFSCxPQUFPRDtZQUNUOzs7WUFFQVEsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLFdBQVdDLCtCQUFvQixFQUMvQkMsa0JBQWtCLElBQUksQ0FBQ0Msa0JBQWtCLENBQUNIO2dCQUVoRCxPQUFPRTtZQUNUOzs7WUFFQUUsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLHNCQUFzQixJQUFJLENBQUNDLHNCQUFzQixJQUNqREMscUJBQXFCRixxQkFBcUIsR0FBRztnQkFFbkQsT0FBT0U7WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNQyx1QkFBdUIsSUFBSSxDQUFDQyx1QkFBdUIsSUFDbkRDLHNCQUFzQkYsc0JBQXVCLEdBQUc7Z0JBRXRELE9BQU9FO1lBQ1Q7OztZQUVBTCxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUosa0JBQWtCLElBQUksQ0FBQ0gsa0JBQWtCLElBQ3pDTSxzQkFBc0JsQixNQUFNZTtnQkFFbEMsT0FBT0c7WUFDVDs7O1lBRUFLLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNUixrQkFBa0IsSUFBSSxDQUFDSCxrQkFBa0IsSUFDekNVLHVCQUF1QnBCLE9BQU9hO2dCQUVwQyxPQUFPTztZQUNUOzs7O1lBRU9HLEtBQUFBO21CQUFQLFNBQU9BLDJDQUEyQ1osUUFBUSxFQUFFYSxVQUFVLEVBQUVDLE9BQU8sRUFBRUMsVUFBVTtnQkFBSSxPQUFPQyxtQkFBYyxDQUFDSiwwQ0FBMEMsQ0F0RDVJMUIsMEJBc0R1S2MsVUFBVWEsWUFBWUMsU0FBU0M7WUFBYTs7O1dBdERuTjdCO0VBQWlDOEIsbUJBQWMifQ==