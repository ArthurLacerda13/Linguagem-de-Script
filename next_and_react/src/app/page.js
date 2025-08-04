import Image from "next/image";

export default function Home() {
  return (
    <div className='text-center'>
    <h1>Meu primeiro projeto em NextJS</h1>
    <hr />
    <label for='nome'>Nome: </label>
    <input className="border-solid 1px white mt-5" id="nome" type="text"/>
    </div>
  );
}
