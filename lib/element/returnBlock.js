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
var _elements = /*#__PURE__*/ _interop_require_wildcard(require("../elements"));
var _exception = /*#__PURE__*/ _interop_require_default(require("../exception"));
var _block = /*#__PURE__*/ _interop_require_default(require("../context/block"));
var _query = require("../utilities/query");
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3JldHVybkJsb2NrLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgZWxlbWVudHMgZnJvbSBcIi4uL2VsZW1lbnRzXCI7XG5pbXBvcnQgRXhjZXB0aW9uIGZyb20gXCIuLi9leGNlcHRpb25cIjtcbmltcG9ydCBCbG9ja0NvbnRleHQgZnJvbSBcIi4uL2NvbnRleHQvYmxvY2tcIjtcblxuaW1wb3J0IHsgZGVmaW5lIH0gZnJvbSBcIi4uL2VsZW1lbnRzXCI7XG5pbXBvcnQgeyBub2RlUXVlcnksIG5vZGVzUXVlcnkgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5cbmNvbnN0IHN0ZXBOb2Rlc1F1ZXJ5ID0gbm9kZXNRdWVyeShcIi9yZXR1cm5CbG9jay9zdGVwXCIpLFxuICAgICAgbm9uc2Vuc2VOb2Rlc1F1ZXJ5ID0gbm9kZXNRdWVyeShcIi9yZXR1cm5CbG9jay9ub25zZW5zZVwiKSxcbiAgICAgIGV4cHJlc3Npb25SZXR1cm5CbG9ja05vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9leHByZXNzaW9uL3JldHVybkJsb2NrXCIpLFxuICAgICAgYW5vbnltb3VzUHJvY2VkdXJlUmV0dXJuQmxvY2tOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvYW5vbnltb3VzUHJvY2VkdXJlL3JldHVybkJsb2NrXCIpLFxuICAgICAgcHJvY2VkdXJlRGVjbGFyYXRpb25SZXR1cm5CbG9ja05vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9wcm9jZWR1cmVEZWNsYXJhdGlvbi9yZXR1cm5CbG9ja1wiKTtcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lKGNsYXNzIFJldHVybkJsb2NrIHtcbiAgY29uc3RydWN0b3Ioc3RyaW5nLCBzdGVwcywgbm9uc2Vuc2ljYWwsIHJldHVyblN0YXRlbWVudCkge1xuICAgIHRoaXMuc3RyaW5nID0gc3RyaW5nO1xuICAgIHRoaXMuc3RlcHMgPSBzdGVwcztcbiAgICB0aGlzLm5vbnNlbnNpY2FsID0gbm9uc2Vuc2ljYWw7XG4gICAgdGhpcy5yZXR1cm5TdGF0ZW1lbnQgPSByZXR1cm5TdGF0ZW1lbnQ7XG4gIH1cblxuICBnZXRTdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RyaW5nO1xuICB9XG5cbiAgZ2V0U3RlcHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RlcHM7XG4gIH1cblxuICBpc05vbnNlbnNpY2FsKCkge1xuICAgIHJldHVybiB0aGlzLm5vbnNlbnNpY2FsO1xuICB9XG5cbiAgZ2V0UmV0dXJuU3RhdGVtZW50KCkge1xuICAgIHJldHVybiB0aGlzLnJldHVyblN0YXRlbWVudDtcbiAgfVxuXG4gIGV2YWx1YXRlKHZhcmlhYmxlcywgY29udGV4dCkge1xuICAgIGlmIChjb250ZXh0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGNvbnRleHQgPSB2YXJpYWJsZXM7ICAvLy9cblxuICAgICAgdmFyaWFibGVzID0gW107XG4gICAgfVxuXG4gICAgaWYgKHRoaXMubm9uc2Vuc2ljYWwpIHtcbiAgICAgIGNvbnN0IG1lc3NhZ2UgPSBgVGhlIHJldHVybiBibG9jayBpcyBub25zZW5zaWNhbC5gLFxuICAgICAgICAgICAgZXhjZXB0aW9uID0gRXhjZXB0aW9uLmZyb21NZXNzYWdlKG1lc3NhZ2UpO1xuXG4gICAgICB0aHJvdyBleGNlcHRpb247XG4gICAgfVxuXG4gICAgY29uc3QgYmxvY2tDb250ZXh0ID0gQmxvY2tDb250ZXh0LmZyb21WYXJpYWJsZXModmFyaWFibGVzLCBjb250ZXh0KTtcblxuICAgIGNvbnRleHQgPSBibG9ja0NvbnRleHQ7IC8vL1xuXG4gICAgdGhpcy5zdGVwcy5mb3JFYWNoKChzdGVwKSA9PiB7XG4gICAgICBzdGVwLmV2YWx1YXRlKGNvbnRleHQpO1xuICAgIH0pO1xuXG4gICAgY29uc3QgZXhwcmVzc2lvbiA9IHRoaXMucmV0dXJuU3RhdGVtZW50LmV2YWx1YXRlKGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIGV4cHJlc3Npb247XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiUmV0dXJuQmxvY2tcIjtcblxuICBzdGF0aWMgZnJvbUV4cHJlc3Npb25Ob2RlKGV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KSB7XG4gICAgbGV0IHJldHVybkJsb2NrID0gbnVsbDtcblxuICAgIGNvbnN0IGV4cHJlc3Npb25SZXR1cm5CbG9ja05vZGUgPSBleHByZXNzaW9uUmV0dXJuQmxvY2tOb2RlUXVlcnkoZXhwcmVzc2lvbk5vZGUpO1xuXG4gICAgaWYgKGV4cHJlc3Npb25SZXR1cm5CbG9ja05vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHJldHVybkJsb2NrTm9kZSA9IGV4cHJlc3Npb25SZXR1cm5CbG9ja05vZGU7ICAvLy9cblxuICAgICAgcmV0dXJuQmxvY2sgPSByZXR1cm5CbG9ja0Zyb21SZXR1cm5CbG9ja05vZGUocmV0dXJuQmxvY2tOb2RlLCBjb250ZXh0KTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmV0dXJuQmxvY2s7XG4gIH1cblxuICBzdGF0aWMgZnJvbUFub255bW91c1Byb2NlZHVyZU5vZGUoYW5vbnltb3VzUHJvY2VkdXJlTm9kZSwgY29udGV4dCkge1xuICAgIGNvbnN0IGFub255bW91c1Byb2NlZHVyZVJldHVybkJsb2NrTm9kZSA9IGFub255bW91c1Byb2NlZHVyZVJldHVybkJsb2NrTm9kZVF1ZXJ5KGFub255bW91c1Byb2NlZHVyZU5vZGUpLFxuICAgICAgICAgIHJldHVybkJsb2NrTm9kZSA9IGFub255bW91c1Byb2NlZHVyZVJldHVybkJsb2NrTm9kZSwgIC8vL1xuICAgICAgICAgIHJldHVybkJsb2NrID0gcmV0dXJuQmxvY2tGcm9tUmV0dXJuQmxvY2tOb2RlKHJldHVybkJsb2NrTm9kZSwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gcmV0dXJuQmxvY2s7XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb2NlZHVyZURlY2xhcmF0aW9uTm9kZShwcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgICBjb25zdCBwcm9jZWR1cmVEZWNsYXJhdGlvblJldHVybkJsb2NrTm9kZSA9IHByb2NlZHVyZURlY2xhcmF0aW9uUmV0dXJuQmxvY2tOb2RlUXVlcnkocHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlKSxcbiAgICAgICAgICByZXR1cm5CbG9ja05vZGUgPSBwcm9jZWR1cmVEZWNsYXJhdGlvblJldHVybkJsb2NrTm9kZSwgIC8vL1xuICAgICAgICAgIHJldHVybkJsb2NrID0gcmV0dXJuQmxvY2tGcm9tUmV0dXJuQmxvY2tOb2RlKHJldHVybkJsb2NrTm9kZSwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gcmV0dXJuQmxvY2s7XG4gIH1cbn0pO1xuXG5mdW5jdGlvbiBzdHJpbmdGcm9tUmV0dXJuU3RhdGVtZW50KHJldHVyblN0YXRlbWVudCwgY29udGV4dCkge1xuICBjb25zdCByZXR1cm5TdGF0ZW1lbnRTdHJpbmcgPSByZXR1cm5TdGF0ZW1lbnQuZ2V0U3RyaW5nKCksXG4gICAgICAgIHN0cmluZyA9IGB7IC4uLiAke3JldHVyblN0YXRlbWVudFN0cmluZ30gfWA7XG5cbiAgcmV0dXJuIHN0cmluZztcbn1cblxuZnVuY3Rpb24gc3RlcHNGcm9tUmV0dXJuQmxvY2tOb2RlKHJldHVybkJsb2NrTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFN0ZXAgfSA9IGVsZW1lbnRzLFxuICAgICAgICBzdGVwTm9kZXMgPSBzdGVwTm9kZXNRdWVyeShyZXR1cm5CbG9ja05vZGUpLFxuICAgICAgICBzdGVwcyA9IHN0ZXBOb2Rlcy5tYXAoKHN0ZXBOb2RlKSA9PiB7XG4gICAgICAgICAgY29uc3Qgc3RlcCA9IFN0ZXAuZnJvbVN0ZXBOb2RlKHN0ZXBOb2RlLCBjb250ZXh0KTtcblxuICAgICAgICAgIHJldHVybiBzdGVwO1xuICAgICAgICB9KTtcblxuICByZXR1cm4gc3RlcHM7XG59XG5cbmZ1bmN0aW9uIHJldHVybkJsb2NrRnJvbVJldHVybkJsb2NrTm9kZShyZXR1cm5CbG9ja05vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBSZXR1cm5CbG9jaywgUmV0dXJuU3RhdGVtZW50IH0gPSBlbGVtZW50cyxcbiAgICAgICAgcmV0dXJuU3RhdGVtZW50ID0gUmV0dXJuU3RhdGVtZW50LmZyb21SZXR1cm5CbG9ja05vZGUocmV0dXJuQmxvY2tOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgbm9uc2Vuc2ljYWwgPSBub25zZW5zaWNhbEZyb21SZXR1cm5CbG9ja05vZGUocmV0dXJuQmxvY2tOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgc3RlcHMgPSBzdGVwc0Zyb21SZXR1cm5CbG9ja05vZGUocmV0dXJuQmxvY2tOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgc3RyaW5nID0gc3RyaW5nRnJvbVJldHVyblN0YXRlbWVudChyZXR1cm5TdGF0ZW1lbnQsIGNvbnRleHQpLFxuICAgICAgICByZXR1cm5CbG9jayA9IG5ldyBSZXR1cm5CbG9jayhzdHJpbmcsIHN0ZXBzLCBub25zZW5zaWNhbCwgcmV0dXJuU3RhdGVtZW50KTtcblxuICByZXR1cm4gcmV0dXJuQmxvY2s7XG59XG5cbmZ1bmN0aW9uIG5vbnNlbnNpY2FsRnJvbVJldHVybkJsb2NrTm9kZShyZXR1cm5CbG9ja05vZGUsIGNvbnRleHQpIHtcbiAgY29uc3Qgbm9uc2Vuc2VOb2RlcyA9IG5vbnNlbnNlTm9kZXNRdWVyeShyZXR1cm5CbG9ja05vZGUpLFxuICAgICAgICBub25zZW5zZU5vZGVzTGVuZ3RoID0gbm9uc2Vuc2VOb2Rlcy5sZW5ndGgsXG4gICAgICAgIG5vbnNlbnNpY2FsID0gKG5vbnNlbnNlTm9kZXNMZW5ndGggPiAwKTtcblxuICByZXR1cm4gbm9uc2Vuc2ljYWw7XG59XG4iXSwibmFtZXMiOlsic3RlcE5vZGVzUXVlcnkiLCJub2Rlc1F1ZXJ5Iiwibm9uc2Vuc2VOb2Rlc1F1ZXJ5IiwiZXhwcmVzc2lvblJldHVybkJsb2NrTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5IiwiYW5vbnltb3VzUHJvY2VkdXJlUmV0dXJuQmxvY2tOb2RlUXVlcnkiLCJwcm9jZWR1cmVEZWNsYXJhdGlvblJldHVybkJsb2NrTm9kZVF1ZXJ5IiwiZGVmaW5lIiwiUmV0dXJuQmxvY2siLCJzdHJpbmciLCJzdGVwcyIsIm5vbnNlbnNpY2FsIiwicmV0dXJuU3RhdGVtZW50IiwiZ2V0U3RyaW5nIiwiZ2V0U3RlcHMiLCJpc05vbnNlbnNpY2FsIiwiZ2V0UmV0dXJuU3RhdGVtZW50IiwiZXZhbHVhdGUiLCJ2YXJpYWJsZXMiLCJjb250ZXh0IiwidW5kZWZpbmVkIiwibWVzc2FnZSIsImV4Y2VwdGlvbiIsIkV4Y2VwdGlvbiIsImZyb21NZXNzYWdlIiwiYmxvY2tDb250ZXh0IiwiQmxvY2tDb250ZXh0IiwiZnJvbVZhcmlhYmxlcyIsImZvckVhY2giLCJzdGVwIiwiZXhwcmVzc2lvbiIsImZyb21FeHByZXNzaW9uTm9kZSIsImV4cHJlc3Npb25Ob2RlIiwicmV0dXJuQmxvY2siLCJleHByZXNzaW9uUmV0dXJuQmxvY2tOb2RlIiwicmV0dXJuQmxvY2tOb2RlIiwicmV0dXJuQmxvY2tGcm9tUmV0dXJuQmxvY2tOb2RlIiwiZnJvbUFub255bW91c1Byb2NlZHVyZU5vZGUiLCJhbm9ueW1vdXNQcm9jZWR1cmVOb2RlIiwiYW5vbnltb3VzUHJvY2VkdXJlUmV0dXJuQmxvY2tOb2RlIiwiZnJvbVByb2NlZHVyZURlY2xhcmF0aW9uTm9kZSIsInByb2NlZHVyZURlY2xhcmF0aW9uTm9kZSIsInByb2NlZHVyZURlY2xhcmF0aW9uUmV0dXJuQmxvY2tOb2RlIiwibmFtZSIsInN0cmluZ0Zyb21SZXR1cm5TdGF0ZW1lbnQiLCJyZXR1cm5TdGF0ZW1lbnRTdHJpbmciLCJzdGVwc0Zyb21SZXR1cm5CbG9ja05vZGUiLCJTdGVwIiwiZWxlbWVudHMiLCJzdGVwTm9kZXMiLCJtYXAiLCJzdGVwTm9kZSIsImZyb21TdGVwTm9kZSIsIlJldHVyblN0YXRlbWVudCIsImZyb21SZXR1cm5CbG9ja05vZGUiLCJub25zZW5zaWNhbEZyb21SZXR1cm5CbG9ja05vZGUiLCJub25zZW5zZU5vZGVzIiwibm9uc2Vuc2VOb2Rl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