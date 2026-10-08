import Image from 'next/image';

type Props = { src: string; sizes: string; alt?: string; priority?: boolean; position?: string };

/** A photo that fills its (position: relative) parent, cropped like background-size: cover. */
export default function Cover({ src, sizes, alt = '', priority, position }: Props) {
  return <Image src={src} alt={alt} fill sizes={sizes} priority={priority} className="cover" style={position ? { objectPosition: position } : undefined} />;
}
