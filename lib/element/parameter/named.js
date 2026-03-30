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
    constructor(context, string, node, lineIndex, type, name, alias){
        super(context, string, node, lineIndex);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L3BhcmFtZXRlci9uYW1lZC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgRWxlbWVudCB9IGZyb20gXCJvY2NhbS1sYW5ndWFnZXNcIjtcblxuaW1wb3J0IEV4Y2VwdGlvbiBmcm9tIFwiLi4vLi4vZXhjZXB0aW9uXCI7XG5cbmltcG9ydCB7IGRlZmluZSB9IGZyb20gXCIuLi8uLi9lbGVtZW50c1wiO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmUoY2xhc3MgTmFtZWRQYXJhbWV0ZXIgZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgc3RyaW5nLCBub2RlLCBsaW5lSW5kZXgsIHR5cGUsIG5hbWUsIGFsaWFzKSB7XG4gICAgc3VwZXIoY29udGV4dCwgc3RyaW5nLCBub2RlLCBsaW5lSW5kZXgpXG5cbiAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5hbGlhcyA9IGFsaWFzO1xuICB9XG5cbiAgZ2V0VHlwZSgpIHtcbiAgICByZXR1cm4gdGhpcy50eXBlO1xuICB9XG5cbiAgZ2V0TmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5uYW1lO1xuICB9XG5cbiAgZ2V0QWxpYXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuYWxpYXM7XG4gIH1cblxuICBpc0FsaWFzZWQoKSB7XG4gICAgY29uc3QgYWxpYXNlZCA9ICh0aGlzLmFsaWFzICE9PSBudWxsKTtcblxuICAgIHJldHVybiBhbGlhc2VkO1xuICB9XG5cbiAgZ2V0QWxpYXNlZE5hbWUoKSB7XG4gICAgY29uc3QgYWxpYXNlZCA9IHRoaXMuaXNBbGlhc2VkKCksXG4gICAgICAgICAgYWxpYXNlZE5hbWUgPSBhbGlhc2VkID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hbGlhcyA6ICAvLy9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm5hbWU7IC8vL1xuXG4gICAgcmV0dXJuIGFsaWFzZWROYW1lO1xuICB9XG5cbiAgY29tcGFyZVRlcm0odGVybSwgY29udGV4dCkge1xuICAgIGNvbnN0IHRlcm1TdHJpbmcgPSB0ZXJtLmdldFN0cmluZygpLFxuICAgICAgICAgIG5hbWVkUGFyYW1ldGVyU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgQ29tcGFyaW5nIHRoZSAnJHt0ZXJtU3RyaW5nfScgdGVybSB3aXRoIHRoZSAnJHtuYW1lZFBhcmFtZXRlclN0cmluZ30nIG5hbWVkIHBhcmFtZXRlci4uLmApO1xuXG4gICAgY29uc3QgdGVybVR5cGUgPSB0ZXJtLmdldFR5cGUoKTtcblxuICAgIGlmICh0aGlzLnR5cGUgIT09IHRlcm1UeXBlKSB7XG4gICAgICBjb25zdCBtZXNzYWdlID0gYFRoZSAnJHt0ZXJtU3RyaW5nfScgdGVybSdzICcke3Rlcm1UeXBlfScgdHlwZSBpcyBub3QgZXF1YWwgdG8gJyR7bmFtZWRQYXJhbWV0ZXJTdHJpbmd9JyBuYW1lZCBwYXJhbWV0ZXIncyAnJHt0aGlzLnR5cGV9JyB0eXBlLmAsXG4gICAgICAgICAgICBleGNlcHRpb24gPSBFeGNlcHRpb24uZnJvbU1lc3NhZ2UobWVzc2FnZSk7XG5cbiAgICAgIHRocm93IGV4Y2VwdGlvbjtcbiAgICB9XG5cbiAgICBjb250ZXh0LmRlYnVnKGAuLi5jb21wYXJlZCB0aGUgJyR7dGVybVN0cmluZ30nIHRlcm0gd2l0aCB0aGUgJyR7bmFtZWRQYXJhbWV0ZXJTdHJpbmd9JyBuYW1lZCBwYXJhbWV0ZXIuYCk7XG4gIH1cblxuICBjb21wYXJlTmFtZWRQYXJhbWV0ZXIobmFtZWRQYXJhbWV0ZXIsIGNvbnRleHQpIHtcbiAgICBsZXQgbmFtZWRQYXJhbWV0ZXJDb21wYXJlcztcblxuICAgIGNvbnN0IG5hbWVkUGFyYW1ldGVyQSA9IHRoaXMsICAvLy9cbiAgICAgICAgICBuYW1lZFBhcmFtZXRlckIgPSBuYW1lZFBhcmFtZXRlcjsgLy8vXG5cbiAgICBjb25zdCBuYW1lZFBhcmFtZXRlckFTdHJpbmcgPSBuYW1lZFBhcmFtZXRlckEuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgbmFtZWRQYXJhbWV0ZXJCU3RyaW5nID0gbmFtZWRQYXJhbWV0ZXJCLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgQ29tcGFyaW5nIHRoZSAnJHtuYW1lZFBhcmFtZXRlckFTdHJpbmd9JyBuYW1lZCBwYXJhbWV0ZXIgd2l0aCB0aGUgJyR7bmFtZWRQYXJhbWV0ZXJCU3RyaW5nfScgbmFtZWQgcGFyYW1ldGVyLi4uYCk7XG5cbiAgICBjb25zdCBuYW1lID0gbmFtZWRQYXJhbWV0ZXIuZ2V0TmFtZSgpLFxuICAgICAgICAgIHR5cGUgPSBuYW1lZFBhcmFtZXRlci5nZXRUeXBlKCk7XG5cbiAgICBuYW1lZFBhcmFtZXRlckNvbXBhcmVzID0gKCh0aGlzLm5hbWUgPT09IG5hbWUpICYmICh0aGlzLnR5cGUgPT09IHR5cGUpKTtcblxuICAgIGlmIChuYW1lZFBhcmFtZXRlckNvbXBhcmVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi5jb21wYXJlZCB0aGUgJyR7bmFtZWRQYXJhbWV0ZXJBU3RyaW5nfScgbmFtZWQgcGFyYW1ldGVyIHdpdGggdGhlICcke25hbWVkUGFyYW1ldGVyQlN0cmluZ30nIG5hbWVkIHBhcmFtZXRlci5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbmFtZWRQYXJhbWV0ZXJDb21wYXJlcztcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJOYW1lZFBhcmFtZXRlclwiO1xufSk7XG4iXSwibmFtZXMiOlsiZGVmaW5lIiwiTmFtZWRQYXJhbWV0ZXIiLCJFbGVtZW50IiwiY29udGV4dCIsInN0cmluZyIsIm5vZGUiLCJsaW5lSW5kZXgiLCJ0eXBlIiwibmFtZSIsImFsaWFzIiwiZ2V0VHlwZSIsImdldE5hbWUiLCJnZXRBbGlhcyIsImlzQWxpYXNlZCIsImFsaWFzZWQiLCJnZXRBbGlhc2VkTmFtZSIsImFsaWFzZWROYW1lIiwiY29tcGFyZVRlcm0iLCJ0ZXJtIiwidGVybVN0cmluZyIsImdldFN0cmluZyIsIm5hbWVkUGFyYW1ldGVyU3RyaW5nIiwidHJhY2UiLCJ0ZXJtVHlwZSIsIm1lc3NhZ2UiLCJleGNlcHRpb24iLCJFeGNlcHRpb24iLCJmcm9tTWVzc2FnZSIsImRlYnVnIiwiY29tcGFyZU5hbWVkUGFyYW1ldGVyIiwibmFtZWRQYXJhbWV0ZXIiLCJuYW1lZFBhcmFtZXRlckNvbXBhcmVzIiwibmFtZWRQYXJhbWV0ZXJBIiwibmFtZWRQYXJhbWV0ZXJCIiwibmFtZWRQYXJhbWV0ZXJBU3RyaW5nIiwibmFtZWRQYXJhbWV0ZXJCU3RyaW5nIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFRQTs7O2VBQUE7OztnQ0FOd0I7a0VBRUY7MEJBRUM7Ozs7OztNQUV2QixXQUFlQSxJQUFBQSxnQkFBTSxFQUFDLE1BQU1DLHVCQUF1QkMsdUJBQU87SUFDeEQsWUFBWUMsT0FBTyxFQUFFQyxNQUFNLEVBQUVDLElBQUksRUFBRUMsU0FBUyxFQUFFQyxJQUFJLEVBQUVDLElBQUksRUFBRUMsS0FBSyxDQUFFO1FBQy9ELEtBQUssQ0FBQ04sU0FBU0MsUUFBUUMsTUFBTUM7UUFFN0IsSUFBSSxDQUFDQyxJQUFJLEdBQUdBO1FBQ1osSUFBSSxDQUFDQyxJQUFJLEdBQUdBO1FBQ1osSUFBSSxDQUFDQyxLQUFLLEdBQUdBO0lBQ2Y7SUFFQUMsVUFBVTtRQUNSLE9BQU8sSUFBSSxDQUFDSCxJQUFJO0lBQ2xCO0lBRUFJLFVBQVU7UUFDUixPQUFPLElBQUksQ0FBQ0gsSUFBSTtJQUNsQjtJQUVBSSxXQUFXO1FBQ1QsT0FBTyxJQUFJLENBQUNILEtBQUs7SUFDbkI7SUFFQUksWUFBWTtRQUNWLE1BQU1DLFVBQVcsSUFBSSxDQUFDTCxLQUFLLEtBQUs7UUFFaEMsT0FBT0s7SUFDVDtJQUVBQyxpQkFBaUI7UUFDZixNQUFNRCxVQUFVLElBQUksQ0FBQ0QsU0FBUyxJQUN4QkcsY0FBY0YsVUFDRSxJQUFJLENBQUNMLEtBQUssR0FDUixJQUFJLENBQUNELElBQUksRUFBRSxHQUFHO1FBRXRDLE9BQU9RO0lBQ1Q7SUFFQUMsWUFBWUMsSUFBSSxFQUFFZixPQUFPLEVBQUU7UUFDekIsTUFBTWdCLGFBQWFELEtBQUtFLFNBQVMsSUFDM0JDLHVCQUF1QixJQUFJLENBQUNELFNBQVMsSUFBSyxHQUFHO1FBRW5EakIsUUFBUW1CLEtBQUssQ0FBQyxDQUFDLGVBQWUsRUFBRUgsV0FBVyxpQkFBaUIsRUFBRUUscUJBQXFCLG9CQUFvQixDQUFDO1FBRXhHLE1BQU1FLFdBQVdMLEtBQUtSLE9BQU87UUFFN0IsSUFBSSxJQUFJLENBQUNILElBQUksS0FBS2dCLFVBQVU7WUFDMUIsTUFBTUMsVUFBVSxDQUFDLEtBQUssRUFBRUwsV0FBVyxVQUFVLEVBQUVJLFNBQVMsd0JBQXdCLEVBQUVGLHFCQUFxQixxQkFBcUIsRUFBRSxJQUFJLENBQUNkLElBQUksQ0FBQyxPQUFPLENBQUMsRUFDMUlrQixZQUFZQyxrQkFBUyxDQUFDQyxXQUFXLENBQUNIO1lBRXhDLE1BQU1DO1FBQ1I7UUFFQXRCLFFBQVF5QixLQUFLLENBQUMsQ0FBQyxpQkFBaUIsRUFBRVQsV0FBVyxpQkFBaUIsRUFBRUUscUJBQXFCLGtCQUFrQixDQUFDO0lBQzFHO0lBRUFRLHNCQUFzQkMsY0FBYyxFQUFFM0IsT0FBTyxFQUFFO1FBQzdDLElBQUk0QjtRQUVKLE1BQU1DLGtCQUFrQixJQUFJLEVBQ3RCQyxrQkFBa0JILGdCQUFnQixHQUFHO1FBRTNDLE1BQU1JLHdCQUF3QkYsZ0JBQWdCWixTQUFTLElBQ2pEZSx3QkFBd0JGLGdCQUFnQmIsU0FBUztRQUV2RGpCLFFBQVFtQixLQUFLLENBQUMsQ0FBQyxlQUFlLEVBQUVZLHNCQUFzQiw0QkFBNEIsRUFBRUMsc0JBQXNCLG9CQUFvQixDQUFDO1FBRS9ILE1BQU0zQixPQUFPc0IsZUFBZW5CLE9BQU8sSUFDN0JKLE9BQU91QixlQUFlcEIsT0FBTztRQUVuQ3FCLHlCQUEwQixBQUFDLElBQUksQ0FBQ3ZCLElBQUksS0FBS0EsUUFBVSxJQUFJLENBQUNELElBQUksS0FBS0E7UUFFakUsSUFBSXdCLHdCQUF3QjtZQUMxQjVCLFFBQVF5QixLQUFLLENBQUMsQ0FBQyxpQkFBaUIsRUFBRU0sc0JBQXNCLDRCQUE0QixFQUFFQyxzQkFBc0Isa0JBQWtCLENBQUM7UUFDakk7UUFFQSxPQUFPSjtJQUNUO0lBRUEsT0FBT3ZCLE9BQU8saUJBQWlCO0FBQ2pDIn0=