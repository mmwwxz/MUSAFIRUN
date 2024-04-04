import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {ABOUT_PAGE, MAIN_PAGE, TOURS_PAGE} from '../utils/path.js';
import Layout from '../layout/Layout.jsx';
import ToursView from '../pages/tours/Tours.view.jsx';
import TourDetailsView from "../components/tourDetails/TourDetails.view.jsx";
import MainView from "../pages/main/Main.view.jsx";
import AboutView from "../pages/about/About.view.jsx";
import TourDetailsIntView from "../components/TourDetailsIntView/TourDetailsInt.view.jsx";

const MainRoutes = () => {
    const PUBLIC_ROUTES = [
        {
            id: 1,
            link: MAIN_PAGE,
            element: <MainView />,
        },
        {
            id: 2,
            link: TOURS_PAGE,
            element: <ToursView />,
        },
        {
            id: 3,
            link: ABOUT_PAGE,
            element: <AboutView />,
        },
    ];

    return (
        <React.Suspense fallback={<span>Loading...</span>}>
            <Router>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        {PUBLIC_ROUTES.map(({ id, link, element }) => (
                            <Route path={link} element={element} key={id} />
                        ))}
                        <Route path="/tours/:id" element={<TourDetailsView />} />
                        <Route path="/internal-tour-details/:id" element={<TourDetailsIntView />} />
                    </Route>
                </Routes>
            </Router>
        </React.Suspense>
    );
};

export { MainRoutes };
