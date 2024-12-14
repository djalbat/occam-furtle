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
                var variables = [];
                push(variables, this.variables);
                var contextVariables = this.context.getVariables();
                push(variables, contextVariables);
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
                var variables = this.getVariables(), variable = variables.find(function(variable) {
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
                var variable = this.findVariableByVariableName(variableName), variablePresent = variable !== null;
                return variablePresent;
            }
        },
        {
            key: "addVariable",
            value: function addVariable(variable) {
                var variableName = variable.getName(), variableString = variable.getString(), variablePresent = this.isVariablePresentByVariableName(variableName);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250ZXh0L2Jsb2NrLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IEV4Y2VwdGlvbiBmcm9tIFwiLi4vZXhjZXB0aW9uXCI7XG5cbmNvbnN0IHsgcHVzaCB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJsb2NrQ29udGV4dCB7XG4gIGNvbnN0cnVjdG9yKGNvbnRleHQsIHZhcmlhYmxlcykge1xuICAgIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XG4gICAgdGhpcy52YXJpYWJsZXMgPSB2YXJpYWJsZXM7XG4gIH1cblxuICBnZXRDb250ZXh0KCkge1xuICAgIHJldHVybiB0aGlzLmNvbnRleHQ7XG4gIH1cblxuICBnZXRWYXJpYWJsZXMoKSB7XG4gICAgY29uc3QgdmFyaWFibGVzID0gW107XG5cbiAgICBwdXNoKHZhcmlhYmxlcywgdGhpcy52YXJpYWJsZXMpO1xuXG4gICAgY29uc3QgY29udGV4dFZhcmlhYmxlcyA9IHRoaXMuY29udGV4dC5nZXRWYXJpYWJsZXMoKTtcblxuICAgIHB1c2godmFyaWFibGVzLCBjb250ZXh0VmFyaWFibGVzKTtcblxuICAgIHJldHVybiB2YXJpYWJsZXM7XG4gIH1cblxuICBnZXRGaWxlQ29udGV4dCgpIHsgcmV0dXJuIHRoaXMuY29udGV4dC5nZXRGaWxlQ29udGV4dCgpOyB9XG5cbiAgZmluZFByb2NlZHVyZUJ5UmVmZXJlbmNlKHJlZmVyZW5jZSkgeyByZXR1cm4gdGhpcy5jb250ZXh0LmZpbmRQcm9jZWR1cmVCeVJlZmVyZW5jZShyZWZlcmVuY2UpOyB9XG5cbiAgaXNQcm9jZWR1cmVQcmVzZW50QnlSZWZlcmVuY2UocmVmZXJlbmNlKSB7IHJldHVybiB0aGlzLmNvbnRleHQuaXNQcm9jZWR1cmVQcmVzZW50QnlSZWZlcmVuY2UocmVmZXJlbmNlKTsgfVxuXG4gIGZpbmRWYXJpYWJsZUJ5VmFyaWFibGVOYW1lKHZhcmlhYmxlTmFtZSkge1xuICAgIGNvbnN0IHZhcmlhYmxlcyA9IHRoaXMuZ2V0VmFyaWFibGVzKCksXG4gICAgICAgICAgdmFyaWFibGUgPSB2YXJpYWJsZXMuZmluZCgodmFyaWFibGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHZhcmlhYmxlTmFtZU1hdGNoZXMgPSB2YXJpYWJsZS5tYXRjaFZhcmlhYmxlTmFtZSh2YXJpYWJsZU5hbWUpO1xuXG4gICAgICAgICAgICBpZiAodmFyaWFibGVOYW1lTWF0Y2hlcykge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIHZhcmlhYmxlO1xuICB9XG5cbiAgaXNWYXJpYWJsZVByZXNlbnRCeVZhcmlhYmxlTmFtZSh2YXJpYWJsZU5hbWUpIHtcbiAgICBjb25zdCB2YXJpYWJsZSA9IHRoaXMuZmluZFZhcmlhYmxlQnlWYXJpYWJsZU5hbWUodmFyaWFibGVOYW1lKSxcbiAgICAgICAgICB2YXJpYWJsZVByZXNlbnQgPSAodmFyaWFibGUgIT09IG51bGwpO1xuXG4gICAgcmV0dXJuIHZhcmlhYmxlUHJlc2VudDtcbiAgfVxuXG4gIGFkZFZhcmlhYmxlKHZhcmlhYmxlKSB7XG4gICAgY29uc3QgdmFyaWFibGVOYW1lID0gdmFyaWFibGUuZ2V0TmFtZSgpLFxuICAgICAgICAgIHZhcmlhYmxlU3RyaW5nID0gdmFyaWFibGUuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgdmFyaWFibGVQcmVzZW50ID0gdGhpcy5pc1ZhcmlhYmxlUHJlc2VudEJ5VmFyaWFibGVOYW1lKHZhcmlhYmxlTmFtZSk7XG5cbiAgICBpZiAodmFyaWFibGVQcmVzZW50KSB7XG4gICAgICBjb25zdCBtZXNzYWdlID0gYFRoZSAnJHt2YXJpYWJsZVN0cmluZ30nIHZhcmlhYmxlIGlzIGFscmVhZHkgcHJlc2VudC4nYCxcbiAgICAgICAgICAgIGV4Y2VwdGlvbiA9IEV4Y2VwdGlvbi5mcm9tTWVzc2FnZShtZXNzYWdlKTtcblxuICAgICAgdGhyb3cgZXhjZXB0aW9uO1xuICAgIH1cblxuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzO1xuXG4gICAgY29udGV4dC50cmFjZShgQWRkZWQgdGhlICcke3ZhcmlhYmxlU3RyaW5nfScgdmFyaWFibGUgdG8gdGhlIGNvbnRleHQuYCk7XG5cbiAgICB0aGlzLnZhcmlhYmxlcy5wdXNoKHZhcmlhYmxlKTtcbiAgfVxuXG4gIG5vZGVBc1N0cmluZyhub2RlKSB7IHJldHVybiB0aGlzLmNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpOyB9XG5cbiAgbm9kZXNBc1N0cmluZyhub2RlKSB7IHJldHVybiB0aGlzLmNvbnRleHQubm9kZXNBc1N0cmluZyhub2RlKTsgfVxuXG4gIHRyYWNlKG1lc3NhZ2UpIHsgdGhpcy5jb250ZXh0LnRyYWNlKG1lc3NhZ2UpOyB9XG5cbiAgZGVidWcobWVzc2FnZSkgeyB0aGlzLmNvbnRleHQuZGVidWcobWVzc2FnZSk7IH1cblxuICBpbmZvKG1lc3NhZ2UpIHsgdGhpcy5jb250ZXh0LmluZm8obWVzc2FnZSk7IH1cblxuICB3YXJuaW5nKG1lc3NhZ2UpIHsgdGhpcy5jb250ZXh0Lndhcm5pbmcobWVzc2FnZSk7IH1cblxuICBlcnJvcihtZXNzYWdlKSB7IHRoaXMuY29udGV4dC5lcnJvcihtZXNzYWdlKTsgfVxuXG4gIHN0YXRpYyBmcm9tVmFyaWFibGVzKHZhcmlhYmxlcywgY29udGV4dCkge1xuICAgIGNvbnN0IGJsb2NrQ29udGV4dCA9IG5ldyBCbG9ja0NvbnRleHQoY29udGV4dCwgdmFyaWFibGVzKTtcblxuICAgIHJldHVybiBibG9ja0NvbnRleHQ7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJCbG9ja0NvbnRleHQiLCJwdXNoIiwiYXJyYXlVdGlsaXRpZXMiLCJjb250ZXh0IiwidmFyaWFibGVzIiwiZ2V0Q29udGV4dCIsImdldFZhcmlhYmxlcyIsImNvbnRleHRWYXJpYWJsZXMiLCJnZXRGaWxlQ29udGV4dCIsImZpbmRQcm9jZWR1cmVCeVJlZmVyZW5jZSIsInJlZmVyZW5jZSIsImlzUHJvY2VkdXJlUHJlc2VudEJ5UmVmZXJlbmNlIiwiZmluZFZhcmlhYmxlQnlWYXJpYWJsZU5hbWUiLCJ2YXJpYWJsZU5hbWUiLCJ2YXJpYWJsZSIsImZpbmQiLCJ2YXJpYWJsZU5hbWVNYXRjaGVzIiwibWF0Y2hWYXJpYWJsZU5hbWUiLCJpc1ZhcmlhYmxlUHJlc2VudEJ5VmFyaWFibGVOYW1lIiwidmFyaWFibGVQcmVzZW50IiwiYWRkVmFyaWFibGUiLCJnZXROYW1lIiwidmFyaWFibGVTdHJpbmciLCJnZXRTdHJpbmciLCJtZXNzYWdlIiwiZXhjZXB0aW9uIiwiRXhjZXB0aW9uIiwiZnJvbU1lc3NhZ2UiLCJ0cmFjZSIsIm5vZGVBc1N0cmluZyIsIm5vZGUiLCJub2Rlc0FzU3RyaW5nIiwiZGVidWciLCJpbmZvIiwid2FybmluZyIsImVycm9yIiwiZnJvbVZhcmlhYmxlcyIsImJsb2NrQ29udGV4dCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFRcUJBOzs7eUJBTlU7Z0VBRVQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFdEIsSUFBTSxBQUFFQyxPQUFTQyx5QkFBYyxDQUF2QkQ7QUFFTyxJQUFBLEFBQU1ELDZCQUFOO2FBQU1BLGFBQ1BHLE9BQU8sRUFBRUMsU0FBUztnQ0FEWEo7UUFFakIsSUFBSSxDQUFDRyxPQUFPLEdBQUdBO1FBQ2YsSUFBSSxDQUFDQyxTQUFTLEdBQUdBOztrQkFIQUo7O1lBTW5CSyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNGLE9BQU87WUFDckI7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUYsWUFBWSxFQUFFO2dCQUVwQkgsS0FBS0csV0FBVyxJQUFJLENBQUNBLFNBQVM7Z0JBRTlCLElBQU1HLG1CQUFtQixJQUFJLENBQUNKLE9BQU8sQ0FBQ0csWUFBWTtnQkFFbERMLEtBQUtH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