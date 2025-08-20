import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

const ArticleNavbarDesktop = () => {

  const categories = ["Highlight", "Cat", "Inspiration", "General"];

  return (
    <div className="hidden md:flex bg-[#efeeeb] rounded-xl p-4 items-center justify-between">
      {/* Category buttons */}
      <nav className="flex gap-4 flex-wrap">
        {categories.map((label) => (
          <Button
            key={label}
            variant="ghost"
            className="rounded-lg px-6 py-2 font-medium text-[#75716B] hover:text-[#43403B] hover:bg-[#d8d6d1]"
          >
            {label}
          </Button>
        ))}
      </nav>

      {/* Search input */}
      <form className="w-72 relative">
        <Input
          type="text"
          placeholder="Search"
          className="rounded-lg bg-white border border-[#e2e1de] focus:ring-0 pr-10"
        />
        <Search className="w-4 h-4 absolute right-4 top-1/2 -translate-y-1/2 text-[#43403B]" />
      </form>
    </div>
  );
};

export default ArticleNavbarDesktop;
