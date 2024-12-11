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
var _ConditionalBlock;
var elseBlockNodeQuery = (0, _query.nodeQuery)("/conditionalBlock/block[1]"), conditionBlockNodeQuery = (0, _query.nodeQuery)("/conditionalBlock/block[0]"), conditionalBlockNodeQuery = (0, _query.nodeQuery)("/step/conditionalBlock");
var _default = (0, _dom.domAssigned)((_ConditionalBlock = /*#__PURE__*/ function() {
    function ConditionalBlock(string, condition, conditionBlock, elseBlock) {
        _class_call_check(this, ConditionalBlock);
        this.string = string;
        this.condition = condition;
        this.conditionBlock = conditionBlock;
        this.elseBlock = elseBlock;
    }
    _create_class(ConditionalBlock, [
        {
            key: "getString",
            value: function getString() {
                return this.string;
            }
        },
        {
            key: "getCondition",
            value: function getCondition() {
                return this.condition;
            }
        },
        {
            key: "getConditionBlock",
            value: function getConditionBlock() {
                return this.conditionBlock;
            }
        },
        {
            key: "getElseBlock",
            value: function getElseBlock() {
                return this.elseBlock;
            }
        }
    ], [
        {
            key: "fromStepNode",
            value: function fromStepNode(stepNode, context) {
                var conditionalBlock = null;
                var conditionalBlockNode = conditionalBlockNodeQuery(stepNode);
                if (conditionalBlockNode !== null) {
                    var Block = _dom.default.Block, Condition = _dom.default.Condition, node = conditionalBlockNode, string = context.nodeAsString(node), conditionBlockNode = conditionBlockNodeQuery(conditionalBlockNode), elseBlockNode = elseBlockNodeQuery(conditionalBlockNode), condition = Condition.fromConditionalBlockNode(conditionalBlockNode, context), conditionBlock = Block.fromBlockNode(conditionBlockNode, context), elseBlock = Block.fromBlockNode(elseBlockNode, context);
                    conditionalBlock = new ConditionalBlock(string, condition, conditionBlock, elseBlock);
                }
                return conditionalBlock;
            }
        }
    ]);
    return ConditionalBlock;
}(), _define_property(_ConditionalBlock, "name", "ConditionalBlock"), _ConditionalBlock));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb20vY29uZGl0aW9uYWxCbG9jay5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IGRvbSBmcm9tIFwiLi4vZG9tXCI7XG5cbmltcG9ydCB7IG5vZGVRdWVyeSB9IGZyb20gXCIuLi91dGlsaXRpZXMvcXVlcnlcIjtcbmltcG9ydCB7IGRvbUFzc2lnbmVkIH0gZnJvbSBcIi4uL2RvbVwiO1xuXG5jb25zdCBlbHNlQmxvY2tOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvY29uZGl0aW9uYWxCbG9jay9ibG9ja1sxXVwiKSxcbiAgICAgIGNvbmRpdGlvbkJsb2NrTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL2NvbmRpdGlvbmFsQmxvY2svYmxvY2tbMF1cIiksXG4gICAgICBjb25kaXRpb25hbEJsb2NrTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3N0ZXAvY29uZGl0aW9uYWxCbG9ja1wiKTtcblxuZXhwb3J0IGRlZmF1bHQgZG9tQXNzaWduZWQoY2xhc3MgQ29uZGl0aW9uYWxCbG9jayB7XG4gIGNvbnN0cnVjdG9yKHN0cmluZywgY29uZGl0aW9uLCBjb25kaXRpb25CbG9jaywgZWxzZUJsb2NrKSB7XG4gICAgdGhpcy5zdHJpbmcgPSBzdHJpbmc7XG4gICAgdGhpcy5jb25kaXRpb24gPSBjb25kaXRpb247XG4gICAgdGhpcy5jb25kaXRpb25CbG9jayA9IGNvbmRpdGlvbkJsb2NrO1xuICAgIHRoaXMuZWxzZUJsb2NrID0gZWxzZUJsb2NrO1xuICB9XG5cbiAgZ2V0U3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLnN0cmluZztcbiAgfVxuXG4gIGdldENvbmRpdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5jb25kaXRpb247XG4gIH1cblxuICBnZXRDb25kaXRpb25CbG9jaygpIHtcbiAgICByZXR1cm4gdGhpcy5jb25kaXRpb25CbG9jaztcbiAgfVxuXG4gIGdldEVsc2VCbG9jaygpIHtcbiAgICByZXR1cm4gdGhpcy5lbHNlQmxvY2s7XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiQ29uZGl0aW9uYWxCbG9ja1wiO1xuXG4gIHN0YXRpYyBmcm9tU3RlcE5vZGUoc3RlcE5vZGUsIGNvbnRleHQpIHtcbiAgICBsZXQgY29uZGl0aW9uYWxCbG9jayA9IG51bGw7XG5cbiAgICBjb25zdCBjb25kaXRpb25hbEJsb2NrTm9kZSA9IGNvbmRpdGlvbmFsQmxvY2tOb2RlUXVlcnkoc3RlcE5vZGUpO1xuXG4gICAgaWYgKGNvbmRpdGlvbmFsQmxvY2tOb2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCB7IEJsb2NrLCBDb25kaXRpb24gfSA9IGRvbSxcbiAgICAgICAgICAgIG5vZGUgPSBjb25kaXRpb25hbEJsb2NrTm9kZSwgIC8vL1xuICAgICAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgICAgICBjb25kaXRpb25CbG9ja05vZGUgPSBjb25kaXRpb25CbG9ja05vZGVRdWVyeShjb25kaXRpb25hbEJsb2NrTm9kZSksXG4gICAgICAgICAgICBlbHNlQmxvY2tOb2RlID0gZWxzZUJsb2NrTm9kZVF1ZXJ5KGNvbmRpdGlvbmFsQmxvY2tOb2RlKSxcbiAgICAgICAgICAgIGNvbmRpdGlvbiA9IENvbmRpdGlvbi5mcm9tQ29uZGl0aW9uYWxCbG9ja05vZGUoY29uZGl0aW9uYWxCbG9ja05vZGUsIGNvbnRleHQpLFxuICAgICAgICAgICAgY29uZGl0aW9uQmxvY2sgPSBCbG9jay5mcm9tQmxvY2tOb2RlKGNvbmRpdGlvbkJsb2NrTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgICBlbHNlQmxvY2sgPSBCbG9jay5mcm9tQmxvY2tOb2RlKGVsc2VCbG9ja05vZGUsIGNvbnRleHQpO1xuXG4gICAgICBjb25kaXRpb25hbEJsb2NrID0gbmV3IENvbmRpdGlvbmFsQmxvY2soc3RyaW5nLCBjb25kaXRpb24sIGNvbmRpdGlvbkJsb2NrLCBlbHNlQmxvY2spO1xuICAgIH1cblxuICAgIHJldHVybiBjb25kaXRpb25hbEJsb2NrO1xuICB9XG59KTtcbiJdLCJuYW1lcyI6WyJlbHNlQmxvY2tOb2RlUXVlcnkiLCJub2RlUXVlcnkiLCJjb25kaXRpb25CbG9ja05vZGVRdWVyeSIsImNvbmRpdGlvbmFsQmxvY2tOb2RlUXVlcnkiLCJkb21Bc3NpZ25lZCIsIkNvbmRpdGlvbmFsQmxvY2siLCJzdHJpbmciLCJjb25kaXRpb24iLCJjb25kaXRpb25CbG9jayIsImVsc2VCbG9jayIsImdldFN0cmluZyIsImdldENvbmRpdGlvbiIsImdldENvbmRpdGlvbkJsb2NrIiwiZ2V0RWxzZUJsb2NrIiwiZnJvbVN0ZXBOb2RlIiwic3RlcE5vZGUiLCJjb250ZXh0IiwiY29uZGl0aW9uYWxCbG9jayIsImNvbmRpdGlvbmFsQmxvY2tOb2RlIiwiQmxvY2siLCJkb20iLCJDb25kaXRpb24iLCJub2RlIiwibm9kZUFzU3RyaW5nIiwiY29uZGl0aW9uQmxvY2tOb2RlIiwiZWxzZUJsb2NrTm9kZSIsImZyb21Db25kaXRpb25hbEJsb2NrTm9kZSIsImZyb21CbG9ja05vZGUiLCJuYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFXQTs7O2VBQUE7OzsyREFUZ0I7cUJBRVU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUcxQixJQUFNQSxxQkFBcUJDLElBQUFBLGdCQUFTLEVBQUMsK0JBQy9CQywwQkFBMEJELElBQUFBLGdCQUFTLEVBQUMsK0JBQ3BDRSw0QkFBNEJGLElBQUFBLGdCQUFTLEVBQUM7SUFFNUMsV0FBZUcsSUFBQUEsZ0JBQVcscUNBQUM7YUFBTUMsaUJBQ25CQyxNQUFNLEVBQUVDLFNBQVMsRUFBRUMsY0FBYyxFQUFFQyxTQUFTO2dDQUR6Qko7UUFFN0IsSUFBSSxDQUFDQyxNQUFNLEdBQUdBO1FBQ2QsSUFBSSxDQUFDQyxTQUFTLEdBQUdBO1FBQ2pCLElBQUksQ0FBQ0MsY0FBYyxHQUFHQTtRQUN0QixJQUFJLENBQUNDLFNBQVMsR0FBR0E7Ozs7WUFHbkJDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0osTUFBTTtZQUNwQjs7O1lBRUFLLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0osU0FBUztZQUN2Qjs7O1lBRUFLLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0osY0FBYztZQUM1Qjs7O1lBRUFLLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0osU0FBUztZQUN2Qjs7OztZQUlPSyxLQUFBQTttQkFBUCxTQUFPQSxhQUFhQyxRQUFRLEVBQUVDLE9BQU87Z0JBQ25DLElBQUlDLG1CQUFtQjtnQkFFdkIsSUFBTUMsdUJBQXVCZiwwQkFBMEJZO2dCQUV2RCxJQUFJRyx5QkFBeUIsTUFBTTtvQkFDakMsSUFBUUMsUUFBcUJDLFlBQUcsQ0FBeEJELE9BQU9FLFlBQWNELFlBQUcsQ0FBakJDLFdBQ1RDLE9BQU9KLHNCQUNQWixTQUFTVSxRQUFRTyxZQUFZLENBQUNELE9BQzlCRSxxQkFBcUJ0Qix3QkFBd0JnQix1QkFDN0NPLGdCQUFnQnpCLG1CQUFtQmtCLHVCQUNuQ1gsWUFBWWMsVUFBVUssd0JBQXdCLENBQUNSLHNCQUFzQkYsVUFDckVSLGlCQUFpQlcsTUFBTVEsYUFBYSxDQUFDSCxvQkFBb0JSLFVBQ3pEUCxZQUFZVSxNQUFNUSxhQUFhLENBQUNGLGVBQWVUO29CQUVyREMsbUJBQW1CLElBQUlaLGlCQUFpQkMsUUFBUUMsV0FBV0MsZ0JBQWdCQztnQkFDN0U7Z0JBRUEsT0FBT1E7WUFDVDs7OztLQXJCQSxvQ0FBT1csUUFBTyJ9