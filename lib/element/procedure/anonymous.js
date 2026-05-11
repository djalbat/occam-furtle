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
const _parameters = require("../../utilities/parameters");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const _default = (0, _elements.define)(class AnonymousProcedure extends _occamlanguages.Element {
    constructor(context, string, node, breakPoint, type, parameters, returnBlock){
        super(context, string, node, breakPoint);
        this.type = type;
        this.parameters = parameters;
        this.returnBlock = returnBlock;
    }
    getType() {
        return this.type;
    }
    getParameters() {
        return this.parameters;
    }
    getReturnBlock() {
        return this.returnBlock;
    }
    async call(values, context) {
        const anonymousProcedureString = this.getString(); ///
        context.trace(`Calling the '${anonymousProcedureString}' anonymous procedure...`);
        this.parameters.compareValues(values, context);
        const variables = (0, _parameters.variablesFromValuesAndParameters)(values, this.parameters, context), value = await this.returnBlock.evaluate(variables, context), valueType = value.getType();
        if (this.type !== valueType) {
            const valueString = value.getString(), message = `The '${valueString}' value's '${valueType}' type is not equal to the '${anonymousProcedureString}' anonymous procedure's '${this.type}' type.`, exception = _exception.default.fromMessage(message);
            throw exception;
        }
        context.debug(`...called the '${anonymousProcedureString}' anonymous procedure.`);
        return value;
    }
    static name = "AnonymousProcedure";
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L3Byb2NlZHVyZS9hbm9ueW1vdXMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwib2NjYW0tbGFuZ3VhZ2VzXCI7XG5cbmltcG9ydCBFeGNlcHRpb24gZnJvbSBcIi4uLy4uL2V4Y2VwdGlvblwiO1xuXG5pbXBvcnQgeyBkZWZpbmUgfSBmcm9tIFwiLi4vLi4vZWxlbWVudHNcIjtcbmltcG9ydCB7IHZhcmlhYmxlc0Zyb21WYWx1ZXNBbmRQYXJhbWV0ZXJzIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9wYXJhbWV0ZXJzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZShjbGFzcyBBbm9ueW1vdXNQcm9jZWR1cmUgZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgc3RyaW5nLCBub2RlLCBicmVha1BvaW50LCB0eXBlLCBwYXJhbWV0ZXJzLCByZXR1cm5CbG9jaykge1xuICAgIHN1cGVyKGNvbnRleHQsIHN0cmluZywgbm9kZSwgYnJlYWtQb2ludCk7XG5cbiAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICAgIHRoaXMucGFyYW1ldGVycyA9IHBhcmFtZXRlcnM7XG4gICAgdGhpcy5yZXR1cm5CbG9jayA9IHJldHVybkJsb2NrO1xuICB9XG5cbiAgZ2V0VHlwZSgpIHtcbiAgICByZXR1cm4gdGhpcy50eXBlO1xuICB9XG5cbiAgZ2V0UGFyYW1ldGVycygpIHtcbiAgICByZXR1cm4gdGhpcy5wYXJhbWV0ZXJzO1xuICB9XG5cbiAgZ2V0UmV0dXJuQmxvY2soKSB7XG4gICAgcmV0dXJuIHRoaXMucmV0dXJuQmxvY2s7XG4gIH1cblxuICBhc3luYyBjYWxsKHZhbHVlcywgY29udGV4dCkge1xuICAgIGNvbnN0IGFub255bW91c1Byb2NlZHVyZVN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgQ2FsbGluZyB0aGUgJyR7YW5vbnltb3VzUHJvY2VkdXJlU3RyaW5nfScgYW5vbnltb3VzIHByb2NlZHVyZS4uLmApO1xuXG4gICAgdGhpcy5wYXJhbWV0ZXJzLmNvbXBhcmVWYWx1ZXModmFsdWVzLCBjb250ZXh0KTtcblxuICAgIGNvbnN0IHZhcmlhYmxlcyA9IHZhcmlhYmxlc0Zyb21WYWx1ZXNBbmRQYXJhbWV0ZXJzKHZhbHVlcywgdGhpcy5wYXJhbWV0ZXJzLCBjb250ZXh0KSxcbiAgICAgICAgICB2YWx1ZSA9IGF3YWl0IHRoaXMucmV0dXJuQmxvY2suZXZhbHVhdGUodmFyaWFibGVzLCBjb250ZXh0KSxcbiAgICAgICAgICB2YWx1ZVR5cGUgPSB2YWx1ZS5nZXRUeXBlKCk7XG5cbiAgICBpZiAodGhpcy50eXBlICE9PSB2YWx1ZVR5cGUpIHtcbiAgICAgIGNvbnN0IHZhbHVlU3RyaW5nID0gdmFsdWUuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgICBtZXNzYWdlID0gYFRoZSAnJHt2YWx1ZVN0cmluZ30nIHZhbHVlJ3MgJyR7dmFsdWVUeXBlfScgdHlwZSBpcyBub3QgZXF1YWwgdG8gdGhlICcke2Fub255bW91c1Byb2NlZHVyZVN0cmluZ30nIGFub255bW91cyBwcm9jZWR1cmUncyAnJHt0aGlzLnR5cGV9JyB0eXBlLmAsXG4gICAgICAgICAgICBleGNlcHRpb24gPSBFeGNlcHRpb24uZnJvbU1lc3NhZ2UobWVzc2FnZSk7XG5cbiAgICAgIHRocm93IGV4Y2VwdGlvbjtcbiAgICB9XG5cbiAgICBjb250ZXh0LmRlYnVnKGAuLi5jYWxsZWQgdGhlICcke2Fub255bW91c1Byb2NlZHVyZVN0cmluZ30nIGFub255bW91cyBwcm9jZWR1cmUuYCk7XG5cbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiQW5vbnltb3VzUHJvY2VkdXJlXCI7XG59KTtcbiJdLCJuYW1lcyI6WyJkZWZpbmUiLCJBbm9ueW1vdXNQcm9jZWR1cmUiLCJFbGVtZW50IiwiY29udGV4dCIsInN0cmluZyIsIm5vZGUiLCJicmVha1BvaW50IiwidHlwZSIsInBhcmFtZXRlcnMiLCJyZXR1cm5CbG9jayIsImdldFR5cGUiLCJnZXRQYXJhbWV0ZXJzIiwiZ2V0UmV0dXJuQmxvY2siLCJjYWxsIiwidmFsdWVzIiwiYW5vbnltb3VzUHJvY2VkdXJlU3RyaW5nIiwiZ2V0U3RyaW5nIiwidHJhY2UiLCJjb21wYXJlVmFsdWVzIiwidmFyaWFibGVzIiwidmFyaWFibGVzRnJvbVZhbHVlc0FuZFBhcmFtZXRlcnMiLCJ2YWx1ZSIsImV2YWx1YXRlIiwidmFsdWVUeXBlIiwidmFsdWVTdHJpbmciLCJtZXNzYWdlIiwiZXhjZXB0aW9uIiwiRXhjZXB0aW9uIiwiZnJvbU1lc3NhZ2UiLCJkZWJ1ZyIsIm5hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVNBOzs7ZUFBQTs7O2dDQVB3QjtrRUFFRjswQkFFQzs0QkFDMEI7Ozs7OztNQUVqRCxXQUFlQSxJQUFBQSxnQkFBTSxFQUFDLE1BQU1DLDJCQUEyQkMsdUJBQU87SUFDNUQsWUFBWUMsT0FBTyxFQUFFQyxNQUFNLEVBQUVDLElBQUksRUFBRUMsVUFBVSxFQUFFQyxJQUFJLEVBQUVDLFVBQVUsRUFBRUMsV0FBVyxDQUFFO1FBQzVFLEtBQUssQ0FBQ04sU0FBU0MsUUFBUUMsTUFBTUM7UUFFN0IsSUFBSSxDQUFDQyxJQUFJLEdBQUdBO1FBQ1osSUFBSSxDQUFDQyxVQUFVLEdBQUdBO1FBQ2xCLElBQUksQ0FBQ0MsV0FBVyxHQUFHQTtJQUNyQjtJQUVBQyxVQUFVO1FBQ1IsT0FBTyxJQUFJLENBQUNILElBQUk7SUFDbEI7SUFFQUksZ0JBQWdCO1FBQ2QsT0FBTyxJQUFJLENBQUNILFVBQVU7SUFDeEI7SUFFQUksaUJBQWlCO1FBQ2YsT0FBTyxJQUFJLENBQUNILFdBQVc7SUFDekI7SUFFQSxNQUFNSSxLQUFLQyxNQUFNLEVBQUVYLE9BQU8sRUFBRTtRQUMxQixNQUFNWSwyQkFBMkIsSUFBSSxDQUFDQyxTQUFTLElBQUksR0FBRztRQUV0RGIsUUFBUWMsS0FBSyxDQUFDLENBQUMsYUFBYSxFQUFFRix5QkFBeUIsd0JBQXdCLENBQUM7UUFFaEYsSUFBSSxDQUFDUCxVQUFVLENBQUNVLGFBQWEsQ0FBQ0osUUFBUVg7UUFFdEMsTUFBTWdCLFlBQVlDLElBQUFBLDRDQUFnQyxFQUFDTixRQUFRLElBQUksQ0FBQ04sVUFBVSxFQUFFTCxVQUN0RWtCLFFBQVEsTUFBTSxJQUFJLENBQUNaLFdBQVcsQ0FBQ2EsUUFBUSxDQUFDSCxXQUFXaEIsVUFDbkRvQixZQUFZRixNQUFNWCxPQUFPO1FBRS9CLElBQUksSUFBSSxDQUFDSCxJQUFJLEtBQUtnQixXQUFXO1lBQzNCLE1BQU1DLGNBQWNILE1BQU1MLFNBQVMsSUFDN0JTLFVBQVUsQ0FBQyxLQUFLLEVBQUVELFlBQVksV0FBVyxFQUFFRCxVQUFVLDRCQUE0QixFQUFFUix5QkFBeUIseUJBQXlCLEVBQUUsSUFBSSxDQUFDUixJQUFJLENBQUMsT0FBTyxDQUFDLEVBQ3pKbUIsWUFBWUMsa0JBQVMsQ0FBQ0MsV0FBVyxDQUFDSDtZQUV4QyxNQUFNQztRQUNSO1FBRUF2QixRQUFRMEIsS0FBSyxDQUFDLENBQUMsZUFBZSxFQUFFZCx5QkFBeUIsc0JBQXNCLENBQUM7UUFFaEYsT0FBT007SUFDVDtJQUVBLE9BQU9TLE9BQU8scUJBQXFCO0FBQ3JDIn0=