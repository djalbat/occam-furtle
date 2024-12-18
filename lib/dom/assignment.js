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
    function Assignment(string, value, nodeQuery, nodesQuery, procedureCall) {
        _class_call_check(this, Assignment);
        this.string = string;
        this.value = value;
        this.nodeQuery = nodeQuery;
        this.nodesQuery = nodesQuery;
        this.procedureCall = procedureCall;
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
            key: "getNodeQuery",
            value: function getNodeQuery() {
                return this.nodeQuery;
            }
        },
        {
            key: "getNodesQuery",
            value: function getNodesQuery() {
                return this.nodesQuery;
            }
        },
        {
            key: "evaluate",
            value: function evaluate(context) {
                var value;
                var assignmentString = this.string; ///
                context.trace("Evaluating the '".concat(assignmentString, "' assignment..."));
                if (false) {
                ///
                } else if (this.procedureCall !== null) {
                    value = this.procedureCall.evaluate(context);
                } else if (this.nodesQuery !== null) {
                    value = this.nodesQuery.evaluate(context);
                } else if (this.nodeQuery !== null) {
                    value = this.nodeQuery.evaluate(context);
                } else {
                    value = this.value.evaluate(context);
                }
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
                var Value = _dom.default.Value, value = Value.fromNode(node, context), string = stringFromValue(value, context), _$nodeQuery = null, nodesQuery = null, procedureCall = null, assignment = new Assignment(string, value, _$nodeQuery, nodesQuery, procedureCall);
                return assignment;
            }
        },
        {
            key: "fromValue",
            value: function fromValue(value, context) {
                var _$nodeQuery = null, nodesQuery = null, procedureCall = null, string = stringFromValue(value, context), assignment = new Assignment(string, value, _$nodeQuery, nodesQuery, procedureCall);
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
    var Assignment = _dom.default.Assignment, Value = _dom.default.Value, NodeQuery = _dom.default.NodeQuery, NodesQuery = _dom.default.NodesQuery, ProcedureCall = _dom.default.ProcedureCall, node = assignmentNode, string = context.nodeAsString(node), value = Value.fromAssignmentNode(assignmentNode, context), _$nodeQuery = NodeQuery.fromAssignmentNode(assignmentNode, context), nodesQuery = NodesQuery.fromAssignmentNode(assignmentNode, context), procedureCall = ProcedureCall.fromAssignmentNode(assignmentNode, context), assignment = new Assignment(string, value, _$nodeQuery, nodesQuery, procedureCall);
    return assignment;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb20vYXNzaWdubWVudC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IGRvbSBmcm9tIFwiLi4vZG9tXCI7XG5pbXBvcnQgRXhjZXB0aW9uIGZyb20gXCIuLi9leGNlcHRpb25cIjtcblxuaW1wb3J0IHsgbm9kZVF1ZXJ5IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9xdWVyeVwiO1xuaW1wb3J0IHsgZG9tQXNzaWduZWQgfSBmcm9tIFwiLi4vZG9tXCI7XG5cbmNvbnN0IGFzc2lnbm1lbnROb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvdmFyaWFibGVBc3NpZ25tZW50L2Fzc2lnbm1lbnRcIik7XG5cbmV4cG9ydCBkZWZhdWx0IGRvbUFzc2lnbmVkKGNsYXNzIEFzc2lnbm1lbnQge1xuICBjb25zdHJ1Y3RvcihzdHJpbmcsIHZhbHVlLCBub2RlUXVlcnksIG5vZGVzUXVlcnksIHByb2NlZHVyZUNhbGwpIHtcbiAgICB0aGlzLnN0cmluZyA9IHN0cmluZztcbiAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgdGhpcy5ub2RlUXVlcnkgPSBub2RlUXVlcnk7XG4gICAgdGhpcy5ub2Rlc1F1ZXJ5ID0gbm9kZXNRdWVyeTtcbiAgICB0aGlzLnByb2NlZHVyZUNhbGwgPSBwcm9jZWR1cmVDYWxsO1xuICB9XG5cbiAgZ2V0U3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLnN0cmluZztcbiAgfVxuXG4gIGdldFZhbHVlKCkge1xuICAgIHJldHVybiB0aGlzLnZhbHVlO1xuICB9XG5cbiAgZ2V0Tm9kZVF1ZXJ5KCkge1xuICAgIHJldHVybiB0aGlzLm5vZGVRdWVyeTtcbiAgfVxuXG4gIGdldE5vZGVzUXVlcnkoKSB7XG4gICAgcmV0dXJuIHRoaXMubm9kZXNRdWVyeTtcbiAgfVxuXG4gIGV2YWx1YXRlKGNvbnRleHQpIHtcbiAgICBsZXQgdmFsdWU7XG5cbiAgICBjb25zdCBhc3NpZ25tZW50U3RyaW5nID0gdGhpcy5zdHJpbmc7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgRXZhbHVhdGluZyB0aGUgJyR7YXNzaWdubWVudFN0cmluZ30nIGFzc2lnbm1lbnQuLi5gKTtcblxuICAgIGlmIChmYWxzZSkge1xuICAgICAgLy8vXG4gICAgfSBlbHNlIGlmICh0aGlzLnByb2NlZHVyZUNhbGwgIT09IG51bGwpIHtcbiAgICAgIHZhbHVlID0gdGhpcy5wcm9jZWR1cmVDYWxsLmV2YWx1YXRlKGNvbnRleHQpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5ub2Rlc1F1ZXJ5ICE9PSBudWxsKSB7XG4gICAgICB2YWx1ZSA9IHRoaXMubm9kZXNRdWVyeS5ldmFsdWF0ZShjb250ZXh0KTtcbiAgICB9IGVsc2UgaWYgKHRoaXMubm9kZVF1ZXJ5ICE9PSBudWxsKSB7XG4gICAgICB2YWx1ZSA9IHRoaXMubm9kZVF1ZXJ5LmV2YWx1YXRlKGNvbnRleHQpO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YWx1ZSA9IHRoaXMudmFsdWUuZXZhbHVhdGUoY29udGV4dCk7XG4gICAgfVxuXG4gICAgaWYgKHZhbHVlID09PSBudWxsKSB7XG4gICAgICBjb25zdCBhc3NpZ25tZW50U3RyaW5nID0gdGhpcy5zdHJpbmcsIC8vL1xuICAgICAgICAgICAgbWVzc2FnZSA9IGBUaGUgJyR7YXNzaWdubWVudFN0cmluZ30nIGFzc2lnbWVudCBjYW5ub3QgYmUgZXZhbHVhdGVkLmAsXG4gICAgICAgICAgICBleGNlcHRpb24gPSBFeGNlcHRpb24uZnJvbU1lc3NhZ2UobWVzc2FnZSk7XG5cbiAgICAgIHRocm93IGV4Y2VwdGlvbjtcbiAgICB9XG5cbiAgICBjb250ZXh0LmRlYnVnKGAuLi5ldmFsdWF0ZWQgdGhlICcke2Fzc2lnbm1lbnRTdHJpbmd9JyBhc3NpZ25tZW50LmApO1xuXG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIkFzc2lnbm1lbnRcIjtcblxuICBzdGF0aWMgZnJvbU5vZGUobm9kZSwgY29udGV4dCkge1xuICAgIGNvbnN0IHsgVmFsdWUgfSA9IGRvbSxcbiAgICAgICAgICB2YWx1ZSA9IFZhbHVlLmZyb21Ob2RlKG5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgIHN0cmluZyA9IHN0cmluZ0Zyb21WYWx1ZSh2YWx1ZSwgY29udGV4dCksXG4gICAgICAgICAgbm9kZVF1ZXJ5ID0gbnVsbCxcbiAgICAgICAgICBub2Rlc1F1ZXJ5ID0gbnVsbCxcbiAgICAgICAgICBwcm9jZWR1cmVDYWxsID0gbnVsbCxcbiAgICAgICAgICBhc3NpZ25tZW50ID0gbmV3IEFzc2lnbm1lbnQoc3RyaW5nLCB2YWx1ZSwgbm9kZVF1ZXJ5LCBub2Rlc1F1ZXJ5LCBwcm9jZWR1cmVDYWxsKTtcblxuICAgIHJldHVybiBhc3NpZ25tZW50O1xuICB9XG5cbiAgc3RhdGljIGZyb21WYWx1ZSh2YWx1ZSwgY29udGV4dCkge1xuICAgIGNvbnN0IG5vZGVRdWVyeSA9IG51bGwsXG4gICAgICAgICAgbm9kZXNRdWVyeSA9IG51bGwsXG4gICAgICAgICAgcHJvY2VkdXJlQ2FsbCA9IG51bGwsXG4gICAgICAgICAgc3RyaW5nID0gc3RyaW5nRnJvbVZhbHVlKHZhbHVlLCBjb250ZXh0KSxcbiAgICAgICAgICBhc3NpZ25tZW50ID0gbmV3IEFzc2lnbm1lbnQoc3RyaW5nLCB2YWx1ZSwgbm9kZVF1ZXJ5LCBub2Rlc1F1ZXJ5LCBwcm9jZWR1cmVDYWxsKTtcblxuICAgIHJldHVybiBhc3NpZ25tZW50O1xuICB9XG5cbiAgc3RhdGljIGZyb21Bc3NpZ25tZW50Tm9kZShhc3NpZ25tZW50Tm9kZSwgY29udGV4dCkge1xuICAgIGNvbnN0IGFzc2lnbm1lbnQgPSBhc3NpZ25tZW50RnJvbUFzc2lnbm1lbnROb2RlKGFzc2lnbm1lbnROb2RlLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBhc3NpZ25tZW50O1xuICB9XG5cbiAgc3RhdGljIGZyb21WYXJpYWJsZUFzc2lnbm1lbnROb2RlKHZhcmlhYmxlQXNzaWdubWVudE5vZGUsIGNvbnRleHQpIHtcbiAgICBjb25zdCBhc3NpZ25tZW50Tm9kZSA9IGFzc2lnbm1lbnROb2RlUXVlcnkodmFyaWFibGVBc3NpZ25tZW50Tm9kZSksXG4gICAgICAgICAgYXNzaWdubWVudCA9IGFzc2lnbm1lbnRGcm9tQXNzaWdubWVudE5vZGUoYXNzaWdubWVudE5vZGUsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIGFzc2lnbm1lbnQ7XG4gIH1cbn0pO1xuXG5mdW5jdGlvbiBzdHJpbmdGcm9tVmFsdWUodmFsdWUsIGNvbnRleHQpIHtcbiAgY29uc3QgdmFsdWVTdHJpbmcgPSB2YWx1ZS5hc1N0cmluZyhjb250ZXh0KSxcbiAgICAgICAgc3RyaW5nID0gYD0gJHt2YWx1ZVN0cmluZ31gO1xuXG4gIHJldHVybiBzdHJpbmc7XG59XG5cbmZ1bmN0aW9uIGFzc2lnbm1lbnRGcm9tQXNzaWdubWVudE5vZGUoYXNzaWdubWVudE5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBBc3NpZ25tZW50LCBWYWx1ZSwgTm9kZVF1ZXJ5LCBOb2Rlc1F1ZXJ5LCBQcm9jZWR1cmVDYWxsIH0gPSBkb20sXG4gICAgICAgIG5vZGUgPSBhc3NpZ25tZW50Tm9kZSwgLy8vXG4gICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICB2YWx1ZSA9IFZhbHVlLmZyb21Bc3NpZ25tZW50Tm9kZShhc3NpZ25tZW50Tm9kZSwgY29udGV4dCksXG4gICAgICAgIG5vZGVRdWVyeSA9IE5vZGVRdWVyeS5mcm9tQXNzaWdubWVudE5vZGUoYXNzaWdubWVudE5vZGUsIGNvbnRleHQpLFxuICAgICAgICBub2Rlc1F1ZXJ5ID0gTm9kZXNRdWVyeS5mcm9tQXNzaWdubWVudE5vZGUoYXNzaWdubWVudE5vZGUsIGNvbnRleHQpLFxuICAgICAgICBwcm9jZWR1cmVDYWxsID0gUHJvY2VkdXJlQ2FsbC5mcm9tQXNzaWdubWVudE5vZGUoYXNzaWdubWVudE5vZGUsIGNvbnRleHQpLFxuICAgICAgICBhc3NpZ25tZW50ID0gbmV3IEFzc2lnbm1lbnQoc3RyaW5nLCB2YWx1ZSwgbm9kZVF1ZXJ5LCBub2Rlc1F1ZXJ5LCBwcm9jZWR1cmVDYWxsKTtcblxuICByZXR1cm4gYXNzaWdubWVudDtcbn0iXSwibmFtZXMiOlsiYXNzaWdubWVudE5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsImRvbUFzc2lnbmVkIiwiQXNzaWdubWVudCIsInN0cmluZyIsInZhbHVlIiwibm9kZXNRdWVyeSIsInByb2NlZHVyZUNhbGwiLCJnZXRTdHJpbmciLCJnZXRWYWx1ZSIsImdldE5vZGVRdWVyeSIsImdldE5vZGVzUXVlcnkiLCJldmFsdWF0ZSIsImNvbnRleHQiLCJhc3NpZ25tZW50U3RyaW5nIiwidHJhY2UiLCJtZXNzYWdlIiwiZXhjZXB0aW9uIiwiRXhjZXB0aW9uIiwiZnJvbU1lc3NhZ2UiLCJkZWJ1ZyIsImZyb21Ob2RlIiwibm9kZSIsIlZhbHVlIiwiZG9tIiwic3RyaW5nRnJvbVZhbHVlIiwiYXNzaWdubWVudCIsImZyb21WYWx1ZSIsImZyb21Bc3NpZ25tZW50Tm9kZSIsImFzc2lnbm1lbnROb2RlIiwiYXNzaWdubWVudEZyb21Bc3NpZ25tZW50Tm9kZSIsImZyb21WYXJpYWJsZUFzc2lnbm1lbnROb2RlIiwidmFyaWFibGVBc3NpZ25tZW50Tm9kZSIsIm5hbWUiLCJ2YWx1ZVN0cmluZyIsImFzU3RyaW5nIiwiTm9kZVF1ZXJ5IiwiTm9kZXNRdWVyeSIsIlByb2NlZHVyZUNhbGwiLCJub2RlQXNTdHJpbmciXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVVBOzs7ZUFBQTs7OzJEQVJnQjtnRUFDTTtxQkFFSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHMUIsSUFBTUEsc0JBQXNCQyxJQUFBQSxnQkFBUyxFQUFDO0lBRXRDLFdBQWVDLElBQUFBLGdCQUFXLCtCQUFDO2FBQU1DLFdBQ25CQyxNQUFNLEVBQUVDLEtBQUssRUFBRUosU0FBUyxFQUFF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