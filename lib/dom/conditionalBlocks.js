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
var _exception = /*#__PURE__*/ _interop_require_default(require("../exception"));
var _query = require("../utilities/query");
var _types = require("../types");
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
var _ConditionalBlocks;
var valueNodeQuery = (0, _query.nodeQuery)("/conditionalBlocks/value"), ifBlockNodeQuery = (0, _query.nodeQuery)("/conditionalBlocks/block[0]"), elseBlockNodeQuery = (0, _query.nodeQuery)("/conditionalBlocks/block[1]"), conditionalBlocksNodeQuery = (0, _query.nodeQuery)("/step/conditionalBlocks");
var _default = (0, _dom.domAssigned)((_ConditionalBlocks = /*#__PURE__*/ function() {
    function ConditionalBlocks(string, value, ifBlock, elseBlock) {
        _class_call_check(this, ConditionalBlocks);
        this.string = string;
        this.value = value;
        this.ifBlock = ifBlock;
        this.elseBlock = elseBlock;
    }
    _create_class(ConditionalBlocks, [
        {
            key: "getString",
            value: function getString() {
                return this.string;
            }
        },
        {
            key: "getValue",
            value: function getValue() {
                return this.value;
            }
        },
        {
            key: "getConditionBlock",
            value: function getConditionBlock() {
                return this.ifBlock;
            }
        },
        {
            key: "getElseBlock",
            value: function getElseBlock() {
                return this.elseBlock;
            }
        },
        {
            key: "evaluate",
            value: function evaluate(context) {
                var conditionalBlocksString = this.string; ///
                context.trace("Evaluating the '".concat(conditionalBlocksString, "' conditional blocks..."));
                var value = this.value.evaluate(context), valueType = value.getType();
                if (valueType !== _types.BOOLEAN_TYPE) {
                    var valueString = value.asString(context), message = "The ".concat(valueString, " value's type is '").concat(valueType, "' when it should be of type '").concat(_types.BOOLEAN_TYPE, "'."), exception = _exception.default.fromMessage(message);
                    throw exception;
                }
                var boolean = value.getBoolean();
                if (boolean) {
                    this.ifBlock.evaluate(context);
                } else {
                    if (this.elseBlock !== null) {
                        this.elseBlock.evaluate(context);
                    }
                }
                context.debug("...evaluated the '".concat(conditionalBlocksString, "' conditional blocks."));
            }
        }
    ], [
        {
            key: "fromStepNode",
            value: function fromStepNode(stepNode, context) {
                var conditionalBlocks = null;
                var conditionalBlocksNode = conditionalBlocksNodeQuery(stepNode);
                if (conditionalBlocksNode !== null) {
                    var Block = _dom.default.Block, Value = _dom.default.Value, string = stringFromConditionalBlocksNode(conditionalBlocksNode, context), ifBlockNode = ifBlockNodeQuery(conditionalBlocksNode), elseBlockNode = elseBlockNodeQuery(conditionalBlocksNode), value = Value.fromConditionalBlocksNode(conditionalBlocksNode, context), ifBlock = Block.fromBlockNode(ifBlockNode, context), elseBlock = Block.fromBlockNode(elseBlockNode, context);
                    conditionalBlocks = new ConditionalBlocks(string, value, ifBlock, elseBlock);
                }
                return conditionalBlocks;
            }
        }
    ]);
    return ConditionalBlocks;
}(), _define_property(_ConditionalBlocks, "name", "ConditionalBlocks"), _ConditionalBlocks));
function stringFromConditionalBlocksNode(conditionalBlocksNode, context) {
    var string;
    var valueNode = valueNodeQuery(conditionalBlocksNode), conditionString = context.nodeAsString(valueNode);
    string = "If (".concat(conditionString, ") { ... }");
    var elseBlockNode = elseBlockNodeQuery(conditionalBlocksNode);
    if (elseBlockNode !== null) {
        string = "".concat(string, " Else { ... }");
    }
    return string;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb20vY29uZGl0aW9uYWxCbG9ja3MuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBkb20gZnJvbSBcIi4uL2RvbVwiO1xuaW1wb3J0IEV4Y2VwdGlvbiBmcm9tIFwiLi4vZXhjZXB0aW9uXCI7XG5cbmltcG9ydCB7IG5vZGVRdWVyeSB9IGZyb20gXCIuLi91dGlsaXRpZXMvcXVlcnlcIjtcbmltcG9ydCB7IGRvbUFzc2lnbmVkIH0gZnJvbSBcIi4uL2RvbVwiO1xuaW1wb3J0IHsgQk9PTEVBTl9UWVBFIH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5cbmNvbnN0IHZhbHVlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL2NvbmRpdGlvbmFsQmxvY2tzL3ZhbHVlXCIpLFxuICAgICAgaWZCbG9ja05vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9jb25kaXRpb25hbEJsb2Nrcy9ibG9ja1swXVwiKSxcbiAgICAgIGVsc2VCbG9ja05vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9jb25kaXRpb25hbEJsb2Nrcy9ibG9ja1sxXVwiKSxcbiAgICAgIGNvbmRpdGlvbmFsQmxvY2tzTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3N0ZXAvY29uZGl0aW9uYWxCbG9ja3NcIik7XG5cbmV4cG9ydCBkZWZhdWx0IGRvbUFzc2lnbmVkKGNsYXNzIENvbmRpdGlvbmFsQmxvY2tzIHtcbiAgY29uc3RydWN0b3Ioc3RyaW5nLCB2YWx1ZSwgaWZCbG9jaywgZWxzZUJsb2NrKSB7XG4gICAgdGhpcy5zdHJpbmcgPSBzdHJpbmc7XG4gICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgIHRoaXMuaWZCbG9jayA9IGlmQmxvY2s7XG4gICAgdGhpcy5lbHNlQmxvY2sgPSBlbHNlQmxvY2s7XG4gIH1cblxuICBnZXRTdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RyaW5nO1xuICB9XG5cbiAgZ2V0VmFsdWUoKSB7XG4gICAgcmV0dXJuIHRoaXMudmFsdWU7XG4gIH1cblxuICBnZXRDb25kaXRpb25CbG9jaygpIHtcbiAgICByZXR1cm4gdGhpcy5pZkJsb2NrO1xuICB9XG5cbiAgZ2V0RWxzZUJsb2NrKCkge1xuICAgIHJldHVybiB0aGlzLmVsc2VCbG9jaztcbiAgfVxuXG4gIGV2YWx1YXRlKGNvbnRleHQpIHtcbiAgICBjb25zdCBjb25kaXRpb25hbEJsb2Nrc1N0cmluZyA9IHRoaXMuc3RyaW5nOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYEV2YWx1YXRpbmcgdGhlICcke2NvbmRpdGlvbmFsQmxvY2tzU3RyaW5nfScgY29uZGl0aW9uYWwgYmxvY2tzLi4uYCk7XG5cbiAgICBjb25zdCB2YWx1ZSA9IHRoaXMudmFsdWUuZXZhbHVhdGUoY29udGV4dCksXG4gICAgICAgICAgdmFsdWVUeXBlID0gdmFsdWUuZ2V0VHlwZSgpO1xuXG4gICAgaWYgKHZhbHVlVHlwZSAhPT0gQk9PTEVBTl9UWVBFKSB7XG4gICAgICBjb25zdCB2YWx1ZVN0cmluZyA9IHZhbHVlLmFzU3RyaW5nKGNvbnRleHQpLFxuICAgICAgICAgICAgbWVzc2FnZSA9IGBUaGUgJHt2YWx1ZVN0cmluZ30gdmFsdWUncyB0eXBlIGlzICcke3ZhbHVlVHlwZX0nIHdoZW4gaXQgc2hvdWxkIGJlIG9mIHR5cGUgJyR7Qk9PTEVBTl9UWVBFfScuYCxcbiAgICAgICAgICAgIGV4Y2VwdGlvbiA9IEV4Y2VwdGlvbi5mcm9tTWVzc2FnZShtZXNzYWdlKTtcblxuICAgICAgdGhyb3cgZXhjZXB0aW9uO1xuICAgIH1cblxuICAgIGNvbnN0IGJvb2xlYW4gPSB2YWx1ZS5nZXRCb29sZWFuKCk7XG5cbiAgICBpZiAoYm9vbGVhbikge1xuICAgICAgdGhpcy5pZkJsb2NrLmV2YWx1YXRlKGNvbnRleHQpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAodGhpcy5lbHNlQmxvY2sgIT09IG51bGwpIHtcbiAgICAgICAgdGhpcy5lbHNlQmxvY2suZXZhbHVhdGUoY29udGV4dCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29udGV4dC5kZWJ1ZyhgLi4uZXZhbHVhdGVkIHRoZSAnJHtjb25kaXRpb25hbEJsb2Nrc1N0cmluZ30nIGNvbmRpdGlvbmFsIGJsb2Nrcy5gKTtcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJDb25kaXRpb25hbEJsb2Nrc1wiO1xuXG4gIHN0YXRpYyBmcm9tU3RlcE5vZGUoc3RlcE5vZGUsIGNvbnRleHQpIHtcbiAgICBsZXQgY29uZGl0aW9uYWxCbG9ja3MgPSBudWxsO1xuXG4gICAgY29uc3QgY29uZGl0aW9uYWxCbG9ja3NOb2RlID0gY29uZGl0aW9uYWxCbG9ja3NOb2RlUXVlcnkoc3RlcE5vZGUpO1xuXG4gICAgaWYgKGNvbmRpdGlvbmFsQmxvY2tzTm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgeyBCbG9jaywgVmFsdWUgfSA9IGRvbSxcbiAgICAgICAgICAgIHN0cmluZyA9IHN0cmluZ0Zyb21Db25kaXRpb25hbEJsb2Nrc05vZGUoY29uZGl0aW9uYWxCbG9ja3NOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgICAgIGlmQmxvY2tOb2RlID0gaWZCbG9ja05vZGVRdWVyeShjb25kaXRpb25hbEJsb2Nrc05vZGUpLFxuICAgICAgICAgICAgZWxzZUJsb2NrTm9kZSA9IGVsc2VCbG9ja05vZGVRdWVyeShjb25kaXRpb25hbEJsb2Nrc05vZGUpLFxuICAgICAgICAgICAgdmFsdWUgPSBWYWx1ZS5mcm9tQ29uZGl0aW9uYWxCbG9ja3NOb2RlKGNvbmRpdGlvbmFsQmxvY2tzTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgICBpZkJsb2NrID0gQmxvY2suZnJvbUJsb2NrTm9kZShpZkJsb2NrTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgICBlbHNlQmxvY2sgPSBCbG9jay5mcm9tQmxvY2tOb2RlKGVsc2VCbG9ja05vZGUsIGNvbnRleHQpO1xuXG4gICAgICBjb25kaXRpb25hbEJsb2NrcyA9IG5ldyBDb25kaXRpb25hbEJsb2NrcyhzdHJpbmcsIHZhbHVlLCBpZkJsb2NrLCBlbHNlQmxvY2spO1xuICAgIH1cblxuICAgIHJldHVybiBjb25kaXRpb25hbEJsb2NrcztcbiAgfVxufSk7XG5cbmZ1bmN0aW9uIHN0cmluZ0Zyb21Db25kaXRpb25hbEJsb2Nrc05vZGUoY29uZGl0aW9uYWxCbG9ja3NOb2RlLCBjb250ZXh0KSB7XG4gIGxldCBzdHJpbmc7XG5cbiAgY29uc3QgdmFsdWVOb2RlID0gdmFsdWVOb2RlUXVlcnkoY29uZGl0aW9uYWxCbG9ja3NOb2RlKSxcbiAgICAgICAgY29uZGl0aW9uU3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcodmFsdWVOb2RlKTtcblxuICBzdHJpbmcgPSBgSWYgKCR7Y29uZGl0aW9uU3RyaW5nfSkgeyAuLi4gfWA7XG5cbiAgY29uc3QgZWxzZUJsb2NrTm9kZSA9IGVsc2VCbG9ja05vZGVRdWVyeShjb25kaXRpb25hbEJsb2Nrc05vZGUpO1xuXG4gIGlmIChlbHNlQmxvY2tOb2RlICE9PSBudWxsKSB7XG4gICAgc3RyaW5nID0gYCR7c3RyaW5nfSBFbHNlIHsgLi4uIH1gO1xuICB9XG5cbiAgcmV0dXJuIHN0cmluZztcbn1cbiJdLCJuYW1lcyI6WyJ2YWx1ZU5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsImlmQmxvY2tOb2RlUXVlcnkiLCJlbHNlQmxvY2tOb2RlUXVlcnkiLCJjb25kaXRpb25hbEJsb2Nrc05vZGVRdWVyeSIsImRvbUFzc2lnbmVkIiwiQ29uZGl0aW9uYWxCbG9ja3MiLCJzdHJpbmciLCJ2YWx1ZSIsImlmQmxvY2siLCJlbHNlQmxvY2siLCJnZXRTdHJpbmciLCJnZXRWYWx1ZSIsImdldENvbmRpdGlvbkJsb2NrIiwiZ2V0RWxzZUJsb2NrIiwiZXZhbHVhdGUiLCJjb250ZXh0IiwiY29uZGl0aW9uYWxCbG9ja3NTdHJpbmciLCJ0cmFjZSIsInZhbHVlVHlwZSIsImdldFR5cGUiLCJCT09MRUFOX1RZUEUiLCJ2YWx1ZVN0cmluZyIsImFzU3RyaW5nIiwibWVzc2FnZSIsImV4Y2VwdGlvbiIsIkV4Y2VwdGlvbiIsImZyb21NZXNzYWdlIiwiYm9vbGVhbiIsImdldEJvb2xlYW4iLCJkZWJ1ZyIsImZyb21TdGVwTm9kZSIsInN0ZXBOb2RlIiwiY29uZGl0aW9uYWxCbG9ja3MiLCJjb25kaXRpb25hbEJsb2Nrc05vZGUiLCJCbG9jayIsImRvbSIsIlZhbHVlIiwic3RyaW5nRnJvbUNvbmRpdGlvbmFsQmxvY2tzTm9kZSIsImlmQmxvY2tOb2RlIiwiZWxzZUJsb2NrTm9kZSIsImZyb21Db25kaXRpb25hbEJsb2Nrc05vZGUiLCJmcm9tQmxvY2tOb2RlIiwibmFtZSIsInZhbHVlTm9kZSIsImNvbmRpdGlvblN0cmluZyIsIm5vZGVBc1N0cmluZyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBY0E7OztlQUFBOzs7MkRBWmdCO2dFQUNNO3FCQUVJO3FCQUVHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU3QixJQUFNQSxpQkFBaUJDLElBQUFBLGdCQUFTLEVBQUMsNkJBQzNCQyxtQkFBbUJELElBQUFBLGdCQUFTLEVBQUMsZ0NBQzdCRSxxQkFBcUJGLElBQUFBLGdCQUFTLEVBQUMsZ0NBQy9CRyw2QkFBNkJILElBQUFBLGdCQUFTLEVBQUM7SUFFN0MsV0FBZUksSUFBQUEsZ0JBQVcsc0NBQUM7YUFBTUMsa0JBQ25CQyxNQUFNLEVBQUVDLEtBQUssRUFBRUMsT0FBTyxFQUFFQyxTQUFTO2dDQURkSjtRQUU3QixJQUFJLENBQUNDLE1BQU0sR0FBR0E7UUFDZCxJQUFJLENBQUNDLEtBQUssR0FBR0E7UUFDYixJQUFJLENBQUNDLE9BQU8sR0FBR0E7UUFDZixJQUFJLENBQUNDLFNBQVMsR0FBR0E7Ozs7WUFHbkJDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0osTUFBTTtZQUNwQjs7O1lBRUFLLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0osS0FBSztZQUNuQjs7O1lBRUFL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