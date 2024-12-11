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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kb20vcXVlcnkvbm9kZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgUXVlcnksIEV4cHJlc3Npb24gfSBmcm9tIFwib2NjYW0tcXVlcnlcIjtcblxuaW1wb3J0IGRvbSBmcm9tIFwiLi4vLi4vZG9tXCI7XG5cbmltcG9ydCB7IG5vZGVRdWVyeSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvcXVlcnlcIjtcbmltcG9ydCB7IGRvbUFzc2lnbmVkIH0gZnJvbSBcIi4uLy4uL2RvbVwiO1xuXG5jb25zdCBub2RlUXVlcnlOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvYXNzaWdubWVudC9ub2RlUXVlcnlcIiksXG4gICAgICBleHByZXNzaW9uTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL25vZGVRdWVyeS9leHByZXNzaW9uXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBkb21Bc3NpZ25lZChjbGFzcyBOb2RlUXVlcnkge1xuICBjb25zdHJ1Y3RvcihzdHJpbmcsIHZhcmlhYmxlLCBxdWVyeSkge1xuICAgIHRoaXMuc3RyaW5nID0gc3RyaW5nO1xuICAgIHRoaXMudmFyaWFibGUgPSB2YXJpYWJsZTtcbiAgICB0aGlzLnF1ZXJ5ID0gcXVlcnk7XG4gIH1cblxuICBnZXRTdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RyaW5nO1xuICB9XG5cbiAgZ2V0VmFyaWFibGUoKSB7XG4gICAgcmV0dXJuIHRoaXMudmFyaWFibGU7XG4gIH1cblxuICBnZXRRdWVyeSgpIHtcbiAgICByZXR1cm4gdGhpcy5xdWVyeTtcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJOb2RlUXVlcnlcIjtcblxuICBzdGF0aWMgZnJvbUFzc2lnbm1lbnROb2RlKGFzc2lnbWVudE5vZGUsIGNvbnRleHQpIHtcbiAgICBsZXQgbm9kZVF1ZXJ5ID0gbnVsbDtcblxuICAgIGNvbnN0IG5vZGVRdWVyeU5vZGUgPSBub2RlUXVlcnlOb2RlUXVlcnkoYXNzaWdtZW50Tm9kZSk7XG5cbiAgICBpZiAobm9kZVF1ZXJ5Tm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgeyBWYXJpYWJsZSB9ID0gZG9tLFxuICAgICAgICAgICAgbm9kZSA9IG5vZGVRdWVyeU5vZGUsIC8vL1xuICAgICAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgICAgICBleHByZXNzaW9uTm9kZSA9IGV4cHJlc3Npb25Ob2RlUXVlcnkobm9kZVF1ZXJ5Tm9kZSksXG4gICAgICAgICAgICBleHByZXNzaW9uID0gRXhwcmVzc2lvbi5mcm9tRXhwcmVzc2lvbk5vZGUoZXhwcmVzc2lvbk5vZGUpLFxuICAgICAgICAgICAgdmFyaWFibGUgPSBWYXJpYWJsZS5mcm9tTm9kZVF1ZXJ5Tm9kZShub2RlUXVlcnlOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgICAgIHF1ZXJ5ID0gUXVlcnkuZnJvbUV4cHJlc3Npb24oZXhwcmVzc2lvbik7XG5cbiAgICAgIG5vZGVRdWVyeSA9IG5ldyBOb2RlUXVlcnkoc3RyaW5nLCB2YXJpYWJsZSwgcXVlcnkpO1xuICAgIH1cblxuICAgIHJldHVybiBub2RlUXVlcnk7XG4gIH1cbn0pO1xuIl0sIm5hbWVzIjpbIm5vZGVRdWVyeU5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsImV4cHJlc3Npb25Ob2RlUXVlcnkiLCJkb21Bc3NpZ25lZCIsIk5vZGVRdWVyeSIsInN0cmluZyIsInZhcmlhYmxlIiwicXVlcnkiLCJnZXRTdHJpbmciLCJnZXRWYXJpYWJsZSIsImdldFF1ZXJ5IiwiZnJvbUFzc2lnbm1lbnROb2RlIiwiYXNzaWdtZW50Tm9kZSIsImNvbnRleHQiLCJub2RlUXVlcnlOb2RlIiwiVmFyaWFibGUiLCJkb20iLCJub2RlIiwibm9kZUFzU3RyaW5nIiwiZXhwcmVzc2lvbk5vZGUiLCJleHByZXNzaW9uIiwiRXhwcmVzc2lvbiIsImZyb21FeHByZXNzaW9uTm9kZSIsImZyb21Ob2RlUXVlcnlOb2RlIiwiUXVlcnkiLCJmcm9tRXhwcmVzc2lvbiIsIm5hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVlBOzs7ZUFBQTs7OzBCQVZrQzsyREFFbEI7cUJBRVU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUcxQixJQUFNQSxxQkFBcUJDLElBQUFBLGdCQUFTLEVBQUMsMEJBQy9CQyxzQkFBc0JELElBQUFBLGdCQUFTLEVBQUM7SUFFdEMsV0FBZUUsSUFBQUEsZ0JBQVcsOEJBQUM7YUFBTUMsVUFDbkJDLE1BQU0sRUFBRUMsUUFBUSxFQUFFQyxLQUFLO2dDQURKSDtRQUU3QixJQUFJLENBQUNDLE1BQU0sR0FBR0E7UUFDZCxJQUFJLENBQUNDLFFBQVEsR0FBR0E7UUFDaEIsSUFBSSxDQUFDQyxLQUFLLEdBQUdBOzs7O1lBR2ZDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0gsTUFBTTtZQUNwQjs7O1lBRUFJLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0gsUUFBUTtZQUN0Qjs7O1lBRUFJLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0gsS0FBSztZQUNuQjs7OztZQUlPSSxLQUFBQTttQkFBUCxTQUFPQSxtQkFBbUJDLGFBQWEsRUFBRUMsT0FBTztnQkFDOUMsSUFBSVosY0FBWTtnQkFFaEIsSUFBTWEsZ0JBQWdCZCxtQkFBbUJZO2dCQUV6QyxJQUFJRSxrQkFBa0IsTUFBTTtvQkFDMUIsSUFBTSxBQUFFQyxXQUFhQyxZQUFHLENBQWhCRCxVQUNGRSxPQUFPSCxlQUNQVCxTQUFTUSxRQUFRSyxZQUFZLENBQUNELE9BQzlCRSxpQkFBaUJqQixvQkFBb0JZLGdCQUNyQ00sYUFBYUMsc0JBQVUsQ0FBQ0Msa0JBQWtCLENBQUNILGlCQUMzQ2IsV0FBV1MsU0FBU1EsaUJBQWlCLENBQUNULGVBQWVELFVBQ3JETixRQUFRaUIsaUJBQUssQ0FBQ0MsY0FBYyxDQUFDTDtvQkFFbkNuQixjQUFZLElBQUlHLFVBQVVDLFFBQVFDLFVBQVVDO2dCQUM5QztnQkFFQSxPQUFPTjtZQUNUOzs7O0tBcEJBLDZCQUFPeUIsUUFBTyJ9