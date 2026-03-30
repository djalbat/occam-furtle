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
    constructor(context, string, node, lineIndex, variable, anonymousProcedure){
        super(context, string, node, lineIndex);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L2V2ZXJ5LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBFbGVtZW50LCBhc3luY2hyb25vdXNVdGlsaXRpZXMgfSBmcm9tIFwib2NjYW0tbGFuZ3VhZ2VzXCI7XG5cbmltcG9ydCBlbGVtZW50cyBmcm9tIFwiLi4vZWxlbWVudHNcIjtcbmltcG9ydCBFeGNlcHRpb24gZnJvbSBcIi4uL2V4Y2VwdGlvblwiO1xuXG5pbXBvcnQgeyBkZWZpbmUgfSBmcm9tIFwiLi4vZWxlbWVudHNcIjtcbmltcG9ydCB7IE5PREVTX1RZUEUsIEJPT0xFQU5fVFlQRSB9IGZyb20gXCIuLi90eXBlc1wiO1xuaW1wb3J0IHsgdGVybUZyb21Ob2RlLCB0ZXJtRnJvbUJvb2xlYW4gfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3Rlcm1cIjtcblxuY29uc3QgeyBhc3luY0V2ZXJ5IH0gPSBhc3luY2hyb25vdXNVdGlsaXRpZXM7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZShjbGFzcyBFdmVyeSBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGxpbmVJbmRleCwgdmFyaWFibGUsIGFub255bW91c1Byb2NlZHVyZSkge1xuICAgIHN1cGVyKGNvbnRleHQsIHN0cmluZywgbm9kZSwgbGluZUluZGV4KVxuXG4gICAgdGhpcy5zdHJpbmcgPSBzdHJpbmc7XG4gICAgdGhpcy52YXJpYWJsZSA9IHZhcmlhYmxlO1xuICAgIHRoaXMuYW5vbnltb3VzUHJvY2VkdXJlID0gYW5vbnltb3VzUHJvY2VkdXJlO1xuICB9XG5cbiAgZ2V0VmFyaWFibGUoKSB7XG4gICAgcmV0dXJuIHRoaXMudmFyaWFibGU7XG4gIH1cblxuICBnZXRBbm9ueW1vdXNQcm9jZWR1cmUoKSB7XG4gICAgcmV0dXJuIHRoaXMuYW5vbnltb3VzUHJvY2VkdXJlO1xuICB9XG5cbiAgYXN5bmMgZXZhbHVhdGUoY29udGV4dCkge1xuICAgIGxldCB0ZXJtO1xuXG4gICAgYXdhaXQgdGhpcy5icmVhayhjb250ZXh0KTtcblxuICAgIGNvbnN0IGV2ZXJ5U3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYEV2YWx1YXRpbmcgdGhlICcke2V2ZXJ5U3RyaW5nfScgZXZlcnkuLi5gKTtcblxuICAgIHRlcm0gPSB0aGlzLnZhcmlhYmxlLmV2YWx1YXRlKGNvbnRleHQpO1xuXG4gICAgY29uc3QgdGVybVR5cGUgPSB0ZXJtLmdldFR5cGUoKTtcblxuICAgIGlmICh0ZXJtVHlwZSAhPT0gTk9ERVNfVFlQRSkge1xuICAgICAgY29uc3QgdGVybVN0cmluZyA9IHRlcm0uZ2V0U3RyaW5nKCksXG4gICAgICAgICAgICBtZXNzYWdlID0gYFRoZSAnJHt0ZXJtU3RyaW5nfScgdGVybSdzICcke3Rlcm1UeXBlfScgdHlwZSBzaG91bGQgYmUgJyR7Tk9ERVNfVFlQRX0nLmAsXG4gICAgICAgICAgICBleGNlcHRpb24gPSBFeGNlcHRpb24uZnJvbU1lc3NhZ2UobWVzc2FnZSk7XG5cbiAgICAgIHRocm93IGV4Y2VwdGlvbjtcbiAgICB9XG5cbiAgICBjb25zdCBub2RlcyA9IHRlcm0uZ2V0Tm9kZXMoKSxcbiAgICAgICAgICBib29sZWFuID0gYXdhaXQgYXN5bmNFdmVyeShub2RlcywgYXN5bmMgKG5vZGUpID0+IHtcbiAgICAgICAgICAgIGxldCB0ZXJtO1xuXG4gICAgICAgICAgICBjb25zdCB7IFRlcm1zIH0gPSBlbGVtZW50cztcblxuICAgICAgICAgICAgdGVybSA9IHRlcm1Gcm9tTm9kZShub2RlLCBjb250ZXh0KTtcblxuICAgICAgICAgICAgY29uc3QgdGVybXMgPSBUZXJtcy5mcm9tVGVybSh0ZXJtLCBjb250ZXh0KTtcblxuICAgICAgICAgICAgdGVybSA9IGF3YWl0IHRoaXMuYW5vbnltb3VzUHJvY2VkdXJlLmNhbGwodGVybXMsIGNvbnRleHQpO1xuXG4gICAgICAgICAgICBjb25zdCB0ZXJtVHlwZSA9IHRlcm0uZ2V0VHlwZSgpO1xuXG4gICAgICAgICAgICBpZiAodGVybVR5cGUgIT09IEJPT0xFQU5fVFlQRSkge1xuICAgICAgICAgICAgICBjb25zdCB0ZXJtU3RyaW5nID0gdGVybS5nZXRTdHJpbmcoKSxcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZSA9IGBUaGUgJyR7dGVybVN0cmluZ30nIHRlcm0ncyB0eXBlIGlzICcke3Rlcm1UeXBlfScgd2hlbiBpdCBzaG91bGQgYmUgb2YgdHlwZSAnJHtCT09MRUFOX1RZUEV9Jy5gLFxuICAgICAgICAgICAgICAgICAgICBleGNlcHRpb24gPSBFeGNlcHRpb24uZnJvbU1lc3NhZ2UobWVzc2FnZSk7XG5cbiAgICAgICAgICAgICAgdGhyb3cgZXhjZXB0aW9uO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCBib29sZWFuID0gdGVybS5nZXRCb29sZWFuKCk7XG5cbiAgICAgICAgICAgIHJldHVybiBib29sZWFuO1xuICAgICAgICAgIH0pO1xuXG4gICAgdGVybSA9IHRlcm1Gcm9tQm9vbGVhbihib29sZWFuLCBjb250ZXh0KTtcblxuICAgIGNvbnN0IHRlcm1TdHJpbmcgPSB0ZXJtLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgLi4uZXZhbHVhdGVkIHRoZSAnJHtldmVyeVN0cmluZ30nIGV2ZXJ5IGFzICcke3Rlcm1TdHJpbmd9Jy5gKTtcblxuICAgIHJldHVybiB0ZXJtO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIkV2ZXJ5XCI7XG59KTtcbiJdLCJuYW1lcyI6WyJhc3luY0V2ZXJ5IiwiYXN5bmNocm9ub3VzVXRpbGl0aWVzIiwiZGVmaW5lIiwiRXZlcnkiLCJFbGVtZW50IiwiY29udGV4dCIsInN0cmluZyIsIm5vZGUiLCJsaW5lSW5kZXgiLCJ2YXJpYWJsZSIsImFub255bW91c1Byb2NlZHVyZSIsImdldFZhcmlhYmxlIiwiZ2V0QW5vbnltb3VzUHJvY2VkdXJlIiwiZXZhbHVhdGUiLCJ0ZXJtIiwiYnJlYWsiLCJldmVyeVN0cmluZyIsImdldFN0cmluZyIsInRyYWNlIiwidGVybVR5cGUiLCJnZXRUeXBlIiwiTk9ERVNfVFlQRSIsInRlcm1TdHJpbmciLCJtZXNzYWdlIiwiZXhjZXB0aW9uIiwiRXhjZXB0aW9uIiwiZnJvbU1lc3NhZ2UiLCJub2RlcyIsImdldE5vZGVzIiwiYm9vbGVhbiIsIlRlcm1zIiwiZWxlbWVudHMiLCJ0ZXJtRnJvbU5vZGUiLCJ0ZXJtcyIsImZyb21UZXJtIiwiY2FsbCIsIkJPT0xFQU5fVFlQRSIsImdldEJvb2xlYW4iLCJ0ZXJtRnJvbUJvb2xlYW4iLCJuYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFhQTs7O2VBQUE7OztnQ0FYK0M7a0VBRTFCO2tFQUNDO3VCQUdtQjtzQkFDSzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFOUMsTUFBTSxFQUFFQSxVQUFVLEVBQUUsR0FBR0MscUNBQXFCO01BRTVDLFdBQWVDLElBQUFBLGdCQUFNLEVBQUMsTUFBTUMsY0FBY0MsdUJBQU87SUFDL0MsWUFBWUMsT0FBTyxFQUFFQyxNQUFNLEVBQUVDLElBQUksRUFBRUMsU0FBUyxFQUFFQyxRQUFRLEVBQUVDLGtCQUFrQixDQUFFO1FBQzFFLEtBQUssQ0FBQ0wsU0FBU0MsUUFBUUMsTUFBTUM7UUFFN0IsSUFBSSxDQUFDRixNQUFNLEdBQUdBO1FBQ2QsSUFBSSxDQUFDRyxRQUFRLEdBQUdBO1FBQ2hCLElBQUksQ0FBQ0Msa0JBQWtCLEdBQUdBO0lBQzVCO0lBRUFDLGNBQWM7UUFDWixPQUFPLElBQUksQ0FBQ0YsUUFBUTtJQUN0QjtJQUVBRyx3QkFBd0I7UUFDdEIsT0FBTyxJQUFJLENBQUNGLGtCQUFrQjtJQUNoQztJQUVBLE1BQU1HLFNBQVNSLE9BQU8sRUFBRTtRQUN0QixJQUFJUztRQUVKLE1BQU0sSUFBSSxDQUFDQyxLQUFLLENBQUNWO1FBRWpCLE1BQU1XLGNBQWMsSUFBSSxDQUFDQyxTQUFTO1FBRWxDWixRQUFRYSxLQUFLLENBQUMsQ0FBQyxnQkFBZ0IsRUFBRUYsWUFBWSxVQUFVLENBQUM7UUFFeERGLE9BQU8sSUFBSSxDQUFDTCxRQUFRLENBQUNJLFFBQVEsQ0FBQ1I7UUFFOUIsTUFBTWMsV0FBV0wsS0FBS00sT0FBTztRQUU3QixJQUFJRCxhQUFhRSxpQkFBVSxFQUFFO1lBQzNCLE1BQU1DLGFBQWFSLEtBQUtHLFNBQVMsSUFDM0JNLFVBQVUsQ0FBQyxLQUFLLEVBQUVELFdBQVcsVUFBVSxFQUFFSCxTQUFTLGtCQUFrQixFQUFFRSxpQkFBVSxDQUFDLEVBQUUsQ0FBQyxFQUNwRkcsWUFBWUMsa0JBQVMsQ0FBQ0MsV0FBVyxDQUFDSDtZQUV4QyxNQUFNQztRQUNSO1FBRUEsTUFBTUcsUUFBUWIsS0FBS2MsUUFBUSxJQUNyQkMsVUFBVSxNQUFNN0IsV0FBVzJCLE9BQU8sT0FBT3BCO1lBQ3ZDLElBQUlPO1lBRUosTUFBTSxFQUFFZ0IsS0FBSyxFQUFFLEdBQUdDLGlCQUFRO1lBRTFCakIsT0FBT2tCLElBQUFBLGtCQUFZLEVBQUN6QixNQUFNRjtZQUUxQixNQUFNNEIsUUFBUUgsTUFBTUksUUFBUSxDQUFDcEIsTUFBTVQ7WUFFbkNTLE9BQU8sTUFBTSxJQUFJLENBQUNKLGtCQUFrQixDQUFDeUIsSUFBSSxDQUFDRixPQUFPNUI7WUFFakQsTUFBTWMsV0FBV0wsS0FBS00sT0FBTztZQUU3QixJQUFJRCxhQUFhaUIsbUJBQVksRUFBRTtnQkFDN0IsTUFBTWQsYUFBYVIsS0FBS0csU0FBUyxJQUMzQk0sVUFBVSxDQUFDLEtBQUssRUFBRUQsV0FBVyxrQkFBa0IsRUFBRUgsU0FBUyw2QkFBNkIsRUFBRWlCLG1CQUFZLENBQUMsRUFBRSxDQUFDLEVBQ3pHWixZQUFZQyxrQkFBUyxDQUFDQyxXQUFXLENBQUNIO2dCQUV4QyxNQUFNQztZQUNSO1lBRUEsTUFBTUssVUFBVWYsS0FBS3VCLFVBQVU7WUFFL0IsT0FBT1I7UUFDVDtRQUVOZixPQUFPd0IsSUFBQUEscUJBQWUsRUFBQ1QsU0FBU3hCO1FBRWhDLE1BQU1pQixhQUFhUixLQUFLRyxTQUFTO1FBRWpDWixRQUFRYSxLQUFLLENBQUMsQ0FBQyxrQkFBa0IsRUFBRUYsWUFBWSxZQUFZLEVBQUVNLFdBQVcsRUFBRSxDQUFDO1FBRTNFLE9BQU9SO0lBQ1Q7SUFFQSxPQUFPeUIsT0FBTyxRQUFRO0FBQ3hCIn0=