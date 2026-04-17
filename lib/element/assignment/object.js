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
    constructor(context, string, node, breakPoint, variable, namedParameters){
        super(context, string, node, breakPoint);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L2Fzc2lnbm1lbnQvb2JqZWN0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBFbGVtZW50IH0gZnJvbSBcIm9jY2FtLWxhbmd1YWdlc1wiO1xuXG5pbXBvcnQgZWxlbWVudHMgZnJvbSBcIi4uLy4uL2VsZW1lbnRzXCI7XG5pbXBvcnQgRXhjZXB0aW9uIGZyb20gXCIuLi8uLi9leGNlcHRpb25cIjtcbmltcG9ydCBub2RlUHJvcGVydGllcyBmcm9tIFwiLi4vLi4vbm9kZVByb3BlcnRpZXNcIjtcblxuaW1wb3J0IHsgZGVmaW5lIH0gZnJvbSBcIi4uLy4uL2VsZW1lbnRzXCI7XG5pbXBvcnQgeyBzdHJpbmdMaXRlcmFsRnJvbVN0cmluZyB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvc3RyaW5nTGl0ZXJhbFwiO1xuaW1wb3J0IHsgTk9ERV9UWVBFLCBOT0RFU19UWVBFLCBTVFJJTkdfVFlQRSwgQk9PTEVBTl9UWVBFIH0gZnJvbSBcIi4uLy4uL3R5cGVzXCI7XG5pbXBvcnQgeyB0ZXJtRnJvbU5vZGVzLCB0ZXJtRnJvbUJvb2xlYW4sIHRlcm1Gcm9tU3RyaW5nTGl0ZXJhbCB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvdGVybVwiO1xuaW1wb3J0IHsgQ09OVEVOVF9QQVJBTUVURVJfTkFNRSwgVEVSTUlOQUxfUEFSQU1FVEVSX05BTUUsIENISUxEX05PREVTX1BBUkFNRVRFUl9OQU1FIH0gZnJvbSBcIi4uLy4uL3BhcmFtZXRlck5hbWVzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZShjbGFzcyBPYmplY3RBc3NpZ21lbnQgZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgc3RyaW5nLCBub2RlLCBicmVha1BvaW50LCB2YXJpYWJsZSwgbmFtZWRQYXJhbWV0ZXJzKSB7XG4gICAgc3VwZXIoY29udGV4dCwgc3RyaW5nLCBub2RlLCBicmVha1BvaW50KTtcblxuICAgIHRoaXMudmFyaWFibGUgPSB2YXJpYWJsZTtcbiAgICB0aGlzLm5hbWVkUGFyYW1ldGVycyA9IG5hbWVkUGFyYW1ldGVycztcbiAgfVxuXG4gIGdldFZhcmlhYmxlKCkge1xuICAgIHJldHVybiB0aGlzLnZhcmlhYmxlO1xuICB9XG5cbiAgZ2V0TmFtZWRQYXJhbWV0ZXJzKCkge1xuICAgIHJldHVybiB0aGlzLm5hbWVkUGFyYW1ldGVycztcbiAgfVxuXG4gIGV2YWx1YXRlKGNvbnRleHQpIHtcbiAgICBjb25zdCBvYmplY3RBc3NpZ25tZW50U3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBFdmFsdWF0aW5nIHRoZSAnJHtvYmplY3RBc3NpZ25tZW50U3RyaW5nfScgb2JqZWN0IGFzc2lnbm1lbnQuLi5gKTtcblxuICAgIGNvbnN0IHRlcm0gPSB0aGlzLnZhcmlhYmxlLmV2YWx1YXRlKGNvbnRleHQpLFxuICAgICAgICAgIHRlcm1UeXBlID0gdGVybS5nZXRUeXBlKCk7XG5cbiAgICBpZiAodGVybVR5cGUgIT09IE5PREVfVFlQRSkge1xuICAgICAgY29uc3QgdGVybVN0cmluZyA9IHRlcm0uZ2V0U3RyaW5nKCksXG4gICAgICAgICAgICBtZXNzYWdlID0gYFRoZSAnJHt0ZXJtU3RyaW5nfScgdGVybSdzICcke3Rlcm1UeXBlfScgdHlwZSBzaG91bGQgYmUgJyR7Tk9ERV9UWVBFfScuYCxcbiAgICAgICAgICAgIGV4Y2VwdGlvbiA9IEV4Y2VwdGlvbi5mcm9tTWVzc2FnZShtZXNzYWdlKTtcblxuICAgICAgdGhyb3cgZXhjZXB0aW9uO1xuICAgIH1cblxuICAgIG5vZGVQcm9wZXJ0aWVzLmNvbXBhcmVOYW1lZFBhcmFtZXRlcnModGhpcy5uYW1lZFBhcmFtZXRlcnMsIGNvbnRleHQpO1xuXG4gICAgdGhpcy5uYW1lZFBhcmFtZXRlcnMuZm9yRWFjaE5hbWVkUGFyYW1ldGVyKChuYW1lZFBhcmFtZXRlcikgPT4ge1xuICAgICAgdGhpcy5ldmFsdWF0ZU5hbWVkUGFyYW1ldGVyKG5hbWVkUGFyYW1ldGVyLCB0ZXJtLCBjb250ZXh0KTtcbiAgICB9KTtcblxuICAgIGNvbnRleHQuZGVidWcoYC4uLmV2YWx1YXRlZCB0aGUgJyR7b2JqZWN0QXNzaWdubWVudFN0cmluZ30nIG9iamVjdCBhc3NpZ25tZW50LmApO1xuICB9XG5cbiAgZXZhbHVhdGVOYW1lZFBhcmFtZXRlcihuYW1lZFBhcmFtZXRlciwgdGVybSwgY29udGV4dCkge1xuICAgIGNvbnN0IHRlcm1TdHJpbmcgPSB0ZXJtLmdldFN0cmluZygpLFxuICAgICAgICAgIG5hbWVkUGFyYW1ldGVyU3RyaW5nID0gbmFtZWRQYXJhbWV0ZXIuZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBFdmFsdWF0aW5nIHRoZSAnJHtuYW1lZFBhcmFtZXRlclN0cmluZ30nIG5hbWVkIHBhcmFtZXRlciBhZ2FpbnN0IHRoZSAnJHt0ZXJtU3RyaW5nfScgdGVybS4uLmApO1xuXG4gICAgY29uc3QgbmFtZSA9IG5hbWVkUGFyYW1ldGVyLmdldE5hbWUoKTtcblxuICAgIHN3aXRjaCAobmFtZSkge1xuICAgICAgY2FzZSBDT05URU5UX1BBUkFNRVRFUl9OQU1FOiB7XG4gICAgICAgIHRlcm0gPSB0aGlzLmV2YWx1YXRlQ29udGVudE5hbWVkUGFyYW1ldGVyKG5hbWVkUGFyYW1ldGVyLCB0ZXJtLCBjb250ZXh0KTtcblxuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgY2FzZSBURVJNSU5BTF9QQVJBTUVURVJfTkFNRToge1xuICAgICAgICB0ZXJtID0gdGhpcy5ldmFsdWF0ZVRlcm1pbmFsTmFtZWRQYXJhbWV0ZXIobmFtZWRQYXJhbWV0ZXIsIHRlcm0sIGNvbnRleHQpO1xuXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBjYXNlIENISUxEX05PREVTX1BBUkFNRVRFUl9OQU1FOiB7XG4gICAgICAgIHRlcm0gPSB0aGlzLmV2YWx1YXRlQ2hpbGROb2Rlc05hbWVkUGFyYW1ldGVyKG5hbWVkUGFyYW1ldGVyLCB0ZXJtLCBjb250ZXh0KTtcblxuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCB7IFZhcmlhYmxlIH0gPSBlbGVtZW50cyxcbiAgICAgICAgICB2YXJpYWJsZSA9IFZhcmlhYmxlLmZyb21OYW1lZFBhcmFtZXRlcihuYW1lZFBhcmFtZXRlciwgY29udGV4dCk7XG5cbiAgICB2YXJpYWJsZS5hc3NpZ24odGVybSwgY29udGV4dCk7XG5cbiAgICBjb250ZXh0LmRlYnVnKGAuLi5ldmFsdWF0ZWQgdGhlICcke25hbWVkUGFyYW1ldGVyU3RyaW5nfScgcGFyYW1ldGVyIG5hbWVkIGFnYWluc3QgdGhlICcke3Rlcm1TdHJpbmd9JyB0ZXJtLmApO1xuICB9XG5cbiAgZXZhbHVhdGVDb250ZW50TmFtZWRQYXJhbWV0ZXIobmFtZWRQYXJhbWV0ZXIsIHRlcm0sIGNvbnRleHQpIHtcbiAgICBjb25zdCB0eXBlID0gbmFtZWRQYXJhbWV0ZXIuZ2V0VHlwZSgpLFxuICAgICAgICAgIG5hbWVkUGFyYW1ldGVyU3RyaW5nID0gbmFtZWRQYXJhbWV0ZXIuZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBFdmFsdWF0aW5nIHRoZSBjb250ZW50ICcke25hbWVkUGFyYW1ldGVyU3RyaW5nfScgbmFtZWQgcGFyYW1ldGVyLi4uYCk7XG5cbiAgICBpZiAodHlwZSAhPT0gU1RSSU5HX1RZUEUpIHtcbiAgICAgIGNvbnN0IG5hbWVkUGFyYW1ldGVyU3RyaW5nID0gbmFtZWRQYXJhbWV0ZXIuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgICBtZXNzYWdlID0gYFRoZSAnJHtuYW1lZFBhcmFtZXRlclN0cmluZ30nIG5hbWVkIHBhcmFtZXRlcidzIHR5cGUgc2hvdWxkIGJlICcke1NUUklOR19UWVBFfScuYCxcbiAgICAgICAgICAgIGV4Y2VwdGlvbiA9IEV4Y2VwdGlvbi5mcm9tTWVzc2FnZShtZXNzYWdlKTtcblxuICAgICAgdGhyb3cgZXhjZXB0aW9uO1xuICAgIH1cblxuICAgIGNvbnN0IHByaW1pdGl2ZVZhbHVlID0gdGVybS5nZXRQcmltaXRpdmVWYWx1ZSgpLFxuICAgICAgICAgIG5vZGUgPSBwcmltaXRpdmVWYWx1ZSwgIC8vL1xuICAgICAgICAgIG5vZGVUZXJtaW5hbE5vZGUgPSBub2RlLmlzVGVybWluYWxOb2RlKCk7XG5cbiAgICBpZiAoIW5vZGVUZXJtaW5hbE5vZGUpIHtcbiAgICAgIGNvbnN0IHRlcm1TdHJpbmcgPSB0ZXJtLmdldFN0cmluZygpLFxuICAgICAgICAgICAgbWVzc2FnZSA9IGBUaGUgJyR7dGVybVN0cmluZ30nIHRlcm0ncyBub2RlIG11c3QgYmUgdGVybWluYWwuYCxcbiAgICAgICAgICAgIGV4Y2VwdGlvbiA9IEV4Y2VwdGlvbi5mcm9tTWVzc2FnZShtZXNzYWdlKTtcblxuICAgICAgdGhyb3cgZXhjZXB0aW9uO1xuICAgIH1cblxuICAgIGNvbnN0IHRlcm1pbmFsTm9kZSA9IG5vZGUsICAvLy9cbiAgICAgICAgICBjb250ZW50ID0gdGVybWluYWxOb2RlLmdldENvbnRlbnQoKSxcbiAgICAgICAgICBzdHJpbmcgPSBjb250ZW50LCAgLy8vXG4gICAgICAgICAgc3RyaW5nTGl0ZXJhbCA9IHN0cmluZ0xpdGVyYWxGcm9tU3RyaW5nKHN0cmluZyk7XG5cbiAgICB0ZXJtID0gdGVybUZyb21TdHJpbmdMaXRlcmFsKHN0cmluZ0xpdGVyYWwsIGNvbnRleHQpO1xuXG4gICAgY29uc3QgdGVybVN0dHJpbmcgPSB0ZXJtLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC5kZWJ1ZyhgLi4uZXZhbHVhdGVkIHRoZSBjb250ZW50ICcke25hbWVkUGFyYW1ldGVyU3RyaW5nfScgbmFtZWQgcGFyYW1ldGVyIGFzICcke3Rlcm1TdHRyaW5nfScuYCk7XG5cbiAgICByZXR1cm4gdGVybTtcbiAgfVxuXG4gIGV2YWx1YXRlVGVybWluYWxOYW1lZFBhcmFtZXRlcihuYW1lZFBhcmFtZXRlciwgdGVybSwgY29udGV4dCkge1xuICAgIGNvbnN0IHR5cGUgPSBuYW1lZFBhcmFtZXRlci5nZXRUeXBlKCksXG4gICAgICAgICAgbmFtZWRQYXJhbWV0ZXJTdHJpbmcgPSBuYW1lZFBhcmFtZXRlci5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYEV2YWx1YXRpbmcgdGhlIHRlcm1pbmFsICcke25hbWVkUGFyYW1ldGVyU3RyaW5nfScgbmFtZWQgcGFyYW1ldGVyLi4uYCk7XG5cbiAgICBpZiAodHlwZSAhPT0gQk9PTEVBTl9UWVBFKSB7XG4gICAgICBjb25zdCBuYW1lZFBhcmFtZXRlclN0cmluZyA9IG5hbWVkUGFyYW1ldGVyLmdldFN0cmluZygpLFxuICAgICAgICAgICAgbWVzc2FnZSA9IGBUaGUgJyR7bmFtZWRQYXJhbWV0ZXJTdHJpbmd9JyBuYW1lZCBwYXJhbWV0ZXIncyB0eXBlIHNob3VsZCBiZSAnJHtCT09MRUFOX1RZUEV9Jy5gLFxuICAgICAgICAgICAgZXhjZXB0aW9uID0gRXhjZXB0aW9uLmZyb21NZXNzYWdlKG1lc3NhZ2UpO1xuXG4gICAgICB0aHJvdyBleGNlcHRpb247XG4gICAgfVxuXG4gICAgY29uc3QgcHJpbWl0aXZlVmFsdWUgPSB0ZXJtLmdldFByaW1pdGl2ZVZhbHVlKCksXG4gICAgICAgICAgbm9kZSA9IHByaW1pdGl2ZVZhbHVlLCAgLy8vXG4gICAgICAgICAgbm9kZVRlcm1pbmFsTm9kZSA9IG5vZGUuaXNUZXJtaW5hbE5vZGUoKSxcbiAgICAgICAgICB0ZXJtaW5hbCA9IG5vZGVUZXJtaW5hbE5vZGU7ICAvLy9cblxuICAgIGNvbnN0IGJvb2xlYW4gPSB0ZXJtaW5hbDsgLy8vXG5cbiAgICB0ZXJtID0gdGVybUZyb21Cb29sZWFuKGJvb2xlYW4sIGNvbnRleHQpOyAgLy8vXG5cbiAgICBjb25zdCB0ZXJtU3R0cmluZyA9IHRlcm0uZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LmRlYnVnKGAuLi5ldmFsdWF0ZWQgdGhlIHRlcm1pbmFsICcke25hbWVkUGFyYW1ldGVyU3RyaW5nfScgbmFtZWQgcGFyYW1ldGVyIGFzICcke3Rlcm1TdHRyaW5nfScuYCk7XG5cbiAgICByZXR1cm4gdGVybTtcbiAgfVxuXG4gIGV2YWx1YXRlQ2hpbGROb2Rlc05hbWVkUGFyYW1ldGVyKG5hbWVkUGFyYW1ldGVyLCB0ZXJtLCBjb250ZXh0KSB7XG4gICAgY29uc3QgdHlwZSA9IG5hbWVkUGFyYW1ldGVyLmdldFR5cGUoKSxcbiAgICAgICAgICBuYW1lZFBhcmFtZXRlclN0cmluZyA9IG5hbWVkUGFyYW1ldGVyLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgRXZhbHVhdGluZyB0aGUgY2hpbGQgbm9kZXMgJyR7bmFtZWRQYXJhbWV0ZXJTdHJpbmd9JyBuYW1lZCBwYXJhbWV0ZXIuLi5gKTtcblxuICAgIGlmICh0eXBlICE9PSBOT0RFU19UWVBFKSB7XG4gICAgICBjb25zdCBuYW1lZFBhcmFtZXRlclN0cmluZyA9IG5hbWVkUGFyYW1ldGVyLmdldFN0cmluZygpLFxuICAgICAgICAgICAgbWVzc2FnZSA9IGBUaGUgJyR7bmFtZWRQYXJhbWV0ZXJTdHJpbmd9JyBuYW1lZCBwYXJhbWV0ZXIncyB0eXBlIHNob3VsZCBiZSAnJHtOT0RFU19UWVBFfScuYCxcbiAgICAgICAgICAgIGV4Y2VwdGlvbiA9IEV4Y2VwdGlvbi5mcm9tTWVzc2FnZShtZXNzYWdlKTtcblxuICAgICAgdGhyb3cgZXhjZXB0aW9uO1xuICAgIH1cblxuICAgIGNvbnN0IHByaW1pdGl2ZVZhbHVlID0gdGVybS5nZXRQcmltaXRpdmVWYWx1ZSgpLFxuICAgICAgICAgIG5vZGUgPSBwcmltaXRpdmVWYWx1ZSwgIC8vL1xuICAgICAgICAgIG5vZGVOb25UZXJtaW5hbE5vZGUgPSBub2RlLmlzTm9uVGVybWluYWxOb2RlKCk7XG5cbiAgICBpZiAoIW5vZGVOb25UZXJtaW5hbE5vZGUpIHtcbiAgICAgIGNvbnN0IHRlcm1TdHJpbmcgPSB0ZXJtLmdldFN0cmluZygpLFxuICAgICAgICAgICAgbWVzc2FnZSA9IGBUaGUgJyR7dGVybVN0cmluZ30nIHRlcm0ncyBub2RlIG11c3QgYmUgbm9uLXRlcm1pbmFsLmAsXG4gICAgICAgICAgICBleGNlcHRpb24gPSBFeGNlcHRpb24uZnJvbU1lc3NhZ2UobWVzc2FnZSk7XG5cbiAgICAgIHRocm93IGV4Y2VwdGlvbjtcbiAgICB9XG5cbiAgICBjb25zdCBub25UZXJtaW5hbE5vZGUgPSBub2RlLCAgLy8vXG4gICAgICAgICAgY2hpbGROb2RlcyA9IG5vblRlcm1pbmFsTm9kZS5nZXRDaGlsZE5vZGVzKCksXG4gICAgICAgICAgbm9kZXMgPSBjaGlsZE5vZGVzOyAgLy8vXG5cbiAgICB0ZXJtID0gdGVybUZyb21Ob2Rlcyhub2RlcywgY29udGV4dCk7XG5cbiAgICBjb25zdCB0ZXJtU3R0cmluZyA9IHRlcm0uZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LmRlYnVnKGAuLi5ldmFsdWF0ZWQgdGhlIGNoaWxkTm9kZXMgJyR7bmFtZWRQYXJhbWV0ZXJTdHJpbmd9JyBuYW1lZCBwYXJhbWV0ZXIgYXMgJyR7dGVybVN0dHJpbmd9Jy5gKTtcblxuICAgIHJldHVybiB0ZXJtO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIk9iamVjdEFzc2lnbWVudFwiO1xufSk7XG4iXSwibmFtZXMiOlsiZGVmaW5lIiwiT2JqZWN0QXNzaWdtZW50IiwiRWxlbWVudCIsImNvbnRleHQiLCJzdHJpbmciLCJub2RlIiwiYnJlYWtQb2ludCIsInZhcmlhYmxlIiwibmFtZWRQYXJhbWV0ZXJzIiwiZ2V0VmFyaWFibGUiLCJnZXROYW1lZFBhcmFtZXRlcnMiLCJldmFsdWF0ZSIsIm9iamVjdEFzc2lnbm1lbnRTdHJpbmciLCJnZXRTdHJpbmciLCJ0cmFjZSIsInRlcm0iLCJ0ZXJtVHlwZSIsImdldFR5cGUiLCJOT0RFX1RZUEUiLCJ0ZXJtU3RyaW5nIiwibWVzc2FnZSIsImV4Y2VwdGlvbiIsIkV4Y2VwdGlvbiIsImZyb21NZXNzYWdlIiwibm9kZVByb3BlcnRpZXMiLCJjb21wYXJlTmFtZWRQYXJhbWV0ZXJzIiwiZm9yRWFjaE5hbWVkUGFyYW1ldGVyIiwibmFtZWRQYXJhbWV0ZXIiLCJldmFsdWF0ZU5hbWVkUGFyYW1ldGVyIiwiZGVidWciLCJuYW1lZFBhcmFtZXRlclN0cmluZyIsIm5hbWUiLCJnZXROYW1lIiwiQ09OVEVOVF9QQVJBTUVURVJfTkFNRSIsImV2YWx1YXRlQ29udGVudE5hbWVkUGFyYW1ldGVyIiwiVEVSTUlOQUxfUEFSQU1FVEVSX05BTUUiLCJldmFsdWF0ZVRlcm1pbmFsTmFtZWRQYXJhbWV0ZXIiLCJDSElMRF9OT0RFU19QQVJBTUVURVJfTkFNRSIsImV2YWx1YXRlQ2hpbGROb2Rlc05hbWVkUGFyYW1ldGVyIiwiVmFyaWFibGUiLCJlbGVtZW50cyIsImZyb21OYW1lZFBhcmFtZXRlciIsImFzc2lnbiIsInR5cGUiLCJTVFJJTkdfVFlQRSIsInByaW1pdGl2ZVZhbHVlIiwiZ2V0UHJpbWl0aXZlVmFsdWUiLCJub2RlVGVybWluYWxOb2RlIiwiaXNUZXJtaW5hbE5vZGUiLCJ0ZXJtaW5hbE5vZGUiLCJjb250ZW50IiwiZ2V0Q29udGVudCIsInN0cmluZ0xpdGVyYWwiLCJzdHJpbmdMaXRlcmFsRnJvbVN0cmluZyIsInRlcm1Gcm9tU3RyaW5nTGl0ZXJhbCIsInRlcm1TdHRyaW5nIiwiQk9PTEVBTl9UWVBFIiwidGVybWluYWwiLCJib29sZWFuIiwidGVybUZyb21Cb29sZWFuIiwiTk9ERVNfVFlQRSIsIm5vZGVOb25UZXJtaW5hbE5vZGUiLCJpc05vblRlcm1pbmFsTm9kZSIsIm5vblRlcm1pbmFsTm9kZSIsImNoaWxkTm9kZXMiLCJnZXRDaGlsZE5vZGVzIiwibm9kZXMiLCJ0ZXJtRnJvbU5vZGVzIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFjQTs7O2VBQUE7OztnQ0Fad0I7a0VBRUg7a0VBQ0M7dUVBQ0s7K0JBR2E7dUJBQ3lCO3NCQUNLO2dDQUNzQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7TUFFNUYsV0FBZUEsSUFBQUEsZ0JBQU0sRUFBQyxN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