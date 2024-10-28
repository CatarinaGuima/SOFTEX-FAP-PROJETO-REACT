"use client";
import { useState } from "react";
import { MyButton } from "../components/my-button";
import { MySquare } from "../components/my-square";
import { MyTitle } from "../components/my-title";
import { MyListItems } from "../components/my-list";
import { MyImage } from "../components/my-image";
import { MyPhrase } from "../components/my-phrase";
import { MyHeader } from "../components/my-header";
import { MyFooter } from "../components/my-footer";
import { getAddress } from "../../get-address";
import { NavBar } from "@/components/header";
import {v4 as randomUUID} from "uuid"

// Crie um tipo de dados chamado Address com as propriedades retornadas pela API do IBGE;
// Crie uma variável do tipo Array para guardar elementos do tipo Address;
// Insira manualmente pelo menos 5 registros do tipo Address dentro do array criado.
// Renderizar dinamicamente na interface esses registro, mostrando apenas o atributo logradouro

interface Address {
  id: string;
  logradouro: string;
  bairro: string;
  cep: string;
  complemento: string;
  estado: string;
  localidade: string;
}

const addressList: Address[] = [
 {
    id: randomUUID(),
    logradouro: "Rua das Flores",
    bairro: "Jardim Primavera",
    cep: "12345-678",
    complemento: "Apto 101",
    estado: "SP",
    localidade: "São Paulo"
  },
  {
    id: randomUUID(),
    logradouro: "Avenida Paulista",
    bairro: "Centro",
    cep: "87654-321",
    complemento: "Próximo ao metrô",
    estado: "SP",
    localidade: "São Paulo"
  },
  {
    id: randomUUID(),
    logradouro: "Rua Rio Branco",
    bairro: "Centro",
    cep: "11223-445",
    complemento: "Casa",
    estado: "RJ",
    localidade: "Rio de Janeiro"
  },
  {
    id: randomUUID(),
    logradouro: "Avenida Brasil",
    bairro: "Jardim América",
    cep: "33445-667",
    complemento: "Bloco B",
    estado: "MG",
    localidade: "Belo Horizonte"
  },
  {
    id: randomUUID(),
    logradouro: "Rua das Oliveiras",
    bairro: "Bela Vista",
    cep: "55667-889",
    complemento: "Próximo ao parque",
    estado: "RS",
    localidade: "Porto Alegre"
  }
];

type AvatarProps = {
  size: number;
  name?: string; // '?' opcional
};

type CardProps = {
  children: React.ReactNode;
};

function Avatar({ size }: AvatarProps) {
  return (
    <img
      className="avatar"
      src="https://i.imgur.com/1bX5QH6.jpg"
      alt="Lin Lanying"
      width={size}
      height={size}
    />
  );
}

function Card({ children }: CardProps) {
  return <div className="p-3 border border-black rounded-lg">{children}</div>;
}

// const nomes: string[] = [
//   "Lin Lanying",
//   "Maria Clara",
//   "José Maria",
//   "Maria Joaquim",
//   "Catarina Guimarães",
//   "Maria Pedroso",
//   "Maria Cecília",
//   "Maria Lúcia",
//   "Maria Mariana",
//   "Maria Isabella",
// ];


export default function Home() {
  const [address, setAddress] = useState<Address | null>(null);
  const [loading, setLoading] = useState(false);
  const [textValue, setTextValue] = useState("");

  async function handleGetAddress() {
    setLoading(true);
    try {
      const result = await getAddress("52051000");
      setAddress(result); // Define o endereço no estado
      console.log(result);
    } catch (error) {
      console.error("Ocorreu um erro inesperado:", error);
    } finally {
      setLoading(false); // Garante que o estado de loading seja alterado no final
    }
  }

  return (
    <div className="flex flex-col justify-center items-center">
      <NavBar />
      <br />
      <Avatar size={100} />
      <br />
      <Avatar size={75} />
      <br />
      <Card>
        <Avatar size={50} />
        <span>teste</span>
      </Card>
      <br />
      <MyTitle />
      <br />
      <MySquare />
      <br />
      <MyButton />
      <br />
      <MyListItems />
      <br />
      <MyImage />
      <br />
      <MyPhrase />
      <br />
      <MyHeader />
      <br />
      <MyFooter />
      <br />
      <div className="flex flex-col gap-2">
        <div>
          <input onChange={(e) => setTextValue(e.target.value)} value={textValue} type="text" id="cep" className="rounded-lg shadow-lg px-4 p-3" placeholder="Digite um CEP válido" />
        </div>
        <button
          onClick={handleGetAddress}
          className={`${
            loading ? "opacity-30" : ""
          } w-fit px-5 py-3 rounded-lg bg-primary text-white`}
          disabled={loading}
        >
          {loading ? "Carregando..." : "Obter endereço"}
        </button>
        <br />
        <span>
          Endereço:{" "}
          {address
            ? ` ,${address.logradouro}, ${address.bairro}`
            : "Nenhum endereço obtido"}
        </span>
      </div>
      <br />
      <ul>
        {addressList.map((address)=> (
           <li key={address.id}>{address.logradouro}</li>
        ))}
      </ul>
    </div>
  );
}
