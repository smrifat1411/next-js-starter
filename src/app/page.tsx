export default async function Home() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await response.json();

  return (
    <div className="container mx-auto px-4 py-16">
      <h1>Home page</h1>
    </div>
  );
}
