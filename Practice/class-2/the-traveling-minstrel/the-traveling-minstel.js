const total_song_knowers = (num_villagers, attendees_lists) => {
  // Initialize an array to keep track of known songs for each villager
  const songs_known = Array.from(
    { length: num_villagers },
    (_, i) => new Set([i + 1])
  );

  // Process each evening's attendees
  attendees_lists.forEach((attendees) => {
    // Check if the minstrel (represented by 0) is present
    const minstrel_present = attendees.includes(0);
    if (minstrel_present) {
      // If minstrel is present, each attendee learns a new unique song
      attendees.forEach((v) => {
        if (v !== 0) songs_known[v - 1].add(num_villagers + 1); // Add a new unique song
      });
    } else {
      // If minstrel is not present, attendees share their songs
      const all_songs = new Set();
      attendees.forEach((v) => {
        songs_known[v - 1].forEach((song) => all_songs.add(song));
      });
      attendees.forEach((v) => {
        songs_known[v - 1] = new Set(all_songs);
      });
    }
  });

  // Calculate the total number of unique songs known
  const total_songs = new Set();
  songs_known.forEach((set) => set.forEach((song) => total_songs.add(song)));

  // Calculate how many villagers know all the songs
  const all_songs_known_count = songs_known.filter(
    (songs) => songs.size === total_songs.size
  ).length;

  return all_songs_known_count;
};

// Example usage:
const num_villagers = 5;
const attendees_lists = [
  [2, 4],
  [0, 1, 2],
  [1, 3, 4],
  [1, 2],
  [0, 5],
  [3, 5],
];

console.log(total_song_knowers(num_villagers, attendees_lists));
