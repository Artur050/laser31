import Image from "next/image";
import bgImage from "../../public/img/header/02.jpg";
// import LaserText from "./effects/LaserText ";

function Header() {
  return (
    <>
      <div>
        <Image
          src={bgImage}
          alt="bf"
          className="bg-center bg-no-repeat bg-cover mt-0 md:h-[90vh] min-h-[300px] w-[100%] "
        />
        <div className="flex absolute items-center justify-center right-0 left-0 text-center sm:top-40 top-20">
          <div className="  ">
            {/* text content section */}
            <div className="flex  ">
              <h1 className="text-xl sm:text-4xl lg:text-5xl lg:w-[900px] lg:text-center font-medium sm:font-bold text-slate-100">
                {/* <LaserText text="Услуги лазерной гравировки на различных материалах и изделиях" /> */}
                Услуги лазерной гравировки на различных материалах и изделиях
              </h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
