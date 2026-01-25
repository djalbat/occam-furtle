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
var _elements = /*#__PURE__*/ _interop_require_wildcard(require("../../elements"));
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
var _default = (0, _elements.define)((_NodesQuery = /*#__PURE__*/ function() {
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
                var Expression = _elements.default.Expression;
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
    var Variable = _elements.default.Variable, NodesQuery = _elements.default.NodesQuery, node = nodesQueryNode, string = context.nodeAsString(node), expressionString = expressionStringFromNodesQueryNode(nodesQueryNode, context), variable = Variable.fromNodesQueryNode(nodesQueryNode, context), query = _occamquery.Query.fromExpressionString(expressionString), nodesQuery = new NodesQuery(string, variable, query);
    return nodesQuery;
}
function expressionStringFromNodesQueryNode(nodesQueryNode, context) {
    var stringLiteralTerminalNode = stringLiteralTerminalNodesQuery(nodesQueryNode), stringLiteralTerminalNodeContent = stringLiteralTerminalNode.getContent(), expressionString = trimDoubleQuotes(stringLiteralTerminalNodeContent);
    return expressionString;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L3F1ZXJ5L25vZGVzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBRdWVyeSB9IGZyb20gXCJvY2NhbS1xdWVyeVwiO1xuaW1wb3J0IHsgY29udGVudFV0aWxpdGllcyB9IGZyb20gXCJvY2NhbS1lbnRpdGllc1wiO1xuXG5pbXBvcnQgZWxlbWVudHMgZnJvbSBcIi4uLy4uL2VsZW1lbnRzXCI7XG5pbXBvcnQgRXhjZXB0aW9uIGZyb20gXCIuLi8uLi9leGNlcHRpb25cIjtcblxuaW1wb3J0IHsgZGVmaW5lIH0gZnJvbSBcIi4uLy4uL2VsZW1lbnRzXCI7XG5pbXBvcnQgeyBub2RlUXVlcnkgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5pbXBvcnQgeyBOT0RFX1RZUEUgfSBmcm9tIFwiLi4vLi4vdHlwZXNcIjtcblxuY29uc3QgeyB0cmltRG91YmxlUXVvdGVzIH0gPSBjb250ZW50VXRpbGl0aWVzO1xuXG5jb25zdCBleHByZXNzaW9uTm9kZXNRdWVyeU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9leHByZXNzaW9uL25vZGVzUXVlcnlcIiksXG4gICAgICBzdHJpbmdMaXRlcmFsVGVybWluYWxOb2Rlc1F1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL25vZGVzUXVlcnkvQHN0cmluZy1saXRlcmFsXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmUoY2xhc3MgTm9kZXNRdWVyeSB7XG4gIGNvbnN0cnVjdG9yKHN0cmluZywgdmFyaWFibGUsIHF1ZXJ5KSB7XG4gICAgdGhpcy5zdHJpbmcgPSBzdHJpbmc7XG4gICAgdGhpcy52YXJpYWJsZSA9IHZhcmlhYmxlO1xuICAgIHRoaXMucXVlcnkgPSBxdWVyeTtcbiAgfVxuXG4gIGdldFN0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5zdHJpbmc7XG4gIH1cblxuICBnZXRWYXJpYWJsZSgpIHtcbiAgICByZXR1cm4gdGhpcy52YXJpYWJsZTtcbiAgfVxuXG4gIGdldFF1ZXJ5KCkge1xuICAgIHJldHVybiB0aGlzLnF1ZXJ5O1xuICB9XG5cbiAgZXZhbHVhdGUoY29udGV4dCkge1xuICAgIGxldCBleHByZXNzaW9uO1xuXG4gICAgY29uc3Qgbm9kZXNRdWVyeVN0cmluZyA9IHRoaXMuc3RyaW5nOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBFdmFsdWF0aW5nIHRoZSAnJHtub2Rlc1F1ZXJ5U3RyaW5nfScgbm9kZXMgcXVlcnkuLi5gKTtcblxuICAgIGlmICh0aGlzLnF1ZXJ5ID09PSBudWxsKSB7XG4gICAgICBjb25zdCBtZXNzYWdlID0gYENhbm5vdCBldmFsdWF0ZSB0aGUgJyR7bm9kZXNRdWVyeVN0cmluZ30nIG5vZGVzIHF1ZXJ5IGJlY2F1c2UgaXRzIGV4cHJlc3Npb24gaXMgbWFsZm9ybWVkLmAsXG4gICAgICAgICAgICBleGNlcHRpb24gPSBFeGNlcHRpb24uZnJvbU1lc3NhZ2UobWVzc2FnZSk7XG5cbiAgICAgIHRocm93IGV4Y2VwdGlvbjtcbiAgICB9XG5cbiAgICBleHByZXNzaW9uID0gdGhpcy52YXJpYWJsZS5ldmFsdWF0ZShjb250ZXh0KTtcblxuICAgIGNvbnN0IGV4cHJlc3Npb25UeXBlID0gZXhwcmVzc2lvbi5nZXRUeXBlKCk7XG5cbiAgICBpZiAoZXhwcmVzc2lvblR5cGUgIT09IE5PREVfVFlQRSkge1xuICAgICAgY29uc3QgZXhwcmVzc2lvblN0cmluZyA9IGV4cHJlc3Npb24uYXNTdHJpbmcoY29udGV4dCksXG4gICAgICAgICAgICBtZXNzYWdlID0gYFRoZSAke2V4cHJlc3Npb25TdHJpbmd9IGV4cHJlc3Npb24ncyAnJHtleHByZXNzaW9uVHlwZX0nIHR5cGUgc2hvdWxkIGJlICcke05PREVfVFlQRX0nLmAsXG4gICAgICAgICAgICBleGNlcHRpb24gPSBFeGNlcHRpb24uZnJvbU1lc3NhZ2UobWVzc2FnZSk7XG5cbiAgICAgIHRocm93IGV4Y2VwdGlvbjtcbiAgICB9XG5cbiAgICBjb25zdCBleHByZXNzaW9uTm9kZSA9IGV4cHJlc3Npb24uZ2V0Tm9kZSgpO1xuXG4gICAgaWYgKGV4cHJlc3Npb25Ob2RlID09PSBudWxsKSB7XG4gICAgICBjb25zdCBleHByZXNzaW9uU3RyaW5nID0gZXhwcmVzc2lvbi5hc1N0cmluZyhjb250ZXh0KSxcbiAgICAgICAgICAgIG1lc3NhZ2UgPSBgVGhlICR7ZXhwcmVzc2lvblN0cmluZ30gZXhwcmVzc2lvbidzIG5vZGUgaXMgbnVsbC5gLFxuICAgICAgICAgICAgZXhjZXB0aW9uID0gRXhjZXB0aW9uLmZyb21NZXNzYWdlKG1lc3NhZ2UpO1xuXG4gICAgICB0aHJvdyBleGNlcHRpb247XG4gICAgfVxuXG4gICAgbGV0IG5vZGU7XG5cbiAgICBub2RlID0gZXhwcmVzc2lvbk5vZGU7IC8vL1xuXG4gICAgY29uc3Qgbm9kZXMgPSB0aGlzLnF1ZXJ5LmV4ZWN1dGUobm9kZSk7XG5cbiAgICBjb25zdCB7IEV4cHJlc3Npb24gfSA9IGVsZW1lbnRzO1xuXG4gICAgZXhwcmVzc2lvbiA9IEV4cHJlc3Npb24uZnJvbU5vZGVzKG5vZGVzLCBjb250ZXh0KTtcblxuICAgIGNvbnRleHQuZGVidWcoYC4uLmV2YWx1YXRlZCB0aGUgJyR7bm9kZXNRdWVyeVN0cmluZ30nIG5vZGVzIHF1ZXJ5LmApO1xuXG4gICAgcmV0dXJuIGV4cHJlc3Npb247XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiTm9kZXNRdWVyeVwiO1xuXG4gIHN0YXRpYyBmcm9tRXhwcmVzc2lvbk5vZGUoZXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpIHtcbiAgICBsZXQgbm9kZXNRdWVyeSA9IG51bGw7XG5cbiAgICBjb25zdCBleHByZXNzaW9uTm9kZXNRdWVyeU5vZGUgPSBleHByZXNzaW9uTm9kZXNRdWVyeU5vZGVRdWVyeShleHByZXNzaW9uTm9kZSk7XG5cbiAgICBpZiAoZXhwcmVzc2lvbk5vZGVzUXVlcnlOb2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBub2Rlc1F1ZXJ5Tm9kZSA9IGV4cHJlc3Npb25Ob2Rlc1F1ZXJ5Tm9kZTsgLy8vXG5cbiAgICAgIG5vZGVzUXVlcnkgPSBub2Rlc1F1ZXJ5RnJvbU5vZGVzUXVlcnlOb2RlKG5vZGVzUXVlcnlOb2RlLCBjb250ZXh0KTtcbiAgICB9XG5cbiAgICByZXR1cm4gbm9kZXNRdWVyeTtcbiAgfVxufSk7XG5cbmZ1bmN0aW9uIG5vZGVzUXVlcnlGcm9tTm9kZXNRdWVyeU5vZGUobm9kZXNRdWVyeU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBWYXJpYWJsZSwgTm9kZXNRdWVyeSB9ID0gZWxlbWVudHMsXG4gICAgICAgIG5vZGUgPSBub2Rlc1F1ZXJ5Tm9kZSwgIC8vL1xuICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgZXhwcmVzc2lvblN0cmluZyA9IGV4cHJlc3Npb25TdHJpbmdGcm9tTm9kZXNRdWVyeU5vZGUobm9kZXNRdWVyeU5vZGUsIGNvbnRleHQpLFxuICAgICAgICB2YXJpYWJsZSA9IFZhcmlhYmxlLmZyb21Ob2Rlc1F1ZXJ5Tm9kZShub2Rlc1F1ZXJ5Tm9kZSwgY29udGV4dCksXG4gICAgICAgIHF1ZXJ5ID0gUXVlcnkuZnJvbUV4cHJlc3Npb25TdHJpbmcoZXhwcmVzc2lvblN0cmluZyksXG4gICAgICAgIG5vZGVzUXVlcnkgPSBuZXcgTm9kZXNRdWVyeShzdHJpbmcsIHZhcmlhYmxlLCBxdWVyeSk7XG5cbiAgcmV0dXJuIG5vZGVzUXVlcnk7XG59XG5cbmZ1bmN0aW9uIGV4cHJlc3Npb25TdHJpbmdGcm9tTm9kZXNRdWVyeU5vZGUobm9kZXNRdWVyeU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3Qgc3RyaW5nTGl0ZXJhbFRlcm1pbmFsTm9kZSA9IHN0cmluZ0xpdGVyYWxUZXJtaW5hbE5vZGVzUXVlcnkobm9kZXNRdWVyeU5vZGUpLFxuICAgICAgICBzdHJpbmdMaXRlcmFsVGVybWluYWxOb2RlQ29udGVudCA9IHN0cmluZ0xpdGVyYWxUZXJtaW5hbE5vZGUuZ2V0Q29udGVudCgpLFxuICAgICAgICBleHByZXNzaW9uU3RyaW5nID0gdHJpbURvdWJsZVF1b3RlcyhzdHJpbmdMaXRlcmFsVGVybWluYWxOb2RlQ29udGVudCk7XG5cbiAgcmV0dXJuIGV4cHJlc3Npb25TdHJpbmc7XG59XG4iXSwibmFtZXMiOlsidHJpbURvdWJsZVF1b3RlcyIsImNvbnRlbnRVdGlsaXRpZXMiLCJleHByZXNzaW9uTm9kZXNRdWVyeU5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsInN0cmluZ0xpdGVyYWxUZXJtaW5hbE5vZGVzUXVlcnkiLCJkZWZpbmUiLCJOb2Rlc1F1ZXJ5Iiwic3RyaW5nIiwidmFyaWFibGUiLCJxdWVyeSIsImdldFN0cmluZyIsImdldFZhcmlhYmxlIiwiZ2V0UXVlcnkiLCJldmFsdWF0ZSIsImNvbnRleHQiLCJleHByZXNzaW9uIiwibm9kZXNRdWVyeVN0cmluZyIsInRyYWNlIiwibWVzc2FnZSIsImV4Y2VwdGlvbiIsIkV4Y2VwdGlvbiIsImZyb21NZXNzYWdlIiwiZXhwcmVzc2lvblR5cGUiLCJnZXRUeXBlIiwiTk9ERV9UWVBFIiwiZXhwcmVzc2lvblN0cmluZyIsImFzU3RyaW5nIiwiZXhwcmVzc2lvbk5vZGUiLCJnZXROb2RlIiwibm9kZSIsIm5vZGVzIiwiZXhlY3V0ZSIsIkV4cHJlc3Npb24iLCJlbGVtZW50cyIsImZyb21Ob2RlcyIsImRlYnVnIiwiZnJvbUV4cHJlc3Npb25Ob2RlIiwibm9kZXNRdWVyeSIsImV4cHJlc3Npb25Ob2Rlc1F1ZXJ5Tm9kZSIsIm5vZGVzUXVlcnlOb2RlIiwibm9kZXNRdWVyeUZyb21Ob2Rlc1F1ZXJ5Tm9kZSIsIm5hbWUiLCJWYXJpYWJsZSIsIm5vZGVBc1N0cmluZyIsImV4cHJlc3Npb25TdHJpbmdGcm9tTm9kZXNRdWVyeU5vZGUiLCJmcm9tTm9kZXNRdWVyeU5vZGUiLCJRdWVyeSIsImZyb21FeHByZXNzaW9uU3RyaW5nIiwic3RyaW5nTGl0ZXJhbFRlcm1pbmFsTm9kZSIsInN0cmluZ0xpdGVyYWxUZXJtaW5hbE5vZGVDb250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