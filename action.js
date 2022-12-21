const header = document.getElementById("header");
const noun = document.getElementById("noun");
const nouns = ["Actor", "Gold", "Painting", "Advertisement", "Grass", "Parrot", "Afternoon", "Greece", "Pencil", "Airport", "Guitar", "Piano", "Ambulance", "Hair", "Pillow"];
const adj = ["adorable","adventurous","aggressive","agreeable","alert","alive","amused","angry","annoyed","annoying","anxious","arrogant","ashamed","attractive","average"];
const verbs = ["Act","Answer","Approve","Arrange","Break","Build","Buy","Coach","Color","Cough","Create","Complete"]

const randomNoun = () => {
    const index = Math.floor(Math.random() * 15);
    const generatedNoun = nouns[index];
    noun.innerHTML = generatedNoun;
}

noun.addEventListener("click", randomNoun);
