const express = require("express");
const path = require("path");
const pool = require("./queries");
const app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, "public")));
const PORT = 8080;

const router = express.Router();

router.get("/", function (request, response) {
  const _categoriesQuery = "SELECT * FROM public.loai ORDER BY id ASC";
  const _productsQuery = "SELECT * FROM public.sach ORDER BY id ASC";
  pool.query(_categoriesQuery, (err, categoriesRes) => {
    if (err) throw err;
    pool.query(_productsQuery, (err, productsRes) => {
      if (err) throw err;
      console.log(`[_SQL]`, {
        categories: categoriesRes.rows,
        products: productsRes.rows,
      });
      response.render("index", {
        categories: categoriesRes.rows,
        products: productsRes.rows,
      });
    });
  });
});

router.get("/products/:id", function (request, response) {
  const _categoriesQuery = "SELECT * FROM public.loai ORDER BY id ASC";
  const _productsQuery = `SELECT * FROM public.sach WHERE "maLoai" = ${request.params.id} ORDER BY id ASC`;
  pool.query(_categoriesQuery, (err, categoriesRes) => {
    if (err) throw err;
    pool.query(_productsQuery, (err, productsRes) => {
      if (err) throw err;
      console.log(`[_SQL]`, {
        categories: categoriesRes.rows,
        products: productsRes.rows,
      });
      response.render("index", {
        categories: categoriesRes.rows,
        products: productsRes.rows,
      });
    });
  });
});

router.get("/teacher", function (request, response) {
  // response.render("index", { title: "Welcome, teacher!" });
});

app.use("/", router);

app.listen(PORT, function () {
  console.log("[PORT] Listening on port " + PORT);
});
