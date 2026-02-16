const Spinner = ({ fullScreen = false }) => {
  return (
    <div
      role="status" // Indica que es un elemento de estado
      className={`flex justify-center items-center ${
        fullScreen ? "fixed inset-0 bg-black bg-opacity-50" : "py-10"
      }`}
    >
      <div className="w-12 h-12 border-4 border-red-600 border-t-transparent rounded-full animate-spin"></div>
      <span className="sr-only">Cargando...</span> {/* Texto solo para lectores de pantalla */}
    </div>
  );
};

export default Spinner;