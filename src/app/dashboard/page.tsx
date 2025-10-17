const DashboardPage = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
  const data = await response.json();

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold">Loading Test Page</h1>
      <p>Loaded: {data.title}</p>
    </div>
  );
};

export default DashboardPage;
