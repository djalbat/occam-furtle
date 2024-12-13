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
            key: "resolve",
            value: function resolve(context) {
                var value;
                var nodeQueryString = this.string; ///
                context.trace("Resolving the '".concat(nodeQueryString, "' node query..."));
                value = this.variable.resolve(context);
                var valueType = value.getType();
                if (valueType !== _types.NODE_TYPE) {
                    var valueString = value.getString(), message = "The '".concat(valueString, "' value's '").concat(valueType, "' type should be '").concat(_types.NODE_TYPE, "'."), exception = _exception.default.fromMessage(message);
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
                context.debug("...resolved the '".concat(nodeQueryString, "' node query."));
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kb20vcXVlcnkvbm9kZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5pbXBvcnQgeyBRdWVyeSwgRXhwcmVzc2lvbiB9IGZyb20gXCJvY2NhbS1xdWVyeVwiO1xuXG5pbXBvcnQgZG9tIGZyb20gXCIuLi8uLi9kb21cIjtcbmltcG9ydCBFeGNlcHRpb24gZnJvbSBcIi4uLy4uL2V4Y2VwdGlvblwiO1xuXG5pbXBvcnQgeyBOT0RFX1RZUEUgfSBmcm9tIFwiLi4vLi4vdHlwZXNcIjtcbmltcG9ydCB7IG5vZGVRdWVyeSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvcXVlcnlcIjtcbmltcG9ydCB7IGRvbUFzc2lnbmVkIH0gZnJvbSBcIi4uLy4uL2RvbVwiO1xuXG5jb25zdCB7IGZpcnN0IH0gPSBhcnJheVV0aWxpdGllcztcblxuY29uc3Qgbm9kZVF1ZXJ5Tm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL2Fzc2lnbm1lbnQvbm9kZVF1ZXJ5XCIpLFxuICAgICAgZXhwcmVzc2lvbk5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9ub2RlUXVlcnkvZXhwcmVzc2lvblwiKTtcblxuZXhwb3J0IGRlZmF1bHQgZG9tQXNzaWduZWQoY2xhc3MgTm9kZVF1ZXJ5IHtcbiAgY29uc3RydWN0b3Ioc3RyaW5nLCB2YXJpYWJsZSwgcXVlcnkpIHtcbiAgICB0aGlzLnN0cmluZyA9IHN0cmluZztcbiAgICB0aGlzLnZhcmlhYmxlID0gdmFyaWFibGU7XG4gICAgdGhpcy5xdWVyeSA9IHF1ZXJ5O1xuICB9XG5cbiAgZ2V0U3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLnN0cmluZztcbiAgfVxuXG4gIGdldFZhcmlhYmxlKCkge1xuICAgIHJldHVybiB0aGlzLnZhcmlhYmxlO1xuICB9XG5cbiAgZ2V0UXVlcnkoKSB7XG4gICAgcmV0dXJuIHRoaXMucXVlcnk7XG4gIH1cblxuICByZXNvbHZlKGNvbnRleHQpIHtcbiAgICBsZXQgdmFsdWU7XG5cbiAgICBjb25zdCBub2RlUXVlcnlTdHJpbmcgPSB0aGlzLnN0cmluZzsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgUmVzb2x2aW5nIHRoZSAnJHtub2RlUXVlcnlTdHJpbmd9JyBub2RlIHF1ZXJ5Li4uYCk7XG5cbiAgICB2YWx1ZSA9IHRoaXMudmFyaWFibGUucmVzb2x2ZShjb250ZXh0KTtcblxuICAgIGNvbnN0IHZhbHVlVHlwZSA9IHZhbHVlLmdldFR5cGUoKTtcblxuICAgIGlmICh2YWx1ZVR5cGUgIT09IE5PREVfVFlQRSkge1xuICAgICAgY29uc3QgdmFsdWVTdHJpbmcgPSB2YWx1ZS5nZXRTdHJpbmcoKSxcbiAgICAgICAgICAgIG1lc3NhZ2UgPSBgVGhlICcke3ZhbHVlU3RyaW5nfScgdmFsdWUncyAnJHt2YWx1ZVR5cGV9JyB0eXBlIHNob3VsZCBiZSAnJHtOT0RFX1RZUEV9Jy5gLFxuICAgICAgICAgICAgZXhjZXB0aW9uID0gRXhjZXB0aW9uLmZyb21NZXNzYWdlKG1lc3NhZ2UpO1xuXG4gICAgICB0aHJvdyBleGNlcHRpb247XG4gICAgfVxuXG4gICAgY29uc3QgdmFsdWVOb2RlID0gdmFsdWUuZ2V0Tm9kZSgpO1xuXG4gICAgaWYgKHZhbHVlTm9kZSA9PT0gbnVsbCkge1xuICAgICAgY29uc3QgdmFsdWVTdHJpbmcgPSB2YWx1ZS5nZXRTdHJpbmcoKSxcbiAgICAgICAgICAgIG1lc3NhZ2UgPSBgVGhlICcke3ZhbHVlU3RyaW5nfScgdmFsdWUncyBub2RlIGlzIG51bGwuYCxcbiAgICAgICAgICAgIGV4Y2VwdGlvbiA9IEV4Y2VwdGlvbi5mcm9tTWVzc2FnZShtZXNzYWdlKTtcblxuICAgICAgdGhyb3cgZXhjZXB0aW9uO1xuICAgIH1cblxuICAgIGxldCBub2RlO1xuXG4gICAgbm9kZSA9IHZhbHVlTm9kZTsgLy8vXG5cbiAgICBjb25zdCBub2RlcyA9IHRoaXMucXVlcnkuZXhlY3V0ZShub2RlKSxcbiAgICAgICAgICBub2Rlc0xlbmd0aCA9IG5vZGVzLmxlbmd0aDtcblxuICAgIGlmIChub2Rlc0xlbmd0aCAhPT0gMSkge1xuICAgICAgY29uc3QgbWVzc2FnZSA9IGBUaGUgbGVuZ3RoIG9mIHRoZSByZXR1cm5lZCBub2RlcyBpcyAke25vZGVzTGVuZ3RofSB3aGVuIGl0IHNob3VsZCBiZSAxLmAsXG4gICAgICAgICAgICBleGNlcHRpb24gPSBFeGNlcHRpb24uZnJvbU1lc3NhZ2UobWVzc2FnZSk7XG5cbiAgICAgIHRocm93IGV4Y2VwdGlvbjtcbiAgICB9XG5cbiAgICBjb25zdCBmaXJzdE5vZGUgPSBmaXJzdChub2Rlcyk7XG5cbiAgICBub2RlID0gZmlyc3ROb2RlOyAvLy9cblxuICAgIGNvbnN0IHsgVmFsdWUgfSA9IGRvbTtcblxuICAgIHZhbHVlID0gVmFsdWUuZnJvbU5vZGUobm9kZSwgY29udGV4dCk7XG5cbiAgICBjb250ZXh0LmRlYnVnKGAuLi5yZXNvbHZlZCB0aGUgJyR7bm9kZVF1ZXJ5U3RyaW5nfScgbm9kZSBxdWVyeS5gKTtcblxuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJOb2RlUXVlcnlcIjtcblxuICBzdGF0aWMgZnJvbUFzc2lnbm1lbnROb2RlKGFzc2lnbWVudE5vZGUsIGNvbnRleHQpIHtcbiAgICBsZXQgbm9kZVF1ZXJ5ID0gbnVsbDtcblxuICAgIGNvbnN0IG5vZGVRdWVyeU5vZGUgPSBub2RlUXVlcnlOb2RlUXVlcnkoYXNzaWdtZW50Tm9kZSk7XG5cbiAgICBpZiAobm9kZVF1ZXJ5Tm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgeyBWYXJpYWJsZSB9ID0gZG9tLFxuICAgICAgICAgICAgbm9kZSA9IG5vZGVRdWVyeU5vZGUsIC8vL1xuICAgICAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgICAgICBleHByZXNzaW9uTm9kZSA9IGV4cHJlc3Npb25Ob2RlUXVlcnkobm9kZVF1ZXJ5Tm9kZSksXG4gICAgICAgICAgICBleHByZXNzaW9uID0gRXhwcmVzc2lvbi5mcm9tRXhwcmVzc2lvbk5vZGUoZXhwcmVzc2lvbk5vZGUpLFxuICAgICAgICAgICAgdmFyaWFibGUgPSBWYXJpYWJsZS5mcm9tTm9kZVF1ZXJ5Tm9kZShub2RlUXVlcnlOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgICAgIHF1ZXJ5ID0gUXVlcnkuZnJvbUV4cHJlc3Npb24oZXhwcmVzc2lvbik7XG5cbiAgICAgIG5vZGVRdWVyeSA9IG5ldyBOb2RlUXVlcnkoc3RyaW5nLCB2YXJpYWJsZSwgcXVlcnkpO1xuICAgIH1cblxuICAgIHJldHVybiBub2RlUXVlcnk7XG4gIH1cbn0pO1xuIl0sIm5hbWVzIjpbImZpcnN0IiwiYXJyYXlVdGlsaXRpZXMiLCJub2RlUXVlcnlOb2RlUXVlcnkiLCJub2RlUXVlcnkiLCJleHByZXNzaW9uTm9kZVF1ZXJ5IiwiZG9tQXNzaWduZWQiLCJOb2RlUXVlcnkiLCJzdHJpbmciLCJ2YXJpYWJsZSIsInF1ZXJ5IiwiZ2V0U3RyaW5nIiwiZ2V0VmFyaWFibGUiLCJnZXRRdWVyeSIsInJlc29sdmUiLCJjb250ZXh0IiwidmFsdWUiLCJub2RlUXVlcnlTdHJpbmciLCJ0cmFjZSIsInZhbHVlVHlwZSIsImdldFR5cGUiLCJOT0RFX1RZUEUiLCJ2YWx1ZVN0cmluZyIsIm1lc3NhZ2UiLCJleGNlcHRpb24iLCJFeGNlcHRpb24iLCJmcm9tTWVzc2FnZSIsInZhbHVlTm9kZSIsImdldE5vZGUiLCJub2RlIiwibm9kZXMiLCJleGVjdXRlIiwibm9kZXNMZW5ndGgiLCJsZW5ndGgiLCJmaXJzdE5vZGUiLCJWYWx1ZSIsImRvbSIsImZyb21Ob2RlIiwiZGVidWciLCJmcm9tQXNzaWdubWVudE5vZGUiLCJhc3NpZ21lbnROb2RlIiwibm9kZVF1ZXJ5Tm9kZSIsIlZhcmlhYmxlIiwibm9kZUFzU3RyaW5nIiwiZXhwcmVzc2lvbk5vZGUiLCJleHByZXNzaW9uIiwiRXhwcmVzc2lvbiIsImZyb21FeHByZXNzaW9uTm9kZSIsImZyb21Ob2RlUXVlcnlOb2RlIiwiUXVlcnkiLCJmcm9tRXhwcmVzc2lvbiIsIm5hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQWlCQTs7O2VBQUE7Ozt5QkFmK0I7MEJBQ0c7MkRBRWxCO2dFQUNNO3FCQUVJO3FCQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUcxQixJQUFNLEFBQUVBLFFBQVVDLHlCQUFjLENBQXhCRDtBQUVSLElBQU1FLHFCQUFxQkMsSUFBQUEsZ0JBQVMsRUFBQywwQkFDL0JDLHNCQUFzQkQsSUFBQUEsZ0JBQVMsRUFBQztJQUV0QyxXQUFlRSxJQUFBQSxnQkFBVyw4QkFBQzthQUFNQyxVQUNuQkMsTUFBTSxFQUFFQyxRQUFRLEVBQUVDLEtBQUs7Z0NBREpIO1FBRTdCLElBQUksQ0FBQ0MsTUFBTSxHQUFHQTtRQUNkLElBQUksQ0FBQ0MsUUFBUSxHQUFHQTtRQUNoQixJQUFJLENBQUNDLEtBQUssR0FBR0E7Ozs7WUFHZkMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSCxNQUFNO1lBQ3BCOzs7WUFFQUksS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSCxRQUFRO1lBQ3RCOzs7WUFFQUksS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSCxLQUFLO1lBQ25COzs7WUFFQUksS0FBQUE7bUJBQUFBLFNBQUFBLFFBQVFDLE9BQU87Z0JBQ2IsSUFBSUM7Z0JBRUosSUFBTUMsa0JBQWtCLElBQUksQ0FBQ1QsTUFBTSxFQUFHLEdBQUc7Z0JBRXpDTyxRQUFRRyxLQUFLLENBQUMsQUFBQyxrQkFBaUMsT0FBaEJELGlCQUFnQjtnQkFFaERELFFBQVEsSUFBSSxDQUFDUCxRQUFRLENBQUNLLE9BQU8sQ0FBQ0M7Z0JBRTlCLElBQU1JLFlBQVlILE1BQU1JLE9BQU87Z0JBRS9CLElBQUlELGNBQWNFLGdCQUFTLEVBQUU7b0JBQzNCLElBQU1DLGNBQWNOLE1BQU1MLFNBQVMsSUFDN0JZLFVBQVUsQUFBQyxRQUFnQ0osT0FBekJHLGFBQVksZUFBMkNELE9BQTlCRixXQUFVLHNCQUE4QixPQUFWRSxnQkFBUyxFQUFDLE9BQ25GRyxZQUFZQyxrQkFBUyxDQUFDQyxXQUFXLENBQUNIO29CQUV4QyxNQUFNQztnQkFDUjtnQkFFQSxJQUFNRyxZQUFZWCxNQUFNWSxPQUFPO2dCQUUvQixJQUFJRCxjQUFjLE1BQU07b0JBQ3RCLElBQU1MLGVBQWNOLE1BQU1MLFNBQVMsSUFDN0JZLFdBQVUsQUFBQyxRQUFtQixPQUFaRCxjQUFZLDRCQUM5QkUsYUFBWUMsa0JBQVMsQ0FBQ0MsV0FBVyxDQUFDSDtvQkFFeEMsTUFBTUM7Z0JBQ1I7Z0JBRUEsSUFBSUs7Z0JBRUpBLE9BQU9GLFdBQVcsR0FBRztnQkFFckIsSUFBTUcsUUFBUSxJQUFJLENBQUNwQixLQUFLLENBQUNxQixPQUFPLENBQUNGLE9BQzNCRyxjQUFjRixNQUFNRyxNQUFNO2dCQUVoQyxJQUFJRCxnQkFBZ0IsR0FBRztvQkFDckIsSUFBTVQsV0FBVSxBQUFDLHVDQUFrRCxPQUFaUyxhQUFZLDBCQUM3RFIsYUFBWUMsa0JBQVMsQ0FBQ0MsV0FBVyxDQUFDSDtvQkFFeEMsTUFBTUM7Z0JBQ1I7Z0JBRUEsSUFBTVUsWUFBWWpDLE1BQU02QjtnQkFFeEJELE9BQU9LLFdBQVcsR0FBRztnQkFFckIsSUFBTSxBQUFFQyxRQUFVQyxZQUFHLENBQWJEO2dCQUVSbkIsUUFBUW1CLE1BQU1FLFFBQVEsQ0FBQ1IsTUFBTWQ7Z0JBRTdCQSxRQUFRdUIsS0FBSyxDQUFDLEFBQUMsb0JBQW1DLE9BQWhCckIsaUJBQWdCO2dCQUVsRCxPQUFPRDtZQUNUOzs7O1lBSU91QixLQUFBQTttQkFBUCxTQUFPQSxtQkFBbUJDLGFBQWEsRUFBRXpCLE9BQU87Z0JBQzlDLElBQUlYLGNBQVk7Z0JBRWhCLElBQU1xQyxnQkFBZ0J0QyxtQkFBbUJxQztnQkFFekMsSUFBSUMsa0JBQWtCLE1BQU07b0JBQzFCLElBQU0sQUFBRUMsV0FBYU4sWUFBRyxDQUFoQk0sVUFDRmIsT0FBT1ksZUFDUGpDLFNBQVNPLFFBQVE0QixZQUFZLENBQUNkLE9BQzlCZSxpQkFBaUJ2QyxvQkFBb0JvQyxnQkFDckNJLGFBQWFDLHNCQUFVLENBQUNDLGtCQUFrQixDQUFDSCxpQkFDM0NuQyxXQUFXaUMsU0FBU00saUJBQWlCLENBQUNQLGVBQWUxQixVQUNyREwsUUFBUXVDLGlCQUFLLENBQUNDLGNBQWMsQ0FBQ0w7b0JBRW5DekMsY0FBWSxJQUFJRyxVQUFVQyxRQUFRQyxVQUFVQztnQkFDOUM7Z0JBRUEsT0FBT047WUFDVDs7OztLQXBCQSw2QkFBTytDLFFBQU8ifQ==