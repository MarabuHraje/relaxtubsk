import type { Product } from '../data/products'

type ProductGalleryProps = {
  product: Product
}

export default function ProductGallery({ product }: ProductGalleryProps) {
  if (product.galleryImages.length === 0) {
    return null
  }

  return (
    <section id="galeria" className="scroll-mt-24 overflow-hidden bg-porcelain sm:scroll-mt-28">
      <div className="relative">
        <div className="flex snap-x overflow-x-auto [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {product.galleryImages.map((image, index) => (
            <figure
              key={image}
              className="min-w-full snap-center overflow-hidden md:min-w-[80%] 2xl:min-w-[60%]"
            >
              <img
                src={image}
                alt={`${product.navName} galéria ${index + 1}`}
                className="h-[100vh] max-h-[400px] w-full object-cover min-[375px]:max-h-[600px] md:max-h-[800px]"
                loading="lazy"
              />
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
