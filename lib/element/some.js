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
const { asyncSome } = _occamlanguages.asynchronousUtilities;
const _default = (0, _elements.define)(class Some extends _occamlanguages.Element {
    constructor(context, string, node, lineIndex, variable, anonymousProcedure){
        super(context, string, node, lineIndex);
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
        const someString = this.getString();
        context.trace(`Evaluating the '${someString}' some...`);
        term = this.variable.evaluate(context);
        const termType = term.getType();
        if (termType !== _types.NODES_TYPE) {
            const termString = term.getString(), message = `The '${termString}' term's '${termType}' type should be '${_types.NODES_TYPE}'.`, exception = _exception.default.fromMessage(message);
            throw exception;
        }
        const primitiveValue = term.getPrimitiveValue(), nodes = primitiveValue, boolean = await asyncSome(nodes, async (node)=>{
            let term;
            term = (0, _term.termFromNode)(node, context);
            const { Terms } = _elements.default, terms = Terms.fromTerm(term, context);
            term = await this.anonymousProcedure.call(terms, context);
            const termType = term.getType();
            if (termType !== _types.BOOLEAN_TYPE) {
                const termString = term.getString(), message = `The '${termString}' term's type is '${termType}' when it should be of type '${_types.BOOLEAN_TYPE}'.`, exception = _exception.default.fromMessage(message);
                throw exception;
            }
            const primitiveValue = term.getPrimitiveValue(), boolean = primitiveValue; ///
            return boolean;
        });
        term = (0, _term.termFromBoolean)(boolean, context);
        const termString = term.getString();
        context.trace(`...evaluated the '${someString}' some as '${termString}'.`);
        return term;
    }
    static name = "Some";
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3NvbWUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEVsZW1lbnQsIGFzeW5jaHJvbm91c1V0aWxpdGllcyB9IGZyb20gXCJvY2NhbS1sYW5ndWFnZXNcIjtcblxuaW1wb3J0IGVsZW1lbnRzIGZyb20gXCIuLi9lbGVtZW50c1wiO1xuaW1wb3J0IEV4Y2VwdGlvbiBmcm9tIFwiLi4vZXhjZXB0aW9uXCI7XG5cbmltcG9ydCB7IGRlZmluZSB9IGZyb20gXCIuLi9lbGVtZW50c1wiO1xuaW1wb3J0IHsgTk9ERVNfVFlQRSwgQk9PTEVBTl9UWVBFIH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5pbXBvcnQgeyB0ZXJtRnJvbU5vZGUsIHRlcm1Gcm9tQm9vbGVhbiB9IGZyb20gXCIuLi91dGlsaXRpZXMvdGVybVwiO1xuXG5jb25zdCB7IGFzeW5jU29tZSB9ID0gYXN5bmNocm9ub3VzVXRpbGl0aWVzO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmUoY2xhc3MgU29tZSBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGxpbmVJbmRleCwgdmFyaWFibGUsIGFub255bW91c1Byb2NlZHVyZSkge1xuICAgIHN1cGVyKGNvbnRleHQsIHN0cmluZywgbm9kZSwgbGluZUluZGV4KVxuXG4gICAgdGhpcy52YXJpYWJsZSA9IHZhcmlhYmxlO1xuICAgIHRoaXMuYW5vbnltb3VzUHJvY2VkdXJlID0gYW5vbnltb3VzUHJvY2VkdXJlO1xuICB9XG5cbiAgZ2V0VmFyaWFibGUoKSB7XG4gICAgcmV0dXJuIHRoaXMudmFyaWFibGU7XG4gIH1cblxuICBnZXRBbm9ueW1vdXNQcm9jZWR1cmUoKSB7XG4gICAgcmV0dXJuIHRoaXMuYW5vbnltb3VzUHJvY2VkdXJlO1xuICB9XG5cbiAgYXN5bmMgZXZhbHVhdGUoY29udGV4dCkge1xuICAgIGxldCB0ZXJtO1xuXG4gICAgYXdhaXQgdGhpcy5icmVhayhjb250ZXh0KTtcblxuICAgIGNvbnN0IHNvbWVTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgRXZhbHVhdGluZyB0aGUgJyR7c29tZVN0cmluZ30nIHNvbWUuLi5gKTtcblxuICAgIHRlcm0gPSB0aGlzLnZhcmlhYmxlLmV2YWx1YXRlKGNvbnRleHQpO1xuXG4gICAgY29uc3QgdGVybVR5cGUgPSB0ZXJtLmdldFR5cGUoKTtcblxuICAgIGlmICh0ZXJtVHlwZSAhPT0gTk9ERVNfVFlQRSkge1xuICAgICAgY29uc3QgdGVybVN0cmluZyA9IHRlcm0uZ2V0U3RyaW5nKCksXG4gICAgICAgICAgICBtZXNzYWdlID0gYFRoZSAnJHt0ZXJtU3RyaW5nfScgdGVybSdzICcke3Rlcm1UeXBlfScgdHlwZSBzaG91bGQgYmUgJyR7Tk9ERVNfVFlQRX0nLmAsXG4gICAgICAgICAgICBleGNlcHRpb24gPSBFeGNlcHRpb24uZnJvbU1lc3NhZ2UobWVzc2FnZSk7XG5cbiAgICAgIHRocm93IGV4Y2VwdGlvbjtcbiAgICB9XG5cbiAgICBjb25zdCBwcmltaXRpdmVWYWx1ZSA9IHRlcm0uZ2V0UHJpbWl0aXZlVmFsdWUoKSxcbiAgICAgICAgICBub2RlcyA9IHByaW1pdGl2ZVZhbHVlLCAvLy9cbiAgICAgICAgICBib29sZWFuID0gYXdhaXQgYXN5bmNTb21lKG5vZGVzLCBhc3luYyAobm9kZSkgPT4ge1xuICAgICAgICAgICAgbGV0IHRlcm07XG5cbiAgICAgICAgICAgIHRlcm0gPSB0ZXJtRnJvbU5vZGUobm9kZSwgY29udGV4dCk7XG5cbiAgICAgICAgICAgIGNvbnN0IHsgVGVybXMgfSA9IGVsZW1lbnRzLFxuICAgICAgICAgICAgICAgICAgdGVybXMgPSBUZXJtcy5mcm9tVGVybSh0ZXJtLCBjb250ZXh0KTtcblxuICAgICAgICAgICAgdGVybSA9IGF3YWl0IHRoaXMuYW5vbnltb3VzUHJvY2VkdXJlLmNhbGwodGVybXMsIGNvbnRleHQpO1xuXG4gICAgICAgICAgICBjb25zdCB0ZXJtVHlwZSA9IHRlcm0uZ2V0VHlwZSgpO1xuXG4gICAgICAgICAgICBpZiAodGVybVR5cGUgIT09IEJPT0xFQU5fVFlQRSkge1xuICAgICAgICAgICAgICBjb25zdCB0ZXJtU3RyaW5nID0gdGVybS5nZXRTdHJpbmcoKSxcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZSA9IGBUaGUgJyR7dGVybVN0cmluZ30nIHRlcm0ncyB0eXBlIGlzICcke3Rlcm1UeXBlfScgd2hlbiBpdCBzaG91bGQgYmUgb2YgdHlwZSAnJHtCT09MRUFOX1RZUEV9Jy5gLFxuICAgICAgICAgICAgICAgICAgICBleGNlcHRpb24gPSBFeGNlcHRpb24uZnJvbU1lc3NhZ2UobWVzc2FnZSk7XG5cbiAgICAgICAgICAgICAgdGhyb3cgZXhjZXB0aW9uO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCBwcmltaXRpdmVWYWx1ZSA9IHRlcm0uZ2V0UHJpbWl0aXZlVmFsdWUoKSxcbiAgICAgICAgICAgICAgICAgIGJvb2xlYW4gPSBwcmltaXRpdmVWYWx1ZTsgLy8vXG5cbiAgICAgICAgICAgIHJldHVybiBib29sZWFuO1xuICAgICAgICAgIH0pO1xuXG4gICAgdGVybSA9IHRlcm1Gcm9tQm9vbGVhbihib29sZWFuLCBjb250ZXh0KTtcblxuICAgIGNvbnN0IHRlcm1TdHJpbmcgPSB0ZXJtLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgLi4uZXZhbHVhdGVkIHRoZSAnJHtzb21lU3RyaW5nfScgc29tZSBhcyAnJHt0ZXJtU3RyaW5nfScuYCk7XG5cbiAgICByZXR1cm4gdGVybTtcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJTb21lXCI7XG59KTtcbiJdLCJuYW1lcyI6WyJhc3luY1NvbWUiLCJhc3luY2hyb25vdXNVdGlsaXRpZXMiLCJkZWZpbmUiLCJTb21lIiwiRWxlbWVudCIsImNvbnRleHQiLCJzdHJpbmciLCJub2RlIiwibGluZUluZGV4IiwidmFyaWFibGUiLCJhbm9ueW1vdXNQcm9jZWR1cmUiLCJnZXRWYXJpYWJsZSIsImdldEFub255bW91c1Byb2NlZHVyZSIsImV2YWx1YXRlIiwidGVybSIsImJyZWFrIiwic29tZVN0cmluZyIsImdldFN0cmluZyIsInRyYWNlIiwidGVybVR5cGUiLCJnZXRUeXBlIiwiTk9ERVNfVFlQRSIsInRlcm1TdHJpbmciLCJtZXNzYWdlIiwiZXhjZXB0aW9uIiwiRXhjZXB0aW9uIiwiZnJvbU1lc3NhZ2UiLCJwcmltaXRpdmVWYWx1ZSIsImdldFByaW1pdGl2ZVZhbHVlIiwibm9kZXMiLCJib29sZWFuIiwidGVybUZyb21Ob2RlIiwiVGVybXMiLCJlbGVtZW50cyIsInRlcm1zIiwiZnJvbVRlcm0iLCJjYWxsIiwiQk9PTEVBTl9UWVBFIiwidGVybUZyb21Cb29sZWFuIiwibmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBYUE7OztlQUFBOzs7Z0NBWCtDO2tFQUUxQjtrRUFDQzt1QkFHbUI7c0JBQ0s7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTlDLE1BQU0sRUFBRUEsU0FBUyxFQUFFLEdBQUdDLHFDQUFxQjtNQUUzQyxXQUFlQyxJQUFBQSxnQkFBTSxFQUFDLE1BQU1DLGFBQWFDLHVCQUFPO0lBQzlDLFlBQVlDLE9BQU8sRUFBRUMsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLFNBQVMsRUFBRUMsUUFBUSxFQUFFQyxrQkFBa0IsQ0FBRTtRQUMxRSxLQUFLLENBQUNMLFNBQVNDLFFBQVFDLE1BQU1DO1FBRTdCLElBQUksQ0FBQ0MsUUFBUSxHQUFHQTtRQUNoQixJQUFJLENBQUNDLGtCQUFrQixHQUFHQTtJQUM1QjtJQUVBQyxjQUFjO1FBQ1osT0FBTyxJQUFJLENBQUNGLFFBQVE7SUFDdEI7SUFFQUcsd0JBQXdCO1FBQ3RCLE9BQU8sSUFBSSxDQUFDRixrQkFBa0I7SUFDaEM7SUFFQSxNQUFNRyxTQUFTUixPQUFPLEVBQUU7UUFDdEIsSUFBSVM7UUFFSixNQUFNLElBQUksQ0FBQ0MsS0FBSyxDQUFDVjtRQUVqQixNQUFNVyxhQUFhLElBQUksQ0FBQ0MsU0FBUztRQUVqQ1osUUFBUWEsS0FBSyxDQUFDLENBQUMsZ0JBQWdCLEVBQUVGLFdBQVcsU0FBUyxDQUFDO1FBRXRERixPQUFPLElBQUksQ0FBQ0wsUUFBUSxDQUFDSSxRQUFRLENBQUNSO1FBRTlCLE1BQU1jLFdBQVdMLEtBQUtNLE9BQU87UUFFN0IsSUFBSUQsYUFBYUUsaUJBQVUsRUFBRTtZQUMzQixNQUFNQyxhQUFhUixLQUFLRyxTQUFTLElBQzNCTSxVQUFVLENBQUMsS0FBSyxFQUFFRCxXQUFXLFVBQVUsRUFBRUgsU0FBUyxrQkFBa0IsRUFBRUUsaUJBQVUsQ0FBQyxFQUFFLENBQUMsRUFDcEZHLFlBQVlDLGtCQUFTLENBQUNDLFdBQVcsQ0FBQ0g7WUFFeEMsTUFBTUM7UUFDUjtRQUVBLE1BQU1HLGlCQUFpQmIsS0FBS2MsaUJBQWlCLElBQ3ZDQyxRQUFRRixnQkFDUkcsVUFBVSxNQUFNOUIsVUFBVTZCLE9BQU8sT0FBT3RCO1lBQ3RDLElBQUlPO1lBRUpBLE9BQU9pQixJQUFBQSxrQkFBWSxFQUFDeEIsTUFBTUY7WUFFMUIsTUFBTSxFQUFFMkIsS0FBSyxFQUFFLEdBQUdDLGlCQUFRLEVBQ3BCQyxRQUFRRixNQUFNRyxRQUFRLENBQUNyQixNQUFNVDtZQUVuQ1MsT0FBTyxNQUFNLElBQUksQ0FBQ0osa0JBQWtCLENBQUMwQixJQUFJLENBQUNGLE9BQU83QjtZQUVqRCxNQUFNYyxXQUFXTCxLQUFLTSxPQUFPO1lBRTdCLElBQUlELGFBQWFrQixtQkFBWSxFQUFFO2dCQUM3QixNQUFNZixhQUFhUixLQUFLRyxTQUFTLElBQzNCTSxVQUFVLENBQUMsS0FBSyxFQUFFRCxXQUFXLGtCQUFrQixFQUFFSCxTQUFTLDZCQUE2QixFQUFFa0IsbUJBQVksQ0FBQyxFQUFFLENBQUMsRUFDekdiLFlBQVlDLGtCQUFTLENBQUNDLFdBQVcsQ0FBQ0g7Z0JBRXhDLE1BQU1DO1lBQ1I7WUFFQSxNQUFNRyxpQkFBaUJiLEtBQUtjLGlCQUFpQixJQUN2Q0UsVUFBVUgsZ0JBQWdCLEdBQUc7WUFFbkMsT0FBT0c7UUFDVDtRQUVOaEIsT0FBT3dCLElBQUFBLHFCQUFlLEVBQUNSLFNBQVN6QjtRQUVoQyxNQUFNaUIsYUFBYVIsS0FBS0csU0FBUztRQUVqQ1osUUFBUWEsS0FBSyxDQUFDLENBQUMsa0JBQWtCLEVBQUVGLFdBQVcsV0FBVyxFQUFFTSxXQUFXLEVBQUUsQ0FBQztRQUV6RSxPQUFPUjtJQUNUO0lBRUEsT0FBT3lCLE9BQU8sT0FBTztBQUN2QiJ9