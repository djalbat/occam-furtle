"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return ComparisonTermNode;
    }
});
var _necessary = require("necessary");
var _term = /*#__PURE__*/ _interop_require_default(require("../../node/term"));
var _constants = require("../../constants");
var _ruleNames = require("../../ruleNames");
var _tokenTypes = require("../../tokenTypes");
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
var ComparisonTermNode = /*#__PURE__*/ function(TermNode) {
    _inherits(ComparisonTermNode, TermNode);
    function ComparisonTermNode() {
        _class_call_check(this, ComparisonTermNode);
        return _call_super(this, ComparisonTermNode, arguments);
    }
    _create_class(ComparisonTermNode, [
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
            key: "getTermNodes",
            value: function getTermNodes() {
                var ruleName = _ruleNames.TERM_RULE_NAME, termNodes = this.getNodesByRuleName(ruleName);
                return termNodes;
            }
        },
        {
            key: "getLeftTermNode",
            value: function getLeftTermNode() {
                var firstTermNode = this.getFirstTermNode(), leftTermNode = firstTermNode; ///
                return leftTermNode;
            }
        },
        {
            key: "getRightTermNode",
            value: function getRightTermNode() {
                var secondTermNode = this.getSecondTermNode(), rightTermNode = secondTermNode; ///
                return rightTermNode;
            }
        },
        {
            key: "getFirstTermNode",
            value: function getFirstTermNode() {
                var termNodes = this.getTermNodes(), firstTermNode = first(termNodes);
                return firstTermNode;
            }
        },
        {
            key: "getSecondTermNode",
            value: function getSecondTermNode() {
                var termNodes = this.getTermNodes(), secondTermNode = second(termNodes);
                return secondTermNode;
            }
        }
    ], [
        {
            key: "fromRuleNameChildNodesOpacityAndPrecedence",
            value: function fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) {
                return _term.default.fromRuleNameChildNodesOpacityAndPrecedence(ComparisonTermNode, ruleName, childNodes, opacity, precedence);
            }
        }
    ]);
    return ComparisonTermNode;
}(_term.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL3Rlcm0vY29tcGFyaXNvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCBUZXJtTm9kZSBmcm9tIFwiLi4vLi4vbm9kZS90ZXJtXCI7XG5cbmltcG9ydCB7IE5PVF9FUVVBTF9UTyB9IGZyb20gXCIuLi8uLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IFRFUk1fUlVMRV9OQU1FIH0gZnJvbSBcIi4uLy4uL3J1bGVOYW1lc1wiO1xuaW1wb3J0IHsgU1BFQ0lBTF9UT0tFTl9UWVBFIH0gZnJvbSBcIi4uLy4uL3Rva2VuVHlwZXNcIjtcblxuY29uc3QgeyBmaXJzdCwgc2Vjb25kIH0gPSBhcnJheVV0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29tcGFyaXNvblRlcm1Ob2RlIGV4dGVuZHMgVGVybU5vZGUge1xuICBpc05lZ2F0ZWQoKSB7XG4gICAgbGV0IG5lZ2F0ZWQgPSBmYWxzZTtcblxuICAgIGNvbnN0IHRva2VuVHlwZSA9IFNQRUNJQUxfVE9LRU5fVFlQRTtcblxuICAgIHRoaXMuc29tZVRlcm1pbmFsTm9kZSgodGVybWluYWxOb2RlKSA9PiB7XG4gICAgICBjb25zdCBjb250ZW50ID0gdGVybWluYWxOb2RlLmdldENvbnRlbnQoKTtcblxuICAgICAgaWYgKGNvbnRlbnQgPT09IE5PVF9FUVVBTF9UTykge1xuICAgICAgICBuZWdhdGVkID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSwgdG9rZW5UeXBlKTtcblxuICAgIHJldHVybiBuZWdhdGVkO1xuICB9XG5cbiAgZ2V0VGVybU5vZGVzKCkge1xuICAgIGNvbnN0IHJ1bGVOYW1lID0gVEVSTV9SVUxFX05BTUUsXG4gICAgICAgICAgdGVybU5vZGVzID0gdGhpcy5nZXROb2Rlc0J5UnVsZU5hbWUocnVsZU5hbWUpO1xuXG4gICAgcmV0dXJuIHRlcm1Ob2RlcztcbiAgfVxuXG4gIGdldExlZnRUZXJtTm9kZSgpIHtcbiAgICBjb25zdCBmaXJzdFRlcm1Ob2RlID0gdGhpcy5nZXRGaXJzdFRlcm1Ob2RlKCksXG4gICAgICAgICAgbGVmdFRlcm1Ob2RlID0gZmlyc3RUZXJtTm9kZTsgLy8vXG5cbiAgICByZXR1cm4gbGVmdFRlcm1Ob2RlO1xuICB9XG5cbiAgZ2V0UmlnaHRUZXJtTm9kZSgpIHtcbiAgICBjb25zdCBzZWNvbmRUZXJtTm9kZSA9IHRoaXMuZ2V0U2Vjb25kVGVybU5vZGUoKSxcbiAgICAgICAgICByaWdodFRlcm1Ob2RlID0gc2Vjb25kVGVybU5vZGU7ICAvLy9cblxuICAgIHJldHVybiByaWdodFRlcm1Ob2RlO1xuICB9XG5cbiAgZ2V0Rmlyc3RUZXJtTm9kZSgpIHtcbiAgICBjb25zdCB0ZXJtTm9kZXMgPSB0aGlzLmdldFRlcm1Ob2RlcygpLFxuICAgICAgICAgIGZpcnN0VGVybU5vZGUgPSBmaXJzdCh0ZXJtTm9kZXMpO1xuXG4gICAgcmV0dXJuIGZpcnN0VGVybU5vZGU7XG4gIH1cblxuICBnZXRTZWNvbmRUZXJtTm9kZSgpIHtcbiAgICBjb25zdCB0ZXJtTm9kZXMgPSB0aGlzLmdldFRlcm1Ob2RlcygpLFxuICAgICAgICAgIHNlY29uZFRlcm1Ob2RlID0gc2Vjb25kKHRlcm1Ob2Rlcyk7XG5cbiAgICByZXR1cm4gc2Vjb25kVGVybU5vZGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc09wYWNpdHlBbmRQcmVjZWRlbmNlKHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBvcGFjaXR5LCBwcmVjZWRlbmNlKSB7IHJldHVybiBUZXJtTm9kZS5mcm9tUnVsZU5hbWVDaGlsZE5vZGVzT3BhY2l0eUFuZFByZWNlZGVuY2UoQ29tcGFyaXNvblRlcm1Ob2RlLCBydWxlTmFtZSwgY2hpbGROb2Rlcywgb3BhY2l0eSwgcHJlY2VkZW5jZSk7IH1cbn1cbiJdLCJuYW1lcyI6WyJDb21wYXJpc29uVGVybU5vZGUiLCJmaXJzdCIsImFycmF5VXRpbGl0aWVzIiwic2Vjb25kIiwiaXNOZWdhdGVkIiwibmVnYXRlZCIsInRva2VuVHlwZSIsIlNQRUNJQUxfVE9LRU5fVFlQRSIsInNvbWVUZXJtaW5hbE5vZGUiLCJ0ZXJtaW5hbE5vZGUiLCJjb250ZW50IiwiZ2V0Q29udGVudCIsIk5PVF9FUVVBTF9UTyIsImdldFRlcm1Ob2RlcyIsInJ1bGVOYW1lIiwiVEVSTV9SVUxFX05BTUUiLCJ0ZXJtTm9kZXMiLCJnZXROb2Rlc0J5UnVsZU5hbWUiLCJnZXRMZWZ0VGVybU5vZGUiLCJmaXJzdFRlcm1Ob2RlIiwiZ2V0Rmlyc3RUZXJtTm9kZSIsImxlZnRUZXJtTm9kZSIsImdldFJpZ2h0VGVybU5vZGUiLCJzZWNvbmRUZXJtTm9kZSIsImdldFNlY29uZFRlcm1Ob2RlIiwicmlnaHRUZXJtTm9kZSIsImZyb21SdWxlTmFtZUNoaWxkTm9kZXNPcGFjaXR5QW5kUHJlY2VkZW5jZSIsImNoaWxkTm9kZXMiLCJvcGFjaXR5IiwicHJlY2VkZW5jZSIsIlRlcm1Ob2RlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQVlxQkE7Ozt5QkFWVTsyREFFVjt5QkFFUTt5QkFDRTswQkFDSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVuQyxJQUFRQyxRQUFrQkMseUJBQWMsQ0FBaENELE9BQU9FLFNBQVdELHlCQUFjLENBQXpCQztBQUVBLElBQUEsQUFBTUgsbUNBQU47Y0FBTUE7YUFBQUE7Z0NBQUFBO1FBQU4sT0FBQSxrQkFBTUE7O2tCQUFBQTs7WUFDbkJJLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFJQyxVQUFVO2dCQUVkLElBQU1DLFlBQVlDLDhCQUFrQjtnQkFFcEMsSUFBSSxDQUFDQyxnQkFBZ0IsQ0FBQyxTQUFDQztvQkFDckIsSUFBTUMsVUFBVUQsYUFBYUUsVUFBVTtvQkFFdkMsSUFBSUQsWUFBWUUsdUJBQVksRUFBRTt3QkFDNUJQLFVBQVU7b0JBQ1o7b0JBRUEsT0FBTztnQkFDVCxHQUFHQztnQkFFSCxPQUFPRDtZQUNUOzs7WUFFQVEsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLFdBQVdDLHlCQUFjLEVBQ3pCQyxZQUFZLElBQUksQ0FBQ0Msa0JBQWtCLENBQUNIO2dCQUUxQyxPQUFPRTtZQUNUOzs7WUFFQUUsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLGdCQUFnQixJQUFJLENBQUNDLGdCQUFnQixJQUNyQ0MsZUFBZUYsZUFBZSxHQUFHO2dCQUV2QyxPQUFPRTtZQUNUOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLGlCQUFpQixJQUFJLENBQUNDLGlCQUFpQixJQUN2Q0MsZ0JBQWdCRixnQkFBaUIsR0FBRztnQkFFMUMsT0FBT0U7WUFDVDs7O1lBRUFMLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNSixZQUFZLElBQUksQ0FBQ0gsWUFBWSxJQUM3Qk0sZ0JBQWdCbEIsTUFBTWU7Z0JBRTVCLE9BQU9HO1lBQ1Q7OztZQUVBSyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTVIsWUFBWSxJQUFJLENBQUNILFlBQVksSUFDN0JVLGlCQUFpQnBCLE9BQU9hO2dCQUU5QixPQUFPTztZQUNUOzs7O1lBRU9HLEtBQUFBO21CQUFQLFNBQU9BLDJDQUEyQ1osUUFBUSxFQUFFYSxVQUFVLEVBQUVDLE9BQU8sRUFBRUMsVUFBVTtnQkFBSSxPQUFPQyxhQUFRLENBQUNKLDBDQUEwQyxDQXREdEkxQixvQkFzRDJKYyxVQUFVYSxZQUFZQyxTQUFTQztZQUFhOzs7V0F0RHZNN0I7RUFBMkI4QixhQUFRIn0=