import type { AnchorHTMLAttributes } from "react";

const ABSOLUTE_HTTP = /^https?:\/\//i;

/** An absolute http(s) address: another page or site, as opposed to an anchor (`#form`) or a path on this site (`/`). */
export function isExternalHref(href: string | undefined): boolean {
  return href !== undefined && ABSOLUTE_HTTP.test(href.trim());
}

/**
 * `target` and `rel` for a link: an external address opens in a new tab, and `noopener noreferrer` keeps the opened
 * page from reaching back into this one. `external` overrides the detection (`false` keeps an absolute link in the same tab).
 */
export function externalLinkProps(
  href: string | undefined,
  external?: boolean,
): Pick<AnchorHTMLAttributes<HTMLAnchorElement>, "target" | "rel"> {
  const opensNewTab = external ?? isExternalHref(href);
  return opensNewTab ? { target: "_blank", rel: "noopener noreferrer" } : {};
}
