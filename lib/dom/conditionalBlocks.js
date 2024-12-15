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
            key: "resolve",
            value: function resolve(context) {
                var conditionalBlocksString = this.string; ///
                context.trace("Resolving the '".concat(conditionalBlocksString, "' conditional blocks..."));
                var value = this.condition.resolve(context), boolean = value.getBoolean();
                if (boolean) {
                    this.ifBlock.resolve(context);
                } else {
                    if (this.elseBlock !== null) {
                        this.elseBlock.resolve(context);
                    }
                }
                context.debug("...resolved the '".concat(conditionalBlocksString, "' conditional blocks."));
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb20vY29uZGl0aW9uYWxCbG9ja3MuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBkb20gZnJvbSBcIi4uL2RvbVwiO1xuXG5pbXBvcnQgeyBub2RlUXVlcnkgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5pbXBvcnQgeyBkb21Bc3NpZ25lZCB9IGZyb20gXCIuLi9kb21cIjtcblxuY29uc3QgaWZCbG9ja05vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9jb25kaXRpb25hbEJsb2Nrcy9ibG9ja1swXVwiKSxcbiAgICAgIGNvbmRpdGlvbk5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9jb25kaXRpb25hbEJsb2Nrcy9jb25kaXRpb25cIiksXG4gICAgICBlbHNlQmxvY2tOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvY29uZGl0aW9uYWxCbG9ja3MvYmxvY2tbMV1cIiksXG4gICAgICBjb25kaXRpb25hbEJsb2Nrc05vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9zdGVwL2NvbmRpdGlvbmFsQmxvY2tzXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBkb21Bc3NpZ25lZChjbGFzcyBDb25kaXRpb25hbEJsb2NrcyB7XG4gIGNvbnN0cnVjdG9yKHN0cmluZywgY29uZGl0aW9uLCBpZkJsb2NrLCBlbHNlQmxvY2spIHtcbiAgICB0aGlzLnN0cmluZyA9IHN0cmluZztcbiAgICB0aGlzLmNvbmRpdGlvbiA9IGNvbmRpdGlvbjtcbiAgICB0aGlzLmlmQmxvY2sgPSBpZkJsb2NrO1xuICAgIHRoaXMuZWxzZUJsb2NrID0gZWxzZUJsb2NrO1xuICB9XG5cbiAgZ2V0U3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLnN0cmluZztcbiAgfVxuXG4gIGdldENvbmRpdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5jb25kaXRpb247XG4gIH1cblxuICBnZXRDb25kaXRpb25CbG9jaygpIHtcbiAgICByZXR1cm4gdGhpcy5pZkJsb2NrO1xuICB9XG5cbiAgZ2V0RWxzZUJsb2NrKCkge1xuICAgIHJldHVybiB0aGlzLmVsc2VCbG9jaztcbiAgfVxuXG4gIHJlc29sdmUoY29udGV4dCkge1xuICAgIGNvbnN0IGNvbmRpdGlvbmFsQmxvY2tzU3RyaW5nID0gdGhpcy5zdHJpbmc7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgUmVzb2x2aW5nIHRoZSAnJHtjb25kaXRpb25hbEJsb2Nrc1N0cmluZ30nIGNvbmRpdGlvbmFsIGJsb2Nrcy4uLmApO1xuXG4gICAgY29uc3QgdmFsdWUgPSB0aGlzLmNvbmRpdGlvbi5yZXNvbHZlKGNvbnRleHQpLFxuICAgICAgICAgIGJvb2xlYW4gPSB2YWx1ZS5nZXRCb29sZWFuKCk7XG5cbiAgICBpZiAoYm9vbGVhbikge1xuICAgICAgdGhpcy5pZkJsb2NrLnJlc29sdmUoY29udGV4dCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICh0aGlzLmVsc2VCbG9jayAhPT0gbnVsbCkge1xuICAgICAgICB0aGlzLmVsc2VCbG9jay5yZXNvbHZlKGNvbnRleHQpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnRleHQuZGVidWcoYC4uLnJlc29sdmVkIHRoZSAnJHtjb25kaXRpb25hbEJsb2Nrc1N0cmluZ30nIGNvbmRpdGlvbmFsIGJsb2Nrcy5gKTtcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJDb25kaXRpb25hbEJsb2Nrc1wiO1xuXG4gIHN0YXRpYyBmcm9tU3RlcE5vZGUoc3RlcE5vZGUsIGNvbnRleHQpIHtcbiAgICBsZXQgY29uZGl0aW9uYWxCbG9ja3MgPSBudWxsO1xuXG4gICAgY29uc3QgY29uZGl0aW9uYWxCbG9ja3NOb2RlID0gY29uZGl0aW9uYWxCbG9ja3NOb2RlUXVlcnkoc3RlcE5vZGUpO1xuXG4gICAgaWYgKGNvbmRpdGlvbmFsQmxvY2tzTm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgeyBCbG9jaywgQ29uZGl0aW9uIH0gPSBkb20sXG4gICAgICAgICAgICBzdHJpbmcgPSBzdHJpbmdGcm9tQ29uZGl0aW9uYWxCbG9ja3NOb2RlKGNvbmRpdGlvbmFsQmxvY2tzTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgICBpZkJsb2NrTm9kZSA9IGlmQmxvY2tOb2RlUXVlcnkoY29uZGl0aW9uYWxCbG9ja3NOb2RlKSxcbiAgICAgICAgICAgIGVsc2VCbG9ja05vZGUgPSBlbHNlQmxvY2tOb2RlUXVlcnkoY29uZGl0aW9uYWxCbG9ja3NOb2RlKSxcbiAgICAgICAgICAgIGNvbmRpdGlvbiA9IENvbmRpdGlvbi5mcm9tQ29uZGl0aW9uYWxCbG9ja3NOb2RlKGNvbmRpdGlvbmFsQmxvY2tzTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgICBpZkJsb2NrID0gQmxvY2suZnJvbUJsb2NrTm9kZShpZkJsb2NrTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgICBlbHNlQmxvY2sgPSBCbG9jay5mcm9tQmxvY2tOb2RlKGVsc2VCbG9ja05vZGUsIGNvbnRleHQpO1xuXG4gICAgICBjb25kaXRpb25hbEJsb2NrcyA9IG5ldyBDb25kaXRpb25hbEJsb2NrcyhzdHJpbmcsIGNvbmRpdGlvbiwgaWZCbG9jaywgZWxzZUJsb2NrKTtcbiAgICB9XG5cbiAgICByZXR1cm4gY29uZGl0aW9uYWxCbG9ja3M7XG4gIH1cbn0pO1xuXG5mdW5jdGlvbiBzdHJpbmdGcm9tQ29uZGl0aW9uYWxCbG9ja3NOb2RlKGNvbmRpdGlvbmFsQmxvY2tzTm9kZSwgY29udGV4dCkge1xuICBsZXQgc3RyaW5nO1xuXG4gIGNvbnN0IGNvbmRpdGlvbk5vZGUgPSBjb25kaXRpb25Ob2RlUXVlcnkoY29uZGl0aW9uYWxCbG9ja3NOb2RlKSxcbiAgICAgICAgY29uZGl0aW9uU3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcoY29uZGl0aW9uTm9kZSk7XG5cbiAgc3RyaW5nID0gYElmICgke2NvbmRpdGlvblN0cmluZ30pIHsgLi4uIH1gO1xuXG4gIGNvbnN0IGVsc2VCbG9ja05vZGUgPSBlbHNlQmxvY2tOb2RlUXVlcnkoY29uZGl0aW9uYWxCbG9ja3NOb2RlKTtcblxuICBpZiAoZWxzZUJsb2NrTm9kZSAhPT0gbnVsbCkge1xuICAgIHN0cmluZyA9IGAke3N0cmluZ30gRWxzZSB7IC4uLiB9YDtcbiAgfVxuXG4gIHJldHVybiBzdHJpbmc7XG59XG4iXSwibmFtZXMiOlsiaWZCbG9ja05vZGVRdWVyeSIsIm5vZGVRdWVyeSIsImNvbmRpdGlvbk5vZGVRdWVyeSIsImVsc2VCbG9ja05vZGVRdWVyeSIsImNvbmRpdGlvbmFsQmxvY2tzTm9kZVF1ZXJ5IiwiZG9tQXNzaWduZWQiLCJDb25kaXRpb25hbEJsb2NrcyIsInN0cmluZyIsImNvbmRpdGlvbiIsImlmQmxvY2siLCJlbHNlQmxvY2siLCJnZXRTdHJpbmciLCJnZXRDb25kaXRpb24iLCJnZXRDb25kaXRpb25CbG9jayIsImdldEVsc2VCbG9jayIsInJlc29sdmUiLCJjb250ZXh0IiwiY29uZGl0aW9uYWxCbG9ja3NTdHJpbmciLCJ0cmFjZSIsInZhbHVlIiwiYm9vbGVhbiIsImdldEJvb2xlYW4iLCJkZWJ1ZyIsImZyb21TdGVwTm9kZSIsInN0ZXBOb2RlIiwiY29uZGl0aW9uYWxCbG9ja3MiLCJjb25kaXRpb25hbEJsb2Nrc05vZGUiLCJCbG9jayIsImRvbSIsIkNvbmRpdGlvbiIsInN0cmluZ0Zyb21Db25kaXRpb25hbEJsb2Nrc05vZGUiLCJpZkJsb2NrTm9kZSIsImVsc2VCbG9ja05vZGUiLCJmcm9tQ29uZGl0aW9uYWxCbG9ja3NOb2RlIiwiZnJvbUJsb2NrTm9kZSIsIm5hbWUiLCJjb25kaXRpb25Ob2RlIiwiY29uZGl0aW9uU3RyaW5nIiwibm9kZUFzU3RyaW5nIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFZQTs7O2VBQUE7OzsyREFWZ0I7cUJBRVU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUcxQixJQUFNQSxtQkFBbUJDLElBQUFBLGdCQUFTLEVBQUMsZ0NB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