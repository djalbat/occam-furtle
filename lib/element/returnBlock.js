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
var _query = require("../utilities/query");
var _element = require("../utilities/element");
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
var expressionReturnBlockNodeQuery = (0, _query.nodeQuery)("/expression/returnBlock"), procedureDeclarationReturnBlockNodeQuery = (0, _query.nodeQuery)("/procedureDeclaration/returnBlock");
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
    ], [
        {
            key: "fromExpressionNode",
            value: function fromExpressionNode(expressionNode, context) {
                var returnBlock = null;
                var expressionReturnBlockNode = expressionReturnBlockNodeQuery(expressionNode);
                if (expressionReturnBlockNode !== null) {
                    var returnBlockNode = expressionReturnBlockNode; ///
                    returnBlock = (0, _element.returnBlockFromReturnBlockNode)(returnBlockNode, context);
                }
                return returnBlock;
            }
        },
        {
            key: "fromProcedureDeclarationNode",
            value: function fromProcedureDeclarationNode(procedureDeclarationNode, context) {
                var procedureDeclarationReturnBlockNode = procedureDeclarationReturnBlockNodeQuery(procedureDeclarationNode), returnBlockNode = procedureDeclarationReturnBlockNode, returnBlock = (0, _element.returnBlockFromReturnBlockNode)(returnBlockNode, context);
                return returnBlock;
            }
        }
    ]);
    return ReturnBlock;
}(), _define_property(_ReturnBlock, "name", "ReturnBlock"), _ReturnBlock));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3JldHVybkJsb2NrLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgRXhjZXB0aW9uIGZyb20gXCIuLi9leGNlcHRpb25cIjtcbmltcG9ydCBCbG9ja0NvbnRleHQgZnJvbSBcIi4uL2NvbnRleHQvYmxvY2tcIjtcblxuaW1wb3J0IHsgZGVmaW5lIH0gZnJvbSBcIi4uL2VsZW1lbnRzXCI7XG5pbXBvcnQgeyBub2RlUXVlcnkgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5pbXBvcnQgeyByZXR1cm5CbG9ja0Zyb21SZXR1cm5CbG9ja05vZGUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2VsZW1lbnRcIjtcblxuY29uc3QgZXhwcmVzc2lvblJldHVybkJsb2NrTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL2V4cHJlc3Npb24vcmV0dXJuQmxvY2tcIiksXG4gICAgICBwcm9jZWR1cmVEZWNsYXJhdGlvblJldHVybkJsb2NrTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3Byb2NlZHVyZURlY2xhcmF0aW9uL3JldHVybkJsb2NrXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmUoY2xhc3MgUmV0dXJuQmxvY2sge1xuICBjb25zdHJ1Y3RvcihzdHJpbmcsIHN0ZXBzLCBub25zZW5zaWNhbCwgcmV0dXJuU3RhdGVtZW50KSB7XG4gICAgdGhpcy5zdHJpbmcgPSBzdHJpbmc7XG4gICAgdGhpcy5zdGVwcyA9IHN0ZXBzO1xuICAgIHRoaXMubm9uc2Vuc2ljYWwgPSBub25zZW5zaWNhbDtcbiAgICB0aGlzLnJldHVyblN0YXRlbWVudCA9IHJldHVyblN0YXRlbWVudDtcbiAgfVxuXG4gIGdldFN0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5zdHJpbmc7XG4gIH1cblxuICBnZXRTdGVwcygpIHtcbiAgICByZXR1cm4gdGhpcy5zdGVwcztcbiAgfVxuXG4gIGlzTm9uc2Vuc2ljYWwoKSB7XG4gICAgcmV0dXJuIHRoaXMubm9uc2Vuc2ljYWw7XG4gIH1cblxuICBnZXRSZXR1cm5TdGF0ZW1lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMucmV0dXJuU3RhdGVtZW50O1xuICB9XG5cbiAgZXZhbHVhdGUodmFyaWFibGVzLCBjb250ZXh0KSB7XG4gICAgaWYgKGNvbnRleHQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgY29udGV4dCA9IHZhcmlhYmxlczsgIC8vL1xuXG4gICAgICB2YXJpYWJsZXMgPSBbXTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5ub25zZW5zaWNhbCkge1xuICAgICAgY29uc3QgbWVzc2FnZSA9IGBUaGUgcmV0dXJuIGJsb2NrIGlzIG5vbnNlbnNpY2FsLmAsXG4gICAgICAgICAgICBleGNlcHRpb24gPSBFeGNlcHRpb24uZnJvbU1lc3NhZ2UobWVzc2FnZSk7XG5cbiAgICAgIHRocm93IGV4Y2VwdGlvbjtcbiAgICB9XG5cbiAgICBjb25zdCBibG9ja0NvbnRleHQgPSBCbG9ja0NvbnRleHQuZnJvbVZhcmlhYmxlcyh2YXJpYWJsZXMsIGNvbnRleHQpO1xuXG4gICAgY29udGV4dCA9IGJsb2NrQ29udGV4dDsgLy8vXG5cbiAgICB0aGlzLnN0ZXBzLmZvckVhY2goKHN0ZXApID0+IHtcbiAgICAgIHN0ZXAuZXZhbHVhdGUoY29udGV4dCk7XG4gICAgfSk7XG5cbiAgICBjb25zdCBleHByZXNzaW9uID0gdGhpcy5yZXR1cm5TdGF0ZW1lbnQuZXZhbHVhdGUoY29udGV4dCk7XG5cbiAgICByZXR1cm4gZXhwcmVzc2lvbjtcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJSZXR1cm5CbG9ja1wiO1xuXG4gIHN0YXRpYyBmcm9tRXhwcmVzc2lvbk5vZGUoZXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpIHtcbiAgICBsZXQgcmV0dXJuQmxvY2sgPSBudWxsO1xuXG4gICAgY29uc3QgZXhwcmVzc2lvblJldHVybkJsb2NrTm9kZSA9IGV4cHJlc3Npb25SZXR1cm5CbG9ja05vZGVRdWVyeShleHByZXNzaW9uTm9kZSk7XG5cbiAgICBpZiAoZXhwcmVzc2lvblJldHVybkJsb2NrTm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgcmV0dXJuQmxvY2tOb2RlID0gZXhwcmVzc2lvblJldHVybkJsb2NrTm9kZTsgIC8vL1xuXG4gICAgICByZXR1cm5CbG9jayA9IHJldHVybkJsb2NrRnJvbVJldHVybkJsb2NrTm9kZShyZXR1cm5CbG9ja05vZGUsIGNvbnRleHQpO1xuICAgIH1cblxuICAgIHJldHVybiByZXR1cm5CbG9jaztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlKHByb2NlZHVyZURlY2xhcmF0aW9uTm9kZSwgY29udGV4dCkge1xuICAgIGNvbnN0IHByb2NlZHVyZURlY2xhcmF0aW9uUmV0dXJuQmxvY2tOb2RlID0gcHJvY2VkdXJlRGVjbGFyYXRpb25SZXR1cm5CbG9ja05vZGVRdWVyeShwcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUpLFxuICAgICAgICAgIHJldHVybkJsb2NrTm9kZSA9IHByb2NlZHVyZURlY2xhcmF0aW9uUmV0dXJuQmxvY2tOb2RlLCAgLy8vXG4gICAgICAgICAgcmV0dXJuQmxvY2sgPSByZXR1cm5CbG9ja0Zyb21SZXR1cm5CbG9ja05vZGUocmV0dXJuQmxvY2tOb2RlLCBjb250ZXh0KTtcblxuICAgIHJldHVybiByZXR1cm5CbG9jaztcbiAgfVxufSk7XG4iXSwibmFtZXMiOlsiZXhwcmVzc2lvblJldHVybkJsb2NrTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5IiwicHJvY2VkdXJlRGVjbGFyYXRpb25SZXR1cm5CbG9ja05vZGVRdWVyeSIsImRlZmluZSIsIlJldHVybkJsb2NrIiwic3RyaW5nIiwic3RlcHMiLCJub25zZW5zaWNhbCIsInJldHVyblN0YXRlbWVudCIsImdldFN0cmluZyIsImdldFN0ZXBzIiwiaXNOb25zZW5zaWNhbCIsImdldFJldHVyblN0YXRlbWVudCIsImV2YWx1YXRlIiwidmFyaWFibGVzIiwiY29udGV4dCIsInVuZGVmaW5lZCIsIm1lc3NhZ2UiLCJleGNlcHRpb24iLCJFeGNlcHRpb24iLCJmcm9tTWVzc2FnZSIsImJsb2NrQ29udGV4dCIsIkJsb2NrQ29udGV4dCIsImZyb21WYXJpYWJsZXMiLCJmb3JFYWNoIiwic3RlcCIsImV4cHJlc3Npb24iLCJmcm9tRXhwcmVzc2lvbk5vZGUiLCJleHByZXNzaW9uTm9kZSIsInJldHVybkJsb2NrIiwiZXhwcmVzc2lvblJldHVybkJsb2NrTm9kZSIsInJldHVybkJsb2NrTm9kZSIsInJldHVybkJsb2NrRnJvbVJldHVybkJsb2NrTm9kZSIsImZyb21Qcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUiLCJwcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUiLCJwcm9jZWR1cmVEZWNsYXJhdGlvblJldHVybkJsb2NrTm9kZSIsIm5hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVlBOzs7ZUFBQTs7O2dFQVZzQjs0REFDRzt3QkFFRjtxQkFDRzt1QkFDcUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUUvQyxJQUFNQSxpQ0FBaUNDLElBQUFBLGdCQUFTLEVBQUMsNEJBQzNDQywyQ0FBMkNELElBQUFBLGdCQUFTLEVBQUM7SUFFM0QsV0FBZUUsSUFBQUEsZ0JBQU0sZ0NBQUM7YUFBTUMsWUFDZEMsTUFBTSxFQUFFQyxLQUFLLEVBQUVDLFdBQVcsRUFBRUMsZUFBZTtnQ0FEN0JKO1FBRXhCLElBQUksQ0FBQ0MsTUFBTSxHQUFHQTtRQUNkLElBQUksQ0FBQ0MsS0FBSyxHQUFHQTtRQUNiLElBQUksQ0FBQ0MsV0FBVyxHQUFHQTtRQUNuQixJQUFJLENBQUNDLGVBQWUsR0FBR0E7Ozs7WUFHekJDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0osTUFBTTtZQUNwQjs7O1lBRUFLLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0osS0FBSztZQUNuQjs7O1lBRUFLLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0osV0FBVztZQUN6Qjs7O1lBRUFLLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0osZUFBZTtZQUM3Qjs7O1lBRUFLLEtBQUFBO21CQUFBQSxTQUFBQSxTQUFTQyxTQUFTLEVBQUVDLE9BQU87Z0JBQ3pCLElBQUlBLFlBQVlDLFdBQVc7b0JBQ3pCRCxVQUFVRCxXQUFZLEdBQUc7b0JBRXpCQSxZQUFZLEVBQUU7Z0JBQ2hCO2dCQUVBLElBQUksSUFBSSxDQUFDUCxXQUFXLEVBQUU7b0JBQ3BCLElBQU1VLFVBQVUsb0NBQ1ZDLFlBQVlDLGtCQUFTLENBQUNDLFdBQVcsQ0FBQ0g7b0JBRXhDLE1BQU1DO2dCQUNSO2dCQUVBLElBQU1HLGVBQWVDLGNBQVksQ0FBQ0MsYUFBYSxDQUFDVCxXQUFXQztnQkFFM0RBLFVBQVVNLGNBQWMsR0FBRztnQkFFM0IsSUFBSSxDQUFDZixLQUFLLENBQUNrQixPQUFPLENBQUMsU0FBQ0M7b0JBQ2xCQSxLQUFLWixRQUFRLENBQUNFO2dCQUNoQjtnQkFFQSxJQUFNVyxhQUFhLElBQUksQ0FBQ2xCLGVBQWUsQ0FBQ0ssUUFBUSxDQUFDRTtnQkFFakQsT0FBT1c7WUFDVDs7OztZQUlPQyxLQUFBQTttQkFBUCxTQUFPQSxtQkFBbUJDLGNBQWMsRUFBRWIsT0FBTztnQkFDL0MsSUFBSWMsY0FBYztnQkFFbEIsSUFBTUMsNEJBQTRCOUIsK0JBQStCNEI7Z0JBRWpFLElBQUlFLDhCQUE4QixNQUFNO29CQUN0QyxJQUFNQyxrQkFBa0JELDJCQUE0QixHQUFHO29CQUV2REQsY0FBY0csSUFBQUEsdUNBQThCLEVBQUNELGlCQUFpQmhCO2dCQUNoRTtnQkFFQSxPQUFPYztZQUNUOzs7WUFFT0ksS0FBQUE7bUJBQVAsU0FBT0EsNkJBQTZCQyx3QkFBd0IsRUFBRW5CLE9BQU87Z0JBQ25FLElBQU1vQixzQ0FBc0NqQyx5Q0FBeUNnQywyQkFDL0VILGtCQUFrQkkscUNBQ2xCTixjQUFjRyxJQUFBQSx1Q0FBOEIsRUFBQ0QsaUJBQWlCaEI7Z0JBRXBFLE9BQU9jO1lBQ1Q7Ozs7S0F0QkEsK0JBQU9PLFFBQU8ifQ==