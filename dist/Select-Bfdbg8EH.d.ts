import * as React from 'react';

interface SelectOption {
    value: string;
    label: string;
}
/**
 * A native `<select>` styled to match Input's filled/rounded-xl look, with a
 * trailing chevron (matching the ChevronDown already used in Navbar and
 * Accordion, not a new icon choice). Native, not a custom listbox — real
 * lead-gen forms (e.g. autopay.pl's /lp/payfac-08, which has four dropdowns)
 * need dropdown fields and this package had none. See AUDIT.md.
 *
 * `options` + `placeholder` cover the common case (a labeled list of
 * choices with an empty/disabled first option); pass `children` directly
 * instead if you need `<optgroup>`s or anything `options` can't express.
 */
interface SelectProps extends Omit<React.ComponentProps<"select">, "children"> {
    options?: SelectOption[];
    placeholder?: string;
    children?: React.ReactNode;
}
declare const Select: React.ForwardRefExoticComponent<Omit<SelectProps, "ref"> & React.RefAttributes<HTMLSelectElement>>;

export { Select as S, type SelectOption as a, type SelectProps as b };
