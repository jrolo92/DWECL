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
    function Peticion() {
    }
    Peticion.ejecutarPeticion = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                // let conexion = await fetch('http://localhost:3000/productos');
                // let datos = await conexion.json();
                // return datos;
                return [2 /*return*/, $.ajax({
                        url: 'http://localhost:3000/productos', // URL de la API
                        method: 'GET', // Método HTTP (GET, POST, PUT, DELETE)
                        dataType: 'json' // Tipo de dato que esperamos de vuelta
                    })];
            });
        });
    };
    return Peticion;
}());
var Visualizacion = /** @class */ (function () {
    function Visualizacion() {
    }
    Visualizacion.render = function (productos, contenedorId) {
        var contenedor = document.getElementById(contenedorId);
        if (!contenedor)
            return;
        contenedor.innerHTML = ''; // Limpiamos antes de pintar
        for (var _i = 0, productos_1 = productos; _i < productos_1.length; _i++) {
            var producto = productos_1[_i];
            var tr = document.createElement('tr');
            tr.innerHTML = "\n            <td>".concat(producto.id, "</td>\n            <td>").concat(producto.nombre, "</td>\n            <td>").concat(producto.precio, "\u20AC</td>\n            <td>").concat(producto.stock, " uds</td>");
            contenedor.appendChild(tr);
        }
    };
    return Visualizacion;
}());
var boton = document.getElementById('boton');
boton === null || boton === void 0 ? void 0 : boton.addEventListener('click', function () { return __awaiter(_this, void 0, void 0, function () {
    var datos, e_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, Peticion.ejecutarPeticion()];
            case 1:
                datos = _a.sent();
                Visualizacion.render(datos, 'cuerpoTabla');
                return [3 /*break*/, 3];
            case 2:
                e_1 = _a.sent();
                console.log('Error: ', e_1);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
