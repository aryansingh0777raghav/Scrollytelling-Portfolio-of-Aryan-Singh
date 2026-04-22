export default function About() {
  return (
    <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto w-full text-white border-t border-white/10">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
        
        {/* Left Column: Intro */}
        <div className="lg:col-span-5">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">About Me</h2>
          <p className="text-gray-400 text-lg leading-relaxed mb-6">
            Hi, I'm Aryan Singh! With a foundational background in Biology, I bring a unique perspective to technology, combining analytical skills with creativity. My journey from the sciences to tech has strengthened my adaptability and problem-solving abilities, focused entirely on developing practical digital solutions.
          </p>
          <p className="text-gray-400 text-lg leading-relaxed mb-6">
            I am a continuous learner passionate about emerging tech trends and innovative applications of programming. Whether it's building AI tools, robust web applications, or directing short films, I aim to create impactful digital experiences.
          </p>
          
          <h3 className="text-2xl font-semibold mb-4 text-white mt-8">Education</h3>
          <div className="space-y-4">
            <div>
              <h4 className="text-lg font-medium text-indigo-400">Bachelor of Computer Applications (BCA)</h4>
              <p className="text-sm text-gray-500">Institute of Technology and Management, Gorakhpur</p>
              <p className="text-xs text-gray-400 mt-1">Sep 2024 - Dec 2027</p>
            </div>
            <div>
              <h4 className="text-lg font-medium text-indigo-400">Intermediate</h4>
              <p className="text-sm text-gray-500">SR International Academy, Nathnagar</p>
              <p className="text-xs text-gray-400 mt-1">2022 - 2023</p>
            </div>
          </div>
        </div>

        {/* Right Column: Details */}
        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-12">
          
          {/* Experience */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-white">Experience</h3>
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-medium text-indigo-400">Python Training</h4>
                <p className="text-sm text-gray-500 mb-2">Data Culture Technology | Jun 2025 – Aug 2025</p>
                <p className="text-gray-400 text-sm">
                  Learned core Python concepts (data types, functions, OOP). Hands-on exercises, 
                  real-world implementation, and building practical solutions.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-medium text-indigo-400">Short Film Production</h4>
                <p className="text-sm text-gray-500 mb-2">CineOn Studio 7 | 2026</p>
                <p className="text-gray-400 text-sm">
                  Writer, Director, Actor, Musician, Editor for "The Night of Life". 
                  Handled creative direction, pacing, post-production, and final edit.
                </p>
              </div>
            </div>
          </div>

          {/* Skills */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-white">Skills</h3>
            
            <div className="mb-6">
              <h4 className="text-sm uppercase tracking-wider text-gray-500 mb-3">Technical</h4>
              <div className="flex flex-wrap gap-2">
                {["Python", "Pandas", "JAVA Basic", "C", "C++", "HTML", "Data Structures", "Algorithms", "SQL"].map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-white/5 border border-white/10 rounded-md text-sm text-gray-300">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-sm uppercase tracking-wider text-gray-500 mb-3">Creative</h4>
              <div className="flex flex-wrap gap-2">
                {["Writer", "Director", "Actor", "Musician", "Editor"].map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-white/5 border border-white/10 rounded-md text-sm text-gray-300">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            
          </div>

        </div>
      </div>
    </section>
  );
}
