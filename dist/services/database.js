"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _mongoose = require('mongoose'); var _mongoose2 = _interopRequireDefault(_mongoose);
_mongoose2.default.connect('mongodb://localhost:27017/portfolio');

console.log('[database] Database iniciada com sucesso.')