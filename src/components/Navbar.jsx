export default function Navbar() {
  return (
    <header className="flex justify-between items-center p-4 shadow-xl shadow-grey-200">
      {/* brand logo */}
      <h3 className="text-2xl font-bold">Nikvana</h3>
      {/* nav links */}
      <nav className="flex gap-5">
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Contact us</a>
      </nav>
      {/* cta */}
      <button className="bg-black text-white px-4 py-1.5 rounded-4xl font-medium">
        Get started
      </button>
    </header>
  );
}
