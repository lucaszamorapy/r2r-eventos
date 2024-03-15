import React from "react";
import data from "../../config/data.json";

const Servicos = () => {
  return (
    <>
      <section id="servicos" className="mt-10 lg:mt-20 px-5 lg:px-0">
        <div className="container">
          <h1 className="text-5xl title uppercase font-semibold text-redR2R200 lg:text-6xl ">
            Serviços
          </h1>
          <div className="grid grid-cols-1 mt-10 gap-5 lg:grid-cols-4 ">
            {data["servicosInfo"].map((item, index) => (
              <div
                key={index}
                className="relative hover:scale-110 duration-300 ease-out"
              >
                <img
                  src={item.image}
                  alt={index}
                  className="h-[230px] w-full object-cover rounded-lg"
                />
                <div className="bg-black w-full absolute bottom-0 text-center py-2 opacity-70 rounded-b-lg">
                  <p className="text-white uppercase font-semibold">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Servicos;
