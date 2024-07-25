const Banner: React.FC = () => {
  return (
    <section className="lg:mb-[5.68rem] mb-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap max-w-[45.125rem] mx-auto">
          <div className="w-full space-y-4 text-center">
            <h1 className="text-primary font-semibold md:text-[4rem] text-[2.5rem] tracking-[-2%] md:leading-[4.75rem] leading-[3rem]">
              Your Ultimate Resource Hub for Digital Success
            </h1>
            <p className="md:text-2xl font-medium text-primary-faded text-base">
              Explore our comprehensive library of tools and templates for
              developers, designers, marketers, and branding experts.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
