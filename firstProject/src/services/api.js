const API_URL = 'https://api.example.com'; // Replace with your actual API URL

export const fetchProfiles = async () => {
    const response = await fetch(`${API_URL}/profiles`);
    if (!response.ok) throw new Error('Network response was not ok');
    return response.json();
};
