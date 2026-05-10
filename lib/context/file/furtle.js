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
    constructor(context, fileContent, filePath, tokens, node, json, lexer, parser, procedures){
        super(context, fileContent, filePath, tokens, node, json);
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
    getProcedures(includeRelease = true) {
        const procedures = includeRelease ? this.context.getProcedures() : this.procedures;
        return procedures;
    }
    getVariables(nested = true) {
        const variables = [];
        return variables;
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
        super.initialise();
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb250ZXh0L2ZpbGUvZnVydGxlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBGaWxlQ29udGV4dCB9IGZyb20gXCJvY2NhbS1sYW5ndWFnZXNcIjtcblxuaW1wb3J0IHsgdmVyaWZ5RmlsZSB9IGZyb20gXCIuLi8uLi9wcm9jZXNzL3ZlcmlmeVwiO1xuaW1wb3J0IHsgZnVydGxlTGV4ZXIsIGZ1cnRsZVBhcnNlciB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvZnVydGxlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZ1cnRsZUZpbGVDb250ZXh0IGV4dGVuZHMgRmlsZUNvbnRleHQge1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBmaWxlQ29udGVudCwgZmlsZVBhdGgsIHRva2Vucywgbm9kZSwganNvbiwgbGV4ZXIsIHBhcnNlciwgcHJvY2VkdXJlcykge1xuICAgIHN1cGVyKGNvbnRleHQsIGZpbGVDb250ZW50LCBmaWxlUGF0aCwgdG9rZW5zLCBub2RlLCBqc29uKTtcblxuICAgIHRoaXMubGV4ZXIgPSBsZXhlcjtcbiAgICB0aGlzLnBhcnNlciA9IHBhcnNlcjtcbiAgICB0aGlzLnByb2NlZHVyZXMgPSBwcm9jZWR1cmVzO1xuICB9XG5cbiAgZ2V0TGV4ZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMubGV4ZXI7XG4gIH1cblxuICBnZXRQYXJzZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMucGFyc2VyO1xuICB9XG5cbiAgZ2V0TGFiZWxzKGluY2x1ZGVSZWxlYXNlID0gdHJ1ZSkge1xuICAgIGNvbnN0IGxhYmVscyA9IFtdO1xuXG4gICAgcmV0dXJuIGxhYmVscztcbiAgfVxuXG4gIGdldFR5cGVzKGluY2x1ZGVSZWxlYXNlID0gdHJ1ZSkge1xuICAgIGNvbnN0IHR5cGVzID0gW107XG5cbiAgICByZXR1cm4gdHlwZXM7XG4gIH1cblxuICBnZXRSdWxlcyhpbmNsdWRlUmVsZWFzZSA9IHRydWUpIHtcbiAgICBjb25zdCBydWxlcyA9IFtdXG5cbiAgICByZXR1cm4gcnVsZXM7XG4gIH1cblxuICBnZXRBeGlvbXMoaW5jbHVkZVJlbGVhc2UgPSB0cnVlKSB7XG4gICAgY29uc3QgYXhpb21zID0gW107XG5cbiAgICByZXR1cm4gYXhpb21zO1xuICB9XG5cbiAgZ2V0TGVtbWFzKGluY2x1ZGVSZWxlYXNlID0gdHJ1ZSkge1xuICAgIGNvbnN0IGxlbW1hcyA9IFtdO1xuXG4gICAgcmV0dXJuIGxlbW1hcztcbiAgfVxuXG4gIGdldFRoZW9yZW1zKGluY2x1ZGVSZWxlYXNlID0gdHJ1ZSkge1xuICAgIGNvbnN0IHRoZW9yZW1zID0gW107XG5cbiAgICByZXR1cm4gdGhlb3JlbXM7XG4gIH1cblxuICBnZXRNZXRhTGVtbWFzKGluY2x1ZGVSZWxlYXNlID0gdHJ1ZSkge1xuICAgIGNvbnN0IG1ldGFMZW1tYXMgPSBbXTtcblxuICAgIHJldHVybiBtZXRhTGVtbWFzO1xuICB9XG5cbiAgZ2V0Q29uamVjdHVyZXMoaW5jbHVkZVJlbGVhc2UgPSB0cnVlKSB7XG4gICAgY29uc3QgY29uamVjdHVyZXMgPSBbXTtcblxuICAgIHJldHVybiBjb25qZWN0dXJlcztcbiAgfVxuXG4gIGdldENvbWJpbmF0b3JzKGluY2x1ZGVSZWxlYXNlID0gdHJ1ZSkge1xuICAgIGNvbnN0IGNvbWJpbmF0b3JzID0gW107XG5cbiAgICByZXR1cm4gY29tYmluYXRvcnM7XG4gIH1cblxuICBnZXRUeXBlUHJlZml4ZXMoaW5jbHVkZVJlbGVhc2UgPSB0cnVlKSB7XG4gICAgY29uc3QgdHlwZVByZWZpeGVzID0gW107XG5cbiAgICByZXR1cm4gdHlwZVByZWZpeGVzO1xuICB9XG5cbiAgZ2V0Q29uc3RydWN0b3JzKGluY2x1ZGVSZWxlYXNlID0gdHJ1ZSkge1xuICAgIGNvbnN0IGNvbnN0cnVjdG9ycyA9IFtdO1xuXG4gICAgcmV0dXJuIGNvbnN0cnVjdG9ycztcbiAgfVxuXG4gIGdldE1ldGF0aGVvcmVtcyhpbmNsdWRlUmVsZWFzZSA9IHRydWUpIHtcbiAgICBjb25zdCBtZXRhdGhlb3JlbXMgPSBbXTtcblxuICAgIHJldHVybiBtZXRhdGhlb3JlbXM7XG4gIH1cblxuICBnZXRNZXRhdmFyaWFibGVzKGluY2x1ZGVSZWxlYXNlID0gdHJ1ZSkge1xuICAgIGNvbnN0IG1ldGF2YXJpYWJsZXMgPSBbXTtcblxuICAgIHJldHVybiBtZXRhdmFyaWFibGVzO1xuICB9XG5cbiAgZ2V0UHJvY2VkdXJlcyhpbmNsdWRlUmVsZWFzZSA9IHRydWUpIHtcbiAgICBjb25zdCBwcm9jZWR1cmVzID0gaW5jbHVkZVJlbGVhc2UgP1xuICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY29udGV4dC5nZXRQcm9jZWR1cmVzKCkgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9jZWR1cmVzO1xuXG4gICAgcmV0dXJuIHByb2NlZHVyZXM7XG4gIH1cblxuICBnZXRWYXJpYWJsZXMobmVzdGVkID0gdHJ1ZSkge1xuICAgIGNvbnN0IHZhcmlhYmxlcyA9IFtdO1xuXG4gICAgcmV0dXJuIHZhcmlhYmxlcztcbiAgfVxuXG4gIGFkZFByb2NlZHVyZShwcm9jZWR1cmUpIHtcbiAgICBjb25zdCBwcm9jZWR1cmVTdHJpbmcgPSBwcm9jZWR1cmUuZ2V0U3RyaW5nKCk7XG5cbiAgICB0aGlzLnByb2NlZHVyZXMucHVzaChwcm9jZWR1cmUpO1xuXG4gICAgY29uc3QgZmlsZVBhdGggPSB0aGlzLmdldEZpbGVQYXRoKCk7XG5cbiAgICB0aGlzLmRlYnVnKGBBZGRlZCB0aGUgJyR7cHJvY2VkdXJlU3RyaW5nfScgcHJvY2VkdXJlIHRvIHRoZSAnJHtmaWxlUGF0aH0nIGZpbGUgY29udGV4dC5gKTtcbiAgfVxuXG4gIGZpbmRQcm9jZWR1cmVCeVByb2NlZHVyZU5hbWUocHJvY2VkdXJlTmFtZSkge1xuICAgIGNvbnN0IHByb2NlZHVyZXMgPSB0aGlzLmdldFByb2NlZHVyZXMoKSxcbiAgICAgICAgICBwcm9jZWR1cmUgPSBwcm9jZWR1cmVzLmZpbmQoKHByb2NlZHVyZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcHJvY2VkdXJlQ29tcGFyZXNUb1Byb2NlZHVyZU5hbWUgPSBwcm9jZWR1cmUuY29tcGFyZVByb2NlZHVyZU5hbWUocHJvY2VkdXJlTmFtZSk7XG5cbiAgICAgICAgICAgIGlmIChwcm9jZWR1cmVDb21wYXJlc1RvUHJvY2VkdXJlTmFtZSkge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIHByb2NlZHVyZTtcbiAgfVxuXG4gIGlzUHJvY2VkdXJlUHJlc2VudEJ5UHJvY2VkdXJlTmFtZShwcm9jZWR1cmVOYW1lKSB7XG4gICAgY29uc3QgcHJvY2VkdXJlID0gdGhpcy5maW5kUHJvY2VkdXJlQnlQcm9jZWR1cmVOYW1lKHByb2NlZHVyZU5hbWUpLFxuICAgICAgICAgIHByb2NlZHVyZVByZXNlbnQgPSAocHJvY2VkdXJlICE9PSBudWxsKTtcblxuICAgIHJldHVybiBwcm9jZWR1cmVQcmVzZW50O1xuICB9XG5cbiAgY2xlYXIoKSB7XG4gICAgdGhpcy5wcm9jZWR1cmVzID0gW107XG4gIH1cblxuICBjb21wbGV0ZSgpIHtcbiAgICAvLy9cbiAgfVxuXG4gIGluaXRpYWxpc2UoanNvbikge1xuICAgIHN1cGVyLmluaXRpYWxpc2UoKTtcblxuICAgIHRoaXMucHJvY2VkdXJlcyA9IFtdO1xuXG4gICAgY29uc3Qgbm9kZSA9IHRoaXMuZ2V0Tm9kZSgpLFxuICAgICAgICAgIGNvbnRleHQgPSB0aGlzLCAvLy9cbiAgICAgICAgICBmaWxlTm9kZSA9IG5vZGU7ICAvLy9cblxuICAgIHZlcmlmeUZpbGUoZmlsZU5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgYXN5bmMgdmVyaWZ5RmlsZSgpIHtcbiAgICBjb25zdCBub2RlID0gdGhpcy5nZXROb2RlKCksXG4gICAgICAgICAgY29udGV4dCA9IHRoaXMsIC8vL1xuICAgICAgICAgIGZpbGVOb2RlID0gbm9kZSwgIC8vL1xuICAgICAgICAgIGZpbGVWZXJpZmllcyA9IHZlcmlmeUZpbGUoZmlsZU5vZGUsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIGZpbGVWZXJpZmllcztcbiAgfVxuXG4gIHRvSlNPTigpIHtcbiAgICBjb25zdCBmaWxlUGF0aCA9IHRoaXMuZ2V0RmlsZVBhdGgoKSxcbiAgICAgICAgICBmaWxlQ29udGVudCA9IHRoaXMuZ2V0RmlsZUNvbnRlbnQoKSxcbiAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAgZmlsZVBhdGgsXG4gICAgICAgICAgICBmaWxlQ29udGVudFxuICAgICAgICAgIH07XG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tRmlsZShmaWxlLCBjb250ZXh0KSB7XG4gICAgY29uc3QgbGV4ZXIgPSBmdXJ0bGVMZXhlciwgIC8vL1xuICAgICAgICAgIHBhcnNlciA9IGZ1cnRsZVBhcnNlciwgIC8vL1xuICAgICAgICAgIHByb2NlZHVyZXMgPSBbXSxcbiAgICAgICAgICBmdXJ0bGVGaWxlQ29udGV4dCA9IEZpbGVDb250ZXh0LmZyb21GaWxlKEZ1cnRsZUZpbGVDb250ZXh0LCBmaWxlLCBsZXhlciwgcGFyc2VyLCBwcm9jZWR1cmVzLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBmdXJ0bGVGaWxlQ29udGV4dDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gICAgY29uc3QgbGV4ZXIgPSBmdXJ0bGVMZXhlciwgIC8vL1xuICAgICAgICAgIHBhcnNlciA9IGZ1cnRsZVBhcnNlciwgIC8vL1xuICAgICAgICAgIHByb2NlZHVyZXMgPSBudWxsLFxuICAgICAgICAgIGZ1cnRsZUZpbGVDb250ZXh0ID0gRmlsZUNvbnRleHQuZnJvbUpTT04oRnVydGxlRmlsZUNvbnRleHQsIGpzb24sIGxleGVyLCBwYXJzZXIsIHByb2NlZHVyZXMsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIGZ1cnRsZUZpbGVDb250ZXh0O1xuICB9XG59XG4iXSwibmFtZXMiOlsiRnVydGxlRmlsZUNvbnRleHQiLCJGaWxlQ29udGV4dCIsImNvbnRleHQiLCJmaWxlQ29udGVudCIsImZpbGVQYXRoIiwidG9rZW5zIiwibm9kZSIsImpzb24iLCJsZXhlciIsInBhcnNlciIsInByb2NlZHVyZXMiLCJnZXRMZXhlciIsImdldFBhcnNlciIsImdldExhYmVscyIsImluY2x1ZGVSZWxlYXNlIiwibGFiZWxzIiwiZ2V0VHlwZXMiLCJ0eXBlcyIsImdldFJ1bGVzIiwicnVsZXMiLCJnZXRBeGlvbXMiLCJheGlvbXMiLCJnZXRMZW1tYXMiLCJsZW1tYXMiLCJnZXRUaGVvcmVtcyIsInRoZW9yZW1zIiwiZ2V0TWV0YUxlbW1hcyIsIm1ldGFMZW1tYXMiLCJnZXRDb25qZWN0dXJlcyIsImNvbmplY3R1cmVzIiwiZ2V0Q29tYmluYXRvcnMiLCJjb21iaW5hdG9ycyIsImdldFR5cGVQcmVmaXhlcyIsInR5cGVQcmVmaXhlcyIsImdldENvbnN0cnVjdG9ycyIsImNvbnN0cnVjdG9ycyIsImdldE1ldGF0aGVvcmVtcyIsIm1ldGF0aGVvcmVtcyIsImdldE1ldGF2YXJpYWJsZXMiLCJtZXRhdmFyaWFibGVzIiwiZ2V0UHJvY2VkdXJlcyIsImdldFZhcmlhYmxlcyIsIm5lc3RlZCIsInZhcmlhYmxlcyIsImFkZFByb2NlZHVyZSIsInByb2NlZHVyZSIsInByb2NlZHVyZVN0cmluZyIsImdldFN0cmluZyIsInB1c2giLCJnZXRGaWxlUGF0aCIsImRlYnVnIiwiZmluZFByb2NlZHVyZUJ5UHJvY2VkdXJlTmFtZSIsInByb2NlZHVyZU5hbWUiLCJmaW5kIiwicHJvY2VkdXJlQ29tcGFyZXNUb1Byb2NlZHVyZU5hbWUiLCJjb21wYXJlUHJvY2VkdXJlTmFtZSIsImlzUHJvY2VkdXJlUHJlc2VudEJ5UHJvY2VkdXJlTmFtZSIsInByb2NlZHVyZVByZXNlbnQiLCJjbGVhciIsImNvbXBsZXRlIiwiaW5pdGlhbGlzZSIsImdldE5vZGUiLCJmaWxlTm9kZSIsInZlcmlmeUZpbGUiLCJmaWxlVmVyaWZpZXMiLCJ0b0pTT04iLCJnZXRGaWxlQ29udGVudCIsImZyb21GaWxlIiwiZmlsZSIsImZ1cnRsZUxleGVyIiwiZnVydGxlUGFyc2VyIiwiZnVydGxlRmlsZUNvbnRleHQiLCJmcm9tSlNPTiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBT0E7OztlQUFxQkE7OztnQ0FMTzt3QkFFRDt3QkFDZTtBQUUzQixNQUFNQSwwQkFBMEJDLDJCQUFXO0lBQ3hELFlBQVlDLE9BQU8sRUFBRUMsV0FBVyxFQUFFQyxRQUFRLEVBQUVDLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxJQUFJLEVBQUVDLEtBQUssRUFBRUMsTUFBTSxFQUFFQyxVQUFVLENBQUU7UUFDekYsS0FBSyxDQUFDUixTQUFTQyxhQUFhQyxVQUFVQyxRQUFRQyxNQUFNQztRQUVwRCxJQUFJLENBQUNDLEtBQUssR0FBR0E7UUFDYixJQUFJLENBQUNDLE1BQU0sR0FBR0E7UUFDZCxJQUFJLENBQUNDLFVBQVUsR0FBR0E7SUFDcEI7SUFFQUMsV0FBVztRQUNULE9BQU8sSUFBSSxDQUFDSCxLQUFLO0lBQ25CO0lBRUFJLFlBQVk7UUFDVixPQUFPLElBQUksQ0FBQ0gsTUFBTTtJQUNwQjtJQUVBSSxVQUFVQyxpQkFBaUIsSUFBSSxFQUFFO1FBQy9CLE1BQU1DLFNBQVMsRUFBRTtRQUVqQixPQUFPQTtJQUNUO0lBRUFDLFNBQVNGLGlCQUFpQixJQUFJLEVBQUU7UUFDOUIsTUFBTUcsUUFBUSxFQUFFO1FBRWhCLE9BQU9BO0lBQ1Q7SUFFQUMsU0FBU0osaUJBQWlCLElBQUksRUFBRTtRQUM5QixNQUFNSyxRQUFRLEVBQUU7UUFFaEIsT0FBT0E7SUFDVDtJQUVBQyxVQUFVTixpQkFBaUIsSUFBSSxFQUFFO1FBQy9CLE1BQU1PLFNBQVMsRUFBRTtRQUVqQixPQUFPQTtJQUNUO0lBRUFDLFVBQVVSLGlCQUFpQixJQUFJLEVBQUU7UUFDL0IsTUFBTVMsU0FBUyxFQUFFO1FBRWpCLE9BQU9BO0lBQ1Q7SUFFQUMsWUFBWVYsaUJBQWlC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