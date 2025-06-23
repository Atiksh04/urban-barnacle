
import { useLookbookStore } from '../stores/lookbookStore'
import Annotation from './Annotation'
import ProductCardCarousel from './ProductCardCarousel'
import StoryProgressBar from './StoryProgressBar'
import VideoPreview from './VideoPreview'


//Renders a single "look" in the lookbook
export default function Look({ look }) {
  const media = look.media
  const nextLook = useLookbookStore((s) => s.nextLook)
  const setProductIndex = useLookbookStore((s) => s.setProductIndex)
  const current = media[0];


  const handleAutoScroll= ()=> {
    setProductIndex(0);
    nextLook();
  }
  return (
    <div
      className="relative w-full h-full flex items-center justify-center touch-none"
    >
      {current.type === 'image' ? (
        <div className="w-full h-full relative">
          <img src={current.src} className="w-full h-full object-cover" />
          {current.annotations.map((a, i) => (
            <Annotation key={i} {...a} />
          ))}
          <StoryProgressBar key={look.id} media={media} onComplete={handleAutoScroll} />
          <ProductCardCarousel products={current.products || []} />
        </div>
      ) : (
        <div className="w-full h-full relative">
          <VideoPreview src={current.src} onComplete={nextLook}/>
          <ProductCardCarousel products={current.products || []} />
        </div>
      )}
    </div>
  )
}
