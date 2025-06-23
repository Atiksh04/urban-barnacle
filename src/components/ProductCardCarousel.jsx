import { ALL_PRODUCTS } from '../data/dummyData'
import { useLookbookStore } from '../stores/lookbookStore'
import { useRef, useEffect } from 'react'


// Product card carousel to render the products and scroll when activeProductIndex is updated

export default function ProductCardCarousel({products}) {
  const activeIndex = useLookbookStore((s) => s.activeProductIndex)
  const carouselRef = useRef(null)
  const cardRefs = useRef({})
  const productList = ALL_PRODUCTS.filter((p) => products.indexOf(p.id) > -1)

  useEffect(() => {
    if (activeIndex && cardRefs.current[activeIndex]) {
      cardRefs.current[activeIndex].scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' })
    }
  }, [activeIndex])

  return (
    <div className="absolute bottom-0 left-0 w-full overflow-x-auto bg-black/60 py-2 px-4 mb-3">
      <div
        ref={carouselRef}
        className="flex space-x-4 transition-transform duration-300 "
        style={{ minWidth: `${productList.length * 300}px` }}
      >
        {productList.map((product) => (
          <div
            key={product.id}
            ref={el => cardRefs.current[product.id] = el}
            className={`w-[280px] flex-shrink-0 bg-white text-black p-4 rounded-lg ${
              product.id === activeIndex ? 'ring-2 ring-blue-500' : ''
            }`}
          >
            <div className="flex items-center gap-4">
              <img src={product.image} className="w-16 h-16 object-cover rounded" />
              <div>
                <h3 className="font-bold">{product.name}</h3>
                <p>{product.price}</p>
              </div>
            </div>
            <button
              className="mt-4 px-4 py-2 bg-blue text-white rounded"
              onClick={() => alert(`Go to product page for ${product.name}`)}
            >
              Shop Now
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}
