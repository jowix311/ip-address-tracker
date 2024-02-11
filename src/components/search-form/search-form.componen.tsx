import { useForm } from "react-hook-form";
import IconArrow from "../../assets/icon-arrow.svg";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

//step 1 - create schema for zod
const SearchFormSchema = z.object({
  ipAddress: z
    .string()
    .min(1, "IP address is required")
    .regex(/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/, "Invalid IP address"), //Copilot generated this one! Cool!
});
//step 2- create type from zod schema
type SearchFormSchemaType = z.infer<typeof SearchFormSchema>;

const SearchForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SearchFormSchemaType>({
    //step 3 - zod - used type created as Generic
    resolver: zodResolver(SearchFormSchema), //step 4 - add zod resolver to hook form
  });

  const onFormSubmit = (data: SearchFormSchemaType) => {
    console.log(data);
  };

  return (
    <div className="pb-6">
      <form noValidate onSubmit={handleSubmit(onFormSubmit)} className="w-100">
        <div className="grid grid-cols-[1fr_auto]">
          <input
            type="text"
            className={`font-bas e block w-full  rounded-bl-xl rounded-tl-xl border p-4  font-rubik  ${errors.ipAddress ? "border-red-400 focus:outline-red-400 active:border-red-400" : "border-black"}`}
            placeholder="Enter IP"
            defaultValue=""
            {...register("ipAddress")}
          />
          <button
            className="rounded-br-xl rounded-tr-xl bg-black p-5"
            type="submit"
          >
            <img src={IconArrow} alt="icon arrow" />
          </button>
        </div>

        <div className="absolute">
          {errors.ipAddress && (
            <span className="text-red-400">{errors.ipAddress.message}</span>
          )}
        </div>
      </form>
    </div>
  );
};

export default SearchForm;
