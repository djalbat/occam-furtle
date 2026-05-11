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
const _value = require("../utilities/value");
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
        value = (0, _value.valueFromNodeAndNominalValue)(node, nominalValue);
        const valueString = value.getString();
        context.debug(`...evaluated the '${nodeQueryString}' node query as '${valueString}'.`);
        return value;
    }
    static name = "NodeQuery";
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L25vZGVRdWVyeS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgRWxlbWVudCB9IGZyb20gXCJvY2NhbS1sYW5ndWFnZXNcIjtcbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgRXhjZXB0aW9uIGZyb20gXCIuLi9leGNlcHRpb25cIjtcblxuaW1wb3J0IHsgZGVmaW5lIH0gZnJvbSBcIi4uL2VsZW1lbnRzXCI7XG5pbXBvcnQgeyBOT01JTkFMX1ZBTFVFX1RZUEUgfSBmcm9tIFwiLi4vdHlwZXNcIjtcbmltcG9ydCB7IHZhbHVlRnJvbU5vZGVBbmROb21pbmFsVmFsdWUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3ZhbHVlXCI7XG5cbmNvbnN0IHsgZmlyc3QgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmUoY2xhc3MgTm9kZVF1ZXJ5IGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKGNvbnRleHQsIHN0cmluZywgbm9kZSwgYnJlYWtQb2ludCwgdmFyaWFibGUsIHF1ZXJ5KSB7XG4gICAgc3VwZXIoY29udGV4dCwgc3RyaW5nLCBub2RlLCBicmVha1BvaW50KTtcblxuICAgIHRoaXMudmFyaWFibGUgPSB2YXJpYWJsZTtcbiAgICB0aGlzLnF1ZXJ5ID0gcXVlcnk7XG4gIH1cblxuICBnZXRWYXJpYWJsZSgpIHtcbiAgICByZXR1cm4gdGhpcy52YXJpYWJsZTtcbiAgfVxuXG4gIGdldFF1ZXJ5KCkge1xuICAgIHJldHVybiB0aGlzLnF1ZXJ5O1xuICB9XG5cbiAgZXZhbHVhdGUoY29udGV4dCkge1xuICAgIGxldCB2YWx1ZTtcblxuICAgIGNvbnN0IG5vZGVRdWVyeVN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYEV2YWx1YXRpbmcgdGhlICcke25vZGVRdWVyeVN0cmluZ30nIG5vZGUgcXVlcnkuLi5gKTtcblxuICAgIGlmICh0aGlzLnF1ZXJ5ID09PSBudWxsKSB7XG4gICAgICBjb25zdCBtZXNzYWdlID0gYENhbm5vdCBldmFsdWF0ZSB0aGUgJyR7bm9kZVF1ZXJ5U3RyaW5nfScgbm9kZSBxdWVyeSBiZWNhdXNlIGl0cyBleHByZXNzaW9uIGlzIG1hbGZvcm1lZC5gLFxuICAgICAgICAgICAgZXhjZXB0aW9uID0gRXhjZXB0aW9uLmZyb21NZXNzYWdlKG1lc3NhZ2UpO1xuXG4gICAgICB0aHJvdyBleGNlcHRpb247XG4gICAgfVxuXG4gICAgdmFsdWUgPSB0aGlzLnZhcmlhYmxlLmV2YWx1YXRlKGNvbnRleHQpO1xuXG4gICAgY29uc3QgdmFsdWVUeXBlID0gdmFsdWUuZ2V0VHlwZSgpO1xuXG4gICAgaWYgKHZhbHVlVHlwZSAhPT0gTk9NSU5BTF9WQUxVRV9UWVBFKSB7XG4gICAgICBjb25zdCB2YWx1ZVN0cmluZyA9IHZhbHVlLmdldFN0cmluZygpLFxuICAgICAgICAgICAgbWVzc2FnZSA9IGBUaGUgJyR7dmFsdWVTdHJpbmd9JyB2YWx1ZSdzICcke3ZhbHVlVHlwZX0nIHR5cGUgc2hvdWxkIGJlICcke05PTUlOQUxfVkFMVUVfVFlQRX0nLmAsXG4gICAgICAgICAgICBleGNlcHRpb24gPSBFeGNlcHRpb24uZnJvbU1lc3NhZ2UobWVzc2FnZSk7XG5cbiAgICAgIHRocm93IGV4Y2VwdGlvbjtcbiAgICB9XG5cbiAgICBsZXQgbm9kZTtcblxuICAgIGNvbnN0IHByaW1pdGl2ZVZhbHVlID0gdmFsdWUuZ2V0UHJpbWl0aXZlVmFsdWUoKSxcbiAgICAgICAgICBub21pbmFsVmFsdWUgPSBwcmltaXRpdmVWYWx1ZTsgIC8vL1xuXG4gICAgbm9kZSA9IG5vbWluYWxWYWx1ZS5nZXROb2RlKCk7XG5cbiAgICBpZiAobm9kZSA9PT0gbnVsbCkge1xuICAgICAgY29uc3QgdmFsdWVTdHJpbmcgPSB2YWx1ZS5nZXRTdHJpbmcoKSxcbiAgICAgICAgICAgIG1lc3NhZ2UgPSBgVGhlICcke3ZhbHVlU3RyaW5nfScgdmFsdWUncyBub2RlIGlzIG51bGwuYCxcbiAgICAgICAgICAgIGV4Y2VwdGlvbiA9IEV4Y2VwdGlvbi5mcm9tTWVzc2FnZShtZXNzYWdlKTtcblxuICAgICAgdGhyb3cgZXhjZXB0aW9uO1xuICAgIH1cblxuICAgIGNvbnN0IG5vZGVzID0gdGhpcy5xdWVyeS5leGVjdXRlKG5vZGUpLFxuICAgICAgICAgIG5vZGVzTGVuZ3RoID0gbm9kZXMubGVuZ3RoO1xuXG4gICAgaWYgKG5vZGVzTGVuZ3RoICE9PSAxKSB7XG4gICAgICBjb25zdCBtZXNzYWdlID0gYFRoZSBsZW5ndGggb2YgdGhlIHJldHVybmVkIG5vZGVzIGlzICR7bm9kZXNMZW5ndGh9IHdoZW4gaXQgc2hvdWxkIGJlIDEuYCxcbiAgICAgICAgICAgIGV4Y2VwdGlvbiA9IEV4Y2VwdGlvbi5mcm9tTWVzc2FnZShtZXNzYWdlKTtcblxuICAgICAgdGhyb3cgZXhjZXB0aW9uO1xuICAgIH1cblxuXG4gICAgY29uc3QgZmlyc3ROb2RlID0gZmlyc3Qobm9kZXMpO1xuXG4gICAgbm9kZSA9IGZpcnN0Tm9kZSAvLy9cblxuICAgIHZhbHVlID0gdmFsdWVGcm9tTm9kZUFuZE5vbWluYWxWYWx1ZShub2RlLCBub21pbmFsVmFsdWUpO1xuXG4gICAgY29uc3QgdmFsdWVTdHJpbmcgPSB2YWx1ZS5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQuZGVidWcoYC4uLmV2YWx1YXRlZCB0aGUgJyR7bm9kZVF1ZXJ5U3RyaW5nfScgbm9kZSBxdWVyeSBhcyAnJHt2YWx1ZVN0cmluZ30nLmApO1xuXG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIk5vZGVRdWVyeVwiO1xufSk7XG4iXSwibmFtZXMiOlsiZmlyc3QiLCJhcnJheVV0aWxpdGllcyIsImRlZmluZSIsIk5vZGVRdWVyeSIsIkVsZW1lbnQiLCJjb250ZXh0Iiwic3RyaW5nIiwibm9kZSIsImJyZWFrUG9pbnQiLCJ2YXJpYWJsZSIsInF1ZXJ5IiwiZ2V0VmFyaWFibGUiLCJnZXRRdWVyeSIsImV2YWx1YXRlIiwidmFsdWUiLCJub2RlUXVlcnlTdHJpbmciLCJnZXRTdHJpbmciLCJ0cmFjZSIsIm1lc3NhZ2UiLCJleGNlcHRpb24iLCJFeGNlcHRpb24iLCJmcm9tTWVzc2FnZSIsInZhbHVlVHlwZSIsImdldFR5cGUiLCJOT01JTkFMX1ZBTFVFX1RZUEUiLCJ2YWx1ZVN0cmluZyIsInByaW1pdGl2ZVZhbHVlIiwiZ2V0UHJpbWl0aXZlVmFsdWUiLCJub21pbmFsVmFsdWUiLCJnZXROb2RlIiwibm9kZXMiLCJleGVjdXRlIiwibm9kZXNMZW5ndGgiLCJsZW5ndGgiLCJmaXJzdE5vZGUiLCJ2YWx1ZUZyb21Ob2RlQW5kTm9taW5hbFZhbHVlIiwiZGVidWciLCJuYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFhQTs7O2VBQUE7OztnQ0FYd0I7MkJBQ087a0VBRVQ7MEJBRUM7dUJBQ1k7dUJBQ1U7Ozs7OztBQUU3QyxNQUFNLEVBQUVBLEtBQUssRUFBRSxHQUFHQyx5QkFBYztNQUVoQyxXQUFlQyxJQUFBQSxnQkFBTSxFQUFDLE1BQU1DLGtCQUFrQkMsdUJBQU87SUFDbkQsWUFBWUMsT0FBTyxFQUFFQyxNQUFNLEVBQUVDLElBQUksRUFBRUMsVUFBVSxFQUFFQyxRQUFRLEVBQUVDLEtBQUssQ0FBRTtRQUM5RCxLQUFLLENBQUNMLFNBQVNDLFFBQVFDLE1BQU1DO1FBRTdCLElBQUksQ0FBQ0MsUUFBUSxHQUFHQTtRQUNoQixJQUFJLENBQUNDLEtBQUssR0FBR0E7SUFDZjtJQUVBQyxjQUFjO1FBQ1osT0FBTyxJQUFJLENBQUNGLFFBQVE7SUFDdEI7SUFFQUcsV0FBVztRQUNULE9BQU8sSUFBSSxDQUFDRixLQUFLO0lBQ25CO0lBRUFHLFNBQVNSLE9BQU8sRUFBRTtRQUNoQixJQUFJUztRQUVKLE1BQU1DLGtCQUFrQixJQUFJLENBQUNDLFNBQVMsSUFBSyxHQUFHO1FBRTlDWCxRQUFRWSxLQUFLLENBQUMsQ0FBQyxnQkFBZ0IsRUFBRUYsZ0JBQWdCLGVBQWUsQ0FBQztRQUVqRSxJQUFJLElBQUksQ0FBQ0wsS0FBSyxLQUFLLE1BQU07WUFDdkIsTUFBTVEsVUFBVSxDQUFDLHFCQUFxQixFQUFFSCxnQkFBZ0IsaURBQWlELENBQUMsRUFDcEdJLFlBQVlDLGtCQUFTLENBQUNDLFdBQVcsQ0FBQ0g7WUFFeEMsTUFBTUM7UUFDUjtRQUVBTCxRQUFRLElBQUksQ0FBQ0wsUUFBUSxDQUFDSSxRQUFRLENBQUNSO1FBRS9CLE1BQU1pQixZQUFZUixNQUFNUyxPQUFPO1FBRS9CLElBQUlELGNBQWNFLHlCQUFrQixFQUFFO1lBQ3BDLE1BQU1DLGNBQWNYLE1BQU1FLFNBQVMsSUFDN0JFLFVBQVUsQ0FBQyxLQUFLLEVBQUVPLFlBQVksV0FBVyxFQUFFSCxVQUFVLGtCQUFrQixFQUFFRSx5QkFBa0IsQ0FBQyxFQUFFLENBQUMsRUFDL0ZMLFlBQVlDLGtCQUFTLENBQUNDLFdBQVcsQ0FBQ0g7WUFFeEMsTUFBTUM7UUFDUjtRQUVBLElBQUlaO1FBRUosTUFBTW1CLGlCQUFpQlosTUFBTWEsaUJBQWlCLElBQ3hDQyxlQUFlRixnQkFBaUIsR0FBRztRQUV6Q25CLE9BQU9xQixhQUFhQyxPQUFPO1FBRTNCLElBQUl0QixTQUFTLE1BQU07WUFDakIsTUFBTWtCLGNBQWNYLE1BQU1FLFNBQVMsSUFDN0JFLFVBQVUsQ0FBQyxLQUFLLEVBQUVPLFlBQVksdUJBQXVCLENBQUMsRUFDdEROLFlBQVlDLGtCQUFTLENBQUNDLFdBQVcsQ0FBQ0g7WUFFeEMsTUFBTUM7UUFDUjtRQUVBLE1BQU1XLFFBQVEsSUFBSSxDQUFDcEIsS0FBSyxDQUFDcUIsT0FBTyxDQUFDeEIsT0FDM0J5QixjQUFjRixNQUFNRyxNQUFNO1FBRWhDLElBQUlELGdCQUFnQixHQUFHO1lBQ3JCLE1BQU1kLFVBQVUsQ0FBQyxvQ0FBb0MsRUFBRWMsWUFBWSxxQkFBcUIsQ0FBQyxFQUNuRmIsWUFBWUMsa0JBQVMsQ0FBQ0MsV0FBVyxDQUFDSDtZQUV4QyxNQUFNQztRQUNSO1FBR0EsTUFBTWUsWUFBWWxDLE1BQU04QjtRQUV4QnZCLE9BQU8yQixXQUFVLEdBQUc7UUFFcEJwQixRQUFRcUIsSUFBQUEsbUNBQTRCLEVBQUM1QixNQUFNcUI7UUFFM0MsTUFBTUgsY0FBY1gsTUFBTUUsU0FBUztRQUVuQ1gsUUFBUStCLEtBQUssQ0FBQyxDQUFDLGtCQUFrQixFQUFFckIsZ0JBQWdCLGlCQUFpQixFQUFFVSxZQUFZLEVBQUUsQ0FBQztRQUVyRixPQUFPWDtJQUNUO0lBRUEsT0FBT3VCLE9BQU8sWUFBWTtBQUM1QiJ9