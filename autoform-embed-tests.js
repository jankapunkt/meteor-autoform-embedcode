// Import Tinytest from the tinytest Meteor package.
import { Tinytest } from "meteor/tinytest";

// Import and rename a variable exported by autoform-embed.js.
import { name as packageName } from "meteor/jkuester:autoform-embed";

// Write your tests here!
// Here is an example.
Tinytest.add('autoform-embed - example', function (test) {
  test.equal(packageName, "autoform-embed");
});
