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
var _occamquery = require("occam-query");
var _occamentities = require("occam-entities");
var _dom = /*#__PURE__*/ _interop_require_wildcard(require("../../dom"));
var _exception = /*#__PURE__*/ _interop_require_default(require("../../exception"));
var _query = require("../../utilities/query");
var _types = require("../../types");
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
var _NodesQuery;
var trimDoubleQuotes = _occamentities.contentUtilities.trimDoubleQuotes;
var expressionNodesQueryNodeQuery = (0, _query.nodeQuery)("/expression/nodesQuery"), stringLiteralTerminalNodesQuery = (0, _query.nodeQuery)("/nodesQuery/@string-literal");
var _default = (0, _dom.domAssigned)((_NodesQuery = /*#__PURE__*/ function() {
    function NodesQuery(string, variable, query) {
        _class_call_check(this, NodesQuery);
        this.string = string;
        this.variable = variable;
        this.query = query;
    }
    _create_class(NodesQuery, [
        {
            key: "getString",
            value: function getString() {
                return this.string;
            }
        },
        {
            key: "getVariable",
            value: function getVariable() {
                return this.variable;
            }
        },
        {
            key: "getQuery",
            value: function getQuery() {
                return this.query;
            }
        },
        {
            key: "evaluate",
            value: function evaluate(context) {
                var expression;
                var nodesQueryString = this.string; ///
                context.trace("Evaluating the '".concat(nodesQueryString, "' nodes query..."));
                if (this.query === null) {
                    var message = "Cannot evaluate the '".concat(nodesQueryString, "' nodes query because its expression is malformed."), exception = _exception.default.fromMessage(message);
                    throw exception;
                }
                expression = this.variable.evaluate(context);
                var expressionType = expression.getType();
                if (expressionType !== _types.NODE_TYPE) {
                    var expressionString = expression.asString(context), message1 = "The ".concat(expressionString, " expression's '").concat(expressionType, "' type should be '").concat(_types.NODE_TYPE, "'."), exception1 = _exception.default.fromMessage(message1);
                    throw exception1;
                }
                var expressionNode = expression.getNode();
                if (expressionNode === null) {
                    var expressionString1 = expression.asString(context), message2 = "The ".concat(expressionString1, " expression's node is null."), exception2 = _exception.default.fromMessage(message2);
                    throw exception2;
                }
                var node;
                node = expressionNode; ///
                var nodes = this.query.execute(node);
                var Expression = _dom.default.Expression;
                expression = Expression.fromNodes(nodes, context);
                context.debug("...evaluated the '".concat(nodesQueryString, "' nodes query."));
                return expression;
            }
        }
    ], [
        {
            key: "fromExpressionNode",
            value: function fromExpressionNode(expressionNode, context) {
                var nodesQuery = null;
                var expressionNodesQueryNode = expressionNodesQueryNodeQuery(expressionNode);
                if (expressionNodesQueryNode !== null) {
                    var nodesQueryNode = expressionNodesQueryNode; ///
                    nodesQuery = nodesQueryFromNodesQueryNode(nodesQueryNode, context);
                }
                return nodesQuery;
            }
        }
    ]);
    return NodesQuery;
}(), _define_property(_NodesQuery, "name", "NodesQuery"), _NodesQuery));
function nodesQueryFromNodesQueryNode(nodesQueryNode, context) {
    var Variable = _dom.default.Variable, NodesQuery = _dom.default.NodesQuery, node = nodesQueryNode, string = context.nodeAsString(node), expressionString = expressionStringFromNodesQueryNode(nodesQueryNode, context), variable = Variable.fromNodesQueryNode(nodesQueryNode, context), query = _occamquery.Query.fromExpressionString(expressionString), nodesQuery = new NodesQuery(string, variable, query);
    return nodesQuery;
}
function expressionStringFromNodesQueryNode(nodesQueryNode, context) {
    var stringLiteralTerminalNode = stringLiteralTerminalNodesQuery(nodesQueryNode), stringLiteralTerminalNodeContent = stringLiteralTerminalNode.getContent(), expressionString = trimDoubleQuotes(stringLiteralTerminalNodeContent);
    return expressionString;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kb20vcXVlcnkvbm9kZXMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IFF1ZXJ5IH0gZnJvbSBcIm9jY2FtLXF1ZXJ5XCI7XG5pbXBvcnQgeyBjb250ZW50VXRpbGl0aWVzIH0gZnJvbSBcIm9jY2FtLWVudGl0aWVzXCI7XG5cbmltcG9ydCBkb20gZnJvbSBcIi4uLy4uL2RvbVwiO1xuaW1wb3J0IEV4Y2VwdGlvbiBmcm9tIFwiLi4vLi4vZXhjZXB0aW9uXCI7XG5cbmltcG9ydCB7IG5vZGVRdWVyeSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvcXVlcnlcIjtcbmltcG9ydCB7IE5PREVfVFlQRSB9IGZyb20gXCIuLi8uLi90eXBlc1wiO1xuaW1wb3J0IHsgZG9tQXNzaWduZWQgfSBmcm9tIFwiLi4vLi4vZG9tXCI7XG5cbmNvbnN0IHsgdHJpbURvdWJsZVF1b3RlcyB9ID0gY29udGVudFV0aWxpdGllcztcblxuY29uc3QgZXhwcmVzc2lvbk5vZGVzUXVlcnlOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvZXhwcmVzc2lvbi9ub2Rlc1F1ZXJ5XCIpLFxuICAgICAgc3RyaW5nTGl0ZXJhbFRlcm1pbmFsTm9kZXNRdWVyeSA9IG5vZGVRdWVyeShcIi9ub2Rlc1F1ZXJ5L0BzdHJpbmctbGl0ZXJhbFwiKTtcblxuZXhwb3J0IGRlZmF1bHQgZG9tQXNzaWduZWQoY2xhc3MgTm9kZXNRdWVyeSB7XG4gIGNvbnN0cnVjdG9yKHN0cmluZywgdmFyaWFibGUsIHF1ZXJ5KSB7XG4gICAgdGhpcy5zdHJpbmcgPSBzdHJpbmc7XG4gICAgdGhpcy52YXJpYWJsZSA9IHZhcmlhYmxlO1xuICAgIHRoaXMucXVlcnkgPSBxdWVyeTtcbiAgfVxuXG4gIGdldFN0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5zdHJpbmc7XG4gIH1cblxuICBnZXRWYXJpYWJsZSgpIHtcbiAgICByZXR1cm4gdGhpcy52YXJpYWJsZTtcbiAgfVxuXG4gIGdldFF1ZXJ5KCkge1xuICAgIHJldHVybiB0aGlzLnF1ZXJ5O1xuICB9XG5cbiAgZXZhbHVhdGUoY29udGV4dCkge1xuICAgIGxldCBleHByZXNzaW9uO1xuXG4gICAgY29uc3Qgbm9kZXNRdWVyeVN0cmluZyA9IHRoaXMuc3RyaW5nOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBFdmFsdWF0aW5nIHRoZSAnJHtub2Rlc1F1ZXJ5U3RyaW5nfScgbm9kZXMgcXVlcnkuLi5gKTtcblxuICAgIGlmICh0aGlzLnF1ZXJ5ID09PSBudWxsKSB7XG4gICAgICBjb25zdCBtZXNzYWdlID0gYENhbm5vdCBldmFsdWF0ZSB0aGUgJyR7bm9kZXNRdWVyeVN0cmluZ30nIG5vZGVzIHF1ZXJ5IGJlY2F1c2UgaXRzIGV4cHJlc3Npb24gaXMgbWFsZm9ybWVkLmAsXG4gICAgICAgICAgICBleGNlcHRpb24gPSBFeGNlcHRpb24uZnJvbU1lc3NhZ2UobWVzc2FnZSk7XG5cbiAgICAgIHRocm93IGV4Y2VwdGlvbjtcbiAgICB9XG5cbiAgICBleHByZXNzaW9uID0gdGhpcy52YXJpYWJsZS5ldmFsdWF0ZShjb250ZXh0KTtcblxuICAgIGNvbnN0IGV4cHJlc3Npb25UeXBlID0gZXhwcmVzc2lvbi5nZXRUeXBlKCk7XG5cbiAgICBpZiAoZXhwcmVzc2lvblR5cGUgIT09IE5PREVfVFlQRSkge1xuICAgICAgY29uc3QgZXhwcmVzc2lvblN0cmluZyA9IGV4cHJlc3Npb24uYXNTdHJpbmcoY29udGV4dCksXG4gICAgICAgICAgICBtZXNzYWdlID0gYFRoZSAke2V4cHJlc3Npb25TdHJpbmd9IGV4cHJlc3Npb24ncyAnJHtleHByZXNzaW9uVHlwZX0nIHR5cGUgc2hvdWxkIGJlICcke05PREVfVFlQRX0nLmAsXG4gICAgICAgICAgICBleGNlcHRpb24gPSBFeGNlcHRpb24uZnJvbU1lc3NhZ2UobWVzc2FnZSk7XG5cbiAgICAgIHRocm93IGV4Y2VwdGlvbjtcbiAgICB9XG5cbiAgICBjb25zdCBleHByZXNzaW9uTm9kZSA9IGV4cHJlc3Npb24uZ2V0Tm9kZSgpO1xuXG4gICAgaWYgKGV4cHJlc3Npb25Ob2RlID09PSBudWxsKSB7XG4gICAgICBjb25zdCBleHByZXNzaW9uU3RyaW5nID0gZXhwcmVzc2lvbi5hc1N0cmluZyhjb250ZXh0KSxcbiAgICAgICAgICAgIG1lc3NhZ2UgPSBgVGhlICR7ZXhwcmVzc2lvblN0cmluZ30gZXhwcmVzc2lvbidzIG5vZGUgaXMgbnVsbC5gLFxuICAgICAgICAgICAgZXhjZXB0aW9uID0gRXhjZXB0aW9uLmZyb21NZXNzYWdlKG1lc3NhZ2UpO1xuXG4gICAgICB0aHJvdyBleGNlcHRpb247XG4gICAgfVxuXG4gICAgbGV0IG5vZGU7XG5cbiAgICBub2RlID0gZXhwcmVzc2lvbk5vZGU7IC8vL1xuXG4gICAgY29uc3Qgbm9kZXMgPSB0aGlzLnF1ZXJ5LmV4ZWN1dGUobm9kZSk7XG5cbiAgICBjb25zdCB7IEV4cHJlc3Npb24gfSA9IGRvbTtcblxuICAgIGV4cHJlc3Npb24gPSBFeHByZXNzaW9uLmZyb21Ob2Rlcyhub2RlcywgY29udGV4dCk7XG5cbiAgICBjb250ZXh0LmRlYnVnKGAuLi5ldmFsdWF0ZWQgdGhlICcke25vZGVzUXVlcnlTdHJpbmd9JyBub2RlcyBxdWVyeS5gKTtcblxuICAgIHJldHVybiBleHByZXNzaW9uO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIk5vZGVzUXVlcnlcIjtcblxuICBzdGF0aWMgZnJvbUV4cHJlc3Npb25Ob2RlKGV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KSB7XG4gICAgbGV0IG5vZGVzUXVlcnkgPSBudWxsO1xuXG4gICAgY29uc3QgZXhwcmVzc2lvbk5vZGVzUXVlcnlOb2RlID0gZXhwcmVzc2lvbk5vZGVzUXVlcnlOb2RlUXVlcnkoZXhwcmVzc2lvbk5vZGUpO1xuXG4gICAgaWYgKGV4cHJlc3Npb25Ob2Rlc1F1ZXJ5Tm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3Qgbm9kZXNRdWVyeU5vZGUgPSBleHByZXNzaW9uTm9kZXNRdWVyeU5vZGU7IC8vL1xuXG4gICAgICBub2Rlc1F1ZXJ5ID0gbm9kZXNRdWVyeUZyb21Ob2Rlc1F1ZXJ5Tm9kZShub2Rlc1F1ZXJ5Tm9kZSwgY29udGV4dCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5vZGVzUXVlcnk7XG4gIH1cbn0pO1xuXG5mdW5jdGlvbiBub2Rlc1F1ZXJ5RnJvbU5vZGVzUXVlcnlOb2RlKG5vZGVzUXVlcnlOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgVmFyaWFibGUsIE5vZGVzUXVlcnkgfSA9IGRvbSxcbiAgICAgICAgbm9kZSA9IG5vZGVzUXVlcnlOb2RlLCAgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICBleHByZXNzaW9uU3RyaW5nID0gZXhwcmVzc2lvblN0cmluZ0Zyb21Ob2Rlc1F1ZXJ5Tm9kZShub2Rlc1F1ZXJ5Tm9kZSwgY29udGV4dCksXG4gICAgICAgIHZhcmlhYmxlID0gVmFyaWFibGUuZnJvbU5vZGVzUXVlcnlOb2RlKG5vZGVzUXVlcnlOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgcXVlcnkgPSBRdWVyeS5mcm9tRXhwcmVzc2lvblN0cmluZyhleHByZXNzaW9uU3RyaW5nKSxcbiAgICAgICAgbm9kZXNRdWVyeSA9IG5ldyBOb2Rlc1F1ZXJ5KHN0cmluZywgdmFyaWFibGUsIHF1ZXJ5KTtcblxuICByZXR1cm4gbm9kZXNRdWVyeTtcbn1cblxuZnVuY3Rpb24gZXhwcmVzc2lvblN0cmluZ0Zyb21Ob2Rlc1F1ZXJ5Tm9kZShub2Rlc1F1ZXJ5Tm9kZSwgY29udGV4dCkge1xuICBjb25zdCBzdHJpbmdMaXRlcmFsVGVybWluYWxOb2RlID0gc3RyaW5nTGl0ZXJhbFRlcm1pbmFsTm9kZXNRdWVyeShub2Rlc1F1ZXJ5Tm9kZSksXG4gICAgICAgIHN0cmluZ0xpdGVyYWxUZXJtaW5hbE5vZGVDb250ZW50ID0gc3RyaW5nTGl0ZXJhbFRlcm1pbmFsTm9kZS5nZXRDb250ZW50KCksXG4gICAgICAgIGV4cHJlc3Npb25TdHJpbmcgPSB0cmltRG91YmxlUXVvdGVzKHN0cmluZ0xpdGVyYWxUZXJtaW5hbE5vZGVDb250ZW50KTtcblxuICByZXR1cm4gZXhwcmVzc2lvblN0cmluZztcbn1cbiJdLCJuYW1lcyI6WyJ0cmltRG91YmxlUXVvdGVzIiwiY29udGVudFV0aWxpdGllcyIsImV4cHJlc3Npb25Ob2Rlc1F1ZXJ5Tm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5Iiwic3RyaW5nTGl0ZXJhbFRlcm1pbmFsTm9kZXNRdWVyeSIsImRvbUFzc2lnbmVkIiwiTm9kZXNRdWVyeSIsInN0cmluZyIsInZhcmlhYmxlIiwicXVlcnkiLCJnZXRTdHJpbmciLCJnZXRWYXJpYWJsZSIsImdldFF1ZXJ5IiwiZXZhbHVhdGUiLCJjb250ZXh0IiwiZXhwcmVzc2lvbiIsIm5vZGVzUXVlcnlTdHJpbmciLCJ0cmFjZSIsIm1lc3NhZ2UiLCJleGNlcHRpb24iLCJFeGNlcHRpb24iLCJmcm9tTWVzc2FnZSIsImV4cHJlc3Npb25UeXBlIiwiZ2V0VHlwZSIsIk5PREVfVFlQRSIsImV4cHJlc3Npb25TdHJpbmciLCJhc1N0cmluZyIsImV4cHJlc3Npb25Ob2RlIiwiZ2V0Tm9kZSIsIm5vZGUiLCJub2RlcyIsImV4ZWN1dGUiLCJFeHByZXNzaW9uIiwiZG9tIiwiZnJvbU5vZGVzIiwiZGVidWciLCJmcm9tRXhwcmVzc2lvbk5vZGUiLCJub2Rlc1F1ZXJ5IiwiZXhwcmVzc2lvbk5vZGVzUXVlcnlOb2RlIiwibm9kZXNRdWVyeU5vZGUiLCJub2Rlc1F1ZXJ5RnJvbU5vZGVzUXVlcnlOb2RlIiwibmFtZSIsIlZhcmlhYmxlIiwibm9kZUFzU3RyaW5nIiwiZXhwcmVzc2lvblN0cmluZ0Zyb21Ob2Rlc1F1ZXJ5Tm9kZSIsImZyb21Ob2Rlc1F1ZXJ5Tm9kZSIsIlF1ZXJ5IiwiZnJvbUV4cHJlc3Npb25TdHJpbmciLCJzdHJpbmdMaXRlcmFsVGVybWluYWxOb2RlIiwic3RyaW5nTGl0ZXJhbFRlcm1pbmFsTm9kZUNvbnRlbnQiLCJnZXRDb250ZW50Il0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFpQkE7OztlQUFBOzs7MEJBZnNCOzZCQUNXOzJEQUVqQjtnRUFDTTtxQkFFSTtxQkFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHMUIsSUFBTSxBQUFFQSxtQkFBcUJDLCtCQUFnQixDQUFyQ0Q7QUFFUixJQUFNRSxnQ0FBZ0NDLElBQUFBLGdCQUFTLEVBQUMsMkJBQzFDQyxrQ0FBa0NELElBQUFBLGdCQUFTLEVBQUM7SUFFbEQsV0FBZUUsSUFBQUEsZ0JBQVcsK0JBQUM7YUFBTUMsV0FDbkJDLE1BQU0sRUFBRUMsUUFBUSxFQUFFQyxLQUFLO2dDQURKSDtRQUU3QixJQUFJLENBQUNDLE1BQU0sR0FBR0E7UUFDZCxJQUFJLENBQUNDLFFBQVEsR0FBR0E7UUFDaEIsSUFBSSxDQUFDQyxLQUFLLEdBQUdBOzs7O1lBR2ZDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0gsTUFBTTtZQUNwQjs7O1lBRUFJLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0gsUUFBUTtZQUN0Qjs7O1lBRUFJLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0gsS0FBSztZQUNuQjs7O1lBRUFJLEtBQUFBO21CQUFBQSxTQUFBQSxTQUFTQyxPQUFPO2dCQUNkLElBQUlDO2dCQUVKLElBQU1DLG1CQUFtQixJQUFJLENBQUNULE1BQU0sRUFBRyxHQUFHO2dCQUUxQ08sUUFBUUcsS0FBSyxDQUFDLEFBQUMsbUJBQW1DLE9BQWpCRCxrQkFBaUI7Z0JBRWxELElBQUksSUFBSSxDQUFDUCxLQUFLLEtBQUssTUFBTTtvQkFDdkIsSUFBTVMsVUFBVSxBQUFDLHdCQUF3QyxPQUFqQkYsa0JBQWlCLHVEQUNuREcsWUFBWUMsa0JBQVMsQ0FBQ0MsV0FBVyxDQUFDSDtvQkFFeEMsTUFBTUM7Z0JBQ1I7Z0JBRUFKLGFBQWEsSUFBSSxDQUFDUCxRQUFRLENBQUNLLFFBQVEsQ0FBQ0M7Z0JBRXBDLElBQU1RLGlCQUFpQlAsV0FBV1EsT0FBTztnQkFFekMsSUFBSUQsbUJBQW1CRSxnQkFBUyxFQUFFO29CQUNoQyxJQUFNQyxtQkFBbUJWLFdBQVdXLFFBQVEsQ0FBQ1osVUFDdkNJLFdBQVUsQUFBQyxPQUF3Q0ksT0FBbENHLGtCQUFpQixtQkFBb0RELE9BQW5DRixnQkFBZSxzQkFBOEIsT0FBVkUsZ0JBQVMsRUFBQyxPQUNoR0wsYUFBWUMsa0JBQVMsQ0FBQ0MsV0FBVyxDQUFDSDtvQkFFeEMsTUFBTUM7Z0JBQ1I7Z0JBRUEsSUFBTVEsaUJBQWlCWixXQUFXYSxPQUFPO2dCQUV6QyxJQUFJRCxtQkFBbUIsTUFBTTtvQkFDM0IsSUFBTUYsb0JBQW1CVixXQUFXVyxRQUFRLENBQUNaLFVBQ3ZDSSxXQUFVLEFBQUMsT0FBdUIsT0FBakJPLG1CQUFpQixnQ0FDbENOLGFBQVlDLGtCQUFTLENBQUNDLFdBQVcsQ0FBQ0g7b0JBRXhDLE1BQU1DO2dCQUNSO2dCQUVBLElBQUlVO2dCQUVKQSxPQUFPRixnQkFBZ0IsR0FBRztnQkFFMUIsSUFBTUcsUUFBUSxJQUFJLENBQUNyQixLQUFLLENBQUNzQixPQUFPLENBQUNGO2dCQUVqQyxJQUFNLEFBQUVHLGFBQWVDLFlBQUcsQ0FBbEJEO2dCQUVSakIsYUFBYWlCLFdBQVdFLFNBQVMsQ0FBQ0osT0FBT2hCO2dCQUV6Q0EsUUFBUXFCLEtBQUssQ0FBQyxBQUFDLHFCQUFxQyxPQUFqQm5CLGtCQUFpQjtnQkFFcEQsT0FBT0Q7WUFDVDs7OztZQUlPcUIsS0FBQUE7bUJBQVAsU0FBT0EsbUJBQW1CVCxjQUFjLEVBQUViLE9BQU87Z0JBQy9DLElBQUl1QixhQUFhO2dCQUVqQixJQUFNQywyQkFBMkJwQyw4QkFBOEJ5QjtnQkFFL0QsSUFBSVcsNkJBQTZCLE1BQU07b0JBQ3JDLElBQU1DLGlCQUFpQkQsMEJBQTBCLEdBQUc7b0JBRXBERCxhQUFhRyw2QkFBNkJELGdCQUFnQnpCO2dCQUM1RDtnQkFFQSxPQUFPdUI7WUFDVDs7OztLQWRBLDhCQUFPSSxRQUFPO0FBaUJoQixTQUFTRCw2QkFBNkJELGNBQWMsRUFBRXpCLE9BQU87SUFDM0QsSUFBUTRCLFdBQXlCVCxZQUFHLENBQTVCUyxVQUFVcEMsYUFBZTJCLFlBQUcsQ0FBbEIzQixZQUNadUIsT0FBT1UsZ0JBQ1BoQyxTQUFTTyxRQUFRNkIsWUFBWSxDQUFDZCxPQUM5QkosbUJBQW1CbUIsbUNBQW1DTCxnQkFBZ0J6QixVQUN0RU4sV0FBV2tDLFNBQVNHLGtCQUFrQixDQUFDTixnQkFBZ0J6QixVQUN2REwsUUFBUXFDLGlCQUFLLENBQUNDLG9CQUFvQixDQUFDdEIsbUJBQ25DWSxhQUFhLElBQUkvQixXQUFXQyxRQUFRQyxVQUFVQztJQUVwRCxPQUFPNEI7QUFDVDtBQUVBLFNBQVNPLG1DQUFtQ0wsY0FBYyxFQUFFekIsT0FBTztJQUNqRSxJQUFNa0MsNEJBQTRCNUMsZ0NBQWdDbUMsaUJBQzVEVSxtQ0FBbUNELDBCQUEwQkUsVUFBVSxJQUN2RXpCLG1CQUFtQnpCLGlCQUFpQmlEO0lBRTFDLE9BQU94QjtBQUNUIn0=