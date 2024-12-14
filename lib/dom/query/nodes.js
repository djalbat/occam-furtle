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
var nodesQueryNodeQuery = (0, _query.nodeQuery)("/assignment/nodesQuery"), expressionNodeQuery = (0, _query.nodeQuery)("/nodesQuery/expression");
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
            key: "resolve",
            value: function resolve(context) {
                var value;
                var nodesQueryString = this.string; ///
                context.trace("Resolving the '".concat(nodesQueryString, "' nodes query..."));
                value = this.variable.resolve(context);
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
                value = Value.fromNode(node, context);
                context.debug("...resolved the '".concat(nodesQueryString, "' nodes query."));
                return value;
            }
        }
    ], [
        {
            key: "fromAssignmentNode",
            value: function fromAssignmentNode(assigmentNode, context) {
                var nodesQuery = null;
                var nodesQueryNode = nodesQueryNodeQuery(assigmentNode);
                if (nodesQueryNode !== null) {
                    var Variable = _dom.default.Variable, node = nodesQueryNode, string = context.nodeAsString(node), expressionNode = expressionNodeQuery(nodesQueryNode), expression = _occamquery.Expression.fromExpressionNode(expressionNode), variable = Variable.fromNodesQueryNode(nodesQueryNode, context), query = _occamquery.Query.fromExpression(expression);
                    nodesQuery = new NodesQuery(string, variable, query);
                }
                return nodesQuery;
            }
        }
    ]);
    return NodesQuery;
}(), _define_property(_NodesQuery, "name", "NodesQuery"), _NodesQuery));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kb20vcXVlcnkvbm9kZXMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IFF1ZXJ5LCBFeHByZXNzaW9uIH0gZnJvbSBcIm9jY2FtLXF1ZXJ5XCI7XG5cbmltcG9ydCBkb20gZnJvbSBcIi4uLy4uL2RvbVwiO1xuaW1wb3J0IEV4Y2VwdGlvbiBmcm9tIFwiLi4vLi4vZXhjZXB0aW9uXCI7XG5cbmltcG9ydCB7IG5vZGVRdWVyeSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvcXVlcnlcIjtcbmltcG9ydCB7IE5PREVfVFlQRSB9IGZyb20gXCIuLi8uLi90eXBlc1wiO1xuaW1wb3J0IHsgZG9tQXNzaWduZWQgfSBmcm9tIFwiLi4vLi4vZG9tXCI7XG5cbmNvbnN0IG5vZGVzUXVlcnlOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvYXNzaWdubWVudC9ub2Rlc1F1ZXJ5XCIpLFxuICAgICAgZXhwcmVzc2lvbk5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9ub2Rlc1F1ZXJ5L2V4cHJlc3Npb25cIik7XG5cbmV4cG9ydCBkZWZhdWx0IGRvbUFzc2lnbmVkKGNsYXNzIE5vZGVzUXVlcnkge1xuICBjb25zdHJ1Y3RvcihzdHJpbmcsIHZhcmlhYmxlLCBxdWVyeSkge1xuICAgIHRoaXMuc3RyaW5nID0gc3RyaW5nO1xuICAgIHRoaXMudmFyaWFibGUgPSB2YXJpYWJsZTtcbiAgICB0aGlzLnF1ZXJ5ID0gcXVlcnk7XG4gIH1cblxuICBnZXRTdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RyaW5nO1xuICB9XG5cbiAgZ2V0VmFyaWFibGUoKSB7XG4gICAgcmV0dXJuIHRoaXMudmFyaWFibGU7XG4gIH1cblxuICBnZXRRdWVyeSgpIHtcbiAgICByZXR1cm4gdGhpcy5xdWVyeTtcbiAgfVxuXG4gIHJlc29sdmUoY29udGV4dCkge1xuICAgIGxldCB2YWx1ZTtcblxuICAgIGNvbnN0IG5vZGVzUXVlcnlTdHJpbmcgPSB0aGlzLnN0cmluZzsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgUmVzb2x2aW5nIHRoZSAnJHtub2Rlc1F1ZXJ5U3RyaW5nfScgbm9kZXMgcXVlcnkuLi5gKTtcblxuICAgIHZhbHVlID0gdGhpcy52YXJpYWJsZS5yZXNvbHZlKGNvbnRleHQpO1xuXG4gICAgY29uc3QgdmFsdWVUeXBlID0gdmFsdWUuZ2V0VHlwZSgpO1xuXG4gICAgaWYgKHZhbHVlVHlwZSAhPT0gTk9ERV9UWVBFKSB7XG4gICAgICBjb25zdCB2YWx1ZVN0cmluZyA9IHZhbHVlLmFzU3RyaW5nKGNvbnRleHQpLFxuICAgICAgICAgICAgbWVzc2FnZSA9IGBUaGUgJHt2YWx1ZVN0cmluZ30gdmFsdWUncyAnJHt2YWx1ZVR5cGV9JyB0eXBlIHNob3VsZCBiZSAnJHtOT0RFX1RZUEV9Jy5gLFxuICAgICAgICAgICAgZXhjZXB0aW9uID0gRXhjZXB0aW9uLmZyb21NZXNzYWdlKG1lc3NhZ2UpO1xuXG4gICAgICB0aHJvdyBleGNlcHRpb247XG4gICAgfVxuXG4gICAgY29uc3QgdmFsdWVOb2RlID0gdmFsdWUuZ2V0Tm9kZSgpO1xuXG4gICAgaWYgKHZhbHVlTm9kZSA9PT0gbnVsbCkge1xuICAgICAgY29uc3QgdmFsdWVTdHJpbmcgPSB2YWx1ZS5hc1N0cmluZyhjb250ZXh0KSxcbiAgICAgICAgICAgIG1lc3NhZ2UgPSBgVGhlICR7dmFsdWVTdHJpbmd9IHZhbHVlJ3Mgbm9kZSBpcyBudWxsLmAsXG4gICAgICAgICAgICBleGNlcHRpb24gPSBFeGNlcHRpb24uZnJvbU1lc3NhZ2UobWVzc2FnZSk7XG5cbiAgICAgIHRocm93IGV4Y2VwdGlvbjtcbiAgICB9XG5cbiAgICBsZXQgbm9kZTtcblxuICAgIG5vZGUgPSB2YWx1ZU5vZGU7IC8vL1xuXG4gICAgY29uc3Qgbm9kZXMgPSB0aGlzLnF1ZXJ5LmV4ZWN1dGUobm9kZSk7XG5cbiAgICBjb25zdCB7IFZhbHVlIH0gPSBkb207XG5cbiAgICB2YWx1ZSA9IFZhbHVlLmZyb21Ob2RlKG5vZGUsIGNvbnRleHQpO1xuXG4gICAgY29udGV4dC5kZWJ1ZyhgLi4ucmVzb2x2ZWQgdGhlICcke25vZGVzUXVlcnlTdHJpbmd9JyBub2RlcyBxdWVyeS5gKTtcblxuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJOb2Rlc1F1ZXJ5XCI7XG5cbiAgc3RhdGljIGZyb21Bc3NpZ25tZW50Tm9kZShhc3NpZ21lbnROb2RlLCBjb250ZXh0KSB7XG4gICAgbGV0IG5vZGVzUXVlcnkgPSBudWxsO1xuXG4gICAgY29uc3Qgbm9kZXNRdWVyeU5vZGUgPSBub2Rlc1F1ZXJ5Tm9kZVF1ZXJ5KGFzc2lnbWVudE5vZGUpO1xuXG4gICAgaWYgKG5vZGVzUXVlcnlOb2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCB7IFZhcmlhYmxlIH0gPSBkb20sXG4gICAgICAgICAgICBub2RlID0gbm9kZXNRdWVyeU5vZGUsICAvLy9cbiAgICAgICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICAgICAgZXhwcmVzc2lvbk5vZGUgPSBleHByZXNzaW9uTm9kZVF1ZXJ5KG5vZGVzUXVlcnlOb2RlKSxcbiAgICAgICAgICAgIGV4cHJlc3Npb24gPSBFeHByZXNzaW9uLmZyb21FeHByZXNzaW9uTm9kZShleHByZXNzaW9uTm9kZSksXG4gICAgICAgICAgICB2YXJpYWJsZSA9IFZhcmlhYmxlLmZyb21Ob2Rlc1F1ZXJ5Tm9kZShub2Rlc1F1ZXJ5Tm9kZSwgY29udGV4dCksXG4gICAgICAgICAgICBxdWVyeSA9IFF1ZXJ5LmZyb21FeHByZXNzaW9uKGV4cHJlc3Npb24pO1xuXG4gICAgICBub2Rlc1F1ZXJ5ID0gbmV3IE5vZGVzUXVlcnkoc3RyaW5nLCB2YXJpYWJsZSwgcXVlcnkpO1xuICAgIH1cblxuICAgIHJldHVybiBub2Rlc1F1ZXJ5O1xuICB9XG59KTtcbiJdLCJuYW1lcyI6WyJub2Rlc1F1ZXJ5Tm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5IiwiZXhwcmVzc2lvbk5vZGVRdWVyeSIsImRvbUFzc2lnbmVkIiwiTm9kZXNRdWVyeSIsInN0cmluZyIsInZhcmlhYmxlIiwicXVlcnkiLCJnZXRTdHJpbmciLCJnZXRWYXJpYWJsZSIsImdldFF1ZXJ5IiwicmVzb2x2ZSIsImNvbnRleHQiLCJ2YWx1ZSIsIm5vZGVzUXVlcnlTdHJpbmciLCJ0cmFjZSIsInZhbHVlVHlwZSIsImdldFR5cGUiLCJOT0RFX1RZUEUiLCJ2YWx1ZVN0cmluZyIsImFzU3RyaW5nIiwibWVzc2FnZSIsImV4Y2VwdGlvbiIsIkV4Y2VwdGlvbiIsImZyb21NZXNzYWdlIiwidmFsdWVOb2RlIiwiZ2V0Tm9kZSIsIm5vZGUiLCJub2RlcyIsImV4ZWN1dGUiLCJWYWx1ZSIsImRvbSIsImZyb21Ob2RlIiwiZGVidWciLCJmcm9tQXNzaWdubWVudE5vZGUiLCJhc3NpZ21lbnROb2RlIiwibm9kZXNRdWVyeSIsIm5vZGVzUXVlcnlOb2RlIiwiVmFyaWFibGUiLCJub2RlQXNTdHJpbmciLCJleHByZXNzaW9uTm9kZSIsImV4cHJlc3Npb24iLCJFeHByZXNzaW9uIiwiZnJvbUV4cHJlc3Npb25Ob2RlIiwiZnJvbU5vZGVzUXVlcnlOb2RlIiwiUXVlcnkiLCJmcm9tRXhwcmVzc2lvbiIsIm5hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQWNBOzs7ZUFBQTs7OzBCQVprQzsyREFFbEI7Z0VBQ007cUJBRUk7cUJBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRzFCLElBQU1BLHNCQUFzQkMsSUFBQUEsZ0JBQVMsRUFBQywyQkFDaENDLHNCQUFzQkQsSUFBQUEsZ0JBQVMsRUFBQztJQUV0QyxXQUFlRSxJQUFBQSxnQkFBVywrQkFBQzthQUFNQyxXQUNuQkMsTUFBTSxFQUFFQyxRQUFRLEVBQUVDLEtBQUs7Z0NBREpIO1FBRTdCLElBQUksQ0FBQ0MsTUFBTSxHQUFHQTtRQUNkLElBQUksQ0FBQ0MsUUFBUSxHQUFHQTtRQUNoQixJQUFJLENBQUNDLEtBQUssR0FBR0E7Ozs7WUFHZkMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSCxNQUFNO1lBQ3BCOzs7WUFFQUksS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSCxRQUFRO1lBQ3RCOzs7WUFFQUksS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSCxLQUFLO1lBQ25COzs7WUFFQUksS0FBQUE7bUJBQUFBLFNBQUFBLFFBQVFDLE9BQU87Z0JBQ2IsSUFBSUM7Z0JBRUosSUFBTUMsbUJBQW1CLElBQUksQ0FBQ1QsTUFBTSxFQUFHLEdBQUc7Z0JBRTFDTyxRQUFRRyxLQUFLLENBQUMsQUFBQyxrQkFBa0MsT0FBakJELGtCQUFpQjtnQkFFakRELFFBQVEsSUFBSSxDQUFDUCxRQUFRLENBQUNLLE9BQU8sQ0FBQ0M7Z0JBRTlCLElBQU1JLFlBQVlILE1BQU1JLE9BQU87Z0JBRS9CLElBQUlELGNBQWNFLGdCQUFTLEVBQUU7b0JBQzNCLElBQU1DLGNBQWNOLE1BQU1PLFFBQVEsQ0FBQ1IsVUFDN0JTLFVBQVUsQUFBQyxPQUE4QkwsT0FBeEJHLGFBQVksY0FBMENELE9BQTlCRixXQUFVLHNCQUE4QixPQUFWRSxnQkFBUyxFQUFDLE9BQ2pGSSxZQUFZQyxrQkFBUyxDQUFDQyxXQUFXLENBQUNIO29CQUV4QyxNQUFNQztnQkFDUjtnQkFFQSxJQUFNRyxZQUFZWixNQUFNYSxPQUFPO2dCQUUvQixJQUFJRCxjQUFjLE1BQU07b0JBQ3RCLElBQU1OLGVBQWNOLE1BQU1PLFFBQVEsQ0FBQ1IsVUFDN0JTLFdBQVUsQUFBQyxPQUFrQixPQUFaRixjQUFZLDJCQUM3QkcsYUFBWUMsa0JBQVMsQ0FBQ0MsV0FBVyxDQUFDSDtvQkFFeEMsTUFBTUM7Z0JBQ1I7Z0JBRUEsSUFBSUs7Z0JBRUpBLE9BQU9GLFdBQVcsR0FBRztnQkFFckIsSUFBTUcsUUFBUSxJQUFJLENBQUNyQixLQUFLLENBQUNzQixPQUFPLENBQUNGO2dCQUVqQyxJQUFNLEFBQUVHLFFBQVVDLFlBQUcsQ0FBYkQ7Z0JBRVJqQixRQUFRaUIsTUFBTUUsUUFBUSxDQUFDTCxNQUFNZjtnQkFFN0JBLFFBQVFxQixLQUFLLENBQUMsQUFBQyxvQkFBb0MsT0FBakJuQixrQkFBaUI7Z0JBRW5ELE9BQU9EO1lBQ1Q7Ozs7WUFJT3FCLEtBQUFBO21CQUFQLFNBQU9BLG1CQUFtQkMsYUFBYSxFQUFFdkIsT0FBTztnQkFDOUMsSUFBSXdCLGFBQWE7Z0JBRWpCLElBQU1DLGlCQUFpQnJDLG9CQUFvQm1DO2dCQUUzQyxJQUFJRSxtQkFBbUIsTUFBTTtvQkFDM0IsSUFBTSxBQUFFQyxXQUFhUCxZQUFHLENBQWhCTyxVQUNGWCxPQUFPVSxnQkFDUGhDLFNBQVNPLFFBQVEyQixZQUFZLENBQUNaLE9BQzlCYSxpQkFBaUJ0QyxvQkFBb0JtQyxpQkFDckNJLGFBQWFDLHNCQUFVLENBQUNDLGtCQUFrQixDQUFDSCxpQkFDM0NsQyxXQUFXZ0MsU0FBU00sa0JBQWtCLENBQUNQLGdCQUFnQnpCLFVBQ3ZETCxRQUFRc0MsaUJBQUssQ0FBQ0MsY0FBYyxDQUFDTDtvQkFFbkNMLGFBQWEsSUFBSWhDLFdBQVdDLFFBQVFDLFVBQVVDO2dCQUNoRDtnQkFFQSxPQUFPNkI7WUFDVDs7OztLQXBCQSw4QkFBT1csUUFBTyJ9