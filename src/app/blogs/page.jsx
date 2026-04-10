import Link from "next/link";
import React from "react";

const BlogsPage = () => {
  const blogs = [
    {
      id: 1,
      title: "Understanding React Context API",
      author: "Nobin",
      category: "Web Development",
      tags: ["React", "JavaScript", "Frontend"],
      thumbnail: "https://images.unsplash.com/photo-1633356122544-f134324a6cee",
      content:
        "The Context API in React allows you to share state across components without prop drilling. It is useful for global data like authentication, themes, or language settings.",
      publishedDate: "2026-04-01",
      readTime: "5 min",
    },
    {
      id: 2,
      title: "Getting Started with Tailwind CSS",
      author: "Nobin",
      category: "CSS",
      tags: ["Tailwind", "CSS", "Design"],
      thumbnail: "https://images.unsplash.com/photo-1581276879432-15a19d654956",
      content:
        "Tailwind CSS is a utility-first CSS framework that helps you build modern UI quickly. Instead of writing custom CSS, you use predefined classes.",
      publishedDate: "2026-04-02",
      readTime: "4 min",
    },
    {
      id: 3,
      title: "How JavaScript Closures Work",
      author: "Nobin",
      category: "JavaScript",
      tags: ["JS", "Functions", "Advanced"],
      thumbnail: "https://images.unsplash.com/photo-1555066931-4365d14bab8c",
      content:
        "A closure is created when a function remembers its lexical scope even when executed outside that scope. It is widely used in callbacks and data encapsulation.",
      publishedDate: "2026-04-03",
      readTime: "6 min",
    },
    {
      id: 4,
      title: "Building Responsive Layouts with Flexbox",
      author: "Nobin",
      category: "CSS",
      tags: ["Flexbox", "Responsive Design"],
      thumbnail: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
      content:
        "Flexbox is a layout module that makes it easier to design flexible and responsive layouts. It works on a one-dimensional axis and is perfect for aligning items.",
      publishedDate: "2026-04-04",
      readTime: "5 min",
    },
  ];
  return <>
  <h2 className="text-4xl">All Blog here</h2>
  {blogs.map(blog=> <div key={blog.id}>
<h3 className="text-2xl font-bold">{blog.title}</h3>
<Link href={`/blogs/${blog.id}`}>show Details</Link>
  </div>)}
  
  </>;
};

export default BlogsPage;
