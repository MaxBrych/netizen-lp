import Logo from "../../public/logo";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-white text-black">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <div className="flex flex-col w-full h-full justify-center align-center">
          <Logo /> Netizen DAO
        </div>
      </div>
    </main>
  );
}
