<script lang="ts">
    import { Grid, Row, Column} from 'carbon-components-svelte';
</script>

<header>
	<nav id="navbar">
		<Grid fullWidth={true} condensed={true}>
            <Row>
                <Column lg={8}>
                    <a href="/">
                        <h2>Nikolaos Papanastasis</h2>
                    </a>
                </Column>
                <Column lg={2}>
                    <a href="/">
                        <h3>Home</h3>
                    </a>
                </Column>
                <Column lg={2}>
                    <a href="/about">
                        <h3>About</h3>
                    </a>
                </Column>
                <Column lg={2}>
                    <a href="/projects">
                        <h3>Projects</h3>
                    </a>
                </Column>
                <Column lg={2}>
                    <a href="/contact">
                        <h3>Contact</h3>
                    </a>
                </Column>
            </Row>
        </Grid>
	</nav>
</header>

<style>
    header {
        border-bottom: 1px solid #161616;
    }

	#navbar {
        padding: 48px;
	}

	#navbar h2 {
		width: max-content;
	}

    #navbar a {
        text-decoration: none;
        color: #161616;
        width: max-content;
    }

    #navbar a h3 {
        font-size: 28px;
        width: max-content;
    }

    #navbar a:hover h3 {
        color: navy;
    }
</style>
