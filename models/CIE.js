const mongoose = require('mongoose');

const cieSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    cieType: { type: String, required: true },
    institution: { type: String, required: true },
    course: { type: String, required: true },
    issueDate: { type: Date, default: Date.now }
});

const CIE = mongoose.model('CIE', cieSchema);
module.exports = CIE;
