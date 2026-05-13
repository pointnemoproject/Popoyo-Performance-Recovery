import Image from "next/image";

export function ImagePanel({src,alt,priority=false,className=""}:{src:string;alt:string;priority?:boolean;className?:string}) {
  return <div className={`relative min-h-[340px] overflow-hidden bg-[#ded0bd] ${className}`}><Image src={src} alt={alt} fill priority={priority} sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover"/><div className="absolute inset-0 bg-[#24231f]/10"/></div>;
}
