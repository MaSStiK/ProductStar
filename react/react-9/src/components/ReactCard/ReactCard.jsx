import { Card, CardBody, CardTitle, CardSubtitle, CardText, Button } from "reactstrap"

export default function ReactCard({ data }) {
    return (
        <Card className="mb-4" style={{width: "300px"}}>
            <img src={`./${data.imageUrl}`} alt={data.title} />
            <CardBody>
                <CardTitle tag="h5">{data.title}</CardTitle>
                <CardSubtitle tag="h6" className="text-muted mb-4">{data.subtitle}</CardSubtitle>
                <CardText>{data.text}</CardText>
                <Button color="primary">{data.buttonText}</Button>
            </CardBody>
        </Card>
    )
}
