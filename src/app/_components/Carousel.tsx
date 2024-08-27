import Image from 'next/image'
import { useRouter } from 'next/router'
import useKeypress from 'react-use-keypress'
import type { ImageProps } from '../../lib/types'
import { useLastViewedPhoto } from '../../lib/useLastViewedPhoto'
import SharedModal from './SharedModal'

export default function Carousel({
  index,
  currentPhoto,
}: {
  index: number
  currentPhoto: ImageProps
}) {
  const router = useRouter()
  const [, setLastViewedPhoto] = useLastViewedPhoto()

  function closeModal() {

    interface Photo {
      id: any;
      // Autres propriétés de Photo
    }

    const currentPhoto: Photo = {
      id: Number// exemple
      // Autres valeurs de propriétés
    };
    setLastViewedPhoto(currentPhoto.id)
  }

  function changePhotoId(newVal: number) {
    return newVal
  }

  useKeypress('Escape', () => {
    closeModal()
  })

  return (
    <div className="fixed inset-0 flex items-center justify-center">
      <button
        className="absolute inset-0 z-30 cursor-default bg-black backdrop-blur-2xl"
        onClick={closeModal}
      >
       <Image
  src={currentPhoto?.blurDataUrl || ''}
  className="pointer-events-none h-full w-full"
  alt="blurred background"
  fill
  priority={true}
/>

      </button>
      <SharedModal
        index={index}
        changePhotoId={changePhotoId}
        currentPhoto={currentPhoto}
        closeModal={closeModal}
        navigation={false}
      />
    </div>
  )
}