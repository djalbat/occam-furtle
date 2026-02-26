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
    constructor(context, string, node, variable, anonymousProcedure){
        super(context, string, node);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3NvbWUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEVsZW1lbnQsIGFzeW5jaHJvbm91c1V0aWxpdGllcyB9IGZyb20gXCJvY2NhbS1sYW5ndWFnZXNcIjtcblxuaW1wb3J0IGVsZW1lbnRzIGZyb20gXCIuLi9lbGVtZW50c1wiO1xuaW1wb3J0IEV4Y2VwdGlvbiBmcm9tIFwiLi4vZXhjZXB0aW9uXCI7XG5cbmltcG9ydCB7IGRlZmluZSB9IGZyb20gXCIuLi9lbGVtZW50c1wiO1xuaW1wb3J0IHsgTk9ERVNfVFlQRSwgQk9PTEVBTl9UWVBFIH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5pbXBvcnQgeyB0ZXJtRnJvbU5vZGUsIHRlcm1Gcm9tQm9vbGVhbiB9IGZyb20gXCIuLi91dGlsaXRpZXMvdGVybVwiO1xuXG5jb25zdCB7IGFzeW5jU29tZSB9ID0gYXN5bmNocm9ub3VzVXRpbGl0aWVzO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmUoY2xhc3MgU29tZSBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIHZhcmlhYmxlLCBhbm9ueW1vdXNQcm9jZWR1cmUpIHtcbiAgICBzdXBlcihjb250ZXh0LCBzdHJpbmcsIG5vZGUpXG5cbiAgICB0aGlzLnZhcmlhYmxlID0gdmFyaWFibGU7XG4gICAgdGhpcy5hbm9ueW1vdXNQcm9jZWR1cmUgPSBhbm9ueW1vdXNQcm9jZWR1cmU7XG4gIH1cblxuICBnZXRWYXJpYWJsZSgpIHtcbiAgICByZXR1cm4gdGhpcy52YXJpYWJsZTtcbiAgfVxuXG4gIGdldEFub255bW91c1Byb2NlZHVyZSgpIHtcbiAgICByZXR1cm4gdGhpcy5hbm9ueW1vdXNQcm9jZWR1cmU7XG4gIH1cblxuICBhc3luYyBldmFsdWF0ZShjb250ZXh0KSB7XG4gICAgbGV0IHRlcm07XG5cbiAgICBhd2FpdCB0aGlzLmJyZWFrKGNvbnRleHQpO1xuXG4gICAgY29uc3Qgc29tZVN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBFdmFsdWF0aW5nIHRoZSAnJHtzb21lU3RyaW5nfScgc29tZS4uLmApO1xuXG4gICAgdGVybSA9IHRoaXMudmFyaWFibGUuZXZhbHVhdGUoY29udGV4dCk7XG5cbiAgICBjb25zdCB0ZXJtVHlwZSA9IHRlcm0uZ2V0VHlwZSgpO1xuXG4gICAgaWYgKHRlcm1UeXBlICE9PSBOT0RFU19UWVBFKSB7XG4gICAgICBjb25zdCB0ZXJtU3RyaW5nID0gdGVybS5nZXRTdHJpbmcoKSxcbiAgICAgICAgICAgIG1lc3NhZ2UgPSBgVGhlICcke3Rlcm1TdHJpbmd9JyB0ZXJtJ3MgJyR7dGVybVR5cGV9JyB0eXBlIHNob3VsZCBiZSAnJHtOT0RFU19UWVBFfScuYCxcbiAgICAgICAgICAgIGV4Y2VwdGlvbiA9IEV4Y2VwdGlvbi5mcm9tTWVzc2FnZShtZXNzYWdlKTtcblxuICAgICAgdGhyb3cgZXhjZXB0aW9uO1xuICAgIH1cblxuICAgIGNvbnN0IHByaW1pdGl2ZVZhbHVlID0gdGVybS5nZXRQcmltaXRpdmVWYWx1ZSgpLFxuICAgICAgICAgIG5vZGVzID0gcHJpbWl0aXZlVmFsdWUsIC8vL1xuICAgICAgICAgIGJvb2xlYW4gPSBhd2FpdCBhc3luY1NvbWUobm9kZXMsIGFzeW5jIChub2RlKSA9PiB7XG4gICAgICAgICAgICBsZXQgdGVybTtcblxuICAgICAgICAgICAgdGVybSA9IHRlcm1Gcm9tTm9kZShub2RlLCBjb250ZXh0KTtcblxuICAgICAgICAgICAgY29uc3QgeyBUZXJtcyB9ID0gZWxlbWVudHMsXG4gICAgICAgICAgICAgICAgICB0ZXJtcyA9IFRlcm1zLmZyb21UZXJtKHRlcm0sIGNvbnRleHQpO1xuXG4gICAgICAgICAgICB0ZXJtID0gYXdhaXQgdGhpcy5hbm9ueW1vdXNQcm9jZWR1cmUuY2FsbCh0ZXJtcywgY29udGV4dCk7XG5cbiAgICAgICAgICAgIGNvbnN0IHRlcm1UeXBlID0gdGVybS5nZXRUeXBlKCk7XG5cbiAgICAgICAgICAgIGlmICh0ZXJtVHlwZSAhPT0gQk9PTEVBTl9UWVBFKSB7XG4gICAgICAgICAgICAgIGNvbnN0IHRlcm1TdHJpbmcgPSB0ZXJtLmdldFN0cmluZygpLFxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlID0gYFRoZSAnJHt0ZXJtU3RyaW5nfScgdGVybSdzIHR5cGUgaXMgJyR7dGVybVR5cGV9JyB3aGVuIGl0IHNob3VsZCBiZSBvZiB0eXBlICcke0JPT0xFQU5fVFlQRX0nLmAsXG4gICAgICAgICAgICAgICAgICAgIGV4Y2VwdGlvbiA9IEV4Y2VwdGlvbi5mcm9tTWVzc2FnZShtZXNzYWdlKTtcblxuICAgICAgICAgICAgICB0aHJvdyBleGNlcHRpb247XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IHByaW1pdGl2ZVZhbHVlID0gdGVybS5nZXRQcmltaXRpdmVWYWx1ZSgpLFxuICAgICAgICAgICAgICAgICAgYm9vbGVhbiA9IHByaW1pdGl2ZVZhbHVlOyAvLy9cblxuICAgICAgICAgICAgcmV0dXJuIGJvb2xlYW47XG4gICAgICAgICAgfSk7XG5cbiAgICB0ZXJtID0gdGVybUZyb21Cb29sZWFuKGJvb2xlYW4sIGNvbnRleHQpO1xuXG4gICAgY29uc3QgdGVybVN0cmluZyA9IHRlcm0uZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGAuLi5ldmFsdWF0ZWQgdGhlICcke3NvbWVTdHJpbmd9JyBzb21lIGFzICcke3Rlcm1TdHJpbmd9Jy5gKTtcblxuICAgIHJldHVybiB0ZXJtO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIlNvbWVcIjtcbn0pO1xuIl0sIm5hbWVzIjpbImFzeW5jU29tZSIsImFzeW5jaHJvbm91c1V0aWxpdGllcyIsImRlZmluZSIsIlNvbWUiLCJFbGVtZW50IiwiY29udGV4dCIsInN0cmluZyIsIm5vZGUiLCJ2YXJpYWJsZSIsImFub255bW91c1Byb2NlZHVyZSIsImdldFZhcmlhYmxlIiwiZ2V0QW5vbnltb3VzUHJvY2VkdXJlIiwiZXZhbHVhdGUiLCJ0ZXJtIiwiYnJlYWsiLCJzb21lU3RyaW5nIiwiZ2V0U3RyaW5nIiwidHJhY2UiLCJ0ZXJtVHlwZSIsImdldFR5cGUiLCJOT0RFU19UWVBFIiwidGVybVN0cmluZyIsIm1lc3NhZ2UiLCJleGNlcHRpb24iLCJFeGNlcHRpb24iLCJmcm9tTWVzc2FnZSIsInByaW1pdGl2ZVZhbHVlIiwiZ2V0UHJpbWl0aXZlVmFsdWUiLCJub2RlcyIsImJvb2xlYW4iLCJ0ZXJtRnJvbU5vZGUiLCJUZXJtcyIsImVsZW1lbnRzIiwidGVybXMiLCJmcm9tVGVybSIsImNhbGwiLCJCT09MRUFOX1RZUEUiLCJ0ZXJtRnJvbUJvb2xlYW4iLCJuYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFhQTs7O2VBQUE7OztnQ0FYK0M7a0VBRTFCO2tFQUNDO3VCQUdtQjtzQkFDSzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFOUMsTUFBTSxFQUFFQSxTQUFTLEVBQUUsR0FBR0MscUNBQXFCO01BRTNDLFdBQWVDLElBQUFBLGdCQUFNLEVBQUMsTUFBTUMsYUFBYUMsdUJBQU87SUFDOUMsWUFBWUMsT0FBTyxFQUFFQyxNQUFNLEVBQUVDLElBQUksRUFBRUMsUUFBUSxFQUFFQyxrQkFBa0IsQ0FBRTtRQUMvRCxLQUFLLENBQUNKLFNBQVNDLFFBQVFDO1FBRXZCLElBQUksQ0FBQ0MsUUFBUSxHQUFHQTtRQUNoQixJQUFJLENBQUNDLGtCQUFrQixHQUFHQTtJQUM1QjtJQUVBQyxjQUFjO1FBQ1osT0FBTyxJQUFJLENBQUNGLFFBQVE7SUFDdEI7SUFFQUcsd0JBQXdCO1FBQ3RCLE9BQU8sSUFBSSxDQUFDRixrQkFBa0I7SUFDaEM7SUFFQSxNQUFNRyxTQUFTUCxPQUFPLEVBQUU7UUFDdEIsSUFBSVE7UUFFSixNQUFNLElBQUksQ0FBQ0MsS0FBSyxDQUFDVDtRQUVqQixNQUFNVSxhQUFhLElBQUksQ0FBQ0MsU0FBUztRQUVqQ1gsUUFBUVksS0FBSyxDQUFDLENBQUMsZ0JBQWdCLEVBQUVGLFdBQVcsU0FBUyxDQUFDO1FBRXRERixPQUFPLElBQUksQ0FBQ0wsUUFBUSxDQUFDSSxRQUFRLENBQUNQO1FBRTlCLE1BQU1hLFdBQVdMLEtBQUtNLE9BQU87UUFFN0IsSUFBSUQsYUFBYUUsaUJBQVUsRUFBRTtZQUMzQixNQUFNQyxhQUFhUixLQUFLRyxTQUFTLElBQzNCTSxVQUFVLENBQUMsS0FBSyxFQUFFRCxXQUFXLFVBQVUsRUFBRUgsU0FBUyxrQkFBa0IsRUFBRUUsaUJBQVUsQ0FBQyxFQUFFLENBQUMsRUFDcEZHLFlBQVlDLGtCQUFTLENBQUNDLFdBQVcsQ0FBQ0g7WUFFeEMsTUFBTUM7UUFDUjtRQUVBLE1BQU1HLGlCQUFpQmIsS0FBS2MsaUJBQWlCLElBQ3ZDQyxRQUFRRixnQkFDUkcsVUFBVSxNQUFNN0IsVUFBVTRCLE9BQU8sT0FBT3JCO1lBQ3RDLElBQUlNO1lBRUpBLE9BQU9pQixJQUFBQSxrQkFBWSxFQUFDdkIsTUFBTUY7WUFFMUIsTUFBTSxFQUFFMEIsS0FBSyxFQUFFLEdBQUdDLGlCQUFRLEVBQ3BCQyxRQUFRRixNQUFNRyxRQUFRLENBQUNyQixNQUFNUjtZQUVuQ1EsT0FBTyxNQUFNLElBQUksQ0FBQ0osa0JBQWtCLENBQUMwQixJQUFJLENBQUNGLE9BQU81QjtZQUVqRCxNQUFNYSxXQUFXTCxLQUFLTSxPQUFPO1lBRTdCLElBQUlELGFBQWFrQixtQkFBWSxFQUFFO2dCQUM3QixNQUFNZixhQUFhUixLQUFLRyxTQUFTLElBQzNCTSxVQUFVLENBQUMsS0FBSyxFQUFFRCxXQUFXLGtCQUFrQixFQUFFSCxTQUFTLDZCQUE2QixFQUFFa0IsbUJBQVksQ0FBQyxFQUFFLENBQUMsRUFDekdiLFlBQVlDLGtCQUFTLENBQUNDLFdBQVcsQ0FBQ0g7Z0JBRXhDLE1BQU1DO1lBQ1I7WUFFQSxNQUFNRyxpQkFBaUJiLEtBQUtjLGlCQUFpQixJQUN2Q0UsVUFBVUgsZ0JBQWdCLEdBQUc7WUFFbkMsT0FBT0c7UUFDVDtRQUVOaEIsT0FBT3dCLElBQUFBLHFCQUFlLEVBQUNSLFNBQVN4QjtRQUVoQyxNQUFNZ0IsYUFBYVIsS0FBS0csU0FBUztRQUVqQ1gsUUFBUVksS0FBSyxDQUFDLENBQUMsa0JBQWtCLEVBQUVGLFdBQVcsV0FBVyxFQUFFTSxXQUFXLEVBQUUsQ0FBQztRQUV6RSxPQUFPUjtJQUNUO0lBRUEsT0FBT3lCLE9BQU8sT0FBTztBQUN2QiJ9