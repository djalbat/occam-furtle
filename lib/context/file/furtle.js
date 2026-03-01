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
        furtleFileContext.initialise(json);
        return furtleFileContext;
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb250ZXh0L2ZpbGUvZnVydGxlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBGaWxlQ29udGV4dCB9IGZyb20gXCJvY2NhbS1sYW5ndWFnZXNcIjtcblxuaW1wb3J0IHsgdmVyaWZ5RmlsZSB9IGZyb20gXCIuLi8uLi9wcm9jZXNzL3ZlcmlmeVwiO1xuaW1wb3J0IHsgZnVydGxlTGV4ZXIsIGZ1cnRsZVBhcnNlciB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvZnVydGxlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZ1cnRsZUZpbGVDb250ZXh0IGV4dGVuZHMgRmlsZUNvbnRleHQge1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBmaWxlQ29udGVudCwgZmlsZVBhdGgsIHRva2Vucywgbm9kZSwgbGV4ZXIsIHBhcnNlciwgcHJvY2VkdXJlcykge1xuICAgIHN1cGVyKGNvbnRleHQsIGZpbGVDb250ZW50LCBmaWxlUGF0aCwgdG9rZW5zLCBub2RlKTtcblxuICAgIHRoaXMubGV4ZXIgPSBsZXhlcjtcbiAgICB0aGlzLnBhcnNlciA9IHBhcnNlcjtcbiAgICB0aGlzLnByb2NlZHVyZXMgPSBwcm9jZWR1cmVzO1xuICB9XG5cbiAgZ2V0TGV4ZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMubGV4ZXI7XG4gIH1cblxuICBnZXRQYXJzZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMucGFyc2VyO1xuICB9XG5cbiAgZ2V0UHJvY2VkdXJlcyhpbmNsdWRlUmVsZWFzZSA9IHRydWUpIHtcbiAgICBjb25zdCBwcm9jZWR1cmVzID0gaW5jbHVkZVJlbGVhc2UgP1xuICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY29udGV4dC5nZXRQcm9jZWR1cmVzKCkgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9jZWR1cmVzO1xuXG4gICAgcmV0dXJuIHByb2NlZHVyZXM7XG4gIH1cblxuICBnZXRMYWJlbHMoaW5jbHVkZVJlbGVhc2UgPSB0cnVlKSB7XG4gICAgY29uc3QgbGFiZWxzID0gW107XG5cbiAgICByZXR1cm4gbGFiZWxzO1xuICB9XG5cbiAgZ2V0VHlwZXMoaW5jbHVkZVJlbGVhc2UgPSB0cnVlKSB7XG4gICAgY29uc3QgdHlwZXMgPSBbXTtcblxuICAgIHJldHVybiB0eXBlcztcbiAgfVxuXG4gIGdldFJ1bGVzKGluY2x1ZGVSZWxlYXNlID0gdHJ1ZSkge1xuICAgIGNvbnN0IHJ1bGVzID0gW11cblxuICAgIHJldHVybiBydWxlcztcbiAgfVxuXG4gIGdldEF4aW9tcyhpbmNsdWRlUmVsZWFzZSA9IHRydWUpIHtcbiAgICBjb25zdCBheGlvbXMgPSBbXTtcblxuICAgIHJldHVybiBheGlvbXM7XG4gIH1cblxuICBnZXRMZW1tYXMoaW5jbHVkZVJlbGVhc2UgPSB0cnVlKSB7XG4gICAgY29uc3QgbGVtbWFzID0gW107XG5cbiAgICByZXR1cm4gbGVtbWFzO1xuICB9XG5cbiAgZ2V0VGhlb3JlbXMoaW5jbHVkZVJlbGVhc2UgPSB0cnVlKSB7XG4gICAgY29uc3QgdGhlb3JlbXMgPSBbXTtcblxuICAgIHJldHVybiB0aGVvcmVtcztcbiAgfVxuXG4gIGdldFZhcmlhYmxlcyhpbmNsdWRlUmVsZWFzZSA9IHRydWUpIHtcbiAgICBjb25zdCB2YXJpYWJsZXMgPSBbXTtcblxuICAgIHJldHVybiB2YXJpYWJsZXM7XG4gIH1cblxuICBnZXRNZXRhTGVtbWFzKGluY2x1ZGVSZWxlYXNlID0gdHJ1ZSkge1xuICAgIGNvbnN0IG1ldGFMZW1tYXMgPSBbXTtcblxuICAgIHJldHVybiBtZXRhTGVtbWFzO1xuICB9XG5cbiAgZ2V0Q29uamVjdHVyZXMoaW5jbHVkZVJlbGVhc2UgPSB0cnVlKSB7XG4gICAgY29uc3QgY29uamVjdHVyZXMgPSBbXTtcblxuICAgIHJldHVybiBjb25qZWN0dXJlcztcbiAgfVxuXG4gIGdldENvbWJpbmF0b3JzKGluY2x1ZGVSZWxlYXNlID0gdHJ1ZSkge1xuICAgIGNvbnN0IGNvbWJpbmF0b3JzID0gW107XG5cbiAgICByZXR1cm4gY29tYmluYXRvcnM7XG4gIH1cblxuICBnZXRUeXBlUHJlZml4ZXMoaW5jbHVkZVJlbGVhc2UgPSB0cnVlKSB7XG4gICAgY29uc3QgdHlwZVByZWZpeGVzID0gW107XG5cbiAgICByZXR1cm4gdHlwZVByZWZpeGVzO1xuICB9XG5cbiAgZ2V0Q29uc3RydWN0b3JzKGluY2x1ZGVSZWxlYXNlID0gdHJ1ZSkge1xuICAgIGNvbnN0IGNvbnN0cnVjdG9ycyA9IFtdO1xuXG4gICAgcmV0dXJuIGNvbnN0cnVjdG9ycztcbiAgfVxuXG4gIGdldE1ldGF0aGVvcmVtcyhpbmNsdWRlUmVsZWFzZSA9IHRydWUpIHtcbiAgICBjb25zdCBtZXRhdGhlb3JlbXMgPSBbXTtcblxuICAgIHJldHVybiBtZXRhdGhlb3JlbXM7XG4gIH1cblxuICBnZXRNZXRhdmFyaWFibGVzKGluY2x1ZGVSZWxlYXNlID0gdHJ1ZSkge1xuICAgIGNvbnN0IG1ldGF2YXJpYWJsZXMgPSBbXTtcblxuICAgIHJldHVybiBtZXRhdmFyaWFibGVzO1xuICB9XG5cbiAgYWRkUHJvY2VkdXJlKHByb2NlZHVyZSkge1xuICAgIGNvbnN0IHByb2NlZHVyZVN0cmluZyA9IHByb2NlZHVyZS5nZXRTdHJpbmcoKTtcblxuICAgIHRoaXMucHJvY2VkdXJlcy5wdXNoKHByb2NlZHVyZSk7XG5cbiAgICBjb25zdCBmaWxlUGF0aCA9IHRoaXMuZ2V0RmlsZVBhdGgoKTtcblxuICAgIHRoaXMuZGVidWcoYEFkZGVkIHRoZSAnJHtwcm9jZWR1cmVTdHJpbmd9JyBwcm9jZWR1cmUgdG8gdGhlICcke2ZpbGVQYXRofScgZmlsZSBjb250ZXh0LmApO1xuICB9XG5cbiAgZmluZFByb2NlZHVyZUJ5UHJvY2VkdXJlTmFtZShwcm9jZWR1cmVOYW1lKSB7XG4gICAgY29uc3QgcHJvY2VkdXJlcyA9IHRoaXMuZ2V0UHJvY2VkdXJlcygpLFxuICAgICAgICAgIHByb2NlZHVyZSA9IHByb2NlZHVyZXMuZmluZCgocHJvY2VkdXJlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBwcm9jZWR1cmVDb21wYXJlc1RvUHJvY2VkdXJlTmFtZSA9IHByb2NlZHVyZS5jb21wYXJlUHJvY2VkdXJlTmFtZShwcm9jZWR1cmVOYW1lKTtcblxuICAgICAgICAgICAgaWYgKHByb2NlZHVyZUNvbXBhcmVzVG9Qcm9jZWR1cmVOYW1lKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pIHx8IG51bGw7XG5cbiAgICByZXR1cm4gcHJvY2VkdXJlO1xuICB9XG5cbiAgaXNQcm9jZWR1cmVQcmVzZW50QnlQcm9jZWR1cmVOYW1lKHByb2NlZHVyZU5hbWUpIHtcbiAgICBjb25zdCBwcm9jZWR1cmUgPSB0aGlzLmZpbmRQcm9jZWR1cmVCeVByb2NlZHVyZU5hbWUocHJvY2VkdXJlTmFtZSksXG4gICAgICAgICAgcHJvY2VkdXJlUHJlc2VudCA9IChwcm9jZWR1cmUgIT09IG51bGwpO1xuXG4gICAgcmV0dXJuIHByb2NlZHVyZVByZXNlbnQ7XG4gIH1cblxuICBjbGVhcigpIHtcbiAgICB0aGlzLnByb2NlZHVyZXMgPSBbXTtcbiAgfVxuXG4gIGNvbXBsZXRlKCkge1xuICAgIC8vL1xuICB9XG5cbiAgaW5pdGlhbGlzZShqc29uKSB7XG4gICAgdGhpcy5wcmVwYXJlKCk7XG5cbiAgICB0aGlzLnByb2NlZHVyZXMgPSBbXTtcblxuICAgIGNvbnN0IG5vZGUgPSB0aGlzLmdldE5vZGUoKSxcbiAgICAgICAgICBjb250ZXh0ID0gdGhpcywgLy8vXG4gICAgICAgICAgZmlsZU5vZGUgPSBub2RlOyAgLy8vXG5cbiAgICB2ZXJpZnlGaWxlKGZpbGVOb2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIGFzeW5jIHZlcmlmeUZpbGUoKSB7XG4gICAgY29uc3Qgbm9kZSA9IHRoaXMuZ2V0Tm9kZSgpLFxuICAgICAgICAgIGNvbnRleHQgPSB0aGlzLCAvLy9cbiAgICAgICAgICBmaWxlTm9kZSA9IG5vZGUsICAvLy9cbiAgICAgICAgICBmaWxlVmVyaWZpZXMgPSB2ZXJpZnlGaWxlKGZpbGVOb2RlLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBmaWxlVmVyaWZpZXM7XG4gIH1cblxuICB0b0pTT04oKSB7XG4gICAgY29uc3QgZmlsZVBhdGggPSB0aGlzLmdldEZpbGVQYXRoKCksXG4gICAgICAgICAgZmlsZUNvbnRlbnQgPSB0aGlzLmdldEZpbGVDb250ZW50KCksXG4gICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgIGZpbGVQYXRoLFxuICAgICAgICAgICAgZmlsZUNvbnRlbnQsXG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIGZyb21GaWxlKGZpbGUsIGNvbnRleHQpIHtcbiAgICBjb25zdCBsZXhlciA9IGZ1cnRsZUxleGVyLCAgLy8vXG4gICAgICAgICAgcGFyc2VyID0gZnVydGxlUGFyc2VyLCAgLy8vXG4gICAgICAgICAgcHJvY2VkdXJlcyA9IFtdLFxuICAgICAgICAgIGZ1cnRsZUZpbGVDb250ZXh0ID0gRmlsZUNvbnRleHQuZnJvbUZpbGUoRnVydGxlRmlsZUNvbnRleHQsIGZpbGUsIGxleGVyLCBwYXJzZXIsIHByb2NlZHVyZXMsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIGZ1cnRsZUZpbGVDb250ZXh0O1xuICB9XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgICBjb25zdCBsZXhlciA9IGZ1cnRsZUxleGVyLCAgLy8vXG4gICAgICAgICAgcGFyc2VyID0gZnVydGxlUGFyc2VyLCAgLy8vXG4gICAgICAgICAgcHJvY2VkdXJlcyA9IG51bGwsXG4gICAgICAgICAgZnVydGxlRmlsZUNvbnRleHQgPSBGaWxlQ29udGV4dC5mcm9tSlNPTihGdXJ0bGVGaWxlQ29udGV4dCwganNvbiwgbGV4ZXIsIHBhcnNlciwgcHJvY2VkdXJlcywgY29udGV4dCk7XG5cbiAgICBmdXJ0bGVGaWxlQ29udGV4dC5pbml0aWFsaXNlKGpzb24pO1xuXG4gICAgcmV0dXJuIGZ1cnRsZUZpbGVDb250ZXh0O1xuICB9XG59XG4iXSwibmFtZXMiOlsiRnVydGxlRmlsZUNvbnRleHQiLCJGaWxlQ29udGV4dCIsImNvbnRleHQiLCJmaWxlQ29udGVudCIsImZpbGVQYXRoIiwidG9rZW5zIiwibm9kZSIsImxleGVyIiwicGFyc2VyIiwicHJvY2VkdXJlcyIsImdldExleGVyIiwiZ2V0UGFyc2VyIiwiZ2V0UHJvY2VkdXJlcyIsImluY2x1ZGVSZWxlYXNlIiwiZ2V0TGFiZWxzIiwibGFiZWxzIiwiZ2V0VHlwZXMiLCJ0eXBlcyIsImdldFJ1bGVzIiwicnVsZXMiLCJnZXRBeGlvbXMiLCJheGlvbXMiLCJnZXRMZW1tYXMiLCJsZW1tYXMiLCJnZXRUaGVvcmVtcyIsInRoZW9yZW1zIiwiZ2V0VmFyaWFibGVzIiwidmFyaWFibGVzIiwiZ2V0TWV0YUxlbW1hcyIsIm1ldGFMZW1tYXMiLCJnZXRDb25qZWN0dXJlcyIsImNvbmplY3R1cmVzIiwiZ2V0Q29tYmluYXRvcnMiLCJjb21iaW5hdG9ycyIsImdldFR5cGVQcmVmaXhlcyIsInR5cGVQcmVmaXhlcyIsImdldENvbnN0cnVjdG9ycyIsImNvbnN0cnVjdG9ycyIsImdldE1ldGF0aGVvcmVtcyIsIm1ldGF0aGVvcmVtcyIsImdldE1ldGF2YXJpYWJsZXMiLCJtZXRhdmFyaWFibGVzIiwiYWRkUHJvY2VkdXJlIiwicHJvY2VkdXJlIiwicHJvY2VkdXJlU3RyaW5nIiwiZ2V0U3RyaW5nIiwicHVzaCIsImdldEZpbGVQYXRoIiwiZGVidWciLCJmaW5kUHJvY2VkdXJlQnlQcm9jZWR1cmVOYW1lIiwicHJvY2VkdXJlTmFtZSIsImZpbmQiLCJwcm9jZWR1cmVDb21wYXJlc1RvUHJvY2VkdXJlTmFtZSIsImNvbXBhcmVQcm9jZWR1cmVOYW1lIiwiaXNQcm9jZWR1cmVQcmVzZW50QnlQcm9jZWR1cmVOYW1lIiwicHJvY2VkdXJlUHJlc2VudCIsImNsZWFyIiwiY29tcGxldGUiLCJpbml0aWFsaXNlIiwianNvbiIsInByZXBhcmUiLCJnZXROb2RlIiwiZmlsZU5vZGUiLCJ2ZXJpZnlGaWxlIiwiZmlsZVZlcmlmaWVzIiwidG9KU09OIiwiZ2V0RmlsZUNvbnRlbnQiLCJmcm9tRmlsZSIsImZpbGUiLCJmdXJ0bGVMZXhlciIsImZ1cnRsZVBhcnNlciIsImZ1cnRsZUZpbGVDb250ZXh0IiwiZnJvbUpTT04iXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQU9BOzs7ZUFBcUJBOzs7Z0NBTE87d0JBRUQ7d0JBQ2U7QUFFM0IsTUFBTUEsMEJBQTBCQywyQkFBVztJQUN4RCxZQUFZQyxPQUFPLEVBQUVDLFdBQVcsRUFBRUMsUUFBUSxFQUFFQyxNQUFNLEVBQUVDLElBQUksRUFBRUMsS0FBSyxFQUFFQyxNQUFNLEVBQUVDLFVBQVUsQ0FBRTtRQUNuRixLQUFLLENBQUNQLFNBQVNDLGFBQWFDLFVBQVVDLFFBQVFDO1FBRTlDLElBQUksQ0FBQ0MsS0FBSyxHQUFHQTtRQUNiLElBQUksQ0FBQ0MsTUFBTSxHQUFHQTtRQUNkLElBQUksQ0FBQ0MsVUFBVSxHQUFHQTtJQUNwQjtJQUVBQyxXQUFXO1FBQ1QsT0FBTyxJQUFJLENBQUNILEtBQUs7SUFDbkI7SUFFQUksWUFBWTtRQUNWLE9BQU8sSUFBSSxDQUFDSCxNQUFNO0lBQ3BCO0lBRUFJLGNBQWNDLGlCQUFpQixJQUFJLEVBQUU7UUFDbkMsTUFBTUosYUFBYUksaUJBQ0UsSUFBSSxDQUFDWCxPQUFPLENBQUNVLGFBQWEsS0FDeEIsSUFBSSxDQUFDSCxVQUFVO1FBRXRDLE9BQU9BO0lBQ1Q7SUFFQUssVUFBVUQsaUJBQWlCLElBQUksRUFBRTtRQUMvQixNQUFNRSxTQUFTLEVBQUU7UUFFakIsT0FBT0E7SUFDVDtJQUVBQyxTQUFTSCxpQkFBaUIsSUFBSSxFQUFFO1FBQzlCLE1BQU1JLFFBQVEsRUFBRTtRQUVoQixPQUFPQTtJQUNUO0lBRUFDLFNBQVNMLGlCQUFpQixJQUFJLEVBQUU7UUFDOUIsTUFBTU0sUUFBUSxFQUFFO1FBRWhCLE9BQU9BO0lBQ1Q7SUFFQUMsVUFBVVAsaUJB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