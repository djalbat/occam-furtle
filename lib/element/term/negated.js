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
const _types = require("../../types");
const _value = require("../../utilities/value");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const _default = (0, _elements.define)(class NegatedTerm extends _occamlanguages.Element {
    constructor(context, string, node, breakPoint, type, term){
        super(context, string, node, breakPoint);
        this.type = type;
        this.term = term;
    }
    getType() {
        return this.type;
    }
    getTerm() {
        return this.term;
    }
    evaluate(context) {
        let value;
        const negatedTermString = this.getString(); ///
        context.trace(`Evaluating the '${negatedTermString}' negated value...`);
        value = this.term.evaluate(context);
        const valueType = value.getType();
        if (valueType !== _types.BOOLEAN_TYPE) {
            const valueString = value.getString(), message = `The '${valueString}' left value's type is '${valueType}' when it should be of type '${_types.BOOLEAN_TYPE}'.`, exception = _exception.default.fromMessage(message);
            throw exception;
        }
        let boolean;
        const primitiveValue = value.getPrimitiveValue();
        boolean = primitiveValue; ///
        boolean = !boolean;
        value = (0, _value.valueFromBoolean)(boolean, context);
        const valueString = value.getString();
        context.debug(`...evaluated the '${negatedTermString}' negated value as '${valueString}'.`);
        return value;
    }
    static name = "NegatedTerm";
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L3Rlcm0vbmVnYXRlZC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgRWxlbWVudCB9IGZyb20gXCJvY2NhbS1sYW5ndWFnZXNcIjtcblxuaW1wb3J0IEV4Y2VwdGlvbiBmcm9tIFwiLi4vLi4vZXhjZXB0aW9uXCI7XG5cbmltcG9ydCB7IGRlZmluZSB9IGZyb20gXCIuLi8uLi9lbGVtZW50c1wiO1xuaW1wb3J0IHsgQk9PTEVBTl9UWVBFIH0gZnJvbSBcIi4uLy4uL3R5cGVzXCI7XG5pbXBvcnQgeyB2YWx1ZUZyb21Cb29sZWFuIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy92YWx1ZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmUoY2xhc3MgTmVnYXRlZFRlcm0gZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgc3RyaW5nLCBub2RlLCBicmVha1BvaW50LCB0eXBlLCB0ZXJtKSB7XG4gICAgc3VwZXIoY29udGV4dCwgc3RyaW5nLCBub2RlLCBicmVha1BvaW50KTtcblxuICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gICAgdGhpcy50ZXJtID0gdGVybTtcbiAgfVxuXG4gIGdldFR5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMudHlwZTtcbiAgfVxuXG4gIGdldFRlcm0oKSB7XG4gICAgcmV0dXJuIHRoaXMudGVybTtcbiAgfVxuXG4gIGV2YWx1YXRlKGNvbnRleHQpIHtcbiAgICBsZXQgdmFsdWU7XG5cbiAgICBjb25zdCBuZWdhdGVkVGVybVN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgRXZhbHVhdGluZyB0aGUgJyR7bmVnYXRlZFRlcm1TdHJpbmd9JyBuZWdhdGVkIHZhbHVlLi4uYCk7XG5cbiAgICB2YWx1ZSA9IHRoaXMudGVybS5ldmFsdWF0ZShjb250ZXh0KTtcblxuICAgIGNvbnN0IHZhbHVlVHlwZSA9IHZhbHVlLmdldFR5cGUoKTtcblxuICAgIGlmICh2YWx1ZVR5cGUgIT09IEJPT0xFQU5fVFlQRSkge1xuICAgICAgY29uc3QgdmFsdWVTdHJpbmcgPSB2YWx1ZS5nZXRTdHJpbmcoKSxcbiAgICAgICAgICAgIG1lc3NhZ2UgPSBgVGhlICcke3ZhbHVlU3RyaW5nfScgbGVmdCB2YWx1ZSdzIHR5cGUgaXMgJyR7dmFsdWVUeXBlfScgd2hlbiBpdCBzaG91bGQgYmUgb2YgdHlwZSAnJHtCT09MRUFOX1RZUEV9Jy5gLFxuICAgICAgICAgICAgZXhjZXB0aW9uID0gRXhjZXB0aW9uLmZyb21NZXNzYWdlKG1lc3NhZ2UpO1xuXG4gICAgICB0aHJvdyBleGNlcHRpb247XG4gICAgfVxuXG4gICAgbGV0IGJvb2xlYW47XG5cbiAgICBjb25zdCBwcmltaXRpdmVWYWx1ZSA9IHZhbHVlLmdldFByaW1pdGl2ZVZhbHVlKCk7XG5cbiAgICBib29sZWFuID0gcHJpbWl0aXZlVmFsdWU7IC8vL1xuXG4gICAgYm9vbGVhbiA9ICFib29sZWFuO1xuXG4gICAgdmFsdWUgPSB2YWx1ZUZyb21Cb29sZWFuKGJvb2xlYW4sIGNvbnRleHQpO1xuXG4gICAgY29uc3QgdmFsdWVTdHJpbmcgPSB2YWx1ZS5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQuZGVidWcoYC4uLmV2YWx1YXRlZCB0aGUgJyR7bmVnYXRlZFRlcm1TdHJpbmd9JyBuZWdhdGVkIHZhbHVlIGFzICcke3ZhbHVlU3RyaW5nfScuYCk7XG5cbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiTmVnYXRlZFRlcm1cIjtcbn0pO1xuIl0sIm5hbWVzIjpbImRlZmluZSIsIk5lZ2F0ZWRUZXJtIiwiRWxlbWVudCIsImNvbnRleHQiLCJzdHJpbmciLCJub2RlIiwiYnJlYWtQb2ludCIsInR5cGUiLCJ0ZXJtIiwiZ2V0VHlwZSIsImdldFRlcm0iLCJldmFsdWF0ZSIsInZhbHVlIiwibmVnYXRlZFRlcm1TdHJpbmciLCJnZXRTdHJpbmciLCJ0cmFjZSIsInZhbHVlVHlwZSIsIkJPT0xFQU5fVFlQRSIsInZhbHVlU3RyaW5nIiwibWVzc2FnZSIsImV4Y2VwdGlvbiIsIkV4Y2VwdGlvbiIsImZyb21NZXNzYWdlIiwiYm9vbGVhbiIsInByaW1pdGl2ZVZhbHVlIiwiZ2V0UHJpbWl0aXZlVmFsdWUiLCJ2YWx1ZUZyb21Cb29sZWFuIiwiZGVidWciLCJuYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFVQTs7O2VBQUE7OztnQ0FSd0I7a0VBRUY7MEJBRUM7dUJBQ007dUJBQ0k7Ozs7OztNQUVqQyxXQUFlQSxJQUFBQSxnQkFBTSxFQUFDLE1BQU1DLG9CQUFvQkMsdUJBQU87SUFDckQsWUFBWUMsT0FBTyxFQUFFQyxNQUFNLEVBQUVDLElBQUksRUFBRUMsVUFBVSxFQUFFQyxJQUFJLEVBQUVDLElBQUksQ0FBRTtRQUN6RCxLQUFLLENBQUNMLFNBQVNDLFFBQVFDLE1BQU1DO1FBRTdCLElBQUksQ0FBQ0MsSUFBSSxHQUFHQTtRQUNaLElBQUksQ0FBQ0MsSUFBSSxHQUFHQTtJQUNkO0lBRUFDLFVBQVU7UUFDUixPQUFPLElBQUksQ0FBQ0YsSUFBSTtJQUNsQjtJQUVBRyxVQUFVO1FBQ1IsT0FBTyxJQUFJLENBQUNGLElBQUk7SUFDbEI7SUFFQUcsU0FBU1IsT0FBTyxFQUFFO1FBQ2hCLElBQUlTO1FBRUosTUFBTUMsb0JBQW9CLElBQUksQ0FBQ0MsU0FBUyxJQUFJLEdBQUc7UUFFL0NYLFFBQVFZLEtBQUssQ0FBQyxDQUFDLGdCQUFnQixFQUFFRixrQkFBa0Isa0JBQWtCLENBQUM7UUFFdEVELFFBQVEsSUFBSSxDQUFDSixJQUFJLENBQUNHLFFBQVEsQ0FBQ1I7UUFFM0IsTUFBTWEsWUFBWUosTUFBTUgsT0FBTztRQUUvQixJQUFJTyxjQUFjQyxtQkFBWSxFQUFFO1lBQzlCLE1BQU1DLGNBQWNOLE1BQU1FLFNBQVMsSUFDN0JLLFVBQVUsQ0FBQyxLQUFLLEVBQUVELFlBQVksd0JBQXdCLEVBQUVGLFVBQVUsNkJBQTZCLEVBQUVDLG1CQUFZLENBQUMsRUFBRSxDQUFDLEVBQ2pIRyxZQUFZQyxrQkFBUyxDQUFDQyxXQUFXLENBQUNIO1lBRXhDLE1BQU1DO1FBQ1I7UUFFQSxJQUFJRztRQUVKLE1BQU1DLGlCQUFpQlosTUFBTWEsaUJBQWlCO1FBRTlDRixVQUFVQyxnQkFBZ0IsR0FBRztRQUU3QkQsVUFBVSxDQUFDQTtRQUVYWCxRQUFRYyxJQUFBQSx1QkFBZ0IsRUFBQ0gsU0FBU3BCO1FBRWxDLE1BQU1lLGNBQWNOLE1BQU1FLFNBQVM7UUFFbkNYLFFBQVF3QixLQUFLLENBQUMsQ0FBQyxrQkFBa0IsRUFBRWQsa0JBQWtCLG9CQUFvQixFQUFFSyxZQUFZLEVBQUUsQ0FBQztRQUUxRixPQUFPTjtJQUNUO0lBRUEsT0FBT2dCLE9BQU8sY0FBYztBQUM5QiJ9