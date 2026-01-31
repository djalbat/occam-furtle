"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _exception = /*#__PURE__*/ _interop_require_default(require("../exception"));
var _block = /*#__PURE__*/ _interop_require_default(require("../context/block"));
var _elements = require("../elements");
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
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var _ReturnBlock;
var _default = (0, _elements.define)((_ReturnBlock = /*#__PURE__*/ function() {
    function ReturnBlock(string, steps, nonsensical, returnStatement) {
        _class_call_check(this, ReturnBlock);
        this.string = string;
        this.steps = steps;
        this.nonsensical = nonsensical;
        this.returnStatement = returnStatement;
    }
    _create_class(ReturnBlock, [
        {
            key: "getString",
            value: function getString() {
                return this.string;
            }
        },
        {
            key: "getSteps",
            value: function getSteps() {
                return this.steps;
            }
        },
        {
            key: "isNonsensical",
            value: function isNonsensical() {
                return this.nonsensical;
            }
        },
        {
            key: "getReturnStatement",
            value: function getReturnStatement() {
                return this.returnStatement;
            }
        },
        {
            key: "evaluate",
            value: function evaluate(variables, context) {
                if (context === undefined) {
                    context = variables; ///
                    variables = [];
                }
                if (this.nonsensical) {
                    var message = "The return block is nonsensical.", exception = _exception.default.fromMessage(message);
                    throw exception;
                }
                var blockContext = _block.default.fromVariables(variables, context);
                context = blockContext; ///
                this.steps.forEach(function(step) {
                    step.evaluate(context);
                });
                var expression = this.returnStatement.evaluate(context);
                return expression;
            }
        }
    ]);
    return ReturnBlock;
}(), _define_property(_ReturnBlock, "name", "ReturnBlock"), _ReturnBlock));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3JldHVybkJsb2NrLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgRXhjZXB0aW9uIGZyb20gXCIuLi9leGNlcHRpb25cIjtcbmltcG9ydCBCbG9ja0NvbnRleHQgZnJvbSBcIi4uL2NvbnRleHQvYmxvY2tcIjtcblxuaW1wb3J0IHsgZGVmaW5lIH0gZnJvbSBcIi4uL2VsZW1lbnRzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZShjbGFzcyBSZXR1cm5CbG9jayB7XG4gIGNvbnN0cnVjdG9yKHN0cmluZywgc3RlcHMsIG5vbnNlbnNpY2FsLCByZXR1cm5TdGF0ZW1lbnQpIHtcbiAgICB0aGlzLnN0cmluZyA9IHN0cmluZztcbiAgICB0aGlzLnN0ZXBzID0gc3RlcHM7XG4gICAgdGhpcy5ub25zZW5zaWNhbCA9IG5vbnNlbnNpY2FsO1xuICAgIHRoaXMucmV0dXJuU3RhdGVtZW50ID0gcmV0dXJuU3RhdGVtZW50O1xuICB9XG5cbiAgZ2V0U3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLnN0cmluZztcbiAgfVxuXG4gIGdldFN0ZXBzKCkge1xuICAgIHJldHVybiB0aGlzLnN0ZXBzO1xuICB9XG5cbiAgaXNOb25zZW5zaWNhbCgpIHtcbiAgICByZXR1cm4gdGhpcy5ub25zZW5zaWNhbDtcbiAgfVxuXG4gIGdldFJldHVyblN0YXRlbWVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5yZXR1cm5TdGF0ZW1lbnQ7XG4gIH1cblxuICBldmFsdWF0ZSh2YXJpYWJsZXMsIGNvbnRleHQpIHtcbiAgICBpZiAoY29udGV4dCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBjb250ZXh0ID0gdmFyaWFibGVzOyAgLy8vXG5cbiAgICAgIHZhcmlhYmxlcyA9IFtdO1xuICAgIH1cblxuICAgIGlmICh0aGlzLm5vbnNlbnNpY2FsKSB7XG4gICAgICBjb25zdCBtZXNzYWdlID0gYFRoZSByZXR1cm4gYmxvY2sgaXMgbm9uc2Vuc2ljYWwuYCxcbiAgICAgICAgICAgIGV4Y2VwdGlvbiA9IEV4Y2VwdGlvbi5mcm9tTWVzc2FnZShtZXNzYWdlKTtcblxuICAgICAgdGhyb3cgZXhjZXB0aW9uO1xuICAgIH1cblxuICAgIGNvbnN0IGJsb2NrQ29udGV4dCA9IEJsb2NrQ29udGV4dC5mcm9tVmFyaWFibGVzKHZhcmlhYmxlcywgY29udGV4dCk7XG5cbiAgICBjb250ZXh0ID0gYmxvY2tDb250ZXh0OyAvLy9cblxuICAgIHRoaXMuc3RlcHMuZm9yRWFjaCgoc3RlcCkgPT4ge1xuICAgICAgc3RlcC5ldmFsdWF0ZShjb250ZXh0KTtcbiAgICB9KTtcblxuICAgIGNvbnN0IGV4cHJlc3Npb24gPSB0aGlzLnJldHVyblN0YXRlbWVudC5ldmFsdWF0ZShjb250ZXh0KTtcblxuICAgIHJldHVybiBleHByZXNzaW9uO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIlJldHVybkJsb2NrXCI7XG59KTtcbiJdLCJuYW1lcyI6WyJkZWZpbmUiLCJSZXR1cm5CbG9jayIsInN0cmluZyIsInN0ZXBzIiwibm9uc2Vuc2ljYWwiLCJyZXR1cm5TdGF0ZW1lbnQiLCJnZXRTdHJpbmciLCJnZXRTdGVwcyIsImlzTm9uc2Vuc2ljYWwiLCJnZXRSZXR1cm5TdGF0ZW1lbnQiLCJldmFsdWF0ZSIsInZhcmlhYmxlcyIsImNvbnRleHQiLCJ1bmRlZmluZWQiLCJtZXNzYWdlIiwiZXhjZXB0aW9uIiwiRXhjZXB0aW9uIiwiZnJvbU1lc3NhZ2UiLCJibG9ja0NvbnRleHQiLCJCbG9ja0NvbnRleHQiLCJmcm9tVmFyaWFibGVzIiwiZm9yRWFjaCIsInN0ZXAiLCJleHByZXNzaW9uIiwibmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBT0E7OztlQUFBOzs7Z0VBTHNCOzREQUNHO3dCQUVGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFdkIsV0FBZUEsSUFBQUEsZ0JBQU0sZ0NBQUM7YUFBTUMsWUFDZEMsTUFBTSxFQUFFQyxLQUFLLEVBQUVDLFdBQVcsRUFBRUMsZUFBZTtnQ0FEN0JKO1FBRXhCLElBQUksQ0FBQ0MsTUFBTSxHQUFHQTtRQUNkLElBQUksQ0FBQ0MsS0FBSyxHQUFHQTtRQUNiLElBQUksQ0FBQ0MsV0FBVyxHQUFHQTtRQUNuQixJQUFJLENBQUNDLGVBQWUsR0FBR0E7Ozs7WUFHekJDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0osTUFBTTtZQUNwQjs7O1lBRUFLLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0osS0FBSztZQUNuQjs7O1lBRUFLLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0osV0FBVztZQUN6Qjs7O1lBRUFLLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0osZUFBZTtZQUM3Qjs7O1lBRUFLLEtBQUFBO21CQUFBQSxTQUFBQSxTQUFTQyxTQUFTLEVBQUVDLE9BQU87Z0JBQ3pCLElBQUlBLFlBQVlDLFdBQVc7b0JBQ3pCRCxVQUFVRCxXQUFZLEdBQUc7b0JBRXpCQSxZQUFZLEVBQUU7Z0JBQ2hCO2dCQUVBLElBQUksSUFBSSxDQUFDUCxXQUFXLEVBQUU7b0JBQ3BCLElBQU1VLFVBQVUsb0NBQ1ZDLFlBQVlDLGtCQUFTLENBQUNDLFdBQVcsQ0FBQ0g7b0JBRXhDLE1BQU1DO2dCQUNSO2dCQUVBLElBQU1HLGVBQWVDLGNBQVksQ0FBQ0MsYUFBYSxDQUFDVCxXQUFXQztnQkFFM0RBLFVBQVVNLGNBQWMsR0FBRztnQkFFM0IsSUFBSSxDQUFDZixLQUFLLENBQUNrQixPQUFPLENBQUMsU0FBQ0M7b0JBQ2xCQSxLQUFLWixRQUFRLENBQUNFO2dCQUNoQjtnQkFFQSxJQUFNVyxhQUFhLElBQUksQ0FBQ2xCLGVBQWUsQ0FBQ0ssUUFBUSxDQUFDRTtnQkFFakQsT0FBT1c7WUFDVDs7OztLQUVBLCtCQUFPQyxRQUFPIn0=