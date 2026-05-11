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
const _necessary = require("necessary");
const _exception = /*#__PURE__*/ _interop_require_default(require("../exception"));
const _elements = require("../elements");
const _types = require("../types");
const _nominal = require("../utilities/nominal");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const { first } = _necessary.arrayUtilities;
const _default = (0, _elements.define)(class NodeQuery extends _occamlanguages.Element {
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
        const nodeQueryString = this.getString(); ///
        context.trace(`Evaluating the '${nodeQueryString}' node query...`);
        if (this.query === null) {
            const message = `Cannot evaluate the '${nodeQueryString}' node query because its expression is malformed.`, exception = _exception.default.fromMessage(message);
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
        const nodes = this.query.execute(node), nodesLength = nodes.length;
        if (nodesLength !== 1) {
            const message = `The length of the returned nodes is ${nodesLength} when it should be 1.`, exception = _exception.default.fromMessage(message);
            throw exception;
        }
        const firstNode = first(nodes);
        node = firstNode; ///
        value = (0, _nominal.valueFromNodeAndNominalValue)(node, nominalValue);
        const valueString = value.getString();
        context.debug(`...evaluated the '${nodeQueryString}' node query as '${valueString}'.`);
        return value;
    }
    static name = "NodeQuery";
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L25vZGVRdWVyeS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgRWxlbWVudCB9IGZyb20gXCJvY2NhbS1sYW5ndWFnZXNcIjtcbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgRXhjZXB0aW9uIGZyb20gXCIuLi9leGNlcHRpb25cIjtcblxuaW1wb3J0IHsgZGVmaW5lIH0gZnJvbSBcIi4uL2VsZW1lbnRzXCI7XG5pbXBvcnQgeyBOT01JTkFMX1ZBTFVFX1RZUEUgfSBmcm9tIFwiLi4vdHlwZXNcIjtcbmltcG9ydCB7IHZhbHVlRnJvbU5vZGVBbmROb21pbmFsVmFsdWUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL25vbWluYWxcIjtcblxuY29uc3QgeyBmaXJzdCB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZShjbGFzcyBOb2RlUXVlcnkgZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgc3RyaW5nLCBub2RlLCBicmVha1BvaW50LCB2YXJpYWJsZSwgcXVlcnkpIHtcbiAgICBzdXBlcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGJyZWFrUG9pbnQpO1xuXG4gICAgdGhpcy52YXJpYWJsZSA9IHZhcmlhYmxlO1xuICAgIHRoaXMucXVlcnkgPSBxdWVyeTtcbiAgfVxuXG4gIGdldFZhcmlhYmxlKCkge1xuICAgIHJldHVybiB0aGlzLnZhcmlhYmxlO1xuICB9XG5cbiAgZ2V0UXVlcnkoKSB7XG4gICAgcmV0dXJuIHRoaXMucXVlcnk7XG4gIH1cblxuICBldmFsdWF0ZShjb250ZXh0KSB7XG4gICAgbGV0IHZhbHVlO1xuXG4gICAgY29uc3Qgbm9kZVF1ZXJ5U3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgRXZhbHVhdGluZyB0aGUgJyR7bm9kZVF1ZXJ5U3RyaW5nfScgbm9kZSBxdWVyeS4uLmApO1xuXG4gICAgaWYgKHRoaXMucXVlcnkgPT09IG51bGwpIHtcbiAgICAgIGNvbnN0IG1lc3NhZ2UgPSBgQ2Fubm90IGV2YWx1YXRlIHRoZSAnJHtub2RlUXVlcnlTdHJpbmd9JyBub2RlIHF1ZXJ5IGJlY2F1c2UgaXRzIGV4cHJlc3Npb24gaXMgbWFsZm9ybWVkLmAsXG4gICAgICAgICAgICBleGNlcHRpb24gPSBFeGNlcHRpb24uZnJvbU1lc3NhZ2UobWVzc2FnZSk7XG5cbiAgICAgIHRocm93IGV4Y2VwdGlvbjtcbiAgICB9XG5cbiAgICB2YWx1ZSA9IHRoaXMudmFyaWFibGUuZXZhbHVhdGUoY29udGV4dCk7XG5cbiAgICBjb25zdCB2YWx1ZVR5cGUgPSB2YWx1ZS5nZXRUeXBlKCk7XG5cbiAgICBpZiAodmFsdWVUeXBlICE9PSBOT01JTkFMX1ZBTFVFX1RZUEUpIHtcbiAgICAgIGNvbnN0IHZhbHVlU3RyaW5nID0gdmFsdWUuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgICBtZXNzYWdlID0gYFRoZSAnJHt2YWx1ZVN0cmluZ30nIHZhbHVlJ3MgJyR7dmFsdWVUeXBlfScgdHlwZSBzaG91bGQgYmUgJyR7Tk9NSU5BTF9WQUxVRV9UWVBFfScuYCxcbiAgICAgICAgICAgIGV4Y2VwdGlvbiA9IEV4Y2VwdGlvbi5mcm9tTWVzc2FnZShtZXNzYWdlKTtcblxuICAgICAgdGhyb3cgZXhjZXB0aW9uO1xuICAgIH1cblxuICAgIGxldCBub2RlO1xuXG4gICAgY29uc3QgcHJpbWl0aXZlVmFsdWUgPSB2YWx1ZS5nZXRQcmltaXRpdmVWYWx1ZSgpLFxuICAgICAgICAgIG5vbWluYWxWYWx1ZSA9IHByaW1pdGl2ZVZhbHVlOyAgLy8vXG5cbiAgICBub2RlID0gbm9taW5hbFZhbHVlLmdldE5vZGUoKTtcblxuICAgIGlmIChub2RlID09PSBudWxsKSB7XG4gICAgICBjb25zdCB2YWx1ZVN0cmluZyA9IHZhbHVlLmdldFN0cmluZygpLFxuICAgICAgICAgICAgbWVzc2FnZSA9IGBUaGUgJyR7dmFsdWVTdHJpbmd9JyB2YWx1ZSdzIG5vZGUgaXMgbnVsbC5gLFxuICAgICAgICAgICAgZXhjZXB0aW9uID0gRXhjZXB0aW9uLmZyb21NZXNzYWdlKG1lc3NhZ2UpO1xuXG4gICAgICB0aHJvdyBleGNlcHRpb247XG4gICAgfVxuXG4gICAgY29uc3Qgbm9kZXMgPSB0aGlzLnF1ZXJ5LmV4ZWN1dGUobm9kZSksXG4gICAgICAgICAgbm9kZXNMZW5ndGggPSBub2Rlcy5sZW5ndGg7XG5cbiAgICBpZiAobm9kZXNMZW5ndGggIT09IDEpIHtcbiAgICAgIGNvbnN0IG1lc3NhZ2UgPSBgVGhlIGxlbmd0aCBvZiB0aGUgcmV0dXJuZWQgbm9kZXMgaXMgJHtub2Rlc0xlbmd0aH0gd2hlbiBpdCBzaG91bGQgYmUgMS5gLFxuICAgICAgICAgICAgZXhjZXB0aW9uID0gRXhjZXB0aW9uLmZyb21NZXNzYWdlKG1lc3NhZ2UpO1xuXG4gICAgICB0aHJvdyBleGNlcHRpb247XG4gICAgfVxuXG5cbiAgICBjb25zdCBmaXJzdE5vZGUgPSBmaXJzdChub2Rlcyk7XG5cbiAgICBub2RlID0gZmlyc3ROb2RlIC8vL1xuXG4gICAgdmFsdWUgPSB2YWx1ZUZyb21Ob2RlQW5kTm9taW5hbFZhbHVlKG5vZGUsIG5vbWluYWxWYWx1ZSk7XG5cbiAgICBjb25zdCB2YWx1ZVN0cmluZyA9IHZhbHVlLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC5kZWJ1ZyhgLi4uZXZhbHVhdGVkIHRoZSAnJHtub2RlUXVlcnlTdHJpbmd9JyBub2RlIHF1ZXJ5IGFzICcke3ZhbHVlU3RyaW5nfScuYCk7XG5cbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiTm9kZVF1ZXJ5XCI7XG59KTtcbiJdLCJuYW1lcyI6WyJmaXJzdCIsImFycmF5VXRpbGl0aWVzIiwiZGVmaW5lIiwiTm9kZVF1ZXJ5IiwiRWxlbWVudCIsImNvbnRleHQiLCJzdHJpbmciLCJub2RlIiwiYnJlYWtQb2ludCIsInZhcmlhYmxlIiwicXVlcnkiLCJnZXRWYXJpYWJsZSIsImdldFF1ZXJ5IiwiZXZhbHVhdGUiLCJ2YWx1ZSIsIm5vZGVRdWVyeVN0cmluZyIsImdldFN0cmluZyIsInRyYWNlIiwibWVzc2FnZSIsImV4Y2VwdGlvbiIsIkV4Y2VwdGlvbiIsImZyb21NZXNzYWdlIiwidmFsdWVUeXBlIiwiZ2V0VHlwZSIsIk5PTUlOQUxfVkFMVUVfVFlQRSIsInZhbHVlU3RyaW5nIiwicHJpbWl0aXZlVmFsdWUiLCJnZXRQcmltaXRpdmVWYWx1ZSIsIm5vbWluYWxWYWx1ZSIsImdldE5vZGUiLCJub2RlcyIsImV4ZWN1dGUiLCJub2Rlc0xlbmd0aCIsImxlbmd0aCIsImZpcnN0Tm9kZSIsInZhbHVlRnJvbU5vZGVBbmROb21pbmFsVmFsdWUiLCJkZWJ1ZyIsIm5hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQWFBOzs7ZUFBQTs7O2dDQVh3QjsyQkFDTztrRUFFVDswQkFFQzt1QkFDWTt5QkFDVTs7Ozs7O0FBRTdDLE1BQU0sRUFBRUEsS0FBSyxFQUFFLEdBQUdDLHlCQUFjO01BRWhDLFdBQWVDLElBQUFBLGdCQUFNLEVBQUMsTUFBTUMsa0JBQWtCQyx1QkFBTztJQUNuRCxZQUFZQyxPQUFPLEVBQUVDLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxVQUFVLEVBQUVDLFFBQVEsRUFBRUMsS0FBSyxDQUFFO1FBQzlELEtBQUssQ0FBQ0wsU0FBU0MsUUFBUUMsTUFBTUM7UUFFN0IsSUFBSSxDQUFDQyxRQUFRLEdBQUdBO1FBQ2hCLElBQUksQ0FBQ0MsS0FBSyxHQUFHQTtJQUNmO0lBRUFDLGNBQWM7UUFDWixPQUFPLElBQUksQ0FBQ0YsUUFBUTtJQUN0QjtJQUVBRyxXQUFXO1FBQ1QsT0FBTyxJQUFJLENBQUNGLEtBQUs7SUFDbkI7SUFFQUcsU0FBU1IsT0FBTyxFQUFFO1FBQ2hCLElBQUlTO1FBRUosTUFBTUMsa0JBQWtCLElBQUksQ0FBQ0MsU0FBUyxJQUFLLEdBQUc7UUFFOUNYLFFBQVFZLEtBQUssQ0FBQyxDQUFDLGdCQUFnQixFQUFFRixnQkFBZ0IsZUFBZSxDQUFDO1FBRWpFLElBQUksSUFBSSxDQUFDTCxLQUFLLEtBQUssTUFBTTtZQUN2QixNQUFNUSxVQUFVLENBQUMscUJBQXFCLEVBQUVILGdCQUFnQixpREFBaUQsQ0FBQyxFQUNwR0ksWUFBWUMsa0JBQVMsQ0FBQ0MsV0FBVyxDQUFDSDtZQUV4QyxNQUFNQztRQUNSO1FBRUFMLFFBQVEsSUFBSSxDQUFDTCxRQUFRLENBQUNJLFFBQVEsQ0FBQ1I7UUFFL0IsTUFBTWlCLFlBQVlSLE1BQU1TLE9BQU87UUFFL0IsSUFBSUQsY0FBY0UseUJBQWtCLEVBQUU7WUFDcEMsTUFBTUMsY0FBY1gsTUFBTUUsU0FBUyxJQUM3QkUsVUFBVSxDQUFDLEtBQUssRUFBRU8sWUFBWSxXQUFXLEVBQUVILFVBQVUsa0JBQWtCLEVBQUVFLHlCQUFrQixDQUFDLEVBQUUsQ0FBQyxFQUMvRkwsWUFBWUMsa0JBQVMsQ0FBQ0MsV0FBVyxDQUFDSDtZQUV4QyxNQUFNQztRQUNSO1FBRUEsSUFBSVo7UUFFSixNQUFNbUIsaUJBQWlCWixNQUFNYSxpQkFBaUIsSUFDeENDLGVBQWVGLGdCQUFpQixHQUFHO1FBRXpDbkIsT0FBT3FCLGFBQWFDLE9BQU87UUFFM0IsSUFBSXRCLFNBQVMsTUFBTTtZQUNqQixNQUFNa0IsY0FBY1gsTUFBTUUsU0FBUyxJQUM3QkUsVUFBVSxDQUFDLEtBQUssRUFBRU8sWUFBWSx1QkFBdUIsQ0FBQyxFQUN0RE4sWUFBWUMsa0JBQVMsQ0FBQ0MsV0FBVyxDQUFDSDtZQUV4QyxNQUFNQztRQUNSO1FBRUEsTUFBTVcsUUFBUSxJQUFJLENBQUNwQixLQUFLLENBQUNxQixPQUFPLENBQUN4QixPQUMzQnlCLGNBQWNGLE1BQU1HLE1BQU07UUFFaEMsSUFBSUQsZ0JBQWdCLEdBQUc7WUFDckIsTUFBTWQsVUFBVSxDQUFDLG9DQUFvQyxFQUFFYyxZQUFZLHFCQUFxQixDQUFDLEVBQ25GYixZQUFZQyxrQkFBUyxDQUFDQyxXQUFXLENBQUNIO1lBRXhDLE1BQU1DO1FBQ1I7UUFHQSxNQUFNZSxZQUFZbEMsTUFBTThCO1FBRXhCdkIsT0FBTzJCLFdBQVUsR0FBRztRQUVwQnBCLFFBQVFxQixJQUFBQSxxQ0FBNEIsRUFBQzVCLE1BQU1xQjtRQUUzQyxNQUFNSCxjQUFjWCxNQUFNRSxTQUFTO1FBRW5DWCxRQUFRK0IsS0FBSyxDQUFDLENBQUMsa0JBQWtCLEVBQUVyQixnQkFBZ0IsaUJBQWlCLEVBQUVVLFlBQVksRUFBRSxDQUFDO1FBRXJGLE9BQU9YO0lBQ1Q7SUFFQSxPQUFPdUIsT0FBTyxZQUFZO0FBQzVCIn0=