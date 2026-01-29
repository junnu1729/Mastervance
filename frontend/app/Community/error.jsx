// app/error.tsx
"use client";

export default function Error({ error, reset }) {
  return (
    <div className="min-h-screen flex items-center justify-center flex-col">
      <h2 className="text-2xl font-bold mb-4">Something went wrong</h2>
      <button
        onClick={() => reset()}
        className="px-4 py-2 bg-blue-600 text-white rounded"
      >
        Try again
      </button>
    </div>
  );
}
