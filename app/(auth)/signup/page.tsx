import { SignupForm } from "@/components/forms";

const SignupPage = () => {
  return (
    <section className="min-h-screen w-full flex-center bg-slate-900">
      <div className="flex flex-col gap-6 w-[40%] p-6 rounded-xl bg-slate-50 items-center">
        <h1 className="text-3xl font-bold">Customer Signup Page</h1>
        <SignupForm />
      </div>
    </section>
  );
};

export default SignupPage;
