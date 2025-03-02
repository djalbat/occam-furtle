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
var expressionNodeQuery = (0, _query.nodeQuery)("/nodesQuery/expression"), valueNodesQueryNodeQuery = (0, _query.nodeQuery)("/value/nodesQuery");
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
                value = this.variable.evaluate(context);
                var valueType = value.getType();
                if (valueType !== _types.NODE_TYPE) {
                    var valueString = value.asString(context), message = "The ".concat(valueString, " value's '").concat(valueType, "' type should be '").concat(_types.NODE_TYPE, "'."), exception = _exception.default.fromMessage(message);
                    throw exception;
                }
                var valueNode = value.getNode();
                if (valueNode === null) {
                    var valueString1 = value.asString(context), message1 = "The ".concat(valueString1, " value's node is null."), exception1 = _exception.default.fromMessage(message1);
                    throw exception1;
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
    var Variable = _dom.default.Variable, NodesQuery = _dom.default.NodesQuery, node = nodesQueryNode, string = context.nodeAsString(node), expressionNode = expressionNodeQuery(nodesQueryNode), expression = _occamquery.Expression.fromExpressionNode(expressionNode), variable = Variable.fromNodesQueryNode(nodesQueryNode, context), query = _occamquery.Query.fromExpression(expression), nodesQuery = new NodesQuery(string, variable, query);
    return nodesQuery;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kb20vcXVlcnkvbm9kZXMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IFF1ZXJ5LCBFeHByZXNzaW9uIH0gZnJvbSBcIm9jY2FtLXF1ZXJ5XCI7XG5cbmltcG9ydCBkb20gZnJvbSBcIi4uLy4uL2RvbVwiO1xuaW1wb3J0IEV4Y2VwdGlvbiBmcm9tIFwiLi4vLi4vZXhjZXB0aW9uXCI7XG5cbmltcG9ydCB7IG5vZGVRdWVyeSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvcXVlcnlcIjtcbmltcG9ydCB7IE5PREVfVFlQRSB9IGZyb20gXCIuLi8uLi90eXBlc1wiO1xuaW1wb3J0IHsgZG9tQXNzaWduZWQgfSBmcm9tIFwiLi4vLi4vZG9tXCI7XG5cbmNvbnN0IGV4cHJlc3Npb25Ob2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvbm9kZXNRdWVyeS9leHByZXNzaW9uXCIpLFxuICAgICAgdmFsdWVOb2Rlc1F1ZXJ5Tm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3ZhbHVlL25vZGVzUXVlcnlcIik7XG5cbmV4cG9ydCBkZWZhdWx0IGRvbUFzc2lnbmVkKGNsYXNzIE5vZGVzUXVlcnkge1xuICBjb25zdHJ1Y3RvcihzdHJpbmcsIHZhcmlhYmxlLCBxdWVyeSkge1xuICAgIHRoaXMuc3RyaW5nID0gc3RyaW5nO1xuICAgIHRoaXMudmFyaWFibGUgPSB2YXJpYWJsZTtcbiAgICB0aGlzLnF1ZXJ5ID0gcXVlcnk7XG4gIH1cblxuICBnZXRTdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RyaW5nO1xuICB9XG5cbiAgZ2V0VmFyaWFibGUoKSB7XG4gICAgcmV0dXJuIHRoaXMudmFyaWFibGU7XG4gIH1cblxuICBnZXRRdWVyeSgpIHtcbiAgICByZXR1cm4gdGhpcy5xdWVyeTtcbiAgfVxuXG4gIGV2YWx1YXRlKGNvbnRleHQpIHtcbiAgICBsZXQgdmFsdWU7XG5cbiAgICBjb25zdCBub2Rlc1F1ZXJ5U3RyaW5nID0gdGhpcy5zdHJpbmc7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYEV2YWx1YXRpbmcgdGhlICcke25vZGVzUXVlcnlTdHJpbmd9JyBub2RlcyBxdWVyeS4uLmApO1xuXG4gICAgdmFsdWUgPSB0aGlzLnZhcmlhYmxlLmV2YWx1YXRlKGNvbnRleHQpO1xuXG4gICAgY29uc3QgdmFsdWVUeXBlID0gdmFsdWUuZ2V0VHlwZSgpO1xuXG4gICAgaWYgKHZhbHVlVHlwZSAhPT0gTk9ERV9UWVBFKSB7XG4gICAgICBjb25zdCB2YWx1ZVN0cmluZyA9IHZhbHVlLmFzU3RyaW5nKGNvbnRleHQpLFxuICAgICAgICAgICAgbWVzc2FnZSA9IGBUaGUgJHt2YWx1ZVN0cmluZ30gdmFsdWUncyAnJHt2YWx1ZVR5cGV9JyB0eXBlIHNob3VsZCBiZSAnJHtOT0RFX1RZUEV9Jy5gLFxuICAgICAgICAgICAgZXhjZXB0aW9uID0gRXhjZXB0aW9uLmZyb21NZXNzYWdlKG1lc3NhZ2UpO1xuXG4gICAgICB0aHJvdyBleGNlcHRpb247XG4gICAgfVxuXG4gICAgY29uc3QgdmFsdWVOb2RlID0gdmFsdWUuZ2V0Tm9kZSgpO1xuXG4gICAgaWYgKHZhbHVlTm9kZSA9PT0gbnVsbCkge1xuICAgICAgY29uc3QgdmFsdWVTdHJpbmcgPSB2YWx1ZS5hc1N0cmluZyhjb250ZXh0KSxcbiAgICAgICAgICAgIG1lc3NhZ2UgPSBgVGhlICR7dmFsdWVTdHJpbmd9IHZhbHVlJ3Mgbm9kZSBpcyBudWxsLmAsXG4gICAgICAgICAgICBleGNlcHRpb24gPSBFeGNlcHRpb24uZnJvbU1lc3NhZ2UobWVzc2FnZSk7XG5cbiAgICAgIHRocm93IGV4Y2VwdGlvbjtcbiAgICB9XG5cbiAgICBsZXQgbm9kZTtcblxuICAgIG5vZGUgPSB2YWx1ZU5vZGU7IC8vL1xuXG4gICAgY29uc3Qgbm9kZXMgPSB0aGlzLnF1ZXJ5LmV4ZWN1dGUobm9kZSk7XG5cbiAgICBjb25zdCB7IFZhbHVlIH0gPSBkb207XG5cbiAgICB2YWx1ZSA9IFZhbHVlLmZyb21Ob2Rlcyhub2RlcywgY29udGV4dCk7XG5cbiAgICBjb250ZXh0LmRlYnVnKGAuLi5ldmFsdWF0ZWQgdGhlICcke25vZGVzUXVlcnlTdHJpbmd9JyBub2RlcyBxdWVyeS5gKTtcblxuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJOb2Rlc1F1ZXJ5XCI7XG5cbiAgc3RhdGljIGZyb21WYWx1ZU5vZGUodmFsdWVOb2RlLCBjb250ZXh0KSB7XG4gICAgbGV0IG5vZGVzUXVlcnkgPSBudWxsO1xuXG4gICAgY29uc3QgdmFsdWVOb2Rlc1F1ZXJ5Tm9kZSA9IHZhbHVlTm9kZXNRdWVyeU5vZGVRdWVyeSh2YWx1ZU5vZGUpO1xuXG4gICAgaWYgKHZhbHVlTm9kZXNRdWVyeU5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IG5vZGVzUXVlcnlOb2RlID0gdmFsdWVOb2Rlc1F1ZXJ5Tm9kZTsgLy8vXG5cbiAgICAgIG5vZGVzUXVlcnkgPSBub2Rlc1F1ZXJ5RnJvbU5vZGVzUXVlcnlOb2RlKG5vZGVzUXVlcnlOb2RlLCBjb250ZXh0KTtcbiAgICB9XG5cbiAgICByZXR1cm4gbm9kZXNRdWVyeTtcbiAgfVxufSk7XG5cbmZ1bmN0aW9uIG5vZGVzUXVlcnlGcm9tTm9kZXNRdWVyeU5vZGUobm9kZXNRdWVyeU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBWYXJpYWJsZSwgTm9kZXNRdWVyeSB9ID0gZG9tLFxuICAgICAgICBub2RlID0gbm9kZXNRdWVyeU5vZGUsICAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIGV4cHJlc3Npb25Ob2RlID0gZXhwcmVzc2lvbk5vZGVRdWVyeShub2Rlc1F1ZXJ5Tm9kZSksXG4gICAgICAgIGV4cHJlc3Npb24gPSBFeHByZXNzaW9uLmZyb21FeHByZXNzaW9uTm9kZShleHByZXNzaW9uTm9kZSksXG4gICAgICAgIHZhcmlhYmxlID0gVmFyaWFibGUuZnJvbU5vZGVzUXVlcnlOb2RlKG5vZGVzUXVlcnlOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgcXVlcnkgPSBRdWVyeS5mcm9tRXhwcmVzc2lvbihleHByZXNzaW9uKSxcbiAgICAgICAgbm9kZXNRdWVyeSA9IG5ldyBOb2Rlc1F1ZXJ5KHN0cmluZywgdmFyaWFibGUsIHF1ZXJ5KTtcblxuICByZXR1cm4gbm9kZXNRdWVyeTtcbn1cbiJdLCJuYW1lcyI6WyJleHByZXNzaW9uTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5IiwidmFsdWVOb2Rlc1F1ZXJ5Tm9kZVF1ZXJ5IiwiZG9tQXNzaWduZWQiLCJOb2Rlc1F1ZXJ5Iiwic3RyaW5nIiwidmFyaWFibGUiLCJxdWVyeSIsImdldFN0cmluZyIsImdldFZhcmlhYmxlIiwiZ2V0UXVlcnkiLCJldmFsdWF0ZSIsImNvbnRleHQiLCJ2YWx1ZSIsIm5vZGVzUXVlcnlTdHJpbmciLCJ0cmFjZSIsInZhbHVlVHlwZSIsImdldFR5cGUiLCJOT0RFX1RZUEUiLCJ2YWx1ZVN0cmluZyIsImFzU3RyaW5nIiwibWVzc2FnZSIsImV4Y2VwdGlvbiIsIkV4Y2VwdGlvbiIsImZyb21NZXNzYWdlIiwidmFsdWVOb2RlIiwiZ2V0Tm9kZSIsIm5vZGUiLCJub2RlcyIsImV4ZWN1dGUiLCJWYWx1ZSIsImRvbSIsImZyb21Ob2RlcyIsImRlYnVnIiwiZnJvbVZhbHVlTm9kZSIsIm5vZGVzUXVlcnkiLCJ2YWx1ZU5vZGVzUXVlcnlOb2RlIiwibm9kZXNRdWVyeU5vZGUiLCJub2Rlc1F1ZXJ5RnJvbU5vZGVzUXVlcnlOb2RlIiwibmFtZSIsIlZhcmlhYmxlIiwibm9kZUFzU3RyaW5nIiwiZXhwcmVzc2lvbk5vZGUiLCJleHByZXNzaW9uIiwiRXhwcmVzc2lvbiIsImZyb21FeHByZXNzaW9uTm9kZSIsImZyb21Ob2Rlc1F1ZXJ5Tm9kZSIsIlF1ZXJ5IiwiZnJvbUV4cHJlc3Npb24iXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQWNBOzs7ZUFBQTs7OzBCQVprQzsyREFFbEI7Z0VBQ007cUJBRUk7cUJBQ0E7Ozs7Ozs7Ozs7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