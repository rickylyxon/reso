export default function Button({ label,type, onClick }) {
    return (
      <div className="py-2 flex justify-center">
        <button
          type={type}
          className="cursor-pointer text-white bg-[#EB5A3C] font-medium rounded-md text-sm px-5 py-2.5 text-center my-2 size-full hover:bg-[#BE3144]"
          onClick={onClick}
        >
          {label}
        </button>
      </div>
    );
  }

  //#E17564
//#EB5A3C