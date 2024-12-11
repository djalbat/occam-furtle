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
    function Block(steps) {
        _class_call_check(this, Block);
        this.steps = steps;
    }
    _create_class(Block, [
        {
            key: "getSteps",
            value: function getSteps() {
                return this.steps;
            }
        },
        {
            key: "getString",
            value: function getString() {
                debugger;
            }
        }
    ], [
        {
            key: "fromBlockNode",
            value: function fromBlockNode(blockNode) {
                var block = null;
                if (blockNode !== null) {
                    var stepNodes = stepNodesQuery(blockNode), steps = stepsFromStepNodes(stepNodes);
                    block = new Block(steps);
                }
                return block;
            }
        },
        {
            key: "fromForEachLoopNode",
            value: function fromForEachLoopNode(forEachLoopNode) {
                var forEachLoopBockNode = forEachLoopBlockNodeQuery(forEachLoopNode), blockNode = forEachLoopBockNode, stepNodes = stepNodesQuery(blockNode), steps = stepsFromStepNodes(stepNodes), block = new Block(steps);
                return block;
            }
        }
    ]);
    return Block;
}(), _define_property(_Block, "name", "Block"), _Block));
function stepsFromStepNodes(stepNodes) {
    var Step = _dom.default.Step, steps = stepNodes.map(function(stepNode) {
        var step = Step.fromStepNode(stepNode);
        return step;
    });
    return steps;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb20vYmxvY2suanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBkb20gZnJvbSBcIi4uL2RvbVwiO1xuXG5pbXBvcnQgeyBkb21Bc3NpZ25lZCB9IGZyb20gXCIuLi9kb21cIjtcbmltcG9ydCB7IG5vZGVRdWVyeSwgbm9kZXNRdWVyeSB9IGZyb20gXCIuLi91dGlsaXRpZXMvcXVlcnlcIjtcblxuY29uc3Qgc3RlcE5vZGVzUXVlcnkgPSBub2Rlc1F1ZXJ5KFwiL2Jsb2NrL3N0ZXBcIiksXG4gICAgICBmb3JFYWNoTG9vcEJsb2NrTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL2ZvckVhY2hMb29wL2Fub255bW91c1Byb2NlZHVyZS9ibG9ja1wiKTtcblxuZXhwb3J0IGRlZmF1bHQgZG9tQXNzaWduZWQoY2xhc3MgQmxvY2sge1xuICBjb25zdHJ1Y3RvcihzdGVwcykge1xuICAgIHRoaXMuc3RlcHMgPSBzdGVwcztcbiAgfVxuXG4gIGdldFN0ZXBzKCkge1xuICAgIHJldHVybiB0aGlzLnN0ZXBzO1xuICB9XG5cbiAgZ2V0U3RyaW5nKCkge1xuICAgIGRlYnVnZ2VyXG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiQmxvY2tcIjtcblxuICBzdGF0aWMgZnJvbUJsb2NrTm9kZShibG9ja05vZGUpIHtcbiAgICBsZXQgYmxvY2sgPSBudWxsO1xuXG4gICAgaWYgKGJsb2NrTm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3Qgc3RlcE5vZGVzID0gc3RlcE5vZGVzUXVlcnkoYmxvY2tOb2RlKSxcbiAgICAgICAgICAgIHN0ZXBzID0gc3RlcHNGcm9tU3RlcE5vZGVzKHN0ZXBOb2Rlcyk7XG5cbiAgICAgIGJsb2NrID0gbmV3IEJsb2NrKHN0ZXBzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gYmxvY2s7XG4gIH1cblxuICBzdGF0aWMgZnJvbUZvckVhY2hMb29wTm9kZShmb3JFYWNoTG9vcE5vZGUpIHtcbiAgICBjb25zdCBmb3JFYWNoTG9vcEJvY2tOb2RlID0gZm9yRWFjaExvb3BCbG9ja05vZGVRdWVyeShmb3JFYWNoTG9vcE5vZGUpLFxuICAgICAgICAgIGJsb2NrTm9kZSA9IGZvckVhY2hMb29wQm9ja05vZGUsICAvLy9cbiAgICAgICAgICBzdGVwTm9kZXMgPSBzdGVwTm9kZXNRdWVyeShibG9ja05vZGUpLFxuICAgICAgICAgIHN0ZXBzID0gc3RlcHNGcm9tU3RlcE5vZGVzKHN0ZXBOb2RlcyksXG4gICAgICAgICAgYmxvY2sgPSBuZXcgQmxvY2soc3RlcHMpO1xuXG4gICAgcmV0dXJuIGJsb2NrO1xuICB9XG59KTtcblxuZnVuY3Rpb24gc3RlcHNGcm9tU3RlcE5vZGVzKHN0ZXBOb2Rlcykge1xuICBjb25zdCB7IFN0ZXAgfSA9IGRvbSxcbiAgICAgICAgc3RlcHMgPSBzdGVwTm9kZXMubWFwKChzdGVwTm9kZSkgPT4ge1xuICAgICAgICAgIGNvbnN0IHN0ZXAgPSBTdGVwLmZyb21TdGVwTm9kZShzdGVwTm9kZSk7XG5cbiAgICAgICAgICByZXR1cm4gc3RlcDtcbiAgICAgICAgfSk7XG5cbiAgcmV0dXJuIHN0ZXBzO1xufVxuIl0sIm5hbWVzIjpbInN0ZXBOb2Rlc1F1ZXJ5Iiwibm9kZXNRdWVyeSIsImZvckVhY2hMb29wQmxvY2tOb2RlUXVlcnkiLCJub2RlUXVlcnkiLCJkb21Bc3NpZ25lZCIsIkJsb2NrIiwic3RlcHMiLCJnZXRTdGVwcyIsImdldFN0cmluZyIsImZyb21CbG9ja05vZGUiLCJibG9ja05vZGUiLCJibG9jayIsInN0ZXBOb2RlcyIsInN0ZXBzRnJvbVN0ZXBOb2RlcyIsImZyb21Gb3JFYWNoTG9vcE5vZGUiLCJmb3JFYWNoTG9vcE5vZGUiLCJmb3JFYWNoTG9vcEJvY2tOb2RlIiwibmFtZSIsIlN0ZXAiLCJkb20iLCJtYXAiLCJzdGVwTm9kZSIsInN0ZXAiLCJmcm9tU3RlcE5vZGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVVBOzs7ZUFBQTs7OzJEQVJnQjtxQkFHc0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV0QyxJQUFNQSxpQkFBaUJDLElBQUFBLGlCQUFVLEVBQUMsZ0JBQzVCQyw0QkFBNEJDLElBQUFBLGdCQUFTLEVBQUM7SUFFNUMsV0FBZUMsSUFBQUEsZ0JBQVcsMEJBQUM7YUFBTUMsTUFDbkJDLEtBQUs7Z0NBRGNEO1FBRTdCLElBQUksQ0FBQ0MsS0FBSyxHQUFHQTs7OztZQUdmQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNELEtBQUs7WUFDbkI7OztZQUVBRSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsUUFBUTtZQUNWOzs7O1lBSU9DLEtBQUFBO21CQUFQLFNBQU9BLGNBQWNDLFNBQVM7Z0JBQzVCLElBQUlDLFFBQVE7Z0JBRVosSUFBSUQsY0FBYyxNQUFNO29CQUN0QixJQUFNRSxZQUFZWixlQUFlVSxZQUMzQkosUUFBUU8sbUJBQW1CRDtvQkFFakNELFFBQVEsSUFBSU4sTUFBTUM7Z0JBQ3BCO2dCQUVBLE9BQU9LO1lBQ1Q7OztZQUVPRyxLQUFBQTttQkFBUCxTQUFPQSxvQkFBb0JDLGVBQWU7Z0JBQ3hDLElBQU1DLHNCQUFzQmQsMEJBQTBCYSxrQkFDaERMLFlBQVlNLHFCQUNaSixZQUFZWixlQUFlVSxZQUMzQkosUUFBUU8sbUJBQW1CRCxZQUMzQkQsUUFBUSxJQUFJTixNQUFNQztnQkFFeEIsT0FBT0s7WUFDVDs7OztLQXZCQSx5QkFBT00sUUFBTztBQTBCaEIsU0FBU0osbUJBQW1CRCxTQUFTO0lBQ25DLElBQU0sQUFBRU0sT0FBU0MsWUFBRyxDQUFaRCxNQUNGWixRQUFRTSxVQUFVUSxHQUFHLENBQUMsU0FBQ0M7UUFDckIsSUFBTUMsT0FBT0osS0FBS0ssWUFBWSxDQUFDRjtRQUUvQixPQUFPQztJQUNUO0lBRU4sT0FBT2hCO0FBQ1QifQ==