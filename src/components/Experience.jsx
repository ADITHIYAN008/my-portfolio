const Experience = ({ company, title, year, description }) => {
  return (
    <article>
      <div className="flex justify-between mt-20">
        <h1 className="text-5xl font-medium">{company}</h1>
        <div>
          <div className="mb-6">
            <h1 className="font-medium text-2xl mb-2">{title}</h1>
            <h3 className="w-[27rem] font-medium text-lg text-gray-200/50">
              {year}
            </h3>
          </div>
          <h3 className="w-[27rem] font-normal text-lg text-gray-200/50">
            {description}
          </h3>
        </div>
      </div>
    </article>
  );
};

export default Experience;
