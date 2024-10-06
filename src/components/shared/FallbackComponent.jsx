export function FallbackComponent({ error, resetErrorBoundary }) {
  // Call resetErrorBoundary() to reset the error boundary and retry the render.

  return (
    <div className="bg-white-50 shadow rounded-2xl m-10 p-10">
      <p>Something went wrong:</p>
      <p className="break-all" style={{ color: "red" }}>{error.message}</p>
    </div>
  );
}
