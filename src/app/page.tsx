export default async function Home() {
  // Simulate API call for loading test
  await fetch('https://jsonplaceholder.typicode.com/posts');

  return (
    <div className="container mx-auto px-4 py-16">
      <h1>Home page</h1>
    </div>
  );
}
