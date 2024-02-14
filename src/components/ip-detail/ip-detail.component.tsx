import { FunctionComponent } from "react";
import SearchForm from "../search-form/search-form.component";
import { useAppSelector } from "../../store/hooks";

interface IPInfoProps {
  label: string;
  info: string;
  isLoading: boolean;
}

const IPDetails = () => {
  const {
    isLoading,
    ipDetail: { ipAddress, location, ispProvider, timeOffset },
  } = useAppSelector((state) => state.ipDetail);

  const IPInfo: FunctionComponent<IPInfoProps> = ({
    isLoading,
    label,
    info,
  }) => {
    return (
      <div className="h-full">
        <div>
          <p className="text-center font-rubik text-xs font-medium uppercase tracking-wide text-darkGray md:text-left ">
            {isLoading ? "--" : label}
          </p>
          <p className="break-words pt-1 text-center font-rubik text-xl font-bold md:text-left">
            {isLoading ? "--" : info}
          </p>
        </div>
      </div>
    );
  };

  const Divider = () => {
    return <div className="ml-4 mr-4 h-14 border-l border-darkGray"></div>;
  };

  return (
    <section>
      <p className="pb-8 pt-8 text-center font-rubik text-2xl font-bold text-white">
        IP Address Tracker
      </p>
      <SearchForm />
      <div className="grid w-[320px] items-center justify-center gap-y-4 rounded-2xl bg-white p-4 shadow-lg md:w-[768px] md:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr]  md:p-8">
        <IPInfo isLoading={isLoading} label="ip address" info={ipAddress} />
        <Divider />
        <IPInfo isLoading={isLoading} label="location" info={location} />
        <Divider />
        <IPInfo
          isLoading={isLoading}
          label="Timezone"
          info={`UTC ${timeOffset}`}
        />
        <Divider />
        <IPInfo isLoading={isLoading} label="ISP" info={ispProvider} />
      </div>
    </section>
  );
};

export default IPDetails;
