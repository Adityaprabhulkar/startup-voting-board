export const API_URL = "https://6915dcd1465a9144626de9fb.mockapi.io/idea";

export const fetchIdeas = async () => {
    const response = await fetch(API_URL);
    const data = await response.json();
    return data;
}