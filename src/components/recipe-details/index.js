import Link from "next/link";

export default function RecipeDetailsItem({ getRecipeDetails }) {
  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-500 to-blue-600 p-6">
      <div className="lg:max-w-6xl max-w-2xl mx-auto">
        <Link href="/recipe-list">
          <span className="inline-block mb-6 bg-white text-blue-700 text-sm font-semibold py-2 px-6 rounded shadow-lg hover:bg-blue-700 hover:text-white transition-all duration-300 ease-in-out transform hover:scale-105">
            Go to Recipe List
          </span>
        </Link>

        <div className="grid items-start grid-cols-1 lg:grid-cols-2 gap-10 bg-white p-8 rounded-lg shadow-lg">
          <div className="w-full lg:sticky top-0 sm:flex justify-center">
            <img
              src={getRecipeDetails?.image}
              alt={getRecipeDetails?.name}
              className="w-4/5 rounded-lg object-cover shadow-lg transform hover:scale-105 transition-transform duration-300 ease-in-out"
            />
          </div>
          <div>
            <h2 className="text-4xl font-extrabold text-gray-900 mb-6">
              {getRecipeDetails?.name}
            </h2>
            <div className="mb-4">
              <p className="text-2xl text-gray-700">
                {Array.isArray(getRecipeDetails?.mealType) && getRecipeDetails?.mealType[0] || 'Unknown meal type'}
              </p>
            </div>
            <div className="mb-4">
              <p className="text-xl text-gray-800">
                {getRecipeDetails?.cuisine || 'Unknown cuisine'}
              </p>
            </div>
            <div className="mb-6">
              <h3 className="text-lg font-bold text-gray-700">Ingredients</h3>
              <ul className="space-y-3 list-disc mt-4 pl-5 text-sm text-gray-700">
                {getRecipeDetails?.ingredients?.map((item, index) => (
                  <li key={index}>{item}</li>
                )) || <li>No ingredients listed</li>}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
