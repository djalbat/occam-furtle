"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return BitwiseExpressionNode;
    }
});
var _necessary = require("necessary");
var _expression = /*#__PURE__*/ _interop_require_default(require("../../node/expression"));
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
var BitwiseExpressionNode = /*#__PURE__*/ function(ExpressionNode) {
    _inherits(BitwiseExpressionNode, ExpressionNode);
    function BitwiseExpressionNode() {
        _class_call_check(this, BitwiseExpressionNode);
        return _call_super(this, BitwiseExpressionNode, arguments);
    }
    _create_class(BitwiseExpressionNode, [
        {
            key: "getOperator",
            value: function getOperator() {
                var operator = null;
                this.someChildNode(function(childNode, index) {
                    var childNodeTerminalNode = childNode.isTerminalNode();
                    if (childNodeTerminalNode) {
                        var terminalNode = childNode, content = terminalNode.getContent();
                        operator = content; ///
                        return true;
                    }
                });
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
                return _expression.default.fromRuleNameChildNodesOpacityAndPrecedence(BitwiseExpressionNode, ruleName, childNodes, opacity, precedence);
            }
        }
    ]);
    return BitwiseExpressionNode;
}(_expression.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL2V4cHJlc3Npb24vYml0d2lzZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCBFeHByZXNzaW9uTm9kZSBmcm9tIFwiLi4vLi4vbm9kZS9leHByZXNzaW9uXCI7XG5cbmltcG9ydCB7IEVYUFJFU1NJT05fUlVMRV9OQU1FIH0gZnJvbSBcIi4uLy4uL3J1bGVOYW1lc1wiO1xuaW1wb3J0IHsgQ09OSlVOQ1RJT05fT1BFUkFUT1IsIERJU0pVTkNUSU9OX09QRVJBVE9SIH0gZnJvbSBcIi4uLy4uL2NvbnN0YW50c1wiO1xuXG5jb25zdCB7IGZpcnN0LCBsYXN0IH0gPSBhcnJheVV0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQml0d2lzZUV4cHJlc3Npb25Ob2RlIGV4dGVuZHMgRXhwcmVzc2lvbk5vZGUge1xuICBnZXRPcGVyYXRvcigpIHtcbiAgICBsZXQgb3BlcmF0b3IgPSBudWxsO1xuXG4gICAgdGhpcy5zb21lQ2hpbGROb2RlKChjaGlsZE5vZGUsIGluZGV4KSA9PiB7XG4gICAgICBjb25zdCBjaGlsZE5vZGVUZXJtaW5hbE5vZGUgPSBjaGlsZE5vZGUuaXNUZXJtaW5hbE5vZGUoKTtcblxuICAgICAgaWYgKGNoaWxkTm9kZVRlcm1pbmFsTm9kZSkge1xuICAgICAgICBjb25zdCB0ZXJtaW5hbE5vZGUgPSBjaGlsZE5vZGUsXG4gICAgICAgICAgICAgIGNvbnRlbnQgPSB0ZXJtaW5hbE5vZGUuZ2V0Q29udGVudCgpO1xuXG4gICAgICAgIG9wZXJhdG9yID0gY29udGVudDsgLy8vXG5cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gb3BlcmF0b3I7XG4gIH1cblxuICBpc0NvbmplY3Rpb24oKSB7XG4gICAgY29uc3Qgb3BlcmF0b3IgPSB0aGlzLmdldE9wZXJhdG9yKCksXG4gICAgICAgICAgY29uamVjdGlvbiA9IChvcGVyYXRvciA9PT0gQ09OSlVOQ1RJT05fT1BFUkFUT1IpO1xuXG4gICAgcmV0dXJuIGNvbmplY3Rpb247XG4gIH1cblxuICBpc0Rpc2p1bmN0aW9uKCkge1xuICAgIGNvbnN0IG9wZXJhdG9yID0gdGhpcy5nZXRPcGVyYXRvcigpLFxuICAgICAgICAgIGRpc2p1bmN0aW9uID0gKG9wZXJhdG9yID09PSBESVNKVU5DVElPTl9PUEVSQVRPUik7XG5cbiAgICByZXR1cm4gZGlzanVuY3Rpb247XG4gIH1cblxuICBnZXRFeHByZXNzaW9uTm9kZXMoKSB7XG4gICAgY29uc3QgcnVsZU5hbWUgPSBFWFBSRVNTSU9OX1JVTEVfTkFNRSxcbiAgICAgICAgICBleHByZXNzaW9uTm9kZXMgPSB0aGlzLmdldE5vZGVzQnlSdWxlTmFtZShydWxlTmFtZSk7XG5cbiAgICByZXR1cm4gZXhwcmVzc2lvbk5vZGVzO1xuICB9XG5cbiAgZ2V0TGVmdEV4cHJlc3Npb25Ob2RlKCkge1xuICAgIGNvbnN0IGZpcnN0RXhwcmVzaW9uTm9kZSA9IHRoaXMuZ2V0Rmlyc3RFeHByZXNzaW9uTm9kZSgpLFxuICAgICAgICAgIGxlZnRFeHByZXNzaW9uTm9kZSA9IGZpcnN0RXhwcmVzaW9uTm9kZTsgIC8vL1xuXG4gICAgcmV0dXJuIGxlZnRFeHByZXNzaW9uTm9kZTtcbiAgfVxuXG4gIGdldFJpZ2h0RXhwcmVzc2lvbk5vZGUoKSB7XG4gICAgY29uc3QgbGFzdEV4cHJlc3Npb25Ob2RlID0gdGhpcy5nZXRMYXN0RXhwcmVzc2lvbk5vZGUoKSxcbiAgICAgICAgICByaWdodEV4cHJlc3Npb25Ob2RlID0gbGFzdEV4cHJlc3Npb25Ob2RlOyAvLy9cblxuICAgIHJldHVybiByaWdodEV4cHJlc3Npb25Ob2RlO1xuICB9XG5cbiAgZ2V0TGFzdEV4cHJlc3Npb25Ob2RlKCkge1xuICAgIGNvbnN0IGV4cHJlc3Npb25Ob2RlcyA9IHRoaXMuZ2V0RXhwcmVzc2lvbk5vZGVzKCksXG4gICAgICAgICAgbGFzdEV4cHJlc3Npb25Ob2RlID0gbGFzdChleHByZXNzaW9uTm9kZXMpO1xuXG4gICAgcmV0dXJuIGxhc3RFeHByZXNzaW9uTm9kZTtcbiAgfVxuXG4gIGdldEZpcnN0RXhwcmVzc2lvbk5vZGUoKSB7XG4gICAgY29uc3QgZXhwcmVzc2lvbk5vZGVzID0gdGhpcy5nZXRFeHByZXNzaW9uTm9kZXMoKSxcbiAgICAgICAgICBmaXJzdEV4cHJlc3Npb25Ob2RlID0gZmlyc3QoZXhwcmVzc2lvbk5vZGVzKTtcblxuICAgIHJldHVybiBmaXJzdEV4cHJlc3Npb25Ob2RlO1xuICB9XG5cbiAgc3RhdGljIGZyb21SdWxlTmFtZUNoaWxkTm9kZXNPcGFjaXR5QW5kUHJlY2VkZW5jZShydWxlTmFtZSwgY2hpbGROb2Rlcywgb3BhY2l0eSwgcHJlY2VkZW5jZSkgeyByZXR1cm4gRXhwcmVzc2lvbk5vZGUuZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc09wYWNpdHlBbmRQcmVjZWRlbmNlKEJpdHdpc2VFeHByZXNzaW9uTm9kZSwgcnVsZU5hbWUsIGNoaWxkTm9kZXMsIG9wYWNpdHksIHByZWNlZGVuY2UpOyB9XG59XG4iXSwibmFtZXMiOlsiQml0d2lzZUV4cHJlc3Npb25Ob2RlIiwiZmlyc3QiLCJhcnJheVV0aWxpdGllcyIsImxhc3QiLCJnZXRPcGVyYXRvciIsIm9wZXJhdG9yIiwic29tZUNoaWxkTm9kZSIsImNoaWxkTm9kZSIsImluZGV4IiwiY2hpbGROb2RlVGVybWluYWxOb2RlIiwiaXNUZXJtaW5hbE5vZGUiLCJ0ZXJtaW5hbE5vZGUiLCJjb250ZW50IiwiZ2V0Q29udGVudCIsImlzQ29uamVjdGlvbiIsImNvbmplY3Rpb24iLCJDT05KVU5DVElPTl9PUEVSQVRPUiIsImlzRGlzanVuY3Rpb24iLCJkaXNqdW5jdGlvbiIsIkRJU0pVTkNUSU9OX09QRVJBVE9SIiwiZ2V0RXhwcmVzc2lvbk5vZGVzIiwicnVsZU5hbWUiLCJFWFBSRVNTSU9OX1JVTEVfTkFNRSIsImV4cHJlc3Npb25Ob2RlcyIsImdldE5vZGVzQnlSdWxlTmFtZSIsImdldExlZnRFeHByZXNzaW9uTm9kZSIsImZpcnN0RXhwcmVzaW9uTm9kZSIsImdldEZpcnN0RXhwcmVzc2lvbk5vZGUiLCJsZWZ0RXhwcmVzc2lvbk5vZGUiLCJnZXRSaWdodEV4cHJlc3Npb25Ob2RlIiwibGFzdEV4cHJlc3Npb25Ob2RlIiwiZ2V0TGFzdEV4cHJlc3Npb25Ob2RlIiwicmlnaHRFeHByZXNzaW9uTm9kZSIsImZpcnN0RXhwcmVzc2lvbk5vZGUiLCJmcm9tUnVsZU5hbWVDaGlsZE5vZGVzT3BhY2l0eUFuZFByZWNlZGVuY2UiLCJjaGlsZE5vZGVzIiwib3BhY2l0eSIsInByZWNlZGVuY2UiLCJFeHByZXNzaW9uTm9kZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFXcUJBOzs7eUJBVFU7aUVBRUo7eUJBRVU7eUJBQ3NCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTNELElBQVFDLFFBQWdCQyx5QkFBYyxDQUE5QkQsT0FBT0UsT0FBU0QseUJBQWMsQ0FBdkJDO0FBRUEsSUFBQSxBQUFNSCxzQ0FBTjtjQUFNQTthQUFBQTtnQ0FBQUE7UUFBTixPQUFBLGtCQUFNQTs7a0JBQUFBOztZQUNuQkksS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQUlDLFdBQVc7Z0JBRWYsSUFBSSxDQUFDQyxhQUFhLENBQUMsU0FBQ0MsV0FBV0M7b0JBQzdCLElBQU1DLHdCQUF3QkYsVUFBVUcsY0FBYztvQkFFdEQsSUFBSUQsdUJBQXVCO3dCQUN6QixJQUFNRSxlQUFlSixXQUNmSyxVQUFVRCxhQUFhRSxVQUFVO3dCQUV2Q1IsV0FBV08sU0FBUyxHQUFHO3dCQUV2QixPQUFPO29CQUNUO2dCQUNGO2dCQUVBLE9BQU9QO1lBQ1Q7OztZQUVBUyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTVQsV0FBVyxJQUFJLENBQUNELFdBQVcsSUFDM0JXLGFBQWNWLGFBQWFXLCtCQUFvQjtnQkFFckQsT0FBT0Q7WUFDVDs7O1lBRUFFLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNWixXQUFXLElBQUksQ0FBQ0QsV0FBVyxJQUMzQmMsY0FBZWIsYUFBYWMsK0JBQW9CO2dCQUV0RCxPQUFPRDtZQUNUOzs7WUFFQUUsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLFdBQVdDLCtCQUFvQixFQUMvQkMsa0JBQWtCLElBQUksQ0FBQ0Msa0JBQWtCLENBQUNIO2dCQUVoRCxPQUFPRTtZQUNUOzs7WUFFQUUsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLHFCQUFxQixJQUFJLENBQUNDLHNCQUFzQixJQUNoREMscUJBQXFCRixvQkFBcUIsR0FBRztnQkFFbkQsT0FBT0U7WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNQyxxQkFBcUIsSUFBSSxDQUFDQyxxQkFBcUIsSUFDL0NDLHNCQUFzQkYsb0JBQW9CLEdBQUc7Z0JBRW5ELE9BQU9FO1lBQ1Q7OztZQUVBRCxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTVIsa0JBQWtCLElBQUksQ0FBQ0gsa0JBQWtCLElBQ3pDVSxxQkFBcUIzQixLQUFLb0I7Z0JBRWhDLE9BQU9PO1lBQ1Q7OztZQUVBSCxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUosa0JBQWtCLElBQUksQ0FBQ0gsa0JBQWtCLElBQ3pDYSxzQkFBc0JoQyxNQUFNc0I7Z0JBRWxDLE9BQU9VO1lBQ1Q7Ozs7WUFFT0MsS0FBQUE7bUJBQVAsU0FBT0EsMkNBQTJDYixRQUFRLEVBQUVjLFVBQVUsRUFBRUMsT0FBTyxFQUFFQyxVQUFVO2dCQUFJLE9BQU9DLG1CQUFjLENBQUNKLDBDQUEwQyxDQXJFNUlsQyx1QkFxRW9LcUIsVUFBVWMsWUFBWUMsU0FBU0M7WUFBYTs7O1dBckVoTnJDO0VBQThCc0MsbUJBQWMifQ==