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
var _necessary = require("necessary");
var _occamentities = require("occam-entities");
var _dom = /*#__PURE__*/ _interop_require_wildcard(require("../../dom"));
var _exception = /*#__PURE__*/ _interop_require_default(require("../../exception"));
var _types = require("../../types");
var _query = require("../../utilities/query");
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
var _NodeQuery;
var first = _necessary.arrayUtilities.first, trimDoubleQuotes = _occamentities.contentUtilities.trimDoubleQuotes;
var expressionNodeQueryNodeQuery = (0, _query.nodeQuery)("/expression/nodeQuery"), stringLiteralTerminalNodeQuery = (0, _query.nodeQuery)("/nodeQuery/@string-literal");
var _default = (0, _dom.domAssigned)((_NodeQuery = /*#__PURE__*/ function() {
    function NodeQuery(string, variable, query) {
        _class_call_check(this, NodeQuery);
        this.string = string;
        this.variable = variable;
        this.query = query;
    }
    _create_class(NodeQuery, [
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
                var nodeQueryString = this.string; ///
                context.trace("Evaluating the '".concat(nodeQueryString, "' node query..."));
                if (this.query === null) {
                    var message = "Cannot evaluate the '".concat(nodeQueryString, "' node query because its expression is malformed."), exception = _exception.default.fromMessage(message);
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
                var nodes = this.query.execute(node), nodesLength = nodes.length;
                if (nodesLength !== 1) {
                    var message3 = "The length of the returned nodes is ".concat(nodesLength, " when it should be 1."), exception3 = _exception.default.fromMessage(message3);
                    throw exception3;
                }
                var firstNode = first(nodes);
                node = firstNode; ///
                var Expression = _dom.default.Expression;
                expression = Expression.fromNode(node, context);
                context.debug("...evaluated the '".concat(nodeQueryString, "' node query."));
                return expression;
            }
        }
    ], [
        {
            key: "fromExpressionNode",
            value: function fromExpressionNode(expressionNode, context) {
                var _$nodeQuery = null;
                var expressionNodeQueryNode = expressionNodeQueryNodeQuery(expressionNode);
                if (expressionNodeQueryNode !== null) {
                    var nodeQueryNode = expressionNodeQueryNode; ///
                    _$nodeQuery = nodeQueryFromNodeQueryNode(nodeQueryNode, context);
                }
                return _$nodeQuery;
            }
        }
    ]);
    return NodeQuery;
}(), _define_property(_NodeQuery, "name", "NodeQuery"), _NodeQuery));
function nodeQueryFromNodeQueryNode(nodeQueryNode, context) {
    var Variable = _dom.default.Variable, NodeQuery = _dom.default.NodeQuery, node = nodeQueryNode, string = context.nodeAsString(node), expressionString = expressionStringFromNodeQueryNode(nodeQueryNode, context), variable = Variable.fromNodeQueryNode(nodeQueryNode, context), query = _occamquery.Query.fromExpressionString(expressionString), _$nodeQuery = new NodeQuery(string, variable, query);
    return _$nodeQuery;
}
function expressionStringFromNodeQueryNode(nodeQueryNode, context) {
    var stringLiteralTerminalNode = stringLiteralTerminalNodeQuery(nodeQueryNode), stringLiteralTerminalNodeContent = stringLiteralTerminalNode.getContent(), expressionString = trimDoubleQuotes(stringLiteralTerminalNodeContent);
    return expressionString;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kb20vcXVlcnkvbm9kZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgUXVlcnkgfSBmcm9tIFwib2NjYW0tcXVlcnlcIjtcbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuaW1wb3J0IHsgY29udGVudFV0aWxpdGllcyB9IGZyb20gXCJvY2NhbS1lbnRpdGllc1wiO1xuXG5pbXBvcnQgZG9tIGZyb20gXCIuLi8uLi9kb21cIjtcbmltcG9ydCBFeGNlcHRpb24gZnJvbSBcIi4uLy4uL2V4Y2VwdGlvblwiO1xuXG5pbXBvcnQgeyBOT0RFX1RZUEUgfSBmcm9tIFwiLi4vLi4vdHlwZXNcIjtcbmltcG9ydCB7IG5vZGVRdWVyeSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvcXVlcnlcIjtcbmltcG9ydCB7IGRvbUFzc2lnbmVkIH0gZnJvbSBcIi4uLy4uL2RvbVwiO1xuXG5jb25zdCB7IGZpcnN0IH0gPSBhcnJheVV0aWxpdGllcyxcbiAgICAgIHsgdHJpbURvdWJsZVF1b3RlcyB9ID0gY29udGVudFV0aWxpdGllcztcblxuY29uc3QgZXhwcmVzc2lvbk5vZGVRdWVyeU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9leHByZXNzaW9uL25vZGVRdWVyeVwiKSxcbiAgICAgIHN0cmluZ0xpdGVyYWxUZXJtaW5hbE5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9ub2RlUXVlcnkvQHN0cmluZy1saXRlcmFsXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBkb21Bc3NpZ25lZChjbGFzcyBOb2RlUXVlcnkge1xuICBjb25zdHJ1Y3RvcihzdHJpbmcsIHZhcmlhYmxlLCBxdWVyeSkge1xuICAgIHRoaXMuc3RyaW5nID0gc3RyaW5nO1xuICAgIHRoaXMudmFyaWFibGUgPSB2YXJpYWJsZTtcbiAgICB0aGlzLnF1ZXJ5ID0gcXVlcnk7XG4gIH1cblxuICBnZXRTdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RyaW5nO1xuICB9XG5cbiAgZ2V0VmFyaWFibGUoKSB7XG4gICAgcmV0dXJuIHRoaXMudmFyaWFibGU7XG4gIH1cblxuICBnZXRRdWVyeSgpIHtcbiAgICByZXR1cm4gdGhpcy5xdWVyeTtcbiAgfVxuXG4gIGV2YWx1YXRlKGNvbnRleHQpIHtcbiAgICBsZXQgZXhwcmVzc2lvbjtcblxuICAgIGNvbnN0IG5vZGVRdWVyeVN0cmluZyA9IHRoaXMuc3RyaW5nOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBFdmFsdWF0aW5nIHRoZSAnJHtub2RlUXVlcnlTdHJpbmd9JyBub2RlIHF1ZXJ5Li4uYCk7XG5cbiAgICBpZiAodGhpcy5xdWVyeSA9PT0gbnVsbCkge1xuICAgICAgY29uc3QgbWVzc2FnZSA9IGBDYW5ub3QgZXZhbHVhdGUgdGhlICcke25vZGVRdWVyeVN0cmluZ30nIG5vZGUgcXVlcnkgYmVjYXVzZSBpdHMgZXhwcmVzc2lvbiBpcyBtYWxmb3JtZWQuYCxcbiAgICAgICAgICAgIGV4Y2VwdGlvbiA9IEV4Y2VwdGlvbi5mcm9tTWVzc2FnZShtZXNzYWdlKTtcblxuICAgICAgdGhyb3cgZXhjZXB0aW9uO1xuICAgIH1cblxuICAgIGV4cHJlc3Npb24gPSB0aGlzLnZhcmlhYmxlLmV2YWx1YXRlKGNvbnRleHQpO1xuXG4gICAgY29uc3QgZXhwcmVzc2lvblR5cGUgPSBleHByZXNzaW9uLmdldFR5cGUoKTtcblxuICAgIGlmIChleHByZXNzaW9uVHlwZSAhPT0gTk9ERV9UWVBFKSB7XG4gICAgICBjb25zdCBleHByZXNzaW9uU3RyaW5nID0gZXhwcmVzc2lvbi5hc1N0cmluZyhjb250ZXh0KSxcbiAgICAgICAgICAgIG1lc3NhZ2UgPSBgVGhlICR7ZXhwcmVzc2lvblN0cmluZ30gZXhwcmVzc2lvbidzICcke2V4cHJlc3Npb25UeXBlfScgdHlwZSBzaG91bGQgYmUgJyR7Tk9ERV9UWVBFfScuYCxcbiAgICAgICAgICAgIGV4Y2VwdGlvbiA9IEV4Y2VwdGlvbi5mcm9tTWVzc2FnZShtZXNzYWdlKTtcblxuICAgICAgdGhyb3cgZXhjZXB0aW9uO1xuICAgIH1cblxuICAgIGNvbnN0IGV4cHJlc3Npb25Ob2RlID0gZXhwcmVzc2lvbi5nZXROb2RlKCk7XG5cbiAgICBpZiAoZXhwcmVzc2lvbk5vZGUgPT09IG51bGwpIHtcbiAgICAgIGNvbnN0IGV4cHJlc3Npb25TdHJpbmcgPSBleHByZXNzaW9uLmFzU3RyaW5nKGNvbnRleHQpLFxuICAgICAgICAgICAgbWVzc2FnZSA9IGBUaGUgJHtleHByZXNzaW9uU3RyaW5nfSBleHByZXNzaW9uJ3Mgbm9kZSBpcyBudWxsLmAsXG4gICAgICAgICAgICBleGNlcHRpb24gPSBFeGNlcHRpb24uZnJvbU1lc3NhZ2UobWVzc2FnZSk7XG5cbiAgICAgIHRocm93IGV4Y2VwdGlvbjtcbiAgICB9XG5cbiAgICBsZXQgbm9kZTtcblxuICAgIG5vZGUgPSBleHByZXNzaW9uTm9kZTsgLy8vXG5cbiAgICBjb25zdCBub2RlcyA9IHRoaXMucXVlcnkuZXhlY3V0ZShub2RlKSxcbiAgICAgICAgICBub2Rlc0xlbmd0aCA9IG5vZGVzLmxlbmd0aDtcblxuICAgIGlmIChub2Rlc0xlbmd0aCAhPT0gMSkge1xuICAgICAgY29uc3QgbWVzc2FnZSA9IGBUaGUgbGVuZ3RoIG9mIHRoZSByZXR1cm5lZCBub2RlcyBpcyAke25vZGVzTGVuZ3RofSB3aGVuIGl0IHNob3VsZCBiZSAxLmAsXG4gICAgICAgICAgICBleGNlcHRpb24gPSBFeGNlcHRpb24uZnJvbU1lc3NhZ2UobWVzc2FnZSk7XG5cbiAgICAgIHRocm93IGV4Y2VwdGlvbjtcbiAgICB9XG5cbiAgICBjb25zdCBmaXJzdE5vZGUgPSBmaXJzdChub2Rlcyk7XG5cbiAgICBub2RlID0gZmlyc3ROb2RlOyAvLy9cblxuICAgIGNvbnN0IHsgRXhwcmVzc2lvbiB9ID0gZG9tO1xuXG4gICAgZXhwcmVzc2lvbiA9IEV4cHJlc3Npb24uZnJvbU5vZGUobm9kZSwgY29udGV4dCk7XG5cbiAgICBjb250ZXh0LmRlYnVnKGAuLi5ldmFsdWF0ZWQgdGhlICcke25vZGVRdWVyeVN0cmluZ30nIG5vZGUgcXVlcnkuYCk7XG5cbiAgICByZXR1cm4gZXhwcmVzc2lvbjtcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJOb2RlUXVlcnlcIjtcblxuICBzdGF0aWMgZnJvbUV4cHJlc3Npb25Ob2RlKGV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KSB7XG4gICAgbGV0IG5vZGVRdWVyeSA9IG51bGw7XG5cbiAgICBjb25zdCBleHByZXNzaW9uTm9kZVF1ZXJ5Tm9kZSA9IGV4cHJlc3Npb25Ob2RlUXVlcnlOb2RlUXVlcnkoZXhwcmVzc2lvbk5vZGUpO1xuXG4gICAgaWYgKGV4cHJlc3Npb25Ob2RlUXVlcnlOb2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBub2RlUXVlcnlOb2RlID0gZXhwcmVzc2lvbk5vZGVRdWVyeU5vZGU7IC8vL1xuXG4gICAgICBub2RlUXVlcnkgPSBub2RlUXVlcnlGcm9tTm9kZVF1ZXJ5Tm9kZShub2RlUXVlcnlOb2RlLCBjb250ZXh0KTtcbiAgICB9XG5cbiAgICByZXR1cm4gbm9kZVF1ZXJ5O1xuICB9XG59KTtcblxuZnVuY3Rpb24gbm9kZVF1ZXJ5RnJvbU5vZGVRdWVyeU5vZGUobm9kZVF1ZXJ5Tm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFZhcmlhYmxlLCBOb2RlUXVlcnkgfSA9IGRvbSxcbiAgICAgICAgbm9kZSA9IG5vZGVRdWVyeU5vZGUsIC8vL1xuICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgZXhwcmVzc2lvblN0cmluZyA9IGV4cHJlc3Npb25TdHJpbmdGcm9tTm9kZVF1ZXJ5Tm9kZShub2RlUXVlcnlOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgdmFyaWFibGUgPSBWYXJpYWJsZS5mcm9tTm9kZVF1ZXJ5Tm9kZShub2RlUXVlcnlOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgcXVlcnkgPSBRdWVyeS5mcm9tRXhwcmVzc2lvblN0cmluZyhleHByZXNzaW9uU3RyaW5nKSxcbiAgICAgICAgbm9kZVF1ZXJ5ID0gbmV3IE5vZGVRdWVyeShzdHJpbmcsIHZhcmlhYmxlLCBxdWVyeSk7XG5cbiAgcmV0dXJuIG5vZGVRdWVyeTtcbn1cblxuZnVuY3Rpb24gZXhwcmVzc2lvblN0cmluZ0Zyb21Ob2RlUXVlcnlOb2RlKG5vZGVRdWVyeU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3Qgc3RyaW5nTGl0ZXJhbFRlcm1pbmFsTm9kZSA9IHN0cmluZ0xpdGVyYWxUZXJtaW5hbE5vZGVRdWVyeShub2RlUXVlcnlOb2RlKSxcbiAgICAgICAgc3RyaW5nTGl0ZXJhbFRlcm1pbmFsTm9kZUNvbnRlbnQgPSBzdHJpbmdMaXRlcmFsVGVybWluYWxOb2RlLmdldENvbnRlbnQoKSxcbiAgICAgICAgZXhwcmVzc2lvblN0cmluZyA9IHRyaW1Eb3VibGVRdW90ZXMoc3RyaW5nTGl0ZXJhbFRlcm1pbmFsTm9kZUNvbnRlbnQpO1xuXG4gIHJldHVybiBleHByZXNzaW9uU3RyaW5nO1xufVxuIl0sIm5hbWVzIjpbImZpcnN0IiwiYXJyYXlVdGlsaXRpZXMiLCJ0cmltRG91YmxlUXVvdGVzIiwiY29udGVudFV0aWxpdGllcyIsImV4cHJlc3Npb25Ob2RlUXVlcnlOb2RlUXVlcnkiLCJub2RlUXVlcnkiLCJzdHJpbmdMaXRlcmFsVGVybWluYWxOb2RlUXVlcnkiLCJkb21Bc3NpZ25lZCIsIk5vZGVRdWVyeSIsInN0cmluZyIsInZhcmlhYmxlIiwicXVlcnkiLCJnZXRTdHJpbmciLCJnZXRWYXJpYWJsZSIsImdldFF1ZXJ5IiwiZXZhbHVhdGUiLCJjb250ZXh0IiwiZXhwcmVzc2lvbiIsIm5vZGVRdWVyeVN0cmluZyIsInRyYWNlIiwibWVzc2FnZSIsImV4Y2VwdGlvbiIsIkV4Y2VwdGlvbiIsImZyb21NZXNzYWdlIiwiZXhwcmVzc2lvblR5cGUiLCJnZXRUeXBlIiwiTk9ERV9UWVBFIiwiZXhwcmVzc2lvblN0cmluZyIsImFzU3RyaW5nIiwiZXhwcmVzc2lvbk5vZGUiLCJnZXROb2RlIiwibm9kZSIsIm5vZGVzIiwiZXhlY3V0ZSIsIm5vZGVzTGVuZ3RoIiwibGVuZ3RoIiwiZmlyc3ROb2RlIiwiRXhwcmVzc2lvbiIsImRvbSIsImZyb21Ob2RlIiwiZGVidWciLCJmcm9tRXhwcmVzc2lvbk5vZGUiLCJleHByZXNzaW9uTm9kZVF1ZXJ5Tm9kZSIsIm5vZGVRdWVyeU5vZGUiLCJub2RlUXVlcnlGcm9tTm9kZVF1ZXJ5Tm9kZSIsIm5hbWUiLCJWYXJpYWJsZSIsIm5vZGVBc1N0cmluZyIsImV4cHJlc3Npb25TdHJpbmdGcm9tTm9kZVF1ZXJ5Tm9kZSIsImZyb21Ob2RlUXVlcnlOb2RlIiwiUXVlcnkiLCJmcm9tRXhwcmVzc2lvblN0cmluZyIsInN0cmluZ0xpdGVyYWxUZXJtaW5hbE5vZGUiLCJzdHJpbmdMaXRlcmFsVGVybWluYWxOb2RlQ29udGVudCIsImdldENvbnRlbnQiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQW1CQTs7O2VBQUE7OzswQkFqQnNCO3lCQUNTOzZCQUNFOzJEQUVqQjtnRUFDTTtxQkFFSTtxQkFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHMUIsSUFBTSxBQUFFQSxRQUFVQyx5QkFBYyxDQUF4QkQsT0FDRixBQUFFRSxtQkFBcUJDLCtCQUFnQixDQUFyQ0Q7QUFFUixJQUFNRSwrQkFBK0JDLElBQUFBLGdCQUFTLEVBQUMsMEJBQ3pDQyxpQ0FBaUNELElBQUFBLGdCQUFTLEVBQUM7SUFFakQsV0FBZUUsSUFBQUEsZ0JBQVcsOEJBQUM7YUFBTUMsVUFDbkJDLE1BQU0sRUFBRUMsUUFBUSxFQUFFQyxLQUFLO2dDQURKSDtRQUU3QixJQUFJLENBQUNDLE1BQU0sR0FBR0E7UUFDZCxJQUFJLENBQUNDLFFBQVEsR0FBR0E7UUFDaEIsSUFBSSxDQUFDQyxLQUFLLEdBQUdBOzs7O1lBR2ZDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElB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