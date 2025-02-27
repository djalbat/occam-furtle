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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb20vYmxvY2suanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBkb20gZnJvbSBcIi4uL2RvbVwiO1xuaW1wb3J0IEJsb2NrQ29udGV4dCBmcm9tIFwiLi4vY29udGV4dC9ibG9ja1wiO1xuXG5pbXBvcnQgeyBkb21Bc3NpZ25lZCB9IGZyb20gXCIuLi9kb21cIjtcbmltcG9ydCB7IG5vZGVRdWVyeSwgbm9kZXNRdWVyeSB9IGZyb20gXCIuLi91dGlsaXRpZXMvcXVlcnlcIjtcblxuY29uc3Qgc3RlcE5vZGVzUXVlcnkgPSBub2Rlc1F1ZXJ5KFwiL2Jsb2NrL3N0ZXBcIik7XG5cbmV4cG9ydCBkZWZhdWx0IGRvbUFzc2lnbmVkKGNsYXNzIEJsb2NrIHtcbiAgY29uc3RydWN0b3Ioc3RyaW5nLCBzdGVwcykge1xuICAgIHRoaXMuc3RyaW5nID0gc3RyaW5nO1xuICAgIHRoaXMuc3RlcHMgPSBzdGVwcztcbiAgfVxuXG4gIGdldFN0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5zdHJpbmc7XG4gIH1cblxuICBnZXRTdGVwcygpIHtcbiAgICByZXR1cm4gdGhpcy5zdGVwcztcbiAgfVxuXG4gIGV2YWx1YXRlKHZhcmlhYmxlcywgY29udGV4dCkge1xuICAgIGlmIChjb250ZXh0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGNvbnRleHQgPSB2YXJpYWJsZXM7ICAvLy9cblxuICAgICAgdmFyaWFibGVzID0gW107XG4gICAgfVxuXG4gICAgY29uc3QgYmxvY2tDb250ZXh0ID0gQmxvY2tDb250ZXh0LmZyb21WYXJpYWJsZXModmFyaWFibGVzLCBjb250ZXh0KTtcblxuICAgIGNvbnRleHQgPSBibG9ja0NvbnRleHQ7IC8vL1xuXG4gICAgdGhpcy5zdGVwcy5mb3JFYWNoKChzdGVwKSA9PiB7XG4gICAgICBzdGVwLmV2YWx1YXRlKGNvbnRleHQpO1xuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIkJsb2NrXCI7XG5cbiAgc3RhdGljIGZyb21CbG9ja05vZGUoYmxvY2tOb2RlLCBjb250ZXh0KSB7XG4gICAgbGV0IGJsb2NrID0gbnVsbDtcblxuICAgIGlmIChibG9ja05vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IG5vZGUgPSBibG9ja05vZGUsIC8vL1xuICAgICAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgICAgICBzdGVwTm9kZXMgPSBzdGVwTm9kZXNRdWVyeShibG9ja05vZGUpLFxuICAgICAgICAgICAgc3RlcHMgPSBzdGVwc0Zyb21TdGVwTm9kZXMoc3RlcE5vZGVzLCBjb250ZXh0KTtcblxuICAgICAgYmxvY2sgPSBuZXcgQmxvY2soc3RyaW5nLCBzdGVwcyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGJsb2NrO1xuICB9XG59KTtcblxuZnVuY3Rpb24gc3RlcHNGcm9tU3RlcE5vZGVzKHN0ZXBOb2RlcywgY29udGV4dCkge1xuICBjb25zdCB7IFN0ZXAgfSA9IGRvbSxcbiAgICAgICAgc3RlcHMgPSBzdGVwTm9kZXMubWFwKChzdGVwTm9kZSkgPT4ge1xuICAgICAgICAgIGNvbnN0IHN0ZXAgPSBTdGVwLmZyb21TdGVwTm9kZShzdGVwTm9kZSwgY29udGV4dCk7XG5cbiAgICAgICAgICByZXR1cm4gc3RlcDtcbiAgICAgICAgfSk7XG5cbiAgcmV0dXJuIHN0ZXBzO1xufVxuIl0sIm5hbWVzIjpbInN0ZXBOb2Rlc1F1ZXJ5Iiwibm9kZXNRdWVyeSIsImRvbUFzc2lnbmVkIiwiQmxvY2siLCJzdHJpbmciLCJzdGVwcyIsImdldFN0cmluZyIsImdldFN0ZXBzIiwiZXZhbHVhdGUiLCJ2YXJpYWJsZXMiLCJjb250ZXh0IiwidW5kZWZpbmVkIiwiYmxvY2tDb250ZXh0IiwiQmxvY2tDb250ZXh0IiwiZnJvbVZhcmlhYmxlcyIsImZvckVhY2giLCJzdGVwIiwiZnJvbUJsb2NrTm9kZSIsImJsb2NrTm9kZSIsImJsb2NrIiwibm9kZSIsIm5vZGVBc1N0cmluZyIsInN0ZXBOb2RlcyIsInN0ZXBzRnJvbVN0ZXBOb2RlcyIsIm5hbWUiLCJTdGVwIiwiZG9tIiwibWFwIiwic3RlcE5vZGUiLCJmcm9tU3RlcE5vZGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVVBOzs7ZUFBQTs7OzJEQVJnQjs0REFDUztxQkFHYTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFdEMsSUFBTUEsaUJBQWlCQyxJQUFBQSxpQkFBVSxFQUFDO0lBRWxDLFdBQWVDLElBQUFBLGdCQUFXLDBCQUFDO2FBQU1DLE1BQ25CQyxNQUFNLEVBQUVDLEtBQUs7Z0NBRE1GO1FBRTdCLElBQUksQ0FBQ0MsTUFBTSxHQUFHQTtRQUNkLElBQUksQ0FBQ0MsS0FBSyxHQUFHQTs7OztZQUdmQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNGLE1BQU07WUFDcEI7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNGLEtBQUs7WUFDbkI7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUEsU0FBU0MsU0FBUyxFQUFFQyxPQUFPO2dCQUN6QixJQUFJQSxZQUFZQyxXQUFXO29CQUN6QkQsVUFBVUQsV0FBWSxHQUFHO29CQUV6QkEsWUFBWSxFQUFFO2dCQUNoQjtnQkFFQSxJQUFNRyxlQUFlQyxjQUFZLENBQUNDLGFBQWEsQ0FBQ0wsV0FBV0M7Z0JBRTNEQSxVQUFVRSxjQUFjLEdBQUc7Z0JBRTNCLElBQUksQ0FBQ1AsS0FBSyxDQUFDVSxPQUFPLENBQUMsU0FBQ0M7b0JBQ2xCQSxLQUFLUixRQUFRLENBQUNFO2dCQUNoQjtZQUNGOzs7O1lBSU9PLEtBQUFBO21CQUFQLFNBQU9BLGNBQWNDLFNBQVMsRUFBRVIsT0FBTztnQkFDckMsSUFBSVMsUUFBUTtnQkFFWixJQUFJRCxjQUFjLE1BQU07b0JBQ3RCLElBQU1FLE9BQU9GLFdBQ1BkLFNBQVNNLFFBQVFXLFlBQVksQ0FBQ0QsT0FDOUJFLFlBQVl0QixlQUFla0IsWUFDM0JiLFFBQVFrQixtQkFBbUJELFdBQVdaO29CQUU1Q1MsUUFBUSxJQUFJaEIsTUFBTUMsUUFBUUM7Z0JBQzVCO2dCQUVBLE9BQU9jO1lBQ1Q7Ozs7S0FmQSx5QkFBT0ssUUFBTztBQWtCaEIsU0FBU0QsbUJBQW1CRCxTQUFTLEVBQUVaLE9BQU87SUFDNUMsSUFBTSxBQUFFZSxPQUFTQyxZQUFHLENBQVpELE1BQ0ZwQixRQUFRaUIsVUFBVUssR0FBRyxDQUFDLFNBQUNDO1FBQ3JCLElBQU1aLE9BQU9TLEtBQUtJLFlBQVksQ0FBQ0QsVUFBVWxCO1FBRXpDLE9BQU9NO0lBQ1Q7SUFFTixPQUFPWDtBQUNUIn0=