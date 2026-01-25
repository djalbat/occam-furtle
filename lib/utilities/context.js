"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: Object.getOwnPropertyDescriptor(all, name).get
    });
}
_export(exports, {
    get chainContext () {
        return chainContext;
    },
    get default () {
        return _default;
    },
    get lineIndexFromNodeAndTokens () {
        return lineIndexFromNodeAndTokens;
    }
});
var _constants = require("../constants");
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
function chainContext(context) {
    return new Proxy(context, {
        get: function(instance, name, receiver) {
            var levelsIncludeName = _constants.LEVELS.includes(name);
            if (levelsIncludeName) {
                return function(message) {
                    var node = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
                    var level = name, depth = instance.getDepth(), indent = _constants.DOUBLE_SPACE.repeat(depth);
                    message = "".concat(indent).concat(message);
                    var fileContext = instance.getFileContext();
                    fileContext.writeToLog(level, message, node);
                };
            }
            if (name in instance) {
                return Reflect.get(instance, name, receiver);
            }
            var _$context = instance.getContext(), value = _$context[name];
            return (typeof value === "undefined" ? "undefined" : _type_of(value)) === _constants.FUNCTION ? value.bind(_$context) : value;
        }
    });
}
function lineIndexFromNodeAndTokens(node, tokens, lineIndex) {
    if (node !== null) {
        lineIndex = 0;
        var firstSignificantTokenIndex = node.getFirstSignificantTokenIndex(tokens);
        tokens.some(function(token, tokenIndex) {
            var tokenEndOfLineToken = token.isEndOfLineToken();
            if (tokenEndOfLineToken) {
                lineIndex += 1;
            }
            if (tokenIndex === firstSignificantTokenIndex) {
                return true;
            }
        });
    }
    return lineIndex;
}
var _default = {
    chainContext: chainContext,
    lineIndexFromNodeAndTokens: lineIndexFromNodeAndTokens
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvY29udGV4dC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgTEVWRUxTLCBGVU5DVElPTiwgRE9VQkxFX1NQQUNFIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gY2hhaW5Db250ZXh0KGNvbnRleHQpIHtcbiAgcmV0dXJuIG5ldyBQcm94eShjb250ZXh0LCB7XG4gICAgZ2V0OiAoaW5zdGFuY2UsIG5hbWUsIHJlY2VpdmVyKSA9PiB7XG4gICAgICBjb25zdCBsZXZlbHNJbmNsdWRlTmFtZSA9IExFVkVMUy5pbmNsdWRlcyhuYW1lKTtcblxuICAgICAgaWYgKGxldmVsc0luY2x1ZGVOYW1lKSB7XG4gICAgICAgIHJldHVybiAobWVzc2FnZSwgbm9kZSA9IG51bGwpID0+IHtcbiAgICAgICAgICBjb25zdCBsZXZlbCA9IG5hbWUsIC8vL1xuICAgICAgICAgICAgICAgIGRlcHRoID0gaW5zdGFuY2UuZ2V0RGVwdGgoKSxcbiAgICAgICAgICAgICAgICBpbmRlbnQgPSBET1VCTEVfU1BBQ0UucmVwZWF0KGRlcHRoKTtcblxuICAgICAgICAgIG1lc3NhZ2UgPSBgJHtpbmRlbnR9JHttZXNzYWdlfWA7XG5cbiAgICAgICAgICBjb25zdCBmaWxlQ29udGV4dCA9IGluc3RhbmNlLmdldEZpbGVDb250ZXh0KCk7XG5cbiAgICAgICAgICBmaWxlQ29udGV4dC53cml0ZVRvTG9nKGxldmVsLCBtZXNzYWdlLCBub2RlKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobmFtZSBpbiBpbnN0YW5jZSkge1xuICAgICAgICByZXR1cm4gUmVmbGVjdC5nZXQoaW5zdGFuY2UsIG5hbWUsIHJlY2VpdmVyKTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgY29udGV4dCA9IGluc3RhbmNlLmdldENvbnRleHQoKSxcbiAgICAgICAgICAgIHZhbHVlID0gY29udGV4dFtuYW1lXTtcblxuICAgICAgcmV0dXJuICh0eXBlb2YgdmFsdWUgPT09IEZVTkNUSU9OKSA/XG4gICAgICAgICAgICAgICB2YWx1ZS5iaW5kKGNvbnRleHQpIDpcbiAgICAgICAgICAgICAgICAgdmFsdWU7XG4gICAgfVxuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxpbmVJbmRleEZyb21Ob2RlQW5kVG9rZW5zKG5vZGUsIHRva2VucywgbGluZUluZGV4KSB7XG4gIGlmIChub2RlICE9PSBudWxsKSB7XG4gICAgbGluZUluZGV4ID0gMDtcblxuICAgIGNvbnN0IGZpcnN0U2lnbmlmaWNhbnRUb2tlbkluZGV4ID0gbm9kZS5nZXRGaXJzdFNpZ25pZmljYW50VG9rZW5JbmRleCh0b2tlbnMpO1xuXG4gICAgdG9rZW5zLnNvbWUoKHRva2VuLCB0b2tlbkluZGV4KSA9PiB7XG4gICAgICBjb25zdCB0b2tlbkVuZE9mTGluZVRva2VuID0gdG9rZW4uaXNFbmRPZkxpbmVUb2tlbigpO1xuXG4gICAgICBpZiAodG9rZW5FbmRPZkxpbmVUb2tlbikge1xuICAgICAgICBsaW5lSW5kZXggKz0gMTtcbiAgICAgIH1cblxuICAgICAgaWYgKHRva2VuSW5kZXggPT09IGZpcnN0U2lnbmlmaWNhbnRUb2tlbkluZGV4KSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIGxpbmVJbmRleDtcbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICBjaGFpbkNvbnRleHQsXG4gIGxpbmVJbmRleEZyb21Ob2RlQW5kVG9rZW5zXG59O1xuIl0sIm5hbWVzIjpbImNoYWluQ29udGV4dCIsImxpbmVJbmRleEZyb21Ob2RlQW5kVG9rZW5zIiwiY29udGV4dCIsIlByb3h5IiwiZ2V0IiwiaW5zdGFuY2UiLCJuYW1lIiwicmVjZWl2ZXIiLCJsZXZlbHNJbmNsdWRlTmFtZSIsIkxFVkVMUyIsImluY2x1ZGVzIiwibWVzc2FnZSIsIm5vZGUiLCJsZXZlbCIsImRlcHRoIiwiZ2V0RGVwdGgiLCJpbmRlbnQiLCJET1VCTEVfU1BBQ0UiLCJyZXBlYXQiLCJmaWxlQ29udGV4dCIsImdldEZpbGVDb250ZXh0Iiwid3JpdGVUb0xvZyIsIlJlZmxlY3QiLCJnZXRDb250ZXh0IiwidmFsdWUiLCJGVU5DVElPTiIsImJpbmQiLCJ0b2tlbnMiLCJsaW5lSW5kZXgiLCJmaXJzdFNpZ25pZmljYW50VG9rZW5JbmRleCIsImdldEZpcnN0U2lnbmlmaWNhbnRUb2tlbkluZGV4Iiwic29tZSIsInRva2VuIiwidG9rZW5JbmRleCIsInRva2VuRW5kT2ZMaW5lVG9rZW4iLCJpc0VuZE9mTGluZVRva2VuIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7UUFJZ0JBO2VBQUFBOztRQXVEaEI7ZUFBQTs7UUF0QmdCQztlQUFBQTs7O3lCQW5DK0I7Ozs7O0FBRXhDLFNBQVNELGFBQWFFLE9BQU87SUFDbEMsT0FBTyxJQUFJQyxNQUFNRCxTQUFTO1FBQ3hCRSxLQUFLLFNBQUNDLFVBQVVDLE1BQU1DO1lBQ3BCLElBQU1DLG9CQUFvQkMsaUJBQU0sQ0FBQ0MsUUFBUSxDQUFDSjtZQUUxQyxJQUFJRSxtQkFBbUI7Z0JBQ3JCLE9BQU8sU0FBQ0c7d0JBQVNDLHdFQUFPO29CQUN0QixJQUFNQyxRQUFRUCxNQUNSUSxRQUFRVCxTQUFTVSxRQUFRLElBQ3pCQyxTQUFTQyx1QkFBWSxDQUFDQyxNQUFNLENBQUNKO29CQUVuQ0gsVUFBVSxBQUFDLEdBQVdBLE9BQVRLLFFBQWlCLE9BQVJMO29CQUV0QixJQUFNUSxjQUFjZCxTQUFTZSxjQUFjO29CQUUzQ0QsWUFBWUUsVUFBVSxDQUFDUixPQUFPRixTQUFTQztnQkFDekM7WUFDRjtZQUVBLElBQUlOLFFBQVFELFVBQVU7Z0JBQ3BCLE9BQU9pQixRQUFRbEIsR0FBRyxDQUFDQyxVQUFVQyxNQUFNQztZQUNyQztZQUVBLElBQU1MLFlBQVVHLFNBQVNrQixVQUFVLElBQzdCQyxRQUFRdEIsU0FBTyxDQUFDSSxLQUFLO1lBRTNCLE9BQU8sQUFBQyxDQUFBLE9BQU9rQixzQ0FBUCxTQUFPQSxNQUFJLE1BQU1DLG1CQUFRLEdBQ3hCRCxNQUFNRSxJQUFJLENBQUN4QixhQUNUc0I7UUFDYjtJQUNGO0FBQ0Y7QUFFTyxTQUFTdkIsMkJBQTJCVyxJQUFJLEVBQUVlLE1BQU0sRUFBRUMsU0FBUztJQUNoRSxJQUFJaEIsU0FBUyxNQUFNO1FBQ2pCZ0IsWUFBWTtRQUVaLElBQU1DLDZCQUE2QmpCLEtBQUtrQiw2QkFBNkIsQ0FBQ0g7UUFFdEVBLE9BQU9JLElBQUksQ0FBQyxTQUFDQyxPQUFPQztZQUNsQixJQUFNQyxzQkFBc0JGLE1BQU1HLGdCQUFnQjtZQUVsRCxJQUFJRCxxQkFBcUI7Z0JBQ3ZCTixhQUFhO1lBQ2Y7WUFFQSxJQUFJSyxlQUFlSiw0QkFBNEI7Z0JBQzdDLE9BQU87WUFDVDtRQUNGO0lBQ0Y7SUFFQSxPQUFPRDtBQUNUO0lBRUEsV0FBZTtJQUNiNUIsY0FBQUE7SUFDQUMsNEJBQUFBO0FBQ0YifQ==