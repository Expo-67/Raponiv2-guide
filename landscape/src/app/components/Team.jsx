"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Leaf } from "lucide-react";
import gideon from "../assets/g2.jpg";
import joyce from "../assets/w1.jpg";
import members from "../assets/w2.jpg";
export default function Team() {
  const teamMembers = [
    {
      name: "Gideon Sekento",
      role: "Director",
      image: gideon,
    },
    {
      name: "Joyce Tipaya",
      role: "Manager",
      image: joyce,
    },
    {
      name: "Team Members",
      image: members,
    },
  ];

  return (
    <section id="team" className="py-20 bg-white">
      <div className="container mx-auto px-6 md:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center mb-3">
            <Leaf className="text-green-600 mr-2 h-5 w-5" />
            <span className="text-green-600 font-semibold uppercase tracking-wider">
              OUR EXPERTS
            </span>
          </div>
          <h2 className="text-4xl font-bold mt-2 text-green-900">
            Meet Our Team
          </h2>
          <div className="w-24 h-1 bg-yellow-500 mx-auto mt-6"></div>
          <p className="text-gray-600 mt-6 max-w-2xl mx-auto text-lg">
            Our dedicated team of professionals brings years of experience and
            passion to every project.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-black">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              className="text-center group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="relative h-72 w-72 mx-auto mb-6 rounded-2xl overflow-hidden shadow-lg group-hover:shadow-xl transition-all duration-300">
                <Image
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-green-900/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <h3 className="text-2xl font-bold text-green-900">
                {member.name}
              </h3>
              <p className="text-yellow-600 font-medium">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
