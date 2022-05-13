import Image from "next/image";
import banner1 from "/public/banner1.jpg";

export default function Banner() {
  return (
    <div className="ciyy">
      <Image src={banner1} alt="Banner ad" />
    </div>
  );
}
