import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/profile")({
  component: Profile,
});

function Profile() {
  return (
    <div className="max-w-3xl mx-auto mt-6 text-2xl text-primary flex flex-col gap-4">
      <h2 className="text-indigo-700 text-2xl font-semibold">Profile</h2>
    </div>
  );
}
