"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var router = express_1.Router();
var database = [];
/* Get Query */
router.get("/query", function (req, res, next) {
    return res.status(200).json({ status: "Query Retrieved", data: req.query });
});
/* GET users listing. */
router.get('/', function (req, res, next) {
    return res.status(200).json({ status: "Success", data: database });
});
/*  POST new user  */
router.post("/", function (req, res, next) {
    if (database.length === 0) {
        var id = 1;
        var post = __assign({ id: id }, req.body);
        database.push(post);
        return res.status(201).json({ status: "New student created", data: post });
    }
    else {
        var id = generateID(database);
        var post = __assign({ id: id }, req.body);
        database.push(post);
        return res.status(201).json({ status: "New student created", data: post });
    }
});
/* Generate ID Function */
function generateID(database) {
    var lastStudentID = database[database.length - 1].id;
    if (lastStudentID) {
        var newID = lastStudentID + 1;
        return newID;
    }
}
/* GET student by id */
router.get("/:id", function (req, res, next) {
    var id = parseInt(req.params.id);
    var student = database.find(function (item) { return item.id === id; });
    return res.status(200).json({ status: "Student Retrieved", data: student });
});
/* PUT */
router.put("/:id", function (req, res, next) {
    try {
        var id_1 = parseInt(req.params.id);
        var student = database.find(function (item) { return item.id === id_1; });
        if (student) {
            var index = database.indexOf(student);
            var update = __assign(__assign({}, student), req.body);
            database[index] = update;
            return res.status(200).json({ status: "Student Updated", data: update });
        }
    }
    catch (error) {
        return res.status(404).json({ status: "Error", message: "Student not Found" });
    }
});
/* DELETE by id*/
router.delete("/:id", function (req, res, next) {
    var id = parseInt(req.params.id);
    var newDB = database.filter(function (item) { return item.id !== id; });
    database = newDB;
    return res.status(200).json({ status: "Student with id " + id + " was Deleted", data: database });
});
/* DELETE All*/
router.delete("/", function (req, res, next) {
    database.length = 0;
    return res.status(200).json({ status: "All Student Profiles were deleted", data: database });
});
exports.default = router;
