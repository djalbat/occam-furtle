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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb20vdmFsdWVzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgZG9tIGZyb20gXCIuLi9kb21cIjtcblxuaW1wb3J0IHsgZG9tQXNzaWduZWQgfSBmcm9tIFwiLi4vZG9tXCI7XG5pbXBvcnQgeyBub2RlUXVlcnksIG5vZGVzUXVlcnkgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5cbmNvbnN0IHZhbHVlc05vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9hc3NpZ25tZW50L3Byb2NlZHVyZUNhbGwvdmFsdWVzXCIpLFxuICAgICAgdmFsdWVOb2Rlc1F1ZXJ5ID0gbm9kZXNRdWVyeShcIi92YWx1ZXMvdmFsdWVcIik7XG5cbmV4cG9ydCBkZWZhdWx0IGRvbUFzc2lnbmVkKGNsYXNzIFZhbHVlcyB7XG4gIGNvbnN0cnVjdG9yKHN0cmluZywgYXJyYXkpIHtcbiAgICB0aGlzLnN0cmluZyA9IHN0cmluZztcbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG4gIH1cblxuICBnZXRTdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RyaW5nO1xuICB9XG5cbiAgZ2V0QXJyYXkoKSB7XG4gICAgcmV0dXJuIHRoaXMuYXJyYXk7XG4gIH1cblxuICBnZXRMZW5ndGgoKSB7XG4gICAgY29uc3QgbGVuZ3RoID0gdGhpcy5hcnJheS5sZW5ndGg7XG5cbiAgICByZXR1cm4gbGVuZ3RoO1xuICB9XG5cbiAgZ2V0VmFsdWUoaW5kZXgpIHtcbiAgICBjb25zdCB2YWx1ZSA9IHRoaXMuYXJyYXlbaW5kZXhdIHx8IG51bGw7ICAvLy9cblxuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuXG4gIG1hcFZhbHVlKGNhbGxiYWNrKSB7IHJldHVybiB0aGlzLmFycmF5Lm1hcChjYWxsYmFjayk7IH1cblxuICBmb3JFYWNoVmFsdWUoY2FsbGJhY2spIHsgdGhpcy5hcnJheS5mb3JFYWNoKGNhbGxiYWNrKTsgfVxuXG4gIHJlc29sdmUoY29udGV4dCkge1xuICAgIGNvbnN0IGFycmF5ID0gdGhpcy5tYXBWYWx1ZSgodmFsdWUpID0+IHtcbiAgICAgICAgICAgIHZhbHVlID0gdmFsdWUucmVzb2x2ZShjb250ZXh0KTtcblxuICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIHZhbHVlcyA9IFZhbHVlcy5mcm9tQXJyYXkoYXJyYXksIGNvbnRleHQpOyAvLy9cblxuICAgIHJldHVybiB2YWx1ZXM7XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiVmFsdWVzXCI7XG5cbiAgc3RhdGljIGZyb21Ob2Rlcyhub2RlcywgY29udGV4dCkge1xuICAgIGNvbnN0IGFycmF5ID0gYXJyYXlGcm9tTm9kZXMobm9kZXMsIGNvbnRleHQpLFxuICAgICAgICAgIHN0cmluZyA9IHN0cmluZ0Zyb21BcnJheShhcnJheSwgY29udGV4dCksXG4gICAgICAgICAgdmFsdWVzID0gbmV3IFZhbHVlcyhzdHJpbmcsIGFycmF5KTtcblxuICAgIHJldHVybiB2YWx1ZXM7XG4gIH1cblxuICBzdGF0aWMgZnJvbUFycmF5KGFycmF5LCBjb250ZXh0KSB7XG4gICAgY29uc3Qgc3RyaW5nID0gc3RyaW5nRnJvbUFycmF5KGFycmF5LCBjb250ZXh0KSxcbiAgICAgICAgICB2YWx1ZXMgPSBuZXcgVmFsdWVzKHN0cmluZywgYXJyYXkpO1xuXG4gICAgcmV0dXJuIHZhbHVlcztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tVmFsdWUodmFsdWUsIGNvbnRleHQpIHtcbiAgICBjb25zdCBhcnJheSA9IFtcbiAgICAgICAgICAgIHZhbHVlXG4gICAgICAgICAgXSxcbiAgICAgICAgICBzdHJpbmcgPSBzdHJpbmdGcm9tQXJyYXkoYXJyYXksIGNvbnRleHQpLFxuICAgICAgICAgIHZhbHVlcyA9IG5ldyBWYWx1ZXMoc3RyaW5nLCBhcnJheSk7XG5cbiAgICByZXR1cm4gdmFsdWVzO1xuICB9XG5cbiAgc3RhdGljIGZyb21WYWx1ZXNOb2RlKHZhbHVlc05vZGUsIGNvbnRleHQpIHtcbiAgICBsZXQgdmFsdWVzID0gbnVsbDtcblxuICAgIGlmICh2YWx1ZXNOb2RlICE9PSBudWxsKSB7XG4gICAgICB2YWx1ZXMgPSB2YWx1ZXNGcm9tVmFsdWVzTm9kZSh2YWx1ZXNOb2RlLCBjb250ZXh0KTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmFsdWVzO1xuICB9XG5cbiAgc3RhdGljIGZyb21Bc3NpZ25tZW50Tm9kZShhc3NpZ25tZW50Tm9kZSwgY29udGV4dCkge1xuICAgIGxldCB2YWx1ZXMgPSBudWxsO1xuXG4gICAgY29uc3QgdmFsdWVzTm9kZSA9IHZhbHVlc05vZGVRdWVyeShhc3NpZ25tZW50Tm9kZSk7XG5cbiAgICBpZiAodmFsdWVzTm9kZSAhPT0gbnVsbCkge1xuICAgICAgdmFsdWVzID0gdmFsdWVzRnJvbVZhbHVlc05vZGUodmFsdWVzTm9kZSwgY29udGV4dCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbHVlcztcbiAgfVxufSk7XG5cbmZ1bmN0aW9uIGFycmF5RnJvbU5vZGVzKG5vZGVzLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgVmFsdWUgfSA9IGRvbSxcbiAgICAgICAgYXJyYXkgPSBub2Rlcy5tYXAoKG5vZGUpID0+IHsgLy8vXG4gICAgICAgICAgY29uc3QgdmFsdWUgPSBWYWx1ZS5mcm9tTm9kZShub2RlLCBjb250ZXh0KTtcblxuICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgfSk7XG5cbiAgcmV0dXJuIGFycmF5O1xufVxuXG5mdW5jdGlvbiBzdHJpbmdGcm9tQXJyYXkoYXJyYXksIGNvbnRleHQpIHtcbiAgY29uc3QgdmFsdWVzU3RyaW5nID0gYXJyYXkucmVkdWNlKCh2YWx1ZXNTdHJpbmcsIHZhbHVlKSA9PiB7XG4gICAgICAgICAgY29uc3QgdmFsdWVTdHJpbmcgPSB2YWx1ZS5hc1N0cmluZyhjb250ZXh0KTtcblxuICAgICAgICAgIHZhbHVlc1N0cmluZyA9ICh2YWx1ZXNTdHJpbmcgPT09IG51bGwpID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlU3RyaW5nIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBgJHt2YWx1ZXNTdHJpbmd9LCAke3ZhbHVlU3RyaW5nfWA7XG5cbiAgICAgICAgICByZXR1cm4gdmFsdWVzU3RyaW5nO1xuICAgICAgICB9LCBudWxsKSxcbiAgICAgICAgc3RyaW5nID0gdmFsdWVzU3RyaW5nOyAgLy8vXG5cbiAgcmV0dXJuIHN0cmluZztcbn1cblxuZnVuY3Rpb24gYXJyYXlGcm9tVmFsdWVOb2Rlcyh2YWx1ZU5vZGVzLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgVmFsdWUgfSA9IGRvbSxcbiAgICAgICAgYXJyYXkgPSB2YWx1ZU5vZGVzLm1hcCgodmFsdWVOb2RlKSA9PiB7IC8vL1xuICAgICAgICAgIGNvbnN0IHZhbHVlID0gVmFsdWUuZnJvbVZhbHVlTm9kZSh2YWx1ZU5vZGUsIGNvbnRleHQpO1xuXG4gICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICB9KTtcblxuICByZXR1cm4gYXJyYXk7XG59XG5cbmZ1bmN0aW9uIHZhbHVlc0Zyb21WYWx1ZXNOb2RlKHZhbHVlc05vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBWYWx1ZXMgfSA9IGRvbSxcbiAgICAgICAgbm9kZSA9IHZhbHVlc05vZGUsIC8vL1xuICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgdmFsdWVOb2RlcyA9IHZhbHVlTm9kZXNRdWVyeSh2YWx1ZXNOb2RlKSxcbiAgICAgICAgYXJyYXkgPSBhcnJheUZyb21WYWx1ZU5vZGVzKHZhbHVlTm9kZXMsIGNvbnRleHQpLFxuICAgICAgICB2YWx1ZXMgPSBuZXcgVmFsdWVzKHN0cmluZywgYXJyYXkpO1xuXG4gIHJldHVybiB2YWx1ZXM7XG59XG4iXSwibmFtZXMiOlsidmFsdWVzTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5IiwidmFsdWVOb2Rlc1F1ZXJ5Iiwibm9kZXNRdWVyeSIsImRvbUFzc2lnbmVkIiwiVmFsdWVzIiwic3RyaW5nIiwiYXJyYXkiLCJnZXRTdHJpbmciLCJnZXRBcnJheSIsImdldExlbmd0aCIsImxlbmd0aCIsImdldFZhbHVlIiwiaW5kZXgiLCJ2YWx1ZSIsIm1hcFZhbHVlIiwiY2FsbGJhY2siLCJtYXAiLCJmb3JFYWNoVmFsdWUiLCJmb3JFYWNoIiwicmVzb2x2ZSIsImNvbnRleHQiLCJ2YWx1ZXMiLCJmcm9tQXJyYXkiLCJmcm9tTm9kZXMiLCJub2RlcyIsImFycmF5RnJvbU5vZGVzIiwic3RyaW5nRnJvbUFycmF5IiwiZnJvbVZhbHVlIiwiZnJvbVZhbHVlc05vZGUiLCJ2YWx1ZXNOb2RlIiwidmFsdWVzRnJvbVZhbHVlc05vZGUiLCJmcm9tQXNzaWdubWVudE5vZGUiLCJhc3NpZ25tZW50Tm9kZSIsIm5hbWUiLCJWYWx1ZSIsImRvbSIsIm5vZGUiLCJmcm9tTm9kZSIsInZhbHVlc1N0cmluZyIsInJlZHVjZSIsInZhbHVlU3RyaW5nIiwiYXNTdHJpbmciLCJhcnJheUZyb21WYWx1ZU5vZGVzIiwidmFsdWVOb2RlcyIsInZhbHVlTm9kZSIsImZyb21WYWx1ZU5vZGUiLCJub2RlQXNTdHJpbmciXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVVBOzs7ZUFBQTs7OzJEQVJnQjtxQkFHc0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV0QyxJQUFNQSxrQkFBa0JDLElBQUFBLGdCQUFTLEVBQUMscUNBQzVCQyxrQkFBa0JDLElBQUFBLGlCQUFVLEVBQUM7SUFFbkMsV0FBZUMsSUFBQUEsZ0JBQVcsMkJBQUM7YUFBTUMsT0FDbkJDLE1BQU0sRUFBRUMsS0FBSztnQ0FETUY7UUFFN0IsSUFBSSxDQUFDQyxNQUFNLEdBQUdBO1FBQ2QsSUFBSSxDQUFDQyxLQUFLLEdBQUdBOzs7O1lBR2ZDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0YsTUFBTTtZQUNwQjs7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