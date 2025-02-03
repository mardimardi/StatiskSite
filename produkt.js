// Definerer produktets ID, som bruges til at hente specifik data fra API'et
let productId = new URLSearchParams(window.location.search).get("id");

// Finder HTML-elementet med klassen 'productContainer' - hvor produktdataen skal indsættes
let productContainer = document.querySelector(".productContainer");

// Henter/fetcher data om produktet fra API'et
fetch(`https://kea-alt-del.dk/t7/api/products/${productId}`)
  .then((response) => response.json())
  // Når dataen er hentet, konverteres den fra JSON-format (tekst) til et JavaScript-objekt.
  // JavaScript kan ikke arbejde direkte med rå JSON-data, så vi skal konvertere det først.

  .then((data) => {
    // Efter dataen er konverteret til et JavaScript-objekt:
    // Indsætter den hentede data i HTML'en ved at opdatere indholdet (innerHTML) af 'productContainer'

    productContainer.innerHTML = ` 
        <div class="grid_1_1_1">
            <div>
                <img src="https://kea-alt-del.dk/t7/images/webp/640/${productId}.webp" alt="T-shirt">
            </div>

            <div>
                <h1>Product information</h1>
                <h2>Model name</h2>
                <p>${data.productdisplayname}</p> 
                <h2>Color</h2>
                <p>${data.colour1}</p> 
                <h2>Inventory number</h2>
                <p>${data.id}</p> 
                <h2>${data.brandname}</h2> 
                <p>${data.brandbio}</p>
            </div>

            <div class="kurv">
                <h1>${data.productdisplayname}</h1> 
                <p>${data.brandname}</p>

                <div class="size-selector">
                    <label for="size" class="size-label">Choose a size</label>
                    <select id="size" class="size-select">
                        <option value="xs">XS</option>
                        <option value="s">S</option>
                        <option value="m">M</option>
                        <option value="l">L</option>
                        <option value="xl">XL</option>
                    </select>
                </div>

                <button class="style-button">Add to basket</button>
            </div>
        </div>
    `;
  });

// dette hedder "dynamisk rendering" -> Indholdet på siden bliver genereret baseret på data, der er hentet fra en ekstern kilde (API).
// Dynamisk rendering -> "Jeg bruger dynamisk rendering til at vise data fra et API. Det betyder, at indholdet på siden opdateres automatisk, baseret på den data, der hentes fra en ekstern database."

// Når vi bruger ${data.variabel} til at indsætte data i HTML, kaldes det "string interpolation" med "template literals".
// String interpolation -> "Til at indsætte data i HTML'en bruger jeg template literals med string interpolation, hvilket gør det muligt at sætte JavaScript-variabler ind direkte i HTML-strengen ved hjælp af ${}."
