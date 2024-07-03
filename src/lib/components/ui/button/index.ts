import { type VariantProps, tv } from 'tailwind-variants';
import type { Button as ButtonPrimitive } from 'bits-ui';
import Root from './button.svelte';

import { variantStore } from '$lib/stores/editor';
import { derived } from 'svelte/store';

// Create a derived store to reactively generate buttonVariants
const buttonVariantsStore = derived(variantStore, ($variantStore) => tv($variantStore || {}));

let buttonVariants;
buttonVariantsStore.subscribe((value) => {
	buttonVariants = value;
});

type Variant = VariantProps<typeof buttonVariants>['variant'];
type Size = VariantProps<typeof buttonVariants>['size'];

type Props = ButtonPrimitive.Props & {
	variant?: Variant;
	size?: Size;
};

type Events = ButtonPrimitive.Events;

export {
	Root,
	type Props,
	type Events,
	//
	Root as Button,
	type Props as ButtonProps,
	type Events as ButtonEvents,
	buttonVariants
};
