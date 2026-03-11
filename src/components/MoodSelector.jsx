import React, { useState } from "react";

function MoodSelector() {
    const [selectedMood, setSelectedMood] = useState(null);

    const moods = [
        { id: 1, label: "Happy", emoji: "😊", color: "bg-yellow-500" },
        { id: 2, label: "Sad", emoji: "😢", color: "bg-blue-500" },
        { id: 3, label: "Excited", emoji: "🤩", color: "bg-red-500" },
        { id: 4, label: "Relaxed", emoji: "😌", color: "bg-green-500" },
        { id: 5, label: "Adventurous", emoji: "🤠", color: "bg-orange-500" },
        { id: 6, label: "Scared", emoji: "😱", color: "bg-purple-500" },
        { id: 7, label: "Romantic", emoji: "🥰", color: "bg-pink-500" },
    ];

    const handleMoodSelect = (mood) => {
        setSelectedMood(mood.id === selectedMood ? null : mood.id);
    };

    return (
        <div className="min-h-screen bg-slate-950 text-white p-8">
            <h1 className="text-4xl font-bold text-center mb-8 text-yellow-400">
                How are you feeling today?
            </h1>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
                {moods.map((mood) => (
                    <button
                        key={mood.id}
                        onClick={() => handleMoodSelect(mood)}
                        className={`
              flex flex-col items-center justify-center p-6 rounded-xl transition-all duration-300 transform hover:scale-105
              ${selectedMood === mood.id
                                ? `${mood.color} text-white shadow-lg scale-105 ring-4 ring-white/20`
                                : "bg-slate-800 hover:bg-slate-700 text-slate-300"
                            }
            `}
                    >
                        <span className="text-4xl mb-3">{mood.emoji}</span>
                        <span className="text-lg font-semibold">{mood.label}</span>
                    </button>
                ))}
            </div>
        </div>
    );
}

export default MoodSelector;