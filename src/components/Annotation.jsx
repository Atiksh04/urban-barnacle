import { useLookbookStore } from '../stores/lookbookStore'

export default function Annotation({ x, y, productId }) {
  const setProductIndex = useLookbookStore((s) => s.setProductIndex)

  return (
    <div
      className="absolute w-4 h-4 bg-white rounded-full border-2 border-black cursor-pointer"
      style={{ top: y, left: x }}
      onClick={(e) => {
        e.stopPropagation()
        setProductIndex(productId)
      }}
    />
  )
}
