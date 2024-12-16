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
                var blocked = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : false;
                var variables = [];
                push(variables, this.variables);
                if (!blocked) {
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
                var blocked = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
                var variables = this.getVariables(blocked), variable = variables.find(function(variable) {
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
                var blocked = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
                var variable = this.findVariableByVariableName(variableName, blocked), variablePresent = variable !== null;
                return variablePresent;
            }
        },
        {
            key: "addVariable",
            value: function addVariable(variable) {
                var blocked = true, variableName = variable.getName(), variableString = variable.getString(), variablePresent = this.isVariablePresentByVariableName(variableName, blocked);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250ZXh0L2Jsb2NrLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IEV4Y2VwdGlvbiBmcm9tIFwiLi4vZXhjZXB0aW9uXCI7XG5cbmNvbnN0IHsgcHVzaCB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJsb2NrQ29udGV4dCB7XG4gIGNvbnN0cnVjdG9yKGNvbnRleHQsIHZhcmlhYmxlcykge1xuICAgIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XG4gICAgdGhpcy52YXJpYWJsZXMgPSB2YXJpYWJsZXM7XG4gIH1cblxuICBnZXRDb250ZXh0KCkge1xuICAgIHJldHVybiB0aGlzLmNvbnRleHQ7XG4gIH1cblxuICBnZXRWYXJpYWJsZXMoYmxvY2tlZCA9IGZhbHNlKSB7XG4gICAgY29uc3QgdmFyaWFibGVzID0gW107XG5cbiAgICBwdXNoKHZhcmlhYmxlcywgdGhpcy52YXJpYWJsZXMpO1xuXG4gICAgaWYgKCFibG9ja2VkKSB7XG4gICAgICBjb25zdCBjb250ZXh0VmFyaWFibGVzID0gdGhpcy5jb250ZXh0LmdldFZhcmlhYmxlcygpO1xuXG4gICAgICBwdXNoKHZhcmlhYmxlcywgY29udGV4dFZhcmlhYmxlcyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhcmlhYmxlcztcbiAgfVxuXG4gIGdldEZpbGVDb250ZXh0KCkgeyByZXR1cm4gdGhpcy5jb250ZXh0LmdldEZpbGVDb250ZXh0KCk7IH1cblxuICBmaW5kUHJvY2VkdXJlQnlSZWZlcmVuY2UocmVmZXJlbmNlKSB7IHJldHVybiB0aGlzLmNvbnRleHQuZmluZFByb2NlZHVyZUJ5UmVmZXJlbmNlKHJlZmVyZW5jZSk7IH1cblxuICBpc1Byb2NlZHVyZVByZXNlbnRCeVJlZmVyZW5jZShyZWZlcmVuY2UpIHsgcmV0dXJuIHRoaXMuY29udGV4dC5pc1Byb2NlZHVyZVByZXNlbnRCeVJlZmVyZW5jZShyZWZlcmVuY2UpOyB9XG5cbiAgZmluZFZhcmlhYmxlQnlWYXJpYWJsZU5hbWUodmFyaWFibGVOYW1lLCBibG9ja2VkID0gZmFsc2UpIHtcbiAgICBjb25zdCB2YXJpYWJsZXMgPSB0aGlzLmdldFZhcmlhYmxlcyhibG9ja2VkKSxcbiAgICAgICAgICB2YXJpYWJsZSA9IHZhcmlhYmxlcy5maW5kKCh2YXJpYWJsZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdmFyaWFibGVOYW1lTWF0Y2hlcyA9IHZhcmlhYmxlLm1hdGNoVmFyaWFibGVOYW1lKHZhcmlhYmxlTmFtZSk7XG5cbiAgICAgICAgICAgIGlmICh2YXJpYWJsZU5hbWVNYXRjaGVzKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pIHx8IG51bGw7XG5cbiAgICByZXR1cm4gdmFyaWFibGU7XG4gIH1cblxuICBpc1ZhcmlhYmxlUHJlc2VudEJ5VmFyaWFibGVOYW1lKHZhcmlhYmxlTmFtZSwgYmxvY2tlZCA9IGZhbHNlKSB7XG4gICAgY29uc3QgdmFyaWFibGUgPSB0aGlzLmZpbmRWYXJpYWJsZUJ5VmFyaWFibGVOYW1lKHZhcmlhYmxlTmFtZSwgYmxvY2tlZCksXG4gICAgICAgICAgdmFyaWFibGVQcmVzZW50ID0gKHZhcmlhYmxlICE9PSBudWxsKTtcblxuICAgIHJldHVybiB2YXJpYWJsZVByZXNlbnQ7XG4gIH1cblxuICBhZGRWYXJpYWJsZSh2YXJpYWJsZSkge1xuICAgIGNvbnN0IGJsb2NrZWQgPSB0cnVlLFxuICAgICAgICAgIHZhcmlhYmxlTmFtZSA9IHZhcmlhYmxlLmdldE5hbWUoKSxcbiAgICAgICAgICB2YXJpYWJsZVN0cmluZyA9IHZhcmlhYmxlLmdldFN0cmluZygpLFxuICAgICAgICAgIHZhcmlhYmxlUHJlc2VudCA9IHRoaXMuaXNWYXJpYWJsZVByZXNlbnRCeVZhcmlhYmxlTmFtZSh2YXJpYWJsZU5hbWUsIGJsb2NrZWQpO1xuXG4gICAgaWYgKHZhcmlhYmxlUHJlc2VudCkge1xuICAgICAgY29uc3QgbWVzc2FnZSA9IGBUaGUgJyR7dmFyaWFibGVTdHJpbmd9JyB2YXJpYWJsZSBpcyBhbHJlYWR5IHByZXNlbnQuJ2AsXG4gICAgICAgICAgICBleGNlcHRpb24gPSBFeGNlcHRpb24uZnJvbU1lc3NhZ2UobWVzc2FnZSk7XG5cbiAgICAgIHRocm93IGV4Y2VwdGlvbjtcbiAgICB9XG5cbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcztcblxuICAgIGNvbnRleHQudHJhY2UoYEFkZGVkIHRoZSAnJHt2YXJpYWJsZVN0cmluZ30nIHZhcmlhYmxlIHRvIHRoZSBjb250ZXh0LmApO1xuXG4gICAgdGhpcy52YXJpYWJsZXMucHVzaCh2YXJpYWJsZSk7XG4gIH1cblxuICBub2RlQXNTdHJpbmcobm9kZSkgeyByZXR1cm4gdGhpcy5jb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKTsgfVxuXG4gIG5vZGVzQXNTdHJpbmcobm9kZSkgeyByZXR1cm4gdGhpcy5jb250ZXh0Lm5vZGVzQXNTdHJpbmcobm9kZSk7IH1cblxuICB0cmFjZShtZXNzYWdlKSB7IHRoaXMuY29udGV4dC50cmFjZShtZXNzYWdlKTsgfVxuXG4gIGRlYnVnKG1lc3NhZ2UpIHsgdGhpcy5jb250ZXh0LmRlYnVnKG1lc3NhZ2UpOyB9XG5cbiAgaW5mbyhtZXNzYWdlKSB7IHRoaXMuY29udGV4dC5pbmZvKG1lc3NhZ2UpOyB9XG5cbiAgd2FybmluZyhtZXNzYWdlKSB7IHRoaXMuY29udGV4dC53YXJuaW5nKG1lc3NhZ2UpOyB9XG5cbiAgZXJyb3IobWVzc2FnZSkgeyB0aGlzLmNvbnRleHQuZXJyb3IobWVzc2FnZSk7IH1cblxuICBzdGF0aWMgZnJvbVZhcmlhYmxlcyh2YXJpYWJsZXMsIGNvbnRleHQpIHtcbiAgICBjb25zdCBibG9ja0NvbnRleHQgPSBuZXcgQmxvY2tDb250ZXh0KGNvbnRleHQsIHZhcmlhYmxlcyk7XG5cbiAgICByZXR1cm4gYmxvY2tDb250ZXh0O1xuICB9XG59XG4iXSwibmFtZXMiOlsiQmxvY2tDb250ZXh0IiwicHVzaCIsImFycmF5VXRpbGl0aWVzIiwiY29udGV4dCIsInZhcmlhYmxlcyIsImdldENvbnRleHQiLCJnZXRWYXJpYWJsZXMiLCJibG9ja2VkIiwiY29udGV4dFZhcmlhYmxlcyIsImdldEZpbGVDb250ZXh0IiwiZmluZFByb2NlZHVyZUJ5UmVmZXJlbmNlIiwicmVmZXJlbmNlIiwiaXNQcm9jZWR1cmVQcmVzZW50QnlSZWZlcmVuY2UiLCJmaW5kVmFyaWFibGVCeVZhcmlhYmxlTmFtZSIsInZhcmlhYmxlTmFtZSIsInZhcmlhYmxlIiwiZmluZCIsInZhcmlhYmxlTmFtZU1hdGNoZXMiLCJtYXRjaFZhcmlhYmxlTmFtZSIsImlzVmFyaWFibGVQcmVzZW50QnlWYXJpYWJsZU5hbWUiLCJ2YXJpYWJsZVByZXNlbnQiLCJhZGRWYXJpYWJsZSIsImdldE5hbWUiLCJ2YXJpYWJsZVN0cmluZyIsImdldFN0cmluZyIsIm1lc3NhZ2UiLCJleGNlcHRpb24iLCJFeGNlcHRpb24iLCJmcm9tTWVzc2FnZSIsInRyYWNlIiwibm9kZUFzU3RyaW5nIiwibm9kZSIsIm5vZGVzQXNTdHJpbmciLCJkZWJ1ZyIsImluZm8iLCJ3YXJuaW5nIiwiZXJyb3IiLCJmcm9tVmFyaWFibGVzIiwiYmxvY2tDb250ZXh0Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQVFxQkE7Ozt5QkFOVTtnRUFFVDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV0QixJQUFNLEFBQUVDLE9BQVNDLHlCQUFjLENBQXZCRDtBQUVPLElBQUEsQUFBTUQsNkJBQU47YUFBTUEsYUFDUEcsT0FBTyxFQUFFQyxTQUFTO2dDQURYSjtRQUVqQixJQUFJLENBQUNHLE9BQU8sR0FBR0E7UUFDZixJQUFJLENBQUNDLFNBQVMsR0FBR0E7O2tCQUhBSjs7WUFNbkJLLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0YsT0FBTztZQUNyQjs7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