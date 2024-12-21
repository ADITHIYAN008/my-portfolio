const InfoFrame = ({ img, title }) => {
  return (
    <div className=" relative w-[475px] h-[705px] bg-gray-200/5 rounded-3xl border border-gray-300/40">
      <img
        src={img}
        alt={title}
        width={460}
        height={700}
        className="absolute left-[6px] top-2 rounded-2xl"
      />
    </div>
  );
};

export default InfoFrame;
