import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import posterImg from "@/assets/ai-bootcamp-poster.jpg";

const SprintBreakCamp = () => {
  return (
    <div className="bg-[hsl(210,30%,12%)] min-h-screen">
      {/* Poster */}
      <div className="max-w-3xl mx-auto px-4 py-12">
        <img
          src={posterImg}
          alt="AI Bootcamp – 1-Week Virtual Program for Ages 10–14. Introduction to Artificial Intelligence for Kids. 5 Days, 1.5 Hours per Day, Online via Google Classroom, Zero Experience Needed, Grades 5–8."
          className="w-full rounded-2xl shadow-2xl"
        />

        {/* CTA buttons below poster */}
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link to="/enrollment">
            <Button size="lg" className="gradient-accent border-0 text-accent-foreground font-bold px-8 py-6 hover:opacity-90">
              Register Now
            </Button>
          </Link>
          <Link to="/contact">
            <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10 font-semibold px-8 py-6">
              Contact Us
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SprintBreakCamp;
