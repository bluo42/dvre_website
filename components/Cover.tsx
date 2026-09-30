import Image from 'next/image';

type Props = { src: string; sizes: string; alt?: string; priority?: boolean };

/** A photo that fills its (position: relative) parent, cropped like background-size: cover. */
export default function Cover({ src, sizes, alt = '', priority }: Props) {
  return <Image src={src} alt={alt} fill sizes={sizes} priority={priority} className="cover" />;
}
