"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var chai_1 = require("chai");
var index_1 = require("../../index");
var _chai_1 = require("../../_chai");
describe('Decision', function () {
    before(function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        this.timeout(5000);
                        _a = chai_1.use;
                        return [4 /*yield*/, _chai_1.adfValidator()];
                    case 1:
                        _a.apply(void 0, [_b.sent()]);
                        return [2 /*return*/];
                }
            });
        });
    });
    it('should not allow decision list items without content', function () {
        var doc = new index_1.Document();
        var decision = doc.decisionList('1').decision('1', 'done');
        chai_1.expect(function () { return decision.toJSON(); }).to.throw();
    });
    it('should create a text node in the decision', function () {
        var doc = new index_1.Document();
        var decision = doc.decisionList('1')
            .decision('1', 'done')
            .text('a');
        chai_1.expect(doc).to.be.validADF();
        chai_1.expect(decision.toJSON()).to.deep.equal({
            type: 'decisionItem',
            attrs: {
                localId: '1',
                state: 'done'
            },
            content: [
                {
                    type: 'text',
                    text: 'a'
                }
            ]
        });
    });
    it('should create a code node in the decision', function () {
        var doc = new index_1.Document();
        var decision = doc.decisionList('1')
            .decision('1', 'done')
            .code('a');
        chai_1.expect(doc).to.be.validADF();
        chai_1.expect(decision.toJSON()).to.deep.equal({
            type: 'decisionItem',
            attrs: {
                localId: '1',
                state: 'done'
            },
            content: [
                {
                    type: 'text',
                    text: 'a',
                    marks: [
                        { type: 'code' }
                    ]
                }
            ]
        });
    });
    it('should create a em node in the decision', function () {
        var doc = new index_1.Document();
        var decision = doc.decisionList('1')
            .decision('1', 'done')
            .em('a');
        chai_1.expect(doc).to.be.validADF();
        chai_1.expect(decision.toJSON()).to.deep.equal({
            type: 'decisionItem',
            attrs: {
                localId: '1',
                state: 'done'
            },
            content: [
                {
                    type: 'text',
                    text: 'a',
                    marks: [
                        { type: 'em' }
                    ]
                }
            ]
        });
    });
    it('should create a strike node in the decision', function () {
        var doc = new index_1.Document();
        var decision = doc.decisionList('1')
            .decision('1', 'done')
            .strike('a');
        chai_1.expect(doc).to.be.validADF();
        chai_1.expect(decision.toJSON()).to.deep.equal({
            type: 'decisionItem',
            attrs: {
                localId: '1',
                state: 'done'
            },
            content: [
                {
                    type: 'text',
                    text: 'a',
                    marks: [
                        { type: 'strike' }
                    ]
                }
            ]
        });
    });
    it('should create a strong node in the decision', function () {
        var doc = new index_1.Document();
        var decision = doc.decisionList('1')
            .decision('1', 'done')
            .strong('a');
        chai_1.expect(doc).to.be.validADF();
        chai_1.expect(decision.toJSON()).to.deep.equal({
            type: 'decisionItem',
            attrs: {
                localId: '1',
                state: 'done'
            },
            content: [
                {
                    type: 'text',
                    text: 'a',
                    marks: [
                        { type: 'strong' }
                    ]
                }
            ]
        });
    });
    it('should create an emoji node in the decision', function () {
        var doc = new index_1.Document();
        var decision = doc.decisionList('1')
            .decision('1', 'done')
            .emoji('a');
        chai_1.expect(doc).to.be.validADF();
        chai_1.expect(decision.toJSON()).to.deep.equal({
            type: 'decisionItem',
            attrs: {
                localId: '1',
                state: 'done'
            },
            content: [
                {
                    type: 'emoji',
                    attrs: {
                        shortName: 'a'
                    }
                }
            ]
        });
    });
    it('should create a hardBreak node in the decision', function () {
        var doc = new index_1.Document();
        var decision = doc.decisionList('1')
            .decision('1', 'done')
            .hardBreak();
        chai_1.expect(doc).to.be.validADF();
        chai_1.expect(decision.toJSON()).to.deep.equal({
            type: 'decisionItem',
            attrs: {
                localId: '1',
                state: 'done'
            },
            content: [
                {
                    type: 'hardBreak',
                    attrs: {
                        text: '\n'
                    }
                }
            ]
        });
    });
    it('should create a link node in the decision', function () {
        var doc = new index_1.Document();
        var decision = doc.decisionList('1')
            .decision('1', 'done')
            .link('a', 'https://example.com/a');
        chai_1.expect(doc).to.be.validADF();
        chai_1.expect(decision.toJSON()).to.deep.equal({
            type: 'decisionItem',
            attrs: {
                localId: '1',
                state: 'done'
            },
            content: [
                {
                    type: 'text',
                    text: 'a',
                    marks: [
                        {
                            type: 'link',
                            attrs: { href: 'https://example.com/a' }
                        }
                    ]
                }
            ]
        });
    });
    it('should create a mention node in the decision', function () {
        var doc = new index_1.Document();
        var decision = doc.decisionList('1')
            .decision('1', 'done')
            .mention('123', 'a');
        chai_1.expect(doc).to.be.validADF();
        chai_1.expect(decision.toJSON()).to.deep.equal({
            type: 'decisionItem',
            attrs: {
                localId: '1',
                state: 'done'
            },
            content: [
                {
                    type: 'mention',
                    attrs: {
                        id: '123',
                        text: 'a'
                    }
                }
            ]
        });
    });
});
//# sourceMappingURL=decision.spec.js.map