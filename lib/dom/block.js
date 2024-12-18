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
var _dom = /*#__PURE__*/ _interop_require_wildcard(require("../dom"));
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
var _Block;
var stepNodesQuery = (0, _query.nodesQuery)("/block/step"), forEachLoopBlockNodeQuery = (0, _query.nodeQuery)("/forEachLoop/anonymousProcedure/block");
var _default = (0, _dom.domAssigned)((_Block = /*#__PURE__*/ function() {
    function Block(string, steps) {
        _class_call_check(this, Block);
        this.string = string;
        this.steps = steps;
    }
    _create_class(Block, [
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
            key: "evaluate",
            value: function evaluate(variables, context) {
                if (context === undefined) {
                    context = variables; ///
                    variables = [];
                }
                var blockContext = _block.default.fromVariables(variables, context);
                context = blockContext; ///
                this.steps.forEach(function(step) {
                    step.evaluate(context);
                });
            }
        }
    ], [
        {
            key: "fromBlockNode",
            value: function fromBlockNode(blockNode, context) {
                var block = null;
                if (blockNode !== null) {
                    var node = blockNode, string = context.nodeAsString(node), stepNodes = stepNodesQuery(blockNode), steps = stepsFromStepNodes(stepNodes, context);
                    block = new Block(string, steps);
                }
                return block;
            }
        },
        {
            key: "fromForEachLoopNode",
            value: function fromForEachLoopNode(forEachLoopNode, context) {
                var forEachLoopBockNode = forEachLoopBlockNodeQuery(forEachLoopNode), blockNode = forEachLoopBockNode, stepNodes = stepNodesQuery(blockNode), node = blockNode, string = context.nodeAsString(node), steps = stepsFromStepNodes(stepNodes, context), block = new Block(string, steps);
                return block;
            }
        }
    ]);
    return Block;
}(), _define_property(_Block, "name", "Block"), _Block));
function stepsFromStepNodes(stepNodes, context) {
    var Step = _dom.default.Step, steps = stepNodes.map(function(stepNode) {
        var step = Step.fromStepNode(stepNode, context);
        return step;
    });
    return steps;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb20vYmxvY2suanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBkb20gZnJvbSBcIi4uL2RvbVwiO1xuaW1wb3J0IEJsb2NrQ29udGV4dCBmcm9tIFwiLi4vY29udGV4dC9ibG9ja1wiO1xuXG5pbXBvcnQgeyBkb21Bc3NpZ25lZCB9IGZyb20gXCIuLi9kb21cIjtcbmltcG9ydCB7IG5vZGVRdWVyeSwgbm9kZXNRdWVyeSB9IGZyb20gXCIuLi91dGlsaXRpZXMvcXVlcnlcIjtcblxuY29uc3Qgc3RlcE5vZGVzUXVlcnkgPSBub2Rlc1F1ZXJ5KFwiL2Jsb2NrL3N0ZXBcIiksXG4gICAgICBmb3JFYWNoTG9vcEJsb2NrTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL2ZvckVhY2hMb29wL2Fub255bW91c1Byb2NlZHVyZS9ibG9ja1wiKTtcblxuZXhwb3J0IGRlZmF1bHQgZG9tQXNzaWduZWQoY2xhc3MgQmxvY2sge1xuICBjb25zdHJ1Y3RvcihzdHJpbmcsIHN0ZXBzKSB7XG4gICAgdGhpcy5zdHJpbmcgPSBzdHJpbmc7XG4gICAgdGhpcy5zdGVwcyA9IHN0ZXBzO1xuICB9XG5cbiAgZ2V0U3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLnN0cmluZztcbiAgfVxuXG4gIGdldFN0ZXBzKCkge1xuICAgIHJldHVybiB0aGlzLnN0ZXBzO1xuICB9XG5cbiAgZXZhbHVhdGUodmFyaWFibGVzLCBjb250ZXh0KSB7XG4gICAgaWYgKGNvbnRleHQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgY29udGV4dCA9IHZhcmlhYmxlczsgIC8vL1xuXG4gICAgICB2YXJpYWJsZXMgPSBbXTtcbiAgICB9XG5cbiAgICBjb25zdCBibG9ja0NvbnRleHQgPSBCbG9ja0NvbnRleHQuZnJvbVZhcmlhYmxlcyh2YXJpYWJsZXMsIGNvbnRleHQpO1xuXG4gICAgY29udGV4dCA9IGJsb2NrQ29udGV4dDsgLy8vXG5cbiAgICB0aGlzLnN0ZXBzLmZvckVhY2goKHN0ZXApID0+IHtcbiAgICAgIHN0ZXAuZXZhbHVhdGUoY29udGV4dCk7XG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiQmxvY2tcIjtcblxuICBzdGF0aWMgZnJvbUJsb2NrTm9kZShibG9ja05vZGUsIGNvbnRleHQpIHtcbiAgICBsZXQgYmxvY2sgPSBudWxsO1xuXG4gICAgaWYgKGJsb2NrTm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3Qgbm9kZSA9IGJsb2NrTm9kZSwgLy8vXG4gICAgICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgICAgIHN0ZXBOb2RlcyA9IHN0ZXBOb2Rlc1F1ZXJ5KGJsb2NrTm9kZSksXG4gICAgICAgICAgICBzdGVwcyA9IHN0ZXBzRnJvbVN0ZXBOb2RlcyhzdGVwTm9kZXMsIGNvbnRleHQpO1xuXG4gICAgICBibG9jayA9IG5ldyBCbG9jayhzdHJpbmcsIHN0ZXBzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gYmxvY2s7XG4gIH1cblxuICBzdGF0aWMgZnJvbUZvckVhY2hMb29wTm9kZShmb3JFYWNoTG9vcE5vZGUsIGNvbnRleHQpIHtcbiAgICBjb25zdCBmb3JFYWNoTG9vcEJvY2tOb2RlID0gZm9yRWFjaExvb3BCbG9ja05vZGVRdWVyeShmb3JFYWNoTG9vcE5vZGUpLFxuICAgICAgICAgIGJsb2NrTm9kZSA9IGZvckVhY2hMb29wQm9ja05vZGUsICAvLy9cbiAgICAgICAgICBzdGVwTm9kZXMgPSBzdGVwTm9kZXNRdWVyeShibG9ja05vZGUpLFxuICAgICAgICAgIG5vZGUgPSBibG9ja05vZGUsIC8vL1xuICAgICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICAgIHN0ZXBzID0gc3RlcHNGcm9tU3RlcE5vZGVzKHN0ZXBOb2RlcywgY29udGV4dCksXG4gICAgICAgICAgYmxvY2sgPSBuZXcgQmxvY2soc3RyaW5nLCBzdGVwcyk7XG5cbiAgICByZXR1cm4gYmxvY2s7XG4gIH1cbn0pO1xuXG5mdW5jdGlvbiBzdGVwc0Zyb21TdGVwTm9kZXMoc3RlcE5vZGVzLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgU3RlcCB9ID0gZG9tLFxuICAgICAgICBzdGVwcyA9IHN0ZXBOb2Rlcy5tYXAoKHN0ZXBOb2RlKSA9PiB7XG4gICAgICAgICAgY29uc3Qgc3RlcCA9IFN0ZXAuZnJvbVN0ZXBOb2RlKHN0ZXBOb2RlLCBjb250ZXh0KTtcblxuICAgICAgICAgIHJldHVybiBzdGVwO1xuICAgICAgICB9KTtcblxuICByZXR1cm4gc3RlcHM7XG59XG4iXSwibmFtZXMiOlsic3RlcE5vZGVzUXVlcnkiLCJub2Rlc1F1ZXJ5IiwiZm9yRWFjaExvb3BCbG9ja05vZGVRdWVyeSIsIm5vZGVRdWVyeSIsImRvbUFzc2lnbmVkIiwiQmxvY2siLCJzdHJpbmciLCJzdGVwcyIsImdldFN0cmluZyIsImdldFN0ZXBzIiwiZXZhbHVhdGUiLCJ2YXJpYWJsZXMiLCJjb250ZXh0IiwidW5kZWZpbmVkIiwiYmxvY2tDb250ZXh0IiwiQmxvY2tDb250ZXh0IiwiZnJvbVZhcmlhYmxlcyIsImZvckVhY2giLCJzdGVwIiwiZnJvbUJsb2NrTm9kZSIsImJsb2NrTm9kZSIsImJsb2NrIiwibm9kZSIsIm5vZGVBc1N0cmluZyIsInN0ZXBOb2RlcyIsInN0ZXBzRnJvbVN0ZXBOb2RlcyIsImZyb21Gb3JFYWNoTG9vcE5vZGUiLCJmb3JFYWNoTG9vcE5vZGUiLCJmb3JFYWNoTG9vcEJvY2tOb2RlIiwibmFtZSIsIlN0ZXAiLCJkb20iLCJtYXAiLCJzdGVwTm9kZSIsImZyb21TdGVwTm9kZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBV0E7OztlQUFBOzs7MkRBVGdCOzREQUNTO3FCQUdhOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV0QyxJQUFNQSxpQkFBaUJDLElBQUFBLGlCQUFVLEVBQUMsZ0JBQzVCQyw0QkFBNEJDLElBQUFBLGdCQUFTLEVBQUM7SUFFNUMsV0FBZUMsSUFBQUEsZ0JBQVcsMEJBQUM7YUFBTUMsTUFDbkJDLE1BQU0sRUFBRUMsS0FBSztnQ0FETUY7UUFFN0IsSUFBSSxDQUFDQyxNQUFNLEdBQUdBO1FBQ2QsSUFBSSxDQUFDQyxLQUFLLEdBQUdBOzs7O1lBR2ZDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0YsTUFBTTtZQUNwQjs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0YsS0FBSztZQUNuQjs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQSxTQUFTQyxTQUFTLEVBQUVDLE9BQU87Z0JBQ3pCLElBQUlBLFlBQVlDLFdBQVc7b0JBQ3pCRCxVQUFVRCxXQUFZLEdBQUc7b0JBRXpCQSxZQUFZLEVBQUU7Z0JBQ2hCO2dCQUVBLElBQU1HLGVBQWVDLGNBQVksQ0FBQ0MsYUFBYSxDQUFDTCxXQUFXQztnQkFFM0RBLFVBQVVFLGNBQWMsR0FBRztnQkFFM0IsSUFBSSxDQUFDUCxLQUFLLENBQUNVLE9BQU8sQ0FBQyxTQUFDQztvQkFDbEJBLEtBQUtSLFFBQVEsQ0FBQ0U7Z0JBQ2hCO1lBQ0Y7Ozs7WUFJT08sS0FBQUE7bUJBQVAsU0FBT0EsY0FBY0MsU0FBUyxFQUFFUixPQUFPO2dCQUNyQyxJQUFJUyxRQUFRO2dCQUVaLElBQUlELGNBQWMsTUFBTTtvQkFDdEIsSUFBTUUsT0FBT0YsV0FDUGQsU0FBU00sUUFBUVcsWUFBWSxDQUFDRCxPQUM5QkUsWUFBWXhCLGVBQWVvQixZQUMzQmIsUUFBUWtCLG1CQUFtQkQsV0FBV1o7b0JBRTVDUyxRQUFRLElBQUloQixNQUFNQyxRQUFRQztnQkFDNUI7Z0JBRUEsT0FBT2M7WUFDVDs7O1lBRU9LLEtBQUFBO21CQUFQLFNBQU9BLG9CQUFvQkMsZUFBZSxFQUFFZixPQUFPO2dCQUNqRCxJQUFNZ0Isc0JBQXNCMUIsMEJBQTBCeUIsa0JBQ2hEUCxZQUFZUSxxQkFDWkosWUFBWXhCLGVBQWVvQixZQUMzQkUsT0FBT0YsV0FDUGQsU0FBU00sUUFBUVcsWUFBWSxDQUFDRCxPQUM5QmYsUUFBUWtCLG1CQUFtQkQsV0FBV1osVUFDdENTLFFBQVEsSUFBSWhCLE1BQU1DLFFBQVFDO2dCQUVoQyxPQUFPYztZQUNUOzs7O0tBM0JBLHlCQUFPUSxRQUFPO0FBOEJoQixTQUFTSixtQkFBbUJELFNBQVMsRUFBRVosT0FBTztJQUM1QyxJQUFNLEFBQUVrQixPQUFTQyxZQUFHLENBQVpELE1BQ0Z2QixRQUFRaUIsVUFBVVEsR0FBRyxDQUFDLFNBQUNDO1FBQ3JCLElBQU1mLE9BQU9ZLEtBQUtJLFlBQVksQ0FBQ0QsVUFBVXJCO1FBRXpDLE9BQU9NO0lBQ1Q7SUFFTixPQUFPWDtBQUNUIn0=