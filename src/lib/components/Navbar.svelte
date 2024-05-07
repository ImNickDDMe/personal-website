<script lang="ts">
    import { AppRail, AppRailAnchor } from '@skeletonlabs/skeleton';
    import logo from '$lib/assets/logo.svg';
    import { page } from '$app/stores';

    const routes: {
        text: string;
        href: URL['pathname'];
        icon: string;
    }[] = [
        {
            text: 'Home',
            href: '/',
            icon: 'https://www.svgrepo.com/download/499611/home.svg'
        },
        {
            text: 'About',
            href: '/about',
            icon: 'https://www.svgrepo.com/download/419535/profile-about-mobile-ui.svg'
        },
        {
            text: 'Blog',
            href: '/blog',
            icon: 'https://www.svgrepo.com/download/448937/blog.svg'
        },
        {
            text: 'Contact',
            href: '/contact',
            icon: 'https://www.svgrepo.com/download/486616/contact-details.svg'
        }
    ];
</script>

<AppRail height="h-full">
    <svelte:fragment slot="lead">
        <AppRailAnchor href="/">
            <img src={logo} alt="Website Logo">
        </AppRailAnchor>
    </svelte:fragment>
    {#each routes as { text, href, icon }}
        <AppRailAnchor selected={$page.url.pathname == href} {href} title={text}>
            <svelte:fragment slot="lead">
                <img src={icon} alt={text} class="h-10">
            </svelte:fragment>
        </AppRailAnchor>
    {/each}
    
    <svelte:fragment slot="trail">
        <AppRailAnchor href="/" target="_blank" title="Account">
            <svelte:fragment slot="lead">
                <img src="https://www.svgrepo.com/download/512317/github-142.svg" class="h-10" alt="Github">
            </svelte:fragment>
        </AppRailAnchor>
    </svelte:fragment>
</AppRail>