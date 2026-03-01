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
    constructor(context, filePath, tokens, node, lexer, parser, procedures){
        super(context, filePath, tokens, node);
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
    async verifyFile() {
        const node = this.getNode(), context = this, fileNode = node, fileVerifies = (0, _verify.verifyFile)(fileNode, context);
        return fileVerifies;
    }
    static fromFile(file, context) {
        const lexer = _furtle.furtleLexer, parser = _furtle.furtleParser, procedures = [], furtleFileContext = _occamlanguages.FileContext.fromFile(FurtleFileContext, file, lexer, parser, procedures, context);
        return furtleFileContext;
    }
    static fromJSON(json, context) {
        const lexer = _furtle.furtleLexer, parser = _furtle.furtleParser, procedures = null, furtleFileContext = ileContext.fromFilePath(FurtleFileContext, json, lexer, parser, procedures, context);
        return furtleFileContext;
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb250ZXh0L2ZpbGUvZnVydGxlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBGaWxlQ29udGV4dCB9IGZyb20gXCJvY2NhbS1sYW5ndWFnZXNcIjtcblxuaW1wb3J0IHsgdmVyaWZ5RmlsZSB9IGZyb20gXCIuLi8uLi9wcm9jZXNzL3ZlcmlmeVwiO1xuaW1wb3J0IHsgZnVydGxlTGV4ZXIsIGZ1cnRsZVBhcnNlciB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvZnVydGxlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZ1cnRsZUZpbGVDb250ZXh0IGV4dGVuZHMgRmlsZUNvbnRleHQge1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBmaWxlUGF0aCwgdG9rZW5zLCBub2RlLCBsZXhlciwgcGFyc2VyLCBwcm9jZWR1cmVzKSB7XG4gICAgc3VwZXIoY29udGV4dCwgZmlsZVBhdGgsIHRva2Vucywgbm9kZSk7XG5cbiAgICB0aGlzLnByb2NlZHVyZXMgPSBwcm9jZWR1cmVzO1xuICB9XG5cbiAgZ2V0TGV4ZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMubGV4ZXI7XG4gIH1cblxuICBnZXRQYXJzZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMucGFyc2VyO1xuICB9XG5cbiAgZ2V0UHJvY2VkdXJlcyhpbmNsdWRlUmVsZWFzZSA9IHRydWUpIHtcbiAgICBjb25zdCBwcm9jZWR1cmVzID0gaW5jbHVkZVJlbGVhc2UgP1xuICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY29udGV4dC5nZXRQcm9jZWR1cmVzKCkgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9jZWR1cmVzO1xuXG4gICAgcmV0dXJuIHByb2NlZHVyZXM7XG4gIH1cblxuICBnZXRMYWJlbHMoaW5jbHVkZVJlbGVhc2UgPSB0cnVlKSB7XG4gICAgY29uc3QgbGFiZWxzID0gW107XG5cbiAgICByZXR1cm4gbGFiZWxzO1xuICB9XG5cbiAgZ2V0VHlwZXMoaW5jbHVkZVJlbGVhc2UgPSB0cnVlKSB7XG4gICAgY29uc3QgdHlwZXMgPSBbXTtcblxuICAgIHJldHVybiB0eXBlcztcbiAgfVxuXG4gIGdldFJ1bGVzKGluY2x1ZGVSZWxlYXNlID0gdHJ1ZSkge1xuICAgIGNvbnN0IHJ1bGVzID0gW11cblxuICAgIHJldHVybiBydWxlcztcbiAgfVxuXG4gIGdldEF4aW9tcyhpbmNsdWRlUmVsZWFzZSA9IHRydWUpIHtcbiAgICBjb25zdCBheGlvbXMgPSBbXTtcblxuICAgIHJldHVybiBheGlvbXM7XG4gIH1cblxuICBnZXRMZW1tYXMoaW5jbHVkZVJlbGVhc2UgPSB0cnVlKSB7XG4gICAgY29uc3QgbGVtbWFzID0gW107XG5cbiAgICByZXR1cm4gbGVtbWFzO1xuICB9XG5cbiAgZ2V0VGhlb3JlbXMoaW5jbHVkZVJlbGVhc2UgPSB0cnVlKSB7XG4gICAgY29uc3QgdGhlb3JlbXMgPSBbXTtcblxuICAgIHJldHVybiB0aGVvcmVtcztcbiAgfVxuXG4gIGdldFZhcmlhYmxlcyhpbmNsdWRlUmVsZWFzZSA9IHRydWUpIHtcbiAgICBjb25zdCB2YXJpYWJsZXMgPSBbXTtcblxuICAgIHJldHVybiB2YXJpYWJsZXM7XG4gIH1cblxuICBnZXRNZXRhTGVtbWFzKGluY2x1ZGVSZWxlYXNlID0gdHJ1ZSkge1xuICAgIGNvbnN0IG1ldGFMZW1tYXMgPSBbXTtcblxuICAgIHJldHVybiBtZXRhTGVtbWFzO1xuICB9XG5cbiAgZ2V0Q29uamVjdHVyZXMoaW5jbHVkZVJlbGVhc2UgPSB0cnVlKSB7XG4gICAgY29uc3QgY29uamVjdHVyZXMgPSBbXTtcblxuICAgIHJldHVybiBjb25qZWN0dXJlcztcbiAgfVxuXG4gIGdldENvbWJpbmF0b3JzKGluY2x1ZGVSZWxlYXNlID0gdHJ1ZSkge1xuICAgIGNvbnN0IGNvbWJpbmF0b3JzID0gW107XG5cbiAgICByZXR1cm4gY29tYmluYXRvcnM7XG4gIH1cblxuICBnZXRUeXBlUHJlZml4ZXMoaW5jbHVkZVJlbGVhc2UgPSB0cnVlKSB7XG4gICAgY29uc3QgdHlwZVByZWZpeGVzID0gW107XG5cbiAgICByZXR1cm4gdHlwZVByZWZpeGVzO1xuICB9XG5cbiAgZ2V0Q29uc3RydWN0b3JzKGluY2x1ZGVSZWxlYXNlID0gdHJ1ZSkge1xuICAgIGNvbnN0IGNvbnN0cnVjdG9ycyA9IFtdO1xuXG4gICAgcmV0dXJuIGNvbnN0cnVjdG9ycztcbiAgfVxuXG4gIGdldE1ldGF0aGVvcmVtcyhpbmNsdWRlUmVsZWFzZSA9IHRydWUpIHtcbiAgICBjb25zdCBtZXRhdGhlb3JlbXMgPSBbXTtcblxuICAgIHJldHVybiBtZXRhdGhlb3JlbXM7XG4gIH1cblxuICBnZXRNZXRhdmFyaWFibGVzKGluY2x1ZGVSZWxlYXNlID0gdHJ1ZSkge1xuICAgIGNvbnN0IG1ldGF2YXJpYWJsZXMgPSBbXTtcblxuICAgIHJldHVybiBtZXRhdmFyaWFibGVzO1xuICB9XG5cbiAgYWRkUHJvY2VkdXJlKHByb2NlZHVyZSkge1xuICAgIGNvbnN0IHByb2NlZHVyZVN0cmluZyA9IHByb2NlZHVyZS5nZXRTdHJpbmcoKTtcblxuICAgIHRoaXMucHJvY2VkdXJlcy5wdXNoKHByb2NlZHVyZSk7XG5cbiAgICBjb25zdCBmaWxlUGF0aCA9IHRoaXMuZ2V0RmlsZVBhdGgoKTtcblxuICAgIHRoaXMuZGVidWcoYEFkZGVkIHRoZSAnJHtwcm9jZWR1cmVTdHJpbmd9JyBwcm9jZWR1cmUgdG8gdGhlICcke2ZpbGVQYXRofScgZmlsZSBjb250ZXh0LmApO1xuICB9XG5cbiAgZmluZFByb2NlZHVyZUJ5UHJvY2VkdXJlTmFtZShwcm9jZWR1cmVOYW1lKSB7XG4gICAgY29uc3QgcHJvY2VkdXJlcyA9IHRoaXMuZ2V0UHJvY2VkdXJlcygpLFxuICAgICAgICAgIHByb2NlZHVyZSA9IHByb2NlZHVyZXMuZmluZCgocHJvY2VkdXJlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBwcm9jZWR1cmVDb21wYXJlc1RvUHJvY2VkdXJlTmFtZSA9IHByb2NlZHVyZS5jb21wYXJlUHJvY2VkdXJlTmFtZShwcm9jZWR1cmVOYW1lKTtcblxuICAgICAgICAgICAgaWYgKHByb2NlZHVyZUNvbXBhcmVzVG9Qcm9jZWR1cmVOYW1lKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pIHx8IG51bGw7XG5cbiAgICByZXR1cm4gcHJvY2VkdXJlO1xuICB9XG5cbiAgaXNQcm9jZWR1cmVQcmVzZW50QnlQcm9jZWR1cmVOYW1lKHByb2NlZHVyZU5hbWUpIHtcbiAgICBjb25zdCBwcm9jZWR1cmUgPSB0aGlzLmZpbmRQcm9jZWR1cmVCeVByb2NlZHVyZU5hbWUocHJvY2VkdXJlTmFtZSksXG4gICAgICAgICAgcHJvY2VkdXJlUHJlc2VudCA9IChwcm9jZWR1cmUgIT09IG51bGwpO1xuXG4gICAgcmV0dXJuIHByb2NlZHVyZVByZXNlbnQ7XG4gIH1cblxuICBjbGVhcigpIHtcbiAgICB0aGlzLnByb2NlZHVyZXMgPSBbXTtcbiAgfVxuXG4gIGNvbXBsZXRlKCkge1xuICAgIC8vL1xuICB9XG5cbiAgYXN5bmMgdmVyaWZ5RmlsZSgpIHtcbiAgICBjb25zdCBub2RlID0gdGhpcy5nZXROb2RlKCksXG4gICAgICAgICAgY29udGV4dCA9IHRoaXMsIC8vL1xuICAgICAgICAgIGZpbGVOb2RlID0gbm9kZSwgIC8vL1xuICAgICAgICAgIGZpbGVWZXJpZmllcyA9IHZlcmlmeUZpbGUoZmlsZU5vZGUsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIGZpbGVWZXJpZmllcztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tRmlsZShmaWxlLCBjb250ZXh0KSB7XG4gICAgY29uc3QgbGV4ZXIgPSBmdXJ0bGVMZXhlciwgIC8vL1xuICAgICAgICAgIHBhcnNlciA9IGZ1cnRsZVBhcnNlciwgIC8vL1xuICAgICAgICAgIHByb2NlZHVyZXMgPSBbXSxcbiAgICAgICAgICBmdXJ0bGVGaWxlQ29udGV4dCA9IEZpbGVDb250ZXh0LmZyb21GaWxlKEZ1cnRsZUZpbGVDb250ZXh0LCBmaWxlLCBsZXhlciwgcGFyc2VyLCBwcm9jZWR1cmVzLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBmdXJ0bGVGaWxlQ29udGV4dDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gICAgY29uc3QgbGV4ZXIgPSBmdXJ0bGVMZXhlciwgIC8vL1xuICAgICAgICAgIHBhcnNlciA9IGZ1cnRsZVBhcnNlciwgIC8vL1xuICAgICAgICAgIHByb2NlZHVyZXMgPSBudWxsLFxuICAgICAgICAgIGZ1cnRsZUZpbGVDb250ZXh0ID0gaWxlQ29udGV4dC5mcm9tRmlsZVBhdGgoRnVydGxlRmlsZUNvbnRleHQsIGpzb24sIGxleGVyLCBwYXJzZXIsIHByb2NlZHVyZXMsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIGZ1cnRsZUZpbGVDb250ZXh0O1xuICB9XG59XG4iXSwibmFtZXMiOlsiRnVydGxlRmlsZUNvbnRleHQiLCJGaWxlQ29udGV4dCIsImNvbnRleHQiLCJmaWxlUGF0aCIsInRva2VucyIsIm5vZGUiLCJsZXhlciIsInBhcnNlciIsInByb2NlZHVyZXMiLCJnZXRMZXhlciIsImdldFBhcnNlciIsImdldFByb2NlZHVyZXMiLCJpbmNsdWRlUmVsZWFzZSIsImdldExhYmVscyIsImxhYmVscyIsImdldFR5cGVzIiwidHlwZXMiLCJnZXRSdWxlcyIsInJ1bGVzIiwiZ2V0QXhpb21zIiwiYXhpb21zIiwiZ2V0TGVtbWFzIiwibGVtbWFzIiwiZ2V0VGhlb3JlbXMiLCJ0aGVvcmVtcyIsImdldFZhcmlhYmxlcyIsInZhcmlhYmxlcyIsImdldE1ldGFMZW1tYXMiLCJtZXRhTGVtbWFzIiwiZ2V0Q29uamVjdHVyZXMiLCJjb25qZWN0dXJlcyIsImdldENvbWJpbmF0b3JzIiwiY29tYmluYXRvcnMiLCJnZXRUeXBlUHJlZml4ZXMiLCJ0eXBlUHJlZml4ZXMiLCJnZXRDb25zdHJ1Y3RvcnMiLCJjb25zdHJ1Y3RvcnMiLCJnZXRNZXRhdGhlb3JlbXMiLCJtZXRhdGhlb3JlbXMiLCJnZXRNZXRhdmFyaWFibGVzIiwibWV0YXZhcmlhYmxlcyIsImFkZFByb2NlZHVyZSIsInByb2NlZHVyZSIsInByb2NlZHVyZVN0cmluZyIsImdldFN0cmluZyIsInB1c2giLCJnZXRGaWxlUGF0aCIsImRlYnVnIiwiZmluZFByb2NlZHVyZUJ5UHJvY2VkdXJlTmFtZSIsInByb2NlZHVyZU5hbWUiLCJmaW5kIiwicHJvY2VkdXJlQ29tcGFyZXNUb1Byb2NlZHVyZU5hbWUiLCJjb21wYXJlUHJvY2VkdXJlTmFtZSIsImlzUHJvY2VkdXJlUHJlc2VudEJ5UHJvY2VkdXJlTmFtZSIsInByb2NlZHVyZVByZXNlbnQiLCJjbGVhciIsImNvbXBsZXRlIiwidmVyaWZ5RmlsZSIsImdldE5vZGUiLCJmaWxlTm9kZSIsImZpbGVWZXJpZmllcyIsImZyb21GaWxlIiwiZmlsZSIsImZ1cnRsZUxleGVyIiwiZnVydGxlUGFyc2VyIiwiZnVydGxlRmlsZUNvbnRleHQiLCJmcm9tSlNPTiIsImpzb24iLCJpbGVDb250ZXh0IiwiZnJvbUZpbGVQYXRoIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFPQTs7O2VBQXFCQTs7O2dDQUxPO3dCQUVEO3dCQUNlO0FBRTNCLE1BQU1BLDBCQUEwQkMsMkJBQVc7SUFDeEQsWUFBWUMsT0FBTyxFQUFFQyxRQUFRLEVBQUVDLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxLQUFLLEVBQUVDLE1BQU0sRUFBRUMsVUFBVSxDQUFFO1FBQ3RFLEtBQUssQ0FBQ04sU0FBU0MsVUFBVUMsUUFBUUM7UUFFakMsSUFBSSxDQUFDRyxVQUFVLEdBQUdBO0lBQ3BCO0lBRUFDLFdBQVc7UUFDVCxPQUFPLElBQUksQ0FBQ0gsS0FBSztJQUNuQjtJQUVBSSxZQUFZO1FBQ1YsT0FBTyxJQUFJLENBQUNILE1BQU07SUFDcEI7SUFFQUksY0FBY0MsaUJBQWlCLElBQUksRUFBRTtRQUNuQyxNQUFNSixhQUFhSSxpQkFDRSxJQUFJLENBQUNWLE9BQU8sQ0FBQ1MsYUFBYSxLQUN4QixJQUFJLENB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