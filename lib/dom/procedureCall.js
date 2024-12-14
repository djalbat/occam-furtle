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
var _ProcedureCall;
var procedureCallNodeQuery = (0, _query.nodeQuery)("/assignment/procedureCall");
var _default = (0, _dom.domAssigned)((_ProcedureCall = /*#__PURE__*/ function() {
    function ProcedureCall(string, reference, values) {
        _class_call_check(this, ProcedureCall);
        this.string = string;
        this.reference = reference;
        this.values = values;
    }
    _create_class(ProcedureCall, [
        {
            key: "getString",
            value: function getString() {
                return this.string;
            }
        },
        {
            key: "getReference",
            value: function getReference() {
                return this.reference;
            }
        },
        {
            key: "getValues",
            value: function getValues() {
                return this.values;
            }
        },
        {
            key: "resolve",
            value: function resolve(context) {
                var procedureCallString = this.string; ///
                context.trace("Resolving the '".concat(procedureCallString, "' procedure call..."));
                var procedurePresent = context.isProcedurePresentByReference(this.reference);
                if (!procedurePresent) {
                    var message = "The '".concat(procedureCallString, " procedure is not present.'"), exception = _exception.default.fromMessage(message);
                    throw exception;
                }
                var fileContext = context.getFileContext(), procedure = context.findProcedureByReference(this.reference), values = this.values.resolve(context), value = procedure.call(values, fileContext);
                context.debug("...resolved the '".concat(procedureCallString, "' procedure call."));
                return value;
            }
        }
    ], [
        {
            key: "fromAssignmentNode",
            value: function fromAssignmentNode(assigmentNode, context) {
                var procedureCall = null;
                var procedureCallNode = procedureCallNodeQuery(assigmentNode);
                if (procedureCallNode !== null) {
                    var Values = _dom.default.Values, Reference = _dom.default.Reference, node = procedureCallNode, string = context.nodeAsString(node), reference = Reference.fromAssignmentNode(assigmentNode, context), values = Values.fromAssignmentNode(assigmentNode, context);
                    procedureCall = new ProcedureCall(string, reference, values);
                }
                return procedureCall;
            }
        }
    ]);
    return ProcedureCall;
}(), _define_property(_ProcedureCall, "name", "ProcedureCall"), _ProcedureCall));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb20vcHJvY2VkdXJlQ2FsbC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IGRvbSBmcm9tIFwiLi4vZG9tXCI7XG5cbmltcG9ydCB7IGRvbUFzc2lnbmVkIH0gZnJvbSBcIi4uL2RvbVwiO1xuaW1wb3J0IHsgbm9kZVF1ZXJ5LCBub2Rlc1F1ZXJ5IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9xdWVyeVwiO1xuaW1wb3J0IEV4Y2VwdGlvbiBmcm9tIFwiLi4vZXhjZXB0aW9uXCI7XG5cbmNvbnN0IHByb2NlZHVyZUNhbGxOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvYXNzaWdubWVudC9wcm9jZWR1cmVDYWxsXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBkb21Bc3NpZ25lZChjbGFzcyBQcm9jZWR1cmVDYWxsIHtcbiAgY29uc3RydWN0b3Ioc3RyaW5nLCByZWZlcmVuY2UsIHZhbHVlcykge1xuICAgIHRoaXMuc3RyaW5nID0gc3RyaW5nO1xuICAgIHRoaXMucmVmZXJlbmNlID0gcmVmZXJlbmNlO1xuICAgIHRoaXMudmFsdWVzID0gdmFsdWVzO1xuICB9XG5cbiAgZ2V0U3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLnN0cmluZztcbiAgfVxuXG4gIGdldFJlZmVyZW5jZSgpIHtcbiAgICByZXR1cm4gdGhpcy5yZWZlcmVuY2U7XG4gIH1cblxuICBnZXRWYWx1ZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMudmFsdWVzO1xuICB9XG5cbiAgcmVzb2x2ZShjb250ZXh0KSB7XG4gICAgY29uc3QgcHJvY2VkdXJlQ2FsbFN0cmluZyA9IHRoaXMuc3RyaW5nOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBSZXNvbHZpbmcgdGhlICcke3Byb2NlZHVyZUNhbGxTdHJpbmd9JyBwcm9jZWR1cmUgY2FsbC4uLmApO1xuXG4gICAgY29uc3QgcHJvY2VkdXJlUHJlc2VudCA9IGNvbnRleHQuaXNQcm9jZWR1cmVQcmVzZW50QnlSZWZlcmVuY2UodGhpcy5yZWZlcmVuY2UpO1xuXG4gICAgaWYgKCFwcm9jZWR1cmVQcmVzZW50KSB7XG4gICAgICBjb25zdCBtZXNzYWdlID0gYFRoZSAnJHtwcm9jZWR1cmVDYWxsU3RyaW5nfSBwcm9jZWR1cmUgaXMgbm90IHByZXNlbnQuJ2AsXG4gICAgICAgICAgICBleGNlcHRpb24gPSBFeGNlcHRpb24uZnJvbU1lc3NhZ2UobWVzc2FnZSk7XG5cbiAgICAgIHRocm93IGV4Y2VwdGlvbjtcbiAgICB9XG5cbiAgICBjb25zdCBmaWxlQ29udGV4dCA9IGNvbnRleHQuZ2V0RmlsZUNvbnRleHQoKSxcbiAgICAgICAgICBwcm9jZWR1cmUgPSBjb250ZXh0LmZpbmRQcm9jZWR1cmVCeVJlZmVyZW5jZSh0aGlzLnJlZmVyZW5jZSksXG4gICAgICAgICAgdmFsdWVzID0gdGhpcy52YWx1ZXMucmVzb2x2ZShjb250ZXh0KSxcbiAgICAgICAgICB2YWx1ZSA9IHByb2NlZHVyZS5jYWxsKHZhbHVlcywgZmlsZUNvbnRleHQpO1xuXG4gICAgY29udGV4dC5kZWJ1ZyhgLi4ucmVzb2x2ZWQgdGhlICcke3Byb2NlZHVyZUNhbGxTdHJpbmd9JyBwcm9jZWR1cmUgY2FsbC5gKTtcblxuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJQcm9jZWR1cmVDYWxsXCI7XG5cbiAgc3RhdGljIGZyb21Bc3NpZ25tZW50Tm9kZShhc3NpZ21lbnROb2RlLCBjb250ZXh0KSB7XG4gICAgbGV0IHByb2NlZHVyZUNhbGwgPSBudWxsO1xuXG4gICAgY29uc3QgcHJvY2VkdXJlQ2FsbE5vZGUgPSBwcm9jZWR1cmVDYWxsTm9kZVF1ZXJ5KGFzc2lnbWVudE5vZGUpO1xuXG4gICAgaWYgKHByb2NlZHVyZUNhbGxOb2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCB7IFZhbHVlcywgUmVmZXJlbmNlIH0gPSBkb20sXG4gICAgICAgICAgICBub2RlID0gcHJvY2VkdXJlQ2FsbE5vZGUsIC8vL1xuICAgICAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgICAgICByZWZlcmVuY2UgPSBSZWZlcmVuY2UuZnJvbUFzc2lnbm1lbnROb2RlKGFzc2lnbWVudE5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgICAgdmFsdWVzID0gVmFsdWVzLmZyb21Bc3NpZ25tZW50Tm9kZShhc3NpZ21lbnROb2RlLCBjb250ZXh0KTtcblxuICAgICAgcHJvY2VkdXJlQ2FsbCA9IG5ldyBQcm9jZWR1cmVDYWxsKHN0cmluZywgcmVmZXJlbmNlLCB2YWx1ZXMpO1xuICAgIH1cblxuICAgIHJldHVybiBwcm9jZWR1cmVDYWxsO1xuICB9XG59KTtcbiJdLCJuYW1lcyI6WyJwcm9jZWR1cmVDYWxsTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5IiwiZG9tQXNzaWduZWQiLCJQcm9jZWR1cmVDYWxsIiwic3RyaW5nIiwicmVmZXJlbmNlIiwidmFsdWVzIiwiZ2V0U3RyaW5nIiwiZ2V0UmVmZXJlbmNlIiwiZ2V0VmFsdWVzIiwicmVzb2x2ZSIsImNvbnRleHQiLCJwcm9jZWR1cmVDYWxsU3RyaW5nIiwidHJhY2UiLCJwcm9jZWR1cmVQcmVzZW50IiwiaXNQcm9jZWR1cmVQcmVzZW50QnlSZWZlcmVuY2UiLCJtZXNzYWdlIiwiZXhjZXB0aW9uIiwiRXhjZXB0aW9uIiwiZnJvbU1lc3NhZ2UiLCJmaWxlQ29udGV4dCIsImdldEZpbGVDb250ZXh0IiwicHJvY2VkdXJlIiwiZmluZFByb2NlZHVyZUJ5UmVmZXJlbmNlIiwidmFsdWUiLCJjYWxsIiwiZGVidWciLCJmcm9tQXNzaWdubWVudE5vZGUiLCJhc3NpZ21lbnROb2RlIiwicHJvY2VkdXJlQ2FsbCIsInByb2NlZHVyZUNhbGxOb2RlIiwiVmFsdWVzIiwiZG9tIiwiUmVmZXJlbmNlIiwibm9kZSIsIm5vZGVBc1N0cmluZyIsIm5hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVVBOzs7ZUFBQTs7OzJEQVJnQjtxQkFHc0I7Z0VBQ2hCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV0QixJQUFNQSx5QkFBeUJDLElBQUFBLGdCQUFTLEVBQUM7SUFFekMsV0FBZUMsSUFBQUEsZ0JBQVcsa0NBQUM7YUFBTUMsY0FDbkJDLE1BQU0sRUFBRUMsU0FBUyxFQUFFQyxNQUFNO2dDQUROSDtRQUU3QixJQUFJLENBQUNDLE1BQU0sR0FBR0E7UUFDZCxJQUFJLENBQUNDLFNBQVMsR0FBR0E7UUFDakIsSUFBSSxDQUFDQyxNQUFNLEdBQUdBOzs7O1lBR2hCQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNILE1BQU07WUFDcEI7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNILFNBQVM7WUFDdkI7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNILE1BQU07WUFDcEI7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUEsUUFBUUMsT0FBTztnQkFDYixJQUFNQyxzQkFBc0IsSUFBSSxDQUFDUixNQUFNLEVBQUcsR0FBRztnQkFFN0NPLFFBQVFFLEtBQUssQ0FBQyxBQUFDLGtCQUFxQyxPQUFwQkQscUJBQW9CO2dCQUVwRCxJQUFNRSxtQkFBbUJILFFBQVFJLDZCQUE2QixDQUFDLElBQUksQ0FBQ1YsU0FBUztnQkFFN0UsSUFBSSxDQUFDUyxrQkFBa0I7b0JBQ3JCLElBQU1FLFVBQVUsQUFBQyxRQUEyQixPQUFwQkoscUJBQW9CLGdDQUN0Q0ssWUFBWUMsa0JBQVMsQ0FBQ0MsV0FBVyxDQUFDSDtvQkFFeEMsTUFBTUM7Z0JBQ1I7Z0JBRUEsSUFBTUcsY0FBY1QsUUFBUVUsY0FBYyxJQUNwQ0MsWUFBWVgsUUFBUVksd0JBQXdCLENBQUMsSUFBSSxDQUFDbEIsU0FBUyxHQUMzREMsU0FBUyxJQUFJLENBQUNBLE1BQU0sQ0FBQ0ksT0FBTyxDQUFDQyxVQUM3QmEsUUFBUUYsVUFBVUcsSUFBSSxDQUFDbkIsUUFBUWM7Z0JBRXJDVCxRQUFRZSxLQUFLLENBQUMsQUFBQyxvQkFBdUMsT0FBcEJkLHFCQUFvQjtnQkFFdEQsT0FBT1k7WUFDVDs7OztZQUlPRyxLQUFBQTttQkFBUCxTQUFPQSxtQkFBbUJDLGFBQWEsRUFBRWpCLE9BQU87Z0JBQzlDLElBQUlrQixnQkFBZ0I7Z0JBRXBCLElBQU1DLG9CQUFvQjlCLHVCQUF1QjRCO2dCQUVqRCxJQUFJRSxzQkFBc0IsTUFBTTtvQkFDOUIsSUFBUUMsU0FBc0JDLFlBQUcsQ0FBekJELFFBQVFFLFlBQWNELFlBQUcsQ0FBakJDLFdBQ1ZDLE9BQU9KLG1CQUNQMUIsU0FBU08sUUFBUXdCLFlBQVksQ0FBQ0QsT0FDOUI3QixZQUFZNEIsVUFBVU4sa0JBQWtCLENBQUNDLGVBQWVqQixVQUN4REwsU0FBU3lCLE9BQU9KLGtCQUFrQixDQUFDQyxlQUFlakI7b0JBRXhEa0IsZ0JBQWdCLElBQUkxQixjQUFjQyxRQUFRQyxXQUFXQztnQkFDdkQ7Z0JBRUEsT0FBT3VCO1lBQ1Q7Ozs7S0FsQkEsaUNBQU9PLFFBQU8ifQ==