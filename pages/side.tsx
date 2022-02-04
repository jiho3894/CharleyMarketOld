const side = () => {
  return (
    <>
      <div className="rounded-2xl bg-white p-10 shadow-xl">
        <form className="flex flex-col space-y-3">
          <input
            className="peer rounded-xl border border-gray-400 p-1 valid:border-blue-400 invalid:border-red-400"
            type="text"
            required
            placeholder="ID"
          />

          <span className="hidden peer-invalid:block ">ID 입력</span>
          <span className="hidden peer-valid:block ">마자요</span>
          <input type="submit" value="login" />
        </form>
      </div>
      <div className="rounded-2xl bg-white p-10 shadow-xl lg:col-span-2">
        <input
          type="file"
          className="overflow-hidden file:rounded-2xl file:border file:bg-red-400 file:hover:cursor-pointer file:hover:bg-red-600"
        />
        <p className="first-letter:text-3xl first-letter:hover:text-blue-500">
          hello
        </p>
        <details className="">
          <summary className="cursor-pointer select-none">
            What are you doing?
          </summary>
          <span className="">i dont no</span>
          <ul className="list-disc marker:text-blue-400">
            <li>1</li>
            <li>2</li>
          </ul>
        </details>
      </div>
    </>
  );
};

export default side;
