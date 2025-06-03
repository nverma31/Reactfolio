const PageTitle = ({title}) => {
  return (
    <div className="flex flex-col gap-4 w-full py-10 px-4 md:px-10">
      <div className="text-4xl font-bold">{title}</div>
    </div>
  );
};

export default PageTitle;
