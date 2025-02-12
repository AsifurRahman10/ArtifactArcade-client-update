import { Title } from "../Component/Title";
import learn1 from "../assets/learn1.webp";
import learn2 from "../assets/learn2.jpg";

export default function LearnMore() {
  return (
    <div className="mt-[112px] min-h-screen">
      <Title
        title={"Learn More: The World of Historical Artifacts"}
        para={
          "Explore the stories, significance, and preservation of historical artifacts that have shaped human civilization."
        }
      ></Title>

      <div className="w-11/12 lg:w-9/12 mx-auto my-10">
        <h2 className="text-2xl font-medium text-gray-900">
          What Are Artifacts?
        </h2>
        <p className="text-gray-800 leading-relaxed mb-6">
          Artifacts are objects made or used by humans in the past, offering
          insights into ancient cultures, traditions, and daily life. These
          include tools, pottery, manuscripts, sculptures, and even clothing.
        </p>
        <h2 className="text-2xl font-medium text-gray-900 mt-4">
          Why Are Artifacts Important?
        </h2>
        <p className="text-gray-800 leading-relaxed mb-6">
          Artifacts are more than just ancient objects—they are windows into the
          past that help us understand human history, culture, and technological
          advancements.
        </p>
        <ul className="list-disc list-inside pl-6 mb-6">
          <li>
            Cultural Identity: Artifacts preserve the heritage and traditions of
            civilizations, helping modern societies connect with their
            ancestors.
          </li>
          <li>
            Historical Knowledge: They provide evidence of how people lived,
            what they believed, and how societies evolved over time.
          </li>
          <li>
            Scientific Discovery: Many artifacts, such as the Antikythera
            Mechanism, reveal lost knowledge and advanced technologies used by
            ancient civilizations.
          </li>
          <li>
            Preservation of Stories: Each artifact tells a story, from the tools
            used by early humans to the artistic expressions of different eras.
          </li>
          <li>
            Inspiration for the Future: Studying artifacts helps researchers,
            historians, and even engineers develop new ideas by learning from
            the past.
          </li>
        </ul>

        <h2 className="text-2xl font-medium text-gray-900 mt-4">
          How ArtifactArcade Can Help You
        </h2>

        {/* learner */}
        <div className="flex flex-col lg:flex-row gap-10 mt-4">
          {/* Left Side - Text Content */}
          <div className="flex-1">
            <h4 className="text-2xl font-semibold text-gray-900 mb-4">
              As a Learner
            </h4>
            <p className="text-lg text-gray-700 mb-4">
              Learn from a Global Community of Historians and Enthusiasts
            </p>
            <p className="text-gray-600 mb-6">
              ArtifactArcade connects you with a large community of passionate
              individuals who regularly share posts, discoveries, and insights.
              Whether you’re just beginning or deepening your knowledge, there's
              always something to explore.
            </p>
            <p className="font-semibold text-gray-700">Key Features:</p>
            <ul className="list-inside space-y-2 mt-4">
              <li className="flex items-start text-gray-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  className="mr-2 text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
                Collaborative Community: Participate in discussions and exchange
                ideas.
              </li>
              <li className="flex items-start text-gray-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  className="mr-2 text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
                Continuous Learning: Stay updated with the latest research and
                posts.
              </li>
              <li className="flex items-start text-gray-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  className="mr-2 text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
                Interactive Learning: Engage with quizzes and challenges.
              </li>
            </ul>
          </div>

          {/* Right Side - Image */}
          <div className="flex-1 max-w-md">
            <img
              src={learn1}
              className="w-full rounded-lg shadow-lg"
              alt="Learning Community"
            />
          </div>
        </div>

        {/* contributor */}
        <div className="flex flex-col lg:flex-row gap-10 mt-4">
          {/* Left Side - Text Content for Contributor */}
          <div className="flex-1">
            <h4 className="text-2xl font-semibold text-gray-900 mb-4">
              As a Contributor (Post Writer)
            </h4>
            <p className="text-lg text-gray-700 mb-4">
              Share Your Knowledge and Shape the Artifact Community
            </p>
            <p className="text-gray-600 mb-6">
              As a contributor, you play a crucial role in the ArtifactArcade
              community by sharing your discoveries, insights, and research
              about historical artifacts. Your posts help deepen everyone's
              understanding of the past and contribute to the collective
              knowledge of enthusiasts worldwide.
            </p>
            <p className="font-semibold text-gray-700">Key Benefits:</p>
            <ul className="list-inside space-y-2 mt-4">
              <li className="flex items-start text-gray-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  className="mr-2 text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
                Share Your Expertise: Write about the fascinating history of
                artifacts and discoveries.
              </li>
              <li className="flex items-start text-gray-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  className="mr-2 text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
                Build Your Reputation: Gain recognition within the community for
                your valuable contributions.
              </li>
              <li className="flex items-start text-gray-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  className="mr-2 text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
                Collaborate and Learn: Engage with other contributors and
                enthusiasts, fostering a deeper understanding of artifacts.
              </li>
            </ul>
          </div>

          {/* Right Side - Image for Contributor */}
          <div className="flex-1 max-w-md">
            <img
              src={learn2}
              className="w-full rounded-lg shadow-lg"
              alt="Contributor Community"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
