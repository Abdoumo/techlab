import { useState, useRef, useMemo } from "react";
import Layout from "@/components/Layout";
import { projectsData } from "@/data/projects";
import { ExternalLink, ImageOff, Menu, X, ChevronLeft, ChevronRight } from "lucide-react";
import { SearchInput } from "@/components/ui/search";
import { ScrollArea } from "@/components/ui/scroll-area";

const ITEMS_PER_PAGE = 12;

export default function OurProjects() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [failedImages, setFailedImages] = useState<Set<string>>(new Set());
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const searchInputRef = useRef<HTMLInputElement>(null);

  const categories = [
    "All",
    ...Array.from(new Set(projectsData.map((p) => p.category))),
  ];

  const filteredProjects = useMemo(() => {
    let projects =
      selectedCategory === "All"
        ? projectsData
        : projectsData.filter((p) => p.category === selectedCategory);

    // Apply search filter
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      projects = projects.filter(
        (p) =>
          p.title.toLowerCase().includes(query) ||
          p.description.toLowerCase().includes(query) ||
          p.category.toLowerCase().includes(query) ||
          p.technologies.some((t) => t.toLowerCase().includes(query))
      );
    }

    return projects;
  }, [selectedCategory, searchQuery]);

  // Calculate pagination
  const totalPages = Math.ceil(filteredProjects.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const paginatedProjects = filteredProjects.slice(startIndex, endIndex);

  const handleImageError = (projectId: string) => {
    setFailedImages((prev) => new Set([...prev, projectId]));
  };

  const handleSearchClear = () => {
    setSearchQuery("");
    setCurrentPage(1);
  };

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setCurrentPage(1);
    setSidebarOpen(false);
  };

  const handleClearAllFilters = () => {
    setSearchQuery("");
    setSelectedCategory("All");
    setCurrentPage(1);
    searchInputRef.current?.focus();
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(Math.max(1, Math.min(page, totalPages)));
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const generateColorForCategory = (category: string): string => {
    const colors = [
      "from-blue-500 to-blue-600",
      "from-purple-500 to-purple-600",
      "from-pink-500 to-pink-600",
      "from-green-500 to-green-600",
      "from-orange-500 to-orange-600",
      "from-red-500 to-red-600",
      "from-cyan-500 to-cyan-600",
      "from-indigo-500 to-indigo-600",
      "from-amber-500 to-amber-600",
      "from-emerald-500 to-emerald-600",
    ];
    const index = category.charCodeAt(0) % colors.length;
    return colors[index];
  };

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-slate-950 to-slate-900">
        <div className="flex h-full">
          {/* Sidebar - Category Filter */}
          <div
            className={`fixed lg:relative z-40 h-full bg-slate-900 border-r border-slate-700 transition-all duration-300 flex flex-col ${
              sidebarOpen ? "w-72" : "w-0 lg:w-72"
            }`}
          >
            {/* Sidebar Header */}
            <div className="p-6 border-b border-slate-700">
              <h2 className="text-lg font-bold text-white mb-2">Categories</h2>
              <p className="text-xs text-slate-400">Filter by category</p>
            </div>

            {/* Sidebar Content */}
            <ScrollArea className="flex-1">
              <div className="p-4 space-y-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => handleCategoryChange(category)}
                    className={`w-full text-left px-4 py-3 rounded-lg font-medium transition-all duration-200 ${
                      selectedCategory === category
                        ? "bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-950 shadow-lg shadow-cyan-400/50"
                        : "text-slate-300 hover:bg-slate-800 border border-transparent hover:border-cyan-400/30"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </ScrollArea>

            {/* Sidebar Footer */}
            <div className="p-4 border-t border-slate-700 space-y-2">
              <button
                onClick={() => setSelectedCategory("All")}
                className="w-full px-3 py-2 bg-slate-800 text-slate-300 hover:bg-slate-700 rounded-lg text-sm transition-colors"
              >
                Clear Filter
              </button>
            </div>
          </div>

          {/* Mobile Sidebar Toggle */}
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="lg:hidden fixed bottom-6 left-6 z-50 p-3 bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-950 rounded-full shadow-lg hover:shadow-xl transition-all"
          >
            {sidebarOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>

          {/* Mobile Overlay */}
          {sidebarOpen && (
            <div
              className="fixed inset-0 bg-black/50 z-30 lg:hidden"
              onClick={() => setSidebarOpen(false)}
            />
          )}

          {/* Main Content */}
          <div className="flex-1 flex flex-col overflow-hidden">
            <div className="flex-1 overflow-auto py-12 px-4 lg:px-8">
              <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="mb-12">
                  <h1 className="text-4xl lg:text-5xl font-bold text-white mb-2">
                    Our Projects
                  </h1>
                  <p className="text-slate-400 text-base lg:text-lg">
                    Explore our portfolio of successful projects across various
                    industries and technologies
                  </p>
                </div>

                {/* Search Bar */}
                <div className="mb-8">
                  <SearchInput
                    ref={searchInputRef}
                    placeholder="Search by name, category, technology, or description..."
                    value={searchQuery}
                    onChange={(e) => {
                      setSearchQuery(e.target.value);
                      setCurrentPage(1);
                    }}
                    onClear={handleSearchClear}
                  />
                </div>

                {/* Active Filters Info */}
                {(selectedCategory !== "All" || searchQuery.trim()) && (
                  <div className="mb-6 p-3 bg-slate-800 border border-slate-700 rounded-lg flex items-center justify-between">
                    <div className="text-sm text-slate-300">
                      {selectedCategory !== "All" && (
                        <span>
                          Filtering by:{" "}
                          <span className="text-cyan-400 font-semibold">
                            {selectedCategory}
                          </span>
                        </span>
                      )}
                      {searchQuery.trim() && (
                        <span className="ml-4">
                          Search:{" "}
                          <span className="text-cyan-400 font-semibold">
                            "{searchQuery}"
                          </span>
                        </span>
                      )}
                      <span className="ml-4 text-slate-400">
                        ({filteredProjects.length} result{filteredProjects.length !== 1 ? "s" : ""})
                      </span>
                    </div>
                    <button
                      onClick={handleClearAllFilters}
                      className="text-xs px-3 py-1 bg-slate-700 hover:bg-slate-600 text-slate-300 rounded transition-colors"
                    >
                      Clear All
                    </button>
                  </div>
                )}

                {/* Results Info */}
                {filteredProjects.length > 0 && (
                  <div className="mb-6 text-sm text-slate-400">
                    Showing <span className="text-cyan-400 font-semibold">{startIndex + 1}</span> to{" "}
                    <span className="text-cyan-400 font-semibold">
                      {Math.min(endIndex, filteredProjects.length)}
                    </span>{" "}
                    of <span className="text-cyan-400 font-semibold">{filteredProjects.length}</span> projects
                  </div>
                )}

                {/* Projects Grid */}
                {filteredProjects.length > 0 ? (
                  <>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                      {paginatedProjects.map((project) => (
                      <div
                        key={project.id}
                        className="group bg-slate-800 rounded-lg overflow-hidden border border-slate-700 hover:border-cyan-400/50 transition-all hover:shadow-lg hover:shadow-cyan-400/20 flex flex-col h-full"
                      >
                        {/* Project Image */}
                        <div className="relative h-48 overflow-hidden bg-slate-700 flex-shrink-0">
                          {failedImages.has(project.id) ? (
                            <div
                              className={`w-full h-full flex items-center justify-center bg-gradient-to-br ${generateColorForCategory(
                                project.category
                              )}`}
                            >
                              <div className="text-center">
                                <ImageOff className="w-8 h-8 text-white/40 mx-auto mb-2" />
                                <p className="text-xs text-white/50">
                                  {project.category.substring(0, 2).toUpperCase()}
                                </p>
                              </div>
                            </div>
                          ) : (
                            <>
                              <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                                onError={() => handleImageError(project.id)}
                                loading="lazy"
                                decoding="async"
                                width={400}
                                height={300}
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                            </>
                          )}
                        </div>

                        {/* Project Content */}
                        <div className="p-5 lg:p-6 flex flex-col flex-1">
                          {/* Category Badge */}
                          <div className="mb-3">
                            <span className="inline-block px-3 py-1 bg-cyan-400/20 text-cyan-400 rounded-full text-xs font-semibold">
                              {project.category}
                            </span>
                          </div>

                          {/* Title */}
                          <h3 className="text-lg lg:text-xl font-bold text-white mb-2 line-clamp-2">
                            {project.title}
                          </h3>

                          {/* Description */}
                          <p className="text-slate-400 text-sm mb-4 line-clamp-2 flex-1">
                            {project.description}
                          </p>

                          {/* Technologies */}
                          <div className="mb-4">
                            <div className="flex flex-wrap gap-2">
                              {project.technologies.slice(0, 2).map((tech) => (
                                <span
                                  key={tech}
                                  className="px-2 py-1 bg-slate-700 text-slate-300 text-xs rounded"
                                >
                                  {tech}
                                </span>
                              ))}
                              {project.technologies.length > 2 && (
                                <span className="px-2 py-1 bg-slate-700 text-slate-300 text-xs rounded">
                                  +{project.technologies.length - 2}
                                </span>
                              )}
                            </div>
                          </div>

                          {/* View Project Link */}
                          {project.link && (
                            <a
                              href={project.link}
                              className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-semibold text-sm transition-colors mt-auto"
                            >
                              View Project
                              <ExternalLink className="w-4 h-4" />
                            </a>
                          )}
                        </div>
                      </div>
                    ))}
                    </div>

                    {/* Pagination Controls */}
                    {totalPages > 1 && (
                      <div className="mt-12 flex flex-col items-center gap-4">
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => handlePageChange(currentPage - 1)}
                            disabled={currentPage === 1}
                            className="p-2 rounded-lg border border-slate-600 hover:border-cyan-400 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                            aria-label="Previous page"
                          >
                            <ChevronLeft className="w-5 h-5 text-slate-300" />
                          </button>

                          <div className="flex items-center gap-1">
                            {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                              let pageNum;
                              if (totalPages <= 5) {
                                pageNum = i + 1;
                              } else if (currentPage <= 3) {
                                pageNum = i + 1;
                              } else if (currentPage >= totalPages - 2) {
                                pageNum = totalPages - 4 + i;
                              } else {
                                pageNum = currentPage - 2 + i;
                              }

                              return (
                                <button
                                  key={pageNum}
                                  onClick={() => handlePageChange(pageNum)}
                                  className={`px-3 py-2 rounded-lg font-medium transition-all ${
                                    currentPage === pageNum
                                      ? "bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-950 shadow-lg shadow-cyan-400/50"
                                      : "bg-slate-800 text-slate-300 hover:bg-slate-700 border border-slate-700"
                                  }`}
                                >
                                  {pageNum}
                                </button>
                              );
                            })}
                          </div>

                          <button
                            onClick={() => handlePageChange(currentPage + 1)}
                            disabled={currentPage === totalPages}
                            className="p-2 rounded-lg border border-slate-600 hover:border-cyan-400 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                            aria-label="Next page"
                          >
                            <ChevronRight className="w-5 h-5 text-slate-300" />
                          </button>
                        </div>
                        <p className="text-sm text-slate-400">
                          Page <span className="text-cyan-400 font-semibold">{currentPage}</span> of{" "}
                          <span className="text-cyan-400 font-semibold">{totalPages}</span>
                        </p>
                      </div>
                    )}
                  </>
                ) : (
                  <div className="text-center py-20">
                    <ImageOff className="w-16 h-16 text-slate-600 mx-auto mb-4" />
                    <p className="text-slate-400 text-lg mb-4">
                      {searchQuery.trim()
                        ? `No projects found matching "${searchQuery}".`
                        : "No projects found in this category."}
                    </p>
                    <button
                      onClick={handleClearAllFilters}
                      className="px-6 py-2 bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-950 font-semibold rounded-lg hover:shadow-lg hover:shadow-cyan-400/50 transition-all"
                    >
                      View All Projects
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
