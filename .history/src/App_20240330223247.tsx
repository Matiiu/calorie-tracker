import Header from "./components/Header";
import Form from "./components/Form";
export default function App() {
  return (
    <>
      <Header />

      <section className="bg-lime-500 py-20 px-5">
        <div className="max-w-4xl mx-auto">
          <Form />
        </div>
      </section>
    </>
  );
}
