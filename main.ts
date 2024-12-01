Deno.serve((_request: Request) => {
  return new Response("Hello from Deno and Digital Ocean!");
});