const WorkTogetherSection: React.FC = () => {
  return (
    <section className="md:my-[6.25rem] my-8">
      <div className="container mx-auto px-4 py-0">
        <div className="w-full min-h-[30rem] h-full relative bg-[linear-gradient(#2f5478_100%,#22405c_100%)] rounded-3xl overflow-hidden flex items-center">
          <img
            src="/img/lines-vector-2.svg"
            alt="lines"
            className="absolute top-0 inset-x-0 w-full h-[12rem] object-cover"
          />
          <img
            src="/img/lines-vector-2.svg"
            alt="lines"
            className="absolute bottom-0 inset-x-0 w-full h-[12rem] rotate-180 object-cover"
          />
          <div className="flex md:flex-nowrap md:gap-5 gap-16 flex-wrap lg:px-[5.625rem] md:px-16 px-4 relative z-20 md:py-0 py-16 justify-between w-full">
            <div className="md:w-[34.375rem] w-full space-y-5">
              <p className="text-white lg:text-[4rem] md:text-5xl text-[2.5rem] lg:leading-[4.75rem] md:leading-tight leading-[3rem]">
                Transforming your{" "}
                <span className="font-semibold">Ideas into reality</span>
              </p>
              <span className="md:text-xl md:leading-[1.875rem] text-base leading-6 font-medium text-white">
                Let's build something extraordinary together to captivate your
                audience.
              </span>
            </div>
            <div className="md:w-auto w-full md:block grid place-content-center">
              <div className="w-[15.625rem] h-[15.625rem] rounded-full grid place-content-center border-2 border-[#edf2f5] relative before:contents-[''] before:bg-white before:w-[15.625rem] before:h-[15.625rem] before:absolute before:-z-10 before:rounded-full before:-left-[80%] before:-top-48 before:transition-all before:ease-in-out before:duration-300 hover:before:left-0 hover:before:top-0 overflow-hidden cursor-pointer group">
                <span className="text-2xl font-medium leading-9 text-white group-hover:text-black transition-all ease-in-out duration-300 max-w-32 text-center">
                  Let's Work Together!
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkTogetherSection;
