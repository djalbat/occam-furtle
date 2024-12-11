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
var _Assignment;
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
        }
    ], [
        {
            key: "fromNode",
            value: function fromNode(node, fileContext) {
                var Value = _dom.default.Value, value = Value.fromNode(node, fileContext), nodeQuery = null, nodesQuery = null, procedureCall = null, string = stringFromValueNodeQueryNodesQueryOrProcedureCall(value, nodeQuery, nodesQuery, procedureCall), assigment = new Assignment(string, value, nodeQuery, nodesQuery, procedureCall);
                return assigment;
            }
        },
        {
            key: "fromValue",
            value: function fromValue(value) {
                var nodeQuery = null, nodesQuery = null, procedureCall = null, string = stringFromValueNodeQueryNodesQueryOrProcedureCall(value, nodeQuery, nodesQuery, procedureCall), assigment = new Assignment(string, value, nodeQuery, nodesQuery, procedureCall);
                return assigment;
            }
        },
        {
            key: "fromAssignmentNode",
            value: function fromAssignmentNode(assigmentNode) {
                var Value = _dom.default.Value, NodeQuery = _dom.default.NodeQuery, NodesQuery = _dom.default.NodesQuery, ProcedureCall = _dom.default.ProcedureCall, value = Value.fromAssignmentNode(assigmentNode), nodeQuery = NodeQuery.fromAssignmentNode(assigmentNode), nodesQuery = NodesQuery.fromAssignmentNode(assigmentNode), procedureCall = ProcedureCall.fromAssignmentNode(assigmentNode), string = stringFromValueNodeQueryNodesQueryOrProcedureCall(value, nodeQuery, nodesQuery, procedureCall), assigment = new Assignment(string, value, nodeQuery, nodesQuery, procedureCall);
                return assigment;
            }
        }
    ]);
    return Assignment;
}(), _define_property(_Assignment, "name", "Assignment"), _Assignment));
function stringFromValueNodeQueryNodesQueryOrProcedureCall(value, nodeQuery, nodesQuery, procedureCall) {
    var string;
    if (false) {
    ///
    } else if (value !== null) {
        var valueString = value.getString();
        string = valueString; ///
    } else if (nodeQuery !== null) {
        var nodeQueryString = nodeQuery.getString();
        string = nodeQueryString; ///
    } else if (nodesQuery !== null) {
        var nodesQueryString = nodesQuery.getString();
        string = nodesQueryString; ///
    } else if (procedureCall !== null) {
        var procedureCallString = procedureCall.getString();
        string = procedureCallString; ///
    }
    string = " = ".concat(string);
    return string;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb20vYXNzaWdubWVudC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IGRvbSBmcm9tIFwiLi4vZG9tXCI7XG5cbmltcG9ydCB7IGRvbUFzc2lnbmVkIH0gZnJvbSBcIi4uL2RvbVwiO1xuXG5leHBvcnQgZGVmYXVsdCBkb21Bc3NpZ25lZChjbGFzcyBBc3NpZ25tZW50IHtcbiAgY29uc3RydWN0b3Ioc3RyaW5nLCB2YWx1ZSwgbm9kZVF1ZXJ5LCBub2Rlc1F1ZXJ5LCBwcm9jZWR1cmVDYWxsKSB7XG4gICAgdGhpcy5zdHJpbmcgPSBzdHJpbmc7XG4gICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgIHRoaXMubm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5O1xuICAgIHRoaXMubm9kZXNRdWVyeSA9IG5vZGVzUXVlcnk7XG4gICAgdGhpcy5wcm9jZWR1cmVDYWxsID0gcHJvY2VkdXJlQ2FsbDtcbiAgfVxuXG4gIGdldFN0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5zdHJpbmc7XG4gIH1cblxuICBnZXRWYWx1ZSgpIHtcbiAgICByZXR1cm4gdGhpcy52YWx1ZTtcbiAgfVxuXG4gIGdldE5vZGVRdWVyeSgpIHtcbiAgICByZXR1cm4gdGhpcy5ub2RlUXVlcnk7XG4gIH1cblxuICBnZXROb2Rlc1F1ZXJ5KCkge1xuICAgIHJldHVybiB0aGlzLm5vZGVzUXVlcnk7XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiQXNzaWdubWVudFwiO1xuXG4gIHN0YXRpYyBmcm9tTm9kZShub2RlLCBmaWxlQ29udGV4dCkge1xuICAgIGNvbnN0IHsgVmFsdWUgfSA9IGRvbSxcbiAgICAgICAgICB2YWx1ZSA9IFZhbHVlLmZyb21Ob2RlKG5vZGUsIGZpbGVDb250ZXh0KSxcbiAgICAgICAgICBub2RlUXVlcnkgPSBudWxsLFxuICAgICAgICAgIG5vZGVzUXVlcnkgPSBudWxsLFxuICAgICAgICAgIHByb2NlZHVyZUNhbGwgPSBudWxsLFxuICAgICAgICAgIHN0cmluZyA9IHN0cmluZ0Zyb21WYWx1ZU5vZGVRdWVyeU5vZGVzUXVlcnlPclByb2NlZHVyZUNhbGwodmFsdWUsIG5vZGVRdWVyeSwgbm9kZXNRdWVyeSwgcHJvY2VkdXJlQ2FsbCksXG4gICAgICAgICAgYXNzaWdtZW50ID0gbmV3IEFzc2lnbm1lbnQoc3RyaW5nLCB2YWx1ZSwgbm9kZVF1ZXJ5LCBub2Rlc1F1ZXJ5LCBwcm9jZWR1cmVDYWxsKTtcblxuICAgIHJldHVybiBhc3NpZ21lbnQ7XG4gIH1cblxuICBzdGF0aWMgZnJvbVZhbHVlKHZhbHVlKSB7XG4gICAgY29uc3Qgbm9kZVF1ZXJ5ID0gbnVsbCxcbiAgICAgICAgICBub2Rlc1F1ZXJ5ID0gbnVsbCxcbiAgICAgICAgICBwcm9jZWR1cmVDYWxsID0gbnVsbCxcbiAgICAgICAgICBzdHJpbmcgPSBzdHJpbmdGcm9tVmFsdWVOb2RlUXVlcnlOb2Rlc1F1ZXJ5T3JQcm9jZWR1cmVDYWxsKHZhbHVlLCBub2RlUXVlcnksIG5vZGVzUXVlcnksIHByb2NlZHVyZUNhbGwpLFxuICAgICAgICAgIGFzc2lnbWVudCA9IG5ldyBBc3NpZ25tZW50KHN0cmluZywgdmFsdWUsIG5vZGVRdWVyeSwgbm9kZXNRdWVyeSwgcHJvY2VkdXJlQ2FsbCk7XG5cbiAgICByZXR1cm4gYXNzaWdtZW50O1xuICB9XG5cbiAgc3RhdGljIGZyb21Bc3NpZ25tZW50Tm9kZShhc3NpZ21lbnROb2RlKSB7XG4gICAgY29uc3QgeyBWYWx1ZSwgTm9kZVF1ZXJ5LCBOb2Rlc1F1ZXJ5LCBQcm9jZWR1cmVDYWxsIH0gPSBkb20sXG4gICAgICAgICAgdmFsdWUgPSBWYWx1ZS5mcm9tQXNzaWdubWVudE5vZGUoYXNzaWdtZW50Tm9kZSksXG4gICAgICAgICAgbm9kZVF1ZXJ5ID0gTm9kZVF1ZXJ5LmZyb21Bc3NpZ25tZW50Tm9kZShhc3NpZ21lbnROb2RlKSxcbiAgICAgICAgICBub2Rlc1F1ZXJ5ID0gTm9kZXNRdWVyeS5mcm9tQXNzaWdubWVudE5vZGUoYXNzaWdtZW50Tm9kZSksXG4gICAgICAgICAgcHJvY2VkdXJlQ2FsbCA9IFByb2NlZHVyZUNhbGwuZnJvbUFzc2lnbm1lbnROb2RlKGFzc2lnbWVudE5vZGUpLFxuICAgICAgICAgIHN0cmluZyA9IHN0cmluZ0Zyb21WYWx1ZU5vZGVRdWVyeU5vZGVzUXVlcnlPclByb2NlZHVyZUNhbGwodmFsdWUsIG5vZGVRdWVyeSwgbm9kZXNRdWVyeSwgcHJvY2VkdXJlQ2FsbCksXG4gICAgICAgICAgYXNzaWdtZW50ID0gbmV3IEFzc2lnbm1lbnQoc3RyaW5nLCB2YWx1ZSwgbm9kZVF1ZXJ5LCBub2Rlc1F1ZXJ5LCBwcm9jZWR1cmVDYWxsKTtcblxuICAgIHJldHVybiBhc3NpZ21lbnQ7XG4gIH1cbn0pO1xuXG5mdW5jdGlvbiBzdHJpbmdGcm9tVmFsdWVOb2RlUXVlcnlOb2Rlc1F1ZXJ5T3JQcm9jZWR1cmVDYWxsKHZhbHVlLCBub2RlUXVlcnksIG5vZGVzUXVlcnksIHByb2NlZHVyZUNhbGwpIHtcbiAgbGV0IHN0cmluZztcblxuICBpZiAoZmFsc2UpIHtcbiAgICAvLy9cbiAgfSBlbHNlIGlmICh2YWx1ZSAhPT0gbnVsbCkge1xuICAgIGNvbnN0IHZhbHVlU3RyaW5nID0gdmFsdWUuZ2V0U3RyaW5nKCk7XG5cbiAgICBzdHJpbmcgPSB2YWx1ZVN0cmluZzsgLy8vXG4gIH1cbiAgZWxzZSBpZiAobm9kZVF1ZXJ5ICE9PSBudWxsKSB7XG4gICAgY29uc3Qgbm9kZVF1ZXJ5U3RyaW5nID0gbm9kZVF1ZXJ5LmdldFN0cmluZygpO1xuXG4gICAgc3RyaW5nID0gbm9kZVF1ZXJ5U3RyaW5nOyAvLy9cbiAgfVxuICBlbHNlIGlmIChub2Rlc1F1ZXJ5ICE9PSBudWxsKSB7XG4gICAgY29uc3Qgbm9kZXNRdWVyeVN0cmluZyA9IG5vZGVzUXVlcnkuZ2V0U3RyaW5nKCk7XG5cbiAgICBzdHJpbmcgPSBub2Rlc1F1ZXJ5U3RyaW5nOyAgLy8vXG4gIH1cbiAgZWxzZSBpZiAocHJvY2VkdXJlQ2FsbCAhPT0gbnVsbCkge1xuICAgIGNvbnN0IHByb2NlZHVyZUNhbGxTdHJpbmcgPSBwcm9jZWR1cmVDYWxsLmdldFN0cmluZygpO1xuXG4gICAgc3RyaW5nID0gcHJvY2VkdXJlQ2FsbFN0cmluZzsgLy8vXG4gIH1cblxuICBzdHJpbmcgPSBgID0gJHtzdHJpbmd9YDtcblxuICByZXR1cm4gc3RyaW5nO1xufVxuIl0sIm5hbWVzIjpbImRvbUFzc2lnbmVkIiwiQXNzaWdubWVudCIsInN0cmluZyIsInZhbHVlIiwibm9kZVF1ZXJ5Iiwibm9kZXNRdWVyeSIsInByb2NlZHVyZUNhbGwiLCJnZXRTdHJpbmciLCJnZXRWYWx1ZSIsImdldE5vZGVRdWVyeSIsImdldE5vZGVzUXVlcnkiLCJmcm9tTm9kZSIsIm5vZGUiLCJmaWxlQ29udGV4dCIsIlZhbHVlIiwiZG9tIiwic3RyaW5nRnJvbVZhbHVlTm9kZVF1ZXJ5Tm9kZXNRdWVyeU9yUHJvY2VkdXJlQ2FsbCIsImFzc2lnbWVudCIsImZyb21WYWx1ZSIsImZyb21Bc3NpZ25tZW50Tm9kZSIsImFzc2lnbWVudE5vZGUiLCJOb2RlUXVlcnkiLCJOb2Rlc1F1ZXJ5IiwiUHJvY2VkdXJlQ2FsbCIsIm5hbWUiLCJ2YWx1ZVN0cmluZyIsIm5vZGVRdWVyeVN0cmluZyIsIm5vZGVzUXVlcnlTdHJpbmciLCJwcm9jZWR1cmVDYWxsU3RyaW5nIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFNQTs7O2VBQUE7OzsyREFKZ0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUloQixXQUFlQSxJQUFBQSxnQkFBVywrQkFBQzthQUFNQyxXQUNuQkMsTUFBTSxFQUFFQyxLQUFLLEVBQUVDLFNBQVMsRUFBRUMsVUFBVSxFQUFFQyxhQUFhO2dDQURoQ0w7UUFFN0IsSUFBSSxDQUFDQyxNQUFNLEdBQUdBO1FBQ2QsSUFBSSxDQUFDQyxLQUFLLEdBQUdBO1FBQ2IsSUFBSSxDQUFDQyxTQUFTLEdBQUdBO1FBQ2pCLElBQUksQ0FBQ0MsVUFBVSxHQUFHQTtRQUNsQixJQUFJLENBQUNDLGFBQWEsR0FBR0E7Ozs7WUFHdkJDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0wsTUFBTTtZQUNwQjs7O1lBRUFNLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0wsS0FBSztZQUNuQjs7O1lBRUFNLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0wsU0FBUztZQUN2Qjs7O1lBRUFNLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0wsVUFBVTtZQUN4Qjs7OztZQUlPTSxLQUFBQTttQkFBUCxTQUFPQSxTQUFTQyxJQUFJLEVBQUVDLFdBQVc7Z0JBQy9CLElBQU0sQUFBRUMsUUFBVUMsWUFBRyxDQUFiRCxPQUNGWCxRQUFRVyxNQUFNSCxRQUFRLENBQUNDLE1BQU1DLGNBQzdCVCxZQUFZLE1BQ1pDLGFBQWEsTUFDYkMsZ0JBQWdCLE1BQ2hCSixTQUFTYyxrREFBa0RiLE9BQU9DLFdBQVdDLFlBQVlDLGdCQUN6RlcsWUFBWSxJQUFJaEIsV0FBV0MsUUFBUUMsT0FBT0MsV0FBV0MsWUFBWUM7Z0JBRXZFLE9BQU9XO1lBQ1Q7OztZQUVPQyxLQUFBQTttQkFBUCxTQUFPQSxVQUFVZixLQUFLO2dCQUNwQixJQUFNQyxZQUFZLE1BQ1pDLGFBQWEsTUFDYkMsZ0JBQWdCLE1BQ2hCSixTQUFTYyxrREFBa0RiLE9BQU9DLFdBQVdDLFlBQVlDLGdCQUN6RlcsWUFBWSxJQUFJaEIsV0FBV0MsUUFBUUMsT0FBT0MsV0FBV0MsWUFBWUM7Z0JBRXZFLE9BQU9XO1lBQ1Q7OztZQUVPRSxLQUFBQTttQkFBUCxTQUFPQSxtQkFBbUJDLGFBQWE7Z0JBQ3JDLElBQVFOLFFBQWdEQyxZQUFHLENBQW5ERCxPQUFPTyxZQUF5Q04sWUFBRyxDQUE1Q00sV0FBV0MsYUFBOEJQLFlBQUcsQ0FBakNPLFlBQVlDLGdCQUFrQlIsWUFBRyxDQUFyQlEsZUFDaENwQixRQUFRVyxNQUFNSyxrQkFBa0IsQ0FBQ0MsZ0JBQ2pDaEIsWUFBWWlCLFVBQVVGLGtCQUFrQixDQUFDQyxnQkFDekNmLGFBQWFpQixXQUFXSCxrQkFBa0IsQ0FBQ0MsZ0JBQzNDZCxnQkFBZ0JpQixjQUFjSixrQkFBa0IsQ0FBQ0MsZ0JBQ2pEbEIsU0FBU2Msa0RBQWtEYixPQUFPQyxXQUFXQyxZQUFZQyxnQkFDekZXLFlBQVksSUFBSWhCLFdBQVdDLFFBQVFDLE9BQU9DLFdBQVdDLFlBQVlDO2dCQUV2RSxPQUFPVztZQUNUOzs7O0tBbENBLDhCQUFPTyxRQUFPO0FBcUNoQixTQUFTUixrREFBa0RiLEtBQUssRUFBRUMsU0FBUyxFQUFFQyxVQUFVLEVBQUVDLGFBQWE7SUFDcEcsSUFBSUo7SUFFSixJQUFJLE9BQU87SUFDVCxHQUFHO0lBQ0wsT0FBTyxJQUFJQyxVQUFVLE1BQU07UUFDekIsSUFBTXNCLGNBQWN0QixNQUFNSSxTQUFTO1FBRW5DTCxTQUFTdUIsYUFBYSxHQUFHO0lBQzNCLE9BQ0ssSUFBSXJCLGNBQWMsTUFBTTtRQUMzQixJQUFNc0Isa0JBQWtCdEIsVUFBVUcsU0FBUztRQUUzQ0wsU0FBU3dCLGlCQUFpQixHQUFHO0lBQy9CLE9BQ0ssSUFBSXJCLGVBQWUsTUFBTTtRQUM1QixJQUFNc0IsbUJBQW1CdEIsV0FBV0UsU0FBUztRQUU3Q0wsU0FBU3lCLGtCQUFtQixHQUFHO0lBQ2pDLE9BQ0ssSUFBSXJCLGtCQUFrQixNQUFNO1FBQy9CLElBQU1zQixzQkFBc0J0QixjQUFjQyxTQUFTO1FBRW5ETCxTQUFTMEIscUJBQXFCLEdBQUc7SUFDbkM7SUFFQTFCLFNBQVMsQUFBQyxNQUFZLE9BQVBBO0lBRWYsT0FBT0E7QUFDVCJ9