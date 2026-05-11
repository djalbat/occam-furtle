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
const _nominal = require("../../utilities/nominal");
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
    constructor(context, string, node, breakPoint, variable, nameBindings){
        super(context, string, node, breakPoint);
        this.variable = variable;
        this.nameBindings = nameBindings;
    }
    getVariable() {
        return this.variable;
    }
    getNameBindings() {
        return this.nameBindings;
    }
    evaluate(context) {
        const objectAssignmentString = this.getString(); ///
        context.trace(`Evaluating the '${objectAssignmentString}' object assignment...`);
        const term = this.variable.evaluate(context), termType = term.getType();
        if (termType !== _types.NOMINAL_VALUE_TYPE) {
            const termString = term.getString(), message = `The '${termString}' term's '${termType}' type should be '${_types.NOMINAL_VALUE_TYPE}'.`, exception = _exception.default.fromMessage(message);
            throw exception;
        }
        _nodeProperties.default.compareNameBindings(this.nameBindings, context);
        this.nameBindings.forEachNameBinding((nameBinding)=>{
            this.evaluateNameBinding(nameBinding, term, context);
        });
        context.debug(`...evaluated the '${objectAssignmentString}' object assignment.`);
    }
    evaluateNameBinding(nameBinding, term, context) {
        const termString = term.getString(), nameBindingString = nameBinding.getString();
        context.trace(`Evaluating the '${nameBindingString}' named binding against the '${termString}' term...`);
        const name = nameBinding.getName();
        switch(name){
            case _parameterNames.CONTENT_PARAMETER_NAME:
                {
                    term = this.evaluateContentNameBinding(nameBinding, term, context);
                    break;
                }
            case _parameterNames.TERMINAL_PARAMETER_NAME:
                {
                    term = this.evaluateTerminalNameBinding(nameBinding, term, context);
                    break;
                }
            case _parameterNames.CHILD_NODES_PARAMETER_NAME:
                {
                    term = this.evaluateChildNodesNameBinding(nameBinding, term, context);
                    break;
                }
        }
        const { Variable } = _elements.default, variable = Variable.fromNameBinding(nameBinding, context);
        variable.assign(term, context);
        context.debug(`...evaluated the '${nameBindingString}' parameter named against the '${termString}' term.`);
    }
    evaluateContentNameBinding(nameBinding, term, context) {
        const type = nameBinding.getType(), nameBindingString = nameBinding.getString();
        context.trace(`Evaluating the content '${nameBindingString}' named binding...`);
        if (type !== _types.STRING_TYPE) {
            const nameBindingString = nameBinding.getString(), message = `The '${nameBindingString}' named binding's type should be '${_types.STRING_TYPE}'.`, exception = _exception.default.fromMessage(message);
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
        context.debug(`...evaluated the content '${nameBindingString}' named binding as '${termSttring}'.`);
        return term;
    }
    evaluateTerminalNameBinding(nameBinding, term, context) {
        const type = nameBinding.getType(), nameBindingString = nameBinding.getString();
        context.trace(`Evaluating the terminal '${nameBindingString}' named binding...`);
        if (type !== _types.BOOLEAN_TYPE) {
            const nameBindingString = nameBinding.getString(), message = `The '${nameBindingString}' named binding's type should be '${_types.BOOLEAN_TYPE}'.`, exception = _exception.default.fromMessage(message);
            throw exception;
        }
        const primitiveValue = term.getPrimitiveValue(), nominalValue = primitiveValue, node = nominalValue.getNode(), nodeTerminalNode = node.isTerminalNode(), terminal = nodeTerminalNode; ///
        const boolean = terminal; ///
        term = (0, _term.termFromBoolean)(boolean, context); ///
        const termSttring = term.getString();
        context.debug(`...evaluated the terminal '${nameBindingString}' named binding as '${termSttring}'.`);
        return term;
    }
    evaluateChildNodesNameBinding(nameBinding, term, context) {
        const type = nameBinding.getType(), nameBindingString = nameBinding.getString();
        context.trace(`Evaluating the child nodes '${nameBindingString}' named binding...`);
        if (type !== _types.NOMINAL_VALUES_TYPE) {
            const nameBindingString = nameBinding.getString(), message = `The '${nameBindingString}' named binding's type should be '${_types.NOMINAL_VALUES_TYPE}'.`, exception = _exception.default.fromMessage(message);
            throw exception;
        }
        const primitiveValue = term.getPrimitiveValue(), nominalValue = primitiveValue, node = nominalValue.getNode(), nodeNonTerminalNode = node.isNonTerminalNode();
        if (!nodeNonTerminalNode) {
            const termString = term.getString(), message = `The '${termString}' term's node must be non-terminal.`, exception = _exception.default.fromMessage(message);
            throw exception;
        }
        const nonTerminalNode = node, childNodes = nonTerminalNode.getChildNodes(), nodes = childNodes; ///
        term = (0, _nominal.termFromNodesAndNominalValue)(nodes, nominalValue);
        const termSttring = term.getString();
        context.debug(`...evaluated the childNodes '${nameBindingString}' named binding as '${termSttring}'.`);
        return term;
    }
    static name = "ObjectAssigment";
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L2Fzc2lnbm1lbnQvb2JqZWN0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBFbGVtZW50IH0gZnJvbSBcIm9jY2FtLWxhbmd1YWdlc1wiO1xuXG5pbXBvcnQgZWxlbWVudHMgZnJvbSBcIi4uLy4uL2VsZW1lbnRzXCI7XG5pbXBvcnQgRXhjZXB0aW9uIGZyb20gXCIuLi8uLi9leGNlcHRpb25cIjtcbmltcG9ydCBub2RlUHJvcGVydGllcyBmcm9tIFwiLi4vLi4vbm9kZVByb3BlcnRpZXNcIjtcblxuaW1wb3J0IHsgZGVmaW5lIH0gZnJvbSBcIi4uLy4uL2VsZW1lbnRzXCI7XG5pbXBvcnQgeyBzdHJpbmdMaXRlcmFsRnJvbVN0cmluZyB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvc3RyaW5nTGl0ZXJhbFwiO1xuaW1wb3J0IHsgdGVybUZyb21Ob2Rlc0FuZE5vbWluYWxWYWx1ZSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvbm9taW5hbFwiO1xuaW1wb3J0IHsgdGVybUZyb21Cb29sZWFuLCB0ZXJtRnJvbVN0cmluZ0xpdGVyYWwgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL3Rlcm1cIjtcbmltcG9ydCB7IFNUUklOR19UWVBFLCBCT09MRUFOX1RZUEUsIE5PTUlOQUxfVkFMVUVfVFlQRSwgTk9NSU5BTF9WQUxVRVNfVFlQRSB9IGZyb20gXCIuLi8uLi90eXBlc1wiO1xuaW1wb3J0IHsgQ09OVEVOVF9QQVJBTUVURVJfTkFNRSwgVEVSTUlOQUxfUEFSQU1FVEVSX05BTUUsIENISUxEX05PREVTX1BBUkFNRVRFUl9OQU1FIH0gZnJvbSBcIi4uLy4uL3BhcmFtZXRlck5hbWVzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZShjbGFzcyBPYmplY3RBc3NpZ21lbnQgZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgc3RyaW5nLCBub2RlLCBicmVha1BvaW50LCB2YXJpYWJsZSwgbmFtZUJpbmRpbmdzKSB7XG4gICAgc3VwZXIoY29udGV4dCwgc3RyaW5nLCBub2RlLCBicmVha1BvaW50KTtcblxuICAgIHRoaXMudmFyaWFibGUgPSB2YXJpYWJsZTtcbiAgICB0aGlzLm5hbWVCaW5kaW5ncyA9IG5hbWVCaW5kaW5ncztcbiAgfVxuXG4gIGdldFZhcmlhYmxlKCkge1xuICAgIHJldHVybiB0aGlzLnZhcmlhYmxlO1xuICB9XG5cbiAgZ2V0TmFtZUJpbmRpbmdzKCkge1xuICAgIHJldHVybiB0aGlzLm5hbWVCaW5kaW5ncztcbiAgfVxuXG4gIGV2YWx1YXRlKGNvbnRleHQpIHtcbiAgICBjb25zdCBvYmplY3RBc3NpZ25tZW50U3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBFdmFsdWF0aW5nIHRoZSAnJHtvYmplY3RBc3NpZ25tZW50U3RyaW5nfScgb2JqZWN0IGFzc2lnbm1lbnQuLi5gKTtcblxuICAgIGNvbnN0IHRlcm0gPSB0aGlzLnZhcmlhYmxlLmV2YWx1YXRlKGNvbnRleHQpLFxuICAgICAgICAgIHRlcm1UeXBlID0gdGVybS5nZXRUeXBlKCk7XG5cbiAgICBpZiAodGVybVR5cGUgIT09IE5PTUlOQUxfVkFMVUVfVFlQRSkge1xuICAgICAgY29uc3QgdGVybVN0cmluZyA9IHRlcm0uZ2V0U3RyaW5nKCksXG4gICAgICAgICAgICBtZXNzYWdlID0gYFRoZSAnJHt0ZXJtU3RyaW5nfScgdGVybSdzICcke3Rlcm1UeXBlfScgdHlwZSBzaG91bGQgYmUgJyR7Tk9NSU5BTF9WQUxVRV9UWVBFfScuYCxcbiAgICAgICAgICAgIGV4Y2VwdGlvbiA9IEV4Y2VwdGlvbi5mcm9tTWVzc2FnZShtZXNzYWdlKTtcblxuICAgICAgdGhyb3cgZXhjZXB0aW9uO1xuICAgIH1cblxuICAgIG5vZGVQcm9wZXJ0aWVzLmNvbXBhcmVOYW1lQmluZGluZ3ModGhpcy5uYW1lQmluZGluZ3MsIGNvbnRleHQpO1xuXG4gICAgdGhpcy5uYW1lQmluZGluZ3MuZm9yRWFjaE5hbWVCaW5kaW5nKChuYW1lQmluZGluZykgPT4ge1xuICAgICAgdGhpcy5ldmFsdWF0ZU5hbWVCaW5kaW5nKG5hbWVCaW5kaW5nLCB0ZXJtLCBjb250ZXh0KTtcbiAgICB9KTtcblxuICAgIGNvbnRleHQuZGVidWcoYC4uLmV2YWx1YXRlZCB0aGUgJyR7b2JqZWN0QXNzaWdubWVudFN0cmluZ30nIG9iamVjdCBhc3NpZ25tZW50LmApO1xuICB9XG5cbiAgZXZhbHVhdGVOYW1lQmluZGluZyhuYW1lQmluZGluZywgdGVybSwgY29udGV4dCkge1xuICAgIGNvbnN0IHRlcm1TdHJpbmcgPSB0ZXJtLmdldFN0cmluZygpLFxuICAgICAgICAgIG5hbWVCaW5kaW5nU3RyaW5nID0gbmFtZUJpbmRpbmcuZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBFdmFsdWF0aW5nIHRoZSAnJHtuYW1lQmluZGluZ1N0cmluZ30nIG5hbWVkIGJpbmRpbmcgYWdhaW5zdCB0aGUgJyR7dGVybVN0cmluZ30nIHRlcm0uLi5gKTtcblxuICAgIGNvbnN0IG5hbWUgPSBuYW1lQmluZGluZy5nZXROYW1lKCk7XG5cbiAgICBzd2l0Y2ggKG5hbWUpIHtcbiAgICAgIGNhc2UgQ09OVEVOVF9QQVJBTUVURVJfTkFNRToge1xuICAgICAgICB0ZXJtID0gdGhpcy5ldmFsdWF0ZUNvbnRlbnROYW1lQmluZGluZyhuYW1lQmluZGluZywgdGVybSwgY29udGV4dCk7XG5cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIGNhc2UgVEVSTUlOQUxfUEFSQU1FVEVSX05BTUU6IHtcbiAgICAgICAgdGVybSA9IHRoaXMuZXZhbHVhdGVUZXJtaW5hbE5hbWVCaW5kaW5nKG5hbWVCaW5kaW5nLCB0ZXJtLCBjb250ZXh0KTtcblxuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgY2FzZSBDSElMRF9OT0RFU19QQVJBTUVURVJfTkFNRToge1xuICAgICAgICB0ZXJtID0gdGhpcy5ldmFsdWF0ZUNoaWxkTm9kZXNOYW1lQmluZGluZyhuYW1lQmluZGluZywgdGVybSwgY29udGV4dCk7XG5cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgeyBWYXJpYWJsZSB9ID0gZWxlbWVudHMsXG4gICAgICAgICAgdmFyaWFibGUgPSBWYXJpYWJsZS5mcm9tTmFtZUJpbmRpbmcobmFtZUJpbmRpbmcsIGNvbnRleHQpO1xuXG4gICAgdmFyaWFibGUuYXNzaWduKHRlcm0sIGNvbnRleHQpO1xuXG4gICAgY29udGV4dC5kZWJ1ZyhgLi4uZXZhbHVhdGVkIHRoZSAnJHtuYW1lQmluZGluZ1N0cmluZ30nIHBhcmFtZXRlciBuYW1lZCBhZ2FpbnN0IHRoZSAnJHt0ZXJtU3RyaW5nfScgdGVybS5gKTtcbiAgfVxuXG4gIGV2YWx1YXRlQ29udGVudE5hbWVCaW5kaW5nKG5hbWVCaW5kaW5nLCB0ZXJtLCBjb250ZXh0KSB7XG4gICAgY29uc3QgdHlwZSA9IG5hbWVCaW5kaW5nLmdldFR5cGUoKSxcbiAgICAgICAgICBuYW1lQmluZGluZ1N0cmluZyA9IG5hbWVCaW5kaW5nLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgRXZhbHVhdGluZyB0aGUgY29udGVudCAnJHtuYW1lQmluZGluZ1N0cmluZ30nIG5hbWVkIGJpbmRpbmcuLi5gKTtcblxuICAgIGlmICh0eXBlICE9PSBTVFJJTkdfVFlQRSkge1xuICAgICAgY29uc3QgbmFtZUJpbmRpbmdTdHJpbmcgPSBuYW1lQmluZGluZy5nZXRTdHJpbmcoKSxcbiAgICAgICAgICAgIG1lc3NhZ2UgPSBgVGhlICcke25hbWVCaW5kaW5nU3RyaW5nfScgbmFtZWQgYmluZGluZydzIHR5cGUgc2hvdWxkIGJlICcke1NUUklOR19UWVBFfScuYCxcbiAgICAgICAgICAgIGV4Y2VwdGlvbiA9IEV4Y2VwdGlvbi5mcm9tTWVzc2FnZShtZXNzYWdlKTtcblxuICAgICAgdGhyb3cgZXhjZXB0aW9uO1xuICAgIH1cblxuICAgIGNvbnN0IHByaW1pdGl2ZVZhbHVlID0gdGVybS5nZXRQcmltaXRpdmVWYWx1ZSgpLFxuICAgICAgICAgIG5vbWluYWxWYWx1ZSA9IHByaW1pdGl2ZVZhbHVlLCAgLy8vXG4gICAgICAgICAgbm9kZSA9IG5vbWluYWxWYWx1ZS5nZXROb2RlKCksXG4gICAgICAgICAgbm9kZVRlcm1pbmFsTm9kZSA9IG5vZGUuaXNUZXJtaW5hbE5vZGUoKTtcblxuICAgIGlmICghbm9kZVRlcm1pbmFsTm9kZSkge1xuICAgICAgY29uc3QgdGVybVN0cmluZyA9IHRlcm0uZ2V0U3RyaW5nKCksXG4gICAgICAgICAgICBtZXNzYWdlID0gYFRoZSAnJHt0ZXJtU3RyaW5nfScgdGVybSdzIG5vZGUgbXVzdCBiZSB0ZXJtaW5hbC5gLFxuICAgICAgICAgICAgZXhjZXB0aW9uID0gRXhjZXB0aW9uLmZyb21NZXNzYWdlKG1lc3NhZ2UpO1xuXG4gICAgICB0aHJvdyBleGNlcHRpb247XG4gICAgfVxuXG4gICAgY29uc3QgdGVybWluYWxOb2RlID0gbm9kZSwgIC8vL1xuICAgICAgICAgIGNvbnRlbnQgPSB0ZXJtaW5hbE5vZGUuZ2V0Q29udGVudCgpLFxuICAgICAgICAgIHN0cmluZyA9IGNvbnRlbnQsICAvLy9cbiAgICAgICAgICBzdHJpbmdMaXRlcmFsID0gc3RyaW5nTGl0ZXJhbEZyb21TdHJpbmcoc3RyaW5nKTtcblxuICAgIHRlcm0gPSB0ZXJtRnJvbVN0cmluZ0xpdGVyYWwoc3RyaW5nTGl0ZXJhbCwgY29udGV4dCk7XG5cbiAgICBjb25zdCB0ZXJtU3R0cmluZyA9IHRlcm0uZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LmRlYnVnKGAuLi5ldmFsdWF0ZWQgdGhlIGNvbnRlbnQgJyR7bmFtZUJpbmRpbmdTdHJpbmd9JyBuYW1lZCBiaW5kaW5nIGFzICcke3Rlcm1TdHRyaW5nfScuYCk7XG5cbiAgICByZXR1cm4gdGVybTtcbiAgfVxuXG4gIGV2YWx1YXRlVGVybWluYWxOYW1lQmluZGluZyhuYW1lQmluZGluZywgdGVybSwgY29udGV4dCkge1xuICAgIGNvbnN0IHR5cGUgPSBuYW1lQmluZGluZy5nZXRUeXBlKCksXG4gICAgICAgICAgbmFtZUJpbmRpbmdTdHJpbmcgPSBuYW1lQmluZGluZy5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYEV2YWx1YXRpbmcgdGhlIHRlcm1pbmFsICcke25hbWVCaW5kaW5nU3RyaW5nfScgbmFtZWQgYmluZGluZy4uLmApO1xuXG4gICAgaWYgKHR5cGUgIT09IEJPT0xFQU5fVFlQRSkge1xuICAgICAgY29uc3QgbmFtZUJpbmRpbmdTdHJpbmcgPSBuYW1lQmluZGluZy5nZXRTdHJpbmcoKSxcbiAgICAgICAgICAgIG1lc3NhZ2UgPSBgVGhlICcke25hbWVCaW5kaW5nU3RyaW5nfScgbmFtZWQgYmluZGluZydzIHR5cGUgc2hvdWxkIGJlICcke0JPT0xFQU5fVFlQRX0nLmAsXG4gICAgICAgICAgICBleGNlcHRpb24gPSBFeGNlcHRpb24uZnJvbU1lc3NhZ2UobWVzc2FnZSk7XG5cbiAgICAgIHRocm93IGV4Y2VwdGlvbjtcbiAgICB9XG5cbiAgICBjb25zdCBwcmltaXRpdmVWYWx1ZSA9IHRlcm0uZ2V0UHJpbWl0aXZlVmFsdWUoKSxcbiAgICAgICAgICBub21pbmFsVmFsdWUgPSBwcmltaXRpdmVWYWx1ZSwgIC8vL1xuICAgICAgICAgIG5vZGUgPSBub21pbmFsVmFsdWUuZ2V0Tm9kZSgpLFxuICAgICAgICAgIG5vZGVUZXJtaW5hbE5vZGUgPSBub2RlLmlzVGVybWluYWxOb2RlKCksXG4gICAgICAgICAgdGVybWluYWwgPSBub2RlVGVybWluYWxOb2RlOyAgLy8vXG5cbiAgICBjb25zdCBib29sZWFuID0gdGVybWluYWw7IC8vL1xuXG4gICAgdGVybSA9IHRlcm1Gcm9tQm9vbGVhbihib29sZWFuLCBjb250ZXh0KTsgIC8vL1xuXG4gICAgY29uc3QgdGVybVN0dHJpbmcgPSB0ZXJtLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC5kZWJ1ZyhgLi4uZXZhbHVhdGVkIHRoZSB0ZXJtaW5hbCAnJHtuYW1lQmluZGluZ1N0cmluZ30nIG5hbWVkIGJpbmRpbmcgYXMgJyR7dGVybVN0dHJpbmd9Jy5gKTtcblxuICAgIHJldHVybiB0ZXJtO1xuICB9XG5cbiAgZXZhbHVhdGVDaGlsZE5vZGVzTmFtZUJpbmRpbmcobmFtZUJpbmRpbmcsIHRlcm0sIGNvbnRleHQpIHtcbiAgICBjb25zdCB0eXBlID0gbmFtZUJpbmRpbmcuZ2V0VHlwZSgpLFxuICAgICAgICAgIG5hbWVCaW5kaW5nU3RyaW5nID0gbmFtZUJpbmRpbmcuZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBFdmFsdWF0aW5nIHRoZSBjaGlsZCBub2RlcyAnJHtuYW1lQmluZGluZ1N0cmluZ30nIG5hbWVkIGJpbmRpbmcuLi5gKTtcblxuICAgIGlmICh0eXBlICE9PSBOT01JTkFMX1ZBTFVFU19UWVBFKSB7XG4gICAgICBjb25zdCBuYW1lQmluZGluZ1N0cmluZyA9IG5hbWVCaW5kaW5nLmdldFN0cmluZygpLFxuICAgICAgICAgICAgbWVzc2FnZSA9IGBUaGUgJyR7bmFtZUJpbmRpbmdTdHJpbmd9JyBuYW1lZCBiaW5kaW5nJ3MgdHlwZSBzaG91bGQgYmUgJyR7Tk9NSU5BTF9WQUxVRVNfVFlQRX0nLmAsXG4gICAgICAgICAgICBleGNlcHRpb24gPSBFeGNlcHRpb24uZnJvbU1lc3NhZ2UobWVzc2FnZSk7XG5cbiAgICAgIHRocm93IGV4Y2VwdGlvbjtcbiAgICB9XG5cbiAgICBjb25zdCBwcmltaXRpdmVWYWx1ZSA9IHRlcm0uZ2V0UHJpbWl0aXZlVmFsdWUoKSxcbiAgICAgICAgICBub21pbmFsVmFsdWUgPSBwcmltaXRpdmVWYWx1ZSwgIC8vL1xuICAgICAgICAgIG5vZGUgPSBub21pbmFsVmFsdWUuZ2V0Tm9kZSgpLFxuICAgICAgICAgIG5vZGVOb25UZXJtaW5hbE5vZGUgPSBub2RlLmlzTm9uVGVybWluYWxOb2RlKCk7XG5cbiAgICBpZiAoIW5vZGVOb25UZXJtaW5hbE5vZGUpIHtcbiAgICAgIGNvbnN0IHRlcm1TdHJpbmcgPSB0ZXJtLmdldFN0cmluZygpLFxuICAgICAgICAgICAgbWVzc2FnZSA9IGBUaGUgJyR7dGVybVN0cmluZ30nIHRlcm0ncyBub2RlIG11c3QgYmUgbm9uLXRlcm1pbmFsLmAsXG4gICAgICAgICAgICBleGNlcHRpb24gPSBFeGNlcHRpb24uZnJvbU1lc3NhZ2UobWVzc2FnZSk7XG5cbiAgICAgIHRocm93IGV4Y2VwdGlvbjtcbiAgICB9XG5cbiAgICBjb25zdCBub25UZXJtaW5hbE5vZGUgPSBub2RlLCAgLy8vXG4gICAgICAgICAgY2hpbGROb2RlcyA9IG5vblRlcm1pbmFsTm9kZS5nZXRDaGlsZE5vZGVzKCksXG4gICAgICAgICAgbm9kZXMgPSBjaGlsZE5vZGVzOyAgLy8vXG5cbiAgICB0ZXJtID0gdGVybUZyb21Ob2Rlc0FuZE5vbWluYWxWYWx1ZShub2Rlcywgbm9taW5hbFZhbHVlKTtcblxuICAgIGNvbnN0IHRlcm1TdHRyaW5nID0gdGVybS5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQuZGVidWcoYC4uLmV2YWx1YXRlZCB0aGUgY2hpbGROb2RlcyAnJHtuYW1lQmluZGluZ1N0cmluZ30nIG5hbWVkIGJpbmRpbmcgYXMgJyR7dGVybVN0dHJpbmd9Jy5gKTtcblxuICAgIHJldHVybiB0ZXJtO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIk9iamVjdEFzc2lnbWVudFwiO1xufSk7XG4iXSwibmFtZXMiOlsiZGVmaW5lIiwiT2JqZWN0QXNzaWdtZW50IiwiRWxlbWVudCIsImNvbnRleHQiLCJzdHJpbmciLCJub2RlIiwiYnJlYWtQb2ludCIsInZhcmlhYmxlIiwibmFtZUJpbmRpbmdzIiwiZ2V0VmFyaWFibGUiLCJnZXROYW1lQmluZGluZ3MiLCJldmFsdWF0ZSIsIm9iamVjdEFzc2lnbm1lbnRTdHJpbmciLCJnZXRTdHJpbmciLCJ0cmFjZSIsInRlcm0iLCJ0ZXJtVHlwZSIsImdldFR5cGUiLCJOT01JTkFMX1ZBTFVFX1RZUEUiLCJ0ZXJtU3RyaW5nIiwibWVzc2FnZSIsImV4Y2VwdGlvbiIsIkV4Y2VwdGlvbiIsImZyb21NZXNzYWdlIiwibm9kZVByb3BlcnRpZXMiLCJjb21wYXJlTmFtZUJpbmRpbmdzIiwiZm9yRWFjaE5hbWVCaW5kaW5nIiwibmFtZUJpbmRpbmciLCJldmFsdWF0ZU5hbWVCaW5kaW5nIiwiZGVidWciLCJuYW1lQmluZGluZ1N0cmluZyIsIm5hbWUiLCJnZXROYW1lIiwiQ09OVEVOVF9QQVJBTUVURVJfTkFNRSIsImV2YWx1YXRlQ29udGVudE5hbWVCaW5kaW5nIiwiVEVSTUlOQUxfUEFSQU1FVEVSX05BTUUiLCJldmFsdWF0ZVRlcm1pbmFsTmFtZUJpbmRpbmciLCJDSElMRF9OT0RFU19QQVJBTUVURVJfTkFNRSIsImV2YWx1YXRlQ2hpbGROb2Rlc05hbWVCaW5kaW5nIiwiVmFyaWFibGUiLCJlbGVtZW50cyIsImZyb21OYW1lQmluZGluZyIsImFzc2lnbiIsInR5cGUiLCJTVFJJTkdfVFlQRSIsInByaW1pdGl2ZVZhbHVlIiwiZ2V0UHJpbWl0aXZlVmFsdWUiLCJub21pbmFsVmFsdWUiLCJnZXROb2RlIiwibm9kZVRlcm1pbmFsTm9kZSIsImlzVGVybWluYWxOb2RlIiwidGVybWluYWxOb2RlIiwiY29udGVudCIsImdldENvbnRlbnQiLCJzdHJpbmdMaXRlcmFsIiwic3RyaW5nTGl0ZXJhbEZyb21TdHJpbmciLCJ0ZXJtRnJvbVN0cmluZ0xpdGVyYWwiLCJ0ZXJtU3R0cmluZyIsIkJPT0xFQU5fVFlQRSIsInRlcm1pbmFsIiwiYm9vbGVhbiIsInRlcm1Gcm9tQm9vbGVhbiIsIk5PTUlOQUxfVkFMVUVTX1RZUEUiLCJub2RlTm9uVGVybWluYWxOb2RlIiwiaXNOb25UZXJtaW5hbE5vZGUiLCJub25UZXJtaW5hbE5vZGUiLCJjaGlsZE5vZGVzIiwiZ2V0Q2hpbGROb2RlcyIsIm5vZGVzIiwidGVybUZyb21Ob2Rlc0FuZE5vbWluYWxWYWx1ZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBZUE7OztlQUFBOzs7Z0NBYndCO2tF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