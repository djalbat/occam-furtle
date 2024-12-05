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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kb20vcXVlcnkvbm9kZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgUXVlcnksIEV4cHJlc3Npb24gfSBmcm9tIFwib2NjYW0tcXVlcnlcIjtcblxuaW1wb3J0IGRvbSBmcm9tIFwiLi4vLi4vZG9tXCI7XG5cbmltcG9ydCB7IG5vZGVRdWVyeSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvcXVlcnlcIjtcbmltcG9ydCB7IGRvbUFzc2lnbmVkIH0gZnJvbSBcIi4uLy4uL2RvbVwiO1xuXG5jb25zdCBub2RlUXVlcnlOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvYXNzaWdubWVudC9ub2RlUXVlcnlcIiksXG4gICAgICBleHByZXNzaW9uTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL25vZGVRdWVyeS9leHByZXNzaW9uXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBkb21Bc3NpZ25lZChjbGFzcyBOb2RlUXVlcnkge1xuICBnZXRTdHJpbmcodmFyaWFibGUsIHF1ZXJ5KSB7XG4gICAgdGhpcy52YXJpYWJsZSA9IHZhcmlhYmxlO1xuICAgIHRoaXMucXVlcnkgPSBxdWVyeTtcbiAgfVxuXG4gIGdldFZhcmlhYmxlKCkge1xuICAgIHJldHVybiB0aGlzLnZhcmlhYmxlO1xuICB9XG5cbiAgZ2V0UXVlcnkoKSB7XG4gICAgcmV0dXJuIHRoaXMucXVlcnk7XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiTm9kZVF1ZXJ5XCI7XG5cbiAgc3RhdGljIGZyb21Bc3NpZ25tZW50Tm9kZShhc3NpZ21lbnROb2RlLCBjb250ZXh0KSB7XG4gICAgbGV0IG5vZGVRdWVyeSA9IG51bGw7XG5cbiAgICBjb25zdCBub2RlUXVlcnlOb2RlID0gbm9kZVF1ZXJ5Tm9kZVF1ZXJ5KGFzc2lnbWVudE5vZGUpO1xuXG4gICAgaWYgKG5vZGVRdWVyeU5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHsgVmFyaWFibGUgfSA9IGRvbSxcbiAgICAgICAgICAgIGV4cHJlc3Npb25Ob2RlID0gZXhwcmVzc2lvbk5vZGVRdWVyeShub2RlUXVlcnlOb2RlKSxcbiAgICAgICAgICAgIGV4cHJlc3Npb24gPSBFeHByZXNzaW9uLmZyb21FeHByZXNzaW9uTm9kZShleHByZXNzaW9uTm9kZSksXG4gICAgICAgICAgICB2YXJpYWJsZSA9IFZhcmlhYmxlLmZyb21Ob2RlUXVlcnlOb2RlKG5vZGVRdWVyeU5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgICAgcXVlcnkgPSBRdWVyeS5mcm9tRXhwcmVzc2lvbihleHByZXNzaW9uKTtcblxuICAgICAgbm9kZVF1ZXJ5ID0gbmV3IE5vZGVRdWVyeSh2YXJpYWJsZSwgcXVlcnkpO1xuICAgIH1cblxuICAgIHJldHVybiBub2RlUXVlcnk7XG4gIH1cbn0pO1xuIl0sIm5hbWVzIjpbIm5vZGVRdWVyeU5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsImV4cHJlc3Npb25Ob2RlUXVlcnkiLCJkb21Bc3NpZ25lZCIsIk5vZGVRdWVyeSIsImdldFN0cmluZyIsInZhcmlhYmxlIiwicXVlcnkiLCJnZXRWYXJpYWJsZSIsImdldFF1ZXJ5IiwiZnJvbUFzc2lnbm1lbnROb2RlIiwiYXNzaWdtZW50Tm9kZSIsImNvbnRleHQiLCJub2RlUXVlcnlOb2RlIiwiVmFyaWFibGUiLCJkb20iLCJleHByZXNzaW9uTm9kZSIsImV4cHJlc3Npb24iLCJFeHByZXNzaW9uIiwiZnJvbUV4cHJlc3Npb25Ob2RlIiwiZnJvbU5vZGVRdWVyeU5vZGUiLCJRdWVyeSIsImZyb21FeHByZXNzaW9uIiwibmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBWUE7OztlQUFBOzs7MEJBVmtDOzJEQUVsQjtxQkFFVTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRzFCLElBQU1BLHFCQUFxQkMsSUFBQUEsZ0JBQVMsRUFBQywwQkFDL0JDLHNCQUFzQkQsSUFBQUEsZ0JBQVMsRUFBQztJQUV0QyxXQUFlRSxJQUFBQSxnQkFBVyw4QkFBQzthQUFNQztnQ0FBQUE7Ozs7WUFDL0JDLEtBQUFBO21CQUFBQSxTQUFBQSxVQUFVQyxRQUFRLEVBQUVDLEtBQUs7Z0JBQ3ZCLElBQUksQ0FBQ0QsUUFBUSxHQUFHQTtnQkFDaEIsSUFBSSxDQUFDQyxLQUFLLEdBQUdBO1lBQ2Y7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNGLFFBQVE7WUFDdEI7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNGLEtBQUs7WUFDbkI7Ozs7WUFJT0csS0FBQUE7bUJBQVAsU0FBT0EsbUJBQW1CQyxhQUFhLEVBQUVDLE9BQU87Z0JBQzlDLElBQUlYLGNBQVk7Z0JBRWhCLElBQU1ZLGdCQUFnQmIsbUJBQW1CVztnQkFFekMsSUFBSUUsa0JBQWtCLE1BQU07b0JBQzFCLElBQU0sQUFBRUMsV0FBYUMsWUFBRyxDQUFoQkQsVUFDRkUsaUJBQWlCZCxvQkFBb0JXLGdCQUNyQ0ksYUFBYUMsc0JBQVUsQ0FBQ0Msa0JBQWtCLENBQUNILGlCQUMzQ1YsV0FBV1EsU0FBU00saUJBQWlCLENBQUNQLGVBQWVELFVBQ3JETCxRQUFRYyxpQkFBSyxDQUFDQyxjQUFjLENBQUNMO29CQUVuQ2hCLGNBQVksSUFBSUcsVUFBVUUsVUFBVUM7Z0JBQ3RDO2dCQUVBLE9BQU9OO1lBQ1Q7Ozs7S0FsQkEsNkJBQU9zQixRQUFPIn0=