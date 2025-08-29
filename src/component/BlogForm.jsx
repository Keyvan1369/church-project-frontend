import { Link } from "react-router";
import { useTranslation } from "react-i18next";

export const BlogForm = () => {
  const { t } = useTranslation("blog");

  const blogs = [                //later from DB
    {
      id: 1,
      title: t("posts.0.title"), // using translation
      excerpt: t("posts.0.excerpt"),
      image: "https://t3.ftcdn.net/jpg/07/74/38/04/360_F_774380481_8GLdvGKPr9LUSYjymYLDLSSQonesNeed.jpg",
    },
    {
      id: 2,
      title: t("posts.1.title"),
      excerpt: t("posts.1.excerpt"),
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQox9eMU-nNKuI2diZB_IGsV-muop01_T2op8iIogX_0Or7xfMufvxG3bCRVEbh0jyDCLQ&usqp=CAU",
    },
    {
      id: 3,
      title: t("posts.2.title"),
      excerpt: t("posts.2.excerpt"),
      image: "https://assets.biola.edu/4396738754672012438/article/614e643dba3ff100019da97c/large_La_fe_y_las_obras_van_juntas__1___1_.jpg",
    },
  ];

  return (
    <div className="min-h-screen bg-[#0f0f0f] text-gray-300 px-6 py-12">
      <section
        className="relative h-[80vh] bg-cover bg-center flex items-center justify-center text-center text-white"
        style={{
          backgroundImage:
            "url('https://churchgrowthmagazine.com/wp-content/uploads/2022/05/Church-Growth-Magazine-Article-Images-6-1280x640.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 max-w-3xl mx-auto px-6">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">
            {t("title")}
          </h1>
          <p className="text-lg md:text-xl text-gray-200 drop-shadow">
            {t("description")}
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto mt-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-[#1a1a1a] rounded-lg shadow-md overflow-hidden hover:shadow-xl transition duration-300"
            >
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-5">
                <h2 className="text-lg font-semibold text-white mb-2">
                  {blog.title}
                </h2>
                <p className="text-sm text-gray-400 mb-3">{blog.excerpt}</p>
                <Link
                  to={`/blog/${blog.id}`}
                  className="text-orange-400 hover:underline text-sm font-medium"
                >
                  {t("readMore")}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
