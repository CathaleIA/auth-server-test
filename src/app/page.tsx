

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <h1>Testeando AUTH | COGNITO</h1>
        <p>Esta aplicacion esta siendo creada para el testo de la autentificacion desde el lado del servidor <span className="font-bold">SSR</span></p>
        <a href="/api/auth/sign-in">
          Sign In
        </a>
        <a href="/api/auth/sign-out">
          Sign Out
        </a>
      </main>
    </div>
  );
}
