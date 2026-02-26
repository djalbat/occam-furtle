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
const _exception = /*#__PURE__*/ _interop_require_default(require("../../exception"));
const _elements = require("../../elements");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const _default = (0, _elements.define)(class NamedParameter extends _occamlanguages.Element {
    constructor(context, string, node, type, name, alias){
        super(context, string, node);
        this.type = type;
        this.name = name;
        this.alias = alias;
    }
    getType() {
        return this.type;
    }
    getName() {
        return this.name;
    }
    getAlias() {
        return this.alias;
    }
    isAliased() {
        const aliased = this.alias !== null;
        return aliased;
    }
    getAliasedName() {
        const aliased = this.isAliased(), aliasedName = aliased ? this.alias : this.name; ///
        return aliasedName;
    }
    compareTerm(term, context) {
        const termString = term.getString(), namedParameterString = this.getString(); ///
        context.trace(`Comparing the '${termString}' term with the '${namedParameterString}' named parameter...`);
        const termType = term.getType();
        if (this.type !== termType) {
            const message = `The '${termString}' term's '${termType}' type is not equal to '${namedParameterString}' named parameter's '${this.type}' type.`, exception = _exception.default.fromMessage(message);
            throw exception;
        }
        context.debug(`...compared the '${termString}' term with the '${namedParameterString}' named parameter.`);
    }
    compareNamedParameter(namedParameter, context) {
        let namedParameterCompares;
        const namedParameterA = this, namedParameterB = namedParameter; ///
        const namedParameterAString = namedParameterA.getString(), namedParameterBString = namedParameterB.getString();
        context.trace(`Comparing the '${namedParameterAString}' named parameter with the '${namedParameterBString}' named parameter...`);
        const name = namedParameter.getName(), type = namedParameter.getType();
        namedParameterCompares = this.name === name && this.type === type;
        if (namedParameterCompares) {
            context.debug(`...compared the '${namedParameterAString}' named parameter with the '${namedParameterBString}' named parameter.`);
        }
        return namedParameterCompares;
    }
    static name = "NamedParameter";
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L3BhcmFtZXRlci9uYW1lZC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgRWxlbWVudCB9IGZyb20gXCJvY2NhbS1sYW5ndWFnZXNcIjtcblxuaW1wb3J0IEV4Y2VwdGlvbiBmcm9tIFwiLi4vLi4vZXhjZXB0aW9uXCI7XG5cbmltcG9ydCB7IGRlZmluZSB9IGZyb20gXCIuLi8uLi9lbGVtZW50c1wiO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmUoY2xhc3MgTmFtZWRQYXJhbWV0ZXIgZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgc3RyaW5nLCBub2RlLCB0eXBlLCBuYW1lLCBhbGlhcykge1xuICAgIHN1cGVyKGNvbnRleHQsIHN0cmluZywgbm9kZSlcblxuICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLmFsaWFzID0gYWxpYXM7XG4gIH1cblxuICBnZXRUeXBlKCkge1xuICAgIHJldHVybiB0aGlzLnR5cGU7XG4gIH1cblxuICBnZXROYW1lKCkge1xuICAgIHJldHVybiB0aGlzLm5hbWU7XG4gIH1cblxuICBnZXRBbGlhcygpIHtcbiAgICByZXR1cm4gdGhpcy5hbGlhcztcbiAgfVxuXG4gIGlzQWxpYXNlZCgpIHtcbiAgICBjb25zdCBhbGlhc2VkID0gKHRoaXMuYWxpYXMgIT09IG51bGwpO1xuXG4gICAgcmV0dXJuIGFsaWFzZWQ7XG4gIH1cblxuICBnZXRBbGlhc2VkTmFtZSgpIHtcbiAgICBjb25zdCBhbGlhc2VkID0gdGhpcy5pc0FsaWFzZWQoKSxcbiAgICAgICAgICBhbGlhc2VkTmFtZSA9IGFsaWFzZWQgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFsaWFzIDogIC8vL1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubmFtZTsgLy8vXG5cbiAgICByZXR1cm4gYWxpYXNlZE5hbWU7XG4gIH1cblxuICBjb21wYXJlVGVybSh0ZXJtLCBjb250ZXh0KSB7XG4gICAgY29uc3QgdGVybVN0cmluZyA9IHRlcm0uZ2V0U3RyaW5nKCksXG4gICAgICAgICAgbmFtZWRQYXJhbWV0ZXJTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBDb21wYXJpbmcgdGhlICcke3Rlcm1TdHJpbmd9JyB0ZXJtIHdpdGggdGhlICcke25hbWVkUGFyYW1ldGVyU3RyaW5nfScgbmFtZWQgcGFyYW1ldGVyLi4uYCk7XG5cbiAgICBjb25zdCB0ZXJtVHlwZSA9IHRlcm0uZ2V0VHlwZSgpO1xuXG4gICAgaWYgKHRoaXMudHlwZSAhPT0gdGVybVR5cGUpIHtcbiAgICAgIGNvbnN0IG1lc3NhZ2UgPSBgVGhlICcke3Rlcm1TdHJpbmd9JyB0ZXJtJ3MgJyR7dGVybVR5cGV9JyB0eXBlIGlzIG5vdCBlcXVhbCB0byAnJHtuYW1lZFBhcmFtZXRlclN0cmluZ30nIG5hbWVkIHBhcmFtZXRlcidzICcke3RoaXMudHlwZX0nIHR5cGUuYCxcbiAgICAgICAgICAgIGV4Y2VwdGlvbiA9IEV4Y2VwdGlvbi5mcm9tTWVzc2FnZShtZXNzYWdlKTtcblxuICAgICAgdGhyb3cgZXhjZXB0aW9uO1xuICAgIH1cblxuICAgIGNvbnRleHQuZGVidWcoYC4uLmNvbXBhcmVkIHRoZSAnJHt0ZXJtU3RyaW5nfScgdGVybSB3aXRoIHRoZSAnJHtuYW1lZFBhcmFtZXRlclN0cmluZ30nIG5hbWVkIHBhcmFtZXRlci5gKTtcbiAgfVxuXG4gIGNvbXBhcmVOYW1lZFBhcmFtZXRlcihuYW1lZFBhcmFtZXRlciwgY29udGV4dCkge1xuICAgIGxldCBuYW1lZFBhcmFtZXRlckNvbXBhcmVzO1xuXG4gICAgY29uc3QgbmFtZWRQYXJhbWV0ZXJBID0gdGhpcywgIC8vL1xuICAgICAgICAgIG5hbWVkUGFyYW1ldGVyQiA9IG5hbWVkUGFyYW1ldGVyOyAvLy9cblxuICAgIGNvbnN0IG5hbWVkUGFyYW1ldGVyQVN0cmluZyA9IG5hbWVkUGFyYW1ldGVyQS5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBuYW1lZFBhcmFtZXRlckJTdHJpbmcgPSBuYW1lZFBhcmFtZXRlckIuZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBDb21wYXJpbmcgdGhlICcke25hbWVkUGFyYW1ldGVyQVN0cmluZ30nIG5hbWVkIHBhcmFtZXRlciB3aXRoIHRoZSAnJHtuYW1lZFBhcmFtZXRlckJTdHJpbmd9JyBuYW1lZCBwYXJhbWV0ZXIuLi5gKTtcblxuICAgIGNvbnN0IG5hbWUgPSBuYW1lZFBhcmFtZXRlci5nZXROYW1lKCksXG4gICAgICAgICAgdHlwZSA9IG5hbWVkUGFyYW1ldGVyLmdldFR5cGUoKTtcblxuICAgIG5hbWVkUGFyYW1ldGVyQ29tcGFyZXMgPSAoKHRoaXMubmFtZSA9PT0gbmFtZSkgJiYgKHRoaXMudHlwZSA9PT0gdHlwZSkpO1xuXG4gICAgaWYgKG5hbWVkUGFyYW1ldGVyQ29tcGFyZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLmNvbXBhcmVkIHRoZSAnJHtuYW1lZFBhcmFtZXRlckFTdHJpbmd9JyBuYW1lZCBwYXJhbWV0ZXIgd2l0aCB0aGUgJyR7bmFtZWRQYXJhbWV0ZXJCU3RyaW5nfScgbmFtZWQgcGFyYW1ldGVyLmApO1xuICAgIH1cblxuICAgIHJldHVybiBuYW1lZFBhcmFtZXRlckNvbXBhcmVzO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIk5hbWVkUGFyYW1ldGVyXCI7XG59KTtcbiJdLCJuYW1lcyI6WyJkZWZpbmUiLCJOYW1lZFBhcmFtZXRlciIsIkVsZW1lbnQiLCJjb250ZXh0Iiwic3RyaW5nIiwibm9kZSIsInR5cGUiLCJuYW1lIiwiYWxpYXMiLCJnZXRUeXBlIiwiZ2V0TmFtZSIsImdldEFsaWFzIiwiaXNBbGlhc2VkIiwiYWxpYXNlZCIsImdldEFsaWFzZWROYW1lIiwiYWxpYXNlZE5hbWUiLCJjb21wYXJlVGVybSIsInRlcm0iLCJ0ZXJtU3RyaW5nIiwiZ2V0U3RyaW5nIiwibmFtZWRQYXJhbWV0ZXJTdHJpbmciLCJ0cmFjZSIsInRlcm1UeXBlIiwibWVzc2FnZSIsImV4Y2VwdGlvbiIsIkV4Y2VwdGlvbiIsImZyb21NZXNzYWdlIiwiZGVidWciLCJjb21wYXJlTmFtZWRQYXJhbWV0ZXIiLCJuYW1lZFBhcmFtZXRlciIsIm5hbWVkUGFyYW1ldGVyQ29tcGFyZXMiLCJuYW1lZFBhcmFtZXRlckEiLCJuYW1lZFBhcmFtZXRlckIiLCJuYW1lZFBhcmFtZXRlckFTdHJpbmciLCJuYW1lZFBhcmFtZXRlckJTdHJpbmciXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVFBOzs7ZUFBQTs7O2dDQU53QjtrRUFFRjswQkFFQzs7Ozs7O01BRXZCLFdBQWVBLElBQUFBLGdCQUFNLEVBQUMsTUFBTUMsdUJBQXVCQyx1QkFBTztJQUN4RCxZQUFZQyxPQUFPLEVBQUVDLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxJQUFJLEVBQUVDLElBQUksRUFBRUMsS0FBSyxDQUFFO1FBQ3BELEtBQUssQ0FBQ0wsU0FBU0MsUUFBUUM7UUFFdkIsSUFBSSxDQUFDQyxJQUFJLEdBQUdBO1FBQ1osSUFBSSxDQUFDQyxJQUFJLEdBQUdBO1FBQ1osSUFBSSxDQUFDQyxLQUFLLEdBQUdBO0lBQ2Y7SUFFQUMsVUFBVTtRQUNSLE9BQU8sSUFBSSxDQUFDSCxJQUFJO0lBQ2xCO0lBRUFJLFVBQVU7UUFDUixPQUFPLElBQUksQ0FBQ0gsSUFBSTtJQUNsQjtJQUVBSSxXQUFXO1FBQ1QsT0FBTyxJQUFJLENBQUNILEtBQUs7SUFDbkI7SUFFQUksWUFBWTtRQUNWLE1BQU1DLFVBQVcsSUFBSSxDQUFDTCxLQUFLLEtBQUs7UUFFaEMsT0FBT0s7SUFDVDtJQUVBQyxpQkFBaUI7UUFDZixNQUFNRCxVQUFVLElBQUksQ0FBQ0QsU0FBUyxJQUN4QkcsY0FBY0YsVUFDRSxJQUFJLENBQUNMLEtBQUssR0FDUixJQUFJLENBQUNELElBQUksRUFBRSxHQUFHO1FBRXRDLE9BQU9RO0lBQ1Q7SUFFQUMsWUFBWUMsSUFBSSxFQUFFZCxPQUFPLEVBQUU7UUFDekIsTUFBTWUsYUFBYUQsS0FBS0UsU0FBUyxJQUMzQkMsdUJBQXVCLElBQUksQ0FBQ0QsU0FBUyxJQUFLLEdBQUc7UUFFbkRoQixRQUFRa0IsS0FBSyxDQUFDLENBQUMsZUFBZSxFQUFFSCxXQUFXLGlCQUFpQixFQUFFRSxxQkFBcUIsb0JBQW9CLENBQUM7UUFFeEcsTUFBTUUsV0FBV0wsS0FBS1IsT0FBTztRQUU3QixJQUFJLElBQUksQ0FBQ0gsSUFBSSxLQUFLZ0IsVUFBVTtZQUMxQixNQUFNQyxVQUFVLENBQUMsS0FBSyxFQUFFTCxXQUFXLFVBQVUsRUFBRUksU0FBUyx3QkFBd0IsRUFBRUYscUJBQXFCLHFCQUFxQixFQUFFLElBQUksQ0FBQ2QsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUMxSWtCLFlBQVlDLGtCQUFTLENBQUNDLFdBQVcsQ0FBQ0g7WUFFeEMsTUFBTUM7UUFDUjtRQUVBckIsUUFBUXdCLEtBQUssQ0FBQyxDQUFDLGlCQUFpQixFQUFFVCxXQUFXLGlCQUFpQixFQUFFRSxxQkFBcUIsa0JBQWtCLENBQUM7SUFDMUc7SUFFQVEsc0JBQXNCQyxjQUFjLEVBQUUxQixPQUFPLEVBQUU7UUFDN0MsSUFBSTJCO1FBRUosTUFBTUMsa0JBQWtCLElBQUksRUFDdEJDLGtCQUFrQkgsZ0JBQWdCLEdBQUc7UUFFM0MsTUFBTUksd0JBQXdCRixnQkFBZ0JaLFNBQVMsSUFDakRlLHdCQUF3QkYsZ0JBQWdCYixTQUFTO1FBRXZEaEIsUUFBUWtCLEtBQUssQ0FBQyxDQUFDLGVBQWUsRUFBRVksc0JBQXNCLDRCQUE0QixFQUFFQyxzQkFBc0Isb0JBQW9CLENBQUM7UUFFL0gsTUFBTTNCLE9BQU9zQixlQUFlbkIsT0FBTyxJQUM3QkosT0FBT3VCLGVBQWVwQixPQUFPO1FBRW5DcUIseUJBQTBCLEFBQUMsSUFBSSxDQUFDdkIsSUFBSSxLQUFLQSxRQUFVLElBQUksQ0FBQ0QsSUFBSSxLQUFLQTtRQUVqRSxJQUFJd0Isd0JBQXdCO1lBQzFCM0IsUUFBUXdCLEtBQUssQ0FBQyxDQUFDLGlCQUFpQixFQUFFTSxzQkFBc0IsNEJBQTRCLEVBQUVDLHNCQUFzQixrQkFBa0IsQ0FBQztRQUNqSTtRQUVBLE9BQU9KO0lBQ1Q7SUFFQSxPQUFPdkIsT0FBTyxpQkFBaUI7QUFDakMifQ==