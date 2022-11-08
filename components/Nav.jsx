export default function Header() {
  return (
    <nav className="flex justify-between px-20 py-4 sticky top-0 backdrop-blur backdrop-saturate-150 border-b bg-white bg-opacity-40">
      <text className="font-semibold text-2xl">CN RECRUITMENT</text>
      <div className="space-x-6 underline-offset-4 hidden md:block">
        <span className="underline">Home</span>
        <span className="hover:underline">About</span>
        <span className="hover:underline">Links</span>
        <span className="hover:underline">Contact</span>
        <button className="px-4 py-1 border-2 rounded-lg hover:bg-gray-50">
          Sign Up
        </button>
      </div>
    </nav>
  );
}
