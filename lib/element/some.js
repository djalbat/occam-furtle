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
    constructor(context, string, node, breakPoint, variable, anonymousProcedure){
        super(context, string, node, breakPoint);
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
        if (termType !== _types.NOMINAL_VALUES_TYPE) {
            const termString = term.getString(), message = `The '${termString}' term's '${termType}' type should be '${_types.NOMINAL_VALUES_TYPE}'.`, exception = _exception.default.fromMessage(message);
            throw exception;
        }
        const primitiveValue = term.getPrimitiveValue(), nominalValues = primitiveValue, boolean = await asyncSome(nominalValues, async (nominalValue)=>{
            let term;
            term = (0, _term.termFromNominalValue)(nominalValue);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3NvbWUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEVsZW1lbnQsIGFzeW5jaHJvbm91c1V0aWxpdGllcyB9IGZyb20gXCJvY2NhbS1sYW5ndWFnZXNcIjtcblxuaW1wb3J0IGVsZW1lbnRzIGZyb20gXCIuLi9lbGVtZW50c1wiO1xuaW1wb3J0IEV4Y2VwdGlvbiBmcm9tIFwiLi4vZXhjZXB0aW9uXCI7XG5cbmltcG9ydCB7IGRlZmluZSB9IGZyb20gXCIuLi9lbGVtZW50c1wiO1xuaW1wb3J0IHsgQk9PTEVBTl9UWVBFLCBOT01JTkFMX1ZBTFVFU19UWVBFIH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5pbXBvcnQgeyB0ZXJtRnJvbUJvb2xlYW4sIHRlcm1Gcm9tTm9taW5hbFZhbHVlIH0gZnJvbSBcIi4uL3V0aWxpdGllcy90ZXJtXCI7XG5cbmNvbnN0IHsgYXN5bmNTb21lIH0gPSBhc3luY2hyb25vdXNVdGlsaXRpZXM7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZShjbGFzcyBTb21lIGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKGNvbnRleHQsIHN0cmluZywgbm9kZSwgYnJlYWtQb2ludCwgdmFyaWFibGUsIGFub255bW91c1Byb2NlZHVyZSkge1xuICAgIHN1cGVyKGNvbnRleHQsIHN0cmluZywgbm9kZSwgYnJlYWtQb2ludCk7XG5cbiAgICB0aGlzLnZhcmlhYmxlID0gdmFyaWFibGU7XG4gICAgdGhpcy5hbm9ueW1vdXNQcm9jZWR1cmUgPSBhbm9ueW1vdXNQcm9jZWR1cmU7XG4gIH1cblxuICBnZXRWYXJpYWJsZSgpIHtcbiAgICByZXR1cm4gdGhpcy52YXJpYWJsZTtcbiAgfVxuXG4gIGdldEFub255bW91c1Byb2NlZHVyZSgpIHtcbiAgICByZXR1cm4gdGhpcy5hbm9ueW1vdXNQcm9jZWR1cmU7XG4gIH1cblxuICBhc3luYyBldmFsdWF0ZShjb250ZXh0KSB7XG4gICAgbGV0IHRlcm07XG5cbiAgICBhd2FpdCB0aGlzLmJyZWFrKGNvbnRleHQpO1xuXG4gICAgY29uc3Qgc29tZVN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBFdmFsdWF0aW5nIHRoZSAnJHtzb21lU3RyaW5nfScgc29tZS4uLmApO1xuXG4gICAgdGVybSA9IHRoaXMudmFyaWFibGUuZXZhbHVhdGUoY29udGV4dCk7XG5cbiAgICBjb25zdCB0ZXJtVHlwZSA9IHRlcm0uZ2V0VHlwZSgpO1xuXG4gICAgaWYgKHRlcm1UeXBlICE9PSBOT01JTkFMX1ZBTFVFU19UWVBFKSB7XG4gICAgICBjb25zdCB0ZXJtU3RyaW5nID0gdGVybS5nZXRTdHJpbmcoKSxcbiAgICAgICAgICAgIG1lc3NhZ2UgPSBgVGhlICcke3Rlcm1TdHJpbmd9JyB0ZXJtJ3MgJyR7dGVybVR5cGV9JyB0eXBlIHNob3VsZCBiZSAnJHtOT01JTkFMX1ZBTFVFU19UWVBFfScuYCxcbiAgICAgICAgICAgIGV4Y2VwdGlvbiA9IEV4Y2VwdGlvbi5mcm9tTWVzc2FnZShtZXNzYWdlKTtcblxuICAgICAgdGhyb3cgZXhjZXB0aW9uO1xuICAgIH1cblxuICAgIGNvbnN0IHByaW1pdGl2ZVZhbHVlID0gdGVybS5nZXRQcmltaXRpdmVWYWx1ZSgpLFxuICAgICAgICAgIG5vbWluYWxWYWx1ZXMgPSBwcmltaXRpdmVWYWx1ZSwgLy8vXG4gICAgICAgICAgYm9vbGVhbiA9IGF3YWl0IGFzeW5jU29tZShub21pbmFsVmFsdWVzLCBhc3luYyAobm9taW5hbFZhbHVlKSA9PiB7XG4gICAgICAgICAgICBsZXQgdGVybTtcblxuICAgICAgICAgICAgdGVybSA9IHRlcm1Gcm9tTm9taW5hbFZhbHVlKG5vbWluYWxWYWx1ZSk7XG5cbiAgICAgICAgICAgIGNvbnN0IHsgVGVybXMgfSA9IGVsZW1lbnRzLFxuICAgICAgICAgICAgICAgICAgdGVybXMgPSBUZXJtcy5mcm9tVGVybSh0ZXJtLCBjb250ZXh0KTtcblxuICAgICAgICAgICAgdGVybSA9IGF3YWl0IHRoaXMuYW5vbnltb3VzUHJvY2VkdXJlLmNhbGwodGVybXMsIGNvbnRleHQpO1xuXG4gICAgICAgICAgICBjb25zdCB0ZXJtVHlwZSA9IHRlcm0uZ2V0VHlwZSgpO1xuXG4gICAgICAgICAgICBpZiAodGVybVR5cGUgIT09IEJPT0xFQU5fVFlQRSkge1xuICAgICAgICAgICAgICBjb25zdCB0ZXJtU3RyaW5nID0gdGVybS5nZXRTdHJpbmcoKSxcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZSA9IGBUaGUgJyR7dGVybVN0cmluZ30nIHRlcm0ncyB0eXBlIGlzICcke3Rlcm1UeXBlfScgd2hlbiBpdCBzaG91bGQgYmUgb2YgdHlwZSAnJHtCT09MRUFOX1RZUEV9Jy5gLFxuICAgICAgICAgICAgICAgICAgICBleGNlcHRpb24gPSBFeGNlcHRpb24uZnJvbU1lc3NhZ2UobWVzc2FnZSk7XG5cbiAgICAgICAgICAgICAgdGhyb3cgZXhjZXB0aW9uO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCBwcmltaXRpdmVWYWx1ZSA9IHRlcm0uZ2V0UHJpbWl0aXZlVmFsdWUoKSxcbiAgICAgICAgICAgICAgICAgIGJvb2xlYW4gPSBwcmltaXRpdmVWYWx1ZTsgLy8vXG5cbiAgICAgICAgICAgIHJldHVybiBib29sZWFuO1xuICAgICAgICAgIH0pO1xuXG4gICAgdGVybSA9IHRlcm1Gcm9tQm9vbGVhbihib29sZWFuLCBjb250ZXh0KTtcblxuICAgIGNvbnN0IHRlcm1TdHJpbmcgPSB0ZXJtLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgLi4uZXZhbHVhdGVkIHRoZSAnJHtzb21lU3RyaW5nfScgc29tZSBhcyAnJHt0ZXJtU3RyaW5nfScuYCk7XG5cbiAgICByZXR1cm4gdGVybTtcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJTb21lXCI7XG59KTtcbiJdLCJuYW1lcyI6WyJhc3luY1NvbWUiLCJhc3luY2hyb25vdXNVdGlsaXRpZXMiLCJkZWZpbmUiLCJTb21lIiwiRWxlbWVudCIsImNvbnRleHQiLCJzdHJpbmciLCJub2RlIiwiYnJlYWtQb2ludCIsInZhcmlhYmxlIiwiYW5vbnltb3VzUHJvY2VkdXJlIiwiZ2V0VmFyaWFibGUiLCJnZXRBbm9ueW1vdXNQcm9jZWR1cmUiLCJldmFsdWF0ZSIsInRlcm0iLCJicmVhayIsInNvbWVTdHJpbmciLCJnZXRTdHJpbmciLCJ0cmFjZSIsInRlcm1UeXBlIiwiZ2V0VHlwZSIsIk5PTUlOQUxfVkFMVUVTX1RZUEUiLCJ0ZXJtU3RyaW5nIiwibWVzc2FnZSIsImV4Y2VwdGlvbiIsIkV4Y2VwdGlvbiIsImZyb21NZXNzYWdlIiwicHJpbWl0aXZlVmFsdWUiLCJnZXRQcmltaXRpdmVWYWx1ZSIsIm5vbWluYWxWYWx1ZXMiLCJib29sZWFuIiwibm9taW5hbFZhbHVlIiwidGVybUZyb21Ob21pbmFsVmFsdWUiLCJUZXJtcyIsImVsZW1lbnRzIiwidGVybXMiLCJmcm9tVGVybSIsImNhbGwiLCJCT09MRUFOX1RZUEUiLCJ0ZXJtRnJvbUJvb2xlYW4iLCJuYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFhQTs7O2VBQUE7OztnQ0FYK0M7a0VBRTFCO2tFQUNDO3VCQUc0QjtzQkFDSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFdEQsTUFBTSxFQUFFQSxTQUFTLEVBQUUsR0FBR0MscUNBQXFCO01BRTNDLFdBQWVDLElBQUFBLGdCQUFNLEVBQUMsTUFBTUMsYUFBYUMsdUJBQU87SUFDOUMsWUFBWUMsT0FBTyxFQUFFQyxNQUFNLEVBQUVDLElBQUksRUFBRUMsVUFBVSxFQUFFQyxRQUFRLEVBQUVDLGtCQUFrQixDQUFFO1FBQzNFLEtBQUssQ0FBQ0wsU0FBU0MsUUFBUUMsTUFBTUM7UUFFN0IsSUFBSSxDQUFDQyxRQUFRLEdBQUdBO1FBQ2hCLElBQUksQ0FBQ0Msa0JBQWtCLEdBQUdBO0lBQzVCO0lBRUFDLGNBQWM7UUFDWixPQUFPLElBQUksQ0FBQ0YsUUFBUTtJQUN0QjtJQUVBRyx3QkFBd0I7UUFDdEIsT0FBTyxJQUFJLENBQUNGLGtCQUFrQjtJQUNoQztJQUVBLE1BQU1HLFNBQVNSLE9BQU8sRUFBRTtRQUN0QixJQUFJUztRQUVKLE1BQU0sSUFBSSxDQUFDQyxLQUFLLENBQUNWO1FBRWpCLE1BQU1XLGFBQWEsSUFBSSxDQUFDQyxTQUFTO1FBRWpDWixRQUFRYSxLQUFLLENBQUMsQ0FBQyxnQkFBZ0IsRUFBRUYsV0FBVyxTQUFTLENBQUM7UUFFdERGLE9BQU8sSUFBSSxDQUFDTCxRQUFRLENBQUNJLFFBQVEsQ0FBQ1I7UUFFOUIsTUFBTWMsV0FBV0wsS0FBS00sT0FBTztRQUU3QixJQUFJRCxhQUFhRSwwQkFBbUIsRUFBRTtZQUNwQyxNQUFNQyxhQUFhUixLQUFLRyxTQUFTLElBQzNCTSxVQUFVLENBQUMsS0FBSyxFQUFFRCxXQUFXLFVBQVUsRUFBRUgsU0FBUyxrQkFBa0IsRUFBRUUsMEJBQW1CLENBQUMsRUFBRSxDQUFDLEVBQzdGRyxZQUFZQyxrQkFBUyxDQUFDQyxXQUFXLENBQUNIO1lBRXhDLE1BQU1DO1FBQ1I7UUFFQSxNQUFNRyxpQkFBaUJiLEtBQUtjLGlCQUFpQixJQUN2Q0MsZ0JBQWdCRixnQkFDaEJHLFVBQVUsTUFBTTlCLFVBQVU2QixlQUFlLE9BQU9FO1lBQzlDLElBQUlqQjtZQUVKQSxPQUFPa0IsSUFBQUEsMEJBQW9CLEVBQUNEO1lBRTVCLE1BQU0sRUFBRUUsS0FBSyxFQUFFLEdBQUdDLGlCQUFRLEVBQ3BCQyxRQUFRRixNQUFNRyxRQUFRLENBQUN0QixNQUFNVDtZQUVuQ1MsT0FBTyxNQUFNLElBQUksQ0FBQ0osa0JBQWtCLENBQUMyQixJQUFJLENBQUNGLE9BQU85QjtZQUVqRCxNQUFNYyxXQUFXTCxLQUFLTSxPQUFPO1lBRTdCLElBQUlELGFBQWFtQixtQkFBWSxFQUFFO2dCQUM3QixNQUFNaEIsYUFBYVIsS0FBS0csU0FBUyxJQUMzQk0sVUFBVSxDQUFDLEtBQUssRUFBRUQsV0FBVyxrQkFBa0IsRUFBRUgsU0FBUyw2QkFBNkIsRUFBRW1CLG1CQUFZLENBQUMsRUFBRSxDQUFDLEVBQ3pHZCxZQUFZQyxrQkFBUyxDQUFDQyxXQUFXLENBQUNIO2dCQUV4QyxNQUFNQztZQUNSO1lBRUEsTUFBTUcsaUJBQWlCYixLQUFLYyxpQkFBaUIsSUFDdkNFLFVBQVVILGdCQUFnQixHQUFHO1lBRW5DLE9BQU9HO1FBQ1Q7UUFFTmhCLE9BQU95QixJQUFBQSxxQkFBZSxFQUFDVCxTQUFTekI7UUFFaEMsTUFBTWlCLGFBQWFSLEtBQUtHLFNBQVM7UUFFakNaLFFBQVFhLEtBQUssQ0FBQyxDQUFDLGtCQUFrQixFQUFFRixXQUFXLFdBQVcsRUFBRU0sV0FBVyxFQUFFLENBQUM7UUFFekUsT0FBT1I7SUFDVDtJQUVBLE9BQU8wQixPQUFPLE9BQU87QUFDdkIifQ==