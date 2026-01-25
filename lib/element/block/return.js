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
var _elements = /*#__PURE__*/ _interop_require_wildcard(require("../../elements"));
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
    var Step = _elements.default.Step, stepNodes = stepNodesQuery(returnBlockNode), steps = stepNodes.map(function(stepNode) {
        var step = Step.fromStepNode(stepNode, context);
        return step;
    });
    return steps;
}
function returnBlockFromReturnBlockNode(returnBlockNode, context) {
    var ReturnBlock = _elements.default.ReturnBlock, ReturnStatement = _elements.default.ReturnStatement, returnStatement = ReturnStatement.fromReturnBlockNode(returnBlockNode, context), nonsensical = nonsensicalFromReturnBlockNode(returnBlockNode, context), steps = stepsFromReturnBlockNode(returnBlockNode, context), string = stringFromReturnStatement(returnStatement, context), returnBlock = new ReturnBlock(string, steps, nonsensical, returnStatement);
    return returnBlock;
}
function nonsensicalFromReturnBlockNode(returnBlockNode, context) {
    var nonsenseNodes = nonsenseNodesQuery(returnBlockNode), nonsenseNodesLength = nonsenseNodes.length, nonsensical = nonsenseNodesLength > 0;
    return nonsensical;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L2Jsb2NrL3JldHVybi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IGVsZW1lbnRzIGZyb20gXCIuLi8uLi9lbGVtZW50c1wiO1xuaW1wb3J0IEV4Y2VwdGlvbiBmcm9tIFwiLi4vLi4vZXhjZXB0aW9uXCI7XG5pbXBvcnQgQmxvY2tDb250ZXh0IGZyb20gXCIuLi8uLi9jb250ZXh0L2Jsb2NrXCI7XG5cbmltcG9ydCB7IGRlZmluZSB9IGZyb20gXCIuLi8uLi9lbGVtZW50c1wiO1xuaW1wb3J0IHsgbm9kZVF1ZXJ5LCBub2Rlc1F1ZXJ5IH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9xdWVyeVwiO1xuXG5jb25zdCBzdGVwTm9kZXNRdWVyeSA9IG5vZGVzUXVlcnkoXCIvcmV0dXJuQmxvY2svc3RlcFwiKSxcbiAgICAgIG5vbnNlbnNlTm9kZXNRdWVyeSA9IG5vZGVzUXVlcnkoXCIvcmV0dXJuQmxvY2svbm9uc2Vuc2VcIiksXG4gICAgICBleHByZXNzaW9uUmV0dXJuQmxvY2tOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvZXhwcmVzc2lvbi9yZXR1cm5CbG9ja1wiKSxcbiAgICAgIGFub255bW91c1Byb2NlZHVyZVJldHVybkJsb2NrTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL2Fub255bW91c1Byb2NlZHVyZS9yZXR1cm5CbG9ja1wiKSxcbiAgICAgIHByb2NlZHVyZURlY2xhcmF0aW9uUmV0dXJuQmxvY2tOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvcHJvY2VkdXJlRGVjbGFyYXRpb24vcmV0dXJuQmxvY2tcIik7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZShjbGFzcyBSZXR1cm5CbG9jayB7XG4gIGNvbnN0cnVjdG9yKHN0cmluZywgc3RlcHMsIG5vbnNlbnNpY2FsLCByZXR1cm5TdGF0ZW1lbnQpIHtcbiAgICB0aGlzLnN0cmluZyA9IHN0cmluZztcbiAgICB0aGlzLnN0ZXBzID0gc3RlcHM7XG4gICAgdGhpcy5ub25zZW5zaWNhbCA9IG5vbnNlbnNpY2FsO1xuICAgIHRoaXMucmV0dXJuU3RhdGVtZW50ID0gcmV0dXJuU3RhdGVtZW50O1xuICB9XG5cbiAgZ2V0U3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLnN0cmluZztcbiAgfVxuXG4gIGdldFN0ZXBzKCkge1xuICAgIHJldHVybiB0aGlzLnN0ZXBzO1xuICB9XG5cbiAgaXNOb25zZW5zaWNhbCgpIHtcbiAgICByZXR1cm4gdGhpcy5ub25zZW5zaWNhbDtcbiAgfVxuXG4gIGdldFJldHVyblN0YXRlbWVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5yZXR1cm5TdGF0ZW1lbnQ7XG4gIH1cblxuICBldmFsdWF0ZSh2YXJpYWJsZXMsIGNvbnRleHQpIHtcbiAgICBpZiAoY29udGV4dCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBjb250ZXh0ID0gdmFyaWFibGVzOyAgLy8vXG5cbiAgICAgIHZhcmlhYmxlcyA9IFtdO1xuICAgIH1cblxuICAgIGlmICh0aGlzLm5vbnNlbnNpY2FsKSB7XG4gICAgICBjb25zdCBtZXNzYWdlID0gYFRoZSByZXR1cm4gYmxvY2sgaXMgbm9uc2Vuc2ljYWwuYCxcbiAgICAgICAgICAgIGV4Y2VwdGlvbiA9IEV4Y2VwdGlvbi5mcm9tTWVzc2FnZShtZXNzYWdlKTtcblxuICAgICAgdGhyb3cgZXhjZXB0aW9uO1xuICAgIH1cblxuICAgIGNvbnN0IGJsb2NrQ29udGV4dCA9IEJsb2NrQ29udGV4dC5mcm9tVmFyaWFibGVzKHZhcmlhYmxlcywgY29udGV4dCk7XG5cbiAgICBjb250ZXh0ID0gYmxvY2tDb250ZXh0OyAvLy9cblxuICAgIHRoaXMuc3RlcHMuZm9yRWFjaCgoc3RlcCkgPT4ge1xuICAgICAgc3RlcC5ldmFsdWF0ZShjb250ZXh0KTtcbiAgICB9KTtcblxuICAgIGNvbnN0IGV4cHJlc3Npb24gPSB0aGlzLnJldHVyblN0YXRlbWVudC5ldmFsdWF0ZShjb250ZXh0KTtcblxuICAgIHJldHVybiBleHByZXNzaW9uO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIlJldHVybkJsb2NrXCI7XG5cbiAgc3RhdGljIGZyb21FeHByZXNzaW9uTm9kZShleHByZXNzaW9uTm9kZSwgY29udGV4dCkge1xuICAgIGxldCByZXR1cm5CbG9jayA9IG51bGw7XG5cbiAgICBjb25zdCBleHByZXNzaW9uUmV0dXJuQmxvY2tOb2RlID0gZXhwcmVzc2lvblJldHVybkJsb2NrTm9kZVF1ZXJ5KGV4cHJlc3Npb25Ob2RlKTtcblxuICAgIGlmIChleHByZXNzaW9uUmV0dXJuQmxvY2tOb2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCByZXR1cm5CbG9ja05vZGUgPSBleHByZXNzaW9uUmV0dXJuQmxvY2tOb2RlOyAgLy8vXG5cbiAgICAgIHJldHVybkJsb2NrID0gcmV0dXJuQmxvY2tGcm9tUmV0dXJuQmxvY2tOb2RlKHJldHVybkJsb2NrTm9kZSwgY29udGV4dCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJldHVybkJsb2NrO1xuICB9XG5cbiAgc3RhdGljIGZyb21Bbm9ueW1vdXNQcm9jZWR1cmVOb2RlKGFub255bW91c1Byb2NlZHVyZU5vZGUsIGNvbnRleHQpIHtcbiAgICBjb25zdCBhbm9ueW1vdXNQcm9jZWR1cmVSZXR1cm5CbG9ja05vZGUgPSBhbm9ueW1vdXNQcm9jZWR1cmVSZXR1cm5CbG9ja05vZGVRdWVyeShhbm9ueW1vdXNQcm9jZWR1cmVOb2RlKSxcbiAgICAgICAgICByZXR1cm5CbG9ja05vZGUgPSBhbm9ueW1vdXNQcm9jZWR1cmVSZXR1cm5CbG9ja05vZGUsICAvLy9cbiAgICAgICAgICByZXR1cm5CbG9jayA9IHJldHVybkJsb2NrRnJvbVJldHVybkJsb2NrTm9kZShyZXR1cm5CbG9ja05vZGUsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIHJldHVybkJsb2NrO1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUocHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gICAgY29uc3QgcHJvY2VkdXJlRGVjbGFyYXRpb25SZXR1cm5CbG9ja05vZGUgPSBwcm9jZWR1cmVEZWNsYXJhdGlvblJldHVybkJsb2NrTm9kZVF1ZXJ5KHByb2NlZHVyZURlY2xhcmF0aW9uTm9kZSksXG4gICAgICAgICAgcmV0dXJuQmxvY2tOb2RlID0gcHJvY2VkdXJlRGVjbGFyYXRpb25SZXR1cm5CbG9ja05vZGUsICAvLy9cbiAgICAgICAgICByZXR1cm5CbG9jayA9IHJldHVybkJsb2NrRnJvbVJldHVybkJsb2NrTm9kZShyZXR1cm5CbG9ja05vZGUsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIHJldHVybkJsb2NrO1xuICB9XG59KTtcblxuZnVuY3Rpb24gc3RyaW5nRnJvbVJldHVyblN0YXRlbWVudChyZXR1cm5TdGF0ZW1lbnQsIGNvbnRleHQpIHtcbiAgY29uc3QgcmV0dXJuU3RhdGVtZW50U3RyaW5nID0gcmV0dXJuU3RhdGVtZW50LmdldFN0cmluZygpLFxuICAgICAgICBzdHJpbmcgPSBgeyAuLi4gJHtyZXR1cm5TdGF0ZW1lbnRTdHJpbmd9IH1gO1xuXG4gIHJldHVybiBzdHJpbmc7XG59XG5cbmZ1bmN0aW9uIHN0ZXBzRnJvbVJldHVybkJsb2NrTm9kZShyZXR1cm5CbG9ja05vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBTdGVwIH0gPSBlbGVtZW50cyxcbiAgICAgICAgc3RlcE5vZGVzID0gc3RlcE5vZGVzUXVlcnkocmV0dXJuQmxvY2tOb2RlKSxcbiAgICAgICAgc3RlcHMgPSBzdGVwTm9kZXMubWFwKChzdGVwTm9kZSkgPT4ge1xuICAgICAgICAgIGNvbnN0IHN0ZXAgPSBTdGVwLmZyb21TdGVwTm9kZShzdGVwTm9kZSwgY29udGV4dCk7XG5cbiAgICAgICAgICByZXR1cm4gc3RlcDtcbiAgICAgICAgfSk7XG5cbiAgcmV0dXJuIHN0ZXBzO1xufVxuXG5mdW5jdGlvbiByZXR1cm5CbG9ja0Zyb21SZXR1cm5CbG9ja05vZGUocmV0dXJuQmxvY2tOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgUmV0dXJuQmxvY2ssIFJldHVyblN0YXRlbWVudCB9ID0gZWxlbWVudHMsXG4gICAgICAgIHJldHVyblN0YXRlbWVudCA9IFJldHVyblN0YXRlbWVudC5mcm9tUmV0dXJuQmxvY2tOb2RlKHJldHVybkJsb2NrTm9kZSwgY29udGV4dCksXG4gICAgICAgIG5vbnNlbnNpY2FsID0gbm9uc2Vuc2ljYWxGcm9tUmV0dXJuQmxvY2tOb2RlKHJldHVybkJsb2NrTm9kZSwgY29udGV4dCksXG4gICAgICAgIHN0ZXBzID0gc3RlcHNGcm9tUmV0dXJuQmxvY2tOb2RlKHJldHVybkJsb2NrTm9kZSwgY29udGV4dCksXG4gICAgICAgIHN0cmluZyA9IHN0cmluZ0Zyb21SZXR1cm5TdGF0ZW1lbnQocmV0dXJuU3RhdGVtZW50LCBjb250ZXh0KSxcbiAgICAgICAgcmV0dXJuQmxvY2sgPSBuZXcgUmV0dXJuQmxvY2soc3RyaW5nLCBzdGVwcywgbm9uc2Vuc2ljYWwsIHJldHVyblN0YXRlbWVudCk7XG5cbiAgcmV0dXJuIHJldHVybkJsb2NrO1xufVxuXG5mdW5jdGlvbiBub25zZW5zaWNhbEZyb21SZXR1cm5CbG9ja05vZGUocmV0dXJuQmxvY2tOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IG5vbnNlbnNlTm9kZXMgPSBub25zZW5zZU5vZGVzUXVlcnkocmV0dXJuQmxvY2tOb2RlKSxcbiAgICAgICAgbm9uc2Vuc2VOb2Rlc0xlbmd0aCA9IG5vbnNlbnNlTm9kZXMubGVuZ3RoLFxuICAgICAgICBub25zZW5zaWNhbCA9IChub25zZW5zZU5vZGVzTGVuZ3RoID4gMCk7XG5cbiAgcmV0dXJuIG5vbnNlbnNpY2FsO1xufVxuIl0sIm5hbWVzIjpbInN0ZXBOb2Rlc1F1ZXJ5Iiwibm9kZXNRdWVyeSIsIm5vbnNlbnNlTm9kZXNRdWVyeSIsImV4cHJlc3Npb25SZXR1cm5CbG9ja05vZGVRdWVyeSIsIm5vZGVRdWVyeSIsImFub255bW91c1Byb2NlZHVyZVJldHVybkJsb2NrTm9kZVF1ZXJ5IiwicHJvY2VkdXJlRGVjbGFyYXRpb25SZXR1cm5CbG9ja05vZGVRdWVyeSIsImRlZmluZSIsIlJldHVybkJsb2NrIiwic3RyaW5nIiwic3RlcHMiLCJub25zZW5zaWNhbCIsInJldHVyblN0YXRlbWVudCIsImdldFN0cmluZyIsImdldFN0ZXBzIiwiaXNOb25zZW5zaWNhbCIsImdldFJldHVyblN0YXRlbWVudCIsImV2YWx1YXRlIiwidmFyaWFibGVzIiwiY29udGV4dCIsInVuZGVmaW5lZCIsIm1lc3NhZ2UiLCJleGNlcHRpb24iLCJFeGNlcHRpb24iLCJmcm9tTWVzc2FnZSIsImJsb2NrQ29udGV4dCIsIkJsb2NrQ29udGV4dCIsImZyb21WYXJpYWJsZXMiLCJmb3JFYWNoIiwic3RlcCIsImV4cHJlc3Npb24iLCJmcm9tRXhwcmVzc2lvbk5vZGUiLCJleHByZXNzaW9uTm9kZSIsInJldHVybkJsb2NrIiwiZXhwcmVzc2lvblJldHVybkJsb2NrTm9kZSIsInJldHVybkJsb2NrTm9kZSIsInJldHVybkJsb2NrRnJvbVJldHVybkJsb2NrTm9kZSIsImZyb21Bbm9ueW1vdXNQcm9jZWR1cmVOb2RlIiwiYW5vbnltb3VzUHJvY2VkdXJlTm9kZSIsImFub255bW91c1Byb2NlZHVyZVJldHVybkJsb2NrTm9kZSIsImZyb21Qcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUiLCJwcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUiLCJwcm9jZWR1cmVEZWNsYXJhdGlvblJldHVybkJsb2NrTm9kZSIsIm5hbWUiLCJzdHJpbmdGcm9tUmV0dXJuU3RhdGVtZW50IiwicmV0dXJuU3RhdGVtZW50U3RyaW5nIiwic3RlcHNGcm9tUmV0dXJuQmxvY2tOb2RlIiwiU3RlcCIsImVsZW1lbnRzIiwic3RlcE5vZGVzIiwibWFwIiwic3RlcE5vZGUiLCJmcm9tU3RlcE5vZGUiLCJSZXR1cm5TdGF0ZW1lbnQiLCJmcm9tUmV0dXJuQmxvY2tOb2RlIiwibm9uc2Vuc2ljYWxGcm9tUmV0dXJuQmxvY2tOb2RlIiwibm9uc2Vuc2VO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