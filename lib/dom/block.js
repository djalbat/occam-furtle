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
            value: function fromBlockNode(blockNode, context) {
                var block = null;
                if (blockNode !== null) {
                    var stepNodes = stepNodesQuery(blockNode), steps = stepsFromStepNodes(stepNodes, context);
                    block = new Block(steps);
                }
                return block;
            }
        },
        {
            key: "fromForEachLoopNode",
            value: function fromForEachLoopNode(forEachLoopNode, context) {
                var forEachLoopBockNode = forEachLoopBlockNodeQuery(forEachLoopNode), blockNode = forEachLoopBockNode, stepNodes = stepNodesQuery(blockNode), steps = stepsFromStepNodes(stepNodes, context), block = new Block(steps);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb20vYmxvY2suanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBkb20gZnJvbSBcIi4uL2RvbVwiO1xuXG5pbXBvcnQgeyBkb21Bc3NpZ25lZCB9IGZyb20gXCIuLi9kb21cIjtcbmltcG9ydCB7IG5vZGVRdWVyeSwgbm9kZXNRdWVyeSB9IGZyb20gXCIuLi91dGlsaXRpZXMvcXVlcnlcIjtcblxuY29uc3Qgc3RlcE5vZGVzUXVlcnkgPSBub2Rlc1F1ZXJ5KFwiL2Jsb2NrL3N0ZXBcIiksXG4gICAgICBmb3JFYWNoTG9vcEJsb2NrTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL2ZvckVhY2hMb29wL2Fub255bW91c1Byb2NlZHVyZS9ibG9ja1wiKTtcblxuZXhwb3J0IGRlZmF1bHQgZG9tQXNzaWduZWQoY2xhc3MgQmxvY2sge1xuICBjb25zdHJ1Y3RvcihzdGVwcykge1xuICAgIHRoaXMuc3RlcHMgPSBzdGVwcztcbiAgfVxuXG4gIGdldFN0ZXBzKCkge1xuICAgIHJldHVybiB0aGlzLnN0ZXBzO1xuICB9XG5cbiAgZ2V0U3RyaW5nKCkge1xuICAgIGRlYnVnZ2VyXG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiQmxvY2tcIjtcblxuICBzdGF0aWMgZnJvbUJsb2NrTm9kZShibG9ja05vZGUsIGNvbnRleHQpIHtcbiAgICBsZXQgYmxvY2sgPSBudWxsO1xuXG4gICAgaWYgKGJsb2NrTm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3Qgc3RlcE5vZGVzID0gc3RlcE5vZGVzUXVlcnkoYmxvY2tOb2RlKSxcbiAgICAgICAgICAgIHN0ZXBzID0gc3RlcHNGcm9tU3RlcE5vZGVzKHN0ZXBOb2RlcywgY29udGV4dCk7XG5cbiAgICAgIGJsb2NrID0gbmV3IEJsb2NrKHN0ZXBzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gYmxvY2s7XG4gIH1cblxuICBzdGF0aWMgZnJvbUZvckVhY2hMb29wTm9kZShmb3JFYWNoTG9vcE5vZGUsIGNvbnRleHQpIHtcbiAgICBjb25zdCBmb3JFYWNoTG9vcEJvY2tOb2RlID0gZm9yRWFjaExvb3BCbG9ja05vZGVRdWVyeShmb3JFYWNoTG9vcE5vZGUpLFxuICAgICAgICAgIGJsb2NrTm9kZSA9IGZvckVhY2hMb29wQm9ja05vZGUsICAvLy9cbiAgICAgICAgICBzdGVwTm9kZXMgPSBzdGVwTm9kZXNRdWVyeShibG9ja05vZGUpLFxuICAgICAgICAgIHN0ZXBzID0gc3RlcHNGcm9tU3RlcE5vZGVzKHN0ZXBOb2RlcywgY29udGV4dCksXG4gICAgICAgICAgYmxvY2sgPSBuZXcgQmxvY2soc3RlcHMpO1xuXG4gICAgcmV0dXJuIGJsb2NrO1xuICB9XG59KTtcblxuZnVuY3Rpb24gc3RlcHNGcm9tU3RlcE5vZGVzKHN0ZXBOb2RlcywgY29udGV4dCkge1xuICBjb25zdCB7IFN0ZXAgfSA9IGRvbSxcbiAgICAgICAgc3RlcHMgPSBzdGVwTm9kZXMubWFwKChzdGVwTm9kZSkgPT4ge1xuICAgICAgICAgIGNvbnN0IHN0ZXAgPSBTdGVwLmZyb21TdGVwTm9kZShzdGVwTm9kZSwgY29udGV4dCk7XG5cbiAgICAgICAgICByZXR1cm4gc3RlcDtcbiAgICAgICAgfSk7XG5cbiAgcmV0dXJuIHN0ZXBzO1xufVxuIl0sIm5hbWVzIjpbInN0ZXBOb2Rlc1F1ZXJ5Iiwibm9kZXNRdWVyeSIsImZvckVhY2hMb29wQmxvY2tOb2RlUXVlcnkiLCJub2RlUXVlcnkiLCJkb21Bc3NpZ25lZCIsIkJsb2NrIiwic3RlcHMiLCJnZXRTdGVwcyIsImdldFN0cmluZyIsImZyb21CbG9ja05vZGUiLCJibG9ja05vZGUiLCJjb250ZXh0IiwiYmxvY2siLCJzdGVwTm9kZXMiLCJzdGVwc0Zyb21TdGVwTm9kZXMiLCJmcm9tRm9yRWFjaExvb3BOb2RlIiwiZm9yRWFjaExvb3BOb2RlIiwiZm9yRWFjaExvb3BCb2NrTm9kZSIsIm5hbWUiLCJTdGVwIiwiZG9tIiwibWFwIiwic3RlcE5vZGUiLCJzdGVwIiwiZnJvbVN0ZXBOb2RlIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFVQTs7O2VBQUE7OzsyREFSZ0I7cUJBR3NCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFdEMsSUFBTUEsaUJBQWlCQyxJQUFBQSxpQkFBVSxFQUFDLGdCQUM1QkMsNEJBQTRCQyxJQUFBQSxnQkFBUyxFQUFDO0lBRTVDLFdBQWVDLElBQUFBLGdCQUFXLDBCQUFDO2FBQU1DLE1BQ25CQyxLQUFLO2dDQURjRDtRQUU3QixJQUFJLENBQUNDLEtBQUssR0FBR0E7Ozs7WUFHZkMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRCxLQUFLO1lBQ25COzs7WUFFQUUsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLFFBQVE7WUFDVjs7OztZQUlPQyxLQUFBQTttQkFBUCxTQUFPQSxjQUFjQyxTQUFTLEVBQUVDLE9BQU87Z0JBQ3JDLElBQUlDLFFBQVE7Z0JBRVosSUFBSUYsY0FBYyxNQUFNO29CQUN0QixJQUFNRyxZQUFZYixlQUFlVSxZQUMzQkosUUFBUVEsbUJBQW1CRCxXQUFXRjtvQkFFNUNDLFFBQVEsSUFBSVAsTUFBTUM7Z0JBQ3BCO2dCQUVBLE9BQU9NO1lBQ1Q7OztZQUVPRyxLQUFBQTttQkFBUCxTQUFPQSxvQkFBb0JDLGVBQWUsRUFBRUwsT0FBTztnQkFDakQsSUFBTU0sc0JBQXNCZiwwQkFBMEJjLGtCQUNoRE4sWUFBWU8scUJBQ1pKLFlBQVliLGVBQWVVLFlBQzNCSixRQUFRUSxtQkFBbUJELFdBQVdGLFVBQ3RDQyxRQUFRLElBQUlQLE1BQU1DO2dCQUV4QixPQUFPTTtZQUNUOzs7O0tBdkJBLHlCQUFPTSxRQUFPO0FBMEJoQixTQUFTSixtQkFBbUJELFNBQVMsRUFBRUYsT0FBTztJQUM1QyxJQUFNLEFBQUVRLE9BQVNDLFlBQUcsQ0FBWkQsTUFDRmIsUUFBUU8sVUFBVVEsR0FBRyxDQUFDLFNBQUNDO1FBQ3JCLElBQU1DLE9BQU9KLEtBQUtLLFlBQVksQ0FBQ0YsVUFBVVg7UUFFekMsT0FBT1k7SUFDVDtJQUVOLE9BQU9qQjtBQUNUIn0=