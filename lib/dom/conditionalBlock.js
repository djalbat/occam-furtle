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
var conditionNodeQuery = (0, _query.nodeQuery)("/conditionalBlock/condition"), elseBlockNodeQuery = (0, _query.nodeQuery)("/conditionalBlock/block[1]"), conditionBlockNodeQuery = (0, _query.nodeQuery)("/conditionalBlock/block[0]"), conditionalBlockNodeQuery = (0, _query.nodeQuery)("/step/conditionalBlock");
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
                var conditionalBlockString = this.string; ///
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
                    var Block = _dom.default.Block, Condition = _dom.default.Condition, string = stringFromConditionalBlockNode(conditionalBlockNode, context), conditionBlockNode = conditionBlockNodeQuery(conditionalBlockNode), elseBlockNode = elseBlockNodeQuery(conditionalBlockNode), condition = Condition.fromConditionalBlockNode(conditionalBlockNode, context), conditionBlock = Block.fromBlockNode(conditionBlockNode, context), elseBlock = Block.fromBlockNode(elseBlockNode, context);
                    conditionalBlock = new ConditionalBlock(string, condition, conditionBlock, elseBlock);
                }
                return conditionalBlock;
            }
        }
    ]);
    return ConditionalBlock;
}(), _define_property(_ConditionalBlock, "name", "ConditionalBlock"), _ConditionalBlock));
function stringFromConditionalBlockNode(conditionalBlockNode, context) {
    var string;
    var conditionNode = conditionNodeQuery(conditionalBlockNode), conditionString = context.nodeAsString(conditionNode);
    string = "If (".concat(conditionString, ") { ... }");
    var elseBlockNode = elseBlockNodeQuery(conditionalBlockNode);
    if (elseBlockNode !== null) {
        string = "".concat(string, " Else { ... }");
    }
    return string;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb20vY29uZGl0aW9uYWxCbG9jay5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IGRvbSBmcm9tIFwiLi4vZG9tXCI7XG5cbmltcG9ydCB7IG5vZGVRdWVyeSB9IGZyb20gXCIuLi91dGlsaXRpZXMvcXVlcnlcIjtcbmltcG9ydCB7IGRvbUFzc2lnbmVkIH0gZnJvbSBcIi4uL2RvbVwiO1xuXG5jb25zdCBjb25kaXRpb25Ob2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvY29uZGl0aW9uYWxCbG9jay9jb25kaXRpb25cIiksXG4gICAgICBlbHNlQmxvY2tOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvY29uZGl0aW9uYWxCbG9jay9ibG9ja1sxXVwiKSxcbiAgICAgIGNvbmRpdGlvbkJsb2NrTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL2NvbmRpdGlvbmFsQmxvY2svYmxvY2tbMF1cIiksXG4gICAgICBjb25kaXRpb25hbEJsb2NrTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3N0ZXAvY29uZGl0aW9uYWxCbG9ja1wiKTtcblxuZXhwb3J0IGRlZmF1bHQgZG9tQXNzaWduZWQoY2xhc3MgQ29uZGl0aW9uYWxCbG9jayB7XG4gIGNvbnN0cnVjdG9yKHN0cmluZywgY29uZGl0aW9uLCBjb25kaXRpb25CbG9jaywgZWxzZUJsb2NrKSB7XG4gICAgdGhpcy5zdHJpbmcgPSBzdHJpbmc7XG4gICAgdGhpcy5jb25kaXRpb24gPSBjb25kaXRpb247XG4gICAgdGhpcy5jb25kaXRpb25CbG9jayA9IGNvbmRpdGlvbkJsb2NrO1xuICAgIHRoaXMuZWxzZUJsb2NrID0gZWxzZUJsb2NrO1xuICB9XG5cbiAgZ2V0U3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLnN0cmluZztcbiAgfVxuXG4gIGdldENvbmRpdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5jb25kaXRpb247XG4gIH1cblxuICBnZXRDb25kaXRpb25CbG9jaygpIHtcbiAgICByZXR1cm4gdGhpcy5jb25kaXRpb25CbG9jaztcbiAgfVxuXG4gIGdldEVsc2VCbG9jaygpIHtcbiAgICByZXR1cm4gdGhpcy5lbHNlQmxvY2s7XG4gIH1cblxuICByZXNvbHZlKGNvbnRleHQpIHtcbiAgICBjb25zdCBjb25kaXRpb25hbEJsb2NrU3RyaW5nID0gdGhpcy5zdHJpbmc7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgUmVzb2x2aW5nIHRoZSAnJHtjb25kaXRpb25hbEJsb2NrU3RyaW5nfScgY29uZGl0aW9uYWwgYmxvY2suLi5gKTtcblxuICAgIGNvbnN0IHZhbHVlID0gdGhpcy5jb25kaXRpb24ucmVzb2x2ZShjb250ZXh0KSxcbiAgICAgICAgICBib29sZWFuID0gdmFsdWUuZ2V0Qm9vbGVhbigpO1xuXG4gICAgaWYgKGJvb2xlYW4pIHtcbiAgICAgIHRoaXMuY29uZGl0aW9uQmxvY2sucmVzb2x2ZShjb250ZXh0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHRoaXMuZWxzZUJsb2NrICE9PSBudWxsKSB7XG4gICAgICAgIHRoaXMuZWxzZUJsb2NrLnJlc29sdmUoY29udGV4dCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29udGV4dC5kZWJ1ZyhgLi4ucmVzb2x2ZWQgdGhlICcke2NvbmRpdGlvbmFsQmxvY2tTdHJpbmd9JyBjb25kaXRpb25hbCBibG9jay5gKTtcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJDb25kaXRpb25hbEJsb2NrXCI7XG5cbiAgc3RhdGljIGZyb21TdGVwTm9kZShzdGVwTm9kZSwgY29udGV4dCkge1xuICAgIGxldCBjb25kaXRpb25hbEJsb2NrID0gbnVsbDtcblxuICAgIGNvbnN0IGNvbmRpdGlvbmFsQmxvY2tOb2RlID0gY29uZGl0aW9uYWxCbG9ja05vZGVRdWVyeShzdGVwTm9kZSk7XG5cbiAgICBpZiAoY29uZGl0aW9uYWxCbG9ja05vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHsgQmxvY2ssIENvbmRpdGlvbiB9ID0gZG9tLFxuICAgICAgICAgICAgc3RyaW5nID0gc3RyaW5nRnJvbUNvbmRpdGlvbmFsQmxvY2tOb2RlKGNvbmRpdGlvbmFsQmxvY2tOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgICAgIGNvbmRpdGlvbkJsb2NrTm9kZSA9IGNvbmRpdGlvbkJsb2NrTm9kZVF1ZXJ5KGNvbmRpdGlvbmFsQmxvY2tOb2RlKSxcbiAgICAgICAgICAgIGVsc2VCbG9ja05vZGUgPSBlbHNlQmxvY2tOb2RlUXVlcnkoY29uZGl0aW9uYWxCbG9ja05vZGUpLFxuICAgICAgICAgICAgY29uZGl0aW9uID0gQ29uZGl0aW9uLmZyb21Db25kaXRpb25hbEJsb2NrTm9kZShjb25kaXRpb25hbEJsb2NrTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgICBjb25kaXRpb25CbG9jayA9IEJsb2NrLmZyb21CbG9ja05vZGUoY29uZGl0aW9uQmxvY2tOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgICAgIGVsc2VCbG9jayA9IEJsb2NrLmZyb21CbG9ja05vZGUoZWxzZUJsb2NrTm9kZSwgY29udGV4dCk7XG5cbiAgICAgIGNvbmRpdGlvbmFsQmxvY2sgPSBuZXcgQ29uZGl0aW9uYWxCbG9jayhzdHJpbmcsIGNvbmRpdGlvbiwgY29uZGl0aW9uQmxvY2ssIGVsc2VCbG9jayk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbmRpdGlvbmFsQmxvY2s7XG4gIH1cbn0pO1xuXG5mdW5jdGlvbiBzdHJpbmdGcm9tQ29uZGl0aW9uYWxCbG9ja05vZGUoY29uZGl0aW9uYWxCbG9ja05vZGUsIGNvbnRleHQpIHtcbiAgbGV0IHN0cmluZztcblxuICBjb25zdCBjb25kaXRpb25Ob2RlID0gY29uZGl0aW9uTm9kZVF1ZXJ5KGNvbmRpdGlvbmFsQmxvY2tOb2RlKSxcbiAgICAgICAgY29uZGl0aW9uU3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcoY29uZGl0aW9uTm9kZSk7XG5cbiAgc3RyaW5nID0gYElmICgke2NvbmRpdGlvblN0cmluZ30pIHsgLi4uIH1gO1xuXG4gIGNvbnN0IGVsc2VCbG9ja05vZGUgPSBlbHNlQmxvY2tOb2RlUXVlcnkoY29uZGl0aW9uYWxCbG9ja05vZGUpO1xuXG4gIGlmIChlbHNlQmxvY2tOb2RlICE9PSBudWxsKSB7XG4gICAgc3RyaW5nID0gYCR7c3RyaW5nfSBFbHNlIHsgLi4uIH1gO1xuICB9XG5cbiAgcmV0dXJuIHN0cmluZztcbn1cbiJdLCJuYW1lcyI6WyJjb25kaXRpb25Ob2RlUXVlcnkiLCJub2RlUXVlcnkiLCJlbHNlQmxvY2tOb2RlUXVlcnkiLCJjb25kaXRpb25CbG9ja05vZGVRdWVyeSIsImNvbmRpdGlvbmFsQmxvY2tOb2RlUXVlcnkiLCJkb21Bc3NpZ25lZCIsIkNvbmRpdGlvbmFsQmxvY2siLCJzdHJpbmciLCJjb25kaXRpb24iLCJjb25kaXRpb25CbG9jayIsImVsc2VCbG9jayIsImdldFN0cmluZyIsImdldENvbmRpdGlvbiIsImdldENvbmRpdGlvbkJsb2NrIiwiZ2V0RWxzZUJsb2NrIiwicmVzb2x2ZSIsImNvbnRleHQiLCJjb25kaXRpb25hbEJsb2NrU3RyaW5nIiwidHJhY2UiLCJ2YWx1ZSIsImJvb2xlYW4iLCJnZXRCb29sZWFuIiwiZGVidWciLCJmcm9tU3RlcE5vZGUiLCJzdGVwTm9kZSIsImNvbmRpdGlvbmFsQmxvY2siLCJjb25kaXRpb25hbEJsb2NrTm9kZSIsIkJsb2NrIiwiZG9tIiwiQ29uZGl0aW9uIiwic3RyaW5nRnJvbUNvbmRpdGlvbmFsQmxvY2tOb2RlIiwiY29uZGl0aW9uQmxvY2tOb2RlIiwiZWxzZUJsb2NrTm9kZSIsImZyb21Db25kaXRpb25hbEJsb2NrTm9kZSIsImZyb21CbG9ja05vZGUiLCJuYW1lIiwiY29uZGl0aW9uTm9kZSIsImNvbmRpdGlvblN0cmluZyIsIm5vZGVBc1N0cmluZyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBWUE7OztlQUFBOzs7MkRBVmdCO3FCQUVVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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