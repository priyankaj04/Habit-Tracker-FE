import { BASE_URL, TOKEN } from './controller'

const API_ROUTES = {
    "GET_HABITS": `${BASE_URL}/api/habit/all`
}

export const GetHabits = async () => {
    try {
        console.log("Fetching habits from:", TOKEN, API_ROUTES.GET_HABITS);

        const response = await fetch(API_ROUTES.GET_HABITS, {
            method: "GET",
            mode: "cors",
            cache: "no-cache",
            credentials: "same-origin",
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + (TOKEN),
            },
            redirect: "follow",
            referrerPolicy: "no-referrer",
        });

        /* if (!response.ok) {
            const errorText = await response.text();
            throw new Error(`API Error: ${response.status} - ${errorText}`);
        } */

        return await response.json();
    } catch (error) {
        console.error("Error fetching habits:", error);
        return { error: error.message };
    }
};

export const UpdateHabits = async () => {
    try {

        const response = await fetch(API_ROUTES.GET_HABITS, {
            method: "GET",
            mode: "cors",
            cache: "no-cache",
            credentials: "same-origin",
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + (TOKEN),
            },
            redirect: "follow",
            referrerPolicy: "no-referrer",
        });

        /* if (!response.ok) {
            const errorText = await response.text();
            throw new Error(`API Error: ${response.status} - ${errorText}`);
        } */

        return await response.json();
    } catch (error) {
        console.error("Error fetching habits:", error);
        return { error: error.message };
    }
};