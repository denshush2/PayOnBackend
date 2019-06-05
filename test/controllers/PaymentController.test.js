var supertest = require("supertest");

describe("PaymentController", function() {
  describe("#ping()", function() {
    it("should return success", function(done) {
      supertest(sails.hooks.http.app)
        .get("/payment/ping")
        .set("Content-Type", "application/json")
        .set(
          "Authorization",
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImNyZWF0ZWRBdCI6MTU1MTE0MzUyNTE3MCwidXBkYXRlZEF0IjoxNTUxMTQzNTI1MTcwLCJpZCI6MiwicGhvbmUiOiIzMTg4OTY3MzgzNDQiLCJ2ZXJpZmllZCI6dHJ1ZSwidmVyaWZpY2F0aW9uTnVtYmVyIjoiIn0sImlhdCI6MTU1MTE0MzUyNX0.AGTeXv52GC1Uwisc6TTcX0CfEVAHcvT8zMd813GzhCA"
        )
        .expect(response => {
          response.type === "success";
        })
        .expect(200, done);
    });
  });
});
