"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return FurtleFileContext;
    }
});
const _occamlanguages = require("occam-languages");
const _verify = require("../../process/verify");
const _furtle = require("../../utilities/furtle");
class FurtleFileContext extends _occamlanguages.FileContext {
    constructor(context, filePath, tokens, node, procedures){
        super(context, filePath, tokens, node);
        this.procedures = procedures;
    }
    getProcedures(includeRelease = true) {
        const procedures = includeRelease ? this.context.getProcedures() : this.procedures;
        return procedures;
    }
    getLexer() {
        const lexer = _furtle.furtleLexer; ///
        return lexer;
    }
    getParser() {
        const parser = _furtle.furtleParser; ///
        return parser;
    }
    getLabels(includeRelease = true) {
        const labels = [];
        return labels;
    }
    getTypes(includeRelease = true) {
        const types = [];
        return types;
    }
    getRules(includeRelease = true) {
        const rules = [];
        return rules;
    }
    getAxioms(includeRelease = true) {
        const axioms = [];
        return axioms;
    }
    getLemmas(includeRelease = true) {
        const lemmas = [];
        return lemmas;
    }
    getTheorems(includeRelease = true) {
        const theorems = [];
        return theorems;
    }
    getVariables(includeRelease = true) {
        const variables = [];
        return variables;
    }
    getMetaLemmas(includeRelease = true) {
        const metaLemmas = [];
        return metaLemmas;
    }
    getConjectures(includeRelease = true) {
        const conjectures = [];
        return conjectures;
    }
    getCombinators(includeRelease = true) {
        const combinators = [];
        return combinators;
    }
    getTypePrefixes(includeRelease = true) {
        const typePrefixes = [];
        return typePrefixes;
    }
    getConstructors(includeRelease = true) {
        const constructors = [];
        return constructors;
    }
    getMetatheorems(includeRelease = true) {
        const metatheorems = [];
        return metatheorems;
    }
    getMetavariables(includeRelease = true) {
        const metavariables = [];
        return metavariables;
    }
    addProcedure(procedure) {
        const procedureString = procedure.getString();
        this.procedures.push(procedure);
        const filePath = this.getFilePath();
        this.debug(`Added the '${procedureString}' procedure to the '${filePath}' file context.`);
    }
    findProcedureByProcedureName(procedureName) {
        const procedures = this.getProcedures(), procedure = procedures.find((procedure)=>{
            const procedureComparesToProcedureName = procedure.compareProcedureName(procedureName);
            if (procedureComparesToProcedureName) {
                return true;
            }
        }) || null;
        return procedure;
    }
    isProcedurePresentByProcedureName(procedureName) {
        const procedure = this.findProcedureByProcedureName(procedureName), procedurePresent = procedure !== null;
        return procedurePresent;
    }
    clear() {
        this.procedures = [];
    }
    complete() {
    ///
    }
    async verifyFile() {
        const node = this.getNode(), context = this, fileNode = node, fileVerifies = (0, _verify.verifyFile)(fileNode, context);
        return fileVerifies;
    }
    static fromFile(file, context) {
        const procedures = [], furtleFileContext = _occamlanguages.FileContext.fromFile(FurtleFileContext, file, procedures, context);
        return furtleFileContext;
    }
    static fromFilePath(filePath, context) {
        const procedures = null, furtleFileContext = ileContext.fromFilePath(FurtleFileContext, filePath, procedures, context);
        return furtleFileContext;
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb250ZXh0L2ZpbGUvZnVydGxlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBGaWxlQ29udGV4dCB9IGZyb20gXCJvY2NhbS1sYW5ndWFnZXNcIjtcblxuaW1wb3J0IHsgdmVyaWZ5RmlsZSB9IGZyb20gXCIuLi8uLi9wcm9jZXNzL3ZlcmlmeVwiO1xuaW1wb3J0IHsgZnVydGxlTGV4ZXIsIGZ1cnRsZVBhcnNlciB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvZnVydGxlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZ1cnRsZUZpbGVDb250ZXh0IGV4dGVuZHMgRmlsZUNvbnRleHQge1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBmaWxlUGF0aCwgdG9rZW5zLCBub2RlLCBwcm9jZWR1cmVzKSB7XG4gICAgc3VwZXIoY29udGV4dCwgZmlsZVBhdGgsIHRva2Vucywgbm9kZSk7XG5cbiAgICB0aGlzLnByb2NlZHVyZXMgPSBwcm9jZWR1cmVzO1xuICB9XG5cbiAgZ2V0UHJvY2VkdXJlcyhpbmNsdWRlUmVsZWFzZSA9IHRydWUpIHtcbiAgICBjb25zdCBwcm9jZWR1cmVzID0gaW5jbHVkZVJlbGVhc2UgP1xuICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY29udGV4dC5nZXRQcm9jZWR1cmVzKCkgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9jZWR1cmVzO1xuXG4gICAgcmV0dXJuIHByb2NlZHVyZXM7XG4gIH1cblxuICBnZXRMZXhlcigpIHtcbiAgICBjb25zdCBsZXhlciA9IGZ1cnRsZUxleGVyOyAgLy8vXG5cbiAgICByZXR1cm4gbGV4ZXI7XG4gIH1cblxuICBnZXRQYXJzZXIoKSB7XG4gICAgY29uc3QgcGFyc2VyID0gZnVydGxlUGFyc2VyOyAgLy8vXG5cbiAgICByZXR1cm4gcGFyc2VyO1xuICB9XG5cbiAgZ2V0TGFiZWxzKGluY2x1ZGVSZWxlYXNlID0gdHJ1ZSkge1xuICAgIGNvbnN0IGxhYmVscyA9IFtdO1xuXG4gICAgcmV0dXJuIGxhYmVscztcbiAgfVxuXG4gIGdldFR5cGVzKGluY2x1ZGVSZWxlYXNlID0gdHJ1ZSkge1xuICAgIGNvbnN0IHR5cGVzID0gW107XG5cbiAgICByZXR1cm4gdHlwZXM7XG4gIH1cblxuICBnZXRSdWxlcyhpbmNsdWRlUmVsZWFzZSA9IHRydWUpIHtcbiAgICBjb25zdCBydWxlcyA9IFtdXG5cbiAgICByZXR1cm4gcnVsZXM7XG4gIH1cblxuICBnZXRBeGlvbXMoaW5jbHVkZVJlbGVhc2UgPSB0cnVlKSB7XG4gICAgY29uc3QgYXhpb21zID0gW107XG5cbiAgICByZXR1cm4gYXhpb21zO1xuICB9XG5cbiAgZ2V0TGVtbWFzKGluY2x1ZGVSZWxlYXNlID0gdHJ1ZSkge1xuICAgIGNvbnN0IGxlbW1hcyA9IFtdO1xuXG4gICAgcmV0dXJuIGxlbW1hcztcbiAgfVxuXG4gIGdldFRoZW9yZW1zKGluY2x1ZGVSZWxlYXNlID0gdHJ1ZSkge1xuICAgIGNvbnN0IHRoZW9yZW1zID0gW107XG5cbiAgICByZXR1cm4gdGhlb3JlbXM7XG4gIH1cblxuICBnZXRWYXJpYWJsZXMoaW5jbHVkZVJlbGVhc2UgPSB0cnVlKSB7XG4gICAgY29uc3QgdmFyaWFibGVzID0gW107XG5cbiAgICByZXR1cm4gdmFyaWFibGVzO1xuICB9XG5cbiAgZ2V0TWV0YUxlbW1hcyhpbmNsdWRlUmVsZWFzZSA9IHRydWUpIHtcbiAgICBjb25zdCBtZXRhTGVtbWFzID0gW107XG5cbiAgICByZXR1cm4gbWV0YUxlbW1hcztcbiAgfVxuXG4gIGdldENvbmplY3R1cmVzKGluY2x1ZGVSZWxlYXNlID0gdHJ1ZSkge1xuICAgIGNvbnN0IGNvbmplY3R1cmVzID0gW107XG5cbiAgICByZXR1cm4gY29uamVjdHVyZXM7XG4gIH1cblxuICBnZXRDb21iaW5hdG9ycyhpbmNsdWRlUmVsZWFzZSA9IHRydWUpIHtcbiAgICBjb25zdCBjb21iaW5hdG9ycyA9IFtdO1xuXG4gICAgcmV0dXJuIGNvbWJpbmF0b3JzO1xuICB9XG5cbiAgZ2V0VHlwZVByZWZpeGVzKGluY2x1ZGVSZWxlYXNlID0gdHJ1ZSkge1xuICAgIGNvbnN0IHR5cGVQcmVmaXhlcyA9IFtdO1xuXG4gICAgcmV0dXJuIHR5cGVQcmVmaXhlcztcbiAgfVxuXG4gIGdldENvbnN0cnVjdG9ycyhpbmNsdWRlUmVsZWFzZSA9IHRydWUpIHtcbiAgICBjb25zdCBjb25zdHJ1Y3RvcnMgPSBbXTtcblxuICAgIHJldHVybiBjb25zdHJ1Y3RvcnM7XG4gIH1cblxuICBnZXRNZXRhdGhlb3JlbXMoaW5jbHVkZVJlbGVhc2UgPSB0cnVlKSB7XG4gICAgY29uc3QgbWV0YXRoZW9yZW1zID0gW107XG5cbiAgICByZXR1cm4gbWV0YXRoZW9yZW1zO1xuICB9XG5cbiAgZ2V0TWV0YXZhcmlhYmxlcyhpbmNsdWRlUmVsZWFzZSA9IHRydWUpIHtcbiAgICBjb25zdCBtZXRhdmFyaWFibGVzID0gW107XG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlcztcbiAgfVxuXG4gIGFkZFByb2NlZHVyZShwcm9jZWR1cmUpIHtcbiAgICBjb25zdCBwcm9jZWR1cmVTdHJpbmcgPSBwcm9jZWR1cmUuZ2V0U3RyaW5nKCk7XG5cbiAgICB0aGlzLnByb2NlZHVyZXMucHVzaChwcm9jZWR1cmUpO1xuXG4gICAgY29uc3QgZmlsZVBhdGggPSB0aGlzLmdldEZpbGVQYXRoKCk7XG5cbiAgICB0aGlzLmRlYnVnKGBBZGRlZCB0aGUgJyR7cHJvY2VkdXJlU3RyaW5nfScgcHJvY2VkdXJlIHRvIHRoZSAnJHtmaWxlUGF0aH0nIGZpbGUgY29udGV4dC5gKTtcbiAgfVxuXG4gIGZpbmRQcm9jZWR1cmVCeVByb2NlZHVyZU5hbWUocHJvY2VkdXJlTmFtZSkge1xuICAgIGNvbnN0IHByb2NlZHVyZXMgPSB0aGlzLmdldFByb2NlZHVyZXMoKSxcbiAgICAgICAgICBwcm9jZWR1cmUgPSBwcm9jZWR1cmVzLmZpbmQoKHByb2NlZHVyZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcHJvY2VkdXJlQ29tcGFyZXNUb1Byb2NlZHVyZU5hbWUgPSBwcm9jZWR1cmUuY29tcGFyZVByb2NlZHVyZU5hbWUocHJvY2VkdXJlTmFtZSk7XG5cbiAgICAgICAgICAgIGlmIChwcm9jZWR1cmVDb21wYXJlc1RvUHJvY2VkdXJlTmFtZSkge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIHByb2NlZHVyZTtcbiAgfVxuXG4gIGlzUHJvY2VkdXJlUHJlc2VudEJ5UHJvY2VkdXJlTmFtZShwcm9jZWR1cmVOYW1lKSB7XG4gICAgY29uc3QgcHJvY2VkdXJlID0gdGhpcy5maW5kUHJvY2VkdXJlQnlQcm9jZWR1cmVOYW1lKHByb2NlZHVyZU5hbWUpLFxuICAgICAgICAgIHByb2NlZHVyZVByZXNlbnQgPSAocHJvY2VkdXJlICE9PSBudWxsKTtcblxuICAgIHJldHVybiBwcm9jZWR1cmVQcmVzZW50O1xuICB9XG5cbiAgY2xlYXIoKSB7XG4gICAgdGhpcy5wcm9jZWR1cmVzID0gW107XG4gIH1cblxuICBjb21wbGV0ZSgpIHtcbiAgICAvLy9cbiAgfVxuXG4gIGFzeW5jIHZlcmlmeUZpbGUoKSB7XG4gICAgY29uc3Qgbm9kZSA9IHRoaXMuZ2V0Tm9kZSgpLFxuICAgICAgICAgIGNvbnRleHQgPSB0aGlzLCAvLy9cbiAgICAgICAgICBmaWxlTm9kZSA9IG5vZGUsICAvLy9cbiAgICAgICAgICBmaWxlVmVyaWZpZXMgPSB2ZXJpZnlGaWxlKGZpbGVOb2RlLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBmaWxlVmVyaWZpZXM7XG4gIH1cblxuICBzdGF0aWMgZnJvbUZpbGUoZmlsZSwgY29udGV4dCkge1xuICAgIGNvbnN0IHByb2NlZHVyZXMgPSBbXSxcbiAgICAgICAgICBmdXJ0bGVGaWxlQ29udGV4dCA9IEZpbGVDb250ZXh0LmZyb21GaWxlKEZ1cnRsZUZpbGVDb250ZXh0LCBmaWxlLCBwcm9jZWR1cmVzLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBmdXJ0bGVGaWxlQ29udGV4dDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tRmlsZVBhdGgoZmlsZVBhdGgsIGNvbnRleHQpIHtcbiAgICBjb25zdCBwcm9jZWR1cmVzID0gbnVsbCxcbiAgICAgICAgICBmdXJ0bGVGaWxlQ29udGV4dCA9IGlsZUNvbnRleHQuZnJvbUZpbGVQYXRoKEZ1cnRsZUZpbGVDb250ZXh0LCBmaWxlUGF0aCwgcHJvY2VkdXJlcywgY29udGV4dCk7XG5cbiAgICByZXR1cm4gZnVydGxlRmlsZUNvbnRleHQ7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJGdXJ0bGVGaWxlQ29udGV4dCIsIkZpbGVDb250ZXh0IiwiY29udGV4dCIsImZpbGVQYXRoIiwidG9rZW5zIiwibm9kZSIsInByb2NlZHVyZXMiLCJnZXRQcm9jZWR1cmVzIiwiaW5jbHVkZVJlbGVhc2UiLCJnZXRMZXhlciIsImxleGVyIiwiZnVydGxlTGV4ZXIiLCJnZXRQYXJzZXIiLCJwYXJzZXIiLCJmdXJ0bGVQYXJzZXIiLCJnZXRMYWJlbHMiLCJsYWJlbHMiLCJnZXRUeXBlcyIsInR5cGVzIiwiZ2V0UnVsZXMiLCJydWxlcyIsImdldEF4aW9tcyIsImF4aW9tcyIsImdldExlbW1hcyIsImxlbW1hcyIsImdldFRoZW9yZW1zIiwidGhlb3JlbXMiLCJnZXRWYXJpYWJsZXMiLCJ2YXJpYWJsZXMiLCJnZXRNZXRhTGVtbWFzIiwibWV0YUxlbW1hcyIsImdldENvbmplY3R1cmVzIiwiY29uamVjdHVyZXMiLCJnZXRDb21iaW5hdG9ycyIsImNvbWJpbmF0b3JzIiwiZ2V0VHlwZVByZWZpeGVzIiwidHlwZVByZWZpeGVzIiwiZ2V0Q29uc3RydWN0b3JzIiwiY29uc3RydWN0b3JzIiwiZ2V0TWV0YXRoZW9yZW1zIiwibWV0YXRoZW9yZW1zIiwiZ2V0TWV0YXZhcmlhYmxlcyIsIm1ldGF2YXJpYWJsZXMiLCJhZGRQcm9jZWR1cmUiLCJwcm9jZWR1cmUiLCJwcm9jZWR1cmVTdHJpbmciLCJnZXRTdHJpbmciLCJwdXNoIiwiZ2V0RmlsZVBhdGgiLCJkZWJ1ZyIsImZpbmRQcm9jZWR1cmVCeVByb2NlZHVyZU5hbWUiLCJwcm9jZWR1cmVOYW1lIiwiZmluZCIsInByb2NlZHVyZUNvbXBhcmVzVG9Qcm9jZWR1cmVOYW1lIiwiY29tcGFyZVByb2NlZHVyZU5hbWUiLCJpc1Byb2NlZHVyZVByZXNlbnRCeVByb2NlZHVyZU5hbWUiLCJwcm9jZWR1cmVQcmVzZW50IiwiY2xlYXIiLCJjb21wbGV0ZSIsInZlcmlmeUZpbGUiLCJnZXROb2RlIiwiZmlsZU5vZGUiLCJmaWxlVmVyaWZpZXMiLCJmcm9tRmlsZSIsImZpbGUiLCJmdXJ0bGVGaWxlQ29udGV4dCIsImZyb21GaWxlUGF0aCIsImlsZUNvbnRleHQiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQU9BOzs7ZUFBcUJBOzs7Z0NBTE87d0JBRUQ7d0JBQ2U7QUFFM0IsTUFBTUEsMEJBQTBCQywyQkFBVztJQUN4RCxZQUFZQyxPQUFPLEVBQUVDLFFBQVEsRUFBRUMsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLFVBQVUsQ0FBRTtRQUN2RCxLQUFLLENBQUNKLFNBQVNDLFVBQVVDLFFBQVFDO1FBRWpDLElBQUksQ0FBQ0MsVUFBVSxHQUFHQTtJQUNwQjtJQUVBQyxjQUFjQyxpQkFBaUIsSUFBSSxFQUFFO1FBQ25DLE1BQU1GLGFBQWFFLGlCQUNFLElBQUksQ0FBQ04sT0FBTyxDQUFDSyxhQUFhLEtBQ3hCLElBQUksQ0FBQ0QsVUFBVTtRQUV0QyxPQUFPQTtJQUNUO0lBRUFHLFdBQVc7UUFDVCxNQUFNQyxRQUFRQyxtQkFBVyxFQUFHLEdBQUc7UUFFL0IsT0FBT0Q7SUFDVDtJQUVBRSxZQUFZO1FBQ1YsTUFBTUMsU0FBU0Msb0JBQVksRUFBRyxHQUFHO1FBRWpDLE9BQU9EO0lBQ1Q7SUFFQUUsVUFBVVAsaUJBQWlCLElBQUksRUFBRTtRQUMvQixNQUFNUSxTQUFTLEVBQUU7UUFFakIsT0FBT0E7SUFDVDtJQUVBQyxTQUFTVCxpQkFBaUIsSUFBSSxF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