import Image from "next/image";

const BannerImg = ({ img,title }) => {
  return (
    <div >
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
          <h1 className="text-white font-bold text-4xl">{title}</h1>
        </div>
        <div className=" flex justify-center -mt-12">
          <p className="text-white bg-[#FF3811] btn border-none hover:bg-orange-700">Home/ {title}</p>
        </div>
      </figure>
      
    </div>
  );
};

export default BannerImg;
