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
var _elements = /*#__PURE__*/ _interop_require_wildcard(require("../elements"));
var _query = require("../utilities/query");
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
var _Expressions;
var expressionNodesQuery = (0, _query.nodesQuery)("/expressions/expression"), procedureCallExpressionsNodeQuery = (0, _query.nodeQuery)("/procedureCall/expressions");
var _default = (0, _elements.define)((_Expressions = /*#__PURE__*/ function() {
    function Expressions(string, array) {
        _class_call_check(this, Expressions);
        this.string = string;
        this.array = array;
    }
    _create_class(Expressions, [
        {
            key: "getString",
            value: function getString() {
                return this.string;
            }
        },
        {
            key: "getArray",
            value: function getArray() {
                return this.array;
            }
        },
        {
            key: "getLength",
            value: function getLength() {
                var length = this.array.length;
                return length;
            }
        },
        {
            key: "getExpression",
            value: function getExpression(index) {
                var expression = this.array[index] || null; ///
                return expression;
            }
        },
        {
            key: "addExpression",
            value: function addExpression(expression) {
                this.array.push(expression);
            }
        },
        {
            key: "mapExpression",
            value: function mapExpression(callback) {
                return this.array.map(callback);
            }
        },
        {
            key: "forEachExpression",
            value: function forEachExpression(callback) {
                this.array.forEach(callback);
            }
        },
        {
            key: "evaluate",
            value: function evaluate(context) {
                var array = this.mapExpression(function(expression) {
                    expression = expression.evaluate(context);
                    return expression;
                }), expressions = Expressions.fromArray(array, context); ///
                return expressions;
            }
        }
    ], [
        {
            key: "fromNodes",
            value: function fromNodes(nodes, context) {
                var array = arrayFromNodes(nodes, context), string = stringFromArray(array, context), expressions = new Expressions(string, array);
                return expressions;
            }
        },
        {
            key: "fromArray",
            value: function fromArray(array, context) {
                var string = stringFromArray(array, context), expressions = new Expressions(string, array);
                return expressions;
            }
        },
        {
            key: "fromExpression",
            value: function fromExpression(expression, context) {
                var array = [
                    expression
                ], string = stringFromArray(array, context), expressions = new Expressions(string, array);
                return expressions;
            }
        },
        {
            key: "fromProcedureCallNode",
            value: function fromProcedureCallNode(procedureCallNode, context) {
                var procedureCallExpressionsNode = procedureCallExpressionsNodeQuery(procedureCallNode), expressionsNode = procedureCallExpressionsNode, expressions = expressionsFromExpressionsNode(expressionsNode, context);
                return expressions;
            }
        }
    ]);
    return Expressions;
}(), _define_property(_Expressions, "name", "Expressions"), _Expressions));
function arrayFromNodes(nodes, context) {
    var Expression = _elements.default.Expression, array = nodes.map(function(node) {
        var expression = Expression.fromNode(node, context);
        return expression;
    });
    return array;
}
function stringFromArray(array, context) {
    var expressionsString = array.reduce(function(expressionsString, expression) {
        var expressionString = expression.asString(context);
        expressionsString = expressionsString === null ? expressionString : "".concat(expressionsString, ", ").concat(expressionString);
        return expressionsString;
    }, null), string = expressionsString; ///
    return string;
}
function arrayFromExpressionNodes(expressionNodes, context) {
    var Expression = _elements.default.Expression, array = expressionNodes.map(function(expressionNode) {
        var expression = Expression.fromExpressionNode(expressionNode, context);
        return expression;
    });
    return array;
}
function expressionsFromExpressionsNode(expressionsNode, context) {
    var Expressions = _elements.default.Expressions, node = expressionsNode, string = context.nodeAsString(node), expressionNodes = expressionNodesQuery(expressionsNode), array = arrayFromExpressionNodes(expressionNodes, context), expressions = new Expressions(string, array);
    return expressions;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L2V4cHJlc3Npb25zLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgZWxlbWVudHMgZnJvbSBcIi4uL2VsZW1lbnRzXCI7XG5cbmltcG9ydCB7IGRlZmluZSB9IGZyb20gXCIuLi9lbGVtZW50c1wiO1xuaW1wb3J0IHsgbm9kZVF1ZXJ5LCBub2Rlc1F1ZXJ5IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9xdWVyeVwiO1xuXG5jb25zdCBleHByZXNzaW9uTm9kZXNRdWVyeSA9IG5vZGVzUXVlcnkoXCIvZXhwcmVzc2lvbnMvZXhwcmVzc2lvblwiKSxcbiAgICAgIHByb2NlZHVyZUNhbGxFeHByZXNzaW9uc05vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9wcm9jZWR1cmVDYWxsL2V4cHJlc3Npb25zXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmUoY2xhc3MgRXhwcmVzc2lvbnMge1xuICBjb25zdHJ1Y3RvcihzdHJpbmcsIGFycmF5KSB7XG4gICAgdGhpcy5zdHJpbmcgPSBzdHJpbmc7XG4gICAgdGhpcy5hcnJheSA9IGFycmF5O1xuICB9XG5cbiAgZ2V0U3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLnN0cmluZztcbiAgfVxuXG4gIGdldEFycmF5KCkge1xuICAgIHJldHVybiB0aGlzLmFycmF5O1xuICB9XG5cbiAgZ2V0TGVuZ3RoKCkge1xuICAgIGNvbnN0IGxlbmd0aCA9IHRoaXMuYXJyYXkubGVuZ3RoO1xuXG4gICAgcmV0dXJuIGxlbmd0aDtcbiAgfVxuXG4gIGdldEV4cHJlc3Npb24oaW5kZXgpIHtcbiAgICBjb25zdCBleHByZXNzaW9uID0gdGhpcy5hcnJheVtpbmRleF0gfHwgbnVsbDsgIC8vL1xuXG4gICAgcmV0dXJuIGV4cHJlc3Npb247XG4gIH1cblxuICBhZGRFeHByZXNzaW9uKGV4cHJlc3Npb24pIHtcbiAgICB0aGlzLmFycmF5LnB1c2goZXhwcmVzc2lvbik7XG4gIH1cblxuICBtYXBFeHByZXNzaW9uKGNhbGxiYWNrKSB7IHJldHVybiB0aGlzLmFycmF5Lm1hcChjYWxsYmFjayk7IH1cblxuICBmb3JFYWNoRXhwcmVzc2lvbihjYWxsYmFjaykgeyB0aGlzLmFycmF5LmZvckVhY2goY2FsbGJhY2spOyB9XG5cbiAgZXZhbHVhdGUoY29udGV4dCkge1xuICAgIGNvbnN0IGFycmF5ID0gdGhpcy5tYXBFeHByZXNzaW9uKChleHByZXNzaW9uKSA9PiB7XG4gICAgICAgICAgICBleHByZXNzaW9uID0gZXhwcmVzc2lvbi5ldmFsdWF0ZShjb250ZXh0KTtcblxuICAgICAgICAgICAgcmV0dXJuIGV4cHJlc3Npb247XG4gICAgICAgICAgfSksXG4gICAgICAgICAgZXhwcmVzc2lvbnMgPSBFeHByZXNzaW9ucy5mcm9tQXJyYXkoYXJyYXksIGNvbnRleHQpOyAvLy9cblxuICAgIHJldHVybiBleHByZXNzaW9ucztcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJFeHByZXNzaW9uc1wiO1xuXG4gIHN0YXRpYyBmcm9tTm9kZXMobm9kZXMsIGNvbnRleHQpIHtcbiAgICBjb25zdCBhcnJheSA9IGFycmF5RnJvbU5vZGVzKG5vZGVzLCBjb250ZXh0KSxcbiAgICAgICAgICBzdHJpbmcgPSBzdHJpbmdGcm9tQXJyYXkoYXJyYXksIGNvbnRleHQpLFxuICAgICAgICAgIGV4cHJlc3Npb25zID0gbmV3IEV4cHJlc3Npb25zKHN0cmluZywgYXJyYXkpO1xuXG4gICAgcmV0dXJuIGV4cHJlc3Npb25zO1xuICB9XG5cbiAgc3RhdGljIGZyb21BcnJheShhcnJheSwgY29udGV4dCkge1xuICAgIGNvbnN0IHN0cmluZyA9IHN0cmluZ0Zyb21BcnJheShhcnJheSwgY29udGV4dCksXG4gICAgICAgICAgZXhwcmVzc2lvbnMgPSBuZXcgRXhwcmVzc2lvbnMoc3RyaW5nLCBhcnJheSk7XG5cbiAgICByZXR1cm4gZXhwcmVzc2lvbnM7XG4gIH1cblxuICBzdGF0aWMgZnJvbUV4cHJlc3Npb24oZXhwcmVzc2lvbiwgY29udGV4dCkge1xuICAgIGNvbnN0IGFycmF5ID0gW1xuICAgICAgICAgICAgZXhwcmVzc2lvblxuICAgICAgICAgIF0sXG4gICAgICAgICAgc3RyaW5nID0gc3RyaW5nRnJvbUFycmF5KGFycmF5LCBjb250ZXh0KSxcbiAgICAgICAgICBleHByZXNzaW9ucyA9IG5ldyBFeHByZXNzaW9ucyhzdHJpbmcsIGFycmF5KTtcblxuICAgIHJldHVybiBleHByZXNzaW9ucztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvY2VkdXJlQ2FsbE5vZGUocHJvY2VkdXJlQ2FsbE5vZGUsIGNvbnRleHQpIHtcbiAgICBjb25zdCBwcm9jZWR1cmVDYWxsRXhwcmVzc2lvbnNOb2RlID0gcHJvY2VkdXJlQ2FsbEV4cHJlc3Npb25zTm9kZVF1ZXJ5KHByb2NlZHVyZUNhbGxOb2RlKSxcbiAgICAgICAgICBleHByZXNzaW9uc05vZGUgPSBwcm9jZWR1cmVDYWxsRXhwcmVzc2lvbnNOb2RlLCAvLy9cbiAgICAgICAgICBleHByZXNzaW9ucyA9IGV4cHJlc3Npb25zRnJvbUV4cHJlc3Npb25zTm9kZShleHByZXNzaW9uc05vZGUsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIGV4cHJlc3Npb25zO1xuICB9XG59KTtcblxuZnVuY3Rpb24gYXJyYXlGcm9tTm9kZXMobm9kZXMsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBFeHByZXNzaW9uIH0gPSBlbGVtZW50cyxcbiAgICAgICAgYXJyYXkgPSBub2Rlcy5tYXAoKG5vZGUpID0+IHsgLy8vXG4gICAgICAgICAgY29uc3QgZXhwcmVzc2lvbiA9IEV4cHJlc3Npb24uZnJvbU5vZGUobm9kZSwgY29udGV4dCk7XG5cbiAgICAgICAgICByZXR1cm4gZXhwcmVzc2lvbjtcbiAgICAgICAgfSk7XG5cbiAgcmV0dXJuIGFycmF5O1xufVxuXG5mdW5jdGlvbiBzdHJpbmdGcm9tQXJyYXkoYXJyYXksIGNvbnRleHQpIHtcbiAgY29uc3QgZXhwcmVzc2lvbnNTdHJpbmcgPSBhcnJheS5yZWR1Y2UoKGV4cHJlc3Npb25zU3RyaW5nLCBleHByZXNzaW9uKSA9PiB7XG4gICAgICAgICAgY29uc3QgZXhwcmVzc2lvblN0cmluZyA9IGV4cHJlc3Npb24uYXNTdHJpbmcoY29udGV4dCk7XG5cbiAgICAgICAgICBleHByZXNzaW9uc1N0cmluZyA9IChleHByZXNzaW9uc1N0cmluZyA9PT0gbnVsbCkgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvblN0cmluZyA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYCR7ZXhwcmVzc2lvbnNTdHJpbmd9LCAke2V4cHJlc3Npb25TdHJpbmd9YDtcblxuICAgICAgICAgIHJldHVybiBleHByZXNzaW9uc1N0cmluZztcbiAgICAgICAgfSwgbnVsbCksXG4gICAgICAgIHN0cmluZyA9IGV4cHJlc3Npb25zU3RyaW5nOyAgLy8vXG5cbiAgcmV0dXJuIHN0cmluZztcbn1cblxuZnVuY3Rpb24gYXJyYXlGcm9tRXhwcmVzc2lvbk5vZGVzKGV4cHJlc3Npb25Ob2RlcywgY29udGV4dCkge1xuICBjb25zdCB7IEV4cHJlc3Npb24gfSA9IGVsZW1lbnRzLFxuICAgICAgICBhcnJheSA9IGV4cHJlc3Npb25Ob2Rlcy5tYXAoKGV4cHJlc3Npb25Ob2RlKSA9PiB7IC8vL1xuICAgICAgICAgIGNvbnN0IGV4cHJlc3Npb24gPSBFeHByZXNzaW9uLmZyb21FeHByZXNzaW9uTm9kZShleHByZXNzaW9uTm9kZSwgY29udGV4dCk7XG5cbiAgICAgICAgICByZXR1cm4gZXhwcmVzc2lvbjtcbiAgICAgICAgfSk7XG5cbiAgcmV0dXJuIGFycmF5O1xufVxuXG5mdW5jdGlvbiBleHByZXNzaW9uc0Zyb21FeHByZXNzaW9uc05vZGUoZXhwcmVzc2lvbnNOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgRXhwcmVzc2lvbnMgfSA9IGVsZW1lbnRzLFxuICAgICAgICBub2RlID0gZXhwcmVzc2lvbnNOb2RlLCAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIGV4cHJlc3Npb25Ob2RlcyA9IGV4cHJlc3Npb25Ob2Rlc1F1ZXJ5KGV4cHJlc3Npb25zTm9kZSksXG4gICAgICAgIGFycmF5ID0gYXJyYXlGcm9tRXhwcmVzc2lvbk5vZGVzKGV4cHJlc3Npb25Ob2RlcywgY29udGV4dCksXG4gICAgICAgIGV4cHJlc3Npb25zID0gbmV3IEV4cHJlc3Npb25zKHN0cmluZywgYXJyYXkpO1xuXG4gIHJldHVybiBleHByZXNzaW9ucztcbn1cbiJdLCJuYW1lcyI6WyJleHByZXNzaW9uTm9kZXNRdWVyeSIsIm5vZGVzUXVlcnkiLCJwcm9jZWR1cmVDYWxsRXhwcmVzc2lvbnNOb2RlUXVlcnkiLCJub2RlUXVlcnkiLCJkZWZpbmUiLCJFeHByZXNzaW9ucyIsInN0cmluZyIsImFycmF5IiwiZ2V0U3RyaW5nIiwiZ2V0QXJyYXkiLCJnZXRMZW5ndGgiLCJsZW5ndGgiLCJnZXRFeHByZXNzaW9uIiwiaW5kZXgiLCJleHByZXNzaW9uIiwiYWRkRXhwcmVzc2lvbiIsInB1c2giLCJtYXBFeHByZXNzaW9uIiwiY2FsbGJhY2siLCJtYXAiLCJmb3JFYWNoRXhwcmVzc2lvbiIsImZvckVhY2giLCJldmFsdWF0ZSIsImNvbnRleHQiLCJleHByZXNzaW9ucyIsImZyb21BcnJheSIsImZyb21Ob2RlcyIsIm5vZGVzIiwiYXJyYXlGcm9tTm9kZXMiLCJzdHJpbmdGcm9tQXJyYXkiLCJmcm9tRXhwcmVzc2lvbiIsImZyb21Qcm9jZWR1cmVDYWxsTm9kZSIsInByb2NlZHVyZUNhbGxOb2RlIiwicHJvY2VkdXJlQ2FsbEV4cHJlc3Npb25zTm9kZSIsImV4cHJlc3Npb25zTm9kZSIsImV4cHJlc3Npb25zRnJvbUV4cHJlc3Npb25zTm9kZSIsIm5hbWUiLCJFeHByZXNzaW9uIiwiZWxlbWVudHMiLCJub2RlIiwiZnJvbU5vZGUiLCJleHByZXNzaW9uc1N0cmluZyIsInJlZHVjZSIsImV4cHJlc3Npb25TdHJpbmciLCJhc1N0cmluZyIsImFycmF5RnJvbUV4cHJlc3Npb25Ob2RlcyIsImV4cHJlc3Npb25Ob2RlcyIsImV4cHJlc3Npb25Ob2RlIiwiZnJvbUV4cHJlc3Npb25Ob2RlIiwibm9kZUFzU3RyaW5nIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFVQTs7O2VBQUE7OztnRUFScUI7cUJBR2lCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFdEMsSUFBTUEsdUJBQXVCQyxJQUFBQSxpQkFBVSxFQUFDLDRCQUNsQ0Msb0NBQW9DQyxJQUFBQSxnQkFBUyxFQUFDO0lBRXBELFdBQWVDLElBQUFBLGdCQUFNLGdDQUFDO2FBQU1DLFlBQ2RDLE1BQU0sRUFBRUMsS0FBSztnQ0FEQ0Y7UUFFeEIsSUFBSSxDQUFDQyxNQUFNLEdBQUdBO1FBQ2QsSUFBSSxDQUFDQyxLQUFLLEdBQUdBOzs7O1lBR2ZDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0YsTUFBTTtZQUNwQjs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0YsS0FBSztZQUNuQjs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNQyxTQUFTLElBQUksQ0FBQ0osS0FBSyxDQUFDSSxNQUFNO2dCQUVoQyxPQUFPQTtZQUNUOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBLGNBQWNDLEtBQUs7Z0JBQ2pCLElBQU1DLGFBQWEsSUFBSSxDQUFDUCxLQUFLLENBQUNNLE1BQU0sSUFBSSxNQUFPLEdBQUc7Z0JBRWxELE9BQU9DO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUEsY0FBY0QsVUFBVTtnQkFDdEIsSUFBSSxDQUFDUCxLQUFLLENBQUNTLElBQUksQ0FBQ0Y7WUFDbEI7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUEsY0FBY0MsUUFBUTtnQkFBSSxPQUFPLElBQUksQ0FBQ1gsS0FBSyxDQUFDWSxH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