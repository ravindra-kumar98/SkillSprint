export const PrimaryButton = ({ children }) => {
  return (
    <button className="bg-light text-green font-medium text-sm border-1 border-green hover:bg-[#076058] hover:text-dark cursor-pointer px-2 py-1 rounded">
      {children}
    </button>
  );
};
export const SecondaryButton = ({ children }) => {
  return (
    <button className="bg-green text-dark hover:text-dark hover:bg-[#076058] font-medium text-sm border-1 border-green cursor-pointer px-2 py-1 rounded">
      {children}
    </button>
  );
};
