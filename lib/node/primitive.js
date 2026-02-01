"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return PrimitiveNode;
    }
});
var _nullNode = /*#__PURE__*/ _interop_require_default(require("../nullNode"));
var _nonTerminalNode = /*#__PURE__*/ _interop_require_default(require("../nonTerminalNode"));
var _constants = require("../constants");
var _tokenTypes = require("../tokenTypes");
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
var PrimitiveNode = /*#__PURE__*/ function(NonTerminalNode) {
    _inherits(PrimitiveNode, NonTerminalNode);
    function PrimitiveNode() {
        _class_call_check(this, PrimitiveNode);
        return _call_super(this, PrimitiveNode, arguments);
    }
    _create_class(PrimitiveNode, [
        {
            key: "getNode",
            value: function getNode() {
                var node = null;
                var tokenType = _tokenTypes.NULL_TOKEN_TYPE;
                this.someTerminalNode(function(terminalNode) {
                    var content = terminalNode.getContent();
                    if (content === _constants.NULL) {
                        node = _nullNode.default;
                        return true;
                    }
                }, tokenType);
                return node;
            }
        },
        {
            key: "getNumber",
            value: function getNumber() {
                var number = null;
                var tokenType = _tokenTypes.NUMBER_TOKEN_TYPE; ///
                this.someTerminalNode(function(terminalNode) {
                    var content = terminalNode.getContent();
                    if (content === _constants.TRUE) {
                        number = Number(content);
                        return true;
                    }
                }, tokenType);
                return number;
            }
        },
        {
            key: "getBoolean",
            value: function getBoolean() {
                var boolean = null;
                var tokenType = _tokenTypes.BOOLEAN_TOKEN_TYPE;
                this.someTerminalNode(function(terminalNode) {
                    var content = terminalNode.getContent();
                    if (content === _constants.TRUE) {
                        boolean = true;
                        return true;
                    }
                    if (content === _constants.FALSE) {
                        boolean = false;
                        return true;
                    }
                }, tokenType);
                return boolean;
            }
        },
        {
            key: "getStringLiteral",
            value: function getStringLiteral() {
                var stringLiteral = null;
                var tokenType = _tokenTypes.STRING_LITERAL_TOKEN_TYPE;
                this.someTerminalNode(function(terminalNode) {
                    var content = terminalNode.getContent();
                    stringLiteral = content; ///
                    return true;
                }, tokenType);
                return stringLiteral;
            }
        }
    ], [
        {
            key: "fromRuleNameChildNodesOpacityAndPrecedence",
            value: function fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) {
                return _nonTerminalNode.default.fromRuleNameChildNodesOpacityAndPrecedence(PrimitiveNode, ruleName, childNodes, opacity, precedence);
            }
        }
    ]);
    return PrimitiveNode;
}(_nonTerminalNode.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ub2RlL3ByaW1pdGl2ZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IG51bGxOb2RlIGZyb20gXCIuLi9udWxsTm9kZVwiO1xuaW1wb3J0IE5vblRlcm1pbmFsTm9kZSBmcm9tIFwiLi4vbm9uVGVybWluYWxOb2RlXCI7XG5cbmltcG9ydCB7IE5VTEwsIFRSVUUsIEZBTFNFIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgTlVMTF9UT0tFTl9UWVBFLCBOVU1CRVJfVE9LRU5fVFlQRSwgQk9PTEVBTl9UT0tFTl9UWVBFLCBTVFJJTkdfTElURVJBTF9UT0tFTl9UWVBFIH0gZnJvbSBcIi4uL3Rva2VuVHlwZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJpbWl0aXZlTm9kZSBleHRlbmRzIE5vblRlcm1pbmFsTm9kZSB7XG4gIGdldE5vZGUoKSB7XG4gICAgbGV0IG5vZGUgPSBudWxsO1xuXG4gICAgY29uc3QgdG9rZW5UeXBlID0gTlVMTF9UT0tFTl9UWVBFO1xuXG4gICAgdGhpcy5zb21lVGVybWluYWxOb2RlKCh0ZXJtaW5hbE5vZGUpID0+IHtcbiAgICAgIGNvbnN0IGNvbnRlbnQgPSB0ZXJtaW5hbE5vZGUuZ2V0Q29udGVudCgpO1xuXG4gICAgICBpZiAoY29udGVudCA9PT0gTlVMTCkge1xuICAgICAgICBub2RlID0gbnVsbE5vZGU7XG5cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSwgdG9rZW5UeXBlKTtcblxuICAgIHJldHVybiBub2RlO1xuICB9XG5cbiAgZ2V0TnVtYmVyKCkge1xuICAgIGxldCBudW1iZXIgPSBudWxsO1xuXG4gICAgY29uc3QgdG9rZW5UeXBlID0gTlVNQkVSX1RPS0VOX1RZUEU7IC8vL1xuXG4gICAgdGhpcy5zb21lVGVybWluYWxOb2RlKCh0ZXJtaW5hbE5vZGUpID0+IHtcbiAgICAgIGNvbnN0IGNvbnRlbnQgPSB0ZXJtaW5hbE5vZGUuZ2V0Q29udGVudCgpO1xuXG4gICAgICBpZiAoY29udGVudCA9PT0gVFJVRSkge1xuICAgICAgICBudW1iZXIgPSBOdW1iZXIoY29udGVudCk7XG5cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSwgdG9rZW5UeXBlKTtcblxuICAgIHJldHVybiBudW1iZXI7XG4gIH1cblxuICBnZXRCb29sZWFuKCkge1xuICAgIGxldCBib29sZWFuID0gbnVsbDtcblxuICAgIGNvbnN0IHRva2VuVHlwZSA9IEJPT0xFQU5fVE9LRU5fVFlQRTtcblxuICAgIHRoaXMuc29tZVRlcm1pbmFsTm9kZSgodGVybWluYWxOb2RlKSA9PiB7XG4gICAgICBjb25zdCBjb250ZW50ID0gdGVybWluYWxOb2RlLmdldENvbnRlbnQoKTtcblxuICAgICAgaWYgKGNvbnRlbnQgPT09IFRSVUUpIHtcbiAgICAgICAgYm9vbGVhbiA9IHRydWU7XG5cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChjb250ZW50ID09PSBGQUxTRSkge1xuICAgICAgICBib29sZWFuID0gZmFsc2U7XG5cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSwgdG9rZW5UeXBlKTtcblxuICAgIHJldHVybiBib29sZWFuO1xuICB9XG5cbiAgZ2V0U3RyaW5nTGl0ZXJhbCgpIHtcbiAgICBsZXQgc3RyaW5nTGl0ZXJhbCA9IG51bGw7XG5cbiAgICBjb25zdCB0b2tlblR5cGUgPSBTVFJJTkdfTElURVJBTF9UT0tFTl9UWVBFO1xuXG4gICAgdGhpcy5zb21lVGVybWluYWxOb2RlKCh0ZXJtaW5hbE5vZGUpID0+IHtcbiAgICAgIGNvbnN0IGNvbnRlbnQgPSB0ZXJtaW5hbE5vZGUuZ2V0Q29udGVudCgpO1xuXG4gICAgICBzdHJpbmdMaXRlcmFsID0gY29udGVudDsgIC8vL1xuXG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9LCB0b2tlblR5cGUpO1xuXG4gICAgcmV0dXJuIHN0cmluZ0xpdGVyYWw7XG4gIH1cblxuICBzdGF0aWMgZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc09wYWNpdHlBbmRQcmVjZWRlbmNlKHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBvcGFjaXR5LCBwcmVjZWRlbmNlKSB7IHJldHVybiBOb25UZXJtaW5hbE5vZGUuZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc09wYWNpdHlBbmRQcmVjZWRlbmNlKFByaW1pdGl2ZU5vZGUsIHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBvcGFjaXR5LCBwcmVjZWRlbmNlKTsgfVxufVxuIl0sIm5hbWVzIjpbIlByaW1pdGl2ZU5vZGUiLCJnZXROb2RlIiwibm9kZSIsInRva2VuVHlwZSIsIk5VTExfVE9LRU5fVFlQRSIsInNvbWVUZXJtaW5hbE5vZGUiLCJ0ZXJtaW5hbE5vZGUiLCJjb250ZW50IiwiZ2V0Q29udGVudCIsIk5VTEwiLCJudWxsTm9kZSIsImdldE51bWJlciIsIm51bWJlciIsIk5VTUJFUl9UT0tFTl9UWVBFIiwiVFJVRSIsIk51bWJlciIsImdldEJvb2xlYW4iLCJib29sZWFuIiwiQk9PTEVBTl9UT0tFTl9UWVBFIiwiRkFMU0UiLCJnZXRTdHJpbmdMaXRlcmFsIiwic3RyaW5nTGl0ZXJhbCIsIlNUUklOR19MSVRFUkFMX1RPS0VOX1RZUEUiLCJmcm9tUnVsZU5hbWVDaGlsZE5vZGVzT3BhY2l0eUFuZFByZWNlZGVuY2UiLCJydWxlTmFtZSIsImNoaWxkTm9kZXMiLCJvcGFjaXR5IiwicHJlY2VkZW5jZSIsIk5vblRlcm1pbmFsTm9kZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFRcUJBOzs7K0RBTkE7c0VBQ087eUJBRU07MEJBQ2dFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRW5GLElBQUEsQUFBTUEsOEJBQU47Y0FBTUE7YUFBQUE7Z0NBQUFBO1FBQU4sT0FBQSxrQkFBTUE7O2tCQUFBQTs7WUFDbkJDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFJQyxPQUFPO2dCQUVYLElBQU1DLFlBQVlDLDJCQUFlO2dCQUVqQyxJQUFJLENBQUNDLGdCQUFnQixDQUFDLFNBQUNDO29CQUNyQixJQUFNQyxVQUFVRCxhQUFhRSxVQUFVO29CQUV2QyxJQUFJRCxZQUFZRSxlQUFJLEVBQUU7d0JBQ3BCUCxPQUFPUSxpQkFBUTt3QkFFZixPQUFPO29CQUNUO2dCQUNGLEdBQUdQO2dCQUVILE9BQU9EO1lBQ1Q7OztZQUVBUyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBSUMsU0FBUztnQkFFYixJQUFNVCxZQUFZVSw2QkFBaUIsRUFBRSxHQUFHO2dCQUV4QyxJQUFJLENBQUNSLGdCQUFnQixDQUFDLFNBQUNDO29CQUNyQixJQUFNQyxVQUFVRCxhQUFhRSxVQUFVO29CQUV2QyxJQUFJRCxZQUFZTyxlQUFJLEVBQUU7d0JBQ3BCRixTQUFTRyxPQUFPUjt3QkFFaEIsT0FBTztvQkFDVDtnQkFDRixHQUFHSjtnQkFFSCxPQUFPUztZQUNUOzs7WUFFQUksS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQUlDLFVBQVU7Z0JBRWQsSUFBTWQsWUFBWWUsOEJBQWtCO2dCQUVwQyxJQUFJLENBQUNiLGdCQUFnQixDQUFDLFNBQUNDO29CQUNyQixJQUFNQyxVQUFVRCxhQUFhRSxVQUFVO29CQUV2QyxJQUFJRCxZQUFZTyxlQUFJLEVBQUU7d0JBQ3BCRyxVQUFVO3dCQUVWLE9BQU87b0JBQ1Q7b0JBRUEsSUFBSVYsWUFBWVksZ0JBQUssRUFBRTt3QkFDckJGLFVBQVU7d0JBRVYsT0FBTztvQkFDVDtnQkFDRixHQUFHZDtnQkFFSCxPQUFPYztZQUNUOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQUlDLGdCQUFnQjtnQkFFcEIsSUFBTWxCLFlBQVltQixxQ0FBeUI7Z0JBRTNDLElBQUksQ0FBQ2pCLGdCQUFnQixDQUFDLFNBQUNDO29CQUNyQixJQUFNQyxVQUFVRCxhQUFhRSxVQUFVO29CQUV2Q2EsZ0JBQWdCZCxTQUFVLEdBQUc7b0JBRTdCLE9BQU87Z0JBQ1QsR0FBR0o7Z0JBRUgsT0FBT2tCO1lBQ1Q7Ozs7WUFFT0UsS0FBQUE7bUJBQVAsU0FBT0EsMkNBQTJDQyxRQUFRLEVBQUVDLFVBQVUsRUFBRUMsT0FBTyxFQUFFQyxVQUFVO2dCQUFJLE9BQU9DLHdCQUFlLENBQUNMLDBDQUEwQyxDQTdFN0l2QixlQTZFNkp3QixVQUFVQyxZQUFZQyxTQUFTQztZQUFhOzs7V0E3RXpNM0I7RUFBc0I0Qix3QkFBZSJ9