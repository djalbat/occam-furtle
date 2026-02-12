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
var _occamlanguages = require("occam-languages");
var _necessary = require("necessary");
var _exception = /*#__PURE__*/ _interop_require_default(require("../exception"));
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
        return _this;
    }
    _create_class(BlockContext, [
        {
            key: "getVariables",
            value: function getVariables() {
                var nested = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true;
                var variables = [];
                push(variables, this.variables);
                if (nested) {
                    var context = this.getContext(), contextVariables = context.getVariables();
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
                var blockContext = _occamlanguages.Context.fromNothing(BlockContext, variables, context);
                return blockContext;
            }
        }
    ]);
    return BlockContext;
}(_occamlanguages.Context);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250ZXh0L2Jsb2NrLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBDb250ZXh0IH0gZnJvbSBcIm9jY2FtLWxhbmd1YWdlc1wiO1xuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCBFeGNlcHRpb24gZnJvbSBcIi4uL2V4Y2VwdGlvblwiO1xuXG5jb25zdCB7IHB1c2ggfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCbG9ja0NvbnRleHQgZXh0ZW5kcyBDb250ZXh0IHtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgdmFyaWFibGVzKSB7XG4gICAgc3VwZXIoY29udGV4dCk7XG5cbiAgICB0aGlzLnZhcmlhYmxlcyA9IHZhcmlhYmxlcztcbiAgfVxuXG4gIGdldFZhcmlhYmxlcyhuZXN0ZWQgPSB0cnVlKSB7XG4gICAgY29uc3QgdmFyaWFibGVzID0gW107XG5cbiAgICBwdXNoKHZhcmlhYmxlcywgdGhpcy52YXJpYWJsZXMpO1xuXG4gICAgaWYgKG5lc3RlZCkge1xuICAgICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgICAgY29udGV4dFZhcmlhYmxlcyA9IGNvbnRleHQuZ2V0VmFyaWFibGVzKCk7XG5cbiAgICAgIHB1c2godmFyaWFibGVzLCBjb250ZXh0VmFyaWFibGVzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmFyaWFibGVzO1xuICB9XG5cbiAgYWRkVmFyaWFibGUodmFyaWFibGUpIHtcbiAgICBjb25zdCBuZXN0ZWQgPSBmYWxzZSxcbiAgICAgICAgICB2YXJpYWJsZU5hbWUgPSB2YXJpYWJsZS5nZXROYW1lKCksXG4gICAgICAgICAgdmFyaWFibGVTdHJpbmcgPSB2YXJpYWJsZS5nZXRTdHJpbmcoKSxcbiAgICAgICAgICB2YXJpYWJsZVByZXNlbnQgPSB0aGlzLmlzVmFyaWFibGVQcmVzZW50QnlWYXJpYWJsZU5hbWUodmFyaWFibGVOYW1lLCBuZXN0ZWQpO1xuXG4gICAgaWYgKHZhcmlhYmxlUHJlc2VudCkge1xuICAgICAgY29uc3QgbWVzc2FnZSA9IGBUaGUgJyR7dmFyaWFibGVTdHJpbmd9JyB2YXJpYWJsZSBpcyBhbHJlYWR5IHByZXNlbnQuJ2AsXG4gICAgICAgICAgICBleGNlcHRpb24gPSBFeGNlcHRpb24uZnJvbU1lc3NhZ2UobWVzc2FnZSk7XG5cbiAgICAgIHRocm93IGV4Y2VwdGlvbjtcbiAgICB9XG5cbiAgICBjb25zdCBjb250ZXh0ID0gdGhpczsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBBZGRlZCB0aGUgJyR7dmFyaWFibGVTdHJpbmd9JyB2YXJpYWJsZSB0byB0aGUgY29udGV4dC5gKTtcblxuICAgIHRoaXMudmFyaWFibGVzLnB1c2godmFyaWFibGUpO1xuICB9XG5cbiAgZmluZFZhcmlhYmxlQnlWYXJpYWJsZU5hbWUodmFyaWFibGVOYW1lLCBuZXN0ZWQgPSB0cnVlKSB7XG4gICAgY29uc3QgdmFyaWFibGVzID0gdGhpcy5nZXRWYXJpYWJsZXMobmVzdGVkKSxcbiAgICAgICAgICB2YXJpYWJsZSA9IHZhcmlhYmxlcy5maW5kKCh2YXJpYWJsZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdmFyaWFibGVOYW1lTWF0Y2hlcyA9IHZhcmlhYmxlLm1hdGNoVmFyaWFibGVOYW1lKHZhcmlhYmxlTmFtZSk7XG5cbiAgICAgICAgICAgIGlmICh2YXJpYWJsZU5hbWVNYXRjaGVzKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pIHx8IG51bGw7XG5cbiAgICByZXR1cm4gdmFyaWFibGU7XG4gIH1cblxuICBpc1ZhcmlhYmxlUHJlc2VudEJ5VmFyaWFibGVOYW1lKHZhcmlhYmxlTmFtZSwgbmVzdGVkID0gdHJ1ZSkge1xuICAgIGNvbnN0IHZhcmlhYmxlID0gdGhpcy5maW5kVmFyaWFibGVCeVZhcmlhYmxlTmFtZSh2YXJpYWJsZU5hbWUsIG5lc3RlZCksXG4gICAgICAgICAgdmFyaWFibGVQcmVzZW50ID0gKHZhcmlhYmxlICE9PSBudWxsKTtcblxuICAgIHJldHVybiB2YXJpYWJsZVByZXNlbnQ7XG4gIH1cblxuICBzdGF0aWMgZnJvbVZhcmlhYmxlcyh2YXJpYWJsZXMsIGNvbnRleHQpIHtcbiAgICBjb25zdCBibG9ja0NvbnRleHQgPSBDb250ZXh0LmZyb21Ob3RoaW5nKEJsb2NrQ29udGV4dCwgdmFyaWFibGVzLCBjb250ZXh0KVxuXG4gICAgcmV0dXJuIGJsb2NrQ29udGV4dDtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIkJsb2NrQ29udGV4dCIsInB1c2giLCJhcnJheVV0aWxpdGllcyIsImNvbnRleHQiLCJ2YXJpYWJsZXMiLCJnZXRWYXJpYWJsZXMiLCJuZXN0ZWQiLCJnZXRDb250ZXh0IiwiY29udGV4dFZhcmlhYmxlcyIsImFkZFZhcmlhYmxlIiwidmFyaWFibGUiLCJ2YXJpYWJsZU5hbWUiLCJnZXROYW1lIiwidmFyaWFibGVTdHJpbmciLCJnZXRTdHJpbmciLCJ2YXJpYWJsZVByZXNlbnQiLCJpc1ZhcmlhYmxlUHJlc2VudEJ5VmFyaWFibGVOYW1lIiwibWVzc2FnZSIsImV4Y2VwdGlvbiIsIkV4Y2VwdGlvbiIsImZyb21NZXNzYWdlIiwidHJhY2UiLCJmaW5kVmFyaWFibGVCeVZhcmlhYmxlTmFtZSIsImZpbmQiLCJ2YXJpYWJsZU5hbWVNYXRjaGVzIiwibWF0Y2hWYXJpYWJsZU5hbWUiLCJmcm9tVmFyaWFibGVzIiwiYmxvY2tDb250ZXh0IiwiQ29udGV4dCIsImZyb21Ob3RoaW5nIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQVNxQkE7Ozs4QkFQRzt5QkFDTztnRUFFVDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV0QixJQUFNLEFBQUVDLE9BQVNDLHlCQUFjLENBQXZCRDtBQUVPLElBQUEsQUFBTUQsNkJBQU47Y0FBTUE7YUFBQUEsYUFDUEcsT0FBTyxFQUFFQyxTQUFTO2dDQURYSjs7Z0JBRWpCLGtCQUZpQkE7WUFFWEc7O1FBRU4sTUFBS0MsU0FBUyxHQUFHQTs7O2tCQUpBSjs7WUFPbkJLLEtBQUFBO21CQUFBQSxTQUFBQTtvQkFBYUMsU0FBQUEsaUVBQVM7Z0JBQ3BCLElBQU1GLFlBQVksRUFBRTtnQkFFcEJILEtBQUtHLFdBQVcsSUFBSSxDQUFDQSxTQUFTO2dCQUU5QixJQUFJRSxRQUFRO29CQUNWLElBQU1ILFVBQVUsSUFBSSxDQUFDSSxVQUFVLElBQ3pCQyxtQkFBbUJMLFFBQVFFLFlBQVk7b0JBRTdDSixLQUFLRyxXQUFXSTtnQkFDbEI7Z0JBRUEsT0FBT0o7WUFDVDs7O1lBRUFLLEtBQUFBO21CQUFBQSxTQUFBQSxZQUFZQyxRQUFRO2dCQUNsQixJQUFNSixTQUFTLE9BQ1RLLGVBQWVELFNBQVNFLE9BQU8sSUFDL0JDLGlCQUFpQkgsU0FBU0ksU0FBUyxJQUNuQ0Msa0JBQWtCLElBQUksQ0FBQ0MsK0JBQStCLENBQUNMLGNBQWNMO2dCQUUzRSxJQUFJUyxpQkFBaUI7b0JBQ25CLElBQU1FLFVBQVUsQUFBQyxRQUFzQixPQUFmSixnQkFBZSxvQ0FDakNLLFlBQVlDLGtCQUFTLENBQUNDLFdBQVcsQ0FBQ0g7b0JBRXhDLE1BQU1DO2dCQUNSO2dCQUVBLElBQU1mLFVBQVUsSUFBSSxFQUFFLEdBQUc7Z0JBRXpCQSxRQUFRa0IsS0FBSyxDQUFDLEFBQUMsY0FBNEIsT0FBZlIsZ0JBQWU7Z0JBRTNDLElBQUksQ0FBQ1QsU0FBUyxDQUFDSCxJQUFJLENBQUNTO1lBQ3RCOzs7WUFFQVksS0FBQUE7bUJBQUFBLFNBQUFBLDJCQUEyQlgsWUFBWTtvQkFBRUwsU0FBQUEsaUVBQVM7Z0JBQ2hELElBQU1GLFlBQVksSUFBSSxDQUFDQyxZQUFZLENBQUNDLFNBQzlCSSxXQUFXTixVQUFVbUIsSUFBSSxDQUFDLFNBQUNiO29CQUN6QixJQUFNYyxzQkFBc0JkLFNBQVNlLGlCQUFpQixDQUFDZDtvQkFFdkQsSUFBSWEscUJBQXFCO3dCQUN2QixPQUFPO29CQUNUO2dCQUNGLE1BQU07Z0JBRVosT0FBT2Q7WUFDVDs7O1lBRUFNLEtBQUFBO21CQUFBQSxTQUFBQSxnQ0FBZ0NMLFlBQVk7b0JBQUVMLFNBQUFBLGlFQUFTO2dCQUNyRCxJQUFNSSxXQUFXLElBQUksQ0FBQ1ksMEJBQTBCLENBQUNYLGNBQWNMLFNBQ3pEUyxrQkFBbUJMLGFBQWE7Z0JBRXRDLE9BQU9LO1lBQ1Q7Ozs7WUFFT1csS0FBQUE7bUJBQVAsU0FBT0EsY0FBY3RCLFNBQVMsRUFBRUQsT0FBTztnQkFDckMsSUFBTXdCLGVBQWVDLHVCQUFPLENBQUNDLFdBQVcsQ0EvRHZCN0IsY0ErRHNDSSxXQUFXRDtnQkFFbEUsT0FBT3dCO1lBQ1Q7OztXQWxFbUIzQjtFQUFxQjRCLHVCQUFPIn0=