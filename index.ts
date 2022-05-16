import app from "./app";
import "./src/basededatos";
function main() {
  app.listen(app.get("port"));

  console.log("server listening in the port", app.get("port"));
}
main();
