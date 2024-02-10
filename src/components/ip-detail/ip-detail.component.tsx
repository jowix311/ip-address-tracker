import { FunctionComponent } from "react";
import IconArrow from "../../assets/icon-arrow.svg";

interface IPInfoProps {
  label: string;
  info: string;
}

const IPDetails = () => {
  const IPInfo: FunctionComponent<IPInfoProps> = ({ label, info }) => {
    return (
      <div className="h-full">
        <div>
          <p className="text-center font-rubik text-xs font-medium uppercase tracking-wide text-darkGray md:text-left ">
            {label}
          </p>
          <p className="break-words pt-1 text-center font-rubik text-xl font-bold md:text-left">
            {info}
          </p>
        </div>
      </div>
    );
  };

  const Divider = () => {
    return <div className="ml-4 mr-4 h-14 border-l border-darkGray"></div>;
  };
  const IPSearchField = () => {
    return (
      <div className="grid grid-cols-[1fr_auto] pb-6">
        <input
          type="text"
          className="font-base rounded-bl-xl rounded-tl-xl p-4 font-rubik"
          placeholder="Enter IP"
        />
        <button className="rounded-br-xl rounded-tr-xl bg-black p-5">
          <img src={IconArrow} alt="icon arrow" />
        </button>
      </div>
    );
  };
  return (
    <section>
      <p className="pb-8 pt-8 text-center font-rubik text-2xl font-bold text-white">
        IP Address Tracker
      </p>
      <IPSearchField />
      <div className="grid w-[320px] items-center justify-center gap-y-4 rounded-2xl bg-white p-4 shadow-lg md:w-[768px] md:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr]  md:p-8">
        <IPInfo label="ip address" info="192.212.174.101" />
        <Divider />
        <IPInfo label="location" info="Brooklyn, NY 100001" />
        <Divider />
        <IPInfo label="Timezone" info="UTC -5:00" />
        <Divider />
        <IPInfo label="ISP" info="Space X Starlink" />
      </div>
    </section>
  );
};

export default IPDetails;
