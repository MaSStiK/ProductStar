import { useState } from "react"
import {
    HWCard,
    HWCardImage,
    HWCardContent,
    HWCardTitle,
    HWCardSubtitle,
    HWCardText,
    HWButton
} from "./HomeworkCardStyle";

export default function HomeworkCard({ data }) {
    const [isActive, setIsActive] = useState(false);

    function toggleActive() {
        setIsActive(!isActive)
    }

    return (
        <HWCard $active={isActive}>
            <HWCardImage src={`./${data.imageUrl}`} alt={data.title} />
            <HWCardContent>
                <HWCardTitle>{data.title}</HWCardTitle>
                <HWCardSubtitle $active={isActive}>{data.subtitle}</HWCardSubtitle>
                <HWCardText>{data.text}</HWCardText>
                <HWButton $active={isActive} onClick={toggleActive}>{data.buttonText}</HWButton>
            </HWCardContent>
        </HWCard>
    )
}
