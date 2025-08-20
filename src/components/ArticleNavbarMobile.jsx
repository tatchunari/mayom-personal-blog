import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";

const ArticleNavbarMobile = () => {

  const categories = ["Highlight", "Cat", "Inspiration", "General"];
  
  return (
    <div className="bg-[#efeeeb] px-4 py-6 md:hidden">
      <form className="mb-6 relative">
        <Input
          type="text"
          placeholder="Search"
          className="bg-white border border-[#d6d3cb] focus:ring-0 pr-12 text-base placeholder:text-[#75716B]"
        />
        <Search className="w-5 h-5 absolute right-4 top-1/2 -translate-y-1/2 text-[#75716B] pointer-events-none" />
      </form>
      <div className="mb-2 text-[#75716B] text-lg">Category</div>
      <Select>
        <SelectTrigger className="w-full h-14 border border-[#d6d3cb] bg-white text-[#75716B] px-4">
          <SelectValue placeholder="Highlight" />
        </SelectTrigger>
        <SelectContent className="bg-white border border-[#d6d3cb] text-[#75716B]">
          <SelectItem value="highlight" className="hover:bg-gray-100 cursor-pointer">Highlight</SelectItem>
          <SelectItem value="dev" className="hover:bg-gray-100 cursor-pointer">Dev</SelectItem>
          <SelectItem value="hobbies" className="hover:bg-gray-100 cursor-pointer">Hobbies</SelectItem>
          <SelectItem value="art" className="hover:bg-gray-100 cursor-pointer">Art</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};

export default ArticleNavbarMobile;
