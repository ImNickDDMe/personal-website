<script lang="ts">
    import { Grid, Row, Column, Tile } from 'carbon-components-svelte';
</script>

<header>
    <Tile light={true}>
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
                            <span>Home</span>
                        </a>
                    </Column>
                    <Column lg={2}>
                        <a href="/about">
                            <span>About</span>
                        </a>
                    </Column>
                    <Column lg={2}>
                        <a href="/projects">
                            <span>Projects</span>
                        </a>
                    </Column>
                    <Column lg={2}>
                        <a href="/contact">
                            <span>Contact</span>
                        </a>
                    </Column>
                </Row>
            </Grid>
        </nav>
    </Tile>
</header>


<style>
    header {
        border-bottom: 1px solid #161616;
    }

	#navbar {
        padding: 26px;
	}

	#navbar h2 {
		width: max-content;
        display: inline-block;
	}

    #navbar a {
        text-decoration: none;
        color: #161616;
        width: max-content;
    }

    #navbar a span {
        font-size: 30px;
        width: max-content;
        display: inline-block;
    }

    #navbar a:hover span {
        color: navy;
    }
</style>
