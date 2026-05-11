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
const _elements = /*#__PURE__*/ _interop_require_wildcard(require("../../elements"));
const _exception = /*#__PURE__*/ _interop_require_default(require("../../exception"));
const _nodeProperties = /*#__PURE__*/ _interop_require_default(require("../../nodeProperties"));
const _stringLiteral = require("../../utilities/stringLiteral");
const _value = require("../../utilities/value");
const _term = require("../../utilities/term");
const _types = require("../../types");
const _parameterNames = require("../../parameterNames");
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
const _default = (0, _elements.define)(class ObjectAssigment extends _occamlanguages.Element {
    constructor(context, string, node, breakPoint, variable, namedBindings){
        super(context, string, node, breakPoint);
        this.variable = variable;
        this.namedBindings = namedBindings;
    }
    getVariable() {
        return this.variable;
    }
    getNamedBindings() {
        return this.namedBindings;
    }
    evaluate(context) {
        const objectAssignmentString = this.getString(); ///
        context.trace(`Evaluating the '${objectAssignmentString}' object assignment...`);
        const value = this.variable.evaluate(context), valueType = value.getType();
        if (valueType !== _types.NOMINAL_VALUE_TYPE) {
            const valueString = value.getString(), message = `The '${valueString}' value's '${valueType}' type should be '${_types.NOMINAL_VALUE_TYPE}'.`, exception = _exception.default.fromMessage(message);
            throw exception;
        }
        _nodeProperties.default.compareNamedBindings(this.namedBindings, context);
        this.namedBindings.forEachNamedBinding((namedBinding)=>{
            this.evaluateNamedBinding(namedBinding, value, context);
        });
        context.debug(`...evaluated the '${objectAssignmentString}' object assignment.`);
    }
    evaluateNamedBinding(namedBinding, term, context) {
        const termString = term.getString(), namedBindingString = namedBinding.getString();
        context.trace(`Evaluating the '${namedBindingString}' named binding against the '${termString}' term...`);
        const name = namedBinding.getName();
        switch(name){
            case _parameterNames.CONTENT_PARAMETER_NAME:
                {
                    term = this.evaluateContentNamedBinding(namedBinding, term, context);
                    break;
                }
            case _parameterNames.TERMINAL_PARAMETER_NAME:
                {
                    term = this.evaluateTerminalNamedBinding(namedBinding, term, context);
                    break;
                }
            case _parameterNames.CHILD_NODES_PARAMETER_NAME:
                {
                    term = this.evaluateChildNodesNamedBinding(namedBinding, term, context);
                    break;
                }
        }
        const { Variable } = _elements.default, variable = Variable.fromNamedBinding(namedBinding, context);
        variable.assign(term, context);
        context.debug(`...evaluated the '${namedBindingString}' parameter named against the '${termString}' term.`);
    }
    evaluateContentNamedBinding(namedBinding, term, context) {
        const type = namedBinding.getType(), namedBindingString = namedBinding.getString();
        context.trace(`Evaluating the content '${namedBindingString}' named binding...`);
        if (type !== _types.STRING_TYPE) {
            const namedBindingString = namedBinding.getString(), message = `The '${namedBindingString}' named binding's type should be '${_types.STRING_TYPE}'.`, exception = _exception.default.fromMessage(message);
            throw exception;
        }
        const primitiveValue = term.getPrimitiveValue(), nominalValue = primitiveValue, node = nominalValue.getNode(), nodeTerminalNode = node.isTerminalNode();
        if (!nodeTerminalNode) {
            const termString = term.getString(), message = `The '${termString}' term's node must be terminal.`, exception = _exception.default.fromMessage(message);
            throw exception;
        }
        const terminalNode = node, content = terminalNode.getContent(), string = content, stringLiteral = (0, _stringLiteral.stringLiteralFromString)(string);
        term = (0, _term.termFromStringLiteral)(stringLiteral, context);
        const termSttring = term.getString();
        context.debug(`...evaluated the content '${namedBindingString}' named binding as '${termSttring}'.`);
        return term;
    }
    evaluateTerminalNamedBinding(namedBinding, term, context) {
        const type = namedBinding.getType(), namedBindingString = namedBinding.getString();
        context.trace(`Evaluating the terminal '${namedBindingString}' named binding...`);
        if (type !== _types.BOOLEAN_TYPE) {
            const namedBindingString = namedBinding.getString(), message = `The '${namedBindingString}' named binding's type should be '${_types.BOOLEAN_TYPE}'.`, exception = _exception.default.fromMessage(message);
            throw exception;
        }
        const primitiveValue = term.getPrimitiveValue(), nominalValue = primitiveValue, node = nominalValue.getNode(), nodeTerminalNode = node.isTerminalNode(), terminal = nodeTerminalNode; ///
        const boolean = terminal; ///
        term = (0, _term.termFromBoolean)(boolean, context); ///
        const termSttring = term.getString();
        context.debug(`...evaluated the terminal '${namedBindingString}' named binding as '${termSttring}'.`);
        return term;
    }
    evaluateChildNodesNamedBinding(namedBinding, term, context) {
        const type = namedBinding.getType(), namedBindingString = namedBinding.getString();
        context.trace(`Evaluating the child nodes '${namedBindingString}' named binding...`);
        if (type !== _types.NOMINAL_VALUES_TYPE) {
            const namedBindingString = namedBinding.getString(), message = `The '${namedBindingString}' named binding's type should be '${_types.NOMINAL_VALUES_TYPE}'.`, exception = _exception.default.fromMessage(message);
            throw exception;
        }
        const primitiveValue = term.getPrimitiveValue(), nominalValue = primitiveValue, node = nominalValue.getNode(), nodeNonTerminalNode = node.isNonTerminalNode();
        if (!nodeNonTerminalNode) {
            const termString = term.getString(), message = `The '${termString}' term's node must be non-terminal.`, exception = _exception.default.fromMessage(message);
            throw exception;
        }
        const nonTerminalNode = node, childNodes = nonTerminalNode.getChildNodes(), nodes = childNodes, value = (0, _value.valueFromNodesAndNominalValue)(nodes, nominalValue), valueSttring = value.getString();
        context.debug(`...evaluated the childNodes '${namedBindingString}' named binding as '${valueSttring}'.`);
        return value;
    }
    static name = "ObjectAssigment";
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L2Fzc2lnbm1lbnQvb2JqZWN0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBFbGVtZW50IH0gZnJvbSBcIm9jY2FtLWxhbmd1YWdlc1wiO1xuXG5pbXBvcnQgZWxlbWVudHMgZnJvbSBcIi4uLy4uL2VsZW1lbnRzXCI7XG5pbXBvcnQgRXhjZXB0aW9uIGZyb20gXCIuLi8uLi9leGNlcHRpb25cIjtcbmltcG9ydCBub2RlUHJvcGVydGllcyBmcm9tIFwiLi4vLi4vbm9kZVByb3BlcnRpZXNcIjtcblxuaW1wb3J0IHsgZGVmaW5lIH0gZnJvbSBcIi4uLy4uL2VsZW1lbnRzXCI7XG5pbXBvcnQgeyBzdHJpbmdMaXRlcmFsRnJvbVN0cmluZyB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvc3RyaW5nTGl0ZXJhbFwiO1xuaW1wb3J0IHsgdmFsdWVGcm9tTm9kZXNBbmROb21pbmFsVmFsdWUgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL3ZhbHVlXCI7XG5pbXBvcnQgeyB0ZXJtRnJvbUJvb2xlYW4sIHRlcm1Gcm9tU3RyaW5nTGl0ZXJhbCB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvdGVybVwiO1xuaW1wb3J0IHsgU1RSSU5HX1RZUEUsIEJPT0xFQU5fVFlQRSwgTk9NSU5BTF9WQUxVRV9UWVBFLCBOT01JTkFMX1ZBTFVFU19UWVBFIH0gZnJvbSBcIi4uLy4uL3R5cGVzXCI7XG5pbXBvcnQgeyBDT05URU5UX1BBUkFNRVRFUl9OQU1FLCBURVJNSU5BTF9QQVJBTUVURVJfTkFNRSwgQ0hJTERfTk9ERVNfUEFSQU1FVEVSX05BTUUgfSBmcm9tIFwiLi4vLi4vcGFyYW1ldGVyTmFtZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lKGNsYXNzIE9iamVjdEFzc2lnbWVudCBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGJyZWFrUG9pbnQsIHZhcmlhYmxlLCBuYW1lZEJpbmRpbmdzKSB7XG4gICAgc3VwZXIoY29udGV4dCwgc3RyaW5nLCBub2RlLCBicmVha1BvaW50KTtcblxuICAgIHRoaXMudmFyaWFibGUgPSB2YXJpYWJsZTtcbiAgICB0aGlzLm5hbWVkQmluZGluZ3MgPSBuYW1lZEJpbmRpbmdzO1xuICB9XG5cbiAgZ2V0VmFyaWFibGUoKSB7XG4gICAgcmV0dXJuIHRoaXMudmFyaWFibGU7XG4gIH1cblxuICBnZXROYW1lZEJpbmRpbmdzKCkge1xuICAgIHJldHVybiB0aGlzLm5hbWVkQmluZGluZ3M7XG4gIH1cblxuICBldmFsdWF0ZShjb250ZXh0KSB7XG4gICAgY29uc3Qgb2JqZWN0QXNzaWdubWVudFN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgRXZhbHVhdGluZyB0aGUgJyR7b2JqZWN0QXNzaWdubWVudFN0cmluZ30nIG9iamVjdCBhc3NpZ25tZW50Li4uYCk7XG5cbiAgICBjb25zdCB2YWx1ZSA9IHRoaXMudmFyaWFibGUuZXZhbHVhdGUoY29udGV4dCksXG4gICAgICAgICAgdmFsdWVUeXBlID0gdmFsdWUuZ2V0VHlwZSgpO1xuXG4gICAgaWYgKHZhbHVlVHlwZSAhPT0gTk9NSU5BTF9WQUxVRV9UWVBFKSB7XG4gICAgICBjb25zdCB2YWx1ZVN0cmluZyA9IHZhbHVlLmdldFN0cmluZygpLFxuICAgICAgICAgICAgbWVzc2FnZSA9IGBUaGUgJyR7dmFsdWVTdHJpbmd9JyB2YWx1ZSdzICcke3ZhbHVlVHlwZX0nIHR5cGUgc2hvdWxkIGJlICcke05PTUlOQUxfVkFMVUVfVFlQRX0nLmAsXG4gICAgICAgICAgICBleGNlcHRpb24gPSBFeGNlcHRpb24uZnJvbU1lc3NhZ2UobWVzc2FnZSk7XG5cbiAgICAgIHRocm93IGV4Y2VwdGlvbjtcbiAgICB9XG5cbiAgICBub2RlUHJvcGVydGllcy5jb21wYXJlTmFtZWRCaW5kaW5ncyh0aGlzLm5hbWVkQmluZGluZ3MsIGNvbnRleHQpO1xuXG4gICAgdGhpcy5uYW1lZEJpbmRpbmdzLmZvckVhY2hOYW1lZEJpbmRpbmcoKG5hbWVkQmluZGluZykgPT4ge1xuICAgICAgdGhpcy5ldmFsdWF0ZU5hbWVkQmluZGluZyhuYW1lZEJpbmRpbmcsIHZhbHVlLCBjb250ZXh0KTtcbiAgICB9KTtcblxuICAgIGNvbnRleHQuZGVidWcoYC4uLmV2YWx1YXRlZCB0aGUgJyR7b2JqZWN0QXNzaWdubWVudFN0cmluZ30nIG9iamVjdCBhc3NpZ25tZW50LmApO1xuICB9XG5cbiAgZXZhbHVhdGVOYW1lZEJpbmRpbmcobmFtZWRCaW5kaW5nLCB0ZXJtLCBjb250ZXh0KSB7XG4gICAgY29uc3QgdGVybVN0cmluZyA9IHRlcm0uZ2V0U3RyaW5nKCksXG4gICAgICAgICAgbmFtZWRCaW5kaW5nU3RyaW5nID0gbmFtZWRCaW5kaW5nLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgRXZhbHVhdGluZyB0aGUgJyR7bmFtZWRCaW5kaW5nU3RyaW5nfScgbmFtZWQgYmluZGluZyBhZ2FpbnN0IHRoZSAnJHt0ZXJtU3RyaW5nfScgdGVybS4uLmApO1xuXG4gICAgY29uc3QgbmFtZSA9IG5hbWVkQmluZGluZy5nZXROYW1lKCk7XG5cbiAgICBzd2l0Y2ggKG5hbWUpIHtcbiAgICAgIGNhc2UgQ09OVEVOVF9QQVJBTUVURVJfTkFNRToge1xuICAgICAgICB0ZXJtID0gdGhpcy5ldmFsdWF0ZUNvbnRlbnROYW1lZEJpbmRpbmcobmFtZWRCaW5kaW5nLCB0ZXJtLCBjb250ZXh0KTtcblxuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgY2FzZSBURVJNSU5BTF9QQVJBTUVURVJfTkFNRToge1xuICAgICAgICB0ZXJtID0gdGhpcy5ldmFsdWF0ZVRlcm1pbmFsTmFtZWRCaW5kaW5nKG5hbWVkQmluZGluZywgdGVybSwgY29udGV4dCk7XG5cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIGNhc2UgQ0hJTERfTk9ERVNfUEFSQU1FVEVSX05BTUU6IHtcbiAgICAgICAgdGVybSA9IHRoaXMuZXZhbHVhdGVDaGlsZE5vZGVzTmFtZWRCaW5kaW5nKG5hbWVkQmluZGluZywgdGVybSwgY29udGV4dCk7XG5cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgeyBWYXJpYWJsZSB9ID0gZWxlbWVudHMsXG4gICAgICAgICAgdmFyaWFibGUgPSBWYXJpYWJsZS5mcm9tTmFtZWRCaW5kaW5nKG5hbWVkQmluZGluZywgY29udGV4dCk7XG5cbiAgICB2YXJpYWJsZS5hc3NpZ24odGVybSwgY29udGV4dCk7XG5cbiAgICBjb250ZXh0LmRlYnVnKGAuLi5ldmFsdWF0ZWQgdGhlICcke25hbWVkQmluZGluZ1N0cmluZ30nIHBhcmFtZXRlciBuYW1lZCBhZ2FpbnN0IHRoZSAnJHt0ZXJtU3RyaW5nfScgdGVybS5gKTtcbiAgfVxuXG4gIGV2YWx1YXRlQ29udGVudE5hbWVkQmluZGluZyhuYW1lZEJpbmRpbmcsIHRlcm0sIGNvbnRleHQpIHtcbiAgICBjb25zdCB0eXBlID0gbmFtZWRCaW5kaW5nLmdldFR5cGUoKSxcbiAgICAgICAgICBuYW1lZEJpbmRpbmdTdHJpbmcgPSBuYW1lZEJpbmRpbmcuZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBFdmFsdWF0aW5nIHRoZSBjb250ZW50ICcke25hbWVkQmluZGluZ1N0cmluZ30nIG5hbWVkIGJpbmRpbmcuLi5gKTtcblxuICAgIGlmICh0eXBlICE9PSBTVFJJTkdfVFlQRSkge1xuICAgICAgY29uc3QgbmFtZWRCaW5kaW5nU3RyaW5nID0gbmFtZWRCaW5kaW5nLmdldFN0cmluZygpLFxuICAgICAgICAgICAgbWVzc2FnZSA9IGBUaGUgJyR7bmFtZWRCaW5kaW5nU3RyaW5nfScgbmFtZWQgYmluZGluZydzIHR5cGUgc2hvdWxkIGJlICcke1NUUklOR19UWVBFfScuYCxcbiAgICAgICAgICAgIGV4Y2VwdGlvbiA9IEV4Y2VwdGlvbi5mcm9tTWVzc2FnZShtZXNzYWdlKTtcblxuICAgICAgdGhyb3cgZXhjZXB0aW9uO1xuICAgIH1cblxuICAgIGNvbnN0IHByaW1pdGl2ZVZhbHVlID0gdGVybS5nZXRQcmltaXRpdmVWYWx1ZSgpLFxuICAgICAgICAgIG5vbWluYWxWYWx1ZSA9IHByaW1pdGl2ZVZhbHVlLCAgLy8vXG4gICAgICAgICAgbm9kZSA9IG5vbWluYWxWYWx1ZS5nZXROb2RlKCksXG4gICAgICAgICAgbm9kZVRlcm1pbmFsTm9kZSA9IG5vZGUuaXNUZXJtaW5hbE5vZGUoKTtcblxuICAgIGlmICghbm9kZVRlcm1pbmFsTm9kZSkge1xuICAgICAgY29uc3QgdGVybVN0cmluZyA9IHRlcm0uZ2V0U3RyaW5nKCksXG4gICAgICAgICAgICBtZXNzYWdlID0gYFRoZSAnJHt0ZXJtU3RyaW5nfScgdGVybSdzIG5vZGUgbXVzdCBiZSB0ZXJtaW5hbC5gLFxuICAgICAgICAgICAgZXhjZXB0aW9uID0gRXhjZXB0aW9uLmZyb21NZXNzYWdlKG1lc3NhZ2UpO1xuXG4gICAgICB0aHJvdyBleGNlcHRpb247XG4gICAgfVxuXG4gICAgY29uc3QgdGVybWluYWxOb2RlID0gbm9kZSwgIC8vL1xuICAgICAgICAgIGNvbnRlbnQgPSB0ZXJtaW5hbE5vZGUuZ2V0Q29udGVudCgpLFxuICAgICAgICAgIHN0cmluZyA9IGNvbnRlbnQsICAvLy9cbiAgICAgICAgICBzdHJpbmdMaXRlcmFsID0gc3RyaW5nTGl0ZXJhbEZyb21TdHJpbmcoc3RyaW5nKTtcblxuICAgIHRlcm0gPSB0ZXJtRnJvbVN0cmluZ0xpdGVyYWwoc3RyaW5nTGl0ZXJhbCwgY29udGV4dCk7XG5cbiAgICBjb25zdCB0ZXJtU3R0cmluZyA9IHRlcm0uZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LmRlYnVnKGAuLi5ldmFsdWF0ZWQgdGhlIGNvbnRlbnQgJyR7bmFtZWRCaW5kaW5nU3RyaW5nfScgbmFtZWQgYmluZGluZyBhcyAnJHt0ZXJtU3R0cmluZ30nLmApO1xuXG4gICAgcmV0dXJuIHRlcm07XG4gIH1cblxuICBldmFsdWF0ZVRlcm1pbmFsTmFtZWRCaW5kaW5nKG5hbWVkQmluZGluZywgdGVybSwgY29udGV4dCkge1xuICAgIGNvbnN0IHR5cGUgPSBuYW1lZEJpbmRpbmcuZ2V0VHlwZSgpLFxuICAgICAgICAgIG5hbWVkQmluZGluZ1N0cmluZyA9IG5hbWVkQmluZGluZy5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYEV2YWx1YXRpbmcgdGhlIHRlcm1pbmFsICcke25hbWVkQmluZGluZ1N0cmluZ30nIG5hbWVkIGJpbmRpbmcuLi5gKTtcblxuICAgIGlmICh0eXBlICE9PSBCT09MRUFOX1RZUEUpIHtcbiAgICAgIGNvbnN0IG5hbWVkQmluZGluZ1N0cmluZyA9IG5hbWVkQmluZGluZy5nZXRTdHJpbmcoKSxcbiAgICAgICAgICAgIG1lc3NhZ2UgPSBgVGhlICcke25hbWVkQmluZGluZ1N0cmluZ30nIG5hbWVkIGJpbmRpbmcncyB0eXBlIHNob3VsZCBiZSAnJHtCT09MRUFOX1RZUEV9Jy5gLFxuICAgICAgICAgICAgZXhjZXB0aW9uID0gRXhjZXB0aW9uLmZyb21NZXNzYWdlKG1lc3NhZ2UpO1xuXG4gICAgICB0aHJvdyBleGNlcHRpb247XG4gICAgfVxuXG4gICAgY29uc3QgcHJpbWl0aXZlVmFsdWUgPSB0ZXJtLmdldFByaW1pdGl2ZVZhbHVlKCksXG4gICAgICAgICAgbm9taW5hbFZhbHVlID0gcHJpbWl0aXZlVmFsdWUsICAvLy9cbiAgICAgICAgICBub2RlID0gbm9taW5hbFZhbHVlLmdldE5vZGUoKSxcbiAgICAgICAgICBub2RlVGVybWluYWxOb2RlID0gbm9kZS5pc1Rlcm1pbmFsTm9kZSgpLFxuICAgICAgICAgIHRlcm1pbmFsID0gbm9kZVRlcm1pbmFsTm9kZTsgIC8vL1xuXG4gICAgY29uc3QgYm9vbGVhbiA9IHRlcm1pbmFsOyAvLy9cblxuICAgIHRlcm0gPSB0ZXJtRnJvbUJvb2xlYW4oYm9vbGVhbiwgY29udGV4dCk7ICAvLy9cblxuICAgIGNvbnN0IHRlcm1TdHRyaW5nID0gdGVybS5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQuZGVidWcoYC4uLmV2YWx1YXRlZCB0aGUgdGVybWluYWwgJyR7bmFtZWRCaW5kaW5nU3RyaW5nfScgbmFtZWQgYmluZGluZyBhcyAnJHt0ZXJtU3R0cmluZ30nLmApO1xuXG4gICAgcmV0dXJuIHRlcm07XG4gIH1cblxuICBldmFsdWF0ZUNoaWxkTm9kZXNOYW1lZEJpbmRpbmcobmFtZWRCaW5kaW5nLCB0ZXJtLCBjb250ZXh0KSB7XG4gICAgY29uc3QgdHlwZSA9IG5hbWVkQmluZGluZy5nZXRUeXBlKCksXG4gICAgICAgICAgbmFtZWRCaW5kaW5nU3RyaW5nID0gbmFtZWRCaW5kaW5nLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgRXZhbHVhdGluZyB0aGUgY2hpbGQgbm9kZXMgJyR7bmFtZWRCaW5kaW5nU3RyaW5nfScgbmFtZWQgYmluZGluZy4uLmApO1xuXG4gICAgaWYgKHR5cGUgIT09IE5PTUlOQUxfVkFMVUVTX1RZUEUpIHtcbiAgICAgIGNvbnN0IG5hbWVkQmluZGluZ1N0cmluZyA9IG5hbWVkQmluZGluZy5nZXRTdHJpbmcoKSxcbiAgICAgICAgICAgIG1lc3NhZ2UgPSBgVGhlICcke25hbWVkQmluZGluZ1N0cmluZ30nIG5hbWVkIGJpbmRpbmcncyB0eXBlIHNob3VsZCBiZSAnJHtOT01JTkFMX1ZBTFVFU19UWVBFfScuYCxcbiAgICAgICAgICAgIGV4Y2VwdGlvbiA9IEV4Y2VwdGlvbi5mcm9tTWVzc2FnZShtZXNzYWdlKTtcblxuICAgICAgdGhyb3cgZXhjZXB0aW9uO1xuICAgIH1cblxuICAgIGNvbnN0IHByaW1pdGl2ZVZhbHVlID0gdGVybS5nZXRQcmltaXRpdmVWYWx1ZSgpLFxuICAgICAgICAgIG5vbWluYWxWYWx1ZSA9IHByaW1pdGl2ZVZhbHVlLCAgLy8vXG4gICAgICAgICAgbm9kZSA9IG5vbWluYWxWYWx1ZS5nZXROb2RlKCksXG4gICAgICAgICAgbm9kZU5vblRlcm1pbmFsTm9kZSA9IG5vZGUuaXNOb25UZXJtaW5hbE5vZGUoKTtcblxuICAgIGlmICghbm9kZU5vblRlcm1pbmFsTm9kZSkge1xuICAgICAgY29uc3QgdGVybVN0cmluZyA9IHRlcm0uZ2V0U3RyaW5nKCksXG4gICAgICAgICAgICBtZXNzYWdlID0gYFRoZSAnJHt0ZXJtU3RyaW5nfScgdGVybSdzIG5vZGUgbXVzdCBiZSBub24tdGVybWluYWwuYCxcbiAgICAgICAgICAgIGV4Y2VwdGlvbiA9IEV4Y2VwdGlvbi5mcm9tTWVzc2FnZShtZXNzYWdlKTtcblxuICAgICAgdGhyb3cgZXhjZXB0aW9uO1xuICAgIH1cblxuICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZSA9IG5vZGUsICAvLy9cbiAgICAgICAgICBjaGlsZE5vZGVzID0gbm9uVGVybWluYWxOb2RlLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgICBub2RlcyA9IGNoaWxkTm9kZXMsIC8vL1xuICAgICAgICAgIHZhbHVlID0gdmFsdWVGcm9tTm9kZXNBbmROb21pbmFsVmFsdWUobm9kZXMsIG5vbWluYWxWYWx1ZSksXG4gICAgICAgICAgdmFsdWVTdHRyaW5nID0gdmFsdWUuZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LmRlYnVnKGAuLi5ldmFsdWF0ZWQgdGhlIGNoaWxkTm9kZXMgJyR7bmFtZWRCaW5kaW5nU3RyaW5nfScgbmFtZWQgYmluZGluZyBhcyAnJHt2YWx1ZVN0dHJpbmd9Jy5gKTtcblxuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJPYmplY3RBc3NpZ21lbnRcIjtcbn0pO1xuIl0sIm5hbWVzIjpbImRlZmluZSIsIk9iamVjdEFzc2lnbWVudCIsIkVsZW1lbnQiLCJjb250ZXh0Iiwic3RyaW5nIiwibm9kZSIsImJyZWFrUG9pbnQiLCJ2YXJpYWJsZSIsIm5hbWVkQmluZGluZ3MiLCJnZXRWYXJpYWJsZSIsImdldE5hbWVkQmluZGluZ3MiLCJldmFsdWF0ZSIsIm9iamVjdEFzc2lnbm1lbnRTdHJpbmciLCJnZXRTdHJpbmciLCJ0cmFjZSIsInZhbHVlIiwidmFsdWVUeXBlIiwiZ2V0VHlwZSIsIk5PTUlOQUxfVkFMVUVfVFlQRSIsInZhbHVlU3RyaW5nIiwibWVzc2FnZSIsImV4Y2VwdGlvbiIsIkV4Y2VwdGlvbiIsImZyb21NZXNzYWdlIiwibm9kZVByb3BlcnRpZXMiLCJjb21wYXJlTmFtZWRCaW5kaW5ncyIsImZvckVhY2hOYW1lZEJpbmRpbmciLCJuYW1lZEJpbmRpbmciLCJldmFsdWF0ZU5hbWVkQmluZGluZyIsImRlYnVnIiwidGVybSIsInRlcm1TdHJpbmciLCJuYW1lZEJpbmRpbmdTdHJpbmciLCJuYW1lIiwiZ2V0TmFtZSIsIkNPTlRFTlRfUEFSQU1FVEVSX05BTUUiLCJldmFsdWF0ZUNvbnRlbnROYW1lZEJpbmRpbmciLCJURVJNSU5BTF9QQVJBTUVURVJfTkFNRSIsImV2YWx1YXRlVGVybWluYWxOYW1lZEJpbmRpbmciLCJDSElMRF9OT0RFU19QQVJBTUVURVJfTkFNRSIsImV2YWx1YXRlQ2hpbGROb2Rlc05hbWVkQmluZGluZyIsIlZhcmlhYmxlIiwiZWxlbWVudHMiLCJmcm9tTmFtZWRCaW5kaW5nIiwiYXNzaWduIiwidHlwZSIsIlNUUklOR19UWVBFIiwicHJpbWl0aXZlVmFsdWUiLCJnZXRQcmltaXRpdmVWYWx1ZSIsIm5vbWluYWxWYWx1ZSIsImdldE5vZGUiLCJub2RlVGVybWluYWxOb2RlIiwiaXNUZXJtaW5hbE5vZGUiLCJ0ZXJtaW5hbE5vZGUiLCJjb250ZW50IiwiZ2V0Q29udGVudCIsInN0cmluZ0xpdGVyYWwiLCJzdHJpbmdMaXRlcmFsRnJvbVN0cmluZyIsInRlcm1Gcm9tU3RyaW5nTGl0ZXJhbCIsInRlcm1TdHRyaW5nIiwiQk9PTEVBTl9UWVBFIiwidGVybWluYWwiLCJib29sZWFuIiwidGVybUZyb21Cb29sZWFuIiwiTk9NSU5BTF9WQUxVRVNfVFlQRSIsIm5vZGVOb25UZXJtaW5hbE5vZGUiLCJpc05vblRlcm1pbmFsTm9kZSIsIm5vblRlcm1pbmFsTm9kZSIsImNoaWxkTm9kZXMiLCJnZXRDaGlsZE5vZGVzIiwibm9kZXMiLCJ2YWx1ZUZyb21Ob2Rlc0FuZE5vbWluYWxWYWx1ZSIsInZhbHVlU3R0cmluZyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBZUE7OztlQUFBOzs7Z0NBYndCO2tFQUVIO2tFQUNDO3VFQUNLOytCQUdhO3VCQUNNO3NCQUNTO3VCQUM0QjtnQ0FDUzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7TUFFNUYsV0FBZUEsSUFBQUEsZ0JBQU0sRUFBQyxNQUFNQyx3QkFBd0JDLHVCQUFPO0lBQ3pELFlBQVlDLE9BQU8sRUFBRUMsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLFVBQVUsRUFBRUMsUUFBUSxFQUFFQyxhQUFhLENBQUU7UUFDdEUsS0FBSyxDQUFDTCxTQUFTQyxRQUFRQyxNQUFNQztRQUU3QixJQUFJLENBQUNDLFFBQVEsR0FBR0E7UUFDaEIsSUFBSSxDQUFDQyxhQUFhLEdBQUdBO0lBQ3ZCO0lBRUFDLGNBQWM7UUFDWixPQUFPLElBQUksQ0FBQ0YsUUFBUTtJQUN0QjtJQUVBRyxtQkFBbUI7UUFDakIsT0FBTyxJQUFJLENBQUNGLGFBQWE7SUFDM0I7SUFFQUcsU0FBU1IsT0FBTyxFQUFFO1FBQ2hCLE1BQU1TLHlCQUF5QixJQUFJLENBQUNDLFNBQVMsSUFBSSxHQUFHO1FBRXBEVixRQUFRVyxLQUFLLENBQUMsQ0FBQyxnQkFBZ0IsRUFBRUYsdUJBQXVCLHNCQUFzQixDQUFDO1FBRS9FLE1BQU1HLFFBQVEsSUFBSSxDQUFDUixRQUFRLENBQUNJLFFBQVEsQ0FBQ1IsVUFDL0JhLFlBQVlELE1BQU1FLE9BQU87UUFFL0IsSUFBSUQsY0FBY0UseUJBQWtCLEVBQUU7WUFDcEMsTUFBTUMsY0FBY0osTUFBTUYsU0FBUyxJQUM3Qk8sVUFBVSxDQUFDLEtBQUssRUFBRUQsWUFBWSxXQUFXLEVBQUVILFVBQVUsa0JBQWtCLEVBQUVFLHlCQUFrQixDQUFDLEVBQUUsQ0FBQyxFQUMvRkcsWUFBWUMsa0JBQVMsQ0FBQ0MsV0FBVyxDQUFDSDtZQUV4QyxNQUFNQztRQUNSO1FBRUFHLHVCQUFjLENBQUNDLG9CQUFvQixDQUFDLElBQUksQ0FBQ2pCLGFBQWEsRUFBRUw7UUFFeEQsSUFBSSxDQUFDSyxhQUFhLENBQUNrQixtQkFBbUIsQ0FBQyxDQUFDQztZQUN0QyxJQUFJLENBQUNDLG9CQUFvQixDQUFDRCxjQUFjWixPQUFPWjtRQUNqRDtRQUVBQSxRQUFRMEIsS0FBSyxDQUFDLENBQUMsa0JBQWtCLEVBQUVqQix1QkFBdUIsb0JBQW9CLENBQUM7SUFDakY7SUFFQWdCLHFCQUFxQkQsWUFBWSxFQUFFRyxJQUFJLEVBQUUzQixPQUFPLEVBQUU7UUFDaEQsTUFBTTRCLGFBQWFELEtBQUtqQixTQUFTLElBQzNCbUIscUJBQXFCTCxhQUFhZCxTQUFTO1FBRWpEVixRQUFRVyxLQUFLLENBQUMsQ0FBQyxnQkFBZ0IsRUFBRWtCLG1CQUFtQiw2QkFBNkIsRUFBRUQsV0FBVyxTQUFTLENBQUM7UUFFeEcsTUFBTUUsT0FBT04sYUFBYU8sT0FBTztRQUVqQyxPQUFRRDtZQUNOLEtBQUtFLHNDQUFzQjtnQkFBRTtvQkFDM0JMLE9BQU8sSUFBSSxDQUFDTSwyQkFBMkIsQ0FBQ1QsY0FBY0csTUFBTTNCO29CQUU1RDtnQkFDRjtZQUVBLEtBQUtrQyx1Q0FBdUI7Z0JBQUU7b0JBQzVCUCxPQUFPLElBQUksQ0FBQ1EsNEJBQTRCLENBQUNYLGNBQWNHLE1BQU0zQjtvQkFFN0Q7Z0JBQ0Y7WUFFQSxLQUFLb0MsMENBQTBCO2dCQUFFO29CQUMvQlQsT0FBTyxJQUFJLENBQUNVLDhCQUE4QixDQUFDYixjQUFjRyxNQUFNM0I7b0JBRS9EO2dCQUNGO1FBQ0Y7UUFFQSxNQUFNLEVBQUVzQyxRQUFRLEVBQUUsR0FBR0MsaUJBQVEsRUFDdkJuQyxXQUFXa0MsU0FBU0UsZ0JBQWdCLENBQUNoQixjQUFjeEI7UUFFekRJLFNBQVNxQyxNQUFNLENBQUNkLE1BQU0zQjtRQUV0QkEsUUFBUTBCLEtBQUssQ0FBQyxDQUFDLGtCQUFrQixFQUFFRyxtQkFBbUIsK0JBQStCLEVBQUVELFdBQVcsT0FBTyxDQUFDO0lBQzVHO0lBRUFLLDRCQUE0QlQsWUFBWSxFQUFFRyxJQUFJLEVBQUUzQixPQUFPLEVBQUU7UUFDdkQsTUFBTTBDLE9BQU9sQixhQUFhVixPQUFPLElBQzNCZSxxQkFBcUJMLGFBQWFkLFNBQVM7UUFFakRWLFFBQVFXLEtBQUssQ0FBQyxDQUFDLHdCQUF3QixFQUFFa0IsbUJBQW1CLGtCQUFrQixDQUFDO1FBRS9FLElBQUlhLFNBQVNDLGtCQUFXLEVBQUU7WUFDeEIsTUFBTWQscUJBQXFCTCxhQUFhZCxTQUFTLElBQzNDTyxVQUFVLENBQUMsS0FBSyxFQUFFWSxtQkFBbUIsa0NBQWtDLEVBQUVjLGtCQUFXLENBQUMsRUFBRSxDQUFDLEVBQ3hGekIsWUFBWUMsa0JBQVMsQ0FBQ0MsV0FBVyxDQUFDSDtZQUV4QyxNQUFNQztRQUNSO1FBRUEsTUFBTTBCLGlCQUFpQmpCLEtBQUtrQixpQkFBaUIsSUFDdkNDLGVBQWVGLGdCQUNmMUMsT0FBTzRDLGFBQWFDLE9BQU8sSUFDM0JDLG1CQUFtQjlDLEtBQUsrQyxjQUFjO1FBRTVDLElBQUksQ0FBQ0Qsa0JBQWtCO1lBQ3JCLE1BQU1wQixhQUFhRCxLQUFLakIsU0FBUyxJQUMzQk8sVUFBVSxDQUFDLEtBQUssRUFBRVcsV0FBVywrQkFBK0IsQ0FBQyxFQUM3RFYsWUFBWUMsa0JBQVMsQ0FBQ0MsV0FBVyxDQUFDSDtZQUV4QyxNQUFNQztRQUNSO1FBRUEsTUFBTWdDLGVBQWVoRCxNQUNmaUQsVUFBVUQsYUFBYUUsVUFBVSxJQUNqQ25ELFNBQVNrRCxTQUNURSxnQkFBZ0JDLElBQUFBLHNDQUF1QixFQUFDckQ7UUFFOUMwQixPQUFPNEIsSUFBQUEsMkJBQXFCLEVBQUNGLGVBQWVyRDtRQUU1QyxNQUFNd0QsY0FBYzdCLEtBQUtqQixTQUFTO1FBRWxDVixRQUFRMEIsS0FBSyxDQUFDLENBQUMsMEJBQTBCLEVBQUVHLG1CQUFtQixvQkFBb0IsRUFBRTJCLFlBQVksRUFBRSxDQUFDO1FBRW5HLE9BQU83QjtJQUNUO0lBRUFRLDZCQUE2QlgsWUFBWSxFQUFFRyxJQUFJLEVBQUUzQixPQUFPLEVBQUU7UUFDeEQsTUFBTTBDLE9BQU9sQixhQUFhVixPQUFPLElBQzNCZSxxQkFBcUJMLGFBQWFkLFNBQVM7UUFFakRWLFFBQVFXLEtBQUssQ0FBQyxDQUFDLHlCQUF5QixFQUFFa0IsbUJBQW1CLGtCQUFrQixDQUFDO1FBRWhGLElBQUlhLFNBQVNlLG1CQUFZLEVBQUU7WUFDekIsTUFBTTVCLHFCQUFxQkwsYUFBYWQsU0FBUyxJQUMzQ08sVUFBVSxDQUFDLEtBQUssRUFBRVksbUJBQW1CLGtDQUFrQyxFQUFFNEIsbUJBQVksQ0FBQyxFQUFFLENBQUMsRUFDekZ2QyxZQUFZQyxrQkFBUyxDQUFDQyxXQUFXLENBQUNIO1lBRXhDLE1BQU1DO1FBQ1I7UUFFQSxNQUFNMEIsaUJBQWlCakIsS0FBS2tCLGlCQUFpQixJQUN2Q0MsZUFBZUYsZ0JBQ2YxQyxPQUFPNEMsYUFBYUMsT0FBTyxJQUMzQkMsbUJBQW1COUMsS0FBSytDLGNBQWMsSUFDdENTLFdBQVdWLGtCQUFtQixHQUFHO1FBRXZDLE1BQU1XLFVBQVVELFVBQVUsR0FBRztRQUU3Qi9CLE9BQU9pQyxJQUFBQSxxQkFBZSxFQUFDRCxTQUFTM0QsVUFBVyxHQUFHO1FBRTlDLE1BQU13RCxjQUFjN0IsS0FBS2pCLFNBQVM7UUFFbENWLFFBQVEwQixLQUFLLENBQUMsQ0FBQywyQkFBMkIsRUFBRUcsbUJBQW1CLG9CQUFvQixFQUFFMkIsWUFBWSxFQUFFLENBQUM7UUFFcEcsT0FBTzdCO0lBQ1Q7SUFFQVUsK0JBQStCYixZQUFZLEVBQUVHLElBQUksRUFBRTNCLE9BQU8sRUFBRTtRQUMxRCxNQUFNMEMsT0FBT2xCLGFBQWFWLE9BQU8sSUFDM0JlLHFCQUFxQkwsYUFBYWQsU0FBUztRQUVqRFYsUUFBUVcsS0FBSyxDQUFDLENBQUMsNEJBQTRCLEVBQUVrQixtQkFBbUIsa0JBQWtCLENBQUM7UUFFbkYsSUFBSWEsU0FBU21CLDBCQUFtQixFQUFFO1lBQ2hDLE1BQU1oQyxxQkFBcUJMLGFBQWFkLFNBQVMsSUFDM0NPLFVBQVUsQ0FBQyxLQUFLLEVBQUVZLG1CQUFtQixrQ0FBa0MsRUFBRWdDLDBCQUFtQixDQUFDLEVBQUUsQ0FBQyxFQUNoRzNDLFlBQVlDLGtCQUFTLENBQUNDLFdBQVcsQ0FBQ0g7WUFFeEMsTUFBTUM7UUFDUjtRQUVBLE1BQU0wQixpQkFBaUJqQixLQUFLa0IsaUJBQWlCLElBQ3ZDQyxlQUFlRixnQkFDZjFDLE9BQU80QyxhQUFhQyxPQUFPLElBQzNCZSxzQkFBc0I1RCxLQUFLNkQsaUJBQWlCO1FBRWxELElBQUksQ0FBQ0QscUJBQXFCO1lBQ3hCLE1BQU1sQyxhQUFhRCxLQUFLakIsU0FBUyxJQUMzQk8sVUFBVSxDQUFDLEtBQUssRUFBRVcsV0FBVyxtQ0FBbUMsQ0FBQyxFQUNqRVYsWUFBWUMsa0JBQVMsQ0FBQ0MsV0FBVyxDQUFDSDtZQUV4QyxNQUFNQztRQUNSO1FBRUEsTUFBTThDLGtCQUFrQjlELE1BQ2xCK0QsYUFBYUQsZ0JBQWdCRSxhQUFhLElBQzFDQyxRQUFRRixZQUNSckQsUUFBUXdELElBQUFBLG9DQUE2QixFQUFDRCxPQUFPckIsZUFDN0N1QixlQUFlekQsTUFBTUYsU0FBUztRQUVwQ1YsUUFBUTBCLEtBQUssQ0FBQyxDQUFDLDZCQUE2QixFQUFFRyxtQkFBbUIsb0JBQW9CLEVBQUV3QyxhQUFhLEVBQUUsQ0FBQztRQUV2RyxPQUFPekQ7SUFDVDtJQUVBLE9BQU9rQixPQUFPLGtCQUFrQjtBQUNsQyJ9