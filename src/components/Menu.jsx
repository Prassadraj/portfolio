export const Menu = (props) => {
  const { onSectionChange, menuOpened, setMenuOpened } = props;

  return (
    <>
      <button
        onClick={() => setMenuOpened(!menuOpened)}
        className="z-20 fixed top-4 right-4 md:top-3.5 md:right-8 p-3  bg-indigo-600 w-9 h-9 md:w-11 md:h-11 rounded-md"
      >
        <div
          className={`bg-white h-0.5 rounded-md w-full transition-all ${
            menuOpened ? "rotate-45  translate-y-0.5" : ""
          }`}
        />
        <div
          className={`bg-white h-0.5 rounded-md w-full my-1 ${
            menuOpened ? "hidden" : ""
          }`}
        />
        <div
          className={`bg-white h-0.5 rounded-md w-full transition-all ${
            menuOpened ? "-rotate-45" : ""
          }`}
        />
      </button>
      <div
        id="menuBg"
        className={`z-10 fixed top-0 right-0 bottom-0 bg-[url('https://te.legra.ph/file/5b6e36a3a6a4577f72168.jpg')] bg-cover bg-center transition-all overflow-hidden flex flex-col
      ${menuOpened ? "w-full md:w-80" : "w-0"}`}
      >
        <div class="grid grid-cols-2 grid-rows-2 gap-6 p-8  absolute bottom-5 left-6">
          <div class="flex items-start bg-white hover:text-white p-2 rounded-lg justify-center text-violet-500 hover:bg-indigo-600 shadow-lg backdrop-blur-lg bg-opacity-40">
            <MenuButton label="About" onClick={() => onSectionChange(0)} />
          </div>
          <div class="flex items-start bg-white hover:text-white p-2 rounded-lg justify-center text-violet-500 hover:bg-indigo-600 shadow-lg backdrop-blur-lg bg-opacity-40">
            <MenuButton label="Skills" onClick={() => onSectionChange(1)} />
          </div>
          <div class="flex items-start bg-white hover:text-white p-2 rounded-lg justify-center text-violet-500 hover:bg-indigo-600 shadow-lg backdrop-blur-lg bg-opacity-60">
            <MenuButton label="Projects" onClick={() => onSectionChange(2)} />
          </div>
          <div class="flex items-start bg-white hover:text-white p-2 rounded-lg justify-center text-violet-500 hover:bg-indigo-600 shadow-lg backdrop-blur-lg bg-opacity-40">
            <MenuButton label="Contact" onClick={() => onSectionChange(3)} />
          </div>
        </div>
      </div>
    </>
  );
};

const MenuButton = (props) => {
  const { label, onClick } = props;
  return (
    <button
      onClick={onClick}
      className="text-2xl font-bold cursor-pointertransition-colors"
    >
      {label}
    </button>
  );
};
