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
var _dom = /*#__PURE__*/ _interop_require_wildcard(require("../../dom"));
var _exception = /*#__PURE__*/ _interop_require_default(require("../../exception"));
var _block = /*#__PURE__*/ _interop_require_default(require("../../context/block"));
var _query = require("../../utilities/query");
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
function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function(nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function _interop_require_wildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) {
        return obj;
    }
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
        return {
            default: obj
        };
    }
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) {
        return cache.get(obj);
    }
    var newObj = {
        __proto__: null
    };
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj){
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
            if (desc && (desc.get || desc.set)) {
                Object.defineProperty(newObj, key, desc);
            } else {
                newObj[key] = obj[key];
            }
        }
    }
    newObj.default = obj;
    if (cache) {
        cache.set(obj, newObj);
    }
    return newObj;
}
var _ReturnBlock;
var stepNodesQuery = (0, _query.nodesQuery)("/returnBlock/step"), nonsenseNodesQuery = (0, _query.nodesQuery)("/returnBlock/nonsense"), expressionReturnBlockNodeQuery = (0, _query.nodeQuery)("/expression/returnBlock"), anonymousProcedureReturnBlockNodeQuery = (0, _query.nodeQuery)("/anonymousProcedure/returnBlock"), procedureDeclarationReturnBlockNodeQuery = (0, _query.nodeQuery)("/procedureDeclaration/returnBlock");
var _default = (0, _dom.domAssigned)((_ReturnBlock = /*#__PURE__*/ function() {
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
                    returnBlock = returnBlockFromReturnBlockNode(returnBlockNode, context);
                }
                return returnBlock;
            }
        },
        {
            key: "fromAnonymousProcedureNode",
            value: function fromAnonymousProcedureNode(anonymousProcedureNode, context) {
                var anonymousProcedureReturnBlockNode = anonymousProcedureReturnBlockNodeQuery(anonymousProcedureNode), returnBlockNode = anonymousProcedureReturnBlockNode, returnBlock = returnBlockFromReturnBlockNode(returnBlockNode, context);
                return returnBlock;
            }
        },
        {
            key: "fromProcedureDeclarationNode",
            value: function fromProcedureDeclarationNode(procedureDeclarationNode, context) {
                var procedureDeclarationReturnBlockNode = procedureDeclarationReturnBlockNodeQuery(procedureDeclarationNode), returnBlockNode = procedureDeclarationReturnBlockNode, returnBlock = returnBlockFromReturnBlockNode(returnBlockNode, context);
                return returnBlock;
            }
        }
    ]);
    return ReturnBlock;
}(), _define_property(_ReturnBlock, "name", "ReturnBlock"), _ReturnBlock));
function stringFromReturnStatement(returnStatement, context) {
    var returnStatementString = returnStatement.getString(), string = "{ ... ".concat(returnStatementString, " }");
    return string;
}
function stepsFromReturnBlockNode(returnBlockNode, context) {
    var Step = _dom.default.Step, stepNodes = stepNodesQuery(returnBlockNode), steps = stepNodes.map(function(stepNode) {
        var step = Step.fromStepNode(stepNode, context);
        return step;
    });
    return steps;
}
function returnBlockFromReturnBlockNode(returnBlockNode, context) {
    var ReturnBlock = _dom.default.ReturnBlock, ReturnStatement = _dom.default.ReturnStatement, returnStatement = ReturnStatement.fromReturnBlockNode(returnBlockNode, context), nonsensical = nonsensicalFromReturnBlockNode(returnBlockNode, context), steps = stepsFromReturnBlockNode(returnBlockNode, context), string = stringFromReturnStatement(returnStatement, context), returnBlock = new ReturnBlock(string, steps, nonsensical, returnStatement);
    return returnBlock;
}
function nonsensicalFromReturnBlockNode(returnBlockNode, context) {
    var nonsenseNodes = nonsenseNodesQuery(returnBlockNode), nonsenseNodesLength = nonsenseNodes.length, nonsensical = nonsenseNodesLength > 0;
    return nonsensical;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kb20vYmxvY2svcmV0dXJuLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgZG9tIGZyb20gXCIuLi8uLi9kb21cIjtcbmltcG9ydCBFeGNlcHRpb24gZnJvbSBcIi4uLy4uL2V4Y2VwdGlvblwiO1xuaW1wb3J0IEJsb2NrQ29udGV4dCBmcm9tIFwiLi4vLi4vY29udGV4dC9ibG9ja1wiO1xuXG5pbXBvcnQgeyBkb21Bc3NpZ25lZCB9IGZyb20gXCIuLi8uLi9kb21cIjtcbmltcG9ydCB7IG5vZGVRdWVyeSwgbm9kZXNRdWVyeSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvcXVlcnlcIjtcblxuY29uc3Qgc3RlcE5vZGVzUXVlcnkgPSBub2Rlc1F1ZXJ5KFwiL3JldHVybkJsb2NrL3N0ZXBcIiksXG4gICAgICBub25zZW5zZU5vZGVzUXVlcnkgPSBub2Rlc1F1ZXJ5KFwiL3JldHVybkJsb2NrL25vbnNlbnNlXCIpLFxuICAgICAgZXhwcmVzc2lvblJldHVybkJsb2NrTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL2V4cHJlc3Npb24vcmV0dXJuQmxvY2tcIiksXG4gICAgICBhbm9ueW1vdXNQcm9jZWR1cmVSZXR1cm5CbG9ja05vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9hbm9ueW1vdXNQcm9jZWR1cmUvcmV0dXJuQmxvY2tcIiksXG4gICAgICBwcm9jZWR1cmVEZWNsYXJhdGlvblJldHVybkJsb2NrTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3Byb2NlZHVyZURlY2xhcmF0aW9uL3JldHVybkJsb2NrXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBkb21Bc3NpZ25lZChjbGFzcyBSZXR1cm5CbG9jayB7XG4gIGNvbnN0cnVjdG9yKHN0cmluZywgc3RlcHMsIG5vbnNlbnNpY2FsLCByZXR1cm5TdGF0ZW1lbnQpIHtcbiAgICB0aGlzLnN0cmluZyA9IHN0cmluZztcbiAgICB0aGlzLnN0ZXBzID0gc3RlcHM7XG4gICAgdGhpcy5ub25zZW5zaWNhbCA9IG5vbnNlbnNpY2FsO1xuICAgIHRoaXMucmV0dXJuU3RhdGVtZW50ID0gcmV0dXJuU3RhdGVtZW50O1xuICB9XG5cbiAgZ2V0U3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLnN0cmluZztcbiAgfVxuXG4gIGdldFN0ZXBzKCkge1xuICAgIHJldHVybiB0aGlzLnN0ZXBzO1xuICB9XG5cbiAgaXNOb25zZW5zaWNhbCgpIHtcbiAgICByZXR1cm4gdGhpcy5ub25zZW5zaWNhbDtcbiAgfVxuXG4gIGdldFJldHVyblN0YXRlbWVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5yZXR1cm5TdGF0ZW1lbnQ7XG4gIH1cblxuICBldmFsdWF0ZSh2YXJpYWJsZXMsIGNvbnRleHQpIHtcbiAgICBpZiAoY29udGV4dCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBjb250ZXh0ID0gdmFyaWFibGVzOyAgLy8vXG5cbiAgICAgIHZhcmlhYmxlcyA9IFtdO1xuICAgIH1cblxuICAgIGlmICh0aGlzLm5vbnNlbnNpY2FsKSB7XG4gICAgICBjb25zdCBtZXNzYWdlID0gYFRoZSByZXR1cm4gYmxvY2sgaXMgbm9uc2Vuc2ljYWwuYCxcbiAgICAgICAgICAgIGV4Y2VwdGlvbiA9IEV4Y2VwdGlvbi5mcm9tTWVzc2FnZShtZXNzYWdlKTtcblxuICAgICAgdGhyb3cgZXhjZXB0aW9uO1xuICAgIH1cblxuICAgIGNvbnN0IGJsb2NrQ29udGV4dCA9IEJsb2NrQ29udGV4dC5mcm9tVmFyaWFibGVzKHZhcmlhYmxlcywgY29udGV4dCk7XG5cbiAgICBjb250ZXh0ID0gYmxvY2tDb250ZXh0OyAvLy9cblxuICAgIHRoaXMuc3RlcHMuZm9yRWFjaCgoc3RlcCkgPT4ge1xuICAgICAgc3RlcC5ldmFsdWF0ZShjb250ZXh0KTtcbiAgICB9KTtcblxuICAgIGNvbnN0IGV4cHJlc3Npb24gPSB0aGlzLnJldHVyblN0YXRlbWVudC5ldmFsdWF0ZShjb250ZXh0KTtcblxuICAgIHJldHVybiBleHByZXNzaW9uO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIlJldHVybkJsb2NrXCI7XG5cbiAgc3RhdGljIGZyb21FeHByZXNzaW9uTm9kZShleHByZXNzaW9uTm9kZSwgY29udGV4dCkge1xuICAgIGxldCByZXR1cm5CbG9jayA9IG51bGw7XG5cbiAgICBjb25zdCBleHByZXNzaW9uUmV0dXJuQmxvY2tOb2RlID0gZXhwcmVzc2lvblJldHVybkJsb2NrTm9kZVF1ZXJ5KGV4cHJlc3Npb25Ob2RlKTtcblxuICAgIGlmIChleHByZXNzaW9uUmV0dXJuQmxvY2tOb2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCByZXR1cm5CbG9ja05vZGUgPSBleHByZXNzaW9uUmV0dXJuQmxvY2tOb2RlOyAgLy8vXG5cbiAgICAgIHJldHVybkJsb2NrID0gcmV0dXJuQmxvY2tGcm9tUmV0dXJuQmxvY2tOb2RlKHJldHVybkJsb2NrTm9kZSwgY29udGV4dCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJldHVybkJsb2NrO1xuICB9XG5cbiAgc3RhdGljIGZyb21Bbm9ueW1vdXNQcm9jZWR1cmVOb2RlKGFub255bW91c1Byb2NlZHVyZU5vZGUsIGNvbnRleHQpIHtcbiAgICBjb25zdCBhbm9ueW1vdXNQcm9jZWR1cmVSZXR1cm5CbG9ja05vZGUgPSBhbm9ueW1vdXNQcm9jZWR1cmVSZXR1cm5CbG9ja05vZGVRdWVyeShhbm9ueW1vdXNQcm9jZWR1cmVOb2RlKSxcbiAgICAgICAgICByZXR1cm5CbG9ja05vZGUgPSBhbm9ueW1vdXNQcm9jZWR1cmVSZXR1cm5CbG9ja05vZGUsICAvLy9cbiAgICAgICAgICByZXR1cm5CbG9jayA9IHJldHVybkJsb2NrRnJvbVJldHVybkJsb2NrTm9kZShyZXR1cm5CbG9ja05vZGUsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIHJldHVybkJsb2NrO1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUocHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gICAgY29uc3QgcHJvY2VkdXJlRGVjbGFyYXRpb25SZXR1cm5CbG9ja05vZGUgPSBwcm9jZWR1cmVEZWNsYXJhdGlvblJldHVybkJsb2NrTm9kZVF1ZXJ5KHByb2NlZHVyZURlY2xhcmF0aW9uTm9kZSksXG4gICAgICAgICAgcmV0dXJuQmxvY2tOb2RlID0gcHJvY2VkdXJlRGVjbGFyYXRpb25SZXR1cm5CbG9ja05vZGUsICAvLy9cbiAgICAgICAgICByZXR1cm5CbG9jayA9IHJldHVybkJsb2NrRnJvbVJldHVybkJsb2NrTm9kZShyZXR1cm5CbG9ja05vZGUsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIHJldHVybkJsb2NrO1xuICB9XG59KTtcblxuZnVuY3Rpb24gc3RyaW5nRnJvbVJldHVyblN0YXRlbWVudChyZXR1cm5TdGF0ZW1lbnQsIGNvbnRleHQpIHtcbiAgY29uc3QgcmV0dXJuU3RhdGVtZW50U3RyaW5nID0gcmV0dXJuU3RhdGVtZW50LmdldFN0cmluZygpLFxuICAgICAgICBzdHJpbmcgPSBgeyAuLi4gJHtyZXR1cm5TdGF0ZW1lbnRTdHJpbmd9IH1gO1xuXG4gIHJldHVybiBzdHJpbmc7XG59XG5cbmZ1bmN0aW9uIHN0ZXBzRnJvbVJldHVybkJsb2NrTm9kZShyZXR1cm5CbG9ja05vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBTdGVwIH0gPSBkb20sXG4gICAgICAgIHN0ZXBOb2RlcyA9IHN0ZXBOb2Rlc1F1ZXJ5KHJldHVybkJsb2NrTm9kZSksXG4gICAgICAgIHN0ZXBzID0gc3RlcE5vZGVzLm1hcCgoc3RlcE5vZGUpID0+IHtcbiAgICAgICAgICBjb25zdCBzdGVwID0gU3RlcC5mcm9tU3RlcE5vZGUoc3RlcE5vZGUsIGNvbnRleHQpO1xuXG4gICAgICAgICAgcmV0dXJuIHN0ZXA7XG4gICAgICAgIH0pO1xuXG4gIHJldHVybiBzdGVwcztcbn1cblxuZnVuY3Rpb24gcmV0dXJuQmxvY2tGcm9tUmV0dXJuQmxvY2tOb2RlKHJldHVybkJsb2NrTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFJldHVybkJsb2NrLCBSZXR1cm5TdGF0ZW1lbnQgfSA9IGRvbSxcbiAgICAgICAgcmV0dXJuU3RhdGVtZW50ID0gUmV0dXJuU3RhdGVtZW50LmZyb21SZXR1cm5CbG9ja05vZGUocmV0dXJuQmxvY2tOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgbm9uc2Vuc2ljYWwgPSBub25zZW5zaWNhbEZyb21SZXR1cm5CbG9ja05vZGUocmV0dXJuQmxvY2tOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgc3RlcHMgPSBzdGVwc0Zyb21SZXR1cm5CbG9ja05vZGUocmV0dXJuQmxvY2tOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgc3RyaW5nID0gc3RyaW5nRnJvbVJldHVyblN0YXRlbWVudChyZXR1cm5TdGF0ZW1lbnQsIGNvbnRleHQpLFxuICAgICAgICByZXR1cm5CbG9jayA9IG5ldyBSZXR1cm5CbG9jayhzdHJpbmcsIHN0ZXBzLCBub25zZW5zaWNhbCwgcmV0dXJuU3RhdGVtZW50KTtcblxuICByZXR1cm4gcmV0dXJuQmxvY2s7XG59XG5cbmZ1bmN0aW9uIG5vbnNlbnNpY2FsRnJvbVJldHVybkJsb2NrTm9kZShyZXR1cm5CbG9ja05vZGUsIGNvbnRleHQpIHtcbiAgY29uc3Qgbm9uc2Vuc2VOb2RlcyA9IG5vbnNlbnNlTm9kZXNRdWVyeShyZXR1cm5CbG9ja05vZGUpLFxuICAgICAgICBub25zZW5zZU5vZGVzTGVuZ3RoID0gbm9uc2Vuc2VOb2Rlcy5sZW5ndGgsXG4gICAgICAgIG5vbnNlbnNpY2FsID0gKG5vbnNlbnNlTm9kZXNMZW5ndGggPiAwKTtcblxuICByZXR1cm4gbm9uc2Vuc2ljYWw7XG59XG4iXSwibmFtZXMiOlsic3RlcE5vZGVzUXVlcnkiLCJub2Rlc1F1ZXJ5Iiwibm9uc2Vuc2VOb2Rlc1F1ZXJ5IiwiZXhwcmVzc2lvblJldHVybkJsb2NrTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5IiwiYW5vbnltb3VzUHJvY2VkdXJlUmV0dXJuQmxvY2tOb2RlUXVlcnkiLCJwcm9jZWR1cmVEZWNsYXJhdGlvblJldHVybkJsb2NrTm9kZVF1ZXJ5IiwiZG9tQXNzaWduZWQiLCJSZXR1cm5CbG9jayIsInN0cmluZyIsInN0ZXBzIiwibm9uc2Vuc2ljYWwiLCJyZXR1cm5TdGF0ZW1lbnQiLCJnZXRTdHJpbmciLCJnZXRTdGVwcyIsImlzTm9uc2Vuc2ljYWwiLCJnZXRSZXR1cm5TdGF0ZW1lbnQiLCJldmFsdWF0ZSIsInZhcmlhYmxlcyIsImNvbnRleHQiLCJ1bmRlZmluZWQiLCJtZXNzYWdlIiwiZXhjZXB0aW9uIiwiRXhjZXB0aW9uIiwiZnJvbU1lc3NhZ2UiLCJibG9ja0NvbnRleHQiLCJCbG9ja0NvbnRleHQiLCJmcm9tVmFyaWFibGVzIiwiZm9yRWFjaCIsInN0ZXAiLCJleHByZXNzaW9uIiwiZnJvbUV4cHJlc3Npb25Ob2RlIiwiZXhwcmVzc2lvbk5vZGUiLCJyZXR1cm5CbG9jayIsImV4cHJlc3Npb25SZXR1cm5CbG9ja05vZGUiLCJyZXR1cm5CbG9ja05vZGUiLCJyZXR1cm5CbG9ja0Zyb21SZXR1cm5CbG9ja05vZGUiLCJmcm9tQW5vbnltb3VzUHJvY2VkdXJlTm9kZSIsImFub255bW91c1Byb2NlZHVyZU5vZGUiLCJhbm9ueW1vdXNQcm9jZWR1cmVSZXR1cm5CbG9ja05vZGUiLCJmcm9tUHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlIiwicHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlIiwicHJvY2VkdXJlRGVjbGFyYXRpb25SZXR1cm5CbG9ja05vZGUiLCJuYW1lIiwic3RyaW5nRnJvbVJldHVyblN0YXRlbWVudCIsInJldHVyblN0YXRlbWVudFN0cmluZyIsInN0ZXBzRnJvbVJldHVybkJsb2NrTm9kZSIsIlN0ZXAiLCJkb20iLCJzdGVwTm9kZXMiLCJtYXAiLCJzdGVwTm9kZSIsImZyb21TdGVwTm9kZSIsIlJldHVyblN0YXRlbWVudCIsImZyb21SZXR1cm5CbG9ja05vZGUiLCJub25zZW5zaWNhbEZyb21SZXR1cm5CbG9ja05vZGUiLCJub25zZW5zZU5vZGVzIiwibm9uc2Vuc2VOb2Rlc0xlbmd0aCIsImxlbmd0aCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBZUE7OztlQUFBOzs7MkRBYmdCO2dFQUNNOzREQUNHO3FCQUdhOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV0QyxJQUFNQSxpQkFBaUJDLElBQUFBLGlCQUFVLEVBQUMsc0JBQzVCQyxxQkFBcUJELElBQUFBLGlCQUFVLEVBQUMsMEJBQ2hDRSxpQ0FBaUNDLElBQUFBLGdCQUFTLEVBQUMsNEJBQzNDQyx5Q0FBeUNELElBQUFBLGdCQUFTLEVBQUMsb0NBQ25ERSwyQ0FBMkNGLElBQUFBLGdCQUFTLEVBQUM7SUFFM0QsV0FBZUcsSUFBQUEsZ0JBQVcsZ0NBQUM7YUFBTUMsWUFDbkJDLE1BQU0sRUFBRUMsS0FBSyxFQUFFQyxXQUFXLEVBQUVDLGVBQWU7Z0NBRHhCSjtRQUU3QixJQUFJLENBQUNDLE1BQU0sR0FBR0E7UUFDZCxJQUFJLENBQUNDLEtBQUssR0FBR0E7UUFDYixJQUFJLENBQUNDLFdBQVcsR0FBR0E7UUFDbkIsSUFBSSxDQUFDQyxlQUFlLEdBQUdBOzs7O1lBR3pCQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNKLE1BQU07WUFDcEI7OztZQUVBSyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNKLEtBQUs7WUFDbkI7OztZQUVBSyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNKLFdBQVc7WUFDekI7OztZQUVBSyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNKLGVBQWU7WUFDN0I7OztZQUVBSyxLQUFBQTttQkFBQUEsU0FBQUEsU0FBU0MsU0FBUyxFQUFFQyxPQUFPO2dCQUN6QixJQUFJQSxZQUFZQyxXQUFXO29CQUN6QkQsVUFBVUQsV0FBWSxHQUFHO29CQUV6QkEsWUFBWSxFQUFFO2dCQUNoQjtnQkFFQSxJQUFJLElBQUksQ0FBQ1AsV0FBVyxFQUFFO29CQUNwQixJQUFNVSxVQUFVLG9DQUNWQyxZQUFZQyxrQkFBUyxDQUFDQyxXQUFXLENBQUNIO29CQUV4QyxNQUFNQztnQkFDUjtnQkFFQSxJQUFNRyxlQUFlQyxjQUFZLENBQUNDLGFBQWEsQ0FBQ1QsV0FBV0M7Z0JBRTNEQSxVQUFVTSxjQUFjLEdBQUc7Z0JBRTNCLElBQUksQ0FBQ2YsS0FBSyxDQUFDa0IsT0FBTyxDQUFDLFNBQUNDO29CQUNsQkEsS0FBS1osUUFBUSxDQUFDRTtnQkFDaEI7Z0JBRUEsSUFBTVcsYUFBYSxJQUFJLENBQUNsQixlQUFlLENBQUNLLFFBQVEsQ0FBQ0U7Z0JBRWpELE9BQU9XO1lBQ1Q7Ozs7WUFJT0MsS0FBQUE7bUJBQVAsU0FBT0EsbUJBQW1CQyxjQUFjLEVBQUViLE9BQU87Z0JBQy9DLElBQUljLGNBQWM7Z0JBRWxCLElBQU1DLDRCQUE0Qi9CLCtCQUErQjZCO2dCQUVqRSxJQUFJRSw4QkFBOEIsTUFBTTtvQkFDdEMsSUFBTUMsa0JBQWtCRCwyQkFBNEIsR0FBRztvQkFFdkRELGNBQWNHLCtCQUErQkQsaUJBQWlCaEI7Z0JBQ2hFO2dCQUVBLE9BQU9jO1lBQ1Q7OztZQUVPSSxLQUFBQTttQkFBUCxTQUFPQSwyQkFBMkJDLHNCQUFzQixFQUFFbkIsT0FBTztnQkFDL0QsSUFBTW9CLG9DQUFvQ2xDLHVDQUF1Q2lDLHlCQUMzRUgsa0JBQWtCSSxtQ0FDbEJOLGNBQWNHLCtCQUErQkQsaUJBQWlCaEI7Z0JBRXBFLE9BQU9jO1lBQ1Q7OztZQUVPTyxLQUFBQTttQkFBUCxTQUFPQSw2QkFBNkJDLHdCQUF3QixFQUFFdEIsT0FBTztnQkFDbkUsSUFBTXVCLHNDQUFzQ3BDLHlDQUF5Q21DLDJCQUMvRU4sa0JBQWtCTyxxQ0FDbEJULGNBQWNHLCtCQUErQkQsaUJBQWlCaEI7Z0JBRXBFLE9BQU9jO1lBQ1Q7Ozs7S0E5QkEsK0JBQU9VLFFBQU87QUFpQ2hCLFNBQVNDLDBCQUEwQmhDLGVBQWUsRUFBRU8sT0FBTztJQUN6RCxJQUFNMEIsd0JBQXdCakMsZ0JBQWdCQyxTQUFTLElBQ2pESixTQUFTLEFBQUMsU0FBOEIsT0FBdEJvQyx1QkFBc0I7SUFFOUMsT0FBT3BDO0FBQ1Q7QUFFQSxTQUFTcUMseUJBQXlCWCxlQUFlLEVBQUVoQixPQUFPO0lBQ3hELElBQU0sQUFBRTRCLE9BQVNDLFlBQUcsQ0FBWkQsTUFDRkUsWUFBWWpELGVBQWVtQyxrQkFDM0J6QixRQUFRdUMsVUFBVUMsR0FBRyxDQUFDLFNBQUNDO1FBQ3JCLElBQU10QixPQUFPa0IsS0FBS0ssWUFBWSxDQUFDRCxVQUFVaEM7UUFFekMsT0FBT1U7SUFDVDtJQUVOLE9BQU9uQjtBQUNUO0FBRUEsU0FBUzBCLCtCQUErQkQsZUFBZSxFQUFFaEIsT0FBTztJQUM5RCxJQUFRWCxjQUFpQ3dDLFlBQUcsQ0FBcEN4QyxhQUFhNkMsa0JBQW9CTCxZQUFHLENBQXZCSyxpQkFDZnpDLGtCQUFrQnlDLGdCQUFnQkMsbUJBQW1CLENBQUNuQixpQkFBaUJoQixVQUN2RVIsY0FBYzRDLCtCQUErQnBCLGlCQUFpQmhCLFVBQzlEVCxRQUFRb0MseUJBQXlCWCxpQkFBaUJoQixVQUNsRFYsU0FBU21DLDBCQUEwQmhDLGlCQUFpQk8sVUFDcERjLGNBQWMsSUFBSXpCLFlBQVlDLFFBQVFDLE9BQU9DLGFBQWFDO0lBRWhFLE9BQU9xQjtBQUNUO0FBRUEsU0FBU3NCLCtCQUErQnBCLGVBQWUsRUFBRWhCLE9BQU87SUFDOUQsSUFBTXFDLGdCQUFnQnRELG1CQUFtQmlDLGtCQUNuQ3NCLHNCQUFzQkQsY0FBY0UsTUFBTSxFQUMxQy9DLGNBQWU4QyxzQkFBc0I7SUFFM0MsT0FBTzlDO0FBQ1QifQ==