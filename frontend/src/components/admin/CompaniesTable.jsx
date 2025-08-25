import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import { Avatar, AvatarImage } from "@radix-ui/react-avatar";
import { Edit2, MoreHorizontal } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "@radix-ui/react-popover";

const CompaniesTable = () => {
  return (
    <div>
      <Table>
        <TableCaption>A list of your recent regisrtered companies</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Logo</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Date</TableHead>
            <TableHead className="text-right">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableCell>
            <Avatar>
              <AvatarImage src="https://www.shutterstock.com/shutterstock/photos/2174926871/display_1500/stock-vector-circle-line-simple-design-logo-blue-format-jpg-png-eps-2174926871.jpg" className="h-[50px]"/>
            </Avatar>
          </TableCell>
          <TableCell>Company Name</TableCell>
          <TableCell>18-07-2024</TableCell>
          <TableCell className="text-right cursor-pointer">
            <Popover>
                <PopoverTrigger>
                    <MoreHorizontal/>
                </PopoverTrigger>
            <PopoverContent className="w-32">
                <div className="flex item-center gap-2 w-fit cursor-pointer">
                    <Edit2 className="w-4"/>
                    <span>Edit</span>
                </div>
            </PopoverContent>
            </Popover>
          </TableCell>
        </TableBody>
      </Table>
    </div>
  );
};

export default CompaniesTable;
