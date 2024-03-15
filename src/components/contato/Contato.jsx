import React, { useEffect } from "react";
import data from "../../config/data.json";

const Contato = () => {
  const { contatoInfo } = data;
  const [contato, setContato] = React.useState(null);

  useEffect(() => {
    setContato(contatoInfo);
  }, [contatoInfo]);

  return (
    <section className="mt-10 lg:mt-20 px-5 py-10 bg-redR2R lg:px-0">
      <div className="container">
        <div className="flex flex-col items-center gap-32 justify-center lg:flex-row">
          {contato &&
            contato.map((info, index) => (
              <div
                className="flex flex-col items-center justify-center text-center"
                key={index}
              >
                <div className="bg-redR2R300 rounded-lg flex items-center shadow-lg justify-center w-[190px] h-[150px] hover:scale-110 duration-300 ease-out">
                  <img
                    src={info.image}
                    alt={index}
                    className="w-[80px] object-cover"
                  />
                </div>
                <h2 className="text-white py-3 text-2xl font-bold uppercase">
                  {info.title}
                </h2>
                <p className="text-white">{info.text}</p>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Contato;
