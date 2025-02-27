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
var _exception = /*#__PURE__*/ _interop_require_default(require("../exception"));
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
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
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
var _Assignment;
var _default = (0, _dom.domAssigned)((_Assignment = /*#__PURE__*/ function() {
    function Assignment(string, value) {
        _class_call_check(this, Assignment);
        this.string = string;
        this.value = value;
    }
    _create_class(Assignment, [
        {
            key: "getString",
            value: function getString() {
                return this.string;
            }
        },
        {
            key: "getValue",
            value: function getValue() {
                return this.value;
            }
        },
        {
            key: "evaluate",
            value: function evaluate(context) {
                var value;
                var assignmentString = this.string; ///
                context.trace("Evaluating the '".concat(assignmentString, "' assignment..."));
                value = this.value.evaluate(context);
                if (value === null) {
                    var assignmentString1 = this.string, message = "The '".concat(assignmentString1, "' assigment cannot be evaluated."), exception = _exception.default.fromMessage(message);
                    throw exception;
                }
                context.debug("...evaluated the '".concat(assignmentString, "' assignment."));
                return value;
            }
        }
    ], [
        {
            key: "fromNode",
            value: function fromNode(node, context) {
                var Value = _dom.default.Value, value = Value.fromNode(node, context), string = stringFromValue(value, context), assignment = new Assignment(string, value);
                return assignment;
            }
        },
        {
            key: "fromValue",
            value: function fromValue(value, context) {
                var string = stringFromValue(value, context), assignment = new Assignment(string, value);
                return assignment;
            }
        },
        {
            key: "fromAssignmentNode",
            value: function fromAssignmentNode(assignmentNode, context) {
                var assignment = assignmentFromAssignmentNode(assignmentNode, context);
                return assignment;
            }
        }
    ]);
    return Assignment;
}(), _define_property(_Assignment, "name", "Assignment"), _Assignment));
function stringFromValue(value, context) {
    var valueString = value.asString(context), string = "= ".concat(valueString);
    return string;
}
function assignmentFromAssignmentNode(assignmentNode, context) {
    var Assignment = _dom.default.Assignment, Value = _dom.default.Value, node = assignmentNode, string = context.nodeAsString(node), value = Value.fromAssignmentNode(assignmentNode, context), assignment = new Assignment(string, value);
    return assignment;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb20vYXNzaWdubWVudC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IGRvbSBmcm9tIFwiLi4vZG9tXCI7XG5pbXBvcnQgRXhjZXB0aW9uIGZyb20gXCIuLi9leGNlcHRpb25cIjtcblxuaW1wb3J0IHsgZG9tQXNzaWduZWQgfSBmcm9tIFwiLi4vZG9tXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGRvbUFzc2lnbmVkKGNsYXNzIEFzc2lnbm1lbnQge1xuICBjb25zdHJ1Y3RvcihzdHJpbmcsIHZhbHVlKSB7XG4gICAgdGhpcy5zdHJpbmcgPSBzdHJpbmc7XG4gICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICB9XG5cbiAgZ2V0U3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLnN0cmluZztcbiAgfVxuXG4gIGdldFZhbHVlKCkge1xuICAgIHJldHVybiB0aGlzLnZhbHVlO1xuICB9XG5cbiAgZXZhbHVhdGUoY29udGV4dCkge1xuICAgIGxldCB2YWx1ZTtcblxuICAgIGNvbnN0IGFzc2lnbm1lbnRTdHJpbmcgPSB0aGlzLnN0cmluZzsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBFdmFsdWF0aW5nIHRoZSAnJHthc3NpZ25tZW50U3RyaW5nfScgYXNzaWdubWVudC4uLmApO1xuXG4gICAgdmFsdWUgPSB0aGlzLnZhbHVlLmV2YWx1YXRlKGNvbnRleHQpO1xuXG4gICAgaWYgKHZhbHVlID09PSBudWxsKSB7XG4gICAgICBjb25zdCBhc3NpZ25tZW50U3RyaW5nID0gdGhpcy5zdHJpbmcsIC8vL1xuICAgICAgICAgICAgbWVzc2FnZSA9IGBUaGUgJyR7YXNzaWdubWVudFN0cmluZ30nIGFzc2lnbWVudCBjYW5ub3QgYmUgZXZhbHVhdGVkLmAsXG4gICAgICAgICAgICBleGNlcHRpb24gPSBFeGNlcHRpb24uZnJvbU1lc3NhZ2UobWVzc2FnZSk7XG5cbiAgICAgIHRocm93IGV4Y2VwdGlvbjtcbiAgICB9XG5cbiAgICBjb250ZXh0LmRlYnVnKGAuLi5ldmFsdWF0ZWQgdGhlICcke2Fzc2lnbm1lbnRTdHJpbmd9JyBhc3NpZ25tZW50LmApO1xuXG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIkFzc2lnbm1lbnRcIjtcblxuICBzdGF0aWMgZnJvbU5vZGUobm9kZSwgY29udGV4dCkge1xuICAgIGNvbnN0IHsgVmFsdWUgfSA9IGRvbSxcbiAgICAgICAgICB2YWx1ZSA9IFZhbHVlLmZyb21Ob2RlKG5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgIHN0cmluZyA9IHN0cmluZ0Zyb21WYWx1ZSh2YWx1ZSwgY29udGV4dCksXG4gICAgICAgICAgYXNzaWdubWVudCA9IG5ldyBBc3NpZ25tZW50KHN0cmluZywgdmFsdWUpO1xuXG4gICAgcmV0dXJuIGFzc2lnbm1lbnQ7XG4gIH1cblxuICBzdGF0aWMgZnJvbVZhbHVlKHZhbHVlLCBjb250ZXh0KSB7XG4gICAgY29uc3Qgc3RyaW5nID0gc3RyaW5nRnJvbVZhbHVlKHZhbHVlLCBjb250ZXh0KSxcbiAgICAgICAgICBhc3NpZ25tZW50ID0gbmV3IEFzc2lnbm1lbnQoc3RyaW5nLCB2YWx1ZSk7XG5cbiAgICByZXR1cm4gYXNzaWdubWVudDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQXNzaWdubWVudE5vZGUoYXNzaWdubWVudE5vZGUsIGNvbnRleHQpIHtcbiAgICBjb25zdCBhc3NpZ25tZW50ID0gYXNzaWdubWVudEZyb21Bc3NpZ25tZW50Tm9kZShhc3NpZ25tZW50Tm9kZSwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gYXNzaWdubWVudDtcbiAgfVxufSk7XG5cbmZ1bmN0aW9uIHN0cmluZ0Zyb21WYWx1ZSh2YWx1ZSwgY29udGV4dCkge1xuICBjb25zdCB2YWx1ZVN0cmluZyA9IHZhbHVlLmFzU3RyaW5nKGNvbnRleHQpLFxuICAgICAgICBzdHJpbmcgPSBgPSAke3ZhbHVlU3RyaW5nfWA7XG5cbiAgcmV0dXJuIHN0cmluZztcbn1cblxuZnVuY3Rpb24gYXNzaWdubWVudEZyb21Bc3NpZ25tZW50Tm9kZShhc3NpZ25tZW50Tm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IEFzc2lnbm1lbnQsIFZhbHVlIH0gPSBkb20sXG4gICAgICAgIG5vZGUgPSBhc3NpZ25tZW50Tm9kZSwgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICB2YWx1ZSA9IFZhbHVlLmZyb21Bc3NpZ25tZW50Tm9kZShhc3NpZ25tZW50Tm9kZSwgY29udGV4dCksXG4gICAgICAgIGFzc2lnbm1lbnQgPSBuZXcgQXNzaWdubWVudChzdHJpbmcsIHZhbHVlKTtcblxuICByZXR1cm4gYXNzaWdubWVudDtcbn1cbiJdLCJuYW1lcyI6WyJkb21Bc3NpZ25lZCIsIkFzc2lnbm1lbnQiLCJzdHJpbmciLCJ2YWx1ZSIsImdldFN0cmluZyIsImdldFZhbHVlIiwiZXZhbHVhdGUiLCJjb250ZXh0IiwiYXNzaWdubWVudFN0cmluZyIsInRyYWNlIiwibWVzc2FnZSIsImV4Y2VwdGlvbiIsIkV4Y2VwdGlvbiIsImZyb21NZXNzYWdlIiwiZGVidWciLCJmcm9tTm9kZSIsIm5vZGUiLCJWYWx1ZSIsImRvbSIsInN0cmluZ0Zyb21WYWx1ZSIsImFzc2lnbm1lbnQiLCJmcm9tVmFsdWUiLCJmcm9tQXNzaWdubWVudE5vZGUiLCJhc3NpZ25tZW50Tm9kZSIsImFzc2lnbm1lbnRGcm9tQXNzaWdubWVudE5vZGUiLCJuYW1lIiwidmFsdWVTdHJpbmciLCJhc1N0cmluZyIsIm5vZGVBc1N0cmluZyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBT0E7OztlQUFBOzs7MkRBTGdCO2dFQUNNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUl0QixXQUFlQSxJQUFBQSxnQkFBVywrQkFBQzthQUFNQyxXQUNuQkMsTUFBTSxFQUFFQyxLQUFLO2dDQURNRjtRQUU3QixJQUFJLENBQUNDLE1BQU0sR0FBR0E7UUFDZCxJQUFJLENBQUNDLEtBQUssR0FBR0E7Ozs7WUFHZkMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRixNQUFNO1lBQ3BCOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRixLQUFLO1lBQ25COzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBLFNBQVNDLE9BQU87Z0JBQ2QsSUFBSUo7Z0JBRUosSUFBTUssbUJBQW1CLElBQUksQ0FBQ04sTUFBTSxFQUFFLEdBQUc7Z0JBRXpDSyxRQUFRRSxLQUFLLENBQUMsQUFBQyxtQkFBbUMsT0FBakJELGtCQUFpQjtnQkFFbERMLFFBQVEsSUFBSSxDQUFDQSxLQUFLLENBQUNHLFFBQVEsQ0FBQ0M7Z0JBRTVCLElBQUlKLFVBQVUsTUFBTTtvQkFDbEIsSUFBTUssb0JBQW1CLElBQUksQ0FBQ04sTUFBTSxFQUM5QlEsVUFBVSxBQUFDLFFBQXdCLE9BQWpCRixtQkFBaUIscUNBQ25DRyxZQUFZQyxrQkFBUyxDQUFDQyxXQUFXLENBQUNIO29CQUV4QyxNQUFNQztnQkFDUjtnQkFFQUosUUFBUU8sS0FBSyxDQUFDLEFBQUMscUJBQXFDLE9BQWpCTixrQkFBaUI7Z0JBRXBELE9BQU9MO1lBQ1Q7Ozs7WUFJT1ksS0FBQUE7bUJBQVAsU0FBT0EsU0FBU0MsSUFBSSxFQUFFVCxPQUFPO2dCQUMzQixJQUFNLEFBQUVVLFFBQVVDLFlBQUcsQ0FBYkQsT0FDRmQsUUFBUWMsTUFBTUYsUUFBUSxDQUFDQyxNQUFNVCxVQUM3QkwsU0FBU2lCLGdCQUFnQmhCLE9BQU9JLFVBQ2hDYSxhQUFhLElBQUluQixXQUFXQyxRQUFRQztnQkFFMUMsT0FBT2lCO1lBQ1Q7OztZQUVPQyxLQUFBQTttQkFBUCxTQUFPQSxVQUFVbEIsS0FBSyxFQUFFSSxPQUFPO2dCQUM3QixJQUFNTCxTQUFTaUIsZ0JBQWdCaEIsT0FBT0ksVUFDaENhLGFBQWEsSUFBSW5CLFdBQVdDLFFBQVFDO2dCQUUxQyxPQUFPaUI7WUFDVDs7O1lBRU9FLEtBQUFBO21CQUFQLFNBQU9BLG1CQUFtQkMsY0FBYyxFQUFFaEIsT0FBTztnQkFDL0MsSUFBTWEsYUFBYUksNkJBQTZCRCxnQkFBZ0JoQjtnQkFFaEUsT0FBT2E7WUFDVDs7OztLQXRCQSw4QkFBT0ssUUFBTztBQXlCaEIsU0FBU04sZ0JBQWdCaEIsS0FBSyxFQUFFSSxPQUFPO0lBQ3JDLElBQU1tQixjQUFjdkIsTUFBTXdCLFFBQVEsQ0FBQ3BCLFVBQzdCTCxTQUFTLEFBQUMsS0FBZ0IsT0FBWndCO0lBRXBCLE9BQU94QjtBQUNUO0FBRUEsU0FBU3NCLDZCQUE2QkQsY0FBYyxFQUFFaEIsT0FBTztJQUMzRCxJQUFRTixhQUFzQmlCLFlBQUcsQ0FBekJqQixZQUFZZ0IsUUFBVUMsWUFBRyxDQUFiRCxPQUNkRCxPQUFPTyxnQkFDUHJCLFNBQVNLLFFBQVFxQixZQUFZLENBQUNaLE9BQzlCYixRQUFRYyxNQUFNSyxrQkFBa0IsQ0FBQ0MsZ0JBQWdCaEIsVUFDakRhLGFBQWEsSUFBSW5CLFdBQVdDLFFBQVFDO0lBRTFDLE9BQU9pQjtBQUNUIn0=