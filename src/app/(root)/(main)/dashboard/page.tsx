import SearchForm from "@/components/forms/search-form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const page = () => {
  return (
    <section className="space-y-3">
      <SearchForm />
      <div className="flex items-center gap-3">
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Year" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="2020">2020</SelectItem>
            <SelectItem value="2019">2019</SelectItem>
            <SelectItem value="2018">2018</SelectItem>
            <SelectItem value="2017">2017</SelectItem>
            <SelectItem value="2016">2016</SelectItem>
          </SelectContent>
        </Select>
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Course" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="IT">IT</SelectItem>
            <SelectItem value="NAME">NAME</SelectItem>
            <SelectItem value="ESM">ESM</SelectItem>
            <SelectItem value="TCM">TCM</SelectItem>
          </SelectContent>
        </Select>
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Year level" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="1">1st</SelectItem>
            <SelectItem value="2">2nd</SelectItem>
            <SelectItem value="3">3rd</SelectItem>
            <SelectItem value="4">4th</SelectItem>
          </SelectContent>
        </Select>
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Category" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="light">Light</SelectItem>
            <SelectItem value="dark">Dark</SelectItem>
            <SelectItem value="system">System</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </section>
  );
};

export default page;
