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
var valuesNodeQuery = (0, _query.nodeQuery)("/assignment/procedureCall/values"), valueNodesQuery = (0, _query.nodesQuery)("/values/value");
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
            key: "resolve",
            value: function resolve(context) {
                var array = this.mapValue(function(value) {
                    value = value.resolve(context);
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
            key: "fromValuesNode",
            value: function fromValuesNode(valuesNode, context) {
                var values = null;
                if (valuesNode !== null) {
                    values = valuesFromValuesNode(valuesNode, context);
                }
                return values;
            }
        },
        {
            key: "fromAssignmentNode",
            value: function fromAssignmentNode(assignmentNode, context) {
                var values = null;
                var valuesNode = valuesNodeQuery(assignmentNode);
                if (valuesNode !== null) {
                    values = valuesFromValuesNode(valuesNode, context);
                }
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb20vdmFsdWVzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgZG9tIGZyb20gXCIuLi9kb21cIjtcblxuaW1wb3J0IHsgZG9tQXNzaWduZWQgfSBmcm9tIFwiLi4vZG9tXCI7XG5pbXBvcnQgeyBub2RlUXVlcnksIG5vZGVzUXVlcnkgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5cbmNvbnN0IHZhbHVlc05vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9hc3NpZ25tZW50L3Byb2NlZHVyZUNhbGwvdmFsdWVzXCIpLFxuICAgICAgdmFsdWVOb2Rlc1F1ZXJ5ID0gbm9kZXNRdWVyeShcIi92YWx1ZXMvdmFsdWVcIik7XG5cbmV4cG9ydCBkZWZhdWx0IGRvbUFzc2lnbmVkKGNsYXNzIFZhbHVlcyB7XG4gIGNvbnN0cnVjdG9yKHN0cmluZywgYXJyYXkpIHtcbiAgICB0aGlzLnN0cmluZyA9IHN0cmluZztcbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG4gIH1cblxuICBnZXRTdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RyaW5nO1xuICB9XG5cbiAgZ2V0QXJyYXkoKSB7XG4gICAgcmV0dXJuIHRoaXMuYXJyYXk7XG4gIH1cblxuICBnZXRMZW5ndGgoKSB7XG4gICAgY29uc3QgbGVuZ3RoID0gdGhpcy5hcnJheS5sZW5ndGg7XG5cbiAgICByZXR1cm4gbGVuZ3RoO1xuICB9XG5cbiAgZ2V0VmFsdWUoaW5kZXgpIHtcbiAgICBjb25zdCB2YWx1ZSA9IHRoaXMuYXJyYXlbaW5kZXhdIHx8IG51bGw7ICAvLy9cblxuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuXG4gIG1hcFZhbHVlKGNhbGxiYWNrKSB7IHJldHVybiB0aGlzLmFycmF5Lm1hcChjYWxsYmFjayk7IH1cblxuICBmb3JFYWNoVmFsdWUoY2FsbGJhY2spIHsgdGhpcy5hcnJheS5mb3JFYWNoKGNhbGxiYWNrKTsgfVxuXG4gIHJlc29sdmUoY29udGV4dCkge1xuICAgIGNvbnN0IGFycmF5ID0gdGhpcy5tYXBWYWx1ZSgodmFsdWUpID0+IHtcbiAgICAgICAgICAgIHZhbHVlID0gdmFsdWUucmVzb2x2ZShjb250ZXh0KTtcblxuICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIHZhbHVlcyA9IFZhbHVlcy5mcm9tQXJyYXkoYXJyYXksIGNvbnRleHQpOyAvLy9cblxuICAgIHJldHVybiB2YWx1ZXM7XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiVmFsdWVzXCI7XG5cbiAgc3RhdGljIGZyb21Ob2Rlcyhub2RlcywgY29udGV4dCkge1xuICAgIGNvbnN0IGFycmF5ID0gYXJyYXlGcm9tTm9kZXMobm9kZXMsIGNvbnRleHQpLFxuICAgICAgICAgIHN0cmluZyA9IHN0cmluZ0Zyb21BcnJheShhcnJheSwgY29udGV4dCksXG4gICAgICAgICAgdmFsdWVzID0gbmV3IFZhbHVlcyhzdHJpbmcsIGFycmF5KTtcblxuICAgIHJldHVybiB2YWx1ZXM7XG4gIH1cblxuICBzdGF0aWMgZnJvbUFycmF5KGFycmF5LCBjb250ZXh0KSB7XG4gICAgY29uc3Qgc3RyaW5nID0gc3RyaW5nRnJvbUFycmF5KGFycmF5LCBjb250ZXh0KSxcbiAgICAgICAgICB2YWx1ZXMgPSBuZXcgVmFsdWVzKHN0cmluZywgYXJyYXkpO1xuXG4gICAgcmV0dXJuIHZhbHVlcztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tVmFsdWVzTm9kZSh2YWx1ZXNOb2RlLCBjb250ZXh0KSB7XG4gICAgbGV0IHZhbHVlcyA9IG51bGw7XG5cbiAgICBpZiAodmFsdWVzTm9kZSAhPT0gbnVsbCkge1xuICAgICAgdmFsdWVzID0gdmFsdWVzRnJvbVZhbHVlc05vZGUodmFsdWVzTm9kZSwgY29udGV4dCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbHVlcztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQXNzaWdubWVudE5vZGUoYXNzaWdubWVudE5vZGUsIGNvbnRleHQpIHtcbiAgICBsZXQgdmFsdWVzID0gbnVsbDtcblxuICAgIGNvbnN0IHZhbHVlc05vZGUgPSB2YWx1ZXNOb2RlUXVlcnkoYXNzaWdubWVudE5vZGUpO1xuXG4gICAgaWYgKHZhbHVlc05vZGUgIT09IG51bGwpIHtcbiAgICAgIHZhbHVlcyA9IHZhbHVlc0Zyb21WYWx1ZXNOb2RlKHZhbHVlc05vZGUsIGNvbnRleHQpO1xuICAgIH1cblxuICAgIHJldHVybiB2YWx1ZXM7XG4gIH1cbn0pO1xuXG5mdW5jdGlvbiBhcnJheUZyb21Ob2Rlcyhub2RlcywgY29udGV4dCkge1xuICBjb25zdCB7IFZhbHVlIH0gPSBkb20sXG4gICAgICAgIGFycmF5ID0gbm9kZXMubWFwKChub2RlKSA9PiB7IC8vL1xuICAgICAgICAgIGNvbnN0IHZhbHVlID0gVmFsdWUuZnJvbU5vZGUobm9kZSwgY29udGV4dCk7XG5cbiAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgIH0pO1xuXG4gIHJldHVybiBhcnJheTtcbn1cblxuZnVuY3Rpb24gc3RyaW5nRnJvbUFycmF5KGFycmF5LCBjb250ZXh0KSB7XG4gIGNvbnN0IHZhbHVlc1N0cmluZyA9IGFycmF5LnJlZHVjZSgodmFsdWVzU3RyaW5nLCB2YWx1ZSkgPT4ge1xuICAgICAgICAgIGNvbnN0IHZhbHVlU3RyaW5nID0gdmFsdWUuYXNTdHJpbmcoY29udGV4dCk7XG5cbiAgICAgICAgICB2YWx1ZXNTdHJpbmcgPSAodmFsdWVzU3RyaW5nID09PSBudWxsKSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZVN0cmluZyA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYCR7dmFsdWVzU3RyaW5nfSwgJHt2YWx1ZVN0cmluZ31gO1xuXG4gICAgICAgICAgcmV0dXJuIHZhbHVlc1N0cmluZztcbiAgICAgICAgfSwgbnVsbCksXG4gICAgICAgIHN0cmluZyA9IHZhbHVlc1N0cmluZzsgIC8vL1xuXG4gIHJldHVybiBzdHJpbmc7XG59XG5cbmZ1bmN0aW9uIGFycmF5RnJvbVZhbHVlTm9kZXModmFsdWVOb2RlcywgY29udGV4dCkge1xuICBjb25zdCB7IFZhbHVlIH0gPSBkb20sXG4gICAgICAgIGFycmF5ID0gdmFsdWVOb2Rlcy5tYXAoKHZhbHVlTm9kZSkgPT4geyAvLy9cbiAgICAgICAgICBjb25zdCB2YWx1ZSA9IFZhbHVlLmZyb21WYWx1ZU5vZGUodmFsdWVOb2RlLCBjb250ZXh0KTtcblxuICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgfSk7XG5cbiAgcmV0dXJuIGFycmF5O1xufVxuXG5mdW5jdGlvbiB2YWx1ZXNGcm9tVmFsdWVzTm9kZSh2YWx1ZXNOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgVmFsdWVzIH0gPSBkb20sXG4gICAgICAgIG5vZGUgPSB2YWx1ZXNOb2RlLCAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIHZhbHVlTm9kZXMgPSB2YWx1ZU5vZGVzUXVlcnkodmFsdWVzTm9kZSksXG4gICAgICAgIGFycmF5ID0gYXJyYXlGcm9tVmFsdWVOb2Rlcyh2YWx1ZU5vZGVzLCBjb250ZXh0KSxcbiAgICAgICAgdmFsdWVzID0gbmV3IFZhbHVlcyhzdHJpbmcsIGFycmF5KTtcblxuICByZXR1cm4gdmFsdWVzO1xufVxuIl0sIm5hbWVzIjpbInZhbHVlc05vZGVRdWVyeSIsIm5vZGVRdWVyeSIsInZhbHVlTm9kZXNRdWVyeSIsIm5vZGVzUXVlcnkiLCJkb21Bc3NpZ25lZCIsIlZhbHVlcyIsInN0cmluZyIsImFycmF5IiwiZ2V0U3RyaW5nIiwiZ2V0QXJyYXkiLCJnZXRMZW5ndGgiLCJsZW5ndGgiLCJnZXRWYWx1ZSIsImluZGV4IiwidmFsdWUiLCJtYXBWYWx1ZSIsImNhbGxiYWNrIiwibWFwIiwiZm9yRWFjaFZhbHVlIiwiZm9yRWFjaCIsInJlc29sdmUiLCJjb250ZXh0IiwidmFsdWVzIiwiZnJvbUFycmF5IiwiZnJvbU5vZGVzIiwibm9kZXMiLCJhcnJheUZyb21Ob2RlcyIsInN0cmluZ0Zyb21BcnJheSIsImZyb21WYWx1ZXNOb2RlIiwidmFsdWVzTm9kZSIsInZhbHVlc0Zyb21WYWx1ZXNOb2RlIiwiZnJvbUFzc2lnbm1lbnROb2RlIiwiYXNzaWdubWVudE5vZGUiLCJuYW1lIiwiVmFsdWUiLCJkb20iLCJub2RlIiwiZnJvbU5vZGUiLCJ2YWx1ZXNTdHJpbmciLCJyZWR1Y2UiLCJ2YWx1ZVN0cmluZyIsImFzU3RyaW5nIiwiYXJyYXlGcm9tVmFsdWVOb2RlcyIsInZhbHVlTm9kZXMiLCJ2YWx1ZU5vZGUiLCJmcm9tVmFsdWVOb2RlIiwibm9kZUFzU3RyaW5nIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFVQTs7O2VBQUE7OzsyREFSZ0I7cUJBR3NCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFdEMsSUFBTUEsa0JBQWtCQyxJQUFBQSxnQkFBUyxFQUFDLHFDQUM1QkMsa0JBQWtCQyxJQUFBQSxpQkFBVSxFQUFDO0lBRW5DLFdBQWVDLElBQUFBLGdCQUFXLDJCQUFDO2FBQU1DLE9BQ25CQyxNQUFNLEVBQUVDLEtBQUs7Z0NBRE1GO1FBRTdCLElBQUksQ0FBQ0MsTUFBTSxHQUFHQTtRQUNkLElBQUksQ0FBQ0MsS0FBSyxHQUFHQTs7OztZQUdmQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNGLE1BQU07WUFDcEI7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNGLEtBQUs7WUFDbkI7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsU0FBUyxJQUFJLENBQUNKLEtBQUssQ0FBQ0ksTUFBTTtnQkFFaEMsT0FBT0E7WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQSxTQUFTQyxLQUFLO2dCQUNaLElBQU1DLFFBQVEsSUFBSSxDQUFDUCxLQUFLLENBQUNNLE1BQU0sSUFB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