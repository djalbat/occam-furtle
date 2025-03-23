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
var valueNodesQueryNodeQuery = (0, _query.nodeQuery)("/value/nodesQuery"), stringLiteralTerminalNodesQuery = (0, _query.nodeQuery)("/nodesQuery/@string-literal");
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
                var value;
                var nodesQueryString = this.string; ///
                context.trace("Evaluating the '".concat(nodesQueryString, "' nodes query..."));
                if (this.query === null) {
                    var message = "Cannot evaluate the '".concat(nodesQueryString, "' nodes query because its expression is malformed."), exception = _exception.default.fromMessage(message);
                    throw exception;
                }
                value = this.variable.evaluate(context);
                var valueType = value.getType();
                if (valueType !== _types.NODE_TYPE) {
                    var valueString = value.asString(context), message1 = "The ".concat(valueString, " value's '").concat(valueType, "' type should be '").concat(_types.NODE_TYPE, "'."), exception1 = _exception.default.fromMessage(message1);
                    throw exception1;
                }
                var valueNode = value.getNode();
                if (valueNode === null) {
                    var valueString1 = value.asString(context), message2 = "The ".concat(valueString1, " value's node is null."), exception2 = _exception.default.fromMessage(message2);
                    throw exception2;
                }
                var node;
                node = valueNode; ///
                var nodes = this.query.execute(node);
                var Value = _dom.default.Value;
                value = Value.fromNodes(nodes, context);
                context.debug("...evaluated the '".concat(nodesQueryString, "' nodes query."));
                return value;
            }
        }
    ], [
        {
            key: "fromValueNode",
            value: function fromValueNode(valueNode, context) {
                var nodesQuery = null;
                var valueNodesQueryNode = valueNodesQueryNodeQuery(valueNode);
                if (valueNodesQueryNode !== null) {
                    var nodesQueryNode = valueNodesQueryNode; ///
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kb20vcXVlcnkvbm9kZXMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IFF1ZXJ5IH0gZnJvbSBcIm9jY2FtLXF1ZXJ5XCI7XG5pbXBvcnQgeyBjb250ZW50VXRpbGl0aWVzIH0gZnJvbSBcIm9jY2FtLWVudGl0aWVzXCI7XG5cbmltcG9ydCBkb20gZnJvbSBcIi4uLy4uL2RvbVwiO1xuaW1wb3J0IEV4Y2VwdGlvbiBmcm9tIFwiLi4vLi4vZXhjZXB0aW9uXCI7XG5cbmltcG9ydCB7IG5vZGVRdWVyeSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvcXVlcnlcIjtcbmltcG9ydCB7IE5PREVfVFlQRSB9IGZyb20gXCIuLi8uLi90eXBlc1wiO1xuaW1wb3J0IHsgZG9tQXNzaWduZWQgfSBmcm9tIFwiLi4vLi4vZG9tXCI7XG5cbmNvbnN0IHsgdHJpbURvdWJsZVF1b3RlcyB9ID0gY29udGVudFV0aWxpdGllcztcblxuY29uc3QgdmFsdWVOb2Rlc1F1ZXJ5Tm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3ZhbHVlL25vZGVzUXVlcnlcIiksXG4gICAgICBzdHJpbmdMaXRlcmFsVGVybWluYWxOb2Rlc1F1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL25vZGVzUXVlcnkvQHN0cmluZy1saXRlcmFsXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBkb21Bc3NpZ25lZChjbGFzcyBOb2Rlc1F1ZXJ5IHtcbiAgY29uc3RydWN0b3Ioc3RyaW5nLCB2YXJpYWJsZSwgcXVlcnkpIHtcbiAgICB0aGlzLnN0cmluZyA9IHN0cmluZztcbiAgICB0aGlzLnZhcmlhYmxlID0gdmFyaWFibGU7XG4gICAgdGhpcy5xdWVyeSA9IHF1ZXJ5O1xuICB9XG5cbiAgZ2V0U3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLnN0cmluZztcbiAgfVxuXG4gIGdldFZhcmlhYmxlKCkge1xuICAgIHJldHVybiB0aGlzLnZhcmlhYmxlO1xuICB9XG5cbiAgZ2V0UXVlcnkoKSB7XG4gICAgcmV0dXJuIHRoaXMucXVlcnk7XG4gIH1cblxuICBldmFsdWF0ZShjb250ZXh0KSB7XG4gICAgbGV0IHZhbHVlO1xuXG4gICAgY29uc3Qgbm9kZXNRdWVyeVN0cmluZyA9IHRoaXMuc3RyaW5nOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBFdmFsdWF0aW5nIHRoZSAnJHtub2Rlc1F1ZXJ5U3RyaW5nfScgbm9kZXMgcXVlcnkuLi5gKTtcblxuICAgIGlmICh0aGlzLnF1ZXJ5ID09PSBudWxsKSB7XG4gICAgICBjb25zdCBtZXNzYWdlID0gYENhbm5vdCBldmFsdWF0ZSB0aGUgJyR7bm9kZXNRdWVyeVN0cmluZ30nIG5vZGVzIHF1ZXJ5IGJlY2F1c2UgaXRzIGV4cHJlc3Npb24gaXMgbWFsZm9ybWVkLmAsXG4gICAgICAgICAgICBleGNlcHRpb24gPSBFeGNlcHRpb24uZnJvbU1lc3NhZ2UobWVzc2FnZSk7XG5cbiAgICAgIHRocm93IGV4Y2VwdGlvbjtcbiAgICB9XG5cbiAgICB2YWx1ZSA9IHRoaXMudmFyaWFibGUuZXZhbHVhdGUoY29udGV4dCk7XG5cbiAgICBjb25zdCB2YWx1ZVR5cGUgPSB2YWx1ZS5nZXRUeXBlKCk7XG5cbiAgICBpZiAodmFsdWVUeXBlICE9PSBOT0RFX1RZUEUpIHtcbiAgICAgIGNvbnN0IHZhbHVlU3RyaW5nID0gdmFsdWUuYXNTdHJpbmcoY29udGV4dCksXG4gICAgICAgICAgICBtZXNzYWdlID0gYFRoZSAke3ZhbHVlU3RyaW5nfSB2YWx1ZSdzICcke3ZhbHVlVHlwZX0nIHR5cGUgc2hvdWxkIGJlICcke05PREVfVFlQRX0nLmAsXG4gICAgICAgICAgICBleGNlcHRpb24gPSBFeGNlcHRpb24uZnJvbU1lc3NhZ2UobWVzc2FnZSk7XG5cbiAgICAgIHRocm93IGV4Y2VwdGlvbjtcbiAgICB9XG5cbiAgICBjb25zdCB2YWx1ZU5vZGUgPSB2YWx1ZS5nZXROb2RlKCk7XG5cbiAgICBpZiAodmFsdWVOb2RlID09PSBudWxsKSB7XG4gICAgICBjb25zdCB2YWx1ZVN0cmluZyA9IHZhbHVlLmFzU3RyaW5nKGNvbnRleHQpLFxuICAgICAgICAgICAgbWVzc2FnZSA9IGBUaGUgJHt2YWx1ZVN0cmluZ30gdmFsdWUncyBub2RlIGlzIG51bGwuYCxcbiAgICAgICAgICAgIGV4Y2VwdGlvbiA9IEV4Y2VwdGlvbi5mcm9tTWVzc2FnZShtZXNzYWdlKTtcblxuICAgICAgdGhyb3cgZXhjZXB0aW9uO1xuICAgIH1cblxuICAgIGxldCBub2RlO1xuXG4gICAgbm9kZSA9IHZhbHVlTm9kZTsgLy8vXG5cbiAgICBjb25zdCBub2RlcyA9IHRoaXMucXVlcnkuZXhlY3V0ZShub2RlKTtcblxuICAgIGNvbnN0IHsgVmFsdWUgfSA9IGRvbTtcblxuICAgIHZhbHVlID0gVmFsdWUuZnJvbU5vZGVzKG5vZGVzLCBjb250ZXh0KTtcblxuICAgIGNvbnRleHQuZGVidWcoYC4uLmV2YWx1YXRlZCB0aGUgJyR7bm9kZXNRdWVyeVN0cmluZ30nIG5vZGVzIHF1ZXJ5LmApO1xuXG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIk5vZGVzUXVlcnlcIjtcblxuICBzdGF0aWMgZnJvbVZhbHVlTm9kZSh2YWx1ZU5vZGUsIGNvbnRleHQpIHtcbiAgICBsZXQgbm9kZXNRdWVyeSA9IG51bGw7XG5cbiAgICBjb25zdCB2YWx1ZU5vZGVzUXVlcnlOb2RlID0gdmFsdWVOb2Rlc1F1ZXJ5Tm9kZVF1ZXJ5KHZhbHVlTm9kZSk7XG5cbiAgICBpZiAodmFsdWVOb2Rlc1F1ZXJ5Tm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3Qgbm9kZXNRdWVyeU5vZGUgPSB2YWx1ZU5vZGVzUXVlcnlOb2RlOyAvLy9cblxuICAgICAgbm9kZXNRdWVyeSA9IG5vZGVzUXVlcnlGcm9tTm9kZXNRdWVyeU5vZGUobm9kZXNRdWVyeU5vZGUsIGNvbnRleHQpO1xuICAgIH1cblxuICAgIHJldHVybiBub2Rlc1F1ZXJ5O1xuICB9XG59KTtcblxuZnVuY3Rpb24gbm9kZXNRdWVyeUZyb21Ob2Rlc1F1ZXJ5Tm9kZShub2Rlc1F1ZXJ5Tm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFZhcmlhYmxlLCBOb2Rlc1F1ZXJ5IH0gPSBkb20sXG4gICAgICAgIG5vZGUgPSBub2Rlc1F1ZXJ5Tm9kZSwgIC8vL1xuICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgZXhwcmVzc2lvblN0cmluZyA9IGV4cHJlc3Npb25TdHJpbmdGcm9tTm9kZXNRdWVyeU5vZGUobm9kZXNRdWVyeU5vZGUsIGNvbnRleHQpLFxuICAgICAgICB2YXJpYWJsZSA9IFZhcmlhYmxlLmZyb21Ob2Rlc1F1ZXJ5Tm9kZShub2Rlc1F1ZXJ5Tm9kZSwgY29udGV4dCksXG4gICAgICAgIHF1ZXJ5ID0gUXVlcnkuZnJvbUV4cHJlc3Npb25TdHJpbmcoZXhwcmVzc2lvblN0cmluZyksXG4gICAgICAgIG5vZGVzUXVlcnkgPSBuZXcgTm9kZXNRdWVyeShzdHJpbmcsIHZhcmlhYmxlLCBxdWVyeSk7XG5cbiAgcmV0dXJuIG5vZGVzUXVlcnk7XG59XG5cbmZ1bmN0aW9uIGV4cHJlc3Npb25TdHJpbmdGcm9tTm9kZXNRdWVyeU5vZGUobm9kZXNRdWVyeU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3Qgc3RyaW5nTGl0ZXJhbFRlcm1pbmFsTm9kZSA9IHN0cmluZ0xpdGVyYWxUZXJtaW5hbE5vZGVzUXVlcnkobm9kZXNRdWVyeU5vZGUpLFxuICAgICAgICBzdHJpbmdMaXRlcmFsVGVybWluYWxOb2RlQ29udGVudCA9IHN0cmluZ0xpdGVyYWxUZXJtaW5hbE5vZGUuZ2V0Q29udGVudCgpLFxuICAgICAgICBleHByZXNzaW9uU3RyaW5nID0gdHJpbURvdWJsZVF1b3RlcyhzdHJpbmdMaXRlcmFsVGVybWluYWxOb2RlQ29udGVudCk7XG5cbiAgcmV0dXJuIGV4cHJlc3Npb25TdHJpbmc7XG59XG4iXSwibmFtZXMiOlsidHJpbURvdWJsZVF1b3RlcyIsImNvbnRlbnRVdGlsaXRpZXMiLCJ2YWx1ZU5vZGVzUXVlcnlOb2RlUXVlcnkiLCJub2RlUXVlcnkiLCJzdHJpbmdMaXRlcmFsVGVybWluYWxOb2Rlc1F1ZXJ5IiwiZG9tQXNzaWduZWQiLCJOb2Rlc1F1ZXJ5Iiwic3RyaW5nIiwidmFyaWFibGUiLCJxdWVyeSIsImdldFN0cmluZyIsImdldFZhcmlhYmxlIiwiZ2V0UXVlcnkiLCJldmFsdWF0ZSIsImNvbnRleHQiLCJ2YWx1ZSIsIm5vZGVzUXVlcnlTdHJpbmciLCJ0cmFjZSIsIm1lc3NhZ2UiLCJleGNlcHRpb24iLCJFeGNlcHRpb24iLCJmcm9tTWVzc2FnZSIsInZhbHVlVHlwZSIsImdldFR5cGUiLCJOT0RFX1RZUEUiLCJ2YWx1ZVN0cmluZyIsImFzU3RyaW5nIiwidmFsdWVOb2RlIiwiZ2V0Tm9kZSIsIm5vZGUiLCJub2RlcyIsImV4ZWN1dGUiLCJWYWx1ZSIsImRvbSIsImZyb21Ob2RlcyIsImRlYnVnIiwiZnJvbVZhbHVlTm9kZSIsIm5vZGVzUXVlcnkiLCJ2YWx1ZU5vZGVzUXVlcnlOb2RlIiwibm9kZXNRdWVyeU5vZGUiLCJub2Rlc1F1ZXJ5RnJvbU5vZGVzUXVlcnlOb2RlIiwibmFtZSIsIlZhcmlhYmxlIiwibm9kZUFzU3RyaW5nIiwiZXhwcmVzc2lvblN0cmluZyIsImV4cHJlc3Npb25TdHJpbmdGcm9tTm9kZXNRdWVyeU5vZGUiLCJmcm9tTm9kZXNRdWVyeU5vZGUiLCJRdWVyeSIsImZyb21FeHByZXNzaW9uU3RyaW5nIiwic3RyaW5nTGl0ZXJhbFRlcm1pbmFsTm9kZSIsInN0cmluZ0xpdGVyYWxUZXJtaW5hbE5vZGVDb250ZW50IiwiZ2V0Q29udGVudCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBaUJBOzs7ZUFBQTs7OzBCQWZzQjs2QkFDVzsyREFFakI7Z0VBQ007cUJBRUk7cUJBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRzFCLElBQU0sQUFBRUEsbUJBQXFC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