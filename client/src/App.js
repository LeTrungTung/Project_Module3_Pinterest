import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomeInNotLogin from "./components/HomeInNotLogin/HomeInNotLogin";
import Register from "./components/Register/Register";
import Login from "./components/Login/Login";
import Register_Login_Layout from "./layout/Register_Login_Layout/Register_Login_Layout";
import CardImage from "./components/CardImage/CardImage";
import DefaultLayout from "./layout/DefaultLayout/DefaultLayout";

function App() {
  const dataImage = [
    {
      id: 1,
      title: "Amazing Rare | eBay",
      description:
        "Item specifics Condition New: A brand-new, unused, unopened, undamaged item in its original packaging (where packaging is ... Read more about the condition New: A brand-new, unused, unopened, undamaged item in its original packaging (where packaging is applicable).",
      urlImage:
        "https://i.pinimg.com/564x/24/d5/df/24d5df9ba39d33e9266c3de14048e5ba.jpg",
      author: "eBay",
      follow: 500,
    },
    {
      id: 2,
      title: "Funny girl",
      description: "Girl in farm.",
      urlImage:
        "https://i.pinimg.com/564x/d7/27/82/d727820bed8d12f55429743579708619.jpg",
      author: "Living",
    },
    {
      id: 3,
      title: "Funny",
      description: "Girl in farm.",
      urlImage:
        "https://i.pinimg.com/236x/3a/01/9f/3a019f9e81f247bc4db81c7b84ba5fc5.jpg",
      author: "Living",
      follow: 100,
    },
    {
      id: 4,
      title: "Funny",
      description: "Girl in farm.",
      urlImage:
        "https://i.pinimg.com/236x/2d/ce/85/2dce85537fc65f52391641e314a6ffc2.jpg",
      author: "Living",
      follow: 300,
    },
    {
      id: 5,
      title: "Hoa giấy",
      description: "thế giới cây cảnh",
      urlImage:
        "https://i.pinimg.com/236x/ce/1e/7c/ce1e7cf9824661db23541655f194f11b.jpg",
      author: "treetheworld",
      follow: 300,
    },
    {
      id: 6,
      title: "Funny",
      description: "Girl in farm.",
      urlImage:
        "https://i.pinimg.com/236x/e3/6a/86/e36a8661674eb35df5c1182568aacc8e.jpg",
      author: "Living",
      follow: 300,
    },
    {
      id: 7,
      title: "Giấy",
      description: "Giay học và viết",
      urlImage:
        "https://i.pinimg.com/236x/8b/03/3f/8b033f4e4e723a6e47e1cea978d86a75.jpg",
      author: "studyishappiness.vn",
      follow: 300,
    },
    {
      id: 8,
      title: "Baby",
      description: "Girl cute beautiful",
      urlImage:
        "https://i.pinimg.com/236x/67/9f/ce/679fce7b3ff79876f388219bf4ac67d0.jpg",
      author: "www.family.com",
      follow: 300,
    },
    {
      id: 9,
      title: "animal",
      description: "hổ rừng",
      urlImage:
        "https://i.pinimg.com/236x/08/8a/56/088a56efead402747100c15edb45cf8f.jpg",
      author: "www.animation.com",
      follow: 300,
    },
    {
      id: 10,
      title: "Funny",
      description: "Girl in farm.",
      urlImage:
        "https://i.pinimg.com/236x/39/82/c7/3982c77f25e2cccf7f30913093a8ff9b.jpg",
      author: "Living",
      follow: 300,
    },
    {
      id: 11,
      title: "Funny",
      description: "Girl in farm.",
      urlImage:
        "https://i.pinimg.com/564x/3a/39/5b/3a395ba2431b10e14c354c7b72c4324a.jpg",
      author: "Living",
      follow: 300,
    },
    {
      id: 12,
      title: "Funny",
      description: "Girl in farm.",
      urlImage:
        "https://i.pinimg.com/236x/8d/7f/ca/8d7fca3e259a1d29c2cccd481afa5a53.jpg",
      author: "nineliving.com",
      follow: 300,
    },
    {
      id: 13,
      title: "Three Hero",
      description: "anh hùng và tham quan",
      urlImage:
        "https://i.pinimg.com/236x/37/20/2a/37202a6d9487d9a5e5ed9b568256fb11.jpg",
      author: "webtree.com",
      follow: 300,
    },
  ];

  return (
    <div className="App">
      <Routes>
        <Route path="/" index element={<HomeInNotLogin />} />
        <Route
          path="/home"
          element={<DefaultLayout dataImage={dataImage} />}
        />

        <Route
          path="/login"
          element={<Register_Login_Layout children={<Login />} />}
        />
        <Route
          path="/register"
          element={<Register_Login_Layout children={<Register />} />}
        />
      </Routes>
    </div>
  );
}

export default App;
