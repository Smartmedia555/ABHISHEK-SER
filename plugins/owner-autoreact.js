export async function all(m) {
    // Define an array of emojis
    const bot = global.db.data.settings[conn.user.jid] || {};
  
    if (!bot.autoreact) {
        return true;
    }

    const emojis = ['🦋', '☘️', '🌝', '✨', '💫', '🔥', '🎯', '⚙️', '❣️', '❤️', '⚠️',  "✅", "🟢", "✔", "⭕", "😋", "😍", "😘", "🥰", "🤪", "😇", "🥳", "💔", "☣", "⚠", "❌", "🛑", "❗", "‼", "⁉", "❓", "🔴", "😥", "😪", "😫", "😴", "🤐",  "😤", "😟", "😖", "😞", "🙁", "☹", "😰", "🥵", "🥶", "😱", "🥴", "👺","👽", "🤕", "🤒", "😷", "😎", "😼", "🙀", "🥺", "🤫", '🌼', '🌸', '🌷', '🌻', '🍀', '🌺', '🌴', '🌵', '🌾', '🌱', '🌿', '🍃', '🍂', '🍁', '🌰', '🍄', '🐚', '🍁', '🌰', '🍄', '🐚', '🍏', '🍎', '🍐', '🍊', '🍋', '🍌', '🍍', '🍎', '🍏'];

    // Select a random emoji from the array
    const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];

    // React with the selected random emoji
    m.react(randomEmoji);

    return !0;
}
