const EventEmitter = require("events");

const emitter = new EventEmitter();

emitter.on("serverStarted", () => {
    console.log("🚀 Server Started Successfully");
});

emitter.on("requestReceived", (method, url) => {
    console.log(`📥 ${method} ${url}`);
});

emitter.on("fileRead", () => {
    console.log("📖 File read successfully.");
});

emitter.on("fileWritten", () => {
    console.log("✍️ File updated successfully.");
});

emitter.on("streamStarted", () => {
    console.log("🌊 Stream started...");
});

emitter.on("streamFinished", () => {
    console.log("✅ Stream completed.");
});

module.exports = emitter;