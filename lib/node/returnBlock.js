"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return ReturnBlockNode;
    }
});
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
var ReturnBlockNode = /*#__PURE__*/ function(NonTerminalNode) {
    _inherits(ReturnBlockNode, NonTerminalNode);
    function ReturnBlockNode() {
        _class_call_check(this, ReturnBlockNode);
        return _call_super(this, ReturnBlockNode, arguments);
    }
    _create_class(ReturnBlockNode, [
        {
            key: "isNonsensical",
            value: function isNonsensical() {
                var nonsenseNodes = this.getNonsenseNodes(), nonsenseNodesLength = nonsenseNodes.length, nonsensical = nonsenseNodesLength > 0;
                return nonsensical;
            }
        },
        {
            key: "getStepNodes",
            value: function getStepNodes() {
                var ruleName = _ruleNames.STEP_RULE_NAME, stepNodes = this.getNodesByRuleName(ruleName);
                return stepNodes;
            }
        },
        {
            key: "getNonsenseNodes",
            value: function getNonsenseNodes() {
                var ruleName = _ruleNames.NONSENSE_RULE_NAME, nonsenseNodes = this.getNodesByRuleName(ruleName);
                return nonsenseNodes;
            }
        },
        {
            key: "getReturnStatementNode",
            value: function getReturnStatementNode() {
                var ruleName = _ruleNames.RETURN_STATEMENT_RULE_NAME, returnStatement = this.getNodeByRuleName(ruleName);
                return returnStatement;
            }
        }
    ], [
        {
            key: "fromRuleNameChildNodesOpacityAndPrecedence",
            value: function fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) {
                return _occamlanguages.NonTerminalNode.fromRuleNameChildNodesOpacityAndPrecedence(ReturnBlockNode, ruleName, childNodes, opacity, precedence);
            }
        }
    ]);
    return ReturnBlockNode;
}(_occamlanguages.NonTerminalNode);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ub2RlL3JldHVybkJsb2NrLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBOb25UZXJtaW5hbE5vZGUgfSBmcm9tIFwib2NjYW0tbGFuZ3VhZ2VzXCI7XG5cbmltcG9ydCB7IFNURVBfUlVMRV9OQU1FLCBOT05TRU5TRV9SVUxFX05BTUUsIFJFVFVSTl9TVEFURU1FTlRfUlVMRV9OQU1FIH0gZnJvbSBcIi4uL3J1bGVOYW1lc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZXR1cm5CbG9ja05vZGUgZXh0ZW5kcyBOb25UZXJtaW5hbE5vZGUge1xuICBpc05vbnNlbnNpY2FsKCkge1xuICAgIGNvbnN0IG5vbnNlbnNlTm9kZXMgPSB0aGlzLmdldE5vbnNlbnNlTm9kZXMoKSxcbiAgICAgICAgICBub25zZW5zZU5vZGVzTGVuZ3RoID0gbm9uc2Vuc2VOb2Rlcy5sZW5ndGgsXG4gICAgICAgICAgbm9uc2Vuc2ljYWwgPSAobm9uc2Vuc2VOb2Rlc0xlbmd0aCA+IDApO1xuXG4gICAgcmV0dXJuIG5vbnNlbnNpY2FsO1xuICB9XG5cbiAgZ2V0U3RlcE5vZGVzKCkge1xuICAgIGNvbnN0IHJ1bGVOYW1lID0gU1RFUF9SVUxFX05BTUUsXG4gICAgICAgICAgc3RlcE5vZGVzID0gdGhpcy5nZXROb2Rlc0J5UnVsZU5hbWUocnVsZU5hbWUpO1xuXG4gICAgcmV0dXJuIHN0ZXBOb2RlcztcbiAgfVxuXG4gIGdldE5vbnNlbnNlTm9kZXMoKSB7XG4gICAgY29uc3QgcnVsZU5hbWUgPSBOT05TRU5TRV9SVUxFX05BTUUsXG4gICAgICAgICAgbm9uc2Vuc2VOb2RlcyA9IHRoaXMuZ2V0Tm9kZXNCeVJ1bGVOYW1lKHJ1bGVOYW1lKTtcblxuICAgICAgcmV0dXJuIG5vbnNlbnNlTm9kZXM7XG4gIH1cblxuICBnZXRSZXR1cm5TdGF0ZW1lbnROb2RlKCkge1xuICAgIGNvbnN0IHJ1bGVOYW1lID0gUkVUVVJOX1NUQVRFTUVOVF9SVUxFX05BTUUsXG4gICAgICAgICAgcmV0dXJuU3RhdGVtZW50ID0gdGhpcy5nZXROb2RlQnlSdWxlTmFtZShydWxlTmFtZSk7XG5cbiAgICByZXR1cm4gcmV0dXJuU3RhdGVtZW50O1xuICB9XG5cbiAgc3RhdGljIGZyb21SdWxlTmFtZUNoaWxkTm9kZXNPcGFjaXR5QW5kUHJlY2VkZW5jZShydWxlTmFtZSwgY2hpbGROb2Rlcywgb3BhY2l0eSwgcHJlY2VkZW5jZSkgeyByZXR1cm4gTm9uVGVybWluYWxOb2RlLmZyb21SdWxlTmFtZUNoaWxkTm9kZXNPcGFjaXR5QW5kUHJlY2VkZW5jZShSZXR1cm5CbG9ja05vZGUsIHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBvcGFjaXR5LCBwcmVjZWRlbmNlKTsgfVxufVxuIl0sIm5hbWVzIjpbIlJldHVybkJsb2NrTm9kZSIsImlzTm9uc2Vuc2ljYWwiLCJub25zZW5zZU5vZGVzIiwiZ2V0Tm9uc2Vuc2VOb2RlcyIsIm5vbnNlbnNlTm9kZXNMZW5ndGgiLCJsZW5ndGgiLCJub25zZW5zaWNhbCIsImdldFN0ZXBOb2RlcyIsInJ1bGVOYW1lIiwiU1RFUF9SVUxFX05BTUUiLCJzdGVwTm9kZXMiLCJnZXROb2Rlc0J5UnVsZU5hbWUiLCJOT05TRU5TRV9SVUxFX05BTUUiLCJnZXRSZXR1cm5TdGF0ZW1lbnROb2RlIiwiUkVUVVJOX1NUQVRFTUVOVF9SVUxFX05BTUUiLCJyZXR1cm5TdGF0ZW1lbnQiLCJnZXROb2RlQnlSdWxlTmFtZSIsImZyb21SdWxlTmFtZUNoaWxkTm9kZXNPcGFjaXR5QW5kUHJlY2VkZW5jZSIsImNoaWxkTm9kZXMiLCJvcGFjaXR5IiwicHJlY2VkZW5jZSIsIk5vblRlcm1pbmFsTm9kZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFNcUJBOzs7OEJBSlc7eUJBRStDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVoRSxJQUFBLEFBQU1BLGdDQUFOO2NBQU1BO2FBQUFBO2dDQUFBQTtRQUFOLE9BQUEsa0JBQU1BOztrQkFBQUE7O1lBQ25CQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsZ0JBQWdCLElBQUksQ0FBQ0MsZ0JBQWdCLElBQ3JDQyxzQkFBc0JGLGNBQWNHLE1BQU0sRUFDMUNDLGNBQWVGLHNCQUFzQjtnQkFFM0MsT0FBT0U7WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNQyxXQUFXQyx5QkFBYyxFQUN6QkMsWUFBWSxJQUFJLENBQUNDLGtCQUFrQixDQUFDSDtnQkFFMUMsT0FBT0U7WUFDVDs7O1lBRUFQLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNSyxXQUFXSSw2QkFBa0IsRUFDN0JWLGdCQUFnQixJQUFJLENBQUNTLGtCQUFrQixDQUFDSDtnQkFFNUMsT0FBT047WUFDWDs7O1lBRUFXLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNTCxXQUFXTSxxQ0FBMEIsRUFDckNDLGtCQUFrQixJQUFJLENBQUNDLGlCQUFpQixDQUFDUjtnQkFFL0MsT0FBT087WUFDVDs7OztZQUVPRSxLQUFBQTttQkFBUCxTQUFPQSwyQ0FBMkNULFFBQVEsRUFBRVUsVUFBVSxFQUFFQyxPQUFPLEVBQUVDLFVBQVU7Z0JBQUksT0FBT0MsK0JBQWUsQ0FBQ0osMENBQTBDLENBOUI3SWpCLGlCQThCK0pRLFVBQVVVLFlBQVlDLFNBQVNDO1lBQWE7OztXQTlCM01wQjtFQUF3QnFCLCtCQUFlIn0=