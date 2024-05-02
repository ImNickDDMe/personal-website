<script lang="ts">
    import { Grid, Row, Column } from 'carbon-components-svelte';
</script>

<section id="intro">
    <Grid fullWidth={true} padding={true} condensed={true}>
        <Row>
            <Column sm={{ span: 4, offset: 0 }}>
                <h1 style="text-align: left;">Learn</h1>
            </Column>
            <Column sm={{ span: 3, offset: 1 }}>
                <h1>Create</h1>
            </Column>
            <Column sm={{ span: 2, offset: 2 }}>
                <h1>Observe</h1>
            </Column>
            <Column sm={{ span: 1, offset: 3 }}>
                <h1 style="text-align: right;">Repeat</h1>
            </Column>
        </Row>
    </Grid>
</section>

<style>
    #intro {
        margin: 32px;
    }

    #intro h1 {
        font-size: 64px;
        animation-duration: 3s;
        animation-timing-function: ease;
        animation-name: slidein;
    }

    @keyframes slidein {
        from {
            margin-left: 100%;
            width: 150%;
        }

        to {
            margin-left: 0%;
            width: 100%;
        }
    }
</style>