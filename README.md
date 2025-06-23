# Astro Icon - Automatically optimized sprite causes identical icons to disappear when main instance is hidden

## Description

Due to automatic sprite optimization, the mdi:heart icon — used both in my navbar (static) and in a dynamic list within a client island (client:only="vue") rendered as a component inside an Astro slot under the navbar (Astro layout structure) — disappears from the navbar when the dynamic list is empty. Somehow the icon in the dynamic list is the main instance with a symbol, so the navbar icon references that. When the list is empty, there is no icon instance to reference, causing the navbar icon to disappear.

The list’s icon rendering is controlled by Vue’s v-if. Using v-show can sometimes solve the issue, but not in every case. It fixes the linked repro but not the use case in my project, which involves showing a dynamic filtered list with counting and its own layout. Even if v-show could fix the issue, it would not be a suitable solution because, according to my research, v-if is usually better for a dynamic filtered list (with debounce) since it avoids keeping large DOM trees mounted unnecessarily. By the way, I have a favorite toggle implemented with v-show, and that does not cause the navbar icon to disappear.

I do not understand why an icon passed as a slot to a client island takes rendering precedence over the identical icon in the static navbar.

## Expected result

I propose that astro-icon should:

1. Give precedence to icons used in static Astro files over icons passed as slots to framework components.
2. Or ignore icons passed as slots for sprite optimization, since they are often conditionally rendered.
3. Or allow developers to assign precedence to icon instances, for example, by specifying an ID.
4. Or provide an option to disable sprite optimization for specific icons to prevent them from becoming the main reference instance.
