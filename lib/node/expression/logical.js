"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return LogicalExpressionNode;
    }
});
var _necessary = require("necessary");
var _expression = /*#__PURE__*/ _interop_require_default(require("../../node/expression"));
var _tokenTypes = require("../../tokenTypes");
var _ruleNames = require("../../ruleNames");
var _constants = require("../../constants");
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
var first = _necessary.arrayUtilities.first, last = _necessary.arrayUtilities.last;
var LogicalExpressionNode = /*#__PURE__*/ function(ExpressionNode) {
    _inherits(LogicalExpressionNode, ExpressionNode);
    function LogicalExpressionNode() {
        _class_call_check(this, LogicalExpressionNode);
        return _call_super(this, LogicalExpressionNode, arguments);
    }
    _create_class(LogicalExpressionNode, [
        {
            key: "getOperator",
            value: function getOperator() {
                var operator = null;
                var tokenType = _tokenTypes.SPECIAL_TOKEN_TYPE;
                this.someTerminalNode(function(terminalNode) {
                    var content = terminalNode.getContent();
                    operator = content; ///
                    return true;
                }, tokenType);
                return operator;
            }
        },
        {
            key: "isConjection",
            value: function isConjection() {
                var operator = this.getOperator(), conjection = operator === _constants.CONJUNCTION_OPERATOR;
                return conjection;
            }
        },
        {
            key: "isDisjunction",
            value: function isDisjunction() {
                var operator = this.getOperator(), disjunction = operator === _constants.DISJUNCTION_OPERATOR;
                return disjunction;
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
                var firstExpresionNode = this.getFirstExpressionNode(), leftExpressionNode = firstExpresionNode; ///
                return leftExpressionNode;
            }
        },
        {
            key: "getRightExpressionNode",
            value: function getRightExpressionNode() {
                var lastExpressionNode = this.getLastExpressionNode(), rightExpressionNode = lastExpressionNode; ///
                return rightExpressionNode;
            }
        },
        {
            key: "getLastExpressionNode",
            value: function getLastExpressionNode() {
                var expressionNodes = this.getExpressionNodes(), lastExpressionNode = last(expressionNodes);
                return lastExpressionNode;
            }
        },
        {
            key: "getFirstExpressionNode",
            value: function getFirstExpressionNode() {
                var expressionNodes = this.getExpressionNodes(), firstExpressionNode = first(expressionNodes);
                return firstExpressionNode;
            }
        }
    ], [
        {
            key: "fromRuleNameChildNodesOpacityAndPrecedence",
            value: function fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) {
                return _expression.default.fromRuleNameChildNodesOpacityAndPrecedence(LogicalExpressionNode, ruleName, childNodes, opacity, precedence);
            }
        }
    ]);
    return LogicalExpressionNode;
}(_expression.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL2V4cHJlc3Npb24vbG9naWNhbC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCBFeHByZXNzaW9uTm9kZSBmcm9tIFwiLi4vLi4vbm9kZS9leHByZXNzaW9uXCI7XG5cbmltcG9ydCB7IFNQRUNJQUxfVE9LRU5fVFlQRSB9IGZyb20gXCIuLi8uLi90b2tlblR5cGVzXCI7XG5pbXBvcnQgeyBFWFBSRVNTSU9OX1JVTEVfTkFNRSB9IGZyb20gXCIuLi8uLi9ydWxlTmFtZXNcIjtcbmltcG9ydCB7IENPTkpVTkNUSU9OX09QRVJBVE9SLCBESVNKVU5DVElPTl9PUEVSQVRPUiB9IGZyb20gXCIuLi8uLi9jb25zdGFudHNcIjtcblxuY29uc3QgeyBmaXJzdCwgbGFzdCB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExvZ2ljYWxFeHByZXNzaW9uTm9kZSBleHRlbmRzIEV4cHJlc3Npb25Ob2RlIHtcbiAgZ2V0T3BlcmF0b3IoKSB7XG4gICAgbGV0IG9wZXJhdG9yID0gbnVsbDtcblxuICAgIGNvbnN0IHRva2VuVHlwZSA9IFNQRUNJQUxfVE9LRU5fVFlQRTtcblxuICAgIHRoaXMuc29tZVRlcm1pbmFsTm9kZSgodGVybWluYWxOb2RlKSA9PiB7XG4gICAgICBjb25zdCBjb250ZW50ID0gdGVybWluYWxOb2RlLmdldENvbnRlbnQoKTtcblxuICAgICAgb3BlcmF0b3IgPSBjb250ZW50OyAvLy9cblxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSwgdG9rZW5UeXBlKTtcblxuICAgIHJldHVybiBvcGVyYXRvcjtcbiAgfVxuXG4gIGlzQ29uamVjdGlvbigpIHtcbiAgICBjb25zdCBvcGVyYXRvciA9IHRoaXMuZ2V0T3BlcmF0b3IoKSxcbiAgICAgICAgICBjb25qZWN0aW9uID0gKG9wZXJhdG9yID09PSBDT05KVU5DVElPTl9PUEVSQVRPUik7XG5cbiAgICByZXR1cm4gY29uamVjdGlvbjtcbiAgfVxuXG4gIGlzRGlzanVuY3Rpb24oKSB7XG4gICAgY29uc3Qgb3BlcmF0b3IgPSB0aGlzLmdldE9wZXJhdG9yKCksXG4gICAgICAgICAgZGlzanVuY3Rpb24gPSAob3BlcmF0b3IgPT09IERJU0pVTkNUSU9OX09QRVJBVE9SKTtcblxuICAgIHJldHVybiBkaXNqdW5jdGlvbjtcbiAgfVxuXG4gIGdldEV4cHJlc3Npb25Ob2RlcygpIHtcbiAgICBjb25zdCBydWxlTmFtZSA9IEVYUFJFU1NJT05fUlVMRV9OQU1FLFxuICAgICAgICAgIGV4cHJlc3Npb25Ob2RlcyA9IHRoaXMuZ2V0Tm9kZXNCeVJ1bGVOYW1lKHJ1bGVOYW1lKTtcblxuICAgIHJldHVybiBleHByZXNzaW9uTm9kZXM7XG4gIH1cblxuICBnZXRMZWZ0RXhwcmVzc2lvbk5vZGUoKSB7XG4gICAgY29uc3QgZmlyc3RFeHByZXNpb25Ob2RlID0gdGhpcy5nZXRGaXJzdEV4cHJlc3Npb25Ob2RlKCksXG4gICAgICAgICAgbGVmdEV4cHJlc3Npb25Ob2RlID0gZmlyc3RFeHByZXNpb25Ob2RlOyAgLy8vXG5cbiAgICByZXR1cm4gbGVmdEV4cHJlc3Npb25Ob2RlO1xuICB9XG5cbiAgZ2V0UmlnaHRFeHByZXNzaW9uTm9kZSgpIHtcbiAgICBjb25zdCBsYXN0RXhwcmVzc2lvbk5vZGUgPSB0aGlzLmdldExhc3RFeHByZXNzaW9uTm9kZSgpLFxuICAgICAgICAgIHJpZ2h0RXhwcmVzc2lvbk5vZGUgPSBsYXN0RXhwcmVzc2lvbk5vZGU7IC8vL1xuXG4gICAgcmV0dXJuIHJpZ2h0RXhwcmVzc2lvbk5vZGU7XG4gIH1cblxuICBnZXRMYXN0RXhwcmVzc2lvbk5vZGUoKSB7XG4gICAgY29uc3QgZXhwcmVzc2lvbk5vZGVzID0gdGhpcy5nZXRFeHByZXNzaW9uTm9kZXMoKSxcbiAgICAgICAgICBsYXN0RXhwcmVzc2lvbk5vZGUgPSBsYXN0KGV4cHJlc3Npb25Ob2Rlcyk7XG5cbiAgICByZXR1cm4gbGFzdEV4cHJlc3Npb25Ob2RlO1xuICB9XG5cbiAgZ2V0Rmlyc3RFeHByZXNzaW9uTm9kZSgpIHtcbiAgICBjb25zdCBleHByZXNzaW9uTm9kZXMgPSB0aGlzLmdldEV4cHJlc3Npb25Ob2RlcygpLFxuICAgICAgICAgIGZpcnN0RXhwcmVzc2lvbk5vZGUgPSBmaXJzdChleHByZXNzaW9uTm9kZXMpO1xuXG4gICAgcmV0dXJuIGZpcnN0RXhwcmVzc2lvbk5vZGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc09wYWNpdHlBbmRQcmVjZWRlbmNlKHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBvcGFjaXR5LCBwcmVjZWRlbmNlKSB7IHJldHVybiBFeHByZXNzaW9uTm9kZS5mcm9tUnVsZU5hbWVDaGlsZE5vZGVzT3BhY2l0eUFuZFByZWNlZGVuY2UoTG9naWNhbEV4cHJlc3Npb25Ob2RlLCBydWxlTmFtZSwgY2hpbGROb2Rlcywgb3BhY2l0eSwgcHJlY2VkZW5jZSk7IH1cbn1cbiJdLCJuYW1lcyI6WyJMb2dpY2FsRXhwcmVzc2lvbk5vZGUiLCJmaXJzdCIsImFycmF5VXRpbGl0aWVzIiwibGFzdCIsImdldE9wZXJhdG9yIiwib3BlcmF0b3IiLCJ0b2tlblR5cGUiLCJTUEVDSUFMX1RPS0VOX1RZUEUiLCJzb21lVGVybWluYWxOb2RlIiwidGVybWluYWxOb2RlIiwiY29udGVudCIsImdldENvbnRlbnQiLCJpc0NvbmplY3Rpb24iLCJjb25qZWN0aW9uIiwiQ09OSlVOQ1RJT05fT1BFUkFUT1IiLCJpc0Rpc2p1bmN0aW9uIiwiZGlzanVuY3Rpb24iLCJESVNKVU5DVElPTl9PUEVSQVRPUiIsImdldEV4cHJlc3Npb25Ob2RlcyIsInJ1bGVOYW1lIiwiRVhQUkVTU0lPTl9SVUxFX05BTUUiLCJleHByZXNzaW9uTm9kZXMiLCJnZXROb2Rlc0J5UnVsZU5hbWUiLCJnZXRMZWZ0RXhwcmVzc2lvbk5vZGUiLCJmaXJzdEV4cHJlc2lvbk5vZGUiLCJnZXRGaXJzdEV4cHJlc3Npb25Ob2RlIiwibGVmdEV4cHJlc3Npb25Ob2RlIiwiZ2V0UmlnaHRFeHByZXNzaW9uTm9kZSIsImxhc3RFeHByZXNzaW9uTm9kZSIsImdldExhc3RFeHByZXNzaW9uTm9kZSIsInJpZ2h0RXhwcmVzc2lvbk5vZGUiLCJmaXJzdEV4cHJlc3Npb25Ob2RlIiwiZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc09wYWNpdHlBbmRQcmVjZWRlbmNlIiwiY2hpbGROb2RlcyIsIm9wYWNpdHkiLCJwcmVjZWRlbmNlIiwiRXhwcmVzc2lvbk5vZGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBWXFCQTs7O3lCQVZVO2lFQUVKOzBCQUVRO3lCQUNFO3lCQUNzQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUUzRCxJQUFRQyxRQUFnQkMseUJBQWMsQ0FBOUJELE9BQU9FLE9BQVNELHlCQUFjLENBQXZCQztBQUVBLElBQUEsQUFBTUgsc0NBQU47Y0FBTUE7YUFBQUE7Z0NBQUFBO1FBQU4sT0FBQSxrQkFBTUE7O2tCQUFBQTs7WUFDbkJJLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFJQyxXQUFXO2dCQUVmLElBQU1DLFlBQVlDLDhCQUFrQjtnQkFFcEMsSUFBSSxDQUFDQyxnQkFBZ0IsQ0FBQyxTQUFDQztvQkFDckIsSUFBTUMsVUFBVUQsYUFBYUUsVUFBVTtvQkFFdkNOLFdBQVdLLFNBQVMsR0FBRztvQkFFdkIsT0FBTztnQkFDVCxHQUFHSjtnQkFFSCxPQUFPRDtZQUNUOzs7WUFFQU8sS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1QLFdBQVcsSUFBSSxDQUFDRCxXQUFXLElBQzNCUyxhQUFjUixhQUFhUywrQkFBb0I7Z0JBRXJELE9BQU9EO1lBQ1Q7OztZQUVBRSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTVYsV0FBVyxJQUFJLENBQUNELFdBQVcsSUFDM0JZLGNBQWVYLGFBQWFZLCtCQUFvQjtnQkFFdEQsT0FBT0Q7WUFDVDs7O1lBRUFFLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNQyxXQUFXQywrQkFBb0IsRUFDL0JDLGtCQUFrQixJQUFJLENBQUNDLGtCQUFrQixDQUFDSDtnQkFFaEQsT0FBT0U7WUFDVDs7O1lBRUFFLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNQyxxQkFBcUIsSUFBSSxDQUFDQyxzQkFBc0IsSUFDaERDLHFCQUFxQkYsb0JBQXFCLEdBQUc7Z0JBRW5ELE9BQU9FO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMscUJBQXFCLElBQUksQ0FBQ0MscUJBQXFCLElBQy9DQyxzQkFBc0JGLG9CQUFvQixHQUFHO2dCQUVuRCxPQUFPRTtZQUNUOzs7WUFFQUQsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1SLGtCQUFrQixJQUFJLENBQUNILGtCQUFrQixJQUN6Q1UscUJBQXFCekIsS0FBS2tCO2dCQUVoQyxPQUFPTztZQUNUOzs7WUFFQUgsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1KLGtCQUFrQixJQUFJLENBQUNILGtCQUFrQixJQUN6Q2Esc0JBQXNCOUIsTUFBTW9CO2dCQUVsQyxPQUFPVTtZQUNUOzs7O1lBRU9DLEtBQUFBO21CQUFQLFNBQU9BLDJDQUEyQ2IsUUFBUSxFQUFFYyxVQUFVLEVBQUVDLE9BQU8sRUFBRUMsVUFBVTtnQkFBSSxPQUFPQyxtQkFBYyxDQUFDSiwwQ0FBMEMsQ0FsRTVJaEMsdUJBa0VvS21CLFVBQVVjLFlBQVlDLFNBQVNDO1lBQWE7OztXQWxFaE5uQztFQUE4Qm9DLG1CQUFjIn0=