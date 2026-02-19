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
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
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
var Peticion = /** @class */ (function () {
    function Peticion(estado) {
        this.estado = estado;
    }
    Peticion.prototype.ejecutarPeticion = function () {
        return __awaiter(this, void 0, void 0, function () {
            var url, conexion, datos, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        url = void 0;
                        console.log(this.estado);
                        if (this.estado == 'todas') {
                            url = "http://localhost:3000/tareas";
                        }
                        else {
                            url = "http://localhost:3000/tareas/estado/".concat(this.estado);
                        }
                        return [4 /*yield*/, fetch(url)];
                    case 1:
                        conexion = _a.sent();
                        return [4 /*yield*/, conexion.json()];
                    case 2:
                        datos = _a.sent();
                        return [2 /*return*/, datos];
                    case 3:
                        e_1 = _a.sent();
                        console.log('Error: ', e_1);
                        return [2 /*return*/, []];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    return Peticion;
}());
var Visualizacion = /** @class */ (function () {
    function Visualizacion() {
    }
    Visualizacion.prototype.render = function (tareas) {
        var contenedor = document.getElementById('cuerpoTabla');
        if (!contenedor)
            return;
        contenedor.innerHTML = ''; // Limpiamos antes de pintar
        for (var _i = 0, tareas_1 = tareas; _i < tareas_1.length; _i++) {
            var tarea = tareas_1[_i];
            var tr = document.createElement('tr');
            tr.innerHTML = "\n            <td>".concat(tarea.id, "</td>\n            <td>").concat(tarea.titulo, "</td>\n            <td>").concat(tarea.estado, "</td>\n            ");
            contenedor.appendChild(tr);
        }
    };
    return Visualizacion;
}());
var btnBuscar = document.getElementById('btnBuscar');
var select = document.getElementById('desplegable');
btnBuscar === null || btnBuscar === void 0 ? void 0 : btnBuscar.addEventListener('click', function () { return __awaiter(_this, void 0, void 0, function () {
    var estado, peticion, visualizar, _a, _b;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                estado = select.value;
                if (estado == 'Seleccionar') {
                    return [2 /*return*/, alert('Debes seleccionar un estado')];
                }
                peticion = new Peticion(estado).ejecutarPeticion();
                visualizar = new Visualizacion;
                _b = (_a = visualizar).render;
                return [4 /*yield*/, peticion];
            case 1:
                _b.apply(_a, [_c.sent()]);
                return [2 /*return*/];
        }
    });
}); });
