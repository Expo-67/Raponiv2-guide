"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import logo from "../assets/Logo Fin_page-0001(1).jpg";

export default function Footer() {
  return (
    <footer className="bg-green-900 text-white py-16">
      <div className="container mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div>
            <div className="flex items-center mb-6">
              <Image
                src={logo}
                alt="Raponi Gardens logo"
                width={80}
                height={60}
                className="rounded-full border-2 border-yellow-400"
              />
              <span className="ml-3 text-xl font-bold text-white">
                Raponi Gardens
              </span>
            </div>
            <p className="text-gray-300 mb-6">
              Creating beautiful, sustainable landscapes that enhance your
              property and lifestyle.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-xl mb-6 text-yellow-300">
              Quick Links
            </h3>
            <ul className="space-y-4">
              <li>
                <Link
                  href="#services"
                  className="hover:text-yellow-300 transition-colors flex items-center"
                >
                  <ChevronRight className="w-4 h-4 mr-2" />
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="#about"
                  className="hover:text-yellow-300 transition-colors flex items-center"
                >
                  <ChevronRight className="w-4 h-4 mr-2" />
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="#projects"
                  className="hover:text-yellow-300 transition-colors flex items-center"
                >
                  <ChevronRight className="w-4 h-4 mr-2" />
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href="#team"
                  className="hover:text-yellow-300 transition-colors flex items-center"
                >
                  <ChevronRight className="w-4 h-4 mr-2" />
                  Team
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-xl mb-6 text-yellow-300">Services</h3>
            <ul className="space-y-4">
              <li>
                <Link
                  href="#services"
                  className="hover:text-yellow-300 transition-colors flex items-center"
                >
                  <ChevronRight className="w-4 h-4 mr-2" />
                  Landscape Design
                </Link>
              </li>
              <li>
                <Link
                  href="#services"
                  className="hover:text-yellow-300 transition-colors flex items-center"
                >
                  <ChevronRight className="w-4 h-4 mr-2" />
                  Garden Maintenance
                </Link>
              </li>
              <li>
                <Link
                  href="#services"
                  className="hover:text-yellow-300 transition-colors flex items-center"
                >
                  <ChevronRight className="w-4 h-4 mr-2" />
                  Hardscaping
                </Link>
              </li>
              <li>
                <Link
                  href="#services"
                  className="hover:text-yellow-300 transition-colors flex items-center"
                >
                  <ChevronRight className="w-4 h-4 mr-2" />
                  CSR Activities
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-green-800 mt-12 pt-8 text-center text-gray-300">
          <p>
            &copy; 2026 All rights reserved | Made with ❤️ by redevops
          </p>
        </div>
      </div>
    </footer>
  );
}
