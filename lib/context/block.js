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
            key: "findProcedureByName",
            value: function findProcedureByName(name) {
                return this.context.findProcedureByName(name);
            }
        },
        {
            key: "isProcedurePresentByName",
            value: function isProcedurePresentByName(name) {
                return this.context.isProcedurePresentByName(name);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250ZXh0L2Jsb2NrLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IEV4Y2VwdGlvbiBmcm9tIFwiLi4vZXhjZXB0aW9uXCI7XG5cbmNvbnN0IHsgcHVzaCB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJsb2NrQ29udGV4dCB7XG4gIGNvbnN0cnVjdG9yKGNvbnRleHQsIHZhcmlhYmxlcykge1xuICAgIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XG4gICAgdGhpcy52YXJpYWJsZXMgPSB2YXJpYWJsZXM7XG4gIH1cblxuICBnZXRDb250ZXh0KCkge1xuICAgIHJldHVybiB0aGlzLmNvbnRleHQ7XG4gIH1cblxuICBnZXRWYXJpYWJsZXMobmVzdGVkID0gdHJ1ZSkge1xuICAgIGNvbnN0IHZhcmlhYmxlcyA9IFtdO1xuXG4gICAgcHVzaCh2YXJpYWJsZXMsIHRoaXMudmFyaWFibGVzKTtcblxuICAgIGlmIChuZXN0ZWQpIHtcbiAgICAgIGNvbnN0IGNvbnRleHRWYXJpYWJsZXMgPSB0aGlzLmNvbnRleHQuZ2V0VmFyaWFibGVzKCk7XG5cbiAgICAgIHB1c2godmFyaWFibGVzLCBjb250ZXh0VmFyaWFibGVzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmFyaWFibGVzO1xuICB9XG5cbiAgZmluZFByb2NlZHVyZUJ5TmFtZShuYW1lKSB7IHJldHVybiB0aGlzLmNvbnRleHQuZmluZFByb2NlZHVyZUJ5TmFtZShuYW1lKTsgfVxuXG4gIGlzUHJvY2VkdXJlUHJlc2VudEJ5TmFtZShuYW1lKSB7IHJldHVybiB0aGlzLmNvbnRleHQuaXNQcm9jZWR1cmVQcmVzZW50QnlOYW1lKG5hbWUpOyB9XG5cbiAgZmluZFZhcmlhYmxlQnlWYXJpYWJsZU5hbWUodmFyaWFibGVOYW1lLCBuZXN0ZWQgPSB0cnVlKSB7XG4gICAgY29uc3QgdmFyaWFibGVzID0gdGhpcy5nZXRWYXJpYWJsZXMobmVzdGVkKSxcbiAgICAgICAgICB2YXJpYWJsZSA9IHZhcmlhYmxlcy5maW5kKCh2YXJpYWJsZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdmFyaWFibGVOYW1lTWF0Y2hlcyA9IHZhcmlhYmxlLm1hdGNoVmFyaWFibGVOYW1lKHZhcmlhYmxlTmFtZSk7XG5cbiAgICAgICAgICAgIGlmICh2YXJpYWJsZU5hbWVNYXRjaGVzKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pIHx8IG51bGw7XG5cbiAgICByZXR1cm4gdmFyaWFibGU7XG4gIH1cblxuICBpc1ZhcmlhYmxlUHJlc2VudEJ5VmFyaWFibGVOYW1lKHZhcmlhYmxlTmFtZSwgbmVzdGVkID0gdHJ1ZSkge1xuICAgIGNvbnN0IHZhcmlhYmxlID0gdGhpcy5maW5kVmFyaWFibGVCeVZhcmlhYmxlTmFtZSh2YXJpYWJsZU5hbWUsIG5lc3RlZCksXG4gICAgICAgICAgdmFyaWFibGVQcmVzZW50ID0gKHZhcmlhYmxlICE9PSBudWxsKTtcblxuICAgIHJldHVybiB2YXJpYWJsZVByZXNlbnQ7XG4gIH1cblxuICBhZGRWYXJpYWJsZSh2YXJpYWJsZSkge1xuICAgIGNvbnN0IG5lc3RlZCA9IGZhbHNlLFxuICAgICAgICAgIHZhcmlhYmxlTmFtZSA9IHZhcmlhYmxlLmdldE5hbWUoKSxcbiAgICAgICAgICB2YXJpYWJsZVN0cmluZyA9IHZhcmlhYmxlLmdldFN0cmluZygpLFxuICAgICAgICAgIHZhcmlhYmxlUHJlc2VudCA9IHRoaXMuaXNWYXJpYWJsZVByZXNlbnRCeVZhcmlhYmxlTmFtZSh2YXJpYWJsZU5hbWUsIG5lc3RlZCk7XG5cbiAgICBpZiAodmFyaWFibGVQcmVzZW50KSB7XG4gICAgICBjb25zdCBtZXNzYWdlID0gYFRoZSAnJHt2YXJpYWJsZVN0cmluZ30nIHZhcmlhYmxlIGlzIGFscmVhZHkgcHJlc2VudC4nYCxcbiAgICAgICAgICAgIGV4Y2VwdGlvbiA9IEV4Y2VwdGlvbi5mcm9tTWVzc2FnZShtZXNzYWdlKTtcblxuICAgICAgdGhyb3cgZXhjZXB0aW9uO1xuICAgIH1cblxuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzO1xuXG4gICAgY29udGV4dC50cmFjZShgQWRkZWQgdGhlICcke3ZhcmlhYmxlU3RyaW5nfScgdmFyaWFibGUgdG8gdGhlIGNvbnRleHQuYCk7XG5cbiAgICB0aGlzLnZhcmlhYmxlcy5wdXNoKHZhcmlhYmxlKTtcbiAgfVxuXG4gIG5vZGVBc1N0cmluZyhub2RlKSB7IHJldHVybiB0aGlzLmNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpOyB9XG5cbiAgbm9kZXNBc1N0cmluZyhub2RlKSB7IHJldHVybiB0aGlzLmNvbnRleHQubm9kZXNBc1N0cmluZyhub2RlKTsgfVxuXG4gIHRyYWNlKG1lc3NhZ2UpIHsgdGhpcy5jb250ZXh0LnRyYWNlKG1lc3NhZ2UpOyB9XG5cbiAgZGVidWcobWVzc2FnZSkgeyB0aGlzLmNvbnRleHQuZGVidWcobWVzc2FnZSk7IH1cblxuICBpbmZvKG1lc3NhZ2UpIHsgdGhpcy5jb250ZXh0LmluZm8obWVzc2FnZSk7IH1cblxuICB3YXJuaW5nKG1lc3NhZ2UpIHsgdGhpcy5jb250ZXh0Lndhcm5pbmcobWVzc2FnZSk7IH1cblxuICBlcnJvcihtZXNzYWdlKSB7IHRoaXMuY29udGV4dC5lcnJvcihtZXNzYWdlKTsgfVxuXG4gIHN0YXRpYyBmcm9tVmFyaWFibGVzKHZhcmlhYmxlcywgY29udGV4dCkge1xuICAgIGNvbnN0IGJsb2NrQ29udGV4dCA9IG5ldyBCbG9ja0NvbnRleHQoY29udGV4dCwgdmFyaWFibGVzKTtcblxuICAgIHJldHVybiBibG9ja0NvbnRleHQ7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJCbG9ja0NvbnRleHQiLCJwdXNoIiwiYXJyYXlVdGlsaXRpZXMiLCJjb250ZXh0IiwidmFyaWFibGVzIiwiZ2V0Q29udGV4dCIsImdldFZhcmlhYmxlcyIsIm5lc3RlZCIsImNvbnRleHRWYXJpYWJsZXMiLCJmaW5kUHJvY2VkdXJlQnlOYW1lIiwibmFtZSIsImlzUHJvY2VkdXJlUHJlc2VudEJ5TmFtZSIsImZpbmRWYXJpYWJsZUJ5VmFyaWFibGVOYW1lIiwidmFyaWFibGVOYW1lIiwidmFyaWFibGUiLCJmaW5kIiwidmFyaWFibGVOYW1lTWF0Y2hlcyIsIm1hdGNoVmFyaWFibGVOYW1lIiwiaXNWYXJpYWJsZVByZXNlbnRCeVZhcmlhYmxlTmFtZSIsInZhcmlhYmxlUHJlc2VudCIsImFkZFZhcmlhYmxlIiwiZ2V0TmFtZSIsInZhcmlhYmxlU3RyaW5nIiwiZ2V0U3RyaW5nIiwibWVzc2FnZSIsImV4Y2VwdGlvbiIsIkV4Y2VwdGlvbiIsImZyb21NZXNzYWdlIiwidHJhY2UiLCJub2RlQXNTdHJpbmciLCJub2RlIiwibm9kZXNBc1N0cmluZyIsImRlYnVnIiwiaW5mbyIsIndhcm5pbmciLCJlcnJvciIsImZyb21WYXJpYWJsZXMiLCJibG9ja0NvbnRleHQiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBUXFCQTs7O3lCQU5VO2dFQUVUOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXRCLElBQU0sQUFBRUMsT0FBU0MseUJBQWMsQ0FBdkJEO0FBRU8sSUFBQSxBQUFNRCw2QkFBTjthQUFNQSxhQUNQRyxPQUFPLEVBQUVDLFNBQVM7Z0NBRFhKO1FBRWpCLElBQUksQ0FBQ0csT0FBTyxHQUFHQTtRQUNmLElBQUksQ0FBQ0MsU0FBUyxHQUFHQTs7a0JBSEFKOztZQU1uQkssS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRixPQUFPO1lBQ3JCOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBO29CQUFhQyxTQUFBQSxpRUFBUztnQkFDcEIsSUFBTUgsWUFBWSxFQUFFO2dCQUVwQkgsS0FBS0csV0FBVyxJQUFJLENBQUNBLFNBQVM7Z0JBRTlCLElBQUlHLFFBQVE7b0JBQ1YsSUFBTUMsbUJBQW1CLElBQUksQ0FB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