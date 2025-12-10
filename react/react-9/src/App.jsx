import { Container, Row, Col } from "reactstrap" 
import { Grid } from "@mui/material"
import HomeworkCard from "./components/HomeworkCard/HomeworkCard"
import ReactCard from "./components/ReactCard/ReactCard"
import MaterialCard from "./components/MaterialCard/MaterialCard"
import Data from "./components/Data"

function App() {
    return (
        <article>
            <h2>Homework</h2>
            <section className="flex-row section-homework">
                {Data.map((item, i) => (
                    <HomeworkCard key={i} data={item} />
                ))}
            </section>

            <h2>Reactstrap</h2>
            <Container className="mb-2">
                <Row className="g-2">
                    {Data.map((item, i) => (
                        <Col key={i}>
                            <ReactCard data={item} />
                        </Col>
                    ))}
                </Row>
            </Container>

            <h2>Material UI</h2>
            <Grid container rowSpacing={2} columnSpacing={2}>
                {Data.map((item, i) => (
                    <Grid key={i}>
                        <MaterialCard data={item} />
                    </Grid>
                ))}
            </Grid>
        </article>
    )
}

export default App
