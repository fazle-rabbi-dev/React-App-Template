import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { form_fields } from "@/lib/constants";
import { signInSchema } from "@/lib/validators";
import { FormInput, Loader } from "@/components";
import { useLogin } from "@/hooks/internals";

export const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: zodResolver(signInSchema)
  });

  const { handleEmaiPasswordLogin, isLogining } = useLogin();

  const params = new URLSearchParams(window.location.search);
  const clickSource = params.get("source");

  return (
    <>
      {clickSource === "add_resource" && (
        <div class="mb-6 bg-gradient-to-r from-orange-100 to-yellow-100 text-orange-600 text-lg p-4 rounded-lg shadow-md flex items-center justify-center">
          ⚠ You must sign in to submit a new resource
        </div>
      )}
      <form
        className="w-full space-y-4"
        acceptCharset="utf-8"
        onSubmit={handleSubmit(handleEmaiPasswordLogin)}
      >
        {form_fields.signIn().map(field => {
          return (
            <FormInput
              field={field}
              register={register}
              errors={errors}
            />
          );
        })}

        <button
          className="btn-base btn-primary rounded-lg"
          type="submit"
          disabled={isLogining}
        >
          {isLogining ? (
            <p className="flex-center gap-2">
              <Loader size={30} />
              <span>Logining ..</span>
            </p>
          ) : (
            "Login"
          )}
        </button>
      </form>
    </>
  );
};
