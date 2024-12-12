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
var _necessary = require("necessary");
var _occamquery = require("occam-query");
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
var first = _necessary.arrayUtilities.first;
var nodeQueryNodeQuery = (0, _query.nodeQuery)("/assignment/nodeQuery"), expressionNodeQuery = (0, _query.nodeQuery)("/nodeQuery/expression");
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
            key: "call",
            value: function call(context) {
                var value;
                var nodeQueryString = this.string; ///
                context.trace("Calling the '".concat(nodeQueryString, "' node query..."));
                value = this.variable.call(context);
                var valueType = value.getType(), valueTypeNodeType = valueType === _types.NODE_TYPE;
                if (!valueTypeNodeType) {
                    var valueString = value.getString(), message = "The '".concat(valueString, "' value's '").concat(valueType, "' type should be 'Node'."), exception = _exception.default.fromMessage(message);
                    throw exception;
                }
                var valueNode = value.getNode();
                if (valueNode === null) {
                    var valueString1 = value.getString(), message1 = "The '".concat(valueString1, "' value's node is null."), exception1 = _exception.default.fromMessage(message1);
                    throw exception1;
                }
                var node;
                node = valueNode; ///
                var nodes = this.query.execute(node), nodesLength = nodes.length;
                if (nodesLength !== 1) {
                    var message2 = "The length of the returned nodes is ".concat(nodesLength, " when it should be 1."), exception2 = _exception.default.fromMessage(message2);
                    throw exception2;
                }
                var firstNode = first(nodes);
                node = firstNode; ///
                var Value = _dom.default.Value;
                value = Value.fromNode(node, context);
                return value;
            }
        }
    ], [
        {
            key: "fromAssignmentNode",
            value: function fromAssignmentNode(assigmentNode, context) {
                var _$nodeQuery = null;
                var nodeQueryNode = nodeQueryNodeQuery(assigmentNode);
                if (nodeQueryNode !== null) {
                    var Variable = _dom.default.Variable, node = nodeQueryNode, string = context.nodeAsString(node), expressionNode = expressionNodeQuery(nodeQueryNode), expression = _occamquery.Expression.fromExpressionNode(expressionNode), variable = Variable.fromNodeQueryNode(nodeQueryNode, context), query = _occamquery.Query.fromExpression(expression);
                    _$nodeQuery = new NodeQuery(string, variable, query);
                }
                return _$nodeQuery;
            }
        }
    ]);
    return NodeQuery;
}(), _define_property(_NodeQuery, "name", "NodeQuery"), _NodeQuery));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kb20vcXVlcnkvbm9kZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5pbXBvcnQgeyBRdWVyeSwgRXhwcmVzc2lvbiB9IGZyb20gXCJvY2NhbS1xdWVyeVwiO1xuXG5pbXBvcnQgZG9tIGZyb20gXCIuLi8uLi9kb21cIjtcbmltcG9ydCBFeGNlcHRpb24gZnJvbSBcIi4uLy4uL2V4Y2VwdGlvblwiO1xuXG5pbXBvcnQgeyBOT0RFX1RZUEUgfSBmcm9tIFwiLi4vLi4vdHlwZXNcIjtcbmltcG9ydCB7IG5vZGVRdWVyeSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvcXVlcnlcIjtcbmltcG9ydCB7IGRvbUFzc2lnbmVkIH0gZnJvbSBcIi4uLy4uL2RvbVwiO1xuXG5jb25zdCB7IGZpcnN0IH0gPSBhcnJheVV0aWxpdGllcztcblxuY29uc3Qgbm9kZVF1ZXJ5Tm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL2Fzc2lnbm1lbnQvbm9kZVF1ZXJ5XCIpLFxuICAgICAgZXhwcmVzc2lvbk5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9ub2RlUXVlcnkvZXhwcmVzc2lvblwiKTtcblxuZXhwb3J0IGRlZmF1bHQgZG9tQXNzaWduZWQoY2xhc3MgTm9kZVF1ZXJ5IHtcbiAgY29uc3RydWN0b3Ioc3RyaW5nLCB2YXJpYWJsZSwgcXVlcnkpIHtcbiAgICB0aGlzLnN0cmluZyA9IHN0cmluZztcbiAgICB0aGlzLnZhcmlhYmxlID0gdmFyaWFibGU7XG4gICAgdGhpcy5xdWVyeSA9IHF1ZXJ5O1xuICB9XG5cbiAgZ2V0U3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLnN0cmluZztcbiAgfVxuXG4gIGdldFZhcmlhYmxlKCkge1xuICAgIHJldHVybiB0aGlzLnZhcmlhYmxlO1xuICB9XG5cbiAgZ2V0UXVlcnkoKSB7XG4gICAgcmV0dXJuIHRoaXMucXVlcnk7XG4gIH1cblxuICBjYWxsKGNvbnRleHQpIHtcbiAgICBsZXQgdmFsdWU7XG5cbiAgICBjb25zdCBub2RlUXVlcnlTdHJpbmcgPSB0aGlzLnN0cmluZzsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgQ2FsbGluZyB0aGUgJyR7bm9kZVF1ZXJ5U3RyaW5nfScgbm9kZSBxdWVyeS4uLmApO1xuXG4gICAgdmFsdWUgPSB0aGlzLnZhcmlhYmxlLmNhbGwoY29udGV4dCk7XG5cbiAgICBjb25zdCB2YWx1ZVR5cGUgPSB2YWx1ZS5nZXRUeXBlKCksXG4gICAgICAgICAgdmFsdWVUeXBlTm9kZVR5cGUgPSAodmFsdWVUeXBlID09PSBOT0RFX1RZUEUpO1xuXG4gICAgaWYgKCF2YWx1ZVR5cGVOb2RlVHlwZSkge1xuICAgICAgY29uc3QgdmFsdWVTdHJpbmcgPSB2YWx1ZS5nZXRTdHJpbmcoKSxcbiAgICAgICAgICAgIG1lc3NhZ2UgPSBgVGhlICcke3ZhbHVlU3RyaW5nfScgdmFsdWUncyAnJHt2YWx1ZVR5cGV9JyB0eXBlIHNob3VsZCBiZSAnTm9kZScuYCxcbiAgICAgICAgICAgIGV4Y2VwdGlvbiA9IEV4Y2VwdGlvbi5mcm9tTWVzc2FnZShtZXNzYWdlKTtcblxuICAgICAgdGhyb3cgZXhjZXB0aW9uO1xuICAgIH1cblxuICAgIGNvbnN0IHZhbHVlTm9kZSA9IHZhbHVlLmdldE5vZGUoKTtcblxuICAgIGlmICh2YWx1ZU5vZGUgPT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHZhbHVlU3RyaW5nID0gdmFsdWUuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgICBtZXNzYWdlID0gYFRoZSAnJHt2YWx1ZVN0cmluZ30nIHZhbHVlJ3Mgbm9kZSBpcyBudWxsLmAsXG4gICAgICAgICAgICBleGNlcHRpb24gPSBFeGNlcHRpb24uZnJvbU1lc3NhZ2UobWVzc2FnZSk7XG5cbiAgICAgIHRocm93IGV4Y2VwdGlvbjtcbiAgICB9XG5cbiAgICBsZXQgbm9kZTtcblxuICAgIG5vZGUgPSB2YWx1ZU5vZGU7IC8vL1xuXG4gICAgY29uc3Qgbm9kZXMgPSB0aGlzLnF1ZXJ5LmV4ZWN1dGUobm9kZSksXG4gICAgICAgICAgbm9kZXNMZW5ndGggPSBub2Rlcy5sZW5ndGg7XG5cbiAgICBpZiAobm9kZXNMZW5ndGggIT09IDEpIHtcbiAgICAgIGNvbnN0IG1lc3NhZ2UgPSBgVGhlIGxlbmd0aCBvZiB0aGUgcmV0dXJuZWQgbm9kZXMgaXMgJHtub2Rlc0xlbmd0aH0gd2hlbiBpdCBzaG91bGQgYmUgMS5gLFxuICAgICAgICAgICAgZXhjZXB0aW9uID0gRXhjZXB0aW9uLmZyb21NZXNzYWdlKG1lc3NhZ2UpO1xuXG4gICAgICB0aHJvdyBleGNlcHRpb247XG4gICAgfVxuXG4gICAgY29uc3QgZmlyc3ROb2RlID0gZmlyc3Qobm9kZXMpO1xuXG4gICAgbm9kZSA9IGZpcnN0Tm9kZTsgLy8vXG5cbiAgICBjb25zdCB7IFZhbHVlIH0gPSBkb207XG5cbiAgICB2YWx1ZSA9IFZhbHVlLmZyb21Ob2RlKG5vZGUsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIk5vZGVRdWVyeVwiO1xuXG4gIHN0YXRpYyBmcm9tQXNzaWdubWVudE5vZGUoYXNzaWdtZW50Tm9kZSwgY29udGV4dCkge1xuICAgIGxldCBub2RlUXVlcnkgPSBudWxsO1xuXG4gICAgY29uc3Qgbm9kZVF1ZXJ5Tm9kZSA9IG5vZGVRdWVyeU5vZGVRdWVyeShhc3NpZ21lbnROb2RlKTtcblxuICAgIGlmIChub2RlUXVlcnlOb2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCB7IFZhcmlhYmxlIH0gPSBkb20sXG4gICAgICAgICAgICBub2RlID0gbm9kZVF1ZXJ5Tm9kZSwgLy8vXG4gICAgICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgICAgIGV4cHJlc3Npb25Ob2RlID0gZXhwcmVzc2lvbk5vZGVRdWVyeShub2RlUXVlcnlOb2RlKSxcbiAgICAgICAgICAgIGV4cHJlc3Npb24gPSBFeHByZXNzaW9uLmZyb21FeHByZXNzaW9uTm9kZShleHByZXNzaW9uTm9kZSksXG4gICAgICAgICAgICB2YXJpYWJsZSA9IFZhcmlhYmxlLmZyb21Ob2RlUXVlcnlOb2RlKG5vZGVRdWVyeU5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgICAgcXVlcnkgPSBRdWVyeS5mcm9tRXhwcmVzc2lvbihleHByZXNzaW9uKTtcblxuICAgICAgbm9kZVF1ZXJ5ID0gbmV3IE5vZGVRdWVyeShzdHJpbmcsIHZhcmlhYmxlLCBxdWVyeSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5vZGVRdWVyeTtcbiAgfVxufSk7XG4iXSwibmFtZXMiOlsiZmlyc3QiLCJhcnJheVV0aWxpdGllcyIsIm5vZGVRdWVyeU5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsImV4cHJlc3Npb25Ob2RlUXVlcnkiLCJkb21Bc3NpZ25lZCIsIk5vZGVRdWVyeSIsInN0cmluZyIsInZhcmlhYmxlIiwicXVlcnkiLCJnZXRTdHJpbmciLCJnZXRWYXJpYWJsZSIsImdldFF1ZXJ5IiwiY2FsbCIsImNvbnRleHQiLCJ2YWx1ZSIsIm5vZGVRdWVyeVN0cmluZyIsInRyYWNlIiwidmFsdWVUeXBlIiwiZ2V0VHlwZSIsInZhbHVlVHlwZU5vZGVUeXBlIiwiTk9ERV9UWVBFIiwidmFsdWVTdHJpbmciLCJtZXNzYWdlIiwiZXhjZXB0aW9uIiwiRXhjZXB0aW9uIiwiZnJvbU1lc3NhZ2UiLCJ2YWx1ZU5vZGUiLCJnZXROb2RlIiwibm9kZSIsIm5vZGVzIiwiZXhlY3V0ZSIsIm5vZGVzTGVuZ3RoIiwibGVuZ3RoIiwiZmlyc3ROb2RlIiwiVmFsdWUiLCJkb20iLCJmcm9tTm9kZSIsImZyb21Bc3NpZ25tZW50Tm9kZSIsImFzc2lnbWVudE5vZGUiLCJub2RlUXVlcnlOb2RlIiwiVmFyaWFibGUiLCJub2RlQXNTdHJpbmciLCJleHByZXNzaW9uTm9kZSIsImV4cHJlc3Npb24iLCJFeHByZXNzaW9uIiwiZnJvbUV4cHJlc3Npb25Ob2RlIiwiZnJv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