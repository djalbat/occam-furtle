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
const _elements = /*#__PURE__*/ _interop_require_wildcard(require("../elements"));
const _exception = /*#__PURE__*/ _interop_require_default(require("../exception"));
const _types = require("../types");
const _term = require("../utilities/term");
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
const { asyncEvery } = _occamlanguages.asynchronousUtilities;
const _default = (0, _elements.define)(class Every extends _occamlanguages.Element {
    constructor(context, string, node, variable, anonymousProcedure){
        super(context, string, node);
        this.string = string;
        this.variable = variable;
        this.anonymousProcedure = anonymousProcedure;
    }
    getVariable() {
        return this.variable;
    }
    getAnonymousProcedure() {
        return this.anonymousProcedure;
    }
    async evaluate(context) {
        let term;
        await this.break(context);
        const everyString = this.getString();
        context.trace(`Evaluating the '${everyString}' every...`);
        term = this.variable.evaluate(context);
        const termType = term.getType();
        if (termType !== _types.NODES_TYPE) {
            const termString = term.getString(), message = `The '${termString}' term's '${termType}' type should be '${_types.NODES_TYPE}'.`, exception = _exception.default.fromMessage(message);
            throw exception;
        }
        const nodes = term.getNodes(), boolean = await asyncEvery(nodes, async (node)=>{
            let term;
            const { Terms } = _elements.default;
            term = (0, _term.termFromNode)(node, context);
            const terms = Terms.fromTerm(term, context);
            term = await this.anonymousProcedure.call(terms, context);
            const termType = term.getType();
            if (termType !== _types.BOOLEAN_TYPE) {
                const termString = term.getString(), message = `The '${termString}' term's type is '${termType}' when it should be of type '${_types.BOOLEAN_TYPE}'.`, exception = _exception.default.fromMessage(message);
                throw exception;
            }
            const boolean = term.getBoolean();
            return boolean;
        });
        term = (0, _term.termFromBoolean)(boolean, context);
        const termString = term.getString();
        context.trace(`...evaluated the '${everyString}' every as '${termString}'.`);
        return term;
    }
    static name = "Every";
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L2V2ZXJ5LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBFbGVtZW50LCBhc3luY2hyb25vdXNVdGlsaXRpZXMgfSBmcm9tIFwib2NjYW0tbGFuZ3VhZ2VzXCI7XG5cbmltcG9ydCBlbGVtZW50cyBmcm9tIFwiLi4vZWxlbWVudHNcIjtcbmltcG9ydCBFeGNlcHRpb24gZnJvbSBcIi4uL2V4Y2VwdGlvblwiO1xuXG5pbXBvcnQgeyBkZWZpbmUgfSBmcm9tIFwiLi4vZWxlbWVudHNcIjtcbmltcG9ydCB7IE5PREVTX1RZUEUsIEJPT0xFQU5fVFlQRSB9IGZyb20gXCIuLi90eXBlc1wiO1xuaW1wb3J0IHsgdGVybUZyb21Ob2RlLCB0ZXJtRnJvbUJvb2xlYW4gfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3Rlcm1cIjtcblxuY29uc3QgeyBhc3luY0V2ZXJ5IH0gPSBhc3luY2hyb25vdXNVdGlsaXRpZXM7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZShjbGFzcyBFdmVyeSBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIHZhcmlhYmxlLCBhbm9ueW1vdXNQcm9jZWR1cmUpIHtcbiAgICBzdXBlcihjb250ZXh0LCBzdHJpbmcsIG5vZGUpXG5cbiAgICB0aGlzLnN0cmluZyA9IHN0cmluZztcbiAgICB0aGlzLnZhcmlhYmxlID0gdmFyaWFibGU7XG4gICAgdGhpcy5hbm9ueW1vdXNQcm9jZWR1cmUgPSBhbm9ueW1vdXNQcm9jZWR1cmU7XG4gIH1cblxuICBnZXRWYXJpYWJsZSgpIHtcbiAgICByZXR1cm4gdGhpcy52YXJpYWJsZTtcbiAgfVxuXG4gIGdldEFub255bW91c1Byb2NlZHVyZSgpIHtcbiAgICByZXR1cm4gdGhpcy5hbm9ueW1vdXNQcm9jZWR1cmU7XG4gIH1cblxuICBhc3luYyBldmFsdWF0ZShjb250ZXh0KSB7XG4gICAgbGV0IHRlcm07XG5cbiAgICBhd2FpdCB0aGlzLmJyZWFrKGNvbnRleHQpO1xuXG4gICAgY29uc3QgZXZlcnlTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgRXZhbHVhdGluZyB0aGUgJyR7ZXZlcnlTdHJpbmd9JyBldmVyeS4uLmApO1xuXG4gICAgdGVybSA9IHRoaXMudmFyaWFibGUuZXZhbHVhdGUoY29udGV4dCk7XG5cbiAgICBjb25zdCB0ZXJtVHlwZSA9IHRlcm0uZ2V0VHlwZSgpO1xuXG4gICAgaWYgKHRlcm1UeXBlICE9PSBOT0RFU19UWVBFKSB7XG4gICAgICBjb25zdCB0ZXJtU3RyaW5nID0gdGVybS5nZXRTdHJpbmcoKSxcbiAgICAgICAgICAgIG1lc3NhZ2UgPSBgVGhlICcke3Rlcm1TdHJpbmd9JyB0ZXJtJ3MgJyR7dGVybVR5cGV9JyB0eXBlIHNob3VsZCBiZSAnJHtOT0RFU19UWVBFfScuYCxcbiAgICAgICAgICAgIGV4Y2VwdGlvbiA9IEV4Y2VwdGlvbi5mcm9tTWVzc2FnZShtZXNzYWdlKTtcblxuICAgICAgdGhyb3cgZXhjZXB0aW9uO1xuICAgIH1cblxuICAgIGNvbnN0IG5vZGVzID0gdGVybS5nZXROb2RlcygpLFxuICAgICAgICAgIGJvb2xlYW4gPSBhd2FpdCBhc3luY0V2ZXJ5KG5vZGVzLCBhc3luYyAobm9kZSkgPT4ge1xuICAgICAgICAgICAgbGV0IHRlcm07XG5cbiAgICAgICAgICAgIGNvbnN0IHsgVGVybXMgfSA9IGVsZW1lbnRzO1xuXG4gICAgICAgICAgICB0ZXJtID0gdGVybUZyb21Ob2RlKG5vZGUsIGNvbnRleHQpO1xuXG4gICAgICAgICAgICBjb25zdCB0ZXJtcyA9IFRlcm1zLmZyb21UZXJtKHRlcm0sIGNvbnRleHQpO1xuXG4gICAgICAgICAgICB0ZXJtID0gYXdhaXQgdGhpcy5hbm9ueW1vdXNQcm9jZWR1cmUuY2FsbCh0ZXJtcywgY29udGV4dCk7XG5cbiAgICAgICAgICAgIGNvbnN0IHRlcm1UeXBlID0gdGVybS5nZXRUeXBlKCk7XG5cbiAgICAgICAgICAgIGlmICh0ZXJtVHlwZSAhPT0gQk9PTEVBTl9UWVBFKSB7XG4gICAgICAgICAgICAgIGNvbnN0IHRlcm1TdHJpbmcgPSB0ZXJtLmdldFN0cmluZygpLFxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlID0gYFRoZSAnJHt0ZXJtU3RyaW5nfScgdGVybSdzIHR5cGUgaXMgJyR7dGVybVR5cGV9JyB3aGVuIGl0IHNob3VsZCBiZSBvZiB0eXBlICcke0JPT0xFQU5fVFlQRX0nLmAsXG4gICAgICAgICAgICAgICAgICAgIGV4Y2VwdGlvbiA9IEV4Y2VwdGlvbi5mcm9tTWVzc2FnZShtZXNzYWdlKTtcblxuICAgICAgICAgICAgICB0aHJvdyBleGNlcHRpb247XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IGJvb2xlYW4gPSB0ZXJtLmdldEJvb2xlYW4oKTtcblxuICAgICAgICAgICAgcmV0dXJuIGJvb2xlYW47XG4gICAgICAgICAgfSk7XG5cbiAgICB0ZXJtID0gdGVybUZyb21Cb29sZWFuKGJvb2xlYW4sIGNvbnRleHQpO1xuXG4gICAgY29uc3QgdGVybVN0cmluZyA9IHRlcm0uZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGAuLi5ldmFsdWF0ZWQgdGhlICcke2V2ZXJ5U3RyaW5nfScgZXZlcnkgYXMgJyR7dGVybVN0cmluZ30nLmApO1xuXG4gICAgcmV0dXJuIHRlcm07XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiRXZlcnlcIjtcbn0pO1xuIl0sIm5hbWVzIjpbImFzeW5jRXZlcnkiLCJhc3luY2hyb25vdXNVdGlsaXRpZXMiLCJkZWZpbmUiLCJFdmVyeSIsIkVsZW1lbnQiLCJjb250ZXh0Iiwic3RyaW5nIiwibm9kZSIsInZhcmlhYmxlIiwiYW5vbnltb3VzUHJvY2VkdXJlIiwiZ2V0VmFyaWFibGUiLCJnZXRBbm9ueW1vdXNQcm9jZWR1cmUiLCJldmFsdWF0ZSIsInRlcm0iLCJicmVhayIsImV2ZXJ5U3RyaW5nIiwiZ2V0U3RyaW5nIiwidHJhY2UiLCJ0ZXJtVHlwZSIsImdldFR5cGUiLCJOT0RFU19UWVBFIiwidGVybVN0cmluZyIsIm1lc3NhZ2UiLCJleGNlcHRpb24iLCJFeGNlcHRpb24iLCJmcm9tTWVzc2FnZSIsIm5vZGVzIiwiZ2V0Tm9kZXMiLCJib29sZWFuIiwiVGVybXMiLCJlbGVtZW50cyIsInRlcm1Gcm9tTm9kZSIsInRlcm1zIiwiZnJvbVRlcm0iLCJjYWxsIiwiQk9PTEVBTl9UWVBFIiwiZ2V0Qm9vbGVhbiIsInRlcm1Gcm9tQm9vbGVhbiIsIm5hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQWFBOzs7ZUFBQTs7O2dDQVgrQztrRUFFMUI7a0VBQ0M7dUJBR21CO3NCQUNLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU5QyxNQUFNLEVBQUVBLFVBQVUsRUFBRSxHQUFHQyxxQ0FBcUI7TUFFNUMsV0FBZUMsSUFBQUEsZ0JBQU0sRUFBQyxNQUFNQyxjQUFjQyx1QkFBTztJQUMvQyxZQUFZQyxPQUFPLEVBQUVDLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxRQUFRLEVBQUVDLGtCQUFrQixDQUFFO1FBQy9ELEtBQUssQ0FBQ0osU0FBU0MsUUFBUUM7UUFFdkIsSUFBSSxDQUFDRCxNQUFNLEdBQUdBO1FBQ2QsSUFBSSxDQUFDRSxRQUFRLEdBQUdBO1FBQ2hCLElBQUksQ0FBQ0Msa0JBQWtCLEdBQUdBO0lBQzVCO0lBRUFDLGNBQWM7UUFDWixPQUFPLElBQUksQ0FBQ0YsUUFBUTtJQUN0QjtJQUVBRyx3QkFBd0I7UUFDdEIsT0FBTyxJQUFJLENBQUNGLGtCQUFrQjtJQUNoQztJQUVBLE1BQU1HLFNBQVNQLE9BQU8sRUFBRTtRQUN0QixJQUFJUTtRQUVKLE1BQU0sSUFBSSxDQUFDQyxLQUFLLENBQUNUO1FBRWpCLE1BQU1VLGNBQWMsSUFBSSxDQUFDQyxTQUFTO1FBRWxDWCxRQUFRWSxLQUFLLENBQUMsQ0FBQyxnQkFBZ0IsRUFBRUYsWUFBWSxVQUFVLENBQUM7UUFFeERGLE9BQU8sSUFBSSxDQUFDTCxRQUFRLENBQUNJLFFBQVEsQ0FBQ1A7UUFFOUIsTUFBTWEsV0FBV0wsS0FBS00sT0FBTztRQUU3QixJQUFJRCxhQUFhRSxpQkFBVSxFQUFFO1lBQzNCLE1BQU1DLGFBQWFSLEtBQUtHLFNBQVMsSUFDM0JNLFVBQVUsQ0FBQyxLQUFLLEVBQUVELFdBQVcsVUFBVSxFQUFFSCxTQUFTLGtCQUFrQixFQUFFRSxpQkFBVSxDQUFDLEVBQUUsQ0FBQyxFQUNwRkcsWUFBWUMsa0JBQVMsQ0FBQ0MsV0FBVyxDQUFDSDtZQUV4QyxNQUFNQztRQUNSO1FBRUEsTUFBTUcsUUFBUWIsS0FBS2MsUUFBUSxJQUNyQkMsVUFBVSxNQUFNNUIsV0FBVzBCLE9BQU8sT0FBT25CO1lBQ3ZDLElBQUlNO1lBRUosTUFBTSxFQUFFZ0IsS0FBSyxFQUFFLEdBQUdDLGlCQUFRO1lBRTFCakIsT0FBT2tCLElBQUFBLGtCQUFZLEVBQUN4QixNQUFNRjtZQUUxQixNQUFNMkIsUUFBUUgsTUFBTUksUUFBUSxDQUFDcEIsTUFBTVI7WUFFbkNRLE9BQU8sTUFBTSxJQUFJLENBQUNKLGtCQUFrQixDQUFDeUIsSUFBSSxDQUFDRixPQUFPM0I7WUFFakQsTUFBTWEsV0FBV0wsS0FBS00sT0FBTztZQUU3QixJQUFJRCxhQUFhaUIsbUJBQVksRUFBRTtnQkFDN0IsTUFBTWQsYUFBYVIsS0FBS0csU0FBUyxJQUMzQk0sVUFBVSxDQUFDLEtBQUssRUFBRUQsV0FBVyxrQkFBa0IsRUFBRUgsU0FBUyw2QkFBNkIsRUFBRWlCLG1CQUFZLENBQUMsRUFBRSxDQUFDLEVBQ3pHWixZQUFZQyxrQkFBUyxDQUFDQyxXQUFXLENBQUNIO2dCQUV4QyxNQUFNQztZQUNSO1lBRUEsTUFBTUssVUFBVWYsS0FBS3VCLFVBQVU7WUFFL0IsT0FBT1I7UUFDVDtRQUVOZixPQUFPd0IsSUFBQUEscUJBQWUsRUFBQ1QsU0FBU3ZCO1FBRWhDLE1BQU1nQixhQUFhUixLQUFLRyxTQUFTO1FBRWpDWCxRQUFRWSxLQUFLLENBQUMsQ0FBQyxrQkFBa0IsRUFBRUYsWUFBWSxZQUFZLEVBQUVNLFdBQVcsRUFBRSxDQUFDO1FBRTNFLE9BQU9SO0lBQ1Q7SUFFQSxPQUFPeUIsT0FBTyxRQUFRO0FBQ3hCIn0=