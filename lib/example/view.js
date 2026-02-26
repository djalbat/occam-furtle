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
const _easywithstyle = /*#__PURE__*/ _interop_require_default(require("easy-with-style"));
const _easy = require("easy");
const _easylayout = require("easy-layout");
const _index = require("../index");
const _subHeading = /*#__PURE__*/ _interop_require_default(require("./view/subHeading"));
const _sizeable = /*#__PURE__*/ _interop_require_default(require("./view/div/sizeable"));
const _bnf = /*#__PURE__*/ _interop_require_default(require("./view/textarea/bnf"));
const _ruleName = /*#__PURE__*/ _interop_require_default(require("./view/input/ruleName"));
const _tokens = /*#__PURE__*/ _interop_require_default(require("./view/textarea/tokens"));
const _content = /*#__PURE__*/ _interop_require_default(require("./view/textarea/content"));
const _parseTree = /*#__PURE__*/ _interop_require_default(require("./view/textarea/parseTree"));
const _lexicalEntries = /*#__PURE__*/ _interop_require_default(require("./view/textarea/lexicalEntries"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const { furtleParserFromBNF } = _index.parsersUtilities, { furtleLexerFromEntries } = _index.lexersUtilities;
const { bnf } = _index.FurtleParser, { entries } = _index.FurtleLexer;
class View extends _easy.Element {
    keyUpHandler = (event, element)=>{
        // try {
        const tokens = this.getTokens(), parseTree = this.getParseTree(tokens);
        this.setTokens(tokens);
        this.setParseTree(parseTree);
    // } catch (error) {
    //   console.log(error);
    //
    //   this.clearTokens();
    //
    //   this.clearParseTree();
    // }
    };
    getTokens() {
        const lexicalEntries = this.getLexicalEntries(), entries = lexicalEntries, furtleLexer = furtleLexerFromEntries(entries), lexer = furtleLexer, content = this.getContent(), tokens = lexer.tokenise(content);
        return tokens;
    }
    getParseTree(tokens) {
        let parseTree = null;
        const bnf = this.getBNF(), furtleParser = furtleParserFromBNF(bnf), parser = furtleParser, ruleName = this.getRuleName(), ruleMap = parser.getRuleMap(), rule = ruleMap[ruleName], node = parser.parse(tokens, rule);
        if (node !== null) {
            parseTree = node.asParseTree(tokens);
        }
        return parseTree;
    }
    childElements() {
        return /*#__PURE__*/ React.createElement(_easylayout.ColumnsDiv, null, /*#__PURE__*/ React.createElement(_sizeable.default, null, /*#__PURE__*/ React.createElement(_easylayout.RowsDiv, null, /*#__PURE__*/ React.createElement(_subHeading.default, null, "Lexical entries"), /*#__PURE__*/ React.createElement(_lexicalEntries.default, {
            onKeyUp: this.keyUpHandler
        }), /*#__PURE__*/ React.createElement(_subHeading.default, null, "BNF"), /*#__PURE__*/ React.createElement(_bnf.default, {
            onKeyUp: this.keyUpHandler
        }), /*#__PURE__*/ React.createElement(_subHeading.default, null, "Rule name"), /*#__PURE__*/ React.createElement(_ruleName.default, {
            onKeyUp: this.keyUpHandler
        }))), /*#__PURE__*/ React.createElement(_easylayout.VerticalSplitterDiv, null), /*#__PURE__*/ React.createElement(_easylayout.ColumnDiv, null, /*#__PURE__*/ React.createElement(_easylayout.RowsDiv, null, /*#__PURE__*/ React.createElement(_subHeading.default, null, "Content"), /*#__PURE__*/ React.createElement(_content.default, {
            onKeyUp: this.keyUpHandler
        }), /*#__PURE__*/ React.createElement(_subHeading.default, null, "Tokens"), /*#__PURE__*/ React.createElement(_tokens.default, null), /*#__PURE__*/ React.createElement(_subHeading.default, null, "Parse tree"), /*#__PURE__*/ React.createElement(_parseTree.default, null))));
    }
    initialise() {
        this.assignContext();
        const { initialContent, initialRuleName } = this.constructor, content = initialContent, ruleName = initialRuleName, lexicalEntries = entries; ///
        this.setBNF(bnf);
        this.setContent(content);
        this.setRuleName(ruleName);
        this.setLexicalEntries(lexicalEntries);
        this.keyUpHandler();
    }
    static initialRuleName = "variableAssignment";
    static initialContent = `Boolean variableBound = isVariableBound(termNode, statementNode);`;
    static tagName = "div";
    static defaultProperties = {
        className: "view"
    };
}
const _default = (0, _easywithstyle.default)(View)`

  padding: 1rem;
 
`;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9leGFtcGxlL3ZpZXcuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwiZWFzeVwiO1xuaW1wb3J0IHsgUm93c0RpdiwgQ29sdW1uRGl2LCBDb2x1bW5zRGl2LCBWZXJ0aWNhbFNwbGl0dGVyRGl2IH0gZnJvbSBcImVhc3ktbGF5b3V0XCI7XG5pbXBvcnQgeyBGdXJ0bGVMZXhlcixGdXJ0bGVQYXJzZXIsIGxleGVyc1V0aWxpdGllcywgcGFyc2Vyc1V0aWxpdGllcyB9IGZyb20gXCIuLi9pbmRleFwiOyAvLy9cblxuaW1wb3J0IFN1YkhlYWRpbmcgZnJvbSBcIi4vdmlldy9zdWJIZWFkaW5nXCI7XG5pbXBvcnQgU2l6ZWFibGVEaXYgZnJvbSBcIi4vdmlldy9kaXYvc2l6ZWFibGVcIjtcbmltcG9ydCBCTkZUZXh0YXJlYSBmcm9tIFwiLi92aWV3L3RleHRhcmVhL2JuZlwiO1xuaW1wb3J0IFJ1bGVOYW1lSW5wdXQgZnJvbSBcIi4vdmlldy9pbnB1dC9ydWxlTmFtZVwiO1xuaW1wb3J0IFRva2Vuc1RleHRhcmVhIGZyb20gXCIuL3ZpZXcvdGV4dGFyZWEvdG9rZW5zXCI7XG5pbXBvcnQgQ29udGVudFRleHRhcmVhIGZyb20gXCIuL3ZpZXcvdGV4dGFyZWEvY29udGVudFwiO1xuaW1wb3J0IFBhcnNlVHJlZVRleHRhcmVhIGZyb20gXCIuL3ZpZXcvdGV4dGFyZWEvcGFyc2VUcmVlXCI7XG5pbXBvcnQgTGV4aWNhbEVudHJpZXNUZXh0YXJlYSBmcm9tIFwiLi92aWV3L3RleHRhcmVhL2xleGljYWxFbnRyaWVzXCI7XG5cbmNvbnN0IHsgZnVydGxlUGFyc2VyRnJvbUJORiB9ID0gcGFyc2Vyc1V0aWxpdGllcyxcbiAgICAgIHsgZnVydGxlTGV4ZXJGcm9tRW50cmllcyB9ID0gbGV4ZXJzVXRpbGl0aWVzO1xuXG5jb25zdCB7IGJuZiB9ID0gRnVydGxlUGFyc2VyLFxuICAgICAgeyBlbnRyaWVzIH0gPSBGdXJ0bGVMZXhlcjtcblxuY2xhc3MgVmlldyBleHRlbmRzIEVsZW1lbnQge1xuICBrZXlVcEhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQpID0+IHtcbiAgICAvLyB0cnkge1xuICAgICAgY29uc3QgdG9rZW5zID0gdGhpcy5nZXRUb2tlbnMoKSxcbiAgICAgICAgICAgIHBhcnNlVHJlZSA9IHRoaXMuZ2V0UGFyc2VUcmVlKHRva2Vucyk7XG5cbiAgICAgIHRoaXMuc2V0VG9rZW5zKHRva2Vucyk7XG5cbiAgICAgIHRoaXMuc2V0UGFyc2VUcmVlKHBhcnNlVHJlZSk7XG4gICAgLy8gfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAvLyAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAvL1xuICAgIC8vICAgdGhpcy5jbGVhclRva2VucygpO1xuICAgIC8vXG4gICAgLy8gICB0aGlzLmNsZWFyUGFyc2VUcmVlKCk7XG4gICAgLy8gfVxuICB9XG5cbiAgZ2V0VG9rZW5zKCkge1xuICAgIGNvbnN0IGxleGljYWxFbnRyaWVzID0gdGhpcy5nZXRMZXhpY2FsRW50cmllcygpLFxuICAgICAgICAgIGVudHJpZXMgPSBsZXhpY2FsRW50cmllcywgLy8vXG4gICAgICAgICAgZnVydGxlTGV4ZXIgPSBmdXJ0bGVMZXhlckZyb21FbnRyaWVzKGVudHJpZXMpLFxuICAgICAgICAgIGxleGVyID0gZnVydGxlTGV4ZXIsICAvLy9cbiAgICAgICAgICBjb250ZW50ID0gdGhpcy5nZXRDb250ZW50KCksXG4gICAgICAgICAgdG9rZW5zID0gbGV4ZXIudG9rZW5pc2UoY29udGVudCk7XG5cbiAgICByZXR1cm4gdG9rZW5zO1xuICB9XG5cbiAgZ2V0UGFyc2VUcmVlKHRva2Vucykge1xuICAgIGxldCBwYXJzZVRyZWUgPSBudWxsO1xuXG4gICAgY29uc3QgYm5mID0gdGhpcy5nZXRCTkYoKSxcbiAgICAgICAgICBmdXJ0bGVQYXJzZXIgPSBmdXJ0bGVQYXJzZXJGcm9tQk5GKGJuZiksXG4gICAgICAgICAgcGFyc2VyID0gZnVydGxlUGFyc2VyLCAgLy8vXG4gICAgICAgICAgcnVsZU5hbWUgPSB0aGlzLmdldFJ1bGVOYW1lKCksXG4gICAgICAgICAgcnVsZU1hcCA9IHBhcnNlci5nZXRSdWxlTWFwKCksXG4gICAgICAgICAgcnVsZSA9IHJ1bGVNYXBbcnVsZU5hbWVdLFxuICAgICAgICAgIG5vZGUgPSBwYXJzZXIucGFyc2UodG9rZW5zLCBydWxlKTtcblxuICAgIGlmIChub2RlICE9PSBudWxsKSB7XG4gICAgICBwYXJzZVRyZWUgPSBub2RlLmFzUGFyc2VUcmVlKHRva2Vucyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHBhcnNlVHJlZTtcbiAgfVxuXG4gIGNoaWxkRWxlbWVudHMoKSB7XG4gICAgcmV0dXJuIChcblxuICAgICAgPENvbHVtbnNEaXY+XG4gICAgICAgIDxTaXplYWJsZURpdj5cbiAgICAgICAgICA8Um93c0Rpdj5cbiAgICAgICAgICAgIDxTdWJIZWFkaW5nPlxuICAgICAgICAgICAgICBMZXhpY2FsIGVudHJpZXNcbiAgICAgICAgICAgIDwvU3ViSGVhZGluZz5cbiAgICAgICAgICAgIDxMZXhpY2FsRW50cmllc1RleHRhcmVhIG9uS2V5VXA9e3RoaXMua2V5VXBIYW5kbGVyfSAvPlxuICAgICAgICAgICAgPFN1YkhlYWRpbmc+XG4gICAgICAgICAgICAgIEJORlxuICAgICAgICAgICAgPC9TdWJIZWFkaW5nPlxuICAgICAgICAgICAgPEJORlRleHRhcmVhIG9uS2V5VXA9e3RoaXMua2V5VXBIYW5kbGVyfSAvPlxuICAgICAgICAgICAgPFN1YkhlYWRpbmc+XG4gICAgICAgICAgICAgIFJ1bGUgbmFtZVxuICAgICAgICAgICAgPC9TdWJIZWFkaW5nPlxuICAgICAgICAgICAgPFJ1bGVOYW1lSW5wdXQgb25LZXlVcD17dGhpcy5rZXlVcEhhbmRsZXJ9IC8+XG4gICAgICAgICAgPC9Sb3dzRGl2PlxuICAgICAgICA8L1NpemVhYmxlRGl2PlxuICAgICAgICA8VmVydGljYWxTcGxpdHRlckRpdiAvPlxuICAgICAgICA8Q29sdW1uRGl2PlxuICAgICAgICAgIDxSb3dzRGl2PlxuICAgICAgICAgICAgPFN1YkhlYWRpbmc+XG4gICAgICAgICAgICAgIENvbnRlbnRcbiAgICAgICAgICAgIDwvU3ViSGVhZGluZz5cbiAgICAgICAgICAgIDxDb250ZW50VGV4dGFyZWEgb25LZXlVcD17dGhpcy5rZXlVcEhhbmRsZXJ9IC8+XG4gICAgICAgICAgICA8U3ViSGVhZGluZz5cbiAgICAgICAgICAgICAgVG9rZW5zXG4gICAgICAgICAgICA8L1N1YkhlYWRpbmc+XG4gICAgICAgICAgICA8VG9rZW5zVGV4dGFyZWEgLz5cbiAgICAgICAgICAgIDxTdWJIZWFkaW5nPlxuICAgICAgICAgICAgICBQYXJzZSB0cmVlXG4gICAgICAgICAgICA8L1N1YkhlYWRpbmc+XG4gICAgICAgICAgICA8UGFyc2VUcmVlVGV4dGFyZWEgLz5cbiAgICAgICAgICA8L1Jvd3NEaXY+XG4gICAgICAgIDwvQ29sdW1uRGl2PlxuICAgICAgPC9Db2x1bW5zRGl2PlxuXG4gICAgKTtcbiAgfVxuXG4gIGluaXRpYWxpc2UoKSB7XG4gICAgdGhpcy5hc3NpZ25Db250ZXh0KCk7XG5cbiAgICBjb25zdCB7IGluaXRpYWxDb250ZW50LCBpbml0aWFsUnVsZU5hbWUgfSA9IHRoaXMuY29uc3RydWN0b3IsXG4gICAgICAgICAgY29udGVudCA9IGluaXRpYWxDb250ZW50LCAvLy9cbiAgICAgICAgICBydWxlTmFtZSA9IGluaXRpYWxSdWxlTmFtZSwgLy8vXG4gICAgICAgICAgbGV4aWNhbEVudHJpZXMgPSBlbnRyaWVzOyAvLy9cblxuICAgIHRoaXMuc2V0Qk5GKGJuZik7XG5cbiAgICB0aGlzLnNldENvbnRlbnQoY29udGVudCk7XG5cbiAgICB0aGlzLnNldFJ1bGVOYW1lKHJ1bGVOYW1lKTtcblxuICAgIHRoaXMuc2V0TGV4aWNhbEVudHJpZXMobGV4aWNhbEVudHJpZXMpO1xuXG4gICAgdGhpcy5rZXlVcEhhbmRsZXIoKTtcbiAgfVxuXG4gIHN0YXRpYyBpbml0aWFsUnVsZU5hbWUgPSBcInZhcmlhYmxlQXNzaWdubWVudFwiO1xuXG4gIHN0YXRpYyBpbml0aWFsQ29udGVudCA9IGBCb29sZWFuIHZhcmlhYmxlQm91bmQgPSBpc1ZhcmlhYmxlQm91bmQodGVybU5vZGUsIHN0YXRlbWVudE5vZGUpO2A7XG5cbiAgc3RhdGljIHRhZ05hbWUgPSBcImRpdlwiO1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwidmlld1wiXG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZShWaWV3KWBcblxuICBwYWRkaW5nOiAxcmVtO1xuIFxuYDtcbiJdLCJuYW1lcyI6WyJmdXJ0bGVQYXJzZXJGcm9tQk5GIiwicGFyc2Vyc1V0aWxpdGllcyIsImZ1cnRsZUxleGVyRnJvbUVudHJpZXMiLCJsZXhlcnNVdGlsaXRpZXMiLCJibmYiLCJGdXJ0bGVQYXJzZXIiLCJlbnRyaWVzIiwiRnVydGxlTGV4ZXIiLCJWaWV3IiwiRWxlbWVudCIsImtleVVwSGFuZGxlciIsImV2ZW50IiwiZWxlbWVudCIsInRva2VucyIsImdldFRva2VucyIsInBhcnNlVHJlZSIsImdldFBhcnNlVHJlZSIsInNldFRva2VucyIsInNldFBhcnNlVHJlZSIsImxleGljYWxFbnRyaWVzIiwiZ2V0TGV4aWNhbEVudHJpZXMiLCJmdXJ0bGVMZXhlciIsImxleGVyIiwiY29udGVudCIsImdldENvbnRlbnQiLCJ0b2tlbmlzZSIsImdldEJORiIsImZ1cnRsZVBhcnNlciIsInBhcnNlciIsInJ1bGVOYW1lIiwiZ2V0UnVsZU5hbWUiLCJydWxlTWFwIiwiZ2V0UnVsZU1hcCIsInJ1bGUiLCJub2RlIiwicGFyc2UiLCJhc1BhcnNlVHJlZSIsImNoaWxkRWxlbWVudHMiLCJDb2x1bW5zRGl2IiwiU2l6ZWFibGVEaXYiLCJSb3dzRGl2IiwiU3ViSGVhZGluZyIsIkxleGljYWxFbnRyaWVzVGV4dGFyZWEiLCJvbktleVVwIiwiQk5GVGV4dGFyZWEiLCJSdWxlTmFtZUlucHV0IiwiVmVydGljYWxTcGxpdHRlckRpdiIsIkNvbHVtbkRpdiIsIkNvbnRlbnRUZXh0YXJlYSIsIlRva2Vuc1RleHRhcmVhIiwiUGFyc2VUcmVlVGV4dGFyZWEiLCJpbml0aWFsaXNlIiwiYXNzaWduQ29udGV4dCIsImluaXRpYWxDb250ZW50IiwiaW5pdGlhbFJ1bGVOYW1lIiwic2V0Qk5GIiwic2V0Q29udGVudCIsInNldFJ1bGVOYW1lIiwic2V0TGV4aWNhbEVudHJpZXMiLCJ0YWdOYW1lIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJjbGFzc05hbWUiLCJ3aXRoU3R5bGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQThJQTs7O2VBQUE7OztzRUE1SXNCO3NCQUVFOzRCQUM0Qzt1QkFDUTttRUFFckQ7aUVBQ0M7NERBQ0E7aUVBQ0U7K0RBQ0M7Z0VBQ0M7a0VBQ0U7dUVBQ0s7Ozs7OztBQUVuQyxNQUFNLEVBQUVBLG1CQUFtQixFQUFFLEdBQUdDLHVCQUFnQixFQUMxQyxFQUFFQyxzQkFBc0IsRUFBRSxHQUFHQyxzQkFBZTtBQUVsRCxNQUFNLEVBQUVDLEdBQUcsRUFBRSxHQUFHQyxtQkFBWSxFQUN0QixFQUFFQyxPQUFPLEVBQUUsR0FBR0Msa0JBQVc7QUFFL0IsTUFBTUMsYUFBYUMsYUFBTztJQUN4QkMsZUFBZSxDQUFDQyxPQUFPQztRQUNyQixRQUFRO1FBQ04sTUFBTUMsU0FBUyxJQUFJLENBQUNDLFNBQVMsSUFDdkJDLFlBQVksSUFBSSxDQUFDQyxZQUFZLENBQUNIO1FBRXBDLElBQUksQ0FBQ0ksU0FBUyxDQUFDSjtRQUVmLElBQUksQ0FBQ0ssWUFBWSxDQUFDSDtJQUNwQixvQkFBb0I7SUFDcEIsd0JBQXdCO0lBQ3hCLEVBQUU7SUFDRix3QkFBd0I7SUFDeEIsRUFBRTtJQUNGLDJCQUEyQjtJQUMzQixJQUFJO0lBQ04sRUFBQztJQUVERCxZQUFZO1FBQ1YsTUFBTUssaUJBQWlCLElBQUksQ0FBQ0MsaUJBQWlCLElBQ3ZDZCxVQUFVYSxnQkFDVkUsY0FBY25CLHVCQUF1QkksVUFDckNnQixRQUFRRCxhQUNSRSxVQUFVLElBQUksQ0FBQ0MsVUFBVSxJQUN6QlgsU0FBU1MsTUFBTUcsUUFBUSxDQUFDRjtRQUU5QixPQUFPVjtJQUNUO0lBRUFHLGFBQWFILE1BQU0sRUFBRTtRQUNuQixJQUFJRSxZQUFZO1FBRWhCLE1BQU1YLE1BQU0sSUFBSSxDQUFDc0IsTUFBTSxJQUNqQkMsZUFBZTNCLG9CQUFvQkksTUFDbkN3QixTQUFTRCxjQUNURSxXQUFXLElBQUksQ0FBQ0MsV0FBVyxJQUMzQkMsVUFBVUgsT0FBT0ksVUFBVSxJQUMzQkMsT0FBT0YsT0FBTyxDQUFDRixTQUFTLEVBQ3hCSyxPQUFPTixPQUFPTyxLQUFLLENBQUN0QixRQUFRb0I7UUFFbEMsSUFBSUMsU0FBUyxNQUFNO1lBQ2pCbkIsWUFBWW1CLEtBQUtFLFdBQVcsQ0FBQ3ZCO1FBQy9CO1FBRUEsT0FBT0U7SUFDVDtJQUVBc0IsZ0JBQWdCO1FBQ2QscUJBRUUsb0JBQUNDLHNCQUFVLHNCQUNULG9CQUFDQyxpQkFBVyxzQkFDVixvQkFBQ0MsbUJBQU8sc0JBQ04sb0JBQUNDLG1CQUFVLFFBQUMsa0NBR1osb0JBQUNDLHVCQUFzQjtZQUFDQyxTQUFTLElBQUksQ0FBQ2pDLFlBQVk7MEJBQ2xELG9CQUFDK0IsbUJBQVUsUUFBQyxzQkFHWixvQkFBQ0csWUFBVztZQUFDRCxTQUFTLElBQUksQ0FBQ2pDLFlBQVk7MEJBQ3ZDLG9CQUFDK0IsbUJBQVUsUUFBQyw0QkFHWixvQkFBQ0ksaUJBQWE7WUFBQ0YsU0FBUyxJQUFJLENBQUNqQyxZQUFZOzRCQUc3QyxvQkFBQ29DLCtCQUFtQix1QkFDcEIsb0JBQUNDLHFCQUFTLHNCQUNSLG9CQUFDUCxtQkFBTyxzQkFDTixvQkFBQ0MsbUJBQVUsUUFBQywwQkFHWixvQkFBQ08sZ0JBQWU7WUFBQ0wsU0FBUyxJQUFJLENBQUNqQyxZQUFZOzBCQUMzQyxvQkFBQytCLG1CQUFVLFFBQUMseUJBR1osb0JBQUNRLGVBQWMsdUJBQ2Ysb0JBQUNSLG1CQUFVLFFBQUMsNkJBR1osb0JBQUNTLGtCQUFpQjtJQU01QjtJQUVBQyxhQUFhO1FBQ1gsSUFBSSxDQUFDQyxhQUFhO1FBRWxCLE1BQU0sRUFBRUMsY0FBYyxFQUFFQyxlQUFlLEVBQUUsR0FBRyxJQUFJLENBQUMsV0FBVyxFQUN0RC9CLFVBQVU4QixnQkFDVnhCLFdBQVd5QixpQkFDWG5DLGlCQUFpQmIsU0FBUyxHQUFHO1FBRW5DLElBQUksQ0FBQ2lELE1BQU0sQ0FBQ25EO1FBRVosSUFBSSxDQUFDb0QsVUFBVSxDQUFDakM7UUFFaEIsSUFBSSxDQUFDa0MsV0FBVyxDQUFDNUI7UUFFakIsSUFBSSxDQUFDNkIsaUJBQWlCLENBQUN2QztRQUV2QixJQUFJLENBQUNULFlBQVk7SUFDbkI7SUFFQSxPQUFPNEMsa0JBQWtCLHFCQUFxQjtJQUU5QyxPQUFPRCxpQkFBaUIsQ0FBQyxpRUFBaUUsQ0FBQyxDQUFDO0lBRTVGLE9BQU9NLFVBQVUsTUFBTTtJQUV2QixPQUFPQyxvQkFBb0I7UUFDekJDLFdBQVc7SUFDYixFQUFFO0FBQ0o7TUFFQSxXQUFlQyxJQUFBQSxzQkFBUyxFQUFDdEQsS0FBSyxDQUFDOzs7O0FBSS9CLENBQUMifQ==