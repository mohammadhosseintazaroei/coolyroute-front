"use client";

import * as React from "react";
import { CaretSortIcon, CheckIcon } from "@radix-ui/react-icons";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { CompleteFurtherInformationDto } from "@/__generated__/graphql";
import { useQuery } from "@apollo/client";
import { GET_SKILLS_BRIEF } from "@/apis/skills.api";

export default function ComboBox() {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");

  const [formData, setFormData] =
    React.useState<CompleteFurtherInformationDto | null>(null);
  const { data, loading: getSKillsLoading } = useQuery(GET_SKILLS_BRIEF, {
    fetchPolicy: "network-only",
    onCompleted: (data) => {
      console.log(data);
    },
    onError: (err) => {
      console.log(err);
    },
  });
  const onSelectionChange = (key: React.Key | null) => {
    setFormData({ ...formData, skillId: Number(key) });
  };
  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="lg:w-[406px] h-14 w-[268px] justify-between bg-primary-lighter text-white rounded-xl mt-10"
        >
          <div className="flex flex-col items-start">
            <div className="text-[16px]">حوزه کاری</div>
            <div className="text-[12px] text-neutral-light">
              {value
                ? data?.getSkillsBrief.find((skill) => skill.name === value)
                    ?.name
                : "حوزه کاری خود را انتخاب کنید"}
            </div>
          </div>
          <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="lg:w-[406px] w-[268px] p-0">
        <Command>
          <CommandInput placeholder="جستجوی حوزه کاری..." className="h-9" />
          <CommandList>
            <CommandEmpty>حوزه کاری یافت نشد!</CommandEmpty>
            <CommandGroup>
              {data?.getSkillsBrief.map((skill) => (
                <CommandItem
                  key={skill.id}
                  value={skill.name}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "" : currentValue);
                    setOpen(false);
                  }}
                >
                  {skill.name}
                  <CheckIcon
                    className={cn(
                      "ml-auto h-4 w-4",
                      value === skill.name ? "opacity-100" : "opacity-0"
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
