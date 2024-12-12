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
            key: "findProcedureByReference",
            value: function findProcedureByReference(reference) {
                return this.context.findProcedureByReference(reference);
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
            key: "addVariable",
            value: function addVariable(variable) {
                var variableA = variable; ///
                this.variables.forEach(function(variable) {
                    var variableB = variable, variableAName = variableA.getName(), variableANameMatchesVariableBName = variableB.matchVariableName(variableAName);
                    if (variableANameMatchesVariableBName) {
                        var variableString = variable.getString(), message = "The '".concat(variableString, "' variable is already in the context.'"), exception = _exception.default.fromMessage(message);
                        throw exception;
                    }
                });
                var context = this, variableString = variable.getString();
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250ZXh0L2Jsb2NrLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IEV4Y2VwdGlvbiBmcm9tIFwiLi4vZXhjZXB0aW9uXCI7XG5cbmNvbnN0IHsgcHVzaCB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJsb2NrQ29udGV4dCB7XG4gIGNvbnN0cnVjdG9yKGNvbnRleHQsIHZhcmlhYmxlcykge1xuICAgIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XG4gICAgdGhpcy52YXJpYWJsZXMgPSB2YXJpYWJsZXM7XG4gIH1cblxuICBnZXRDb250ZXh0KCkge1xuICAgIHJldHVybiB0aGlzLmNvbnRleHQ7XG4gIH1cblxuICBnZXRWYXJpYWJsZXMoKSB7XG4gICAgY29uc3QgdmFyaWFibGVzID0gW107XG5cbiAgICBwdXNoKHZhcmlhYmxlcywgdGhpcy52YXJpYWJsZXMpO1xuXG4gICAgY29uc3QgY29udGV4dFZhcmlhYmxlcyA9IHRoaXMuY29udGV4dC5nZXRWYXJpYWJsZXMoKTtcblxuICAgIHB1c2godmFyaWFibGVzLCBjb250ZXh0VmFyaWFibGVzKTtcblxuICAgIHJldHVybiB2YXJpYWJsZXM7XG4gIH1cblxuICBmaW5kUHJvY2VkdXJlQnlSZWZlcmVuY2UocmVmZXJlbmNlKSB7IHJldHVybiB0aGlzLmNvbnRleHQuZmluZFByb2NlZHVyZUJ5UmVmZXJlbmNlKHJlZmVyZW5jZSk7IH1cblxuICBmaW5kVmFyaWFibGVCeVZhcmlhYmxlTmFtZSh2YXJpYWJsZU5hbWUpIHtcbiAgICBjb25zdCB2YXJpYWJsZXMgPSB0aGlzLmdldFZhcmlhYmxlcygpLFxuICAgICAgICAgIHZhcmlhYmxlID0gdmFyaWFibGVzLmZpbmQoKHZhcmlhYmxlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB2YXJpYWJsZU5hbWVNYXRjaGVzID0gdmFyaWFibGUubWF0Y2hWYXJpYWJsZU5hbWUodmFyaWFibGVOYW1lKTtcblxuICAgICAgICAgICAgaWYgKHZhcmlhYmxlTmFtZU1hdGNoZXMpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSkgfHwgbnVsbDtcblxuICAgIHJldHVybiB2YXJpYWJsZTtcbiAgfVxuXG4gIGFkZFZhcmlhYmxlKHZhcmlhYmxlKSB7XG4gICAgY29uc3QgdmFyaWFibGVBID0gdmFyaWFibGU7IC8vL1xuXG4gICAgdGhpcy52YXJpYWJsZXMuZm9yRWFjaCgodmFyaWFibGUpID0+IHtcbiAgICAgIGNvbnN0IHZhcmlhYmxlQiA9IHZhcmlhYmxlLCAvLy9cbiAgICAgICAgICAgIHZhcmlhYmxlQU5hbWUgPSB2YXJpYWJsZUEuZ2V0TmFtZSgpLFxuICAgICAgICAgICAgdmFyaWFibGVBTmFtZU1hdGNoZXNWYXJpYWJsZUJOYW1lID0gdmFyaWFibGVCLm1hdGNoVmFyaWFibGVOYW1lKHZhcmlhYmxlQU5hbWUpO1xuXG4gICAgICBpZiAodmFyaWFibGVBTmFtZU1hdGNoZXNWYXJpYWJsZUJOYW1lKSB7XG4gICAgICAgIGNvbnN0IHZhcmlhYmxlU3RyaW5nID0gdmFyaWFibGUuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgICAgIG1lc3NhZ2UgPSBgVGhlICcke3ZhcmlhYmxlU3RyaW5nfScgdmFyaWFibGUgaXMgYWxyZWFkeSBpbiB0aGUgY29udGV4dC4nYCxcbiAgICAgICAgICAgICAgZXhjZXB0aW9uID0gRXhjZXB0aW9uLmZyb21NZXNzYWdlKG1lc3NhZ2UpO1xuXG4gICAgICAgIHRocm93IGV4Y2VwdGlvbjtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLFxuICAgICAgICAgIHZhcmlhYmxlU3RyaW5nID0gdmFyaWFibGUuZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBBZGRlZCB0aGUgJyR7dmFyaWFibGVTdHJpbmd9JyB2YXJpYWJsZSB0byB0aGUgY29udGV4dC5gKTtcblxuICAgIHRoaXMudmFyaWFibGVzLnB1c2godmFyaWFibGUpO1xuICB9XG5cbiAgbm9kZUFzU3RyaW5nKG5vZGUpIHsgcmV0dXJuIHRoaXMuY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSk7IH1cblxuICB0cmFjZShtZXNzYWdlKSB7IHRoaXMuY29udGV4dC50cmFjZShtZXNzYWdlKTsgfVxuXG4gIGRlYnVnKG1lc3NhZ2UpIHsgdGhpcy5jb250ZXh0LmRlYnVnKG1lc3NhZ2UpOyB9XG5cbiAgaW5mbyhtZXNzYWdlKSB7IHRoaXMuY29udGV4dC5pbmZvKG1lc3NhZ2UpOyB9XG5cbiAgd2FybmluZyhtZXNzYWdlKSB7IHRoaXMuY29udGV4dC53YXJuaW5nKG1lc3NhZ2UpOyB9XG5cbiAgZXJyb3IobWVzc2FnZSkgeyB0aGlzLmNvbnRleHQuZXJyb3IobWVzc2FnZSk7IH1cblxuICBzdGF0aWMgZnJvbVZhcmlhYmxlcyh2YXJpYWJsZXMsIGNvbnRleHQpIHtcbiAgICBjb25zdCBibG9ja0NvbnRleHQgPSBuZXcgQmxvY2tDb250ZXh0KGNvbnRleHQsIHZhcmlhYmxlcyk7XG5cbiAgICByZXR1cm4gYmxvY2tDb250ZXh0O1xuICB9XG59XG4iXSwibmFtZXMiOlsiQmxvY2tDb250ZXh0IiwicHVzaCIsImFycmF5VXRpbGl0aWVzIiwiY29udGV4dCIsInZhcmlhYmxlcyIsImdldENvbnRleHQiLCJnZXRWYXJpYWJsZXMiLCJjb250ZXh0VmFyaWFibGVzIiwiZmluZFByb2NlZHVyZUJ5UmVmZXJlbmNlIiwicmVmZXJlbmNlIiwiZmluZFZhcmlhYmxlQnlWYXJpYWJsZU5hbWUiLCJ2YXJpYWJsZU5hbWUiLCJ2YXJpYWJsZSIsImZpbmQiLCJ2YXJpYWJsZU5hbWVNYXRjaGVzIiwibWF0Y2hWYXJpYWJsZU5hbWUiLCJhZGRWYXJpYWJsZSIsInZhcmlhYmxlQSIsImZvckVhY2giLCJ2YXJpYWJsZUIiLCJ2YXJpYWJsZUFOYW1lIiwiZ2V0TmFtZSIsInZhcmlhYmxlQU5hbWVNYXRjaGVzVmFyaWFibGVCTmFtZSIsInZhcmlhYmxlU3RyaW5nIiwiZ2V0U3RyaW5nIiwibWVzc2FnZSIsImV4Y2VwdGlvbiIsIkV4Y2VwdGlvbiIsImZyb21NZXNzYWdlIiwidHJhY2UiLCJub2RlQXNTdHJpbmciLCJub2RlIiwiZGVidWciLCJpbmZvIiwid2FybmluZyIsImVycm9yIiwiZnJvbVZhcmlhYmxlcyIsImJsb2NrQ29udGV4dCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFRcUJBOzs7eUJBTlU7Z0VBRVQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFdEIsSUFBTSxBQUFFQyxPQUFTQyx5QkFBYyxDQUF2QkQ7QUFFTyxJQUFBLEFBQU1ELDZCQUFOO2FBQU1BLGFBQ1BHLE9BQU8sRUFBRUMsU0FBUztnQ0FEWEo7UUFFakIsSUFBSSxDQUFDRyxPQUFPLEdBQUdBO1FBQ2YsSUFBSSxDQUFDQyxTQUFTLEdBQUdBOztrQkFIQUo7O1lBTW5CSyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNGLE9BQU87WUFDckI7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUYsWUFBWSxFQUFFO2dCQUVwQkgsS0FBS0csV0FBVyxJQUFJLENBQUNBLFNBQVM7Z0JBRTlCLElBQU1HLG1CQUFtQixJQUFJLENBQUNKLE9BQU8sQ0FBQ0csWUFBWTtnQkFFbERMLEtBQUtHLFdBQVdHO2dCQUVoQixPQUFPSDtZQUNUOzs7WUFFQUksS0FBQUE7bUJBQUFBLFNBQUFBLHlCQUF5QkMsU0FBUztnQkFBSSxPQUFPLElBQUksQ0FBQ04sT0FBTyxDQUFDSyx3QkFBd0IsQ0FBQ0M7WUFBWTs7O1lBRS9GQyxLQUFBQTttQkFBQUEsU0FBQUEsMkJBQTJCQyxZQUFZO2dCQUNyQyxJQUFNUCxZQUFZLElBQUksQ0FBQ0UsWUFBWSxJQUM3Qk0sV0FBV1IsVUFBVVMsSUFBSSxDQUFDLFNBQUNEO29CQUN6QixJQUFNRSxzQkFBc0JGLFNBQVNHLGlCQUFpQixDQUFDSjtvQkFFdkQsSUFBSUcscUJBQXFCO3dCQUN2QixPQUFPO29CQUNUO2dCQUNGLE1BQU07Z0JBRVosT0FBT0Y7WUFDVDs7O1lBRUFJLEtBQUFBO21CQUFBQSxTQUFBQSxZQUFZSixRQUFRO2dCQUNsQixJQUFNSyxZQUFZTCxVQUFVLEdBQUc7Z0JBRS9CLElBQUksQ0FBQ1IsU0FBUyxDQUFDYyxPQUFPLENBQUMsU0FBQ047b0JBQ3RCLElBQU1PLFlBQVlQLFVBQ1pRLGdCQUFnQkgsVUFBVUksT0FBTyxJQUNqQ0Msb0NBQW9DSCxVQUFVSixpQkFBaUIsQ0FBQ0s7b0JBRXRFLElBQUlFLG1DQUFtQzt3QkFDckMsSUFBTUMsaUJBQWlCWCxTQUFTWSxTQUFTLElBQ25DQyxVQUFVLEFBQUMsUUFBc0IsT0FBZkYsZ0JBQWUsMkNBQ2pDRyxZQUFZQyxrQkFBUyxDQUFDQyxXQUFXLENBQUNIO3dCQUV4QyxNQUFNQztvQkFDUjtnQkFDRjtnQkFFQSxJQUFNdkIsVUFBVSxJQUFJLEVBQ2RvQixpQkFBaUJYLFNBQVNZLFNBQVM7Z0JBRXpDckIsUUFBUTBCLEtBQUssQ0FBQyxBQUFDLGNBQTRCLE9BQWZOLGdCQUFlO2dCQUUzQyxJQUFJLENBQUNuQixTQUFTLENBQUNILElBQUksQ0FBQ1c7WUFDdEI7OztZQUVBa0IsS0FBQUE7bUJBQUFBLFNBQUFBLGFBQWFDLElBQUk7Z0JBQUksT0FBTyxJQUFJLENBQUM1QixPQUFPLENBQUMyQixZQUFZLENBQUNDO1lBQU87OztZQUU3REYsS0FBQUE7bUJBQUFBLFNBQUFBLE1BQU1KLE9BQU87Z0JBQUksSUFBSSxDQUFDdEIsT0FBTyxDQUFDMEIsS0FBSyxDQUFDSjtZQUFVOzs7WUFFOUNPLEtBQUFBO21CQUFBQSxTQUFBQSxNQUFNUCxPQUFPO2dCQUFJLElBQUksQ0FBQ3RCLE9BQU8sQ0FBQzZCLEtBQUssQ0FBQ1A7WUFBVTs7O1lBRTlDUSxLQUFBQTttQkFBQUEsU0FBQUEsS0FBS1IsT0FBTztnQkFBSSxJQUFJLENBQUN0QixPQUFPLENBQUM4QixJQUFJLENBQUNSO1lBQVU7OztZQUU1Q1MsS0FBQUE7bUJBQUFBLFNBQUFBLFFBQVFULE9BQU87Z0JBQUksSUFBSSxDQUFDdEIsT0FBTyxDQUFDK0IsT0FBTyxDQUFDVDtZQUFVOzs7WUFFbERVLEtBQUFBO21CQUFBQSxTQUFBQSxNQUFNVixPQUFPO2dCQUFJLElBQUksQ0FBQ3RCLE9BQU8sQ0FBQ2dDLEtBQUssQ0FBQ1Y7WUFBVTs7OztZQUV2Q1csS0FBQUE7bUJBQVAsU0FBT0EsY0FBY2hDLFNBQVMsRUFBRUQsT0FBTztnQkFDckMsSUFBTWtDLGVBQWUsSUEzRUpyQyxhQTJFcUJHLFNBQVNDO2dCQUUvQyxPQUFPaUM7WUFDVDs7O1dBOUVtQnJDIn0=