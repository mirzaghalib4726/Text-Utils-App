export default function Alert({ message, onClose }) {
  return (
    <div
      className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 my-1 rounded relative flex items-center justify-between"
      role="alert"
    >
      <span className="flex items-center">
        {/* <svg
          className="fill-current w-6 h-6 text-orange-500 mr-2"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M10 15a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm0-4.978a.912.912 0 110-1.824.912.912 0 010 1.824zm.625 1.615L10.06 9.89a1 1 0 10-1.12 0l-.565.744a1 1 0 000 1.24l1.063 1.365c.45.577 1.217.577 1.667 0l1.064-1.365a1 1 0 000-1.24zm-6.21-3.35a7 7 0 1112.34 0 7 7 0 01-12.34 0zM10 0C4.48 0 0 4.48 0 10s4.48 10 10 10 10-4.48 10-10S15.52 0 10 0z" />
        </svg> */}
        <span><strong>Success: </strong> {message}</span>
      </span>
      <button
        onClick={onClose}
        className="text-orange-500 hover:text-green-700 focus:outline-none"
      >
        <svg
          className="fill-current h-6 w-6"
          role="button"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M14.348 14.849a1 1 0 01-1.414 0L10 11.414l-2.934 3.435a1 1 0 01-1.414-1.415l2.934-3.435L5.645 6.707a1 1 0 011.414-1.414L10 8.586l2.934-3.435a1 1 0 011.414 1.414l-2.934 3.435 2.934 3.435a1 1 0 010 1.414z" />
        </svg>
      </button>
    </div>
  );
}
