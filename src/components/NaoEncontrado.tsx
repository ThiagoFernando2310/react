export function NaoEncontrado() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen ">
      <div className="bg-white p-6 rounded-xl shadow-lg w-96 text-center">
        <h1 className="text-5xl font-bold text-red-500">404</h1>
        <p className="text-xl mt-4">Página não encontrada.</p>
      </div>
    </div>
  );
}
