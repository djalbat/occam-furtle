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
        },
        {
            key: "getString",
            value: function getString() {
                debugger;
            }
        }
    ], [
        {
            key: "fromStepNode",
            value: function fromStepNode(stepNode, context) {
                var conditionalBlock = null;
                var conditionalBlockNode = conditionalBlockNodeQuery(stepNode);
                if (conditionalBlockNode !== null) {
                    var Block = _dom.default.Block, Condition = _dom.default.Condition, conditionBlockNode = conditionBlockNodeQuery(conditionalBlockNode), elseBlockNode = elseBlockNodeQuery(conditionalBlockNode), condition = Condition.fromConditionalBlockNode(conditionalBlockNode, context), conditionBlock = Block.fromBlockNode(conditionBlockNode, context), elseBlock = Block.fromBlockNode(elseBlockNode, context);
                    conditionalBlock = new ConditionalBlock(condition, conditionBlock, elseBlock);
                }
                return conditionalBlock;
            }
        }
    ]);
    return ConditionalBlock;
}(), _define_property(_ConditionalBlock, "name", "ConditionalBlock"), _ConditionalBlock));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb20vY29uZGl0aW9uYWxCbG9jay5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IGRvbSBmcm9tIFwiLi4vZG9tXCI7XG5cbmltcG9ydCB7IG5vZGVRdWVyeSB9IGZyb20gXCIuLi91dGlsaXRpZXMvcXVlcnlcIjtcbmltcG9ydCB7IGRvbUFzc2lnbmVkIH0gZnJvbSBcIi4uL2RvbVwiO1xuXG5jb25zdCBlbHNlQmxvY2tOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvY29uZGl0aW9uYWxCbG9jay9ibG9ja1sxXVwiKSxcbiAgICAgIGNvbmRpdGlvbkJsb2NrTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL2NvbmRpdGlvbmFsQmxvY2svYmxvY2tbMF1cIiksXG4gICAgICBjb25kaXRpb25hbEJsb2NrTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3N0ZXAvY29uZGl0aW9uYWxCbG9ja1wiKTtcblxuZXhwb3J0IGRlZmF1bHQgZG9tQXNzaWduZWQoY2xhc3MgQ29uZGl0aW9uYWxCbG9jayB7XG4gIGNvbnN0cnVjdG9yKGNvbmRpdGlvbiwgY29uZGl0aW9uQmxvY2ssIGVsc2VCbG9jaykge1xuICAgIHRoaXMuY29uZGl0aW9uID0gY29uZGl0aW9uO1xuICAgIHRoaXMuY29uZGl0aW9uQmxvY2sgPSBjb25kaXRpb25CbG9jaztcbiAgICB0aGlzLmVsc2VCbG9jayA9IGVsc2VCbG9jaztcbiAgfVxuXG4gIGdldENvbmRpdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5jb25kaXRpb247XG4gIH1cblxuICBnZXRDb25kaXRpb25CbG9jaygpIHtcbiAgICByZXR1cm4gdGhpcy5jb25kaXRpb25CbG9jaztcbiAgfVxuXG4gIGdldEVsc2VCbG9jaygpIHtcbiAgICByZXR1cm4gdGhpcy5lbHNlQmxvY2s7XG4gIH1cblxuICBnZXRTdHJpbmcoKSB7XG4gICAgZGVidWdnZXJcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJDb25kaXRpb25hbEJsb2NrXCI7XG5cbiAgc3RhdGljIGZyb21TdGVwTm9kZShzdGVwTm9kZSwgY29udGV4dCkge1xuICAgIGxldCBjb25kaXRpb25hbEJsb2NrID0gbnVsbDtcblxuICAgIGNvbnN0IGNvbmRpdGlvbmFsQmxvY2tOb2RlID0gY29uZGl0aW9uYWxCbG9ja05vZGVRdWVyeShzdGVwTm9kZSk7XG5cbiAgICBpZiAoY29uZGl0aW9uYWxCbG9ja05vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHsgQmxvY2ssIENvbmRpdGlvbiB9ID0gZG9tLFxuICAgICAgICAgICAgY29uZGl0aW9uQmxvY2tOb2RlID0gY29uZGl0aW9uQmxvY2tOb2RlUXVlcnkoY29uZGl0aW9uYWxCbG9ja05vZGUpLFxuICAgICAgICAgICAgZWxzZUJsb2NrTm9kZSA9IGVsc2VCbG9ja05vZGVRdWVyeShjb25kaXRpb25hbEJsb2NrTm9kZSksXG4gICAgICAgICAgICBjb25kaXRpb24gPSBDb25kaXRpb24uZnJvbUNvbmRpdGlvbmFsQmxvY2tOb2RlKGNvbmRpdGlvbmFsQmxvY2tOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgICAgIGNvbmRpdGlvbkJsb2NrID0gQmxvY2suZnJvbUJsb2NrTm9kZShjb25kaXRpb25CbG9ja05vZGUsIGNvbnRleHQpLFxuICAgICAgICAgICAgZWxzZUJsb2NrID0gQmxvY2suZnJvbUJsb2NrTm9kZShlbHNlQmxvY2tOb2RlLCBjb250ZXh0KTtcblxuICAgICAgY29uZGl0aW9uYWxCbG9jayA9IG5ldyBDb25kaXRpb25hbEJsb2NrKGNvbmRpdGlvbiwgY29uZGl0aW9uQmxvY2ssIGVsc2VCbG9jayk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbmRpdGlvbmFsQmxvY2s7XG4gIH1cbn0pO1xuIl0sIm5hbWVzIjpbImVsc2VCbG9ja05vZGVRdWVyeSIsIm5vZGVRdWVyeSIsImNvbmRpdGlvbkJsb2NrTm9kZVF1ZXJ5IiwiY29uZGl0aW9uYWxCbG9ja05vZGVRdWVyeSIsImRvbUFzc2lnbmVkIiwiQ29uZGl0aW9uYWxCbG9jayIsImNvbmRpdGlvbiIsImNvbmRpdGlvbkJsb2NrIiwiZWxzZUJsb2NrIiwiZ2V0Q29uZGl0aW9uIiwiZ2V0Q29uZGl0aW9uQmxvY2siLCJnZXRFbHNlQmxvY2siLCJnZXRTdHJpbmciLCJmcm9tU3RlcE5vZGUiLCJzdGVwTm9kZSIsImNvbnRleHQiLCJjb25kaXRpb25hbEJsb2NrIiwiY29uZGl0aW9uYWxCbG9ja05vZGUiLCJCbG9jayIsImRvbSIsIkNvbmRpdGlvbiIsImNvbmRpdGlvbkJsb2NrTm9kZSIsImVsc2VCbG9ja05vZGUiLCJmcm9tQ29uZGl0aW9uYWxCbG9ja05vZGUiLCJmcm9tQmxvY2tOb2RlIiwibmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBV0E7OztlQUFBOzs7MkRBVGdCO3FCQUVVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHMUIsSUFBTUEscUJBQXFCQyxJQUFBQSxnQkFBUyxFQUFDLCtCQUMvQkMsMEJBQTBCRCxJQUFBQSxnQkFBUyxFQUFDLCtCQUNwQ0UsNEJBQTRCRixJQUFBQSxnQkFBUyxFQUFDO0lBRTVDLFdBQWVHLElBQUFBLGdCQUFXLHFDQUFDO2FBQU1DLGlCQUNuQkMsU0FBUyxFQUFFQyxjQUFjLEVBQUVDLFNBQVM7Z0NBRGpCSDtRQUU3QixJQUFJLENBQUNDLFNBQVMsR0FBR0E7UUFDakIsSUFBSSxDQUFDQyxjQUFjLEdBQUdBO1FBQ3RCLElBQUksQ0FBQ0MsU0FBUyxHQUFHQTs7OztZQUduQkMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSCxTQUFTO1lBQ3ZCOzs7WUFFQUksS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSCxjQUFjO1lBQzVCOzs7WUFFQUksS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSCxTQUFTO1lBQ3ZCOzs7WUFFQUksS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLFFBQVE7WUFDVjs7OztZQUlPQyxLQUFBQTttQkFBUCxTQUFPQSxhQUFhQyxRQUFRLEVBQUVDLE9BQU87Z0JBQ25DLElBQUlDLG1CQUFtQjtnQkFFdkIsSUFBTUMsdUJBQXVCZCwwQkFBMEJXO2dCQUV2RCxJQUFJRyx5QkFBeUIsTUFBTTtvQkFDakMsSUFBUUMsUUFBcUJDLFlBQUcsQ0FBeEJELE9BQU9FLFlBQWNELFlBQUcsQ0FBakJDLFdBQ1RDLHFCQUFxQm5CLHdCQUF3QmUsdUJBQzdDSyxnQkFBZ0J0QixtQkFBbUJpQix1QkFDbkNYLFlBQVljLFVBQVVHLHdCQUF3QixDQUFDTixzQkFBc0JGLFVBQ3JFUixpQkFBaUJXLE1BQU1NLGFBQWEsQ0FBQ0gsb0JBQW9CTixVQUN6RFAsWUFBWVUsTUFBTU0sYUFBYSxDQUFDRixlQUFlUDtvQkFFckRDLG1CQUFtQixJQUFJWCxpQkFBaUJDLFdBQVdDLGdCQUFnQkM7Z0JBQ3JFO2dCQUVBLE9BQU9RO1lBQ1Q7Ozs7S0FuQkEsb0NBQU9TLFFBQU8ifQ==