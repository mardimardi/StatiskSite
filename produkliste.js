const myCategory = new URLSearchParams(window.location.search).get("category");

// Finder 'category_list_container' - her skal produktlisten indsættes
let listContainer = document.querySelector(".category_list_container");

const overskrift = document.querySelector("h1");

overskrift.innerHTML = myCategory;

// Henter data om alle produkter fra API'et
fetch(`https://kea-alt-del.dk/t7/api/products?category=${myCategory}`)
  .then((response) => response.json())
  // Når dataen er hentet, konverteres den fra JSON-format (tekst) til et JavaScript-objekt
  .then((data) => showList(data));
// Når dataen er konverteret, kaldes funktionen 'showList' med dataen som argument (dataen sendt til funktionen)

// Funktion der viser listen af produkter
function showList(products) {
  console.log(products); // Logger alle produkter i konsollen, så man kan se den hentede data

  const markup = products
    .map(
      (product) => `            
            <article class="item">
                <img src="https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp" alt="${product.productdisplayname}">
                <h2>${product.productdisplayname}</h2>
                <h3>${product.brandname}</h3>
                <div class="price">
                    <p>${product.price},-</p>
                </div>
                <a href="produkt.html?id=${product.id}">Read more</a>
            </article>`
    )
    .join("");
  // .join("") samler alle elementerne i arrayet til én stor streng uden mellemrum eller separatorer. (default kommer der komma ved join)
  // Dette betyder, at HTML-strukturen for hvert produkt bliver sat sammen uden ekstra mellemrum mellem dem.
  // Resultatet bliver én sammenhængende streng, der kan indsættes i innerHTML på én gang.

  console.log(markup); // Logger den færdige HTML, så vi kan se resultatet før det indsættes på siden

  listContainer.innerHTML = markup;
  // Indsætter den dynamisk genererede HTML i 'category_list_container' på siden
}
