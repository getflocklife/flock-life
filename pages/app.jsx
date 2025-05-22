export default function MainApp() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-6 bg-yellow-100 p-8 text-center">
      <h1 className="text-4xl font-bold text-gray-800">🐔 Welcome to Flock Life App!</h1>
      <p className="text-lg text-gray-700 max-w-xl">
        This is your flock’s dashboard. Track eggs, set reminders, and keep your hens happy!
      </p>
      <img 
        src="/images/flock-og.jpg" 
        alt="Flock Life Preview" 
        className="w-full max-w-md rounded-xl shadow-lg"
      />
    </div>
  );
}
