export default function Form() {
  return (
    <form className="space-y-5 bg-white shadow p-10 rounded-lg">
        <div className="grid grid-cols-1 gap-3">
            <label htmlFor="category">Categorìa:</label>
            <select
                name="category"
                id="category"
                className="border border-slate-300 p-2 rounded-lg w-full bg-white"
            >
                <option value=""></option>
            </select>
        </div>
    </form>
  );
}
