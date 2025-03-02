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
            key: "getFileContext",
            value: function getFileContext() {
                return this.context.getFileContext();
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
        },
        {
            key: "addVariable",
            value: function addVariable(variable) {
                var nested = false, variableName = variable.getName(), variableString = variable.getString(), variablePresent = this.isVariablePresentByVariableName(variableName, nested);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250ZXh0L2Jsb2NrLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IEV4Y2VwdGlvbiBmcm9tIFwiLi4vZXhjZXB0aW9uXCI7XG5cbmNvbnN0IHsgcHVzaCB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJsb2NrQ29udGV4dCB7XG4gIGNvbnN0cnVjdG9yKGNvbnRleHQsIHZhcmlhYmxlcykge1xuICAgIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XG4gICAgdGhpcy52YXJpYWJsZXMgPSB2YXJpYWJsZXM7XG4gIH1cblxuICBnZXRDb250ZXh0KCkge1xuICAgIHJldHVybiB0aGlzLmNvbnRleHQ7XG4gIH1cblxuICBnZXRWYXJpYWJsZXMobmVzdGVkID0gdHJ1ZSkge1xuICAgIGNvbnN0IHZhcmlhYmxlcyA9IFtdO1xuXG4gICAgcHVzaCh2YXJpYWJsZXMsIHRoaXMudmFyaWFibGVzKTtcblxuICAgIGlmIChuZXN0ZWQpIHtcbiAgICAgIGNvbnN0IGNvbnRleHRWYXJpYWJsZXMgPSB0aGlzLmNvbnRleHQuZ2V0VmFyaWFibGVzKCk7XG5cbiAgICAgIHB1c2godmFyaWFibGVzLCBjb250ZXh0VmFyaWFibGVzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmFyaWFibGVzO1xuICB9XG5cbiAgZ2V0RmlsZUNvbnRleHQoKSB7IHJldHVybiB0aGlzLmNvbnRleHQuZ2V0RmlsZUNvbnRleHQoKTsgfVxuXG4gIGZpbmRQcm9jZWR1cmVCeVJlZmVyZW5jZShyZWZlcmVuY2UpIHsgcmV0dXJuIHRoaXMuY29udGV4dC5maW5kUHJvY2VkdXJlQnlSZWZlcmVuY2UocmVmZXJlbmNlKTsgfVxuXG4gIGlzUHJvY2VkdXJlUHJlc2VudEJ5UmVmZXJlbmNlKHJlZmVyZW5jZSkgeyByZXR1cm4gdGhpcy5jb250ZXh0LmlzUHJvY2VkdXJlUHJlc2VudEJ5UmVmZXJlbmNlKHJlZmVyZW5jZSk7IH1cblxuICBmaW5kVmFyaWFibGVCeVZhcmlhYmxlTmFtZSh2YXJpYWJsZU5hbWUsIG5lc3RlZCA9IHRydWUpIHtcbiAgICBjb25zdCB2YXJpYWJsZXMgPSB0aGlzLmdldFZhcmlhYmxlcyhuZXN0ZWQpLFxuICAgICAgICAgIHZhcmlhYmxlID0gdmFyaWFibGVzLmZpbmQoKHZhcmlhYmxlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB2YXJpYWJsZU5hbWVNYXRjaGVzID0gdmFyaWFibGUubWF0Y2hWYXJpYWJsZU5hbWUodmFyaWFibGVOYW1lKTtcblxuICAgICAgICAgICAgaWYgKHZhcmlhYmxlTmFtZU1hdGNoZXMpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSkgfHwgbnVsbDtcblxuICAgIHJldHVybiB2YXJpYWJsZTtcbiAgfVxuXG4gIGlzVmFyaWFibGVQcmVzZW50QnlWYXJpYWJsZU5hbWUodmFyaWFibGVOYW1lLCBuZXN0ZWQgPSB0cnVlKSB7XG4gICAgY29uc3QgdmFyaWFibGUgPSB0aGlzLmZpbmRWYXJpYWJsZUJ5VmFyaWFibGVOYW1lKHZhcmlhYmxlTmFtZSwgbmVzdGVkKSxcbiAgICAgICAgICB2YXJpYWJsZVByZXNlbnQgPSAodmFyaWFibGUgIT09IG51bGwpO1xuXG4gICAgcmV0dXJuIHZhcmlhYmxlUHJlc2VudDtcbiAgfVxuXG4gIGFkZFZhcmlhYmxlKHZhcmlhYmxlKSB7XG4gICAgY29uc3QgbmVzdGVkID0gZmFsc2UsXG4gICAgICAgICAgdmFyaWFibGVOYW1lID0gdmFyaWFibGUuZ2V0TmFtZSgpLFxuICAgICAgICAgIHZhcmlhYmxlU3RyaW5nID0gdmFyaWFibGUuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgdmFyaWFibGVQcmVzZW50ID0gdGhpcy5pc1ZhcmlhYmxlUHJlc2VudEJ5VmFyaWFibGVOYW1lKHZhcmlhYmxlTmFtZSwgbmVzdGVkKTtcblxuICAgIGlmICh2YXJpYWJsZVByZXNlbnQpIHtcbiAgICAgIGNvbnN0IG1lc3NhZ2UgPSBgVGhlICcke3ZhcmlhYmxlU3RyaW5nfScgdmFyaWFibGUgaXMgYWxyZWFkeSBwcmVzZW50LidgLFxuICAgICAgICAgICAgZXhjZXB0aW9uID0gRXhjZXB0aW9uLmZyb21NZXNzYWdlKG1lc3NhZ2UpO1xuXG4gICAgICB0aHJvdyBleGNlcHRpb247XG4gICAgfVxuXG4gICAgY29uc3QgY29udGV4dCA9IHRoaXM7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBBZGRlZCB0aGUgJyR7dmFyaWFibGVTdHJpbmd9JyB2YXJpYWJsZSB0byB0aGUgY29udGV4dC5gKTtcblxuICAgIHRoaXMudmFyaWFibGVzLnB1c2godmFyaWFibGUpO1xuICB9XG5cbiAgbm9kZUFzU3RyaW5nKG5vZGUpIHsgcmV0dXJuIHRoaXMuY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSk7IH1cblxuICBub2Rlc0FzU3RyaW5nKG5vZGUpIHsgcmV0dXJuIHRoaXMuY29udGV4dC5ub2Rlc0FzU3RyaW5nKG5vZGUpOyB9XG5cbiAgdHJhY2UobWVzc2FnZSkgeyB0aGlzLmNvbnRleHQudHJhY2UobWVzc2FnZSk7IH1cblxuICBkZWJ1ZyhtZXNzYWdlKSB7IHRoaXMuY29udGV4dC5kZWJ1ZyhtZXNzYWdlKTsgfVxuXG4gIGluZm8obWVzc2FnZSkgeyB0aGlzLmNvbnRleHQuaW5mbyhtZXNzYWdlKTsgfVxuXG4gIHdhcm5pbmcobWVzc2FnZSkgeyB0aGlzLmNvbnRleHQud2FybmluZyhtZXNzYWdlKTsgfVxuXG4gIGVycm9yKG1lc3NhZ2UpIHsgdGhpcy5jb250ZXh0LmVycm9yKG1lc3NhZ2UpOyB9XG5cbiAgc3RhdGljIGZyb21WYXJpYWJsZXModmFyaWFibGVzLCBjb250ZXh0KSB7XG4gICAgY29uc3QgYmxvY2tDb250ZXh0ID0gbmV3IEJsb2NrQ29udGV4dChjb250ZXh0LCB2YXJpYWJsZXMpO1xuXG4gICAgcmV0dXJuIGJsb2NrQ29udGV4dDtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIkJsb2NrQ29udGV4dCIsInB1c2giLCJhcnJheVV0aWxpdGllcyIsImNvbnRleHQiLCJ2YXJpYWJsZXMiLCJnZXRDb250ZXh0IiwiZ2V0VmFyaWFibGVzIiwibmVzdGVkIiwiY29udGV4dFZhcmlhYmxlcyIsImdldEZpbGVDb250ZXh0IiwiZmluZFByb2NlZHVyZUJ5UmVmZXJlbmNlIiwicmVmZXJlbmNlIiwiaXNQcm9jZWR1cmVQcmVzZW50QnlSZWZlcmVuY2UiLCJmaW5kVmFyaWFibGVCeVZhcmlhYmxlTmFtZSIsInZhcmlhYmxlTmFtZSIsInZhcmlhYmxlIiwiZmluZCIsInZhcmlhYmxlTmFtZU1hdGNoZXMiLCJtYXRjaFZhcmlhYmxlTmFtZSIsImlzVmFyaWFibGVQcmVzZW50QnlWYXJpYWJsZU5hbWUiLCJ2YXJpYWJsZVByZXNlbnQiLCJhZGRWYXJpYWJsZSIsImdldE5hbWUiLCJ2YXJpYWJsZVN0cmluZyIsImdldFN0cmluZyIsIm1lc3NhZ2UiLCJleGNlcHRpb24iLCJFeGNlcHRpb24iLCJmcm9tTWVzc2FnZSIsInRyYWNlIiwibm9kZUFzU3RyaW5nIiwibm9kZSIsIm5vZGVzQXNTdHJpbmciLCJkZWJ1ZyIsImluZm8iLCJ3YXJuaW5nIiwiZXJyb3IiLCJmcm9tVmFyaWFibGVzIiwiYmxvY2tDb250ZXh0Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQVFxQkE7Ozt5QkFOVTtnRUFFVDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV0QixJQUFNLEFBQUVDLE9BQVNDLHlCQUFjLENBQXZCRDtBQUVPLElBQUEsQUFBTUQsNkJBQU47YUFBTUEsYUFDUEcsT0FBTyxFQUFFQyxTQUFTO2dDQURYSjtRQUVqQixJQUFJLENBQUNHLE9BQU8sR0FBR0E7UUFDZixJQUFJLENBQUNDLFNBQVMsR0FBR0E7O2tCQUhBSjs7WUFNbkJLLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0YsT0FBTztZQUNyQjs7O1lBRUFHLEtBQUFB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