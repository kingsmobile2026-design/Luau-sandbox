const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;
const publicDir = path.join(__dirname, "public");

// The server only serves static files. Submitted code is never sent to or executed by Node.js.
app.disable("x-powered-by");
app.use(express.static(publicDir, {
  index: "index.html",
  dotfiles: "deny",
  etag: true,
  maxAge: "1h"
}));
app.get("/health", (_req, res) => res.status(200).json({ ok: true, service: "buffer-bit32-sandbox" }));
app.use((_req, res) => res.status(404).type("text").send("Not found"));

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Buffer/bit32 sandbox listening on port ${PORT}`);
});
