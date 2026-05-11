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
        let term;
        const nodeQueryString = this.getString(); ///
        context.trace(`Evaluating the '${nodeQueryString}' node query...`);
        if (this.query === null) {
            const message = `Cannot evaluate the '${nodeQueryString}' node query because its expression is malformed.`, exception = _exception.default.fromMessage(message);
            throw exception;
        }
        term = this.variable.evaluate(context);
        const termType = term.getType();
        if (termType !== _types.NOMINAL_VALUE_TYPE) {
            const termString = term.getString(), message = `The '${termString}' term's '${termType}' type should be '${_types.NOMINAL_VALUE_TYPE}'.`, exception = _exception.default.fromMessage(message);
            throw exception;
        }
        let node;
        const primitiveValue = term.getPrimitiveValue(), nominalValue = primitiveValue; ///
        node = nominalValue.getNode();
        if (node === null) {
            const termString = term.getString(), message = `The '${termString}' term's node is null.`, exception = _exception.default.fromMessage(message);
            throw exception;
        }
        const nodes = this.query.execute(node), nodesLength = nodes.length;
        if (nodesLength !== 1) {
            const message = `The length of the returned nodes is ${nodesLength} when it should be 1.`, exception = _exception.default.fromMessage(message);
            throw exception;
        }
        const firstNode = first(nodes);
        node = firstNode; ///
        term = (0, _nominal.termFromNodeAndNominalValue)(node, nominalValue);
        const termString = term.getString();
        context.debug(`...evaluated the '${nodeQueryString}' node query as '${termString}'.`);
        return term;
    }
    static name = "NodeQuery";
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L25vZGVRdWVyeS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgRWxlbWVudCB9IGZyb20gXCJvY2NhbS1sYW5ndWFnZXNcIjtcbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgRXhjZXB0aW9uIGZyb20gXCIuLi9leGNlcHRpb25cIjtcblxuaW1wb3J0IHsgZGVmaW5lIH0gZnJvbSBcIi4uL2VsZW1lbnRzXCI7XG5pbXBvcnQgeyBOT01JTkFMX1ZBTFVFX1RZUEUgfSBmcm9tIFwiLi4vdHlwZXNcIjtcbmltcG9ydCB7IHRlcm1Gcm9tTm9kZUFuZE5vbWluYWxWYWx1ZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvbm9taW5hbFwiO1xuXG5jb25zdCB7IGZpcnN0IH0gPSBhcnJheVV0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lKGNsYXNzIE5vZGVRdWVyeSBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGJyZWFrUG9pbnQsIHZhcmlhYmxlLCBxdWVyeSkge1xuICAgIHN1cGVyKGNvbnRleHQsIHN0cmluZywgbm9kZSwgYnJlYWtQb2ludCk7XG5cbiAgICB0aGlzLnZhcmlhYmxlID0gdmFyaWFibGU7XG4gICAgdGhpcy5xdWVyeSA9IHF1ZXJ5O1xuICB9XG5cbiAgZ2V0VmFyaWFibGUoKSB7XG4gICAgcmV0dXJuIHRoaXMudmFyaWFibGU7XG4gIH1cblxuICBnZXRRdWVyeSgpIHtcbiAgICByZXR1cm4gdGhpcy5xdWVyeTtcbiAgfVxuXG4gIGV2YWx1YXRlKGNvbnRleHQpIHtcbiAgICBsZXQgdGVybTtcblxuICAgIGNvbnN0IG5vZGVRdWVyeVN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYEV2YWx1YXRpbmcgdGhlICcke25vZGVRdWVyeVN0cmluZ30nIG5vZGUgcXVlcnkuLi5gKTtcblxuICAgIGlmICh0aGlzLnF1ZXJ5ID09PSBudWxsKSB7XG4gICAgICBjb25zdCBtZXNzYWdlID0gYENhbm5vdCBldmFsdWF0ZSB0aGUgJyR7bm9kZVF1ZXJ5U3RyaW5nfScgbm9kZSBxdWVyeSBiZWNhdXNlIGl0cyBleHByZXNzaW9uIGlzIG1hbGZvcm1lZC5gLFxuICAgICAgICAgICAgZXhjZXB0aW9uID0gRXhjZXB0aW9uLmZyb21NZXNzYWdlKG1lc3NhZ2UpO1xuXG4gICAgICB0aHJvdyBleGNlcHRpb247XG4gICAgfVxuXG4gICAgdGVybSA9IHRoaXMudmFyaWFibGUuZXZhbHVhdGUoY29udGV4dCk7XG5cbiAgICBjb25zdCB0ZXJtVHlwZSA9IHRlcm0uZ2V0VHlwZSgpO1xuXG4gICAgaWYgKHRlcm1UeXBlICE9PSBOT01JTkFMX1ZBTFVFX1RZUEUpIHtcbiAgICAgIGNvbnN0IHRlcm1TdHJpbmcgPSB0ZXJtLmdldFN0cmluZygpLFxuICAgICAgICAgICAgbWVzc2FnZSA9IGBUaGUgJyR7dGVybVN0cmluZ30nIHRlcm0ncyAnJHt0ZXJtVHlwZX0nIHR5cGUgc2hvdWxkIGJlICcke05PTUlOQUxfVkFMVUVfVFlQRX0nLmAsXG4gICAgICAgICAgICBleGNlcHRpb24gPSBFeGNlcHRpb24uZnJvbU1lc3NhZ2UobWVzc2FnZSk7XG5cbiAgICAgIHRocm93IGV4Y2VwdGlvbjtcbiAgICB9XG5cbiAgICBsZXQgbm9kZTtcblxuICAgIGNvbnN0IHByaW1pdGl2ZVZhbHVlID0gdGVybS5nZXRQcmltaXRpdmVWYWx1ZSgpLFxuICAgICAgICAgIG5vbWluYWxWYWx1ZSA9IHByaW1pdGl2ZVZhbHVlOyAgLy8vXG5cbiAgICBub2RlID0gbm9taW5hbFZhbHVlLmdldE5vZGUoKTtcblxuICAgIGlmIChub2RlID09PSBudWxsKSB7XG4gICAgICBjb25zdCB0ZXJtU3RyaW5nID0gdGVybS5nZXRTdHJpbmcoKSxcbiAgICAgICAgICAgIG1lc3NhZ2UgPSBgVGhlICcke3Rlcm1TdHJpbmd9JyB0ZXJtJ3Mgbm9kZSBpcyBudWxsLmAsXG4gICAgICAgICAgICBleGNlcHRpb24gPSBFeGNlcHRpb24uZnJvbU1lc3NhZ2UobWVzc2FnZSk7XG5cbiAgICAgIHRocm93IGV4Y2VwdGlvbjtcbiAgICB9XG5cbiAgICBjb25zdCBub2RlcyA9IHRoaXMucXVlcnkuZXhlY3V0ZShub2RlKSxcbiAgICAgICAgICBub2Rlc0xlbmd0aCA9IG5vZGVzLmxlbmd0aDtcblxuICAgIGlmIChub2Rlc0xlbmd0aCAhPT0gMSkge1xuICAgICAgY29uc3QgbWVzc2FnZSA9IGBUaGUgbGVuZ3RoIG9mIHRoZSByZXR1cm5lZCBub2RlcyBpcyAke25vZGVzTGVuZ3RofSB3aGVuIGl0IHNob3VsZCBiZSAxLmAsXG4gICAgICAgICAgICBleGNlcHRpb24gPSBFeGNlcHRpb24uZnJvbU1lc3NhZ2UobWVzc2FnZSk7XG5cbiAgICAgIHRocm93IGV4Y2VwdGlvbjtcbiAgICB9XG5cblxuICAgIGNvbnN0IGZpcnN0Tm9kZSA9IGZpcnN0KG5vZGVzKTtcblxuICAgIG5vZGUgPSBmaXJzdE5vZGUgLy8vXG5cbiAgICB0ZXJtID0gdGVybUZyb21Ob2RlQW5kTm9taW5hbFZhbHVlKG5vZGUsIG5vbWluYWxWYWx1ZSk7XG5cbiAgICBjb25zdCB0ZXJtU3RyaW5nID0gdGVybS5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQuZGVidWcoYC4uLmV2YWx1YXRlZCB0aGUgJyR7bm9kZVF1ZXJ5U3RyaW5nfScgbm9kZSBxdWVyeSBhcyAnJHt0ZXJtU3RyaW5nfScuYCk7XG5cbiAgICByZXR1cm4gdGVybTtcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJOb2RlUXVlcnlcIjtcbn0pO1xuIl0sIm5hbWVzIjpbImZpcnN0IiwiYXJyYXlVdGlsaXRpZXMiLCJkZWZpbmUiLCJOb2RlUXVlcnkiLCJFbGVtZW50IiwiY29udGV4dCIsInN0cmluZyIsIm5vZGUiLCJicmVha1BvaW50IiwidmFyaWFibGUiLCJxdWVyeSIsImdldFZhcmlhYmxlIiwiZ2V0UXVlcnkiLCJldmFsdWF0ZSIsInRlcm0iLCJub2RlUXVlcnlTdHJpbmciLCJnZXRTdHJpbmciLCJ0cmFjZSIsIm1lc3NhZ2UiLCJleGNlcHRpb24iLCJFeGNlcHRpb24iLCJmcm9tTWVzc2FnZSIsInRlcm1UeXBlIiwiZ2V0VHlwZSIsIk5PTUlOQUxfVkFMVUVfVFlQRSIsInRlcm1TdHJpbmciLCJwcmltaXRpdmVWYWx1ZSIsImdldFByaW1pdGl2ZVZhbHVlIiwibm9taW5hbFZhbHVlIiwiZ2V0Tm9kZSIsIm5vZGVzIiwiZXhlY3V0ZSIsIm5vZGVzTGVuZ3RoIiwibGVuZ3RoIiwiZmlyc3ROb2RlIiwidGVybUZyb21Ob2RlQW5kTm9taW5hbFZhbHVlIiwiZGVidWciLCJuYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFhQTs7O2VBQUE7OztnQ0FYd0I7MkJBQ087a0VBRVQ7MEJBRUM7dUJBQ1k7eUJBQ1M7Ozs7OztBQUU1QyxNQUFNLEVBQUVBLEtBQUssRUFBRSxHQUFHQyx5QkFBYztNQUVoQyxXQUFlQyxJQUFBQSxnQkFBTSxFQUFDLE1BQU1DLGtCQUFrQkMsdUJBQU87SUFDbkQsWUFBWUMsT0FBTyxFQUFFQyxNQUFNLEVBQUVDLElBQUksRUFBRUMsVUFBVSxFQUFFQyxRQUFRLEVBQUVDLEtBQUssQ0FBRTtRQUM5RCxLQUFLLENBQUNMLFNBQVNDLFFBQVFDLE1BQU1DO1FBRTdCLElBQUksQ0FBQ0MsUUFBUSxHQUFHQTtRQUNoQixJQUFJLENBQUNDLEtBQUssR0FBR0E7SUFDZjtJQUVBQyxjQUFjO1FBQ1osT0FBTyxJQUFJLENBQUNGLFFBQVE7SUFDdEI7SUFFQUcsV0FBVztRQUNULE9BQU8sSUFBSSxDQUFDRixLQUFLO0lBQ25CO0lBRUFHLFNBQVNSLE9BQU8sRUFBRTtRQUNoQixJQUFJUztRQUVKLE1BQU1DLGtCQUFrQixJQUFJLENBQUNDLFNBQVMsSUFBSyxHQUFHO1FBRTlDWCxRQUFRWSxLQUFLLENBQUMsQ0FBQyxnQkFBZ0IsRUFBRUYsZ0JBQWdCLGVBQWUsQ0FBQztRQUVqRSxJQUFJLElBQUksQ0FBQ0wsS0FBSyxLQUFLLE1BQU07WUFDdkIsTUFBTVEsVUFBVSxDQUFDLHFCQUFxQixFQUFFSCxnQkFBZ0IsaURBQWlELENBQUMsRUFDcEdJLFlBQVlDLGtCQUFTLENBQUNDLFdBQVcsQ0FBQ0g7WUFFeEMsTUFBTUM7UUFDUjtRQUVBTCxPQUFPLElBQUksQ0FBQ0wsUUFBUSxDQUFDSSxRQUFRLENBQUNSO1FBRTlCLE1BQU1pQixXQUFXUixLQUFLUyxPQUFPO1FBRTdCLElBQUlELGFBQWFFLHlCQUFrQixFQUFFO1lBQ25DLE1BQU1DLGFBQWFYLEtBQUtFLFNBQVMsSUFDM0JFLFVBQVUsQ0FBQyxLQUFLLEVBQUVPLFdBQVcsVUFBVSxFQUFFSCxTQUFTLGtCQUFrQixFQUFFRSx5QkFBa0IsQ0FBQyxFQUFFLENBQUMsRUFDNUZMLFlBQVlDLGtCQUFTLENBQUNDLFdBQVcsQ0FBQ0g7WUFFeEMsTUFBTUM7UUFDUjtRQUVBLElBQUlaO1FBRUosTUFBTW1CLGlCQUFpQlosS0FBS2EsaUJBQWlCLElBQ3ZDQyxlQUFlRixnQkFBaUIsR0FBRztRQUV6Q25CLE9BQU9xQixhQUFhQyxPQUFPO1FBRTNCLElBQUl0QixTQUFTLE1BQU07WUFDakIsTUFBTWtCLGFBQWFYLEtBQUtFLFNBQVMsSUFDM0JFLFVBQVUsQ0FBQyxLQUFLLEVBQUVPLFdBQVcsc0JBQXNCLENBQUMsRUFDcEROLFlBQVlDLGtCQUFTLENBQUNDLFdBQVcsQ0FBQ0g7WUFFeEMsTUFBTUM7UUFDUjtRQUVBLE1BQU1XLFFBQVEsSUFBSSxDQUFDcEIsS0FBSyxDQUFDcUIsT0FBTyxDQUFDeEIsT0FDM0J5QixjQUFjRixNQUFNRyxNQUFNO1FBRWhDLElBQUlELGdCQUFnQixHQUFHO1lBQ3JCLE1BQU1kLFVBQVUsQ0FBQyxvQ0FBb0MsRUFBRWMsWUFBWSxxQkFBcUIsQ0FBQyxFQUNuRmIsWUFBWUMsa0JBQVMsQ0FBQ0MsV0FBVyxDQUFDSDtZQUV4QyxNQUFNQztRQUNSO1FBR0EsTUFBTWUsWUFBWWxDLE1BQU04QjtRQUV4QnZCLE9BQU8yQixXQUFVLEdBQUc7UUFFcEJwQixPQUFPcUIsSUFBQUEsb0NBQTJCLEVBQUM1QixNQUFNcUI7UUFFekMsTUFBTUgsYUFBYVgsS0FBS0UsU0FBUztRQUVqQ1gsUUFBUStCLEtBQUssQ0FBQyxDQUFDLGtCQUFrQixFQUFFckIsZ0JBQWdCLGlCQUFpQixFQUFFVSxXQUFXLEVBQUUsQ0FBQztRQUVwRixPQUFPWDtJQUNUO0lBRUEsT0FBT3VCLE9BQU8sWUFBWTtBQUM1QiJ9