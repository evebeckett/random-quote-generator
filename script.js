function generate() {
    var quotes = {
      "- Lewis B. Smedes" : '"Forgiving does not erase the bitter past. A healed memory is not a deleted memory. Instead, forgiving what we cannot forget creates a new way to remember. We change the memory of our past into a hope for our future."',
      "- Maya Angelou" : '"The truth is, no one of us can be free until everybody is free."',
      "- Nelson Mandela" : '"For to be free is not merely to cast off one\'s chains, but to live in a way that respects and enhances the freedom of others."',
      "- Aristotle" : '"It is during our darkest moments that we must focus to see the light."',
      "- Ralph Waldo Emerson" : '"Do not go where the path may lead, go instead where there is no path and leave a trail."',
      "- Oscar Wilde" : '"Be yourself; everyone else is already taken."',
      "-Rob Siltanen" : '"Here\'s to the crazy ones. The misfits. The rebels. The troublemakers. The round pegs in the square holes. The ones who see things differently. They\'re not fond of rules. And they have no respect for the status quo. You can quote them, disagree with them, glorify or vilify them. About the only thing you can\'t do is ignore them. Because they change things. They push the human race forward. And while some may see them as the crazy ones, we see genius. Because the people who are crazy enough to think they can change the world, are the ones who do."',
      "-Neil Gaiman" : '"Fairy tales are more than true\: not because they tell us that dragons exist, but because they tell us that dragons can be beaten."',
      "-Terry Pratchett, Diggers" : '"The trouble with having an open mind, of course, is that people will insist on coming along and trying to put things in it."',
      "-Lao Tzu" : '"Being deeply loved by someone gives you strength, while loving someone deeply gives you courage."',
      "-Albert Einstein" : '"“Logic will get you from A to Z; imagination will get you everywhere."',
      "-Terry Pratchett, The Last Continent" : '"It is said that your life flashes before your eyes just before you die. That is true, it\'s called Life."'
    }

    var authors = Object.keys(quotes);

    var author = authors[Math.floor(Math.random() * authors.length)];

    var quote = quotes[author];

    document.getElementById('quote').innerHTML = quote;

    document.getElementById('author').innerHTML = author;
}