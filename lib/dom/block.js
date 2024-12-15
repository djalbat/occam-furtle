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
            key: "resolve",
            value: function resolve(variables, context) {
                if (context === undefined) {
                    context = variables; ///
                    variables = [];
                }
                var blockContext = _block.default.fromVariables(variables, context);
                context = blockContext; ///
                this.steps.forEach(function(step) {
                    step.resolve(context);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb20vYmxvY2suanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBkb20gZnJvbSBcIi4uL2RvbVwiO1xuaW1wb3J0IEJsb2NrQ29udGV4dCBmcm9tIFwiLi4vY29udGV4dC9ibG9ja1wiO1xuXG5pbXBvcnQgeyBkb21Bc3NpZ25lZCB9IGZyb20gXCIuLi9kb21cIjtcbmltcG9ydCB7IG5vZGVRdWVyeSwgbm9kZXNRdWVyeSB9IGZyb20gXCIuLi91dGlsaXRpZXMvcXVlcnlcIjtcblxuY29uc3Qgc3RlcE5vZGVzUXVlcnkgPSBub2Rlc1F1ZXJ5KFwiL2Jsb2NrL3N0ZXBcIiksXG4gICAgICBmb3JFYWNoTG9vcEJsb2NrTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL2ZvckVhY2hMb29wL2Fub255bW91c1Byb2NlZHVyZS9ibG9ja1wiKTtcblxuZXhwb3J0IGRlZmF1bHQgZG9tQXNzaWduZWQoY2xhc3MgQmxvY2sge1xuICBjb25zdHJ1Y3RvcihzdHJpbmcsIHN0ZXBzKSB7XG4gICAgdGhpcy5zdHJpbmcgPSBzdHJpbmc7XG4gICAgdGhpcy5zdGVwcyA9IHN0ZXBzO1xuICB9XG5cbiAgZ2V0U3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLnN0cmluZztcbiAgfVxuXG4gIGdldFN0ZXBzKCkge1xuICAgIHJldHVybiB0aGlzLnN0ZXBzO1xuICB9XG5cbiAgcmVzb2x2ZSh2YXJpYWJsZXMsIGNvbnRleHQpIHtcbiAgICBpZiAoY29udGV4dCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBjb250ZXh0ID0gdmFyaWFibGVzOyAgLy8vXG5cbiAgICAgIHZhcmlhYmxlcyA9IFtdO1xuICAgIH1cblxuICAgIGNvbnN0IGJsb2NrQ29udGV4dCA9IEJsb2NrQ29udGV4dC5mcm9tVmFyaWFibGVzKHZhcmlhYmxlcywgY29udGV4dCk7XG5cbiAgICBjb250ZXh0ID0gYmxvY2tDb250ZXh0OyAvLy9cblxuICAgIHRoaXMuc3RlcHMuZm9yRWFjaCgoc3RlcCkgPT4ge1xuICAgICAgc3RlcC5yZXNvbHZlKGNvbnRleHQpO1xuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIkJsb2NrXCI7XG5cbiAgc3RhdGljIGZyb21CbG9ja05vZGUoYmxvY2tOb2RlLCBjb250ZXh0KSB7XG4gICAgbGV0IGJsb2NrID0gbnVsbDtcblxuICAgIGlmIChibG9ja05vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IG5vZGUgPSBibG9ja05vZGUsIC8vL1xuICAgICAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgICAgICBzdGVwTm9kZXMgPSBzdGVwTm9kZXNRdWVyeShibG9ja05vZGUpLFxuICAgICAgICAgICAgc3RlcHMgPSBzdGVwc0Zyb21TdGVwTm9kZXMoc3RlcE5vZGVzLCBjb250ZXh0KTtcblxuICAgICAgYmxvY2sgPSBuZXcgQmxvY2soc3RyaW5nLCBzdGVwcyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGJsb2NrO1xuICB9XG5cbiAgc3RhdGljIGZyb21Gb3JFYWNoTG9vcE5vZGUoZm9yRWFjaExvb3BOb2RlLCBjb250ZXh0KSB7XG4gICAgY29uc3QgZm9yRWFjaExvb3BCb2NrTm9kZSA9IGZvckVhY2hMb29wQmxvY2tOb2RlUXVlcnkoZm9yRWFjaExvb3BOb2RlKSxcbiAgICAgICAgICBibG9ja05vZGUgPSBmb3JFYWNoTG9vcEJvY2tOb2RlLCAgLy8vXG4gICAgICAgICAgc3RlcE5vZGVzID0gc3RlcE5vZGVzUXVlcnkoYmxvY2tOb2RlKSxcbiAgICAgICAgICBub2RlID0gYmxvY2tOb2RlLCAvLy9cbiAgICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgICBzdGVwcyA9IHN0ZXBzRnJvbVN0ZXBOb2RlcyhzdGVwTm9kZXMsIGNvbnRleHQpLFxuICAgICAgICAgIGJsb2NrID0gbmV3IEJsb2NrKHN0cmluZywgc3RlcHMpO1xuXG4gICAgcmV0dXJuIGJsb2NrO1xuICB9XG59KTtcblxuZnVuY3Rpb24gc3RlcHNGcm9tU3RlcE5vZGVzKHN0ZXBOb2RlcywgY29udGV4dCkge1xuICBjb25zdCB7IFN0ZXAgfSA9IGRvbSxcbiAgICAgICAgc3RlcHMgPSBzdGVwTm9kZXMubWFwKChzdGVwTm9kZSkgPT4ge1xuICAgICAgICAgIGNvbnN0IHN0ZXAgPSBTdGVwLmZyb21TdGVwTm9kZShzdGVwTm9kZSwgY29udGV4dCk7XG5cbiAgICAgICAgICByZXR1cm4gc3RlcDtcbiAgICAgICAgfSk7XG5cbiAgcmV0dXJuIHN0ZXBzO1xufVxuIl0sIm5hbWVzIjpbInN0ZXBOb2Rlc1F1ZXJ5Iiwibm9kZXNRdWVyeSIsImZvckVhY2hMb29wQmxvY2tOb2RlUXVlcnkiLCJub2RlUXVlcnkiLCJkb21Bc3NpZ25lZCIsIkJsb2NrIiwic3RyaW5nIiwic3RlcHMiLCJnZXRTdHJpbmciLCJnZXRTdGVwcyIsInJlc29sdmUiLCJ2YXJpYWJsZXMiLCJjb250ZXh0IiwidW5kZWZpbmVkIiwiYmxvY2tDb250ZXh0IiwiQmxvY2tDb250ZXh0IiwiZnJvbVZhcmlhYmxlcyIsImZvckVhY2giLCJzdGVwIiwiZnJvbUJsb2NrTm9kZSIsImJsb2NrTm9kZSIsImJsb2NrIiwibm9kZSIsIm5vZGVBc1N0cmluZyIsInN0ZXBOb2RlcyIsInN0ZXBzRnJvbVN0ZXBOb2RlcyIsImZyb21Gb3JFYWNoTG9vcE5vZGUiLCJmb3JFYWNoTG9vcE5vZGUiLCJmb3JFYWNoTG9vcEJvY2tOb2RlIiwibmFtZSIsIlN0ZXAiLCJkb20iLCJtYXAiLCJzdGVwTm9kZSIsImZyb21TdGVwTm9kZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBV0E7OztlQUFBOzs7MkRBVGdCOzREQUNTO3FCQUdhOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV0QyxJQUFNQSxpQkFBaUJDLElBQUFBLGlCQUFVLEVBQUMsZ0JBQzVCQyw0QkFBNEJDLElBQUFBLGdCQUFTLEVBQUM7SUFFNUMsV0FBZUMsSUFBQUEsZ0JBQVcsMEJBQUM7YUFBTUMsTUFDbkJDLE1BQU0sRUFBRUMsS0FBSztnQ0FETUY7UUFFN0IsSUFBSSxDQUFDQyxNQUFNLEdBQUdBO1FBQ2QsSUFBSSxDQUFDQyxLQUFLLEdBQUdBOzs7O1lBR2ZDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0YsTUFBTTtZQUNwQjs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0YsS0FBSztZQUNuQjs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQSxRQUFRQyxTQUFTLEVBQUVDLE9BQU87Z0JBQ3hCLElBQUlBLFlBQVlDLFdBQVc7b0JBQ3pCRCxVQUFVRCxXQUFZLEdBQUc7b0JBRXpCQSxZQUFZLEVBQUU7Z0JBQ2hCO2dCQUVBLElBQU1HLGVBQWVDLGNBQVksQ0FBQ0MsYUFBYSxDQUFDTCxXQUFXQztnQkFFM0RBLFVBQVVFLGNBQWMsR0FBRztnQkFFM0IsSUFBSSxDQUFDUCxLQUFLLENBQUNVLE9BQU8sQ0FBQyxTQUFDQztvQkFDbEJBLEtBQUtSLE9BQU8sQ0FBQ0U7Z0JBQ2Y7WUFDRjs7OztZQUlPTyxLQUFBQTttQkFBUCxTQUFPQSxjQUFjQyxTQUFTLEVBQUVSLE9BQU87Z0JBQ3JDLElBQUlTLFFBQVE7Z0JBRVosSUFBSUQsY0FBYyxNQUFNO29CQUN0QixJQUFNRSxPQUFPRixXQUNQZCxTQUFTTSxRQUFRVyxZQUFZLENBQUNELE9BQzlCRSxZQUFZeEIsZUFBZW9CLFlBQzNCYixRQUFRa0IsbUJBQW1CRCxXQUFXWjtvQkFFNUNTLFFBQVEsSUFBSWhCLE1BQU1DLFFBQVFDO2dCQUM1QjtnQkFFQSxPQUFPYztZQUNUOzs7WUFFT0ssS0FBQUE7bUJBQVAsU0FBT0Esb0JBQW9CQyxlQUFlLEVBQUVmLE9BQU87Z0JBQ2pELElBQU1nQixzQkFBc0IxQiwwQkFBMEJ5QixrQkFDaERQLFlBQVlRLHFCQUNaSixZQUFZeEIsZUFBZW9CLFlBQzNCRSxPQUFPRixXQUNQZCxTQUFTTSxRQUFRVyxZQUFZLENBQUNELE9BQzlCZixRQUFRa0IsbUJBQW1CRCxXQUFXWixVQUN0Q1MsUUFBUSxJQUFJaEIsTUFBTUMsUUFBUUM7Z0JBRWhDLE9BQU9jO1lBQ1Q7Ozs7S0EzQkEseUJBQU9RLFFBQU87QUE4QmhCLFNBQVNKLG1CQUFtQkQsU0FBUyxFQUFFWixPQUFPO0lBQzVDLElBQU0sQUFBRWtCLE9BQVNDLFlBQUcsQ0FBWkQsTUFDRnZCLFFBQVFpQixVQUFVUSxHQUFHLENBQUMsU0FBQ0M7UUFDckIsSUFBTWYsT0FBT1ksS0FBS0ksWUFBWSxDQUFDRCxVQUFVckI7UUFFekMsT0FBT007SUFDVDtJQUVOLE9BQU9YO0FBQ1QifQ==