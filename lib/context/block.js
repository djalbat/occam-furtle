"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return BlockContext;
    }
});
var _necessary = require("necessary");
var _context = /*#__PURE__*/ _interop_require_default(require("../context"));
var _exception = /*#__PURE__*/ _interop_require_default(require("../exception"));
var _context1 = require("../utilities/context");
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
var push = _necessary.arrayUtilities.push;
var BlockContext = /*#__PURE__*/ function(Context) {
    _inherits(BlockContext, Context);
    function BlockContext(context, variables) {
        _class_call_check(this, BlockContext);
        var _this;
        _this = _call_super(this, BlockContext, [
            context,
            variables
        ]);
        _this.variables = variables;
        return _possible_constructor_return(_this, (0, _context1.chainContext)(_this));
    }
    _create_class(BlockContext, [
        {
            key: "getVariables",
            value: function getVariables() {
                var nested = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true;
                var variables = [];
                push(variables, this.variables);
                if (nested) {
                    var contextVariables = this.context.getVariables();
                    push(variables, contextVariables);
                }
                return variables;
            }
        },
        {
            key: "addVariable",
            value: function addVariable(variable) {
                var nested = false, variableName = variable.getName(), variableString = variable.getString(), variablePresent = this.isVariablePresentByVariableName(variableName, nested);
                if (variablePresent) {
                    var message = "The '".concat(variableString, "' variable is already present.'"), exception = _exception.default.fromMessage(message);
                    throw exception;
                }
                var context = this; ///
                context.trace("Added the '".concat(variableString, "' variable to the context."));
                this.variables.push(variable);
            }
        },
        {
            key: "findVariableByVariableName",
            value: function findVariableByVariableName(variableName) {
                var nested = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
                var variables = this.getVariables(nested), variable = variables.find(function(variable) {
                    var variableNameMatches = variable.matchVariableName(variableName);
                    if (variableNameMatches) {
                        return true;
                    }
                }) || null;
                return variable;
            }
        },
        {
            key: "isVariablePresentByVariableName",
            value: function isVariablePresentByVariableName(variableName) {
                var nested = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
                var variable = this.findVariableByVariableName(variableName, nested), variablePresent = variable !== null;
                return variablePresent;
            }
        }
    ], [
        {
            key: "fromVariables",
            value: function fromVariables(variables, context) {
                var blockContext = _context.default.fromNothing(BlockContext, variables, context);
                return blockContext;
            }
        }
    ]);
    return BlockContext;
}(_context.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250ZXh0L2Jsb2NrLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IENvbnRleHQgZnJvbSBcIi4uL2NvbnRleHRcIjtcbmltcG9ydCBFeGNlcHRpb24gZnJvbSBcIi4uL2V4Y2VwdGlvblwiO1xuXG5pbXBvcnQgeyBjaGFpbkNvbnRleHQgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2NvbnRleHRcIjtcblxuY29uc3QgeyBwdXNoIH0gPSBhcnJheVV0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmxvY2tDb250ZXh0IGV4dGVuZHMgQ29udGV4dCB7XG4gIGNvbnN0cnVjdG9yKGNvbnRleHQsIHZhcmlhYmxlcykge1xuICAgIHN1cGVyKGNvbnRleHQsIHZhcmlhYmxlcyk7XG5cbiAgICB0aGlzLnZhcmlhYmxlcyA9IHZhcmlhYmxlcztcblxuICAgIHJldHVybiBjaGFpbkNvbnRleHQodGhpcyk7XG4gIH1cblxuICBnZXRWYXJpYWJsZXMobmVzdGVkID0gdHJ1ZSkge1xuICAgIGNvbnN0IHZhcmlhYmxlcyA9IFtdO1xuXG4gICAgcHVzaCh2YXJpYWJsZXMsIHRoaXMudmFyaWFibGVzKTtcblxuICAgIGlmIChuZXN0ZWQpIHtcbiAgICAgIGNvbnN0IGNvbnRleHRWYXJpYWJsZXMgPSB0aGlzLmNvbnRleHQuZ2V0VmFyaWFibGVzKCk7XG5cbiAgICAgIHB1c2godmFyaWFibGVzLCBjb250ZXh0VmFyaWFibGVzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmFyaWFibGVzO1xuICB9XG5cbiAgYWRkVmFyaWFibGUodmFyaWFibGUpIHtcbiAgICBjb25zdCBuZXN0ZWQgPSBmYWxzZSxcbiAgICAgICAgICB2YXJpYWJsZU5hbWUgPSB2YXJpYWJsZS5nZXROYW1lKCksXG4gICAgICAgICAgdmFyaWFibGVTdHJpbmcgPSB2YXJpYWJsZS5nZXRTdHJpbmcoKSxcbiAgICAgICAgICB2YXJpYWJsZVByZXNlbnQgPSB0aGlzLmlzVmFyaWFibGVQcmVzZW50QnlWYXJpYWJsZU5hbWUodmFyaWFibGVOYW1lLCBuZXN0ZWQpO1xuXG4gICAgaWYgKHZhcmlhYmxlUHJlc2VudCkge1xuICAgICAgY29uc3QgbWVzc2FnZSA9IGBUaGUgJyR7dmFyaWFibGVTdHJpbmd9JyB2YXJpYWJsZSBpcyBhbHJlYWR5IHByZXNlbnQuJ2AsXG4gICAgICAgICAgICBleGNlcHRpb24gPSBFeGNlcHRpb24uZnJvbU1lc3NhZ2UobWVzc2FnZSk7XG5cbiAgICAgIHRocm93IGV4Y2VwdGlvbjtcbiAgICB9XG5cbiAgICBjb25zdCBjb250ZXh0ID0gdGhpczsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBBZGRlZCB0aGUgJyR7dmFyaWFibGVTdHJpbmd9JyB2YXJpYWJsZSB0byB0aGUgY29udGV4dC5gKTtcblxuICAgIHRoaXMudmFyaWFibGVzLnB1c2godmFyaWFibGUpO1xuICB9XG5cbiAgZmluZFZhcmlhYmxlQnlWYXJpYWJsZU5hbWUodmFyaWFibGVOYW1lLCBuZXN0ZWQgPSB0cnVlKSB7XG4gICAgY29uc3QgdmFyaWFibGVzID0gdGhpcy5nZXRWYXJpYWJsZXMobmVzdGVkKSxcbiAgICAgICAgICB2YXJpYWJsZSA9IHZhcmlhYmxlcy5maW5kKCh2YXJpYWJsZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdmFyaWFibGVOYW1lTWF0Y2hlcyA9IHZhcmlhYmxlLm1hdGNoVmFyaWFibGVOYW1lKHZhcmlhYmxlTmFtZSk7XG5cbiAgICAgICAgICAgIGlmICh2YXJpYWJsZU5hbWVNYXRjaGVzKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pIHx8IG51bGw7XG5cbiAgICByZXR1cm4gdmFyaWFibGU7XG4gIH1cblxuICBpc1ZhcmlhYmxlUHJlc2VudEJ5VmFyaWFibGVOYW1lKHZhcmlhYmxlTmFtZSwgbmVzdGVkID0gdHJ1ZSkge1xuICAgIGNvbnN0IHZhcmlhYmxlID0gdGhpcy5maW5kVmFyaWFibGVCeVZhcmlhYmxlTmFtZSh2YXJpYWJsZU5hbWUsIG5lc3RlZCksXG4gICAgICAgICAgdmFyaWFibGVQcmVzZW50ID0gKHZhcmlhYmxlICE9PSBudWxsKTtcblxuICAgIHJldHVybiB2YXJpYWJsZVByZXNlbnQ7XG4gIH1cblxuICBzdGF0aWMgZnJvbVZhcmlhYmxlcyh2YXJpYWJsZXMsIGNvbnRleHQpIHtcbiAgICBjb25zdCBibG9ja0NvbnRleHQgPSBDb250ZXh0LmZyb21Ob3RoaW5nKEJsb2NrQ29udGV4dCwgdmFyaWFibGVzLCBjb250ZXh0KVxuXG4gICAgcmV0dXJuIGJsb2NrQ29udGV4dDtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIkJsb2NrQ29udGV4dCIsInB1c2giLCJhcnJheVV0aWxpdGllcyIsImNvbnRleHQiLCJ2YXJpYWJsZXMiLCJjaGFpbkNvbnRleHQiLCJnZXRWYXJpYWJsZXMiLCJuZXN0ZWQiLCJjb250ZXh0VmFyaWFibGVzIiwiYWRkVmFyaWFibGUiLCJ2YXJpYWJsZSIsInZhcmlhYmxlTmFtZSIsImdldE5hbWUiLCJ2YXJpYWJsZVN0cmluZyIsImdldFN0cmluZyIsInZhcmlhYmxlUHJlc2VudCIsImlzVmFyaWFibGVQcmVzZW50QnlWYXJpYWJsZU5hbWUiLCJtZXNzYWdlIiwiZXhjZXB0aW9uIiwiRXhjZXB0aW9uIiwiZnJvbU1lc3NhZ2UiLCJ0cmFjZSIsImZpbmRWYXJpYWJsZUJ5VmFyaWFibGVOYW1lIiwiZmluZCIsInZhcmlhYmxlTmFtZU1hdGNoZXMiLCJtYXRjaFZhcmlhYmxlTmFtZSIsImZyb21WYXJpYWJsZXMiLCJibG9ja0NvbnRleHQiLCJDb250ZXh0IiwiZnJvbU5vdGhpbmciXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBV3FCQTs7O3lCQVRVOzhEQUVYO2dFQUNFO3dCQUVPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTdCLElBQU0sQUFBRUMsT0FBU0MseUJBQWMsQ0FBdkJEO0FBRU8sSUFBQSxBQUFNRCw2QkFBTjtjQUFNQTthQUFBQSxhQUNQRyxPQUFPLEVBQUVDLFNBQVM7Z0NBRFhKOztnQkFFakIsa0JBRmlCQTtZQUVYRztZQUFTQzs7UUFFZixNQUFLQSxTQUFTLEdBQUdBO1FBRWpCLDJDQUFPQyxJQUFBQSxzQkFBWTs7a0JBTkZMOztZQVNuQk0sS0FBQUE7bUJBQUFBLFNBQUFBO29CQUFhQyxTQUFBQSxpRUFBUztnQkFDcEIsSUFBTUgsWUFBWSxFQUFFO2dCQUVwQkgsS0FBS0csV0FBVyxJQUFJLENBQUNBLFNBQVM7Z0JBRTlCLElBQUlHLFFBQVE7b0JBQ1YsSUFBTUMsbUJBQW1CLElBQUksQ0FBQ0wsT0FBTyxDQUFDRyxZQUFZO29CQUVsREwsS0FBS0csV0FBV0k7Z0JBQ2xCO2dCQUVBLE9BQU9KO1lBQ1Q7OztZQUVBSyxLQUFBQTttQkFBQUEsU0FBQUEsWUFBWUMsUUFBUTtnQkFDbEIsSUFBTUgsU0FBUyxPQUNUSSxlQUFlRCxTQUFTRSxPQUFPLElBQy9CQyxpQkFBaUJILFNBQVNJLFNBQVMsSUFDbkNDLGtCQUFrQixJQUFJLENBQUNDLCtCQUErQixDQUFDTCxjQUFjSjtnQkFFM0UsSUFBSVEsaUJBQWlCO29CQUNuQixJQUFNRSxVQUFVLEFBQUMsUUFBc0IsT0FBZkosZ0JBQWUsb0NBQ2pDSyxZQUFZQyxrQkFBUyxDQUFDQyxXQUFXLENBQUNIO29CQUV4QyxNQUFNQztnQkFDUjtnQkFFQSxJQUFNZixVQUFVLElBQUksRUFBRSxHQUFHO2dCQUV6QkEsUUFBUWtCLEtBQUssQ0FBQyxBQUFDLGNBQTRCLE9BQWZSLGdCQUFlO2dCQUUzQyxJQUFJLENBQUNULFNBQVMsQ0FBQ0gsSUFBSSxDQUFDUztZQUN0Qjs7O1lBRUFZLEtBQUFBO21CQUFBQSxTQUFBQSwyQkFBMkJYLFlBQVk7b0JBQUVKLFNBQUFBLGlFQUFTO2dCQUNoRCxJQUFNSCxZQUFZLElBQUksQ0FBQ0UsWUFBWSxDQUFDQyxTQUM5QkcsV0FBV04sVUFBVW1CLElBQUksQ0FBQyxTQUFDYjtvQkFDekIsSUFBTWMsc0JBQXNCZCxTQUFTZSxpQkFBaUIsQ0FBQ2Q7b0JBRXZELElBQUlhLHFCQUFxQjt3QkFDdkIsT0FBTztvQkFDVDtnQkFDRixNQUFNO2dCQUVaLE9BQU9kO1lBQ1Q7OztZQUVBTSxLQUFBQTttQkFBQUEsU0FBQUEsZ0NBQWdDTCxZQUFZO29CQUFFSixTQUFBQSxpRUFBUztnQkFDckQsSUFBTUcsV0FBVyxJQUFJLENBQUNZLDBCQUEwQixDQUFDWCxjQUFjSixTQUN6RFEsa0JBQW1CTCxhQUFhO2dCQUV0QyxPQUFPSztZQUNUOzs7O1lBRU9XLEtBQUFBO21CQUFQLFNBQU9BLGNBQWN0QixTQUFTLEVBQUVELE9BQU87Z0JBQ3JDLElBQU13QixlQUFlQyxnQkFBTyxDQUFDQyxXQUFXLENBaEV2QjdCLGNBZ0VzQ0ksV0FBV0Q7Z0JBRWxFLE9BQU93QjtZQUNUOzs7V0FuRW1CM0I7RUFBcUI0QixnQkFBTyJ9