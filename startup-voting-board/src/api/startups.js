export async function fetchIdeas() {
    const response = await fetch("https://691499153746c71fe048e4c3.mockapi.io/ideas");
    if (!response.ok) {
        throw new Error("Failed to fetch ideas");
    }
    return response.json();
}