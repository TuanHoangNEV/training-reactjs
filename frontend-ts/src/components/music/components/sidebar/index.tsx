import * as C from './styles';
import { Home, Search } from '../../svgs';

type Props = {
    setGenre: (e: string) => void;
    setIsSearch: (e: boolean) => void;
    setIsFull: (e: boolean) => void;
    isSearch: boolean;
    isSidebar: boolean;
    setIsSidebar: (e: boolean) => void;
}

export const Sidebar = ({ setGenre, setIsSearch, setIsFull, isSearch, isSidebar, setIsSidebar }: Props) => {
    return (
        <C.Container isSidebar={isSidebar}>
            <div className='inicialSearch'>
                <div
                    onClick={() => (setGenre(''), setIsSearch(false), setIsFull(false), setIsSidebar(false))}
                    className='iniSearDivs'>
                    <p><Home /></p> Initial Page
                </div>

                <div
                    onClick={() => (setIsSearch(!isSearch), setIsSidebar(false))} className='iniSearDivs'>
                    <p><Search /></p> Search
                </div>
            </div>

            <div className='genres'>
                <h2>Genres</h2>
                <div
                    onClick={() => (setGenre('Traditional'), setIsSidebar(false),
                        setIsSearch(false))}>
                    Traditional
                </div>
                <div
                    onClick={() => (setGenre('Lofi'), setIsSidebar(false), setIsSearch(false))}>
                    Lofi
                </div>
            </div>
        </C.Container>
    )
} 