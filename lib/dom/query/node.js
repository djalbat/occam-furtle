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
var expressionNodeQuery = (0, _query.nodeQuery)("/nodeQuery/expression"), valueNodeQueryNodeQuery = (0, _query.nodeQuery)("/value/nodeQuery");
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
                var value;
                var nodeQueryString = this.string; ///
                context.trace("Evaluating the '".concat(nodeQueryString, "' node query..."));
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
                var nodes = this.query.execute(node), nodesLength = nodes.length;
                if (nodesLength !== 1) {
                    var message2 = "The length of the returned nodes is ".concat(nodesLength, " when it should be 1."), exception2 = _exception.default.fromMessage(message2);
                    throw exception2;
                }
                var firstNode = first(nodes);
                node = firstNode; ///
                var Value = _dom.default.Value;
                value = Value.fromNode(node, context);
                context.debug("...evaluated the '".concat(nodeQueryString, "' node query."));
                return value;
            }
        }
    ], [
        {
            key: "fromValueNode",
            value: function fromValueNode(valueNode, context) {
                var _$nodeQuery = null;
                var valueNodeQueryNode = valueNodeQueryNodeQuery(valueNode);
                if (valueNodeQueryNode !== null) {
                    var nodeQueryNode = valueNodeQueryNode; ///
                    _$nodeQuery = nodeQueryFromNodeQueryNode(nodeQueryNode, context);
                }
                return _$nodeQuery;
            }
        }
    ]);
    return NodeQuery;
}(), _define_property(_NodeQuery, "name", "NodeQuery"), _NodeQuery));
function nodeQueryFromNodeQueryNode(nodeQueryNode, context) {
    var Variable = _dom.default.Variable, NodeQuery = _dom.default.NodeQuery, node = nodeQueryNode, string = context.nodeAsString(node), expressionNode = expressionNodeQuery(nodeQueryNode), expression = _occamquery.Expression.fromExpressionNode(expressionNode), variable = Variable.fromNodeQueryNode(nodeQueryNode, context), query = _occamquery.Query.fromExpression(expression), _$nodeQuery = new NodeQuery(string, variable, query);
    return _$nodeQuery;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kb20vcXVlcnkvbm9kZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5pbXBvcnQgeyBRdWVyeSwgRXhwcmVzc2lvbiB9IGZyb20gXCJvY2NhbS1xdWVyeVwiO1xuXG5pbXBvcnQgZG9tIGZyb20gXCIuLi8uLi9kb21cIjtcbmltcG9ydCBFeGNlcHRpb24gZnJvbSBcIi4uLy4uL2V4Y2VwdGlvblwiO1xuXG5pbXBvcnQgeyBOT0RFX1RZUEUgfSBmcm9tIFwiLi4vLi4vdHlwZXNcIjtcbmltcG9ydCB7IG5vZGVRdWVyeSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvcXVlcnlcIjtcbmltcG9ydCB7IGRvbUFzc2lnbmVkIH0gZnJvbSBcIi4uLy4uL2RvbVwiO1xuXG5jb25zdCB7IGZpcnN0IH0gPSBhcnJheVV0aWxpdGllcztcblxuY29uc3QgZXhwcmVzc2lvbk5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9ub2RlUXVlcnkvZXhwcmVzc2lvblwiKSxcbiAgICAgIHZhbHVlTm9kZVF1ZXJ5Tm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3ZhbHVlL25vZGVRdWVyeVwiKTtcblxuZXhwb3J0IGRlZmF1bHQgZG9tQXNzaWduZWQoY2xhc3MgTm9kZVF1ZXJ5IHtcbiAgY29uc3RydWN0b3Ioc3RyaW5nLCB2YXJpYWJsZSwgcXVlcnkpIHtcbiAgICB0aGlzLnN0cmluZyA9IHN0cmluZztcbiAgICB0aGlzLnZhcmlhYmxlID0gdmFyaWFibGU7XG4gICAgdGhpcy5xdWVyeSA9IHF1ZXJ5O1xuICB9XG5cbiAgZ2V0U3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLnN0cmluZztcbiAgfVxuXG4gIGdldFZhcmlhYmxlKCkge1xuICAgIHJldHVybiB0aGlzLnZhcmlhYmxlO1xuICB9XG5cbiAgZ2V0UXVlcnkoKSB7XG4gICAgcmV0dXJuIHRoaXMucXVlcnk7XG4gIH1cblxuICBldmFsdWF0ZShjb250ZXh0KSB7XG4gICAgbGV0IHZhbHVlO1xuXG4gICAgY29uc3Qgbm9kZVF1ZXJ5U3RyaW5nID0gdGhpcy5zdHJpbmc7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYEV2YWx1YXRpbmcgdGhlICcke25vZGVRdWVyeVN0cmluZ30nIG5vZGUgcXVlcnkuLi5gKTtcblxuICAgIHZhbHVlID0gdGhpcy52YXJpYWJsZS5ldmFsdWF0ZShjb250ZXh0KTtcblxuICAgIGNvbnN0IHZhbHVlVHlwZSA9IHZhbHVlLmdldFR5cGUoKTtcblxuICAgIGlmICh2YWx1ZVR5cGUgIT09IE5PREVfVFlQRSkge1xuICAgICAgY29uc3QgdmFsdWVTdHJpbmcgPSB2YWx1ZS5hc1N0cmluZyhjb250ZXh0KSxcbiAgICAgICAgICAgIG1lc3NhZ2UgPSBgVGhlICR7dmFsdWVTdHJpbmd9IHZhbHVlJ3MgJyR7dmFsdWVUeXBlfScgdHlwZSBzaG91bGQgYmUgJyR7Tk9ERV9UWVBFfScuYCxcbiAgICAgICAgICAgIGV4Y2VwdGlvbiA9IEV4Y2VwdGlvbi5mcm9tTWVzc2FnZShtZXNzYWdlKTtcblxuICAgICAgdGhyb3cgZXhjZXB0aW9uO1xuICAgIH1cblxuICAgIGNvbnN0IHZhbHVlTm9kZSA9IHZhbHVlLmdldE5vZGUoKTtcblxuICAgIGlmICh2YWx1ZU5vZGUgPT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHZhbHVlU3RyaW5nID0gdmFsdWUuYXNTdHJpbmcoY29udGV4dCksXG4gICAgICAgICAgICBtZXNzYWdlID0gYFRoZSAke3ZhbHVlU3RyaW5nfSB2YWx1ZSdzIG5vZGUgaXMgbnVsbC5gLFxuICAgICAgICAgICAgZXhjZXB0aW9uID0gRXhjZXB0aW9uLmZyb21NZXNzYWdlKG1lc3NhZ2UpO1xuXG4gICAgICB0aHJvdyBleGNlcHRpb247XG4gICAgfVxuXG4gICAgbGV0IG5vZGU7XG5cbiAgICBub2RlID0gdmFsdWVOb2RlOyAvLy9cblxuICAgIGNvbnN0IG5vZGVzID0gdGhpcy5xdWVyeS5leGVjdXRlKG5vZGUpLFxuICAgICAgICAgIG5vZGVzTGVuZ3RoID0gbm9kZXMubGVuZ3RoO1xuXG4gICAgaWYgKG5vZGVzTGVuZ3RoICE9PSAxKSB7XG4gICAgICBjb25zdCBtZXNzYWdlID0gYFRoZSBsZW5ndGggb2YgdGhlIHJldHVybmVkIG5vZGVzIGlzICR7bm9kZXNMZW5ndGh9IHdoZW4gaXQgc2hvdWxkIGJlIDEuYCxcbiAgICAgICAgICAgIGV4Y2VwdGlvbiA9IEV4Y2VwdGlvbi5mcm9tTWVzc2FnZShtZXNzYWdlKTtcblxuICAgICAgdGhyb3cgZXhjZXB0aW9uO1xuICAgIH1cblxuICAgIGNvbnN0IGZpcnN0Tm9kZSA9IGZpcnN0KG5vZGVzKTtcblxuICAgIG5vZGUgPSBmaXJzdE5vZGU7IC8vL1xuXG4gICAgY29uc3QgeyBWYWx1ZSB9ID0gZG9tO1xuXG4gICAgdmFsdWUgPSBWYWx1ZS5mcm9tTm9kZShub2RlLCBjb250ZXh0KTtcblxuICAgIGNvbnRleHQuZGVidWcoYC4uLmV2YWx1YXRlZCB0aGUgJyR7bm9kZVF1ZXJ5U3RyaW5nfScgbm9kZSBxdWVyeS5gKTtcblxuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJOb2RlUXVlcnlcIjtcblxuICBzdGF0aWMgZnJvbVZhbHVlTm9kZSh2YWx1ZU5vZGUsIGNvbnRleHQpIHtcbiAgICBsZXQgbm9kZVF1ZXJ5ID0gbnVsbDtcblxuICAgIGNvbnN0IHZhbHVlTm9kZVF1ZXJ5Tm9kZSA9IHZhbHVlTm9kZVF1ZXJ5Tm9kZVF1ZXJ5KHZhbHVlTm9kZSk7XG5cbiAgICBpZiAodmFsdWVOb2RlUXVlcnlOb2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBub2RlUXVlcnlOb2RlID0gdmFsdWVOb2RlUXVlcnlOb2RlOyAvLy9cblxuICAgICAgbm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5RnJvbU5vZGVRdWVyeU5vZGUobm9kZVF1ZXJ5Tm9kZSwgY29udGV4dCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5vZGVRdWVyeTtcbiAgfVxufSk7XG5cbmZ1bmN0aW9uIG5vZGVRdWVyeUZyb21Ob2RlUXVlcnlOb2RlKG5vZGVRdWVyeU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBWYXJpYWJsZSwgTm9kZVF1ZXJ5IH0gPSBkb20sXG4gICAgICAgIG5vZGUgPSBub2RlUXVlcnlOb2RlLCAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIGV4cHJlc3Npb25Ob2RlID0gZXhwcmVzc2lvbk5vZGVRdWVyeShub2RlUXVlcnlOb2RlKSxcbiAgICAgICAgZXhwcmVzc2lvbiA9IEV4cHJlc3Npb24uZnJvbUV4cHJlc3Npb25Ob2RlKGV4cHJlc3Npb25Ob2RlKSxcbiAgICAgICAgdmFyaWFibGUgPSBWYXJpYWJsZS5mcm9tTm9kZVF1ZXJ5Tm9kZShub2RlUXVlcnlOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgcXVlcnkgPSBRdWVyeS5mcm9tRXhwcmVzc2lvbihleHByZXNzaW9uKSxcbiAgICAgICAgbm9kZVF1ZXJ5ID0gbmV3IE5vZGVRdWVyeShzdHJpbmcsIHZhcmlhYmxlLCBxdWVyeSk7XG5cbiAgcmV0dXJuIG5vZGVRdWVyeTtcbn1cbiJdLCJuYW1lcyI6WyJmaXJzdCIsImFycmF5VXRpbGl0aWVzIiwiZXhwcmVzc2lvbk5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsInZhbHVlTm9kZVF1ZXJ5Tm9kZVF1ZXJ5IiwiZG9tQXNzaWduZWQiLCJOb2RlUXVlcnkiLCJzdHJpbmciLCJ2YXJpYWJsZSIsInF1ZXJ5IiwiZ2V0U3RyaW5nIiwiZ2V0VmFyaWFibGUiLCJnZXRRdWVyeSIsImV2YWx1YXRlIiwiY29udGV4dCIsInZhbHVlIiwibm9kZVF1ZXJ5U3RyaW5nIiwidHJhY2UiLCJ2YWx1ZVR5cGUiLCJnZXRUeXBlIiwiTk9ERV9UWVBFIiwidmFsdWVTdHJpbmciLCJhc1N0cmluZyIsIm1lc3NhZ2UiLCJleGNlcHRpb24iLCJFeGNlcHRpb24iLCJmcm9tTWVzc2FnZSIsInZhbHVlTm9kZSIsImdldE5vZGUiLCJub2RlIiwibm9kZXMiLCJleGVjdXRlIiwibm9kZXNMZW5ndGgiLCJsZW5ndGgiLCJmaXJzdE5vZGUiLCJWYWx1ZSIsImRvbSIsImZyb21Ob2RlIiwiZGVidWciLCJmcm9tVmFsdWVOb2RlIiwidmFsdWVOb2RlUXVlcnlOb2RlIiwibm9kZVF1ZXJ5Tm9kZSIsIm5vZGVRdWVyeUZyb21Ob2RlUXVlcnlOb2RlIiwibmFtZSIsIlZhcmlhYmxlIiwibm9kZUFzU3RyaW5nIiwiZXhwcmVzc2lvbk5vZGUiLCJleHByZXNzaW9uIiwiRXhwcmVzc2lvbiIsImZyb21FeHByZXNzaW9uTm9kZSIsImZyb21Ob2RlUXVlcnlOb2RlIiwiUXVlcnkiLCJmcm9tRXhwcmVzc2lvbiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBaUJBOzs7ZUFBQTs7O3lCQWYrQjswQkFDRzsyREFFbEI7Z0VBQ007cUJBRUk7cUJBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRzFCLElBQU0sQUFBRUEsUUFBVUMseUJBQWMsQ0FBeEJEO0FBRVIsSUFBTUUsc0JBQXNCQyxJQUFBQSxnQkFBUyxFQUFDLDBCQUNoQ0MsMEJBQTBCRCxJQUFBQSxnQkFBUyxFQUFDO0lBRTFDLFdBQWVFLElBQUFBLGdCQUFXLDhCQUFDO2FBQU1DLFVBQ25CQyxNQUFNLEVBQUVDLFFBQVEsRUFBRUMsS0FBSztnQ0FESkg7UUFFN0IsSUFBSSxDQUFDQyxNQUFNLEdBQUdBO1FBQ2QsSUFBSSxDQUFDQyxRQUFRLEdBQUdBO1FBQ2hCLElBQUksQ0FBQ0MsS0FBSyxHQUFHQTs7OztZQUdmQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNILE1BQU07WUFDcEI7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNILFFBQVE7WUFDdEI7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FB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