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
            key: "resolve",
            value: function resolve(context) {
                var value;
                var assignmentString = this.string; ///
                context.trace("Resolving the '".concat(assignmentString, "' assignment..."));
                if (false) {
                ///
                } else if (this.procedureCall !== null) {
                    value = this.procedureCall.resolve(context);
                } else if (this.nodesQuery !== null) {
                    value = this.nodesQuery.resolve(context);
                } else if (this.nodeQuery !== null) {
                    value = this.nodeQuery.resolve(context);
                } else {
                    value = this.value;
                }
                if (value === null) {
                    var assignmentString1 = this.string, message = "The '".concat(assignmentString1, "' assigment cannot be resolved."), exception = _exception.default.fromMessage(message);
                    throw exception;
                }
                context.debug("...resolved the '".concat(assignmentString, "' assignment."));
                return value;
            }
        }
    ], [
        {
            key: "fromNode",
            value: function fromNode(node, context) {
                var Value = _dom.default.Value, value = Value.fromNode(node, context), string = stringFromValue(value), _$nodeQuery = null, nodesQuery = null, procedureCall = null, assignment = new Assignment(string, value, _$nodeQuery, nodesQuery, procedureCall);
                return assignment;
            }
        },
        {
            key: "fromValue",
            value: function fromValue(value, context) {
                var _$nodeQuery = null, nodesQuery = null, procedureCall = null, string = stringFromValue(value), assignment = new Assignment(string, value, _$nodeQuery, nodesQuery, procedureCall);
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
function stringFromValue(value) {
    var valueString = value.getString(), string = "= ".concat(valueString);
    return string;
}
function assignmentFromAssignmentNode(assignmentNode, context) {
    var Assignment = _dom.default.Assignment, Value = _dom.default.Value, NodeQuery = _dom.default.NodeQuery, NodesQuery = _dom.default.NodesQuery, ProcedureCall = _dom.default.ProcedureCall, node = assignmentNode, string = context.nodeAsString(node), value = Value.fromAssignmentNode(assignmentNode, context), _$nodeQuery = NodeQuery.fromAssignmentNode(assignmentNode, context), nodesQuery = NodesQuery.fromAssignmentNode(assignmentNode, context), procedureCall = ProcedureCall.fromAssignmentNode(assignmentNode, context), assignment = new Assignment(string, value, _$nodeQuery, nodesQuery, procedureCall);
    return assignment;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb20vYXNzaWdubWVudC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IGRvbSBmcm9tIFwiLi4vZG9tXCI7XG5pbXBvcnQgRXhjZXB0aW9uIGZyb20gXCIuLi9leGNlcHRpb25cIjtcblxuaW1wb3J0IHsgbm9kZVF1ZXJ5IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9xdWVyeVwiO1xuaW1wb3J0IHsgZG9tQXNzaWduZWQgfSBmcm9tIFwiLi4vZG9tXCI7XG5cbmNvbnN0IGFzc2lnbm1lbnROb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvdmFyaWFibGVBc3NpZ25tZW50L2Fzc2lnbm1lbnRcIik7XG5cbmV4cG9ydCBkZWZhdWx0IGRvbUFzc2lnbmVkKGNsYXNzIEFzc2lnbm1lbnQge1xuICBjb25zdHJ1Y3RvcihzdHJpbmcsIHZhbHVlLCBub2RlUXVlcnksIG5vZGVzUXVlcnksIHByb2NlZHVyZUNhbGwpIHtcbiAgICB0aGlzLnN0cmluZyA9IHN0cmluZztcbiAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgdGhpcy5ub2RlUXVlcnkgPSBub2RlUXVlcnk7XG4gICAgdGhpcy5ub2Rlc1F1ZXJ5ID0gbm9kZXNRdWVyeTtcbiAgICB0aGlzLnByb2NlZHVyZUNhbGwgPSBwcm9jZWR1cmVDYWxsO1xuICB9XG5cbiAgZ2V0U3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLnN0cmluZztcbiAgfVxuXG4gIGdldFZhbHVlKCkge1xuICAgIHJldHVybiB0aGlzLnZhbHVlO1xuICB9XG5cbiAgZ2V0Tm9kZVF1ZXJ5KCkge1xuICAgIHJldHVybiB0aGlzLm5vZGVRdWVyeTtcbiAgfVxuXG4gIGdldE5vZGVzUXVlcnkoKSB7XG4gICAgcmV0dXJuIHRoaXMubm9kZXNRdWVyeTtcbiAgfVxuXG4gIHJlc29sdmUoY29udGV4dCkge1xuICAgIGxldCB2YWx1ZTtcblxuICAgIGNvbnN0IGFzc2lnbm1lbnRTdHJpbmcgPSB0aGlzLnN0cmluZzsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBSZXNvbHZpbmcgdGhlICcke2Fzc2lnbm1lbnRTdHJpbmd9JyBhc3NpZ25tZW50Li4uYCk7XG5cbiAgICBpZiAoZmFsc2UpIHtcbiAgICAgIC8vL1xuICAgIH0gZWxzZSBpZiAodGhpcy5wcm9jZWR1cmVDYWxsICE9PSBudWxsKSB7XG4gICAgICB2YWx1ZSA9IHRoaXMucHJvY2VkdXJlQ2FsbC5yZXNvbHZlKGNvbnRleHQpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5ub2Rlc1F1ZXJ5ICE9PSBudWxsKSB7XG4gICAgICB2YWx1ZSA9IHRoaXMubm9kZXNRdWVyeS5yZXNvbHZlKGNvbnRleHQpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5ub2RlUXVlcnkgIT09IG51bGwpIHtcbiAgICAgIHZhbHVlID0gdGhpcy5ub2RlUXVlcnkucmVzb2x2ZShjb250ZXh0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFsdWUgPSB0aGlzLnZhbHVlO1xuICAgIH1cblxuICAgIGlmICh2YWx1ZSA9PT0gbnVsbCkge1xuICAgICAgY29uc3QgYXNzaWdubWVudFN0cmluZyA9IHRoaXMuc3RyaW5nLCAvLy9cbiAgICAgICAgICAgIG1lc3NhZ2UgPSBgVGhlICcke2Fzc2lnbm1lbnRTdHJpbmd9JyBhc3NpZ21lbnQgY2Fubm90IGJlIHJlc29sdmVkLmAsXG4gICAgICAgICAgICBleGNlcHRpb24gPSBFeGNlcHRpb24uZnJvbU1lc3NhZ2UobWVzc2FnZSk7XG5cbiAgICAgIHRocm93IGV4Y2VwdGlvbjtcbiAgICB9XG5cbiAgICBjb250ZXh0LmRlYnVnKGAuLi5yZXNvbHZlZCB0aGUgJyR7YXNzaWdubWVudFN0cmluZ30nIGFzc2lnbm1lbnQuYCk7XG5cbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiQXNzaWdubWVudFwiO1xuXG4gIHN0YXRpYyBmcm9tTm9kZShub2RlLCBjb250ZXh0KSB7XG4gICAgY29uc3QgeyBWYWx1ZSB9ID0gZG9tLFxuICAgICAgICAgIHZhbHVlID0gVmFsdWUuZnJvbU5vZGUobm9kZSwgY29udGV4dCksXG4gICAgICAgICAgc3RyaW5nID0gc3RyaW5nRnJvbVZhbHVlKHZhbHVlKSxcbiAgICAgICAgICBub2RlUXVlcnkgPSBudWxsLFxuICAgICAgICAgIG5vZGVzUXVlcnkgPSBudWxsLFxuICAgICAgICAgIHByb2NlZHVyZUNhbGwgPSBudWxsLFxuICAgICAgICAgIGFzc2lnbm1lbnQgPSBuZXcgQXNzaWdubWVudChzdHJpbmcsIHZhbHVlLCBub2RlUXVlcnksIG5vZGVzUXVlcnksIHByb2NlZHVyZUNhbGwpO1xuXG4gICAgcmV0dXJuIGFzc2lnbm1lbnQ7XG4gIH1cblxuICBzdGF0aWMgZnJvbVZhbHVlKHZhbHVlLCBjb250ZXh0KSB7XG4gICAgY29uc3Qgbm9kZVF1ZXJ5ID0gbnVsbCxcbiAgICAgICAgICBub2Rlc1F1ZXJ5ID0gbnVsbCxcbiAgICAgICAgICBwcm9jZWR1cmVDYWxsID0gbnVsbCxcbiAgICAgICAgICBzdHJpbmcgPSBzdHJpbmdGcm9tVmFsdWUodmFsdWUpLFxuICAgICAgICAgIGFzc2lnbm1lbnQgPSBuZXcgQXNzaWdubWVudChzdHJpbmcsIHZhbHVlLCBub2RlUXVlcnksIG5vZGVzUXVlcnksIHByb2NlZHVyZUNhbGwpO1xuXG4gICAgcmV0dXJuIGFzc2lnbm1lbnQ7XG4gIH1cblxuICBzdGF0aWMgZnJvbUFzc2lnbm1lbnROb2RlKGFzc2lnbm1lbnROb2RlLCBjb250ZXh0KSB7XG4gICAgY29uc3QgYXNzaWdubWVudCA9IGFzc2lnbm1lbnRGcm9tQXNzaWdubWVudE5vZGUoYXNzaWdubWVudE5vZGUsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIGFzc2lnbm1lbnQ7XG4gIH1cblxuICBzdGF0aWMgZnJvbVZhcmlhYmxlQXNzaWdubWVudE5vZGUodmFyaWFibGVBc3NpZ25tZW50Tm9kZSwgY29udGV4dCkge1xuICAgIGNvbnN0IGFzc2lnbm1lbnROb2RlID0gYXNzaWdubWVudE5vZGVRdWVyeSh2YXJpYWJsZUFzc2lnbm1lbnROb2RlKSxcbiAgICAgICAgICBhc3NpZ25tZW50ID0gYXNzaWdubWVudEZyb21Bc3NpZ25tZW50Tm9kZShhc3NpZ25tZW50Tm9kZSwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gYXNzaWdubWVudDtcbiAgfVxufSk7XG5cbmZ1bmN0aW9uIHN0cmluZ0Zyb21WYWx1ZSh2YWx1ZSkge1xuICBjb25zdCB2YWx1ZVN0cmluZyA9IHZhbHVlLmdldFN0cmluZygpLFxuICAgICAgICBzdHJpbmcgPSBgPSAke3ZhbHVlU3RyaW5nfWA7XG5cbiAgcmV0dXJuIHN0cmluZztcbn1cblxuZnVuY3Rpb24gYXNzaWdubWVudEZyb21Bc3NpZ25tZW50Tm9kZShhc3NpZ25tZW50Tm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IEFzc2lnbm1lbnQsIFZhbHVlLCBOb2RlUXVlcnksIE5vZGVzUXVlcnksIFByb2NlZHVyZUNhbGwgfSA9IGRvbSxcbiAgICAgICAgbm9kZSA9IGFzc2lnbm1lbnROb2RlLCAvLy9cbiAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIHZhbHVlID0gVmFsdWUuZnJvbUFzc2lnbm1lbnROb2RlKGFzc2lnbm1lbnROb2RlLCBjb250ZXh0KSxcbiAgICAgICAgbm9kZVF1ZXJ5ID0gTm9kZVF1ZXJ5LmZyb21Bc3NpZ25tZW50Tm9kZShhc3NpZ25tZW50Tm9kZSwgY29udGV4dCksXG4gICAgICAgIG5vZGVzUXVlcnkgPSBOb2Rlc1F1ZXJ5LmZyb21Bc3NpZ25tZW50Tm9kZShhc3NpZ25tZW50Tm9kZSwgY29udGV4dCksXG4gICAgICAgIHByb2NlZHVyZUNhbGwgPSBQcm9jZWR1cmVDYWxsLmZyb21Bc3NpZ25tZW50Tm9kZShhc3NpZ25tZW50Tm9kZSwgY29udGV4dCksXG4gICAgICAgIGFzc2lnbm1lbnQgPSBuZXcgQXNzaWdubWVudChzdHJpbmcsIHZhbHVlLCBub2RlUXVlcnksIG5vZGVzUXVlcnksIHByb2NlZHVyZUNhbGwpO1xuXG4gIHJldHVybiBhc3NpZ25tZW50O1xufSJdLCJuYW1lcyI6WyJhc3NpZ25tZW50Tm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5IiwiZG9tQXNzaWduZWQiLCJBc3NpZ25tZW50Iiwic3RyaW5nIiwidmFsdWUiLCJub2Rlc1F1ZXJ5IiwicHJvY2VkdXJlQ2FsbCIsImdldFN0cmluZyIsImdldFZhbHVlIiwiZ2V0Tm9kZVF1ZXJ5IiwiZ2V0Tm9kZXNRdWVyeSIsInJlc29sdmUiLCJjb250ZXh0IiwiYXNzaWdubWVudFN0cmluZyIsInRyYWNlIiwibWVzc2FnZSIsImV4Y2VwdGlvbiIsIkV4Y2VwdGlvbiIsImZyb21NZXNzYWdlIiwiZGVidWciLCJmcm9tTm9kZSIsIm5vZGUiLCJWYWx1ZSIsImRvbSIsInN0cmluZ0Zyb21WYWx1ZSIsImFzc2lnbm1lbnQiLCJmcm9tVmFsdWUiLCJmcm9tQXNzaWdubWVudE5vZGUiLCJhc3NpZ25tZW50Tm9kZSIsImFzc2lnbm1lbnRGcm9tQXNzaWdubWVudE5vZGUiLCJmcm9tVmFyaWFibGVBc3NpZ25tZW50Tm9kZSIsInZhcmlhYmxlQXNzaWdubWVudE5vZGUiLCJuYW1lIiwidmFsdWVTdHJpbmciLCJOb2RlUXVlcnkiLCJOb2Rlc1F1ZXJ5IiwiUHJvY2VkdXJlQ2FsbCIsIm5vZGVBc1N0cmluZyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBVUE7OztlQUFBOzs7MkRBUmdCO2dFQUNNO3FCQUVJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUcxQixJQUFNQSxzQkFBc0JDLElBQUFBLGdCQUFTLEVBQUM7SUFFdEMsV0FBZUMsSUFBQUEsZ0JBQVcsK0JBQUM7YUFBTUMsV0FDbkJDLE1BQU0sRUFBRUMsS0FBSyxFQUFFSixTQUFTLEVBQUVLLFVBQVUsRUFBRUMsYUFBYTtnQ0FEaENKO1FBRTdCLElBQUksQ0FBQ0MsTUFBTSxHQUFHQTtRQUNkLElBQUksQ0FBQ0Ms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