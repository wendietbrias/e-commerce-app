import { useSelector } from "react-redux";

const Alert = () => {
  const alert = useSelector((state) => state.alert);

  return (
    <div
      className={`${alert?.variant} flex items-center justify-between py-2 px-3 rounded-md mb-6`}
    >
      <h4 className={`${alert?.textVariant} font-semibold text-md`}>
        {alert?.message}
      </h4>
    </div>
  );
};

export default Alert;
