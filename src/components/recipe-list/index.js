import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

export default function RecipeList({ recipeList }) {
  console.log(recipeList);
  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-500 to-blue-600 p-6">
      <div className="p-4 mx-auto lg:max-w-6xl md:max-w-4xl sm:max-w-full">
        <h2 className="text-4xl font-bold text-white mb-12 text-center drop-shadow-lg">
          Recipes
        </h2>
        <Link href="/" className="block mb-8 text-center">
          <span className="inline-block bg-white text-blue-700 font-semibold py-2 px-6 rounded shadow-lg hover:bg-blue-700 hover:text-white transition-all duration-300 ease-in-out transform hover:scale-105">
            Go Home
          </span>
        </Link>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {recipeList && recipeList.length > 0
            ? recipeList.map((recipe) => (
                <Link key={recipe.id} href={`/recipe-list/${recipe.id}`}>
                  <Card>
                    <CardContent className="bg-white rounded-md overflow-hidden shadow-md cursor-pointer hover:scale-105 transition-transform duration-300 ease-in-out">
                      <div className="w-full aspect-w-16 aspect-h-8 lg:h-80">
                        <img
                          src={recipe.image}
                          alt={recipe.name}
                          className="h-full w-full object-cover object-top"
                        />
                      </div>
                      <div className="p-6">
                        <h3 className="text-lg font-bold text-gray-900">
                          {recipe.name}
                        </h3>
                        <div className="mt-4 flex items-center flex-wrap gap-2">
                          <p className="text-lg text-gray-600">
                            Rating: {recipe.rating}
                          </p>
                          <div className="ml-auto">
                            <p className="text-lg text-gray-600 font-bold">
                              {recipe.cuisine}
                            </p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))
            : <p className="text-white text-center col-span-full">No recipes available.</p>}
        </div>
      </div>
    </div>
  );
}
