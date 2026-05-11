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
const _occamlanguages = require("occam-languages");
const _exception = /*#__PURE__*/ _interop_require_default(require("../exception"));
const _elements = require("../elements");
const _types = require("../types");
const _value = require("../utilities/value");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const _default = (0, _elements.define)(class NodesQuery extends _occamlanguages.Element {
    constructor(context, string, node, breakPoint, variable, query){
        super(context, string, node, breakPoint);
        this.variable = variable;
        this.query = query;
    }
    getVariable() {
        return this.variable;
    }
    getQuery() {
        return this.query;
    }
    evaluate(context) {
        let value;
        const nodesQueryString = this.getString(); ///
        context.trace(`Evaluating the '${nodesQueryString}' nodes query...`);
        if (this.query === null) {
            const message = `Cannot evaluate the '${nodesQueryString}' nodes query because its expression is malformed.`, exception = _exception.default.fromMessage(message);
            throw exception;
        }
        value = this.variable.evaluate(context);
        const valueType = value.getType();
        if (valueType !== _types.NOMINAL_VALUE_TYPE) {
            const valueString = value.getString(), message = `The '${valueString}' value's '${valueType}' type should be '${_types.NOMINAL_VALUE_TYPE}'.`, exception = _exception.default.fromMessage(message);
            throw exception;
        }
        let node;
        const primitiveValue = value.getPrimitiveValue(), nominalValue = primitiveValue; ///
        node = nominalValue.getNode();
        if (node === null) {
            const valueString = value.getString(), message = `The '${valueString}' value's node is null.`, exception = _exception.default.fromMessage(message);
            throw exception;
        }
        const nodes = this.query.execute(node);
        value = (0, _value.valueFromNodesAndNominalValue)(nodes, nominalValue);
        const valueString = value.getString();
        context.debug(`...evaluated the '${nodesQueryString}' nodes query as '${valueString}'.`);
        return value;
    }
    static name = "NodesQuery";
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L25vZGVzUXVlcnkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwib2NjYW0tbGFuZ3VhZ2VzXCI7XG5cbmltcG9ydCBFeGNlcHRpb24gZnJvbSBcIi4uL2V4Y2VwdGlvblwiO1xuXG5pbXBvcnQgeyBkZWZpbmUgfSBmcm9tIFwiLi4vZWxlbWVudHNcIjtcbmltcG9ydCB7IE5PTUlOQUxfVkFMVUVfVFlQRSB9IGZyb20gXCIuLi90eXBlc1wiO1xuaW1wb3J0IHsgdmFsdWVGcm9tTm9kZXNBbmROb21pbmFsVmFsdWUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3ZhbHVlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZShjbGFzcyBOb2Rlc1F1ZXJ5IGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKGNvbnRleHQsIHN0cmluZywgbm9kZSwgYnJlYWtQb2ludCwgdmFyaWFibGUsIHF1ZXJ5KSB7XG4gICAgc3VwZXIoY29udGV4dCwgc3RyaW5nLCBub2RlLCBicmVha1BvaW50KTtcblxuICAgIHRoaXMudmFyaWFibGUgPSB2YXJpYWJsZTtcbiAgICB0aGlzLnF1ZXJ5ID0gcXVlcnk7XG4gIH1cblxuICBnZXRWYXJpYWJsZSgpIHtcbiAgICByZXR1cm4gdGhpcy52YXJpYWJsZTtcbiAgfVxuXG4gIGdldFF1ZXJ5KCkge1xuICAgIHJldHVybiB0aGlzLnF1ZXJ5O1xuICB9XG5cbiAgZXZhbHVhdGUoY29udGV4dCkge1xuICAgIGxldCB2YWx1ZTtcblxuICAgIGNvbnN0IG5vZGVzUXVlcnlTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBFdmFsdWF0aW5nIHRoZSAnJHtub2Rlc1F1ZXJ5U3RyaW5nfScgbm9kZXMgcXVlcnkuLi5gKTtcblxuICAgIGlmICh0aGlzLnF1ZXJ5ID09PSBudWxsKSB7XG4gICAgICBjb25zdCBtZXNzYWdlID0gYENhbm5vdCBldmFsdWF0ZSB0aGUgJyR7bm9kZXNRdWVyeVN0cmluZ30nIG5vZGVzIHF1ZXJ5IGJlY2F1c2UgaXRzIGV4cHJlc3Npb24gaXMgbWFsZm9ybWVkLmAsXG4gICAgICAgICAgICBleGNlcHRpb24gPSBFeGNlcHRpb24uZnJvbU1lc3NhZ2UobWVzc2FnZSk7XG5cbiAgICAgIHRocm93IGV4Y2VwdGlvbjtcbiAgICB9XG5cbiAgICB2YWx1ZSA9IHRoaXMudmFyaWFibGUuZXZhbHVhdGUoY29udGV4dCk7XG5cbiAgICBjb25zdCB2YWx1ZVR5cGUgPSB2YWx1ZS5nZXRUeXBlKCk7XG5cbiAgICBpZiAodmFsdWVUeXBlICE9PSBOT01JTkFMX1ZBTFVFX1RZUEUpIHtcbiAgICAgIGNvbnN0IHZhbHVlU3RyaW5nID0gdmFsdWUuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgICBtZXNzYWdlID0gYFRoZSAnJHt2YWx1ZVN0cmluZ30nIHZhbHVlJ3MgJyR7dmFsdWVUeXBlfScgdHlwZSBzaG91bGQgYmUgJyR7Tk9NSU5BTF9WQUxVRV9UWVBFfScuYCxcbiAgICAgICAgICAgIGV4Y2VwdGlvbiA9IEV4Y2VwdGlvbi5mcm9tTWVzc2FnZShtZXNzYWdlKTtcblxuICAgICAgdGhyb3cgZXhjZXB0aW9uO1xuICAgIH1cblxuICAgIGxldCBub2RlO1xuXG4gICAgY29uc3QgcHJpbWl0aXZlVmFsdWUgPSB2YWx1ZS5nZXRQcmltaXRpdmVWYWx1ZSgpLFxuICAgICAgICAgIG5vbWluYWxWYWx1ZSA9IHByaW1pdGl2ZVZhbHVlOyAgLy8vXG5cbiAgICBub2RlID0gbm9taW5hbFZhbHVlLmdldE5vZGUoKTtcblxuICAgIGlmIChub2RlID09PSBudWxsKSB7XG4gICAgICBjb25zdCB2YWx1ZVN0cmluZyA9IHZhbHVlLmdldFN0cmluZygpLFxuICAgICAgICAgICAgbWVzc2FnZSA9IGBUaGUgJyR7dmFsdWVTdHJpbmd9JyB2YWx1ZSdzIG5vZGUgaXMgbnVsbC5gLFxuICAgICAgICAgICAgZXhjZXB0aW9uID0gRXhjZXB0aW9uLmZyb21NZXNzYWdlKG1lc3NhZ2UpO1xuXG4gICAgICB0aHJvdyBleGNlcHRpb247XG4gICAgfVxuXG4gICAgY29uc3Qgbm9kZXMgPSB0aGlzLnF1ZXJ5LmV4ZWN1dGUobm9kZSk7XG5cbiAgICB2YWx1ZSA9IHZhbHVlRnJvbU5vZGVzQW5kTm9taW5hbFZhbHVlKG5vZGVzLCBub21pbmFsVmFsdWUpO1xuXG4gICAgY29uc3QgdmFsdWVTdHJpbmcgPSB2YWx1ZS5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQuZGVidWcoYC4uLmV2YWx1YXRlZCB0aGUgJyR7bm9kZXNRdWVyeVN0cmluZ30nIG5vZGVzIHF1ZXJ5IGFzICcke3ZhbHVlU3RyaW5nfScuYCk7XG5cbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiTm9kZXNRdWVyeVwiO1xufSk7XG4iXSwibmFtZXMiOlsiZGVmaW5lIiwiTm9kZXNRdWVyeSIsIkVsZW1lbnQiLCJjb250ZXh0Iiwic3RyaW5nIiwibm9kZSIsImJyZWFrUG9pbnQiLCJ2YXJpYWJsZSIsInF1ZXJ5IiwiZ2V0VmFyaWFibGUiLCJnZXRRdWVyeSIsImV2YWx1YXRlIiwidmFsdWUiLCJub2Rlc1F1ZXJ5U3RyaW5nIiwiZ2V0U3RyaW5nIiwidHJhY2UiLCJtZXNzYWdlIiwiZXhjZXB0aW9uIiwiRXhjZXB0aW9uIiwiZnJvbU1lc3NhZ2UiLCJ2YWx1ZVR5cGUiLCJnZXRUeXBlIiwiTk9NSU5BTF9WQUxVRV9UWVBFIiwidmFsdWVTdHJpbmciLCJwcmltaXRpdmVWYWx1ZSIsImdldFByaW1pdGl2ZVZhbHVlIiwibm9taW5hbFZhbHVlIiwiZ2V0Tm9kZSIsIm5vZGVzIiwiZXhlY3V0ZSIsInZhbHVlRnJvbU5vZGVzQW5kTm9taW5hbFZhbHVlIiwiZGVidWciLCJuYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFVQTs7O2VBQUE7OztnQ0FSd0I7a0VBRUY7MEJBRUM7dUJBQ1k7dUJBQ1c7Ozs7OztNQUU5QyxXQUFlQSxJQUFBQSxnQkFBTSxFQUFDLE1BQU1DLG1CQUFtQkMsdUJBQU87SUFDcEQsWUFBWUMsT0FBTyxFQUFFQyxNQUFNLEVBQUVDLElBQUksRUFBRUMsVUFBVSxFQUFFQyxRQUFRLEVBQUVDLEtBQUssQ0FBRTtRQUM5RCxLQUFLLENBQUNMLFNBQVNDLFFBQVFDLE1BQU1DO1FBRTdCLElBQUksQ0FBQ0MsUUFBUSxHQUFHQTtRQUNoQixJQUFJLENBQUNDLEtBQUssR0FBR0E7SUFDZjtJQUVBQyxjQUFjO1FBQ1osT0FBTyxJQUFJLENBQUNGLFFBQVE7SUFDdEI7SUFFQUcsV0FBVztRQUNULE9BQU8sSUFBSSxDQUFDRixLQUFLO0lBQ25CO0lBRUFHLFNBQVNSLE9BQU8sRUFBRTtRQUNoQixJQUFJUztRQUVKLE1BQU1DLG1CQUFtQixJQUFJLENBQUNDLFNBQVMsSUFBSyxHQUFHO1FBRS9DWCxRQUFRWSxLQUFLLENBQUMsQ0FBQyxnQkFBZ0IsRUFBRUYsaUJBQWlCLGdCQUFnQixDQUFDO1FBRW5FLElBQUksSUFBSSxDQUFDTCxLQUFLLEtBQUssTUFBTTtZQUN2QixNQUFNUSxVQUFVLENBQUMscUJBQXFCLEVBQUVILGlCQUFpQixrREFBa0QsQ0FBQyxFQUN0R0ksWUFBWUMsa0JBQVMsQ0FBQ0MsV0FBVyxDQUFDSDtZQUV4QyxNQUFNQztRQUNSO1FBRUFMLFFBQVEsSUFBSSxDQUFDTCxRQUFRLENBQUNJLFFBQVEsQ0FBQ1I7UUFFL0IsTUFBTWlCLFlBQVlSLE1BQU1TLE9BQU87UUFFL0IsSUFBSUQsY0FBY0UseUJBQWtCLEVBQUU7WUFDcEMsTUFBTUMsY0FBY1gsTUFBTUUsU0FBUyxJQUM3QkUsVUFBVSxDQUFDLEtBQUssRUFBRU8sWUFBWSxXQUFXLEVBQUVILFVBQVUsa0JBQWtCLEVBQUVFLHlCQUFrQixDQUFDLEVBQUUsQ0FBQyxFQUMvRkwsWUFBWUMsa0JBQVMsQ0FBQ0MsV0FBVyxDQUFDSDtZQUV4QyxNQUFNQztRQUNSO1FBRUEsSUFBSVo7UUFFSixNQUFNbUIsaUJBQWlCWixNQUFNYSxpQkFBaUIsSUFDeENDLGVBQWVGLGdCQUFpQixHQUFHO1FBRXpDbkIsT0FBT3FCLGFBQWFDLE9BQU87UUFFM0IsSUFBSXRCLFNBQVMsTUFBTTtZQUNqQixNQUFNa0IsY0FBY1gsTUFBTUUsU0FBUyxJQUM3QkUsVUFBVSxDQUFDLEtBQUssRUFBRU8sWUFBWSx1QkFBdUIsQ0FBQyxFQUN0RE4sWUFBWUMsa0JBQVMsQ0FBQ0MsV0FBVyxDQUFDSDtZQUV4QyxNQUFNQztRQUNSO1FBRUEsTUFBTVcsUUFBUSxJQUFJLENBQUNwQixLQUFLLENBQUNxQixPQUFPLENBQUN4QjtRQUVqQ08sUUFBUWtCLElBQUFBLG9DQUE2QixFQUFDRixPQUFPRjtRQUU3QyxNQUFNSCxjQUFjWCxNQUFNRSxTQUFTO1FBRW5DWCxRQUFRNEIsS0FBSyxDQUFDLENBQUMsa0JBQWtCLEVBQUVsQixpQkFBaUIsa0JBQWtCLEVBQUVVLFlBQVksRUFBRSxDQUFDO1FBRXZGLE9BQU9YO0lBQ1Q7SUFFQSxPQUFPb0IsT0FBTyxhQUFhO0FBQzdCIn0=