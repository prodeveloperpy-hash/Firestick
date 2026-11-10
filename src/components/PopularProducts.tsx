import fullSet from "../assets/products/full-set.png";
import stick from "../assets/products/stick.png";
import { useSettings } from "../settings";
import { Icon, WhatsAppIcon, WHATSAPP_URL } from "./ui";

const products = [
  { name: "Fire Stick Full Set", image: fullSet, alt: "Streaming stick, voice remote and cable kit", price: 80, original: 100, discount: 20 },
  { name: "Amazon Fire TV Stick", image: stick, alt: "Streaming stick and matching voice remote", price: 60, original: 80, discount: 25 },
];

export function PopularProducts({ showHeading = true }: { showHeading?: boolean }) {
  const { t } = useSettings();
  return (
    <section className="section popular-products-section" id="popular-products" aria-labelledby={showHeading ? "popular-products-title" : undefined}>
      <div className="container">
        {showHeading && (
          <div className="section-heading centered">
            <div className="eyebrow">{t("Pick your device")}</div>
            <h2 id="popular-products-title">{t("Our Popular Products")}</h2>
          </div>
        )}
        <div className="popular-products-grid">
          {products.map((product) => {
            const enquiry = new URL(WHATSAPP_URL);
            enquiry.searchParams.set("text", `Hello, I'd like to order the ${product.name} for £${product.price.toFixed(2)}.`);
            return (
              <article className="popular-product" key={product.name}>
                <div className="popular-product-media">
                  <span className="product-discount">−{product.discount}%</span>
                  <img src={product.image} alt={product.alt} loading="lazy" width="1024" height="1024" />
                </div>
                <div className="popular-product-copy">
                  <h3>{t(product.name)}</h3>
                  <div className="popular-product-price"><del>£{product.original.toFixed(2)}</del><strong>£{product.price.toFixed(2)}</strong></div>
                  <a href={enquiry.toString()} target="_blank" rel="noreferrer" className="whatsapp-button"><WhatsAppIcon size={20} />{t("Order on WhatsApp")}<Icon name="arrow" size={18} /></a>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
