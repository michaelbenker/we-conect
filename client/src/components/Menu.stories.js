import React from "react";

import { Menu } from "./Menu";

export default {
  component: Menu,
  title: "Menu",
};

const menuItems = [
  {
    slug: "we-conect",
    title: "We-Conect Home page",
    url: "https://www.we-conect.com/",
    children: [
      {
        slug: "live-events",
        title: "Live Event",
        url: "https://www.we-conect.com/liveevents",
      },
      {
        slug: "digital-managed-events ",
        title: "Digital Managed Events ",
        url: "https://www.we-conect.com/l digital-managed-events ",
      },
    ],
  },
  { slug: "google", title: "Google", url: "https://www.google.de" },
];

const Template = (args) => <Menu {...args} />;

export const Default = Template.bind({});
Default.args = {
  items: menuItems,
  expand: "lg",
};

export const Mobile = Template.bind({});
Mobile.args = {
  items: menuItems,
  expand: false,
};
