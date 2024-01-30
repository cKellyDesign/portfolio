import { Stack } from "react-bootstrap";
import { HeaderLink, headerLinks } from "../assets/data/model";

export const LinkStack = ({ className }: { className: string }) => (
  <Stack direction="horizontal" gap={3} className={`justify-content-center ${className}`}>
    {
      headerLinks.map(({ title, innerText, url, rel, target, label }: HeaderLink) => (
        <a key={title + url} href={url} rel={rel} target={target} aria-label={label || `Click to visit my ${title} page`}>{innerText}</a>
      ))
    }
  </Stack>
);

export default LinkStack;
