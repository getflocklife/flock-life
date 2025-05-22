import { useEffect } from "react";

export default function FlockLifeLanding() {
  useEffect(() => {
    const timeout = setTimeout(() => {
      window.location.href = "/app";
    }, 5000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="bg-yellow-100 min-h-screen flex flex-col items-center justify-center p-8 text-center">
      <div className="flex flex-col items-center gap-4 max-w-xl">
        <img
          src="/icons/flock-icon-192.png"
          alt="Flock Life Icon"
          className="w-24 h-24 rounded-full"
        />
        <h1 className="text-5xl font-bold text-gray-800">Flock Life</h1>
        <p className="text-lg text-gray-700 max-w-md">
          🐓 The ultimate app for backyard chicken keepers. Track your flock's egg count, set coop care reminders, and keep every hen happy.
        </p>
        <img
          src="/images/flock-og.jpg"
          alt="Flock Life Preview"
          className="rounded-xl shadow-lg w-full max-w-md"
        />
        <button
          className="text-white bg-yellow-500 hover:bg-yellow-600 text-lg px-6 py-3 mt-4 rounded"
          onClick={() => (window.location.href = "/app")}
        >
          🚀 Launch the App Now
        </button>
        <p className="mt-4 text-sm text-gray-600 italic">
          Or sit tight – we’ll take you there in 5 seconds...
        </p>
        <p className="text-sm text-gray-500">
          Add it to your homescreen for the best experience.
        </p>
      </div>
    </div>
  );
}
