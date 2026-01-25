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
var _elements = /*#__PURE__*/ _interop_require_wildcard(require("../../elements"));
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
var _default = (0, _elements.define)((_NodeQuery = /*#__PURE__*/ function() {
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
                var Expression = _elements.default.Expression;
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
    var Variable = _elements.default.Variable, NodeQuery = _elements.default.NodeQuery, node = nodeQueryNode, string = context.nodeAsString(node), expressionString = expressionStringFromNodeQueryNode(nodeQueryNode, context), variable = Variable.fromNodeQueryNode(nodeQueryNode, context), query = _occamquery.Query.fromExpressionString(expressionString), _$nodeQuery = new NodeQuery(string, variable, query);
    return _$nodeQuery;
}
function expressionStringFromNodeQueryNode(nodeQueryNode, context) {
    var stringLiteralTerminalNode = stringLiteralTerminalNodeQuery(nodeQueryNode), stringLiteralTerminalNodeContent = stringLiteralTerminalNode.getContent(), expressionString = trimDoubleQuotes(stringLiteralTerminalNodeContent);
    return expressionString;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L3F1ZXJ5L25vZGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IFF1ZXJ5IH0gZnJvbSBcIm9jY2FtLXF1ZXJ5XCI7XG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcbmltcG9ydCB7IGNvbnRlbnRVdGlsaXRpZXMgfSBmcm9tIFwib2NjYW0tZW50aXRpZXNcIjtcblxuaW1wb3J0IGVsZW1lbnRzIGZyb20gXCIuLi8uLi9lbGVtZW50c1wiO1xuaW1wb3J0IEV4Y2VwdGlvbiBmcm9tIFwiLi4vLi4vZXhjZXB0aW9uXCI7XG5cbmltcG9ydCB7IGRlZmluZSB9IGZyb20gXCIuLi8uLi9lbGVtZW50c1wiO1xuaW1wb3J0IHsgTk9ERV9UWVBFIH0gZnJvbSBcIi4uLy4uL3R5cGVzXCI7XG5pbXBvcnQgeyBub2RlUXVlcnkgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5cbmNvbnN0IHsgZmlyc3QgfSA9IGFycmF5VXRpbGl0aWVzLFxuICAgICAgeyB0cmltRG91YmxlUXVvdGVzIH0gPSBjb250ZW50VXRpbGl0aWVzO1xuXG5jb25zdCBleHByZXNzaW9uTm9kZVF1ZXJ5Tm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL2V4cHJlc3Npb24vbm9kZVF1ZXJ5XCIpLFxuICAgICAgc3RyaW5nTGl0ZXJhbFRlcm1pbmFsTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL25vZGVRdWVyeS9Ac3RyaW5nLWxpdGVyYWxcIik7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZShjbGFzcyBOb2RlUXVlcnkge1xuICBjb25zdHJ1Y3RvcihzdHJpbmcsIHZhcmlhYmxlLCBxdWVyeSkge1xuICAgIHRoaXMuc3RyaW5nID0gc3RyaW5nO1xuICAgIHRoaXMudmFyaWFibGUgPSB2YXJpYWJsZTtcbiAgICB0aGlzLnF1ZXJ5ID0gcXVlcnk7XG4gIH1cblxuICBnZXRTdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RyaW5nO1xuICB9XG5cbiAgZ2V0VmFyaWFibGUoKSB7XG4gICAgcmV0dXJuIHRoaXMudmFyaWFibGU7XG4gIH1cblxuICBnZXRRdWVyeSgpIHtcbiAgICByZXR1cm4gdGhpcy5xdWVyeTtcbiAgfVxuXG4gIGV2YWx1YXRlKGNvbnRleHQpIHtcbiAgICBsZXQgZXhwcmVzc2lvbjtcblxuICAgIGNvbnN0IG5vZGVRdWVyeVN0cmluZyA9IHRoaXMuc3RyaW5nOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBFdmFsdWF0aW5nIHRoZSAnJHtub2RlUXVlcnlTdHJpbmd9JyBub2RlIHF1ZXJ5Li4uYCk7XG5cbiAgICBpZiAodGhpcy5xdWVyeSA9PT0gbnVsbCkge1xuICAgICAgY29uc3QgbWVzc2FnZSA9IGBDYW5ub3QgZXZhbHVhdGUgdGhlICcke25vZGVRdWVyeVN0cmluZ30nIG5vZGUgcXVlcnkgYmVjYXVzZSBpdHMgZXhwcmVzc2lvbiBpcyBtYWxmb3JtZWQuYCxcbiAgICAgICAgICAgIGV4Y2VwdGlvbiA9IEV4Y2VwdGlvbi5mcm9tTWVzc2FnZShtZXNzYWdlKTtcblxuICAgICAgdGhyb3cgZXhjZXB0aW9uO1xuICAgIH1cblxuICAgIGV4cHJlc3Npb24gPSB0aGlzLnZhcmlhYmxlLmV2YWx1YXRlKGNvbnRleHQpO1xuXG4gICAgY29uc3QgZXhwcmVzc2lvblR5cGUgPSBleHByZXNzaW9uLmdldFR5cGUoKTtcblxuICAgIGlmIChleHByZXNzaW9uVHlwZSAhPT0gTk9ERV9UWVBFKSB7XG4gICAgICBjb25zdCBleHByZXNzaW9uU3RyaW5nID0gZXhwcmVzc2lvbi5hc1N0cmluZyhjb250ZXh0KSxcbiAgICAgICAgICAgIG1lc3NhZ2UgPSBgVGhlICR7ZXhwcmVzc2lvblN0cmluZ30gZXhwcmVzc2lvbidzICcke2V4cHJlc3Npb25UeXBlfScgdHlwZSBzaG91bGQgYmUgJyR7Tk9ERV9UWVBFfScuYCxcbiAgICAgICAgICAgIGV4Y2VwdGlvbiA9IEV4Y2VwdGlvbi5mcm9tTWVzc2FnZShtZXNzYWdlKTtcblxuICAgICAgdGhyb3cgZXhjZXB0aW9uO1xuICAgIH1cblxuICAgIGNvbnN0IGV4cHJlc3Npb25Ob2RlID0gZXhwcmVzc2lvbi5nZXROb2RlKCk7XG5cbiAgICBpZiAoZXhwcmVzc2lvbk5vZGUgPT09IG51bGwpIHtcbiAgICAgIGNvbnN0IGV4cHJlc3Npb25TdHJpbmcgPSBleHByZXNzaW9uLmFzU3RyaW5nKGNvbnRleHQpLFxuICAgICAgICAgICAgbWVzc2FnZSA9IGBUaGUgJHtleHByZXNzaW9uU3RyaW5nfSBleHByZXNzaW9uJ3Mgbm9kZSBpcyBudWxsLmAsXG4gICAgICAgICAgICBleGNlcHRpb24gPSBFeGNlcHRpb24uZnJvbU1lc3NhZ2UobWVzc2FnZSk7XG5cbiAgICAgIHRocm93IGV4Y2VwdGlvbjtcbiAgICB9XG5cbiAgICBsZXQgbm9kZTtcblxuICAgIG5vZGUgPSBleHByZXNzaW9uTm9kZTsgLy8vXG5cbiAgICBjb25zdCBub2RlcyA9IHRoaXMucXVlcnkuZXhlY3V0ZShub2RlKSxcbiAgICAgICAgICBub2Rlc0xlbmd0aCA9IG5vZGVzLmxlbmd0aDtcblxuICAgIGlmIChub2Rlc0xlbmd0aCAhPT0gMSkge1xuICAgICAgY29uc3QgbWVzc2FnZSA9IGBUaGUgbGVuZ3RoIG9mIHRoZSByZXR1cm5lZCBub2RlcyBpcyAke25vZGVzTGVuZ3RofSB3aGVuIGl0IHNob3VsZCBiZSAxLmAsXG4gICAgICAgICAgICBleGNlcHRpb24gPSBFeGNlcHRpb24uZnJvbU1lc3NhZ2UobWVzc2FnZSk7XG5cbiAgICAgIHRocm93IGV4Y2VwdGlvbjtcbiAgICB9XG5cbiAgICBjb25zdCBmaXJzdE5vZGUgPSBmaXJzdChub2Rlcyk7XG5cbiAgICBub2RlID0gZmlyc3ROb2RlOyAvLy9cblxuICAgIGNvbnN0IHsgRXhwcmVzc2lvbiB9ID0gZWxlbWVudHM7XG5cbiAgICBleHByZXNzaW9uID0gRXhwcmVzc2lvbi5mcm9tTm9kZShub2RlLCBjb250ZXh0KTtcblxuICAgIGNvbnRleHQuZGVidWcoYC4uLmV2YWx1YXRlZCB0aGUgJyR7bm9kZVF1ZXJ5U3RyaW5nfScgbm9kZSBxdWVyeS5gKTtcblxuICAgIHJldHVybiBleHByZXNzaW9uO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIk5vZGVRdWVyeVwiO1xuXG4gIHN0YXRpYyBmcm9tRXhwcmVzc2lvbk5vZGUoZXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpIHtcbiAgICBsZXQgbm9kZVF1ZXJ5ID0gbnVsbDtcblxuICAgIGNvbnN0IGV4cHJlc3Npb25Ob2RlUXVlcnlOb2RlID0gZXhwcmVzc2lvbk5vZGVRdWVyeU5vZGVRdWVyeShleHByZXNzaW9uTm9kZSk7XG5cbiAgICBpZiAoZXhwcmVzc2lvbk5vZGVRdWVyeU5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IG5vZGVRdWVyeU5vZGUgPSBleHByZXNzaW9uTm9kZVF1ZXJ5Tm9kZTsgLy8vXG5cbiAgICAgIG5vZGVRdWVyeSA9IG5vZGVRdWVyeUZyb21Ob2RlUXVlcnlOb2RlKG5vZGVRdWVyeU5vZGUsIGNvbnRleHQpO1xuICAgIH1cblxuICAgIHJldHVybiBub2RlUXVlcnk7XG4gIH1cbn0pO1xuXG5mdW5jdGlvbiBub2RlUXVlcnlGcm9tTm9kZVF1ZXJ5Tm9kZShub2RlUXVlcnlOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgVmFyaWFibGUsIE5vZGVRdWVyeSB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSBub2RlUXVlcnlOb2RlLCAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIGV4cHJlc3Npb25TdHJpbmcgPSBleHByZXNzaW9uU3RyaW5nRnJvbU5vZGVRdWVyeU5vZGUobm9kZVF1ZXJ5Tm9kZSwgY29udGV4dCksXG4gICAgICAgIHZhcmlhYmxlID0gVmFyaWFibGUuZnJvbU5vZGVRdWVyeU5vZGUobm9kZVF1ZXJ5Tm9kZSwgY29udGV4dCksXG4gICAgICAgIHF1ZXJ5ID0gUXVlcnkuZnJvbUV4cHJlc3Npb25TdHJpbmcoZXhwcmVzc2lvblN0cmluZyksXG4gICAgICAgIG5vZGVRdWVyeSA9IG5ldyBOb2RlUXVlcnkoc3RyaW5nLCB2YXJpYWJsZSwgcXVlcnkpO1xuXG4gIHJldHVybiBub2RlUXVlcnk7XG59XG5cbmZ1bmN0aW9uIGV4cHJlc3Npb25TdHJpbmdGcm9tTm9kZVF1ZXJ5Tm9kZShub2RlUXVlcnlOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHN0cmluZ0xpdGVyYWxUZXJtaW5hbE5vZGUgPSBzdHJpbmdMaXRlcmFsVGVybWluYWxOb2RlUXVlcnkobm9kZVF1ZXJ5Tm9kZSksXG4gICAgICAgIHN0cmluZ0xpdGVyYWxUZXJtaW5hbE5vZGVDb250ZW50ID0gc3RyaW5nTGl0ZXJhbFRlcm1pbmFsTm9kZS5nZXRDb250ZW50KCksXG4gICAgICAgIGV4cHJlc3Npb25TdHJpbmcgPSB0cmltRG91YmxlUXVvdGVzKHN0cmluZ0xpdGVyYWxUZXJtaW5hbE5vZGVDb250ZW50KTtcblxuICByZXR1cm4gZXhwcmVzc2lvblN0cmluZztcbn1cbiJdLCJuYW1lcyI6WyJmaXJzdCIsImFycmF5VXRpbGl0aWVzIiwidHJpbURvdWJsZVF1b3RlcyIsImNvbnRlbnRVdGlsaXRpZXMiLCJleHByZXNzaW9uTm9kZVF1ZXJ5Tm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5Iiwic3RyaW5nTGl0ZXJhbFRlcm1pbmFsTm9kZVF1ZXJ5IiwiZGVmaW5lIiwiTm9kZVF1ZXJ5Iiwic3RyaW5nIiwidmFyaWFibGUiLCJxdWVyeSIsImdldFN0cmluZyIsImdldFZhcmlhYmxlIiwiZ2V0UXVlcnkiLCJldmFsdWF0ZSIsImNvbnRleHQiLCJleHByZXNzaW9uIiwibm9kZVF1ZXJ5U3RyaW5nIiwidHJhY2UiLCJtZXNzYWdlIiwiZXhjZXB0aW9uIiwiRXhjZXB0aW9uIiwiZnJvbU1lc3NhZ2UiLCJleHByZXNzaW9uVHlwZSIsImdldFR5cGUiLCJOT0RFX1RZUEUiLCJleHByZXNzaW9uU3RyaW5nIiwiYXNTdHJpbmciLCJleHByZXNzaW9uTm9kZSIsImdldE5vZGUiLCJub2RlIiwibm9kZXMiLCJleGVjdXRlIiwibm9kZXNMZW5ndGgiLCJsZW5ndGgiLCJmaXJzdE5vZGUiLCJFeHByZXNzaW9uIiwiZWxlbWVudHMiLCJmcm9tTm9kZSIsImRlYnVnIiwiZnJvbUV4cHJlc3Npb25Ob2RlIiwiZXhwcmVzc2lvbk5vZGVRdWVyeU5vZGUiLCJub2RlUXVlcnlOb2RlIiwibm9kZVF1ZXJ5RnJvbU5vZGVRdWVyeU5vZGUiLCJuYW1lIiwiVmFyaWFibGUiLCJub2RlQXNTdHJpbmciLCJleHByZXNzaW9uU3RyaW5nRnJvbU5vZGVRdWVyeU5vZGUiLCJmcm9tTm9kZVF1ZXJ5Tm9kZSIsIlF1ZXJ5IiwiZnJvbUV4cHJlc3Npb25TdHJpbmciLCJzdHJpbmdMaXRlcmFsVGVybWluYWxOb2RlIiwic3RyaW5nTGl0ZXJhbFRlcm1pbmFsTm9kZUNvbnRlbnQiLCJnZXRDb250ZW50Il0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFtQkE7OztlQUFBOzs7MEJBakJzQjt5QkFDUzs2QkFDRTtnRUFFWjtnRUFDQztxQkFHSTtxQkFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFMUIsSUFBTSxBQUFFQSxRQUFVQyx5QkFBYyxDQUF4QkQsT0FDRixBQUFFRSxtQkFBcUJDLCtCQUFnQixDQUFyQ0Q7QUFFUixJQUFNRSwrQkFBK0JDLElBQUFBLGdCQUFTLEVBQUMsMEJBQ3pDQyxpQ0FBaUNELElBQUFBLGdCQUFTLEVBQUM7SUFFakQsV0FBZUUsSUFBQUEsZ0JBQU0sOEJBQUM7YUFBTUMsVUFDZEMsTUFBTSxFQUFFQyxRQUFRLEVBQUVDLEtBQUs7Z0NBRFRIO1FBRXhCLElBQUksQ0FBQ0MsTUFBTSxHQUFHQTtRQUNkLElBQUksQ0FBQ0MsUUFBUSxHQUFHQTtRQUNoQixJQUFJLENBQUNDLEtBQUssR0FBR0E7Ozs7WUFHZkMsS0FBQUE7bUJBQUFBLFNB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