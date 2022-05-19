const {assert} = require('chai');


describe("User visits root", () => {
  describe("Posting a quote", () => {
    it("saves the quote and the metadata submitted by the user", () => {
      const quote = "Our deepest fear is not that we are inadequate. Our deepest fear is that we are powerful beyond measure.";
      const attributed = "Marianne Williamson.";
      const source = "A Return to Love: Reflections on the Principles of A Course in Miracles"
      browser.url("/");
      browser.setValue("textarea[id=quote]", quote);
      browser.setValue("input[id=attributed]", attributed);
      browser.setValue("input[id=source]", source);
      browser.click("input[type=submit]");
      assert.include(browser.getText("#quotes"), quote);
      assert.include(browser.getText("#quotes"), attributed);
      assert.include(browser.getText("#quotes"), source);
    })
  })
})
