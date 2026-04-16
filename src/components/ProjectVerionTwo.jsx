const ProjectVerionTwo = () => {
  return (
    <>
      <div className="bg-[#1a1a18] border border-[#3a3a38]/50 rounded-lg p-4 max-w-[380px]">
        {/* <!-- Header --> */}
        <div className="flex items-center justify-between mb-2.5">
          <div className="flex items-center gap-1">
            <span className="text-base font-normal text-[#F1EFE8] tracking-[0.02em] font-sans">
              Product
            </span>
            <span className="text-base font-bold text-[#1a1a18] bg-[#F1EFE8] px-2 py-0.5 rounded font-sans tracking-[0.06em] uppercase">
              Store
            </span>
          </div>
          <span className="text-[11px] px-2 py-0.5 rounded-full bg-[#3a6629] text-[#fdfdfd] border border-[#3a3a38]/50">
            side project
          </span>
        </div>

        {/* <!-- Description --> */}
        <p className="mb-2.5 text-xs text-[#888780] leading-relaxed py-3">
          A simple storefront app where users can browse products by category
          and add items to a shopping cart.
        </p>

        {/* <!-- Tech Tags --> */}
        <div className="flex flex-wrap gap-1.5 pb-3">
          <span className="text-[11px] px-2 py-0.5 rounded-full bg-[#3e7d8b] text-[#ffffff] border border-[#3a3a38]/50">
            React.js
          </span>
          <span className="text-[11px] px-2 py-0.5 rounded-full bg-[#2b567e] text-[#fafafa] border border-[#3a3a38]/50">
            Tailwind CSS
          </span>
          <span className="text-[11px] px-2 py-0.5 rounded-full bg-[#62326e] text-[#ffffff] border border-[#3a3a38]/50">
            FakeStore API
          </span>
          <span className="text-[11px] px-2 py-0.5 rounded-full bg-[#0e82d4] text-[#ffffff] border border-[#3a3a38]/50">
            JavaScript
          </span>
        </div>

        {/* <!-- Stats --> */}
        <div className="border-t border-[#2C2C2A]/50 pt-2.5 flex gap-4">
          <div className="text-center">
            <p className="text-[15px] font-medium text-[#F1EFE8] m-0">4</p>
            <p className="text-[11px] text-[#5F5E5A] m-0">categories</p>
          </div>
          <div className="text-center">
            <p className="text-[15px] font-medium text-[#F1EFE8] m-0">20+</p>
            <p className="text-[11px] text-[#5F5E5A] m-0">products</p>
          </div>
          <div className="text-center">
            <p className="text-[15px] font-medium text-[#F1EFE8] m-0">Cart</p>
            <p className="text-[11px] text-[#5F5E5A] m-0">add to cart</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectVerionTwo;
