import React, { useState } from "react";
import Input from "../../utils/Input";
import useForm from "../../hooks/UseForm";
import useFetch from "../../hooks/UseFetch";
import { EMAIL_POST } from "../../Api";

const Forms = () => {
  const nome = useForm("name");
  const email = useForm("email");
  const message = useForm();
  const { data, error, loading, request, responseMessage } = useFetch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("nome", nome.value);
    formData.append("email", email.value);
    formData.append("message", message.value);

    const { url, options } = EMAIL_POST(formData); // Obtém a URL e as opções de requisição para postagem de foto
    request(url, options); // Envia a requisição HTTP
  };
  return (
    <section className="mt-20">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div>
            <h1 className="text-4xl  uppercase font-semibold text-redR2R200">
              Entre em contato agora mesmo
            </h1>
          </div>
          <form
            className="flex py-10 flex-col gap-6  bg-transparent"
            onSubmit={handleSubmit}
          >
            <Input label="Nome" type="name" name="nome" {...nome} />
            <Input label="Email" type="email" name="email" {...email} />
            <Input
              label="Mensagem"
              type="message"
              name="message"
              {...message}
            />
            {loading ? (
              <button
                disabled
                className="bg-red-400 text-white w-[120px] py-2 rounded-full"
              >
                Enviando...
              </button>
            ) : (
              <button className="bg-redR2R text-white w-[120px] py-2 rounded-full">
                Enviar
              </button>
            )}
          </form>
          {responseMessage && (
            <h1 className="text-greenCauchioli-400 text-2xl text-center font-bold my-10">
              {responseMessage}
            </h1>
          )}
        </div>
      </div>
    </section>
  );
};

export default Forms;
