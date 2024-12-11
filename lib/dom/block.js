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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb20vYmxvY2suanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBkb20gZnJvbSBcIi4uL2RvbVwiO1xuXG5pbXBvcnQgeyBkb21Bc3NpZ25lZCB9IGZyb20gXCIuLi9kb21cIjtcbmltcG9ydCB7IG5vZGVRdWVyeSwgbm9kZXNRdWVyeSB9IGZyb20gXCIuLi91dGlsaXRpZXMvcXVlcnlcIjtcblxuY29uc3Qgc3RlcE5vZGVzUXVlcnkgPSBub2Rlc1F1ZXJ5KFwiL2Jsb2NrL3N0ZXBcIiksXG4gICAgICBmb3JFYWNoTG9vcEJsb2NrTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL2ZvckVhY2hMb29wL2Fub255bW91c1Byb2NlZHVyZS9ibG9ja1wiKTtcblxuZXhwb3J0IGRlZmF1bHQgZG9tQXNzaWduZWQoY2xhc3MgQmxvY2sge1xuICBjb25zdHJ1Y3RvcihzdHJpbmcsIHN0ZXBzKSB7XG4gICAgdGhpcy5zdHJpbmcgPSBzdHJpbmc7XG4gICAgdGhpcy5zdGVwcyA9IHN0ZXBzO1xuICB9XG5cbiAgZ2V0U3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLnN0cmluZztcbiAgfVxuXG4gIGdldFN0ZXBzKCkge1xuICAgIHJldHVybiB0aGlzLnN0ZXBzO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIkJsb2NrXCI7XG5cbiAgc3RhdGljIGZyb21CbG9ja05vZGUoYmxvY2tOb2RlLCBjb250ZXh0KSB7XG4gICAgbGV0IGJsb2NrID0gbnVsbDtcblxuICAgIGlmIChibG9ja05vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IG5vZGUgPSBibG9ja05vZGUsIC8vL1xuICAgICAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgICAgICBzdGVwTm9kZXMgPSBzdGVwTm9kZXNRdWVyeShibG9ja05vZGUpLFxuICAgICAgICAgICAgc3RlcHMgPSBzdGVwc0Zyb21TdGVwTm9kZXMoc3RlcE5vZGVzLCBjb250ZXh0KTtcblxuICAgICAgYmxvY2sgPSBuZXcgQmxvY2soc3RyaW5nLCBzdGVwcyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGJsb2NrO1xuICB9XG5cbiAgc3RhdGljIGZyb21Gb3JFYWNoTG9vcE5vZGUoZm9yRWFjaExvb3BOb2RlLCBjb250ZXh0KSB7XG4gICAgY29uc3QgZm9yRWFjaExvb3BCb2NrTm9kZSA9IGZvckVhY2hMb29wQmxvY2tOb2RlUXVlcnkoZm9yRWFjaExvb3BOb2RlKSxcbiAgICAgICAgICBibG9ja05vZGUgPSBmb3JFYWNoTG9vcEJvY2tOb2RlLCAgLy8vXG4gICAgICAgICAgc3RlcE5vZGVzID0gc3RlcE5vZGVzUXVlcnkoYmxvY2tOb2RlKSxcbiAgICAgICAgICBub2RlID0gYmxvY2tOb2RlLCAvLy9cbiAgICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgICBzdGVwcyA9IHN0ZXBzRnJvbVN0ZXBOb2RlcyhzdGVwTm9kZXMsIGNvbnRleHQpLFxuICAgICAgICAgIGJsb2NrID0gbmV3IEJsb2NrKHN0cmluZywgc3RlcHMpO1xuXG4gICAgcmV0dXJuIGJsb2NrO1xuICB9XG59KTtcblxuZnVuY3Rpb24gc3RlcHNGcm9tU3RlcE5vZGVzKHN0ZXBOb2RlcywgY29udGV4dCkge1xuICBjb25zdCB7IFN0ZXAgfSA9IGRvbSxcbiAgICAgICAgc3RlcHMgPSBzdGVwTm9kZXMubWFwKChzdGVwTm9kZSkgPT4ge1xuICAgICAgICAgIGNvbnN0IHN0ZXAgPSBTdGVwLmZyb21TdGVwTm9kZShzdGVwTm9kZSwgY29udGV4dCk7XG5cbiAgICAgICAgICByZXR1cm4gc3RlcDtcbiAgICAgICAgfSk7XG5cbiAgcmV0dXJuIHN0ZXBzO1xufVxuIl0sIm5hbWVzIjpbInN0ZXBOb2Rlc1F1ZXJ5Iiwibm9kZXNRdWVyeSIsImZvckVhY2hMb29wQmxvY2tOb2RlUXVlcnkiLCJub2RlUXVlcnkiLCJkb21Bc3NpZ25lZCIsIkJsb2NrIiwic3RyaW5nIiwic3RlcHMiLCJnZXRTdHJpbmciLCJnZXRTdGVwcyIsImZyb21CbG9ja05vZGUiLCJibG9ja05vZGUiLCJjb250ZXh0IiwiYmxvY2siLCJub2RlIiwibm9kZUFzU3RyaW5nIiwic3RlcE5vZGVzIiwic3RlcHNGcm9tU3RlcE5vZGVzIiwiZnJvbUZvckVhY2hMb29wTm9kZSIsImZvckVhY2hMb29wTm9kZSIsImZvckVhY2hMb29wQm9ja05vZGUiLCJuYW1lIiwiU3RlcCIsImRvbSIsIm1hcCIsInN0ZXBOb2RlIiwic3RlcCIsImZyb21TdGVwTm9kZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBVUE7OztlQUFBOzs7MkRBUmdCO3FCQUdzQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXRDLElBQU1BLGlCQUFpQkMsSUFBQUEsaUJBQVUsRUFBQyxnQkFDNUJDLDRCQUE0QkMsSUFBQUEsZ0JBQVMsRUFBQztJQUU1QyxXQUFlQyxJQUFBQSxnQkFBVywwQkFBQzthQUFNQyxNQUNuQkMsTUFBTSxFQUFFQyxLQUFLO2dDQURNRjtRQUU3QixJQUFJLENBQUNDLE1BQU0sR0FBR0E7UUFDZCxJQUFJLENBQUNDLEtBQUssR0FBR0E7Ozs7WUFHZkMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRixNQUFNO1lBQ3BCOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRixLQUFLO1lBQ25COzs7O1lBSU9HLEtBQUFBO21CQUFQLFNBQU9BLGNBQWNDLFNBQVMsRUFBRUMsT0FBTztnQkFDckMsSUFBSUMsUUFBUTtnQkFFWixJQUFJRixjQUFjLE1BQU07b0JBQ3RCLElBQU1HLE9BQU9ILFdBQ1BMLFNBQVNNLFFBQVFHLFlBQVksQ0FBQ0QsT0FDOUJFLFlBQVloQixlQUFlVyxZQUMzQkosUUFBUVUsbUJBQW1CRCxXQUFXSjtvQkFFNUNDLFFBQVEsSUFBSVIsTUFBTUMsUUFBUUM7Z0JBQzVCO2dCQUVBLE9BQU9NO1lBQ1Q7OztZQUVPSyxLQUFBQTttQkFBUCxTQUFPQSxvQkFBb0JDLGVBQWUsRUFBRVAsT0FBTztnQkFDakQsSUFBTVEsc0JBQXNCbEIsMEJBQTBCaUIsa0JBQ2hEUixZQUFZUyxxQkFDWkosWUFBWWhCLGVBQWVXLFlBQzNCRyxPQUFPSCxXQUNQTCxTQUFTTSxRQUFRRyxZQUFZLENBQUNELE9BQzlCUCxRQUFRVSxtQkFBbUJELFdBQVdKLFVBQ3RDQyxRQUFRLElBQUlSLE1BQU1DLFFBQVFDO2dCQUVoQyxPQUFPTTtZQUNUOzs7O0tBM0JBLHlCQUFPUSxRQUFPO0FBOEJoQixTQUFTSixtQkFBbUJELFNBQVMsRUFBRUosT0FBTztJQUM1QyxJQUFNLEFBQUVVLE9BQVNDLFlBQUcsQ0FBWkQsTUFDRmYsUUFBUVMsVUFBVVEsR0FBRyxDQUFDLFNBQUNDO1FBQ3JCLElBQU1DLE9BQU9KLEtBQUtLLFlBQVksQ0FBQ0YsVUFBVWI7UUFFekMsT0FBT2M7SUFDVDtJQUVOLE9BQU9uQjtBQUNUIn0=