"use client";

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

type AvatarProps = {
  size: number;
  name?: string; // '?' opcional
};

type CardProps = {
  children: React.ReactNode;
};

function Avatar({ size }: AvatarProps) {
  console.log(size);

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
  console.log(children);
  return <div className="p-3 border border-black rounded-lg">{children}</div>;
}

export default function Home() {
  let adress = "teste"
  async function handleGetAddresses() {
    const result = await getAddress("52051000");
    adress = result;
    console.log(adress);
  }

  return (
    <div className="flex flex-col justify-center items-center ">
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
      <div>
        <button
          onClick={handleGetAddresses}
          className="px-3 py-2 rounded-lg bg-primary text-[#fff]"
        >
          Obter endereço
        </button>
        <br />
        <br />
        <span>Endereço: {adress}</span>
      </div>
    </div>
  );
}
