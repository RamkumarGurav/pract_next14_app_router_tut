const NotFoundPage = () => {
  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="text-center">
          <h1 className="text-6xl font-semibold text-gray-800 mb-4">404</h1>
          <p className="text-2xl text-gray-600 mb-8">Page Not Found</p>
          <p className="text-gray-500">
            Sorry, the page you are looking for does not exist.
          </p>
        </div>
      </div>
    </>
  );
};

export default NotFoundPage;
