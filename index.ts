export default {
  async fetch(request: Request): Promise<Response> {
    const url = new URL(request.url);
    const pathname = url.pathname;

    // 静的ファイルの場合（/css/... や /img/...）
    if (pathname.startsWith("/css/") || pathname.startsWith("/img/")) {
      try {
        const file = await fetch(`https://<あなたのワーカー名>.workers.dev${pathname}`);
        if (file.ok) return file;
        return new Response("Not found", { status: 404 });
      } catch {
        return new Response("Error loading file", { status: 500 });
      }
    }

    // それ以外はHTMLを返す
    const html = `
<!doctype html>
<html>
  <head>
    <meta charset="utf-8">
    <title>My wonderful website</title>
    <link rel="stylesheet" href="/css/style.css">
  </head>
  <body>
    <h1>Welcome to my wonderful website</h1>
    <p>You will never find another place as cool as this</p>
    <p><img src="/img/milk.jpg" alt="Milk-chan's smile will save the world!!"/></p>
  </body>
</html>
    `.trim();

    return new Response(html, {
      headers: {
        'Content-Type': 'text/html; charset=UTF-8',
      },
    });
  }
}
