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
var valueNodesQuery = (0, _query.nodesQuery)("/values/value");
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
            key: "fromValuesNode",
            value: function fromValuesNode(valuesNode, context) {
                var values = null;
                if (valuesNode !== null) {
                    var node = valuesNode, string = context.nodeAsString(node), valueNodes = valueNodesQuery(valuesNode), array = arrayFromValueNodes(valueNodes, context);
                    values = new Values(string, array);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb20vdmFsdWVzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgZG9tIGZyb20gXCIuLi9kb21cIjtcblxuaW1wb3J0IHsgbm9kZXNRdWVyeSB9IGZyb20gXCIuLi91dGlsaXRpZXMvcXVlcnlcIjtcbmltcG9ydCB7IGRvbUFzc2lnbmVkIH0gZnJvbSBcIi4uL2RvbVwiO1xuXG5jb25zdCB2YWx1ZU5vZGVzUXVlcnkgPSBub2Rlc1F1ZXJ5KFwiL3ZhbHVlcy92YWx1ZVwiKTtcblxuZXhwb3J0IGRlZmF1bHQgZG9tQXNzaWduZWQoY2xhc3MgVmFsdWVzIHtcbiAgY29uc3RydWN0b3Ioc3RyaW5nLCBhcnJheSkge1xuICAgIHRoaXMuc3RyaW5nID0gc3RyaW5nO1xuICAgIHRoaXMuYXJyYXkgPSBhcnJheTtcbiAgfVxuXG4gIGdldFN0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5zdHJpbmc7XG4gIH1cblxuICBnZXRBcnJheSgpIHtcbiAgICByZXR1cm4gdGhpcy5hcnJheTtcbiAgfVxuXG4gIGdldExlbmd0aCgpIHtcbiAgICBjb25zdCBsZW5ndGggPSB0aGlzLmFycmF5Lmxlbmd0aDtcblxuICAgIHJldHVybiBsZW5ndGg7XG4gIH1cblxuICBnZXRWYWx1ZShpbmRleCkge1xuICAgIGNvbnN0IHZhbHVlID0gdGhpcy5hcnJheVtpbmRleF0gfHwgbnVsbDsgIC8vL1xuXG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIlZhbHVlc1wiO1xuXG4gIHN0YXRpYyBmcm9tTm9kZXMobm9kZXMsIGNvbnRleHQpIHtcbiAgICBjb25zdCBhcnJheSA9IGFycmF5RnJvbU5vZGVzKG5vZGVzLCBjb250ZXh0KSxcbiAgICAgICAgICBzdHJpbmcgPSBzdHJpbmdGcm9tQXJyYXkoYXJyYXksIGNvbnRleHQpLFxuICAgICAgICAgIHZhbHVlcyA9IG5ldyBWYWx1ZXMoc3RyaW5nLCBhcnJheSk7XG5cbiAgICByZXR1cm4gdmFsdWVzO1xuICB9XG5cbiAgc3RhdGljIGZyb21WYWx1ZXNOb2RlKHZhbHVlc05vZGUsIGNvbnRleHQpIHtcbiAgICBsZXQgdmFsdWVzID0gbnVsbDtcblxuICAgIGlmICh2YWx1ZXNOb2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBub2RlID0gdmFsdWVzTm9kZSwgLy8vXG4gICAgICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgICAgIHZhbHVlTm9kZXMgPSB2YWx1ZU5vZGVzUXVlcnkodmFsdWVzTm9kZSksXG4gICAgICAgICAgICBhcnJheSA9IGFycmF5RnJvbVZhbHVlTm9kZXModmFsdWVOb2RlcywgY29udGV4dCk7XG5cbiAgICAgIHZhbHVlcyA9IG5ldyBWYWx1ZXMoc3RyaW5nLCBhcnJheSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbHVlcztcbiAgfVxufSk7XG5cbmZ1bmN0aW9uIGFycmF5RnJvbU5vZGVzKG5vZGVzLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgVmFsdWUgfSA9IGRvbSxcbiAgICAgICAgYXJyYXkgPSBub2Rlcy5tYXAoKG5vZGUpID0+IHsgLy8vXG4gICAgICAgICAgY29uc3QgdmFsdWUgPSBWYWx1ZS5mcm9tTm9kZShub2RlLCBjb250ZXh0KTtcblxuICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgfSk7XG5cbiAgcmV0dXJuIGFycmF5O1xufVxuXG5mdW5jdGlvbiBzdHJpbmdGcm9tQXJyYXkoYXJyYXksIGNvbnRleHQpIHtcbiAgY29uc3QgdmFsdWVzU3RyaW5nID0gYXJyYXkucmVkdWNlKCh2YWx1ZXNTdHJpbmcsIHZhbHVlKSA9PiB7XG4gICAgICAgICAgY29uc3QgdmFsdWVTdHJpbmcgPSB2YWx1ZS5nZXRTdHJpbmcoKTtcblxuICAgICAgICAgIHZhbHVlc1N0cmluZyA9ICh2YWx1ZXNTdHJpbmcgPT09IG51bGwpID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlU3RyaW5nIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBgJHt2YWx1ZXNTdHJpbmd9LCAke3ZhbHVlU3RyaW5nfWA7XG5cbiAgICAgICAgICByZXR1cm4gdmFsdWVzU3RyaW5nO1xuICAgICAgICB9LCBudWxsKSxcbiAgICAgICAgc3RyaW5nID0gdmFsdWVzU3RyaW5nOyAgLy8vXG5cbiAgcmV0dXJuIHN0cmluZztcbn1cblxuZnVuY3Rpb24gYXJyYXlGcm9tVmFsdWVOb2Rlcyh2YWx1ZU5vZGVzLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgVmFsdWUgfSA9IGRvbSxcbiAgICAgICAgYXJyYXkgPSB2YWx1ZU5vZGVzLm1hcCgodmFsdWVOb2RlKSA9PiB7IC8vL1xuICAgICAgICAgIGNvbnN0IHZhbHVlID0gVmFsdWUuZnJvbVZhbHVlTm9kZSh2YWx1ZU5vZGUsIGNvbnRleHQpO1xuXG4gICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICB9KTtcblxuICByZXR1cm4gYXJyYXk7XG59XG4iXSwibmFtZXMiOlsidmFsdWVOb2Rlc1F1ZXJ5Iiwibm9kZXNRdWVyeSIsImRvbUFzc2lnbmVkIiwiVmFsdWVzIiwic3RyaW5nIiwiYXJyYXkiLCJnZXRTdHJpbmciLCJnZXRBcnJheSIsImdldExlbmd0aCIsImxlbmd0aCIsImdldFZhbHVlIiwiaW5kZXgiLCJ2YWx1ZSIsImZyb21Ob2RlcyIsIm5vZGVzIiwiY29udGV4dCIsImFycmF5RnJvbU5vZGVzIiwic3RyaW5nRnJvbUFycmF5IiwidmFsdWVzIiwiZnJvbVZhbHVlc05vZGUiLCJ2YWx1ZXNOb2RlIiwibm9kZSIsIm5vZGVBc1N0cmluZyIsInZhbHVlTm9kZXMiLCJhcnJheUZyb21WYWx1ZU5vZGVzIiwibmFtZSIsIlZhbHVlIiwiZG9tIiwibWFwIiwiZnJvbU5vZGUiLCJ2YWx1ZXNTdHJpbmciLCJyZWR1Y2UiLCJ2YWx1ZVN0cmluZyIsInZhbHVlTm9kZSIsImZyb21WYWx1ZU5vZGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytC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