import { Post, PostType } from "./components/Post";
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import styles from "./App.module.css";
import "./global.css";

const posts: PostType[] = [
  {
    id: 1,
    author: {
      avatarUrl:
        "https://images.unsplash.com/photo-1712889316235-7fb9ceebdfc1?q=40&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Lontra Capivara",
      role: "Nadadora semi-profissional",
    },
    content: [
      { type: "paragraph", content: "E ai pessoal!" },
      { type: "paragraph", content: "Nadei pra caramba hoje!" },
      {
        type: "paragraph",
        content: "Se eu continuar assim, viro profissional! 🦦",
      },
      {
        type: "paragraph",
        content: "Acompanhem minha trajetória aqui ó: ↙️",
      },
      { type: "link", content: "#nadandomuito", toWhere: "#" },
    ],
    publishedAt: new Date("2024-04-23 18:30:00"),
  },
  {
    id: 2,
    author: {
      avatarUrl:
        "https://images.unsplash.com/photo-1712743586807-93f857693f3f?q=50&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Capivara Original",
      role: "Bicho legal",
    },
    content: [
      { type: "paragraph", content: "E ai pessoal!" },
      { type: "paragraph", content: "Nadei pra caramba hoje!" },
      {
        type: "paragraph",
        content: "Se eu continuar assim, viro profissional! 🦦",
      },
      {
        type: "paragraph",
        content: "Acompanhem minha trajetória aqui ó: ↙️",
      },
      { type: "link", content: "#nadandomuito", toWhere: "#" },
    ],
    publishedAt: new Date("2024-04-22 19:41:32"),
  },
];

function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => {
            return <Post key={post.id} post={post} />;
          })}
        </main>
      </div>
    </div>
  );
}

export default App;
