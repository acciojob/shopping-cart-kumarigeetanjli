const request = require("supertest");
const app = require("../app.js");
const addData = require("../js/list.js");
const app = require("./app.js");
const addData = require("./list.js");

const generaltest = async() => {
  const res = await request(app).get("/");
