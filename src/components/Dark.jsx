const Dark = ({ onToggle, dark }) => {
  let label = `rounded-[9999px] cursor-pointer p-3`;
  let mode = `rounded-[9999px] border-4 border-solid border-black p-1 z-10 m-10 flex`;
  let select = `bg-purple-700`;

  return (
    <div
      className={`fixed border-4 dark:border-white border-[#222] bottom-0 right-0 ${mode}`}
    >
      <label
        htmlFor="light"
        id="light"
        onClick={onToggle}
        className={`${label} ${dark ? "" : select}`}
      ></label>
      <label
        htmlFor="dark"
        onClick={onToggle}
        id="dark"
        className={`${label} ${dark ? select : ""} `}
      ></label>
    </div>
  );
};

export default Dark;
