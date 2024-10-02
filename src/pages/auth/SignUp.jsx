import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { form_fields } from "@/lib/constants";
import { signUpSchema } from "@/lib/validators";
import { FormInput, Loader } from "@/components";
import { useSignup } from "@/hooks/internals";


export const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: zodResolver(signUpSchema)
  });

  const { handleSignup, isCreatingAccount } = useSignup();

  return (
    <form
      className="w-full space-y-4"
      acceptCharset="utf-8"
      onSubmit={handleSubmit(handleSignup)}
    >
      {form_fields.signUp().map(field => {
        return (
          <FormInput
            key={field.name}
            field={field}
            register={register}
            errors={errors}
          />
        );
      })}

      <button
        className="btn-base bg-blue-500 text-white text-lg rounded-xl hover:bg-blue-600"
        type="submit"
        disabled={isCreatingAccount}
      >
        {isCreatingAccount ? (
          <p className="flex-center gap-2">
            <Loader size={30} />
            <span>Creating account..</span>
          </p>
        ) : (
          "Sign up"
        )}
      </button>
    </form>
  );
};
