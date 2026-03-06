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
    constructor(context, fileContent, filePath, tokens, node, lexer, parser, procedures){
        super(context, fileContent, filePath, tokens, node);
        this.lexer = lexer;
        this.parser = parser;
        this.procedures = procedures;
    }
    getLexer() {
        return this.lexer;
    }
    getParser() {
        return this.parser;
    }
    getProcedures(includeRelease = true) {
        const procedures = includeRelease ? this.context.getProcedures() : this.procedures;
        return procedures;
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
    initialise(json) {
        this.prepare();
        this.procedures = [];
        const node = this.getNode(), context = this, fileNode = node; ///
        (0, _verify.verifyFile)(fileNode, context);
    }
    async verifyFile() {
        const node = this.getNode(), context = this, fileNode = node, fileVerifies = (0, _verify.verifyFile)(fileNode, context);
        return fileVerifies;
    }
    toJSON() {
        const filePath = this.getFilePath(), fileContent = this.getFileContent(), json = {
            filePath,
            fileContent
        };
        return json;
    }
    static fromFile(file, context) {
        const lexer = _furtle.furtleLexer, parser = _furtle.furtleParser, procedures = [], furtleFileContext = _occamlanguages.FileContext.fromFile(FurtleFileContext, file, lexer, parser, procedures, context);
        return furtleFileContext;
    }
    static fromJSON(json, context) {
        const lexer = _furtle.furtleLexer, parser = _furtle.furtleParser, procedures = null, furtleFileContext = _occamlanguages.FileContext.fromJSON(FurtleFileContext, json, lexer, parser, procedures, context);
        return furtleFileContext;
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb250ZXh0L2ZpbGUvZnVydGxlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBGaWxlQ29udGV4dCB9IGZyb20gXCJvY2NhbS1sYW5ndWFnZXNcIjtcblxuaW1wb3J0IHsgdmVyaWZ5RmlsZSB9IGZyb20gXCIuLi8uLi9wcm9jZXNzL3ZlcmlmeVwiO1xuaW1wb3J0IHsgZnVydGxlTGV4ZXIsIGZ1cnRsZVBhcnNlciB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvZnVydGxlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZ1cnRsZUZpbGVDb250ZXh0IGV4dGVuZHMgRmlsZUNvbnRleHQge1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBmaWxlQ29udGVudCwgZmlsZVBhdGgsIHRva2Vucywgbm9kZSwgbGV4ZXIsIHBhcnNlciwgcHJvY2VkdXJlcykge1xuICAgIHN1cGVyKGNvbnRleHQsIGZpbGVDb250ZW50LCBmaWxlUGF0aCwgdG9rZW5zLCBub2RlKTtcblxuICAgIHRoaXMubGV4ZXIgPSBsZXhlcjtcbiAgICB0aGlzLnBhcnNlciA9IHBhcnNlcjtcbiAgICB0aGlzLnByb2NlZHVyZXMgPSBwcm9jZWR1cmVzO1xuICB9XG5cbiAgZ2V0TGV4ZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMubGV4ZXI7XG4gIH1cblxuICBnZXRQYXJzZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMucGFyc2VyO1xuICB9XG5cbiAgZ2V0UHJvY2VkdXJlcyhpbmNsdWRlUmVsZWFzZSA9IHRydWUpIHtcbiAgICBjb25zdCBwcm9jZWR1cmVzID0gaW5jbHVkZVJlbGVhc2UgP1xuICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY29udGV4dC5nZXRQcm9jZWR1cmVzKCkgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9jZWR1cmVzO1xuXG4gICAgcmV0dXJuIHByb2NlZHVyZXM7XG4gIH1cblxuICBnZXRMYWJlbHMoaW5jbHVkZVJlbGVhc2UgPSB0cnVlKSB7XG4gICAgY29uc3QgbGFiZWxzID0gW107XG5cbiAgICByZXR1cm4gbGFiZWxzO1xuICB9XG5cbiAgZ2V0VHlwZXMoaW5jbHVkZVJlbGVhc2UgPSB0cnVlKSB7XG4gICAgY29uc3QgdHlwZXMgPSBbXTtcblxuICAgIHJldHVybiB0eXBlcztcbiAgfVxuXG4gIGdldFJ1bGVzKGluY2x1ZGVSZWxlYXNlID0gdHJ1ZSkge1xuICAgIGNvbnN0IHJ1bGVzID0gW11cblxuICAgIHJldHVybiBydWxlcztcbiAgfVxuXG4gIGdldEF4aW9tcyhpbmNsdWRlUmVsZWFzZSA9IHRydWUpIHtcbiAgICBjb25zdCBheGlvbXMgPSBbXTtcblxuICAgIHJldHVybiBheGlvbXM7XG4gIH1cblxuICBnZXRMZW1tYXMoaW5jbHVkZVJlbGVhc2UgPSB0cnVlKSB7XG4gICAgY29uc3QgbGVtbWFzID0gW107XG5cbiAgICByZXR1cm4gbGVtbWFzO1xuICB9XG5cbiAgZ2V0VGhlb3JlbXMoaW5jbHVkZVJlbGVhc2UgPSB0cnVlKSB7XG4gICAgY29uc3QgdGhlb3JlbXMgPSBbXTtcblxuICAgIHJldHVybiB0aGVvcmVtcztcbiAgfVxuXG4gIGdldFZhcmlhYmxlcyhpbmNsdWRlUmVsZWFzZSA9IHRydWUpIHtcbiAgICBjb25zdCB2YXJpYWJsZXMgPSBbXTtcblxuICAgIHJldHVybiB2YXJpYWJsZXM7XG4gIH1cblxuICBnZXRNZXRhTGVtbWFzKGluY2x1ZGVSZWxlYXNlID0gdHJ1ZSkge1xuICAgIGNvbnN0IG1ldGFMZW1tYXMgPSBbXTtcblxuICAgIHJldHVybiBtZXRhTGVtbWFzO1xuICB9XG5cbiAgZ2V0Q29uamVjdHVyZXMoaW5jbHVkZVJlbGVhc2UgPSB0cnVlKSB7XG4gICAgY29uc3QgY29uamVjdHVyZXMgPSBbXTtcblxuICAgIHJldHVybiBjb25qZWN0dXJlcztcbiAgfVxuXG4gIGdldENvbWJpbmF0b3JzKGluY2x1ZGVSZWxlYXNlID0gdHJ1ZSkge1xuICAgIGNvbnN0IGNvbWJpbmF0b3JzID0gW107XG5cbiAgICByZXR1cm4gY29tYmluYXRvcnM7XG4gIH1cblxuICBnZXRUeXBlUHJlZml4ZXMoaW5jbHVkZVJlbGVhc2UgPSB0cnVlKSB7XG4gICAgY29uc3QgdHlwZVByZWZpeGVzID0gW107XG5cbiAgICByZXR1cm4gdHlwZVByZWZpeGVzO1xuICB9XG5cbiAgZ2V0Q29uc3RydWN0b3JzKGluY2x1ZGVSZWxlYXNlID0gdHJ1ZSkge1xuICAgIGNvbnN0IGNvbnN0cnVjdG9ycyA9IFtdO1xuXG4gICAgcmV0dXJuIGNvbnN0cnVjdG9ycztcbiAgfVxuXG4gIGdldE1ldGF0aGVvcmVtcyhpbmNsdWRlUmVsZWFzZSA9IHRydWUpIHtcbiAgICBjb25zdCBtZXRhdGhlb3JlbXMgPSBbXTtcblxuICAgIHJldHVybiBtZXRhdGhlb3JlbXM7XG4gIH1cblxuICBnZXRNZXRhdmFyaWFibGVzKGluY2x1ZGVSZWxlYXNlID0gdHJ1ZSkge1xuICAgIGNvbnN0IG1ldGF2YXJpYWJsZXMgPSBbXTtcblxuICAgIHJldHVybiBtZXRhdmFyaWFibGVzO1xuICB9XG5cbiAgYWRkUHJvY2VkdXJlKHByb2NlZHVyZSkge1xuICAgIGNvbnN0IHByb2NlZHVyZVN0cmluZyA9IHByb2NlZHVyZS5nZXRTdHJpbmcoKTtcblxuICAgIHRoaXMucHJvY2VkdXJlcy5wdXNoKHByb2NlZHVyZSk7XG5cbiAgICBjb25zdCBmaWxlUGF0aCA9IHRoaXMuZ2V0RmlsZVBhdGgoKTtcblxuICAgIHRoaXMuZGVidWcoYEFkZGVkIHRoZSAnJHtwcm9jZWR1cmVTdHJpbmd9JyBwcm9jZWR1cmUgdG8gdGhlICcke2ZpbGVQYXRofScgZmlsZSBjb250ZXh0LmApO1xuICB9XG5cbiAgZmluZFByb2NlZHVyZUJ5UHJvY2VkdXJlTmFtZShwcm9jZWR1cmVOYW1lKSB7XG4gICAgY29uc3QgcHJvY2VkdXJlcyA9IHRoaXMuZ2V0UHJvY2VkdXJlcygpLFxuICAgICAgICAgIHByb2NlZHVyZSA9IHByb2NlZHVyZXMuZmluZCgocHJvY2VkdXJlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBwcm9jZWR1cmVDb21wYXJlc1RvUHJvY2VkdXJlTmFtZSA9IHByb2NlZHVyZS5jb21wYXJlUHJvY2VkdXJlTmFtZShwcm9jZWR1cmVOYW1lKTtcblxuICAgICAgICAgICAgaWYgKHByb2NlZHVyZUNvbXBhcmVzVG9Qcm9jZWR1cmVOYW1lKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pIHx8IG51bGw7XG5cbiAgICByZXR1cm4gcHJvY2VkdXJlO1xuICB9XG5cbiAgaXNQcm9jZWR1cmVQcmVzZW50QnlQcm9jZWR1cmVOYW1lKHByb2NlZHVyZU5hbWUpIHtcbiAgICBjb25zdCBwcm9jZWR1cmUgPSB0aGlzLmZpbmRQcm9jZWR1cmVCeVByb2NlZHVyZU5hbWUocHJvY2VkdXJlTmFtZSksXG4gICAgICAgICAgcHJvY2VkdXJlUHJlc2VudCA9IChwcm9jZWR1cmUgIT09IG51bGwpO1xuXG4gICAgcmV0dXJuIHByb2NlZHVyZVByZXNlbnQ7XG4gIH1cblxuICBjbGVhcigpIHtcbiAgICB0aGlzLnByb2NlZHVyZXMgPSBbXTtcbiAgfVxuXG4gIGNvbXBsZXRlKCkge1xuICAgIC8vL1xuICB9XG5cbiAgaW5pdGlhbGlzZShqc29uKSB7XG4gICAgdGhpcy5wcmVwYXJlKCk7XG5cbiAgICB0aGlzLnByb2NlZHVyZXMgPSBbXTtcblxuICAgIGNvbnN0IG5vZGUgPSB0aGlzLmdldE5vZGUoKSxcbiAgICAgICAgICBjb250ZXh0ID0gdGhpcywgLy8vXG4gICAgICAgICAgZmlsZU5vZGUgPSBub2RlOyAgLy8vXG5cbiAgICB2ZXJpZnlGaWxlKGZpbGVOb2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIGFzeW5jIHZlcmlmeUZpbGUoKSB7XG4gICAgY29uc3Qgbm9kZSA9IHRoaXMuZ2V0Tm9kZSgpLFxuICAgICAgICAgIGNvbnRleHQgPSB0aGlzLCAvLy9cbiAgICAgICAgICBmaWxlTm9kZSA9IG5vZGUsICAvLy9cbiAgICAgICAgICBmaWxlVmVyaWZpZXMgPSB2ZXJpZnlGaWxlKGZpbGVOb2RlLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBmaWxlVmVyaWZpZXM7XG4gIH1cblxuICB0b0pTT04oKSB7XG4gICAgY29uc3QgZmlsZVBhdGggPSB0aGlzLmdldEZpbGVQYXRoKCksXG4gICAgICAgICAgZmlsZUNvbnRlbnQgPSB0aGlzLmdldEZpbGVDb250ZW50KCksXG4gICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgIGZpbGVQYXRoLFxuICAgICAgICAgICAgZmlsZUNvbnRlbnQsXG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIGZyb21GaWxlKGZpbGUsIGNvbnRleHQpIHtcbiAgICBjb25zdCBsZXhlciA9IGZ1cnRsZUxleGVyLCAgLy8vXG4gICAgICAgICAgcGFyc2VyID0gZnVydGxlUGFyc2VyLCAgLy8vXG4gICAgICAgICAgcHJvY2VkdXJlcyA9IFtdLFxuICAgICAgICAgIGZ1cnRsZUZpbGVDb250ZXh0ID0gRmlsZUNvbnRleHQuZnJvbUZpbGUoRnVydGxlRmlsZUNvbnRleHQsIGZpbGUsIGxleGVyLCBwYXJzZXIsIHByb2NlZHVyZXMsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIGZ1cnRsZUZpbGVDb250ZXh0O1xuICB9XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgICBjb25zdCBsZXhlciA9IGZ1cnRsZUxleGVyLCAgLy8vXG4gICAgICAgICAgcGFyc2VyID0gZnVydGxlUGFyc2VyLCAgLy8vXG4gICAgICAgICAgcHJvY2VkdXJlcyA9IG51bGwsXG4gICAgICAgICAgZnVydGxlRmlsZUNvbnRleHQgPSBGaWxlQ29udGV4dC5mcm9tSlNPTihGdXJ0bGVGaWxlQ29udGV4dCwganNvbiwgbGV4ZXIsIHBhcnNlciwgcHJvY2VkdXJlcywgY29udGV4dCk7XG5cbiAgICByZXR1cm4gZnVydGxlRmlsZUNvbnRleHQ7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJGdXJ0bGVGaWxlQ29udGV4dCIsIkZpbGVDb250ZXh0IiwiY29udGV4dCIsImZpbGVDb250ZW50IiwiZmlsZVBhdGgiLCJ0b2tlbnMiLCJub2RlIiwibGV4ZXIiLCJwYXJzZXIiLCJwcm9jZWR1cmVzIiwiZ2V0TGV4ZXIiLCJnZXRQYXJzZXIiLCJnZXRQcm9jZWR1cmVzIiwiaW5jbHVkZVJlbGVhc2UiLCJnZXRMYWJlbHMiLCJsYWJlbHMiLCJnZXRUeXBlcyIsInR5cGVzIiwiZ2V0UnVsZXMiLCJydWxlcyIsImdldEF4aW9tcyIsImF4aW9tcyIsImdldExlbW1hcyIsImxlbW1hcyIsImdldFRoZW9yZW1zIiwidGhlb3JlbXMiLCJnZXRWYXJpYWJsZXMiLCJ2YXJpYWJsZXMiLCJnZXRNZXRhTGVtbWFzIiwibWV0YUxlbW1hcyIsImdldENvbmplY3R1cmVzIiwiY29uamVjdHVyZXMiLCJnZXRDb21iaW5hdG9ycyIsImNvbWJpbmF0b3JzIiwiZ2V0VHlwZVByZWZpeGVzIiwidHlwZVByZWZpeGVzIiwiZ2V0Q29uc3RydWN0b3JzIiwiY29uc3RydWN0b3JzIiwiZ2V0TWV0YXRoZW9yZW1zIiwibWV0YXRoZW9yZW1zIiwiZ2V0TWV0YXZhcmlhYmxlcyIsIm1ldGF2YXJpYWJsZXMiLCJhZGRQcm9jZWR1cmUiLCJwcm9jZWR1cmUiLCJwcm9jZWR1cmVTdHJpbmciLCJnZXRTdHJpbmciLCJwdXNoIiwiZ2V0RmlsZVBhdGgiLCJkZWJ1ZyIsImZpbmRQcm9jZWR1cmVCeVByb2NlZHVyZU5hbWUiLCJwcm9jZWR1cmVOYW1lIiwiZmluZCIsInByb2NlZHVyZUNvbXBhcmVzVG9Qcm9jZWR1cmVOYW1lIiwiY29tcGFyZVByb2NlZHVyZU5hbWUiLCJpc1Byb2NlZHVyZVByZXNlbnRCeVByb2NlZHVyZU5hbWUiLCJwcm9jZWR1cmVQcmVzZW50IiwiY2xlYXIiLCJjb21wbGV0ZSIsImluaXRpYWxpc2UiLCJqc29uIiwicHJlcGFyZSIsImdldE5vZGUiLCJmaWxlTm9kZSIsInZlcmlmeUZpbGUiLCJmaWxlVmVyaWZpZXMiLCJ0b0pTT04iLCJnZXRGaWxlQ29udGVudCIsImZyb21GaWxlIiwiZmlsZSIsImZ1cnRsZUxleGVyIiwiZnVydGxlUGFyc2VyIiwiZnVydGxlRmlsZUNvbnRleHQiLCJmcm9tSlNPTiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBT0E7OztlQUFxQkE7OztnQ0FMTzt3QkFFRDt3QkFDZTtBQUUzQixNQUFNQSwwQkFBMEJDLDJCQUFXO0lBQ3hELFlBQVlDLE9BQU8sRUFBRUMsV0FBVyxFQUFFQyxRQUFRLEVBQUVDLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxLQUFLLEVBQUVDLE1BQU0sRUFBRUMsVUFBVSxDQUFFO1FBQ25GLEtBQUssQ0FBQ1AsU0FBU0MsYUFBYUMsVUFBVUMsUUFBUUM7UUFFOUMsSUFBSSxDQUFDQyxLQUFLLEdBQUdBO1FBQ2IsSUFBSSxDQUFDQyxNQUFNLEdBQUdBO1FBQ2QsSUFBSSxDQUFDQyxVQUFVLEdBQUdBO0lBQ3BCO0lBRUFDLFdBQVc7UUFDVCxPQUFPLElBQUksQ0FBQ0gsS0FBSztJQUNuQjtJQUVBSSxZQUFZO1FBQ1YsT0FBTyxJQUFJLENBQUNILE1BQU07SUFDcEI7SUFFQUksY0FBY0MsaUJBQWlCLElBQUksRUFBRTtRQUNuQyxNQUFNSixhQUFhSSxpQkFDRSxJQUFJLENBQUNYLE9BQU8sQ0FBQ1UsYUFBYSxLQUN4QixJQUFJLENBQUNILFVBQVU7UUFFdEMsT0FBT0E7SUFDVDtJQUVBSyxVQUFVRCxpQkFBaUIsSUFBSSxFQUFFO1FBQy9CLE1BQU1FLFNBQVMsRUFBRTtRQUVqQixPQUFPQTtJQUNUO0lBRUFDLFNBQVNILGlCQUFpQixJQUFJLEVBQUU7UUFDOUIsTUFBTUksUUFBUSxFQUFFO1FBRWhCLE9BQU9BO0lBQ1Q7SUFFQUMsU0FBU0wsaUJBQWlCLElBQUksRUFBRTtRQUM5QixNQUFNTSxRQUFRLEVBQUU7UUFFaEIsT0FBT0E7SUFDVDtJQUVBQyxVQUFVUCxpQkFBaUIsSUFBSSxFQUFFO1FBQy9CLE1BQU1RLFNBQVMsRUFBRTtRQUVqQixP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