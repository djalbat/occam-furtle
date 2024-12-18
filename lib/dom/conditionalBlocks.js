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
var _ConditionalBlocks;
var ifBlockNodeQuery = (0, _query.nodeQuery)("/conditionalBlocks/block[0]"), conditionNodeQuery = (0, _query.nodeQuery)("/conditionalBlocks/condition"), elseBlockNodeQuery = (0, _query.nodeQuery)("/conditionalBlocks/block[1]"), conditionalBlocksNodeQuery = (0, _query.nodeQuery)("/step/conditionalBlocks");
var _default = (0, _dom.domAssigned)((_ConditionalBlocks = /*#__PURE__*/ function() {
    function ConditionalBlocks(string, condition, ifBlock, elseBlock) {
        _class_call_check(this, ConditionalBlocks);
        this.string = string;
        this.condition = condition;
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
            key: "getCondition",
            value: function getCondition() {
                return this.condition;
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
                var value = this.condition.evaluate(context), boolean = value.getBoolean();
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
                    var Block = _dom.default.Block, Condition = _dom.default.Condition, string = stringFromConditionalBlocksNode(conditionalBlocksNode, context), ifBlockNode = ifBlockNodeQuery(conditionalBlocksNode), elseBlockNode = elseBlockNodeQuery(conditionalBlocksNode), condition = Condition.fromConditionalBlocksNode(conditionalBlocksNode, context), ifBlock = Block.fromBlockNode(ifBlockNode, context), elseBlock = Block.fromBlockNode(elseBlockNode, context);
                    conditionalBlocks = new ConditionalBlocks(string, condition, ifBlock, elseBlock);
                }
                return conditionalBlocks;
            }
        }
    ]);
    return ConditionalBlocks;
}(), _define_property(_ConditionalBlocks, "name", "ConditionalBlocks"), _ConditionalBlocks));
function stringFromConditionalBlocksNode(conditionalBlocksNode, context) {
    var string;
    var conditionNode = conditionNodeQuery(conditionalBlocksNode), conditionString = context.nodeAsString(conditionNode);
    string = "If (".concat(conditionString, ") { ... }");
    var elseBlockNode = elseBlockNodeQuery(conditionalBlocksNode);
    if (elseBlockNode !== null) {
        string = "".concat(string, " Else { ... }");
    }
    return string;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb20vY29uZGl0aW9uYWxCbG9ja3MuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBkb20gZnJvbSBcIi4uL2RvbVwiO1xuXG5pbXBvcnQgeyBub2RlUXVlcnkgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5pbXBvcnQgeyBkb21Bc3NpZ25lZCB9IGZyb20gXCIuLi9kb21cIjtcblxuY29uc3QgaWZCbG9ja05vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9jb25kaXRpb25hbEJsb2Nrcy9ibG9ja1swXVwiKSxcbiAgICAgIGNvbmRpdGlvbk5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9jb25kaXRpb25hbEJsb2Nrcy9jb25kaXRpb25cIiksXG4gICAgICBlbHNlQmxvY2tOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvY29uZGl0aW9uYWxCbG9ja3MvYmxvY2tbMV1cIiksXG4gICAgICBjb25kaXRpb25hbEJsb2Nrc05vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9zdGVwL2NvbmRpdGlvbmFsQmxvY2tzXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBkb21Bc3NpZ25lZChjbGFzcyBDb25kaXRpb25hbEJsb2NrcyB7XG4gIGNvbnN0cnVjdG9yKHN0cmluZywgY29uZGl0aW9uLCBpZkJsb2NrLCBlbHNlQmxvY2spIHtcbiAgICB0aGlzLnN0cmluZyA9IHN0cmluZztcbiAgICB0aGlzLmNvbmRpdGlvbiA9IGNvbmRpdGlvbjtcbiAgICB0aGlzLmlmQmxvY2sgPSBpZkJsb2NrO1xuICAgIHRoaXMuZWxzZUJsb2NrID0gZWxzZUJsb2NrO1xuICB9XG5cbiAgZ2V0U3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLnN0cmluZztcbiAgfVxuXG4gIGdldENvbmRpdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5jb25kaXRpb247XG4gIH1cblxuICBnZXRDb25kaXRpb25CbG9jaygpIHtcbiAgICByZXR1cm4gdGhpcy5pZkJsb2NrO1xuICB9XG5cbiAgZ2V0RWxzZUJsb2NrKCkge1xuICAgIHJldHVybiB0aGlzLmVsc2VCbG9jaztcbiAgfVxuXG4gIGV2YWx1YXRlKGNvbnRleHQpIHtcbiAgICBjb25zdCBjb25kaXRpb25hbEJsb2Nrc1N0cmluZyA9IHRoaXMuc3RyaW5nOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYEV2YWx1YXRpbmcgdGhlICcke2NvbmRpdGlvbmFsQmxvY2tzU3RyaW5nfScgY29uZGl0aW9uYWwgYmxvY2tzLi4uYCk7XG5cbiAgICBjb25zdCB2YWx1ZSA9IHRoaXMuY29uZGl0aW9uLmV2YWx1YXRlKGNvbnRleHQpLFxuICAgICAgICAgIGJvb2xlYW4gPSB2YWx1ZS5nZXRCb29sZWFuKCk7XG5cbiAgICBpZiAoYm9vbGVhbikge1xuICAgICAgdGhpcy5pZkJsb2NrLmV2YWx1YXRlKGNvbnRleHQpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAodGhpcy5lbHNlQmxvY2sgIT09IG51bGwpIHtcbiAgICAgICAgdGhpcy5lbHNlQmxvY2suZXZhbHVhdGUoY29udGV4dCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29udGV4dC5kZWJ1ZyhgLi4uZXZhbHVhdGVkIHRoZSAnJHtjb25kaXRpb25hbEJsb2Nrc1N0cmluZ30nIGNvbmRpdGlvbmFsIGJsb2Nrcy5gKTtcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJDb25kaXRpb25hbEJsb2Nrc1wiO1xuXG4gIHN0YXRpYyBmcm9tU3RlcE5vZGUoc3RlcE5vZGUsIGNvbnRleHQpIHtcbiAgICBsZXQgY29uZGl0aW9uYWxCbG9ja3MgPSBudWxsO1xuXG4gICAgY29uc3QgY29uZGl0aW9uYWxCbG9ja3NOb2RlID0gY29uZGl0aW9uYWxCbG9ja3NOb2RlUXVlcnkoc3RlcE5vZGUpO1xuXG4gICAgaWYgKGNvbmRpdGlvbmFsQmxvY2tzTm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgeyBCbG9jaywgQ29uZGl0aW9uIH0gPSBkb20sXG4gICAgICAgICAgICBzdHJpbmcgPSBzdHJpbmdGcm9tQ29uZGl0aW9uYWxCbG9ja3NOb2RlKGNvbmRpdGlvbmFsQmxvY2tzTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgICBpZkJsb2NrTm9kZSA9IGlmQmxvY2tOb2RlUXVlcnkoY29uZGl0aW9uYWxCbG9ja3NOb2RlKSxcbiAgICAgICAgICAgIGVsc2VCbG9ja05vZGUgPSBlbHNlQmxvY2tOb2RlUXVlcnkoY29uZGl0aW9uYWxCbG9ja3NOb2RlKSxcbiAgICAgICAgICAgIGNvbmRpdGlvbiA9IENvbmRpdGlvbi5mcm9tQ29uZGl0aW9uYWxCbG9ja3NOb2RlKGNvbmRpdGlvbmFsQmxvY2tzTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgICBpZkJsb2NrID0gQmxvY2suZnJvbUJsb2NrTm9kZShpZkJsb2NrTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgICBlbHNlQmxvY2sgPSBCbG9jay5mcm9tQmxvY2tOb2RlKGVsc2VCbG9ja05vZGUsIGNvbnRleHQpO1xuXG4gICAgICBjb25kaXRpb25hbEJsb2NrcyA9IG5ldyBDb25kaXRpb25hbEJsb2NrcyhzdHJpbmcsIGNvbmRpdGlvbiwgaWZCbG9jaywgZWxzZUJsb2NrKTtcbiAgICB9XG5cbiAgICByZXR1cm4gY29uZGl0aW9uYWxCbG9ja3M7XG4gIH1cbn0pO1xuXG5mdW5jdGlvbiBzdHJpbmdGcm9tQ29uZGl0aW9uYWxCbG9ja3NOb2RlKGNvbmRpdGlvbmFsQmxvY2tzTm9kZSwgY29udGV4dCkge1xuICBsZXQgc3RyaW5nO1xuXG4gIGNvbnN0IGNvbmRpdGlvbk5vZGUgPSBjb25kaXRpb25Ob2RlUXVlcnkoY29uZGl0aW9uYWxCbG9ja3NOb2RlKSxcbiAgICAgICAgY29uZGl0aW9uU3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcoY29uZGl0aW9uTm9kZSk7XG5cbiAgc3RyaW5nID0gYElmICgke2NvbmRpdGlvblN0cmluZ30pIHsgLi4uIH1gO1xuXG4gIGNvbnN0IGVsc2VCbG9ja05vZGUgPSBlbHNlQmxvY2tOb2RlUXVlcnkoY29uZGl0aW9uYWxCbG9ja3NOb2RlKTtcblxuICBpZiAoZWxzZUJsb2NrTm9kZSAhPT0gbnVsbCkge1xuICAgIHN0cmluZyA9IGAke3N0cmluZ30gRWxzZSB7IC4uLiB9YDtcbiAgfVxuXG4gIHJldHVybiBzdHJpbmc7XG59XG4iXSwibmFtZXMiOlsiaWZCbG9ja05vZGVRdWVyeSIsIm5vZGVRdWVyeSIsImNvbmRpdGlvbk5vZGVRdWVyeSIsImVsc2VCbG9ja05vZGVRdWVyeSIsImNvbmRpdGlvbmFsQmxvY2tzTm9kZVF1ZXJ5IiwiZG9tQXNzaWduZWQiLCJDb25kaXRpb25hbEJsb2NrcyIsInN0cmluZyIsImNvbmRpdGlvbiIsImlmQmxvY2siLCJlbHNlQmxvY2siLCJnZXRTdHJpbmciLCJnZXRDb25kaXRpb24iLCJnZXRDb25kaXRpb25CbG9jayIsImdldEVsc2VCbG9jayIsImV2YWx1YXRlIiwiY29udGV4dCIsImNvbmRpdGlvbmFsQmxvY2tzU3RyaW5nIiwidHJhY2UiLCJ2YWx1ZSIsImJvb2xlYW4iLCJnZXRCb29sZWFuIiwiZGVidWciLCJmcm9tU3RlcE5vZGUiLCJzdGVwTm9kZSIsImNvbmRpdGlvbmFsQmxvY2tzIiwiY29uZGl0aW9uYWxCbG9ja3NOb2RlIiwiQmxvY2siLCJkb20iLCJDb25kaXRpb24iLCJzdHJpbmdGcm9tQ29uZGl0aW9uYWxCbG9ja3NOb2RlIiwiaWZCbG9ja05vZGUiLCJlbHNlQmxvY2tOb2RlIiwiZnJvbUNvbmRpdGlvbmFsQmxvY2tzTm9kZSIsImZyb21CbG9ja05vZGUiLCJuYW1lIiwiY29uZGl0aW9uTm9kZSIsImNvbmRpdGlvblN0cmluZyIsIm5vZGVBc1N0cmluZyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBWUE7OztlQUFBOzs7MkRBVmdCO3FCQUVVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHMUIsSUFBTUEsbUJBQW1CQyxJQUFBQSxnQkFBUyxF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