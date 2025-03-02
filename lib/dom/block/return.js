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
var stepNodesQuery = (0, _query.nodesQuery)("/returnBlock/step"), nonsenseNodesQuery = (0, _query.nodesQuery)("/returnBlock/nonsense"), valueReturnBlockNodeQuery = (0, _query.nodeQuery)("/value/returnBlock"), anonymousProcedureReturnBlockNodeQuery = (0, _query.nodeQuery)("/anonymousProcedure/returnBlock"), procedureDeclarationReturnBlockNodeQuery = (0, _query.nodeQuery)("/procedureDeclaration/returnBlock");
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
                var value = this.returnStatement.evaluate(context);
                return value;
            }
        }
    ], [
        {
            key: "fromValueNode",
            value: function fromValueNode(valueNode, context) {
                var returnBlock = null;
                var valueReturnBlockNode = valueReturnBlockNodeQuery(valueNode);
                if (valueReturnBlockNode !== null) {
                    var returnBlockNode = valueReturnBlockNode; ///
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kb20vYmxvY2svcmV0dXJuLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgZG9tIGZyb20gXCIuLi8uLi9kb21cIjtcbmltcG9ydCBFeGNlcHRpb24gZnJvbSBcIi4uLy4uL2V4Y2VwdGlvblwiO1xuaW1wb3J0IEJsb2NrQ29udGV4dCBmcm9tIFwiLi4vLi4vY29udGV4dC9ibG9ja1wiO1xuXG5pbXBvcnQgeyBkb21Bc3NpZ25lZCB9IGZyb20gXCIuLi8uLi9kb21cIjtcbmltcG9ydCB7IG5vZGVRdWVyeSwgbm9kZXNRdWVyeSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvcXVlcnlcIjtcblxuY29uc3Qgc3RlcE5vZGVzUXVlcnkgPSBub2Rlc1F1ZXJ5KFwiL3JldHVybkJsb2NrL3N0ZXBcIiksXG4gICAgICBub25zZW5zZU5vZGVzUXVlcnkgPSBub2Rlc1F1ZXJ5KFwiL3JldHVybkJsb2NrL25vbnNlbnNlXCIpLFxuICAgICAgdmFsdWVSZXR1cm5CbG9ja05vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi92YWx1ZS9yZXR1cm5CbG9ja1wiKSxcbiAgICAgIGFub255bW91c1Byb2NlZHVyZVJldHVybkJsb2NrTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL2Fub255bW91c1Byb2NlZHVyZS9yZXR1cm5CbG9ja1wiKSxcbiAgICAgIHByb2NlZHVyZURlY2xhcmF0aW9uUmV0dXJuQmxvY2tOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvcHJvY2VkdXJlRGVjbGFyYXRpb24vcmV0dXJuQmxvY2tcIik7XG5cbmV4cG9ydCBkZWZhdWx0IGRvbUFzc2lnbmVkKGNsYXNzIFJldHVybkJsb2NrIHtcbiAgY29uc3RydWN0b3Ioc3RyaW5nLCBzdGVwcywgbm9uc2Vuc2ljYWwsIHJldHVyblN0YXRlbWVudCkge1xuICAgIHRoaXMuc3RyaW5nID0gc3RyaW5nO1xuICAgIHRoaXMuc3RlcHMgPSBzdGVwcztcbiAgICB0aGlzLm5vbnNlbnNpY2FsID0gbm9uc2Vuc2ljYWw7XG4gICAgdGhpcy5yZXR1cm5TdGF0ZW1lbnQgPSByZXR1cm5TdGF0ZW1lbnQ7XG4gIH1cblxuICBnZXRTdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RyaW5nO1xuICB9XG5cbiAgZ2V0U3RlcHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RlcHM7XG4gIH1cblxuICBpc05vbnNlbnNpY2FsKCkge1xuICAgIHJldHVybiB0aGlzLm5vbnNlbnNpY2FsO1xuICB9XG5cbiAgZ2V0UmV0dXJuU3RhdGVtZW50KCkge1xuICAgIHJldHVybiB0aGlzLnJldHVyblN0YXRlbWVudDtcbiAgfVxuXG4gIGV2YWx1YXRlKHZhcmlhYmxlcywgY29udGV4dCkge1xuICAgIGlmIChjb250ZXh0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGNvbnRleHQgPSB2YXJpYWJsZXM7ICAvLy9cblxuICAgICAgdmFyaWFibGVzID0gW107XG4gICAgfVxuXG4gICAgaWYgKHRoaXMubm9uc2Vuc2ljYWwpIHtcbiAgICAgIGNvbnN0IG1lc3NhZ2UgPSBgVGhlIHJldHVybiBibG9jayBpcyBub25zZW5zaWNhbC5gLFxuICAgICAgICAgICAgZXhjZXB0aW9uID0gRXhjZXB0aW9uLmZyb21NZXNzYWdlKG1lc3NhZ2UpO1xuXG4gICAgICB0aHJvdyBleGNlcHRpb247XG4gICAgfVxuXG4gICAgY29uc3QgYmxvY2tDb250ZXh0ID0gQmxvY2tDb250ZXh0LmZyb21WYXJpYWJsZXModmFyaWFibGVzLCBjb250ZXh0KTtcblxuICAgIGNvbnRleHQgPSBibG9ja0NvbnRleHQ7IC8vL1xuXG4gICAgdGhpcy5zdGVwcy5mb3JFYWNoKChzdGVwKSA9PiB7XG4gICAgICBzdGVwLmV2YWx1YXRlKGNvbnRleHQpO1xuICAgIH0pO1xuXG4gICAgY29uc3QgdmFsdWUgPSB0aGlzLnJldHVyblN0YXRlbWVudC5ldmFsdWF0ZShjb250ZXh0KTtcblxuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJSZXR1cm5CbG9ja1wiO1xuXG4gIHN0YXRpYyBmcm9tVmFsdWVOb2RlKHZhbHVlTm9kZSwgY29udGV4dCkge1xuICAgIGxldCByZXR1cm5CbG9jayA9IG51bGw7XG5cbiAgICBjb25zdCB2YWx1ZVJldHVybkJsb2NrTm9kZSA9IHZhbHVlUmV0dXJuQmxvY2tOb2RlUXVlcnkodmFsdWVOb2RlKTtcblxuICAgIGlmICh2YWx1ZVJldHVybkJsb2NrTm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgcmV0dXJuQmxvY2tOb2RlID0gdmFsdWVSZXR1cm5CbG9ja05vZGU7ICAvLy9cblxuICAgICAgcmV0dXJuQmxvY2sgPSByZXR1cm5CbG9ja0Zyb21SZXR1cm5CbG9ja05vZGUocmV0dXJuQmxvY2tOb2RlLCBjb250ZXh0KTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmV0dXJuQmxvY2s7XG4gIH1cblxuICBzdGF0aWMgZnJvbUFub255bW91c1Byb2NlZHVyZU5vZGUoYW5vbnltb3VzUHJvY2VkdXJlTm9kZSwgY29udGV4dCkge1xuICAgIGNvbnN0IGFub255bW91c1Byb2NlZHVyZVJldHVybkJsb2NrTm9kZSA9IGFub255bW91c1Byb2NlZHVyZVJldHVybkJsb2NrTm9kZVF1ZXJ5KGFub255bW91c1Byb2NlZHVyZU5vZGUpLFxuICAgICAgICAgIHJldHVybkJsb2NrTm9kZSA9IGFub255bW91c1Byb2NlZHVyZVJldHVybkJsb2NrTm9kZSwgIC8vL1xuICAgICAgICAgIHJldHVybkJsb2NrID0gcmV0dXJuQmxvY2tGcm9tUmV0dXJuQmxvY2tOb2RlKHJldHVybkJsb2NrTm9kZSwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gcmV0dXJuQmxvY2s7XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb2NlZHVyZURlY2xhcmF0aW9uTm9kZShwcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgICBjb25zdCBwcm9jZWR1cmVEZWNsYXJhdGlvblJldHVybkJsb2NrTm9kZSA9IHByb2NlZHVyZURlY2xhcmF0aW9uUmV0dXJuQmxvY2tOb2RlUXVlcnkocHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlKSxcbiAgICAgICAgICByZXR1cm5CbG9ja05vZGUgPSBwcm9jZWR1cmVEZWNsYXJhdGlvblJldHVybkJsb2NrTm9kZSwgIC8vL1xuICAgICAgICAgIHJldHVybkJsb2NrID0gcmV0dXJuQmxvY2tGcm9tUmV0dXJuQmxvY2tOb2RlKHJldHVybkJsb2NrTm9kZSwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gcmV0dXJuQmxvY2s7XG4gIH1cbn0pO1xuXG5mdW5jdGlvbiBzdHJpbmdGcm9tUmV0dXJuU3RhdGVtZW50KHJldHVyblN0YXRlbWVudCwgY29udGV4dCkge1xuICBjb25zdCByZXR1cm5TdGF0ZW1lbnRTdHJpbmcgPSByZXR1cm5TdGF0ZW1lbnQuZ2V0U3RyaW5nKCksXG4gICAgICAgIHN0cmluZyA9IGB7IC4uLiAke3JldHVyblN0YXRlbWVudFN0cmluZ30gfWA7XG5cbiAgcmV0dXJuIHN0cmluZztcbn1cblxuZnVuY3Rpb24gc3RlcHNGcm9tUmV0dXJuQmxvY2tOb2RlKHJldHVybkJsb2NrTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFN0ZXAgfSA9IGRvbSxcbiAgICAgICAgc3RlcE5vZGVzID0gc3RlcE5vZGVzUXVlcnkocmV0dXJuQmxvY2tOb2RlKSxcbiAgICAgICAgc3RlcHMgPSBzdGVwTm9kZXMubWFwKChzdGVwTm9kZSkgPT4ge1xuICAgICAgICAgIGNvbnN0IHN0ZXAgPSBTdGVwLmZyb21TdGVwTm9kZShzdGVwTm9kZSwgY29udGV4dCk7XG5cbiAgICAgICAgICByZXR1cm4gc3RlcDtcbiAgICAgICAgfSk7XG5cbiAgcmV0dXJuIHN0ZXBzO1xufVxuXG5mdW5jdGlvbiByZXR1cm5CbG9ja0Zyb21SZXR1cm5CbG9ja05vZGUocmV0dXJuQmxvY2tOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgUmV0dXJuQmxvY2ssIFJldHVyblN0YXRlbWVudCB9ID0gZG9tLFxuICAgICAgICByZXR1cm5TdGF0ZW1lbnQgPSBSZXR1cm5TdGF0ZW1lbnQuZnJvbVJldHVybkJsb2NrTm9kZShyZXR1cm5CbG9ja05vZGUsIGNvbnRleHQpLFxuICAgICAgICBub25zZW5zaWNhbCA9IG5vbnNlbnNpY2FsRnJvbVJldHVybkJsb2NrTm9kZShyZXR1cm5CbG9ja05vZGUsIGNvbnRleHQpLFxuICAgICAgICBzdGVwcyA9IHN0ZXBzRnJvbVJldHVybkJsb2NrTm9kZShyZXR1cm5CbG9ja05vZGUsIGNvbnRleHQpLFxuICAgICAgICBzdHJpbmcgPSBzdHJpbmdGcm9tUmV0dXJuU3RhdGVtZW50KHJldHVyblN0YXRlbWVudCwgY29udGV4dCksXG4gICAgICAgIHJldHVybkJsb2NrID0gbmV3IFJldHVybkJsb2NrKHN0cmluZywgc3RlcHMsIG5vbnNlbnNpY2FsLCByZXR1cm5TdGF0ZW1lbnQpO1xuXG4gIHJldHVybiByZXR1cm5CbG9jaztcbn1cblxuZnVuY3Rpb24gbm9uc2Vuc2ljYWxGcm9tUmV0dXJuQmxvY2tOb2RlKHJldHVybkJsb2NrTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBub25zZW5zZU5vZGVzID0gbm9uc2Vuc2VOb2Rlc1F1ZXJ5KHJldHVybkJsb2NrTm9kZSksXG4gICAgICAgIG5vbnNlbnNlTm9kZXNMZW5ndGggPSBub25zZW5zZU5vZGVzLmxlbmd0aCxcbiAgICAgICAgbm9uc2Vuc2ljYWwgPSAobm9uc2Vuc2VOb2Rlc0xlbmd0aCA+IDApO1xuXG4gIHJldHVybiBub25zZW5zaWNhbDtcbn1cbiJdLCJuYW1lcyI6WyJzdGVwTm9kZXNRdWVyeSIsIm5vZGVzUXVlcnkiLCJub25zZW5zZU5vZGVzUXVlcnkiLCJ2YWx1ZVJldHVybkJsb2NrTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5IiwiYW5vbnltb3VzUHJvY2VkdXJlUmV0dXJuQmxvY2tOb2RlUXVlcnkiLCJwcm9jZWR1cmVEZWNsYXJhdGlvblJldHVybkJsb2NrTm9kZVF1ZXJ5IiwiZG9tQXNzaWduZWQiLCJSZXR1cm5CbG9jayIsInN0cmluZyIsInN0ZXBzIiwibm9uc2Vuc2ljYWwiLCJyZXR1cm5TdGF0ZW1lbnQiLCJnZXRTdHJpbmciLCJnZXRTdGVwcyIsImlzTm9uc2Vuc2ljYWwiLCJnZXRSZXR1cm5TdGF0ZW1lbnQiLCJldmFsdWF0ZSIsInZhcmlhYmxlcyIsImNvbnRleHQiLCJ1bmRlZmluZWQiLCJtZXNzYWdlIiwiZXhjZXB0aW9uIiwiRXhjZXB0aW9uIiwiZnJvbU1lc3NhZ2UiLCJibG9ja0NvbnRleHQiLCJCbG9ja0NvbnRleHQiLCJmcm9tVmFyaWFibGVzIiwiZm9yRWFjaCIsInN0ZXAiLCJ2YWx1ZSIsImZyb21WYWx1ZU5vZGUiLCJ2YWx1ZU5vZGUiLCJyZXR1cm5CbG9jayIsInZhbHVlUmV0dXJuQmxvY2tOb2RlIiwicmV0dXJuQmxvY2tOb2RlIiwicmV0dXJuQmxvY2tGcm9tUmV0dXJuQmxvY2tOb2RlIiwiZnJvbUFub255bW91c1Byb2NlZHVyZU5vZGUiLCJhbm9ueW1vdXNQcm9jZWR1cmVOb2RlIiwiYW5vbnltb3VzUHJvY2VkdXJlUmV0dXJuQmxvY2tOb2RlIiwiZnJvbVByb2NlZHVyZURlY2xhcmF0aW9uTm9kZSIsInByb2NlZHVyZURlY2xhcmF0aW9uTm9kZSIsInByb2NlZHVyZURlY2xhcmF0aW9uUmV0dXJuQmxvY2tOb2RlIiwibmFtZSIsInN0cmluZ0Zyb21SZXR1cm5TdGF0ZW1lbnQiLCJyZXR1cm5TdGF0ZW1lbnRTdHJpbmciLCJzdGVwc0Zyb21SZXR1cm5CbG9ja05vZGUiLCJTdGVwIiwiZG9tIiwic3RlcE5vZGVzIiwibWFwIiwic3RlcE5vZGUiLCJmcm9tU3RlcE5vZGUiLCJSZXR1cm5TdGF0ZW1lbnQiLCJmcm9tUmV0dXJuQmxvY2tOb2RlIiwibm9uc2Vuc2ljYWxGcm9tUmV0dXJuQmxvY2tOb2RlIiwibm9uc2Vuc2VOb2RlcyIsIm5vbnNlbnNlTm9kZXNMZW5ndGgiLCJsZW5ndGgiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQWVBOzs7ZUFBQTs7OzJEQWJnQjtnRUFDTTs0REFDRztxQkFHYTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFdEMsSUFBTUEsaUJBQWlCQyxJQUFBQSxpQkFBVSxFQUFDLHNCQUM1QkMscUJBQXFCRCxJQUFBQSxpQkFBVSxFQUFDLDBCQUNoQ0UsNEJBQTRCQyxJQUFBQSxnQkFBUyxFQUFDLHVCQUN0Q0MseUNBQXlDRCxJQUFBQSxnQkFBUyxFQUFDLG9DQUNuREUsMkNBQTJDRixJQUFBQSxnQkFBUyxFQUFDO0lBRTNELFdBQWVHLElBQUFBLGdCQUFXLGdDQUFDO2FBQU1DLFlBQ25CQyxNQUFNLEVBQUVDLEtBQUssRUFBRUMsV0FBVyxFQUFFQyxlQUFlO2dDQUR4Qko7UUFFN0IsSUFBSSxDQUFDQyxNQUFNLEdBQUdBO1FBQ2QsSUFBSSxDQUFDQyxLQUFLLEdBQUdBO1FBQ2IsSUFBSSxDQUFDQyxXQUFXLEdBQUdBO1FBQ25CLElBQUksQ0FBQ0MsZUFBZSxHQUFHQTs7OztZQUd6QkMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSixNQUFNO1lBQ3BCOzs7WUFFQUssS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSixLQUFLO1lBQ25COzs7WUFFQUssS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSixXQUFXO1lBQ3pCOzs7WUFFQUssS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSixlQUFlO1lBQzdCOzs7WUFFQUssS0FBQUE7bUJBQUFBLFNBQUFBLFNBQVNDLFNBQVMsRUFBRUMsT0FBTztnQkFDekIsSUFBSUEsWUFBWUMsV0FBVztvQkFDekJELFVBQVVELFdBQVksR0FBRztvQkFFekJBLFlBQVksRUFBRTtnQkFDaEI7Z0JBRUEsSUFBSSxJQUFJLENBQUNQLFdBQVcsRUFBRTtvQkFDcEIsSUFBTVUsVUFBVyxvQ0FDWEMsWUFBWUMsa0JBQVMsQ0FBQ0MsV0FBVyxDQUFDSDtvQkFFeEMsTUFBTUM7Z0JBQ1I7Z0JBRUEsSUFBTUcsZUFBZUMsY0FBWSxDQUFDQyxhQUFhLENBQUNULFdBQVdDO2dCQUUzREEsVUFBVU0sY0FBYyxHQUFHO2dCQUUzQixJQUFJLENBQUNmLEtBQUssQ0FBQ2tCLE9BQU8sQ0FBQyxTQUFDQztvQkFDbEJBLEtBQUtaLFFBQVEsQ0FBQ0U7Z0JBQ2hCO2dCQUVBLElBQU1XLFFBQVEsSUFBSSxDQUFDbEIsZUFBZSxDQUFDSyxRQUFRLENBQUNFO2dCQUU1QyxPQUFPVztZQUNUOzs7O1lBSU9DLEtBQUFBO21CQUFQLFNBQU9BLGNBQWNDLFNBQVMsRUFBRWIsT0FBTztnQkFDckMsSUFBSWMsY0FBYztnQkFFbEIsSUFBTUMsdUJBQXVCL0IsMEJBQTBCNkI7Z0JBRXZELElBQUlFLHlCQUF5QixNQUFNO29CQUNqQyxJQUFNQyxrQkFBa0JELHNCQUF1QixHQUFHO29CQUVsREQsY0FBY0csK0JBQStCRCxpQkFBaUJoQjtnQkFDaEU7Z0JBRUEsT0FBT2M7WUFDVDs7O1lBRU9JLEtBQUFBO21CQUFQLFNBQU9BLDJCQUEyQkMsc0JBQXNCLEVBQUVuQixPQUFPO2dCQUMvRCxJQUFNb0Isb0NBQW9DbEMsdUNBQXVDaUMseUJBQzNFSCxrQkFBa0JJLG1DQUNsQk4sY0FBY0csK0JBQStCRCxpQkFBaUJoQjtnQkFFcEUsT0FBT2M7WUFDVDs7O1lBRU9PLEtBQUFBO21CQUFQLFNBQU9BLDZCQUE2QkMsd0JBQXdCLEVBQUV0QixPQUFPO2dCQUNuRSxJQUFNdUIsc0NBQXNDcEMseUNBQXlDbUMsMkJBQy9FTixrQkFBa0JPLHFDQUNsQlQsY0FBY0csK0JBQStCRCxpQkFBaUJoQjtnQkFFcEUsT0FBT2M7WUFDVDs7OztLQTlCQSwrQkFBT1UsUUFBTztBQWlDaEIsU0FBU0MsMEJBQTBCaEMsZUFBZSxFQUFFTyxPQUFPO0lBQ3pELElBQU0wQix3QkFBd0JqQyxnQkFBZ0JDLFNBQVMsSUFDakRKLFNBQVMsQUFBQyxTQUE4QixPQUF0Qm9DLHVCQUFzQjtJQUU5QyxPQUFPcEM7QUFDVDtBQUVBLFNBQVNxQyx5QkFBeUJYLGVBQWUsRUFBRWhCLE9BQU87SUFDeEQsSUFBTSxBQUFFNEIsT0FBU0MsWUFBRyxDQUFaRCxNQUNGRSxZQUFZakQsZUFBZW1DLGtCQUMzQnpCLFFBQVF1QyxVQUFVQyxHQUFHLENBQUMsU0FBQ0M7UUFDckIsSUFBTXRCLE9BQU9rQixLQUFLSyxZQUFZLENBQUNELFVBQVVoQztRQUV6QyxPQUFPVTtJQUNUO0lBRU4sT0FBT25CO0FBQ1Q7QUFFQSxTQUFTMEIsK0JBQStCRCxlQUFlLEVBQUVoQixPQUFPO0lBQzlELElBQVFYLGNBQWlDd0MsWUFBRyxDQUFwQ3hDLGFBQWE2QyxrQkFBb0JMLFlBQUcsQ0FBdkJLLGlCQUNmekMsa0JBQWtCeUMsZ0JBQWdCQyxtQkFBbUIsQ0FBQ25CLGlCQUFpQmhCLFVBQ3ZFUixjQUFjNEMsK0JBQStCcEIsaUJBQWlCaEIsVUFDOURULFFBQVFvQyx5QkFBeUJYLGlCQUFpQmhCLFVBQ2xEVixTQUFTbUMsMEJBQTBCaEMsaUJBQWlCTyxVQUNwRGMsY0FBYyxJQUFJekIsWUFBWUMsUUFBUUMsT0FBT0MsYUFBYUM7SUFFaEUsT0FBT3FCO0FBQ1Q7QUFFQSxTQUFTc0IsK0JBQStCcEIsZUFBZSxFQUFFaEIsT0FBTztJQUM5RCxJQUFNcUMsZ0JBQWdCdEQsbUJBQW1CaUMsa0JBQ25Dc0Isc0JBQXNCRCxjQUFjRSxNQUFNLEVBQzFDL0MsY0FBZThDLHNCQUFzQjtJQUUzQyxPQUFPOUM7QUFDVCJ9