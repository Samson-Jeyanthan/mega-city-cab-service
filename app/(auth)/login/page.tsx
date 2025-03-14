import { LoginForm } from "@/components/forms";

const LoginPage = () => {
  return (
    <section className="min-h-screen w-full flex-center bg-slate-900">
      <div className="flex flex-col gap-6 w-[30%] items-center p-7 rounded-xl bg-slate-50">
        <h1 className="text-3xl font-bold">Customer Login Page</h1>
        <LoginForm />
      </div>
    </section>
  );
};

export default LoginPage;
