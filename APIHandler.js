class APIHandler {
    // Get all the characters from the API
    static async getAllCharacters() {
      try {
        const response = await axios.get('http://localhost:8000/characters');
        const characters = response.data;
        console.log(characters);
      } catch (error) {
        console.error('Error retrieving characters:', error);
      }
    }
  
    // Get a single character by id from the API
    static async getCharacterById(id) {
      try {
        const response = await axios.get(`http://localhost:8000/characters/${id}`);
        const character = response.data;
        console.log(character);
      } catch (error) {
        console.error('Error retrieving character:', error);
      }
    }
  
    // Create a new character
    static async createCharacter(data) {
      try {
        const response = await axios.post('http://localhost:8000/characters', data);
        console.log('Character created:', response.data);
      } catch (error) {
        console.error('Error creating character:', error);
      }
    }
  
    // Delete a character by id
    static async deleteCharacter(id) {
      try {
        const response = await axios.delete(`http://localhost:8000/characters/${id}`);
        console.log('Character deleted:', response.data);
      } catch (error) {
        console.error('Error deleting character:', error);
      }
    }
  
    // Edit a character by id
    static async editCharacter(id, data) {
      try {
        const response = await axios.put(`http://localhost:8000/characters/${id}`, data);
        console.log('Character edited:', response.data);
      } catch (error) {
        console.error('Error editing character:', error);
      }
    }
  }
  