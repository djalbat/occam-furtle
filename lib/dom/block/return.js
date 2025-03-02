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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kb20vYmxvY2svcmV0dXJuLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgZG9tIGZyb20gXCIuLi8uLi9kb21cIjtcbmltcG9ydCBFeGNlcHRpb24gZnJvbSBcIi4uLy4uL2V4Y2VwdGlvblwiO1xuaW1wb3J0IEJsb2NrQ29udGV4dCBmcm9tIFwiLi4vLi4vY29udGV4dC9ibG9ja1wiO1xuXG5pbXBvcnQgeyBkb21Bc3NpZ25lZCB9IGZyb20gXCIuLi8uLi9kb21cIjtcbmltcG9ydCB7IG5vZGVRdWVyeSwgbm9kZXNRdWVyeSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvcXVlcnlcIjtcblxuY29uc3Qgc3RlcE5vZGVzUXVlcnkgPSBub2Rlc1F1ZXJ5KFwiL3JldHVybkJsb2NrL3N0ZXBcIiksXG4gICAgICBub25zZW5zZU5vZGVzUXVlcnkgPSBub2Rlc1F1ZXJ5KFwiL3JldHVybkJsb2NrL25vbnNlbnNlXCIpLFxuICAgICAgYW5vbnltb3VzUHJvY2VkdXJlUmV0dXJuQmxvY2tOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvYW5vbnltb3VzUHJvY2VkdXJlL3JldHVybkJsb2NrXCIpLFxuICAgICAgcHJvY2VkdXJlRGVjbGFyYXRpb25SZXR1cm5CbG9ja05vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9wcm9jZWR1cmVEZWNsYXJhdGlvbi9yZXR1cm5CbG9ja1wiKTtcblxuZXhwb3J0IGRlZmF1bHQgZG9tQXNzaWduZWQoY2xhc3MgUmV0dXJuQmxvY2sge1xuICBjb25zdHJ1Y3RvcihzdHJpbmcsIHN0ZXBzLCBub25zZW5zaWNhbCwgcmV0dXJuU3RhdGVtZW50KSB7XG4gICAgdGhpcy5zdHJpbmcgPSBzdHJpbmc7XG4gICAgdGhpcy5zdGVwcyA9IHN0ZXBzO1xuICAgIHRoaXMubm9uc2Vuc2ljYWwgPSBub25zZW5zaWNhbDtcbiAgICB0aGlzLnJldHVyblN0YXRlbWVudCA9IHJldHVyblN0YXRlbWVudDtcbiAgfVxuXG4gIGdldFN0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5zdHJpbmc7XG4gIH1cblxuICBnZXRTdGVwcygpIHtcbiAgICByZXR1cm4gdGhpcy5zdGVwcztcbiAgfVxuXG4gIGlzTm9uc2Vuc2ljYWwoKSB7XG4gICAgcmV0dXJuIHRoaXMubm9uc2Vuc2ljYWw7XG4gIH1cblxuICBnZXRSZXR1cm5TdGF0ZW1lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMucmV0dXJuU3RhdGVtZW50O1xuICB9XG5cbiAgZXZhbHVhdGUodmFyaWFibGVzLCBjb250ZXh0KSB7XG4gICAgaWYgKHRoaXMubm9uc2Vuc2ljYWwpIHtcbiAgICAgIGNvbnN0IG1lc3NhZ2UgPSBgVGhlIHJldHVybiBibG9jayBpcyBub25zZW5zaWNhbC5gLFxuICAgICAgICAgICAgZXhjZXB0aW9uID0gRXhjZXB0aW9uLmZyb21NZXNzYWdlKG1lc3NhZ2UpO1xuXG4gICAgICB0aHJvdyBleGNlcHRpb247XG4gICAgfVxuXG4gICAgY29uc3QgYmxvY2tDb250ZXh0ID0gQmxvY2tDb250ZXh0LmZyb21WYXJpYWJsZXModmFyaWFibGVzLCBjb250ZXh0KTtcblxuICAgIGNvbnRleHQgPSBibG9ja0NvbnRleHQ7IC8vL1xuXG4gICAgdGhpcy5zdGVwcy5mb3JFYWNoKChzdGVwKSA9PiB7XG4gICAgICBzdGVwLmV2YWx1YXRlKGNvbnRleHQpO1xuICAgIH0pO1xuXG4gICAgY29uc3QgdmFsdWUgPSB0aGlzLnJldHVyblN0YXRlbWVudC5ldmFsdWF0ZShjb250ZXh0KTtcblxuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJSZXR1cm5CbG9ja1wiO1xuXG4gIHN0YXRpYyBmcm9tUHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlKHByb2NlZHVyZURlY2xhcmF0aW9uTm9kZSwgY29udGV4dCkge1xuICAgIGNvbnN0IHByb2NlZHVyZURlY2xhcmF0aW9uUmV0dXJuQmxvY2tOb2RlID0gcHJvY2VkdXJlRGVjbGFyYXRpb25SZXR1cm5CbG9ja05vZGVRdWVyeShwcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUpLFxuICAgICAgICAgIHJldHVybkJsb2NrTm9kZSA9IHByb2NlZHVyZURlY2xhcmF0aW9uUmV0dXJuQmxvY2tOb2RlLCAgLy8vXG4gICAgICAgICAgcmV0dXJuQmxvY2sgPSByZXR1cm5CbG9ja0Zyb21SZXR1cm5CbG9ja05vZGUocmV0dXJuQmxvY2tOb2RlLCBjb250ZXh0KTtcblxuICAgIHJldHVybiByZXR1cm5CbG9jaztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQW5vbnltb3VzUHJvY2VkdXJlTm9kZShhbm9ueW1vdXNQcm9jZWR1cmVOb2RlLCBjb250ZXh0KSB7XG4gICAgY29uc3QgYW5vbnltb3VzUHJvY2VkdXJlUmV0dXJuQmxvY2tOb2RlID0gYW5vbnltb3VzUHJvY2VkdXJlUmV0dXJuQmxvY2tOb2RlUXVlcnkoYW5vbnltb3VzUHJvY2VkdXJlTm9kZSksXG4gICAgICAgICAgcmV0dXJuQmxvY2tOb2RlID0gYW5vbnltb3VzUHJvY2VkdXJlUmV0dXJuQmxvY2tOb2RlLCAgLy8vXG4gICAgICAgICAgcmV0dXJuQmxvY2sgPSByZXR1cm5CbG9ja0Zyb21SZXR1cm5CbG9ja05vZGUocmV0dXJuQmxvY2tOb2RlLCBjb250ZXh0KTtcblxuICAgIHJldHVybiByZXR1cm5CbG9jaztcbiAgfVxufSk7XG5cbmZ1bmN0aW9uIHN0cmluZ0Zyb21SZXR1cm5TdGF0ZW1lbnQocmV0dXJuU3RhdGVtZW50LCBjb250ZXh0KSB7XG4gIGNvbnN0IHJldHVyblN0YXRlbWVudFN0cmluZyA9IHJldHVyblN0YXRlbWVudC5nZXRTdHJpbmcoKSxcbiAgICAgICAgc3RyaW5nID0gYHsgLi4uICR7cmV0dXJuU3RhdGVtZW50U3RyaW5nfSB9YDtcblxuICByZXR1cm4gc3RyaW5nO1xufVxuXG5mdW5jdGlvbiBzdGVwc0Zyb21SZXR1cm5CbG9ja05vZGUocmV0dXJuQmxvY2tOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgU3RlcCB9ID0gZG9tLFxuICAgICAgICBzdGVwTm9kZXMgPSBzdGVwTm9kZXNRdWVyeShyZXR1cm5CbG9ja05vZGUpLFxuICAgICAgICBzdGVwcyA9IHN0ZXBOb2Rlcy5tYXAoKHN0ZXBOb2RlKSA9PiB7XG4gICAgICAgICAgY29uc3Qgc3RlcCA9IFN0ZXAuZnJvbVN0ZXBOb2RlKHN0ZXBOb2RlLCBjb250ZXh0KTtcblxuICAgICAgICAgIHJldHVybiBzdGVwO1xuICAgICAgICB9KTtcblxuICByZXR1cm4gc3RlcHM7XG59XG5cbmZ1bmN0aW9uIHJldHVybkJsb2NrRnJvbVJldHVybkJsb2NrTm9kZShyZXR1cm5CbG9ja05vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBSZXR1cm5CbG9jaywgUmV0dXJuU3RhdGVtZW50IH0gPSBkb20sXG4gICAgICAgIHJldHVyblN0YXRlbWVudCA9IFJldHVyblN0YXRlbWVudC5mcm9tUmV0dXJuQmxvY2tOb2RlKHJldHVybkJsb2NrTm9kZSwgY29udGV4dCksXG4gICAgICAgIG5vbnNlbnNpY2FsID0gbm9uc2Vuc2ljYWxGcm9tUmV0dXJuQmxvY2tOb2RlKHJldHVybkJsb2NrTm9kZSwgY29udGV4dCksXG4gICAgICAgIHN0ZXBzID0gc3RlcHNGcm9tUmV0dXJuQmxvY2tOb2RlKHJldHVybkJsb2NrTm9kZSwgY29udGV4dCksXG4gICAgICAgIHN0cmluZyA9IHN0cmluZ0Zyb21SZXR1cm5TdGF0ZW1lbnQocmV0dXJuU3RhdGVtZW50LCBjb250ZXh0KSxcbiAgICAgICAgcmV0dXJuQmxvY2sgPSBuZXcgUmV0dXJuQmxvY2soc3RyaW5nLCBzdGVwcywgbm9uc2Vuc2ljYWwsIHJldHVyblN0YXRlbWVudCk7XG5cbiAgcmV0dXJuIHJldHVybkJsb2NrO1xufVxuXG5mdW5jdGlvbiBub25zZW5zaWNhbEZyb21SZXR1cm5CbG9ja05vZGUocmV0dXJuQmxvY2tOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IG5vbnNlbnNlTm9kZXMgPSBub25zZW5zZU5vZGVzUXVlcnkocmV0dXJuQmxvY2tOb2RlKSxcbiAgICAgICAgbm9uc2Vuc2VOb2Rlc0xlbmd0aCA9IG5vbnNlbnNlTm9kZXMubGVuZ3RoLFxuICAgICAgICBub25zZW5zaWNhbCA9IChub25zZW5zZU5vZGVzTGVuZ3RoID4gMCk7XG5cbiAgcmV0dXJuIG5vbnNlbnNpY2FsO1xufVxuIl0sIm5hbWVzIjpbInN0ZXBOb2Rlc1F1ZXJ5Iiwibm9kZXNRdWVyeSIsIm5vbnNlbnNlTm9kZXNRdWVyeSIsImFub255bW91c1Byb2NlZHVyZVJldHVybkJsb2NrTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5IiwicHJvY2VkdXJlRGVjbGFyYXRpb25SZXR1cm5CbG9ja05vZGVRdWVyeSIsImRvbUFzc2lnbmVkIiwiUmV0dXJuQmxvY2siLCJzdHJpbmciLCJzdGVwcyIsIm5vbnNlbnNpY2FsIiwicmV0dXJuU3RhdGVtZW50IiwiZ2V0U3RyaW5nIiwiZ2V0U3RlcHMiLCJpc05vbnNlbnNpY2FsIiwiZ2V0UmV0dXJuU3RhdGVtZW50IiwiZXZhbHVhdGUiLCJ2YXJpYWJsZXMiLCJjb250ZXh0IiwibWVzc2FnZSIsImV4Y2VwdGlvbiIsIkV4Y2VwdGlvbiIsImZyb21NZXNzYWdlIiwiYmxvY2tDb250ZXh0IiwiQmxvY2tDb250ZXh0IiwiZnJvbVZhcmlhYmxlcyIsImZvckVhY2giLCJzdGVwIiwidmFsdWUiLCJmcm9tUHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlIiwicHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlIiwicHJvY2VkdXJlRGVjbGFyYXRpb25SZXR1cm5CbG9ja05vZGUiLCJyZXR1cm5CbG9ja05vZGUiLCJyZXR1cm5CbG9jayIsInJldHVybkJsb2NrRnJvbVJldHVybkJsb2NrTm9kZSIsImZyb21Bbm9ueW1vdXNQcm9jZWR1cmVOb2RlIiwiYW5vbnltb3VzUHJvY2VkdXJlTm9kZSIsImFub255bW91c1Byb2NlZHVyZVJldHVybkJsb2NrTm9kZSIsIm5hbWUiLCJzdHJpbmdGcm9tUmV0dXJuU3RhdGVtZW50IiwicmV0dXJuU3RhdGVtZW50U3RyaW5nIiwic3RlcHNGcm9tUmV0dXJuQmxvY2tOb2RlIiwiU3RlcCIsImRvbSIsInN0ZXBOb2RlcyIsIm1hcCIsInN0ZXBOb2RlIiwiZnJvbVN0ZXBOb2RlIiwiUmV0dXJuU3RhdGVtZW50IiwiZnJvbVJldHVybkJsb2NrTm9kZSIsIm5vbnNlbnNpY2FsRnJvbVJldHVybkJsb2NrTm9kZSIsIm5vbnNlbnNlTm9kZXMiLCJub25zZW5zZU5vZGVzTGVuZ3RoIiwibGVuZ3RoIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFjQTs7O2VBQUE7OzsyREFaZ0I7Z0VBQ007NERBQ0c7cUJBR2E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXRDLElBQU1BLGlCQUFpQkMsSUFBQUEsaUJBQVUsRUFBQyxzQkFDNUJDLHFCQUFxQkQsSUFBQUEsaUJBQVUsRUFBQywwQkFDaENFLHlDQUF5Q0MsSUFBQUEsZ0JBQVMsRUFBQyxvQ0FDbkRDLDJDQUEyQ0QsSUFBQUEsZ0JBQVMsRUFBQztJQUUzRCxXQUFlRSxJQUFBQSxnQkFBVyxnQ0FBQzthQUFNQyxZQUNuQkMsTUFBTSxFQUFFQyxLQUFLLEVBQUVDLFdBQVcsRUFBRUMsZUFBZTtnQ0FEeEJKO1FBRTdCLElBQUksQ0FBQ0MsTUFBTSxHQUFHQTtRQUNkLElBQUksQ0FBQ0MsS0FBSyxHQUFHQTtRQUNiLElBQUksQ0FBQ0MsV0FBVyxHQUFHQTtRQUNuQixJQUFJLENBQUNDLGVBQWUsR0FBR0E7Ozs7WUFHekJDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0osTUFBTTtZQUNwQjs7O1lBRUFLLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0osS0FBSztZQUNuQjs7O1lBRUFLLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0osV0FBVztZQUN6Qjs7O1lBRUFLLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0osZUFBZTtZQUM3Qjs7O1lBRUFLLEtBQUFBO21CQUFBQSxTQUFBQSxTQUFTQyxTQUFTLEVBQUVDLE9BQU87Z0JBQ3pCLElBQUksSUFBSSxDQUFDUixXQUFXLEVBQUU7b0JBQ3BCLElBQU1TLFVBQVcsb0NBQ1hDLFlBQVlDLGtCQUFTLENBQUNDLFdBQVcsQ0FBQ0g7b0JBRXhDLE1BQU1DO2dCQUNSO2dCQUVBLElBQU1HLGVBQWVDLGNBQVksQ0FBQ0MsYUFBYSxDQUFDUixXQUFXQztnQkFFM0RBLFVBQVVLLGNBQWMsR0FBRztnQkFFM0IsSUFBSSxDQUFDZCxLQUFLLENBQUNpQixPQUFPLENBQUMsU0FBQ0M7b0JBQ2xCQSxLQUFLWCxRQUFRLENBQUNFO2dCQUNoQjtnQkFFQSxJQUFNVSxRQUFRLElBQUksQ0FBQ2pCLGVBQWUsQ0FBQ0ssUUFBUSxDQUFDRTtnQkFFNUMsT0FBT1U7WUFDVDs7OztZQUlPQyxLQUFBQTttQkFBUCxTQUFPQSw2QkFBNkJDLHdCQUF3QixFQUFFWixPQUFPO2dCQUNuRSxJQUFNYSxzQ0FBc0MxQix5Q0FBeUN5QiwyQkFDL0VFLGtCQUFrQkQscUNBQ2xCRSxjQUFjQywrQkFBK0JGLGlCQUFpQmQ7Z0JBRXBFLE9BQU9lO1lBQ1Q7OztZQUVPRSxLQUFBQTttQkFBUCxTQUFPQSwyQkFBMkJDLHNCQUFzQixFQUFFbEIsT0FBTztnQkFDL0QsSUFBTW1CLG9DQUFvQ2xDLHVDQUF1Q2lDLHlCQUMzRUosa0JBQWtCSyxtQ0FDbEJKLGNBQWNDLCtCQUErQkYsaUJBQWlCZDtnQkFFcEUsT0FBT2U7WUFDVDs7OztLQWhCQSwrQkFBT0ssUUFBTztBQW1CaEIsU0FBU0MsMEJBQTBCNUIsZUFBZSxFQUFFTyxPQUFPO0lBQ3pELElBQU1zQix3QkFBd0I3QixnQkFBZ0JDLFNBQVMsSUFDakRKLFNBQVMsQUFBQyxTQUE4QixPQUF0QmdDLHVCQUFzQjtJQUU5QyxPQUFPaEM7QUFDVDtBQUVBLFNBQVNpQyx5QkFBeUJULGVBQWUsRUFBRWQsT0FBTztJQUN4RCxJQUFNLEFBQUV3QixPQUFTQyxZQUFHLENBQVpELE1BQ0ZFLFlBQVk1QyxlQUFlZ0Msa0JBQzNCdkIsUUFBUW1DLFVBQVVDLEdBQUcsQ0FBQyxTQUFDQztRQUNyQixJQUFNbkIsT0FBT2UsS0FBS0ssWUFBWSxDQUFDRCxVQUFVNUI7UUFFekMsT0FBT1M7SUFDVDtJQUVOLE9BQU9sQjtBQUNUO0FBRUEsU0FBU3lCLCtCQUErQkYsZUFBZSxFQUFFZCxPQUFPO0lBQzlELElBQVFYLGNBQWlDb0MsWUFBRyxDQUFwQ3BDLGFBQWF5QyxrQkFBb0JMLFlBQUcsQ0FBdkJLLGlCQUNmckMsa0JBQWtCcUMsZ0JBQWdCQyxtQkFBbUIsQ0FBQ2pCLGlCQUFpQmQsVUFDdkVSLGNBQWN3QywrQkFBK0JsQixpQkFBaUJkLFVBQzlEVCxRQUFRZ0MseUJBQXlCVCxpQkFBaUJkLFVBQ2xEVixTQUFTK0IsMEJBQTBCNUIsaUJBQWlCTyxVQUNwRGUsY0FBYyxJQUFJMUIsWUFBWUMsUUFBUUMsT0FBT0MsYUFBYUM7SUFFaEUsT0FBT3NCO0FBQ1Q7QUFFQSxTQUFTaUIsK0JBQStCbEIsZUFBZSxFQUFFZCxPQUFPO0lBQzlELElBQU1pQyxnQkFBZ0JqRCxtQkFBbUI4QixrQkFDbkNvQixzQkFBc0JELGNBQWNFLE1BQU0sRUFDMUMzQyxjQUFlMEMsc0JBQXNCO0lBRTNDLE9BQU8xQztBQUNUIn0=