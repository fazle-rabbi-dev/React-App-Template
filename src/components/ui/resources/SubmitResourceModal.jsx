import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { X } from "lucide-react";

import { form_fields } from "@/lib/constants";
import { submitResourceSchema } from "@/lib/validation";
import { FormInput } from "@/components";


export const SubmitResourceModal = ({ toggleModal }) => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: zodResolver(submitResourceSchema)
  });
  
  const handleSubmitResource = (data) => {
    console.log(data)
  }
  
  return(
      <div className="h-screen w-full flex-center fixed top-0 left-0 bottom-0 right-0 px-6 py-10 bg-black-50/40 backdrop-blur">
        <div className="h-full w-full max-w-5xl max-h-[70vh] bg-white-50 rounded-lg py-6 px-4 overflow-scroll">
          <div className="flex-end mb-4">
            <button
            onClick={toggleModal}
            className="text-2xl bg-gray-50 p-2 rounded-lg"
            type="button"
          >
            <span>
              <X />
            </span>
          </button>
        </div>
          
          <h2 className="heading4">
            🎉 Submit your favourite resource
          </h2>
          
          <form 
            className="mt-4 space-y-4" 
            accept-charset="utf-8"
            onSubmit={handleSubmit(handleSubmitResource)}
          >
            {
              form_fields.submitResource().map(field => (
                <FormInput field={field} register={register} errors={errors} />
              ))
            }
            
            <button className="mt-4 btn-base btn-primary rounded-md">
              Submit
            </button>
          </form>
        </div>
      </div>
    )
};
