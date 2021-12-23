import { EmptyPageContainer, EmptyPageImg, EmptyPageText } from "./EmptyPage.styles";

interface EmptyPageProps {
    text1: string,
    text2?: string,
}

export function EmptyPage({ text1, text2 }: EmptyPageProps) {
    return (
        <EmptyPageContainer>
            <EmptyPageImg />
            <EmptyPageText>{text1}</EmptyPageText>
            { text2 && ( <EmptyPageText>{text2}</EmptyPageText>) } 
        </EmptyPageContainer>
    )
}