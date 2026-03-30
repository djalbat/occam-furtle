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
    constructor(context, string, node, lineIndex, variable, namedParameters){
        super(context, string, node, lineIndex);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L2Fzc2lnbm1lbnQvb2JqZWN0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBFbGVtZW50IH0gZnJvbSBcIm9jY2FtLWxhbmd1YWdlc1wiO1xuXG5pbXBvcnQgZWxlbWVudHMgZnJvbSBcIi4uLy4uL2VsZW1lbnRzXCI7XG5pbXBvcnQgRXhjZXB0aW9uIGZyb20gXCIuLi8uLi9leGNlcHRpb25cIjtcbmltcG9ydCBub2RlUHJvcGVydGllcyBmcm9tIFwiLi4vLi4vbm9kZVByb3BlcnRpZXNcIjtcblxuaW1wb3J0IHsgZGVmaW5lIH0gZnJvbSBcIi4uLy4uL2VsZW1lbnRzXCI7XG5pbXBvcnQgeyBzdHJpbmdMaXRlcmFsRnJvbVN0cmluZyB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvc3RyaW5nTGl0ZXJhbFwiO1xuaW1wb3J0IHsgTk9ERV9UWVBFLCBOT0RFU19UWVBFLCBTVFJJTkdfVFlQRSwgQk9PTEVBTl9UWVBFIH0gZnJvbSBcIi4uLy4uL3R5cGVzXCI7XG5pbXBvcnQgeyB0ZXJtRnJvbU5vZGVzLCB0ZXJtRnJvbUJvb2xlYW4sIHRlcm1Gcm9tU3RyaW5nTGl0ZXJhbCB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvdGVybVwiO1xuaW1wb3J0IHsgQ09OVEVOVF9QQVJBTUVURVJfTkFNRSwgVEVSTUlOQUxfUEFSQU1FVEVSX05BTUUsIENISUxEX05PREVTX1BBUkFNRVRFUl9OQU1FIH0gZnJvbSBcIi4uLy4uL3BhcmFtZXRlck5hbWVzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZShjbGFzcyBPYmplY3RBc3NpZ21lbnQgZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgc3RyaW5nLCBub2RlLCBsaW5lSW5kZXgsIHZhcmlhYmxlLCBuYW1lZFBhcmFtZXRlcnMpIHtcbiAgICBzdXBlcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGxpbmVJbmRleClcblxuICAgIHRoaXMudmFyaWFibGUgPSB2YXJpYWJsZTtcbiAgICB0aGlzLm5hbWVkUGFyYW1ldGVycyA9IG5hbWVkUGFyYW1ldGVycztcbiAgfVxuXG4gIGdldFZhcmlhYmxlKCkge1xuICAgIHJldHVybiB0aGlzLnZhcmlhYmxlO1xuICB9XG5cbiAgZ2V0TmFtZWRQYXJhbWV0ZXJzKCkge1xuICAgIHJldHVybiB0aGlzLm5hbWVkUGFyYW1ldGVycztcbiAgfVxuXG4gIGV2YWx1YXRlKGNvbnRleHQpIHtcbiAgICBjb25zdCBvYmplY3RBc3NpZ25tZW50U3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBFdmFsdWF0aW5nIHRoZSAnJHtvYmplY3RBc3NpZ25tZW50U3RyaW5nfScgb2JqZWN0IGFzc2lnbm1lbnQuLi5gKTtcblxuICAgIGNvbnN0IHRlcm0gPSB0aGlzLnZhcmlhYmxlLmV2YWx1YXRlKGNvbnRleHQpLFxuICAgICAgICAgIHRlcm1UeXBlID0gdGVybS5nZXRUeXBlKCk7XG5cbiAgICBpZiAodGVybVR5cGUgIT09IE5PREVfVFlQRSkge1xuICAgICAgY29uc3QgdGVybVN0cmluZyA9IHRlcm0uZ2V0U3RyaW5nKCksXG4gICAgICAgICAgICBtZXNzYWdlID0gYFRoZSAnJHt0ZXJtU3RyaW5nfScgdGVybSdzICcke3Rlcm1UeXBlfScgdHlwZSBzaG91bGQgYmUgJyR7Tk9ERV9UWVBFfScuYCxcbiAgICAgICAgICAgIGV4Y2VwdGlvbiA9IEV4Y2VwdGlvbi5mcm9tTWVzc2FnZShtZXNzYWdlKTtcblxuICAgICAgdGhyb3cgZXhjZXB0aW9uO1xuICAgIH1cblxuICAgIG5vZGVQcm9wZXJ0aWVzLmNvbXBhcmVOYW1lZFBhcmFtZXRlcnModGhpcy5uYW1lZFBhcmFtZXRlcnMsIGNvbnRleHQpO1xuXG4gICAgdGhpcy5uYW1lZFBhcmFtZXRlcnMuZm9yRWFjaE5hbWVkUGFyYW1ldGVyKChuYW1lZFBhcmFtZXRlcikgPT4ge1xuICAgICAgdGhpcy5ldmFsdWF0ZU5hbWVkUGFyYW1ldGVyKG5hbWVkUGFyYW1ldGVyLCB0ZXJtLCBjb250ZXh0KTtcbiAgICB9KTtcblxuICAgIGNvbnRleHQuZGVidWcoYC4uLmV2YWx1YXRlZCB0aGUgJyR7b2JqZWN0QXNzaWdubWVudFN0cmluZ30nIG9iamVjdCBhc3NpZ25tZW50LmApO1xuICB9XG5cbiAgZXZhbHVhdGVOYW1lZFBhcmFtZXRlcihuYW1lZFBhcmFtZXRlciwgdGVybSwgY29udGV4dCkge1xuICAgIGNvbnN0IHRlcm1TdHJpbmcgPSB0ZXJtLmdldFN0cmluZygpLFxuICAgICAgICAgIG5hbWVkUGFyYW1ldGVyU3RyaW5nID0gbmFtZWRQYXJhbWV0ZXIuZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBFdmFsdWF0aW5nIHRoZSAnJHtuYW1lZFBhcmFtZXRlclN0cmluZ30nIG5hbWVkIHBhcmFtZXRlciBhZ2FpbnN0IHRoZSAnJHt0ZXJtU3RyaW5nfScgdGVybS4uLmApO1xuXG4gICAgY29uc3QgbmFtZSA9IG5hbWVkUGFyYW1ldGVyLmdldE5hbWUoKTtcblxuICAgIHN3aXRjaCAobmFtZSkge1xuICAgICAgY2FzZSBDT05URU5UX1BBUkFNRVRFUl9OQU1FOiB7XG4gICAgICAgIHRlcm0gPSB0aGlzLmV2YWx1YXRlQ29udGVudE5hbWVkUGFyYW1ldGVyKG5hbWVkUGFyYW1ldGVyLCB0ZXJtLCBjb250ZXh0KTtcblxuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgY2FzZSBURVJNSU5BTF9QQVJBTUVURVJfTkFNRToge1xuICAgICAgICB0ZXJtID0gdGhpcy5ldmFsdWF0ZVRlcm1pbmFsTmFtZWRQYXJhbWV0ZXIobmFtZWRQYXJhbWV0ZXIsIHRlcm0sIGNvbnRleHQpO1xuXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBjYXNlIENISUxEX05PREVTX1BBUkFNRVRFUl9OQU1FOiB7XG4gICAgICAgIHRlcm0gPSB0aGlzLmV2YWx1YXRlQ2hpbGROb2Rlc05hbWVkUGFyYW1ldGVyKG5hbWVkUGFyYW1ldGVyLCB0ZXJtLCBjb250ZXh0KTtcblxuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCB7IFZhcmlhYmxlIH0gPSBlbGVtZW50cyxcbiAgICAgICAgICB2YXJpYWJsZSA9IFZhcmlhYmxlLmZyb21OYW1lZFBhcmFtZXRlcihuYW1lZFBhcmFtZXRlciwgY29udGV4dCk7XG5cbiAgICB2YXJpYWJsZS5hc3NpZ24odGVybSwgY29udGV4dCk7XG5cbiAgICBjb250ZXh0LmRlYnVnKGAuLi5ldmFsdWF0ZWQgdGhlICcke25hbWVkUGFyYW1ldGVyU3RyaW5nfScgcGFyYW1ldGVyIG5hbWVkIGFnYWluc3QgdGhlICcke3Rlcm1TdHJpbmd9JyB0ZXJtLmApO1xuICB9XG5cbiAgZXZhbHVhdGVDb250ZW50TmFtZWRQYXJhbWV0ZXIobmFtZWRQYXJhbWV0ZXIsIHRlcm0sIGNvbnRleHQpIHtcbiAgICBjb25zdCB0eXBlID0gbmFtZWRQYXJhbWV0ZXIuZ2V0VHlwZSgpLFxuICAgICAgICAgIG5hbWVkUGFyYW1ldGVyU3RyaW5nID0gbmFtZWRQYXJhbWV0ZXIuZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBFdmFsdWF0aW5nIHRoZSBjb250ZW50ICcke25hbWVkUGFyYW1ldGVyU3RyaW5nfScgbmFtZWQgcGFyYW1ldGVyLi4uYCk7XG5cbiAgICBpZiAodHlwZSAhPT0gU1RSSU5HX1RZUEUpIHtcbiAgICAgIGNvbnN0IG5hbWVkUGFyYW1ldGVyU3RyaW5nID0gbmFtZWRQYXJhbWV0ZXIuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgICBtZXNzYWdlID0gYFRoZSAnJHtuYW1lZFBhcmFtZXRlclN0cmluZ30nIG5hbWVkIHBhcmFtZXRlcidzIHR5cGUgc2hvdWxkIGJlICcke1NUUklOR19UWVBFfScuYCxcbiAgICAgICAgICAgIGV4Y2VwdGlvbiA9IEV4Y2VwdGlvbi5mcm9tTWVzc2FnZShtZXNzYWdlKTtcblxuICAgICAgdGhyb3cgZXhjZXB0aW9uO1xuICAgIH1cblxuICAgIGNvbnN0IHByaW1pdGl2ZVZhbHVlID0gdGVybS5nZXRQcmltaXRpdmVWYWx1ZSgpLFxuICAgICAgICAgIG5vZGUgPSBwcmltaXRpdmVWYWx1ZSwgIC8vL1xuICAgICAgICAgIG5vZGVUZXJtaW5hbE5vZGUgPSBub2RlLmlzVGVybWluYWxOb2RlKCk7XG5cbiAgICBpZiAoIW5vZGVUZXJtaW5hbE5vZGUpIHtcbiAgICAgIGNvbnN0IHRlcm1TdHJpbmcgPSB0ZXJtLmdldFN0cmluZygpLFxuICAgICAgICAgICAgbWVzc2FnZSA9IGBUaGUgJyR7dGVybVN0cmluZ30nIHRlcm0ncyBub2RlIG11c3QgYmUgdGVybWluYWwuYCxcbiAgICAgICAgICAgIGV4Y2VwdGlvbiA9IEV4Y2VwdGlvbi5mcm9tTWVzc2FnZShtZXNzYWdlKTtcblxuICAgICAgdGhyb3cgZXhjZXB0aW9uO1xuICAgIH1cblxuICAgIGNvbnN0IHRlcm1pbmFsTm9kZSA9IG5vZGUsICAvLy9cbiAgICAgICAgICBjb250ZW50ID0gdGVybWluYWxOb2RlLmdldENvbnRlbnQoKSxcbiAgICAgICAgICBzdHJpbmcgPSBjb250ZW50LCAgLy8vXG4gICAgICAgICAgc3RyaW5nTGl0ZXJhbCA9IHN0cmluZ0xpdGVyYWxGcm9tU3RyaW5nKHN0cmluZyk7XG5cbiAgICB0ZXJtID0gdGVybUZyb21TdHJpbmdMaXRlcmFsKHN0cmluZ0xpdGVyYWwsIGNvbnRleHQpO1xuXG4gICAgY29uc3QgdGVybVN0dHJpbmcgPSB0ZXJtLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC5kZWJ1ZyhgLi4uZXZhbHVhdGVkIHRoZSBjb250ZW50ICcke25hbWVkUGFyYW1ldGVyU3RyaW5nfScgbmFtZWQgcGFyYW1ldGVyIGFzICcke3Rlcm1TdHRyaW5nfScuYCk7XG5cbiAgICByZXR1cm4gdGVybTtcbiAgfVxuXG4gIGV2YWx1YXRlVGVybWluYWxOYW1lZFBhcmFtZXRlcihuYW1lZFBhcmFtZXRlciwgdGVybSwgY29udGV4dCkge1xuICAgIGNvbnN0IHR5cGUgPSBuYW1lZFBhcmFtZXRlci5nZXRUeXBlKCksXG4gICAgICAgICAgbmFtZWRQYXJhbWV0ZXJTdHJpbmcgPSBuYW1lZFBhcmFtZXRlci5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYEV2YWx1YXRpbmcgdGhlIHRlcm1pbmFsICcke25hbWVkUGFyYW1ldGVyU3RyaW5nfScgbmFtZWQgcGFyYW1ldGVyLi4uYCk7XG5cbiAgICBpZiAodHlwZSAhPT0gQk9PTEVBTl9UWVBFKSB7XG4gICAgICBjb25zdCBuYW1lZFBhcmFtZXRlclN0cmluZyA9IG5hbWVkUGFyYW1ldGVyLmdldFN0cmluZygpLFxuICAgICAgICAgICAgbWVzc2FnZSA9IGBUaGUgJyR7bmFtZWRQYXJhbWV0ZXJTdHJpbmd9JyBuYW1lZCBwYXJhbWV0ZXIncyB0eXBlIHNob3VsZCBiZSAnJHtCT09MRUFOX1RZUEV9Jy5gLFxuICAgICAgICAgICAgZXhjZXB0aW9uID0gRXhjZXB0aW9uLmZyb21NZXNzYWdlKG1lc3NhZ2UpO1xuXG4gICAgICB0aHJvdyBleGNlcHRpb247XG4gICAgfVxuXG4gICAgY29uc3QgcHJpbWl0aXZlVmFsdWUgPSB0ZXJtLmdldFByaW1pdGl2ZVZhbHVlKCksXG4gICAgICAgICAgbm9kZSA9IHByaW1pdGl2ZVZhbHVlLCAgLy8vXG4gICAgICAgICAgbm9kZVRlcm1pbmFsTm9kZSA9IG5vZGUuaXNUZXJtaW5hbE5vZGUoKSxcbiAgICAgICAgICB0ZXJtaW5hbCA9IG5vZGVUZXJtaW5hbE5vZGU7ICAvLy9cblxuICAgIGNvbnN0IGJvb2xlYW4gPSB0ZXJtaW5hbDsgLy8vXG5cbiAgICB0ZXJtID0gdGVybUZyb21Cb29sZWFuKGJvb2xlYW4sIGNvbnRleHQpOyAgLy8vXG5cbiAgICBjb25zdCB0ZXJtU3R0cmluZyA9IHRlcm0uZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LmRlYnVnKGAuLi5ldmFsdWF0ZWQgdGhlIHRlcm1pbmFsICcke25hbWVkUGFyYW1ldGVyU3RyaW5nfScgbmFtZWQgcGFyYW1ldGVyIGFzICcke3Rlcm1TdHRyaW5nfScuYCk7XG5cbiAgICByZXR1cm4gdGVybTtcbiAgfVxuXG4gIGV2YWx1YXRlQ2hpbGROb2Rlc05hbWVkUGFyYW1ldGVyKG5hbWVkUGFyYW1ldGVyLCB0ZXJtLCBjb250ZXh0KSB7XG4gICAgY29uc3QgdHlwZSA9IG5hbWVkUGFyYW1ldGVyLmdldFR5cGUoKSxcbiAgICAgICAgICBuYW1lZFBhcmFtZXRlclN0cmluZyA9IG5hbWVkUGFyYW1ldGVyLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgRXZhbHVhdGluZyB0aGUgY2hpbGQgbm9kZXMgJyR7bmFtZWRQYXJhbWV0ZXJTdHJpbmd9JyBuYW1lZCBwYXJhbWV0ZXIuLi5gKTtcblxuICAgIGlmICh0eXBlICE9PSBOT0RFU19UWVBFKSB7XG4gICAgICBjb25zdCBuYW1lZFBhcmFtZXRlclN0cmluZyA9IG5hbWVkUGFyYW1ldGVyLmdldFN0cmluZygpLFxuICAgICAgICAgICAgbWVzc2FnZSA9IGBUaGUgJyR7bmFtZWRQYXJhbWV0ZXJTdHJpbmd9JyBuYW1lZCBwYXJhbWV0ZXIncyB0eXBlIHNob3VsZCBiZSAnJHtOT0RFU19UWVBFfScuYCxcbiAgICAgICAgICAgIGV4Y2VwdGlvbiA9IEV4Y2VwdGlvbi5mcm9tTWVzc2FnZShtZXNzYWdlKTtcblxuICAgICAgdGhyb3cgZXhjZXB0aW9uO1xuICAgIH1cblxuICAgIGNvbnN0IHByaW1pdGl2ZVZhbHVlID0gdGVybS5nZXRQcmltaXRpdmVWYWx1ZSgpLFxuICAgICAgICAgIG5vZGUgPSBwcmltaXRpdmVWYWx1ZSwgIC8vL1xuICAgICAgICAgIG5vZGVOb25UZXJtaW5hbE5vZGUgPSBub2RlLmlzTm9uVGVybWluYWxOb2RlKCk7XG5cbiAgICBpZiAoIW5vZGVOb25UZXJtaW5hbE5vZGUpIHtcbiAgICAgIGNvbnN0IHRlcm1TdHJpbmcgPSB0ZXJtLmdldFN0cmluZygpLFxuICAgICAgICAgICAgbWVzc2FnZSA9IGBUaGUgJyR7dGVybVN0cmluZ30nIHRlcm0ncyBub2RlIG11c3QgYmUgbm9uLXRlcm1pbmFsLmAsXG4gICAgICAgICAgICBleGNlcHRpb24gPSBFeGNlcHRpb24uZnJvbU1lc3NhZ2UobWVzc2FnZSk7XG5cbiAgICAgIHRocm93IGV4Y2VwdGlvbjtcbiAgICB9XG5cbiAgICBjb25zdCBub25UZXJtaW5hbE5vZGUgPSBub2RlLCAgLy8vXG4gICAgICAgICAgY2hpbGROb2RlcyA9IG5vblRlcm1pbmFsTm9kZS5nZXRDaGlsZE5vZGVzKCksXG4gICAgICAgICAgbm9kZXMgPSBjaGlsZE5vZGVzOyAgLy8vXG5cbiAgICB0ZXJtID0gdGVybUZyb21Ob2Rlcyhub2RlcywgY29udGV4dCk7XG5cbiAgICBjb25zdCB0ZXJtU3R0cmluZyA9IHRlcm0uZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LmRlYnVnKGAuLi5ldmFsdWF0ZWQgdGhlIGNoaWxkTm9kZXMgJyR7bmFtZWRQYXJhbWV0ZXJTdHJpbmd9JyBuYW1lZCBwYXJhbWV0ZXIgYXMgJyR7dGVybVN0dHJpbmd9Jy5gKTtcblxuICAgIHJldHVybiB0ZXJtO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIk9iamVjdEFzc2lnbWVudFwiO1xufSk7XG4iXSwibmFtZXMiOlsiZGVmaW5lIiwiT2JqZWN0QXNzaWdtZW50IiwiRWxlbWVudCIsImNvbnRleHQiLCJzdHJpbmciLCJub2RlIiwibGluZUluZGV4IiwidmFyaWFibGUiLCJuYW1lZFBhcmFtZXRlcnMiLCJnZXRWYXJpYWJsZSIsImdldE5hbWVkUGFyYW1ldGVycyIsImV2YWx1YXRlIiwib2JqZWN0QXNzaWdubWVudFN0cmluZyIsImdldFN0cmluZyIsInRyYWNlIiwidGVybSIsInRlcm1UeXBlIiwiZ2V0VHlwZSIsIk5PREVfVFlQRSIsInRlcm1TdHJpbmciLCJtZXNzYWdlIiwiZXhjZXB0aW9uIiwiRXhjZXB0aW9uIiwiZnJvbU1lc3NhZ2UiLCJub2RlUHJvcGVydGllcyIsImNvbXBhcmVOYW1lZFBhcmFtZXRlcnMiLCJmb3JFYWNoTmFtZWRQYXJhbWV0ZXIiLCJuYW1lZFBhcmFtZXRlciIsImV2YWx1YXRlTmFtZWRQYXJhbWV0ZXIiLCJkZWJ1ZyIsIm5hbWVkUGFyYW1ldGVyU3RyaW5nIiwibmFtZSIsImdldE5hbWUiLCJDT05URU5UX1BBUkFNRVRFUl9OQU1FIiwiZXZhbHVhdGVDb250ZW50TmFtZWRQYXJhbWV0ZXIiLCJURVJNSU5BTF9QQVJBTUVURVJfTkFNRSIsImV2YWx1YXRlVGVybWluYWxOYW1lZFBhcmFtZXRlciIsIkNISUxEX05PREVTX1BBUkFNRVRFUl9OQU1FIiwiZXZhbHVhdGVDaGlsZE5vZGVzTmFtZWRQYXJhbWV0ZXIiLCJWYXJpYWJsZSIsImVsZW1lbnRzIiwiZnJvbU5hbWVkUGFyYW1ldGVyIiwiYXNzaWduIiwidHlwZSIsIlNUUklOR19UWVBFIiwicHJpbWl0aXZlVmFsdWUiLCJnZXRQcmltaXRpdmVWYWx1ZSIsIm5vZGVUZXJtaW5hbE5vZGUiLCJpc1Rlcm1pbmFsTm9kZSIsInRlcm1pbmFsTm9kZSIsImNvbnRlbnQiLCJnZXRDb250ZW50Iiwic3RyaW5nTGl0ZXJhbCIsInN0cmluZ0xpdGVyYWxGcm9tU3RyaW5nIiwidGVybUZyb21TdHJpbmdMaXRlcmFsIiwidGVybVN0dHJpbmciLCJCT09MRUFOX1RZUEUiLCJ0ZXJtaW5hbCIsImJvb2xlYW4iLCJ0ZXJtRnJvbUJvb2xlYW4iLCJOT0RFU19UWVBFIiwibm9kZU5vblRlcm1pbmFsTm9kZSIsImlzTm9uVGVybWluYWxOb2RlIiwibm9uVGVybWluYWxOb2RlIiwiY2hpbGROb2RlcyIsImdldENoaWxkTm9kZXMiLCJub2RlcyIsInRlcm1Gcm9tTm9kZXMiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQWNBOzs7ZUFBQTs7O2dDQVp3QjtrRUFFSDtrRUFDQzt1RUFDSzsrQkFHYTt1QkFDeUI7c0JBQ0s7Z0NBQ3NCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztNQUU1RixXQUFlQSxJQUFBQSxnQkFBTSxFQUFDLE1BQU1D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