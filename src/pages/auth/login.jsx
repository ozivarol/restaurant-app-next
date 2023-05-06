import { useFormik } from "formik";
import Title from "@/components/ui/Title";
import Input from "@/components/form/Input";
import { loginSchema } from "@/schema/schemas";
import { useSession, signIn } from "next-auth/react";
import Link from "next/link";
const Login = () => {
  const { data: session } = useSession();
  console.log(session);
  const onSubmit = async (values, actions) => {
    await new Promise((resolve) => setTimeout(resolve, 4000));
    actions.resetForm();
  };
  const { values, errors, touched, handleSubmit, handleChange, handleBlur } =
    useFormik({
      initialValues: {
        email: "",
        password: "",
      },
      onSubmit,
      validationSchema: loginSchema,
    });

  const inputs = [
    {
      id: 1,
      name: "email",
      type: "email",
      placeholder: "Your Email Address",
      value: values.email,
      errorMessage: errors.email,
      touched: touched.email,
    },
    {
      id: 2,
      name: "password",
      type: "password",
      placeholder: "Your Password",
      value: values.password,
      errorMessage: errors.password,
      touched: touched.password,
    },
  ];
  return (
    <div className="container mx-auto">
      <form
        className="flex flex-col items-center my-20 md:w-1/2 w-full mx-auto"
        onSubmit={handleSubmit}
      >
        <Title addClass="text-[3rem] mb-6 font-dancing">Login</Title>
        <div className="flex flex-col gap-y-3 w-full">
          {inputs.map((input) => (
            <Input
              key={input.id}
              {...input}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          ))}
        </div>
        <div className="flex flex-col w-full gap-y-3 mt-6">
          <button className="btn-primary" type="submit">
            LOGIN
          </button>
          <button
            className="btn-primary !bg-secondary"
            type="button"
            onClick={() => signIn("github")}
          >
            <i className="fa fa-github mr-2 text-lg"></i>
            GITHUB
          </button>
          <button
            className="btn-primary !bg-secondary"
            type="button"
            onClick={() => signIn("google")}
          >
            <i className="fa fa-google mr-2 text-lg"></i>
            GOOGLE
          </button>
          <Link href="/auth/register">
            <span className="text-sm underline cursor-pointer text-secondary">
              Do you no have a account?
            </span>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
