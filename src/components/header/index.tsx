import Link from "next/link";

export function NavBar() {
  return (
    <header className="border-b border-black py-6">
      <nav className="flex justify-center">
        <ul className="flex gap-8">
          <li>
            <Link href="/pages/register">Cadastrar-se</Link>
          </li>
          <li>
            <Link href="pages/sign-in">Entrar</Link>
          </li>
          <li>
            <Link href="/">Home</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
