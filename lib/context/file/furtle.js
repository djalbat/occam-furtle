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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb250ZXh0L2ZpbGUvZnVydGxlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBGaWxlQ29udGV4dCB9IGZyb20gXCJvY2NhbS1sYW5ndWFnZXNcIjtcblxuaW1wb3J0IHsgdmVyaWZ5RmlsZSB9IGZyb20gXCIuLi8uLi9wcm9jZXNzL3ZlcmlmeVwiO1xuaW1wb3J0IHsgZnVydGxlTGV4ZXIsIGZ1cnRsZVBhcnNlciB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvZnVydGxlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZ1cnRsZUZpbGVDb250ZXh0IGV4dGVuZHMgRmlsZUNvbnRleHQge1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBmaWxlQ29udGVudCwgZmlsZVBhdGgsIHRva2Vucywgbm9kZSwgbGV4ZXIsIHBhcnNlciwgcHJvY2VkdXJlcykge1xuICAgIHN1cGVyKGNvbnRleHQsIGZpbGVDb250ZW50LCBmaWxlUGF0aCwgdG9rZW5zLCBub2RlKTtcblxuICAgIHRoaXMubGV4ZXIgPSBsZXhlcjtcbiAgICB0aGlzLnBhcnNlciA9IHBhcnNlcjtcbiAgICB0aGlzLnByb2NlZHVyZXMgPSBwcm9jZWR1cmVzO1xuICB9XG5cbiAgZ2V0TGV4ZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMubGV4ZXI7XG4gIH1cblxuICBnZXRQYXJzZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMucGFyc2VyO1xuICB9XG5cbiAgZ2V0UHJvY2VkdXJlcyhpbmNsdWRlUmVsZWFzZSA9IHRydWUpIHtcbiAgICBjb25zdCBwcm9jZWR1cmVzID0gaW5jbHVkZVJlbGVhc2UgP1xuICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY29udGV4dC5nZXRQcm9jZWR1cmVzKCkgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9jZWR1cmVzO1xuXG4gICAgcmV0dXJuIHByb2NlZHVyZXM7XG4gIH1cblxuICBnZXRMYWJlbHMoaW5jbHVkZVJlbGVhc2UgPSB0cnVlKSB7XG4gICAgY29uc3QgbGFiZWxzID0gW107XG5cbiAgICByZXR1cm4gbGFiZWxzO1xuICB9XG5cbiAgZ2V0VHlwZXMoaW5jbHVkZVJlbGVhc2UgPSB0cnVlKSB7XG4gICAgY29uc3QgdHlwZXMgPSBbXTtcblxuICAgIHJldHVybiB0eXBlcztcbiAgfVxuXG4gIGdldFJ1bGVzKGluY2x1ZGVSZWxlYXNlID0gdHJ1ZSkge1xuICAgIGNvbnN0IHJ1bGVzID0gW11cblxuICAgIHJldHVybiBydWxlcztcbiAgfVxuXG4gIGdldEF4aW9tcyhpbmNsdWRlUmVsZWFzZSA9IHRydWUpIHtcbiAgICBjb25zdCBheGlvbXMgPSBbXTtcblxuICAgIHJldHVybiBheGlvbXM7XG4gIH1cblxuICBnZXRMZW1tYXMoaW5jbHVkZVJlbGVhc2UgPSB0cnVlKSB7XG4gICAgY29uc3QgbGVtbWFzID0gW107XG5cbiAgICByZXR1cm4gbGVtbWFzO1xuICB9XG5cbiAgZ2V0VGhlb3JlbXMoaW5jbHVkZVJlbGVhc2UgPSB0cnVlKSB7XG4gICAgY29uc3QgdGhlb3JlbXMgPSBbXTtcblxuICAgIHJldHVybiB0aGVvcmVtcztcbiAgfVxuXG4gIGdldFZhcmlhYmxlcyhpbmNsdWRlUmVsZWFzZSA9IHRydWUpIHtcbiAgICBjb25zdCB2YXJpYWJsZXMgPSBbXTtcblxuICAgIHJldHVybiB2YXJpYWJsZXM7XG4gIH1cblxuICBnZXRNZXRhTGVtbWFzKGluY2x1ZGVSZWxlYXNlID0gdHJ1ZSkge1xuICAgIGNvbnN0IG1ldGFMZW1tYXMgPSBbXTtcblxuICAgIHJldHVybiBtZXRhTGVtbWFzO1xuICB9XG5cbiAgZ2V0Q29uamVjdHVyZXMoaW5jbHVkZVJlbGVhc2UgPSB0cnVlKSB7XG4gICAgY29uc3QgY29uamVjdHVyZXMgPSBbXTtcblxuICAgIHJldHVybiBjb25qZWN0dXJlcztcbiAgfVxuXG4gIGdldENvbWJpbmF0b3JzKGluY2x1ZGVSZWxlYXNlID0gdHJ1ZSkge1xuICAgIGNvbnN0IGNvbWJpbmF0b3JzID0gW107XG5cbiAgICByZXR1cm4gY29tYmluYXRvcnM7XG4gIH1cblxuICBnZXRUeXBlUHJlZml4ZXMoaW5jbHVkZVJlbGVhc2UgPSB0cnVlKSB7XG4gICAgY29uc3QgdHlwZVByZWZpeGVzID0gW107XG5cbiAgICByZXR1cm4gdHlwZVByZWZpeGVzO1xuICB9XG5cbiAgZ2V0Q29uc3RydWN0b3JzKGluY2x1ZGVSZWxlYXNlID0gdHJ1ZSkge1xuICAgIGNvbnN0IGNvbnN0cnVjdG9ycyA9IFtdO1xuXG4gICAgcmV0dXJuIGNvbnN0cnVjdG9ycztcbiAgfVxuXG4gIGdldE1ldGF0aGVvcmVtcyhpbmNsdWRlUmVsZWFzZSA9IHRydWUpIHtcbiAgICBjb25zdCBtZXRhdGhlb3JlbXMgPSBbXTtcblxuICAgIHJldHVybiBtZXRhdGhlb3JlbXM7XG4gIH1cblxuICBnZXRNZXRhdmFyaWFibGVzKGluY2x1ZGVSZWxlYXNlID0gdHJ1ZSkge1xuICAgIGNvbnN0IG1ldGF2YXJpYWJsZXMgPSBbXTtcblxuICAgIHJldHVybiBtZXRhdmFyaWFibGVzO1xuICB9XG5cbiAgYWRkUHJvY2VkdXJlKHByb2NlZHVyZSkge1xuICAgIGNvbnN0IHByb2NlZHVyZVN0cmluZyA9IHByb2NlZHVyZS5nZXRTdHJpbmcoKTtcblxuICAgIHRoaXMucHJvY2VkdXJlcy5wdXNoKHByb2NlZHVyZSk7XG5cbiAgICBjb25zdCBmaWxlUGF0aCA9IHRoaXMuZ2V0RmlsZVBhdGgoKTtcblxuICAgIHRoaXMuZGVidWcoYEFkZGVkIHRoZSAnJHtwcm9jZWR1cmVTdHJpbmd9JyBwcm9jZWR1cmUgdG8gdGhlICcke2ZpbGVQYXRofScgZmlsZSBjb250ZXh0LmApO1xuICB9XG5cbiAgZmluZFByb2NlZHVyZUJ5UHJvY2VkdXJlTmFtZShwcm9jZWR1cmVOYW1lKSB7XG4gICAgY29uc3QgcHJvY2VkdXJlcyA9IHRoaXMuZ2V0UHJvY2VkdXJlcygpLFxuICAgICAgICAgIHByb2NlZHVyZSA9IHByb2NlZHVyZXMuZmluZCgocHJvY2VkdXJlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBwcm9jZWR1cmVDb21wYXJlc1RvUHJvY2VkdXJlTmFtZSA9IHByb2NlZHVyZS5jb21wYXJlUHJvY2VkdXJlTmFtZShwcm9jZWR1cmVOYW1lKTtcblxuICAgICAgICAgICAgaWYgKHByb2NlZHVyZUNvbXBhcmVzVG9Qcm9jZWR1cmVOYW1lKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pIHx8IG51bGw7XG5cbiAgICByZXR1cm4gcHJvY2VkdXJlO1xuICB9XG5cbiAgaXNQcm9jZWR1cmVQcmVzZW50QnlQcm9jZWR1cmVOYW1lKHByb2NlZHVyZU5hbWUpIHtcbiAgICBjb25zdCBwcm9jZWR1cmUgPSB0aGlzLmZpbmRQcm9jZWR1cmVCeVByb2NlZHVyZU5hbWUocHJvY2VkdXJlTmFtZSksXG4gICAgICAgICAgcHJvY2VkdXJlUHJlc2VudCA9IChwcm9jZWR1cmUgIT09IG51bGwpO1xuXG4gICAgcmV0dXJuIHByb2NlZHVyZVByZXNlbnQ7XG4gIH1cblxuICBjbGVhcigpIHtcbiAgICB0aGlzLnByb2NlZHVyZXMgPSBbXTtcbiAgfVxuXG4gIGNvbXBsZXRlKCkge1xuICAgIC8vL1xuICB9XG5cbiAgaW5pdGlhbGlzZShqc29uKSB7XG4gICAgdGhpcy5wcmVwYXJlKCk7XG5cbiAgICBjb25zdCBub2RlID0gdGhpcy5nZXROb2RlKCksXG4gICAgICAgICAgY29udGV4dCA9IHRoaXMsIC8vL1xuICAgICAgICAgIGZpbGVOb2RlID0gbm9kZTsgIC8vL1xuXG4gICAgdmVyaWZ5RmlsZShmaWxlTm9kZSwgY29udGV4dCk7XG4gIH1cblxuICBhc3luYyB2ZXJpZnlGaWxlKCkge1xuICAgIGNvbnN0IG5vZGUgPSB0aGlzLmdldE5vZGUoKSxcbiAgICAgICAgICBjb250ZXh0ID0gdGhpcywgLy8vXG4gICAgICAgICAgZmlsZU5vZGUgPSBub2RlLCAgLy8vXG4gICAgICAgICAgZmlsZVZlcmlmaWVzID0gdmVyaWZ5RmlsZShmaWxlTm9kZSwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gZmlsZVZlcmlmaWVzO1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IGZpbGVQYXRoID0gdGhpcy5nZXRGaWxlUGF0aCgpLFxuICAgICAgICAgIGZpbGVDb250ZW50ID0gdGhpcy5nZXRGaWxlQ29udGVudCgpLFxuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICBmaWxlUGF0aCxcbiAgICAgICAgICAgIGZpbGVDb250ZW50LFxuICAgICAgICAgIH07XG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tRmlsZShmaWxlLCBjb250ZXh0KSB7XG4gICAgY29uc3QgbGV4ZXIgPSBmdXJ0bGVMZXhlciwgIC8vL1xuICAgICAgICAgIHBhcnNlciA9IGZ1cnRsZVBhcnNlciwgIC8vL1xuICAgICAgICAgIHByb2NlZHVyZXMgPSBbXSxcbiAgICAgICAgICBmdXJ0bGVGaWxlQ29udGV4dCA9IEZpbGVDb250ZXh0LmZyb21GaWxlKEZ1cnRsZUZpbGVDb250ZXh0LCBmaWxlLCBsZXhlciwgcGFyc2VyLCBwcm9jZWR1cmVzLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBmdXJ0bGVGaWxlQ29udGV4dDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gICAgY29uc3QgbGV4ZXIgPSBmdXJ0bGVMZXhlciwgIC8vL1xuICAgICAgICAgIHBhcnNlciA9IGZ1cnRsZVBhcnNlciwgIC8vL1xuICAgICAgICAgIHByb2NlZHVyZXMgPSBudWxsLFxuICAgICAgICAgIGZ1cnRsZUZpbGVDb250ZXh0ID0gRmlsZUNvbnRleHQuZnJvbUpTT04oRnVydGxlRmlsZUNvbnRleHQsIGpzb24sIGxleGVyLCBwYXJzZXIsIHByb2NlZHVyZXMsIGNvbnRleHQpO1xuXG4gICAgZnVydGxlRmlsZUNvbnRleHQuaW5pdGlhbGlzZShqc29uKTtcblxuICAgIHJldHVybiBmdXJ0bGVGaWxlQ29udGV4dDtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIkZ1cnRsZUZpbGVDb250ZXh0IiwiRmlsZUNvbnRleHQiLCJjb250ZXh0IiwiZmlsZUNvbnRlbnQiLCJmaWxlUGF0aCIsInRva2VucyIsIm5vZGUiLCJsZXhlciIsInBhcnNlciIsInByb2NlZHVyZXMiLCJnZXRMZXhlciIsImdldFBhcnNlciIsImdldFByb2NlZHVyZXMiLCJpbmNsdWRlUmVsZWFzZSIsImdldExhYmVscyIsImxhYmVscyIsImdldFR5cGVzIiwidHlwZXMiLCJnZXRSdWxlcyIsInJ1bGVzIiwiZ2V0QXhpb21zIiwiYXhpb21zIiwiZ2V0TGVtbWFzIiwibGVtbWFzIiwiZ2V0VGhlb3JlbXMiLCJ0aGVvcmVtcyIsImdldFZhcmlhYmxlcyIsInZhcmlhYmxlcyIsImdldE1ldGFMZW1tYXMiLCJtZXRhTGVtbWFzIiwiZ2V0Q29uamVjdHVyZXMiLCJjb25qZWN0dXJlcyIsImdldENvbWJpbmF0b3JzIiwiY29tYmluYXRvcnMiLCJnZXRUeXBlUHJlZml4ZXMiLCJ0eXBlUHJlZml4ZXMiLCJnZXRDb25zdHJ1Y3RvcnMiLCJjb25zdHJ1Y3RvcnMiLCJnZXRNZXRhdGhlb3JlbXMiLCJtZXRhdGhlb3JlbXMiLCJnZXRNZXRhdmFyaWFibGVzIiwibWV0YXZhcmlhYmxlcyIsImFkZFByb2NlZHVyZSIsInByb2NlZHVyZSIsInByb2NlZHVyZVN0cmluZyIsImdldFN0cmluZyIsInB1c2giLCJnZXRGaWxlUGF0aCIsImRlYnVnIiwiZmluZFByb2NlZHVyZUJ5UHJvY2VkdXJlTmFtZSIsInByb2NlZHVyZU5hbWUiLCJmaW5kIiwicHJvY2VkdXJlQ29tcGFyZXNUb1Byb2NlZHVyZU5hbWUiLCJjb21wYXJlUHJvY2VkdXJlTmFtZSIsImlzUHJvY2VkdXJlUHJlc2VudEJ5UHJvY2VkdXJlTmFtZSIsInByb2NlZHVyZVByZXNlbnQiLCJjbGVhciIsImNvbXBsZXRlIiwiaW5pdGlhbGlzZSIsImpzb24iLCJwcmVwYXJlIiwiZ2V0Tm9kZSIsImZpbGVOb2RlIiwidmVyaWZ5RmlsZSIsImZpbGVWZXJpZmllcyIsInRvSlNPTiIsImdldEZpbGVDb250ZW50IiwiZnJvbUZpbGUiLCJmaWxlIiwiZnVydGxlTGV4ZXIiLCJmdXJ0bGVQYXJzZXIiLCJmdXJ0bGVGaWxlQ29udGV4dCIsImZyb21KU09OIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFPQTs7O2VBQXFCQTs7O2dDQUxPO3dCQUVEO3dCQUNlO0FBRTNCLE1BQU1BLDBCQUEwQkMsMkJBQVc7SUFDeEQsWUFBWUMsT0FBTyxFQUFFQyxXQUFXLEVBQUVDLFFBQVEsRUFBRUMsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLEtBQUssRUFBRUMsTUFBTSxFQUFFQyxVQUFVLENBQUU7UUFDbkYsS0FBSyxDQUFDUCxTQUFTQyxhQUFhQyxVQUFVQyxRQUFRQztRQUU5QyxJQUFJLENBQUNDLEtBQUssR0FBR0E7UUFDYixJQUFJLENBQUNDLE1BQU0sR0FBR0E7UUFDZCxJQUFJLENBQUNDLFVBQVUsR0FBR0E7SUFDcEI7SUFFQUMsV0FBVztRQUNULE9BQU8sSUFBSSxDQUFDSCxLQUFLO0lBQ25CO0lBRUFJLFlBQVk7UUFDVixPQUFPLElBQUksQ0FBQ0gsTUFBTTtJQUNwQjtJQUVBSSxjQUFjQyxpQkFBaUIsSUFBSSxFQUFFO1FBQ25DLE1BQU1KLGFBQWFJLGlCQUNFLElBQUksQ0FBQ1gsT0FBTyxDQUFDVSxhQUFhLEtBQ3hCLElBQUksQ0FBQ0gsVUFBVTtRQUV0QyxPQUFPQTtJQUNUO0lBRUFLLFVBQVVELGlCQUFpQixJQUFJLEVBQUU7UUFDL0IsTUFBTUUsU0FBUyxFQUFFO1FBRWpCLE9BQU9BO0lBQ1Q7SUFFQUMsU0FBU0gsaUJBQWlCLElBQUksRUFBRTtRQUM5QixNQUFNSSxRQUFRLEVBQUU7UUFFaEIsT0FBT0E7SUFDVDtJQUVBQyxTQUFTTCxpQkFBaUIsSUFBSSxFQUFFO1FBQzlCLE1BQU1NLFFBQVEsRUFBRTtRQUVoQixPQUFPQTtJQUNUO0lBRUFDLFVBQVVQLGlCQUFpQixJQUFJLEVBQUU7UUFDL0IsTUFBTVEsU0FBUyxFQUFFO1FBRWpCLE9BQU9BO0lBQ1Q7SUFFQUMsVUFBVVQsaUJBQWlCLElBQUksRUFBRTtRQUMvQixNQUFNVSxTQUFTLEVBQUU7UUFFakIsT0FBT0E7SUFDVDtJQUVBQyxZQUFZWCxpQkFBaUIsSUFBSSxFQUFFO1FBQ2pDLE1BQU1ZLFdBQVcsRUFBRTtRQUVuQixPQUFPQTtJQUNUO0lBRUFDLGFBQWFiLGlCQUFpQixJQUFJLEVBQUU7UUFDbEMsTUFBTWMsWUFBWSxFQUFFO1FBRXBCLE9BQU9BO0lBQ1Q7SUFFQUMsY0FBY2YsaUJBQWlCLElBQUksRUFBRTtRQUNuQyxNQUFNZ0IsYUFBYSxFQUFFO1FBRXJCLE9BQU9BO0lBQ1Q7SUFFQUMsZUFBZWpCLGlCQUFpQixJQUFJLEVBQUU7UUFDcEMsTUFBTWtCLGNBQWMsRUFBRTtRQUV0QixPQUFPQTtJQUNUO0lBRUFDLGVBQWVuQixpQkFBaUIsSUFBSSxFQUFFO1FBQ3BDLE1BQU1vQixjQUFjLEVBQUU7UUFFdEIsT0FBT0E7SUFDVDtJQUVBQyxnQkFBZ0JyQixpQkFBaUIsSUFBSSxFQUFFO1FBQ3JDLE1BQU1zQixlQUFlLEVBQUU7UUFFdkIsT0FBT0E7SUFDVDtJQUVBQyxnQkFBZ0J2QixpQkFBaUIsSUFBSSxFQUFFO1FBQ3JDLE1BQU13QixlQUFlLEVBQUU7UUFFdkIsT0FBT0E7SUFDVDtJQUVBQyxnQkFBZ0J6QixpQkFBaUIsSUFBSSxFQUFFO1FBQ3JDLE1BQU0wQixlQUFlLEVBQUU7UUFFdkIsT0FBT0E7SUFDVDtJQUVBQyxpQkFBaUIzQixpQkFBaUIsSUFBSSxFQUFFO1FBQ3RDLE1BQU00QixnQkFBZ0IsRUFBRTtRQUV4QixPQUFPQTtJQUNUO0lBRUFDLGFBQWFDLFNBQVMsRUFBRTtRQUN0QixNQUFNQyxrQkFBa0JELFVBQVVFLFNBQVM7UUFFM0MsSUFBSSxDQUFDcEMsVUFBVSxDQUFDcUMsSUFBSSxDQUFDSDtRQUVyQixNQUFNdkMsV0FBVyxJQUFJLENBQUMyQyxXQUFXO1FBRWpDLElBQUksQ0FBQ0MsS0FBSyxDQUFDLENBQUMsV0FBVyxFQUFFSixnQkFBZ0Isb0JBQW9CLEVBQUV4QyxTQUFTLGVBQWUsQ0FBQztJQUMxRjtJQUVBNkMsNkJBQTZCQyxhQUFhLEVBQUU7UUFDMUMsTUFBTXpDLGFBQWEsSUFBSSxDQUFDRyxhQUFhLElBQy9CK0IsWUFBWWxDLFdBQVcwQyxJQUFJLENBQUMsQ0FBQ1I7WUFDM0IsTUFBTVMsbUNBQW1DVCxVQUFVVSxvQkFBb0IsQ0FBQ0g7WUFFeEUsSUFBSUUsa0NBQWtDO2dCQUNwQyxPQUFPO1lBQ1Q7UUFDRixNQUFNO1FBRVosT0FBT1Q7SUFDVDtJQUVBVyxrQ0FBa0NKLGFBQWEsRUFBRTtRQUMvQyxNQUFNUCxZQUFZLElBQUksQ0FBQ00sNEJBQTRCLENBQUNDLGdCQUM5Q0ssbUJBQW9CWixjQUFjO1FBRXhDLE9BQU9ZO0lBQ1Q7SUFFQUMsUUFBUTtRQUNOLElBQUksQ0FBQy9DLFVBQVUsR0FBRyxFQUFFO0lBQ3RCO0lBRUFnRCxXQUFXO0lBQ1QsR0FBRztJQUNMO0lBRUFDLFdBQVdDLElBQUksRUFBRTtRQUNmLElBQUksQ0FBQ0MsT0FBTztRQUVaLE1BQU10RCxPQUFPLElBQUksQ0FBQ3VELE9BQU8sSUFDbkIzRCxVQUFVLElBQUksRUFDZDRELFdBQVd4RCxNQUFPLEdBQUc7UUFFM0J5RCxJQUFBQSxrQkFBVSxFQUFDRCxVQUFVNUQ7SUFDdkI7SUFFQSxNQUFNNkQsYUFBYTtRQUNqQixNQUFNekQsT0FBTyxJQUFJLENBQUN1RCxPQUFPLElBQ25CM0QsVUFBVSxJQUFJLEVBQ2Q0RCxXQUFXeEQsTUFDWDBELGVBQWVELElBQUFBLGtCQUFVLEVBQUNELFVBQVU1RDtRQUUxQyxPQUFPOEQ7SUFDVDtJQUVBQyxTQUFTO1FBQ1AsTUFBTTdELFdBQVcsSUFBSSxDQUFDMkMsV0FBVyxJQUMzQjVDLGNBQWMsSUFBSSxDQUFDK0QsY0FBYyxJQUNqQ1AsT0FBTztZQUNMdkQ7WUFDQUQ7UUFDRjtRQUVOLE9BQU93RDtJQUNUO0lBRUEsT0FBT1EsU0FBU0MsSUFBSSxFQUFFbEUsT0FBTyxFQUFFO1FBQzdCLE1BQU1LLFFBQVE4RCxtQkFBVyxFQUNuQjdELFNBQVM4RCxvQkFBWSxFQUNyQjdELGFBQWEsRUFBRSxFQUNmOEQsb0JBQW9CdEUsMkJBQVcsQ0FBQ2tFLFFBQVEsQ0FBQ25FLG1CQUFtQm9FLE1BQU03RCxPQUFPQyxRQUFRQyxZQUFZUDtRQUVuRyxPQUFPcUU7SUFDVDtJQUVBLE9BQU9DLFNBQVNiLElBQUksRUFBRXpELE9BQU8sRUFBRTtRQUM3QixNQUFNSyxRQUFROEQsbUJBQVcsRUFDbkI3RCxTQUFTOEQsb0JBQVksRUFDckI3RCxhQUFhLE1BQ2I4RCxvQkFBb0J0RSwyQkFBVyxDQUFDdUUsUUFBUSxDQUFDeEUsbUJBQW1CMkQsTUFBTXBELE9BQU9DLFFBQVFDLFlBQVlQO1FBRW5HcUUsa0JBQWtCYixVQUFVLENBQUNDO1FBRTdCLE9BQU9ZO0lBQ1Q7QUFDRiJ9