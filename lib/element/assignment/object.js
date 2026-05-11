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
        const nonTerminalNode = node, childNodes = nonTerminalNode.getChildNodes(), nodes = childNodes; ///
        term = (0, _nominal.termFromNodesAndNominalValue)(nodes, nominalValue);
        const termSttring = term.getString();
        context.debug(`...evaluated the childNodes '${namedBindingString}' named binding as '${termSttring}'.`);
        return term;
    }
    static name = "ObjectAssigment";
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L2Fzc2lnbm1lbnQvb2JqZWN0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBFbGVtZW50IH0gZnJvbSBcIm9jY2FtLWxhbmd1YWdlc1wiO1xuXG5pbXBvcnQgZWxlbWVudHMgZnJvbSBcIi4uLy4uL2VsZW1lbnRzXCI7XG5pbXBvcnQgRXhjZXB0aW9uIGZyb20gXCIuLi8uLi9leGNlcHRpb25cIjtcbmltcG9ydCBub2RlUHJvcGVydGllcyBmcm9tIFwiLi4vLi4vbm9kZVByb3BlcnRpZXNcIjtcblxuaW1wb3J0IHsgZGVmaW5lIH0gZnJvbSBcIi4uLy4uL2VsZW1lbnRzXCI7XG5pbXBvcnQgeyBzdHJpbmdMaXRlcmFsRnJvbVN0cmluZyB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvc3RyaW5nTGl0ZXJhbFwiO1xuaW1wb3J0IHsgdGVybUZyb21Ob2Rlc0FuZE5vbWluYWxWYWx1ZSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvbm9taW5hbFwiO1xuaW1wb3J0IHsgdGVybUZyb21Cb29sZWFuLCB0ZXJtRnJvbVN0cmluZ0xpdGVyYWwgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL3Rlcm1cIjtcbmltcG9ydCB7IFNUUklOR19UWVBFLCBCT09MRUFOX1RZUEUsIE5PTUlOQUxfVkFMVUVfVFlQRSwgTk9NSU5BTF9WQUxVRVNfVFlQRSB9IGZyb20gXCIuLi8uLi90eXBlc1wiO1xuaW1wb3J0IHsgQ09OVEVOVF9QQVJBTUVURVJfTkFNRSwgVEVSTUlOQUxfUEFSQU1FVEVSX05BTUUsIENISUxEX05PREVTX1BBUkFNRVRFUl9OQU1FIH0gZnJvbSBcIi4uLy4uL3BhcmFtZXRlck5hbWVzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZShjbGFzcyBPYmplY3RBc3NpZ21lbnQgZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgc3RyaW5nLCBub2RlLCBicmVha1BvaW50LCB2YXJpYWJsZSwgbmFtZWRCaW5kaW5ncykge1xuICAgIHN1cGVyKGNvbnRleHQsIHN0cmluZywgbm9kZSwgYnJlYWtQb2ludCk7XG5cbiAgICB0aGlzLnZhcmlhYmxlID0gdmFyaWFibGU7XG4gICAgdGhpcy5uYW1lZEJpbmRpbmdzID0gbmFtZWRCaW5kaW5ncztcbiAgfVxuXG4gIGdldFZhcmlhYmxlKCkge1xuICAgIHJldHVybiB0aGlzLnZhcmlhYmxlO1xuICB9XG5cbiAgZ2V0TmFtZWRCaW5kaW5ncygpIHtcbiAgICByZXR1cm4gdGhpcy5uYW1lZEJpbmRpbmdzO1xuICB9XG5cbiAgZXZhbHVhdGUoY29udGV4dCkge1xuICAgIGNvbnN0IG9iamVjdEFzc2lnbm1lbnRTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYEV2YWx1YXRpbmcgdGhlICcke29iamVjdEFzc2lnbm1lbnRTdHJpbmd9JyBvYmplY3QgYXNzaWdubWVudC4uLmApO1xuXG4gICAgY29uc3QgdmFsdWUgPSB0aGlzLnZhcmlhYmxlLmV2YWx1YXRlKGNvbnRleHQpLFxuICAgICAgICAgIHZhbHVlVHlwZSA9IHZhbHVlLmdldFR5cGUoKTtcblxuICAgIGlmICh2YWx1ZVR5cGUgIT09IE5PTUlOQUxfVkFMVUVfVFlQRSkge1xuICAgICAgY29uc3QgdmFsdWVTdHJpbmcgPSB2YWx1ZS5nZXRTdHJpbmcoKSxcbiAgICAgICAgICAgIG1lc3NhZ2UgPSBgVGhlICcke3ZhbHVlU3RyaW5nfScgdmFsdWUncyAnJHt2YWx1ZVR5cGV9JyB0eXBlIHNob3VsZCBiZSAnJHtOT01JTkFMX1ZBTFVFX1RZUEV9Jy5gLFxuICAgICAgICAgICAgZXhjZXB0aW9uID0gRXhjZXB0aW9uLmZyb21NZXNzYWdlKG1lc3NhZ2UpO1xuXG4gICAgICB0aHJvdyBleGNlcHRpb247XG4gICAgfVxuXG4gICAgbm9kZVByb3BlcnRpZXMuY29tcGFyZU5hbWVkQmluZGluZ3ModGhpcy5uYW1lZEJpbmRpbmdzLCBjb250ZXh0KTtcblxuICAgIHRoaXMubmFtZWRCaW5kaW5ncy5mb3JFYWNoTmFtZWRCaW5kaW5nKChuYW1lZEJpbmRpbmcpID0+IHtcbiAgICAgIHRoaXMuZXZhbHVhdGVOYW1lZEJpbmRpbmcobmFtZWRCaW5kaW5nLCB2YWx1ZSwgY29udGV4dCk7XG4gICAgfSk7XG5cbiAgICBjb250ZXh0LmRlYnVnKGAuLi5ldmFsdWF0ZWQgdGhlICcke29iamVjdEFzc2lnbm1lbnRTdHJpbmd9JyBvYmplY3QgYXNzaWdubWVudC5gKTtcbiAgfVxuXG4gIGV2YWx1YXRlTmFtZWRCaW5kaW5nKG5hbWVkQmluZGluZywgdGVybSwgY29udGV4dCkge1xuICAgIGNvbnN0IHRlcm1TdHJpbmcgPSB0ZXJtLmdldFN0cmluZygpLFxuICAgICAgICAgIG5hbWVkQmluZGluZ1N0cmluZyA9IG5hbWVkQmluZGluZy5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYEV2YWx1YXRpbmcgdGhlICcke25hbWVkQmluZGluZ1N0cmluZ30nIG5hbWVkIGJpbmRpbmcgYWdhaW5zdCB0aGUgJyR7dGVybVN0cmluZ30nIHRlcm0uLi5gKTtcblxuICAgIGNvbnN0IG5hbWUgPSBuYW1lZEJpbmRpbmcuZ2V0TmFtZSgpO1xuXG4gICAgc3dpdGNoIChuYW1lKSB7XG4gICAgICBjYXNlIENPTlRFTlRfUEFSQU1FVEVSX05BTUU6IHtcbiAgICAgICAgdGVybSA9IHRoaXMuZXZhbHVhdGVDb250ZW50TmFtZWRCaW5kaW5nKG5hbWVkQmluZGluZywgdGVybSwgY29udGV4dCk7XG5cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIGNhc2UgVEVSTUlOQUxfUEFSQU1FVEVSX05BTUU6IHtcbiAgICAgICAgdGVybSA9IHRoaXMuZXZhbHVhdGVUZXJtaW5hbE5hbWVkQmluZGluZyhuYW1lZEJpbmRpbmcsIHRlcm0sIGNvbnRleHQpO1xuXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBjYXNlIENISUxEX05PREVTX1BBUkFNRVRFUl9OQU1FOiB7XG4gICAgICAgIHRlcm0gPSB0aGlzLmV2YWx1YXRlQ2hpbGROb2Rlc05hbWVkQmluZGluZyhuYW1lZEJpbmRpbmcsIHRlcm0sIGNvbnRleHQpO1xuXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IHsgVmFyaWFibGUgfSA9IGVsZW1lbnRzLFxuICAgICAgICAgIHZhcmlhYmxlID0gVmFyaWFibGUuZnJvbU5hbWVkQmluZGluZyhuYW1lZEJpbmRpbmcsIGNvbnRleHQpO1xuXG4gICAgdmFyaWFibGUuYXNzaWduKHRlcm0sIGNvbnRleHQpO1xuXG4gICAgY29udGV4dC5kZWJ1ZyhgLi4uZXZhbHVhdGVkIHRoZSAnJHtuYW1lZEJpbmRpbmdTdHJpbmd9JyBwYXJhbWV0ZXIgbmFtZWQgYWdhaW5zdCB0aGUgJyR7dGVybVN0cmluZ30nIHRlcm0uYCk7XG4gIH1cblxuICBldmFsdWF0ZUNvbnRlbnROYW1lZEJpbmRpbmcobmFtZWRCaW5kaW5nLCB0ZXJtLCBjb250ZXh0KSB7XG4gICAgY29uc3QgdHlwZSA9IG5hbWVkQmluZGluZy5nZXRUeXBlKCksXG4gICAgICAgICAgbmFtZWRCaW5kaW5nU3RyaW5nID0gbmFtZWRCaW5kaW5nLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgRXZhbHVhdGluZyB0aGUgY29udGVudCAnJHtuYW1lZEJpbmRpbmdTdHJpbmd9JyBuYW1lZCBiaW5kaW5nLi4uYCk7XG5cbiAgICBpZiAodHlwZSAhPT0gU1RSSU5HX1RZUEUpIHtcbiAgICAgIGNvbnN0IG5hbWVkQmluZGluZ1N0cmluZyA9IG5hbWVkQmluZGluZy5nZXRTdHJpbmcoKSxcbiAgICAgICAgICAgIG1lc3NhZ2UgPSBgVGhlICcke25hbWVkQmluZGluZ1N0cmluZ30nIG5hbWVkIGJpbmRpbmcncyB0eXBlIHNob3VsZCBiZSAnJHtTVFJJTkdfVFlQRX0nLmAsXG4gICAgICAgICAgICBleGNlcHRpb24gPSBFeGNlcHRpb24uZnJvbU1lc3NhZ2UobWVzc2FnZSk7XG5cbiAgICAgIHRocm93IGV4Y2VwdGlvbjtcbiAgICB9XG5cbiAgICBjb25zdCBwcmltaXRpdmVWYWx1ZSA9IHRlcm0uZ2V0UHJpbWl0aXZlVmFsdWUoKSxcbiAgICAgICAgICBub21pbmFsVmFsdWUgPSBwcmltaXRpdmVWYWx1ZSwgIC8vL1xuICAgICAgICAgIG5vZGUgPSBub21pbmFsVmFsdWUuZ2V0Tm9kZSgpLFxuICAgICAgICAgIG5vZGVUZXJtaW5hbE5vZGUgPSBub2RlLmlzVGVybWluYWxOb2RlKCk7XG5cbiAgICBpZiAoIW5vZGVUZXJtaW5hbE5vZGUpIHtcbiAgICAgIGNvbnN0IHRlcm1TdHJpbmcgPSB0ZXJtLmdldFN0cmluZygpLFxuICAgICAgICAgICAgbWVzc2FnZSA9IGBUaGUgJyR7dGVybVN0cmluZ30nIHRlcm0ncyBub2RlIG11c3QgYmUgdGVybWluYWwuYCxcbiAgICAgICAgICAgIGV4Y2VwdGlvbiA9IEV4Y2VwdGlvbi5mcm9tTWVzc2FnZShtZXNzYWdlKTtcblxuICAgICAgdGhyb3cgZXhjZXB0aW9uO1xuICAgIH1cblxuICAgIGNvbnN0IHRlcm1pbmFsTm9kZSA9IG5vZGUsICAvLy9cbiAgICAgICAgICBjb250ZW50ID0gdGVybWluYWxOb2RlLmdldENvbnRlbnQoKSxcbiAgICAgICAgICBzdHJpbmcgPSBjb250ZW50LCAgLy8vXG4gICAgICAgICAgc3RyaW5nTGl0ZXJhbCA9IHN0cmluZ0xpdGVyYWxGcm9tU3RyaW5nKHN0cmluZyk7XG5cbiAgICB0ZXJtID0gdGVybUZyb21TdHJpbmdMaXRlcmFsKHN0cmluZ0xpdGVyYWwsIGNvbnRleHQpO1xuXG4gICAgY29uc3QgdGVybVN0dHJpbmcgPSB0ZXJtLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC5kZWJ1ZyhgLi4uZXZhbHVhdGVkIHRoZSBjb250ZW50ICcke25hbWVkQmluZGluZ1N0cmluZ30nIG5hbWVkIGJpbmRpbmcgYXMgJyR7dGVybVN0dHJpbmd9Jy5gKTtcblxuICAgIHJldHVybiB0ZXJtO1xuICB9XG5cbiAgZXZhbHVhdGVUZXJtaW5hbE5hbWVkQmluZGluZyhuYW1lZEJpbmRpbmcsIHRlcm0sIGNvbnRleHQpIHtcbiAgICBjb25zdCB0eXBlID0gbmFtZWRCaW5kaW5nLmdldFR5cGUoKSxcbiAgICAgICAgICBuYW1lZEJpbmRpbmdTdHJpbmcgPSBuYW1lZEJpbmRpbmcuZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBFdmFsdWF0aW5nIHRoZSB0ZXJtaW5hbCAnJHtuYW1lZEJpbmRpbmdTdHJpbmd9JyBuYW1lZCBiaW5kaW5nLi4uYCk7XG5cbiAgICBpZiAodHlwZSAhPT0gQk9PTEVBTl9UWVBFKSB7XG4gICAgICBjb25zdCBuYW1lZEJpbmRpbmdTdHJpbmcgPSBuYW1lZEJpbmRpbmcuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgICBtZXNzYWdlID0gYFRoZSAnJHtuYW1lZEJpbmRpbmdTdHJpbmd9JyBuYW1lZCBiaW5kaW5nJ3MgdHlwZSBzaG91bGQgYmUgJyR7Qk9PTEVBTl9UWVBFfScuYCxcbiAgICAgICAgICAgIGV4Y2VwdGlvbiA9IEV4Y2VwdGlvbi5mcm9tTWVzc2FnZShtZXNzYWdlKTtcblxuICAgICAgdGhyb3cgZXhjZXB0aW9uO1xuICAgIH1cblxuICAgIGNvbnN0IHByaW1pdGl2ZVZhbHVlID0gdGVybS5nZXRQcmltaXRpdmVWYWx1ZSgpLFxuICAgICAgICAgIG5vbWluYWxWYWx1ZSA9IHByaW1pdGl2ZVZhbHVlLCAgLy8vXG4gICAgICAgICAgbm9kZSA9IG5vbWluYWxWYWx1ZS5nZXROb2RlKCksXG4gICAgICAgICAgbm9kZVRlcm1pbmFsTm9kZSA9IG5vZGUuaXNUZXJtaW5hbE5vZGUoKSxcbiAgICAgICAgICB0ZXJtaW5hbCA9IG5vZGVUZXJtaW5hbE5vZGU7ICAvLy9cblxuICAgIGNvbnN0IGJvb2xlYW4gPSB0ZXJtaW5hbDsgLy8vXG5cbiAgICB0ZXJtID0gdGVybUZyb21Cb29sZWFuKGJvb2xlYW4sIGNvbnRleHQpOyAgLy8vXG5cbiAgICBjb25zdCB0ZXJtU3R0cmluZyA9IHRlcm0uZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LmRlYnVnKGAuLi5ldmFsdWF0ZWQgdGhlIHRlcm1pbmFsICcke25hbWVkQmluZGluZ1N0cmluZ30nIG5hbWVkIGJpbmRpbmcgYXMgJyR7dGVybVN0dHJpbmd9Jy5gKTtcblxuICAgIHJldHVybiB0ZXJtO1xuICB9XG5cbiAgZXZhbHVhdGVDaGlsZE5vZGVzTmFtZWRCaW5kaW5nKG5hbWVkQmluZGluZywgdGVybSwgY29udGV4dCkge1xuICAgIGNvbnN0IHR5cGUgPSBuYW1lZEJpbmRpbmcuZ2V0VHlwZSgpLFxuICAgICAgICAgIG5hbWVkQmluZGluZ1N0cmluZyA9IG5hbWVkQmluZGluZy5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYEV2YWx1YXRpbmcgdGhlIGNoaWxkIG5vZGVzICcke25hbWVkQmluZGluZ1N0cmluZ30nIG5hbWVkIGJpbmRpbmcuLi5gKTtcblxuICAgIGlmICh0eXBlICE9PSBOT01JTkFMX1ZBTFVFU19UWVBFKSB7XG4gICAgICBjb25zdCBuYW1lZEJpbmRpbmdTdHJpbmcgPSBuYW1lZEJpbmRpbmcuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgICBtZXNzYWdlID0gYFRoZSAnJHtuYW1lZEJpbmRpbmdTdHJpbmd9JyBuYW1lZCBiaW5kaW5nJ3MgdHlwZSBzaG91bGQgYmUgJyR7Tk9NSU5BTF9WQUxVRVNfVFlQRX0nLmAsXG4gICAgICAgICAgICBleGNlcHRpb24gPSBFeGNlcHRpb24uZnJvbU1lc3NhZ2UobWVzc2FnZSk7XG5cbiAgICAgIHRocm93IGV4Y2VwdGlvbjtcbiAgICB9XG5cbiAgICBjb25zdCBwcmltaXRpdmVWYWx1ZSA9IHRlcm0uZ2V0UHJpbWl0aXZlVmFsdWUoKSxcbiAgICAgICAgICBub21pbmFsVmFsdWUgPSBwcmltaXRpdmVWYWx1ZSwgIC8vL1xuICAgICAgICAgIG5vZGUgPSBub21pbmFsVmFsdWUuZ2V0Tm9kZSgpLFxuICAgICAgICAgIG5vZGVOb25UZXJtaW5hbE5vZGUgPSBub2RlLmlzTm9uVGVybWluYWxOb2RlKCk7XG5cbiAgICBpZiAoIW5vZGVOb25UZXJtaW5hbE5vZGUpIHtcbiAgICAgIGNvbnN0IHRlcm1TdHJpbmcgPSB0ZXJtLmdldFN0cmluZygpLFxuICAgICAgICAgICAgbWVzc2FnZSA9IGBUaGUgJyR7dGVybVN0cmluZ30nIHRlcm0ncyBub2RlIG11c3QgYmUgbm9uLXRlcm1pbmFsLmAsXG4gICAgICAgICAgICBleGNlcHRpb24gPSBFeGNlcHRpb24uZnJvbU1lc3NhZ2UobWVzc2FnZSk7XG5cbiAgICAgIHRocm93IGV4Y2VwdGlvbjtcbiAgICB9XG5cbiAgICBjb25zdCBub25UZXJtaW5hbE5vZGUgPSBub2RlLCAgLy8vXG4gICAgICAgICAgY2hpbGROb2RlcyA9IG5vblRlcm1pbmFsTm9kZS5nZXRDaGlsZE5vZGVzKCksXG4gICAgICAgICAgbm9kZXMgPSBjaGlsZE5vZGVzOyAgLy8vXG5cbiAgICB0ZXJtID0gdGVybUZyb21Ob2Rlc0FuZE5vbWluYWxWYWx1ZShub2Rlcywgbm9taW5hbFZhbHVlKTtcblxuICAgIGNvbnN0IHRlcm1TdHRyaW5nID0gdGVybS5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQuZGVidWcoYC4uLmV2YWx1YXRlZCB0aGUgY2hpbGROb2RlcyAnJHtuYW1lZEJpbmRpbmdTdHJpbmd9JyBuYW1lZCBiaW5kaW5nIGFzICcke3Rlcm1TdHRyaW5nfScuYCk7XG5cbiAgICByZXR1cm4gdGVybTtcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJPYmplY3RBc3NpZ21lbnRcIjtcbn0pO1xuIl0sIm5hbWVzIjpbImRlZmluZSIsIk9iamVjdEFzc2lnbWVudCIsIkVsZW1lbnQiLCJjb250ZXh0Iiwic3RyaW5nIiwibm9kZSIsImJyZWFrUG9pbnQiLCJ2YXJpYWJsZSIsIm5hbWVkQmluZGluZ3MiLCJnZXRWYXJpYWJsZSIsImdldE5hbWVkQmluZGluZ3MiLCJldmFsdWF0ZSIsIm9iamVjdEFzc2lnbm1lbnRTdHJpbmciLCJnZXRTdHJpbmciLCJ0cmFjZSIsInZhbHVlIiwidmFsdWVUeXBlIiwiZ2V0VHlwZSIsIk5PTUlOQUxfVkFMVUVfVFlQRSIsInZhbHVlU3RyaW5nIiwibWVzc2FnZSIsImV4Y2VwdGlvbiIsIkV4Y2VwdGlvbiIsImZyb21NZXNzYWdlIiwibm9kZVByb3BlcnRpZXMiLCJjb21wYXJlTmFtZWRCaW5kaW5ncyIsImZvckVhY2hOYW1lZEJpbmRpbmciLCJuYW1lZEJpbmRpbmciLCJldmFsdWF0ZU5hbWVkQmluZGluZyIsImRlYnVnIiwidGVybSIsInRlcm1TdHJpbmciLCJuYW1lZEJpbmRpbmdTdHJpbmciLCJuYW1lIiwiZ2V0TmFtZSIsIkNPTlRFTlRfUEFSQU1FVEVSX05BTUUiLCJldmFsdWF0ZUNvbnRlbnROYW1lZEJpbmRpbmciLCJURVJNSU5BTF9QQVJBTUVURVJfTkFNRSIsImV2YWx1YXRlVGVybWluYWxOYW1lZEJpbmRpbmciLCJDSElMRF9OT0RFU19QQVJBTUVURVJfTkFNRSIsImV2YWx1YXRlQ2hpbGROb2Rlc05hbWVkQmluZGluZyIsIlZhcmlhYmxlIiwiZWxlbWVudHMiLCJmcm9tTmFtZWRCaW5kaW5nIiwiYXNzaWduIiwidHlwZSIsIlNUUklOR19UWVBFIiwicHJpbWl0aXZlVmFsdWUiLCJnZXRQcmltaXRpdmVWYWx1ZSIsIm5vbWluYWxWYWx1ZSIsImdldE5vZGUiLCJub2RlVGVybWluYWxOb2RlIiwiaXNUZXJtaW5hbE5vZGUiLCJ0ZXJtaW5hbE5vZGUiLCJjb250ZW50IiwiZ2V0Q29udGVudCIsInN0cmluZ0xpdGVyYWwiLCJzdHJpbmdMaXRlcmFsRnJvbVN0cmluZyIsInRlcm1Gcm9tU3RyaW5nTGl0ZXJhbCIsInRlcm1TdHRyaW5nIiwiQk9PTEVBTl9UWVBFIiwidGVybWluYWwiLCJib29sZWFuIiwidGVybUZyb21Cb29sZWFuIiwiTk9NSU5BTF9WQUxVRVNfVFlQRSIsIm5vZGVOb25UZXJtaW5hbE5vZGUiLCJpc05vblRlcm1pbmFsTm9kZSIsIm5vblRlcm1pbmFsTm9kZSIsImNoaWxkTm9kZXMiLCJnZXRDaGlsZE5vZGVzIiwibm9kZXMiLCJ0ZXJtRnJvbU5vZGVzQW5kTm9taW5hbFZhbHVlIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFlQTs7O2VBQUE7OztnQ0Fid0I7a0VBRUg7a0VBQ0M7dUVBQ0s7K0JBR2E7eUJBQ0s7c0JBQ1U7dUJBQzRCO2dDQUNTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztNQUU1RixXQUFlQSxJQUFBQSxnQkFBTSxFQUFDLE1BQU1DLHdCQUF3QkMsdUJBQU87SUFDekQsWUFBWUMsT0FBTyxFQUFFQyxNQUFNLEVBQUVDLElBQUksRUFBRUMsVUFBVSxFQUFFQyxRQUFRLEVBQUVDLGFBQWEsQ0FBRTtRQUN0RSxLQUFLLENBQUNMLFNBQVNDLFFBQVFDLE1BQU1DO1FBRTdCLElBQUksQ0FBQ0MsUUFBUSxHQUFHQTtRQUNoQixJQUFJLENBQUNDLGFBQWEsR0FBR0E7SUFDdkI7SUFFQUMsY0FBYztRQUNaLE9BQU8sSUFBSSxDQUFDRixRQUFRO0lBQ3RCO0lBRUFHLG1CQUFtQjtRQUNqQixPQUFPLElBQUksQ0FBQ0YsYUFBYTtJQUMzQjtJQUVBRyxTQUFTUixPQUFPLEVBQUU7UUFDaEIsTUFBTVMseUJBQXlCLElBQUksQ0FBQ0MsU0FBUyxJQUFJLEdBQUc7UUFFcERWLFFBQVFXLEtBQUssQ0FBQyxDQUFDLGdCQUFnQixFQUFFRix1QkFBdUIsc0JBQXNCLENBQUM7UUFFL0UsTUFBTUcsUUFBUSxJQUFJLENBQUNSLFFBQVEsQ0FBQ0ksUUFBUSxDQUFDUixVQUMvQmEsWUFBWUQsTUFBTUUsT0FBTztRQUUvQixJQUFJRCxjQUFjRSx5QkFBa0IsRUFBRTtZQUNwQyxNQUFNQyxjQUFjSixNQUFNRixTQUFTLElBQzdCTyxVQUFVLENBQUMsS0FBSyxFQUFFRCxZQUFZLFdBQVcsRUFBRUgsVUFBVSxrQkFBa0IsRUFBRUUseUJBQWtCLENBQUMsRUFBRSxDQUFDLEVBQy9GRyxZQUFZQyxrQkFBUyxDQUFDQyxXQUFXLENBQUNIO1lBRXhDLE1BQU1DO1FB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