import { Box } from "@theme-ui/components";
import React from "react";
import "../styles/nav.css";

interface SubItem {
  txt: string;
  url?: string;
}

const NavCell = (props: { title: string; url?: string; subs?: SubItem[] }) => (
  <Box className="nav-box">
    <a
      className="nav-title"
      href={props.url ? props.url : "#"}
      style={{ cursor: props.url ? "pointer" : "auto" }}
    >
      {props.title}
    </a>
    {props.subs && props.subs.length > 0 ? (
      <Box className="nav-sub">
        {props.subs
          ? props.subs.map((item: SubItem, index: number) => (
              <a
                className="nav-sub-item"
                href={item.url}
                target="_blank"
                key={index}
              >
                {item.txt}
              </a>
            ))
          : null}
      </Box>
    ) : null}
  </Box>
);

export default NavCell;
