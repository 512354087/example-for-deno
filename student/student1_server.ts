// 导入模块 @VERSION 导入特定的版本
import { serve } from "https://deno.land/std@0.68.0/http/server.ts";
const s = serve({ port: 8000 });
console.log("http://localhost:8000/");
for await (const req of s) {
  req.respond({ body: "Hello World\n" });
}
