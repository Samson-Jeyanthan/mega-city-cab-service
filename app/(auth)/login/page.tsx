import { LoginForm } from "@/components/forms";

const LoginPage = () => {
  return (
    <section className="min-h-screen w-full flex-center">
      <div className="flex flex-col gap-6 w-1/5 items-center">
        <h1 className="text-3xl font-bold">Customer Login Page</h1>
        <LoginForm />
      </div>
    </section>
  );
};

export default LoginPage;
