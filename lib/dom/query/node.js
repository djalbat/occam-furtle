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
                if (value === null) {
                    var variableString = this.variable.getString(), message = "The '".concat(variableString, "' variable has not been assigned a value."), exception = _exception.default.fromMessage(message);
                    throw exception;
                }
                var valueType = value.getType(), valueTypeNodeType = valueType === _types.NODE_TYPE;
                if (!valueTypeNodeType) {
                    var valueString = value.getString(), message1 = "The '".concat(valueString, "' value's '").concat(valueType, "' type should be 'Node'."), exception1 = _exception.default.fromMessage(message1);
                    throw exception1;
                }
                var valueNode = value.getNode();
                if (valueNode === null) {
                    var valueString1 = value.getString(), message2 = "The '".concat(valueString1, "' value's node is null."), exception2 = _exception.default.fromMessage(message2);
                    throw exception2;
                }
                var node;
                node = valueNode; ///
                var nodes = this.query.execute(node), nodesLength = nodes.length;
                if (nodesLength !== 1) {
                    var message3 = "The length of the returned nodes is ".concat(nodesLength, " when it should be 1."), exception3 = _exception.default.fromMessage(message3);
                    throw exception3;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kb20vcXVlcnkvbm9kZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5pbXBvcnQgeyBRdWVyeSwgRXhwcmVzc2lvbiB9IGZyb20gXCJvY2NhbS1xdWVyeVwiO1xuXG5pbXBvcnQgZG9tIGZyb20gXCIuLi8uLi9kb21cIjtcbmltcG9ydCBFeGNlcHRpb24gZnJvbSBcIi4uLy4uL2V4Y2VwdGlvblwiO1xuXG5pbXBvcnQgeyBOT0RFX1RZUEUgfSBmcm9tIFwiLi4vLi4vdHlwZXNcIjtcbmltcG9ydCB7IG5vZGVRdWVyeSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvcXVlcnlcIjtcbmltcG9ydCB7IGRvbUFzc2lnbmVkIH0gZnJvbSBcIi4uLy4uL2RvbVwiO1xuXG5jb25zdCB7IGZpcnN0IH0gPSBhcnJheVV0aWxpdGllcztcblxuY29uc3Qgbm9kZVF1ZXJ5Tm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL2Fzc2lnbm1lbnQvbm9kZVF1ZXJ5XCIpLFxuICAgICAgZXhwcmVzc2lvbk5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9ub2RlUXVlcnkvZXhwcmVzc2lvblwiKTtcblxuZXhwb3J0IGRlZmF1bHQgZG9tQXNzaWduZWQoY2xhc3MgTm9kZVF1ZXJ5IHtcbiAgY29uc3RydWN0b3Ioc3RyaW5nLCB2YXJpYWJsZSwgcXVlcnkpIHtcbiAgICB0aGlzLnN0cmluZyA9IHN0cmluZztcbiAgICB0aGlzLnZhcmlhYmxlID0gdmFyaWFibGU7XG4gICAgdGhpcy5xdWVyeSA9IHF1ZXJ5O1xuICB9XG5cbiAgZ2V0U3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLnN0cmluZztcbiAgfVxuXG4gIGdldFZhcmlhYmxlKCkge1xuICAgIHJldHVybiB0aGlzLnZhcmlhYmxlO1xuICB9XG5cbiAgZ2V0UXVlcnkoKSB7XG4gICAgcmV0dXJuIHRoaXMucXVlcnk7XG4gIH1cblxuICBjYWxsKGNvbnRleHQpIHtcbiAgICBsZXQgdmFsdWU7XG5cbiAgICBjb25zdCBub2RlUXVlcnlTdHJpbmcgPSB0aGlzLnN0cmluZzsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgQ2FsbGluZyB0aGUgJyR7bm9kZVF1ZXJ5U3RyaW5nfScgbm9kZSBxdWVyeS4uLmApO1xuXG4gICAgdmFsdWUgPSB0aGlzLnZhcmlhYmxlLmNhbGwoY29udGV4dCk7XG5cbiAgICBpZiAodmFsdWUgPT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHZhcmlhYmxlU3RyaW5nID0gdGhpcy52YXJpYWJsZS5nZXRTdHJpbmcoKSxcbiAgICAgICAgICAgIG1lc3NhZ2UgPSBgVGhlICcke3ZhcmlhYmxlU3RyaW5nfScgdmFyaWFibGUgaGFzIG5vdCBiZWVuIGFzc2lnbmVkIGEgdmFsdWUuYCxcbiAgICAgICAgICAgIGV4Y2VwdGlvbiA9IEV4Y2VwdGlvbi5mcm9tTWVzc2FnZShtZXNzYWdlKTtcblxuICAgICAgdGhyb3cgZXhjZXB0aW9uO1xuICAgIH1cblxuICAgIGNvbnN0IHZhbHVlVHlwZSA9IHZhbHVlLmdldFR5cGUoKSxcbiAgICAgICAgICB2YWx1ZVR5cGVOb2RlVHlwZSA9ICh2YWx1ZVR5cGUgPT09IE5PREVfVFlQRSk7XG5cbiAgICBpZiAoIXZhbHVlVHlwZU5vZGVUeXBlKSB7XG4gICAgICBjb25zdCB2YWx1ZVN0cmluZyA9IHZhbHVlLmdldFN0cmluZygpLFxuICAgICAgICAgICAgbWVzc2FnZSA9IGBUaGUgJyR7dmFsdWVTdHJpbmd9JyB2YWx1ZSdzICcke3ZhbHVlVHlwZX0nIHR5cGUgc2hvdWxkIGJlICdOb2RlJy5gLFxuICAgICAgICAgICAgZXhjZXB0aW9uID0gRXhjZXB0aW9uLmZyb21NZXNzYWdlKG1lc3NhZ2UpO1xuXG4gICAgICB0aHJvdyBleGNlcHRpb247XG4gICAgfVxuXG4gICAgY29uc3QgdmFsdWVOb2RlID0gdmFsdWUuZ2V0Tm9kZSgpO1xuXG4gICAgaWYgKHZhbHVlTm9kZSA9PT0gbnVsbCkge1xuICAgICAgY29uc3QgdmFsdWVTdHJpbmcgPSB2YWx1ZS5nZXRTdHJpbmcoKSxcbiAgICAgICAgICAgIG1lc3NhZ2UgPSBgVGhlICcke3ZhbHVlU3RyaW5nfScgdmFsdWUncyBub2RlIGlzIG51bGwuYCxcbiAgICAgICAgICAgIGV4Y2VwdGlvbiA9IEV4Y2VwdGlvbi5mcm9tTWVzc2FnZShtZXNzYWdlKTtcblxuICAgICAgdGhyb3cgZXhjZXB0aW9uO1xuICAgIH1cblxuICAgIGxldCBub2RlO1xuXG4gICAgbm9kZSA9IHZhbHVlTm9kZTsgLy8vXG5cbiAgICBjb25zdCBub2RlcyA9IHRoaXMucXVlcnkuZXhlY3V0ZShub2RlKSxcbiAgICAgICAgICBub2Rlc0xlbmd0aCA9IG5vZGVzLmxlbmd0aDtcblxuICAgIGlmIChub2Rlc0xlbmd0aCAhPT0gMSkge1xuICAgICAgY29uc3QgbWVzc2FnZSA9IGBUaGUgbGVuZ3RoIG9mIHRoZSByZXR1cm5lZCBub2RlcyBpcyAke25vZGVzTGVuZ3RofSB3aGVuIGl0IHNob3VsZCBiZSAxLmAsXG4gICAgICAgICAgICBleGNlcHRpb24gPSBFeGNlcHRpb24uZnJvbU1lc3NhZ2UobWVzc2FnZSk7XG5cbiAgICAgIHRocm93IGV4Y2VwdGlvbjtcbiAgICB9XG5cbiAgICBjb25zdCBmaXJzdE5vZGUgPSBmaXJzdChub2Rlcyk7XG5cbiAgICBub2RlID0gZmlyc3ROb2RlOyAvLy9cblxuICAgIGNvbnN0IHsgVmFsdWUgfSA9IGRvbTtcblxuICAgIHZhbHVlID0gVmFsdWUuZnJvbU5vZGUobm9kZSwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiTm9kZVF1ZXJ5XCI7XG5cbiAgc3RhdGljIGZyb21Bc3NpZ25tZW50Tm9kZShhc3NpZ21lbnROb2RlLCBjb250ZXh0KSB7XG4gICAgbGV0IG5vZGVRdWVyeSA9IG51bGw7XG5cbiAgICBjb25zdCBub2RlUXVlcnlOb2RlID0gbm9kZVF1ZXJ5Tm9kZVF1ZXJ5KGFzc2lnbWVudE5vZGUpO1xuXG4gICAgaWYgKG5vZGVRdWVyeU5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHsgVmFyaWFibGUgfSA9IGRvbSxcbiAgICAgICAgICAgIG5vZGUgPSBub2RlUXVlcnlOb2RlLCAvLy9cbiAgICAgICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICAgICAgZXhwcmVzc2lvbk5vZGUgPSBleHByZXNzaW9uTm9kZVF1ZXJ5KG5vZGVRdWVyeU5vZGUpLFxuICAgICAgICAgICAgZXhwcmVzc2lvbiA9IEV4cHJlc3Npb24uZnJvbUV4cHJlc3Npb25Ob2RlKGV4cHJlc3Npb25Ob2RlKSxcbiAgICAgICAgICAgIHZhcmlhYmxlID0gVmFyaWFibGUuZnJvbU5vZGVRdWVyeU5vZGUobm9kZVF1ZXJ5Tm9kZSwgY29udGV4dCksXG4gICAgICAgICAgICBxdWVyeSA9IFF1ZXJ5LmZyb21FeHByZXNzaW9uKGV4cHJlc3Npb24pO1xuXG4gICAgICBub2RlUXVlcnkgPSBuZXcgTm9kZVF1ZXJ5KHN0cmluZywgdmFyaWFibGUsIHF1ZXJ5KTtcbiAgICB9XG5cbiAgICByZXR1cm4gbm9kZVF1ZXJ5O1xuICB9XG59KTtcbiJdLCJuYW1lcyI6WyJmaXJzdCIsImFycmF5VXRpbGl0aWVzIiwibm9kZVF1ZXJ5Tm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5IiwiZXhwcmVzc2lvbk5vZGVRdWVyeSIsImRvbUFzc2lnbmVkIiwiTm9kZVF1ZXJ5Iiwic3RyaW5nIiwidmFyaWFibGUiLCJxdWVyeSIsImdldFN0cmluZyIsImdldFZhcmlhYmxlIiwiZ2V0UXVlcnkiLCJjYWxsIiwiY29udGV4dCIsInZhbHVlIiwibm9kZVF1ZXJ5U3RyaW5nIiwidHJhY2UiLCJ2YXJpYWJsZVN0cmluZyIsIm1lc3NhZ2UiLCJleGNlcHRpb24iLCJFeGNlcHRpb24iLCJmcm9tTWVzc2FnZSIsInZhbHVlVHlwZSIsImdldFR5cGUiLCJ2YWx1ZVR5cGVOb2RlVHlwZSIsIk5PREVfVFlQRSIsInZhbHVlU3RyaW5nIiwidmFsdWVOb2RlIiwiZ2V0Tm9kZSIsIm5vZGUiLCJub2RlcyIsImV4ZWN1dGUiLCJub2Rlc0xlbmd0aCIsImxlbmd0aCIsImZpcnN0Tm9kZSIsIlZhbHVlIiwiZG9tIiwiZnJvbU5vZGUiLCJmcm9tQXNzaWdubWVudE5vZGUiLCJhc3NpZ21lbnROb2RlIiwibm9kZVF1ZXJ5Tm9kZSIsIlZhcmlhYmxlIiwibm9kZUFzU3RyaW5nIiwiZXhwcmVzc2lvbk5vZGUiLCJleHByZXNzaW9uIiwiRXhwcmVzc2lvbiIsImZyb21FeHByZXNzaW9uTm9kZSIsImZyb21Ob2RlUXVlcnlOb2RlIiwiUXVlcnkiLCJmcm9tRXhwcmVzc2lvbiIsIm5hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQWlCQTs7O2VBQUE7Ozt5QkFmK0I7MEJBQ0c7MkRBRWxCO2dFQUNNO3FCQUVJO3FCQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUcxQixJQUFNLEFBQUVBLFFBQVVDLHlCQUFjLENBQXhCRDtBQUVSLElBQU1FLHFCQUFxQkMsSUFBQUEsZ0JBQVMsRUFBQywwQkFDL0JDLHNCQUFzQkQsSUFBQUEsZ0JBQVMsRUFBQztJQUV0QyxXQUFlRSxJQUFBQSxnQkFBVyw4QkFBQzthQUFNQyxVQUNuQkMsTUFBTSxFQUFFQyxRQUFRLEVBQUVDLEtBQUs7Z0NBREpIO1FBRTdCLElBQUksQ0FBQ0MsTUFBTSxHQUFHQTtRQUNkLElBQUksQ0FBQ0MsUUFBUSxHQUFHQTtRQUNoQixJQUFJLENBQUNDLEtBQUssR0FBR0E7Ozs7WUFHZkMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSCxNQUFNO1lBQ3BCOzs7WUFFQUksS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSCxRQUFRO1lBQ3RCOzs7WUFFQUksS0FBQUE7bUJBQUFBLFNBQUFBO2dC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