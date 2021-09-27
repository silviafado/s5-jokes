/* Global Variables */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
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
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
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
var _this = this;
/* URLs for API calls */
var url = 'https://icanhazdadjoke.com/';
var urlPost = 'http://localhost:8000/addEntry';
var urlUI = 'http://localhost:8000/all';
/* Create a new date instance dynamically with JS */
var d = new Date();
var newDate = d.getDate() + '/' + d.getMonth() + '/' + d.getFullYear();
/* Event listener to add function to existing HTML DOM element */
var generate = document.getElementById('button').addEventListener('click', performAction);
/* Function called by event listener */
function performAction(e) {
    getJoke(url)
        .then(function (data) {
        postData(urlPost, data = { date: newDate, joke: data.joke })
            .then(function (newEntry) {
            console.log(newEntry);
            updateUI(urlUI);
        });
    });
}
/* Function to GET Web API Data */
var getJoke = function (url) { return __awaiter(_this, void 0, void 0, function () {
    var res, data, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, fetch(url, {
                    headers: { 'Accept': 'application/json' }
                })];
            case 1:
                res = _a.sent();
                _a.label = 2;
            case 2:
                _a.trys.push([2, 4, , 5]);
                return [4 /*yield*/, res.json()];
            case 3:
                data = _a.sent();
                console.log(data);
                return [2 /*return*/, (data)];
            case 4:
                error_1 = _a.sent();
                console.log('error', error_1);
                return [3 /*break*/, 5];
            case 5: return [2 /*return*/];
        }
    });
}); };
/* Function to POST data */
var postData = function (urlPost, data) {
    if (data === void 0) { data = {}; }
    return __awaiter(_this, void 0, void 0, function () {
        var response, newData, error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    console.log(data);
                    return [4 /*yield*/, fetch(urlPost, {
                            method: 'POST',
                            credentials: 'same-origin',
                            headers: { 'Content-Type': 'application/json; charset=UTF-8' },
                            body: JSON.stringify(data)
                        })];
                case 1:
                    response = _a.sent();
                    _a.label = 2;
                case 2:
                    _a.trys.push([2, 4, , 5]);
                    return [4 /*yield*/, response.json()];
                case 3:
                    newData = _a.sent();
                    console.log('newData: ', newData);
                    return [2 /*return*/, newData];
                case 4:
                    error_2 = _a.sent();
                    console.log('error', error_2);
                    return [3 /*break*/, 5];
                case 5: return [2 /*return*/];
            }
        });
    });
};
/* Function to update User Interface */
var updateUI = function (urlUI) { return __awaiter(_this, void 0, void 0, function () {
    var request, newEntry, error_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, fetch(urlUI)];
            case 1:
                request = _a.sent();
                _a.label = 2;
            case 2:
                _a.trys.push([2, 4, , 5]);
                return [4 /*yield*/, request.json()];
            case 3:
                newEntry = _a.sent();
                document.getElementById('date').innerHTML = newEntry.date;
                document.getElementById('response').innerHTML = 'Joke of the day: ' + newEntry.joke;
                return [2 /*return*/, (newEntry)];
            case 4:
                error_3 = _a.sent();
                console.log('error', error_3);
                return [3 /*break*/, 5];
            case 5: return [2 /*return*/];
        }
    });
}); };
