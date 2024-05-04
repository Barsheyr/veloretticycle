import React from "react";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { User, MailIcon, ArrowRightIcon, MessageSquare } from "lucide-react";

const Contacts = () => {
  return (
    <section className="py-20">
      <div className="mt-20">
        <h1 className="text-6xl text-center font-primary"> Get In Touch </h1>

        <form className="flex flex-col gap-y-4 max-w-4xl px-10 mx-auto mt-20">
          <div className="relative flex items-center">
            <Input type="name" id="name" placeholder="FirstName" />
            <User className="absolute right-6" size={20} />
          </div>
          <div className="relative flex items-center">
            <Input type="name" id="name" placeholder="SecondName" />
            <User className="absolute right-6" size={20} />
          </div>
          <div className="relative flex items-center">
            <Input type="name" id="email" placeholder="Email" />
            <MailIcon className="absolute right-6" size={20} />
          </div>
          <div className="relative flex items-center">
            <Input type="name" id="name" placeholder="Company Name" />
            <User className="absolute right-6" size={20} />
          </div>
          <div className="relative flex items-center">
            <Input type="name" id="name" placeholder="Company Size" />
            <User className="absolute right-6" size={20} />
          </div>
          <div className="relative flex items-center">
            <Input type="text" id="name" placeholder="Number of Bikes" />
            <User className="absolute right-6" size={20} />
          </div>
          <div className="relative flex items-center">
            <Textarea placeholder="How can we help you" />
            <MessageSquare className="absolute right-6 top-2" size={20} />
          </div>

          <Button className="btn flex items-center gap-x-2">
            Sunbmit
            <ArrowRightIcon size={20} />
          </Button>
        </form>
      </div>
    </section>
  );
};

export default Contacts;
