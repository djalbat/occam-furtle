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
var assignmentNodeQuery = (0, _query.nodeQuery)("/variableAssignment/assignment");
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
        },
        {
            key: "fromVariableAssignmentNode",
            value: function fromVariableAssignmentNode(variableAssignmentNode, context) {
                var assignmentNode = assignmentNodeQuery(variableAssignmentNode), assignment = assignmentFromAssignmentNode(assignmentNode, context);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb20vYXNzaWdubWVudC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IGRvbSBmcm9tIFwiLi4vZG9tXCI7XG5pbXBvcnQgRXhjZXB0aW9uIGZyb20gXCIuLi9leGNlcHRpb25cIjtcblxuaW1wb3J0IHsgbm9kZVF1ZXJ5IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9xdWVyeVwiO1xuaW1wb3J0IHsgZG9tQXNzaWduZWQgfSBmcm9tIFwiLi4vZG9tXCI7XG5cbmNvbnN0IGFzc2lnbm1lbnROb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvdmFyaWFibGVBc3NpZ25tZW50L2Fzc2lnbm1lbnRcIik7XG5cbmV4cG9ydCBkZWZhdWx0IGRvbUFzc2lnbmVkKGNsYXNzIEFzc2lnbm1lbnQge1xuICBjb25zdHJ1Y3RvcihzdHJpbmcsIHZhbHVlKSB7XG4gICAgdGhpcy5zdHJpbmcgPSBzdHJpbmc7XG4gICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICB9XG5cbiAgZ2V0U3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLnN0cmluZztcbiAgfVxuXG4gIGdldFZhbHVlKCkge1xuICAgIHJldHVybiB0aGlzLnZhbHVlO1xuICB9XG5cbiAgZXZhbHVhdGUoY29udGV4dCkge1xuICAgIGxldCB2YWx1ZTtcblxuICAgIGNvbnN0IGFzc2lnbm1lbnRTdHJpbmcgPSB0aGlzLnN0cmluZzsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBFdmFsdWF0aW5nIHRoZSAnJHthc3NpZ25tZW50U3RyaW5nfScgYXNzaWdubWVudC4uLmApO1xuXG4gICAgdmFsdWUgPSB0aGlzLnZhbHVlLmV2YWx1YXRlKGNvbnRleHQpO1xuXG4gICAgaWYgKHZhbHVlID09PSBudWxsKSB7XG4gICAgICBjb25zdCBhc3NpZ25tZW50U3RyaW5nID0gdGhpcy5zdHJpbmcsIC8vL1xuICAgICAgICAgICAgbWVzc2FnZSA9IGBUaGUgJyR7YXNzaWdubWVudFN0cmluZ30nIGFzc2lnbWVudCBjYW5ub3QgYmUgZXZhbHVhdGVkLmAsXG4gICAgICAgICAgICBleGNlcHRpb24gPSBFeGNlcHRpb24uZnJvbU1lc3NhZ2UobWVzc2FnZSk7XG5cbiAgICAgIHRocm93IGV4Y2VwdGlvbjtcbiAgICB9XG5cbiAgICBjb250ZXh0LmRlYnVnKGAuLi5ldmFsdWF0ZWQgdGhlICcke2Fzc2lnbm1lbnRTdHJpbmd9JyBhc3NpZ25tZW50LmApO1xuXG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIkFzc2lnbm1lbnRcIjtcblxuICBzdGF0aWMgZnJvbU5vZGUobm9kZSwgY29udGV4dCkge1xuICAgIGNvbnN0IHsgVmFsdWUgfSA9IGRvbSxcbiAgICAgICAgICB2YWx1ZSA9IFZhbHVlLmZyb21Ob2RlKG5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgIHN0cmluZyA9IHN0cmluZ0Zyb21WYWx1ZSh2YWx1ZSwgY29udGV4dCksXG4gICAgICAgICAgYXNzaWdubWVudCA9IG5ldyBBc3NpZ25tZW50KHN0cmluZywgdmFsdWUpO1xuXG4gICAgcmV0dXJuIGFzc2lnbm1lbnQ7XG4gIH1cblxuICBzdGF0aWMgZnJvbVZhbHVlKHZhbHVlLCBjb250ZXh0KSB7XG4gICAgY29uc3Qgc3RyaW5nID0gc3RyaW5nRnJvbVZhbHVlKHZhbHVlLCBjb250ZXh0KSxcbiAgICAgICAgICBhc3NpZ25tZW50ID0gbmV3IEFzc2lnbm1lbnQoc3RyaW5nLCB2YWx1ZSk7XG5cbiAgICByZXR1cm4gYXNzaWdubWVudDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQXNzaWdubWVudE5vZGUoYXNzaWdubWVudE5vZGUsIGNvbnRleHQpIHtcbiAgICBjb25zdCBhc3NpZ25tZW50ID0gYXNzaWdubWVudEZyb21Bc3NpZ25tZW50Tm9kZShhc3NpZ25tZW50Tm9kZSwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gYXNzaWdubWVudDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tVmFyaWFibGVBc3NpZ25tZW50Tm9kZSh2YXJpYWJsZUFzc2lnbm1lbnROb2RlLCBjb250ZXh0KSB7XG4gICAgY29uc3QgYXNzaWdubWVudE5vZGUgPSBhc3NpZ25tZW50Tm9kZVF1ZXJ5KHZhcmlhYmxlQXNzaWdubWVudE5vZGUpLFxuICAgICAgICAgIGFzc2lnbm1lbnQgPSBhc3NpZ25tZW50RnJvbUFzc2lnbm1lbnROb2RlKGFzc2lnbm1lbnROb2RlLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBhc3NpZ25tZW50O1xuICB9XG59KTtcblxuZnVuY3Rpb24gc3RyaW5nRnJvbVZhbHVlKHZhbHVlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHZhbHVlU3RyaW5nID0gdmFsdWUuYXNTdHJpbmcoY29udGV4dCksXG4gICAgICAgIHN0cmluZyA9IGA9ICR7dmFsdWVTdHJpbmd9YDtcblxuICByZXR1cm4gc3RyaW5nO1xufVxuXG5mdW5jdGlvbiBhc3NpZ25tZW50RnJvbUFzc2lnbm1lbnROb2RlKGFzc2lnbm1lbnROb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgQXNzaWdubWVudCwgVmFsdWUgfSA9IGRvbSxcbiAgICAgICAgbm9kZSA9IGFzc2lnbm1lbnROb2RlLCAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIHZhbHVlID0gVmFsdWUuZnJvbUFzc2lnbm1lbnROb2RlKGFzc2lnbm1lbnROb2RlLCBjb250ZXh0KSxcbiAgICAgICAgYXNzaWdubWVudCA9IG5ldyBBc3NpZ25tZW50KHN0cmluZywgdmFsdWUpO1xuXG4gIHJldHVybiBhc3NpZ25tZW50O1xufVxuIl0sIm5hbWVzIjpbImFzc2lnbm1lbnROb2RlUXVlcnkiLCJub2RlUXVlcnkiLCJkb21Bc3NpZ25lZCIsIkFzc2lnbm1lbnQiLCJzdHJpbmciLCJ2YWx1ZSIsImdldFN0cmluZyIsImdldFZhbHVlIiwiZXZhbHVhdGUiLCJjb250ZXh0IiwiYXNzaWdubWVudFN0cmluZyIsInRyYWNlIiwibWVzc2FnZSIsImV4Y2VwdGlvbiIsIkV4Y2VwdGlvbiIsImZyb21NZXNzYWdlIiwiZGVidWciLCJmcm9tTm9kZSIsIm5vZGUiLCJWYWx1ZSIsImRvbSIsInN0cmluZ0Zyb21WYWx1ZSIsImFzc2lnbm1lbnQiLCJmcm9tVmFsdWUiLCJmcm9tQXNzaWdubWVudE5vZGUiLCJhc3NpZ25tZW50Tm9kZSIsImFzc2lnbm1lbnRGcm9tQXNzaWdubWVudE5vZGUiLCJmcm9tVmFyaWFibGVBc3NpZ25tZW50Tm9kZSIsInZhcmlhYmxlQXNzaWdubWVudE5vZGUiLCJuYW1lIiwidmFsdWVTdHJpbmciLCJhc1N0cmluZyIsIm5vZGVBc1N0cmluZyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBVUE7OztlQUFBOzs7MkRBUmdCO2dFQUNNO3FCQUVJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUcxQixJQUFNQSxzQkFBc0JDLElBQUFBLGdCQUFTLEVBQUM7SUFFdEMsV0FBZUMsSUFBQUEsZ0JBQVcsK0JBQUM7YUFBTUMsV0FDbkJDLE1BQU0sRUFBRUMsS0FBSztnQ0FETUY7UUFFN0IsSUFBSSxDQUFDQyxNQUFNLEdBQUdBO1FBQ2QsSUFBSSxDQUFDQyxLQUFLLEdBQUdBOzs7O1lBR2ZDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0YsTUFBTTtZQUNwQjs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0YsS0FBSztZQUNuQjs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQSxTQUFTQyxPQUFPO2dCQUNkLElBQUlKO2dCQUVKLElBQU1LLG1CQUFtQixJQUFJLENBQUNOLE1BQU0sRUFBRSxHQUFHO2dCQUV6Q0ssUUFBUUUsS0FBSyxDQUFDLEFBQUMsbUJBQW1DLE9BQWpCRCxrQkFBaUI7Z0JBRWxETCxRQUFRLElBQUksQ0FBQ0EsS0FBSyxDQUFDRyxRQUFRLENBQUNDO2dCQUU1QixJQUFJSixVQUFVLE1BQU07b0JBQ2xCLElBQU1LLG9CQUFtQixJQUFJLENBQUNOLE1BQU0sRUFDOUJRLFVBQVUsQUFBQyxRQUF3QixPQUFqQkYsbUJBQWlCLHFDQUNuQ0csWUFBWUMsa0JBQVMsQ0FBQ0MsV0FBVyxDQUFDSDtvQkFFeEMsTUFBTUM7Z0JBQ1I7Z0JBRUFKLFFBQVFPLEtBQUssQ0FBQyxBQUFDLHFCQUFxQyxPQUFqQk4sa0JBQWlCO2dCQUVwRCxPQUFPTDtZQUNUOzs7O1lBSU9ZLEtBQUFBO21CQUFQLFNBQU9BLFNBQVNDLElBQUksRUFBRVQsT0FBTztnQkFDM0IsSUFBTSxBQUFFVSxRQUFVQyxZQUFHLENBQWJELE9BQ0ZkLFFBQVFjLE1BQU1GLFFBQVEsQ0FBQ0MsTUFBTVQsVUFDN0JMLFNBQVNpQixnQkFBZ0JoQixPQUFPSSxVQUNoQ2EsYUFBYSxJQUFJbkIsV0FBV0MsUUFBUUM7Z0JBRTFDLE9BQU9pQjtZQUNUOzs7WUFFT0MsS0FBQUE7bUJBQVAsU0FBT0EsVUFBVWxCLEtBQUssRUFBRUksT0FBTztnQkFDN0IsSUFBTUwsU0FBU2lCLGdCQUFnQmhCLE9BQU9JLFVBQ2hDYSxhQUFhLElBQUluQixXQUFXQyxRQUFRQztnQkFFMUMsT0FBT2lCO1lBQ1Q7OztZQUVPRSxLQUFBQTttQkFBUCxTQUFPQSxtQkFBbUJDLGNBQWMsRUFBRWhCLE9BQU87Z0JBQy9DLElBQU1hLGFBQWFJLDZCQUE2QkQsZ0JBQWdCaEI7Z0JBRWhFLE9BQU9hO1lBQ1Q7OztZQUVPSyxLQUFBQTttQkFBUCxTQUFPQSwyQkFBMkJDLHNCQUFzQixFQUFFbkIsT0FBTztnQkFDL0QsSUFBTWdCLGlCQUFpQnpCLG9CQUFvQjRCLHlCQUNyQ04sYUFBYUksNkJBQTZCRCxnQkFBZ0JoQjtnQkFFaEUsT0FBT2E7WUFDVDs7OztLQTdCQSw4QkFBT08sUUFBTztBQWdDaEIsU0FBU1IsZ0JBQWdCaEIsS0FBSyxFQUFFSSxPQUFPO0lBQ3JDLElBQU1xQixjQUFjekIsTUFBTTBCLFFBQVEsQ0FBQ3RCLFVBQzdCTCxTQUFTLEFBQUMsS0FBZ0IsT0FBWjBCO0lBRXBCLE9BQU8xQjtBQUNUO0FBRUEsU0FBU3NCLDZCQUE2QkQsY0FBYyxFQUFFaEIsT0FBTztJQUMzRCxJQUFRTixhQUFzQmlCLFlBQUcsQ0FBekJqQixZQUFZZ0IsUUFBVUMsWUFBRyxDQUFiRCxPQUNkRCxPQUFPTyxnQkFDUHJCLFNBQVNLLFFBQVF1QixZQUFZLENBQUNkLE9BQzlCYixRQUFRYyxNQUFNSyxrQkFBa0IsQ0FBQ0MsZ0JBQWdCaEIsVUFDakRhLGFBQWEsSUFBSW5CLFdBQVdDLFFBQVFDO0lBRTFDLE9BQU9pQjtBQUNUIn0=