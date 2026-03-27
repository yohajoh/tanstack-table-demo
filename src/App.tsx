import { useReactTable } from "@tanstack/react-table";

const options = {
  columns: "",
  data: "",
  getCoreRowModel: {},
};

function App() {
  // const table = useReactTable(options);
  return (
    <div className="max-w-200 mt-3 mx-auto">
      <h1 className="font-bold text-3xl text-brand">Well come to tanstack table</h1>
    </div>
  );
}

export default App;
