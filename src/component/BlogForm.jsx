import { Link } from "react-router";
import { useTranslation } from "react-i18next";

export const BlogForm = () => {
  const { t } = useTranslation();

  
  const blogs = t("blog.posts", { returnObjects: true }) || [];

  return (
    <div className="relative h-[80vh] bg-cover bg-center text-gray-300 min-h-screen px-6 py-10">
      <div className="max-w-6xl mx-auto">
        
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-white mb-2">
            {t("blog.title")}
          </h1>
          <p className="text-gray-400">{t("blog.description")}</p>
        </div>

        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {Array.isArray(blogs) && blogs.length > 0 ? (
            blogs.map((blog) => (
              <div
                key={blog.id}
                className="bg-[#1a1a1a] rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300"
              >
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-48 object-cover"
                />

                <div className="p-4">
                  <h2 className="text-lg font-semibold text-white mb-2">
                    {blog.title}
                  </h2>
                  <p className="text-sm text-gray-400 mb-3">{blog.excerpt}</p>
                  <Link
                    to={`/blog/${blog.id}`}
                    className="text-orange-400 hover:underline text-sm font-medium"
                  >
                    {t("blog.readMore")}
                  </Link>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-400 col-span-3">
              {t("blog.noPosts", "No posts available at the moment.")}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};
