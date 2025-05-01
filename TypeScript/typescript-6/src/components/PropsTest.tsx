import { JSX } from "react"

type TCardProps = {
    title: string;
    description: string;
    imageUrl: string;
};

type TLayoutProps = {
    children: React.ReactNode;
};

type TLayoutProps2 = {
    children: React.ReactElement;
};

export default function Card(props: TCardProps): JSX.Element {
    const { title, description, imageUrl } = props;
    return (
        <div className="card">
            <img src={imageUrl} alt={title} />
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
    );
}