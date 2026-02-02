"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return LogicalTermNode;
    }
});
var _necessary = require("necessary");
var _term = /*#__PURE__*/ _interop_require_default(require("../../node/term"));
var _ruleNames = require("../../ruleNames");
var _tokenTypes = require("../../tokenTypes");
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
var LogicalTermNode = /*#__PURE__*/ function(TermNode) {
    _inherits(LogicalTermNode, TermNode);
    function LogicalTermNode() {
        _class_call_check(this, LogicalTermNode);
        return _call_super(this, LogicalTermNode, arguments);
    }
    _create_class(LogicalTermNode, [
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
            key: "getTermNodes",
            value: function getTermNodes() {
                var ruleName = _ruleNames.TERM_RULE_NAME, termNodes = this.getNodesByRuleName(ruleName);
                return termNodes;
            }
        },
        {
            key: "getLeftTermNode",
            value: function getLeftTermNode() {
                var firstExpresionNode = this.getFirstTermNode(), leftTermNode = firstExpresionNode; ///
                return leftTermNode;
            }
        },
        {
            key: "getRightTermNode",
            value: function getRightTermNode() {
                var lastTermNode = this.getLastTermNode(), rightTermNode = lastTermNode; ///
                return rightTermNode;
            }
        },
        {
            key: "getLastTermNode",
            value: function getLastTermNode() {
                var termNodes = this.getTermNodes(), lastTermNode = last(termNodes);
                return lastTermNode;
            }
        },
        {
            key: "getFirstTermNode",
            value: function getFirstTermNode() {
                var termNodes = this.getTermNodes(), firstTermNode = first(termNodes);
                return firstTermNode;
            }
        }
    ], [
        {
            key: "fromRuleNameChildNodesOpacityAndPrecedence",
            value: function fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) {
                return _term.default.fromRuleNameChildNodesOpacityAndPrecedence(LogicalTermNode, ruleName, childNodes, opacity, precedence);
            }
        }
    ]);
    return LogicalTermNode;
}(_term.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL3Rlcm0vbG9naWNhbC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCBUZXJtTm9kZSBmcm9tIFwiLi4vLi4vbm9kZS90ZXJtXCI7XG5cbmltcG9ydCB7IFRFUk1fUlVMRV9OQU1FIH0gZnJvbSBcIi4uLy4uL3J1bGVOYW1lc1wiO1xuaW1wb3J0IHsgU1BFQ0lBTF9UT0tFTl9UWVBFIH0gZnJvbSBcIi4uLy4uL3Rva2VuVHlwZXNcIjtcbmltcG9ydCB7IENPTkpVTkNUSU9OX09QRVJBVE9SLCBESVNKVU5DVElPTl9PUEVSQVRPUiB9IGZyb20gXCIuLi8uLi9jb25zdGFudHNcIjtcblxuY29uc3QgeyBmaXJzdCwgbGFzdCB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExvZ2ljYWxUZXJtTm9kZSBleHRlbmRzIFRlcm1Ob2RlIHtcbiAgZ2V0T3BlcmF0b3IoKSB7XG4gICAgbGV0IG9wZXJhdG9yID0gbnVsbDtcblxuICAgIGNvbnN0IHRva2VuVHlwZSA9IFNQRUNJQUxfVE9LRU5fVFlQRTtcblxuICAgIHRoaXMuc29tZVRlcm1pbmFsTm9kZSgodGVybWluYWxOb2RlKSA9PiB7XG4gICAgICBjb25zdCBjb250ZW50ID0gdGVybWluYWxOb2RlLmdldENvbnRlbnQoKTtcblxuICAgICAgb3BlcmF0b3IgPSBjb250ZW50OyAvLy9cblxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSwgdG9rZW5UeXBlKTtcblxuICAgIHJldHVybiBvcGVyYXRvcjtcbiAgfVxuXG4gIGlzQ29uamVjdGlvbigpIHtcbiAgICBjb25zdCBvcGVyYXRvciA9IHRoaXMuZ2V0T3BlcmF0b3IoKSxcbiAgICAgICAgICBjb25qZWN0aW9uID0gKG9wZXJhdG9yID09PSBDT05KVU5DVElPTl9PUEVSQVRPUik7XG5cbiAgICByZXR1cm4gY29uamVjdGlvbjtcbiAgfVxuXG4gIGlzRGlzanVuY3Rpb24oKSB7XG4gICAgY29uc3Qgb3BlcmF0b3IgPSB0aGlzLmdldE9wZXJhdG9yKCksXG4gICAgICAgICAgZGlzanVuY3Rpb24gPSAob3BlcmF0b3IgPT09IERJU0pVTkNUSU9OX09QRVJBVE9SKTtcblxuICAgIHJldHVybiBkaXNqdW5jdGlvbjtcbiAgfVxuXG4gIGdldFRlcm1Ob2RlcygpIHtcbiAgICBjb25zdCBydWxlTmFtZSA9IFRFUk1fUlVMRV9OQU1FLFxuICAgICAgICAgIHRlcm1Ob2RlcyA9IHRoaXMuZ2V0Tm9kZXNCeVJ1bGVOYW1lKHJ1bGVOYW1lKTtcblxuICAgIHJldHVybiB0ZXJtTm9kZXM7XG4gIH1cblxuICBnZXRMZWZ0VGVybU5vZGUoKSB7XG4gICAgY29uc3QgZmlyc3RFeHByZXNpb25Ob2RlID0gdGhpcy5nZXRGaXJzdFRlcm1Ob2RlKCksXG4gICAgICAgICAgbGVmdFRlcm1Ob2RlID0gZmlyc3RFeHByZXNpb25Ob2RlOyAgLy8vXG5cbiAgICByZXR1cm4gbGVmdFRlcm1Ob2RlO1xuICB9XG5cbiAgZ2V0UmlnaHRUZXJtTm9kZSgpIHtcbiAgICBjb25zdCBsYXN0VGVybU5vZGUgPSB0aGlzLmdldExhc3RUZXJtTm9kZSgpLFxuICAgICAgICAgIHJpZ2h0VGVybU5vZGUgPSBsYXN0VGVybU5vZGU7IC8vL1xuXG4gICAgcmV0dXJuIHJpZ2h0VGVybU5vZGU7XG4gIH1cblxuICBnZXRMYXN0VGVybU5vZGUoKSB7XG4gICAgY29uc3QgdGVybU5vZGVzID0gdGhpcy5nZXRUZXJtTm9kZXMoKSxcbiAgICAgICAgICBsYXN0VGVybU5vZGUgPSBsYXN0KHRlcm1Ob2Rlcyk7XG5cbiAgICByZXR1cm4gbGFzdFRlcm1Ob2RlO1xuICB9XG5cbiAgZ2V0Rmlyc3RUZXJtTm9kZSgpIHtcbiAgICBjb25zdCB0ZXJtTm9kZXMgPSB0aGlzLmdldFRlcm1Ob2RlcygpLFxuICAgICAgICAgIGZpcnN0VGVybU5vZGUgPSBmaXJzdCh0ZXJtTm9kZXMpO1xuXG4gICAgcmV0dXJuIGZpcnN0VGVybU5vZGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc09wYWNpdHlBbmRQcmVjZWRlbmNlKHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBvcGFjaXR5LCBwcmVjZWRlbmNlKSB7IHJldHVybiBUZXJtTm9kZS5mcm9tUnVsZU5hbWVDaGlsZE5vZGVzT3BhY2l0eUFuZFByZWNlZGVuY2UoTG9naWNhbFRlcm1Ob2RlLCBydWxlTmFtZSwgY2hpbGROb2Rlcywgb3BhY2l0eSwgcHJlY2VkZW5jZSk7IH1cbn1cbiJdLCJuYW1lcyI6WyJMb2dpY2FsVGVybU5vZGUiLCJmaXJzdCIsImFycmF5VXRpbGl0aWVzIiwibGFzdCIsImdldE9wZXJhdG9yIiwib3BlcmF0b3IiLCJ0b2tlblR5cGUiLCJTUEVDSUFMX1RPS0VOX1RZUEUiLCJzb21lVGVybWluYWxOb2RlIiwidGVybWluYWxOb2RlIiwiY29udGVudCIsImdldENvbnRlbnQiLCJpc0NvbmplY3Rpb24iLCJjb25qZWN0aW9uIiwiQ09OSlVOQ1RJT05fT1BFUkFUT1IiLCJpc0Rpc2p1bmN0aW9uIiwiZGlzanVuY3Rpb24iLCJESVNKVU5DVElPTl9PUEVSQVRPUiIsImdldFRlcm1Ob2RlcyIsInJ1bGVOYW1lIiwiVEVSTV9SVUxFX05BTUUiLCJ0ZXJtTm9kZXMiLCJnZXROb2Rlc0J5UnVsZU5hbWUiLCJnZXRMZWZ0VGVybU5vZGUiLCJmaXJzdEV4cHJlc2lvbk5vZGUiLCJnZXRGaXJzdFRlcm1Ob2RlIiwibGVmdFRlcm1Ob2RlIiwiZ2V0UmlnaHRUZXJtTm9kZSIsImxhc3RUZXJtTm9kZSIsImdldExhc3RUZXJtTm9kZSIsInJpZ2h0VGVybU5vZGUiLCJmaXJzdFRlcm1Ob2RlIiwiZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc09wYWNpdHlBbmRQcmVjZWRlbmNlIiwiY2hpbGROb2RlcyIsIm9wYWNpdHkiLCJwcmVjZWRlbmNlIiwiVGVybU5vZGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBWXFCQTs7O3lCQVZVOzJEQUVWO3lCQUVVOzBCQUNJO3lCQUN3Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUUzRCxJQUFRQyxRQUFnQkMseUJBQWMsQ0FBOUJELE9BQU9FLE9BQVNELHlCQUFjLENBQXZCQztBQUVBLElBQUEsQUFBTUgsZ0NBQU47Y0FBTUE7YUFBQUE7Z0NBQUFBO1FBQU4sT0FBQSxrQkFBTUE7O2tCQUFBQTs7WUFDbkJJLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFJQyxXQUFXO2dCQUVmLElBQU1DLFlBQVlDLDhCQUFrQjtnQkFFcEMsSUFBSSxDQUFDQyxnQkFBZ0IsQ0FBQyxTQUFDQztvQkFDckIsSUFBTUMsVUFBVUQsYUFBYUUsVUFBVTtvQkFFdkNOLFdBQVdLLFNBQVMsR0FBRztvQkFFdkIsT0FBTztnQkFDVCxHQUFHSjtnQkFFSCxPQUFPRDtZQUNUOzs7WUFFQU8sS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1QLFdBQVcsSUFBSSxDQUFDRCxXQUFXLElBQzNCUyxhQUFjUixhQUFhUywrQkFBb0I7Z0JBRXJELE9BQU9EO1lBQ1Q7OztZQUVBRSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTVYsV0FBVyxJQUFJLENBQUNELFdBQVcsSUFDM0JZLGNBQWVYLGFBQWFZLCtCQUFvQjtnQkFFdEQsT0FBT0Q7WUFDVDs7O1lBRUFFLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNQyxXQUFXQyx5QkFBYyxFQUN6QkMsWUFBWSxJQUFJLENBQUNDLGtCQUFrQixDQUFDSDtnQkFFMUMsT0FBT0U7WUFDVDs7O1lBRUFFLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNQyxxQkFBcUIsSUFBSSxDQUFDQyxnQkFBZ0IsSUFDMUNDLGVBQWVGLG9CQUFxQixHQUFHO2dCQUU3QyxPQUFPRTtZQUNUOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLGVBQWUsSUFBSSxDQUFDQyxlQUFlLElBQ25DQyxnQkFBZ0JGLGNBQWMsR0FBRztnQkFFdkMsT0FBT0U7WUFDVDs7O1lBRUFELEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNUixZQUFZLElBQUksQ0FBQ0gsWUFBWSxJQUM3QlUsZUFBZXpCLEtBQUtrQjtnQkFFMUIsT0FBT087WUFDVDs7O1lBRUFILEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNSixZQUFZLElBQUksQ0FBQ0gsWUFBWSxJQUM3QmEsZ0JBQWdCOUIsTUFBTW9CO2dCQUU1QixPQUFPVTtZQUNUOzs7O1lBRU9DLEtBQUFBO21CQUFQLFNBQU9BLDJDQUEyQ2IsUUFBUSxFQUFFYyxVQUFVLEVBQUVDLE9BQU8sRUFBRUMsVUFBVTtnQkFBSSxPQUFPQyxhQUFRLENBQUNKLDBDQUEwQyxDQWxFdEloQyxpQkFrRXdKbUIsVUFBVWMsWUFBWUMsU0FBU0M7WUFBYTs7O1dBbEVwTW5DO0VBQXdCb0MsYUFBUSJ9