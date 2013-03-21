var Localize = require("../index.js");

var transformer = Localize.fromGoogleSpreadsheet("0Aq6WlQdq71FydDZlaWdmMEUtc2tUb1k2cHRBS2hzd2c");
transformer.setKeyCol('Key');

transformer.save("samples/values/strings.xml", { valueCol: "Value_nl", format: "android" });
transformer.save("samples/values-fr/strings.xml", { valueCol: "Value_fr", format: "android" });
transformer.save("samples/values/ios-nl.txt", { valueCol: "Value_nl", format: "ios" });
transformer.save("samples/values/ios-fr.txt", { valueCol: "Value_fr", format: "ios" });