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
        },
        {
            key: "resolve",
            value: function resolve(context) {
                var conditionalBlockString = this.string;
                context.trace("Resolving the '".concat(conditionalBlockString, "' conditional block..."));
                var value = this.condition.resolve(context), boolean = value.getBoolean();
                if (boolean) {
                    this.conditionBlock.resolve(context);
                } else {
                    if (this.elseBlock !== null) {
                        this.elseBlock.resolve(context);
                    }
                }
                context.debug("...resolved the '".concat(conditionalBlockString, "' conditional block."));
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb20vY29uZGl0aW9uYWxCbG9jay5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IGRvbSBmcm9tIFwiLi4vZG9tXCI7XG5cbmltcG9ydCB7IG5vZGVRdWVyeSB9IGZyb20gXCIuLi91dGlsaXRpZXMvcXVlcnlcIjtcbmltcG9ydCB7IGRvbUFzc2lnbmVkIH0gZnJvbSBcIi4uL2RvbVwiO1xuXG5jb25zdCBlbHNlQmxvY2tOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvY29uZGl0aW9uYWxCbG9jay9ibG9ja1sxXVwiKSxcbiAgICAgIGNvbmRpdGlvbkJsb2NrTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL2NvbmRpdGlvbmFsQmxvY2svYmxvY2tbMF1cIiksXG4gICAgICBjb25kaXRpb25hbEJsb2NrTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3N0ZXAvY29uZGl0aW9uYWxCbG9ja1wiKTtcblxuZXhwb3J0IGRlZmF1bHQgZG9tQXNzaWduZWQoY2xhc3MgQ29uZGl0aW9uYWxCbG9jayB7XG4gIGNvbnN0cnVjdG9yKHN0cmluZywgY29uZGl0aW9uLCBjb25kaXRpb25CbG9jaywgZWxzZUJsb2NrKSB7XG4gICAgdGhpcy5zdHJpbmcgPSBzdHJpbmc7XG4gICAgdGhpcy5jb25kaXRpb24gPSBjb25kaXRpb247XG4gICAgdGhpcy5jb25kaXRpb25CbG9jayA9IGNvbmRpdGlvbkJsb2NrO1xuICAgIHRoaXMuZWxzZUJsb2NrID0gZWxzZUJsb2NrO1xuICB9XG5cbiAgZ2V0U3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLnN0cmluZztcbiAgfVxuXG4gIGdldENvbmRpdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5jb25kaXRpb247XG4gIH1cblxuICBnZXRDb25kaXRpb25CbG9jaygpIHtcbiAgICByZXR1cm4gdGhpcy5jb25kaXRpb25CbG9jaztcbiAgfVxuXG4gIGdldEVsc2VCbG9jaygpIHtcbiAgICByZXR1cm4gdGhpcy5lbHNlQmxvY2s7XG4gIH1cblxuICByZXNvbHZlKGNvbnRleHQpIHtcbiAgICBjb25zdCBjb25kaXRpb25hbEJsb2NrU3RyaW5nID0gdGhpcy5zdHJpbmc7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBSZXNvbHZpbmcgdGhlICcke2NvbmRpdGlvbmFsQmxvY2tTdHJpbmd9JyBjb25kaXRpb25hbCBibG9jay4uLmApO1xuXG4gICAgY29uc3QgdmFsdWUgPSB0aGlzLmNvbmRpdGlvbi5yZXNvbHZlKGNvbnRleHQpLFxuICAgICAgICAgIGJvb2xlYW4gPSB2YWx1ZS5nZXRCb29sZWFuKCk7XG5cbiAgICBpZiAoYm9vbGVhbikge1xuICAgICAgdGhpcy5jb25kaXRpb25CbG9jay5yZXNvbHZlKGNvbnRleHQpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAodGhpcy5lbHNlQmxvY2sgIT09IG51bGwpIHtcbiAgICAgICAgdGhpcy5lbHNlQmxvY2sucmVzb2x2ZShjb250ZXh0KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb250ZXh0LmRlYnVnKGAuLi5yZXNvbHZlZCB0aGUgJyR7Y29uZGl0aW9uYWxCbG9ja1N0cmluZ30nIGNvbmRpdGlvbmFsIGJsb2NrLmApO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIkNvbmRpdGlvbmFsQmxvY2tcIjtcblxuICBzdGF0aWMgZnJvbVN0ZXBOb2RlKHN0ZXBOb2RlLCBjb250ZXh0KSB7XG4gICAgbGV0IGNvbmRpdGlvbmFsQmxvY2sgPSBudWxsO1xuXG4gICAgY29uc3QgY29uZGl0aW9uYWxCbG9ja05vZGUgPSBjb25kaXRpb25hbEJsb2NrTm9kZVF1ZXJ5KHN0ZXBOb2RlKTtcblxuICAgIGlmIChjb25kaXRpb25hbEJsb2NrTm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgeyBCbG9jaywgQ29uZGl0aW9uIH0gPSBkb20sXG4gICAgICAgICAgICBub2RlID0gY29uZGl0aW9uYWxCbG9ja05vZGUsICAvLy9cbiAgICAgICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICAgICAgY29uZGl0aW9uQmxvY2tOb2RlID0gY29uZGl0aW9uQmxvY2tOb2RlUXVlcnkoY29uZGl0aW9uYWxCbG9ja05vZGUpLFxuICAgICAgICAgICAgZWxzZUJsb2NrTm9kZSA9IGVsc2VCbG9ja05vZGVRdWVyeShjb25kaXRpb25hbEJsb2NrTm9kZSksXG4gICAgICAgICAgICBjb25kaXRpb24gPSBDb25kaXRpb24uZnJvbUNvbmRpdGlvbmFsQmxvY2tOb2RlKGNvbmRpdGlvbmFsQmxvY2tOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgICAgIGNvbmRpdGlvbkJsb2NrID0gQmxvY2suZnJvbUJsb2NrTm9kZShjb25kaXRpb25CbG9ja05vZGUsIGNvbnRleHQpLFxuICAgICAgICAgICAgZWxzZUJsb2NrID0gQmxvY2suZnJvbUJsb2NrTm9kZShlbHNlQmxvY2tOb2RlLCBjb250ZXh0KTtcblxuICAgICAgY29uZGl0aW9uYWxCbG9jayA9IG5ldyBDb25kaXRpb25hbEJsb2NrKHN0cmluZywgY29uZGl0aW9uLCBjb25kaXRpb25CbG9jaywgZWxzZUJsb2NrKTtcbiAgICB9XG5cbiAgICByZXR1cm4gY29uZGl0aW9uYWxCbG9jaztcbiAgfVxufSk7XG4iXSwibmFtZXMiOlsiZWxzZUJsb2NrTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5IiwiY29uZGl0aW9uQmxvY2tOb2RlUXVlcnkiLCJjb25kaXRpb25hbEJsb2NrTm9kZVF1ZXJ5IiwiZG9tQXNzaWduZWQiLCJDb25kaXRpb25hbEJsb2NrIiwic3RyaW5nIiwiY29uZGl0aW9uIiwiY29uZGl0aW9uQmxvY2siLCJlbHNlQmxvY2siLCJnZXRTdHJpbmciLCJnZXRDb25kaXRpb24iLCJnZXRDb25kaXRpb25CbG9jayIsImdldEVsc2VCbG9jayIsInJlc29sdmUiLCJjb250ZXh0IiwiY29uZGl0aW9uYWxCbG9ja1N0cmluZyIsInRyYWNlIiwidmFsdWUiLCJib29sZWFuIiwiZ2V0Qm9vbGVhbiIsImRlYnVnIiwiZnJvbVN0ZXBOb2RlIiwic3RlcE5vZGUiLCJjb25kaXRpb25hbEJsb2NrIiwiY29uZGl0aW9uYWxCbG9ja05vZGUiLCJCbG9jayIsImRvbSIsIkNvbmRpdGlvbiIsIm5vZGUiLCJub2RlQXNTdHJpbmciLCJjb25kaXRpb25CbG9ja05vZGUiLCJlbHNlQmxvY2tOb2RlIiwiZnJvbUNvbmRpdGlvbmFsQmxvY2tOb2RlIiwiZnJvbUJsb2NrTm9kZSIsIm5hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVdBOzs7ZUFBQTs7OzJEQVRnQjtxQkFFVTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRzFCLElBQU1BLHFCQUFxQkMsSUFBQUEsZ0JBQVMsRUFBQywrQkFDL0JDLDBCQUEwQkQsSUFBQUEsZ0JBQVMsRUFBQywrQkFDcENFLDRCQUE0QkYsSUFBQUEsZ0JBQVMsRUFBQztJQUU1QyxXQUFlRyxJQUFBQSxnQkFBVyxxQ0FBQzthQUFNQyxpQkFDbkJDLE1BQU0sRUFBRUMsU0FBUyxFQUFFQyxjQUFjLEVBQUVDLFNBQVM7Z0NBRHpCSjtRQUU3QixJQUFJLENBQUNDLE1BQU0sR0FBR0E7UUFDZCxJQUFJLENBQUNDLFNBQVMsR0FBR0E7UUFDakIsSUFBSSxDQUFDQyxjQUFjLEdBQUdBO1FBQ3RCLElBQUksQ0FBQ0MsU0FBUyxHQUFHQTs7OztZQUduQkMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSixNQUFNO1lBQ3BCOzs7WUFFQUssS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSixTQUFTO1lBQ3ZCOzs7WUFFQUssS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSixjQUFjO1lBQzVCOzs7WUFFQUssS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSixTQUFTO1lBQ3ZCOzs7WUFFQUssS0FBQUE7bUJBQUFBLFNBQUFBLFFBQVFDLE9BQU87Z0JBQ2IsSUFBTUMseUJBQXlCLElBQUksQ0FBQ1YsTUFBTTtnQkFFMUNTLFFBQVFFLEtBQUssQ0FBQyxBQUFDLGtCQUF3QyxPQUF2QkQsd0JBQXVCO2dCQUV2RCxJQUFNRSxRQUFRLElBQUksQ0FBQ1gsU0FBUyxDQUFDTyxPQUFPLENBQUNDLFVBQy9CSSxVQUFVRCxNQUFNRSxVQUFVO2dCQUVoQyxJQUFJRCxTQUFTO29CQUNYLElBQUksQ0FBQ1gsY0FBYyxDQUFDTSxPQUFPLENBQUNDO2dCQUM5QixPQUFPO29CQUNMLElBQUksSUFBSSxDQUFDTixTQUFTLEtBQUssTUFBTTt3QkFDM0IsSUFBSSxDQUFDQSxTQUFTLENBQUNLLE9BQU8sQ0FBQ0M7b0JBQ3pCO2dCQUNGO2dCQUVBQSxRQUFRTSxLQUFLLENBQUMsQUFBQyxvQkFBMEMsT0FBdkJMLHdCQUF1QjtZQUMzRDs7OztZQUlPTSxLQUFBQTttQkFBUCxTQUFPQSxhQUFhQyxRQUFRLEVBQUVSLE9BQU87Z0JBQ25DLElBQUlTLG1CQUFtQjtnQkFFdkIsSUFBTUMsdUJBQXVCdEIsMEJBQTBCb0I7Z0JBRXZELElBQUlFLHlCQUF5QixNQUFNO29CQUNqQyxJQUFRQyxRQUFxQkMsWUFBRyxDQUF4QkQsT0FBT0UsWUFBY0QsWUFBRyxDQUFqQkMsV0FDVEMsT0FBT0osc0JBQ1BuQixTQUFTUyxRQUFRZSxZQUFZLENBQUNELE9BQzlCRSxxQkFBcUI3Qix3QkFBd0J1Qix1QkFDN0NPLGdCQUFnQmhDLG1CQUFtQnlCLHVCQUNuQ2xCLFlBQVlxQixVQUFVSyx3QkFBd0IsQ0FBQ1Isc0JBQXNCVixVQUNyRVAsaUJBQWlCa0IsTUFBTVEsYUFBYSxDQUFDSCxvQkFBb0JoQixVQUN6RE4sWUFBWWlCLE1BQU1RLGFBQWEsQ0FBQ0YsZUFBZWpCO29CQUVyRFMsbUJBQW1CLElBQUluQixpQkFBaUJDLFFBQVFDLFdBQVdDLGdCQUFnQkM7Z0JBQzdFO2dCQUVBLE9BQU9lO1lBQ1Q7Ozs7S0FyQkEsb0NBQU9XLFFBQU8ifQ==