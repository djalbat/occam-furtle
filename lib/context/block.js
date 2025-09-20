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
var _exception = /*#__PURE__*/ _interop_require_default(require("../exception"));
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
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var push = _necessary.arrayUtilities.push;
var BlockContext = /*#__PURE__*/ function() {
    function BlockContext(context, variables) {
        _class_call_check(this, BlockContext);
        this.context = context;
        this.variables = variables;
    }
    _create_class(BlockContext, [
        {
            key: "getContext",
            value: function getContext() {
                return this.context;
            }
        },
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
            key: "findProcedureByReference",
            value: function findProcedureByReference(reference) {
                return this.context.findProcedureByReference(reference);
            }
        },
        {
            key: "isProcedurePresentByReference",
            value: function isProcedurePresentByReference(reference) {
                return this.context.isProcedurePresentByReference(reference);
            }
        },
        {
            key: "findVariableByVariableIdentifier",
            value: function findVariableByVariableIdentifier(variableIdentifier) {
                var nested = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
                var variables = this.getVariables(nested), variable = variables.find(function(variable) {
                    var variableIdentifierMatches = variable.matchVariableIdentifier(variableIdentifier);
                    if (variableIdentifierMatches) {
                        return true;
                    }
                }) || null;
                return variable;
            }
        },
        {
            key: "isVariablePresentByVariableIdentifier",
            value: function isVariablePresentByVariableIdentifier(variableIdentifier) {
                var nested = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
                var variable = this.findVariableByVariableIdentifier(variableIdentifier, nested), variablePresent = variable !== null;
                return variablePresent;
            }
        },
        {
            key: "addVariable",
            value: function addVariable(variable) {
                var nested = false, variableString = variable.getString(), variableIdentifier = variable.getIdentifier(), variablePresent = this.isVariablePresentByVariableIdentifier(variableIdentifier, nested);
                if (variablePresent) {
                    var message = "The '".concat(variableString, "' variable is already present.'"), exception = _exception.default.fromMessage(message);
                    throw exception;
                }
                var context = this;
                context.trace("Added the '".concat(variableString, "' variable to the context."));
                this.variables.push(variable);
            }
        },
        {
            key: "nodeAsString",
            value: function nodeAsString(node) {
                return this.context.nodeAsString(node);
            }
        },
        {
            key: "nodesAsString",
            value: function nodesAsString(node) {
                return this.context.nodesAsString(node);
            }
        },
        {
            key: "trace",
            value: function trace(message) {
                this.context.trace(message);
            }
        },
        {
            key: "debug",
            value: function debug(message) {
                this.context.debug(message);
            }
        },
        {
            key: "info",
            value: function info(message) {
                this.context.info(message);
            }
        },
        {
            key: "warning",
            value: function warning(message) {
                this.context.warning(message);
            }
        },
        {
            key: "error",
            value: function error(message) {
                this.context.error(message);
            }
        }
    ], [
        {
            key: "fromVariables",
            value: function fromVariables(variables, context) {
                var blockContext = new BlockContext(context, variables);
                return blockContext;
            }
        }
    ]);
    return BlockContext;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250ZXh0L2Jsb2NrLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IEV4Y2VwdGlvbiBmcm9tIFwiLi4vZXhjZXB0aW9uXCI7XG5cbmNvbnN0IHsgcHVzaCB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJsb2NrQ29udGV4dCB7XG4gIGNvbnN0cnVjdG9yKGNvbnRleHQsIHZhcmlhYmxlcykge1xuICAgIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XG4gICAgdGhpcy52YXJpYWJsZXMgPSB2YXJpYWJsZXM7XG4gIH1cblxuICBnZXRDb250ZXh0KCkge1xuICAgIHJldHVybiB0aGlzLmNvbnRleHQ7XG4gIH1cblxuICBnZXRWYXJpYWJsZXMobmVzdGVkID0gdHJ1ZSkge1xuICAgIGNvbnN0IHZhcmlhYmxlcyA9IFtdO1xuXG4gICAgcHVzaCh2YXJpYWJsZXMsIHRoaXMudmFyaWFibGVzKTtcblxuICAgIGlmIChuZXN0ZWQpIHtcbiAgICAgIGNvbnN0IGNvbnRleHRWYXJpYWJsZXMgPSB0aGlzLmNvbnRleHQuZ2V0VmFyaWFibGVzKCk7XG5cbiAgICAgIHB1c2godmFyaWFibGVzLCBjb250ZXh0VmFyaWFibGVzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmFyaWFibGVzO1xuICB9XG5cbiAgZmluZFByb2NlZHVyZUJ5UmVmZXJlbmNlKHJlZmVyZW5jZSkgeyByZXR1cm4gdGhpcy5jb250ZXh0LmZpbmRQcm9jZWR1cmVCeVJlZmVyZW5jZShyZWZlcmVuY2UpOyB9XG5cbiAgaXNQcm9jZWR1cmVQcmVzZW50QnlSZWZlcmVuY2UocmVmZXJlbmNlKSB7IHJldHVybiB0aGlzLmNvbnRleHQuaXNQcm9jZWR1cmVQcmVzZW50QnlSZWZlcmVuY2UocmVmZXJlbmNlKTsgfVxuXG4gIGZpbmRWYXJpYWJsZUJ5VmFyaWFibGVJZGVudGlmaWVyKHZhcmlhYmxlSWRlbnRpZmllciwgbmVzdGVkID0gdHJ1ZSkge1xuICAgIGNvbnN0IHZhcmlhYmxlcyA9IHRoaXMuZ2V0VmFyaWFibGVzKG5lc3RlZCksXG4gICAgICAgICAgdmFyaWFibGUgPSB2YXJpYWJsZXMuZmluZCgodmFyaWFibGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHZhcmlhYmxlSWRlbnRpZmllck1hdGNoZXMgPSB2YXJpYWJsZS5tYXRjaFZhcmlhYmxlSWRlbnRpZmllcih2YXJpYWJsZUlkZW50aWZpZXIpO1xuXG4gICAgICAgICAgICBpZiAodmFyaWFibGVJZGVudGlmaWVyTWF0Y2hlcykge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIHZhcmlhYmxlO1xuICB9XG5cbiAgaXNWYXJpYWJsZVByZXNlbnRCeVZhcmlhYmxlSWRlbnRpZmllcih2YXJpYWJsZUlkZW50aWZpZXIsIG5lc3RlZCA9IHRydWUpIHtcbiAgICBjb25zdCB2YXJpYWJsZSA9IHRoaXMuZmluZFZhcmlhYmxlQnlWYXJpYWJsZUlkZW50aWZpZXIodmFyaWFibGVJZGVudGlmaWVyLCBuZXN0ZWQpLFxuICAgICAgICAgIHZhcmlhYmxlUHJlc2VudCA9ICh2YXJpYWJsZSAhPT0gbnVsbCk7XG5cbiAgICByZXR1cm4gdmFyaWFibGVQcmVzZW50O1xuICB9XG5cbiAgYWRkVmFyaWFibGUodmFyaWFibGUpIHtcbiAgICBjb25zdCBuZXN0ZWQgPSBmYWxzZSxcbiAgICAgICAgICB2YXJpYWJsZVN0cmluZyA9IHZhcmlhYmxlLmdldFN0cmluZygpLFxuICAgICAgICAgIHZhcmlhYmxlSWRlbnRpZmllciA9IHZhcmlhYmxlLmdldElkZW50aWZpZXIoKSxcbiAgICAgICAgICB2YXJpYWJsZVByZXNlbnQgPSB0aGlzLmlzVmFyaWFibGVQcmVzZW50QnlWYXJpYWJsZUlkZW50aWZpZXIodmFyaWFibGVJZGVudGlmaWVyLCBuZXN0ZWQpO1xuXG4gICAgaWYgKHZhcmlhYmxlUHJlc2VudCkge1xuICAgICAgY29uc3QgbWVzc2FnZSA9IGBUaGUgJyR7dmFyaWFibGVTdHJpbmd9JyB2YXJpYWJsZSBpcyBhbHJlYWR5IHByZXNlbnQuJ2AsXG4gICAgICAgICAgICBleGNlcHRpb24gPSBFeGNlcHRpb24uZnJvbU1lc3NhZ2UobWVzc2FnZSk7XG5cbiAgICAgIHRocm93IGV4Y2VwdGlvbjtcbiAgICB9XG5cbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcztcblxuICAgIGNvbnRleHQudHJhY2UoYEFkZGVkIHRoZSAnJHt2YXJpYWJsZVN0cmluZ30nIHZhcmlhYmxlIHRvIHRoZSBjb250ZXh0LmApO1xuXG4gICAgdGhpcy52YXJpYWJsZXMucHVzaCh2YXJpYWJsZSk7XG4gIH1cblxuICBub2RlQXNTdHJpbmcobm9kZSkgeyByZXR1cm4gdGhpcy5jb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKTsgfVxuXG4gIG5vZGVzQXNTdHJpbmcobm9kZSkgeyByZXR1cm4gdGhpcy5jb250ZXh0Lm5vZGVzQXNTdHJpbmcobm9kZSk7IH1cblxuICB0cmFjZShtZXNzYWdlKSB7IHRoaXMuY29udGV4dC50cmFjZShtZXNzYWdlKTsgfVxuXG4gIGRlYnVnKG1lc3NhZ2UpIHsgdGhpcy5jb250ZXh0LmRlYnVnKG1lc3NhZ2UpOyB9XG5cbiAgaW5mbyhtZXNzYWdlKSB7IHRoaXMuY29udGV4dC5pbmZvKG1lc3NhZ2UpOyB9XG5cbiAgd2FybmluZyhtZXNzYWdlKSB7IHRoaXMuY29udGV4dC53YXJuaW5nKG1lc3NhZ2UpOyB9XG5cbiAgZXJyb3IobWVzc2FnZSkgeyB0aGlzLmNvbnRleHQuZXJyb3IobWVzc2FnZSk7IH1cblxuICBzdGF0aWMgZnJvbVZhcmlhYmxlcyh2YXJpYWJsZXMsIGNvbnRleHQpIHtcbiAgICBjb25zdCBibG9ja0NvbnRleHQgPSBuZXcgQmxvY2tDb250ZXh0KGNvbnRleHQsIHZhcmlhYmxlcyk7XG5cbiAgICByZXR1cm4gYmxvY2tDb250ZXh0O1xuICB9XG59XG4iXSwibmFtZXMiOlsiQmxvY2tDb250ZXh0IiwicHVzaCIsImFycmF5VXRpbGl0aWVzIiwiY29udGV4dCIsInZhcmlhYmxlcyIsImdldENvbnRleHQiLCJnZXRWYXJpYWJsZXMiLCJuZXN0ZWQiLCJjb250ZXh0VmFyaWFibGVzIiwiZmluZFByb2NlZHVyZUJ5UmVmZXJlbmNlIiwicmVmZXJlbmNlIiwiaXNQcm9jZWR1cmVQcmVzZW50QnlSZWZlcmVuY2UiLCJmaW5kVmFyaWFibGVCeVZhcmlhYmxlSWRlbnRpZmllciIsInZhcmlhYmxlSWRlbnRpZmllciIsInZhcmlhYmxlIiwiZmluZCIsInZhcmlhYmxlSWRlbnRpZmllck1hdGNoZXMiLCJtYXRjaFZhcmlhYmxlSWRlbnRpZmllciIsImlzVmFyaWFibGVQcmVzZW50QnlWYXJpYWJsZUlkZW50aWZpZXIiLCJ2YXJpYWJsZVByZXNlbnQiLCJhZGRWYXJpYWJsZSIsInZhcmlhYmxlU3RyaW5nIiwiZ2V0U3RyaW5nIiwiZ2V0SWRlbnRpZmllciIsIm1lc3NhZ2UiLCJleGNlcHRpb24iLCJFeGNlcHRpb24iLCJmcm9tTWVzc2FnZSIsInRyYWNlIiwibm9kZUFzU3RyaW5nIiwibm9kZSIsIm5vZGVzQXNTdHJpbmciLCJkZWJ1ZyIsImluZm8iLCJ3YXJuaW5nIiwiZXJyb3IiLCJmcm9tVmFyaWFibGVzIiwiYmxvY2tDb250ZXh0Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQVFxQkE7Ozt5QkFOVTtnRUFFVDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV0QixJQUFNLEFBQUVDLE9BQVNDLHlCQUFjLENBQXZCRDtBQUVPLElBQUEsQUFBTUQsNkJBQU47YUFBTUEsYUFDUEcsT0FBTyxFQUFFQyxTQUFTO2dDQURYSjtRQUVqQixJQUFJLENBQUNHLE9BQU8sR0FBR0E7UUFDZixJQUFJLENBQUNDLFNBQVMsR0FBR0E7O2tCQUhBSjs7WUFNbkJLLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxP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