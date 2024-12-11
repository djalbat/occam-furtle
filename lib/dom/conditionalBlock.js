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
    function ConditionalBlock(condition, conditionBlock, elseBlock) {
        _class_call_check(this, ConditionalBlock);
        this.condition = condition;
        this.conditionBlock = conditionBlock;
        this.elseBlock = elseBlock;
    }
    _create_class(ConditionalBlock, [
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
            value: function fromStepNode(stepNode) {
                var conditionalBlock = null;
                var conditionalBlockNode = conditionalBlockNodeQuery(stepNode);
                if (conditionalBlockNode !== null) {
                    var Block = _dom.default.Block, Condition = _dom.default.Condition, conditionBlockNode = conditionBlockNodeQuery(conditionalBlockNode), elseBlockNode = elseBlockNodeQuery(conditionalBlockNode), condition = Condition.fromConditionalBlockNode(conditionalBlockNode), conditionBlock = Block.fromBlockNode(conditionBlockNode), elseBlock = Block.fromBlockNode(elseBlockNode);
                    conditionalBlock = new ConditionalBlock(condition, conditionBlock, elseBlock);
                }
                return conditionalBlock;
            }
        }
    ]);
    return ConditionalBlock;
}(), _define_property(_ConditionalBlock, "name", "ConditionalBlock"), _ConditionalBlock));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb20vY29uZGl0aW9uYWxCbG9jay5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IGRvbSBmcm9tIFwiLi4vZG9tXCI7XG5cbmltcG9ydCB7IG5vZGVRdWVyeSB9IGZyb20gXCIuLi91dGlsaXRpZXMvcXVlcnlcIjtcbmltcG9ydCB7IGRvbUFzc2lnbmVkIH0gZnJvbSBcIi4uL2RvbVwiO1xuXG5jb25zdCBlbHNlQmxvY2tOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvY29uZGl0aW9uYWxCbG9jay9ibG9ja1sxXVwiKSxcbiAgICAgIGNvbmRpdGlvbkJsb2NrTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL2NvbmRpdGlvbmFsQmxvY2svYmxvY2tbMF1cIiksXG4gICAgICBjb25kaXRpb25hbEJsb2NrTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3N0ZXAvY29uZGl0aW9uYWxCbG9ja1wiKTtcblxuZXhwb3J0IGRlZmF1bHQgZG9tQXNzaWduZWQoY2xhc3MgQ29uZGl0aW9uYWxCbG9jayB7XG4gIGNvbnN0cnVjdG9yKGNvbmRpdGlvbiwgY29uZGl0aW9uQmxvY2ssIGVsc2VCbG9jaykge1xuICAgIHRoaXMuY29uZGl0aW9uID0gY29uZGl0aW9uO1xuICAgIHRoaXMuY29uZGl0aW9uQmxvY2sgPSBjb25kaXRpb25CbG9jaztcbiAgICB0aGlzLmVsc2VCbG9jayA9IGVsc2VCbG9jaztcbiAgfVxuXG4gIGdldENvbmRpdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5jb25kaXRpb247XG4gIH1cblxuICBnZXRDb25kaXRpb25CbG9jaygpIHtcbiAgICByZXR1cm4gdGhpcy5jb25kaXRpb25CbG9jaztcbiAgfVxuXG4gIGdldEVsc2VCbG9jaygpIHtcbiAgICByZXR1cm4gdGhpcy5lbHNlQmxvY2s7XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiQ29uZGl0aW9uYWxCbG9ja1wiO1xuXG4gIHN0YXRpYyBmcm9tU3RlcE5vZGUoc3RlcE5vZGUpIHtcbiAgICBsZXQgY29uZGl0aW9uYWxCbG9jayA9IG51bGw7XG5cbiAgICBjb25zdCBjb25kaXRpb25hbEJsb2NrTm9kZSA9IGNvbmRpdGlvbmFsQmxvY2tOb2RlUXVlcnkoc3RlcE5vZGUpO1xuXG4gICAgaWYgKGNvbmRpdGlvbmFsQmxvY2tOb2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCB7IEJsb2NrLCBDb25kaXRpb24gfSA9IGRvbSxcbiAgICAgICAgICAgIGNvbmRpdGlvbkJsb2NrTm9kZSA9IGNvbmRpdGlvbkJsb2NrTm9kZVF1ZXJ5KGNvbmRpdGlvbmFsQmxvY2tOb2RlKSxcbiAgICAgICAgICAgIGVsc2VCbG9ja05vZGUgPSBlbHNlQmxvY2tOb2RlUXVlcnkoY29uZGl0aW9uYWxCbG9ja05vZGUpLFxuICAgICAgICAgICAgY29uZGl0aW9uID0gQ29uZGl0aW9uLmZyb21Db25kaXRpb25hbEJsb2NrTm9kZShjb25kaXRpb25hbEJsb2NrTm9kZSksXG4gICAgICAgICAgICBjb25kaXRpb25CbG9jayA9IEJsb2NrLmZyb21CbG9ja05vZGUoY29uZGl0aW9uQmxvY2tOb2RlKSxcbiAgICAgICAgICAgIGVsc2VCbG9jayA9IEJsb2NrLmZyb21CbG9ja05vZGUoZWxzZUJsb2NrTm9kZSk7XG5cbiAgICAgIGNvbmRpdGlvbmFsQmxvY2sgPSBuZXcgQ29uZGl0aW9uYWxCbG9jayhjb25kaXRpb24sIGNvbmRpdGlvbkJsb2NrLCBlbHNlQmxvY2spO1xuICAgIH1cblxuICAgIHJldHVybiBjb25kaXRpb25hbEJsb2NrO1xuICB9XG59KTtcbiJdLCJuYW1lcyI6WyJlbHNlQmxvY2tOb2RlUXVlcnkiLCJub2RlUXVlcnkiLCJjb25kaXRpb25CbG9ja05vZGVRdWVyeSIsImNvbmRpdGlvbmFsQmxvY2tOb2RlUXVlcnkiLCJkb21Bc3NpZ25lZCIsIkNvbmRpdGlvbmFsQmxvY2siLCJjb25kaXRpb24iLCJjb25kaXRpb25CbG9jayIsImVsc2VCbG9jayIsImdldENvbmRpdGlvbiIsImdldENvbmRpdGlvbkJsb2NrIiwiZ2V0RWxzZUJsb2NrIiwiZnJvbVN0ZXBOb2RlIiwic3RlcE5vZGUiLCJjb25kaXRpb25hbEJsb2NrIiwiY29uZGl0aW9uYWxCbG9ja05vZGUiLCJCbG9jayIsImRvbSIsIkNvbmRpdGlvbiIsImNvbmRpdGlvbkJsb2NrTm9kZSIsImVsc2VCbG9ja05vZGUiLCJmcm9tQ29uZGl0aW9uYWxCbG9ja05vZGUiLCJmcm9tQmxvY2tOb2RlIiwibmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBV0E7OztlQUFBOzs7MkRBVGdCO3FCQUVVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHMUIsSUFBTUEscUJBQXFCQyxJQUFBQSxnQkFBUyxFQUFDLCtCQUMvQkMsMEJBQTBCRCxJQUFBQSxnQkFBUyxFQUFDLCtCQUNwQ0UsNEJBQTRCRixJQUFBQSxnQkFBUyxFQUFDO0lBRTVDLFdBQWVHLElBQUFBLGdCQUFXLHFDQUFDO2FBQU1DLGlCQUNuQkMsU0FBUyxFQUFFQyxjQUFjLEVBQUVDLFNBQVM7Z0NBRGpCSDtRQUU3QixJQUFJLENBQUNDLFNBQVMsR0FBR0E7UUFDakIsSUFBSSxDQUFDQyxjQUFjLEdBQUdBO1FBQ3RCLElBQUksQ0FBQ0MsU0FBUyxHQUFHQTs7OztZQUduQkMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSCxTQUFTO1lBQ3ZCOzs7WUFFQUksS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSCxjQUFjO1lBQzVCOzs7WUFFQUksS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSCxTQUFTO1lBQ3ZCOzs7O1lBSU9JLEtBQUFBO21CQUFQLFNBQU9BLGFBQWFDLFFBQVE7Z0JBQzFCLElBQUlDLG1CQUFtQjtnQkFFdkIsSUFBTUMsdUJBQXVCWiwwQkFBMEJVO2dCQUV2RCxJQUFJRSx5QkFBeUIsTUFBTTtvQkFDakMsSUFBUUMsUUFBcUJDLFlBQUcsQ0FBeEJELE9BQU9FLFlBQWNELFlBQUcsQ0FBakJDLFdBQ1RDLHFCQUFxQmpCLHdCQUF3QmEsdUJBQzdDSyxnQkFBZ0JwQixtQkFBbUJlLHVCQUNuQ1QsWUFBWVksVUFBVUcsd0JBQXdCLENBQUNOLHVCQUMvQ1IsaUJBQWlCUyxNQUFNTSxhQUFhLENBQUNILHFCQUNyQ1gsWUFBWVEsTUFBTU0sYUFBYSxDQUFDRjtvQkFFdENOLG1CQUFtQixJQUFJVCxpQkFBaUJDLFdBQVdDLGdCQUFnQkM7Z0JBQ3JFO2dCQUVBLE9BQU9NO1lBQ1Q7Ozs7S0FuQkEsb0NBQU9TLFFBQU8ifQ==