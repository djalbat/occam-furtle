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
const _nominal = require("../utilities/nominal");
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
        value = (0, _nominal.valueFromNodesAndNominalValue)(nodes, nominalValue);
        const valueString = value.getString();
        context.debug(`...evaluated the '${nodesQueryString}' nodes query as '${valueString}'.`);
        return value;
    }
    static name = "NodesQuery";
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L25vZGVzUXVlcnkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwib2NjYW0tbGFuZ3VhZ2VzXCI7XG5cbmltcG9ydCBFeGNlcHRpb24gZnJvbSBcIi4uL2V4Y2VwdGlvblwiO1xuXG5pbXBvcnQgeyBkZWZpbmUgfSBmcm9tIFwiLi4vZWxlbWVudHNcIjtcbmltcG9ydCB7IE5PTUlOQUxfVkFMVUVfVFlQRSB9IGZyb20gXCIuLi90eXBlc1wiO1xuaW1wb3J0IHsgdmFsdWVGcm9tTm9kZXNBbmROb21pbmFsVmFsdWUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL25vbWluYWxcIjtcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lKGNsYXNzIE5vZGVzUXVlcnkgZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgc3RyaW5nLCBub2RlLCBicmVha1BvaW50LCB2YXJpYWJsZSwgcXVlcnkpIHtcbiAgICBzdXBlcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGJyZWFrUG9pbnQpO1xuXG4gICAgdGhpcy52YXJpYWJsZSA9IHZhcmlhYmxlO1xuICAgIHRoaXMucXVlcnkgPSBxdWVyeTtcbiAgfVxuXG4gIGdldFZhcmlhYmxlKCkge1xuICAgIHJldHVybiB0aGlzLnZhcmlhYmxlO1xuICB9XG5cbiAgZ2V0UXVlcnkoKSB7XG4gICAgcmV0dXJuIHRoaXMucXVlcnk7XG4gIH1cblxuICBldmFsdWF0ZShjb250ZXh0KSB7XG4gICAgbGV0IHZhbHVlO1xuXG4gICAgY29uc3Qgbm9kZXNRdWVyeVN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYEV2YWx1YXRpbmcgdGhlICcke25vZGVzUXVlcnlTdHJpbmd9JyBub2RlcyBxdWVyeS4uLmApO1xuXG4gICAgaWYgKHRoaXMucXVlcnkgPT09IG51bGwpIHtcbiAgICAgIGNvbnN0IG1lc3NhZ2UgPSBgQ2Fubm90IGV2YWx1YXRlIHRoZSAnJHtub2Rlc1F1ZXJ5U3RyaW5nfScgbm9kZXMgcXVlcnkgYmVjYXVzZSBpdHMgZXhwcmVzc2lvbiBpcyBtYWxmb3JtZWQuYCxcbiAgICAgICAgICAgIGV4Y2VwdGlvbiA9IEV4Y2VwdGlvbi5mcm9tTWVzc2FnZShtZXNzYWdlKTtcblxuICAgICAgdGhyb3cgZXhjZXB0aW9uO1xuICAgIH1cblxuICAgIHZhbHVlID0gdGhpcy52YXJpYWJsZS5ldmFsdWF0ZShjb250ZXh0KTtcblxuICAgIGNvbnN0IHZhbHVlVHlwZSA9IHZhbHVlLmdldFR5cGUoKTtcblxuICAgIGlmICh2YWx1ZVR5cGUgIT09IE5PTUlOQUxfVkFMVUVfVFlQRSkge1xuICAgICAgY29uc3QgdmFsdWVTdHJpbmcgPSB2YWx1ZS5nZXRTdHJpbmcoKSxcbiAgICAgICAgICAgIG1lc3NhZ2UgPSBgVGhlICcke3ZhbHVlU3RyaW5nfScgdmFsdWUncyAnJHt2YWx1ZVR5cGV9JyB0eXBlIHNob3VsZCBiZSAnJHtOT01JTkFMX1ZBTFVFX1RZUEV9Jy5gLFxuICAgICAgICAgICAgZXhjZXB0aW9uID0gRXhjZXB0aW9uLmZyb21NZXNzYWdlKG1lc3NhZ2UpO1xuXG4gICAgICB0aHJvdyBleGNlcHRpb247XG4gICAgfVxuXG4gICAgbGV0IG5vZGU7XG5cbiAgICBjb25zdCBwcmltaXRpdmVWYWx1ZSA9IHZhbHVlLmdldFByaW1pdGl2ZVZhbHVlKCksXG4gICAgICAgICAgbm9taW5hbFZhbHVlID0gcHJpbWl0aXZlVmFsdWU7ICAvLy9cblxuICAgIG5vZGUgPSBub21pbmFsVmFsdWUuZ2V0Tm9kZSgpO1xuXG4gICAgaWYgKG5vZGUgPT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHZhbHVlU3RyaW5nID0gdmFsdWUuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgICBtZXNzYWdlID0gYFRoZSAnJHt2YWx1ZVN0cmluZ30nIHZhbHVlJ3Mgbm9kZSBpcyBudWxsLmAsXG4gICAgICAgICAgICBleGNlcHRpb24gPSBFeGNlcHRpb24uZnJvbU1lc3NhZ2UobWVzc2FnZSk7XG5cbiAgICAgIHRocm93IGV4Y2VwdGlvbjtcbiAgICB9XG5cbiAgICBjb25zdCBub2RlcyA9IHRoaXMucXVlcnkuZXhlY3V0ZShub2RlKTtcblxuICAgIHZhbHVlID0gdmFsdWVGcm9tTm9kZXNBbmROb21pbmFsVmFsdWUobm9kZXMsIG5vbWluYWxWYWx1ZSk7XG5cbiAgICBjb25zdCB2YWx1ZVN0cmluZyA9IHZhbHVlLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC5kZWJ1ZyhgLi4uZXZhbHVhdGVkIHRoZSAnJHtub2Rlc1F1ZXJ5U3RyaW5nfScgbm9kZXMgcXVlcnkgYXMgJyR7dmFsdWVTdHJpbmd9Jy5gKTtcblxuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJOb2Rlc1F1ZXJ5XCI7XG59KTtcbiJdLCJuYW1lcyI6WyJkZWZpbmUiLCJOb2Rlc1F1ZXJ5IiwiRWxlbWVudCIsImNvbnRleHQiLCJzdHJpbmciLCJub2RlIiwiYnJlYWtQb2ludCIsInZhcmlhYmxlIiwicXVlcnkiLCJnZXRWYXJpYWJsZSIsImdldFF1ZXJ5IiwiZXZhbHVhdGUiLCJ2YWx1ZSIsIm5vZGVzUXVlcnlTdHJpbmciLCJnZXRTdHJpbmciLCJ0cmFjZSIsIm1lc3NhZ2UiLCJleGNlcHRpb24iLCJFeGNlcHRpb24iLCJmcm9tTWVzc2FnZSIsInZhbHVlVHlwZSIsImdldFR5cGUiLCJOT01JTkFMX1ZBTFVFX1RZUEUiLCJ2YWx1ZVN0cmluZyIsInByaW1pdGl2ZVZhbHVlIiwiZ2V0UHJpbWl0aXZlVmFsdWUiLCJub21pbmFsVmFsdWUiLCJnZXROb2RlIiwibm9kZXMiLCJleGVjdXRlIiwidmFsdWVGcm9tTm9kZXNBbmROb21pbmFsVmFsdWUiLCJkZWJ1ZyIsIm5hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVVBOzs7ZUFBQTs7O2dDQVJ3QjtrRUFFRjswQkFFQzt1QkFDWTt5QkFDVzs7Ozs7O01BRTlDLFdBQWVBLElBQUFBLGdCQUFNLEVBQUMsTUFBTUMsbUJBQW1CQyx1QkFBTztJQUNwRCxZQUFZQyxPQUFPLEVBQUVDLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxVQUFVLEVBQUVDLFFBQVEsRUFBRUMsS0FBSyxDQUFFO1FBQzlELEtBQUssQ0FBQ0wsU0FBU0MsUUFBUUMsTUFBTUM7UUFFN0IsSUFBSSxDQUFDQyxRQUFRLEdBQUdBO1FBQ2hCLElBQUksQ0FBQ0MsS0FBSyxHQUFHQTtJQUNmO0lBRUFDLGNBQWM7UUFDWixPQUFPLElBQUksQ0FBQ0YsUUFBUTtJQUN0QjtJQUVBRyxXQUFXO1FBQ1QsT0FBTyxJQUFJLENBQUNGLEtBQUs7SUFDbkI7SUFFQUcsU0FBU1IsT0FBTyxFQUFFO1FBQ2hCLElBQUlTO1FBRUosTUFBTUMsbUJBQW1CLElBQUksQ0FBQ0MsU0FBUyxJQUFLLEdBQUc7UUFFL0NYLFFBQVFZLEtBQUssQ0FBQyxDQUFDLGdCQUFnQixFQUFFRixpQkFBaUIsZ0JBQWdCLENBQUM7UUFFbkUsSUFBSSxJQUFJLENBQUNMLEtBQUssS0FBSyxNQUFNO1lBQ3ZCLE1BQU1RLFVBQVUsQ0FBQyxxQkFBcUIsRUFBRUgsaUJBQWlCLGtEQUFrRCxDQUFDLEVBQ3RHSSxZQUFZQyxrQkFBUyxDQUFDQyxXQUFXLENBQUNIO1lBRXhDLE1BQU1DO1FBQ1I7UUFFQUwsUUFBUSxJQUFJLENBQUNMLFFBQVEsQ0FBQ0ksUUFBUSxDQUFDUjtRQUUvQixNQUFNaUIsWUFBWVIsTUFBTVMsT0FBTztRQUUvQixJQUFJRCxjQUFjRSx5QkFBa0IsRUFBRTtZQUNwQyxNQUFNQyxjQUFjWCxNQUFNRSxTQUFTLElBQzdCRSxVQUFVLENBQUMsS0FBSyxFQUFFTyxZQUFZLFdBQVcsRUFBRUgsVUFBVSxrQkFBa0IsRUFBRUUseUJBQWtCLENBQUMsRUFBRSxDQUFDLEVBQy9GTCxZQUFZQyxrQkFBUyxDQUFDQyxXQUFXLENBQUNIO1lBRXhDLE1BQU1DO1FBQ1I7UUFFQSxJQUFJWjtRQUVKLE1BQU1tQixpQkFBaUJaLE1BQU1hLGlCQUFpQixJQUN4Q0MsZUFBZUYsZ0JBQWlCLEdBQUc7UUFFekNuQixPQUFPcUIsYUFBYUMsT0FBTztRQUUzQixJQUFJdEIsU0FBUyxNQUFNO1lBQ2pCLE1BQU1rQixjQUFjWCxNQUFNRSxTQUFTLElBQzdCRSxVQUFVLENBQUMsS0FBSyxFQUFFTyxZQUFZLHVCQUF1QixDQUFDLEVBQ3RETixZQUFZQyxrQkFBUyxDQUFDQyxXQUFXLENBQUNIO1lBRXhDLE1BQU1DO1FBQ1I7UUFFQSxNQUFNVyxRQUFRLElBQUksQ0FBQ3BCLEtBQUssQ0FBQ3FCLE9BQU8sQ0FBQ3hCO1FBRWpDTyxRQUFRa0IsSUFBQUEsc0NBQTZCLEVBQUNGLE9BQU9GO1FBRTdDLE1BQU1ILGNBQWNYLE1BQU1FLFNBQVM7UUFFbkNYLFFBQVE0QixLQUFLLENBQUMsQ0FBQyxrQkFBa0IsRUFBRWxCLGlCQUFpQixrQkFBa0IsRUFBRVUsWUFBWSxFQUFFLENBQUM7UUFFdkYsT0FBT1g7SUFDVDtJQUVBLE9BQU9vQixPQUFPLGFBQWE7QUFDN0IifQ==