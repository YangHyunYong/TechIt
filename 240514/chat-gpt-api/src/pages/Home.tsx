import { ChangeEvent, FC, FormEvent, useState } from "react";

const Home: FC = () => {
  const [content, setContent] = useState<string>("");

  const onSubmitChat = (e: FormEvent) => {
    e.preventDefault();
    console.log(e);
  };

  return (
    <div>
      <form onSubmit={onSubmitChat}>
        <input
          type="text"
          title="text"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        ></input>
        <input type="submit" value="질문하기"></input>
      </form>
    </div>
  );
};

export default Home;
