const WrapperModal = ({ children, title, closeModal }) => {
  return (
    <div
      onClick={(e) => closeModal(e, title)}
      className="w-full fixed top-0 left-0 h-screen bg-wrapper"
    >
      {children}
    </div>
  );
};

export default WrapperModal;
