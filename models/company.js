const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('./config/database');

const companySchema = mongoose.Schema({

});

const Company = module.exports = mongoose.model(Company, companySchema);