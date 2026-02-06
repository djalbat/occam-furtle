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
            context
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250ZXh0L2Jsb2NrLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IENvbnRleHQgZnJvbSBcIi4uL2NvbnRleHRcIjtcbmltcG9ydCBFeGNlcHRpb24gZnJvbSBcIi4uL2V4Y2VwdGlvblwiO1xuXG5pbXBvcnQgeyBjaGFpbkNvbnRleHQgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2NvbnRleHRcIjtcblxuY29uc3QgeyBwdXNoIH0gPSBhcnJheVV0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmxvY2tDb250ZXh0IGV4dGVuZHMgQ29udGV4dCB7XG4gIGNvbnN0cnVjdG9yKGNvbnRleHQsIHZhcmlhYmxlcykge1xuICAgIHN1cGVyKGNvbnRleHQpO1xuXG4gICAgdGhpcy52YXJpYWJsZXMgPSB2YXJpYWJsZXM7XG5cbiAgICByZXR1cm4gY2hhaW5Db250ZXh0KHRoaXMpO1xuICB9XG5cbiAgZ2V0VmFyaWFibGVzKG5lc3RlZCA9IHRydWUpIHtcbiAgICBjb25zdCB2YXJpYWJsZXMgPSBbXTtcblxuICAgIHB1c2godmFyaWFibGVzLCB0aGlzLnZhcmlhYmxlcyk7XG5cbiAgICBpZiAobmVzdGVkKSB7XG4gICAgICBjb25zdCBjb250ZXh0VmFyaWFibGVzID0gdGhpcy5jb250ZXh0LmdldFZhcmlhYmxlcygpO1xuXG4gICAgICBwdXNoKHZhcmlhYmxlcywgY29udGV4dFZhcmlhYmxlcyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhcmlhYmxlcztcbiAgfVxuXG4gIGFkZFZhcmlhYmxlKHZhcmlhYmxlKSB7XG4gICAgY29uc3QgbmVzdGVkID0gZmFsc2UsXG4gICAgICAgICAgdmFyaWFibGVOYW1lID0gdmFyaWFibGUuZ2V0TmFtZSgpLFxuICAgICAgICAgIHZhcmlhYmxlU3RyaW5nID0gdmFyaWFibGUuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgdmFyaWFibGVQcmVzZW50ID0gdGhpcy5pc1ZhcmlhYmxlUHJlc2VudEJ5VmFyaWFibGVOYW1lKHZhcmlhYmxlTmFtZSwgbmVzdGVkKTtcblxuICAgIGlmICh2YXJpYWJsZVByZXNlbnQpIHtcbiAgICAgIGNvbnN0IG1lc3NhZ2UgPSBgVGhlICcke3ZhcmlhYmxlU3RyaW5nfScgdmFyaWFibGUgaXMgYWxyZWFkeSBwcmVzZW50LidgLFxuICAgICAgICAgICAgZXhjZXB0aW9uID0gRXhjZXB0aW9uLmZyb21NZXNzYWdlKG1lc3NhZ2UpO1xuXG4gICAgICB0aHJvdyBleGNlcHRpb247XG4gICAgfVxuXG4gICAgY29uc3QgY29udGV4dCA9IHRoaXM7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgQWRkZWQgdGhlICcke3ZhcmlhYmxlU3RyaW5nfScgdmFyaWFibGUgdG8gdGhlIGNvbnRleHQuYCk7XG5cbiAgICB0aGlzLnZhcmlhYmxlcy5wdXNoKHZhcmlhYmxlKTtcbiAgfVxuXG4gIGZpbmRWYXJpYWJsZUJ5VmFyaWFibGVOYW1lKHZhcmlhYmxlTmFtZSwgbmVzdGVkID0gdHJ1ZSkge1xuICAgIGNvbnN0IHZhcmlhYmxlcyA9IHRoaXMuZ2V0VmFyaWFibGVzKG5lc3RlZCksXG4gICAgICAgICAgdmFyaWFibGUgPSB2YXJpYWJsZXMuZmluZCgodmFyaWFibGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHZhcmlhYmxlTmFtZU1hdGNoZXMgPSB2YXJpYWJsZS5tYXRjaFZhcmlhYmxlTmFtZSh2YXJpYWJsZU5hbWUpO1xuXG4gICAgICAgICAgICBpZiAodmFyaWFibGVOYW1lTWF0Y2hlcykge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIHZhcmlhYmxlO1xuICB9XG5cbiAgaXNWYXJpYWJsZVByZXNlbnRCeVZhcmlhYmxlTmFtZSh2YXJpYWJsZU5hbWUsIG5lc3RlZCA9IHRydWUpIHtcbiAgICBjb25zdCB2YXJpYWJsZSA9IHRoaXMuZmluZFZhcmlhYmxlQnlWYXJpYWJsZU5hbWUodmFyaWFibGVOYW1lLCBuZXN0ZWQpLFxuICAgICAgICAgIHZhcmlhYmxlUHJlc2VudCA9ICh2YXJpYWJsZSAhPT0gbnVsbCk7XG5cbiAgICByZXR1cm4gdmFyaWFibGVQcmVzZW50O1xuICB9XG5cbiAgc3RhdGljIGZyb21WYXJpYWJsZXModmFyaWFibGVzLCBjb250ZXh0KSB7XG4gICAgY29uc3QgYmxvY2tDb250ZXh0ID0gQ29udGV4dC5mcm9tTm90aGluZyhCbG9ja0NvbnRleHQsIHZhcmlhYmxlcywgY29udGV4dClcblxuICAgIHJldHVybiBibG9ja0NvbnRleHQ7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJCbG9ja0NvbnRleHQiLCJwdXNoIiwiYXJyYXlVdGlsaXRpZXMiLCJjb250ZXh0IiwidmFyaWFibGVzIiwiY2hhaW5Db250ZXh0IiwiZ2V0VmFyaWFibGVzIiwibmVzdGVkIiwiY29udGV4dFZhcmlhYmxlcyIsImFkZFZhcmlhYmxlIiwidmFyaWFibGUiLCJ2YXJpYWJsZU5hbWUiLCJnZXROYW1lIiwidmFyaWFibGVTdHJpbmciLCJnZXRTdHJpbmciLCJ2YXJpYWJsZVByZXNlbnQiLCJpc1ZhcmlhYmxlUHJlc2VudEJ5VmFyaWFibGVOYW1lIiwibWVzc2FnZSIsImV4Y2VwdGlvbiIsIkV4Y2VwdGlvbiIsImZyb21NZXNzYWdlIiwidHJhY2UiLCJmaW5kVmFyaWFibGVCeVZhcmlhYmxlTmFtZSIsImZpbmQiLCJ2YXJpYWJsZU5hbWVNYXRjaGVzIiwibWF0Y2hWYXJpYWJsZU5hbWUiLCJmcm9tVmFyaWFibGVzIiwiYmxvY2tDb250ZXh0IiwiQ29udGV4dCIsImZyb21Ob3RoaW5nIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQVdxQkE7Ozt5QkFUVTs4REFFWDtnRUFDRTt3QkFFTzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU3QixJQUFNLEFBQUVDLE9BQVNDLHlCQUFjLENBQXZCRDtBQUVPLElBQUEsQUFBTUQsNkJBQU47Y0FBTUE7YUFBQUEsYUFDUEcsT0FBTyxFQUFFQyxTQUFTO2dDQURYSjs7Z0JBRWpCLGtCQUZpQkE7WUFFWEc7O1FBRU4sTUFBS0MsU0FBUyxHQUFHQTtRQUVqQiwyQ0FBT0MsSUFBQUEsc0JBQVk7O2tCQU5GTDs7WUFTbkJNLEtBQUFBO21CQUFBQSxTQUFBQTtvQkFBYUMsU0FBQUEsaUVBQVM7Z0JBQ3BCLElBQU1ILFlBQVksRUFBRTtnQkFFcEJILEtBQUtHLFdBQVcsSUFBSSxDQUFDQSxTQUFTO2dCQUU5QixJQUFJRyxRQUFRO29CQUNWLElBQU1DLG1CQUFtQixJQUFJLENBQUNMLE9BQU8sQ0FBQ0csWUFBWTtvQkFFbERMLEtBQUtHLFdBQVdJO2dCQUNsQjtnQkFFQSxPQUFPSjtZQUNUOzs7WUFFQUssS0FBQUE7bUJBQUFBLFNBQUFBLFlBQVlDLFFBQVE7Z0JBQ2xCLElBQU1ILFNBQVMsT0FDVEksZUFBZUQsU0FBU0UsT0FBTyxJQUMvQkMsaUJBQWlCSCxTQUFTSSxTQUFTLElBQ25DQyxrQkFBa0IsSUFBSSxDQUFDQywrQkFBK0IsQ0FBQ0wsY0FBY0o7Z0JBRTNFLElBQUlRLGlCQUFpQjtvQkFDbkIsSUFBTUUsVUFBVSxBQUFDLFFBQXNCLE9BQWZKLGdCQUFlLG9DQUNqQ0ssWUFBWUMsa0JBQVMsQ0FBQ0MsV0FBVyxDQUFDSDtvQkFFeEMsTUFBTUM7Z0JBQ1I7Z0JBRUEsSUFBTWYsVUFBVSxJQUFJLEVBQUUsR0FBRztnQkFFekJBLFFBQVFrQixLQUFLLENBQUMsQUFBQyxjQUE0QixPQUFmUixnQkFBZTtnQkFFM0MsSUFBSSxDQUFDVCxTQUFTLENBQUNILElBQUksQ0FBQ1M7WUFDdEI7OztZQUVBWSxLQUFBQTttQkFBQUEsU0FBQUEsMkJBQTJCWCxZQUFZO29CQUFFSixTQUFBQSxpRUFBUztnQkFDaEQsSUFBTUgsWUFBWSxJQUFJLENBQUNFLFlBQVksQ0FBQ0MsU0FDOUJHLFdBQVdOLFVBQVVtQixJQUFJLENBQUMsU0FBQ2I7b0JBQ3pCLElBQU1jLHNCQUFzQmQsU0FBU2UsaUJBQWlCLENBQUNkO29CQUV2RCxJQUFJYSxxQkFBcUI7d0JBQ3ZCLE9BQU87b0JBQ1Q7Z0JBQ0YsTUFBTTtnQkFFWixPQUFPZDtZQUNUOzs7WUFFQU0sS0FBQUE7bUJBQUFBLFNBQUFBLGdDQUFnQ0wsWUFBWTtvQkFBRUosU0FBQUEsaUVBQVM7Z0JBQ3JELElBQU1HLFdBQVcsSUFBSSxDQUFDWSwwQkFBMEIsQ0FBQ1gsY0FBY0osU0FDekRRLGtCQUFtQkwsYUFBYTtnQkFFdEMsT0FBT0s7WUFDVDs7OztZQUVPVyxLQUFBQTttQkFBUCxTQUFPQSxjQUFjdEIsU0FBUyxFQUFFRCxPQUFPO2dCQUNyQyxJQUFNd0IsZUFBZUMsZ0JBQU8sQ0FBQ0MsV0FBVyxDQWhFdkI3QixjQWdFc0NJLFdBQVdEO2dCQUVsRSxPQUFPd0I7WUFDVDs7O1dBbkVtQjNCO0VBQXFCNEIsZ0JBQU8ifQ==