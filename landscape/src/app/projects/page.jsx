"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ChevronDown, ChevronUp } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import rubis from "../assets/rubis 2.jpg";
import rubis2 from "../assets/rubis.jpg";
import newR1 from "../assets/new r1.jpeg";
import newR2 from "../assets/new r2.jpeg";
import newR3 from "../assets/new r3.jpeg";
import newR4 from "../assets/new r4.jpeg";
import newR5 from "../assets/new r5.jpeg";
import karuri from "../assets/karuri.jpg";
import karuri2 from "../assets/karuri2.jpg";
import karuri3 from "../assets/karuri3.jpg";
import karuri4 from "../assets/karuri4.jpg";
import nyasingo from "../assets/nyasingo.jpg";
import nyasingo2 from "../assets/nyasingo2.jpg";
import dhl from "../assets/dhl.jpg";
import dhl2 from "../assets/l16.jpg";
import dhl3 from "../assets/l9.jpg";
import karuri5 from "../assets/karuri level 4 1.jpg"
import karuri6 from "../assets/karuri2 - Copy.jpg"
import kisaju1 from "../assets/kisaju 1.jpg"
import kisaju2 from "../assets/kisaju 3.jpg"
import kisaju3 from "../assets/kisaju 5.jpg"
import dragonfruit1 from "../assets/dragon fruit farming1.jpg"
import dragonfruit2 from "../assets/dragon fruit farming2.jpg"
export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [expandedProject, setExpandedProject] = useState(null);

  // Toggle project expansion
  const toggleProject = (projectId) => {
    if (expandedProject === projectId) {
      setExpandedProject(null);
    } else {
      setExpandedProject(projectId);
    }
  };

  //  projects
  const allProjects = [
    // rubis project
    {
      id: 1,
      title: "Rubis Commercial Landscaping",
      date: "14th Dec 2025 - 25th January 2026",
      description:
        "A complete commercial landscape transformation for Rubis, featuring drought-resistant plants, efficient irrigation systems, and custom hardscaping that complements their corporate identity.",
      image: rubis,
      category: "Commercial",
      status: "completed",
      client: "Rubis Energy Kenya",
      location:
        "Rubis Juja, Rubis Kayole, Rubis JogooRoad, Rubis MaiMahiu, Rubis Ngara, Rubis Pagani, Rubis Cabana",
      scope: [
        "Landscape design and planning",
        "Plant selection and installation",
        "Irrigation system design and installation",
        "Hardscaping elements",
        "Ongoing maintenance",
      ],
      challenges: [
        "Working within tight corporate timelines",
        "Integrating sustainable practices with aesthetic requirements",
        "Adapting to existing infrastructure",
      ],
      results: [
        "Enhanced visual appeal of the property",
        "Reduced water consumption through efficient irrigation",
        "Improved outdoor spaces for employees and visitors",
        "Sustainable landscape that requires minimal maintenance",
      ],
      galleryImages: [rubis2, newR1, newR2, newR3, newR4, newR5],
    },

    // Karuri project
    {
      id: 2,
      title: "Karuri Level 4 Hospital",
      date: "21st February 2025 - Completed",
      description:
        "A comprehensive landscaping project for Karuri Level 4 Hospital, featuring sustainable design elements, healing gardens, and accessible outdoor spaces for patients, staff, and visitors.",
      image: karuri,
      category: "Public Space",
      status: "completed",
      client: "Kiambu County Government",
      location: "Karuri, Kiambu County, Kenya",
      scope: [
        "Healing garden design and implementation",
        "Accessible pathways and seating areas",
        "Drought-resistant plant selection",
        "Shade structures and water features",
        "Maintenance planning",
      ],
      challenges: [
        "Creating therapeutic environments for patients",
        "Designing for accessibility and safety",
        "Working around existing hospital operations",
      ],
      results: [
        "Creation of healing spaces for patients and staff",
        "Improved hospital environment and aesthetics",
        "Enhanced outdoor accessibility",
        "Sustainable landscape with minimal maintenance requirements",
      ],
      galleryImages: [karuri, karuri2, karuri3, karuri4],
    },

    // Nyansiongo project
    {
      id: 3,
      title: "Nyansiongo Tea Factory Landscape Project",
      date: "October 2020 - August 2021",
      description:
        "Comprehensive landscape design and implementation for Nyansiongo Tea Factory, including creation of lawn gardens on 3 acres (12,000 SM) of land and installation of paving block driveways and walkways covering 2,000 SM.",
      image: nyasingo,
      category: "Commercial",
      status: "completed",
      client: "Nyansiongo Tea Factory",
      location: "Nyamira County, Kenya",
      scope: [
        "Large-scale lawn garden design and implementation",
        "Paving block driveways and walkways installation",
        "Drainage system design and implementation",
        "Native plant integration",
        "Maintenance training for staff",
      ],
      challenges: [
        "Managing a large-scale project",
        "Integrating landscape with factory operations",
        "Designing for heavy foot and vehicle traffic",
        "Implementing effective drainage solutions",
      ],
      results: [
        "Transformed factory grounds with beautiful lawn gardens",
        "Improved site accessibility  paved surfaces",
        "Enhanced corporate image and visitor experience",
        "Reduced maintenance costs through sustainable design",
      ],
      galleryImages: [nyasingo2, nyasingo],
    },

    //dhl project
    {
      id: 4,
      title: "DHL Corporate and Residential Projects",
      date: "August 2022",
      description:
        "A comprehensive landscape design for DHL's corporate campus and ground preparation at the former MD's residence in Kajiado, featuring sustainable design elements, efficient irrigation, and custom hardscaping.",
      image: dhl,
      category: "Commercial",
      status: "completed",
      client: "DHL Kenya",
      location: "Nairobi & Kajiado, Kenya",
      scope: [
        "Corporate campus landscape design",
        "Residential landscape planning",
        "Ground preparation and soil improvement",
        "Irrigation system design",
        "Plant selection and installation",
      ],
      challenges: [
        "Coordinating multiple project sites",
        "Balancing corporate and residential design needs",
        "Adapting to different soil conditions",
        "Implementing water-efficient systems",
      ],
      results: [
        "Cohesive landscape design across corporate and residential properties",
        "Improved soil quality and drainage",
        "Water-efficient irrigation systems",
        "Enhanced property values and aesthetics",
      ],
      galleryImages: [dhl2, dhl3],
    },

    // Kisaju project
    {
      id: 5,
      title: "Kisaju Landscaping Project",
      date: "August 2025 - September 2025",
      description:
        "A comprehensive landscaping project in Kisaju featuring sustainable design, efficient irrigation systems, and thoughtful plant selection. Currently under maintenance contract to ensure long-term landscape health and aesthetic appeal.",
      image: karuri, // Replace with actual Kisaju image when available
      category: "Commercial",
      status: "completed",
      client: "Private Client",
      location: "Kisaju, Kenya",
      scope: [
        "Landscape design and planning",
        "Plant selection and installation",
        "Irrigation system installation",
        "Hardscaping elements",
        "Ongoing maintenance contract",
      ],
      challenges: [
        "Working within project timelines",
        "Soil preparation and improvement",
        "Implementing water-efficient systems",
      ],
      results: [
        "Completed landscaping transformation",
        "Efficient irrigation system in place",
        "Active maintenance contract ensuring landscape health",
        "Enhanced property aesthetics and value",
      ],
      galleryImages: [karuri2, karuri3], // Replace with actual Kisaju images when available
    },
  ];

  // Filter projects based on active filter
  const filteredProjects =
    activeFilter === "All"
      ? allProjects
      : allProjects.filter((project) => project.category === activeFilter);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        {/* Hero Header */}
        <div className="bg-green-900 text-white py-16">
          <div className="container mx-auto px-4 md:px-6">
            <Link
              href="/"
              className="inline-flex items-center text-yellow-400 hover:text-yellow-300 transition-colors mb-6"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Our Projects
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl">
              Explore our portfolio of landscape design and implementation
              projects. Each project reflects our commitment to quality,
              sustainability, and beautiful design.
            </p>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="container mx-auto px-4 md:px-6 py-8">
          <div className="flex flex-wrap gap-2 mb-8">
            <button
              className={`px-4 py-2 rounded-md transition-colors ${
                activeFilter === "All"
                  ? "bg-green-800 text-white"
                  : "bg-white text-gray-900 border border-gray-300 hover:bg-gray-100"
              }`}
              onClick={() => setActiveFilter("All")}
            >
              All Projects
            </button>
            <button
              className={`px-4 py-2 rounded-md transition-colors ${
                activeFilter === "Commercial"
                  ? "bg-green-800 text-white"
                  : "bg-white text-gray-900 border border-gray-300 hover:bg-gray-100"
              }`}
              onClick={() => setActiveFilter("Commercial")}
            >
              Commercial
            </button>
            <button
              className={`px-4 py-2 rounded-md transition-colors ${
                activeFilter === "Residential"
                  ? "bg-green-800 text-white"
                  : "bg-white text-gray-900 border border-gray-300 hover:bg-gray-100"
              }`}
              onClick={() => setActiveFilter("Residential")}
            >
              Residential
            </button>
            <button
              className={`px-4 py-2 rounded-md transition-colors ${
                activeFilter === "Public Space"
                  ? "bg-green-800 text-white"
                  : "bg-white text-gray-900 border border-gray-300 hover:bg-gray-100"
              }`}
              onClick={() => setActiveFilter("Public Space")}
            >
              Public Space
            </button>
          </div>

          {/* Projects List */}
          <div className="space-y-12 mb-16">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                {/* Project Header */}
                <div className="relative h-[300px] md:h-[400px] w-full">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent">
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <div className="flex flex-wrap gap-3 mb-4">
                        <span className="bg-yellow-500 text-black text-sm font-medium px-3 py-1 rounded-full">
                          {project.category}
                        </span>
                        <span
                          className={`text-white text-sm font-medium px-3 py-1 rounded-full ${
                            project.status === "ongoing"
                              ? "bg-green-500"
                              : "bg-blue-500"
                          }`}
                        >
                          {project.status === "ongoing"
                            ? "Ongoing"
                            : "Completed"}
                        </span>
                      </div>
                      <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                        {project.title}
                      </h2>
                      <p className="text-white/80">{project.date}</p>
                    </div>
                  </div>
                </div>

                {/* Project Summary */}
                <div className="p-6 border-b border-gray-200">
                  <div className="flex justify-between items-center">
                    <div className="space-y-2">
                      <div className="flex items-center gap-4">
                        <div>
                          <span className="text-sm font-medium text-gray-500">
                            Client:
                          </span>
                          <span className="ml-2 text-gray-900">
                            {project.client}
                          </span>
                        </div>
                        <div>
                          <span className="text-sm font-medium text-gray-500">
                            Location:
                          </span>
                          <span className="ml-2 text-gray-900">
                            {project.location}
                          </span>
                        </div>
                      </div>
                      <p className="text-gray-700">{project.description}</p>
                    </div>
                    <button
                      onClick={() => toggleProject(project.id)}
                      className="flex items-center justify-center h-10 w-10 rounded-full bg-green-50 hover:bg-green-100 text-green-600 transition-colors"
                      aria-expanded={expandedProject === project.id}
                      aria-label={
                        expandedProject === project.id
                          ? "Collapse project details"
                          : "Expand project details"
                      }
                    >
                      {expandedProject === project.id ? (
                        <ChevronUp className="h-5 w-5" />
                      ) : (
                        <ChevronDown className="h-5 w-5" />
                      )}
                    </button>
                  </div>
                </div>

                {/* Expanded Project Details */}
                {expandedProject === project.id && (
                  <div className="p-6 bg-gray-50">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                      <div className="lg:col-span-2">
                        <h3 className="text-xl font-bold text-green-900 mb-4">
                          Project Overview
                        </h3>
                        <p className="text-gray-700 mb-6">
                          {project.description}
                        </p>

                        <h4 className="text-lg font-bold text-green-900 mb-3">
                          Challenges
                        </h4>
                        <ul className="list-disc pl-6 mb-6 space-y-1 text-gray-700">
                          {project.challenges.map((challenge, index) => (
                            <li key={index}>{challenge}</li>
                          ))}
                        </ul>

                        <h4 className="text-lg font-bold text-green-900 mb-3">
                          Results
                        </h4>
                        <ul className="list-disc pl-6 mb-6 space-y-1 text-gray-700">
                          {project.results.map((result, index) => (
                            <li key={index}>{result}</li>
                          ))}
                        </ul>

                        {/* Project Gallery */}
                        <h4 className="text-lg font-bold text-green-900 mb-3">
                          Project Gallery
                        </h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                          {project.galleryImages.map((image, index) => (
                            <div
                              key={index}
                              className="relative h-48 rounded-lg overflow-hidden shadow-md"
                            >
                              <Image
                                src={image || "/placeholder.svg"}
                                alt={`${project.title} - Image ${index + 1}`}
                                fill
                                className="object-cover"
                              />
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="lg:col-span-1">
                        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                          <h4 className="text-lg font-bold text-green-900 mb-4">
                            Project Details
                          </h4>

                          <div className="space-y-4">
                            <div>
                              <h5 className="font-medium text-gray-900">
                                Client
                              </h5>
                              <p className="text-gray-700">{project.client}</p>
                            </div>
                            <div>
                              <h5 className="font-medium text-gray-900">
                                Location
                              </h5>
                              <p className="text-gray-700">
                                {project.location}
                              </p>
                            </div>
                            <div>
                              <h5 className="font-medium text-gray-900">
                                Timeline
                              </h5>
                              <p className="text-gray-700">{project.date}</p>
                            </div>
                            <div>
                              <h5 className="font-medium text-gray-900">
                                Status
                              </h5>
                              <p className="text-gray-700 capitalize">
                                {project.status}
                              </p>
                            </div>
                            <div>
                              <h5 className="font-medium text-gray-900">
                                Scope of Work
                              </h5>
                              <ul className="list-disc pl-5 text-gray-700 space-y-1">
                                {project.scope.map((item, index) => (
                                  <li key={index}>{item}</li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </div>

                        <div className="mt-6 bg-green-50 p-6 rounded-lg shadow-sm border border-green-100">
                          <h4 className="text-lg font-bold text-green-900 mb-3">
                            Interested in a similar project?
                          </h4>
                          <p className="text-gray-700 mb-4">
                            Contact us today to discuss how we can transform
                            your space into a beautiful, sustainable landscape.
                          </p>
                          <Link
                            href="/#contact"
                            className="inline-block w-full bg-green-600 text-white text-center px-6 py-3 rounded-lg font-medium hover:bg-green-700 transition-colors"
                          >
                            Contact Us
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
