import InputBox from "./component/InputBox";

function App() {
  return (
    <>
      <div
        className="w-full bg-cover h-screen flex flex-wrap justify-center items-center bg-no-repeat"
        style={{
          backgroundImage: `url(https://images.pexels.com/photos/1144259/pexels-photo-1144259.jpeg)`,
        }}
      >
        <InputBox />
        <InputBox />
      </div>
    </>
  );
}

export default App;
