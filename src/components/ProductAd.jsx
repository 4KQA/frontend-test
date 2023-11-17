export default function ProductAd({
  heroSrc,
  heroAlt,
  logoSrc,
  logoAlt,
  heroText,
  productSrc,
  productAlt,
  productText,
  linkHref,
  productName,
}) {
  return (
    <>
      <div className="productAd">
        <img src={heroSrc} alt={heroAlt} className="hero" width={"100%"} />
        <div className="heroText fixedMargin">
          <img src={logoSrc} alt={logoAlt} className="productLogo" />

          <h2 className="productAdText">{heroText}</h2>
        </div>
      </div>

      <div className="productPresentation">
        <div className="productPackaging fixedMargin">
          <img src={productSrc} alt={productAlt} className="productBox" />
          <div className="productPackagingText">
            <h2>{productText}</h2>

            <a href={linkHref}>
              Learn more about how {productName}® works and how to use it in
              treatment.
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
