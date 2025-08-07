import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

const ArticleSection = () => {
  return (
    <section className="w-full bg-[#f7f6f3] py-8 px-2 md:px-0">
      <div className="max-w-5xl mx-auto">
        <h2 className="font-semibold text-xl mb-4 text-[#43403B]">Latest articles</h2>
        <div className="bg-[#efeeeb] rounded-xl p-4 flex flex-col md:flex-row md:items-center gap-4 md:gap-0 justify-between">
          {/* Category navbar */}
          <nav className="flex gap-2 md:gap-4 flex-wrap">
            <Button
              variant="ghost"
              className="rounded-lg px-6 py-2 font-medium text-[#75716B] hover:text-[#43403B] hover:bg-[#d8d6d1] border border-transparent"
            >
              Highlight
            </Button>
            <Button
              variant="ghost"
              className="rounded-lg px-6 py-2 font-medium text-[#75716B] hover:text-[#43403B] hover:bg-[#d8d6d1]"
            >
              Dev
            </Button>
            <Button
              variant="ghost"
              className="rounded-lg px-6 py-2 font-medium text-[#75716B] hover:text-[#43403B] bg-transparent hover:bg-[#d8d6d1] border border-transparent"
            >
              Hobbies
            </Button>
            <Button
              variant="ghost"
              className="rounded-lg px-6 py-2 font-medium text-[#75716B] hover:text-[#43403B] bg-transparent hover:bg-[#d8d6d1] border border-transparent"
            >
              Art
            </Button>
          </nav>
          {/* Search box */}
          <form className="w-full md:w-72 flex items-center mt-2 md:mt-0">
            <Input
              type="text"
              placeholder="Search"
              className="rounded-lg bg-white border border-[#e2e1de] focus:ring-0 pr-10 relative"
            />
            <Button
              type="submit"
              size="icon"
              className="absolute right-4 md:right-20 bg-transparent hover:bg-transparent text-[#43403B]"
              tabIndex={-1}
              aria-label="Search"
            >
            </Button>
            <Search className="w-4 h-4 absolute right-22" />
          </form>
        </div>
      </div>
    </section>
  );
}

export default ArticleSection