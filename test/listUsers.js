const { expect } = require("chai");
const request = require("supertest");

const app = require("../app");

describe("unit testing", () => {
  before(() => {
    // some logic you want before test start
  });

  after(() => {
    // logic which needs to executes after test case.
  });

  it("getting users list", (done) => {
    request(app)
      .get("/")
      // .send({ name: "hello" })
      .then((res) => {
        const body = res.body;
        expect(body).to.contain.property("_id");
        expect(body).to.contain.property("name");
        done();
      })
      .catch((error) => {
        return done(error);
      });
  });
});
