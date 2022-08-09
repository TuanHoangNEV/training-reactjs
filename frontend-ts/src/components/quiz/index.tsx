// @ts-nocheck
import "./pages/global.css"
import type { FC, ReactElement } from "react"
import QuizCore from "./pages/quizGame/index"
import ChooseTopic from "./pages/chooseTopic/index"
import { QuizProvider } from "./contexts/QuizContext"
import { UniversalProvider } from "./contexts/UniversalContext"
import {
    Route,
    Routes
} from "react-router-dom";

const QuizGameHome: FC = (): ReactElement => {
    return (
        <>
            <UniversalProvider>
                <Routes>
                    <Route
                        path="/topic"
                        element={<ChooseTopic/>}
                    >
                    </Route>
                    <Route
                        path="/"
                        element={
                            <QuizProvider>
                                <QuizCore/>
                            </QuizProvider>
                        }
                    >
                    </Route>
                </Routes>
            </UniversalProvider>
        </>
    );
}

export default QuizGameHome;
