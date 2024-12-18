export const Button = ({ label, onClick }) => {
  return (
    <div>
      <button
        type="button"
        onClick={onClick}
        className="w-full text-white bg-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm py-2.5 px-5 me-2 mb-2"
      >
        {label}
      </button>
    </div>
  );
};
