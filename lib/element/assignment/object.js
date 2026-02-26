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
const _types = require("../../types");
const _term = require("../../utilities/term");
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
    constructor(context, string, node, variable, namedParameters){
        super(context, string, node);
        this.variable = variable;
        this.namedParameters = namedParameters;
    }
    getVariable() {
        return this.variable;
    }
    getNamedParameters() {
        return this.namedParameters;
    }
    evaluate(context) {
        const objectAssignmentString = this.getString(); ///
        context.trace(`Evaluating the '${objectAssignmentString}' object assignment...`);
        const term = this.variable.evaluate(context), termType = term.getType();
        if (termType !== _types.NODE_TYPE) {
            const termString = term.getString(), message = `The '${termString}' term's '${termType}' type should be '${_types.NODE_TYPE}'.`, exception = _exception.default.fromMessage(message);
            throw exception;
        }
        _nodeProperties.default.compareNamedParameters(this.namedParameters, context);
        this.namedParameters.forEachNamedParameter((namedParameter)=>{
            this.evaluateNamedParameter(namedParameter, term, context);
        });
        context.debug(`...evaluated the '${objectAssignmentString}' object assignment.`);
    }
    evaluateNamedParameter(namedParameter, term, context) {
        const termString = term.getString(), namedParameterString = namedParameter.getString();
        context.trace(`Evaluating the '${namedParameterString}' named parameter against the '${termString}' term...`);
        const name = namedParameter.getName();
        switch(name){
            case _parameterNames.CONTENT_PARAMETER_NAME:
                {
                    term = this.evaluateContentNamedParameter(namedParameter, term, context);
                    break;
                }
            case _parameterNames.TERMINAL_PARAMETER_NAME:
                {
                    term = this.evaluateTerminalNamedParameter(namedParameter, term, context);
                    break;
                }
            case _parameterNames.CHILD_NODES_PARAMETER_NAME:
                {
                    term = this.evaluateChildNodesNamedParameter(namedParameter, term, context);
                    break;
                }
        }
        const { Variable } = _elements.default, variable = Variable.fromNamedParameter(namedParameter, context);
        variable.assign(term, context);
        context.debug(`...evaluated the '${namedParameterString}' parameter named against the '${termString}' term.`);
    }
    evaluateContentNamedParameter(namedParameter, term, context) {
        const type = namedParameter.getType(), namedParameterString = namedParameter.getString();
        context.trace(`Evaluating the content '${namedParameterString}' named parameter...`);
        if (type !== _types.STRING_TYPE) {
            const namedParameterString = namedParameter.getString(), message = `The '${namedParameterString}' named parameter's type should be '${_types.STRING_TYPE}'.`, exception = _exception.default.fromMessage(message);
            throw exception;
        }
        const primitiveValue = term.getPrimitiveValue(), node = primitiveValue, nodeTerminalNode = node.isTerminalNode();
        if (!nodeTerminalNode) {
            const termString = term.getString(), message = `The '${termString}' term's node must be terminal.`, exception = _exception.default.fromMessage(message);
            throw exception;
        }
        const terminalNode = node, content = terminalNode.getContent(), string = content, stringLiteral = (0, _stringLiteral.stringLiteralFromString)(string);
        term = (0, _term.termFromStringLiteral)(stringLiteral, context);
        const termSttring = term.getString();
        context.debug(`...evaluated the content '${namedParameterString}' named parameter as '${termSttring}'.`);
        return term;
    }
    evaluateTerminalNamedParameter(namedParameter, term, context) {
        const type = namedParameter.getType(), namedParameterString = namedParameter.getString();
        context.trace(`Evaluating the terminal '${namedParameterString}' named parameter...`);
        if (type !== _types.BOOLEAN_TYPE) {
            const namedParameterString = namedParameter.getString(), message = `The '${namedParameterString}' named parameter's type should be '${_types.BOOLEAN_TYPE}'.`, exception = _exception.default.fromMessage(message);
            throw exception;
        }
        const primitiveValue = term.getPrimitiveValue(), node = primitiveValue, nodeTerminalNode = node.isTerminalNode(), terminal = nodeTerminalNode; ///
        const boolean = terminal; ///
        term = (0, _term.termFromBoolean)(boolean, context); ///
        const termSttring = term.getString();
        context.debug(`...evaluated the terminal '${namedParameterString}' named parameter as '${termSttring}'.`);
        return term;
    }
    evaluateChildNodesNamedParameter(namedParameter, term, context) {
        const type = namedParameter.getType(), namedParameterString = namedParameter.getString();
        context.trace(`Evaluating the child nodes '${namedParameterString}' named parameter...`);
        if (type !== _types.NODES_TYPE) {
            const namedParameterString = namedParameter.getString(), message = `The '${namedParameterString}' named parameter's type should be '${_types.NODES_TYPE}'.`, exception = _exception.default.fromMessage(message);
            throw exception;
        }
        const primitiveValue = term.getPrimitiveValue(), node = primitiveValue, nodeNonTerminalNode = node.isNonTerminalNode();
        if (!nodeNonTerminalNode) {
            const termString = term.getString(), message = `The '${termString}' term's node must be non-terminal.`, exception = _exception.default.fromMessage(message);
            throw exception;
        }
        const nonTerminalNode = node, childNodes = nonTerminalNode.getChildNodes(), nodes = childNodes; ///
        term = (0, _term.termFromNodes)(nodes, context);
        const termSttring = term.getString();
        context.debug(`...evaluated the childNodes '${namedParameterString}' named parameter as '${termSttring}'.`);
        return term;
    }
    static name = "ObjectAssigment";
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L2Fzc2lnbm1lbnQvb2JqZWN0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBFbGVtZW50IH0gZnJvbSBcIm9jY2FtLWxhbmd1YWdlc1wiO1xuXG5pbXBvcnQgZWxlbWVudHMgZnJvbSBcIi4uLy4uL2VsZW1lbnRzXCI7XG5pbXBvcnQgRXhjZXB0aW9uIGZyb20gXCIuLi8uLi9leGNlcHRpb25cIjtcbmltcG9ydCBub2RlUHJvcGVydGllcyBmcm9tIFwiLi4vLi4vbm9kZVByb3BlcnRpZXNcIjtcblxuaW1wb3J0IHsgZGVmaW5lIH0gZnJvbSBcIi4uLy4uL2VsZW1lbnRzXCI7XG5pbXBvcnQgeyBzdHJpbmdMaXRlcmFsRnJvbVN0cmluZyB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvc3RyaW5nTGl0ZXJhbFwiO1xuaW1wb3J0IHsgTk9ERV9UWVBFLCBOT0RFU19UWVBFLCBTVFJJTkdfVFlQRSwgQk9PTEVBTl9UWVBFIH0gZnJvbSBcIi4uLy4uL3R5cGVzXCI7XG5pbXBvcnQgeyB0ZXJtRnJvbU5vZGVzLCB0ZXJtRnJvbUJvb2xlYW4sIHRlcm1Gcm9tU3RyaW5nTGl0ZXJhbCB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvdGVybVwiO1xuaW1wb3J0IHsgQ09OVEVOVF9QQVJBTUVURVJfTkFNRSwgVEVSTUlOQUxfUEFSQU1FVEVSX05BTUUsIENISUxEX05PREVTX1BBUkFNRVRFUl9OQU1FIH0gZnJvbSBcIi4uLy4uL3BhcmFtZXRlck5hbWVzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZShjbGFzcyBPYmplY3RBc3NpZ21lbnQgZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgc3RyaW5nLCBub2RlLCB2YXJpYWJsZSwgbmFtZWRQYXJhbWV0ZXJzKSB7XG4gICAgc3VwZXIoY29udGV4dCwgc3RyaW5nLCBub2RlKVxuXG4gICAgdGhpcy52YXJpYWJsZSA9IHZhcmlhYmxlO1xuICAgIHRoaXMubmFtZWRQYXJhbWV0ZXJzID0gbmFtZWRQYXJhbWV0ZXJzO1xuICB9XG5cbiAgZ2V0VmFyaWFibGUoKSB7XG4gICAgcmV0dXJuIHRoaXMudmFyaWFibGU7XG4gIH1cblxuICBnZXROYW1lZFBhcmFtZXRlcnMoKSB7XG4gICAgcmV0dXJuIHRoaXMubmFtZWRQYXJhbWV0ZXJzO1xuICB9XG5cbiAgZXZhbHVhdGUoY29udGV4dCkge1xuICAgIGNvbnN0IG9iamVjdEFzc2lnbm1lbnRTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYEV2YWx1YXRpbmcgdGhlICcke29iamVjdEFzc2lnbm1lbnRTdHJpbmd9JyBvYmplY3QgYXNzaWdubWVudC4uLmApO1xuXG4gICAgY29uc3QgdGVybSA9IHRoaXMudmFyaWFibGUuZXZhbHVhdGUoY29udGV4dCksXG4gICAgICAgICAgdGVybVR5cGUgPSB0ZXJtLmdldFR5cGUoKTtcblxuICAgIGlmICh0ZXJtVHlwZSAhPT0gTk9ERV9UWVBFKSB7XG4gICAgICBjb25zdCB0ZXJtU3RyaW5nID0gdGVybS5nZXRTdHJpbmcoKSxcbiAgICAgICAgICAgIG1lc3NhZ2UgPSBgVGhlICcke3Rlcm1TdHJpbmd9JyB0ZXJtJ3MgJyR7dGVybVR5cGV9JyB0eXBlIHNob3VsZCBiZSAnJHtOT0RFX1RZUEV9Jy5gLFxuICAgICAgICAgICAgZXhjZXB0aW9uID0gRXhjZXB0aW9uLmZyb21NZXNzYWdlKG1lc3NhZ2UpO1xuXG4gICAgICB0aHJvdyBleGNlcHRpb247XG4gICAgfVxuXG4gICAgbm9kZVByb3BlcnRpZXMuY29tcGFyZU5hbWVkUGFyYW1ldGVycyh0aGlzLm5hbWVkUGFyYW1ldGVycywgY29udGV4dCk7XG5cbiAgICB0aGlzLm5hbWVkUGFyYW1ldGVycy5mb3JFYWNoTmFtZWRQYXJhbWV0ZXIoKG5hbWVkUGFyYW1ldGVyKSA9PiB7XG4gICAgICB0aGlzLmV2YWx1YXRlTmFtZWRQYXJhbWV0ZXIobmFtZWRQYXJhbWV0ZXIsIHRlcm0sIGNvbnRleHQpO1xuICAgIH0pO1xuXG4gICAgY29udGV4dC5kZWJ1ZyhgLi4uZXZhbHVhdGVkIHRoZSAnJHtvYmplY3RBc3NpZ25tZW50U3RyaW5nfScgb2JqZWN0IGFzc2lnbm1lbnQuYCk7XG4gIH1cblxuICBldmFsdWF0ZU5hbWVkUGFyYW1ldGVyKG5hbWVkUGFyYW1ldGVyLCB0ZXJtLCBjb250ZXh0KSB7XG4gICAgY29uc3QgdGVybVN0cmluZyA9IHRlcm0uZ2V0U3RyaW5nKCksXG4gICAgICAgICAgbmFtZWRQYXJhbWV0ZXJTdHJpbmcgPSBuYW1lZFBhcmFtZXRlci5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYEV2YWx1YXRpbmcgdGhlICcke25hbWVkUGFyYW1ldGVyU3RyaW5nfScgbmFtZWQgcGFyYW1ldGVyIGFnYWluc3QgdGhlICcke3Rlcm1TdHJpbmd9JyB0ZXJtLi4uYCk7XG5cbiAgICBjb25zdCBuYW1lID0gbmFtZWRQYXJhbWV0ZXIuZ2V0TmFtZSgpO1xuXG4gICAgc3dpdGNoIChuYW1lKSB7XG4gICAgICBjYXNlIENPTlRFTlRfUEFSQU1FVEVSX05BTUU6IHtcbiAgICAgICAgdGVybSA9IHRoaXMuZXZhbHVhdGVDb250ZW50TmFtZWRQYXJhbWV0ZXIobmFtZWRQYXJhbWV0ZXIsIHRlcm0sIGNvbnRleHQpO1xuXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBjYXNlIFRFUk1JTkFMX1BBUkFNRVRFUl9OQU1FOiB7XG4gICAgICAgIHRlcm0gPSB0aGlzLmV2YWx1YXRlVGVybWluYWxOYW1lZFBhcmFtZXRlcihuYW1lZFBhcmFtZXRlciwgdGVybSwgY29udGV4dCk7XG5cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIGNhc2UgQ0hJTERfTk9ERVNfUEFSQU1FVEVSX05BTUU6IHtcbiAgICAgICAgdGVybSA9IHRoaXMuZXZhbHVhdGVDaGlsZE5vZGVzTmFtZWRQYXJhbWV0ZXIobmFtZWRQYXJhbWV0ZXIsIHRlcm0sIGNvbnRleHQpO1xuXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IHsgVmFyaWFibGUgfSA9IGVsZW1lbnRzLFxuICAgICAgICAgIHZhcmlhYmxlID0gVmFyaWFibGUuZnJvbU5hbWVkUGFyYW1ldGVyKG5hbWVkUGFyYW1ldGVyLCBjb250ZXh0KTtcblxuICAgIHZhcmlhYmxlLmFzc2lnbih0ZXJtLCBjb250ZXh0KTtcblxuICAgIGNvbnRleHQuZGVidWcoYC4uLmV2YWx1YXRlZCB0aGUgJyR7bmFtZWRQYXJhbWV0ZXJTdHJpbmd9JyBwYXJhbWV0ZXIgbmFtZWQgYWdhaW5zdCB0aGUgJyR7dGVybVN0cmluZ30nIHRlcm0uYCk7XG4gIH1cblxuICBldmFsdWF0ZUNvbnRlbnROYW1lZFBhcmFtZXRlcihuYW1lZFBhcmFtZXRlciwgdGVybSwgY29udGV4dCkge1xuICAgIGNvbnN0IHR5cGUgPSBuYW1lZFBhcmFtZXRlci5nZXRUeXBlKCksXG4gICAgICAgICAgbmFtZWRQYXJhbWV0ZXJTdHJpbmcgPSBuYW1lZFBhcmFtZXRlci5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYEV2YWx1YXRpbmcgdGhlIGNvbnRlbnQgJyR7bmFtZWRQYXJhbWV0ZXJTdHJpbmd9JyBuYW1lZCBwYXJhbWV0ZXIuLi5gKTtcblxuICAgIGlmICh0eXBlICE9PSBTVFJJTkdfVFlQRSkge1xuICAgICAgY29uc3QgbmFtZWRQYXJhbWV0ZXJTdHJpbmcgPSBuYW1lZFBhcmFtZXRlci5nZXRTdHJpbmcoKSxcbiAgICAgICAgICAgIG1lc3NhZ2UgPSBgVGhlICcke25hbWVkUGFyYW1ldGVyU3RyaW5nfScgbmFtZWQgcGFyYW1ldGVyJ3MgdHlwZSBzaG91bGQgYmUgJyR7U1RSSU5HX1RZUEV9Jy5gLFxuICAgICAgICAgICAgZXhjZXB0aW9uID0gRXhjZXB0aW9uLmZyb21NZXNzYWdlKG1lc3NhZ2UpO1xuXG4gICAgICB0aHJvdyBleGNlcHRpb247XG4gICAgfVxuXG4gICAgY29uc3QgcHJpbWl0aXZlVmFsdWUgPSB0ZXJtLmdldFByaW1pdGl2ZVZhbHVlKCksXG4gICAgICAgICAgbm9kZSA9IHByaW1pdGl2ZVZhbHVlLCAgLy8vXG4gICAgICAgICAgbm9kZVRlcm1pbmFsTm9kZSA9IG5vZGUuaXNUZXJtaW5hbE5vZGUoKTtcblxuICAgIGlmICghbm9kZVRlcm1pbmFsTm9kZSkge1xuICAgICAgY29uc3QgdGVybVN0cmluZyA9IHRlcm0uZ2V0U3RyaW5nKCksXG4gICAgICAgICAgICBtZXNzYWdlID0gYFRoZSAnJHt0ZXJtU3RyaW5nfScgdGVybSdzIG5vZGUgbXVzdCBiZSB0ZXJtaW5hbC5gLFxuICAgICAgICAgICAgZXhjZXB0aW9uID0gRXhjZXB0aW9uLmZyb21NZXNzYWdlKG1lc3NhZ2UpO1xuXG4gICAgICB0aHJvdyBleGNlcHRpb247XG4gICAgfVxuXG4gICAgY29uc3QgdGVybWluYWxOb2RlID0gbm9kZSwgIC8vL1xuICAgICAgICAgIGNvbnRlbnQgPSB0ZXJtaW5hbE5vZGUuZ2V0Q29udGVudCgpLFxuICAgICAgICAgIHN0cmluZyA9IGNvbnRlbnQsICAvLy9cbiAgICAgICAgICBzdHJpbmdMaXRlcmFsID0gc3RyaW5nTGl0ZXJhbEZyb21TdHJpbmcoc3RyaW5nKTtcblxuICAgIHRlcm0gPSB0ZXJtRnJvbVN0cmluZ0xpdGVyYWwoc3RyaW5nTGl0ZXJhbCwgY29udGV4dCk7XG5cbiAgICBjb25zdCB0ZXJtU3R0cmluZyA9IHRlcm0uZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LmRlYnVnKGAuLi5ldmFsdWF0ZWQgdGhlIGNvbnRlbnQgJyR7bmFtZWRQYXJhbWV0ZXJTdHJpbmd9JyBuYW1lZCBwYXJhbWV0ZXIgYXMgJyR7dGVybVN0dHJpbmd9Jy5gKTtcblxuICAgIHJldHVybiB0ZXJtO1xuICB9XG5cbiAgZXZhbHVhdGVUZXJtaW5hbE5hbWVkUGFyYW1ldGVyKG5hbWVkUGFyYW1ldGVyLCB0ZXJtLCBjb250ZXh0KSB7XG4gICAgY29uc3QgdHlwZSA9IG5hbWVkUGFyYW1ldGVyLmdldFR5cGUoKSxcbiAgICAgICAgICBuYW1lZFBhcmFtZXRlclN0cmluZyA9IG5hbWVkUGFyYW1ldGVyLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgRXZhbHVhdGluZyB0aGUgdGVybWluYWwgJyR7bmFtZWRQYXJhbWV0ZXJTdHJpbmd9JyBuYW1lZCBwYXJhbWV0ZXIuLi5gKTtcblxuICAgIGlmICh0eXBlICE9PSBCT09MRUFOX1RZUEUpIHtcbiAgICAgIGNvbnN0IG5hbWVkUGFyYW1ldGVyU3RyaW5nID0gbmFtZWRQYXJhbWV0ZXIuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgICBtZXNzYWdlID0gYFRoZSAnJHtuYW1lZFBhcmFtZXRlclN0cmluZ30nIG5hbWVkIHBhcmFtZXRlcidzIHR5cGUgc2hvdWxkIGJlICcke0JPT0xFQU5fVFlQRX0nLmAsXG4gICAgICAgICAgICBleGNlcHRpb24gPSBFeGNlcHRpb24uZnJvbU1lc3NhZ2UobWVzc2FnZSk7XG5cbiAgICAgIHRocm93IGV4Y2VwdGlvbjtcbiAgICB9XG5cbiAgICBjb25zdCBwcmltaXRpdmVWYWx1ZSA9IHRlcm0uZ2V0UHJpbWl0aXZlVmFsdWUoKSxcbiAgICAgICAgICBub2RlID0gcHJpbWl0aXZlVmFsdWUsICAvLy9cbiAgICAgICAgICBub2RlVGVybWluYWxOb2RlID0gbm9kZS5pc1Rlcm1pbmFsTm9kZSgpLFxuICAgICAgICAgIHRlcm1pbmFsID0gbm9kZVRlcm1pbmFsTm9kZTsgIC8vL1xuXG4gICAgY29uc3QgYm9vbGVhbiA9IHRlcm1pbmFsOyAvLy9cblxuICAgIHRlcm0gPSB0ZXJtRnJvbUJvb2xlYW4oYm9vbGVhbiwgY29udGV4dCk7ICAvLy9cblxuICAgIGNvbnN0IHRlcm1TdHRyaW5nID0gdGVybS5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQuZGVidWcoYC4uLmV2YWx1YXRlZCB0aGUgdGVybWluYWwgJyR7bmFtZWRQYXJhbWV0ZXJTdHJpbmd9JyBuYW1lZCBwYXJhbWV0ZXIgYXMgJyR7dGVybVN0dHJpbmd9Jy5gKTtcblxuICAgIHJldHVybiB0ZXJtO1xuICB9XG5cbiAgZXZhbHVhdGVDaGlsZE5vZGVzTmFtZWRQYXJhbWV0ZXIobmFtZWRQYXJhbWV0ZXIsIHRlcm0sIGNvbnRleHQpIHtcbiAgICBjb25zdCB0eXBlID0gbmFtZWRQYXJhbWV0ZXIuZ2V0VHlwZSgpLFxuICAgICAgICAgIG5hbWVkUGFyYW1ldGVyU3RyaW5nID0gbmFtZWRQYXJhbWV0ZXIuZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBFdmFsdWF0aW5nIHRoZSBjaGlsZCBub2RlcyAnJHtuYW1lZFBhcmFtZXRlclN0cmluZ30nIG5hbWVkIHBhcmFtZXRlci4uLmApO1xuXG4gICAgaWYgKHR5cGUgIT09IE5PREVTX1RZUEUpIHtcbiAgICAgIGNvbnN0IG5hbWVkUGFyYW1ldGVyU3RyaW5nID0gbmFtZWRQYXJhbWV0ZXIuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgICBtZXNzYWdlID0gYFRoZSAnJHtuYW1lZFBhcmFtZXRlclN0cmluZ30nIG5hbWVkIHBhcmFtZXRlcidzIHR5cGUgc2hvdWxkIGJlICcke05PREVTX1RZUEV9Jy5gLFxuICAgICAgICAgICAgZXhjZXB0aW9uID0gRXhjZXB0aW9uLmZyb21NZXNzYWdlKG1lc3NhZ2UpO1xuXG4gICAgICB0aHJvdyBleGNlcHRpb247XG4gICAgfVxuXG4gICAgY29uc3QgcHJpbWl0aXZlVmFsdWUgPSB0ZXJtLmdldFByaW1pdGl2ZVZhbHVlKCksXG4gICAgICAgICAgbm9kZSA9IHByaW1pdGl2ZVZhbHVlLCAgLy8vXG4gICAgICAgICAgbm9kZU5vblRlcm1pbmFsTm9kZSA9IG5vZGUuaXNOb25UZXJtaW5hbE5vZGUoKTtcblxuICAgIGlmICghbm9kZU5vblRlcm1pbmFsTm9kZSkge1xuICAgICAgY29uc3QgdGVybVN0cmluZyA9IHRlcm0uZ2V0U3RyaW5nKCksXG4gICAgICAgICAgICBtZXNzYWdlID0gYFRoZSAnJHt0ZXJtU3RyaW5nfScgdGVybSdzIG5vZGUgbXVzdCBiZSBub24tdGVybWluYWwuYCxcbiAgICAgICAgICAgIGV4Y2VwdGlvbiA9IEV4Y2VwdGlvbi5mcm9tTWVzc2FnZShtZXNzYWdlKTtcblxuICAgICAgdGhyb3cgZXhjZXB0aW9uO1xuICAgIH1cblxuICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZSA9IG5vZGUsICAvLy9cbiAgICAgICAgICBjaGlsZE5vZGVzID0gbm9uVGVybWluYWxOb2RlLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgICBub2RlcyA9IGNoaWxkTm9kZXM7ICAvLy9cblxuICAgIHRlcm0gPSB0ZXJtRnJvbU5vZGVzKG5vZGVzLCBjb250ZXh0KTtcblxuICAgIGNvbnN0IHRlcm1TdHRyaW5nID0gdGVybS5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQuZGVidWcoYC4uLmV2YWx1YXRlZCB0aGUgY2hpbGROb2RlcyAnJHtuYW1lZFBhcmFtZXRlclN0cmluZ30nIG5hbWVkIHBhcmFtZXRlciBhcyAnJHt0ZXJtU3R0cmluZ30nLmApO1xuXG4gICAgcmV0dXJuIHRlcm07XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiT2JqZWN0QXNzaWdtZW50XCI7XG59KTtcbiJdLCJuYW1lcyI6WyJkZWZpbmUiLCJPYmplY3RBc3NpZ21lbnQiLCJFbGVtZW50IiwiY29udGV4dCIsInN0cmluZyIsIm5vZGUiLCJ2YXJpYWJsZSIsIm5hbWVkUGFyYW1ldGVycyIsImdldFZhcmlhYmxlIiwiZ2V0TmFtZWRQYXJhbWV0ZXJzIiwiZXZhbHVhdGUiLCJvYmplY3RBc3NpZ25tZW50U3RyaW5nIiwiZ2V0U3RyaW5nIiwidHJhY2UiLCJ0ZXJtIiwidGVybVR5cGUiLCJnZXRUeXBlIiwiTk9ERV9UWVBFIiwidGVybVN0cmluZyIsIm1lc3NhZ2UiLCJleGNlcHRpb24iLCJFeGNlcHRpb24iLCJmcm9tTWVzc2FnZSIsIm5vZGVQcm9wZXJ0aWVzIiwiY29tcGFyZU5hbWVkUGFyYW1ldGVycyIsImZvckVhY2hOYW1lZFBhcmFtZXRlciIsIm5hbWVkUGFyYW1ldGVyIiwiZXZhbHVhdGVOYW1lZFBhcmFtZXRlciIsImRlYnVnIiwibmFtZWRQYXJhbWV0ZXJTdHJpbmciLCJuYW1lIiwiZ2V0TmFtZSIsIkNPTlRFTlRfUEFSQU1FVEVSX05BTUUiLCJldmFsdWF0ZUNvbnRlbnROYW1lZFBhcmFtZXRlciIsIlRFUk1JTkFMX1BBUkFNRVRFUl9OQU1FIiwiZXZhbHVhdGVUZXJtaW5hbE5hbWVkUGFyYW1ldGVyIiwiQ0hJTERfTk9ERVNfUEFSQU1FVEVSX05BTUUiLCJldmFsdWF0ZUNoaWxkTm9kZXNOYW1lZFBhcmFtZXRlciIsIlZhcmlhYmxlIiwiZWxlbWVudHMiLCJmcm9tTmFtZWRQYXJhbWV0ZXIiLCJhc3NpZ24iLCJ0eXBlIiwiU1RSSU5HX1RZUEUiLCJwcmltaXRpdmVWYWx1ZSIsImdldFByaW1pdGl2ZVZhbHVlIiwibm9kZVRlcm1pbmFsTm9kZSIsImlzVGVybWluYWxOb2RlIiwidGVybWluYWxOb2RlIiwiY29udGVudCIsImdldENvbnRlbnQiLCJzdHJpbmdMaXRlcmFsIiwic3RyaW5nTGl0ZXJhbEZyb21TdHJpbmciLCJ0ZXJtRnJvbVN0cmluZ0xpdGVyYWwiLCJ0ZXJtU3R0cmluZyIsIkJPT0xFQU5fVFlQRSIsInRlcm1pbmFsIiwiYm9vbGVhbiIsInRlcm1Gcm9tQm9vbGVhbiIsIk5PREVTX1RZUEUiLCJub2RlTm9uVGVybWluYWxOb2RlIiwiaXNOb25UZXJtaW5hbE5vZGUiLCJub25UZXJtaW5hbE5vZGUiLCJjaGlsZE5vZGVzIiwiZ2V0Q2hpbGROb2RlcyIsIm5vZGVzIiwidGVybUZyb21Ob2RlcyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBY0E7OztlQUFBOzs7Z0NBWndCO2tFQUVIO2tFQUNDO3VFQUNLOytCQUdhO3VCQUN5QjtzQkFDSztnQ0FDc0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O01BRTVGLFdBQWVBLElBQUFBLGdCQUFNLEVBQUMsTUFBTUMsd0JBQXdCQyx1QkFBTztJQUN6RCxZQUFZQyxPQUFPLEVB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