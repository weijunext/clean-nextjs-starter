import Link from "next/link";
import React from "react";
import { BsGithub, BsTwitterX, BsWechat } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { SiBuymeacoffee, SiJuejin } from "react-icons/si";

const footerLinks = [
  { name: "email", href: "mailto:weijunext@gmail.com", icon: MdEmail },
  { name: "twitter", href: "https://twitter.com/weijunext", icon: BsTwitterX },
  { name: "github", href: "https://github.com/weijunext/", icon: BsGithub },
  {
    name: "buyMeCoffee",
    href: "https://www.buymeacoffee.com/weijunext",
    icon: SiBuymeacoffee,
  },
  {
    name: "juejin",
    href: "https://juejin.cn/user/26044008768029",
    icon: SiJuejin,
  },
  {
    name: "weChat",
    href: "https://weijunext.com/make-a-friend",
    icon: BsWechat,
  },
];

const FooterLinks = () => {
  return (
    <div className="mx-auto flex flex-row items-center pb-2">
      {footerLinks.map((link) => (
        <Link
          key={link.name}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer nofollow"
          className="mx-3 flex max-w-[24px] flex-col items-center justify-center"
        >
          {link.icon &&
            React.createElement(link.icon, { className: "text-lg" })}
        </Link>
      ))}
    </div>
  );
};

export default FooterLinks;
