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
var stepNodesQuery = (0, _query.nodesQuery)("/returnBlock/step"), nonsenseNodesQuery = (0, _query.nodesQuery)("/returnBlock/nonsense"), anonymousProcedureReturnBlockNodeQuery = (0, _query.nodeQuery)("/anonymousProcedure/returnBlock"), procedureDeclarationReturnBlockNodeQuery = (0, _query.nodeQuery)("/procedureDeclaration/returnBlock");
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
            key: "fromProcedureDeclarationNode",
            value: function fromProcedureDeclarationNode(procedureDeclarationNode, context) {
                var procedureDeclarationReturnBlockNode = procedureDeclarationReturnBlockNodeQuery(procedureDeclarationNode), returnBlockNode = procedureDeclarationReturnBlockNode, returnBlock = returnBlockFromReturnBlockNode(returnBlockNode, context);
                return returnBlock;
            }
        },
        {
            key: "fromAnonymousProcedureNode",
            value: function fromAnonymousProcedureNode(anonymousProcedureNode, context) {
                var anonymousProcedureReturnBlockNode = anonymousProcedureReturnBlockNodeQuery(anonymousProcedureNode), returnBlockNode = anonymousProcedureReturnBlockNode, returnBlock = returnBlockFromReturnBlockNode(returnBlockNode, context);
                return returnBlock;
            }
        }
    ]);
    return ReturnBlock;
}(), _define_property(_ReturnBlock, "name", "ReturnBlock"), _ReturnBlock));
function stepsFromStepNodes(stepNodes, context) {
    var Step = _dom.default.Step, steps = stepNodes.map(function(stepNode) {
        var step = Step.fromStepNode(stepNode, context);
        return step;
    });
    return steps;
}
function returnBlockFromReturnBlockNode(returnBlockNode, context) {
    var ReturnBlock = _dom.default.ReturnBlock, ReturnStatement = _dom.default.ReturnStatement, node = returnBlockNode, string = context.nodeAsString(node), stepNodes = stepNodesQuery(returnBlockNode), steps = stepsFromStepNodes(stepNodes, context), nonsensical = nonsensicalFromReturnBlockNode(returnBlockNode, context), returnStatement = ReturnStatement.fromReturnBlockNode(returnBlockNode, context), returnBlock = new ReturnBlock(string, steps, nonsensical, returnStatement);
    return returnBlock;
}
function nonsensicalFromReturnBlockNode(returnBlockNode, context) {
    var nonsenseNodes = nonsenseNodesQuery(returnBlockNode), nonsenseNodesLength = nonsenseNodes.length, nonsensical = nonsenseNodesLength > 0;
    return nonsensical;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kb20vYmxvY2svcmV0dXJuLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgZG9tIGZyb20gXCIuLi8uLi9kb21cIjtcbmltcG9ydCBFeGNlcHRpb24gZnJvbSBcIi4uLy4uL2V4Y2VwdGlvblwiO1xuaW1wb3J0IEJsb2NrQ29udGV4dCBmcm9tIFwiLi4vLi4vY29udGV4dC9ibG9ja1wiO1xuXG5pbXBvcnQgeyBkb21Bc3NpZ25lZCB9IGZyb20gXCIuLi8uLi9kb21cIjtcbmltcG9ydCB7IG5vZGVRdWVyeSwgbm9kZXNRdWVyeSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvcXVlcnlcIjtcblxuY29uc3Qgc3RlcE5vZGVzUXVlcnkgPSBub2Rlc1F1ZXJ5KFwiL3JldHVybkJsb2NrL3N0ZXBcIiksXG4gICAgICBub25zZW5zZU5vZGVzUXVlcnkgPSBub2Rlc1F1ZXJ5KFwiL3JldHVybkJsb2NrL25vbnNlbnNlXCIpLFxuICAgICAgYW5vbnltb3VzUHJvY2VkdXJlUmV0dXJuQmxvY2tOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvYW5vbnltb3VzUHJvY2VkdXJlL3JldHVybkJsb2NrXCIpLFxuICAgICAgcHJvY2VkdXJlRGVjbGFyYXRpb25SZXR1cm5CbG9ja05vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9wcm9jZWR1cmVEZWNsYXJhdGlvbi9yZXR1cm5CbG9ja1wiKTtcblxuZXhwb3J0IGRlZmF1bHQgZG9tQXNzaWduZWQoY2xhc3MgUmV0dXJuQmxvY2sge1xuICBjb25zdHJ1Y3RvcihzdHJpbmcsIHN0ZXBzLCBub25zZW5zaWNhbCwgcmV0dXJuU3RhdGVtZW50KSB7XG4gICAgdGhpcy5zdHJpbmcgPSBzdHJpbmc7XG4gICAgdGhpcy5zdGVwcyA9IHN0ZXBzO1xuICAgIHRoaXMubm9uc2Vuc2ljYWwgPSBub25zZW5zaWNhbDtcbiAgICB0aGlzLnJldHVyblN0YXRlbWVudCA9IHJldHVyblN0YXRlbWVudDtcbiAgfVxuXG4gIGdldFN0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5zdHJpbmc7XG4gIH1cblxuICBnZXRTdGVwcygpIHtcbiAgICByZXR1cm4gdGhpcy5zdGVwcztcbiAgfVxuXG4gIGlzTm9uc2Vuc2ljYWwoKSB7XG4gICAgcmV0dXJuIHRoaXMubm9uc2Vuc2ljYWw7XG4gIH1cblxuICBnZXRSZXR1cm5TdGF0ZW1lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMucmV0dXJuU3RhdGVtZW50O1xuICB9XG5cbiAgZXZhbHVhdGUodmFyaWFibGVzLCBjb250ZXh0KSB7XG4gICAgaWYgKHRoaXMubm9uc2Vuc2ljYWwpIHtcbiAgICAgIGNvbnN0IG1lc3NhZ2UgPSBgVGhlIHJldHVybiBibG9jayBpcyBub25zZW5zaWNhbC5gLFxuICAgICAgICAgICAgZXhjZXB0aW9uID0gRXhjZXB0aW9uLmZyb21NZXNzYWdlKG1lc3NhZ2UpO1xuXG4gICAgICB0aHJvdyBleGNlcHRpb247XG4gICAgfVxuXG4gICAgY29uc3QgYmxvY2tDb250ZXh0ID0gQmxvY2tDb250ZXh0LmZyb21WYXJpYWJsZXModmFyaWFibGVzLCBjb250ZXh0KTtcblxuICAgIGNvbnRleHQgPSBibG9ja0NvbnRleHQ7IC8vL1xuXG4gICAgdGhpcy5zdGVwcy5mb3JFYWNoKChzdGVwKSA9PiB7XG4gICAgICBzdGVwLmV2YWx1YXRlKGNvbnRleHQpO1xuICAgIH0pO1xuXG4gICAgY29uc3QgdmFsdWUgPSB0aGlzLnJldHVyblN0YXRlbWVudC5ldmFsdWF0ZShjb250ZXh0KTtcblxuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJSZXR1cm5CbG9ja1wiO1xuXG4gIHN0YXRpYyBmcm9tUHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlKHByb2NlZHVyZURlY2xhcmF0aW9uTm9kZSwgY29udGV4dCkge1xuICAgIGNvbnN0IHByb2NlZHVyZURlY2xhcmF0aW9uUmV0dXJuQmxvY2tOb2RlID0gcHJvY2VkdXJlRGVjbGFyYXRpb25SZXR1cm5CbG9ja05vZGVRdWVyeShwcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUpLFxuICAgICAgICAgIHJldHVybkJsb2NrTm9kZSA9IHByb2NlZHVyZURlY2xhcmF0aW9uUmV0dXJuQmxvY2tOb2RlLCAgLy8vXG4gICAgICAgICAgcmV0dXJuQmxvY2sgPSByZXR1cm5CbG9ja0Zyb21SZXR1cm5CbG9ja05vZGUocmV0dXJuQmxvY2tOb2RlLCBjb250ZXh0KTtcblxuICAgIHJldHVybiByZXR1cm5CbG9jaztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQW5vbnltb3VzUHJvY2VkdXJlTm9kZShhbm9ueW1vdXNQcm9jZWR1cmVOb2RlLCBjb250ZXh0KSB7XG4gICAgY29uc3QgYW5vbnltb3VzUHJvY2VkdXJlUmV0dXJuQmxvY2tOb2RlID0gYW5vbnltb3VzUHJvY2VkdXJlUmV0dXJuQmxvY2tOb2RlUXVlcnkoYW5vbnltb3VzUHJvY2VkdXJlTm9kZSksXG4gICAgICAgICAgcmV0dXJuQmxvY2tOb2RlID0gYW5vbnltb3VzUHJvY2VkdXJlUmV0dXJuQmxvY2tOb2RlLCAgLy8vXG4gICAgICAgICAgcmV0dXJuQmxvY2sgPSByZXR1cm5CbG9ja0Zyb21SZXR1cm5CbG9ja05vZGUocmV0dXJuQmxvY2tOb2RlLCBjb250ZXh0KTtcblxuICAgIHJldHVybiByZXR1cm5CbG9jaztcbiAgfVxufSk7XG5cbmZ1bmN0aW9uIHN0ZXBzRnJvbVN0ZXBOb2RlcyhzdGVwTm9kZXMsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBTdGVwIH0gPSBkb20sXG4gICAgICAgIHN0ZXBzID0gc3RlcE5vZGVzLm1hcCgoc3RlcE5vZGUpID0+IHtcbiAgICAgICAgICBjb25zdCBzdGVwID0gU3RlcC5mcm9tU3RlcE5vZGUoc3RlcE5vZGUsIGNvbnRleHQpO1xuXG4gICAgICAgICAgcmV0dXJuIHN0ZXA7XG4gICAgICAgIH0pO1xuXG4gIHJldHVybiBzdGVwcztcbn1cblxuZnVuY3Rpb24gcmV0dXJuQmxvY2tGcm9tUmV0dXJuQmxvY2tOb2RlKHJldHVybkJsb2NrTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFJldHVybkJsb2NrLCBSZXR1cm5TdGF0ZW1lbnQgfSA9IGRvbSxcbiAgICAgICAgbm9kZSA9IHJldHVybkJsb2NrTm9kZSwgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICBzdGVwTm9kZXMgPSBzdGVwTm9kZXNRdWVyeShyZXR1cm5CbG9ja05vZGUpLFxuICAgICAgICBzdGVwcyA9IHN0ZXBzRnJvbVN0ZXBOb2RlcyhzdGVwTm9kZXMsIGNvbnRleHQpLFxuICAgICAgICBub25zZW5zaWNhbCA9IG5vbnNlbnNpY2FsRnJvbVJldHVybkJsb2NrTm9kZShyZXR1cm5CbG9ja05vZGUsIGNvbnRleHQpLFxuICAgICAgICByZXR1cm5TdGF0ZW1lbnQgPSBSZXR1cm5TdGF0ZW1lbnQuZnJvbVJldHVybkJsb2NrTm9kZShyZXR1cm5CbG9ja05vZGUsIGNvbnRleHQpLFxuICAgICAgICByZXR1cm5CbG9jayA9IG5ldyBSZXR1cm5CbG9jayhzdHJpbmcsIHN0ZXBzLCBub25zZW5zaWNhbCwgcmV0dXJuU3RhdGVtZW50KTtcblxuICByZXR1cm4gcmV0dXJuQmxvY2s7XG59XG5cbmZ1bmN0aW9uIG5vbnNlbnNpY2FsRnJvbVJldHVybkJsb2NrTm9kZShyZXR1cm5CbG9ja05vZGUsIGNvbnRleHQpIHtcbiAgY29uc3Qgbm9uc2Vuc2VOb2RlcyA9IG5vbnNlbnNlTm9kZXNRdWVyeShyZXR1cm5CbG9ja05vZGUpLFxuICAgICAgICBub25zZW5zZU5vZGVzTGVuZ3RoID0gbm9uc2Vuc2VOb2Rlcy5sZW5ndGgsXG4gICAgICAgIG5vbnNlbnNpY2FsID0gKG5vbnNlbnNlTm9kZXNMZW5ndGggPiAwKTtcblxuICByZXR1cm4gbm9uc2Vuc2ljYWw7XG59XG4iXSwibmFtZXMiOlsic3RlcE5vZGVzUXVlcnkiLCJub2Rlc1F1ZXJ5Iiwibm9uc2Vuc2VOb2Rlc1F1ZXJ5IiwiYW5vbnltb3VzUHJvY2VkdXJlUmV0dXJuQmxvY2tOb2RlUXVlcnkiLCJub2RlUXVlcnkiLCJwcm9jZWR1cmVEZWNsYXJhdGlvblJldHVybkJsb2NrTm9kZVF1ZXJ5IiwiZG9tQXNzaWduZWQiLCJSZXR1cm5CbG9jayIsInN0cmluZyIsInN0ZXBzIiwibm9uc2Vuc2ljYWwiLCJyZXR1cm5TdGF0ZW1lbnQiLCJnZXRTdHJpbmciLCJnZXRTdGVwcyIsImlzTm9uc2Vuc2ljYWwiLCJnZXRSZXR1cm5TdGF0ZW1lbnQiLCJldmFsdWF0ZSIsInZhcmlhYmxlcyIsImNvbnRleHQiLCJtZXNzYWdlIiwiZXhjZXB0aW9uIiwiRXhjZXB0aW9uIiwiZnJvbU1lc3NhZ2UiLCJibG9ja0NvbnRleHQiLCJCbG9ja0NvbnRleHQiLCJmcm9tVmFyaWFibGVzIiwiZm9yRWFjaCIsInN0ZXAiLCJ2YWx1ZSIsImZyb21Qcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUiLCJwcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUiLCJwcm9jZWR1cmVEZWNsYXJhdGlvblJldHVybkJsb2NrTm9kZSIsInJldHVybkJsb2NrTm9kZSIsInJldHVybkJsb2NrIiwicmV0dXJuQmxvY2tGcm9tUmV0dXJuQmxvY2tOb2RlIiwiZnJvbUFub255bW91c1Byb2NlZHVyZU5vZGUiLCJhbm9ueW1vdXNQcm9jZWR1cmVOb2RlIiwiYW5vbnltb3VzUHJvY2VkdXJlUmV0dXJuQmxvY2tOb2RlIiwibmFtZSIsInN0ZXBzRnJvbVN0ZXBOb2RlcyIsInN0ZXBOb2RlcyIsIlN0ZXAiLCJkb20iLCJtYXAiLCJzdGVwTm9kZSIsImZyb21TdGVwTm9kZSIsIlJldHVyblN0YXRlbWVudCIsIm5vZGUiLCJub2RlQXNTdHJpbmciLCJub25zZW5zaWNhbEZyb21SZXR1cm5CbG9ja05vZGUiLCJmcm9tUmV0dXJuQmxvY2tOb2RlIiwibm9uc2Vuc2VOb2RlcyIsIm5vbnNlbnNlTm9kZXNMZW5ndGgiLCJsZW5ndGgiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQWNBOzs7ZUFBQTs7OzJEQVpnQjtnRUFDTTs0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