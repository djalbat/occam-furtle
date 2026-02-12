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
            key: "findProcedureByName",
            value: function findProcedureByName(name) {
                var context = this.getContext(), procedure = context.findProcedureByName(name);
                return procedure;
            }
        },
        {
            key: "isProcedurePresentByName",
            value: function isProcedurePresentByName(name) {
                var context = this.getContext(), procedurePresent = context.isProcedurePresentByName(name);
                return procedurePresent;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250ZXh0L2Jsb2NrLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBDb250ZXh0IH0gZnJvbSBcIm9jY2FtLWxhbmd1YWdlc1wiO1xuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCBFeGNlcHRpb24gZnJvbSBcIi4uL2V4Y2VwdGlvblwiO1xuXG5jb25zdCB7IHB1c2ggfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCbG9ja0NvbnRleHQgZXh0ZW5kcyBDb250ZXh0IHtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgdmFyaWFibGVzKSB7XG4gICAgc3VwZXIoY29udGV4dCk7XG5cbiAgICB0aGlzLnZhcmlhYmxlcyA9IHZhcmlhYmxlcztcbiAgfVxuXG4gIGdldFZhcmlhYmxlcyhuZXN0ZWQgPSB0cnVlKSB7XG4gICAgY29uc3QgdmFyaWFibGVzID0gW107XG5cbiAgICBwdXNoKHZhcmlhYmxlcywgdGhpcy52YXJpYWJsZXMpO1xuXG4gICAgaWYgKG5lc3RlZCkge1xuICAgICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgICAgY29udGV4dFZhcmlhYmxlcyA9IGNvbnRleHQuZ2V0VmFyaWFibGVzKCk7XG5cbiAgICAgIHB1c2godmFyaWFibGVzLCBjb250ZXh0VmFyaWFibGVzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmFyaWFibGVzO1xuICB9XG5cbiAgYWRkVmFyaWFibGUodmFyaWFibGUpIHtcbiAgICBjb25zdCBuZXN0ZWQgPSBmYWxzZSxcbiAgICAgICAgICB2YXJpYWJsZU5hbWUgPSB2YXJpYWJsZS5nZXROYW1lKCksXG4gICAgICAgICAgdmFyaWFibGVTdHJpbmcgPSB2YXJpYWJsZS5nZXRTdHJpbmcoKSxcbiAgICAgICAgICB2YXJpYWJsZVByZXNlbnQgPSB0aGlzLmlzVmFyaWFibGVQcmVzZW50QnlWYXJpYWJsZU5hbWUodmFyaWFibGVOYW1lLCBuZXN0ZWQpO1xuXG4gICAgaWYgKHZhcmlhYmxlUHJlc2VudCkge1xuICAgICAgY29uc3QgbWVzc2FnZSA9IGBUaGUgJyR7dmFyaWFibGVTdHJpbmd9JyB2YXJpYWJsZSBpcyBhbHJlYWR5IHByZXNlbnQuJ2AsXG4gICAgICAgICAgICBleGNlcHRpb24gPSBFeGNlcHRpb24uZnJvbU1lc3NhZ2UobWVzc2FnZSk7XG5cbiAgICAgIHRocm93IGV4Y2VwdGlvbjtcbiAgICB9XG5cbiAgICBjb25zdCBjb250ZXh0ID0gdGhpczsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBBZGRlZCB0aGUgJyR7dmFyaWFibGVTdHJpbmd9JyB2YXJpYWJsZSB0byB0aGUgY29udGV4dC5gKTtcblxuICAgIHRoaXMudmFyaWFibGVzLnB1c2godmFyaWFibGUpO1xuICB9XG5cbiAgZmluZFByb2NlZHVyZUJ5TmFtZShuYW1lKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIHByb2NlZHVyZSA9IGNvbnRleHQuZmluZFByb2NlZHVyZUJ5TmFtZShuYW1lKTtcblxuICAgIHJldHVybiBwcm9jZWR1cmU7XG4gIH1cblxuICBpc1Byb2NlZHVyZVByZXNlbnRCeU5hbWUobmFtZSkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICBwcm9jZWR1cmVQcmVzZW50ID0gY29udGV4dC5pc1Byb2NlZHVyZVByZXNlbnRCeU5hbWUobmFtZSk7XG5cbiAgICByZXR1cm4gcHJvY2VkdXJlUHJlc2VudDtcbiAgfVxuXG4gIGZpbmRWYXJpYWJsZUJ5VmFyaWFibGVOYW1lKHZhcmlhYmxlTmFtZSwgbmVzdGVkID0gdHJ1ZSkge1xuICAgIGNvbnN0IHZhcmlhYmxlcyA9IHRoaXMuZ2V0VmFyaWFibGVzKG5lc3RlZCksXG4gICAgICAgICAgdmFyaWFibGUgPSB2YXJpYWJsZXMuZmluZCgodmFyaWFibGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHZhcmlhYmxlTmFtZU1hdGNoZXMgPSB2YXJpYWJsZS5tYXRjaFZhcmlhYmxlTmFtZSh2YXJpYWJsZU5hbWUpO1xuXG4gICAgICAgICAgICBpZiAodmFyaWFibGVOYW1lTWF0Y2hlcykge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIHZhcmlhYmxlO1xuICB9XG5cbiAgaXNWYXJpYWJsZVByZXNlbnRCeVZhcmlhYmxlTmFtZSh2YXJpYWJsZU5hbWUsIG5lc3RlZCA9IHRydWUpIHtcbiAgICBjb25zdCB2YXJpYWJsZSA9IHRoaXMuZmluZFZhcmlhYmxlQnlWYXJpYWJsZU5hbWUodmFyaWFibGVOYW1lLCBuZXN0ZWQpLFxuICAgICAgICAgIHZhcmlhYmxlUHJlc2VudCA9ICh2YXJpYWJsZSAhPT0gbnVsbCk7XG5cbiAgICByZXR1cm4gdmFyaWFibGVQcmVzZW50O1xuICB9XG5cbiAgc3RhdGljIGZyb21WYXJpYWJsZXModmFyaWFibGVzLCBjb250ZXh0KSB7XG4gICAgY29uc3QgYmxvY2tDb250ZXh0ID0gQ29udGV4dC5mcm9tTm90aGluZyhCbG9ja0NvbnRleHQsIHZhcmlhYmxlcywgY29udGV4dClcblxuICAgIHJldHVybiBibG9ja0NvbnRleHQ7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJCbG9ja0NvbnRleHQiLCJwdXNoIiwiYXJyYXlVdGlsaXRpZXMiLCJjb250ZXh0IiwidmFyaWFibGVzIiwiZ2V0VmFyaWFibGVzIiwibmVzdGVkIiwiZ2V0Q29udGV4dCIsImNvbnRleHRWYXJpYWJsZXMiLCJhZGRWYXJpYWJsZSIsInZhcmlhYmxlIiwidmFyaWFibGVOYW1lIiwiZ2V0TmFtZSIsInZhcmlhYmxlU3RyaW5nIiwiZ2V0U3RyaW5nIiwidmFyaWFibGVQcmVzZW50IiwiaXNWYXJpYWJsZVByZXNlbnRCeVZhcmlhYmxlTmFtZSIsIm1lc3NhZ2UiLCJleGNlcHRpb24iLCJFeGNlcHRpb24iLCJmcm9tTWVzc2FnZSIsInRyYWNlIiwiZmluZFByb2NlZHVyZUJ5TmFtZSIsIm5hbWUiLCJwcm9jZWR1cmUiLCJpc1Byb2NlZHVyZVByZXNlbnRCeU5hbWUiLCJwcm9jZWR1cmVQcmVzZW50IiwiZmluZFZhcmlhYmxlQnlWYXJpYWJsZU5hbWUiLCJmaW5kIiwidmFyaWFibGVOYW1lTWF0Y2hlcyIsIm1hdGNoVmFyaWFibGVOYW1lIiwiZnJvbVZhcmlhYmxlcyIsImJsb2NrQ29udGV4dCIsIkNvbnRleHQiLCJmcm9tTm90aGluZyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFTcUJBOzs7OEJBUEc7eUJBQ087Z0VBRVQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFdEIsSUFBTSxBQUFFQyxPQUFTQyx5QkFBYyxDQUF2QkQ7QUFFTyxJQUFBLEFBQU1ELDZCQUFOO2NBQU1BO2FBQUFBLGFBQ1BHLE9BQU8sRUFBRUMsU0FBUztnQ0FEWEo7O2dCQUVqQixrQkFGaUJBO1lBRVhHOztRQUVOLE1BQUtDLFNBQVMsR0FBR0E7OztrQkFKQUo7O1lBT25CSyxLQUFBQTttQkFBQUEsU0FBQUE7b0JBQWFDLFNBQUFBLGlFQUFTO2dCQUNwQixJQUFNRixZQUFZLEVBQUU7Z0JBRXBCSCxLQUFLRyxXQUFXLElBQUksQ0FBQ0EsU0FBUztnQkFFOUIsSUFBSUUsUUFBUTtvQkFDVixJQUFNSCxVQUFVLElBQUksQ0FBQ0ksVUFBVSxJQUN6QkMsbUJBQW1CTCxRQUFRRSxZQUFZO29CQUU3Q0osS0FBS0csV0FBV0k7Z0JBQ2xCO2dCQUVBLE9BQU9KO1lBQ1Q7OztZQUVBSyxLQUFBQTttQkFBQUEsU0FBQUEsWUFBWUMsUUFBUTtnQkFDbEIsSUFBTUosU0FBUyxPQUNUSyxlQUFlRCxTQUFTRSxPQUFPLElBQy9CQyxpQkFBaUJILFNBQVNJLFNBQVMsSUFDbkNDLGtCQUFrQixJQUFJLENBQUNDLCtCQUErQixDQUFDTCxjQUFjTDtnQkFFM0UsSUFBSVMsaUJBQWlCO29CQUNuQixJQUFNRSxVQUFVLEFBQUMsUUFBc0IsT0FBZkosZ0JBQWUsb0NBQ2pDSyxZQUFZQyxrQkFBUyxDQUFDQyxXQUFXLENBQUNIO29CQUV4QyxNQUFNQztnQkFDUjtnQkFFQSxJQUFNZixVQUFVLElBQUksRUFBRSxHQUFHO2dCQUV6QkEsUUFBUWtCLEtBQUssQ0FBQyxBQUFDLGNBQTRCLE9BQWZSLGdCQUFlO2dCQUUzQyxJQUFJLENBQUNULFNBQVMsQ0FBQ0gsSUFBSSxDQUFDUztZQUN0Qjs7O1lBRUFZLEtBQUFBO21CQUFBQSxTQUFBQSxvQkFBb0JDLElBQUk7Z0JBQ3RCLElBQU1wQixVQUFVLElBQUksQ0FBQ0ksVUFBVSxJQUN6QmlCLFlBQVlyQixRQUFRbUIsbUJBQW1CLENBQUNDO2dCQUU5QyxPQUFPQztZQUNUOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBLHlCQUF5QkYsSUFBSTtnQkFDM0IsSUFBTXBCLFVBQVUsSUFBSSxDQUFDSSxVQUFVLElBQ3pCbUIsbUJBQW1CdkIsUUFBUXNCLHdCQUF3QixDQUFDRjtnQkFFMUQsT0FBT0c7WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQSwyQkFBMkJoQixZQUFZO29CQUFFTCxTQUFBQSxpRUFBUztnQkFDaEQsSUFBTUYsWUFBWSxJQUFJLENBQUNDLFlBQVksQ0FBQ0MsU0FDOUJJLFdBQVdOLFVBQVV3QixJQUFJLENBQUMsU0FBQ2xCO29CQUN6QixJQUFNbUIsc0JBQXNCbkIsU0FBU29CLGlCQUFpQixDQUFDbkI7b0JBRXZELElBQUlrQixxQkFBcUI7d0JBQ3ZCLE9BQU87b0JBQ1Q7Z0JBQ0YsTUFBTTtnQkFFWixPQUFPbkI7WUFDVDs7O1lBRUFNLEtBQUFBO21CQUFBQSxTQUFBQSxnQ0FBZ0NMLFlBQVk7b0JBQUVMLFNBQUFBLGlFQUFTO2dCQUNyRCxJQUFNSSxXQUFXLElBQUksQ0FBQ2lCLDBCQUEwQixDQUFDaEIsY0FBY0wsU0FDekRTLGtCQUFtQkwsYUFBYTtnQkFFdEMsT0FBT0s7WUFDVDs7OztZQUVPZ0IsS0FBQUE7bUJBQVAsU0FBT0EsY0FBYzNCLFNBQVMsRUFBRUQsT0FBTztnQkFDckMsSUFBTTZCLGVBQWVDLHVCQUFPLENBQUNDLFdBQVcsQ0E3RXZCbEMsY0E2RXNDSSxXQUFXRDtnQkFFbEUsT0FBTzZCO1lBQ1Q7OztXQWhGbUJoQztFQUFxQmlDLHVCQUFPIn0=