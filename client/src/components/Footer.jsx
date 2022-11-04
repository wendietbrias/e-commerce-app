const Footer = () => {
  return (
    <footer className="shadow-md shadow-gray-200 bg-[#FBFBFB] py-4 border-t-2 border-gray-200">
      <div className="w-[82%] mx-auto flex items-center">
        <div className="flex-1 mt-4">
          <h2 className="text-2xl font-bold text-title">Tentang</h2>
          <p className="text-body mt-1">
            Company’s SiBelanja was built by internship Immanuel High
            School e-commerce for a task, Development, maintaining for each
            product for who wants buy or sell any product or their things.
          </p>
          <p className="text-lg mt-3  font-normal text-body">
            Punya Pertanyaan?
            <button className="text-button font-medium underline">
              Hubungi Kami
            </button>
          </p>
        </div>
        <div className="ml-12 flex flex-col items-center">
          <img src="assets/kucing.svg" alt="Neko" className="w-[270px]" />
          <h4 className="text-button font-semibold text-2xl mt-3">
            Discover’s SiBelanja Company
          </h4>
          <p className="font-bold text-sm mt-3 text-title">
            @ 2022 - 2023, PT. Kita Serba Digital.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
