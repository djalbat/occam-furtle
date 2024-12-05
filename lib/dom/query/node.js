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
var nodeQueryNodeQuery = (0, _query.nodeQuery)("/assignment/nodeQuery"), expressionNodeQuery = (0, _query.nodeQuery)("/nodesQuery/expression");
var _default = (0, _dom.domAssigned)((_NodeQuery = /*#__PURE__*/ function() {
    function NodeQuery() {
        _class_call_check(this, NodeQuery);
    }
    _create_class(NodeQuery, [
        {
            key: "getString",
            value: function getString(variable, query) {
                this.variable = variable;
                this.query = query;
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
                    var Variable = _dom.default.Variable, expressionNode = expressionNodeQuery(nodeQueryNode), expression = _occamquery.Expression.fromExpressionNode(expressionNode), variable = Variable.fromNodeQueryNode(nodeQueryNode, context), query = _occamquery.Query.fromExpression(expression);
                    _$nodeQuery = new NodeQuery(variable, query);
                }
                return _$nodeQuery;
            }
        }
    ]);
    return NodeQuery;
}(), _define_property(_NodeQuery, "name", "NodeQuery"), _NodeQuery));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kb20vcXVlcnkvbm9kZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgUXVlcnksIEV4cHJlc3Npb24gfSBmcm9tIFwib2NjYW0tcXVlcnlcIjtcblxuaW1wb3J0IGRvbSBmcm9tIFwiLi4vLi4vZG9tXCI7XG5cbmltcG9ydCB7IG5vZGVRdWVyeSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvcXVlcnlcIjtcbmltcG9ydCB7IGRvbUFzc2lnbmVkIH0gZnJvbSBcIi4uLy4uL2RvbVwiO1xuXG5jb25zdCBub2RlUXVlcnlOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvYXNzaWdubWVudC9ub2RlUXVlcnlcIiksXG4gICAgICBleHByZXNzaW9uTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL25vZGVzUXVlcnkvZXhwcmVzc2lvblwiKTtcblxuZXhwb3J0IGRlZmF1bHQgZG9tQXNzaWduZWQoY2xhc3MgTm9kZVF1ZXJ5IHtcbiAgZ2V0U3RyaW5nKHZhcmlhYmxlLCBxdWVyeSkge1xuICAgIHRoaXMudmFyaWFibGUgPSB2YXJpYWJsZTtcbiAgICB0aGlzLnF1ZXJ5ID0gcXVlcnk7XG4gIH1cblxuICBnZXRWYXJpYWJsZSgpIHtcbiAgICByZXR1cm4gdGhpcy52YXJpYWJsZTtcbiAgfVxuXG4gIGdldFF1ZXJ5KCkge1xuICAgIHJldHVybiB0aGlzLnF1ZXJ5O1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIk5vZGVRdWVyeVwiO1xuXG4gIHN0YXRpYyBmcm9tQXNzaWdubWVudE5vZGUoYXNzaWdtZW50Tm9kZSwgY29udGV4dCkge1xuICAgIGxldCBub2RlUXVlcnkgPSBudWxsO1xuXG4gICAgY29uc3Qgbm9kZVF1ZXJ5Tm9kZSA9IG5vZGVRdWVyeU5vZGVRdWVyeShhc3NpZ21lbnROb2RlKTtcblxuICAgIGlmIChub2RlUXVlcnlOb2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCB7IFZhcmlhYmxlIH0gPSBkb20sXG4gICAgICAgICAgICBleHByZXNzaW9uTm9kZSA9IGV4cHJlc3Npb25Ob2RlUXVlcnkobm9kZVF1ZXJ5Tm9kZSksXG4gICAgICAgICAgICBleHByZXNzaW9uID0gRXhwcmVzc2lvbi5mcm9tRXhwcmVzc2lvbk5vZGUoZXhwcmVzc2lvbk5vZGUpLFxuICAgICAgICAgICAgdmFyaWFibGUgPSBWYXJpYWJsZS5mcm9tTm9kZVF1ZXJ5Tm9kZShub2RlUXVlcnlOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgICAgIHF1ZXJ5ID0gUXVlcnkuZnJvbUV4cHJlc3Npb24oZXhwcmVzc2lvbik7XG5cbiAgICAgIG5vZGVRdWVyeSA9IG5ldyBOb2RlUXVlcnkodmFyaWFibGUsIHF1ZXJ5KTtcbiAgICB9XG5cbiAgICByZXR1cm4gbm9kZVF1ZXJ5O1xuICB9XG59KTtcbiJdLCJuYW1lcyI6WyJub2RlUXVlcnlOb2RlUXVlcnkiLCJub2RlUXVlcnkiLCJleHByZXNzaW9uTm9kZVF1ZXJ5IiwiZG9tQXNzaWduZWQiLCJOb2RlUXVlcnkiLCJnZXRTdHJpbmciLCJ2YXJpYWJsZSIsInF1ZXJ5IiwiZ2V0VmFyaWFibGUiLCJnZXRRdWVyeSIsImZyb21Bc3NpZ25tZW50Tm9kZSIsImFzc2lnbWVudE5vZGUiLCJjb250ZXh0Iiwibm9kZVF1ZXJ5Tm9kZSIsIlZhcmlhYmxlIiwiZG9tIiwiZXhwcmVzc2lvbk5vZGUiLCJleHByZXNzaW9uIiwiRXhwcmVzc2lvbiIsImZyb21FeHByZXNzaW9uTm9kZSIsImZyb21Ob2RlUXVlcnlOb2RlIiwiUXVlcnkiLCJmcm9tRXhwcmVzc2lvbiIsIm5hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVlBOzs7ZUFBQTs7OzBCQVZrQzsyREFFbEI7cUJBRVU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUcxQixJQUFNQSxxQkFBcUJDLElBQUFBLGdCQUFTLEVBQUMsMEJBQy9CQyxzQkFBc0JELElBQUFBLGdCQUFTLEVBQUM7SUFFdEMsV0FBZUUsSUFBQUEsZ0JBQVcsOEJBQUM7YUFBTUM7Z0NBQUFBOzs7O1lBQy9CQyxLQUFBQTttQkFBQUEsU0FBQUEsVUFBVUMsUUFBUSxFQUFFQyxLQUFLO2dCQUN2QixJQUFJLENBQUNELFFBQVEsR0FBR0E7Z0JBQ2hCLElBQUksQ0FBQ0MsS0FBSyxHQUFHQTtZQUNmOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRixRQUFRO1lBQ3RCOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRixLQUFLO1lBQ25COzs7O1lBSU9HLEtBQUFBO21CQUFQLFNBQU9BLG1CQUFtQkMsYUFBYSxFQUFFQyxPQUFPO2dCQUM5QyxJQUFJWCxjQUFZO2dCQUVoQixJQUFNWSxnQkFBZ0JiLG1CQUFtQlc7Z0JBRXpDLElBQUlFLGtCQUFrQixNQUFNO29CQUMxQixJQUFNLEFBQUVDLFdBQWFDLFlBQUcsQ0FBaEJELFVBQ0ZFLGlCQUFpQmQsb0JBQW9CVyxnQkFDckNJLGFBQWFDLHNCQUFVLENBQUNDLGtCQUFrQixDQUFDSCxpQkFDM0NWLFdBQVdRLFNBQVNNLGlCQUFpQixDQUFDUCxlQUFlRCxVQUNyREwsUUFBUWMsaUJBQUssQ0FBQ0MsY0FBYyxDQUFDTDtvQkFFbkNoQixjQUFZLElBQUlHLFVBQVVFLFVBQVVDO2dCQUN0QztnQkFFQSxPQUFPTjtZQUNUOzs7O0tBbEJBLDZCQUFPc0IsUUFBTyJ9