import Link from 'next/link';

function Posts({ posts }) {
  return (
    <div>
      {posts.map((item) => (
        <li key={item.id}>
          <Link href={`/posts/${item.id}`}>{item.title}</Link>
        </li>
      ))}
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5');
  const posts = await res.json();

  return {
    props: {
      posts,
    },
  };
}

export default Posts;
