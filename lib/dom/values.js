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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb20vdmFsdWVzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgZG9tIGZyb20gXCIuLi9kb21cIjtcblxuaW1wb3J0IHsgZG9tQXNzaWduZWQgfSBmcm9tIFwiLi4vZG9tXCI7XG5pbXBvcnQgeyBub2RlUXVlcnksIG5vZGVzUXVlcnkgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5cbmNvbnN0IHZhbHVlc05vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9hc3NpZ25tZW50L3Byb2NlZHVyZUNhbGwvdmFsdWVzXCIpLFxuICAgICAgdmFsdWVOb2Rlc1F1ZXJ5ID0gbm9kZXNRdWVyeShcIi92YWx1ZXMvdmFsdWVcIik7XG5cbmV4cG9ydCBkZWZhdWx0IGRvbUFzc2lnbmVkKGNsYXNzIFZhbHVlcyB7XG4gIGNvbnN0cnVjdG9yKHN0cmluZywgYXJyYXkpIHtcbiAgICB0aGlzLnN0cmluZyA9IHN0cmluZztcbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG4gIH1cblxuICBnZXRTdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RyaW5nO1xuICB9XG5cbiAgZ2V0QXJyYXkoKSB7XG4gICAgcmV0dXJuIHRoaXMuYXJyYXk7XG4gIH1cblxuICBnZXRMZW5ndGgoKSB7XG4gICAgY29uc3QgbGVuZ3RoID0gdGhpcy5hcnJheS5sZW5ndGg7XG5cbiAgICByZXR1cm4gbGVuZ3RoO1xuICB9XG5cbiAgZ2V0VmFsdWUoaW5kZXgpIHtcbiAgICBjb25zdCB2YWx1ZSA9IHRoaXMuYXJyYXlbaW5kZXhdIHx8IG51bGw7ICAvLy9cblxuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuXG4gIG1hcFZhbHVlKGNhbGxiYWNrKSB7IHJldHVybiB0aGlzLmFycmF5Lm1hcChjYWxsYmFjayk7IH1cblxuICBmb3JFYWNoVmFsdWUoY2FsbGJhY2spIHsgdGhpcy5hcnJheS5mb3JFYWNoKGNhbGxiYWNrKTsgfVxuXG4gIGV2YWx1YXRlKGNvbnRleHQpIHtcbiAgICBjb25zdCBhcnJheSA9IHRoaXMubWFwVmFsdWUoKHZhbHVlKSA9PiB7XG4gICAgICAgICAgICB2YWx1ZSA9IHZhbHVlLmV2YWx1YXRlKGNvbnRleHQpO1xuXG4gICAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgICAgfSksXG4gICAgICAgICAgdmFsdWVzID0gVmFsdWVzLmZyb21BcnJheShhcnJheSwgY29udGV4dCk7IC8vL1xuXG4gICAgcmV0dXJuIHZhbHVlcztcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJWYWx1ZXNcIjtcblxuICBzdGF0aWMgZnJvbU5vZGVzKG5vZGVzLCBjb250ZXh0KSB7XG4gICAgY29uc3QgYXJyYXkgPSBhcnJheUZyb21Ob2Rlcyhub2RlcywgY29udGV4dCksXG4gICAgICAgICAgc3RyaW5nID0gc3RyaW5nRnJvbUFycmF5KGFycmF5LCBjb250ZXh0KSxcbiAgICAgICAgICB2YWx1ZXMgPSBuZXcgVmFsdWVzKHN0cmluZywgYXJyYXkpO1xuXG4gICAgcmV0dXJuIHZhbHVlcztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQXJyYXkoYXJyYXksIGNvbnRleHQpIHtcbiAgICBjb25zdCBzdHJpbmcgPSBzdHJpbmdGcm9tQXJyYXkoYXJyYXksIGNvbnRleHQpLFxuICAgICAgICAgIHZhbHVlcyA9IG5ldyBWYWx1ZXMoc3RyaW5nLCBhcnJheSk7XG5cbiAgICByZXR1cm4gdmFsdWVzO1xuICB9XG5cbiAgc3RhdGljIGZyb21WYWx1ZSh2YWx1ZSwgY29udGV4dCkge1xuICAgIGNvbnN0IGFycmF5ID0gW1xuICAgICAgICAgICAgdmFsdWVcbiAgICAgICAgICBdLFxuICAgICAgICAgIHN0cmluZyA9IHN0cmluZ0Zyb21BcnJheShhcnJheSwgY29udGV4dCksXG4gICAgICAgICAgdmFsdWVzID0gbmV3IFZhbHVlcyhzdHJpbmcsIGFycmF5KTtcblxuICAgIHJldHVybiB2YWx1ZXM7XG4gIH1cblxuICBzdGF0aWMgZnJvbVZhbHVlc05vZGUodmFsdWVzTm9kZSwgY29udGV4dCkge1xuICAgIGxldCB2YWx1ZXMgPSBudWxsO1xuXG4gICAgaWYgKHZhbHVlc05vZGUgIT09IG51bGwpIHtcbiAgICAgIHZhbHVlcyA9IHZhbHVlc0Zyb21WYWx1ZXNOb2RlKHZhbHVlc05vZGUsIGNvbnRleHQpO1xuICAgIH1cblxuICAgIHJldHVybiB2YWx1ZXM7XG4gIH1cblxuICBzdGF0aWMgZnJvbUFzc2lnbm1lbnROb2RlKGFzc2lnbm1lbnROb2RlLCBjb250ZXh0KSB7XG4gICAgbGV0IHZhbHVlcyA9IG51bGw7XG5cbiAgICBjb25zdCB2YWx1ZXNOb2RlID0gdmFsdWVzTm9kZVF1ZXJ5KGFzc2lnbm1lbnROb2RlKTtcblxuICAgIGlmICh2YWx1ZXNOb2RlICE9PSBudWxsKSB7XG4gICAgICB2YWx1ZXMgPSB2YWx1ZXNGcm9tVmFsdWVzTm9kZSh2YWx1ZXNOb2RlLCBjb250ZXh0KTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmFsdWVzO1xuICB9XG59KTtcblxuZnVuY3Rpb24gYXJyYXlGcm9tTm9kZXMobm9kZXMsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBWYWx1ZSB9ID0gZG9tLFxuICAgICAgICBhcnJheSA9IG5vZGVzLm1hcCgobm9kZSkgPT4geyAvLy9cbiAgICAgICAgICBjb25zdCB2YWx1ZSA9IFZhbHVlLmZyb21Ob2RlKG5vZGUsIGNvbnRleHQpO1xuXG4gICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICB9KTtcblxuICByZXR1cm4gYXJyYXk7XG59XG5cbmZ1bmN0aW9uIHN0cmluZ0Zyb21BcnJheShhcnJheSwgY29udGV4dCkge1xuICBjb25zdCB2YWx1ZXNTdHJpbmcgPSBhcnJheS5yZWR1Y2UoKHZhbHVlc1N0cmluZywgdmFsdWUpID0+IHtcbiAgICAgICAgICBjb25zdCB2YWx1ZVN0cmluZyA9IHZhbHVlLmFzU3RyaW5nKGNvbnRleHQpO1xuXG4gICAgICAgICAgdmFsdWVzU3RyaW5nID0gKHZhbHVlc1N0cmluZyA9PT0gbnVsbCkgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVTdHJpbmcgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGAke3ZhbHVlc1N0cmluZ30sICR7dmFsdWVTdHJpbmd9YDtcblxuICAgICAgICAgIHJldHVybiB2YWx1ZXNTdHJpbmc7XG4gICAgICAgIH0sIG51bGwpLFxuICAgICAgICBzdHJpbmcgPSB2YWx1ZXNTdHJpbmc7ICAvLy9cblxuICByZXR1cm4gc3RyaW5nO1xufVxuXG5mdW5jdGlvbiBhcnJheUZyb21WYWx1ZU5vZGVzKHZhbHVlTm9kZXMsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBWYWx1ZSB9ID0gZG9tLFxuICAgICAgICBhcnJheSA9IHZhbHVlTm9kZXMubWFwKCh2YWx1ZU5vZGUpID0+IHsgLy8vXG4gICAgICAgICAgY29uc3QgdmFsdWUgPSBWYWx1ZS5mcm9tVmFsdWVOb2RlKHZhbHVlTm9kZSwgY29udGV4dCk7XG5cbiAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgIH0pO1xuXG4gIHJldHVybiBhcnJheTtcbn1cblxuZnVuY3Rpb24gdmFsdWVzRnJvbVZhbHVlc05vZGUodmFsdWVzTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFZhbHVlcyB9ID0gZG9tLFxuICAgICAgICBub2RlID0gdmFsdWVzTm9kZSwgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICB2YWx1ZU5vZGVzID0gdmFsdWVOb2Rlc1F1ZXJ5KHZhbHVlc05vZGUpLFxuICAgICAgICBhcnJheSA9IGFycmF5RnJvbVZhbHVlTm9kZXModmFsdWVOb2RlcywgY29udGV4dCksXG4gICAgICAgIHZhbHVlcyA9IG5ldyBWYWx1ZXMoc3RyaW5nLCBhcnJheSk7XG5cbiAgcmV0dXJuIHZhbHVlcztcbn1cbiJdLCJuYW1lcyI6WyJ2YWx1ZXNOb2RlUXVlcnkiLCJub2RlUXVlcnkiLCJ2YWx1ZU5vZGVzUXVlcnkiLCJub2Rlc1F1ZXJ5IiwiZG9tQXNzaWduZWQiLCJWYWx1ZXMiLCJzdHJpbmciLCJhcnJheSIsImdldFN0cmluZyIsImdldEFycmF5IiwiZ2V0TGVuZ3RoIiwibGVuZ3RoIiwiZ2V0VmFsdWUiLCJpbmRleCIsInZhbHVlIiwibWFwVmFsdWUiLCJjYWxsYmFjayIsIm1hcCIsImZvckVhY2hWYWx1ZSIsImZvckVhY2giLCJldmFsdWF0ZSIsImNvbnRleHQiLCJ2YWx1ZXMiLCJmcm9tQXJyYXkiLCJmcm9tTm9kZXMiLCJub2RlcyIsImFycmF5RnJvbU5vZGVzIiwic3RyaW5nRnJvbUFycmF5IiwiZnJvbVZhbHVlIiwiZnJvbVZhbHVlc05vZGUiLCJ2YWx1ZXNOb2RlIiwidmFsdWVzRnJvbVZhbHVlc05vZGUiLCJmcm9tQXNzaWdubWVudE5vZGUiLCJhc3NpZ25tZW50Tm9kZSIsIm5hbWUiLCJWYWx1ZSIsImRvbSIsIm5vZGUiLCJmcm9tTm9kZSIsInZhbHVlc1N0cmluZyIsInJlZHVjZSIsInZhbHVlU3RyaW5nIiwiYXNTdHJpbmciLCJhcnJheUZyb21WYWx1ZU5vZGVzIiwidmFsdWVOb2RlcyIsInZhbHVlTm9kZSIsImZyb21WYWx1ZU5vZGUiLCJub2RlQXNTdHJpbmciXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVVBOzs7ZUFBQTs7OzJEQVJnQjtxQkFHc0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV0QyxJQUFNQSxrQkFBa0JDLElBQUFBLGdCQUFTLEVBQUMscUNBQzVCQyxrQkFBa0JDLElBQUFBLGlCQUFVLEVBQUM7SUFFbkMsV0FBZUMsSUFBQUEsZ0JBQVcsMkJBQUM7YUFBTUMsT0FDbkJDLE1BQU0sRUFBRUMsS0FBSztnQ0FETUY7UUFFN0IsSUFBSSxDQUFDQyxNQUFNLEdBQUdBO1FBQ2QsSUFBSSxDQUFDQyxLQUFLLEdBQUdBOzs7O1lBR2ZDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0YsTUFBTTtZQUNw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