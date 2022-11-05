import { useState } from "react";

const Footer = () => {
  const [openFeedbackModal, setOpenFeedbackModal] = useState(false);

  const closeFeedbackModal = (e) => {
    if (e.target.className.includes("fixed")) {
      setOpenFeedbackModal(false);
    }
  };

  return (
    <footer className="shadow-md shadow-gray-200 bg-[#FBFBFB] py-4 border-t-2 border-gray-200">
      <div className="w-[82%] mx-auto flex items-center">
        <div className="flex-1 mt-4">
          <h2 className="text-2xl font-bold text-title">Tentang</h2>
          <p className="text-body mt-1">
            Company’s SiBelanja was built by internship Immanuel High
            Schoole-commerce for a task, Development, maintaining for each
            productfor who wants buy or sell any product or their things.
          </p>
          <p className="text-lg mt-3  font-normal text-body">
            Punya Pertanyaan?
            <button
              onClick={() => setOpenFeedbackModal(true)}
              className="text-button font-medium underline"
            >
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
      {openFeedbackModal && (
        <div
          onClick={closeFeedbackModal}
          className="w-full bg-wrapper h-screen fixed top-0 left-0"
        >
          <div className="absolute top-[50%] -translate-y-[50%] left-[50%] -translate-x-[50%] bg-white rounded-md py-5 px-5">
            <h3 className="text-center text-xl font-bold">Feedback</h3>
            <p className="text-center text-sm font-bold mt-2 mb-4">
              Anda punya pertanyaan untuk kami?
            </p>
            <textarea className="w-[330px] h-[150px] rounded-sm resize-none border border-gray-400 outline-none block"></textarea>
            <div className="text-center flex items-center gap-x-3">
              <button className="bg-button text-white mt-4 rounded-md py-2 px-5 flex-1">
                Kirim
              </button>
              <button
                onClick={() => setOpenFeedbackModal(false)}
                className="bg-red-500 text-white mt-4 rounded-md py-2 px-5 flex-1"
              >
                Batalkan
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};

export default Footer;
