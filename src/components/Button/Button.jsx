import { ButtonLoadMore, Wrapper } from './Button.styled'

export const Button = ({onLoadMore}) => {
    return (
        <>
            <Wrapper>
            <ButtonLoadMore onClick={onLoadMore} type="button">Load More</ButtonLoadMore>
            </Wrapper>
        </>
    )
}