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
    constructor(context, string, node, breakPoint, type, name, alias){
        super(context, string, node, breakPoint);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L3BhcmFtZXRlci9uYW1lZC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgRWxlbWVudCB9IGZyb20gXCJvY2NhbS1sYW5ndWFnZXNcIjtcblxuaW1wb3J0IEV4Y2VwdGlvbiBmcm9tIFwiLi4vLi4vZXhjZXB0aW9uXCI7XG5cbmltcG9ydCB7IGRlZmluZSB9IGZyb20gXCIuLi8uLi9lbGVtZW50c1wiO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmUoY2xhc3MgTmFtZWRQYXJhbWV0ZXIgZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgc3RyaW5nLCBub2RlLCBicmVha1BvaW50LCB0eXBlLCBuYW1lLCBhbGlhcykge1xuICAgIHN1cGVyKGNvbnRleHQsIHN0cmluZywgbm9kZSwgYnJlYWtQb2ludCk7XG5cbiAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5hbGlhcyA9IGFsaWFzO1xuICB9XG5cbiAgZ2V0VHlwZSgpIHtcbiAgICByZXR1cm4gdGhpcy50eXBlO1xuICB9XG5cbiAgZ2V0TmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5uYW1lO1xuICB9XG5cbiAgZ2V0QWxpYXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuYWxpYXM7XG4gIH1cblxuICBpc0FsaWFzZWQoKSB7XG4gICAgY29uc3QgYWxpYXNlZCA9ICh0aGlzLmFsaWFzICE9PSBudWxsKTtcblxuICAgIHJldHVybiBhbGlhc2VkO1xuICB9XG5cbiAgZ2V0QWxpYXNlZE5hbWUoKSB7XG4gICAgY29uc3QgYWxpYXNlZCA9IHRoaXMuaXNBbGlhc2VkKCksXG4gICAgICAgICAgYWxpYXNlZE5hbWUgPSBhbGlhc2VkID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hbGlhcyA6ICAvLy9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm5hbWU7IC8vL1xuXG4gICAgcmV0dXJuIGFsaWFzZWROYW1lO1xuICB9XG5cbiAgY29tcGFyZVRlcm0odGVybSwgY29udGV4dCkge1xuICAgIGNvbnN0IHRlcm1TdHJpbmcgPSB0ZXJtLmdldFN0cmluZygpLFxuICAgICAgICAgIG5hbWVkUGFyYW1ldGVyU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgQ29tcGFyaW5nIHRoZSAnJHt0ZXJtU3RyaW5nfScgdGVybSB3aXRoIHRoZSAnJHtuYW1lZFBhcmFtZXRlclN0cmluZ30nIG5hbWVkIHBhcmFtZXRlci4uLmApO1xuXG4gICAgY29uc3QgdGVybVR5cGUgPSB0ZXJtLmdldFR5cGUoKTtcblxuICAgIGlmICh0aGlzLnR5cGUgIT09IHRlcm1UeXBlKSB7XG4gICAgICBjb25zdCBtZXNzYWdlID0gYFRoZSAnJHt0ZXJtU3RyaW5nfScgdGVybSdzICcke3Rlcm1UeXBlfScgdHlwZSBpcyBub3QgZXF1YWwgdG8gJyR7bmFtZWRQYXJhbWV0ZXJTdHJpbmd9JyBuYW1lZCBwYXJhbWV0ZXIncyAnJHt0aGlzLnR5cGV9JyB0eXBlLmAsXG4gICAgICAgICAgICBleGNlcHRpb24gPSBFeGNlcHRpb24uZnJvbU1lc3NhZ2UobWVzc2FnZSk7XG5cbiAgICAgIHRocm93IGV4Y2VwdGlvbjtcbiAgICB9XG5cbiAgICBjb250ZXh0LmRlYnVnKGAuLi5jb21wYXJlZCB0aGUgJyR7dGVybVN0cmluZ30nIHRlcm0gd2l0aCB0aGUgJyR7bmFtZWRQYXJhbWV0ZXJTdHJpbmd9JyBuYW1lZCBwYXJhbWV0ZXIuYCk7XG4gIH1cblxuICBjb21wYXJlTmFtZWRQYXJhbWV0ZXIobmFtZWRQYXJhbWV0ZXIsIGNvbnRleHQpIHtcbiAgICBsZXQgbmFtZWRQYXJhbWV0ZXJDb21wYXJlcztcblxuICAgIGNvbnN0IG5hbWVkUGFyYW1ldGVyQSA9IHRoaXMsICAvLy9cbiAgICAgICAgICBuYW1lZFBhcmFtZXRlckIgPSBuYW1lZFBhcmFtZXRlcjsgLy8vXG5cbiAgICBjb25zdCBuYW1lZFBhcmFtZXRlckFTdHJpbmcgPSBuYW1lZFBhcmFtZXRlckEuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgbmFtZWRQYXJhbWV0ZXJCU3RyaW5nID0gbmFtZWRQYXJhbWV0ZXJCLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgQ29tcGFyaW5nIHRoZSAnJHtuYW1lZFBhcmFtZXRlckFTdHJpbmd9JyBuYW1lZCBwYXJhbWV0ZXIgd2l0aCB0aGUgJyR7bmFtZWRQYXJhbWV0ZXJCU3RyaW5nfScgbmFtZWQgcGFyYW1ldGVyLi4uYCk7XG5cbiAgICBjb25zdCBuYW1lID0gbmFtZWRQYXJhbWV0ZXIuZ2V0TmFtZSgpLFxuICAgICAgICAgIHR5cGUgPSBuYW1lZFBhcmFtZXRlci5nZXRUeXBlKCk7XG5cbiAgICBuYW1lZFBhcmFtZXRlckNvbXBhcmVzID0gKCh0aGlzLm5hbWUgPT09IG5hbWUpICYmICh0aGlzLnR5cGUgPT09IHR5cGUpKTtcblxuICAgIGlmIChuYW1lZFBhcmFtZXRlckNvbXBhcmVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi5jb21wYXJlZCB0aGUgJyR7bmFtZWRQYXJhbWV0ZXJBU3RyaW5nfScgbmFtZWQgcGFyYW1ldGVyIHdpdGggdGhlICcke25hbWVkUGFyYW1ldGVyQlN0cmluZ30nIG5hbWVkIHBhcmFtZXRlci5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbmFtZWRQYXJhbWV0ZXJDb21wYXJlcztcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJOYW1lZFBhcmFtZXRlclwiO1xufSk7XG4iXSwibmFtZXMiOlsiZGVmaW5lIiwiTmFtZWRQYXJhbWV0ZXIiLCJFbGVtZW50IiwiY29udGV4dCIsInN0cmluZyIsIm5vZGUiLCJicmVha1BvaW50IiwidHlwZSIsIm5hbWUiLCJhbGlhcyIsImdldFR5cGUiLCJnZXROYW1lIiwiZ2V0QWxpYXMiLCJpc0FsaWFzZWQiLCJhbGlhc2VkIiwiZ2V0QWxpYXNlZE5hbWUiLCJhbGlhc2VkTmFtZSIsImNvbXBhcmVUZXJtIiwidGVybSIsInRlcm1TdHJpbmciLCJnZXRTdHJpbmciLCJuYW1lZFBhcmFtZXRlclN0cmluZyIsInRyYWNlIiwidGVybVR5cGUiLCJtZXNzYWdlIiwiZXhjZXB0aW9uIiwiRXhjZXB0aW9uIiwiZnJvbU1lc3NhZ2UiLCJkZWJ1ZyIsImNvbXBhcmVOYW1lZFBhcmFtZXRlciIsIm5hbWVkUGFyYW1ldGVyIiwibmFtZWRQYXJhbWV0ZXJDb21wYXJlcyIsIm5hbWVkUGFyYW1ldGVyQSIsIm5hbWVkUGFyYW1ldGVyQiIsIm5hbWVkUGFyYW1ldGVyQVN0cmluZyIsIm5hbWVkUGFyYW1ldGVyQlN0cmluZyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBUUE7OztlQUFBOzs7Z0NBTndCO2tFQUVGOzBCQUVDOzs7Ozs7TUFFdkIsV0FBZUEsSUFBQUEsZ0JBQU0sRUFBQyxNQUFNQyx1QkFBdUJDLHVCQUFPO0lBQ3hELFlBQVlDLE9BQU8sRUFBRUMsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLFVBQVUsRUFBRUMsSUFBSSxFQUFFQyxJQUFJLEVBQUVDLEtBQUssQ0FBRTtRQUNoRSxLQUFLLENBQUNOLFNBQVNDLFFBQVFDLE1BQU1DO1FBRTdCLElBQUksQ0FBQ0MsSUFBSSxHQUFHQTtRQUNaLElBQUksQ0FBQ0MsSUFBSSxHQUFHQTtRQUNaLElBQUksQ0FBQ0MsS0FBSyxHQUFHQTtJQUNmO0lBRUFDLFVBQVU7UUFDUixPQUFPLElBQUksQ0FBQ0gsSUFBSTtJQUNsQjtJQUVBSSxVQUFVO1FBQ1IsT0FBTyxJQUFJLENBQUNILElBQUk7SUFDbEI7SUFFQUksV0FBVztRQUNULE9BQU8sSUFBSSxDQUFDSCxLQUFLO0lBQ25CO0lBRUFJLFlBQVk7UUFDVixNQUFNQyxVQUFXLElBQUksQ0FBQ0wsS0FBSyxLQUFLO1FBRWhDLE9BQU9LO0lBQ1Q7SUFFQUMsaUJBQWlCO1FBQ2YsTUFBTUQsVUFBVSxJQUFJLENBQUNELFNBQVMsSUFDeEJHLGNBQWNGLFVBQ0UsSUFBSSxDQUFDTCxLQUFLLEdBQ1IsSUFBSSxDQUFDRCxJQUFJLEVBQUUsR0FBRztRQUV0QyxPQUFPUTtJQUNUO0lBRUFDLFlBQVlDLElBQUksRUFBRWYsT0FBTyxFQUFFO1FBQ3pCLE1BQU1nQixhQUFhRCxLQUFLRSxTQUFTLElBQzNCQyx1QkFBdUIsSUFBSSxDQUFDRCxTQUFTLElBQUssR0FBRztRQUVuRGpCLFFBQVFtQixLQUFLLENBQUMsQ0FBQyxlQUFlLEVBQUVILFdBQVcsaUJBQWlCLEVBQUVFLHFCQUFxQixvQkFBb0IsQ0FBQztRQUV4RyxNQUFNRSxXQUFXTCxLQUFLUixPQUFPO1FBRTdCLElBQUksSUFBSSxDQUFDSCxJQUFJLEtBQUtnQixVQUFVO1lBQzFCLE1BQU1DLFVBQVUsQ0FBQyxLQUFLLEVBQUVMLFdBQVcsVUFBVSxFQUFFSSxTQUFTLHdCQUF3QixFQUFFRixxQkFBcUIscUJBQXFCLEVBQUUsSUFBSSxDQUFDZCxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQzFJa0IsWUFBWUMsa0JBQVMsQ0FBQ0MsV0FBVyxDQUFDSDtZQUV4QyxNQUFNQztRQUNSO1FBRUF0QixRQUFReUIsS0FBSyxDQUFDLENBQUMsaUJBQWlCLEVBQUVULFdBQVcsaUJBQWlCLEVBQUVFLHFCQUFxQixrQkFBa0IsQ0FBQztJQUMxRztJQUVBUSxzQkFBc0JDLGNBQWMsRUFBRTNCLE9BQU8sRUFBRTtRQUM3QyxJQUFJNEI7UUFFSixNQUFNQyxrQkFBa0IsSUFBSSxFQUN0QkMsa0JBQWtCSCxnQkFBZ0IsR0FBRztRQUUzQyxNQUFNSSx3QkFBd0JGLGdCQUFnQlosU0FBUyxJQUNqRGUsd0JBQXdCRixnQkFBZ0JiLFNBQVM7UUFFdkRqQixRQUFRbUIsS0FBSyxDQUFDLENBQUMsZUFBZSxFQUFFWSxzQkFBc0IsNEJBQTRCLEVBQUVDLHNCQUFzQixvQkFBb0IsQ0FBQztRQUUvSCxNQUFNM0IsT0FBT3NCLGVBQWVuQixPQUFPLElBQzdCSixPQUFPdUIsZUFBZXBCLE9BQU87UUFFbkNxQix5QkFBMEIsQUFBQyxJQUFJLENBQUN2QixJQUFJLEtBQUtBLFFBQVUsSUFBSSxDQUFDRCxJQUFJLEtBQUtBO1FBRWpFLElBQUl3Qix3QkFBd0I7WUFDMUI1QixRQUFReUIsS0FBSyxDQUFDLENBQUMsaUJBQWlCLEVBQUVNLHNCQUFzQiw0QkFBNEIsRUFBRUMsc0JBQXNCLGtCQUFrQixDQUFDO1FBQ2pJO1FBRUEsT0FBT0o7SUFDVDtJQUVBLE9BQU92QixPQUFPLGlCQUFpQjtBQUNqQyJ9