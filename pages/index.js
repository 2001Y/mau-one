import { resolve, basename } from "path";
const categoryName = basename(resolve(__dirname, ".."));

export default function HomePage() {
  return <h1>Hello World</h1>;
}

export async function getServerSideProps() {
  var min = 1;
  var max = 27;
  var ran = Math.floor(Math.random() * (max + 1 - min)) + min;
  return {
    redirect: {
      statusCode: 302,
      destination: "/img/under/" + ran + ".JPG", // リダイレクト先
    },
  };
}
