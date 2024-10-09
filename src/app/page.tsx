import { MyButton } from "./components/my-button";
import { MySquare } from "./components/my-square";
import { MyTitle } from "./components/my-title";
import { MyListItems } from "./components/my-list";
import { MyImage } from "./components/my-image";
import { MyPhrase } from "./components/my-phrase";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center ">
      <MyTitle />
      <br />
      <MySquare />
      <br />
      <MyButton />
      <br />
      <MyListItems />
      <br />
      <MyImage />
      <MyPhrase />
    </div>
  );
}
