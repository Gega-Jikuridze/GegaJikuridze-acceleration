import { StyledScrollTop } from "../assets/styles/Components"
import useTopScroll from "../hooks/useScrollTop"


const ScrollToTop = () => {

    const {handleScrollTop} = useTopScroll()

    return <StyledScrollTop onClick={handleScrollTop}>
        <i className='bx bx-caret-up-circle'></i>
    </StyledScrollTop>
}


export default ScrollToTop