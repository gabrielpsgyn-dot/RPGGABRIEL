const fs = require("fs");

const file = "public/index.html";
let html = fs.readFileSync(file, "utf8");

const tag = '<script src="/uix-dashboard-force.js?v=10"></script>';

if(!html.includes('/uix-dashboard-force.js')){
  html = html.replace('</body>', '  ' + tag + '\n</body>');
}

fs.writeFileSync(file, html, "utf8");

console.log("Script externo do dashboard ligado no index.html");
