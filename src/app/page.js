import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-purple-500 to-blue-600 p-6">
      <h1 className="text-5xl font-bold text-white mb-8 drop-shadow-lg">
        Welcome to Recipe App
      </h1>
      <Link href="/recipe-list">
        <span className="bg-white text-blue-700 text-lg font-semibold py-3 px-8 rounded-lg shadow-lg hover:bg-blue-700 hover:text-white transition-all duration-300 ease-in-out transform hover:scale-105">
          Explore Recipes
        </span>
      </Link>
    </div>
  );
}
