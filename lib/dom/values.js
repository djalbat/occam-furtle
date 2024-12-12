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
        var valueString = value.getString();
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb20vdmFsdWVzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgZG9tIGZyb20gXCIuLi9kb21cIjtcblxuaW1wb3J0IHsgZG9tQXNzaWduZWQgfSBmcm9tIFwiLi4vZG9tXCI7XG5pbXBvcnQgeyBub2RlUXVlcnksIG5vZGVzUXVlcnkgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5cbmNvbnN0IHZhbHVlc05vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9hc3NpZ25tZW50L3Byb2NlZHVyZUNhbGwvdmFsdWVzXCIpLFxuICAgICAgdmFsdWVOb2Rlc1F1ZXJ5ID0gbm9kZXNRdWVyeShcIi92YWx1ZXMvdmFsdWVcIik7XG5cbmV4cG9ydCBkZWZhdWx0IGRvbUFzc2lnbmVkKGNsYXNzIFZhbHVlcyB7XG4gIGNvbnN0cnVjdG9yKHN0cmluZywgYXJyYXkpIHtcbiAgICB0aGlzLnN0cmluZyA9IHN0cmluZztcbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG4gIH1cblxuICBnZXRTdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RyaW5nO1xuICB9XG5cbiAgZ2V0QXJyYXkoKSB7XG4gICAgcmV0dXJuIHRoaXMuYXJyYXk7XG4gIH1cblxuICBnZXRMZW5ndGgoKSB7XG4gICAgY29uc3QgbGVuZ3RoID0gdGhpcy5hcnJheS5sZW5ndGg7XG5cbiAgICByZXR1cm4gbGVuZ3RoO1xuICB9XG5cbiAgZ2V0VmFsdWUoaW5kZXgpIHtcbiAgICBjb25zdCB2YWx1ZSA9IHRoaXMuYXJyYXlbaW5kZXhdIHx8IG51bGw7ICAvLy9cblxuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuXG4gIG1hcFZhbHVlKGNhbGxiYWNrKSB7IHJldHVybiB0aGlzLmFycmF5Lm1hcChjYWxsYmFjayk7IH1cblxuICBzdGF0aWMgbmFtZSA9IFwiVmFsdWVzXCI7XG5cbiAgc3RhdGljIGZyb21Ob2Rlcyhub2RlcywgY29udGV4dCkge1xuICAgIGNvbnN0IGFycmF5ID0gYXJyYXlGcm9tTm9kZXMobm9kZXMsIGNvbnRleHQpLFxuICAgICAgICAgIHN0cmluZyA9IHN0cmluZ0Zyb21BcnJheShhcnJheSwgY29udGV4dCksXG4gICAgICAgICAgdmFsdWVzID0gbmV3IFZhbHVlcyhzdHJpbmcsIGFycmF5KTtcblxuICAgIHJldHVybiB2YWx1ZXM7XG4gIH1cblxuICBzdGF0aWMgZnJvbUFycmF5KGFycmF5LCBjb250ZXh0KSB7XG4gICAgY29uc3Qgc3RyaW5nID0gc3RyaW5nRnJvbUFycmF5KGFycmF5LCBjb250ZXh0KSxcbiAgICAgICAgICB2YWx1ZXMgPSBuZXcgVmFsdWVzKHN0cmluZywgYXJyYXkpO1xuXG4gICAgcmV0dXJuIHZhbHVlcztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tVmFsdWVzTm9kZSh2YWx1ZXNOb2RlLCBjb250ZXh0KSB7XG4gICAgbGV0IHZhbHVlcyA9IG51bGw7XG5cbiAgICBpZiAodmFsdWVzTm9kZSAhPT0gbnVsbCkge1xuICAgICAgdmFsdWVzID0gdmFsdWVzRnJvbVZhbHVlc05vZGUodmFsdWVzTm9kZSwgY29udGV4dCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbHVlcztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQXNzaWdubWVudE5vZGUoYXNzaWdubWVudE5vZGUsIGNvbnRleHQpIHtcbiAgICBsZXQgdmFsdWVzID0gbnVsbDtcblxuICAgIGNvbnN0IHZhbHVlc05vZGUgPSB2YWx1ZXNOb2RlUXVlcnkoYXNzaWdubWVudE5vZGUpO1xuXG4gICAgaWYgKHZhbHVlc05vZGUgIT09IG51bGwpIHtcbiAgICAgIHZhbHVlcyA9IHZhbHVlc0Zyb21WYWx1ZXNOb2RlKHZhbHVlc05vZGUsIGNvbnRleHQpO1xuICAgIH1cblxuICAgIHJldHVybiB2YWx1ZXM7XG4gIH1cbn0pO1xuXG5mdW5jdGlvbiBhcnJheUZyb21Ob2Rlcyhub2RlcywgY29udGV4dCkge1xuICBjb25zdCB7IFZhbHVlIH0gPSBkb20sXG4gICAgICAgIGFycmF5ID0gbm9kZXMubWFwKChub2RlKSA9PiB7IC8vL1xuICAgICAgICAgIGNvbnN0IHZhbHVlID0gVmFsdWUuZnJvbU5vZGUobm9kZSwgY29udGV4dCk7XG5cbiAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgIH0pO1xuXG4gIHJldHVybiBhcnJheTtcbn1cblxuZnVuY3Rpb24gc3RyaW5nRnJvbUFycmF5KGFycmF5LCBjb250ZXh0KSB7XG4gIGNvbnN0IHZhbHVlc1N0cmluZyA9IGFycmF5LnJlZHVjZSgodmFsdWVzU3RyaW5nLCB2YWx1ZSkgPT4ge1xuICAgICAgICAgIGNvbnN0IHZhbHVlU3RyaW5nID0gdmFsdWUuZ2V0U3RyaW5nKCk7XG5cbiAgICAgICAgICB2YWx1ZXNTdHJpbmcgPSAodmFsdWVzU3RyaW5nID09PSBudWxsKSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZVN0cmluZyA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYCR7dmFsdWVzU3RyaW5nfSwgJHt2YWx1ZVN0cmluZ31gO1xuXG4gICAgICAgICAgcmV0dXJuIHZhbHVlc1N0cmluZztcbiAgICAgICAgfSwgbnVsbCksXG4gICAgICAgIHN0cmluZyA9IHZhbHVlc1N0cmluZzsgIC8vL1xuXG4gIHJldHVybiBzdHJpbmc7XG59XG5cbmZ1bmN0aW9uIGFycmF5RnJvbVZhbHVlTm9kZXModmFsdWVOb2RlcywgY29udGV4dCkge1xuICBjb25zdCB7IFZhbHVlIH0gPSBkb20sXG4gICAgICAgIGFycmF5ID0gdmFsdWVOb2Rlcy5tYXAoKHZhbHVlTm9kZSkgPT4geyAvLy9cbiAgICAgICAgICBjb25zdCB2YWx1ZSA9IFZhbHVlLmZyb21WYWx1ZU5vZGUodmFsdWVOb2RlLCBjb250ZXh0KTtcblxuICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgfSk7XG5cbiAgcmV0dXJuIGFycmF5O1xufVxuXG5mdW5jdGlvbiB2YWx1ZXNGcm9tVmFsdWVzTm9kZSh2YWx1ZXNOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgVmFsdWVzIH0gPSBkb20sXG4gICAgICAgIG5vZGUgPSB2YWx1ZXNOb2RlLCAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIHZhbHVlTm9kZXMgPSB2YWx1ZU5vZGVzUXVlcnkodmFsdWVzTm9kZSksXG4gICAgICAgIGFycmF5ID0gYXJyYXlGcm9tVmFsdWVOb2Rlcyh2YWx1ZU5vZGVzLCBjb250ZXh0KSxcbiAgICAgICAgdmFsdWVzID0gbmV3IFZhbHVlcyhzdHJpbmcsIGFycmF5KTtcblxuICByZXR1cm4gdmFsdWVzO1xufVxuIl0sIm5hbWVzIjpbInZhbHVlc05vZGVRdWVyeSIsIm5vZGVRdWVyeSIsInZhbHVlTm9kZXNRdWVyeSIsIm5vZGVzUXVlcnkiLCJkb21Bc3NpZ25lZCIsIlZhbHVlcyIsInN0cmluZyIsImFycmF5IiwiZ2V0U3RyaW5nIiwiZ2V0QXJyYXkiLCJnZXRMZW5ndGgiLCJsZW5ndGgiLCJnZXRWYWx1ZSIsImluZGV4IiwidmFsdWUiLCJtYXBWYWx1ZSIsImNhbGxiYWNrIiwibWFwIiwiZnJvbU5vZGVzIiwibm9kZXMiLCJjb250ZXh0IiwiYXJyYXlGcm9tTm9kZXMiLCJzdHJpbmdGcm9tQXJyYXkiLCJ2YWx1ZXMiLCJmcm9tQXJyYXkiLCJmcm9tVmFsdWVzTm9kZSIsInZhbHVlc05vZGUiLCJ2YWx1ZXNGcm9tVmFsdWVzTm9kZSIsImZyb21Bc3NpZ25tZW50Tm9kZSIsImFzc2lnbm1lbnROb2RlIiwibmFtZSIsIlZhbHVlIiwiZG9tIiwibm9kZSIsImZyb21Ob2RlIiwidmFsdWVzU3RyaW5nIiwicmVkdWNlIiwidmFsdWVTdHJpbmciLCJhcnJheUZyb21WYWx1ZU5vZGVzIiwidmFsdWVOb2RlcyIsInZhbHVlTm9kZSIsImZyb21WYWx1ZU5vZGUiLCJub2RlQXNTdHJpbmciXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVVBOzs7ZUFBQTs7OzJEQVJnQjtxQkFHc0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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