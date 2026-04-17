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
const _elements = /*#__PURE__*/ _interop_require_wildcard(require("../elements"));
const _exception = /*#__PURE__*/ _interop_require_default(require("../exception"));
const _types = require("../types");
const _term = require("../utilities/term");
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
const { asyncReduce } = _occamlanguages.asynchronousUtilities;
const _default = (0, _elements.define)(class Reduce extends _occamlanguages.Element {
    constructor(context, string, node, breakPoint, variable, initialExpression, anonymousProcedure){
        super(context, string, node, breakPoint);
        this.variable = variable;
        this.initialExpression = initialExpression;
        this.anonymousProcedure = anonymousProcedure;
    }
    getVariable() {
        return this.variable;
    }
    getInitialExpression() {
        return this.initialExpression;
    }
    getAnonymousProcedure() {
        return this.anonymousProcedure;
    }
    async evaluate(context) {
        let term;
        await this.break(context);
        const reduceString = this.getString();
        context.trace(`Evaluating the '${reduceString}' reduce...`);
        term = this.variable.evaluate(context);
        const termType = term.getType();
        if (termType !== _types.NODES_TYPE) {
            const termString = term.getString(), message = `The '${termString}' term's '${termType}' type should be '${_types.NODES_TYPE}'.`, exception = _exception.default.fromMessage(message);
            throw exception;
        }
        const nodes = term.getNodes(), initialExpression = await this.initialExpression.evaluate(context);
        term = await asyncReduce(nodes, async (currentExpression, node)=>{
            let term;
            const { Terms } = _elements.default;
            term = currentTerm; ///
            const terms = Terms.fromTerm(term, context);
            term = (0, _term.termFromNode)(node, context);
            terms.addTerm(term);
            term = await this.anonymousProcedure.call(terms, context);
            return term;
        }, initialExpression);
        const termString = term.getString();
        context.trace(`...evaluated the '${reduceString}' reduce as '${termString}'.`);
        return term;
    }
    static name = "Reduce";
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3JlZHVjZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgRWxlbWVudCwgYXN5bmNocm9ub3VzVXRpbGl0aWVzIH0gZnJvbSBcIm9jY2FtLWxhbmd1YWdlc1wiO1xuXG5pbXBvcnQgZWxlbWVudHMgZnJvbSBcIi4uL2VsZW1lbnRzXCI7XG5pbXBvcnQgRXhjZXB0aW9uIGZyb20gXCIuLi9leGNlcHRpb25cIjtcblxuaW1wb3J0IHsgZGVmaW5lIH0gZnJvbSBcIi4uL2VsZW1lbnRzXCI7XG5pbXBvcnQgeyBOT0RFU19UWVBFIH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5pbXBvcnQgeyB0ZXJtRnJvbU5vZGUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3Rlcm1cIjtcblxuY29uc3QgeyBhc3luY1JlZHVjZSB9ID0gYXN5bmNocm9ub3VzVXRpbGl0aWVzO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmUoY2xhc3MgUmVkdWNlIGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKGNvbnRleHQsIHN0cmluZywgbm9kZSwgYnJlYWtQb2ludCwgdmFyaWFibGUsIGluaXRpYWxFeHByZXNzaW9uLCBhbm9ueW1vdXNQcm9jZWR1cmUpIHtcbiAgICBzdXBlcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGJyZWFrUG9pbnQpO1xuXG4gICAgdGhpcy52YXJpYWJsZSA9IHZhcmlhYmxlO1xuICAgIHRoaXMuaW5pdGlhbEV4cHJlc3Npb24gPSBpbml0aWFsRXhwcmVzc2lvbjtcbiAgICB0aGlzLmFub255bW91c1Byb2NlZHVyZSA9IGFub255bW91c1Byb2NlZHVyZTtcbiAgfVxuXG4gIGdldFZhcmlhYmxlKCkge1xuICAgIHJldHVybiB0aGlzLnZhcmlhYmxlO1xuICB9XG5cbiAgZ2V0SW5pdGlhbEV4cHJlc3Npb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuaW5pdGlhbEV4cHJlc3Npb247XG4gIH1cblxuICBnZXRBbm9ueW1vdXNQcm9jZWR1cmUoKSB7XG4gICAgcmV0dXJuIHRoaXMuYW5vbnltb3VzUHJvY2VkdXJlO1xuICB9XG5cbiAgYXN5bmMgZXZhbHVhdGUoY29udGV4dCkge1xuICAgIGxldCB0ZXJtO1xuXG4gICAgYXdhaXQgdGhpcy5icmVhayhjb250ZXh0KTtcblxuICAgIGNvbnN0IHJlZHVjZVN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBFdmFsdWF0aW5nIHRoZSAnJHtyZWR1Y2VTdHJpbmd9JyByZWR1Y2UuLi5gKTtcblxuICAgIHRlcm0gPSB0aGlzLnZhcmlhYmxlLmV2YWx1YXRlKGNvbnRleHQpO1xuXG4gICAgY29uc3QgdGVybVR5cGUgPSB0ZXJtLmdldFR5cGUoKTtcblxuICAgIGlmICh0ZXJtVHlwZSAhPT0gTk9ERVNfVFlQRSkge1xuICAgICAgY29uc3QgdGVybVN0cmluZyA9IHRlcm0uZ2V0U3RyaW5nKCksXG4gICAgICAgICAgICBtZXNzYWdlID0gYFRoZSAnJHt0ZXJtU3RyaW5nfScgdGVybSdzICcke3Rlcm1UeXBlfScgdHlwZSBzaG91bGQgYmUgJyR7Tk9ERVNfVFlQRX0nLmAsXG4gICAgICAgICAgICBleGNlcHRpb24gPSBFeGNlcHRpb24uZnJvbU1lc3NhZ2UobWVzc2FnZSk7XG5cbiAgICAgIHRocm93IGV4Y2VwdGlvbjtcbiAgICB9XG5cbiAgICBjb25zdCBub2RlcyA9IHRlcm0uZ2V0Tm9kZXMoKSxcbiAgICAgICAgICBpbml0aWFsRXhwcmVzc2lvbiA9IGF3YWl0IHRoaXMuaW5pdGlhbEV4cHJlc3Npb24uZXZhbHVhdGUoY29udGV4dCk7XG5cbiAgICB0ZXJtID0gYXdhaXQgYXN5bmNSZWR1Y2Uobm9kZXMsIGFzeW5jIChjdXJyZW50RXhwcmVzc2lvbiwgbm9kZSkgPT4ge1xuICAgICAgbGV0IHRlcm07XG5cbiAgICAgIGNvbnN0IHsgVGVybXMgfSA9IGVsZW1lbnRzO1xuXG4gICAgICB0ZXJtID0gY3VycmVudFRlcm07IC8vL1xuXG4gICAgICBjb25zdCB0ZXJtcyA9IFRlcm1zLmZyb21UZXJtKHRlcm0sIGNvbnRleHQpO1xuXG4gICAgICB0ZXJtID0gdGVybUZyb21Ob2RlKG5vZGUsIGNvbnRleHQpO1xuXG4gICAgICB0ZXJtcy5hZGRUZXJtKHRlcm0pO1xuXG4gICAgICB0ZXJtID0gYXdhaXQgdGhpcy5hbm9ueW1vdXNQcm9jZWR1cmUuY2FsbCh0ZXJtcywgY29udGV4dCk7XG5cbiAgICAgIHJldHVybiB0ZXJtO1xuICAgIH0sIGluaXRpYWxFeHByZXNzaW9uKTtcblxuICAgIGNvbnN0IHRlcm1TdHJpbmcgPSB0ZXJtLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgLi4uZXZhbHVhdGVkIHRoZSAnJHtyZWR1Y2VTdHJpbmd9JyByZWR1Y2UgYXMgJyR7dGVybVN0cmluZ30nLmApO1xuXG4gICAgcmV0dXJuIHRlcm07XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiUmVkdWNlXCI7XG59KTtcbiJdLCJuYW1lcyI6WyJhc3luY1JlZHVjZSIsImFzeW5jaHJvbm91c1V0aWxpdGllcyIsImRlZmluZSIsIlJlZHVjZSIsIkVsZW1lbnQiLCJjb250ZXh0Iiwic3RyaW5nIiwibm9kZSIsImJyZWFrUG9pbnQiLCJ2YXJpYWJsZSIsImluaXRpYWxFeHByZXNzaW9uIiwiYW5vbnltb3VzUHJvY2VkdXJlIiwiZ2V0VmFyaWFibGUiLCJnZXRJbml0aWFsRXhwcmVzc2lvbiIsImdldEFub255bW91c1Byb2NlZHVyZSIsImV2YWx1YXRlIiwidGVybSIsImJyZWFrIiwicmVkdWNlU3RyaW5nIiwiZ2V0U3RyaW5nIiwidHJhY2UiLCJ0ZXJtVHlwZSIsImdldFR5cGUiLCJOT0RFU19UWVBFIiwidGVybVN0cmluZyIsIm1lc3NhZ2UiLCJleGNlcHRpb24iLCJFeGNlcHRpb24iLCJmcm9tTWVzc2FnZSIsIm5vZGVzIiwiZ2V0Tm9kZXMiLCJjdXJyZW50RXhwcmVzc2lvbiIsIlRlcm1zIiwiZWxlbWVudHMiLCJjdXJyZW50VGVybSIs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