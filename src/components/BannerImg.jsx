import Image from "next/image";

const BannerImg = ({ img }) => {
  return (
    <div className="conatainer">
      <figure className="relative">
        <Image
          src={img}
          alt="banner"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%", height: "300px" }}
        ></Image>
        <div className="absolute top-[45%] left-24">
          <h1 className="text-white font-bold text-4xl">Service detailst</h1>
        </div>
        <div className="absolute bottom-0 mx-auto">
          <p className="text-white">Home/ Service Details</p>
        </div>
      </figure>
      BannerImg{/*  */}
    </div>
  );
};

export default BannerImg;
