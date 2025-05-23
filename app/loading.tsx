const loading = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center">
      <div className="w-[120px] h-[120px] animate-spin">
        <div className="h-full w-full border-[6px] border-t-primary-500 border-b-primary-500 rounded-[50%]"></div>
      </div>
    </div>
  );
};

export default loading;
