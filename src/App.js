import "./App.css";
import Post from "./Post";

const ANAKIN_IMAGE =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlWOey035wnlxX7w0AzG8s0rQ70cwaT0k1JA&usqp=CAU";

const RAY_IMAGE =
  "https://specials-images.forbesimg.com/imageserve/5e63b3c8e1e617000759130e/960x0.jpg?fit=scale";

const App = () => {
  return (
    <Post
      author={{
        name: "Anakin Skywalker",
        photo: ANAKIN_IMAGE,
        nickname: "@dart_vader",
      }}
      content="WTF? Who is Ray? Why she is Skywalker? Luke...?"
      image={RAY_IMAGE}
      date={"26 лют."}
    />
  );
};

export default App;
