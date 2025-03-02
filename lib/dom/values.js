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
var _dom = /*#__PURE__*/ _interop_require_wildcard(require("../dom"));
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
var _Values;
var procedureCallValuesNodeQuery = (0, _query.nodeQuery)("/procedureCall/values"), valueNodesQuery = (0, _query.nodesQuery)("/values/value");
var _default = (0, _dom.domAssigned)((_Values = /*#__PURE__*/ function() {
    function Values(string, array) {
        _class_call_check(this, Values);
        this.string = string;
        this.array = array;
    }
    _create_class(Values, [
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
            key: "getValue",
            value: function getValue(index) {
                var value = this.array[index] || null; ///
                return value;
            }
        },
        {
            key: "addValue",
            value: function addValue(value) {
                this.array.push(value);
            }
        },
        {
            key: "mapValue",
            value: function mapValue(callback) {
                return this.array.map(callback);
            }
        },
        {
            key: "forEachValue",
            value: function forEachValue(callback) {
                this.array.forEach(callback);
            }
        },
        {
            key: "evaluate",
            value: function evaluate(context) {
                var array = this.mapValue(function(value) {
                    value = value.evaluate(context);
                    return value;
                }), values = Values.fromArray(array, context); ///
                return values;
            }
        }
    ], [
        {
            key: "fromNodes",
            value: function fromNodes(nodes, context) {
                var array = arrayFromNodes(nodes, context), string = stringFromArray(array, context), values = new Values(string, array);
                return values;
            }
        },
        {
            key: "fromArray",
            value: function fromArray(array, context) {
                var string = stringFromArray(array, context), values = new Values(string, array);
                return values;
            }
        },
        {
            key: "fromValue",
            value: function fromValue(value, context) {
                var array = [
                    value
                ], string = stringFromArray(array, context), values = new Values(string, array);
                return values;
            }
        },
        {
            key: "fromProcedureCallNode",
            value: function fromProcedureCallNode(procedureCallNode, context) {
                var procedureCallValuesNode = procedureCallValuesNodeQuery(procedureCallNode), valuesNode = procedureCallValuesNode, values = valuesFromValuesNode(valuesNode, context);
                return values;
            }
        }
    ]);
    return Values;
}(), _define_property(_Values, "name", "Values"), _Values));
function arrayFromNodes(nodes, context) {
    var Value = _dom.default.Value, array = nodes.map(function(node) {
        var value = Value.fromNode(node, context);
        return value;
    });
    return array;
}
function stringFromArray(array, context) {
    var valuesString = array.reduce(function(valuesString, value) {
        var valueString = value.asString(context);
        valuesString = valuesString === null ? valueString : "".concat(valuesString, ", ").concat(valueString);
        return valuesString;
    }, null), string = valuesString; ///
    return string;
}
function arrayFromValueNodes(valueNodes, context) {
    var Value = _dom.default.Value, array = valueNodes.map(function(valueNode) {
        var value = Value.fromValueNode(valueNode, context);
        return value;
    });
    return array;
}
function valuesFromValuesNode(valuesNode, context) {
    var Values = _dom.default.Values, node = valuesNode, string = context.nodeAsString(node), valueNodes = valueNodesQuery(valuesNode), array = arrayFromValueNodes(valueNodes, context), values = new Values(string, array);
    return values;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb20vdmFsdWVzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgZG9tIGZyb20gXCIuLi9kb21cIjtcblxuaW1wb3J0IHsgZG9tQXNzaWduZWQgfSBmcm9tIFwiLi4vZG9tXCI7XG5pbXBvcnQgeyBub2RlUXVlcnksIG5vZGVzUXVlcnkgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5cbmNvbnN0IHByb2NlZHVyZUNhbGxWYWx1ZXNOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvcHJvY2VkdXJlQ2FsbC92YWx1ZXNcIiksXG4gICAgICB2YWx1ZU5vZGVzUXVlcnkgPSBub2Rlc1F1ZXJ5KFwiL3ZhbHVlcy92YWx1ZVwiKTtcblxuZXhwb3J0IGRlZmF1bHQgZG9tQXNzaWduZWQoY2xhc3MgVmFsdWVzIHtcbiAgY29uc3RydWN0b3Ioc3RyaW5nLCBhcnJheSkge1xuICAgIHRoaXMuc3RyaW5nID0gc3RyaW5nO1xuICAgIHRoaXMuYXJyYXkgPSBhcnJheTtcbiAgfVxuXG4gIGdldFN0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5zdHJpbmc7XG4gIH1cblxuICBnZXRBcnJheSgpIHtcbiAgICByZXR1cm4gdGhpcy5hcnJheTtcbiAgfVxuXG4gIGdldExlbmd0aCgpIHtcbiAgICBjb25zdCBsZW5ndGggPSB0aGlzLmFycmF5Lmxlbmd0aDtcblxuICAgIHJldHVybiBsZW5ndGg7XG4gIH1cblxuICBnZXRWYWx1ZShpbmRleCkge1xuICAgIGNvbnN0IHZhbHVlID0gdGhpcy5hcnJheVtpbmRleF0gfHwgbnVsbDsgIC8vL1xuXG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG5cbiAgYWRkVmFsdWUodmFsdWUpIHtcbiAgICB0aGlzLmFycmF5LnB1c2godmFsdWUpO1xuICB9XG5cbiAgbWFwVmFsdWUoY2FsbGJhY2spIHsgcmV0dXJuIHRoaXMuYXJyYXkubWFwKGNhbGxiYWNrKTsgfVxuXG4gIGZvckVhY2hWYWx1ZShjYWxsYmFjaykgeyB0aGlzLmFycmF5LmZvckVhY2goY2FsbGJhY2spOyB9XG5cbiAgZXZhbHVhdGUoY29udGV4dCkge1xuICAgIGNvbnN0IGFycmF5ID0gdGhpcy5tYXBWYWx1ZSgodmFsdWUpID0+IHtcbiAgICAgICAgICAgIHZhbHVlID0gdmFsdWUuZXZhbHVhdGUoY29udGV4dCk7XG5cbiAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICB2YWx1ZXMgPSBWYWx1ZXMuZnJvbUFycmF5KGFycmF5LCBjb250ZXh0KTsgLy8vXG5cbiAgICByZXR1cm4gdmFsdWVzO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIlZhbHVlc1wiO1xuXG4gIHN0YXRpYyBmcm9tTm9kZXMobm9kZXMsIGNvbnRleHQpIHtcbiAgICBjb25zdCBhcnJheSA9IGFycmF5RnJvbU5vZGVzKG5vZGVzLCBjb250ZXh0KSxcbiAgICAgICAgICBzdHJpbmcgPSBzdHJpbmdGcm9tQXJyYXkoYXJyYXksIGNvbnRleHQpLFxuICAgICAgICAgIHZhbHVlcyA9IG5ldyBWYWx1ZXMoc3RyaW5nLCBhcnJheSk7XG5cbiAgICByZXR1cm4gdmFsdWVzO1xuICB9XG5cbiAgc3RhdGljIGZyb21BcnJheShhcnJheSwgY29udGV4dCkge1xuICAgIGNvbnN0IHN0cmluZyA9IHN0cmluZ0Zyb21BcnJheShhcnJheSwgY29udGV4dCksXG4gICAgICAgICAgdmFsdWVzID0gbmV3IFZhbHVlcyhzdHJpbmcsIGFycmF5KTtcblxuICAgIHJldHVybiB2YWx1ZXM7XG4gIH1cblxuICBzdGF0aWMgZnJvbVZhbHVlKHZhbHVlLCBjb250ZXh0KSB7XG4gICAgY29uc3QgYXJyYXkgPSBbXG4gICAgICAgICAgICB2YWx1ZVxuICAgICAgICAgIF0sXG4gICAgICAgICAgc3RyaW5nID0gc3RyaW5nRnJvbUFycmF5KGFycmF5LCBjb250ZXh0KSxcbiAgICAgICAgICB2YWx1ZXMgPSBuZXcgVmFsdWVzKHN0cmluZywgYXJyYXkpO1xuXG4gICAgcmV0dXJuIHZhbHVlcztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvY2VkdXJlQ2FsbE5vZGUocHJvY2VkdXJlQ2FsbE5vZGUsIGNvbnRleHQpIHtcbiAgICBjb25zdCBwcm9jZWR1cmVDYWxsVmFsdWVzTm9kZSA9IHByb2NlZHVyZUNhbGxWYWx1ZXNOb2RlUXVlcnkocHJvY2VkdXJlQ2FsbE5vZGUpLFxuICAgICAgICAgIHZhbHVlc05vZGUgPSBwcm9jZWR1cmVDYWxsVmFsdWVzTm9kZSwgLy8vXG4gICAgICAgICAgdmFsdWVzID0gdmFsdWVzRnJvbVZhbHVlc05vZGUodmFsdWVzTm9kZSwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gdmFsdWVzO1xuICB9XG59KTtcblxuZnVuY3Rpb24gYXJyYXlGcm9tTm9kZXMobm9kZXMsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBWYWx1ZSB9ID0gZG9tLFxuICAgICAgICBhcnJheSA9IG5vZGVzLm1hcCgobm9kZSkgPT4geyAvLy9cbiAgICAgICAgICBjb25zdCB2YWx1ZSA9IFZhbHVlLmZyb21Ob2RlKG5vZGUsIGNvbnRleHQpO1xuXG4gICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICB9KTtcblxuICByZXR1cm4gYXJyYXk7XG59XG5cbmZ1bmN0aW9uIHN0cmluZ0Zyb21BcnJheShhcnJheSwgY29udGV4dCkge1xuICBjb25zdCB2YWx1ZXNTdHJpbmcgPSBhcnJheS5yZWR1Y2UoKHZhbHVlc1N0cmluZywgdmFsdWUpID0+IHtcbiAgICAgICAgICBjb25zdCB2YWx1ZVN0cmluZyA9IHZhbHVlLmFzU3RyaW5nKGNvbnRleHQpO1xuXG4gICAgICAgICAgdmFsdWVzU3RyaW5nID0gKHZhbHVlc1N0cmluZyA9PT0gbnVsbCkgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVTdHJpbmcgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGAke3ZhbHVlc1N0cmluZ30sICR7dmFsdWVTdHJpbmd9YDtcblxuICAgICAgICAgIHJldHVybiB2YWx1ZXNTdHJpbmc7XG4gICAgICAgIH0sIG51bGwpLFxuICAgICAgICBzdHJpbmcgPSB2YWx1ZXNTdHJpbmc7ICAvLy9cblxuICByZXR1cm4gc3RyaW5nO1xufVxuXG5mdW5jdGlvbiBhcnJheUZyb21WYWx1ZU5vZGVzKHZhbHVlTm9kZXMsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBWYWx1ZSB9ID0gZG9tLFxuICAgICAgICBhcnJheSA9IHZhbHVlTm9kZXMubWFwKCh2YWx1ZU5vZGUpID0+IHsgLy8vXG4gICAgICAgICAgY29uc3QgdmFsdWUgPSBWYWx1ZS5mcm9tVmFsdWVOb2RlKHZhbHVlTm9kZSwgY29udGV4dCk7XG5cbiAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgIH0pO1xuXG4gIHJldHVybiBhcnJheTtcbn1cblxuZnVuY3Rpb24gdmFsdWVzRnJvbVZhbHVlc05vZGUodmFsdWVzTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFZhbHVlcyB9ID0gZG9tLFxuICAgICAgICBub2RlID0gdmFsdWVzTm9kZSwgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICB2YWx1ZU5vZGVzID0gdmFsdWVOb2Rlc1F1ZXJ5KHZhbHVlc05vZGUpLFxuICAgICAgICBhcnJheSA9IGFycmF5RnJvbVZhbHVlTm9kZXModmFsdWVOb2RlcywgY29udGV4dCksXG4gICAgICAgIHZhbHVlcyA9IG5ldyBWYWx1ZXMoc3RyaW5nLCBhcnJheSk7XG5cbiAgcmV0dXJuIHZhbHVlcztcbn1cbiJdLCJuYW1lcyI6WyJwcm9jZWR1cmVDYWxsVmFsdWVzTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5IiwidmFsdWVOb2Rlc1F1ZXJ5Iiwibm9kZXNRdWVyeSIsImRvbUFzc2lnbmVkIiwiVmFsdWVzIiwic3RyaW5nIiwiYXJyYXkiLCJnZXRTdHJpbmciLCJnZXRBcnJheSIsImdldExlbmd0aCIsImxlbmd0aCIsImdldFZhbHVlIiwiaW5kZXgiLCJ2YWx1ZSIsImFkZFZhbHVlIiwicHVzaCIsIm1hcFZhbHVlIiwiY2FsbGJhY2siLCJtYXAiLCJmb3JFYWNoVmFsdWUiLCJmb3JFYWNoIiwiZXZhbHVhdGUiLCJjb250ZXh0IiwidmFsdWVzIiwiZnJvbUFycmF5IiwiZnJvbU5vZGVzIiwibm9kZXMiLCJhcnJheUZyb21Ob2RlcyIsInN0cmluZ0Zyb21BcnJheSIsImZyb21WYWx1ZSIsImZyb21Qcm9jZWR1cmVDYWxsTm9kZSIsInByb2NlZHVyZUNhbGxOb2RlIiwicHJvY2VkdXJlQ2FsbFZhbHVlc05vZGUiLCJ2YWx1ZXNOb2RlIiwidmFsdWVzRnJvbVZhbHVlc05vZGUiLCJuYW1lIiwiVmFsdWUiLCJkb20iLCJub2RlIiwiZnJvbU5vZGUiLCJ2YWx1ZXNTdHJpbmciLCJyZWR1Y2UiLCJ2YWx1ZVN0cmluZyIsImFzU3RyaW5nIiwiYXJyYXlGcm9tVmFsdWVOb2RlcyIsInZhbHVlTm9kZXMiLCJ2YWx1ZU5vZGUiLCJmcm9tVmFsdWVOb2RlIiwibm9kZUFzU3RyaW5nIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFVQTs7O2VBQUE7OzsyREFSZ0I7cUJBR3NCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFdEMsSUFBTUEsK0JBQStCQyxJQUFBQSxnQkFBUyxFQUFDLDBCQUN6Q0Msa0JBQWtCQyxJQUFBQSxpQkFBVSxFQUFDO0lBRW5DLFdBQWVDLElBQUFBLGdCQUFXLDJCQUFDO2FBQU1DLE9BQ25CQyxNQUFNLEVBQUVDLEtBQUs7Z0NBRE1GO1FBRTdCLElBQUksQ0FBQ0MsTUFBTSxHQUFHQTtRQUNkLElBQUksQ0FBQ0MsS0FBSyxHQUFHQTs7OztZQUdmQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNGLE1BQU07WUFDcEI7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNGLEtBQUs7WUFDbkI7OztZQUVBRyxL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