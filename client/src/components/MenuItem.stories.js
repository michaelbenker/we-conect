import React from "react";

import { MenuItem } from "./MenuItem";

export default {
  component: MenuItem,
  title: "MenuItem",
};

const Template = (args) => <MenuItem {...args} />;

export const Default = Template.bind({});
Default.args = {
  menuData: {
    slug: "we-conect",
    title: "We-Conect Home page",
    url: "https://www.we-conect.com/",
  },
  subMenuItem: false,
};

export const Sub = Template.bind({});
Sub.args = {
  menuData: {
    slug: "digital-managed-events ",
    title: "Digital Managed Events ",
    url: "https://www.we-conect.com/l digital-managed-events ",
  },
  subMenuItem: true,
};
