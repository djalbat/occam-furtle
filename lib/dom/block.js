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
var stepNodesQuery = (0, _query.nodesQuery)("/block/step");
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb20vYmxvY2suanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBkb20gZnJvbSBcIi4uL2RvbVwiO1xuaW1wb3J0IEJsb2NrQ29udGV4dCBmcm9tIFwiLi4vY29udGV4dC9ibG9ja1wiO1xuXG5pbXBvcnQgeyBub2Rlc1F1ZXJ5IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9xdWVyeVwiO1xuaW1wb3J0IHsgZG9tQXNzaWduZWQgfSBmcm9tIFwiLi4vZG9tXCI7XG5cbmNvbnN0IHN0ZXBOb2Rlc1F1ZXJ5ID0gbm9kZXNRdWVyeShcIi9ibG9jay9zdGVwXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBkb21Bc3NpZ25lZChjbGFzcyBCbG9jayB7XG4gIGNvbnN0cnVjdG9yKHN0cmluZywgc3RlcHMpIHtcbiAgICB0aGlzLnN0cmluZyA9IHN0cmluZztcbiAgICB0aGlzLnN0ZXBzID0gc3RlcHM7XG4gIH1cblxuICBnZXRTdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RyaW5nO1xuICB9XG5cbiAgZ2V0U3RlcHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RlcHM7XG4gIH1cblxuICBldmFsdWF0ZSh2YXJpYWJsZXMsIGNvbnRleHQpIHtcbiAgICBpZiAoY29udGV4dCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBjb250ZXh0ID0gdmFyaWFibGVzOyAgLy8vXG5cbiAgICAgIHZhcmlhYmxlcyA9IFtdO1xuICAgIH1cblxuICAgIGNvbnN0IGJsb2NrQ29udGV4dCA9IEJsb2NrQ29udGV4dC5mcm9tVmFyaWFibGVzKHZhcmlhYmxlcywgY29udGV4dCk7XG5cbiAgICBjb250ZXh0ID0gYmxvY2tDb250ZXh0OyAvLy9cblxuICAgIHRoaXMuc3RlcHMuZm9yRWFjaCgoc3RlcCkgPT4ge1xuICAgICAgc3RlcC5ldmFsdWF0ZShjb250ZXh0KTtcbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJCbG9ja1wiO1xuXG4gIHN0YXRpYyBmcm9tQmxvY2tOb2RlKGJsb2NrTm9kZSwgY29udGV4dCkge1xuICAgIGxldCBibG9jayA9IG51bGw7XG5cbiAgICBpZiAoYmxvY2tOb2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBub2RlID0gYmxvY2tOb2RlLCAvLy9cbiAgICAgICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICAgICAgc3RlcE5vZGVzID0gc3RlcE5vZGVzUXVlcnkoYmxvY2tOb2RlKSxcbiAgICAgICAgICAgIHN0ZXBzID0gc3RlcHNGcm9tU3RlcE5vZGVzKHN0ZXBOb2RlcywgY29udGV4dCk7XG5cbiAgICAgIGJsb2NrID0gbmV3IEJsb2NrKHN0cmluZywgc3RlcHMpO1xuICAgIH1cblxuICAgIHJldHVybiBibG9jaztcbiAgfVxufSk7XG5cbmZ1bmN0aW9uIHN0ZXBzRnJvbVN0ZXBOb2RlcyhzdGVwTm9kZXMsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBTdGVwIH0gPSBkb20sXG4gICAgICAgIHN0ZXBzID0gc3RlcE5vZGVzLm1hcCgoc3RlcE5vZGUpID0+IHtcbiAgICAgICAgICBjb25zdCBzdGVwID0gU3RlcC5mcm9tU3RlcE5vZGUoc3RlcE5vZGUsIGNvbnRleHQpO1xuXG4gICAgICAgICAgcmV0dXJuIHN0ZXA7XG4gICAgICAgIH0pO1xuXG4gIHJldHVybiBzdGVwcztcbn1cbiJdLCJuYW1lcyI6WyJzdGVwTm9kZXNRdWVyeSIsIm5vZGVzUXVlcnkiLCJkb21Bc3NpZ25lZCIsIkJsb2NrIiwic3RyaW5nIiwic3RlcHMiLCJnZXRTdHJpbmciLCJnZXRTdGVwcyIsImV2YWx1YXRlIiwidmFyaWFibGVzIiwiY29udGV4dCIsInVuZGVmaW5lZCIsImJsb2NrQ29udGV4dCIsIkJsb2NrQ29udGV4dCIsImZyb21WYXJpYWJsZXMiLCJmb3JFYWNoIiwic3RlcCIsImZyb21CbG9ja05vZGUiLCJibG9ja05vZGUiLCJibG9jayIsIm5vZGUiLCJub2RlQXNTdHJpbmciLCJzdGVwTm9kZXMiLCJzdGVwc0Zyb21TdGVwTm9kZXMiLCJuYW1lIiwiU3RlcCIsImRvbSIsIm1hcCIsInN0ZXBOb2RlIiwiZnJvbVN0ZXBOb2RlIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFVQTs7O2VBQUE7OzsyREFSZ0I7NERBQ1M7cUJBRUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRzNCLElBQU1BLGlCQUFpQkMsSUFBQUEsaUJBQVUsRUFBQztJQUVsQyxXQUFlQyxJQUFBQSxnQkFBVywwQkFBQzthQUFNQyxNQUNuQkMsTUFBTSxFQUFFQyxLQUFLO2dDQURNRjtRQUU3QixJQUFJLENBQUNDLE1BQU0sR0FBR0E7UUFDZCxJQUFJLENBQUNDLEtBQUssR0FBR0E7Ozs7WUFHZkMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRixNQUFNO1lBQ3BCOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRixLQUFLO1lBQ25COzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBLFNBQVNDLFNBQVMsRUFBRUMsT0FBTztnQkFDekIsSUFBSUEsWUFBWUMsV0FBVztvQkFDekJELFVBQVVELFdBQVksR0FBRztvQkFFekJBLFlBQVksRUFBRTtnQkFDaEI7Z0JBRUEsSUFBTUcsZUFBZUMsY0FBWSxDQUFDQyxhQUFhLENBQUNMLFdBQVdDO2dCQUUzREEsVUFBVUUsY0FBYyxHQUFHO2dCQUUzQixJQUFJLENBQUNQLEtBQUssQ0FBQ1UsT0FBTyxDQUFDLFNBQUNDO29CQUNsQkEsS0FBS1IsUUFBUSxDQUFDRTtnQkFDaEI7WUFDRjs7OztZQUlPTyxLQUFBQTttQkFBUCxTQUFPQSxjQUFjQyxTQUFTLEVBQUVSLE9BQU87Z0JBQ3JDLElBQUlTLFFBQVE7Z0JBRVosSUFBSUQsY0FBYyxNQUFNO29CQUN0QixJQUFNRSxPQUFPRixXQUNQZCxTQUFTTSxRQUFRVyxZQUFZLENBQUNELE9BQzlCRSxZQUFZdEIsZUFBZWtCLFlBQzNCYixRQUFRa0IsbUJBQW1CRCxXQUFXWjtvQkFFNUNTLFFBQVEsSUFBSWhCLE1BQU1DLFFBQVFDO2dCQUM1QjtnQkFFQSxPQUFPYztZQUNUOzs7O0tBZkEseUJBQU9LLFFBQU87QUFrQmhCLFNBQVNELG1CQUFtQkQsU0FBUyxFQUFFWixPQUFPO0lBQzVDLElBQU0sQUFBRWUsT0FBU0MsWUFBRyxDQUFaRCxNQUNGcEIsUUFBUWlCLFVBQVVLLEdBQUcsQ0FBQyxTQUFDQztRQUNyQixJQUFNWixPQUFPUyxLQUFLSSxZQUFZLENBQUNELFVBQVVsQjtRQUV6QyxPQUFPTTtJQUNUO0lBRU4sT0FBT1g7QUFDVCJ9