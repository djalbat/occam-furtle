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
                    var Block = _dom.default.Block, Value = _dom.default.Value, ifBlockNode = ifBlockNodeQuery(conditionalBlocksNode), elseBlockNode = elseBlockNodeQuery(conditionalBlocksNode), value = Value.fromConditionalBlocksNode(conditionalBlocksNode, context), ifBlock = Block.fromBlockNode(ifBlockNode, context), elseBlock = Block.fromBlockNode(elseBlockNode, context), string = stringFromValueIfBockAndElseBock(value, ifBlock, elseBlock, context);
                    conditionalBlocks = new ConditionalBlocks(string, value, ifBlock, elseBlock);
                }
                return conditionalBlocks;
            }
        }
    ]);
    return ConditionalBlocks;
}(), _define_property(_ConditionalBlocks, "name", "ConditionalBlocks"), _ConditionalBlocks));
function stringFromValueIfBockAndElseBock(value, ifBlock, elseBlock, context) {
    var string;
    var valueString = value.asString(context), ifBlockString = ifBlock.getString();
    string = "If (".concat(valueString, ") ").concat(ifBlockString);
    if (elseBlock !== null) {
        var elseBlockString = elseBlock.getString();
        string = "".concat(string, " Else ").concat(elseBlockString);
    }
    return string;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb20vY29uZGl0aW9uYWxCbG9ja3MuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBkb20gZnJvbSBcIi4uL2RvbVwiO1xuaW1wb3J0IEV4Y2VwdGlvbiBmcm9tIFwiLi4vZXhjZXB0aW9uXCI7XG5cbmltcG9ydCB7IG5vZGVRdWVyeSB9IGZyb20gXCIuLi91dGlsaXRpZXMvcXVlcnlcIjtcbmltcG9ydCB7IGRvbUFzc2lnbmVkIH0gZnJvbSBcIi4uL2RvbVwiO1xuaW1wb3J0IHsgQk9PTEVBTl9UWVBFIH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5cbmNvbnN0IHZhbHVlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL2NvbmRpdGlvbmFsQmxvY2tzL3ZhbHVlXCIpLFxuICAgICAgaWZCbG9ja05vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9jb25kaXRpb25hbEJsb2Nrcy9ibG9ja1swXVwiKSxcbiAgICAgIGVsc2VCbG9ja05vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9jb25kaXRpb25hbEJsb2Nrcy9ibG9ja1sxXVwiKSxcbiAgICAgIGNvbmRpdGlvbmFsQmxvY2tzTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3N0ZXAvY29uZGl0aW9uYWxCbG9ja3NcIik7XG5cbmV4cG9ydCBkZWZhdWx0IGRvbUFzc2lnbmVkKGNsYXNzIENvbmRpdGlvbmFsQmxvY2tzIHtcbiAgY29uc3RydWN0b3Ioc3RyaW5nLCB2YWx1ZSwgaWZCbG9jaywgZWxzZUJsb2NrKSB7XG4gICAgdGhpcy5zdHJpbmcgPSBzdHJpbmc7XG4gICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgIHRoaXMuaWZCbG9jayA9IGlmQmxvY2s7XG4gICAgdGhpcy5lbHNlQmxvY2sgPSBlbHNlQmxvY2s7XG4gIH1cblxuICBnZXRTdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RyaW5nO1xuICB9XG5cbiAgZ2V0VmFsdWUoKSB7XG4gICAgcmV0dXJuIHRoaXMudmFsdWU7XG4gIH1cblxuICBnZXRDb25kaXRpb25CbG9jaygpIHtcbiAgICByZXR1cm4gdGhpcy5pZkJsb2NrO1xuICB9XG5cbiAgZ2V0RWxzZUJsb2NrKCkge1xuICAgIHJldHVybiB0aGlzLmVsc2VCbG9jaztcbiAgfVxuXG4gIGV2YWx1YXRlKGNvbnRleHQpIHtcbiAgICBjb25zdCBjb25kaXRpb25hbEJsb2Nrc1N0cmluZyA9IHRoaXMuc3RyaW5nOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYEV2YWx1YXRpbmcgdGhlICcke2NvbmRpdGlvbmFsQmxvY2tzU3RyaW5nfScgY29uZGl0aW9uYWwgYmxvY2tzLi4uYCk7XG5cbiAgICBjb25zdCB2YWx1ZSA9IHRoaXMudmFsdWUuZXZhbHVhdGUoY29udGV4dCksXG4gICAgICAgICAgdmFsdWVUeXBlID0gdmFsdWUuZ2V0VHlwZSgpO1xuXG4gICAgaWYgKHZhbHVlVHlwZSAhPT0gQk9PTEVBTl9UWVBFKSB7XG4gICAgICBjb25zdCB2YWx1ZVN0cmluZyA9IHZhbHVlLmFzU3RyaW5nKGNvbnRleHQpLFxuICAgICAgICAgICAgbWVzc2FnZSA9IGBUaGUgJHt2YWx1ZVN0cmluZ30gdmFsdWUncyB0eXBlIGlzICcke3ZhbHVlVHlwZX0nIHdoZW4gaXQgc2hvdWxkIGJlIG9mIHR5cGUgJyR7Qk9PTEVBTl9UWVBFfScuYCxcbiAgICAgICAgICAgIGV4Y2VwdGlvbiA9IEV4Y2VwdGlvbi5mcm9tTWVzc2FnZShtZXNzYWdlKTtcblxuICAgICAgdGhyb3cgZXhjZXB0aW9uO1xuICAgIH1cblxuICAgIGNvbnN0IGJvb2xlYW4gPSB2YWx1ZS5nZXRCb29sZWFuKCk7XG5cbiAgICBpZiAoYm9vbGVhbikge1xuICAgICAgdGhpcy5pZkJsb2NrLmV2YWx1YXRlKGNvbnRleHQpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAodGhpcy5lbHNlQmxvY2sgIT09IG51bGwpIHtcbiAgICAgICAgdGhpcy5lbHNlQmxvY2suZXZhbHVhdGUoY29udGV4dCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29udGV4dC5kZWJ1ZyhgLi4uZXZhbHVhdGVkIHRoZSAnJHtjb25kaXRpb25hbEJsb2Nrc1N0cmluZ30nIGNvbmRpdGlvbmFsIGJsb2Nrcy5gKTtcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJDb25kaXRpb25hbEJsb2Nrc1wiO1xuXG4gIHN0YXRpYyBmcm9tU3RlcE5vZGUoc3RlcE5vZGUsIGNvbnRleHQpIHtcbiAgICBsZXQgY29uZGl0aW9uYWxCbG9ja3MgPSBudWxsO1xuXG4gICAgY29uc3QgY29uZGl0aW9uYWxCbG9ja3NOb2RlID0gY29uZGl0aW9uYWxCbG9ja3NOb2RlUXVlcnkoc3RlcE5vZGUpO1xuXG4gICAgaWYgKGNvbmRpdGlvbmFsQmxvY2tzTm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgeyBCbG9jaywgVmFsdWUgfSA9IGRvbSxcbiAgICAgICAgICAgIGlmQmxvY2tOb2RlID0gaWZCbG9ja05vZGVRdWVyeShjb25kaXRpb25hbEJsb2Nrc05vZGUpLFxuICAgICAgICAgICAgZWxzZUJsb2NrTm9kZSA9IGVsc2VCbG9ja05vZGVRdWVyeShjb25kaXRpb25hbEJsb2Nrc05vZGUpLFxuICAgICAgICAgICAgdmFsdWUgPSBWYWx1ZS5mcm9tQ29uZGl0aW9uYWxCbG9ja3NOb2RlKGNvbmRpdGlvbmFsQmxvY2tzTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgICBpZkJsb2NrID0gQmxvY2suZnJvbUJsb2NrTm9kZShpZkJsb2NrTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgICBlbHNlQmxvY2sgPSBCbG9jay5mcm9tQmxvY2tOb2RlKGVsc2VCbG9ja05vZGUsIGNvbnRleHQpLFxuICAgICAgICAgICAgc3RyaW5nID0gc3RyaW5nRnJvbVZhbHVlSWZCb2NrQW5kRWxzZUJvY2sodmFsdWUsIGlmQmxvY2ssIGVsc2VCbG9jaywgY29udGV4dCk7XG5cbiAgICAgIGNvbmRpdGlvbmFsQmxvY2tzID0gbmV3IENvbmRpdGlvbmFsQmxvY2tzKHN0cmluZywgdmFsdWUsIGlmQmxvY2ssIGVsc2VCbG9jayk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbmRpdGlvbmFsQmxvY2tzO1xuICB9XG59KTtcblxuZnVuY3Rpb24gc3RyaW5nRnJvbVZhbHVlSWZCb2NrQW5kRWxzZUJvY2sodmFsdWUsIGlmQmxvY2ssIGVsc2VCbG9jaywgY29udGV4dCkge1xuICBsZXQgc3RyaW5nO1xuXG4gIGNvbnN0IHZhbHVlU3RyaW5nID0gdmFsdWUuYXNTdHJpbmcoY29udGV4dCksXG4gICAgICAgIGlmQmxvY2tTdHJpbmcgPSBpZkJsb2NrLmdldFN0cmluZygpO1xuXG4gIHN0cmluZyA9IGBJZiAoJHt2YWx1ZVN0cmluZ30pICR7aWZCbG9ja1N0cmluZ31gO1xuXG4gIGlmIChlbHNlQmxvY2sgIT09IG51bGwpIHtcbiAgICBjb25zdCBlbHNlQmxvY2tTdHJpbmcgPSBlbHNlQmxvY2suZ2V0U3RyaW5nKCk7XG5cbiAgICBzdHJpbmcgPSBgJHtzdHJpbmd9IEVsc2UgJHtlbHNlQmxvY2tTdHJpbmd9YDtcbiAgfVxuXG4gIHJldHVybiBzdHJpbmc7XG59Il0sIm5hbWVzIjpbInZhbHVlTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5IiwiaWZCbG9ja05vZGVRdWVyeSIsImVsc2VCbG9ja05vZGVRdWVyeSIsImNvbmRpdGlvbmFsQmxvY2tzTm9kZVF1ZXJ5IiwiZG9tQXNzaWduZWQiLCJDb25kaXRpb25hbEJsb2NrcyIsInN0cmluZyIsInZhbHVlIiwiaWZCbG9jayIsImVsc2VCbG9jayIsImdldFN0cmluZyIsImdldFZhbHVlIiwiZ2V0Q29uZGl0aW9uQmxvY2siLCJnZXRFbHNlQmxvY2siLCJldmFsdWF0ZSIsImNvbnRleHQiLCJjb25kaXRpb25hbEJsb2Nrc1N0cmluZyIsInRyYWNlIiwidmFsdWVUeXBlIiwiZ2V0VHlwZSIsIkJPT0xFQU5fVFlQRSIsInZhbHVlU3RyaW5nIiwiYXNTdHJpbmciLCJtZXNzYWdlIiwiZXhjZXB0aW9uIiwiRXhjZXB0aW9uIiwiZnJvbU1lc3NhZ2UiLCJib29sZWFuIiwiZ2V0Qm9vbGVhbiIsImRlYnVnIiwiZnJvbVN0ZXBOb2RlIiwic3RlcE5vZGUiLCJjb25kaXRpb25hbEJsb2NrcyIsImNvbmRpdGlvbmFsQmxvY2tzTm9kZSIsIkJsb2NrIiwiZG9tIiwiVmFsdWUiLCJpZkJsb2NrTm9kZSIsImVsc2VCbG9ja05vZGUiLCJmcm9tQ29uZGl0aW9uYWxCbG9ja3NOb2RlIiwiZnJvbUJsb2NrTm9kZSIsInN0cmluZ0Zyb21WYWx1ZUlmQm9ja0FuZEVsc2VCb2NrIiwibmFtZSIsImlmQmxvY2tTdHJpbmciLCJlbHNlQmxvY2tTdHJpbmciXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQWNBOzs7ZUFBQTs7OzJEQVpnQjtnRUFDTTtxQkFFSTtxQkFFRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFN0IsSUFBTUEsaUJBQWlCQyxJQUFBQSxnQkFBUyxFQUFDLDZCQUMzQkMsbUJBQW1CRCxJQUFBQSxnQkFBUyxFQUFDLGdDQUM3QkUscUJBQXFCRixJQUFBQSxnQkFBUyxFQUFDLGdDQUMvQkcsNkJBQTZCSCxJQUFBQSxnQkFBUyxFQUFDO0lBRTdDLFdBQWVJLElBQUFBLGdCQUFXLHNDQUFDO2FBQU1DLGtCQUNuQkMsTUFBTSxFQUFFQyxLQUFLLEVBQUVDLE9BQU8sRUFBRUMsU0FBUztnQ0FEZEo7UUFFN0IsSUFBSSxDQUFDQyxNQUFNLEdBQUdBO1FBQ2QsSUFBSSxDQUFDQyxLQUFLLEdBQUdBO1FBQ2IsSUFBSSxDQUFDQyxPQUFPLEdBQUdBO1FBQ2YsSUFBSSxDQUFDQyxTQUFTLEdBQUdBOzs7O1lBR25CQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNKLE1BQU07WUFDcEI7OztZQUVBSyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNKLEtBQUs7WUFDbkI7OztZQUVBSyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJ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