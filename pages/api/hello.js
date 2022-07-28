export default function handler(req, res) {
  console.log("/api/hello");
  res.redirect(307, "/api/bye");
}
