import { useState, useRef } from "react";
import Layout from "@/components/Layout";
import { projectsData } from "@/data/projects";
import { ExternalLink, ImageOff } from "lucide-react";
import { SearchInput } from "@/components/ui/search";

export default function OurProjects() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [failedImages, setFailedImages] = useState<Set<string>>(new Set());
  const [searchQuery, setSearchQuery] = useState<string>("");
  const searchInputRef = useRef<HTMLInputElement>(null);

  const categories = [
    "All",
    ...Array.from(new Set(projectsData.map((p) => p.category))),
  ];

  let filteredProjects =
    selectedCategory === "All"
      ? projectsData
      : projectsData.filter((p) => p.category === selectedCategory);

  // Apply search filter
  if (searchQuery.trim()) {
    const query = searchQuery.toLowerCase();
    filteredProjects = filteredProjects.filter(
      (p) =>
        p.title.toLowerCase().includes(query) ||
        p.description.toLowerCase().includes(query) ||
        p.category.toLowerCase().includes(query) ||
        p.technologies.some((t) => t.toLowerCase().includes(query))
    );
  }

  const handleImageError = (projectId: string) => {
    setFailedImages((prev) => new Set([...prev, projectId]));
  };

  const handleSearchClear = () => {
    setSearchQuery("");
  };

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-slate-950 to-slate-900 py-20 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-white mb-4">Our Projects</h1>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              Explore our portfolio of successful projects across various industries and technologies
            </p>
          </div>

          {/* Search and Category Filter */}
          <div className="mb-12 max-w-4xl mx-auto">
            <div className="mb-4">
              <SearchInput
                ref={searchInputRef}
                placeholder="Search by name, category, technology, or description..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onClear={handleSearchClear}
              />
            </div>

            {/* Category Filter Grid */}
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all text-sm ${
                    selectedCategory === category
                      ? "bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-950 shadow-lg shadow-cyan-400/50"
                      : "bg-slate-800 text-slate-300 hover:bg-slate-700 border border-slate-700 hover:border-cyan-400/50"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="group bg-slate-800 rounded-lg overflow-hidden border border-slate-700 hover:border-cyan-400/50 transition-all hover:shadow-lg hover:shadow-cyan-400/20"
              >
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden bg-gradient-to-br from-slate-800 to-slate-900">
                  {failedImages.has(project.id) ? (
                    <div className="w-full h-full flex items-center justify-center bg-slate-800">
                      <ImageOff className="w-12 h-12 text-slate-600" />
                    </div>
                  ) : (
                    <>
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        onError={() => handleImageError(project.id)}
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    </>
                  )}
                </div>

                {/* Project Content */}
                <div className="p-6">
                  {/* Category Badge */}
                  <div className="mb-3">
                    <span className="inline-block px-3 py-1 bg-cyan-400/20 text-cyan-400 rounded-full text-xs font-semibold">
                      {project.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-white mb-2">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-400 text-sm mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-slate-700 text-slate-300 text-xs rounded"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="px-2 py-1 bg-slate-700 text-slate-300 text-xs rounded">
                          +{project.technologies.length - 3}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* View Project Link */}
                  {project.link && (
                    <a
                      href={project.link}
                      className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-semibold text-sm transition-colors"
                    >
                      View Project
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* No Results */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-slate-400 text-lg">
                {searchQuery.trim()
                  ? `No projects found matching "${searchQuery}".`
                  : "No projects found in this category."}
              </p>
              {(searchQuery.trim() || selectedCategory !== "All") && (
                <button
                  onClick={() => {
                    setSearchQuery("");
                    setSelectedCategory("All");
                    searchInputRef.current?.focus();
                  }}
                  className="mt-4 px-4 py-2 bg-slate-800 text-slate-300 hover:bg-slate-700 rounded-lg transition-colors"
                >
                  Clear filters
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
}
