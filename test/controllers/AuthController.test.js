var supertest = require("supertest");

describe("AuthController", function() {
  describe("#login()", function() {
    it("should return success login", function(done) {
      supertest(sails.hooks.http.app)
        .post("/auth/login")
        .send({ zxczx: "3188967383" })
        .set("Content-Type", "application/json")
        .expect(200)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          expect(res.body.type).to.be.equal("success");
          return done();
        });
    });
  });
});
