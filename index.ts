export default {
  async fetch(request: Request): Promise<Response> {
    const html = `
<!doctype html>
<html>
    <head>
        <meta charset="utf-8">
        <title>My wonderful website</title>
        <link rel="stylesheet" href="css/style.css">
    </head>
    <body>
        <h1>Welcome to my wonderful website</h1>
        <p>You will never find another Milk as cute as this</p>
        <p><img src="img/milk.jpg" alt="Milk-chan's smile will save the world!!"/></p>
    </body>
</html>
    `.trim();

    return new Response(html, {
      headers: {
        'Content-Type': 'text/html; charset=UTF-8'
      }
    });
  }
}
