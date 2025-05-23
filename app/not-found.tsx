export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center text-center py-24">
      <h1 className="text-5xl font-bold mb-4">404</h1>
      <p className="text-lg text-gray-600 mb-6">
        This page could not be found.
      </p>
      <a href="/" className="text-blue-500 underline">
        Go to homepage
      </a>
    </div>
  );
}
